import React from "react";
import Image from "next/image";
interface ISponsorCardProps {
  img: string;
  alt: string;
}
export const SponsorCard = ({ img, alt }: ISponsorCardProps) => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={img}
        alt={alt}
        width={180}
        height={80}
        className="max-w-[120px] md:max-w-[180px] h-auto"
      />
    </div>
  );
};
