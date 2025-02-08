"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import backgroundLinesDemo from "../components/backgroundlines.js"
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";
import { FloatingDockDemo } from "../components/FloatingDock.js"
import { FlipWordsDemo } from "../components/FlipWords.js"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import BackgrounGradientDemo from "../components/BackgroundGradient.js"
import {AnimatedTooltipPreview} from "../components/AnimatedTooltip"
import { TracingBeam } from "../components/ui/tracing-beam.tsx";

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
                <BackgrounGradientDemo/>
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
