import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";
import { LotusMark } from "@/components/icons";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
      <Wordmark size="lg" href="/" />
      <LotusMark className="my-8 h-6 w-10 text-gold" />
      <h1 className="font-display text-[clamp(34px,6vw,64px)] font-medium leading-none text-ink">
        This page wandered off
      </h1>
      <p className="mt-4 max-w-[42ch] text-[16px] leading-relaxed text-ink-body">
        The piece you were looking for may have moved. Browse the collection, or
        return to the beginning.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3.5">
        <Link
          href="/collections"
          className="rounded-full bg-rose px-8 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-blush transition-[background-color,transform] duration-200 hover:bg-berry active:scale-[0.97]"
        >
          Browse collections
        </Link>
        <Link
          href="/"
          className="rounded-full border border-line px-8 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-rose transition-colors duration-200 hover:border-rose"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
