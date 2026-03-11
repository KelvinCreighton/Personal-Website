import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <main className="flex flex-col items-center p-6 md:p-12 lg:p-24 w-full">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl px-2 md:px-0">
        {/* Category 1: Cybersecurity */}
        <Link
          href="/projects/cybersecurity"
          className="group flex flex-col items-center justify-center p-8 border rounded-xl hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors"
        >
          <div className="mb-4 group-hover:scale-110 transition-transform dark:invert">
            <Image
              src="/icons/cybersecurity.svg"
              alt="Cybersecurity"
              width={128}
              height={128}
            />
          </div>
          <h2 className="text-xl font-semibold text-center">Cybersecurity</h2>
        </Link>

        {/* Category 2: Auto Repair & Maintenance */}
        <Link
          href="/projects/auto"
          className="group flex flex-col items-center justify-center p-8 border rounded-xl hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors"
        >
          <div className="mb-4 group-hover:scale-110 transition-transform dark:invert">
            <Image
              src="/icons/auto.svg"
              alt="Auto Repair"
              width={128}
              height={128}
            />
          </div>
          <h2 className="text-xl font-semibold text-center">Automotive</h2>
        </Link>

        {/* Category 3: Game Development */}
        <Link
          href="/projects/game-dev"
          className="group flex flex-col items-center justify-center p-8 border rounded-xl hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors"
        >
          <div className="mb-4 group-hover:scale-110 transition-transform dark:invert">
            <Image
              src="/icons/game-dev.svg"
              alt="Game Development"
              width={128}
              height={128}
            />
          </div>
          <h2 className="text-xl font-semibold text-center">Game Dev</h2>
        </Link>

        {/* Category 4: Music Production */}
        <Link
          href="/projects/music"
          className="group flex flex-col items-center justify-center p-8 border rounded-xl hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors"
        >
          <div className="mb-4 group-hover:scale-110 transition-transform dark:invert">
            <Image
              src="/icons/music.svg"
              alt="Music Production"
              width={128}
              height={128}
            />
          </div>
          <h2 className="text-xl font-semibold text-center">Music</h2>
        </Link>
      </div>
    </main>
  );
}
