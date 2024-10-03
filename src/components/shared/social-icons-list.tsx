import { cn } from "@/lib/utils";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

export const SocialIconsList = ({ dark = false }: { dark?: boolean }) => {
  return (
    <div className="flex space-x-4 mt-4 sm:mt-0">
      <Link
        href="#"
        className={cn(
          "text-muted-foreground hover:text-primary",
          dark && "text-accent/80 hover:text-accent"
        )}
      >
        <Facebook className="h-5 w-5" />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link
        href="#"
        className={cn(
          "text-muted-foreground hover:text-primary",
          dark && "text-accent/80 hover:text-accent"
        )}
      >
        <Twitter className="h-5 w-5" />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link
        href="#"
        className={cn(
          "text-muted-foreground hover:text-primary",
          dark && "text-accent/80 hover:text-accent"
        )}
      >
        <Instagram className="h-5 w-5" />
        <span className="sr-only">Instagram</span>
      </Link>
    </div>
  );
};
