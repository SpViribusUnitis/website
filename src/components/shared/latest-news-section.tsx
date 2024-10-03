import React from "react";
import { NewsCard } from "../cards/news-card";

export const LatestNewsSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 ">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12 text-start">
          Zadnje Novosti
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <NewsCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
