import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-12">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {/* Category 1: Auto Repair & Maintenance */}
        <Link href="/projects/auto" className="group flex flex-col items-center justify-center p-8 border rounded-xl hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors">
          <div className="mb-4 group-hover:scale-110 transition-transform dark:invert">
            <Image src="/icons/auto.svg" alt="Auto Repair" width={128} height={128} />
          </div>
          <h2 className="text-xl font-semibold text-center">Automotive</h2>
        </Link>

        {/* Category 2: Cybersecurity */}
        <Link href="/projects/cybersecurity" className="group flex flex-col items-center justify-center p-8 border rounded-xl hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors">
          <div className="mb-4 group-hover:scale-110 transition-transform dark:invert">
            <Image src="/icons/cybersecurity.svg" alt="Cybersecurity" width={128} height={128} />
          </div>
          <h2 className="text-xl font-semibold text-center">Cybersecurity</h2>
        </Link>

        {/* Category 3: Software Engineering */}  
        <Link href="/projects/software" className="group flex flex-col items-center justify-center p-8 border rounded-xl hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors">
          <div className="mb-4 group-hover:scale-110 transition-transform dark:invert">
            <Image src="/icons/software.svg" alt="Software Engineering" width={128} height={128} />
          </div>
          <h2 className="text-xl font-semibold text-center">Software</h2>
        </Link>

        {/* Category 4: Music Production */}  
        <Link href="/projects/music" className="group flex flex-col items-center justify-center p-8 border rounded-xl hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors">
          <div className="mb-4 group-hover:scale-110 transition-transform dark:invert">
            <Image src="/icons/music.svg" alt="Music Production" width={128} height={128} />
          </div>
          <h2 className="text-xl font-semibold text-center">Music</h2>
        </Link>
      </div>
    </main>
  );
}