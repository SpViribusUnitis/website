import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const NewsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exciting Development in Tech</CardTitle>
        <CardDescription>2 days ago</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mt-4"
          href="#"
        >
          Read More
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
};
