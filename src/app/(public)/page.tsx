import { useGetPosts } from "@/api/use-get-posts";
import { HeroSection } from "@/components/homepage/hero-section";
import { DonacijaBanner } from "@/components/shared/donacija-banner";
import { LatestNewsSection } from "@/components/shared/latest-news-section";
import { SponsorSection } from "@/components/shared/sponsor-section";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import Image from "next/image";

export const generateMetadata = (): Metadata => {
  return {
    title: " Braniteljska zadruga Viribus Unitis",
    description:
      "Braniteljska zadruga Viribus Unitis. Ujedinjenim snagama gradimo bolju budućnost.",
    openGraph: {
      title: "Braniteljska zadruga Viribus Unitis",
      description:
        "Braniteljska zadruga Viribus Unitis. Ujedinjenim snagama gradimo bolju budućnost.",
      images: [
        {
          url: "/images/logo-sm.png",
          width: 600,
          height: 330,
          alt: "Braniteljska zadruga Viribus Unitis",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "O nama | Braniteljska zadruga Viribus Unitis",
      description:
        "aznajte više o Braniteljskoj zadruzi Viribus Unitis, našoj misiji, proizvodima i ciljevima.",
      images: ["/images/logo-sm.png"],
    },
  };
};

const HomePage = async () => {
  const data = await useGetPosts("dogadjanja");

  return (
    <main>
      <HeroSection />
      <LatestNewsSection />
      <SponsorSection />
      <div className="bg-gray-100 ">
        <DonacijaBanner />
      </div>
    </main>
  );
};

export default HomePage;
