import Tag from "@/components/ui/tag";

export interface IPageHeadingProps {
  title: string;
  tagline: string;
  tags?: string[];
  category?: string;
}

export default function PageHeading({
  title,
  tagline,
  tags,
  category,
}: IPageHeadingProps) {
  return (
    <>
      {/* Machines Heading */}
      <div
        className={
          "flex flex-col gap-2 md:flex-row md:gap-4 md:justify-between pt-8 md:pt-14"
        }
      >
        {/* Text Content Area */}
        <div className={"text-start space-y-8 "}>
          {/* Category Label */}
          {category && (
            <Tag textCase={"upper"} size={"none"}>
              {category}
            </Tag>
          )}
          {/* end Category Label */}

          {/* Machine Details */}
          <div className={"space-y-4"}>
            {/* Machine Name */}
            <h2 className={"text-5xl tracking-tight"}>{title}</h2>
            {/* end Machine Name */}
            {/* Description */}
            <p className={"max-w-[90%] xl:max-w-120 text-muted-foreground"}>
              {tagline}
            </p>
            {/* end Description */}
          </div>
          {/* end Machine Details */}
          {/* tags */}
          {tags && tags?.length > 0 && (
            <div className={"flex flex-wrap gap-2"}>
              {tags?.map((tag) => (
                <Tag key={tag} variant={"pill"}>
                  {tag}
                </Tag>
              ))}
            </div>
          )}
          {/* end Tags */}
          {/* <Button
                className={"bg-white text-foreground border border-border"}
              >
                Contact Sales
                <IconArrowUpRight />
              </Button> */}
        </div>
        {/* end Text Content Area */}

        {/* Video Area */}
        <div className={"rounded-2xl overflow-hidden"}>
          {/* <MachineVideoFrame
                videoUrl={machine.videoUrl}
                title="Machine Video"
              /> */}
        </div>
        {/* end Video Area */}
      </div>
      {/* end Machines Heading */}
    </>
  );
}
