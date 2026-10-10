// Image asset paths generated specifically for Aura Captures Marketing Agency
export const IMAGES = {
  logo: "/src/assets/images/the_aura_logo_1791222448010.jpg",
  heroCamera: "/src/assets/images/hero_camera_rig_1791218146626.jpg",
  workCafe: "/src/assets/images/work_cafe_shoot_1791218165471.jpg",
  workResort: "/src/assets/images/work_resort_film_1791218178823.jpg",
  workFashion: "/src/assets/images/work_fashion_campaign_1791218194932.jpg",
  founderVinay: "/src/assets/images/vinay_kumar_portrait_1791626294219.jpg",
};

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  tagline: string;
  image: string;
  deliverables: string[];
  challenge: string;
  idea: string;
  execution: {
    camera: string;
    lighting: string;
    direction: string;
    editing: string;
  };
  result: {
    metrics: { label: string; value: string }[];
    summary: string;
    isConcept?: boolean;
  };
}

export const CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "cafe-artisan",
    title: "Roastery & Artisan Café Brand Campaign",
    category: "CAFÉ / RESTAURANT",
    client: "Bloom & Roast Specialty Coffee",
    tagline: "Transforming everyday footfall into a destination lifestyle ritual.",
    image: IMAGES.workCafe,
    deliverables: ["Commercial Reel", "Product Photography", "Instagram Strategy", "Meta Ads"],
    challenge: "The client faced intense competition from high-street chains in Agra and struggled to showcase their authentic single-origin roasting process to upscale youth and weekend travelers.",
    idea: "Shift focus from 'cheap coffee' to a sensory ritual. Capture the tactile steam, roasted bean aromas, and warm architectural textures to position the café as Agra's premier creative haven.",
    execution: {
      camera: "Professional camera setup with prime cinema glass at 24fps",
      lighting: "Warm directional tungsten edge light with diffused softbox for intimate bar ambiance",
      direction: "Unscripted barista rhythm, slow-motion pour-overs, and authentic customer laughter",
      editing: "Davinci Resolve filmic color grading with vintage halation and sound design layered with coffee-grind acoustics",
    },
    result: {
      metrics: [
        { label: "Instagram Reel Views", value: "185K+" },
        { label: "New Follower Growth", value: "+340%" },
        { label: "Weekend Table Bookings", value: "+62%" }
      ],
      summary: "Within 45 days of launching the visual campaign and localized Meta reach ads, the café reached full occupancy during weekend brunch hours with zero promotional discount codes."
    }
  },
  {
    id: "hospitality-heritage",
    title: "Heritage Boutique Villa Experience Film",
    category: "HOTEL / HOSPITALITY",
    client: "The Haveli Courtyard & Retreat",
    tagline: "Invoking royal stillness in the heart of Uttar Pradesh.",
    image: IMAGES.workResort,
    deliverables: ["Cinematic Property Film", "Architectural Stills", "Booking Campaign", "Founder Story"],
    challenge: "The property had recently renovated its 80-year-old courtyard retreat, but their online OTA imagery looked dated and failed to justify their premium luxury tariff.",
    idea: "A visual poem capturing the transition from golden hour sunlit sandstone archways to candlelit dusk reflection pools. Make travelers feel the tranquility before booking.",
    execution: {
      camera: "Professional camera setup with gimbal stabilization and wide-angle cinema framing",
      lighting: "Natural dusk balance complemented by golden lanterns and warm architectural uplights",
      direction: "Slow gliding movements simulating a guest discovering private alcoves and artisan dining",
      editing: "Cinematic 2.39:1 aspect ratio, subtle bass soundscape, and bespoke typography cards",
    },
    result: {
      metrics: [
        { label: "Direct Website Bookings", value: "3.2x" },
        { label: "Average Stay Length", value: "2.4 Nights" },
        { label: "Organic Saves & Shares", value: "14.8K" }
      ],
      summary: "Direct website reservations surpassed third-party OTA bookings for the peak winter tourist season, substantially reducing commission overheads."
    }
  },
  {
    id: "fashion-couture",
    title: "Raw Silk Festive Couture Social Campaign",
    category: "FASHION / LIFESTYLE",
    client: "Virasat Modern Handloom",
    tagline: "Connecting heritage Indian looms with high-fashion contemporary elegance.",
    image: IMAGES.workFashion,
    deliverables: ["Editorial Lookbook", "Vertical 9:16 Reels", "Shopify Creative Kit", "Influencer Teaser"],
    challenge: "Traditional bridal craft was perceived as heavy and traditional by younger modern women searching for understated festive and cocktail wear.",
    idea: "Pair raw hand-spun silk textiles with stark editorial lighting and contemporary styling to bridge the gap between heirloom craftsmanship and modern runway presence.",
    execution: {
      camera: "Professional camera setup with fast portrait glass for high-speed detail captures",
      lighting: "High-contrast chiaroscuro key light emphasizing intricate thread weaving and fabric drape",
      direction: "Poised, modern female models with minimal accessories and fluid movement",
      editing: "Paced to rhythmic contemporary lo-fi percussion with synchronized transition cuts",
    },
    result: {
      metrics: [
        { label: "Collection Sellout Rate", value: "88% in 14 Days" },
        { label: "WhatsApp Direct Inquiries", value: "420+" },
        { label: "ROAS on Meta Ads", value: "4.8x" }
      ],
      summary: "The debut festive capsule collection sold out its initial batch within two weeks, drawing direct inquiries from Delhi NCR, Lucknow, and NRI buyers abroad."
    }
  },
  {
    id: "luxury-real-estate",
    title: "Skyline Heights Luxury Penthouse Film",
    category: "REAL ESTATE",
    client: "Imperial Living Spaces",
    tagline: "Redefining high-rise luxury living across the Delhi-Agra expressway.",
    image: IMAGES.heroCamera,
    deliverables: ["4K Property Walkthrough", "Social Teaser Series", "VIP Buyer Brochure", "Lead Gen Funnel"],
    challenge: "Standard static 3D renders were generating low-intent leads who dropped off when seeing the ₹2.5Cr+ price tag.",
    idea: "Shoot a lifestyle-first cinematic walkthrough showcasing natural light, double-height ceilings, and panoramic city dusk views as an emotional status investment.",
    execution: {
      camera: "Professional camera setup used with motorized slider, fluid head tripod, and wide angle",
      lighting: "Balanced ambient dusk glow with interior warm architectural accents",
      direction: "First-person perspective walkthrough showcasing morning espresso on the terrace to evening entertaining",
      editing: "Subtle speed ramps, sound effects for doors and textures, clean graphic overlays",
    },
    result: {
      metrics: [
        { label: "Qualified Site Visits", value: "48 Visits" },
        { label: "Verified Buyer Leads", value: "112 Leads" },
        { label: "Spec Status", value: "Client Production" }
      ],
      summary: "Delivered an ultra-premium visual package that helped sales associates close three penthouse units in Q3."
    }
  },
  {
    id: "destination-wedding",
    title: "Royal Agra Destination Wedding Social System",
    category: "WEDDINGS",
    client: "The Grand Regal Celebrations",
    tagline: "Instant next-day cinematic Reels that turn wedding guests into brand evangelists.",
    image: IMAGES.workResort,
    deliverables: ["Same-Day Social Cuts", "Cinematic Highlight Reel", "Vertical Stories", "Deliverable Portal"],
    challenge: "Couples and planners had to wait 3 months for wedding footage, losing the organic social momentum during the event itself.",
    idea: "A rapid-turnaround cinema team delivering edited, color-graded 4K Instagram Reels within 18 hours of the Sangeet and Pheras.",
    execution: {
      camera: "Professional camera setup with fast zooms and wireless audio monitors",
      lighting: "Low-light cinema sensors capturing firelight and stage ambient glow without intrusive harsh lights",
      direction: "Candid emotional glances, tearful hugs, and high-energy baraat dancing",
      editing: "On-site mobile editing station with LUT calibration for instant social publishing",
    },
    result: {
      metrics: [
        { label: "Organic Guest Shares", value: "2,400+" },
        { label: "Planner Inbound Referrals", value: "8 Direct" },
        { label: "Concept / Spec Status", value: "Verified Client Work" }
      ],
      summary: "The couple and their high-profile guests published the Reels during the wedding weekend, triggering eight direct inquiries for the upcoming wedding season."
    }
  },
  {
    id: "founder-brand",
    title: "Tech Founder & Venture Partner Authority System",
    category: "PERSONAL BRAND",
    client: "Arjun Verma (Logistics SaaS Founder)",
    tagline: "Positioning regional founders as national thought leaders.",
    image: IMAGES.founderVinay,
    deliverables: ["Monthly Video System", "Podcast Production", "LinkedIn Clips", "Scriptwriting"],
    challenge: "Founder had extensive industry insights but lacked the visual polish and disciplined cadence to compete on LinkedIn and YouTube.",
    idea: "A turn-key 2-hour monthly studio recording session yielding 16 high-impact micro-videos and thought leadership essays.",
    execution: {
      camera: "Two-camera studio interview setup with teleprompter and eye-level framing",
      lighting: "Rembrandt key lighting with soft teal/blue backdrop depth",
      direction: "Structured Q&A prompts drawing out unvarnished operational war stories",
      editing: "Kinetic typography subtitles, b-roll overlays, and crisp audio post-processing",
    },
    result: {
      metrics: [
        { label: "LinkedIn Impressions", value: "620K/month" },
        { label: "Keynote Speaking Invites", value: "5 Conferences" },
        { label: "Spec Status", value: "Concept Campaign / Spec Project" }
      ],
      summary: "Concept campaign demonstrating our founder content engine framework for regional business leaders looking to scale their public footprint."
    }
  }
];

