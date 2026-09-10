import heroImg from "@/assets/hero.png";
import aboutImg from "@/assets/about.png";
import extensionImg from "@/assets/project-extension.png";
import renovationImg from "@/assets/project-renovation.png";
import precisionImg from "@/assets/precision.png";
import kitchenImg from "@/assets/gallery-kitchen.png";
import bathroomImg from "@/assets/gallery-bathroom.png";
import loftImg from "@/assets/gallery-loft.png";
import siteImg from "@/assets/gallery-site.png";
import interiorImg from "@/assets/gallery-interior.png";
import beforeImg from "@/assets/before.png";
import afterImg from "@/assets/after.png";

export const images = {
  hero: heroImg,
  about: aboutImg,
  extension: extensionImg,
  renovation: renovationImg,
  precision: precisionImg,
  kitchen: kitchenImg,
  bathroom: bathroomImg,
  loft: loftImg,
  site: siteImg,
  interior: interiorImg,
  before: beforeImg,
  after: afterImg,
};

export const company = {
  name: "ARZ Construction Ltd",
  shortName: "ARZ",
  tagline: "Building Better Spaces. Built to Last.",
  companyNumber: "12858978",
  phone: "07860 135189",
  phoneDisplay: "+44 7860 135189",
  phoneHref: "tel:+447860135189",
  whatsapp: "447860135189",
  whatsappHref: "https://wa.me/447860135189",
  email: "Arzconstruction23@gmail.com",
  hours: "Mon – Fri: 8:00 – 18:00 · Sat: 9:00 – 14:00",
  areasSummary: "London & surrounding counties",
  addressLines: ["4th Floor, Silverstream House", "45 Fitzroy Street, Fitzrovia", "London W1T 6EB"],
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  description: string;
  image: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "house-renovations",
    number: "01",
    title: "House Renovations",
    short: "Whole-house refurbishment delivered to a considered plan and a fixed schedule.",
    description:
      "From single rooms to complete property transformations, we manage structural work, first and second fix, plastering, decorating and finishing so your home is handed back ready to live in.",
    image: renovationImg,
    highlights: [
      "Structural alterations and steel beams",
      "Full first and second fix coordination",
      "Plastering, flooring and decorating",
      "Single point of contact throughout",
    ],
  },
  {
    slug: "extensions",
    number: "02",
    title: "Extensions",
    short: "Rear, side return and wrap-around extensions that add genuine living space.",
    description:
      "We build rear, side return, wrap-around and two-storey extensions, handling groundworks, brickwork, steels, roofing and glazing with careful attention to how new space meets the existing house.",
    image: extensionImg,
    highlights: [
      "Groundworks and foundations",
      "Brickwork matched to the original",
      "Structural steel and roofing",
      "Bifold and rooflight installation",
    ],
  },
  {
    slug: "loft-conversions",
    number: "03",
    title: "Loft Conversions",
    short: "Unused roof space converted into bright, usable bedrooms and studies.",
    description:
      "Dormer, hip-to-gable and rooflight conversions including staircases, insulation, fire protection and en-suites, built to current building regulations.",
    image: loftImg,
    highlights: [
      "Dormer and hip-to-gable builds",
      "Staircase design and installation",
      "Insulation and fire safety compliance",
      "En-suite and storage joinery",
    ],
  },
  {
    slug: "kitchen-renovations",
    number: "04",
    title: "Kitchen Renovations",
    short: "Kitchens installed with precise joinery, level worktops and clean services.",
    description:
      "We strip out, re-plan and install kitchens of any size, including plumbing, electrics, tiling, worktop templating and appliance fitting.",
    image: kitchenImg,
    highlights: [
      "Layout planning and strip-out",
      "Plumbing and electrical alterations",
      "Worktop templating and fitting",
      "Tiling, splashbacks and finishing",
    ],
  },
  {
    slug: "bathroom-renovations",
    number: "05",
    title: "Bathroom Renovations",
    short: "Waterproofed, well-detailed bathrooms and en-suites built to last.",
    description:
      "Complete bathroom installations with correct tanking, underfloor heating, considered tiling detail and reliable sanitaryware fitting.",
    image: bathroomImg,
    highlights: [
      "Tanking and wet-room forming",
      "Underfloor heating",
      "Large-format tiling",
      "Sanitaryware and shower installation",
    ],
  },
  {
    slug: "plumbing",
    number: "06",
    title: "Plumbing",
    short: "Pipework, heating and bathroom plumbing carried out by experienced trades.",
    description:
      "Heating systems, radiators, boiler relocations, soil and waste alterations and full first-fix plumbing as part of a wider build or as standalone work.",
    image: bathroomImg,
    highlights: [
      "Heating and radiator installation",
      "Soil and waste alterations",
      "Full first-fix pipework",
      "Leak investigation and repair",
    ],
  },
  {
    slug: "electrical",
    number: "07",
    title: "Electrical",
    short: "Rewires, consumer units, lighting design and certified testing.",
    description:
      "Partial and full rewires, consumer unit upgrades, lighting circuits, data and EV-ready provisions, completed with certification.",
    image: interiorImg,
    highlights: [
      "Full and partial rewires",
      "Consumer unit upgrades",
      "Lighting and power circuit design",
      "Testing and certification",
    ],
  },
  {
    slug: "other-building-services",
    number: "08",
    title: "Other Building Services",
    short: "Roofing, brickwork, plastering, driveways and external works.",
    description:
      "Supporting trades for the parts of a property that are easy to overlook: roofing repairs, repointing, rendering, plastering, landscaping and driveways.",
    image: siteImg,
    highlights: [
      "Roofing and guttering",
      "Repointing and rendering",
      "Plastering and screeding",
      "Driveways, patios and external works",
    ],
  },
];

