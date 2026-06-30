import Image from "next/image";
import Link from "next/link";

/** Horizontal lockup: emblem + "House of Srishti" wordmark. For the navbar (light grounds). */
export function LogoHorizontal({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo-nav.png"
      alt="House of Srishti"
      width={3950}
      height={1160}
      priority={priority}
      className={`object-contain ${className}`}
    />
  );
}

/** The full vertical logo lockup. Works on dark grounds (footer, 404). */
export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo-stack.png"
      alt="House of Srishti"
      width={1207}
      height={1565}
      className={className}
    />
  );
}

/** Header logo: horizontal lockup linked to home. */
export function LogoLink({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="House of Srishti, home" className="inline-flex shrink-0">
      <LogoHorizontal className={className} priority />
    </Link>
  );
}
