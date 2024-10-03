import { Facebook, Globe, Instagram, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIconsList } from "../shared/social-icons-list";

export const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="logo" width={60} height={100} />
            <span className="text-lg font-bold">Viribus Unitis</span>
          </div>
          <nav className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span className="text-sm">info@acme.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span className="text-sm">www.acme.com</span>
            </div>
          </nav>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © 2024 Zadruga Branitelja Viribus Unitis All rights reserved.
          </p>
          <SocialIconsList dark={true} />
        </div>
      </div>
    </footer>
  );
};
