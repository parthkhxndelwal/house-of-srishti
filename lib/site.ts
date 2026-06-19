/**
 * Central brand configuration. House of Srishti sells made-to-order ethnic
 * wear with no online checkout — every CTA routes to WhatsApp or Instagram.
 * Swap these two values to point the whole site at the real accounts.
 */
export const site = {
  name: "House of Srishti",
  shortName: "Srishti",
  email: "hello@houseofsrishti.com",
  whatsappNumber: "919000000000", // digits only, incl. country code
  instagramHandle: "houseofsrishti",
  tagline: "Couture for mothers and little ones, handcrafted in India.",
} as const;

const waBase = `https://wa.me/${site.whatsappNumber.replace(/[^0-9]/g, "")}`;

/** Build a WhatsApp deep link with a prefilled enquiry message. */
export function waLink(message: string): string {
  return `${waBase}?text=${encodeURIComponent(message)}`;
}

export const instagramLink = `https://instagram.com/${site.instagramHandle}`;

export const messages = {
  general:
    "Hello House of Srishti! I'd love to enquire about your ethnic wear for mothers and children.",
  collection:
    "Hello House of Srishti! I'd love to enquire about a piece from your collection.",
  styling:
    "Hello House of Srishti! Could you help me style an outfit for an upcoming occasion?",
} as const;
