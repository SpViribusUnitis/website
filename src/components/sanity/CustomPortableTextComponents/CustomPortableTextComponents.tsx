import React from "react";
import Image from "next/image";

import { YoutubeVideo } from "./YoutubeVideo";

import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export const CustomPortableTextComponents = {
  block: {
    h1: ({ children }: any) => {
      return <h1 className="text-3xl mb-3 mt-5 font-bold">{children}</h1>;
    },
    h2: ({ children }: any) => {
      return <h2 className=" text-2xl mb-3 mt-5 font-semibold">{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className="text-xl mb-3 mt-5 font-semibold">{children}</h3>;
    },
    h4: ({ children }: any) => {
      return <h4 className="text-lg mb-3 mt-5 font-semibold">{children}</h4>;
    },
    h5: ({ children }: any) => {
      return <h4 className="text-lg mb-3 mt-5 font-semibold">{children}</h4>;
    },
    normal: ({ children }: any) => {
      return <p className=" mb-2">{children}</p>;
    },
    blockquote: ({ children }: any) => {
      return <blockquote className="">{children}</blockquote>;
    },
    cite: ({ children, value }: any) => {
      return <cite className=" italic">{children}</cite>;
    },
  },
  list: {
    bullet: ({ children }: any) => {
      return <ul className="">{children}</ul>;
    },
  },
  types: {
    image: ({ value }: any) => {
      const imgDesc = value.imgDesc;
      return (
        <div className="">
          <Image
            alt={imgDesc ? imgDesc : "Decorative image related to article"}
            src={builder.image(value).width(800).height(400).url()}
            width={800}
            height={400}
          />
          {imgDesc && <p>{imgDesc}</p>}
        </div>
      );
    },
    youtube: ({ value }: any) => {
      const videoDesc = value.videoDesc;
      return (
        <div className="py-4">
          <YoutubeVideo videoData={{ url: value.url, videoDesc }} />
        </div>
      );
    },
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          className=" text-sky-600 hover:underline"
          rel="noreferrer"
          target="_blank"
        >
          {children}
        </a>
      );
    },
    "email-address": ({ children, value }: any) => {
      const emailValue = value.email;
      return (
        <a
          href={`mailto:${emailValue}`}
          className="text-sky-600 hover:underline"
          rel="noreferrer"
        >
          {children}
        </a>
      );
    },
  },
};
