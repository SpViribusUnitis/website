"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { AxeIcon } from "lucide-react";
import Image from "next/image";

const vijestiSubItems: { title: string; href: string; description: string }[] =
  [
    {
      title: "Novosti",
      href: "/vijesti?category=novosti",
      description:
        "Najnovije informacije o aktivnostima, suradnjama i projektima zadruge Viribus Unitis",
    },
    {
      title: "Dogadjanja",
      href: "/vijesti?category=događanja",
      description:
        "Detalji o nadolazećim događanjima, radionicama i sajmovima koje organizira zadruga",
    },

    {
      title: "Sve Vijesti",
      href: "/vijesti",
      description:
        " Pogledajte sve objave i novosti na jednom mjestu, od aktualnih događaja do važnih najava",
    },
  ];

export function DesktopNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>O Nama</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] relative">
              <li className="row-span-3 relative shrink-0">
                <NavigationMenuLink asChild>
                  <a
                    className="flex  h-full w-full select-none   rounded-md p-1 px-1 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image
                      src="/images/logo.png"
                      alt="Zadruga logo"
                      width={350}
                      height={200}
                      className="object-contain"
                    />
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/o-nama" title="O Nama">
                Saznajte više o nama
              </ListItem>
              <ListItem href="/o-nama#ciljevi" title="Ciljevi">
                Ciljevi i vizija zadruge
              </ListItem>
              <ListItem href="/o-nama#pravilnik" title="Pravila Zadruge">
                Detaljniji uvid u pravila naše zadruge
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Vijesti</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {vijestiSubItems.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pokrovitelji" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pokrovitelji
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/kontakt" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Kontakt
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
