import React from "react";
import { SponsorCard } from "../cards/sponsor-card";
import { useGetSponzors } from "@/api/use-get-sponsors";

export const SponsorSection = async () => {
  const sponzori = await useGetSponzors();
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-start mb-12">
          Pokrovitelji Zadruge
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
          {sponzori?.map((sponzor) => (
            <SponsorCard sponzor={sponzor} key={sponzor._id} />
          ))}
        </div>
        <div className="my-8 space-y-4 text-lg">
          <p>
            Naša zadruga ne bi mogla ostvarivati svoje ciljeve bez podrške naših
            cijenjenih pokrovitelja. Zahvaljujući njihovoj velikodušnosti i
            predanosti, projekt radno-duhovnog kampa Anatot nastavlja rasti i
            pružati podršku braniteljima, njihovim obiteljima i zajednici.
          </p>
          <p>
            Podrška naših pokrovitelja omogućuje nam ne samo razvoj
            infrastrukture i provedbu aktivnosti, već i stvaranje održive
            budućnosti za sve sudionike. Njihova nesebična pomoć doprinosi
            očuvanju vrijednosti koje baštinimo iz Domovinskog rata i jačanju
            zajedništva.
          </p>
          <p>
            Iskreno zahvaljujemo svima koji su prepoznali našu misiju i odlučili
            biti dio ove priče.
          </p>
        </div>
      </div>
    </section>
  );
};
