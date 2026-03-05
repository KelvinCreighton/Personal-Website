import Link from 'next/link';

export default function MyFirstGamePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <Link href="/projects/game-dev" className="text-sm text-gray-500 hover:underline self-start mb-4">
          &larr; Back to Game Dev Projects
        </Link>
        <h1 className="text-4xl font-bold text-center">My First Game</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          The first JavaScript game I ever made. Playable directly in your browser!
        </p>
      </div>
      
      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex justify-center items-center mb-12" style={{ minHeight: '600px' }}>
        <iframe 
          src="/games/my-first-game/game.html" 
          className="w-full h-full border-0"
          style={{ minHeight: '600px' }}
          title="My First Game"
        />
      </div>

      <div className="w-full max-w-4xl bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">How to Play</h2>
        
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2">Controls</h3>
            <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 dark:text-gray-300">
              <li><strong>Start Screen:</strong> Use the <strong>Arrow Keys</strong> to move the cursor and press <strong>Space</strong> to select.</li>
              <li><strong>Movement:</strong> Use the <strong>A, D</strong> to move the ball around, and <strong>W</strong> to jump.</li>
              <li><strong>Gravity Flipping:</strong> Press <strong>Space</strong> to flip gravity (Only when active).</li>
              <li><strong>Restart:</strong> Press <strong>R</strong> to restart the current level from the last <strong>Checkpoint</strong> if you get stuck.</li>
              <li><strong>Timer:</strong> Press <strong>T</strong> to <strong>Show/Hide</strong> the timer, and press <strong>P</strong> to <strong>Pause/Resume</strong> it  .</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">Game Mechanics & Elements</h3>
            <style>{`
              @keyframes pulse-inner {
                0%, 100% { transform: scale(0.1); }
                50% { transform: scale(1); }
              }
              @keyframes pulse-outer {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(0.1); }
              }
              .goal-circle {
                transform-origin: center;
              }
              .goal-inner {
                animation: pulse-inner 3.0s infinite linear;
              }
              .goal-outer {
                animation: pulse-outer 3.0s infinite linear;
              }
              /* shrinking/growing icons */
              @keyframes shrink {
                0% { transform: scale(1); }
                50% { transform: scale(0); }
                51% { transform: scale(1); }
                100% { transform: scale(0); }
              }
              @keyframes grow {
                0% { transform: scale(0); }
                50% { transform: scale(1); }
                51% { transform: scale(0); }
                100% { transform: scale(1); }
              }
              .icon-shrink circle, .icon-grow circle {
                transform-origin: center;
              }
              .icon-shrink circle {
                animation: shrink 3s infinite linear;
              }
              .icon-grow circle {
                animation: grow 3s infinite linear;
              }
              /* screen switching animations */
              @keyframes move-left-right {
                0% { transform: translateX(0); }
                100% { transform: translateX(21px); }
              }
              @keyframes move-right-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(-21px); }
              }
              .line-lr {
                animation: move-left-right 1.0s infinite linear;
              }
              .line-rl {
                animation: move-right-left 1.0s infinite linear;
              }            `}</style>
            <ul className="list-none space-y-3 ml-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <div className="w-6 flex justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" className="text-black dark:text-white">
                    <circle cx="16" cy="16" r="14" className="goal-outer goal-circle" />
                    <circle cx="16" cy="16" r="14" className="goal-inner goal-circle" />
                  </svg>
                </div>
                <div><strong>Goal:</strong> Reach the pulsing portal to complete the level.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 flex justify-center mt-1.5">
                  {/* three triangles spike icon */}
                  <svg width="24" height="16" viewBox="0 0 32 16" fill="none" stroke="currentColor" strokeWidth="1" className="text-black dark:text-white">
                    <polygon points="0,16 5,0 10,16" />
                    <polygon points="11,16 16,0 21,16" />
                    <polygon points="22,16 27,0 32,16" />
                  </svg>
                </div>
                <div><strong>Spikes:</strong> Avoid the spikes. Touching them will destroy the ball and reset you to the last checkpoint!</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 flex justify-center mt-1.5">
                  {/* box-within-box icon for 1/2 gravity */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-black dark:text-white">
                    <rect x="1" y="1" width="22" height="22" />
                    <rect x="6" y="6" width="12" height="12" />
                  </svg>
                </div>
                <div><strong>1/2 Gravity:</strong> Interacting with these blocks toggle the gravity from 1 to 1/2 meaning you can jump higher and fall slower.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 flex justify-center mt-1.5">
                  {/* box-with-circle icon for gravity flipper */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-black dark:text-white">
                    <rect x="1" y="1" width="22" height="22" />
                    <circle cx="12" cy="12" r="6" />
                  </svg>
                </div>
                <div><strong>Gravity Flippers:</strong> Interacting with this block toggles your ability to switch gravity using the <strong>Space</strong> button. You can only use it once before you must touch the ground to use it again.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 flex flex-col items-center space-y-1 mt-0.5">
                  {/* shrinking/growing animated boxes (stacked) */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="icon-shrink text-black dark:text-white">
                    <rect x="1" y="1" width="22" height="22" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="icon-grow text-black dark:text-white">
                    <rect x="1" y="1" width="22" height="22" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div><strong>Shrinking/Growing:</strong> When interacting with these boxes, they will change the size of your ball, allowing you to squeeze through tight gaps.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 flex justify-center mt-1.5">
                  {/* small box icon for checkpoint */}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1" className="text-black dark:text-white">
                    <rect x="1" y="1" width="10" height="10" />
                  </svg>
                </div>
                <div><strong>Checkpoints:</strong> Touching these will save your progress so you don't have to restart the whole level if you hit a spike.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 flex flex-col items-center space-y-1 mt-0.5">
                  {/* screen switching animated boxes */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-black dark:text-white">
                    <rect x="1" y="1" width="22" height="22" />
                    <g className="line-lr">
                      <rect x="1" y="1" width="0.5" height="22" fill="currentColor" />
                    </g>
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-black dark:text-white">
                    <rect x="1" y="1" width="22" height="22" />
                    <g className="line-rl">
                      <rect x="22" y="1" width="0.5" height="22" fill="currentColor" />
                    </g>
                  </svg>
                </div>
                <div><strong>Screen Switching:</strong> Interacting with these boxes will transition you to the next adjacent room/screen in the level.</div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
