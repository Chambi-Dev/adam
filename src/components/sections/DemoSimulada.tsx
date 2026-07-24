"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIntersectionOnce } from "@/hooks/useIntersectionOnce";
import { IconChartBar, IconRobot, IconBell } from "@tabler/icons-react";

// Icon map: we use placeholders in the text that get replaced with real SVG icons during render
const ICON_PLACEHOLDERS: Record<string, React.ReactNode> = {
  "{{CHART}}": <IconChartBar size={18} className="inline-block text-[var(--accent-cyan)] -mt-0.5" />,
  "{{ROBOT}}": <IconRobot size={18} className="inline-block text-[var(--accent-violet)] -mt-0.5" />,
  "{{BELL}}":  <IconBell size={18} className="inline-block text-[var(--accent-cyan)] -mt-0.5" />,
};

export default function DemoSimulada() {
  const [ref, hasIntersected] = useIntersectionOnce();
  const [step, setStep] = useState<number>(0);
  const [typedText, setTypedText] = useState("");
  
  const fullText = "Puedo construir eso. Te propongo un sistema con tres módulos:\n\n{{CHART}} **Dashboard en tiempo real** — niveles de stock actualizados al segundo\n{{ROBOT}} **Motor de predicción** — analiza patrones de venta y estacionalidad\n{{BELL}} **Alertas inteligentes** — notificaciones cuando un producto baja del punto de reorden\n\nEl motor de predicción se entrenará con tu historial de ventas para sugerir cantidades óptimas de reposición. ¿Empezamos con una demo?";

  useEffect(() => {
    if (!hasIntersected) return;

    // Step 0: User message is already shown.
    // Step 1: Typing indicator starts after 1.5s
    const typingTimer = setTimeout(() => setStep(1), 1500);

    // Step 2: Typing ends, bot starts talking after 3s total
    const botStartTimer = setTimeout(() => setStep(2), 3000);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(botStartTimer);
    };
  }, [hasIntersected]);

  useEffect(() => {
    if (step === 2) {
      let i = 0;
      const typeInterval = setInterval(() => {
        // Skip ahead if we're in the middle of a placeholder token {{...}}
        let nextI = i + 1;
        const remaining = fullText.slice(i);
        for (const token of Object.keys(ICON_PLACEHOLDERS)) {
          if (remaining.startsWith(token)) {
            nextI = i + token.length;
            break;
          }
        }
        setTypedText(fullText.slice(0, nextI));
        i = nextI;
        if (i >= fullText.length) {
          clearInterval(typeInterval);
          setStep(3); // CTA step
        }
      }, 30); // ~30ms per char

      return () => clearInterval(typeInterval);
    }
  }, [step, fullText]);

  // Render formatted text: replaces **bold**, and icon placeholders with real components
  const renderFormattedText = (text: string) => {
    // First split by icon placeholders, then by bold markers
    const iconPattern = /(\{\{CHART\}\}|\{\{ROBOT\}\}|\{\{BELL\}\})/g;
    const segments = text.split(iconPattern);

    return segments.map((segment, segIdx) => {
      // Check if this segment is an icon placeholder
      if (ICON_PLACEHOLDERS[segment]) {
        return <React.Fragment key={`icon-${segIdx}`}>{ICON_PLACEHOLDERS[segment]}</React.Fragment>;
      }

      // Otherwise, process bold markers within the segment
      const boldParts = segment.split(/(\*\*.*?\*\*)/g);
      return boldParts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={`${segIdx}-${i}`} className="text-white font-bold">{part.slice(2, -2)}</strong>;
        }
        return <span key={`${segIdx}-${i}`}>{part}</span>;
      });
    });
  };

  return (
    <section id="demo" className="py-24 bg-[var(--surface)] px-4" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">IA en Acción</h2>
          <p className="text-[var(--text-muted)] text-lg">Una demostración de cómo abordo un proyecto real.</p>
        </div>

        <div className="relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-light)]/50 p-6 md:p-8 backdrop-blur-sm shadow-[0_0_40px_-15px_rgba(139,92,246,0.3)]">
          <div className="flex flex-col gap-6">
            
            {/* User Message */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              className="self-end max-w-[85%] md:max-w-[70%]"
            >
              <div className="rounded-2xl rounded-tr-none bg-[var(--accent-violet)] p-4 text-white shadow-lg">
                <p>Necesito un sistema de inventario que me avise cuando un producto está por agotarse y sugiera cuánto pedir.</p>
              </div>
            </motion.div>

            {/* Bot Typing Indicator */}
            {step === 1 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="self-start max-w-[85%] md:max-w-[70%]"
              >
                <div className="rounded-2xl rounded-tl-none bg-[var(--surface)] border border-[var(--border-subtle)] p-4 flex gap-1">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 rounded-full bg-[var(--text-muted)]" />
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 rounded-full bg-[var(--text-muted)]" />
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 rounded-full bg-[var(--text-muted)]" />
                </div>
              </motion.div>
            )}

            {/* Bot Message */}
            {step >= 2 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="self-start max-w-[90%] md:max-w-[80%]"
              >
                <div className="rounded-2xl rounded-tl-none bg-[var(--surface)] border border-[var(--border-subtle)] p-5 text-[var(--text-secondary)] shadow-lg whitespace-pre-wrap leading-relaxed">
                  {renderFormattedText(typedText)}
                </div>
              </motion.div>
            )}

            {/* Final CTA */}
            {step === 3 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-col items-center gap-4 border-t border-[var(--border-subtle)] pt-8"
              >
                <p className="text-[var(--text-secondary)] italic">Así trabajo. ¿Tienes un problema similar?</p>
                <a href="#contacto" className="rounded-full bg-[var(--accent-cyan)] text-[var(--surface)] font-semibold px-6 py-3 hover:bg-[var(--accent-cyan)]/90 transition-colors">
                  Iniciar un proyecto
                </a>
              </motion.div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
