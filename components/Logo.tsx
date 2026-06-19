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
      src="/logo-horizontal.png"
      alt="House of Srishti"
      width={2113}
      height={900}
      priority={priority}
      className={className}
    />
  );
}

/** The full vertical logo lockup. Works on dark grounds (footer, 404). */
export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo-full.png"
      alt="House of Srishti"
      width={1139}
      height={1476}
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
