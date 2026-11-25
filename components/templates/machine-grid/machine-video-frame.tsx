"use client";

import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { useRef, useState } from "react";

interface IMachineVideoFrameProps {
  videoUrl: string;
  title: string;
}

// `enablejsapi=1` is required for the postMessage play/pause commands.
const withJsApi = (url: string) =>
  `${url}${url.includes("?") ? "&" : "?"}enablejsapi=1`;

export function MachineVideoFrame({
  videoUrl,
  title,
}: IMachineVideoFrameProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const togglePlayback = () => {
    const player = iframeRef.current?.contentWindow;
    if (!player) return;

    player.postMessage(
      JSON.stringify({
        event: "command",
        func: isPlaying ? "pauseVideo" : "playVideo",
        args: [],
      }),
      "*",
    );
    setIsPlaying((playing) => !playing);
  };

  return (
    <div className="group relative aspect-video w-full overflow-hidden border border-border bg-black shadow-sm">
      <iframe
        ref={iframeRef}
        className="absolute inset-0 w-full"
        src={withJsApi(videoUrl)}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className="absolute inset-0 hidden items-center justify-center bg-black/20 opacity-0 transition-opacity hover:opacity-100 focus-visible:opacity-100 lg:flex"
      >
        <span className="flex items-center justify-center rounded-full bg-white/90 p-4">
          {isPlaying ? (
            <IconPlayerPauseFilled className="size-6 text-black" />
          ) : (
            <IconPlayerPlayFilled className="size-6 text-black" />
          )}
        </span>
      </button>
    </div>
  );
}
