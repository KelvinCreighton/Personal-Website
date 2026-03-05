import Link from 'next/link';

export default function UFOGamePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <Link href="/projects/game-dev" className="text-sm text-gray-500 hover:underline self-start mb-4">
          &larr; Back to Game Dev Projects
        </Link>
        <h1 className="text-4xl font-bold text-center">UFO</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          A fun UFO game project. Playable directly in your browser.
        </p>
      </div>
      
      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex justify-center items-center mb-12" style={{ minHeight: '600px' }}>
        <iframe 
          src="/games/UFO/play.html" 
          className="w-full h-full border-0"
          style={{ minHeight: '600px' }}
          title="UFO Game"
        />
      </div>
    </main>
  );
}
