"use client";

// shadcn
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

// project-imports
import { cn } from "@/lib/utils";
import { IconArrowUpRight } from "@tabler/icons-react";

// assets

//  ------------------------------ | BLOCK - WELCOME BANNER | ------------------------------  //

export default function WelcomeBanner() {
  return (
    <Card className="welcome-banner relative overflow-hidden border-none bg-primary text-start rounded-none! shadow-none!">
      <div
        className="absolute inset-0 z-10 bg-size-[100%] bg-bottom-right bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url('/assets/svg/pattern.svg')`,
        }}
      ></div>
      <CardContent className="relative z-20 p-6 md:p-10 mx-auto container">
        <div className="grid grid-cols-12 items-center gap-6">
          <div className="col-span-12 sm:col-span-7">
            <div className="space-y-6">
              <h2 className="text-2xl leading-tight font-semibold text-white md:text-3xl">
                Career Options with Swaraj
              </h2>
              <p className="text-base leading-relaxed text-white/80">
                Explore the various career opportunities available at our
                company. Join us to grow and make an impact.
              </p>
              <Link
                href="/careers"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 rounded-xl border-white bg-transparent px-8 font-bold text-white hover:bg-white hover:text-primary",
                )}
              >
                Apply Now
                <IconArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="col-span-12 flex justify-center sm:col-span-5">
            {/* <Image
              width={400}
              height={300}
              src="/assets/images/test.jpeg"
              alt="Welcome Banner"
              className="w-full max-w-50 animate-in drop-shadow-2xl duration-700 fade-in zoom-in"
            /> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
