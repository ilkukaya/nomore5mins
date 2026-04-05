/**
 * Web Audio API manager with HTML5 Audio fallback.
 * Exports a singleton instance.
 */

class AudioManager {
  constructor() {
    /** @type {AudioContext|null} */
    this._context = null;
    /** @type {GainNode|null} */
    this._gainNode = null;
    /** @type {AudioBufferSourceNode|null} */
    this._source = null;
    /** @type {Map<string, AudioBuffer>} */
    this._cache = new Map();
    /** @type {HTMLAudioElement|null} */
    this._fallbackAudio = null;
    this._volume = 0.8;
    this._playing = false;
    this._useWebAudio = typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined';
  }

  /**
   * Initializes AudioContext. Must be called from a user gesture.
   */
  init() {
    if (this._context) return;

    if (this._useWebAudio) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this._context = new AudioCtx();
        this._gainNode = this._context.createGain();
        this._gainNode.gain.value = this._volume;
        this._gainNode.connect(this._context.destination);
      } catch {
        this._useWebAudio = false;
      }
    }
  }

  /**
   * Fetches and decodes audio from a URL, caching the result.
   * @param {string} url
   * @returns {Promise<AudioBuffer|string>} AudioBuffer for Web Audio, or url string for fallback
   */
  async loadSound(url) {
    if (!this._useWebAudio) {
      return url;
    }

    if (this._cache.has(url)) {
      return this._cache.get(url);
    }

    this.init();

    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await this._context.decodeAudioData(arrayBuffer);
      this._cache.set(url, audioBuffer);
      return audioBuffer;
    } catch (err) {
      console.warn('Failed to load sound via Web Audio, will use fallback:', err);
      this._useWebAudio = false;
      return url;
    }
  }

  /**
   * Plays a sound with optional looping and fade-in.
   * @param {string} url - URL of the audio file
   * @param {object} options
   * @param {boolean} options.loop - Whether to loop the sound (default: true)
   * @param {number} options.fadeIn - Fade-in duration in seconds (default: 3)
   */
  async play(url, options = {}) {
    const { loop = true, fadeIn = 3 } = options;

    this.stop(0);
    this.init();

    if (this._useWebAudio && this._context) {
      try {
        // Resume context if suspended (autoplay policy)
        if (this._context.state === 'suspended') {
          await this._context.resume();
        }

        const buffer = await this.loadSound(url);

        this._source = this._context.createBufferSource();
        this._source.buffer = buffer;
        this._source.loop = loop;
        this._source.connect(this._gainNode);

        // Fade in
        if (fadeIn > 0) {
          this._gainNode.gain.setValueAtTime(0, this._context.currentTime);
          this._gainNode.gain.linearRampToValueAtTime(
            this._volume,
            this._context.currentTime + fadeIn
          );
        } else {
          this._gainNode.gain.setValueAtTime(this._volume, this._context.currentTime);
        }

        this._source.start(0);
        this._playing = true;

        this._source.onended = () => {
          if (!loop) {
            this._playing = false;
          }
        };
        return;
      } catch (err) {
        console.warn('Web Audio playback failed, falling back to HTML5 Audio:', err);
      }
    }

    // HTML5 Audio fallback
    this._fallbackAudio = new Audio(url);
    this._fallbackAudio.loop = loop;
    this._fallbackAudio.volume = this._volume;
    try {
      await this._fallbackAudio.play();
      this._playing = true;
    } catch (err) {
      console.warn('HTML5 Audio playback failed:', err);
    }
  }

  /**
   * Stops the currently playing sound with an optional fade-out.
   * @param {number} fadeOut - Fade-out duration in seconds (default: 0.5)
   */
  stop(fadeOut = 0.5) {
    if (this._useWebAudio && this._source && this._context) {
      try {
        if (fadeOut > 0) {
          this._gainNode.gain.setValueAtTime(
            this._gainNode.gain.value,
            this._context.currentTime
          );
          this._gainNode.gain.linearRampToValueAtTime(
            0,
            this._context.currentTime + fadeOut
          );
          // Stop the source after fade-out completes
          const source = this._source;
          setTimeout(() => {
            try {
              source.stop();
            } catch {
              // Source may have already stopped
            }
          }, fadeOut * 1000);
        } else {
          this._source.stop();
        }
      } catch {
        // Source may have already stopped
      }
      this._source = null;
    }

    if (this._fallbackAudio) {
      this._fallbackAudio.pause();
      this._fallbackAudio.currentTime = 0;
      this._fallbackAudio = null;
    }

    this._playing = false;
  }

  /**
   * Sets the playback volume.
   * @param {number} value - Volume from 0 to 1
   */
  setVolume(value) {
    this._volume = Math.max(0, Math.min(1, value));

    if (this._gainNode && this._context) {
      this._gainNode.gain.setValueAtTime(this._volume, this._context.currentTime);
    }

    if (this._fallbackAudio) {
      this._fallbackAudio.volume = this._volume;
    }
  }

  /**
   * Whether audio is currently playing.
   * @returns {boolean}
   */
  get isPlaying() {
    return this._playing;
  }
}

/** Singleton audio manager instance */
const audioManager = new AudioManager();
export default audioManager;
export { AudioManager };
