import { cn } from "@/lib/utils";
import { CONTACT_DATA } from "@/static";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

export const SocialIconsList = ({ dark = false }: { dark?: boolean }) => {
  return (
    <div className="flex space-x-4 mt-4 sm:mt-0">
      <a
        href={CONTACT_DATA.facebook}
        className={cn(
          "text-muted-foreground hover:text-primary",
          dark && "text-accent/80 hover:text-accent"
        )}
        target="_blank"
      >
        <Facebook className="h-5 w-5" />
        <span className="sr-only">Facebook</span>
      </a>
      {/*  <Link
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
      </Link> */}
    </div>
  );
};
