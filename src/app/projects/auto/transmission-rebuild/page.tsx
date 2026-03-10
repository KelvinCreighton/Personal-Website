import Image from "next/image";
import Link from "next/link";

export default function AutomotiveProjectTemplate() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-white dark:bg-black">
      <article className="w-full max-w-4xl flex flex-col items-start">
        {/* Navigation */}
        <Link
          href="/projects/auto"
          className="text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8 flex items-center gap-2"
        >
          &larr; Back to Automotive Projects
        </Link>

        {/* Header Section */}
        <header className="w-full border-b border-gray-200 dark:border-gray-800 pb-8 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <time className="text-sm italic text-gray-500 dark:text-gray-400">
              August 2025
            </time>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Manual Transmission Rebuild
          </h1>
          <p className="text-xl italic mb-6">1989 Honda Accord LX</p>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Up until this point, this car has been fantastic to work on. It has
            had many problems, but were all generally fixable. However, it
            baffles me that so many car manufacturers refuse to make alternator
            replacements as simple a task as they are. Even so, I am grateful
            that it led to this project, which has been on my car repair bucket
            list for a while now.
          </p>
        </header>

        {/* Content Body */}
        <div className="w-full prose prose-lg dark:prose-invert max-w-none">
          {/* Introduction */}
          <h2 className="mb-4 text-xl font-bold">Diagnosis</h2>
          <p>
            This project car is going strong at over 350,000 km. Unfortunately,
            after accidentally rolling through one of the largest puddles I had
            ever encountered, the alternator was pooched (an official
            diagnosis). Seeing the battery light come on in the dashboard and
            smelling the strong odor of burning wiring, I knew this repair
            couldn't be procrastinated.
          </p>

          {/* Project Overview Component */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 my-8 border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-bold mt-0 mb-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              Project Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-0">
                  Parts Replaced
                </h4>
                <ul className="m-0 pl-4 text-sm">
                  <li>Manual Transmission Rebuild Kit ($434.19)</li>
                  <li>Clutch Kit ($175.21)</li>
                  <li>Starter ($90.77)</li>
                  <li>Alternator ($59.51)</li>
                  <li>Front Right CV Axle ($42.22)</li>
                  <li>Front Left CV Axle ($42.22)</li>
                  <li>Alternator & Waterpump Belt ($7.45)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-0">
                  Quick Stats
                </h4>
                <ul className="m-0 pl-4 text-sm space-y-1 list-none">
                  <li>
                    <span className="font-semibold">Total Cost:</span> $851.57
                  </li>
                  <li>
                    <span className="font-semibold">Hours Spent:</span> Many
                    many DAYS
                  </li>
                  <li>
                    <span className="font-semibold">Difficulty:</span> 5/5
                    (Expert DIY)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <h2 className="mb-4 text-xl font-bold">Step 1: Verify the problem</h2>
          <p>
            Before diving into a repair it's always a good idea to verify the
            diagnosis. I used a multimeter to check the voltage at the battery
            terminals with the engine off. No problems here, the battery was
            holding a steady 12.05V. But when I started the engine, the voltage
            dropped to 11.79V. Much lower than the 13.5V to 14.5V the alternator
            should be producing. This confirms that the alternator was
            struggling to power the car and charge the battery properly.
          </p>

          {/* Step 1 Images - Side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                <Image
                  src="/images/projects/transmission-step-1-1.png"
                  alt="Battery voltage with engine off"
                  width={1438}
                  height={774}
                  className="w-full h-auto object-contain"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Car Off: 12.05V
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                <Image
                  src="/images/projects/transmission-step-1-2.png"
                  alt="Battery voltage with engine running"
                  width={1438}
                  height={774}
                  className="w-full h-auto object-contain"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Car On: 11.79V
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">
            Step 2: Taking out the alternator
          </h2>
          <p>
            Analyzing the alternator gave me a quick understanding of which
            bolts and connections to remove from the old one currently in the
            car. The alternator is held in place by the belt pulley, a mounting
            (pivot) bolt, a tensioner bolt, the primary electrical output
            connection and a smaller ground connection. I started by removing
            the belt pulley, then the tensioner bolt, then the mounting bolt,
            and finally the electrical connections.
          </p>
          <br />
          <p>
            <strong>Problem:</strong> Once it was removed, it became very clear
            that I had underestimated the difficulty of this repair. The
            alternator was too large to fit through any gap in the engine bay
            which left me with 2 options. Either I take out my entire air intake
            system which includes disconnecting the carborator (yikes) to bring
            it up out of the engine bay, or I remove the front passenger side CV
            axle to create a gap large enough to remove the alternator from
            below. I chose the latter.
          </p>

          {/* Side by side images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                <Image
                  src="/images/projects/transmission-step-2-1.png"
                  alt="Removal process"
                  width={860}
                  height={1080}
                  className="w-full h-auto object-contain"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                New Alternator - Front
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                <Image
                  src="/images/projects/transmission-step-2-2.png"
                  alt="Seized bolts challenge"
                  width={860}
                  height={1080}
                  className="w-full h-auto object-contain"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                New Alternator - Back
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">
            Step 3: Passenger Side CV Axle Removal
          </h2>
          <p>
            Since it's an older car I decided I might as well replace both CV
            axles entirely. This was a really smart move because the passenger
            side axle fell apart with almost no effort. The bearings were free
            and grease was everywhere. Partly my fault for not being careful
            enough.
          </p>

          <figure className="my-10 flex flex-col items-center">
            <div className="relative w-1/3 max-w-xs rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
              <Image
                src="/images/projects/transmission-step-3.jpeg"
                alt="Passenger Side CV Axle Removal"
                width={1022}
                height={1920}
                className="w-full h-auto object-contain"
              />
            </div>
            <figcaption className="text-sm text-gray-500 mt-2 text-center">
              New Axle on the Left | Old Axle on the right
            </figcaption>
          </figure>

          <h2 className="mb-4 text-xl font-bold">
            Step 4: Driver Side CV Axle Removal
          </h2>
          <p>
            The driver side CV axle was a different story. Instead of being an
            easy slide out, I had to remove the ENTIRE suspension assembly.
          </p>

          <figure className="my-10 flex flex-col items-center">
            <div className="relative w-1/3 max-w-xs rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
              <Image
                src="/images/projects/transmission-step-4.jpeg"
                alt="Driver Side CV Axle Removal"
                width={1022}
                height={1920}
                className="w-full h-auto object-contain"
              />
            </div>
          </figure>

          <h2 className="mb-4 text-xl font-bold">
            Step 5.1: Transmission Removal
          </h2>
          <p>
            At this point, the transmission was half way from being ready to be
            removed. Both axles were out and all the fluid was on the driveway.
            I was having issues shifting easily between gears, so I decided this
            would be the best opprotunity to take the transmission out and
            rebuild it.
          </p>
          <br />
          <p>
            <strong>Problem:</strong> The transmission was extremely heavy and I
            didn't have a transmission jack. I ended up having to use a floor
            jack with a piece of wood on top to support the transmission. It was
            a sketchy process, but I managed to get it out without dropping it.
          </p>
          <br />
          <p>
            However, the day my bud came to help with this process it rained,
            because of course it did. I didn't have access to the garage at the
            time, so we had to improvise on the driveway.
          </p>

          <figure className="my-10 flex flex-col items-center">
            <div className="relative max-w-2xl rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
              <Image
                src="/images/projects/transmission-step-5-1.jpeg"
                alt="Transmission Removal Improvised on Driveway"
                width={2048}
                height={1152}
                className="w-full h-auto object-contain"
              />
            </div>
          </figure>

          <h2 className="mb-4 text-xl font-bold">
            Step 5.2: Transmission Removal
          </h2>
          <p>
            Trying to remove the transmission in the rain was a complete
            disaster and didn't really go anywhere. Don't do this.
          </p>
          <br />
          <p>
            To remove the transmission, I had to also remove the starter so
            although I dont have the photos for that, I decided to replace it
            too.
          </p>
          <br />
          <p>
            After a lot of struggle and many missed connections we finally got
            it free.
          </p>

          <figure className="my-10 flex flex-col items-center">
            <div className="relative max-w-2xl rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
              <Image
                src="/images/projects/transmission-step-5-2.jpg"
                alt="Transmission Finally Removed"
                width={4032}
                height={3024}
                className="w-full h-auto object-contain"
              />
            </div>
          </figure>

          <h2 className="mb-4 text-xl font-bold">
            Step 6: Transmission Teardown Part 1
          </h2>
          <p>
            30 years of grease and dirt build up. The initial teardown process
            required many hours of just scrapping clumps of grease from the main
            case and bell housing. This included disassembling the speedometer
            gear housing, shifter lever, shfit detent balls, throwout bearing,
            the case bolts, etc.
          </p>

          <div className="flex flex-col gap-6 my-10">
            {/* Top row: 2 images side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-6-1.jpg"
                    alt="Transmission"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  Transmission
                </figcaption>
              </figure>
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-6-2.jpg"
                    alt="Speedometer Gear Housing Teardown"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  Speedometer Gear Housing Teardown
                </figcaption>
              </figure>
            </div>

            {/* Middle row: 2 images side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-6-3.jpg"
                    alt="Transmission Half Degreased"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  Transmission Half Degreased
                </figcaption>
              </figure>
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-6-4.jpg"
                    alt="Shifter Lever and Throwout Bearing"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  Shifter Lever and Throwout Bearing
                </figcaption>
              </figure>
            </div>

            {/* Bottom row: 2 images side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-6-5.jpg"
                    alt="Disassembled Parts"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  Disassembled Parts
                </figcaption>
              </figure>
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-6-6.jpg"
                    alt="Shfit Detent Balls"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  Shfit Detent Balls
                </figcaption>
              </figure>
            </div>
          </div>

          <h2 className="mb-4 text-xl font-bold">
            Step 7: Transmission Teardown Part 2
          </h2>
          <p>
            The next step was to remove 5th gear. For whatever reason, the 5th
            gear lives in its own little housing on the outside of the
            transmission case. Because of this, anyone with this transmission
            should be aware that any minor transmission leaks can become a very
            serious problem and will likely starve 5th gear of oil. However in
            the case of repairing, this is very convenient, so it was a simple
            matter of removing a few bolts and sliding the gear out.
          </p>
          <br />
          <p>
            <strong>Problem:</strong> The 5th gear was chipped from previous
            grinding when shifting. This was a really fun surprise...
          </p>
          <p>
            <strong>Solution:</strong> Do nothing. It is a minor chip and not
            worth the effort to replace this hard to find part.
          </p>

          <div className="flex flex-col gap-6 my-10">
            {/* Top row: 2 images side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-7-1.jpg"
                    alt="Step 7-1"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </figure>
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-7-2.jpg"
                    alt="Step 7-2"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </figure>
            </div>

            {/* Middle row: 2 images side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-7-3.jpg"
                    alt="Step 7-3"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </figure>
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-7-4.jpg"
                    alt="Step 7-4"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </figure>
            </div>

            {/* Bottom row: 2 images side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-7-5.jpg"
                    alt="Step 7-5"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </figure>
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-7-6.jpg"
                    alt="Step 7-6"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </figure>
            </div>

            {/* Centered final row */}
            <figure className="my-10 flex flex-col items-center">
              <div className="relative max-w-2xl w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                <Image
                  src="/images/projects/transmission-step-7-7.jpg"
                  alt="Step 7-7"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Chipped 5th Gear
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">
            Step 8: Splitting the Bell Housing from the Main Case
          </h2>
          <p>
            This was surprisingly difficult and I struggled to get it out. I
            tried carefully prying it with a flat head screw driver but this
            started to dent the maluable aluminum case. I then tried yanking it
            out with rope but in hindsight this was terrible idea and almost
            broke my back. I was desperate enough to try and use floss/string to
            pry it out. I tried for days with varying methods but was
            unsuccessful and eventually opted to take it to a shop. However, no
            shops around would even take it in and I was forced to take it to a
            powertrain shop who usually doesn't work with transmissions in
            general. They are truly my heros and had it cracked in half an hour.
          </p>

          <div className="flex flex-col gap-6 my-10">
            {/* Top row: 2 images side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-8-1.jpg"
                    alt="Step 8-1"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </figure>
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-8-2.jpg"
                    alt="Step 8-2"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </figure>
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-8-3.jpg"
                    alt="Step 8-3"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </figure>
            </div>
          </div>

          <h2 className="mb-4 text-xl font-bold">
            Step 9: Transmission Teardown Part 3
          </h2>
          <p>
            Heres a quick montage of the teardown of 4th to 1st gear including
            the linkages and reverse gear.
          </p>

          <div className="flex flex-col gap-6 my-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-9-1.jpg"
                    alt="Step 9-1"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  4th Gear Bearing
                </figcaption>
              </figure>
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-9-2.jpg"
                    alt="Step 9-2"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  4th Gear
                </figcaption>
              </figure>
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-9-3.jpg"
                    alt="Step 9-3"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  4th Gear Synchros
                </figcaption>
              </figure>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-9-4.png"
                    alt="Step 9-4"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  With Linkages
                </figcaption>
              </figure>
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-9-5.png"
                    alt="Step 9-5"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  Without Linkages
                </figcaption>
              </figure>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-9-6.jpg"
                    alt="Step 9-6"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  Removed Linkages
                </figcaption>
              </figure>
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-9-7.png"
                    alt="Step 9-7"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  Removed 4th and 3rd Gear Shifting and Synchros
                </figcaption>
              </figure>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-9-8.png"
                    alt="Step 9-8"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  Removed 3rd Gear
                </figcaption>
              </figure>
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-9-9.png"
                    alt="Step 9-9"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  Removed Transaxle, 2nd Gear & 1st Gear
                </figcaption>
              </figure>
            </div>
          </div>

          <h2 className="mb-4 text-xl font-bold">
            Step 10: Rebuilding the Transmission
          </h2>
          <p>
            Rebuilding the transmission was a LOT harder than tearing it down.
            Multiple times I put the synchros in the wrong orientation or messed
            up the linkages. By the end of it I had dismantled and reassembled
            the transmission 3 times, testing the shifting by hand to make sure
            everything worked properly. I wont show the images here, it just
            looks the same as dissassembly but in reverse but with gallons of
            brake cleaner.
          </p>
          <p>
            I replaced as much as I could but some of the bearings were really
            trapped in there and since they were still in great condition I
            opted to leave them alone.
          </p>
          <br />
          <p>
            The last thing to do was clean the mating surface between the main
            case and bell housing with soft sandpaper to remove old excess
            gasket (this was done during disassembling). Then install the new
            gasket with a thin layer of Black RTV to ensure a good seal.
          </p>

          <div className="flex flex-col gap-6 my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-10-1.png"
                    alt="Step 10-1"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </figure>
              <figure className="m-0">
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                  <Image
                    src="/images/projects/transmission-step-10-2.png"
                    alt="Step 10-2"
                    width={4032}
                    height={3024}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </figure>
            </div>
          </div>

          <hr className="my-12 border-gray-200 dark:border-gray-800" />
        </div>
      </article>
    </main>
  );
}
