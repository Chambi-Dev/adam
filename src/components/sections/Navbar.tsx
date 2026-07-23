"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY && latest > 50) {
      setVisible(false);
      setIsOpen(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(latest);
  });

  const navLinks = [
    { name: "Proyectos", href: "#proyectos" },
    { name: "Proceso", href: "#proceso" },
    { name: "Stack", href: "#stack" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-5xl px-4"
    >
      <div className="glass flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
        <a href="#" className="text-xl font-bold tracking-tight text-white hover:text-[var(--accent-cyan)] transition-colors">
          Adam Chambi
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-secondary)]">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full bg-[var(--accent-violet)] px-4 py-2 text-white hover:bg-[var(--accent-violet)]/80 transition-colors"
          >
            Hablemos
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-4 right-4 top-[calc(100%+0.5rem)] rounded-2xl border border-white/10 bg-[#111118]/90 p-4 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--text-secondary)] hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-block rounded-full bg-[var(--accent-violet)] px-4 py-2 text-white"
              >
                Hablemos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
