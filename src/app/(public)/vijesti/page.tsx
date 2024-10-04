import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useGetPosts } from "@/api/use-get-posts";
import { useGetPostsPreview } from "@/api/use-get-posts-preview";
import { formatDate } from "@/lib/utils";
import { NewsCard } from "@/components/cards/news-card";

export default async function NewsPage({
  searchParams,
}: {
  searchParams: { category?: "događanja" | "novosti" };
}) {
  const { category } = searchParams;
  // If an invalid category is provided, return 404
  if (category && !["događanja", "novosti"].includes(category)) {
    notFound();
  }
  const vijestiData = await useGetPostsPreview(category);
  console.log(vijestiData);

  const naslov = category ? category : "Sve Vijesti";
  return (
    <div className="container mx-auto px-4 py-8 min-h-[70vh]">
      <h1 className="text-3xl font-bold mb-6  capitalize">{naslov}</h1>

      <div className="mb-6 flex gap-4">
        <Button asChild variant={!category ? "default" : "outline"}>
          <Link href="/vijesti">All</Link>
        </Button>
        <Button
          asChild
          variant={category === "događanja" ? "default" : "outline"}
        >
          <Link href="/vijesti?category=događanja">Događanja</Link>
        </Button>
        <Button
          asChild
          variant={category === "novosti" ? "default" : "outline"}
        >
          <Link href="/vijesti?category=novosti">Novosti</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vijestiData.map((vijest) => (
          <NewsCard previewPost={vijest} key={vijest._id} />
        ))}
      </div>

      {vijestiData.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          Vijesti nisu pronađene za ovu kategoriju.
        </p>
      )}
    </div>
  );
}
