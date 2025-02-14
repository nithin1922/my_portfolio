"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { FloatingDockDemo } from "../components/FloatingDock.js"
import { FlipWordsDemo } from "../components/FlipWords.js"
import {AnimatedTooltipPreview} from "../components/AnimatedTooltip"
import Image from "next/image";

export function AuroraBackgroundDemo() {
  return (
    (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4">
              <div className="mt-10 flex flex-col items-center text-center w-full">
                {/* <BackgrounGradientDemo/> */}
                <div className="rounded-full overflow-hidden w-[220px] h-[220px]">
                    <Image
                        src="/myimage.jpeg"
                        alt="jordans"
                        height="300"
                        width="300"
                        objectFit="cover"
                        className="w-full h-full"
                      />
                    </div>
                <FlipWordsDemo/>
                <div className="mt-5">
                <AnimatedTooltipPreview/>
                <FloatingDockDemo/>
                </div>
              </div>

      </motion.div>
    </AuroraBackground>
    )
  );
}
