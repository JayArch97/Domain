import { useState, useEffect } from "react";
import Typewriter from "@/animations/Typewriter";
import DrManhattanProjectBackground from "@/assets/dr-manhattan-alone.jpg";
import { NavLink } from "react-router";

export default function Projects() {
  return (
    <img
      src={DrManhattanProjectBackground}
      className="fixed top-0 left-0 w-screen h-screen object-cover opacity-10 bg-transparent"
    />
  );
}
