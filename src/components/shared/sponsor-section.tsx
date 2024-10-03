import React from "react";
import { SponsorCard } from "../cards/sponsor-card";

export const SponsorSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-start mb-12">
          Prijatelji Zadruge
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <SponsorCard img="" alt="" key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
