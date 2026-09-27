/**
 * Alarm audio. Uses Web Audio (precise looping, fade-in, works in background tabs
 * once unlocked) with a synthesized beep as a last-resort fallback.
 */
type Ctx = AudioContext;

class AlarmAudio {
  private ctx: Ctx | null = null;
  private gain: GainNode | null = null;
  private source: AudioScheduledSourceNode | null = null;
  private beepTimer: number | null = null;
  private cache = new Map<string, Promise<AudioBuffer | null>>();
  private volume = 0.8;
  private listeners = new Set<(unlocked: boolean) => void>();

  constructor() {
    const unlock = () => this.unlock();
    ['pointerdown', 'keydown', 'touchend'].forEach((type) => addEventListener(type, unlock, { passive: true }));
  }

  private context(): Ctx | null {
    if (this.ctx) return this.ctx;
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    this.ctx = new Ctor();
    this.gain = this.ctx.createGain();
    this.gain.gain.value = this.volume;
    this.gain.connect(this.ctx.destination);
    this.ctx.addEventListener('statechange', () => this.emit());
    return this.ctx;
  }

  /** Must run inside a user gesture at least once per page load on most browsers. */
  unlock() {
    const ctx = this.context();
    if (!ctx) return;
    if (ctx.state !== 'running') {
      ctx.resume().then(() => this.emit(), () => {});
      // iOS needs a (silent) sound started inside the gesture.
      const buffer = ctx.createBuffer(1, 1, 22050);
      const src = ctx.createBufferSource();
      src.buffer = buffer;
      src.connect(ctx.destination);
      src.start(0);
    }
  }

  get unlocked(): boolean {
    return this.ctx?.state === 'running';
  }

  onUnlockChange(fn: (unlocked: boolean) => void) {
    this.listeners.add(fn);
  }

  private emit() {
    this.listeners.forEach((fn) => fn(this.unlocked));
  }

  setVolume(value: number) {
    this.volume = Math.min(1, Math.max(0, value));
    if (this.gain && this.ctx) this.gain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.02);
  }

  preload(url: string) {
    this.load(url);
  }

  private load(url: string): Promise<AudioBuffer | null> {
    const ctx = this.context();
    if (!ctx) return Promise.resolve(null);
    if (!this.cache.has(url)) {
      this.cache.set(
        url,
        fetch(url)
          .then((r) => r.arrayBuffer())
          .then((data) => new Promise<AudioBuffer>((resolve, reject) => ctx.decodeAudioData(data, resolve, reject)))
          .catch(() => null),
      );
    }
    return this.cache.get(url)!;
  }

  async play(url: string, { loop = true, fadeIn = 2 }: { loop?: boolean; fadeIn?: number } = {}) {
    this.stop();
    const ctx = this.context();
    if (!ctx || !this.gain) return;
    if (ctx.state !== 'running') await ctx.resume().catch(() => {});
    const now = ctx.currentTime;
    this.gain.gain.cancelScheduledValues(now);
    this.gain.gain.setValueAtTime(fadeIn ? 0.0001 : this.volume, now);
    if (fadeIn) this.gain.gain.exponentialRampToValueAtTime(Math.max(this.volume, 0.0001), now + fadeIn);

    const buffer = await this.load(url);
    if (buffer) {
      const src = ctx.createBufferSource();
      src.buffer = buffer;
      src.loop = loop;
      src.connect(this.gain);
      src.start();
      this.source = src;
    } else {
      this.beep(loop);
    }
  }

  /** Synthesized fallback: a repeating two-tone beep. */
  private beep(loop: boolean) {
    const ctx = this.ctx!;
    const burst = () => {
      [0, 0.25].forEach((offset) => {
        const osc = ctx.createOscillator();
        osc.type = 'square';
        osc.frequency.value = 880;
        osc.connect(this.gain!);
        osc.start(ctx.currentTime + offset);
        osc.stop(ctx.currentTime + offset + 0.15);
      });
    };
    burst();
    if (loop) this.beepTimer = window.setInterval(burst, 1000);
  }

  stop() {
    if (this.source) {
      try {
        this.source.stop();
      } catch {
        /* already stopped */
      }
      this.source.disconnect();
      this.source = null;
    }
    if (this.beepTimer) {
      clearInterval(this.beepTimer);
      this.beepTimer = null;
    }
  }

  get playing(): boolean {
    return !!this.source || !!this.beepTimer;
  }
}

export const alarmAudio = new AlarmAudio();
