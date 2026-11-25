import type { IMachine } from "@/data/static/machines/machines.types";
import { cn } from "@/lib/utils";
import { MachineVideoFrame } from "./machine-video-frame";

/** Whether the machine has anything to show in the media panel. */
export const hasMachineMedia = (machine: IMachine) =>
  Boolean(machine.videoUrl?.trim()) || Boolean(machine.images?.length);

interface IMachineMediaPanelProps {
  machine: IMachine;
  className?: string;
}

export function MachineMediaPanel({
  machine,
  className,
}: IMachineMediaPanelProps) {
  const videoUrl = machine.videoUrl?.trim();

  if (!hasMachineMedia(machine)) return null;

  return (
    <div className={cn("w-full! h-auto", className)}>
      {videoUrl ? (
        <MachineVideoFrame
          videoUrl={videoUrl}
          title={`${machine.name} video`}
        />
      ) : null}

      {/* <ThumbnailsCarousel key={machine.key} images={machine.images} /> */}
    </div>
  );
}
