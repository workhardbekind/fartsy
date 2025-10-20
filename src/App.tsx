import { Wind } from 'lucide-react';
import { sounds } from './data/sounds';
import SoundButton from './components/SoundButton';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Wind className="w-12 h-12 text-purple-600" />
            <h1 className="text-4xl font-bold text-purple-600">Fart Board</h1>
          </div>
          <p className="text-gray-600">Let 'er rip! Click the buttons to play sounds.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sounds.map((sound) => (
            <SoundButton key={sound.id} sound={sound} />
          ))}
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>🎵 Created for entertainment purposes only 💨</p>
          <p className="mt-2">Please use responsibly!</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
