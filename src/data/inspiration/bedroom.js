export const bedroomInspirationData = {
  hero: {
    eyebrow: "Bedroom Inspiration",
    title: "A Sanctuary Designed for Rest",
    description: "Discover peaceful bedrooms that balance beauty, comfort, and functionality. Create an elegant private retreat anchored by natural materials and timeless design.",
    image: "/images/gallery/gallery-2.png", // Immersive bedroom image
    primaryCta: { label: "Explore the Bedroom", href: "#explore" },
    secondaryCta: { label: "Book Design Consultation", href: "/consultation" },
  },

  designStory: {
    title: "The Architecture of Sleep",
    description: "A luxury bedroom relies on a precise balance of form and feeling. We believe in minimal luxury—layering natural textures, soft ambient lighting, and perfectly proportioned furniture to cultivate an atmosphere of absolute serenity.",
    sections: [
      {
        title: "Minimal Luxury",
        description: "Stripping away the non-essential allows the mind to rest. We focus on clean lines and hidden storage to maintain a calm, uncluttered environment.",
        image: "/images/gallery/gallery-4.png",
      },
      {
        title: "Layered Textures",
        description: "Comfort is tactile. From heavy linen curtains to bouclé accent chairs and smooth walnut nightstands, contrasting textures create visual warmth.",
        image: "/images/gallery/gallery-5.png",
      }
    ]
  },

  interactiveRoom: {
    image: "/images/gallery/gallery-6.png", // A styled bedroom scene
    hotspots: [
      {
        id: "bed",
        x: 45,
        y: 60,
        title: "Oasis Platform Bed",
        collection: "Minimalist Collection",
        link: "/shop/bedroom/oasis-bed",
        materials: ["Solid Walnut", "Belgian Linen"],
        note: "Low profile design promotes a grounded feeling.",
      },
      {
        id: "nightstand",
        x: 25,
        y: 65,
        title: "Aura Nightstand",
        collection: "Organic Collection",
        link: "/shop/bedroom/aura-nightstand",
        materials: ["Travertine", "Oak"],
        note: "Integrated soft-close drawers for silent operation.",
      },
      {
        id: "lamp",
        x: 22,
        y: 45,
        title: "Eclipse Table Lamp",
        collection: "Lighting",
        link: "/shop/lighting/eclipse-lamp",
        materials: ["Brushed Brass", "Frosted Glass"],
        note: "Emits a warm 2700K glow perfect for reading.",
      },
      {
        id: "bench",
        x: 55,
        y: 80,
        title: "Neva Bedroom Bench",
        collection: "Luxury Collection",
        link: "/shop/bedroom/neva-bench",
        materials: ["Bouclé", "Ash Wood"],
        note: "Adds an elegant transition from bed to floor.",
      }
    ]
  },

  featuredFurniture: [
    {
      category: "Luxury Beds",
      title: "The Anchor of the Room",
      description: "Our upholstered and solid wood beds are designed with perfect proportions, offering an elegant foundation for restful nights.",
      image: "/images/gallery/gallery-1.png",
      material: "Premium Linen & Walnut",
      recommendation: "Choose an upholstered headboard for reading in bed, or solid wood for a clean, architectural look."
    },
    {
      category: "Nightstands & Storage",
      title: "Silent Organization",
      description: "Keep your sanctuary uncluttered. Our bedside tables and dressers feature soft-close mechanisms and tactile material combinations.",
      image: "/images/gallery/gallery-3.png",
      material: "Oak, Travertine & Brass",
      recommendation: "Match nightstand height to your mattress top for ergonomic ease."
    },
    {
      category: "Bedroom Seating",
      title: "Moments of Pause",
      description: "A bouclé accent chair or an end-of-bed bench adds softness and provides a dedicated space for dressing or reading.",
      image: "/images/gallery/gallery-7.png",
      material: "Bouclé & Ash Wood",
      recommendation: "Use a bench to anchor a floating bed in a large primary suite."
    }
  ],

  materialPalette: {
    materials: [
      { name: "Solid Walnut", image: "/images/materials/walnut.jpg" },
      { name: "Belgian Linen", image: "/images/materials/linen.jpg" },
      { name: "Textured Bouclé", image: "/images/materials/boucle.jpg" },
    ],
    colors: [
      { name: "Warm White", hex: "#F9F8F6" },
      { name: "Taupe", hex: "#B8ACA5" },
      { name: "Forest Green", hex: "#2C3E35" },
      { name: "Walnut Brown", hex: "#4A3728" },
    ]
  },

  lightingGuide: {
    title: "Mastering Bedroom Lighting",
    description: "A truly restful bedroom utilizes multiple layers of light that can adapt from bright morning routines to soft, relaxing evening ambiance.",
    image: "/images/gallery/gallery-8.png",
    layers: [
      { title: "Ambient", desc: "Soft, indirect ceiling light or cove lighting to illuminate the whole room without glare." },
      { title: "Task", desc: "Focused reading lights or adjustable bedside lamps to reduce eye strain." },
      { title: "Accent", desc: "Low-level floor lighting or sconces to highlight architectural features and artwork." },
    ]
  },

  stylingTips: [
    { title: "Layering Bedding", description: "Combine crisp percale sheets with a textured linen duvet and a heavy wool throw for a bed that looks inviting and feels luxurious." },
    { title: "Creating Symmetry", description: "Matching nightstands and lamps bring a sense of order and calm, while mismatched pieces can create an eclectic, organic feel." },
    { title: "Curtain Styling", description: "Hang drapery as high and wide as possible. Use blackout lining paired with sheer curtains for absolute light control." },
    { title: "Balancing Colors", description: "Stick to a monochromatic palette with subtle variations in tone to prevent visual fatigue and promote relaxation." },
  ],

  beforeAfter: {
    beforeImage: "/images/gallery/gallery-3.png",
    afterImage: "/images/gallery/gallery-2.png",
    story: "By introducing a warm, monochromatic palette and soft, textured fabrics, we transformed this stark room into a serene, tactile retreat."
  },

  featuredProject: {
    title: "The Coastal Retreat",
    location: "Carmel-by-the-Sea, CA",
    quote: "The bedroom needed to reflect the calmness of the ocean just outside the window. We used natural linen and washed oak to ground the space.",
    designer: "Elena Rostova",
    image: "/images/gallery/gallery-4.png",
    gallery: [
      "/images/gallery/gallery-5.png",
      "/images/gallery/gallery-6.png",
      "/images/gallery/gallery-7.png"
    ]
  },

  customerStory: {
    quote: "Our bedroom finally feels like a luxury hotel suite. The mix of walnut and bouclé is incredibly soothing. It's my favorite room in the house.",
    name: "Sarah Jenkins",
    image: "/images/gallery/gallery-1.png",
  },

  relatedCollections: [
    { name: "Scandinavian", image: "/images/gallery/gallery-5.png", link: "/collections/scandinavian" },
    { name: "Japandi", image: "/images/gallery/gallery-6.png", link: "/collections/japandi" },
    { name: "Organic", image: "/images/gallery/gallery-7.png", link: "/collections/organic" },
  ],

  exploreSpaces: [
    { name: "Living Room", image: "/images/gallery/gallery-1.png", link: "/inspiration/living-room" },
    { name: "Dining Room", image: "/images/gallery/gallery-3.png", link: "/inspiration/dining-room" },
    { name: "Home Office", image: "/images/gallery/gallery-8.png", link: "/inspiration/office" },
  ],

  faqs: [
    { question: "How do I choose the right bed size?", answer: "Consider your room dimensions. A King bed requires at least 12x12 feet for comfortable circulation. Always leave at least 30 inches of walking space around the bed." },
    { question: "What colors create a relaxing bedroom?", answer: "Cool tones like soft blues and greens lower the heart rate, while warm neutrals like taupe, beige, and ivory create a cozy, grounded atmosphere." },
    { question: "How should bedside lighting be arranged?", answer: "The bottom of the lampshade should be roughly eye-level when sitting up in bed, usually 20-22 inches above the mattress." },
    { question: "Which materials work best for luxury bedrooms?", answer: "Natural materials breathe better and age beautifully. Opt for solid wood frames, linen or cotton bedding, and wool rugs." },
    { question: "How can I make a small bedroom feel spacious?", answer: "Use a low-profile bed, light monochromatic colors, and wall-mounted sconces instead of table lamps to free up surface space." },
  ]
};
