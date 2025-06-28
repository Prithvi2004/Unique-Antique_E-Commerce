export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  description: string;
  features: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  modelUrl?: string;
  tags: string[];
  rarity?: "common" | "rare" | "legendary" | "exclusive";
  yearMade?: number;
  origin?: string;
  seller: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    verified?: boolean;
  };
}

export const products: Product[] = [
  // LUXURY COLLECTION - 10 Premium Items
  {
    id: "1",
    name: "Patek Philippe Nautilus 5711/1A",
    price: 189500,
    originalPrice: 195000,
    image:
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Watches",
    description:
      "The holy grail of luxury sports watches. This discontinued Nautilus represents the pinnacle of Swiss watchmaking with its iconic porthole design and exceptional investment potential.",
    features: [
      "Stainless Steel Case",
      "Cal. 324 S C Movement",
      "Water Resistant 120m",
      "Sapphire Crystal",
      "Integrated Bracelet",
      "Blue Dial",
    ],
    rating: 4.9,
    reviews: 347,
    inStock: true,
    rarity: "legendary",
    yearMade: 2021,
    origin: "Switzerland",
    tags: [
      "luxury",
      "swiss",
      "automatic",
      "sports",
      "investment",
      "discontinued",
    ],
    seller: {
      id: "seller1",
      name: "Swiss Timepiece Gallery",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.9,
      verified: true,
    },
  },
  {
    id: "2",
    name: "Rolex Daytona 116500LN",
    price: 45750,
    image:
      "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Watches",
    description:
      "The legendary Cosmograph Daytona with ceramic bezel. A racing icon that combines precision chronograph functionality with unmistakable Rolex prestige.",
    features: [
      "Oystersteel Case",
      "Cerachrom Bezel",
      "Cal. 4130 Movement",
      "Chronograph",
      "Oyster Bracelet",
      "White Dial",
    ],
    rating: 4.8,
    reviews: 1092,
    inStock: true,
    rarity: "legendary",
    yearMade: 2023,
    origin: "Switzerland",
    tags: ["luxury", "chronograph", "racing", "swiss", "investment"],
    seller: {
      id: "seller1",
      name: "Swiss Timepiece Gallery",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.9,
      verified: true,
    },
  },
  {
    id: "3",
    name: "Harry Winston Diamond Necklace",
    price: 285000,
    image:
      "https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Jewelry",
    description:
      "An extraordinary 15-carat diamond rivière necklace featuring perfectly matched D-color, flawless diamonds. Each stone is meticulously selected for exceptional brilliance.",
    features: [
      "15 Total Carats",
      "D Color Diamonds",
      "Flawless Clarity",
      "Platinum Setting",
      "Harry Winston Signature",
      "GIA Certified",
    ],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    rarity: "legendary",
    origin: "New York",
    tags: [
      "jewelry",
      "diamonds",
      "necklace",
      "luxury",
      "harry winston",
      "investment",
    ],
    seller: {
      id: "seller2",
      name: "Prestige Jewelers",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.9,
      verified: true,
    },
  },
  {
    id: "4",
    name: "Hermès Birkin 30 Himalaya",
    price: 125000,
    originalPrice: 135000,
    image:
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Fashion",
    description:
      "The rarest Birkin bag in the world. Crafted from Niloticus crocodile with diamond-encrusted hardware, representing the ultimate in luxury handbags.",
    features: [
      "Niloticus Crocodile",
      "Diamond Hardware",
      "Palladium Plating",
      "Hand-stitched",
      "Hermès Authenticity",
      "Extremely Rare",
    ],
    rating: 4.9,
    reviews: 23,
    inStock: true,
    rarity: "legendary",
    yearMade: 2023,
    origin: "France",
    tags: [
      "fashion",
      "handbag",
      "hermes",
      "birkin",
      "crocodile",
      "investment",
      "luxury",
    ],
    seller: {
      id: "seller3",
      name: "Luxury Fashion House",
      avatar:
        "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.9,
      verified: true,
    },
  },
  {
    id: "5",
    name: "Cartier Panthère de Cartier Ring",
    price: 45000,
    image:
      "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Jewelry",
    description:
      "The iconic Panthère ring in 18k white gold, featuring emerald eyes and onyx spots. A masterpiece of Cartier's legendary panther collection.",
    features: [
      "18k White Gold",
      "Emerald Eyes",
      "Onyx Spots",
      "Diamond Pavé",
      "Cartier Hallmark",
      "Iconic Design",
    ],
    rating: 4.8,
    reviews: 234,
    inStock: true,
    rarity: "rare",
    origin: "France",
    tags: ["jewelry", "cartier", "panther", "luxury", "iconic"],
    seller: {
      id: "seller2",
      name: "Prestige Jewelers",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.9,
      verified: true,
    },
  },
  {
    id: "6",
    name: "Audemars Piguet Royal Oak",
    price: 67500,
    image:
      "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Watches",
    description:
      'The original luxury sports watch that revolutionized the industry. Features the iconic octagonal bezel and "Tapisserie" dial pattern.',
    features: [
      "Stainless Steel",
      "Octagonal Bezel",
      "Cal. 3120 Movement",
      "Blue Tapisserie Dial",
      "Integrated Bracelet",
    ],
    rating: 4.9,
    reviews: 456,
    inStock: true,
    rarity: "legendary",
    yearMade: 2024,
    origin: "Switzerland",
    tags: ["luxury", "swiss", "sports", "iconic", "investment"],
    seller: {
      id: "seller1",
      name: "Swiss Timepiece Gallery",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.9,
      verified: true,
    },
  },
  {
    id: "7",
    name: "Chanel Haute Couture Gown",
    price: 85000,
    image:
      "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1447254/pexels-photo-1447254.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Fashion",
    description:
      "An exquisite Chanel Haute Couture evening gown from the latest collection. Hand-embroidered with thousands of sequins and pearls.",
    features: [
      "Haute Couture",
      "Hand Embroidered",
      "Silk Tulle",
      "Pearl Details",
      "Sequin Work",
      "Bespoke Fitting",
    ],
    rating: 4.8,
    reviews: 34,
    inStock: true,
    rarity: "exclusive",
    origin: "France",
    tags: ["fashion", "haute couture", "chanel", "gown", "luxury"],
    seller: {
      id: "seller3",
      name: "Luxury Fashion House",
      avatar:
        "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.9,
      verified: true,
    },
  },
  {
    id: "8",
    name: "Baccarat Zenith Chandelier",
    price: 145000,
    image:
      "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Home & Decor",
    description:
      "The magnificent Zenith chandelier featuring 84 lights and over 500 hand-cut Baccarat crystal elements. A masterpiece that transforms any space into a palace.",
    features: [
      "84 Light Points",
      "500+ Crystal Elements",
      "Hand-cut Baccarat Crystal",
      "24k Gold Plated",
      "Custom Installation",
      "Certificate of Authenticity",
    ],
    rating: 4.9,
    reviews: 18,
    inStock: true,
    rarity: "legendary",
    origin: "France",
    tags: ["home", "crystal", "lighting", "baccarat", "luxury", "chandelier"],
    seller: {
      id: "seller4",
      name: "Maison Luxe Interiors",
      avatar:
        "https://images.pexels.com/photos/1239301/pexels-photo-1239301.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.8,
      verified: true,
    },
  },
  {
    id: "9",
    name: "Van Cleef & Arpels Alhambra Bracelet",
    price: 12500,
    image:
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Jewelry",
    description:
      "The timeless Vintage Alhambra bracelet in 18k yellow gold with mother-of-pearl. A symbol of luck and elegance from the prestigious Maison.",
    features: [
      "18k Yellow Gold",
      "Mother-of-Pearl",
      "Vintage Alhambra",
      "Signature Clasp",
      "Handcrafted",
      "Limited Edition",
    ],
    rating: 4.7,
    reviews: 567,
    inStock: true,
    rarity: "rare",
    origin: "France",
    tags: ["jewelry", "van cleef", "alhambra", "luxury", "mother-of-pearl"],
    seller: {
      id: "seller2",
      name: "Prestige Jewelers",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.9,
      verified: true,
    },
  },
  {
    id: "10",
    name: "Louis Vuitton Artycapucines",
    price: 15500,
    image:
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Fashion",
    description:
      "A limited edition Artycapucines bag featuring contemporary art collaboration. Where luxury craftsmanship meets artistic expression.",
    features: [
      "Limited Edition",
      "Artist Collaboration",
      "Leather Craftsmanship",
      "Unique Design",
      "Collectible",
      "Numbered Piece",
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    rarity: "exclusive",
    origin: "France",
    tags: ["fashion", "louis vuitton", "art", "limited edition", "luxury"],
    seller: {
      id: "seller3",
      name: "Luxury Fashion House",
      avatar:
        "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.9,
      verified: true,
    },
  },

  // ANTIQUE COLLECTION - 10 Historical Treasures
  {
    id: "11",
    name: "Victorian Diamond Tiara",
    price: 75000,
    image:
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Jewelry",
    description:
      "A magnificent Victorian diamond tiara circa 1880, featuring old mine-cut diamonds in a scrolling foliate design. Royal provenance with documented history.",
    features: [
      "Victorian Era (1880)",
      "Old Mine-Cut Diamonds",
      "Silver-topped Gold",
      "Royal Provenance",
      "Historical Documentation",
      "Museum Quality",
    ],
    rating: 4.9,
    reviews: 12,
    inStock: true,
    rarity: "legendary",
    yearMade: 1880,
    origin: "England",
    tags: ["antique", "victorian", "tiara", "diamonds", "royal", "historical"],
    seller: {
      id: "seller5",
      name: "Heritage Antiques",
      avatar:
        "https://images.pexels.com/photos/1239301/pexels-photo-1239301.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.8,
      verified: true,
    },
  },
  {
    id: "12",
    name: "Ming Dynasty Porcelain Vase",
    price: 185000,
    image:
      "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Art",
    description:
      "A rare Ming Dynasty blue and white porcelain vase from the Xuande period (1425-1435). Museum-quality piece with imperial provenance.",
    features: [
      "Ming Dynasty (1425-1435)",
      "Blue and White Porcelain",
      "Imperial Provenance",
      "Museum Quality",
      "Authentication Certificate",
      "Historical Significance",
    ],
    rating: 4.9,
    reviews: 8,
    inStock: true,
    rarity: "legendary",
    yearMade: 1430,
    origin: "China",
    tags: [
      "antique",
      "ming dynasty",
      "porcelain",
      "chinese",
      "imperial",
      "museum quality",
    ],
    seller: {
      id: "seller5",
      name: "Heritage Antiques",
      avatar:
        "https://images.pexels.com/photos/1239301/pexels-photo-1239301.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.8,
      verified: true,
    },
  },
  {
    id: "13",
    name: "Art Nouveau Tiffany Lamp",
    price: 28500,
    image:
      "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Home & Decor",
    description:
      "An authentic Tiffany Studios dragonfly table lamp circa 1910. Features hand-cut stained glass in the iconic dragonfly pattern.",
    features: [
      "Tiffany Studios",
      "Hand-cut Stained Glass",
      "Bronze Base",
      "Dragonfly Pattern",
      "Original Patina",
      "Signed Base",
    ],
    rating: 4.9,
    reviews: 67,
    inStock: true,
    rarity: "legendary",
    yearMade: 1910,
    origin: "United States",
    tags: [
      "antique",
      "tiffany",
      "art nouveau",
      "lamp",
      "stained glass",
      "collectible",
    ],
    seller: {
      id: "seller5",
      name: "Heritage Antiques",
      avatar:
        "https://images.pexels.com/photos/1239301/pexels-photo-1239301.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.8,
      verified: true,
    },
  },
  {
    id: "14",
    name: "Georgian Silver Tea Service",
    price: 18500,
    image:
      "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Home & Decor",
    description:
      "An exquisite Georgian sterling silver tea service by Paul Storr, circa 1815. Complete five-piece set with original hallmarks and exceptional craftsmanship.",
    features: [
      "Paul Storr Maker",
      "Sterling Silver",
      "Georgian Period (1815)",
      "Five-Piece Set",
      "Original Hallmarks",
      "Museum Provenance",
    ],
    rating: 4.8,
    reviews: 34,
    inStock: true,
    rarity: "rare",
    yearMade: 1815,
    origin: "England",
    tags: [
      "antique",
      "georgian",
      "silver",
      "tea service",
      "paul storr",
      "collectible",
    ],
    seller: {
      id: "seller5",
      name: "Heritage Antiques",
      avatar:
        "https://images.pexels.com/photos/1239301/pexels-photo-1239301.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.8,
      verified: true,
    },
  },
  {
    id: "15",
    name: "Fabergé Imperial Egg Replica",
    price: 35000,
    image:
      "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Art",
    description:
      "An exquisite Fabergé workshop replica of the Imperial Coronation Egg, crafted with traditional techniques and precious materials.",
    features: [
      "Fabergé Workshop",
      "Gold and Enamel",
      "Precious Stones",
      "Traditional Techniques",
      "Certificate of Authenticity",
      "Collector's Edition",
    ],
    rating: 4.8,
    reviews: 45,
    inStock: true,
    rarity: "exclusive",
    origin: "Russia",
    tags: ["antique", "faberge", "imperial", "egg", "collectible", "art"],
    seller: {
      id: "seller5",
      name: "Heritage Antiques",
      avatar:
        "https://images.pexels.com/photos/1239301/pexels-photo-1239301.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.8,
      verified: true,
    },
  },
  {
    id: "16",
    name: "Regency Mahogany Secretary Desk",
    price: 22000,
    image:
      "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Home & Decor",
    description:
      "A magnificent Regency period mahogany secretary desk with secret compartments and original brass fittings. Attributed to Gillows of Lancaster.",
    features: [
      "Regency Period (1820)",
      "Cuban Mahogany",
      "Secret Compartments",
      "Original Brass",
      "Gillows Attribution",
      "Leather Writing Surface",
    ],
    rating: 4.7,
    reviews: 28,
    inStock: true,
    rarity: "rare",
    yearMade: 1820,
    origin: "England",
    tags: ["antique", "regency", "furniture", "mahogany", "desk", "gillows"],
    seller: {
      id: "seller6",
      name: "English Antique Furniture",
      avatar:
        "https://images.pexels.com/photos/1239301/pexels-photo-1239301.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.7,
      verified: true,
    },
  },
  {
    id: "17",
    name: "Art Deco Cartier Clock",
    price: 45000,
    image:
      "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Home & Decor",
    description:
      "A stunning Art Deco mystery clock by Cartier, circa 1925. Features rock crystal, onyx, and diamonds in the iconic mystery movement design.",
    features: [
      "Cartier Paris",
      "Mystery Movement",
      "Rock Crystal",
      "Onyx and Diamonds",
      "Art Deco Design",
      "Original Box",
    ],
    rating: 4.9,
    reviews: 19,
    inStock: true,
    rarity: "legendary",
    yearMade: 1925,
    origin: "France",
    tags: ["antique", "art deco", "cartier", "clock", "mystery", "collectible"],
    seller: {
      id: "seller7",
      name: "Art Deco Specialists",
      avatar:
        "https://images.pexels.com/photos/1239301/pexels-photo-1239301.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.8,
      verified: true,
    },
  },
  {
    id: "18",
    name: "Edo Period Samurai Katana",
    price: 95000,
    image:
      "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Art",
    description:
      "An exceptional Edo period katana by master swordsmith Kotetsu, circa 1650. Features original koshirae and documented provenance.",
    features: [
      "Kotetsu School",
      "Edo Period (1650)",
      "Original Koshirae",
      "NBTHK Papers",
      "Museum Provenance",
      "Exceptional Hamon",
    ],
    rating: 4.9,
    reviews: 15,
    inStock: true,
    rarity: "legendary",
    yearMade: 1650,
    origin: "Japan",
    tags: [
      "antique",
      "japanese",
      "samurai",
      "katana",
      "edo period",
      "museum quality",
    ],
    seller: {
      id: "seller8",
      name: "Japanese Art Specialists",
      avatar:
        "https://images.pexels.com/photos/1239301/pexels-photo-1239301.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.9,
      verified: true,
    },
  },
  {
    id: "19",
    name: "Louis XVI Ormolu Candelabra",
    price: 32000,
    image:
      "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Home & Decor",
    description:
      "A pair of magnificent Louis XVI ormolu candelabra attributed to Pierre-Philippe Thomire, circa 1785. Exceptional gilt bronze work with original patina.",
    features: [
      "Louis XVI Period",
      "Thomire Attribution",
      "Gilt Bronze",
      "Original Patina",
      "Pair of Candelabra",
      "Museum Quality",
    ],
    rating: 4.8,
    reviews: 22,
    inStock: true,
    rarity: "rare",
    yearMade: 1785,
    origin: "France",
    tags: ["antique", "louis xvi", "ormolu", "candelabra", "thomire", "french"],
    seller: {
      id: "seller9",
      name: "French Antiques Gallery",
      avatar:
        "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.7,
      verified: true,
    },
  },
  {
    id: "20",
    name: "Renaissance Venetian Mirror",
    price: 38500,
    image:
      "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Home & Decor",
    description:
      "A spectacular Renaissance Venetian mirror with elaborate etched glass frame, circa 1580. Features original mercury glass and intricate floral motifs.",
    features: [
      "Renaissance Period (1580)",
      "Venetian Craftsmanship",
      "Etched Glass Frame",
      "Original Mercury Glass",
      "Floral Motifs",
      "Historical Significance",
    ],
    rating: 4.9,
    reviews: 11,
    inStock: true,
    rarity: "legendary",
    yearMade: 1580,
    origin: "Italy",
    tags: [
      "antique",
      "renaissance",
      "venetian",
      "mirror",
      "glass",
      "historical",
    ],
    seller: {
      id: "seller10",
      name: "Venetian Antiques",
      avatar:
        "https://images.pexels.com/photos/1239301/pexels-photo-1239301.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.8,
      verified: true,
    },
  },

  // Additional Modern Luxury Items
  {
    id: "21",
    name: "Omega Speedmaster Apollo 11",
    price: 12500,
    image:
      "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Watches",
    description:
      "Limited edition Speedmaster commemorating the 50th anniversary of Apollo 11. Features moon dust in the dial and special caseback engraving.",
    features: [
      "Limited Edition",
      "Moon Dust Dial",
      "Special Caseback",
      "Manual Wind",
      "Hesalite Crystal",
      "Apollo 11 Tribute",
    ],
    rating: 4.8,
    reviews: 234,
    inStock: true,
    rarity: "exclusive",
    origin: "Switzerland",
    tags: [
      "watches",
      "omega",
      "apollo",
      "space",
      "limited edition",
      "commemorative",
      "luxury",
    ],
    seller: {
      id: "seller1",
      name: "Swiss Timepiece Gallery",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.9,
      verified: true,
    },
  },
  {
    id: "22",
    name: "Bvlgari Serpenti Tubogas",
    price: 18500,
    image:
      "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    category: "Jewelry",
    description:
      "The iconic Serpenti Tubogas bracelet watch in 18k rose gold. Represents Bulgari's mastery of the ancient Tubogas technique.",
    features: [
      "18k Rose Gold",
      "Tubogas Technique",
      "Serpenti Design",
      "Swiss Movement",
      "Flexible Bracelet",
      "Iconic Bulgari",
    ],
    rating: 4.8,
    reviews: 167,
    inStock: true,
    rarity: "rare",
    origin: "Italy",
    tags: ["jewelry", "watch", "bulgari", "serpenti", "gold", "luxury"],
    seller: {
      id: "seller2",
      name: "Prestige Jewelers",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 4.9,
      verified: true,
    },
  },
];

export const categories = [
  "All",
  "Watches",
  "Jewelry",
  "Fashion",
  "Home & Decor",
  "Art",
  "Accessories",
];

export const featuredProducts = products.slice(0, 6);
export const newArrivals = products.slice(6, 12);
export const antiqueProducts = products.filter(
  (p) =>
    p.tags.includes("antique") ||
    p.tags.includes("vintage") ||
    (p.yearMade && p.yearMade < 1980)
);
export const luxuryProducts = products.filter(
  (p) =>
    p.price > 10000 || p.rarity === "legendary" || p.tags.includes("luxury")
);
