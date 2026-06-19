import Link from "next/link";

type WordmarkProps = {
  /** Visual size of the script line. */
  size?: "sm" | "md" | "lg";
  /** Render on a dark ground (footer, menu). */
  tone?: "light" | "dark";
  href?: string;
};

const scriptSize = {
  sm: "text-2xl",
  md: "text-[32px]",
  lg: "text-[clamp(34px,4vw,46px)]",
};

/**
 * Two-line wordmark echoing the logo lockup: a fine gilded "HOUSE OF" kicker
 * over the rose-magenta "Srishti" script.
 */
export function Wordmark({ size = "md", tone = "light", href = "/" }: WordmarkProps) {
  const script = tone === "dark" ? "text-cream" : "text-rose";
  const kicker = tone === "dark" ? "text-gold-soft" : "text-gold-ink";

  const content = (
    <span className="block text-center leading-none">
      <span
        className={`block pl-[0.46em] text-[10.5px] font-medium uppercase tracking-[0.46em] ${kicker}`}
      >
        House of
      </span>
      <span
        className={`mt-0.5 block font-display font-semibold tracking-[0.01em] ${scriptSize[size]} ${script}`}
      >
        Srishti
      </span>
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label="House of Srishti, home" className="inline-block">
      {content}
    </Link>
  );
}
