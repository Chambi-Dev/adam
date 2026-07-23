"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { cn } from "@/lib/utils";

export const ProcesoTimeline = () => {
  const data = [
    {
      title: "Descubrimiento",
      content: (
        <div>
          <p className="text-[var(--text-secondary)] text-sm md:text-base font-normal mb-4">
            Analizo tu operación actual, identifico cuellos de botella y oportunidades de automatización. Entiendo tu negocio antes de escribir una sola línea de código.
          </p>
          <ul className="list-disc list-inside text-[var(--text-muted)] text-sm md:text-base space-y-2">
            <li>Entrevistas con stakeholders</li>
            <li>Mapeo de procesos actuales</li>
            <li>Identificación de quick wins</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Arquitectura y Diseño",
      content: (
        <div>
          <p className="text-[var(--text-secondary)] text-sm md:text-base font-normal mb-4">
            Diseño la solución técnica: base de datos, APIs, integraciones, flujos de IA. Todo documentado antes de empezar a construir.
          </p>
          <ul className="list-disc list-inside text-[var(--text-muted)] text-sm md:text-base space-y-2">
            <li>Diseño de base de datos</li>
            <li>Arquitectura de microservicios</li>
            <li>Prototipos interactivos</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Desarrollo Iterativo",
      content: (
        <div>
          <p className="text-[var(--text-secondary)] text-sm md:text-base font-normal mb-4">
            Construyo en sprints de 1-2 semanas con demos al final de cada uno. Ajustamos el rumbo en tiempo real, no al final del proyecto.
          </p>
          <ul className="list-disc list-inside text-[var(--text-muted)] text-sm md:text-base space-y-2">
            <li>Entregas semanales</li>
            <li>Testing continuo</li>
            <li>Feedback integrado</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Entrega y Evolución",
      content: (
        <div>
          <p className="text-[var(--text-secondary)] text-sm md:text-base font-normal mb-4">
            Deploy en producción con monitoreo, documentación completa y soporte post-lanzamiento. Tu sistema crece contigo.
          </p>
          <ul className="list-disc list-inside text-[var(--text-muted)] text-sm md:text-base space-y-2">
            <li>Deploy automatizado</li>
            <li>Documentación técnica</li>
            <li>Soporte continuo</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section id="proceso" className="w-full bg-[var(--surface)] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Cómo Trabajo
        </h2>
        <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mb-12">
          Un proceso transparente, iterativo y sin sorpresas.
        </p>
      </div>
      <Timeline data={data} />
    </section>
  );
};

export default ProcesoTimeline;
