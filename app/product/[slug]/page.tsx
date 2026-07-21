import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductClient } from "@/components/ProductClient";
import { Reveal } from "@/components/Reveal";
import { pexels, products } from "@/lib/data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Not found" };
  return {
    title: product.name,
    description: `${product.name}, ${product.fabric}, made to order from ${product.price}. Tailored to your measurements and ordered over WhatsApp.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  // Build a small gallery: the hero plus a few cohesive angle shots.
  const galleryPool = [7442282, 19764064, 13650900, 35327475];
  const galleryIds = [
    product.pexelsId,
    ...galleryPool.filter((id) => id !== product.pexelsId),
  ].slice(0, 4);

  const galleryPaths = product.images?.slice(0, 12);

  const related = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  return (
    <>
      <AnnouncementBar>
        Made to order &nbsp;·&nbsp; Crafted in 2-3 weeks &nbsp;·&nbsp; Pan India
        shipping
      </AnnouncementBar>
      <Header />

      <main>
        {/* breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-[1360px] px-[clamp(20px,5vw,68px)] pt-6 text-[12px] uppercase tracking-[0.1em] text-muted"
        >
          <Link href="/" className="transition-colors hover:text-rose">
            Home
          </Link>
          <span className="px-2">/</span>
          <Link href="/collections" className="transition-colors hover:text-rose">
            Collections
          </Link>
          <span className="px-2">/</span>
          <span className="text-rose">{product.name}</span>
        </nav>

        <ProductClient product={product} galleryIds={galleryIds} galleryPaths={galleryPaths} />

        {/* complete the look */}
        <section className="bg-blush-deep px-[clamp(20px,5vw,68px)] py-[clamp(60px,8vw,110px)]">
          <div className="mx-auto max-w-[1360px]">
            <Reveal className="mb-[clamp(36px,4vw,56px)] text-center">
              <p className="mb-3 text-[11.5px] uppercase tracking-[0.34em] text-gold-ink">
                Complete the look
              </p>
              <h2 className="font-display text-[clamp(30px,4.4vw,52px)] font-medium leading-[1.04] text-ink">
                Pairs beautifully with
              </h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-[clamp(16px,2vw,28px)] lg:grid-cols-4">
              {related.map((p, i) => (
                <Reveal as="div" key={p.slug} delay={i * 0.06}>
                  <Link href={`/product/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-blush">
                      <Image
                        src={p.images?.[0] || pexels(p.pexelsId, 600)}
                        alt={p.name}
                        fill
                        sizes="(max-width: 640px) 50vw, 25vw"
                        className="object-cover transition-transform duration-[1300ms] ease-[var(--ease-out-quart)] group-hover:scale-[1.07]"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-blush/95 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.16em] text-rose">
                        {p.tag}
                      </span>
                      {p.soldOut && (
                        <span className="absolute right-3 top-3 rounded-full bg-ink/85 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.16em] text-blush">
                          Sold Out
                        </span>
                      )}
                    </div>
                    <div className="pt-4">
                      <h3 className="mb-1 font-display text-[21px] font-semibold leading-snug text-ink">
                        {p.name}
                      </h3>
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="min-w-0 flex-1 text-[14px] leading-tight text-ink">
                          {p.price}
                        </span>
                        <span className="shrink-0 text-[11px] uppercase tracking-[0.14em] text-gold-ink">
                          View &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
