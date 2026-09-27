import { alarmAudio } from './audio';
import { storage } from './storage';

export interface SoundPicker {
  sound(): string;
}

/** Wires a <SoundPicker>: remembers choice/volume per tool, previews for 4 s. */
export function bindSoundPicker(root: HTMLElement, storageKey: string): SoundPicker {
  const picker = root.querySelector<HTMLElement>('[data-sound-picker]');
  const select = picker?.querySelector<HTMLSelectElement>('[data-sound]');
  const volume = picker?.querySelector<HTMLInputElement>('[data-volume]');
  const volumeOut = picker?.querySelector<HTMLElement>('[data-volume-out]');
  const test = picker?.querySelector<HTMLButtonElement>('[data-test-sound]');
  if (!picker || !select) return { sound: () => '/sounds/classic-ring.wav' };

  const saved = storage.getJSON<{ sound?: string; volume?: number }>(storageKey, {});
  if (saved.sound && [...select.options].some((o) => o.value === saved.sound)) select.value = saved.sound;
  if (volume && typeof saved.volume === 'number') volume.value = String(saved.volume);

  const applyVolume = () => {
    if (!volume) return;
    alarmAudio.setVolume(Number(volume.value) / 100);
    if (volumeOut) volumeOut.textContent = `${volume.value}%`;
  };
  applyVolume();

  const save = () => storage.setJSON(storageKey, { sound: select.value, volume: volume ? Number(volume.value) : undefined });

  let testing: number | null = null;
  const setTesting = (on: boolean) => {
    test?.querySelector('.test-play')?.classList.toggle('hidden', on);
    test?.querySelector('.test-stop')?.classList.toggle('hidden', !on);
    if (!on && testing) {
      clearTimeout(testing);
      testing = null;
    }
  };

  select.addEventListener('change', () => {
    save();
    alarmAudio.preload(select.value);
  });
  volume?.addEventListener('input', () => {
    applyVolume();
    save();
  });
  test?.addEventListener('click', () => {
    if (testing) {
      alarmAudio.stop();
      setTesting(false);
      return;
    }
    alarmAudio.unlock();
    alarmAudio.play(select.value, { loop: false, fadeIn: 0 });
    setTesting(true);
    testing = window.setTimeout(() => {
      alarmAudio.stop();
      setTesting(false);
    }, 4000);
  });

  return { sound: () => select.value };
}