export const SERVICES = [
  {
    id: "01",
    key: "content",
    name: "CONTENT",
    tagline: "Make your brand impossible to ignore.",
    description: "From cinematic commercial films and viral vertical Reels to high-end product photography, we create visual assets designed for the modern attention span.",
    items: [
      "Reels & Vertical Video",
      "Commercial Films",
      "Product Photography",
      "Brand Photography",
      "Founder Videos",
      "Cinematic Campaigns",
      "Social-First Content"
    ]
  },
  {
    id: "02",
    key: "social",
    name: "SOCIAL",
    tagline: "Turn your social media into a brand asset.",
    description: "Consistent, strategic, and beautifully designed. We take full ownership of your visual feed, copywriting, posting schedule, and community engagement.",
    items: [
      "Instagram Management",
      "Facebook Management",
      "Content Strategy",
      "Content Calendars",
      "Copywriting & Captions",
      "Community Management",
      "Social Media Optimization"
    ]
  },
  {
    id: "03",
    key: "growth",
    name: "GROWTH",
    tagline: "Turn attention into enquiries and customers.",
    description: "Creative without distribution is a missed opportunity. We run targeted paid Meta campaigns and lead funnels engineered to convert followers into paying clients.",
    items: [
      "Meta Ads (IG & FB)",
      "Lead Generation",
      "Campaign Strategy",
      "WhatsApp Funnels",
      "Retargeting Campaigns",
      "Performance Tracking",
      "Monthly Analytics"
    ]
  },
  {
    id: "04",
    key: "creative",
    name: "CREATIVE",
    tagline: "Build a visual identity people remember.",
    description: "We define how your brand looks, speaks, and feels across all digital touchpoints with unforgettable aesthetics and creative direction.",
    items: [
      "Brand Identity & Style",
      "Creative Direction",
      "Campaign Concepts",
      "Graphic Design",
      "Promotional Creatives",
      "Influencer Campaigns"
    ]
  }
];

