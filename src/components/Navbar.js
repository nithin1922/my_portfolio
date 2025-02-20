"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";


export default function NavbarDemo() {
  return (
    (<div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>)
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null); 
  return (
    (<div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About" >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#about-me">About Me</HoveredLink>
            {/* <HoveredLink href="/interface-design">Tech Stack</HoveredLink>
            <HoveredLink href="/seo">Interests</HoveredLink> */}
           {/* <HoveredLink href="/branding">Certifications</HoveredLink> */}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="QA system using NLP"
              href="https://github.com/nithin1922/QA-System-using-NLP"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="This project implements a Question-Answering (QA) system using the BERT model." />
            <ProductItem
              title="Blockchain based Voting system"
              href="https://github.com/nithin1922/Blockchain-Based-Voting-System"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="A decentralized voting application built on the Ethereum blockchain, ensuring secure, tamper-proof, and transparent electronic voting." />
            <ProductItem
              title="AI trader using RNN"
              href="https://github.com/nithin1922/AI-Trader-using-RNN"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="AI Trader is a deep reinforcement learning-based trading bot that uses a neural network to make stock trading decisions." />
            {/* <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI" /> */}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Resume">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Resume.pdf" newTab> Overview</HoveredLink>
            {/* <HoveredLink href="/individual">Nithin AI</HoveredLink> */}
            <HoveredLink href="/Resume.pdf" download>Download </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>)
  );
}
