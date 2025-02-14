"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/sai-nithin-reddy-v-",
    },
    {
      title: "WhatsApp",
      icon: (
        <IconBrandWhatsapp  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://api.whatsapp.com/send?phone=16182033991",
    },

    {
      title: "Gmail",
      icon: (
        <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:sainithinreddy1901@gmail.com",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/nithin1922",
    },
  ];
  return (
    (<div className="flex items-center justify-center w-full">
      <FloatingDock
        // only for demo, remove for production
        
        items={links} />
    </div>)
  );
}
