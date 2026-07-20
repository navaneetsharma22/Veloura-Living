export const inspirationData = {
  hero: {
    eyebrow: "Living Room Inspiration",
    title: "Where Conversations Become Beautiful Memories",
    description: "Discover how thoughtful furniture placement, layered lighting, and curated materials create welcoming spaces for family and guests.",
    image: "/images/gallery/gallery-2.png" // Large architectural living room
  },
  
  designStory: {
    title: "The Heart of the Home",
    paragraphs: [
      "A luxury living room is more than a collection of beautiful objects—it is a carefully orchestrated environment designed to foster connection. We believe the best living spaces draw people in, encouraging long conversations and quiet relaxation alike.",
      "By balancing deep, comfortable seating with architectural focal points, we create rooms that feel both highly curated and effortlessly inviting. Natural light plays across tactile fabrics, while warm ambient lighting takes over as evening falls.",
      "Material harmony is the secret. The cool touch of Italian marble against the warmth of natural walnut; the crispness of linen next to rich bouclé. It is these subtle contrasts that give a room its soul."
    ],
    image1: "/images/gallery/gallery-5.png",
    image2: "/images/gallery/gallery-8.png"
  },

  interactiveRoom: {
    image: "/images/gallery/gallery-1.png",
    hotspots: [
      { id: 1, x: 30, y: 65, title: "Lounge Sofa", description: "Deep seating wrapped in Belgian Linen.", material: "Belgian Linen", link: "/products/lounge-sofa" },
      { id: 2, x: 55, y: 75, title: "Marble Coffee Table", description: "Solid Travertine with a honed finish.", material: "Travertine", link: "/products/marble-table" },
      { id: 3, x: 75, y: 55, title: "Accent Chair", description: "Sculptural curves in warm Bouclé.", material: "Bouclé", link: "/products/accent-chair" },
      { id: 4, x: 85, y: 35, title: "Floor Lamp", description: "Brushed brass providing warm ambient light.", material: "Brushed Brass", link: "/products/floor-lamp" }
    ]
  },

  featuredFurniture: [
    {
      category: "Luxury Sofas",
      title: "The Foundation of Comfort",
      description: "Our sofas are designed as architectural anchors. Deep, supportive, and wrapped in premium textiles, they dictate the flow of the entire room.",
      image: "/images/gallery/gallery-7.png",
      designerNote: "Always leave at least 18 inches between the sofa and coffee table for ease of movement."
    },
    {
      category: "Accent Chairs",
      title: "Sculptural Contrast",
      description: "Accent chairs offer an opportunity to introduce contrasting materials and dynamic shapes without overwhelming the primary seating arrangement.",
      image: "/images/gallery/gallery-4.png",
      designerNote: "Position accent chairs at a slight angle toward the sofa to naturally encourage conversation."
    }
  ],

  materialPalette: {
    materials: [
      { name: "Light Oak", image: "/images/materials/solid-oak.png" },
      { name: "Travertine", image: "/images/materials/italian-marble.png" }, // Reusing placeholder
      { name: "Bouclé", image: "/images/materials/boucle-fabric.png" }
    ],
    colors: [
      { name: "Warm White", hex: "#F5F2EB" },
      { name: "Taupe", hex: "#8B8276" },
      { name: "Olive", hex: "#5C6152" },
      { name: "Charcoal", hex: "#2A2A2A" }
    ]
  },

  lightingGuide: {
    title: "The Art of Layered Lighting",
    description: "A single light source creates harsh shadows. True luxury is found in layering different types of light to create mood, warmth, and dimension.",
    layers: [
      { title: "Ambient", desc: "Soft, indirect light that fills the room. (e.g., Floor lamps throwing light upward)" },
      { title: "Task", desc: "Focused light for reading or working. (e.g., A low pendant or reading lamp)" },
      { title: "Accent", desc: "Directional light used to highlight art or architectural features. (e.g., Wall sconces)" }
    ],
    image: "/images/gallery/gallery-3.png"
  },

  stylingTips: [
    { title: "Anchor with Rugs", description: "Ensure the front legs of all primary seating sit on the rug to unify the arrangement." },
    { title: "Mix Textures", description: "Combine matte fabrics with reflective surfaces (glass, brass) to create visual interest." },
    { title: "Focal Points", description: "Orient seating around a primary focal point—a fireplace, a view, or a beautiful console." }
  ],

  beforeAfter: {
    beforeImage: "/images/gallery/gallery-6.png", // We will use a regular image for "before" representation
    afterImage: "/images/gallery/gallery-1.png",
    story: "By replacing the heavy, dark sectionals with a curved, light-toned sofa and introducing an oversized travertine table, the room immediately felt 40% larger while actually increasing seating capacity."
  },

  featuredProject: {
    title: "The Malibu Residence",
    location: "Malibu, California",
    quote: "We wanted the interior to feel like an extension of the coastline—calm, textured, and deeply restorative.",
    designer: "Elena Rostova",
    image: "/images/gallery/gallery-8.png",
    gallery: [
      "/images/gallery/gallery-7.png",
      "/images/gallery/gallery-4.png",
      "/images/gallery/gallery-2.png"
    ]
  },

  customerStory: {
    quote: "It completely changed how we use the house. Before, the living room was just a place to watch TV. Now, it's where we actually sit and talk for hours after dinner.",
    name: "The Harrison Family",
    image: "/images/gallery/gallery-5.png"
  },

  relatedCollections: [
    { name: "Organic Modern", image: "/images/gallery/gallery-1.png", link: "/collections/organic" },
    { name: "Minimalist Luxury", image: "/images/gallery/gallery-3.png", link: "/collections/minimalist" },
    { name: "Japandi", image: "/images/gallery/gallery-6.png", link: "/collections/japandi" }
  ],

  exploreSpaces: [
    { name: "Bedroom Inspiration", image: "/images/gallery/gallery-4.png", link: "/inspiration/bedroom" },
    { name: "Dining Inspiration", image: "/images/gallery/gallery-7.png", link: "/inspiration/dining" },
    { name: "Office Inspiration", image: "/images/gallery/gallery-2.png", link: "/inspiration/office" }
  ],

  faqs: [
    { question: "How large should an area rug be?", answer: "The rug should be large enough that at least the front legs of your sofa and accent chairs rest on it. This grounds the furniture and defines the conversation area." },
    { question: "How many accent chairs are ideal?", answer: "Usually one or two. If space allows, two identical chairs placed opposite a sofa create a perfect, balanced conversational symmetry." },
    { question: "How do I mix materials?", answer: "Follow the 80/20 rule. Keep 80% of your materials in the same tonal family (e.g., warm woods and linen), and use the remaining 20% for high-contrast accents (e.g., black steel or polished brass)." },
    { question: "How should furniture be arranged?", answer: "Pull furniture away from the walls. Floating your seating arrangement in the center of the room creates a much more intimate, luxurious feel than pushing everything to the edges." }
  ]
};
