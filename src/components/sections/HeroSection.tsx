"use client";

import { cn } from "@/lib/utils";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

export function HeroSection() {
  const words = "Sistemas inteligentes que transforman tu negocio";

  return (
    <section id="hero" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[var(--surface)] text-white">
      <div className="z-10 flex w-full max-w-4xl flex-col items-center justify-center px-4 text-center">
        <TextGenerateEffect words={words} className="mb-6 text-4xl font-bold tracking-tight md:text-6xl" />
        
        <p className="mb-10 max-w-2xl text-lg text-[var(--text-secondary)] md:text-xl">
          Desarrollo de software a medida con IA agéntica. Automatizo procesos, construyo ERPs y plataformas SaaS que escalan.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link href="#contacto">
            <Button
              borderRadius="1.75rem"
              className="bg-[var(--surface-light)] text-white border-slate-800"
            >
              Agenda una llamada
            </Button>
          </Link>
          <Link 
            href="#proyectos"
            className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors px-6 py-3"
          >
            Ver proyectos
          </Link>
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
}
