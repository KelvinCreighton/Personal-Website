import Image from 'next/image';
import Link from 'next/link';

export default function MusicProjects() {
  // 6 Placeholders
  const projects = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: `Music Project ${i + 1}`,
    date: `March 2026`,
    description: `A detailed description of the track, album, or performance goes here. Discussing the creative process, instruments used, and final production.`,
    image: `/placeholder.png`
  }));

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <Link href="/projects" className="text-sm text-gray-500 hover:underline self-start mb-4">
          &larr; Back to Categories
        </Link>
        <h1 className="text-4xl font-bold">Music Production</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          Showcasing compositions, recordings, and audio engineering projects.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {projects.map((project) => (
          <div key={project.id} className="group flex flex-col rounded-xl bg-gray-50 dark:bg-gray-900 overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="w-full aspect-video relative bg-gray-200 dark:bg-gray-800">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                [Image: {project.id}.png]
              </div>
            </div>
            <div className="flex flex-col items-start p-6 flex-grow">
              <h2 className="text-xl font-bold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h2>
              <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">
                {project.date}
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}