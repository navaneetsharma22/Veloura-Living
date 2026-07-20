export const CATEGORIES = [
  "All",
  "Interior Design",
  "Materials",
  "Design Trends",
  "Home Styling",
  "Architecture",
];

export const JOURNAL_DATA = {
  featured: {
    slug: "the-art-of-designing",
    title: "The Art of Designing a Timeless Living Room",
    category: "Interior Design",
    date: "October 12, 2026",
    readTime: "6 min read",
    author: "Isabella Rossi",
    excerpt: "Discover the foundational principles of creating a living space that transcends fleeting trends. We explore how to balance statement pieces with quiet architecture.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop",
    
    // Article Detail Content
    content: [
      {
        type: "paragraph",
        text: "In an era of rapidly shifting trends, the concept of a timeless interior has never been more relevant. A timeless room doesn't mean a static one; rather, it refers to a space anchored by enduring materials, meticulous proportions, and an inherent sense of balance."
      },
      {
        type: "pullquote",
        text: "True luxury is found in the quiet moments—the way natural light traces the grain of a solid walnut table, or the tactile comfort of Italian bouclé.",
        author: "Isabella Rossi"
      },
      {
        type: "paragraph",
        text: "The foundation of any enduring space begins with the architecture. Before introducing furniture, consider the flow of natural light and the structural bones of the room. When selecting pieces, prioritize materials that age gracefully: full-grain leathers that develop a rich patina, unlacquered brass, and solid hardwoods."
      },
      {
        type: "gallery",
        images: [
          { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop", alt: "Living room detail" },
          { src: "https://images.unsplash.com/photo-1595514535312-32a74c76b978?q=80&w=2940&auto=format&fit=crop", alt: "Wood joinery" }
        ]
      },
      {
        type: "designer-tip",
        title: "The 70/30 Rule of Textures",
        text: "Aim for a textural balance where 70% of the room consists of foundational, matte finishes (wood, linen, wool) and 30% acts as an accent (polished stone, brass, glass). This creates depth without visual clutter."
      },
      {
        type: "paragraph",
        text: "Ultimately, a living room should be a sanctuary. By stripping away the unnecessary and investing in pieces crafted with absolute precision, you create an environment that feels both expansive and intimately welcoming."
      }
    ],
    relatedProducts: [
      {
        id: "prod-1",
        name: "Lumina Lounge Chair",
        price: "$2,450",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2865&auto=format&fit=crop",
        href: "/shop/product/lumina-lounge-chair"
      },
      {
        id: "prod-2",
        name: "Luna Coffee Table",
        price: "$3,100",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=2787&auto=format&fit=crop",
        href: "/shop/product/luna-coffee-table"
      }
    ]
  },
  articles: [
    {
      slug: "choosing-perfect-wood",
      title: "Choosing the Perfect Wood for Luxury Furniture",
      category: "Materials",
      date: "October 05, 2026",
      readTime: "4 min read",
      author: "Marcus Chen",
      excerpt: "From the warm honey tones of solid oak to the deep, architectural richness of natural walnut. A comprehensive guide to hardwood grains.",
      image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=2938&auto=format&fit=crop",
    },
    {
      slug: "japandi-interiors",
      title: "Japandi Interiors: Simplicity Meets Warmth",
      category: "Design Trends",
      date: "September 28, 2026",
      readTime: "5 min read",
      author: "Elena Rostova",
      excerpt: "Exploring the beautiful intersection of Japanese minimalism and Scandinavian functionality. Learn how to achieve this highly sought-after aesthetic.",
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=2787&auto=format&fit=crop",
    },
    {
      slug: "elegant-dining-spaces",
      title: "Creating Elegant Dining Spaces for Modern Homes",
      category: "Home Styling",
      date: "September 15, 2026",
      readTime: "7 min read",
      author: "Sarah Jenkins",
      excerpt: "The dining room is the heart of hosting. We share expert styling tips on selecting the right table proportions and layering lighting.",
      image: "https://images.unsplash.com/photo-1616627581102-14066c1f54bc?q=80&w=2938&auto=format&fit=crop",
    },
    {
      slug: "minimalist-bedroom",
      title: "The Minimalist Bedroom Sanctuary",
      category: "Interior Design",
      date: "September 02, 2026",
      readTime: "5 min read",
      author: "Isabella Rossi",
      excerpt: "Transform your bedroom into a serene retreat focused entirely on rest, utilizing soft linens, natural woods, and absolute symmetry.",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2727&auto=format&fit=crop",
    }
  ],
  trending: [
    {
      slug: "choosing-perfect-wood",
      title: "Choosing the Perfect Wood for Luxury Furniture",
      number: "01",
    },
    {
      slug: "japandi-interiors",
      title: "Japandi Interiors: Simplicity Meets Warmth",
      number: "02",
    },
    {
      slug: "elegant-dining-spaces",
      title: "Creating Elegant Dining Spaces for Modern Homes",
      number: "03",
    }
  ]
};
