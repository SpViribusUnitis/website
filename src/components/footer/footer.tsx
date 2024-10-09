import { Facebook, Globe, Instagram, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIconsList } from "../shared/social-icons-list";
import { CONTACT_DATA } from "@/static";

export const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row  md:justify-around">
          <div className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="logo" width={60} height={100} />
            <span className="text-lg font-bold">Viribus Unitis</span>
          </div>
          <nav className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${CONTACT_DATA.mail}`} className="text-sm">
                {CONTACT_DATA.mail}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">{CONTACT_DATA.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span className="text-sm">www.bzvu.hr</span>
            </div>
          </nav>
          <div className="flex-col  items-end space-y-2">
            <h2 className="font-bold uppercase">Opće Informacije</h2>
            <ul className="space-y-1">
              <li>
                <span className="uppercase font-semibold mr-2">Ime: </span>{" "}
                Braniteljska zadruga VIRIBUS UNITIS,{" "}
              </li>
              <li>
                <span className="uppercase font-semibold mr-2">Adresa:</span>{" "}
                Poljana Zdenka Mikine 45, Zagreb,
              </li>
              <li>
                <span className="uppercase font-semibold mr-2">OIB:</span>{" "}
                08416373619,
              </li>
              <li>
                <span className="uppercase font-semibold mr-2">
                  Upravitelj:
                </span>{" "}
                Vitomir Ćavar
              </li>
              <li>
                <span className="uppercase font-semibold mr-2">Banka:</span>{" "}
                Hrvatska poštanska banka d.d.
              </li>
              <li>
                <span className="uppercase font-semibold mr-2">
                  Broj Računa:
                </span>{" "}
                HR8523900011101242348
              </li>
              <li>
                <span className="uppercase font-semibold mr-2">IBAN:</span> HR85
                2390 0011 1012 4234 8
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © 2024 Zadruga Branitelja Viribus Unitis All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
