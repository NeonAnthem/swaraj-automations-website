"use client";

import { GrainGradient } from "@paper-design/shaders-react";
import { CareerApplicationForm } from "@/components/forms/career-application-form";

export default function CareersPageSection() {
  return (
    <div className="min-h-screen text-black antialiased [font-synthesis:none]">
      <div className="grid min-h-screen lg:grid-cols-[0.94fr_1.06fr]">
        {/* Form */}
        <div className="flex min-h-190 items-start px-6 py-12 sm:px-10 lg:min-h-0 lg:px-14 lg:py-28 xl:px-20">
          <div className="mx-auto w-full max-w-147.5">
            <div>
              <h1 className="whitespace-nowrap text-3xl font-medium tracking-[-0.04em] sm:text-4xl lg:text-[42px] lg:leading-[1.05] xl:text-[50px]">
                Work with us
              </h1>
              <p className="mt-3 whitespace-nowrap text-base leading-snug text-black/60 dark:text-white/55">
                Brainstorm in chat, build in cowork
              </p>
            </div>

            <CareerApplicationForm />
          </div>
        </div>
        {/* End form */}

        {/* Gradient */}
        <div className="relative flex min-h-180 overflow-hidden bg-black p-8 text-white sm:p-12 lg:min-h-0">
          <GrainGradient
            speed={1}
            scale={1}
            rotation={0}
            offsetX={0}
            offsetY={0}
            softness={0.5}
            intensity={0.5}
            noise={0.25}
            shape="corners"
            frame={2854.5}
            colors={["#FFFFFF", "#9f1f24", "#9f1f24", "#FFFFFF"]}
            colorBack="#00000000"
            className="absolute inset-0 bg-black"
          />

          <div className="relative z-10 flex h-full w-full flex-col justify-between">
            <h2 className="max-w-155 pt-0 text-5xl font-medium tracking-tighter text-white sm:text-6xl lg:pt-16 lg:text-[64px] lg:leading-[0.98] xl:text-[70px]">
              Learn, Grow &
              <br />
              Succeed Together
            </h2>
          </div>
        </div>
        {/* End Gradient */}
      </div>
    </div>
  );
}
