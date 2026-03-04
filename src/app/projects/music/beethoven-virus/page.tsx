import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the viewer with SSR disabled because OSMD relies on the window object
const SheetMusicViewer = dynamic(() => import('@/components/SheetMusicViewer'), { ssr: true });

export default function BeethovenVirusPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <Link href="/projects/music" className="text-sm text-gray-500 hover:underline self-start mb-4">
          &larr; Back to Music Projects
        </Link>
        <h1 className="text-4xl font-bold text-center">Beethoven Virus</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          Sheet music transcription and playback.
        </p>
      </div>
      
      <div className="w-full max-w-6xl">
        <SheetMusicViewer file="/scores/Beethoven_Virus.musicxml" />
      </div>
    </main>
  );
}
