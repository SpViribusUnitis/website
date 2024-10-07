import React from "react";
import { DesktopNavigation } from "./desktop-navigation";
import { HamIcon } from "lucide-react";
import Image from "next/image";
import { headers } from "next/headers";
import { MobileNavSidebar } from "./mobile/mobile-navigation";
import Link from "next/link";

export const Navigation = () => {
  const headersList = headers();

  return (
    <nav className="h-[120px] flex justify-between py-4 items-center container mx-auto">
      <div className="flex-1">
        <Link href={"/"}>
          <Image
            src="/images/logo.png"
            alt="braniteljska zadruga viribus unitis"
            width={100}
            height={100}
            className="object-contain h-full"
          />
        </Link>
      </div>
      <div className="hidden md:block">
        <DesktopNavigation />
      </div>
      <MobileNavSidebar />
      <div className=" max-md:hidden md:flex-1" />
    </nav>
  );
};
