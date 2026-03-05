import Image from 'next/image';
import Link from 'next/link';

export default function CybersecurityProjects() {
  const projects = [
    {
      id: 0,
      slug: 'ssti1',
      title: 'PicoCTF: SSTI1',
      date: 'September 2025',
      description: 'A walkthrough of a Server-Side Template Injection in Jinja2, escaping the sandbox to achieve Remote Code Execution.',
      image: '/placeholder.png',
      link: '/projects/cybersecurity/ssti1'
    },
    {
      id: 1,
      slug: 'nosql-injection',
      title: 'PicoCTF: No SQL Injection',
      date: 'September 2025',
      description: 'A write-up on exploiting a NoSQL injection vulnerability in a MongoDB-backed Express application to bypass authentication.',
      image: '/placeholder.png',
      link: '/projects/cybersecurity/nosql-injection'
    },
    {
      id: 2,
      slug: 'eval',
      title: 'PicoCTF: 3v@l',
      date: 'September 2025',
      description: 'Exploiting a Python eval() vulnerability by bypassing regex blacklists to achieve Remote Code Execution.',
      image: '/placeholder.png',
      link: '/projects/cybersecurity/eval'
    },
    {
      id: 3,
      slug: 'soap',
      title: 'PicoCTF: SOAP',
      date: 'October 2025',
      description: 'A write-up on exploiting an XML External Entity (XXE) vulnerability through a SOAP endpoint to perform Local File Inclusion.',
      image: '/placeholder.png',
      link: '/projects/cybersecurity/soap'
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <Link href="/projects" className="text-sm text-gray-500 hover:underline self-start mb-4">
          &larr; Back to Categories
        </Link>
        <h1 className="text-4xl font-bold">Cybersecurity</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          Showcasing vulnerability assessments, penetration testing, and security hardening.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {projects.sort((a, b) => b.id - a.id).map((project) => (
          <Link href={project.link} key={project.slug} className="group flex flex-col rounded-xl bg-gray-50 dark:bg-gray-900 overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="w-full aspect-video relative bg-gray-200 dark:bg-gray-800">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                [Image: {project.slug}.png]
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
          </Link>
        ))}
      </div>
    </main>
  );
}