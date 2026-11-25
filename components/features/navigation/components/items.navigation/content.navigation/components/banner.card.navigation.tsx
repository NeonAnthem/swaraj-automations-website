import CTALink from "@/components/cta/link.cta";
import { cn } from "@/lib/utils";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavigationContentBlockBanner() {
  // Get banner information
  // Get banner information from latest blog

  const redirect = useRouter();
  return (
    <div className="relative">
      {/* Background Image */}
      <Image
        src={"/assets/images/test.jpeg"}
        alt={""}
        width={500}
        height={500}
        className={cn("w-full h-full")}
      />
      {/* End Background Image */}

      {/* Content Wrapper */}
      <div
        className={cn(
          "absolute bottom-2 left-2 right-2 bg-background h-max border border-accent",
          "px-2 sm:px-4 py-2 sm:py-4",
        )}
      >
        {/* Content */}
        <div className="">
          {/* Text Content */}

          {/* Title */}
          <h2 className="text-primary text-2xl font-[430] line-clamp-1 pt-1 capitalize">
            Read our blogs
          </h2>
          {/* End Title */}
          {/* Description */}
          <p className="text-foreground text-sm line-clamp-2 mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            nesciunt unde quisquam aut vero facere neque aperiam natus,
            consequuntur nisi obcaecati laborum voluptates temporibus ex fugit
            vel autem impedit quod maiores perferendis excepturi officia
            provident, saepe iure. Dolorum officia, minima enim quaerat nam
            dolorem! Molestiae, ad! Adipisci quod excepturi dolorum?
          </p>
          {/* End Description */}
          {/* end Text Content */}
        </div>
        {/* End Content */}

        {/* CTA */}
        <div className="mt-6">
          <CTALink
            onClick={() => {
              redirect.push("/blogs");
            }}
          >
            Learn More
            <IconArrowUpRight />
          </CTALink>
        </div>
        {/* End CTA */}
      </div>
      {/* end Content Wrapper */}
    </div>
  );
}
