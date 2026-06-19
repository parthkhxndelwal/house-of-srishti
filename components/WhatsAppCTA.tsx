import { WhatsAppIcon, InstagramIcon } from "@/components/icons";
import { waLink, instagramLink } from "@/lib/site";

type Variant = "solid-rose" | "solid-cream" | "ghost-cream" | "ghost-rose";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full text-[12.5px] font-medium uppercase tracking-[0.14em] transition-[background-color,border-color,transform] duration-200 ease-[var(--ease-out-quart)] active:scale-[0.97]";

const variants: Record<Variant, string> = {
  "solid-rose": "bg-rose text-blush hover:bg-berry",
  "solid-cream": "bg-blush text-berry hover:bg-gold-soft",
  "ghost-cream":
    "border border-cream/50 text-cream hover:bg-cream/12 hover:border-cream/70",
  "ghost-rose": "border border-line text-rose hover:border-rose",
};

/** Primary enquiry button. Routes to WhatsApp with a prefilled message. */
export function WhatsAppCTA({
  message,
  label = "Enquire on WhatsApp",
  variant = "solid-rose",
  size = "md",
  className = "",
}: {
  message: string;
  label?: string;
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
}) {
  const pad = size === "lg" ? "px-8 py-4" : "px-7 py-3.5";
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${pad} ${className}`}
    >
      <WhatsAppIcon className={size === "lg" ? "h-4 w-4" : "h-[15px] w-[15px]"} />
      {label}
    </a>
  );
}

/** Secondary Instagram button. */
export function InstagramCTA({
  label,
  variant = "ghost-cream",
  size = "md",
  className = "",
}: {
  label: string;
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
}) {
  const pad = size === "lg" ? "px-8 py-4" : "px-7 py-3.5";
  return (
    <a
      href={instagramLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${pad} ${className}`}
    >
      <InstagramIcon className="h-4 w-4" />
      {label}
    </a>
  );
}
