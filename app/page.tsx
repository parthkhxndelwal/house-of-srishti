import Image from "next/image";
import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { LotusMark } from "@/components/icons";
import { WhatsAppCTA, InstagramCTA } from "@/components/WhatsAppCTA";
import { pexels, homeCollections, reviews, faqs } from "@/lib/data";
import { site, messages } from "@/lib/site";

const pad = "px-[clamp(20px,5vw,68px)]";
const wrap = "mx-auto max-w-[1360px]";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar>
        Complimentary styling on WhatsApp &nbsp;·&nbsp; Handcrafted in India
        &nbsp;·&nbsp; Pan India shipping
      </AnnouncementBar>
      <Header />

      <main>
        {/* ---------------------------------------------------------- hero */}
        <section id="top" className="flex justify-center md:h-[90dvh] h-auto overflow-hidden bg-[#bc1a38]">
          <Link href="/product/nazakat-cotton-salwar-farshi-set" className="block h-full">
            {/* Desktop hero image */}
            <Image
              src="/house_of_srishti_hero.png"
              alt="House of Srishti — Nazakat Cotton Salwar Farshi Set"
              width={1700}
              height={2267}
              priority
              sizes="100vw"
              className="h-full w-auto hidden md:block"
            />
            {/* Mobile hero image */}
            <Image
              src="/house_of_srishti_hero_mobile.png"
              alt="House of Srishti — Nazakat Cotton Salwar Farshi Set"
              width={1200}
              height={1600}
              priority
              sizes="100vw"
              className="w-screen h-auto block md:hidden"
            />
          </Link>
        </section>

        <Marquee />

        {/* ----------------------------------------- two wardrobes, one story */}
        <section className={`${wrap} ${pad} pb-[clamp(40px,5vw,64px)] pt-[clamp(68px,8vw,118px)]`}>
          <Reveal className="mx-auto mb-[clamp(40px,5vw,64px)] max-w-[620px] text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <LotusMark className="h-4 w-6 text-gold" />
            </div>
            <h2 className="font-display text-[clamp(34px,5vw,60px)] font-medium leading-[1.02] text-ink">
              A line for her. A line for them.
            </h2>
          </Reveal>

          <div className="grid gap-[clamp(16px,2vw,28px)] md:grid-cols-2">
            <WardrobeCard
              id="women"
              eyebrow="For Her"
              title="The Women's Edit"
              image="/product_images/NAZAKAT_COTTON_SALWAR_FARSHI_SET/IMG_5696.JPG"
              objectPos="50% 25%"
            />
            <WardrobeCard
              id="kids"
              eyebrow="For Little Ones"
              title="The Children's Edit"
              image="/product_images/NAZAKAT_COTTON_SALWAR_FARSHI_SET/IMG_5525.JPG"
              objectPos="50% 22%"
            />
          </div>
        </section>

        {/* ------------------------------------------- featured collections */}
        <section className={`${wrap} ${pad} pb-[clamp(68px,8vw,118px)] pt-[clamp(40px,5vw,64px)]`}>
          <Reveal className="mb-[clamp(32px,4vw,52px)] flex flex-wrap items-end justify-between gap-6 border-t border-line pt-[clamp(44px,5vw,68px)]">
            <h2 className="font-display text-[clamp(32px,4.6vw,56px)] font-medium leading-[1.02] text-ink">
              Edits for every occasion
            </h2>
            <Link
              href="/collections"
              className="whitespace-nowrap border-b border-gold pb-1.5 text-[12px] uppercase tracking-[0.16em] text-rose transition-colors hover:text-berry"
            >
              View all &rarr;
            </Link>
          </Reveal>

          <div className="grid gap-[clamp(16px,2vw,28px)] sm:grid-cols-2 lg:grid-cols-3">
            {homeCollections.map((c, i) => (
              <Reveal as="div" key={c.name} delay={i * 0.06}>
                <Link href="/collections" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[4px] bg-blush-strong">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1300ms] ease-[var(--ease-out-quart)] group-hover:scale-[1.07]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-blush/95 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-rose">
                      {c.tag}
                    </span>
                  </div>
                  <div className="pt-5">
                    <h3 className="mb-1 font-display text-[26px] font-semibold text-ink">
                      {c.name}
                    </h3>
                    <p className="mb-2 text-[13.5px] text-muted">{c.desc}</p>
                    <span className="text-[11.5px] uppercase tracking-[0.14em] text-gold-ink">
                      {c.price} &rarr;
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------- brand story */}
        <section id="story" className="bg-rose text-cream-dim">
          <div className="mx-auto grid max-w-[1440px] items-stretch md:grid-cols-2">
            <div className="relative min-h-[360px] overflow-hidden md:min-h-[560px]">
              <Image
                src="/created-in-love-section-image.png"
                alt="Founder of House of Srishti"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[50%_30%]"
              />
            </div>
            <Reveal className="flex flex-col justify-center px-[clamp(28px,5vw,86px)] py-[clamp(52px,6vw,104px)]">
              <div className="mb-5">
                <LotusMark className="h-5 w-8 text-gold-soft" />
              </div>
              <h2 className="mb-6 font-display text-[clamp(32px,4.4vw,56px)] font-medium leading-[1.07] text-cream">
                Created in love, finished by hand
              </h2>
              <p className="mb-4 text-[16px] leading-[1.9] text-cream-dim/90">
                <em className="font-display not-italic text-cream">Srishti</em>{" "}
                means creation. We began with a simple wish: to dress a mother
                and her child in pieces as thoughtful as the bond they share.
                Today each garment is cut, embroidered and finished by a small
                circle of Indian artisans.
              </p>
              <p className="mb-9 text-[16px] leading-[1.9] text-cream-dim/90">
                Nothing is mass-produced. Everything is made to order, to your
                measurements, in fabrics chosen to feel as gentle on little skin
                as they look on you.
              </p>
              <dl className="grid grid-cols-3 gap-5 border-t border-gold-soft/30 pt-8">
                {[
                  ["Pure fabrics", "Chanderi, silk & mulmul cotton"],
                  ["Hand-finished", "Embroidery in small batches"],
                  ["Made to order", "Tailored to your size"],
                ].map(([term, desc]) => (
                  <div key={term}>
                    <dt className="font-display text-[21px] leading-tight text-cream">
                      {term}
                    </dt>
                    <dd className="mt-1.5 text-[12.5px] leading-snug text-cream-dim/75">
                      {desc}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ----------------------------------------------------- lookbook */}
        <section className={`${wrap} ${pad} py-[clamp(68px,8vw,118px)]`}>
          <Reveal className="mb-[clamp(40px,5vw,60px)] text-center">
            <p className="mb-3 text-[11.5px] uppercase tracking-[0.34em] text-gold-ink">
              SS&rsquo;26 Lookbook
            </p>
            <h2 className="font-display text-[clamp(34px,5vw,62px)] font-medium leading-none text-ink">
              The festive chapter
            </h2>
          </Reveal>
          <div className="grid grid-cols-6 gap-[clamp(12px,1.6vw,20px)]">
            <LookImage span="col-span-6 sm:col-span-4" ratio="16/11" src="/product_images/NAZAKAT_COTTON_SALWAR_FARSHI_SET/IMG_5488.JPG" video="/product_images/NAZAKAT_COTTON_SALWAR_FARSHI_SET/8C9B6C0D-F42A-4B7C-BD70-0FCA11B4AC4B.mp4" pos="50% 50%" />
            <LookImage span="col-span-3 sm:col-span-2" ratio="3/5" src="/product_images/MEHER__MOM_&_DAUGHTER_SALWAR_FARSHI_COTTON_SET/IMG_5782.JPG" pos="50% 30%" />
            <LookImage span="col-span-3" ratio="3/2" src="/product_images/LAALIMA_KIDS_COTTON_KURTA_AND_SALWAR_FARSHI_SET/IMG_5530.JPG" video="/product_images/LAALIMA_KIDS_COTTON_KURTA_AND_SALWAR_FARSHI_SET/IMG_5537.MOV" pos="50% 22%" />
            <LookImage span="col-span-6 sm:col-span-3" ratio="3/2" src="/product_images/NEELPARI_KIDS_SHARARA_SET/IMG_5649.JPG" video="/product_images/NEELPARI_KIDS_SHARARA_SET/IMG_5660.MOV" pos="50% 30%" />
          </div>
        </section>

        {/* ------------------------------------------------------ reviews */}
        <section id="reviews" className={`bg-blush-deep ${pad} py-[clamp(68px,8vw,118px)]`}>
          <div className={wrap}>
            <Reveal className="mb-[clamp(40px,5vw,60px)] text-center">
              <h2 className="font-display text-[clamp(34px,5vw,60px)] font-medium leading-none text-ink">
                Loved by mothers across India
              </h2>
            </Reveal>
            <div className="grid gap-[clamp(16px,2vw,26px)] md:grid-cols-3">
              {reviews.map((r, i) => (
                <Reveal as="div" key={r.name} delay={i * 0.07}>
                  <figure className="flex h-full flex-col rounded-[5px] border border-line bg-blush p-[clamp(30px,3vw,42px)]">
                    <div className="mb-5 text-[15px] tracking-[3px] text-gold-ink" aria-hidden="true">
                      &#9733;&#9733;&#9733;&#9733;&#9733;
                    </div>
                    <blockquote className="mb-7 font-display text-[clamp(20px,1.9vw,24px)] italic leading-[1.5] text-ink">
                      &ldquo;{r.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-auto flex items-center gap-3.5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-rose font-display text-[21px] text-blush">
                        {r.initial}
                      </span>
                      <span>
                        <span className="block text-[14px] font-medium text-ink">
                          {r.name}
                        </span>
                        <span className="block text-[12px] text-muted">{r.city}</span>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- faq */}
        <section id="faq" className={`mx-auto max-w-[920px] ${pad} py-[clamp(68px,8vw,118px)]`}>
          <Reveal className="mb-[clamp(40px,5vw,56px)] text-center">
            <h2 className="font-display text-[clamp(34px,5vw,58px)] font-medium leading-none text-ink">
              Frequently asked
            </h2>
          </Reveal>
          <Faq items={faqs} />
        </section>

        {/* ------------------------------------------------------ contact */}
        <section
          id="contact"
          className={`relative overflow-hidden bg-rose ${pad} py-[clamp(72px,9vw,134px)] text-cream-dim`}
        >
          <Image
            src={pexels(15305987, 1400)}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.12]"
          />
          <div className="relative mx-auto max-w-[820px] text-center">
            <Reveal>
              <div className="mb-5 flex justify-center">
                <LotusMark className="h-5 w-8 text-gold-soft" />
              </div>
              <h2 className="mb-5 font-display text-[clamp(36px,5.4vw,66px)] font-medium leading-[1.03] text-cream">
                Let&rsquo;s create something to remember
              </h2>
              <p className="mx-auto mb-10 max-w-[54ch] text-[16.5px] leading-[1.8] text-cream-dim/90">
                Share the pieces you love and your sizes. We&rsquo;ll guide you
                through fabrics, fit and timelines, personally. Most orders are
                crafted within 2 to 3 weeks.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="flex flex-wrap justify-center gap-3.5">
              <WhatsAppCTA
                message={messages.general}
                label="Chat on WhatsApp"
                variant="solid-cream"
                size="lg"
              />
              <InstagramCTA
                label={`Follow @${site.instagramHandle}`}
                variant="ghost-cream"
                size="lg"
              />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ------------------------------------------------------------- helpers */

function WardrobeCard({
  id,
  eyebrow,
  title,
  image,
  objectPos,
}: {
  id: string;
  eyebrow: string;
  title: string;
  image: string;
  objectPos: string;
}) {
  return (
    <Reveal as="div" id={id}>
      <Link href="/collections" className="group block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[4px]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectPosition: objectPos }}
            className="object-cover transition-transform duration-[1300ms] ease-[var(--ease-out-quart)] group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,oklch(0.18_0.06_350/0.74)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 p-[clamp(22px,3vw,34px)] text-cream">
            <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-gold-soft">
              {eyebrow}
            </p>
            <p className="mb-2 font-display text-[clamp(28px,3vw,40px)] leading-none">
              {title}
            </p>
            <span className="border-b border-cream/60 pb-1 text-[12px] uppercase tracking-[0.16em]">
              Discover &rarr;
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

function LookImage({
  span,
  ratio,
  src,
  pos,
  video,
}: {
  span: string;
  ratio: string;
  src: string;
  pos: string;
  video?: string;
}) {
  return (
    <Reveal as="div" className={`${span} overflow-hidden rounded-[4px]`}>
      <div className="group relative h-full w-full" style={{ aspectRatio: ratio }}>
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-quart)] group-hover:scale-[1.05]"
            style={{ objectPosition: pos }}
          />
        ) : (
          <Image
            src={src}
            alt="House of Srishti festive lookbook"
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            style={{ objectPosition: pos }}
            className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-quart)] group-hover:scale-[1.05]"
          />
        )}
      </div>
    </Reveal>
  );
}
