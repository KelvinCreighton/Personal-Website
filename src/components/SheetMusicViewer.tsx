"use client";

import React, { useEffect, useRef, useState } from 'react';
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay';
import AudioPlayer from 'osmd-audio-player';

interface SheetMusicViewerProps {
  file: string;
}

export default function SheetMusicViewer({ file }: SheetMusicViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [osmd, setOsmd] = useState<OpenSheetMusicDisplay | null>(null);
  // we keep a ref for the actual AudioPlayer instance so we can always
  // access the "current" player without worrying about stale closures.
  // the state is still used purely for rendering/UI updates (play/pause)
  const audioPlayerRef = useRef<AudioPlayer | null>(null);
  const [audioPlayer, setAudioPlayer] = useState<AudioPlayer | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioReady, setAudioReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // ResizeObserver to keep cursor scaled when layout changes
    let ro: ResizeObserver | null = null;

    // Initialize OSMD
    const osmdInstance = new OpenSheetMusicDisplay(containerRef.current, {
      autoResize: true,
      drawTitle: true,
      drawSubtitle: true,
      drawComposer: true,
      drawLyricist: true,
      drawCredits: true,
      drawPartNames: true,
      drawPartAbbreviations: true,
      drawMeasureNumbers: true,
      drawMeasureNumbersOnlyAtSystemStart: true,
      cursorsOptions: [{ type: 0, color: "#3b82f6", alpha: 0.5, size: 2.5 }]
    });

    setOsmd(osmdInstance);

    // attach a ResizeObserver after we set the instance so we can rescale
    ro = new ResizeObserver(() => {
      try {
        // scaleCursor will be a no-op until osmd exists
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        // (we call it safely in runtime)
        (window as any).requestAnimationFrame(() => {
          // call scaleCursor if present
          // use a dynamic lookup to avoid TS ordering issues
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          if (typeof scaleCursor === 'function') scaleCursor();
        });
      } catch (e) {
        // ignore
      }
    });
    ro.observe(containerRef.current);

    return () => {
      // Cleanup
      if (audioPlayerRef.current) {
        // stop and drop the reference so we don't leak a context
        audioPlayerRef.current.stop();
        audioPlayerRef.current = null;
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      if (ro) ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // whenever the score (or the osmd instance) changes we need to recreate
  // the audio player. we explicitly tear down the old player first in order
  // to avoid the memory/time scheduling issues described in the issue
  // comment above. the `audioPlayerRef` holds the real object; state is
  // kept so that our UI responds to changes.
  useEffect(() => {
    if (!osmd || !file) return;

    let cancelled = false;
    setLoading(true);

    // tear down any previous player immediately
    if (audioPlayerRef.current) {
      audioPlayerRef.current.stop();
      audioPlayerRef.current = null;
      setAudioPlayer(null);
      setAudioReady(false);
      setIsPlaying(false);
    }

    osmd
      .load(file)
      .then(async () => {
        if (cancelled) return;
        osmd.render();
        osmd.cursor.show(); // Initialize the cursor element
        // ensure cursor gets sized to the rendered staff
        try {
          scaleCursor();
        } catch (e) {
          // ignore — scaleCursor is best-effort
        }
        osmd.cursor.hide();

        // create a new player. the constructor takes an optional *AudioContext*
        // and an instrument player, not a plain options object. passing a
        // random object here was the cause of the `this.ac.suspend is not a
        // function` error – the library attempted to call `suspend()` on the
        // value you provided.
        //
        // if you need to tweak scheduling behaviour you can either create a
        // custom AudioContext yourself and pass it as the first argument, or
        // open an issue/PR against osmd-audio-player; there are no documented
        // config knobs today.
        const player = new AudioPlayer();

        audioPlayerRef.current = player;
        setAudioPlayer(player);

        try {
          await player.loadScore(osmd);
          if (!cancelled) setAudioReady(true);
        } catch (audioErr) {
          console.error("Audio Player failed to load score:", audioErr);
        }

        player.on("state-change", (state) => {
          setIsPlaying(state === "PLAYING");
        });

        if (!cancelled) setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error("Error loading sheet music:", err);
        setLoading(false);
      });

    return () => {
      cancelled = true;
      if (audioPlayerRef.current) {
        audioPlayerRef.current.stop();
        audioPlayerRef.current = null;
      }
    };
  }, [osmd, file]);

  const scaleCursor = () => {
    if (!osmd || !osmd.cursor) return;

    // Simple Y-scaling: adjust this factor as needed
    const factor = 175;
    const cursorEl = osmd.cursor.cursorElement as HTMLImageElement;
    cursorEl.style.transform = `scaleY(${factor})`;
    cursorEl.style.transformOrigin = 'top left';
    cursorEl.style.zIndex = String(osmd.cursor.wantedZIndex || 10);
    cursorEl.style.opacity = '1';
  };

  const togglePlay = () => {
    if (!audioPlayer || !osmd) return;
    if (isPlaying) {
      audioPlayer.pause();
    } else {
      // Modify the library's internal wantedZIndex
      osmd.cursor.wantedZIndex = 10;
      osmd.cursor.cursorElement.style.zIndex = '10 !important';
      scaleCursor();
      osmd.cursor.show();
      audioPlayer.play();
    }
  };

  const stopPlay = () => {
    if (!audioPlayer || !osmd) return;
    audioPlayer.stop();
    osmd.cursor.reset();
    osmd.cursor.hide();
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex justify-center gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-sm">
        <button
          onClick={togglePlay}
          disabled={!audioReady || loading}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center min-w-[120px]"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={stopPlay}
          disabled={!audioReady || loading || !isPlaying}
          className="px-6 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors"
        >
          Stop
        </button>
      </div>

      <div className="w-full bg-white text-black p-4 rounded-xl shadow-inner relative min-h-[400px]">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10 rounded-xl">
            <p className="text-xl font-semibold text-gray-600 animate-pulse">Loading Sheet Music...</p>
          </div>
        )}
        <div ref={containerRef} className="w-full overflow-x-auto" />
      </div>
    </div>
  );
}