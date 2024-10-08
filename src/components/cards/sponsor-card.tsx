import React from "react";
import Image from "next/image";
import { ISponzor } from "@/api/use-get-sponsors";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { cn } from "@/lib/utils";
const builder = imageUrlBuilder(client);
interface ISponsorCardProps {
  sponzor: ISponzor;
}
export const SponsorCard = ({ sponzor }: ISponsorCardProps) => {
  const { logo, name, url } = sponzor;
  return (
    <div className="flex flex-col items-center justify-center gap-3 group py-2">
      <a
        href={url ? url : "#"}
        target="_blank"
        className={cn(
          "space-y-2 cursor-default w-full flex flex-col items-center",
          url && "cursor-pointer group-hover:text-red-500 transition-colors"
        )}
      >
        <Image
          src={builder.image(logo).url()}
          alt={name}
          width={180}
          height={180}
          className="object-contain "
        />
        <p className="text-center text-lg">{name}</p>
      </a>
    </div>
  );
};