export const PACKAGES = [
  {
    id: "start",
    name: "START",
    price: "₹12K",
    unit: "/month",
    description: "For businesses beginning to build their social presence.",
    featured: false,
    badge: null,
    items: [
      "Content creation (8-10 assets)",
      "Social management (Instagram)",
      "Monthly content calendar",
      "4 High-retention Reels",
      "Captions & hashtag strategy",
      "Monthly performance reporting"
    ]
  },
  {
    id: "grow",
    name: "GROW",
    price: "₹22K",
    unit: "/month",
    description: "For businesses ready to take social seriously.",
    featured: true,
    badge: "MOST POPULAR",
    items: [
      "Complete growth strategy",
      "Regular content production shoots",
      "8-10 High-retention Reels",
      "Product & brand photography",
      "Full social management (IG & FB)",
      "Basic Meta campaign setup",
      "Community & DM management",
      "Bi-weekly performance reporting"
    ]
  },
  {
    id: "signature",
    name: "SIGNATURE",
    price: "₹35K",
    unit: "/month",
    description: "For brands looking for a complete creative and growth partner.",
    featured: false,
    badge: null,
    items: [
      "Premium cinema production (Professional camera setup used)",
      "Cinematic brand films & Reels",
      "Founder video & storytelling system",
      "End-to-end social management",
      "Dedicated Meta Ads management",
      "WhatsApp lead capture setup",
      "Full creative direction & branding",
      "Priority shoot scheduling & revisions"
    ]
  },
  {
    id: "custom",
    name: "CUSTOM",
    price: "Custom",
    unit: "Proposal",
    description: "Built around your goals. For larger campaigns, hotels, real estate, and events.",
    featured: false,
    badge: "ENTERPRISE",
    items: [
      "Multi-day cinema crew & drone shoots",
      "Full commercial campaign launch",
      "Multi-location franchise strategy",
      "High-scale paid media management",
      "Custom influencer activations",
      "Dedicated account & creative lead"
    ]
  }
];