// ─── SEO Landing Pages ───────────────────────────────────────────────────────
// These are geo-targeted service pages for Croydon / South London.
// They live at dedicated routes (not under /services/$slug) for cleaner URLs.

export type SeoLandingPage = {
  slug: string;
  // URL path — e.g. "loft-conversion-croydon" → /services/loft-conversion-croydon
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroHeading: string;
  heroSubtitle: string;
  intro: string;
  image: string;
  highlights: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[]; // standard service slugs to cross-link
};

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "loft-conversion-croydon",
    title: "Loft Conversion Croydon",
    metaTitle: "Loft Conversion Croydon — ARZ Construction Ltd | Free Quote in 24hrs",
    metaDescription:
      "Expert loft conversions in Croydon & South London. Dormer, hip-to-gable and rooflight builds from £35k. ARZ Construction — 10+ years, 5★ Google reviews. Free quote within 24 hours.",
    eyebrow: "Croydon & South London",
    heroHeading: "Loft Conversion Croydon",
    heroSubtitle:
      "Add a bedroom, en-suite or home office above your head — without moving house. Trusted loft conversion specialists serving Croydon and South London.",
    intro:
      "A loft conversion is one of the most cost-effective ways to add space and value to your Croydon home. ARZ Construction has completed dormer, hip-to-gable and rooflight conversions across the borough and surrounding South London areas, working within permitted development rights wherever possible to keep your project moving fast.",
    image: loftImg,
    highlights: [
      "Dormer, hip-to-gable and Velux rooflight builds",
      "Staircase design and joinery",
      "En-suite bathrooms and storage joinery",
      "Insulation and fire-safety compliance",
      "Building regulations drawings and sign-off",
      "Structural engineer coordination included",
    ],
    faqs: [
      {
        q: "Do I need planning permission for a loft conversion in Croydon?",
        a: "Most loft conversions fall within permitted development rights and do not need full planning permission. Exceptions include properties in conservation areas, listed buildings, or builds that exceed the permitted volume allowance. We assess your specific property on the initial visit.",
      },
      {
        q: "How long does a loft conversion take in Croydon?",
        a: "A standard dormer loft conversion typically takes 8–12 weeks from start on site. The programme depends on the size and complexity of the build — your written quotation will include a clear timeline.",
      },
      {
        q: "How much does a loft conversion cost in Croydon?",
        a: "Rooflight conversions typically start from around £25,000–£35,000. Dormer conversions range from £40,000–£65,000+ depending on size and specification. We provide itemised, fixed-price quotes with no hidden extras.",
      },
      {
        q: "Will my loft conversion add value to my Croydon home?",
        a: "A well-executed loft conversion typically adds 15–25% to a property's value in South London. An extra bedroom with en-suite is one of the highest-return home improvements available.",
      },
      {
        q: "Can you build a loft conversion on a semi-detached house in Croydon?",
        a: "Yes. Semi-detached properties are ideal for hip-to-gable or dormer conversions. We handle all Party Wall Agreement notices as part of our service.",
      },
    ],
    relatedSlugs: ["loft-conversions", "house-renovations", "bathroom-renovations"],
  },
  {
    slug: "house-extension-croydon",
    title: "House Extension Croydon",
    metaTitle: "House Extension Croydon — ARZ Construction Ltd | Free Quote in 24hrs",
    metaDescription:
      "House extensions in Croydon & South London. Rear, side-return and double-storey builds. ARZ Construction — 10+ years, 5★ Google reviews. Free no-obligation quote within 24 hours.",
    eyebrow: "Croydon & South London",
    heroHeading: "House Extension Croydon",
    heroSubtitle:
      "More space, more light, more value. Expert house extensions built to the highest standard in Croydon and across South London.",
    intro:
      "Whether you need a generous kitchen-diner, an extra bedroom or a complete ground-floor transformation, ARZ Construction designs and builds house extensions that work with your home's existing character. We manage every trade — groundworks, brickwork, steels, roofing, glazing and finishes — under one contract with a single project manager accountable throughout.",
    image: extensionImg,
    highlights: [
      "Rear, side-return and wrap-around extensions",
      "Single and double-storey builds",
      "Groundworks and structural steelwork",
      "Brickwork matched to the original house",
      "Bifold doors and flat roof rooflights",
      "Full project management, start to finish",
    ],
    faqs: [
      {
        q: "Do I need planning permission for a house extension in Croydon?",
        a: "Many single-storey rear extensions fall under permitted development and do not require a full planning application. Side extensions, two-storey extensions and builds in conservation areas typically do need permission. We advise you clearly at the first visit.",
      },
      {
        q: "How much does a house extension cost in Croydon?",
        a: "A single-storey rear extension in South London typically costs between £1,800 and £2,500 per m², depending on specification. A 25m² kitchen extension might range from £45,000 to £65,000 fully finished. We provide detailed, itemised quotes.",
      },
      {
        q: "How long does a house extension take to build?",
        a: "A single-storey extension typically takes 12–16 weeks on site. Two-storey extensions are usually 16–22 weeks. Your quotation includes an indicative programme from start to handover.",
      },
      {
        q: "Can you match my existing brickwork?",
        a: "Yes. We source bricks to match your existing house, including reclaimed stock where needed. Matching the original is important for both aesthetics and planning compliance, and we take it seriously.",
      },
      {
        q: "What is a Party Wall Agreement and do I need one?",
        a: "If your extension is within 3–6 metres of a neighbour's property or on the boundary, the Party Wall Act 1996 requires you to serve notice. We handle all Party Wall notices and can recommend a qualified surveyor where an agreement is needed.",
      },
    ],
    relatedSlugs: ["extensions", "house-renovations", "kitchen-renovations"],
  },
  {
    slug: "kitchen-bathroom-renovations",
    title: "Kitchen & Bathroom Renovations",
    metaTitle: "Kitchen & Bathroom Renovations Croydon — ARZ Construction | Free Quote in 24hrs",
    metaDescription:
      "Kitchen and bathroom renovations in Croydon & South London. Full strip-out, plumbing, electrics, tiling and installation. 5★ Google reviews. Free quote within 24 hours.",
    eyebrow: "Croydon & South London",
    heroHeading: "Kitchen & Bathroom Renovations in Croydon",
    heroSubtitle:
      "Beautifully fitted kitchens and bathrooms, installed properly. Plumbing, electrics, tiling and joinery all handled under one roof.",
    intro:
      "Kitchen and bathroom renovations are where ARZ Construction's multi-trade capability really matters. Rather than coordinating a plumber, electrician and tiler separately, you get one team that plans the whole job, carries out every element to the right standard and takes full responsibility for the finished result — on time and on budget.",
    image: kitchenImg,
    highlights: [
      "Full strip-out and layout re-planning",
      "Plumbing and drainage alterations",
      "First and second fix electrics",
      "Worktop templating, fitting and splashbacks",
      "Tanking, tiling and wet-room forming",
      "Underfloor heating installation",
    ],
    faqs: [
      {
        q: "How long does a kitchen renovation take in Croydon?",
        a: "A standard kitchen renovation takes 3–5 weeks depending on whether structural changes or layout moves are involved. A straightforward refit with no drainage moves is typically closer to 2–3 weeks.",
      },
      {
        q: "How long does a bathroom renovation take?",
        a: "Most bathroom renovations take 2–3 weeks. A larger family bathroom or en-suite with full tiling and bespoke joinery may take 3–4 weeks.",
      },
      {
        q: "Do you supply the kitchen or bathroom, or just fit them?",
        a: "We can do both. We work with your chosen supplier or can recommend trusted kitchen and bathroom designers. For straightforward installs, supply-and-fit packages are available.",
      },
      {
        q: "How much does a kitchen renovation cost in Croydon?",
        a: "A mid-range kitchen renovation including units, worktops, tiling and all trades typically costs between £12,000 and £28,000 depending on size and specification. We provide itemised quotes so you know exactly where every pound goes.",
      },
      {
        q: "How much does a bathroom renovation cost in South London?",
        a: "A full bathroom renovation including all trades, tiling, sanitaryware and fixtures typically ranges from £6,000 to £15,000. En-suites at the lower end, large family bathrooms or wet rooms at the higher.",
      },
    ],
    relatedSlugs: ["kitchen-renovations", "bathroom-renovations", "plumbing"],
  },
  {
    slug: "electrical-services",
    title: "Electrical Services",
    metaTitle: "Electrician Croydon & South London — ARZ Construction | Free Quote in 24hrs",
    metaDescription:
      "Certified electrical services in Croydon & South London. Full and partial rewires, consumer unit upgrades, lighting, EV charging points. 5★ Google reviews. Free quote in 24 hours.",
    eyebrow: "Croydon & South London",
    heroHeading: "Electrical Services in Croydon & South London",
    heroSubtitle:
      "Certified electrical work — rewires, consumer unit upgrades, lighting design, EV charging and full Part P compliance. Serving Croydon and South London.",
    intro:
      "ARZ Construction's electrical team carries out residential electrical work to Part P Building Regulations standards, covering everything from a full rewire to a single consumer unit upgrade. As part of a wider build or as standalone work, our electricians are coordinated alongside all other trades so nothing is left exposed, untested or uncertified at handover.",
    image: interiorImg,
    highlights: [
      "Full and partial residential rewires",
      "Consumer unit (fuse board) upgrades",
      "Lighting circuit design and installation",
      "Socket, switch and data point additions",
      "EV charging point installation",
      "Part P Building Regulations certification",
    ],
    faqs: [
      {
        q: "Do you provide Part P certification for electrical work in Croydon?",
        a: "Yes. All notifiable electrical work we carry out is certified under Part P of the Building Regulations. You receive an Electrical Installation Certificate and, where required, notification to Croydon Building Control.",
      },
      {
        q: "How much does a full house rewire cost in South London?",
        a: "A full rewire for a typical three-bedroom house in South London ranges from £4,500 to £7,500 depending on the number of circuits, property age and access. We provide a detailed scope and fixed price before any work begins.",
      },
      {
        q: "How long does a rewire take?",
        a: "A full rewire on a 3-bed house typically takes 5–7 days. Larger properties or those requiring remedial making-good can take 7–10 days. We keep disruption to a minimum and leave the site clean at the end of each day.",
      },
      {
        q: "Can you install an EV charging point at my Croydon home?",
        a: "Yes. We install home EV charging points from all major brands and handle the OZEV grant paperwork where applicable. Installation is typically completed in a single day.",
      },
      {
        q: "Do I need an EICR before selling my property?",
        a: "An Electrical Installation Condition Report (EICR) is not legally required for a standard sale, but many buyers and mortgage lenders now ask for one. We carry out EICR inspections and any remedial work required to achieve a satisfactory report.",
      },
    ],
    relatedSlugs: ["electrical", "house-renovations", "kitchen-renovations"],
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  gallery: string[];
  metrics?: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    id: "contemporary-rear-extension",
    title: "Contemporary Rear Extension",
    category: "Extension",
    location: "Barnet, North London",
    description:
      "A beautifully designed rear extension created to provide additional living space while connecting the home with its garden.",
    image: extensionImg,
    gallery: [extensionImg, interiorImg, kitchenImg],
    metrics: [
      { value: "120 m²", label: "Project Size" },
      { value: "16 Weeks", label: "Completion" },
    ],
  },
  {
    id: "full-house-renovation",
    title: "Full House Renovation",
    category: "Renovation",
    location: "Ealing, West London",
    description:
      "Complete property transformation including structural improvements, new interiors, a modern kitchen, bathrooms, flooring, decorating and finishing.",
    image: renovationImg,
    beforeImage: beforeImg,
    afterImage: afterImg,
    gallery: [renovationImg, interiorImg, bathroomImg],
    metrics: [
      { value: "4 Bed", label: "Property" },
      { value: "22 Weeks", label: "Completion" },
    ],
  },
  {
    id: "luxury-kitchen",
    title: "Luxury Kitchen Installation",
    category: "Kitchen",
    location: "Richmond, South West London",
    description:
      "A bespoke kitchen with island seating, stone worktops and integrated lighting, installed alongside new electrics and plumbing.",
    image: kitchenImg,
    gallery: [kitchenImg, interiorImg],
  },
  {
    id: "bathroom-renovation",
    title: "Bathroom Renovation",
    category: "Bathroom",
    location: "Croydon, South London",
    description:
      "A fully tanked family bathroom with walk-in shower, freestanding bath and large-format porcelain tiling.",
    image: bathroomImg,
    gallery: [bathroomImg],
  },
  {
    id: "loft-conversion",
    title: "Dormer Loft Conversion",
    category: "Loft Conversion",
    location: "Walthamstow, East London",
    description:
      "A dormer conversion creating a light-filled master bedroom with en-suite and generous eaves storage.",
    image: loftImg,
    gallery: [loftImg, bathroomImg],
  },
  {
    id: "modern-interior",
    title: "Modern Interior Refit",
    category: "Interior",
    location: "Islington, Central London",
    description:
      "New staircase, engineered oak flooring and full redecoration throughout a period townhouse.",
    image: interiorImg,
    gallery: [interiorImg, renovationImg],
  },
];

