import { Howl } from "howler";
import {
  volume as defaultVolume,
  ambientVolume as defaultAmbientVolume,
} from "@/constants/sounds";

export const ambient = new Howl({
  src: ["/sounds/ambient.mp3"],
  volume: defaultAmbientVolume,
  loop: true,
});

export const bookPage = new Howl({
  src: ["/sounds/book-page.mp3"],
  volume: defaultVolume,
});

export const cauldronBubbling = new Howl({
  src: ["/sounds/cauldron-bubbling.mp3"],
  volume: defaultVolume,
});

export const crow = new Howl({
  src: ["/sounds/crow.mp3"],
  volume: defaultVolume,
});

export const crystallBall = new Howl({
  src: ["/sounds/crystall-ball.mp3"],
  volume: defaultVolume,
});

export const door = new Howl({
  src: ["/sounds/door.mp3"],
  volume: defaultVolume,
});

export const cat = new Howl({
  src: ["/sounds/cat.mp3"],
  volume: defaultVolume,
});

export const playSound = (sound: Howl) => {
  sound.stop();
  sound.play();
};

export const sceneSounds: Record<string, Howl> = {
  bookPage,
  cauldronBubbling,
  crow,
  crystallBall,
  door,
  cat,
};
export const setGlobalVolume = (v: number) => {
  Object.values(sceneSounds).forEach((sound) => sound.volume(v));
  ambient.volume(v * 0.1);
};
