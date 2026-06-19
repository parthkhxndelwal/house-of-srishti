/**
 * Content layer. Photography uses Pexels (made-to-order ethnic-wear imagery);
 * swap `img` fields for real product shots when available.
 */

export function pexels(id: number, w = 900): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&dpr=2`;
}

export type Product = {
  slug: string;
  name: string;
  cats: string[];
  tag: string;
  fabric: string;
  sizes: string;
  price: string;
  pexelsId: number;
  desc?: string;
};

export const products: Product[] = [
  {
    slug: "heirloom-lehenga",
    name: "The Heirloom Lehenga",
    cats: ["For Her", "Festive"],
    tag: "Festive",
    fabric: "Hand-embroidered silk",
    sizes: "Custom",
    price: "₹9,800",
    pexelsId: 19764064,
  },
  {
    slug: "rosewater-silk-saree",
    name: "Rosewater Silk Saree Set",
    cats: ["For Her"],
    tag: "For Her",
    fabric: "Chanderi silk",
    sizes: "XS-XL",
    price: "₹6,900",
    pexelsId: 7442282,
    desc: "A blush rosewater saree hand-finished in soft Chanderi silk.",
  },
  {
    slug: "marigold-festive-gown",
    name: "Marigold Festive Gown",
    cats: ["For Her", "Festive"],
    tag: "Festive",
    fabric: "Organza",
    sizes: "XS-XXL",
    price: "₹7,800",
    pexelsId: 5922741,
  },
  {
    slug: "ivory-heritage-lehenga",
    name: "Ivory Heritage Lehenga",
    cats: ["For Her", "Bridal"],
    tag: "Bridal",
    fabric: "Raw silk",
    sizes: "Custom",
    price: "₹11,400",
    pexelsId: 9418855,
  },
  {
    slug: "emerald-day-anarkali",
    name: "Emerald Day Anarkali",
    cats: ["For Her", "Daywear"],
    tag: "Daywear",
    fabric: "Cotton silk",
    sizes: "XS-XL",
    price: "₹5,400",
    pexelsId: 5595710,
  },
  {
    slug: "mirror-work-chaniya-choli",
    name: "Mirror-Work Chaniya Choli",
    cats: ["For Her", "Festive"],
    tag: "Festive",
    fabric: "Mirror-work cotton",
    sizes: "S-XL",
    price: "₹6,200",
    pexelsId: 13650900,
  },
  {
    slug: "amber-silk-lehenga",
    name: "Amber Silk Lehenga",
    cats: ["For Her", "Festive"],
    tag: "For Her",
    fabric: "Art silk",
    sizes: "XS-XL",
    price: "₹8,400",
    pexelsId: 7123307,
  },
  {
    slug: "maroon-bridal-lehenga",
    name: "Maroon Bridal Lehenga",
    cats: ["For Her", "Bridal"],
    tag: "Bridal",
    fabric: "Velvet & zardozi",
    sizes: "Custom",
    price: "₹12,800",
    pexelsId: 9419108,
  },
  {
    slug: "little-blossom-lehenga",
    name: "Little Blossom Lehenga",
    cats: ["For Little Ones", "Festive"],
    tag: "For Little Ones",
    fabric: "Soft cotton-silk",
    sizes: "2-10 yrs",
    price: "₹3,900",
    pexelsId: 35327475,
  },
  {
    slug: "twirl-festive-frock",
    name: "Twirl Festive Frock Set",
    cats: ["For Little Ones", "Festive"],
    tag: "For Little Ones",
    fabric: "Tiered georgette",
    sizes: "1-8 yrs",
    price: "₹3,400",
    pexelsId: 14757473,
  },
  {
    slug: "sunshine-day-anarkali",
    name: "Sunshine Day Anarkali",
    cats: ["For Her", "Daywear"],
    tag: "Daywear",
    fabric: "Mulmul cotton",
    sizes: "XS-XXL",
    price: "₹4,200",
    pexelsId: 5922741,
  },
];

export const filterCategories = [
  "All",
  "For Her",
  "For Little Ones",
  "Festive",
  "Bridal",
  "Daywear",
] as const;

export const homeCollections = [
  {
    name: "The Heirloom Edit",
    tag: "Festive",
    desc: "Hand-embroidered silk lehengas for celebrations",
    price: "From ₹9,800",
    pexelsId: 19764064,
  },
  {
    name: "Everyday Grace",
    tag: "Daywear",
    desc: "Breathable cottons and easy anarkalis",
    price: "From ₹4,200",
    pexelsId: 5595710,
  },
  {
    name: "Little Blossom",
    tag: "For Little Ones",
    desc: "Twirl-ready frocks and lehengas for girls",
    price: "From ₹3,400",
    pexelsId: 35327475,
  },
];

export const reviews = [
  {
    quote:
      "The most beautiful set my daughter and I own. The fabric is so soft she never wants to take it off, and the fit was perfect from the very first wear.",
    name: "Aanya Mehta",
    city: "Mumbai",
    initial: "A",
  },
  {
    quote:
      "Ordering over WhatsApp felt like talking to a friend who happened to be a designer. They guided me on sizing and it arrived exactly as promised.",
    name: "Ritika Sharma",
    city: "Bengaluru",
    initial: "R",
  },
  {
    quote:
      "We wore our outfits for Diwali and could not stop receiving compliments. Heirloom quality, I know we will keep these forever.",
    name: "Neha Kapoor",
    city: "New Delhi",
    initial: "N",
  },
];

export const faqs = [
  {
    q: "How do I order without an online checkout?",
    a: "Tap any “Enquire on WhatsApp” button or message us on Instagram. Tell us the pieces you love and your sizes, we confirm fabric, fit and price, then craft your order personally. No online payment is taken on the site.",
  },
  {
    q: "Do you make outfits for both mothers and children?",
    a: "Yes. We design a full women’s line and a separate children’s line. Many styles are offered as coordinating mother-and-child pairs, but every piece can also be ordered on its own.",
  },
  {
    q: "What sizes do you offer?",
    a: "Women’s XS to XXL and children’s 0 to 12 years. As everything is made to order, we happily tailor to custom measurements at no extra charge.",
  },
  {
    q: "How long does an order take, and do you ship worldwide?",
    a: "Most made-to-order pieces are ready in 2 to 3 weeks. We ship across India and worldwide; timelines and charges are confirmed over WhatsApp before your order is finalised.",
  },
];

export const marqueeWords = [
  "Handcrafted in India",
  "Ethnic wear for her and little ones",
  "Pure natural fabrics",
  "Made to order",
  "Worldwide shipping",
  "Heirloom quality",
];
