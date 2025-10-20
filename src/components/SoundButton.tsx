import { useState } from 'react';
import type { SoundEffect } from '../data/sounds';
import { Volume2, Volume2Off } from 'lucide-react';

interface Props {
  sound: SoundEffect;
}

export default function SoundButton({ sound }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(sound.file));

  const playSound = () => {
    audio.currentTime = 0;
    audio.play();
    setIsPlaying(true);
    audio.onended = () => setIsPlaying(false);
  };

  return (
    <button
      onClick={playSound}
      disabled={isPlaying}
      className="relative group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex flex-col items-center justify-center gap-3 min-w-[200px]"
    >
      <div className="text-4xl">{sound.icon}</div>
      <div className="text-xl font-bold text-purple-600">{sound.name}</div>
      <p className="text-gray-600 text-sm text-center">{sound.description}</p>
      <div className="absolute top-2 right-2">
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-green-500" />
        ) : (
          <Volume2Off className="w-5 h-5 text-gray-400" />
        )}
      </div>
    </button>
  );
}
