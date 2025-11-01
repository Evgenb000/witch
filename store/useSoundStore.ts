import { create } from "zustand";
import { ambient } from "@/utils/sounds";
import { sceneSounds } from "@/constants/scene";

interface SoundState {
  volume: number;
  ambientVolume: number;
  setVolume: (v: number) => void;
  setAmbientVolume: (v: number) => void;
  increaseVolume: () => void;
  decreaseVolume: () => void;
}

export const useSoundStore = create<SoundState>((set, get) => ({
  volume: 0.05,
  ambientVolume: 0.005,

  setVolume: (v: number) => {
    Object.values(sceneSounds).forEach((sound) => sound.volume(v));
    set({ volume: v });
  },

  setAmbientVolume: (v: number) => {
    ambient.volume(v);
    set({ ambientVolume: v });
  },

  increaseVolume: () => {
    const newVolume = Math.min(get().volume + 0.05, 1);
    get().setVolume(newVolume);
    get().setAmbientVolume(newVolume * 0.1);
  },

  decreaseVolume: () => {
    const newVolume = Math.max(get().volume - 0.05, 0);
    get().setVolume(newVolume);
    get().setAmbientVolume(newVolume * 0.1);
  },
}));
