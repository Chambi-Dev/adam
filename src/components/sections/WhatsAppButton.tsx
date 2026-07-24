"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "51931043419";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola Adam, vi tu página web y me interesa hablar sobre un proyecto. ¿Podemos conversar?"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

/**
 * Botón flotante de WhatsApp — Posición: Bottom-Right (fixed)
 *
 * Fundamento científico:
 * - Diagrama de Gutenberg: Área Terminal (bottom-right) → donde el ojo descansa naturalmente
 * - Ley de Fitts: Mínima distancia al pulgar en mobile (67% usan mano derecha)
 * - Patrón Z de eye-tracking: El ojo termina en bottom-right en landing pages
 * - Efecto de Mera Exposición (Zajonc, 1968): Presencia persistente → familiaridad → confianza
 * - Color verde (#25D366): Psicología de "adelante/seguro" + reconocimiento instantáneo de marca
 * - Estadísticas: +27-40% consultas vs solo formulario (GetButton, Elfsight)
 *
 * Comportamiento:
 * - Aparece después de scroll > 300px (tras parte del hero) con delay de 1s
 * - Siempre visible una vez mostrado (nunca se oculta — a diferencia del navbar)
 * - Pulso sutil cada 6s para atraer atención periódica
 * - Tooltip en hover (desktop): "¿Hablamos por WhatsApp?"
 * - z-index: 40 (debajo del navbar z-50, encima del contenido)
 */
export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~300px (past the initial hero viewport)
      if (window.scrollY > 300) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Also check on mount in case user has already scrolled (e.g., page refresh)
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 1, // 1 second delay after trigger — builds anticipation
          }}
          className="fixed bottom-5 right-4 md:bottom-6 md:right-6 z-40"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {/* Tooltip — desktop only */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 hidden md:block"
              >
                <div className="whitespace-nowrap rounded-xl bg-[var(--surface)] border border-[var(--border-subtle)] px-4 py-2.5 text-sm font-medium text-white shadow-lg">
                  ¿Hablamos por WhatsApp?
                  {/* Arrow pointing right */}
                  <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--surface)] border-r border-b border-[var(--border-subtle)] rotate-[-45deg]" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar mensaje por WhatsApp"
            className={cn(
              "group relative flex h-[60px] w-[60px] items-center justify-center rounded-full",
              "bg-[#25D366] shadow-lg transition-all duration-300",
              "hover:scale-110 hover:shadow-[0_0_25px_rgba(37,211,102,0.5)]",
              "active:scale-95",
              "focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#0a0a0f]"
            )}
          >
            {/* Pulse ring animation — subtle, every ~6 seconds */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-whatsapp-ping" />

            {/* WhatsApp SVG Icon */}
            <svg
              aria-hidden="true"
              className="relative z-10 h-8 w-8 fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>

          {/* Pulse animation styles */}
          <style jsx>{`
            @keyframes whatsapp-ping {
              0% {
                transform: scale(1);
                opacity: 0.4;
              }
              50% {
                transform: scale(1.4);
                opacity: 0;
              }
              100% {
                transform: scale(1);
                opacity: 0;
              }
            }
            .animate-whatsapp-ping {
              animation: whatsapp-ping 6s cubic-bezier(0, 0, 0.2, 1) infinite;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
