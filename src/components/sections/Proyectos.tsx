"use client";

import { cn } from "@/lib/utils";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function Proyectos() {
  const projects = [
    {
      title: "Sistema ERP Integral",
      description: "Gestión completa de inventario, ventas, compras y reportes financieros para una empresa de distribución. Redujo el tiempo de cierre mensual de 5 días a 4 horas. Stack: Python, PostgreSQL, Next.js, Docker",
      link: "#",
    },
    {
      title: "Plataforma SaaS de Gestión",
      description: "Sistema multi-tenant para gestión de clientes y facturación electrónica. Procesamiento automatizado de documentos con IA. Stack: Next.js, Python, Cloudflare Workers, PostgreSQL",
      link: "#",
    },
    {
      title: "Sistema Farmacéutico",
      description: "Control de inventario con alertas de vencimiento, gestión de lotes y trazabilidad completa. Integración con reguladores nacionales. Stack: Python, React, PostgreSQL, Docker",
      link: "#",
    },
    {
      title: "Inventario Inteligente",
      description: "Sistema de inventario con predicción de demanda basada en IA. Reduce sobre-stock en un 35% y previene quiebres de inventario. Stack: Python, PyTorch, Next.js, PostgreSQL",
      link: "#",
    },
  ];

  return (
    <section id="proyectos" className="w-full bg-[var(--surface)] py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl">Proyectos</h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Soluciones reales para problemas reales. Cada proyecto es un sistema en producción.
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  );
}
