"use client";

import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { IconMapPin } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export const SobreTi = () => {
  return (
    <section id="sobre-mi" className="py-20 md:py-32 bg-[var(--surface-light)] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Avatar / Sparkles Side */}
          <div className="relative w-full flex justify-center items-center h-80 md:h-96">
            <div className="absolute inset-0 w-full h-full">
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#8b5cf6"
              />
            </div>
            {/* Avatar Placeholder */}
            <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[var(--accent-violet)] to-[var(--accent-cyan)] flex items-center justify-center p-1">
              <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center text-5xl font-bold text-white">
                AC
              </div>
            </div>
          </div>

          {/* Bio Side */}
          <div className="flex flex-col space-y-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                Adam Chambi
              </h2>
              <div className="flex items-center space-x-2 text-[var(--accent-cyan)]">
                <span className="text-lg md:text-xl font-medium">Desarrollador de Software & Especialista en IA</span>
              </div>
              <div className="flex items-center space-x-2 text-[var(--text-muted)] mt-2">
                <IconMapPin size={20} />
                <span>Peru</span>
              </div>
            </div>

            <div className="space-y-4 text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
              <p>
                Soy un desarrollador apasionado por la intersección entre inteligencia artificial y software empresarial. Me especializo en construir sistemas que no solo funcionan, sino que piensan — agentes de IA que automatizan procesos complejos, ERPs que se adaptan a tu negocio, y plataformas SaaS que escalan sin límites.
              </p>
              <p>
                Cada proyecto que tomo es una oportunidad para resolver un problema real con tecnología de vanguardia. No creo en soluciones genéricas; creo en sistemas diseñados desde cero para tu operación específica.
              </p>
              <p>
                Cuando no estoy programando, estoy investigando las últimas arquitecturas de IA agéntica y experimentando con nuevos modelos de lenguaje.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SobreTi;
