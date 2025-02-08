"use client";;
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";


export default function BackgroundGradientDemo() {
  return (
    (<div className="flex justify-center items-center">
      <BackgroundGradient className="rounded-full max-w-sm bg-white dark:bg-zinc-900">
        <Image
          src={`/myimage.jpeg`}
          alt="jordans"
          height="300"
          width="300"
          objectFit="cover"
          className="rounded-3xl" />
      </BackgroundGradient>
    </div>)
  );
}
