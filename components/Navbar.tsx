"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/catalog", label: "Каталог" },
  { href: "/catalog?filter=rare", label: "Редкие" },
  { href: "/care", label: "Уход" },
  { href: "/blog", label: "Блог" },
  { href: "/about", label: "О нас" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-night/98 backdrop-blur-md shadow-[0_1px_0_rgba(61,102,66,0.3)]"
          : "bg-gradient-to-b from-night/96 to-transparent backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* ── Logo ── */}
        <Link href="/" className="flex flex-col items-start group">
          <span
            className="uppercase tracking-[4px] text-cream"
            style={{ fontFamily: "var(--font-display)", fontSize: "22px" }}
          >
            Bego<span className="text-gold">Nia</span>
          </span>
          <span className="text-cream/40 uppercase tracking-[2.5px]" style={{ fontSize: "8px" }}>
            Коллекционные бегонии
          </span>
        </Link>

        {/* ── Center links (desktop) ── */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative uppercase text-cream/50 hover:text-cream transition-colors duration-300 group"
                style={{ fontSize: "10px", letterSpacing: "2.5px" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Right icons ── */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button
            className="flex items-center justify-center w-9 h-9 rounded-full border border-gold/30 text-cream/60 hover:text-gold hover:border-gold hover:shadow-[0_0_12px_rgba(201,164,74,0.2)] transition-all duration-300"
            aria-label="Поиск"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
          </button>

          {/* Предзаказ */}
          <Link
            href="/cart"
            className="hidden sm:inline-flex items-center justify-center h-9 px-4 rounded-full border border-gold/40 text-cream/80 text-[10px] uppercase tracking-[2px] hover:text-gold hover:border-gold hover:shadow-[0_0_12px_rgba(201,164,74,0.2)] transition-all duration-300"
            aria-label="Оформить предзаказ"
          >
            Предзаказ
          </Link>
          <Link
            href="/cart"
            className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full border border-gold/30 text-cream/60 hover:text-gold hover:border-gold transition-all duration-300"
            aria-label="Оформить предзаказ"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </Link>

          {/* Hamburger (mobile) */}
          <button
            className="flex lg:hidden items-center justify-center w-9 h-9 rounded-full border border-gold/30 text-cream/60 hover:text-gold transition-all duration-300"
            aria-label="Меню"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-leaf/20 bg-night/98 backdrop-blur-md px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="uppercase text-cream/60 hover:text-gold transition-colors duration-300"
                  style={{ fontSize: "11px", letterSpacing: "2.5px" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
