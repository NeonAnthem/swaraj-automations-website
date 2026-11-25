import { Button } from "@/components/ui/button";
import { ListCard, ListCardHeader } from "@/components/ui/list";
import Tag from "@/components/ui/tag";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { IProduct } from "../machine-page-component";

function ProductHeader({ children }: PropsWithChildren) {
  return <div className={"grid grid-cols-1 md:grid-cols-6"}>{children}</div>;
}

function ProductHeaderImage({ children }: PropsWithChildren) {
  return <div className={"h-auto md:col-span-2"}>{children}</div>;
}

function ProductHeaderDetails({ machine }: { machine: IProduct }) {
  return (
    <div
      className={
        "flex flex-col gap-2 items-start max-md:w-full md:flex-row md:gap-4 md:items-center md:col-span-4"
      }
    >
      {/* Text Content Area */}
      <div className={"max-md:w-full text-start space-y-5 md:space-y-8"}>
        {/* Category Label */}
        <Tag
          textCase={"upper"}
          size={"none"}
          className={"underline underline-offset-10"}
        >
          {machine.category ?? "Machines"}
        </Tag>
        {/* end Category Label */}

        {/* Machine Details */}
        <div className={"space-y-4"}>
          <h2
            className={
              "text-3xl leading-tight tracking-tight text-primary font-semibold md:text-5xl"
            }
          >
            {machine.name}
          </h2>
          <p
            className={
              "text-md w-full text-left text-foreground md:w-[80%] md:text-justify"
            }
          >
            {machine.description}
          </p>
        </div>
        {/* end Machine Details */}

        {/* Tags */}
        {machine?.operationsPerformed?.length ? (
          <ListCard className={""}>
            <ListCardHeader className={"mb-1.5"}>
              <h3 className={"text-muted-foreground "}>
                {/* Operations Performed on this machine */}
                Tools that can be equiped on the machines
              </h3>
            </ListCardHeader>
            <div className={"flex flex-wrap gap-4"}>
              {machine.operationsPerformed?.map((tag) => (
                <Tag
                  key={tag}
                  variant={"pill"}
                  size={"md"}
                  hasTag={false}
                  className={
                    "py-1! [&>p]:text-primary! [&>p]:font-medium [&>p]:text-base md:[&>p]:text-lg"
                  }
                >
                  {tag}
                </Tag>
              ))}
            </div>
          </ListCard>
        ) : null}

        {/* end Tags */}
        <div className={"mt-4"}>
          <Button
            nativeButton={false}
            size={"lg"}
            render={
              <Link href={"/contact"}>
                Request a Quote <IconArrowUpRight />
              </Link>
            }
          />
        </div>
      </div>
      {/* end Text Content Area */}
      {/* CTA */}

      {/* end CTA */}
    </div>
  );
}

export { ProductHeader, ProductHeaderDetails, ProductHeaderImage };
