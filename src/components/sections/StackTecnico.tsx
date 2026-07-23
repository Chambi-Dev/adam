"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

const techItems = [
  { name: "Python", title: "Backend & IA", quote: "Lenguaje principal para desarrollo backend y modelos de IA." },
  { name: "Next.js", title: "Frontend moderno", quote: "Framework de React para interfaces escalables y rápidas." },
  { name: "PyTorch", title: "Deep Learning", quote: "Librería líder para investigación y producción de modelos de DL." },
  { name: "TensorFlow", title: "Machine Learning", quote: "Ecosistema integral para ML." },
  { name: "Docker", title: "Contenedores", quote: "Empaquetado y despliegue aislado de aplicaciones." },
  { name: "Cloudflare", title: "Edge & CDN", quote: "Seguridad y entrega de contenido global ultrarrápida." },
  { name: "PostgreSQL", title: "Base de datos", quote: "Motor de base de datos relacional robusto y open source." },
  { name: "FastAPI", title: "APIs de alto rendimiento", quote: "Framework web para construir APIs modernas con Python." },
  { name: "LangChain", title: "Agentes de IA", quote: "Framework para desarrollar aplicaciones impulsadas por LLMs." },
  { name: "Git", title: "Control de versiones", quote: "Gestión de código fuente distribuida." },
];

export const StackTecnico = () => {
  return (
    <section id="stack" className="py-20 md:py-32 bg-[#0a0a0f] overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Stack Técnico
        </h2>
        <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto">
          Las herramientas que potencian cada proyecto.
        </p>
      </div>
      <div className="w-full relative flex items-center justify-center">
        <InfiniteMovingCards
          items={techItems}
          direction="left"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default StackTecnico;
