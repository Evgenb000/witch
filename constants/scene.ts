import {
  crow,
  cat,
  cauldronBubbling,
  bookPage,
  crystallBall,
} from "@/utils/sounds";

export type Scene = {
  id: number;
  title: string;
  scene: string;
  text: string;
};

export const sceneSounds: Record<number, Howl> = {
  1: crow,
  2: cat,
  3: cauldronBubbling,
  4: bookPage,
  5: crystallBall,
};

export const scenes: Scene[] = [
  {
    id: 1,
    title: "Return",
    scene: "A raven sits on a lectern with a book about herbs and mushrooms",
    text: "[Raven] — Caw... you've returned?\n[Witch] — The house missed me.\n[Raven] — Or you missed its secrets?\n[Narrator] The witch smiles. The air smells of wax and old pages, as if magic itself sleeps under a thin layer of dust. Candle flames tremble — the walls recognize their mistress. The house holds its breath, awaiting the first spell.",
  },
  {
    id: 2,
    title: "Calling a Friend",
    scene: "A cat steps out of the mirror, glowing with silver light",
    text: "[Narrator] The mirror shimmers like water’s surface. From its depths, a cat emerges — step by step, gliding along a moonbeam.\n[Witch] — Merlin… again from the mirror, not from a dream?\n[Cat] — And you still call only when it’s late.\n[Narrator] He shakes his fur, eyes lazy but warm. Between them — an old bond, forgotten only for a while. The room falls silent: magic has found its voice again.",
  },
  {
    id: 3,
    title: "Potion Brewing",
    scene: "A cauldron boils, green steam rising upward",
    text: "[Narrator] The room fills with the scent of herbs and smoke. The witch throws into the cauldron a pinch of moon dust, dew from moss, and a breath of wind. Green vapor swirls upward, reflecting faces from the past.\n[Cat] — Again you brew what already lives on its own.\n[Raven] — Caw! At least it won’t explode this time?\n[Witch] — Then it means it’s working.\n[Narrator] In every bubble — a memory. In every breath — a risk.",
  },
  {
    id: 4,
    title: "Memory of Pages",
    scene: "Books come alive, shelves shift, one floats before the witch",
    text: "[Narrator] Books whisper, turning their pages without hands. Some greet their mistress, others hide deep within the shelves.\n[Witch] — Don’t be afraid. I came to read, not to judge.\n[Narrator] One book floats before her and opens by itself. From its pages rise whispers of forgotten names — and among them, her own. Dust sparkles in the air like stars, and the witch realizes: the past has been waiting for this moment.",
  },
  {
    id: 5,
    title: "Prophecy",
    scene: "The witch sits at a table with a book and a crystal ball",
    text: "[Narrator] The house is fully awake now. The witch sits at the table, where the orb glows, reflecting shadows of the past.\n[Raven] — Caw... too late to change your mind.\n[Cat] — But just in time to act.\n[Narrator] The book opens on its own, pages rustling as words flare in the air: 'What has begun must be completed.'\n[Witch] — So be it.\n[Narrator] The orb flashes bright, and time begins to move once more.",
  },
];
