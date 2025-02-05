import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";
import { FloatingDockDemo } from "../components/FloatingDock.js"

export default function BackgroundLinesDemo() {
  return (
    (
    <div className="mt-10">
    <BackgroundLines className="flex flex-col items-center text-center w-full">
    <Image className= "relative z-20 border-4 border-white rounded-full mt-20" src="/myimage.jpeg" alt="x" width={300} height={300}  />
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Sai Nithin Reddy
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Welcome to my portfolio <br /> Data Engineer, Software Developer
      </p>
      <div className="mt-10">
      <FloatingDockDemo/>
      </div>
    </BackgroundLines>
    </div>
    )
  );
}
