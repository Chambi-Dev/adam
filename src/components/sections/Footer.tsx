import React from "react";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[#0a0a0f] py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-[var(--text-muted)] text-sm">
          © {new Date().getFullYear()} Adam Chambi. Todos los derechos reservados.
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/adamchambi" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-white transition-colors">
            GitHub
          </a>
          <a href="mailto:adam@example.com" className="text-[var(--text-secondary)] hover:text-white transition-colors">
            Email
          </a>
        </div>
        
        <div className="text-[var(--text-muted)] text-sm">
          Hecho con ❤️ desde Peru
        </div>
      </div>
    </footer>
  );
}
