"use client";
import copy from "copy-to-clipboard";
import { useToast } from "@/hooks/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import React from "react";
import { formatDate } from "@/lib/utils";
export const ArticleTitleDate = ({ publishedAt }: { publishedAt: string }) => {
  const { toast } = useToast();
  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Pogledajte ovaj zanimljiv članak!");
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`,
      "_blank"
    );
  };
  return (
    <div className="flex gap-2">
      <p className="text-gray-600 mb-4">{formatDate(publishedAt)}</p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="w-6 h-6"
              onClick={() => {
                copy(window.location.href);
                toast({
                  title: "URL Kopiran 👍",
                });
              }}
              aria-label="Kopiraj URL članka"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p> Kopiraj URL</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
