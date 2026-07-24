"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Proyectos } from "@/components/sections/Proyectos";
import { ProcesoTimeline } from "@/components/sections/ProcesoTimeline";
import { StackTecnico } from "@/components/sections/StackTecnico";
import { SobreTi } from "@/components/sections/SobreTi";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/sections/WhatsAppButton";

// Lazy load the heaviest section (animations + typewriter + intersection observer)
const DemoSimulada = dynamic(
  () => import("@/components/sections/DemoSimulada"),
  {
    ssr: false,
    loading: () => (
      <section className="py-24 bg-surface">
        <div className="section-container flex items-center justify-center min-h-[400px]">
          <div className="flex gap-2">
            <div className="typing-dot" />
            <div className="typing-dot" />
            <div className="typing-dot" />
          </div>
        </div>
      </section>
    ),
  }
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ValueProposition />
        <DemoSimulada />
        <Proyectos />
        <ProcesoTimeline />
        <StackTecnico />
        <SobreTi />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
