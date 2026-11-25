import { Button } from "@/components/ui/button";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const members = [
  {
    name: "Shahank Doshi",
    role: "Founder (founded in 1997)",
    avatar:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rajkumar Doshi",
    role: "Head of CNC Designs",
    avatar:
      "https://images.unsplash.com/photo-1633625763717-045645e9e739?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ojas Doshi",
    role: "Operational Head",
    avatar:
      "https://images.unsplash.com/photo-1758922584983-82ffd5720c6a?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function TeamSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto container px-6">
        <div className="grid grid-cols-[auto_1fr] items-center gap-4">
          <span className="text-muted-foreground block text-sm">Team</span>
          <span className="bg-border h-px w-full" />
        </div>
        <div className="mt-12 grid gap-4 md:mt-24 md:grid-cols-2 md:gap-6 lg:gap-12">
          <div className="sm:w-2/5">
            <h2 className="text-4xl font-medium tracking-tighter">
              Meet our team
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg">
              During the working process, we perform regular fitting with the
              client because he is the only person who can feel whether a new
              suit fits or not.
            </p>
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <Link href="/careers">
                  Careers with us <IconArrowUpRight />{" "}
                </Link>
              }
            />
          </div>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((member, index) => (
              <div key={index} className="group">
                <div className="aspect-square overflow-hidden transition-all duration-200 [clip-path:inset(0_0_0_0_round_12px)] group-hover:[clip-path:inset(0_0_4px_0_round_16px)]">
                  <Image
                    className="size-full object-cover object-top grayscale"
                    src={member.avatar}
                    alt={`Avatar of ${member.name}`}
                    width={826}
                    height={1239}
                    sizes="(max-width: 768px) 100vw, 280px"
                  />
                </div>
                <div className="pt-3">
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-muted-foreground inline-block text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
