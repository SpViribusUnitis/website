"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { HERO_SECTION_IMAGES } from "@/static";
import Link from "next/link";

export const HeroSection = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  return (
    <section className="w-full py-6 md:py-24 lg:pt-16 lg:pb-2 xl:pt-24 xl:pb-2  container mx-auto">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-12 xl:grid-cols-[1fr_1fr] items-center">
          <div className="flex flex-col justify-center  space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Viribus Unitis – Snagom Zajedništva, Utemeljeni u Ponosu
              </h1>
              <p className="text-xl text-muted-foreground">
                Veterani Domovinskog rata za održivi razvoj i očuvanje
                tradicije.
              </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Zadruga Viribus Unitis okuplja hrvatske branitelje koji zajednički
              rade na projektima održivog razvoja i socijalne podrške. Kroz
              radno-duhovni kamp Anatot i razne inicijative, zadruga promiče
              ekološki razvoj, podršku braniteljima i očuvanje kulturne baštine,
              gradeći bolju budućnost za zajednicu i nove generacije.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/o-nama">O Nama</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/kontakt">Kontakt</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 lg:gap-2 ">
            <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-lg h-[400px] w-full">
              <Image
                src="/images/hero-section/1.jpg"
                alt="Company Image 1"
                width={800}
                height={600}
                className="object-cover transition-transform duration-300 ease-in-out hover:scale-110 w-full "
                onMouseEnter={() => setHoveredImage(1)}
                onMouseLeave={() => setHoveredImage(null)}
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/hero-section/2.jpg"
                alt="Company Image 2"
                width={300}
                height={300}
                className="object-cover transition-transform duration-300 ease-in-out hover:scale-110 w-full"
                onMouseEnter={() => setHoveredImage(2)}
                onMouseLeave={() => setHoveredImage(null)}
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/hero-section/3.jpg"
                alt="Company Image 3"
                width={300}
                height={300}
                className="object-cover transition-transform duration-300 ease-in-out hover:scale-110 w-full"
                onMouseEnter={() => setHoveredImage(3)}
                onMouseLeave={() => setHoveredImage(null)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
