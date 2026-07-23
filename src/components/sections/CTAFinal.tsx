"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export default function CTAFinal() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add success state here if needed
  };

  return (
    <section id="contacto" className="py-24 px-4 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-violet)]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            ¿Listo para automatizar tu negocio?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
            Cuéntame sobre tu proyecto y exploremos juntos cómo la IA puede transformar tu operación.
          </p>
          
          <div className="flex flex-col gap-4">
            <p className="text-[var(--text-muted)]">O contáctame directamente en:</p>
            <div className="flex flex-col gap-2">
              <a href="mailto:adam@example.com" className="text-[var(--accent-cyan)] hover:underline inline-flex items-center gap-2">
                ✉️ adam@example.com
              </a>
              <a href="https://github.com/adamchambi" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-violet)] hover:underline inline-flex items-center gap-2">
                🔗 github.com/adamchambi
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md">
          <form 
            onSubmit={handleSubmit}
            className="glass p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-light)]/40 backdrop-blur-xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="nombre" className="text-sm text-[var(--text-secondary)]">Nombre</label>
              <input
                id="nombre"
                type="text"
                required
                className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent-violet)] transition-colors"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-[var(--text-secondary)]">Email</label>
              <input
                id="email"
                type="email"
                required
                className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent-violet)] transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="mensaje" className="text-sm text-[var(--text-secondary)]">Mensaje</label>
              <textarea
                id="mensaje"
                required
                rows={4}
                className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent-violet)] transition-colors resize-none"
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="mt-4 relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-[var(--accent-violet)] focus:ring-offset-2 focus:ring-offset-[#0a0a0f]"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[var(--surface-light)] px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-[var(--surface)] transition-colors">
                Enviar Mensaje
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
