"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { pexels, products, filterCategories } from "@/lib/data";

export function CollectionsClient() {
  const [active, setActive] = useState<string>("All");
  const reduce = useReducedMotion();

  const items = useMemo(
    () =>
      active === "All"
        ? products
        : products.filter((p) => p.cats.includes(active)),
    [active],
  );

  const countLabel = `${items.length} ${items.length === 1 ? "piece" : "pieces"}${
    active === "All" ? "" : ` in ${active}`
  }`;

  return (
    <>
      {/* sticky filter rail */}
      <div className="sticky top-[60px] z-40 border-b border-line bg-blush/95 px-[clamp(20px,5vw,68px)] py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1360px] flex-wrap justify-center gap-2.5">
          {filterCategories.map((cat) => {
            const on = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                aria-pressed={on}
                className={`rounded-full border px-5 py-2.5 text-[11.5px] uppercase tracking-[0.14em] transition-[background-color,color,border-color,transform] duration-200 ease-[var(--ease-out-quart)] active:scale-[0.97] ${
                  on
                    ? "border-rose bg-rose text-blush"
                    : "border-line bg-transparent text-rose hover:border-rose"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <section className="mx-auto max-w-[1360px] px-[clamp(20px,5vw,68px)] pb-[clamp(74px,9vw,120px)] pt-[clamp(38px,5vw,64px)]">
        <p className="mb-7 text-[12px] tracking-[0.04em] text-muted" aria-live="polite">
          {countLabel}
        </p>
        <div className="grid grid-cols-2 gap-[clamp(18px,2.2vw,32px)] lg:grid-cols-3 xl:grid-cols-4">
          {items.map((p, i) => (
            <motion.div
              key={p.slug}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(i, 8) * 0.04, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/product/${p.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-blush-strong">
                  <Image
                    src={pexels(p.pexelsId, 700)}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-[1300ms] ease-[var(--ease-out-quart)] group-hover:scale-[1.07]"
                  />
                  <span className="absolute left-3.5 top-3.5 rounded-full bg-blush/95 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.16em] text-rose">
                    {p.tag}
                  </span>
                </div>
                <div className="pt-4">
                  <h3 className="mb-1 font-display text-[22px] font-semibold leading-snug text-ink">
                    {p.name}
                  </h3>
                  <p className="mb-2.5 text-[12.5px] tracking-[0.03em] text-muted">
                    {p.fabric} · {p.sizes}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[16px] text-ink">{p.price}</span>
                    <span className="text-[11px] uppercase tracking-[0.14em] text-gold-ink">
                      View &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