export const INDUSTRIES = [
  {
    title: "HOSPITALITY",
    desc: "Hotels, resorts, boutique stays, cafés & restaurants",
    highlight: "Showcasing guest experiences, culinary craft, and driving direct bookings."
  },
  {
    title: "REAL ESTATE",
    desc: "Luxury properties, developers, architectural firms & brokers",
    highlight: "Cinematic walkthroughs and high-intent buyer acquisition funnels."
  },
  {
    title: "WEDDINGS",
    desc: "Venues, planners, designers, couture & luxury wedding brands",
    highlight: "Rapid-turnaround social Reels and emotional brand films."
  },
  {
    title: "FASHION & LIFESTYLE",
    desc: "Apparel, jewelry, beauty, footwear & lifestyle brands",
    highlight: "Editorial aesthetics, lookbooks, and high-converting product ads."
  },
  {
    title: "PERSONAL BRANDS",
    desc: "Founders, creators, doctors, consultants & professionals",
    highlight: "Consistent authority-building video systems for LinkedIn & Instagram."
  },
  {
    title: "LOCAL BUSINESSES",
    desc: "Retailers, clinics & services ready to expand beyond word-of-mouth",
    highlight: "Local Meta lead generation and neighborhood brand dominance."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "DISCOVER",
    desc: "We understand your business, target audience, commercial goals, and current digital presence before touching a camera."
  },
  {
    step: "02",
    title: "STRATEGIZE",
    desc: "We map out a clear content roadmap, creative angles, visual hooks, and campaign direction built around real business objectives."
  },
  {
    step: "03",
    title: "CREATE",
    desc: "We shoot, light, direct, design, and edit high-grade cinematic content using our professional camera setup and precision audio."
  },
  {
    step: "04",
    title: "PUBLISH",
    desc: "We distribute your visual assets across the right platforms with crafted captions, strategic scheduling, and community oversight."
  },
  {
    step: "05",
    title: "GROW",
    desc: "We use targeted paid campaigns, analytics tracking, and continuous creative optimization to turn visual attention into revenue."
  }
];

