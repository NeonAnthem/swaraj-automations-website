import { cva } from "class-variance-authority";
import { cn } from "cn";
import Image from "next/image";
import { PropsWithChildren } from "react";

export default function MetricsSection() {
  return (
    <div className="flex flex-col md:flex-row gap-8 xl:gap-24">
      {/* Image Area */}
      <div className="rounded-sm">
        <Image
          className="rounded-[inherit] max-h-80 h-full object-cover"
          src="/assets/images/team_photo.webp"
          alt="Metrics Image"
          width={640}
          height={360}
        />
      </div>
      {/* end Image Area */}

      {/* Metrics Area */}

      <div className="flex flex-col gap-1 w-full md:justify-center">
        {/* Text content */}
        <div className="text-start mb-2">
          <h3 className="text-lg sm:text-2xl lg:text-3xl font-medium text-gray-900 dark:text-white tracking-tight xl:w-[80%]">
            Powering Industries with precision machines.{" "}
            <span className="text-zinc-500 dark:text-zinc-400">
              Our next-gen precision machines push the boundaries of
              manufacturing excellence.
            </span>
          </h3>
        </div>
        {/* end Text content */}

        {/* Metrics Content */}
        <div className=" border-y">
          <div
            className={cn(
              "grid grid-cols-1 grid-rows-flow gap-2 text-start w-full divide-y divide-gray-200 dark:divide-gray-700",
            )}
          >
            {/* end First row */}
            <RowWrapper>
              <HighlightMetricCard label="Years of Excellence" value="25+" />
              <MetricCard label="satisfied clients" value="75+" />
              <MetricCard label="projects completed" value="250+" />
            </RowWrapper>
            {/* end First Row */}
            {/* Second Row */}
            {/* <RowWrapper>
              <MetricCard label="projects completed" value="150+" />
              <MetricCard label="awards won" value="8" />
            </RowWrapper> */}
            {/* end Second Row */}
          </div>
        </div>
        {/* end Metrics Content */}
      </div>

      {/* end Metrics Area */}
    </div>
  );
}

function RowWrapper({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-1 grid-rows-flow md:grid-cols-3 gap-2 text-start w-full">
      {children}
    </div>
  );
}

interface IMetricCardProps {
  label: string;
  value: string;
}

const metricCardvariants = cva(
  "flex flex-col gap-1 justify-center w-full min-h-48",
);

function HighlightMetricCard({ label, value }: IMetricCardProps) {
  return (
    <div
      className={cn(
        "bg-[url(/assets/backgrounds/background.webp)] bg-cover bg-center",
        "flex items-center",
        metricCardvariants(),
      )}
    >
      <h3 className="text-9xl text-primary-foreground tracking-tighter font-semibold">
        {value}
      </h3>
      <p className="text-2xl tracking-tight text-muted-foreground">{label}</p>
    </div>
  );
}

function MetricCard({ label, value }: IMetricCardProps) {
  return (
    <div className={cn("flex items-center", metricCardvariants())}>
      <h3 className="text-6xl text-foreground font-medium leading-[0.8]">
        {value}
      </h3>
      <p className="text-2xl tracking-tight text-muted-foreground/70">
        {label}
      </p>
    </div>
  );
}
