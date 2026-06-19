"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { LogoLink, LogoHorizontal } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/icons";
import { waLink, messages } from "@/lib/site";

const navLinks = [
  { label: "Collections", href: "/collections" },
  { label: "For Her", href: "/#women" },
  { label: "For Little Ones", href: "/#kids" },
];

const navLinksRight = [
  { label: "Story", href: "/#story" },
  { label: "Reviews", href: "/#reviews" },
];

const allLinks = [
  { label: "Home", href: "/" },
  ...navLinks,
  ...navLinksRight,
];

export function Header() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  // Lock scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-[60] border-b border-line/70 bg-blush/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-5 px-[clamp(20px,5vw,68px)] py-3.5">
        <nav className="hidden flex-1 items-center gap-8 text-[12px] uppercase tracking-[0.18em] lg:flex">
          {navLinks.map((l) => (
            <HeaderLink key={l.href} {...l} />
          ))}
        </nav>

        <LogoLink className="h-11 w-auto sm:h-[50px]" />

        <div className="hidden flex-1 items-center justify-end gap-7 text-[12px] uppercase tracking-[0.18em] lg:flex">
          {navLinksRight.map((l) => (
            <HeaderLink key={l.href} {...l} />
          ))}
          <a
            href={waLink(messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-rose px-5 py-2.5 text-[11px] tracking-[0.16em] text-blush transition-[background-color,transform] duration-200 ease-[var(--ease-out-quart)] hover:bg-berry active:scale-[0.97]"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="flex flex-col gap-[5px] p-1.5 lg:hidden"
        >
          <span className="block h-[1.5px] w-[26px] bg-ink" />
          <span className="block h-[1.5px] w-[26px] bg-ink" />
          <span className="block h-[1.5px] w-[18px] bg-ink" />
        </button>
      </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex flex-col bg-blush px-[clamp(20px,6vw,40px)] py-7 lg:hidden"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between">
              <LogoHorizontal className="h-10 w-auto" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-[34px] leading-none text-ink transition-transform duration-150 active:scale-90"
              >
                &times;
              </button>
            </div>
            <nav className="mt-12 flex flex-col font-display text-[34px]">
              {allLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3 text-ink transition-colors hover:text-rose"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <a
              href={waLink(messages.general)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-auto rounded-full bg-rose px-6 py-4 text-center text-[13px] uppercase tracking-[0.18em] text-blush active:scale-[0.98]"
            >
              Enquire on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function HeaderLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="text-ink-body transition-colors duration-200 hover:text-rose"
    >
      {label}
    </Link>
  );
}
