"use client";
import React, { useEffect } from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Service from "./services/Service";
import Project from "./project/Project";
import Skill from "./skill/Skill";
import Contact from "./contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import DynamicProject from "./project/dynamic";
import Cer from "./certificate/Cer";
import Dynamic from "./dynamic/Dynamic";
import Volen from "./volen/Volen";
import Tool from "./tool/tool";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero></Hero>
      <About></About>
      <Cer></Cer>
      <Volen></Volen>
      <Service></Service>
      <Project></Project>
      <Dynamic></Dynamic>
      <DynamicProject></DynamicProject>
      <Skill></Skill>
      <Tool></Tool>
      <Contact></Contact>
    </div>
  );
}
