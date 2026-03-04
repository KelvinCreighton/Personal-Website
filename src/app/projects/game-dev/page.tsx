import Image from 'next/image';
import Link from 'next/link';

export default function GameDevProjects() {
  const projects = [
    {
      id: 1,
      title: `Tank Game`,
      date: `Early Days`,
      description: `A top-down tank shooter game. Playable directly in your browser.`,
      image: `/images/projects/tank-game.png`,
      link: `/projects/game-dev/tank-game`
    },
    {
      id: 2,
      title: `My First Game`,
      date: `2016`,
      description: `The first JavaScript game I ever made. Playable directly in your browser.`,
      image: `/images/projects/my-first-game.png`,
      link: `/projects/game-dev/my-first-game`
    },
    ...Array.from({ length: 4 }).map((_, i) => ({
      id: i + 3,
      title: `Game Dev Project ${i + 2}`,
      date: `March 2026`,
      description: `A detailed description of the project goes here. Discussing what was accomplished, the tools used, and the final outcome of the work.`,
      image: `/placeholder.png`,
      link: `#`
    }))
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <Link href="/projects" className="text-sm text-gray-500 hover:underline self-start mb-4">
          &larr; Back to Categories
        </Link>
        <h1 className="text-4xl font-bold">Game Development</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          Showcasing interactive experiences, mechanics, and games.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {projects.map((project) => (
          <Link href={project.link} key={project.id} className="group flex flex-col rounded-xl bg-gray-50 dark:bg-gray-900 overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="w-full aspect-video relative bg-gray-200 dark:bg-gray-800">
              {project.image === '/placeholder.png' ? (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [Image: {project.id}.png]
                </div>
              ) : (
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
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
          </Link>
        ))}
      </div>
    </main>
  );
}