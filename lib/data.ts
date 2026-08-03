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
  priceOptions?: readonly ProductPriceOption[];
  pexelsId: number;
  images?: string[];
  desc?: string;
  soldOut?: boolean;
};

export type ProductPriceOption = {
  readonly label: string;
  readonly price: number;
  readonly mrp?: number;
};

export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getProductStartingPrice(product: Product): number | undefined {
  if (!product.priceOptions || product.priceOptions.length === 0) {
    return undefined;
  }

  return product.priceOptions.reduce(
    (lowest, option) => Math.min(lowest, option.price),
    product.priceOptions[0]?.price ?? 0,
  );
}

export function getProductStartingPriceLabel(product: Product): string {
  const startingPrice = getProductStartingPrice(product);
  return startingPrice === undefined
    ? product.price
    : `Starting from ${formatINR(startingPrice)}`;
}

export function getLowestPriceOption(
  product: Product,
): ProductPriceOption | undefined {
  return product.priceOptions?.reduce<ProductPriceOption | undefined>(
    (lowest, option) =>
      lowest === undefined || option.price < lowest.price ? option : lowest,
    undefined,
  );
}

export const products: Product[] = [
  {
    slug: "nazakat-cotton-salwar-farshi-set",
    name: "Nazakat – Mom & Daughter Salwar Farshi Set",
    cats: ["For Her", "For Little Ones", "Festive"],
    tag: "For Her",
    fabric: "100% Cotton",
    sizes: "S-XXL (Women), 2-12 yrs (Kids)",
    price: "Combo ₹2,399",
    priceOptions: [
      { label: "Women's set", price: 1499, mrp: 1999 },
      { label: "Kids' set", price: 1099, mrp: 1399 },
      { label: "Mom & daughter combo", price: 2399 },
    ],
    pexelsId: 0,
    images: [
      "/product_images/NAZAKAT_COTTON_SALWAR_FARSHI_SET/IMG_5488.JPG",
      "/product_images/NAZAKAT_COTTON_SALWAR_FARSHI_SET/IMG_5489.JPG",
      "/product_images/NAZAKAT_COTTON_SALWAR_FARSHI_SET/IMG_5500.JPG",
      "/product_images/NAZAKAT_COTTON_SALWAR_FARSHI_SET/IMG_5525.JPG",
      "/product_images/NAZAKAT_COTTON_SALWAR_FARSHI_SET/IMG_5526.JPG",
      "/product_images/NAZAKAT_COTTON_SALWAR_FARSHI_SET/IMG_5696.JPG",
      "/product_images/NAZAKAT_COTTON_SALWAR_FARSHI_SET/IMG_5697.JPG",
      "/product_images/NAZAKAT_COTTON_SALWAR_FARSHI_SET/IMG_5698.JPG",
      "/product_images/NAZAKAT_COTTON_SALWAR_FARSHI_SET/IMG_5700.JPG",
      "/product_images/NAZAKAT_COTTON_SALWAR_FARSHI_SET/IMG_5701.JPG",
      "/product_images/NAZAKAT_COTTON_SALWAR_FARSHI_SET/IMG_5702.JPG",
    ],
    desc: "Nazakat by House of Srishti is crafted in premium 100% cotton with elegant floral prints and beautiful detailing. Soft, breathable, and comfortable for all-day wear, it's the perfect outfit for festive celebrations, family gatherings, and effortless mother-daughter twinning. Premium 100% Cotton · Soft & Breathable Fabric · Elegant Floral Print · Comfortable Regular Fit · Perfect for Festive & Casual Wear · Matching Mom & Daughter Set. Women's Price: ₹1,999 → ₹1,499 | Kids' Price: ₹1,399 → ₹1,099 | Combo: ₹2,399.",
  },
  {
    slug: "laalima-kids-cotton-kurta-farshi-salwar-set",
    name: "Laalima – Kids Kurta & Farshi Salwar Set",
    cats: ["For Little Ones", "Festive"],
    tag: "For Little Ones",
    fabric: "100% Cotton",
    sizes: "2-12 yrs",
    price: "₹1,399",
    priceOptions: [{ label: "Kids' set", price: 1399 }],
    pexelsId: 0,
    images: [
      "/product_images/LAALIMA_KIDS_COTTON_KURTA_AND_SALWAR_FARSHI_SET/IMG_5530.JPG",
      "/product_images/LAALIMA_KIDS_COTTON_KURTA_AND_SALWAR_FARSHI_SET/IMG_5531.JPG",
      "/product_images/LAALIMA_KIDS_COTTON_KURTA_AND_SALWAR_FARSHI_SET/IMG_5532.JPG",
      "/product_images/LAALIMA_KIDS_COTTON_KURTA_AND_SALWAR_FARSHI_SET/IMG_5535.JPG",
      "/product_images/LAALIMA_KIDS_COTTON_KURTA_AND_SALWAR_FARSHI_SET/IMG_5540.JPG",
      "/product_images/LAALIMA_KIDS_COTTON_KURTA_AND_SALWAR_FARSHI_SET/IMG_5560.JPG",
      "/product_images/LAALIMA_KIDS_COTTON_KURTA_AND_SALWAR_FARSHI_SET/IMG_5569.JPG",
    ],
    desc: "Laalima by House of Srishti is crafted in premium 100% cotton, featuring timeless floral block prints paired with a graceful Farshi Salwar. Finished with elegant lace detailing, this outfit offers comfort and charm, making it perfect for festive celebrations, family gatherings, and special occasions. Premium 100% Cotton · Kurta with Farshi Salwar · Soft & Breathable Fabric · Traditional Floral Block Print · Elegant Lace Detailing · Comfortable Regular Fit · Perfect for Festive & Casual Wear.",
  },
  {
    slug: "neelpari-kids-sharara-set",
    name: "Neelpari – Kids Sharara Set",
    cats: ["For Little Ones", "Festive"],
    tag: "For Little Ones",
    fabric: "100% Cotton",
    sizes: "2-12 yrs",
    price: "₹1,499",
    priceOptions: [{ label: "Kids' set", price: 1499 }],
    pexelsId: 0,
    images: [
      "/product_images/NEELPARI_KIDS_SHARARA_SET/IMG_5649.JPG",
      "/product_images/NEELPARI_KIDS_SHARARA_SET/IMG_5669.JPG",
      "/product_images/NEELPARI_KIDS_SHARARA_SET/IMG_5670.JPG",
      "/product_images/NEELPARI_KIDS_SHARARA_SET/IMG_5671.JPG",
      "/product_images/NEELPARI_KIDS_SHARARA_SET/IMG_5672.JPG",
      "/product_images/NEELPARI_KIDS_SHARARA_SET/IMG_5673.JPG",
      "/product_images/NEELPARI_KIDS_SHARARA_SET/IMG_5683.JPG",
      "/product_images/NEELPARI_KIDS_SHARARA_SET/IMG_5685.JPG",
    ],
    desc: "Neelpari by House of Srishti is crafted in premium 100% cotton, featuring vibrant floral prints, delicate tassel sleeves, and a graceful sharara silhouette. Soft, breathable, and lightweight, this outfit is designed to keep little ones comfortable while adding a touch of elegance to every festive celebration and special occasion. Premium 100% Cotton · Stylish Sharara Set · Elegant Tassel Sleeves · Soft & Breathable Fabric · Vibrant Floral Print · Comfortable Regular Fit · Perfect for Festive Wear & Special Occasions.",
  },
  {
    slug: "meher-mom-daughter-salwar-farshi-cotton-set",
    name: "Meher – Mom & Daughter Salwar Farshi Set",
    cats: ["For Her", "For Little Ones", "Festive"],
    tag: "For Her",
    fabric: "100% Cotton",
    sizes: "S-XXL (Women), 2-12 yrs (Kids)",
    price: "Women ₹1,399 · Kids ₹999",
    priceOptions: [
      { label: "Women's set", price: 1399 },
      { label: "Kids' set", price: 999 },
    ],
    pexelsId: 0,
    images: [
      "/product_images/MEHER__MOM_&_DAUGHTER_SALWAR_FARSHI_COTTON_SET/IMG_5782.JPG",
      "/product_images/MEHER__MOM_&_DAUGHTER_SALWAR_FARSHI_COTTON_SET/IMG_5791.JPG",
      "/product_images/MEHER__MOM_&_DAUGHTER_SALWAR_FARSHI_COTTON_SET/IMG_5836.JPG",
      "/product_images/MEHER__MOM_&_DAUGHTER_SALWAR_FARSHI_COTTON_SET/IMG_5838.JPG",
      "/product_images/MEHER__MOM_&_DAUGHTER_SALWAR_FARSHI_COTTON_SET/IMG_5844.JPG",
      "/product_images/MEHER__MOM_&_DAUGHTER_SALWAR_FARSHI_COTTON_SET/IMG_5845.JPG",
      "/product_images/MEHER__MOM_&_DAUGHTER_SALWAR_FARSHI_COTTON_SET/IMG_5846.JPG",
      "/product_images/MEHER__MOM_&_DAUGHTER_SALWAR_FARSHI_COTTON_SET/IMG_5847.JPG",
      "/product_images/MEHER__MOM_&_DAUGHTER_SALWAR_FARSHI_COTTON_SET/IMG_5848.JPG",
      "/product_images/MEHER__MOM_&_DAUGHTER_SALWAR_FARSHI_COTTON_SET/IMG_5851.JPG",
      "/product_images/MEHER__MOM_&_DAUGHTER_SALWAR_FARSHI_COTTON_SET/IMG_5852.JPG",
      "/product_images/MEHER__MOM_&_DAUGHTER_SALWAR_FARSHI_COTTON_SET/IMG_5853.JPG",
      "/product_images/MEHER__MOM_&_DAUGHTER_SALWAR_FARSHI_COTTON_SET/IMG_5857.JPG",
      "/product_images/MEHER__MOM_&_DAUGHTER_SALWAR_FARSHI_COTTON_SET/IMG_5873.JPG",
      "/product_images/MEHER__MOM_&_DAUGHTER_SALWAR_FARSHI_COTTON_SET/IMG_5874.JPG",
      "/product_images/MEHER__MOM_&_DAUGHTER_SALWAR_FARSHI_COTTON_SET/IMG_5875.JPG",
      "/product_images/MEHER__MOM_&_DAUGHTER_SALWAR_FARSHI_COTTON_SET/IMG_5876.JPG",
      "/product_images/MEHER__MOM_&_DAUGHTER_SALWAR_FARSHI_COTTON_SET/IMG_5885.JPG",
    ],
    desc: "Meher by House of Srishti is a beautifully crafted cotton ethnic set featuring delicate floral prints and elegant lace detailing. Made from soft, breathable cotton, it offers all-day comfort with timeless style. Perfect for festive celebrations, family gatherings, and memorable mother-daughter twinning moments. Premium 100% Cotton · Soft & Breathable Fabric · Elegant Floral Print · Delicate Lace Detailing · Comfortable Regular Fit · Perfect for Festive & Casual Wear · Matching Mom & Daughter Set.",
  },
  {
    slug: "gul-kids-halter-coord-set",
    name: "Gul – Kids Halter Co-ord Set",
    cats: ["For Little Ones", "Daywear"],
    tag: "For Little Ones",
    fabric: "100% Cotton",
    sizes: "2-12 yrs",
    price: "₹999",
    priceOptions: [{ label: "Kids' co-ord", price: 999 }],
    pexelsId: 0,
    images: [
      "/product_images/GUL_KIDS_HALTER_CO-ORD_SET/IMG_5703.JPG",
      "/product_images/GUL_KIDS_HALTER_CO-ORD_SET/IMG_5727.JPG",
      "/product_images/GUL_KIDS_HALTER_CO-ORD_SET/IMG_5728.JPG",
      "/product_images/GUL_KIDS_HALTER_CO-ORD_SET/IMG_5734.JPG",
      "/product_images/GUL_KIDS_HALTER_CO-ORD_SET/IMG_5736.JPG",
      "/product_images/GUL_KIDS_HALTER_CO-ORD_SET/IMG_5738.JPG",
    ],
    desc: "Gul by House of Srishti is a playful and stylish kids' co-ord set crafted in premium 100% cotton. Featuring a trendy halter-neck top with a comfortable wide-leg bottom and vibrant floral prints, it's designed for carefree summer days, vacations, birthday parties, and everyday adventures. Premium 100% Cotton · Stylish Halter-Neck Top · Comfortable Wide-Leg Pants · Soft & Breathable Fabric · Vibrant Floral Print · Lightweight & Easy to Wear · Perfect for Summer, Vacations & Casual Outings.",
  },
  {
    slug: "chaand-kurti",
    name: "Chaand",
    cats: ["For Her", "Daywear"],
    tag: "For Her",
    fabric: "100% Cotton",
    sizes: "XS-XXL",
    price: "Price on request",
    pexelsId: 0,
    images: [
      "/product_images/CHAAND_KURTI/1.jpg",
      "/product_images/CHAAND_KURTI/2.jpg",
      "/product_images/CHAAND_KURTI/3.jpg",
      "/product_images/CHAAND_KURTI/4.jpg",
    ],
    desc: "Chaand by House of Srishti is a breezy short kurti in premium 100% cotton, hand block-printed in deep indigo with delicate buti motifs. Its relaxed cami silhouette with adjustable shoulder ties makes it an easy throw-on for warm days, brunches and casual outings. Premium 100% Cotton · Hand Block Print · Adjustable Shoulder Ties · Soft & Breathable Fabric · Relaxed Short Kurti · Perfect for Daywear & Casual Outings.",
  },
  {
    slug: "noor-kurti",
    name: "Noor",
    cats: ["For Her", "Daywear", "Festive"],
    tag: "For Her",
    fabric: "100% Cotton",
    sizes: "XS-XXL",
    price: "Price on request",
    pexelsId: 0,
    images: [
      "/product_images/NOOR/1.jpg",
      "/product_images/NOOR/2.jpg",
      "/product_images/NOOR/3.jpg",
      "/product_images/NOOR/4.jpg",
      "/product_images/NOOR/5.jpg",
    ],
    desc: "Noor by House of Srishti is a striking straight kurti crafted in premium 100% cotton, featuring a bold lotus print in rich red and a graceful lace-up back detail. Elegant yet effortless, it pairs beautifully with trousers or palazzos for festive daywear and evening gatherings. Premium 100% Cotton · Bold Lotus Print · Lace-Up Back Detail · Soft & Breathable Fabric · Straight Kurti Silhouette · Perfect for Festive & Casual Wear.",
  },
  {
    slug: "gulabi-noor-kurti",
    name: "Gulabi Noor",
    cats: ["For Her", "Daywear"],
    tag: "For Her",
    fabric: "100% Cotton",
    sizes: "XS-XXL",
    price: "Price on request",
    pexelsId: 0,
    images: [
      "/product_images/GULABI_NOOR_KURTI/1.jpg",
      "/product_images/GULABI_NOOR_KURTI/2.jpg",
      "/product_images/GULABI_NOOR_KURTI/3.jpg",
      "/product_images/GULABI_NOOR_KURTI/4.jpg",
      "/product_images/GULABI_NOOR_KURTI/5.jpg",
      "/product_images/GULABI_NOOR_KURTI/6.jpg",
    ],
    desc: "Gulabi Noor by House of Srishti is a soft rose-pink kurti in premium 100% cotton, printed with dainty buti motifs and finished with delicate lace trims at the neck and hem. Light, breathable and endlessly wearable, it is made for everyday elegance and easy festive daywear. Premium 100% Cotton · Delicate Buti Print · Lace Trim Detailing · Soft & Breathable Fabric · Comfortable Regular Fit · Perfect for Daywear & Casual Wear.",
  },
  {
    slug: "geet-kurti",
    name: "Geet",
    cats: ["For Her", "Daywear"],
    tag: "For Her",
    fabric: "100% Cotton",
    sizes: "XS-XXL",
    price: "Price on request",
    pexelsId: 0,
    images: [
      "/product_images/GEET_KURTI/1.jpg",
      "/product_images/GEET_KURTI/2.jpg",
      "/product_images/GEET_KURTI/3.jpg",
      "/product_images/GEET_KURTI/4.jpg",
    ],
    desc: "Geet by House of Srishti is a warm mustard short kurti crafted in premium 100% cotton, featuring an intricate kalamkari-inspired print and gently gathered sleeves. Comfortable and versatile, it layers effortlessly over salwars, trousers or jeans for relaxed daywear. Premium 100% Cotton · Kalamkari-Inspired Print · Gathered Sleeves · Soft & Breathable Fabric · Relaxed Short Kurti · Perfect for Everyday & Casual Wear.",
  },
  {
    slug: "laila-set",
    name: "Laila Set",
    cats: ["For Her", "Festive"],
    tag: "For Her",
    fabric: "100% Cotton",
    sizes: "XS-XXL",
    price: "Price on request",
    pexelsId: 0,
    soldOut: true,
    images: [
      "/product_images/LAILA_SET/1.jpg",
      "/product_images/LAILA_SET/2.jpg",
      "/product_images/LAILA_SET/3.jpg",
      "/product_images/LAILA_SET/4.jpg",
      "/product_images/LAILA_SET/5.jpg",
      "/product_images/LAILA_SET/6.jpg",
    ],
    desc: "Laila by House of Srishti is an elegant co-ord set in premium 100% cotton, styled in a regal royal blue with delicate gota lace detailing along the kurta and sleeves. A graceful, put-together look for festive gatherings and special occasions. Premium 100% Cotton · Kurta & Pant Set · Gota Lace Detailing · Regal Royal Blue · Soft & Breathable Fabric · Perfect for Festive Wear & Special Occasions.",
  },
];

