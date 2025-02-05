import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Software Development", "Data Engineering" ,"Artificial Intelligence" , "Machine Learning"];

  return (
    (     
    <div>
        <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Sai Nithin Reddy
        </h2>
      <div
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Proficient In <br/> <FlipWords words={words}/>
      </div>
    </div>
    )   
  );
}
