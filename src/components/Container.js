"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import { StickyScrollRevealDemo } from "../components/StickyScrollReveal.js"

export function HeroScrollDemo() {
  return (
    (<div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Welcome To My <br />
              <span className="text-4xl md:text-[3rem] font-bold mt-1 leading-none">
                Portfolio
              </span>
            </h1>
          </>
        }>
        <StickyScrollRevealDemo/>
      </ContainerScroll>
    </div>)
  );
}
