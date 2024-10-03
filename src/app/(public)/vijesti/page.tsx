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

// Simulated news data
const newsData = [
  {
    id: 1,
    title: "New Park Opening",
    category: "dogadjanja",
    date: "2024-03-15",
    description: "A new park is opening in the city center.",
  },
  {
    id: 2,
    title: "Local Elections Announced",
    category: "novosti",
    date: "2024-03-20",
    description: "Local elections have been scheduled for next month.",
  },
  {
    id: 3,
    title: "Community Cleanup Event",
    category: "dogadjanja",
    date: "2024-03-25",
    description: "Join us for a community cleanup event this weekend.",
  },
  {
    id: 4,
    title: "New Public Transportation Routes",
    category: "novosti",
    date: "2024-03-30",
    description: "New bus routes will be implemented starting next week.",
  },
];

export default function NewsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const { category } = searchParams;

  // Filter news based on category
  const filteredNews = category
    ? newsData.filter((news) => news.category === category)
    : newsData;

  // If an invalid category is provided, return 404
  if (category && !["dogadjanja", "novosti"].includes(category)) {
    notFound();
  }
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
          variant={category === "dogadjanja" ? "default" : "outline"}
        >
          <Link href="/vijesti?category=dogadjanja">Događanja</Link>
        </Button>
        <Button
          asChild
          variant={category === "novosti" ? "default" : "outline"}
        >
          <Link href="/vijesti?category=novosti">Novosti</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((news) => (
          <Card key={news.id}>
            <CardHeader>
              <CardTitle>{news.title}</CardTitle>
              <CardDescription>{news.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{news.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No news articles found for this category.
        </p>
      )}
    </div>
  );
}