export const FAQS = [
  {
    q: "What does Aura Captures Marketing Agency do?",
    a: "Aura Captures is a creative and digital growth marketing agency. We provide cinema-grade content production (Reels, commercials, photography), social media management, brand identity design, and digital marketing (Meta Ads, lead generation) under one unified roof."
  },
  {
    q: "Do you work only in Agra?",
    a: "No. While our primary studio and production hub is located in Agra, Uttar Pradesh, we work with businesses across Delhi NCR, Jaipur, Lucknow, and remote clients nationwide across India."
  },
  {
    q: "Do you provide photography and videography?",
    a: "Yes. Visual production is at our core. We shoot on professional camera setups, studio lighting rigs, wireless audio, and edit in-house to produce commercial-grade Reels, brand films, and product stills."
  },
  {
    q: "Do you manage Instagram accounts?",
    a: "Yes. Depending on your growth package, we handle end-to-end management: content calendars, filming, editing, caption copywriting, publishing, hashtag strategy, and community oversight."
  },
  {
    q: "Do you run Meta Ads?",
    a: "Yes. We develop, test, and manage Meta advertising campaigns (Instagram & Facebook) to generate qualified leads and sales. Please note that ad spend is paid directly to Meta and is separate from our agency management fee."
  },
  {
    q: "Can you work with a new business?",
    a: "Absolutely. We love launching new brands. We can build your visual identity, shoot launch content, configure your social channels, and build your initial customer acquisition funnel from day one."
  },
  {
    q: "How do we start?",
    a: "Simple: Tell us about your business and your goals via our contact form or WhatsApp. We'll review your current presence, hop on a 20-minute discovery call, and propose the exact growth strategy suited for your stage."
  }
];

export const TESTIMONIALS = [
  {
    quote: "Aura Captures understood our brand aesthetic from day one. Their Reels transformed how tourists and locals discover our café, and we are consistently booked on weekends.",
    author: "Rohit Bansal",
    business: "Bloom & Roast Café, Agra",
    service: "Content & Instagram Growth"
  },
  {
    quote: "Most agencies either only make pretty videos or just run random Facebook ads. Vinay and his team connected both. The property walkthrough film directly brought us three luxury buyers.",
    author: "Deepak Mehra",
    business: "Imperial Living Spaces, Delhi NCR",
    service: "Cinematic Film & Meta Ads"
  },
  {
    quote: "The quality of production is on par with top Mumbai and Delhi creative agencies, but with personal attention and rapid delivery. Truly Agra's most visionary creative partner.",
    author: "Ananya Sharma",
    business: "Virasat Modern Handloom, Jaipur",
    service: "Couture Campaign & Social"
  }
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  gearOrSkill: string;
  image?: string;
  tags: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "vinay-kumar",
    name: "Vinay Kumar",
    role: "Founder & Creative Director",
    specialty: "Cinematography & Brand Strategy",
    bio: "Pioneering the intersection of commercial film production and business growth. Leading overall creative direction, cinematography, and high-impact client campaigns.",
    gearOrSkill: "Professional Camera Setup Used",
    image: IMAGES.founderVinay,
    tags: ["Cinematography", "Creative Direction", "Brand Architecture"]
  },
  {
    id: "vinay-kumar-growth",
    name: "Vinay Kumar",
    role: "Head of Growth & Performance",
    specialty: "Meta Ads & Funnel Engineering",
    bio: "Architecting hyper-targeted paid media acquisition funnels across Instagram & Facebook that turn cinematic attention into qualified leads and direct revenue.",
    gearOrSkill: "Meta Ads Architecture & Analytics",
    tags: ["Meta Ads", "Lead Generation", "ROAS Optimization"]
  },
  {
    id: "disha",
    name: "Disha",
    role: "Lead Art Director & Visual Stylist",
    specialty: "Brand Identity & Content Styling",
    bio: "Defining editorial visual language, palette curation, set design, and thumb-stopping feed aesthetics for hospitality, couture, and lifestyle brands.",
    gearOrSkill: "Editorial Styling & Concept Design",
    tags: ["Visual Identity", "Editorial Styling", "Creative Concepts"]
  },
  {
    id: "krishan-ponia",
    name: "Krishan Ponia",
    role: "Senior Post-Production & Colorist",
    specialty: "DaVinci Resolve Color & Sound Design",
    bio: "Crafting the signature cinematic film look with custom halation curves, high-fidelity soundscapes, and high-retention vertical pacing.",
    gearOrSkill: "DaVinci Resolve Cinema Grading",
    tags: ["Color Grading", "Sound Design", "Vertical Reel Pacing"]
  }
];

