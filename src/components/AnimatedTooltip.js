"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "AWS",
    designation: "",
    image:
      "https://www.svgrepo.com/show/448266/aws.svg",
  },
  {
    id: 2,
    name: "Python",
    designation: "",
    image:
      "https://www.svgrepo.com/show/374016/python.svg",
  },
  {
    id: 3,
    name: "Jenkins",
    designation: "",
    image:
      "https://www.svgrepo.com/show/373699/jenkins.svg",
  },
  {
    id: 4,
    name: "TensorFlow",
    designation: "",
    image:
      "https://www.svgrepo.com/show/354440/tensorflow.svg",
  },
  {
    id: 5,
    name: "Docker",
    designation: "",
    image:
      "https://www.svgrepo.com/show/373553/docker.svg",
  },
  {
    id: 6,
    name: "PostgreSql",
    designation: "",
    image:
      "https://www.svgrepo.com/show/354200/postgresql.svg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    (<div className="flex flex-row items-center justify-center mb-10 w-full gap-3">
      <AnimatedTooltip items={people} />
    </div>)
  );
}
