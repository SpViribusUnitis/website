import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IPostPreview } from "@/api/use-get-posts-preview";
import { formatDate } from "@/lib/utils";
import { Button } from "../ui/button";

interface INewsCardProps {
  previewPost: IPostPreview;
}

export const NewsCard = ({ previewPost }: INewsCardProps) => {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{previewPost.title}</CardTitle>
        <CardDescription>{formatDate(previewPost._createdAt)}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{previewPost.previewText}</p>
      </CardContent>
      <CardFooter className="flex-1 mb-auto h-full flex-col items-start justify-end">
        <Button variant="outline" asChild>
          <Link href={`/vijesti/${previewPost.slug}`}>Pročitaj više</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
