import { LotusMark } from "@/components/icons";
import { marqueeWords } from "@/lib/data";

/**
 * Brand value-strip. Single marquee on the page (max one per page rule).
 * Words are duplicated so the -50% translate loops seamlessly.
 */
export function Marquee() {
  const run = (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {marqueeWords.map((word) => (
        <span key={word} className="flex items-center">
          <span className="px-7 font-display text-[clamp(18px,2vw,22px)] italic text-blush">
            {word}
          </span>
          <LotusMark className="h-3.5 w-5 text-gold" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden border-y border-rose bg-[#e4607c] py-4">
      <div className="hs-marquee-track">
        {run}
        {run}
        {run}
        {run}
      </div>
      <span className="sr-only">{marqueeWords.join(", ")}</span>
    </div>
  );
}
