import { Footer } from "@/components/footer/footer";
import { Navigation } from "@/components/navigation/navigation";
import React from "react";

const WebsiteLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="max-md:px-1">
      {" "}
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
