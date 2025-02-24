"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "About Me",
    id: "about-me",
    description:(
      <>
      🚀 <strong>Data Engineer | AI & ML Enthusiast | Cloud & MLOps Practitioner</strong>
      <br />
      <br />
      I am a Data Engineer and Software Developer with over 2 years of experience in designing scalable data pipelines, optimizing databases, and building cloud-based solutions.
      <br />
      <br />
      My expertise spans across Azure, Python, Databricks, Snowflake, and ETL workflows, enabling me to build efficient data-driven solutions.
    </>
    ),
    content: (
      <div
        className="">
        <Image
          src={"/AboutImage.webp"}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Tech Stack",
    id: "tech-stack",
    description:
    (
      <>
        <strong>Programming:</strong> Python, Java, C++, SQL, JavaScript, Bash
        <br />
        <strong>Machine Learning & MLOps:</strong> TensorFlow, PyTorch, Scikit-learn, MLflow, Kubernetes, Docker, CI/CD
        <br />
        <strong>Data Engineering:</strong> Azure Databricks, Snowflake, Apache Spark, ETL (Azure Data Factory, SSIS), Kafka, Airflow
        <br />
        <strong>Cloud Technologies:</strong> Microsoft Azure, AWS, GCP
        <br />
        <strong>Database Management:</strong> PostgreSQL, Snowflake, MongoDB, Oracle
        <br />
        <strong>Data Visualization:</strong> Power BI, Matplotlib, Seaborn
        <br />
        <strong>Big Data Technologies:</strong> Hive, HDFS, NoSQL
        <br />
        <strong>Web Development:</strong> React.js, Node.js
      </>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={"/AboutImage.webp"}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Passion for AI & ML",
    id: "beyond-code",
    description:
    (
      <>
        As the industry shifts toward AI, I am deeply invested in Machine Learning, Large Language Models (LLMs), and MLOps. I have worked on NLP-based Question Answering Systems and explored AI model deployment using TensorFlow, PyTorch, and MLflow. My data engineering background gives me a unique edge in building AI pipelines and optimizing model performance in production.
        <br />
        <br />
        I thrive on solving complex problems and love collaborating with like-minded professionals. I&apos;m actively seeking AI/ML/Data Engineering opportunities where I can bridge the gap between big data, AI models, and cloud computing. If you&apos;re working on cutting-edge AI solutions or looking for a data engineer with a passion for AI, let&apos;s connect!
      </>
    ),
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Projects I’ve Worked on",
    description:
      <span>
      Question Answering System using Natural Language Processing:<br/>
      • Developed an AI-powered question answering system that provides precise answers extracted from documents by utilizing transformer architecture to train on advanced vocabulary and grammar learning techniques, enabling direct answer extraction from document datasets.<br/>
      • Tools Used: Tensor flow, Machine Learning, Python, Jupyter Notebook<br/> 
      <br/>
      Blockchain Based Voting System<br/>
      • Created a decentralized voting application on the Ethereum blockchain that leverages smart contracts written in Solidity to ensure secure and tamper-proof electronic voting across multiple devices, providing a robust and transparent voting mechanism.<br/>
      • Tools Used: Ethereum Blockchain, Solidity, Smart Contracts, Web3 Technologies, Decentralized Applications
      </span>,
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
