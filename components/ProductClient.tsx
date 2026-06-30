"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";
import { pexels, type Product } from "@/lib/data";
import { waLink, instagramLink } from "@/lib/site";

const SIZES = ["XS", "S", "M", "L", "XL"];
const KIDS_SIZES = ["2-3 yrs", "4-5 yrs", "6-7 yrs", "8-9 yrs", "10-12 yrs"];

export function ProductClient({
  product,
  galleryIds,
  galleryPaths,
}: {
  product: Product;
  galleryIds?: number[];
  galleryPaths?: string[];
}) {
  const [imgIdx, setImgIdx] = useState(0);
  const isKidsOnly = product.cats.includes("For Little Ones") && !product.cats.includes("For Her");
  const defaultSize = isKidsOnly ? "4-5 yrs" : "M";
  const [size, setSize] = useState(defaultSize);
  const availableSizes = isKidsOnly ? KIDS_SIZES : SIZES;
  const [openDetail, setOpenDetail] = useState(0);
  const reduce = useReducedMotion();

  const hasLocalImages = galleryPaths && galleryPaths.length > 0;
  const galleryItems = hasLocalImages ? galleryPaths : galleryIds;
  const activeImg = hasLocalImages ? galleryPaths![imgIdx] : pexels(galleryIds![imgIdx], 1000);

  const thumbRef = useRef<HTMLDivElement>(null);
  const scrollThumbs = useCallback((dir: number) => {
    if (!thumbRef.current) return;
    thumbRef.current.scrollBy({ left: dir * 160, behavior: "smooth" });
  }, []);

  const details = useMemo(
    () => [
      {
        title: "Fabric & Composition",
        body: `Crafted in ${product.fabric.toLowerCase()} with hand-applied detailing. Lightweight, breathable and gentle on delicate skin. Coordinating children's pieces are lined with pure cotton for comfort.`,
      },
      {
        title: "Sizing & Fit",
        body: "Women's XS to XL, or made to custom measurements. Children's coordinating sets are made to age, 0 to 12 years. Share height and age on WhatsApp and we'll tailor the fit precisely, at no extra charge.",
      },
      {
        title: "Fabric Care",
        body: "Dry clean recommended for embroidered pieces. Store folded in a cool, dry place wrapped in muslin, and keep away from direct sunlight to preserve colour.",
      },
      {
        title: "Made to Order & Shipping",
        body: "Each piece is crafted to order in 2 to 3 weeks. We ship across India; timelines and charges are confirmed over WhatsApp before your order is finalised.",
      },
    ],
    [product.fabric],
  );

  const waBuy = waLink(
    `Hello House of Srishti! I'd love to order the ${product.name} (my size ${size}, ${product.price}). Could you help me with the order details and any matching pieces?`,
  );

  return (
    <section className="mx-auto grid max-w-[1360px] items-start gap-[clamp(32px,4vw,72px)] px-[clamp(20px,5vw,68px)] pb-[clamp(60px,7vw,90px)] pt-[clamp(24px,4vw,46px)] md:grid-cols-2">
      {/* gallery */}
      <div className="flex flex-col-reverse gap-3.5 md:sticky md:top-[92px]">
        <div className="relative">
          <div ref={thumbRef} className="flex gap-3 overflow-hidden">
            {galleryItems!.map((id, i) => (
              <button
                key={id + "-" + i}
                onClick={() => setImgIdx(i)}
                aria-label={`View image ${i + 1}`}
                aria-pressed={imgIdx === i}
                className={`h-24 w-[76px] shrink-0 overflow-hidden rounded-[4px] border transition-[border-color,transform] duration-200 active:scale-[0.96] ${
                  imgIdx === i ? "border-rose" : "border-line"
                }`}
              >
                <span className="relative block h-full w-full">
                  <Image
                    src={hasLocalImages ? (galleryPaths as string[])[i] : pexels(id as number, 220)}
                    alt=""
                    fill
                    sizes="76px"
                    className={`object-cover transition-opacity duration-200 ${
                      imgIdx === i ? "opacity-100" : "opacity-70"
                    }`}
                  />
                </span>
              </button>
            ))}
          </div>
          {galleryItems!.length > 4 && (
            <>
              <button
                onClick={() => scrollThumbs(-1)}
                aria-label="Scroll thumbnails left"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-rose/90 text-blush shadow-md transition-transform hover:bg-rose active:scale-95"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={() => scrollThumbs(1)}
                aria-label="Scroll thumbnails right"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-rose/90 text-blush shadow-md transition-transform hover:bg-rose active:scale-95"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[5px] bg-blush-strong">
          <AnimatePresence mode="wait">
            <motion.div
              key={imgIdx}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={activeImg}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* info */}
      <div>
        <p className="mb-3.5 text-[11.5px] uppercase tracking-[0.22em] text-gold-ink">
          {product.cats[0]} · Coordinating set available
        </p>
        <h1 className="mb-3.5 font-display text-[clamp(34px,4.6vw,58px)] font-medium leading-[1.02] text-ink">
          {product.name}
        </h1>
        <div className="mb-2 flex flex-wrap items-center gap-3.5">
          <span className="font-display text-[30px] text-ink">{product.price}</span>
          {product.cats.includes("For Little Ones") && product.cats.includes("For Her") && (
            <span className="text-[13px] text-muted">
              Mom & Daughter coordinating set
            </span>
          )}
        </div>
        <div className="mb-6 text-[14px] tracking-[2px] text-gold-ink" aria-label="Rated 5 out of 5, 48 reviews">
          &#9733;&#9733;&#9733;&#9733;&#9733;{" "}
          <span className="text-[13px] tracking-[0.04em] text-muted">&nbsp;48 reviews</span>
        </div>

        <p className="mb-7 text-[16px] leading-[1.85] text-ink-body">
          {product.desc ? (
            product.desc
          ) : (
            <>A blush rosewater piece hand-finished in soft {product.fabric.toLowerCase()},
            with a delicate gota border and a matching pre-stitched option for ease.
            Pair it with the coordinating{" "}
            <em className="font-display not-italic text-rose">Little Blossom</em>{" "}
            lehenga for your daughter, designed to complement, never to copy. Made
            for festivals, first celebrations and photographs you&rsquo;ll keep
            forever.</>
          )}
        </p>

        {/* size */}
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[12px] uppercase tracking-[0.18em] text-ink">
            Your size: <span className="text-rose">{size}</span>
          </span>
          <Link
            href="/#faq"
            className="border-b border-line text-[12px] text-gold-ink transition-colors hover:border-rose"
          >
            Size guide
          </Link>
        </div>
        <div className="mb-6 flex flex-wrap gap-2.5">
          {availableSizes.map((s) => {
            const on = size === s;
            return (
              <button
                key={s}
                onClick={() => setSize(s)}
                aria-pressed={on}
                className={`min-w-[52px] rounded-[4px] border px-4 py-3 text-[13px] tracking-[0.06em] transition-[background-color,color,border-color,transform] duration-200 active:scale-[0.96] ${
                  on
                    ? "border-rose bg-rose text-blush"
                    : "border-line bg-transparent text-ink hover:border-rose"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
        <p className="mb-7 text-[13.5px] leading-relaxed text-ink-body">
          {isKidsOnly ? (
            <>Tell us your little one&rsquo;s age and height on WhatsApp and we&rsquo;ll tailor the fit (2 to 12 years). Custom measurements welcome at no extra cost.</>
          ) : (
            <>Adding the matching child&rsquo;s set? Tell us your little one&rsquo;s
            age and height on WhatsApp and we&rsquo;ll tailor the fit (0 to 12
            years). Custom measurements welcome at no extra cost.</>
          )}
        </p>

        {/* CTAs */}
        <div className="mb-8 flex flex-col gap-3">
          <a
            href={waBuy}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-rose px-6 py-[18px] text-[13px] font-medium uppercase tracking-[0.16em] text-blush transition-[background-color,transform] duration-200 ease-[var(--ease-out-quart)] hover:bg-rose active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            Enquire to order
          </a>
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-line px-6 py-4 text-[12.5px] uppercase tracking-[0.14em] text-rose transition-[border-color,transform] duration-200 hover:border-rose active:scale-[0.98]"
          >
            <InstagramIcon className="h-4 w-4" />
            Ask on Instagram
          </a>
        </div>

        {/* trust row */}
        <dl className="mb-2 grid grid-cols-3 border-y border-line py-6">
          {[
            ["2-3 wks", "Made to order"],
            ["Custom", "Free sizing"],
            ["Pan India", "Shipping"],
          ].map(([big, small], i) => (
            <div
              key={small}
              className={`text-center ${i === 1 ? "border-x border-line" : ""}`}
            >
              <dt className="font-display text-[24px] leading-none text-rose">{big}</dt>
              <dd className="mt-1.5 text-[11px] tracking-[0.08em] text-muted">{small}</dd>
            </div>
          ))}
        </dl>

        {/* detail accordions */}
        <div>
          {details.map((d, i) => {
            const isOpen = openDetail === i;
            return (
              <div key={d.title} className="border-b border-line">
                <button
                  onClick={() => setOpenDetail(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-[13px] uppercase tracking-[0.14em] text-ink">
                    {d.title}
                  </span>
                  <span
                    className="font-display text-[22px] leading-none text-gold-ink transition-transform duration-300 ease-[var(--ease-out-quart)]"
                    style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[15px] leading-[1.8] text-ink-body">
                        {d.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
