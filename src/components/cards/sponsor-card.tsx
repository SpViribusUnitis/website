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
    <div className="flex flex-col items-center justify-center gap-3">
      <a
        href={url ? url : "#"}
        target="_blank"
        className={cn(
          "space-y-2 cursor-default",
          url && "cursor-pointer hover:text-blue-800 transition-colors"
        )}
      >
        <Image
          src={builder.image(logo).width(180).height(180).url()}
          alt={name}
          width={180}
          height={180}
          className="max-w-[180px] md:max-w-[180px] h-auto"
        />
        <p className="text-center text-lg">{name}</p>
      </a>
    </div>
  );
};
