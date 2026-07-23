"use client";

import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconBrain, IconCode, IconStack2, IconRocket } from "@tabler/icons-react";

export function ValueProposition() {
  const items = [
    {
      title: "Automatización con IA Agéntica",
      description: "Diseño agentes de IA que ejecutan tareas complejas de forma autónoma. Desde procesamiento de datos hasta decisiones en tiempo real, tus sistemas trabajan mientras duermes.",
      icon: <IconBrain className="h-6 w-6 text-[var(--accent-violet)]" />,
      className: "md:col-span-2",
    },
    {
      title: "Sistemas a Medida",
      description: "ERPs, SaaS y plataformas diseñadas desde cero para tu operación. Sin limitaciones de software genérico.",
      icon: <IconCode className="h-6 w-6 text-[var(--accent-cyan)]" />,
    },
    {
      title: "Stack de Vanguardia",
      description: "Python, Next.js, PyTorch, Docker, Cloudflare. La misma tecnología que usan las startups más exitosas del mundo.",
      icon: <IconStack2 className="h-6 w-6 text-[var(--accent-violet)]" />,
    },
    {
      title: "Entrega Ágil",
      description: "Desarrollo iterativo con entregas semanales. Ves avances desde la primera semana, no después de meses.",
      icon: <IconRocket className="h-6 w-6 text-[var(--accent-cyan)]" />,
    },
  ];

  return (
    <section id="propuesta" className="w-full bg-[var(--surface)] py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl">Por qué trabajar conmigo</h2>
        </div>
        <BentoGrid className="mx-auto max-w-4xl">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              className={cn("glow-border bg-[var(--surface-light)]", item.className)}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
