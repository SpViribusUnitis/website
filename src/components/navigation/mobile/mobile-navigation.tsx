"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  ChevronDown,
  ChevronUp,
  Facebook,
  Twitter,
  Instagram,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";

const NavItem = ({
  title,
  subItems,
  path,
  sheetClose,
}: {
  title: string;
  path?: string;
  subItems?: { path: string; title: string }[];
  sheetClose: (state: boolean) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!subItems) {
    return (
      <Link
        href={path ? path : "#"}
        className="block py-2 text-lg hover:text-primary"
        onClick={() => void sheetClose(false)}
      >
        {title}
      </Link>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-lg hover:text-primary">
        {title}
        {isOpen ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="ml-4 mt-2 flex flex-col space-y-2">
          {subItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="text-sm hover:text-primary"
              onClick={() => void sheetClose(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export const MobileNavSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-primary">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-center py-2">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/images/logo-sm.png"
                  width={100}
                  height={200}
                  alt="logo"
                  className="h-[150px] object-fill w-[130px]"
                />
              </Link>
            </div>
            <nav className="flex-grow space-y-4">
              <NavItem
                sheetClose={setIsOpen}
                title="O nama"
                subItems={[
                  { path: "/o-nama", title: "o nama" },
                  { path: "/ciljevi", title: "ciljevi" },
                  { path: "/sponzori", title: "sponzori" },
                ]}
              />
              <NavItem
                sheetClose={setIsOpen}
                title="Vijesti"
                subItems={[
                  { path: "/vijesti", title: "sve vijesti" },
                  { path: '/vijesti?category="novosti"', title: "novosti" },
                  {
                    path: '/vijesti?category="događanja"',
                    title: "događanja",
                  },
                ]}
              />
              <NavItem title="Kontakt" path="/kontakt" sheetClose={setIsOpen} />
            </nav>
            <div className="flex justify-center space-x-4 py-6">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
