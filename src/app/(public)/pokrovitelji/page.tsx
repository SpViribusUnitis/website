import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const SponzoriPage = () => {
  const categories = [
    {
      title: "Sponzori",
      description: "Tvrtke i organizacije koje financijski podržavaju naš rad.",
      sponsors: [
        { name: "Tvrtka A", logo: "/images/placeholders/logo-placeholder.jpg" },
        { name: "Tvrtka B", logo: "/images/placeholders/logo-placeholder.jpg" },
        { name: "Tvrtka A", logo: "/images/placeholders/logo-placeholder.jpg" },
        { name: "Tvrtka B", logo: "/images/placeholders/logo-placeholder.jpg" },
        { name: "Tvrtka A", logo: "/images/placeholders/logo-placeholder.jpg" },
        { name: "Tvrtka B", logo: "/images/placeholders/logo-placeholder.jpg" },
        { name: "Tvrtka A", logo: "/images/placeholders/logo-placeholder.jpg" },
        { name: "Tvrtka B", logo: "/images/placeholders/logo-placeholder.jpg" },
        // Dodajte više sponzora po potrebi
      ],
    },
    {
      title: "Donatori",
      description:
        "Pojedinci i organizacije koji su donirali sredstva ili materijale.",
      sponsors: [
        {
          name: "Donator X",
          logo: "/images/placeholders/logo-placeholder.jpg",
        },
        {
          name: "Donator Y",
          logo: "/images/placeholders/logo-placeholder.jpg",
        },
        // Dodajte više donatora po potrebi
      ],
    },
    {
      title: "Suorganizatori",
      description:
        "Partneri koji nam pomažu u organizaciji i provedbi aktivnosti.",
      sponsors: [
        {
          name: "Partner 1",
          logo: "/images/placeholders/logo-placeholder.jpg",
        },
        {
          name: "Partner 2",
          logo: "/images/placeholders/logo-placeholder.jpg",
        },
        // Dodajte više suorganizatora po potrebi
      ],
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        Pokrovitelji (DIO STRANICE U IZRADI)
      </h1>
      {categories.map((category, index) => (
        <section key={index} className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">{category.title}</h2>
          <p className="text-lg text-muted-foreground mb-6">
            {category.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.sponsors.map((sponsor, sponsorIndex) => (
              <Card key={sponsorIndex} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={100}
                      height={100}
                      className="mb-4"
                    />
                    <h3 className="text-xl font-medium">{sponsor.name}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default SponzoriPage;
