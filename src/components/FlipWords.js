import React from "react";
import { FlipWords } from "./ui/flip-words";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function FlipWordsDemo() {
  const words = ["Software Development", "Data Engineering" ,"Artificial Intelligence" , "Machine Learning","Cloud Computing"];
  const name = [
    {
      text: "Sai",
    },
    {
      text: "Nithin",
    },
    {
      text: "Reddy",
    },
  ];

  return (
    (     
    <div>
        <TypewriterEffectSmooth words={name} className="lg"/>
      <div
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Proficient In <br/> <FlipWords words={words}/>
      </div>
    </div>
    )   
  );
}
