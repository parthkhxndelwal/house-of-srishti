import Link from "next/link";
import { LogoFull } from "@/components/Logo";
import { site, instagramLink, waLink, messages } from "@/lib/site";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Shop All", href: "/collections" },
      { label: "Women", href: "/#women" },
      { label: "Kids", href: "/#kids" },
      { label: "Our Story", href: "/#story" },
    ],
  },
  {
    title: "Care",
    links: [
      { label: "Sizing & Fit", href: "/#contact" },
      { label: "Fabric Care", href: "/#faq" },
      { label: "Shipping", href: "/#faq" },
      { label: "Made to Order", href: "/#story" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-blush/95 px-[clamp(20px,5vw,68px)] pb-9 pt-[clamp(56px,7vw,88px)] text-ink-body">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-10 border-b border-line pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-[300px]">
            <Link href="/" aria-label="House of Srishti, home" className="inline-block">
              <LogoFull className="h-auto w-[178px]" />
            </Link>
            <p className="mt-4 text-[13.5px] leading-relaxed text-muted">
              Couture for mothers and little ones, handcrafted in India and made
              to be remembered.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="mb-4 text-[11px] uppercase tracking-[0.2em] text-gold-ink">
                {col.title}
              </h2>
              <ul className="flex flex-col gap-3 text-[14px]">
                {col.links.map((l) => (
                  <li key={l.label + l.href}>
                    <Link
                      href={l.href}
                      className="text-muted transition-colors hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="mb-4 text-[11px] uppercase tracking-[0.2em] text-gold-ink">
              Connect
            </h2>
            <ul className="flex flex-col gap-3 text-[14px]">
              <li>
                <a
                  href={waLink(messages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-ink"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-ink"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-muted transition-colors hover:text-ink"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 pt-7 text-[12px] tracking-[0.04em] text-muted">
          <span>&copy; 2026 House of Srishti. All rights reserved.</span>
          <span>Crafted with love in India</span>
        </div>
      </div>
    </footer>
  );
}
