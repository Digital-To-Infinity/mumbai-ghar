import React from "react";
import { AboutHero } from "@/components/About/AboutHero";
import { AboutPhilosophy } from "@/components/About/AboutPhilosophy";
import { AboutStats } from "@/components/About/AboutStats";
import { AboutVision } from "@/components/About/AboutVision";

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <AboutHero />
      <AboutPhilosophy />
      <AboutStats />
      <AboutVision />
    </div>
  );
}

