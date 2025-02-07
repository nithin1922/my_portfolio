"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "About",
    description:
      "I’m Sai Nithin Reddy Vantari, a Data Engineer and Software Developer deeply immersed in the latest technologies, from cloud computing and AI to blockchain and big data. With over 2 years of professional experience and a Master’s in Computer Science, I’ve built scalable data pipelines, automated workflows, and developed cutting-edge solutions using tools like Azure Databricks, Power BI, and React.js. My expertise spans Python, SQL, and machine learning libraries, and I’m passionate about leveraging innovation to solve complex problems. Whether it’s designing ETL pipelines, creating AI-powered systems, or optimizing databases, I bring a blend of technical knowledge and a forward-thinking approach to every project.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Technical Stack",
    description:
      "I specialize in a wide range of technologies and tools that power modern data engineering and software development. My expertise includes Python, Java, C++, SQL, and JavaScript for programming, along with ETL processes using Azure Data Factory and SSIS. I’m proficient in cloud platforms like Microsoft Azure, AWS, and GCP, and I’ve worked extensively with big data tools such as Apache Spark, Hadoop, and Kafka. For database management, I’ve optimized systems using PostgreSQL, Snowflake, and MongoDB, and I’ve built dynamic visualizations with Power BI, Matplotlib, and Seaborn. Additionally, I’ve developed AI/ML solutions using scikit-learn, TensorFlow, and PyTorch, and I’m skilled in CI/CD pipelines with Azure Pipelines and Jenkins. Whether it’s web development with React.js and Node.js or working with blockchain technologies like Ethereum and Solidity, I bring a versatile skill set to tackle diverse challenges.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    (<div className="p-10">
      <StickyScroll content={content} />
    </div>)
  );
}
