import {
  Section,
  SectionContent,
} from "@/components/features/section/index.section";
import type { IMachine } from "@/data/static/machines/machines.types";
import { IService } from "@/data/static/services/services.types";
import { getDefaultImage } from "@/utils/get-default-image";
import { cn } from "cn";
import Image from "next/image";
import { ComponentProps } from "react";
import { ProductHeaderDetails, ProductHeaderImage } from "./machine-grid";
import { MachineInfoPanel } from "./machine-grid/machine-info-panel";
import { MachineListPanel } from "./machine-grid/machine-list-panel";

export type IProduct = IMachine | IService;

interface IItemPageComponentProps {
  machine: IProduct;
  type: "machine" | "service";
}

export function MachinePageComponent({
  machine,
  type,
}: IItemPageComponentProps) {
  const defaultImage = getDefaultImage(machine.assets);

  return (
    <Section className="bg-background-subtle">
      <SectionContent className="pt-12 md:pt-16">
        {/* Grid Wrapper */}
        <GridWrapper>
          {/* Machine Information */}
          <div className={"max-w-240 space-y-6 max-md:w-full max-md:min-w-0"}>
            <ProductHeaderDetails machine={machine} />
            <MachineInfoPanel machine={machine} />
          </div>
          {/* end Machine Information */}

          {/* Right Machines List */}
          <div className={"max-md:hidden w-full max-w-90 space-y-3"}>
            {/* Machine Image */}
            {defaultImage?.url ? (
              <ProductHeaderImage>
                <Image
                  className={
                    "ml-auto mt-16 h-full max-h-64 w-full object-cover rounded-sm"
                  }
                  src={defaultImage?.url ?? ""}
                  alt={defaultImage?.alt ?? ""}
                  width={500}
                  height={500}
                />
              </ProductHeaderImage>
            ) : null}
            {/* end Machine Image */}
            {/* All Machine Panel */}
            <MachineListPanel currentKey={machine.key} type={type} />
            {/* end All Machine Panel */}
          </div>
          {/* end Right Machines List */}
        </GridWrapper>
        {/* end Grid Wrapper */}
      </SectionContent>
    </Section>
  );
}

function GridWrapper({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex gap-3 justify-between max-md:flex-col max-md:gap-8",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
