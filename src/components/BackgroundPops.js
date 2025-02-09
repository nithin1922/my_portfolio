import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";
import { FloatingDockDemo } from "../components/FloatingDock.js"
import { FlipWordsDemo } from "../components/FlipWords.js"

export function BackgroundBeamsWithCollisionDemo() {
  return (
    (<BackgroundBeamsWithCollision>
              <div className="mt-10 flex flex-col items-center text-center w-full">
              <Image className= "relative z-20 border-4 border-white rounded-full mt-20" src="/myimage.jpeg" alt="x" width={300} height={300}  />
                <FlipWordsDemo/>
                <div className="mt-10">
                <FloatingDockDemo/>
                </div>
              </div>
    </BackgroundBeamsWithCollision>)
  );
}
