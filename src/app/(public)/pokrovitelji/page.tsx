import { useGetSponzors } from "@/api/use-get-sponsors";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { cn } from "@/lib/utils";
const builder = imageUrlBuilder(client);
const SponzoriPage = async () => {
  const pokroviteljiData = await useGetSponzors();
  const categories = [
    {
      title: "sponzor",
      description: "Tvrtke i organizacije koje financijski podržavaju naš rad.",
    },
    {
      title: "donator",
      description:
        "Pojedinci i organizacije koji su donirali sredstva ili materijale.",
    },
    {
      title: "suorganizator",
      description:
        "Partneri koji nam pomažu u organizaciji i provedbi aktivnosti.",
    },
  ];
  if (!pokroviteljiData) {
    return <div>Nešto je pošlo po krivome</div>;
  }
  const sponzoriData = pokroviteljiData.filter((p) => p.type === "sponzor");
  const donatoriData = pokroviteljiData.filter((p) => p.type === "donator");
  const suorganizatorData = pokroviteljiData.filter(
    (p) => p.type === "suorganizator"
  );
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Pokrovitelji</h1>
      {categories.map((category, index) => (
        <section key={index} className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 uppercase">
            {category.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            {category.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pokroviteljiData
              .filter((p) => p.type === category.title)
              .map((item) => {
                const { url, logo, name, _id } = item;
                return (
                  <Card
                    key={_id}
                    className={cn(
                      "overflow-hidden",
                      url && "hover:bg-gray-400/10 hover:text-blue-500 p-4"
                    )}
                  >
                    <CardContent className="p-2">
                      <div className={cn("flex flex-col items-center group")}>
                        <a
                          href={url ? url : "#"}
                          target="_blank"
                          className={cn(
                            "space-y-2 cursor-default w-full flex flex-col items-center",
                            url && "cursor-pointer  transition-colors"
                          )}
                        >
                          <Image
                            src={builder.image(logo).url()}
                            alt={`${name} logo`}
                            width={200}
                            height={200}
                            className="mb-4"
                          />
                          <h3 className="text-xl font-medium">{name}</h3>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default SponzoriPage;
