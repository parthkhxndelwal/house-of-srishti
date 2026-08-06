"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";
import {
  ProductPriceDisplay,
  VariantSelector,
} from "@/components/ProductPricing";
import {
  formatINR,
  getLowestPriceOption,
  getProductStartingPriceLabel,
  pexels,
  type Product,
} from "@/lib/data";
import { waLink, instagramLink } from "@/lib/site";

const SIZES = ["XS", "S", "M", "L", "XL"];
const KIDS_SIZES = ["2-3 yrs", "4-5 yrs", "6-7 yrs", "8-9 yrs", "10-12 yrs"];

const isVideoSrc = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

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

  const swipeStart = useRef<{ x: number; y: number; time: number } | null>(null);
  const handleSwipeStart = (e: React.PointerEvent) => {
    swipeStart.current = { x: e.clientX, y: e.clientY, time: Date.now() };
  };
  const handleSwipeEnd = (e: React.PointerEvent) => {
    if (!swipeStart.current) return;
    const dx = e.clientX - swipeStart.current.x;
    const dy = e.clientY - swipeStart.current.y;
    const dt = Date.now() - swipeStart.current.time;
    swipeStart.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dy) < 60 && dt < 500) {
      setImgIdx((prev) => {
        const next = prev + (dx < 0 ? 1 : -1);
        return Math.max(0, Math.min(galleryItems!.length - 1, next));
      });
    }
  };

  const details = [
    {
      title: "Fabric",
      body: "pure cotton.",
    },
    {
      title: "Sizing",
      body: "Please choose your exact size as our clothes are true to size.",
    },
    {
      title: "Care",
      body: "Wash separately for the first time in cold water as fabric may bleed dye for 1-2 washes especially if the fabric is blue or indigo.",
    },
  ];

  const soldOut = product.soldOut === true;
  const modelSize = isKidsOnly ? "4-5 yrs" : "S";
  const quickFacts = [
    ["Fabric", "pure cotton"],
    ["Model is wearing size", modelSize],
    ["Care", "handwashed in the first go."],
  ] as const;
  const priceLabel = getProductStartingPriceLabel(product);
  const priceOptions = product.priceOptions ?? null;
  const lowestOption = getLowestPriceOption(product);
  const [variantLabel, setVariantLabel] = useState<string | null>(
    lowestOption?.label ?? null,
  );
  const selectedOption = priceOptions?.find((o) => o.label === variantLabel);
  const stickyPrice = selectedOption
    ? formatINR(selectedOption.price)
    : priceLabel;
  const waPrice = selectedOption
    ? `${selectedOption.label} · ${formatINR(selectedOption.price)}`
    : priceLabel;
  const waBuy = waLink(
    soldOut
      ? `Hello House of Srishti! The ${product.name} is showing as sold out. Could you let me know if it will be restocked or made to order (my size ${size})?`
      : `Hello House of Srishti! I'd love to order the ${product.name} (my size ${size}, ${waPrice}). Could you help me with the order details and any matching pieces?`,
  );

  return (
    <section className="mx-auto grid max-w-[1360px] items-start gap-[clamp(32px,4vw,72px)] px-[clamp(20px,5vw,68px)] pb-[clamp(110px,12vw,90px)] pt-[clamp(24px,4vw,46px)] md:grid-cols-2 md:pb-[clamp(60px,7vw,90px)]">
      {/* gallery */}
      <div className="flex flex-col gap-3 md:sticky md:top-[92px]">
        {/* main image */}
        <div
          className="relative aspect-[4/5] max-h-[45dvh] overflow-hidden rounded-[5px] bg-blush-strong md:max-h-none"
          style={{ touchAction: "pan-y" }}
          onPointerDown={handleSwipeStart}
          onPointerUp={handleSwipeEnd}
          onPointerCancel={() => { swipeStart.current = null; }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={imgIdx}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0"
            >
              {isVideoSrc(activeImg) ? (
                <video
                  src={activeImg}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={activeImg}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              )}
            </motion.div>
          </AnimatePresence>
          <span className="absolute bottom-3 right-3 z-10 rounded-full bg-ink/55 px-2.5 py-1 text-[11px] tracking-[0.06em] text-blush/90">
            {imgIdx + 1} / {galleryItems!.length}
          </span>
        </div>

        {/* dot indicators */}
        <div
          className="flex items-center justify-center gap-1.5 md:hidden"
          role="tablist"
          aria-label="Image gallery"
        >
          {galleryItems!.map((_, i) => (
            <button
              key={i}
              onClick={() => setImgIdx(i)}
              role="tab"
              aria-label={`View image ${i + 1}`}
              aria-selected={imgIdx === i}
              className={`rounded-full transition-all duration-300 ease-[var(--ease-out-quart)] ${
                i === imgIdx
                  ? "w-5 bg-[#ff3b5f]"
                  : "w-1.5 bg-line hover:bg-muted"
              } h-1.5`}
            />
          ))}
        </div>

        {/* thumbnail strip */}
        <div className="relative hidden md:block">
          <div ref={thumbRef} className="flex gap-3 overflow-hidden">
            {galleryItems!.map((id, i) => {
              const thumbSrc = hasLocalImages
                ? (galleryPaths as string[])[i]
                : pexels(id as number, 220);
              return (
                <button
                  key={id + "-" + i}
                  onClick={() => setImgIdx(i)}
                  aria-label={`View media ${i + 1}`}
                  aria-pressed={imgIdx === i}
                  className={`h-24 w-[76px] shrink-0 overflow-hidden rounded-[4px] border transition-[border-color,transform] duration-200 active:scale-[0.96] ${
                    imgIdx === i ? "border-rose" : "border-line hover:border-rose/50"
                  }`}
                >
                  <span className="relative block h-full w-full">
                    {isVideoSrc(thumbSrc) ? (
                      <>
                        <video
                          src={thumbSrc}
                          preload="metadata"
                          muted
                          playsInline
                          className={`h-full w-full object-cover transition-opacity duration-200 ${
                            imgIdx === i ? "opacity-100" : "opacity-70 hover:opacity-100"
                          }`}
                        />
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 flex items-center justify-center"
                        >
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink/50">
                            <svg className="h-2 w-2 text-blush" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                        </span>
                      </>
                    ) : (
                      <Image
                        src={thumbSrc}
                        alt=""
                        fill
                        sizes="76px"
                        className={`object-cover transition-opacity duration-200 ${
                          imgIdx === i ? "opacity-100" : "opacity-70 hover:opacity-100"
                        }`}
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
          {galleryItems!.length > 4 && (
            <>
              <button
                onClick={() => scrollThumbs(-1)}
                aria-label="Scroll thumbnails left"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#ff3b5f]/90 text-blush shadow-md transition-transform hover:bg-[#ff3b5f] active:scale-95"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={() => scrollThumbs(1)}
                aria-label="Scroll thumbnails right"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#ff3b5f]/90 text-blush shadow-md transition-transform hover:bg-[#ff3b5f] active:scale-95"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}
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
          <ProductPriceDisplay option={selectedOption} fallback={product.price} />
          {soldOut && (
            <span className="rounded-full bg-ink/85 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-blush">
              Sold Out
            </span>
          )}
          {product.cats.includes("For Little Ones") && product.cats.includes("For Her") && (
            <span className="text-[13px] text-muted">
              Mom & Daughter coordinating set
            </span>
          )}
        </div>
        {priceOptions && priceOptions.length > 1 && (
          <>
            <div className="mb-2">
              <span className="text-[12px] uppercase tracking-[0.18em] text-ink">
                Choose a set
              </span>
            </div>
            <VariantSelector
              options={priceOptions}
              selected={variantLabel}
              onSelect={setVariantLabel}
            />
          </>
        )}
        <div className="mb-6 text-[14px] tracking-[2px] text-gold-ink" aria-label="Rated 5 out of 5, 48 reviews">
          &#9733;&#9733;&#9733;&#9733;&#9733;{" "}
          <span className="text-[13px] tracking-[0.04em] text-muted">&nbsp;48 reviews</span>
        </div>

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
                    ? "border-rose bg-[#ff3b5f] text-blush"
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
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#ff3b5f] px-6 py-[18px] text-[13px] font-medium uppercase tracking-[0.16em] text-blush transition-[background-color,transform] duration-200 ease-[var(--ease-out-quart)] hover:bg-[#ff3b5f] active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            {soldOut ? "Sold out · Ask about restock" : "Enquire to order"}
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

        {/* quick facts */}
        <ul className="mb-2 space-y-2.5 border-b border-line pb-6 text-[13.5px] text-ink-body">
          {quickFacts.map(([label, value]) => (
            <li key={label} className="flex items-baseline gap-3">
              <span className="w-36 shrink-0 text-[10.5px] uppercase tracking-[0.16em] text-gold-ink">
                {label}
              </span>
              <span>{value}</span>
            </li>
          ))}
        </ul>

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
          <p className="pt-4 text-[12px] uppercase tracking-[0.18em] text-ink">
            Product Info
          </p>
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

        <p className="pt-6 text-[16px] leading-[1.85] text-ink-body">
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
      </div>
      {/* /info */}

      {/* sticky bottom CTA — mobile only */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-3 border-t border-line bg-blush/95 px-[clamp(20px,5vw,68px)] py-2.5 backdrop-blur-md md:hidden">
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-[18px] leading-tight text-ink">
            {stickyPrice}
          </p>
          {soldOut && (
            <p className="text-[10px] uppercase tracking-[0.14em] text-muted">Sold out</p>
          )}
        </div>
        <a
          href={waBuy}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#ff3b5f] px-5 py-[13px] text-[12px] font-medium uppercase tracking-[0.14em] text-blush shadow-lg transition-transform active:scale-[0.98]"
        >
          <WhatsAppIcon className="h-[17px] w-[17px]" />
          {soldOut ? "Ask restock" : "Enquire"}
        </a>
      </div>
    </section>
  );
}
