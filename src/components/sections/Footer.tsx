import React from "react";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconMail } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[#0a0a0f] py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-[var(--text-muted)] text-sm">
          © {new Date().getFullYear()} Adam Chambi. Todos los derechos reservados.
        </div>
        
        <div className="flex gap-5">
          <a
            href="https://github.com/Chambi-Dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-white transition-colors inline-flex items-center gap-2"
            aria-label="GitHub"
          >
            <IconBrandGithub size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:chambiadam20@gmail.com"
            className="text-[var(--text-secondary)] hover:text-white transition-colors inline-flex items-center gap-2"
            aria-label="Email"
          >
            <IconMail size={18} />
            <span>Email</span>
          </a>
        </div>
        
        <div className="text-[var(--text-muted)] text-sm">
          Hecho con ❤️ desde Perú
        </div>
      </div>
    </footer>
  );
}
