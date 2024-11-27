"use client";

import { useState } from "react";

export default function AboutUsVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full py-2 ">
      <div className="container px-4 md:px-6 xl:pb-12  mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <p className="mt-4 text-lg text-muted-foreground max-w-[1000px] italic">
            " Anatot kamp kod Brdovca u jednom zakutku kod Zagreba. Novi je
            prostor za susrete branitelja sa sobom , drugima i sa Bogom. "
          </p>

          <div className="mt-8 w-full max-w-[800px] aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/vnzGbeWWIZs"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
