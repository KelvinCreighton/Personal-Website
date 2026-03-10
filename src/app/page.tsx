import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-8 md:p-24 max-w-5xl mx-auto">
      {/* Intro Section */}
      <section className="w-full mb-20 text-center md:text-left flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Hi, I'm Kelvin
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            I am a Chapter Leader for OWASP Edmonton, the Vice President of
            Events for the University of Alberta's Cybersecurity Club (CHADS),
            and a 4th year Computer Science student at the University of Alberta
            with a strong interest in cybersecurity, particularly web
            exploitation and network security.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/resume"
              className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              My Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Project Highlights Section */}
      <section className="w-full">
        <h2 className="text-3xl font-bold mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
          Project Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Highlight 1 */}
          <Link href="/projects/cybersecurity" className="group block h-full">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 h-full transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-800">
                <img src="/images/projects/cyber-highlights.png" alt="Cybersecurity CTFs" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Cybersecurity CTFs
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  A collection of writeups and solutions for various Capture The
                  Flag challenges, demonstrating web exploitation techniques.
                </p>
              </div>
            </div>
          </Link>

          {/* Highlight 2 */}
          <Link
            href="/projects/auto/transmission-rebuild"
            className="group block h-full"
          >
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 h-full transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-800">
                <img src="/images/projects/transmission-title.jpg" alt="Transmission Rebuild" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Manual Transmission Rebuild
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  A complete teardown and rebuild of a 1989 Honda Accord LX
                  manual transmission. Detailed documentation of the process
                  from removal to reassembly.
                </p>
              </div>
            </div>
          </Link>

          {/* Add more highlights as needed */}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            See all projects &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
