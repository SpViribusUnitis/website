import React from "react";
import { NewsCard } from "../cards/news-card";
import { useGetLatestPosts } from "@/api/use-get-latest-posts";

export const LatestNewsSection = async () => {
  const zadnjeVijesti = await useGetLatestPosts(undefined, 3);
  if (!zadnjeVijesti) {
    return <div>Nema Posljednjih Vijesti</div>;
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 ">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12 text-start">
          Zadnje Novosti
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {zadnjeVijesti.map((vijest) => (
            <NewsCard previewPost={vijest} key={vijest._id} />
          ))}
        </div>
      </div>
    </section>
  );
};
