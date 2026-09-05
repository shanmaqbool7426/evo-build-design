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
  addressLines: [
    "4th Floor, Silverstream House",
    "45 Fitzroy Street, Fitzrovia",
    "London W1T 6EB",
  ],
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
  { number: "01", title: "Consultation", text: "We listen to what you want to achieve and set out realistic options." },
  { number: "02", title: "Site Assessment", text: "We survey the property and identify anything that affects cost or programme." },
  { number: "03", title: "Planning & Quotation", text: "You receive an itemised written quotation with a clear build programme." },
  { number: "04", title: "Construction", text: "One project manager coordinates every trade and keeps you updated weekly." },
  { number: "05", title: "Final Inspection", text: "We walk the finished work with you and complete a full snagging list." },
];

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
}));
