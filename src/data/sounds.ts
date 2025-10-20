export interface SoundEffect {
  id: string;
  name: string;
  description: string;
  file: string;
  icon: string;
}

export const sounds: SoundEffect[] = [
  {
    id: "wet",
    name: "Wet Willie",
    description: "A wet and juicy one",
    file: "https://www.soundjay.com/human/sounds/fart-01.mp3",
    icon: "💦"
  },
  {
    id: "squeaky",
    name: "Squeaky Clean",
    description: "High-pitched squeaker",
    file: "https://www.soundjay.com/human/sounds/fart-02.mp3",
    icon: "🎵"
  },
  {
    id: "trumpet",
    name: "Trumpet Solo",
    description: "Like a brass section",
    file: "https://www.soundjay.com/human/sounds/fart-03.mp3",
    icon: "🎺"
  },
  {
    id: "ripper",
    name: "The Ripper",
    description: "Tears through the fabric of space-time",
    file: "https://www.soundjay.com/human/sounds/fart-04.mp3",
    icon: "⚡"
  },
  {
    id: "quick",
    name: "Quick Shot",
    description: "Short but deadly",
    file: "https://www.soundjay.com/human/sounds/fart-05.mp3",
    icon: "💨"
  },
  {
    id: "rumble",
    name: "The Rumbler",
    description: "Low and ominous",
    file: "https://www.soundjay.com/human/sounds/fart-06.mp3",
    icon: "🌋"
  }
];
