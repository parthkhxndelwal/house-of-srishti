import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CollectionsClient } from "@/components/CollectionsClient";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { LotusMark } from "@/components/icons";
import { messages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Browse handcrafted ethnic wear for mothers and little ones, by occasion. Enquire on WhatsApp and we tailor it to your measurements.",
};

export default function CollectionsPage() {
  return (
    <>
      <AnnouncementBar>
        Complimentary styling on WhatsApp &nbsp;·&nbsp; Made to order in India
      </AnnouncementBar>
      <Header />

      <main>
        <section className="bg-blush-deep px-[clamp(20px,5vw,68px)] pb-[clamp(38px,5vw,64px)] pt-[clamp(56px,8vw,108px)] text-center">
          <div className="mx-auto max-w-[760px]">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <LotusMark className="h-4 w-6 text-gold" />
              <span className="h-px w-8 bg-gold" />
            </div>
            <h1 className="mb-4 font-display text-[clamp(40px,6.5vw,84px)] font-medium leading-none text-ink">
              For her and for little ones
            </h1>
            <p className="mx-auto max-w-[54ch] text-[16px] leading-[1.75] text-ink-body">
              Browse our handcrafted ethnic wear by occasion. Found a favourite?
              Enquire on WhatsApp and we&rsquo;ll craft it to your measurements.
            </p>
          </div>
        </section>

        <CollectionsClient />

        {/* CTA band */}
        <section className="relative overflow-hidden bg-[#ff3b5f] px-[clamp(20px,5vw,68px)] py-[clamp(60px,8vw,112px)] text-center text-cream">
          <div className="relative mx-auto max-w-[640px]">
            <h2 className="mb-4 font-display text-[clamp(30px,4.4vw,54px)] font-medium leading-[1.05] text-cream">
              Can&rsquo;t decide? We&rsquo;ll help you style it.
            </h2>
            <p className="mx-auto mb-8 max-w-[48ch] text-[16px] leading-[1.75] text-cream/85">
              Send us a message and our team will recommend the perfect pairing
              for your occasion, for you, your little one, or both.
            </p>
            <WhatsAppCTA
              message={messages.styling}
              variant="solid-cream"
              size="lg"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
