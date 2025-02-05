import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";
import { FloatingDockDemo } from "../components/FloatingDock.js"
import { FlipWordsDemo } from "../components/FlipWords.js"

export default function BackgroundLinesDemo() {
  return (
    (
    <div className="mt-10">
    <BackgroundLines className="flex flex-col items-center text-center w-full">
    <Image className= "relative z-20 border-4 border-white rounded-full mt-20" src="/myimage.jpeg" alt="x" width={300} height={300}  />
      <FlipWordsDemo/>
      <div className="mt-10">
      <FloatingDockDemo/>
      </div>
    </BackgroundLines>
    </div>
    )
  );
}