export const filterCategories = [
  "All",
  "For Her",
  "For Little Ones",
  "Festive",
  "Daywear",
  "Mom & Daughter",
] as const;

export const homeCollections = [
  {
    name: "Nazakat Collection",
    tag: "For Her",
    desc: "Mom & Daughter cotton salwar farshi sets",
    price: "Combo ₹2,399",
    pexelsId: 0,
    image: "/product_images/NAZAKAT_COTTON_SALWAR_FARSHI_SET/IMG_5488.JPG",
  },
  {
    name: "Kids Festive Edit",
    tag: "For Little Ones",
    desc: "Cotton kurta sets, shararas & co-ords",
    price: "From ₹999",
    pexelsId: 0,
    image: "/product_images/NEELPARI_KIDS_SHARARA_SET/IMG_5649.JPG",
  },
  {
    name: "Meher Collection",
    tag: "For Her",
    desc: "Mom & Daughter cotton sets with lace detailing",
    price: "Women ₹1,399 · Kids ₹999",
    pexelsId: 0,
    image: "/product_images/MEHER__MOM_&_DAUGHTER_SALWAR_FARSHI_COTTON_SET/IMG_5782.JPG",
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
    q: "How long does an order take, and do you ship across India?",
    a: "Most made-to-order pieces are ready in 2 to 3 weeks. We ship across India; timelines and charges are confirmed over WhatsApp before your order is finalised.",
  },
];

export const marqueeWords = [
  "Complimentary styling on WhatsApp",
  "Handcrafted in India",
  "Pan India shipping",
];
