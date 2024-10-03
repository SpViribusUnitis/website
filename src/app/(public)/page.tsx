import { useGetPosts } from "@/api/use-get-posts";
import { HeroSection } from "@/components/homepage/hero-section";
import { LatestNewsSection } from "@/components/shared/latest-news-section";
import { SponsorSection } from "@/components/shared/sponsor-section";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

const HomePage = async () => {
  const data = await useGetPosts("dogadjanja");
  console.log(data);
  return (
    <main>
      <HeroSection />
      <LatestNewsSection />
      <SponsorSection />
    </main>
  );
};

export default HomePage;
