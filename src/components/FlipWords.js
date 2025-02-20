import React from "react";
import { FlipWords } from "./ui/flip-words";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function FlipWordsDemo() {
  const words = [
    "Software Development",
    "Data Engineering",
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud Computing",
  ];

  const intro = "Hello! I'm"; // No typewriter effect, just static text

  const name = [
    { text: "Sai" },
    { text: "Nithin" },
    { text: "Reddy" },
  ];

  return (
    <div className="text-center space-y-4">
        <TextGenerateEffect words ={intro}/>

      {/* Typewriter effect for your name "Sai Nithin Reddy" */}
      <div className="text-3xl font-bold">
        <TypewriterEffectSmooth words={name} className="lg" />
      </div>

      {/* Flip words for skills */}
      <div className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400">
        Proficient In <br />
        <FlipWords words={words} />
      </div>
    </div>
  );
}