export const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "5★", label: "Customer Satisfaction" },
  { value: "100%", label: "Commitment to Quality" },
];

export const faqs = [
  {
    q: "Do you provide free quotations?",
    a: "Yes. We visit the property, discuss what you want to achieve and provide a written, itemised quotation at no cost and with no obligation.",
  },
  {
    q: "Which areas do you cover?",
    a: "We work across London and the surrounding counties. If you are just outside our usual radius, get in touch and we will let you know honestly whether we can help.",
  },
  {
    q: "How long does a typical project take?",
    a: "A bathroom is usually two to three weeks, a kitchen three to four, a single-storey extension twelve to eighteen, and a full house renovation twenty weeks or more. Your quotation includes an indicative programme.",
  },
  {
    q: "Do you handle building regulations and planning?",
    a: "We work alongside architects, structural engineers and building control, and can recommend trusted professionals if you do not already have drawings in place.",
  },
  {
    q: "How are payments structured?",
    a: "Work is staged against agreed milestones. You pay for completed stages, never for work that has not been carried out.",
  },
  {
    q: "Will I have a single point of contact?",
    a: "Yes. One project manager runs your job from first visit to final inspection, so you never have to chase separate trades.",
  },
  {
    q: "Is your work guaranteed?",
    a: "All workmanship is guaranteed, and manufacturer warranties on materials and appliances are passed on to you in your handover pack.",
  },
];

