export const featuredCategories = [
  {
    id: "01",
    title: "Living Room",
    description: "Elegant seating crafted for modern comfort.",
    image: "/images/categories/living-room.png",
    href: "/categories/living-room",
    size: "large", // spans 2 columns
  },
  {
    id: "02",
    title: "Bedroom",
    description: "Minimal premium bedroom with linen bedding.",
    image: "/images/categories/bedroom.png",
    href: "/categories/bedroom",
    size: "medium", // spans 1 column
  },
  {
    id: "03",
    title: "Dining",
    description: "Luxury oak dining tables and settings.",
    image: "/images/categories/dining.png",
    href: "/categories/dining-room",
    size: "medium",
  },
  {
    id: "04",
    title: "Office",
    description: "Elegant modern workspaces designed for focus.",
    image: "/images/categories/office.png",
    href: "/categories/office",
    size: "medium",
  },
  {
    id: "05",
    title: "Outdoor",
    description: "Luxury patio furniture for timeless exteriors.",
    image: "/images/categories/outdoor.png",
    href: "/categories/outdoor",
    size: "large", // spans 2 columns
  },
  {
    id: "06",
    title: "Lighting",
    description: "Designer pendant lights to illuminate your home.",
    image: "/images/categories/lighting-v2.png",
    href: "/categories/lighting",
    size: "medium",
  },
  {
    id: "07",
    title: "Decor",
    description: "Premium accessories and curated sculptures.",
    image: "/images/categories/decor.png",
    href: "/categories/decor",
    size: "medium", // We will adjust the grid to fit 8 items elegantly.
    // Row 1: Large(2), Medium(1), Medium(1) = 4 cols
    // Row 2: Medium(1), Large(2), Medium(1) = 4 cols
    // Row 3: Medium(1), Medium(1), Large(2) = 4 cols 
    // Wait, the prompt says:
    // Large Featured Card | Medium Card | Medium Card
    // Medium Card | Large Featured Card | Medium Card
    // That's 6 cards. But prompt asks for 8 categories.
    // I will add a third row:
    // Medium Card | Medium Card | Large Featured Card
  },
  {
    id: "08",
    title: "Storage",
    description: "Modern wooden storage furniture and shelving.",
    image: "/images/categories/storage.png",
    href: "/categories/storage",
    size: "large",
  },
  {
    id: "09",
    title: "Mirrors",
    description: "Elegant statement mirrors to elevate your space.",
    image: "/images/categories/mirrors-v2.png",
    href: "/categories/mirrors",
    size: "medium", // Fills the final 4th column of the 3rd row perfectly!
  },
];
