import { formatINR, type ProductPriceOption } from "@/lib/data";

/**
 * Single selected-variant price: current price with struck-through MRP.
 * Falls back to the legacy price string when no structured options exist.
 */
export function ProductPriceDisplay({
  option,
  fallback,
}: {
  readonly option?: ProductPriceOption;
  readonly fallback: string;
}) {
  if (!option) {
    return (
      <span className="font-display text-[clamp(23px,6.5vw,30px)] text-ink">
        {fallback}
      </span>
    );
  }

  return (
    <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <span className="font-display text-[clamp(23px,6.5vw,30px)] text-ink">
        {formatINR(option.price)}
      </span>
      {option.mrp !== undefined && (
        <span className="text-[14px] text-muted line-through decoration-line decoration-[1.5px]">
          {formatINR(option.mrp)}
        </span>
      )}
    </span>
  );
}

/**
 * Variant switcher — same pill-button UI as the size selector.
 */
export function VariantSelector({
  options,
  selected,
  onSelect,
}: {
  readonly options: readonly ProductPriceOption[];
  readonly selected: string | null;
  readonly onSelect: (label: string) => void;
}) {
  return (
    <div className="mb-6 flex flex-wrap gap-2.5">
      {options.map((option) => {
        const on = selected === option.label;
        return (
          <button
            key={option.label}
            type="button"
            onClick={() => onSelect(option.label)}
            aria-pressed={on}
            className={`rounded-[4px] border px-4 py-3 text-[13px] tracking-[0.06em] transition-[background-color,color,border-color,transform] duration-200 active:scale-[0.96] ${
              on
                ? "border-rose bg-[#ff3b5f] text-blush"
                : "border-line bg-transparent text-ink hover:border-rose"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

/**
 * Compact price line for listing cards.
 */
export function ProductPriceSummary({ label }: { readonly label: string }) {
  return (
    <span className="min-w-0 flex-1 text-[15px] leading-tight text-ink">
      {label}
    </span>
  );
}