export const areas = [
  { name: "North London", places: "Barnet · Enfield · Haringey · Islington" },
  { name: "West London", places: "Ealing · Hounslow · Hammersmith · Brent" },
  { name: "South London", places: "Croydon · Bromley · Lambeth · Merton" },
  { name: "East London", places: "Hackney · Newham · Redbridge · Waltham Forest" },
  { name: "Central London", places: "Camden · Westminster · Southwark · Kensington" },
  { name: "Surrounding Areas", places: "Hertfordshire · Essex · Surrey · Kent" },
];

export const process = [
  {
    number: "01",
    title: "Consultation",
    text: "We listen to what you want to achieve and set out realistic options.",
  },
  {
    number: "02",
    title: "Site Assessment",
    text: "We survey the property and identify anything that affects cost or programme.",
  },
  {
    number: "03",
    title: "Planning & Quotation",
    text: "You receive an itemised written quotation with a clear build programme.",
  },
  {
    number: "04",
    title: "Construction",
    text: "One project manager coordinates every trade and keeps you updated weekly.",
  },
  {
    number: "05",
    title: "Final Inspection",
    text: "We walk the finished work with you and complete a full snagging list.",
  },
];

export type Review = {
  id: string;
  name: string;
  location: string;
  avatar: string; // initials fallback
  rating: 5 | 4 | 3 | 2 | 1;
  date: string;
  project: string;
  body: string;
  source: "google";
};

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Sarah Mitchell",
    location: "Croydon, South London",
    avatar: "SM",
    rating: 5,
    date: "March 2025",
    project: "Rear House Extension",
    body: "ARZ Construction built our rear extension and the result is stunning. From the first visit right through to handover, the team were professional, tidy and kept us informed every step of the way. The finish is exactly what we asked for. Would not hesitate to recommend.",
    source: "google",
  },
  {
    id: "r2",
    name: "James Okafor",
    location: "Bromley, South London",
    avatar: "JO",
    rating: 5,
    date: "January 2025",
    project: "Loft Conversion",
    body: "We had a dormer loft conversion done and the whole process was smooth. Very competitive price and the quality of the work is excellent. Our project manager was on site regularly and always available on the phone. The new bedroom and en-suite look brilliant.",
    source: "google",
  },
  {
    id: "r3",
    name: "Priya Sharma",
    location: "Sutton, South London",
    avatar: "PS",
    rating: 5,
    date: "November 2024",
    project: "Full Kitchen Renovation",
    body: "Complete kitchen renovation including moving the layout, new plumbing and electrics, tiling and full installation. Fantastic attention to detail — the worktops are perfectly level and the tiling is immaculate. Finished on time and within budget.",
    source: "google",
  },
  {
    id: "r4",
    name: "David & Claire Thompson",
    location: "Clapham, South London",
    avatar: "DT",
    rating: 5,
    date: "September 2024",
    project: "Full House Renovation",
    body: "We used ARZ for a complete house renovation — structural changes, new kitchen, two bathrooms, plastering, flooring and decorating. A big project that they managed brilliantly. One point of contact throughout, honest about timescales, and the result is a genuinely transformed home.",
    source: "google",
  },
  {
    id: "r5",
    name: "Tom Bellamy",
    location: "Norwood, South London",
    avatar: "TB",
    rating: 5,
    date: "July 2024",
    project: "Bathroom Renovation",
    body: "Superb bathroom renovation — walk-in shower, freestanding bath, underfloor heating and large-format tiling. The tanking and waterproofing was done properly, which is often where cheaper firms cut corners. Very neat and tidy throughout. Extremely happy.",
    source: "google",
  },
  {
    id: "r6",
    name: "Angela Reeves",
    location: "Mitcham, South London",
    avatar: "AR",
    rating: 5,
    date: "May 2024",
    project: "Side Return Extension",
    body: "ARZ extended our Victorian terrace with a side return and the difference to our home is incredible. They matched the brickwork perfectly to the original house and the rooflight floods the new kitchen-diner with light. Professional from start to finish.",
    source: "google",
  },
];

export const reviewSummary = {
  platform: "Google Reviews",
  average: 5.0,
  total: 47,
  link: "https://g.page/r/REPLACE_WITH_YOUR_GOOGLE_PLACE_ID/review",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Areas We Cover", to: "/areas-we-cover" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
] as const;

export const navServices = services.map((s) => ({
  title: s.title,
  description: s.short,
  href: `/services/${s.slug}`,
  slug: s.slug,
  isSeoPage: false as const,
}));

// SEO landing pages appear separately in the mega-menu under "South London Specialists"
export const navSeoServices = seoLandingPages.map((p) => ({
  title: p.title,
  description: p.heroSubtitle.slice(0, 70) + "…",
  href: `/services/${p.slug}`,
  slug: p.slug,
  isSeoPage: true as const,
}));
