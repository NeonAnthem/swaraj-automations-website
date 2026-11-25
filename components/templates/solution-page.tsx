import { MACHINES_LIST } from "@/data/static/machines";
import { ISolution } from "@/data/static/solutions/solutions.types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ItemCardGridWrapper } from "../ui/item.card";
import CategorizedLandingPage from "./categorized-landing-page";

function filterMachinesBySolution(solutionKey: string) {
  return MACHINES_LIST.filter((machine) =>
    machine.solutions.some((machineSolution) => machineSolution === solutionKey),
  );
}

export default function SolutionPageComponent({
  solution,
}: {
  solution: ISolution;
}) {
  const machines = filterMachinesBySolution(solution.key);

  return (
    <CategorizedLandingPage
      heading={{
        title: solution.title,
        tagline: "",
      }}
    >
      <ItemCardGridWrapper>
        {machines.map((machine) => {
          return (
            <Link
              key={machine.key}
              href={`/machines/${machine.key}`}
              className="group flex flex-col lg:flex-row gap-2 bg-white p-1.5 rounded-xl"
            >
              {/* Image Container */}
              <div className="group relative h-full min-h-110 max-w-full overflow-hidden rounded-lg md:aspect-5/4 lg:aspect-video shadow p-2">
                <div className="text-start">
                  <div className="relative rounded-sm overflow-hidden">
                    <Image
                      src={machine.assets?.[0]?.url ?? ""}
                      alt={machine.name}
                      width={640}
                      height={360}
                      className="w-full h-full max-h-58 object-cover object-center transition-transform duration-300 group-hover:scale-105 rounded-[inherit]"
                    />
                    <div className="absolute inset-0 h-full bg-linear from-black/30 to-transparent rounded-[inherit]" />
                  </div>
                  {/* Block */}
                  <div className="p-2 py-4 space-y-4">
                    <h3 className="text-lg font-medium text-foreground tracking-tighter">
                      {machine.name}
                    </h3>
                    <p className="text-sm tracking-tight leading-[1.2] text-muted-foreground line-clamp-3">
                      {machine.description}
                    </p>
                  </div>
                  {/* end Block */}
                  {/* CTA */}
                  <div>
                    <Button>Learn More</Button>
                  </div>
                  {/* end CTA */}
                </div>
              </div>
              {/* end Image Container */}
            </Link>
          );
        })}
      </ItemCardGridWrapper>
    </CategorizedLandingPage>
  );
}
