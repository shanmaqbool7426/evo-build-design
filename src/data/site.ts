import heroImg from "@/assets/hero.webp";
import hero640Img from "@/assets/hero-640.webp";
import hero1024Img from "@/assets/hero-1024.webp";
import aboutImg from "@/assets/about.webp";
import extensionImg from "@/assets/project-extension.webp";
import renovationImg from "@/assets/project-renovation.webp";
import precisionImg from "@/assets/precision.webp";
import kitchenImg from "@/assets/gallery-kitchen.webp";
import bathroomImg from "@/assets/gallery-bathroom.webp";
import loftImg from "@/assets/gallery-loft.webp";
import siteImg from "@/assets/gallery-site.webp";
import interiorImg from "@/assets/gallery-interior.webp";
import beforeImg from "@/assets/before.webp";
import afterImg from "@/assets/after.webp";

export const images = {
  hero: heroImg,
  // Responsive hero variants — the full-width photograph is the LCP element on
  // most pages, so phones get the 640px cut instead of the 1792px original.
  heroSrcSet: `${hero640Img} 640w, ${hero1024Img} 1024w, ${heroImg} 1792w`,
  heroSizes: "100vw",
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
  hours: "Mon – Sat: 8:00 – 18:00 · Sun: Closed",
  areasSummary: "Croydon, South London & surrounding areas",
  // Verified against Companies House (ARZ CONSTRUCTION LTD, 12858978) and the
  // Google Business Profile location. Keep this NAP block in sync with the
  // GBP — same name, same address, same phone everywhere.
  addressLabel: "Registered office",
  addressLines: [
    "4th Floor, Silverstream House",
    "45 Fitzroy Street, Fitzrovia",
    "London W1T 6EB",
    "United Kingdom",
  ],
  // Where the work actually happens.
  operatingStatement:
    "Projects are carried out at customers' homes across Croydon and South London. Site visits are by appointment.",
  // Profile URLs feed the `sameAs` structured-data array in __root.tsx.
  // Paste each real profile URL when available; empty entries are skipped.
  socials: {
    googleBusiness: "",
    facebook: "",
    instagram: "",
    checkatrade: "",
  },
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
    short: "Rewires, consumer units and lighting design, carried out by qualified electricians.",
    description:
      "Partial and full rewires, consumer unit upgrades, lighting circuits, data points and EV-ready provisions. Electrical work is carried out by qualified electricians, with test certificates provided for notifiable work.",
    image: interiorImg,
    highlights: [
      "Full and partial rewires",
      "Consumer unit upgrades",
      "Lighting and power circuit design",
      "Test certificates for notifiable work",
    ],
  },
  {
    slug: "roofing",
    number: "08",
    title: "Roofing & Guttering",
    short: "Roof repairs, full re-roofs, felt flat roofs and guttering replacement.",
    description:
      "We carry out pitched and flat roof repairs, full re-roofs in slate or tile, felt and EPDM flat roofs, fascias, soffits and guttering replacement. Roofing work is carried out by experienced trades and covered by our 12-month workmanship guarantee.",
    image: siteImg,
    highlights: [
      "Pitched roof repairs and full re-roofs",
      "Flat roofs — felt and EPDM rubber",
      "Fascias, soffits and bargeboards",
      "Guttering replacement and clearing",
      "Ridge tiles and lead flashing",
      "12-month workmanship guarantee",
    ],
  },
  {
    slug: "plastering-tiling",
    number: "09",
    title: "Plastering & Tiling",
    short: "Smooth plaster finishes, screeds and precision tiling throughout.",
    description:
      "From full room re-skims and dot-and-dab boarding to floor screeds and large-format tile installation, our finishing trades produce surfaces that are flat, true and ready to decorate. We also carry out specialist microcement and decorative plaster finishes.",
    image: interiorImg,
    highlights: [
      "Full room re-skims and new plaster",
      "Dot-and-dab boarding and dry lining",
      "Floor screeds and self-levelling compound",
      "Large-format and rectified tile installation",
      "Wet rooms and tanked shower enclosures",
      "Microcement and decorative finishes",
    ],
  },
  {
    slug: "decorating",
    number: "10",
    title: "Decorating",
    short: "Interior and exterior painting and decorating, done properly.",
    description:
      "Our decorators prepare surfaces correctly before they pick up a brush — filling, sanding and priming as needed. The result is a finish that looks clean on completion and holds up over time. We cover interior painting, wallpapering and exterior masonry and timber.",
    image: renovationImg,
    highlights: [
      "Interior painting — walls, ceilings and woodwork",
      "Exterior masonry and timber painting",
      "Wallpaper hanging and feature walls",
      "Preparation, filling and priming",
      "Coving and cornice installation",
      "New build and refurbishment finishing",
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
  // ── Depth content (local SEO) ─────────────────────────────────────────────
  localParagraphs?: { heading: string; text: string }[];
  localAreas?: string[];
  pricing?: { item: string; range: string }[];
};

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "loft-conversion-croydon",
    title: "Loft Conversion Croydon",
    metaTitle: "Loft Conversion Croydon | Dormer & Hip-to-Gable Builders | ARZ",
    metaDescription:
      "Loft conversions in Croydon — dormer, hip-to-gable and rooflight builds with typical costs, planning guidance and a free, itemised quotation.",
    localParagraphs: [
      {
        heading: "Covering Every Corner of the Borough",
        text: "From the 1930s semis of Sanderstead and Shirley to the Victorian terraces of Thornton Heath and South Croydon, we've converted lofts across every CR postcode. Croydon's housing stock is ideal for loft conversions — most semi-detached and detached homes have the roof height and footprint needed for a hip-to-gable (raising the gable end) or a rear dormer without altering the ridge line.",
      },
      {
        heading: "Permitted Development and Croydon Building Control",
        text: "Most loft conversions in Croydon fall under permitted development, allowing up to 40m³ of additional roof volume for terraced houses and 50m³ for semi-detached and detached homes. We prepare the drawings, serve Party Wall notices on your neighbours and manage the full building regulations sign-off with Croydon Council building control, so you never have to chase paperwork.",
      },
      {
        heading: "What Your Build Includes",
        text: "Every ARZ loft conversion covers structural steelwork, the dormer or hip-to-gable build, a purpose-made staircase, insulation to current Part L standards, fire doors and alarms, first and second fix electrics and plumbing, plastering ready for decoration, and a written workmanship guarantee on completion.",
      },
    ],
    localAreas: ["South Croydon", "Purley", "Shirley", "Sanderstead", "Thornton Heath", "Selhurst", "Addiscombe", "Coulsdon", "Kenley", "Norbury"],
    pricing: [
      { item: "Rooflight-only conversion", range: "£25,000 – £35,000" },
      { item: "Rear dormer (semi-detached)", range: "£40,000 – £55,000" },
      { item: "Hip-to-gable with rear dormer", range: "£45,000 – £65,000" },
      { item: "En-suite or shower room addition", range: "+£6,000 – £12,000" },
      { item: "Building regs drawings & sign-off", range: "Included" },
    ],
    eyebrow: "Croydon & South London",
    heroHeading: "Loft Conversion Croydon",
    heroSubtitle:
      "Add a bedroom, en-suite or home office above your head — without moving house. Trusted loft conversion and attic renovation specialists serving Croydon and South London.",
    intro:
      "A loft conversion — sometimes called an attic conversion or a loft extension — is one of the most cost-effective ways to add space and value to your Croydon home. ARZ Construction builds dormer, hip-to-gable and rooflight conversions for homeowners across Croydon and South London, working within permitted development rights wherever possible to keep your project moving.",
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
        a: "Rooflight conversions typically start from around £25,000–£35,000. Dormer conversions range from £40,000–£65,000+ depending on size and specification. We provide an itemised written quotation before any work starts, so you can see exactly what is included.",
      },
      {
        q: "Will my loft conversion add value to my Croydon home?",
        a: "A well-executed loft conversion typically adds 15–25% to a property's value in South London. An extra bedroom with en-suite is one of the highest-return home improvements available.",
      },
      {
        q: "Can you build a loft conversion on a semi-detached house in Croydon?",
        a: "Yes. Semi-detached properties are ideal for hip-to-gable or dormer conversions. We handle all Party Wall Agreement notices as part of our service.",
      },
      {
        q: "What's the difference between a loft conversion and a loft extension?",
        a: "The terms are used interchangeably — both mean turning unused roof space into a usable room. A loft extension usually refers to builds that add roof volume, such as a rear dormer or hip-to-gable, while a rooflight conversion works within the existing roof. We build all types and recommend the best fit for your property.",
      },
      {
        q: "Do you carry out attic conversions in South Croydon and Purley?",
        a: "Yes — we complete attic conversions across South Croydon, Purley, Shirley, Sanderstead and the wider CR postcodes. Most homes we survey are suitable; we confirm the head height (typically 2.2m or more) during your free visit.",
      },
    ],
    relatedSlugs: ["loft-conversions", "house-renovations", "bathroom-renovations"],
  },
  {
    slug: "house-extension-croydon",
    title: "House Extensions Croydon",
    metaTitle: "House Extensions Croydon | Rear & Side-Return Builders | ARZ",
    metaDescription:
      "House extension builders in Croydon — rear, side-return and wrap-around extensions. Itemised written quotations and one project manager throughout.",
    localParagraphs: [
      {
        heading: "Extension Builders Across the Borough of Croydon",
        text: "Whether it's a kitchen-diner extension on a 1930s semi in Shirley, a side return on a Victorian terrace in Thornton Heath or a double-storey addition in Sanderstead, we build extensions across Croydon and the Surrey-border towns of Purley, Coulsdon and Kenley — from single-room extensions to full wrap-around ground-floor transformations. Every build is managed end to end — groundworks, steels, brickwork, roofing, glazing and finishes — under one contract.",
      },
      {
        heading: "Planning Rules for Croydon Extensions",
        text: "Single-storey rear extensions can often be built under permitted development — up to 6 metres for attached houses and 8 metres for detached homes under the neighbour consultation scheme. Side extensions, two-storey builds and homes in conservation areas usually need full planning permission from Croydon Council. We tell you honestly at the first visit which route applies to your property and handle the paperwork either way.",
      },
      {
        heading: "How the Build Runs",
        text: "A typical single-storey extension runs 12–16 weeks: groundworks and foundations first, then structure and roof, first-fix electrics and plumbing, and finally plastering, kitchen fit and finishes. You get a written programme up front and a weekly update from your project manager, with dust screens and floor protection throughout.",
      },
    ],
    localAreas: ["South Croydon", "Purley", "Shirley", "Sanderstead", "Thornton Heath", "Addiscombe", "Coulsdon", "Norbury", "Woodside", "Waddon"],
    pricing: [
      { item: "Single-storey rear extension", range: "£1,800 – £2,500 per m²" },
      { item: "25m² kitchen-diner extension", range: "£45,000 – £65,000" },
      { item: "Victorian terrace side return", range: "£40,000 – £60,000" },
      { item: "Double-storey extension", range: "£70,000 – £110,000" },
      { item: "Planning & building regs handling", range: "Included" },
    ],
    eyebrow: "Croydon & South London",
    heroHeading: "House Extensions Croydon",
    heroSubtitle:
      "More space, more light, more value. Expert house extensions built to the highest standard in Croydon and across South London.",
    intro:
      "Whether you need a generous kitchen-diner, an extra bedroom, a home office or another reception room, ARZ Construction designs and builds house extensions that work with your home's existing character. As rear and wrap-around extension specialists, we manage every trade — groundworks, brickwork, steels, roofing, glazing and finishes — under one contract with a single project manager accountable throughout.",
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
      {
        q: "What is a wrap-around extension?",
        a: "A wrap-around extension combines a rear extension with a side return, wrapping around the corner of your home to create one large open-plan kitchen-diner. On many Croydon semis it can be built under permitted development. It costs more than a simple rear extension due to the additional steelwork and roof detail.",
      },
      {
        q: "Do you build house extensions near the Surrey border?",
        a: "Yes. As well as all of Croydon, we build house extensions in Purley, Coulsdon, Kenley, Sanderstead and the surrounding Surrey-border areas, plus across South London. If you're within roughly 15 miles of Croydon, we cover your property.",
      },
    ],
    relatedSlugs: ["extensions", "house-renovations", "kitchen-renovations"],
  },
  {
    slug: "kitchen-bathroom-renovations",
    title: "Kitchen & Bathroom Renovations",
    metaTitle: "Kitchen & Bathroom Renovations Croydon | ARZ Construction",
    metaDescription:
      "Kitchen and bathroom renovations in Croydon — strip-out, plumbing, electrics, tiling and fitting by one coordinated team. Request a free quotation.",
    localParagraphs: [
      {
        heading: "One Team for the Whole Refit",
        text: "The problem with hiring a plumber, electrician and tiler separately is sequencing — one trade waiting on another, and nobody accountable when the schedule slips. Our Croydon renovation teams plan the whole job together: layout and electrics agreed before strip-out, plumbing routed for the new positions, tiling and joinery finished to a snag-free handover.",
      },
      {
        heading: "Kitchens and Bathrooms Built for South London Homes",
        text: "From compact galley kitchens in Thornton Heath terraces to open-plan kitchen-diners in Sanderstead semis, we work around the realities of Croydon housing — awkward corners, sloping floors in period properties and limited access for deliveries — and we price for them honestly rather than springing extras mid-job.",
      },
    ],
    localAreas: ["South Croydon", "Purley", "Shirley", "Thornton Heath", "Selhurst", "Addiscombe", "Norbury", "Coulsdon"],
    pricing: [
      { item: "Full kitchen renovation", range: "£12,000 – £28,000" },
      { item: "Kitchen refit (no layout move)", range: "£8,000 – £15,000" },
      { item: "Full bathroom renovation", range: "£6,000 – £15,000" },
      { item: "En-suite or wet room", range: "£5,000 – £10,000" },
      { item: "Underfloor heating (per room)", range: "from £1,200" },
    ],
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
    metaTitle: "Electrician Croydon | Rewires & Consumer Units | ARZ Construction",
    metaDescription:
      "Electrical work in Croydon and South London — rewires, consumer units, lighting and EV-ready provisions. Request a free quotation from ARZ Construction.",
    localParagraphs: [
      {
        heading: "Electrical Work Across Croydon",
        text: "Whether it's a full rewire on a period property in Addiscombe, a consumer unit upgrade in Purley or additional sockets in Sanderstead, electrical work is carried out by qualified electricians. Test certificates are issued for notifiable work, so your records are complete when you come to sell. If you ask us to confirm our current scheme registration and operative details before instructing us, we will provide them in writing.",
      },
      {
        heading: "When to Call an Electrician",
        text: "Fuse boards with rewireable fuses, sockets that buzz or overheat, lights that flicker when appliances start, or a house still wired in rubber-insulated cable — these are all signs your Croydon home needs attention. If you're extending or converting a loft, the new circuits must be designed and certified alongside the build, which we handle as one team.",
      },
    ],
    localAreas: ["Croydon town centre", "South Croydon", "Purley", "Shirley", "Sanderstead", "Thornton Heath", "Addiscombe", "Coulsdon"],
    pricing: [
      { item: "Full 3-bed rewire", range: "£4,500 – £7,500" },
      { item: "Consumer unit upgrade", range: "£550 – £950" },
      { item: "EV charge point installed", range: "from £900" },
      { item: "EICR inspection & report", range: "from £180" },
      { item: "Additional sockets / lighting", range: "from £85 per point" },
    ],
    eyebrow: "Croydon & South London",
    heroHeading: "Electrical Services in Croydon & South London",
    heroSubtitle:
      "Rewires, consumer unit upgrades, lighting design and EV-ready provisions, carried out by qualified electricians across Croydon and South London.",
    intro:
      "ARZ Construction carries out residential electrical work as part of a wider build or as standalone work, covering everything from a full rewire to a single consumer unit upgrade. Electricians are coordinated alongside the other trades so nothing is left incomplete at handover, and test certificates are issued for notifiable work.",
    image: interiorImg,
    highlights: [
      "Full and partial residential rewires",
      "Consumer unit (fuse board) upgrades",
      "Lighting circuit design and installation",
      "Socket, switch and data point additions",
      "EV-ready provisions",
      "Test certificates for notifiable work",
    ],
    faqs: [
      {
        q: "Do you provide electrical test certificates in Croydon?",
        a: "Yes. Electrical work is carried out by qualified electricians and test certificates are issued for notifiable work, so you have the paperwork for your records and for any future sale.",
      },
      {
        q: "How much does a full house rewire cost in South London?",
        a: "A full rewire for a typical three-bedroom house in South London ranges from £4,500 to £7,500 depending on the number of circuits, property age and access. We provide a detailed scope and itemised quotation before any work begins.",
      },
      {
        q: "How long does a rewire take?",
        a: "A full rewire on a 3-bed house typically takes 5–7 days. Larger properties or those requiring remedial making-good can take 7–10 days. We keep disruption to a minimum and leave the site clean at the end of each day.",
      },
      {
        q: "Can you install an EV charging point at my Croydon home?",
        a: "We can install a home charge point where the electrical supply and parking position suit it. We'll confirm the practical requirements and any grant eligibility applicable to you at the survey, rather than assume it.",
      },
      {
        q: "Do I need an EICR before selling my property?",
        a: "An Electrical Installation Condition Report (EICR) is not legally required for a standard sale, but many buyers and mortgage lenders now ask for one. We carry out EICR inspections and any remedial work required to achieve a satisfactory report.",
      },
    ],
    relatedSlugs: ["electrical", "house-renovations", "kitchen-renovations"],
  },
  {
    slug: "loft-conversion-bromley",
    title: "Loft Conversion Bromley",
    metaTitle: "Loft Conversion Bromley | Dormer & Hip-to-Gable Builders | ARZ",
    metaDescription:
      "Dormer and hip-to-gable loft conversions across Bromley, Beckenham and Orpington with typical costs, local planning guidance and a free, itemised quotation.",
    localParagraphs: [
      {
        heading: "Built for Bromley's Housing Stock",
        text: "Bromley is one of the best boroughs in London for loft conversions: the 1930s semis of Shortlands, West Wickham and Petts Wood, the Edwardian homes of Beckenham and the detached properties of Chislehurst and Farnborough mostly have the head height and ridge line needed to convert under permitted development — no planning application required in most cases.",
      },
      {
        heading: "Managed From Drawings to Sign-Off",
        text: "We prepare building regulations drawings, serve Party Wall notices on adjoining neighbours and book every inspection with Bromley Council building control. Your project manager coordinates the steelwork, dormer construction, staircase, insulation, fire safety and finishes so the loft is signed off, certificated and ready to use.",
      },
    ],
    localAreas: ["Beckenham", "Shortlands", "Orpington", "Chislehurst", "Petts Wood", "West Wickham", "Hayes", "Bromley Common", "Bickley", "Farnborough"],
    pricing: [
      { item: "Rooflight-only conversion", range: "£25,000 – £35,000" },
      { item: "Rear dormer (semi-detached)", range: "£40,000 – £55,000" },
      { item: "Hip-to-gable with rear dormer", range: "£45,000 – £65,000" },
      { item: "En-suite or shower room addition", range: "+£6,000 – £12,000" },
      { item: "Building regs drawings & sign-off", range: "Included" },
    ],
    eyebrow: "Bromley & South London",
    heroHeading: "Loft Conversion Bromley",
    heroSubtitle:
      "Add a bedroom, en-suite or home office above your head — without moving house. Trusted loft conversion specialists serving Bromley and the surrounding South London boroughs.",
    intro:
      "Bromley's mix of Edwardian semis, 1930s suburban homes and larger detached properties makes it one of South London's best boroughs for loft conversions — most have the roof pitch and head height to convert without major structural work. ARZ Construction has completed dormer, hip-to-gable and rooflight conversions across Bromley, Shortlands, Beckenham and Orpington, working within permitted development rights wherever possible to keep your project moving fast.",
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
        q: "Do I need planning permission for a loft conversion in Bromley?",
        a: "Most loft conversions fall within permitted development rights and do not need full planning permission. Exceptions include properties in one of Bromley's conservation areas, listed buildings, or builds that exceed the permitted volume allowance. We assess your specific property on the initial visit.",
      },
      {
        q: "How long does a loft conversion take in Bromley?",
        a: "A standard dormer loft conversion typically takes 8–12 weeks from start on site. The programme depends on the size and complexity of the build — your written quotation will include a clear timeline.",
      },
      {
        q: "How much does a loft conversion cost in Bromley?",
        a: "Rooflight conversions typically start from around £25,000–£35,000. Dormer conversions range from £40,000–£65,000+ depending on size and specification. We provide an itemised written quotation before any work starts, so you can see exactly what is included.",
      },
      {
        q: "Will my loft conversion add value to my Bromley home?",
        a: "A well-executed loft conversion typically adds 15–25% to a property's value in South London, and Bromley's strong family-home market means an extra bedroom or en-suite is especially sought after by buyers.",
      },
      {
        q: "Can you build a loft conversion on a semi-detached house in Bromley?",
        a: "Yes. Bromley's many 1930s semi-detached properties are ideal for hip-to-gable or dormer conversions. We handle all Party Wall Agreement notices as part of our service.",
      },
    ],
    relatedSlugs: ["loft-conversions", "house-renovations", "bathroom-renovations"],
  },
  {
    slug: "house-extension-bromley",
    title: "House Extension Bromley",
    metaTitle: "House Extension Bromley | Rear & Wrap-Around Builders | ARZ",
    metaDescription:
      "Rear, side-return and wrap-around extensions across Bromley, Beckenham and Orpington. One team, one contract, itemised written quotation.",
    localParagraphs: [
      {
        heading: "Extensions Across the Bromley Borough",
        text: "Bromley's larger plots make it ideal for extensions: wrap-around kitchen-diners in Beckenham, double-storey additions in Orpington and side extensions on the wide roads of Petts Wood and Bickley. We manage every trade under one contract — groundworks through to final decoration — with an itemised quotation agreed in writing before work starts.",
      },
      {
        heading: "Planning in Bromley",
        text: "Many single-storey extensions in Bromley qualify for permitted development; two-storey builds and homes near the borough's conservation areas — Chislehurst, Elmstead and parts of Beckenham — usually need a full application to Bromley Council. We assess your property at the first visit, advise the realistic route and handle all drawings, applications and Party Wall notices.",
      },
    ],
    localAreas: ["Beckenham", "Shortlands", "Orpington", "Chislehurst", "Petts Wood", "West Wickham", "Hayes", "Bickley", "Bromley Common", "Elmstead"],
    pricing: [
      { item: "Single-storey rear extension", range: "£1,800 – £2,500 per m²" },
      { item: "25m² kitchen-diner extension", range: "£45,000 – £65,000" },
      { item: "Wrap-around extension", range: "£60,000 – £90,000" },
      { item: "Double-storey extension", range: "£70,000 – £110,000" },
      { item: "Planning & building regs handling", range: "Included" },
    ],
    eyebrow: "Bromley & South London",
    heroHeading: "House Extension Bromley",
    heroSubtitle:
      "More space, more light, more value. Expert house extensions built to the highest standard in Bromley and across South London.",
    intro:
      "Bromley's larger plots and family-sized homes make it one of South London's strongest areas for house extensions — from a single-storey rear kitchen-diner to a full double-storey rebuild. ARZ Construction designs and builds extensions that work with your home's existing character, managing every trade — groundworks, brickwork, steels, roofing, glazing and finishes — under one contract with a single project manager accountable throughout.",
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
        q: "Do I need planning permission for a house extension in Bromley?",
        a: "Many single-storey rear extensions fall under permitted development and do not require a full planning application. Side extensions, two-storey extensions and builds in one of Bromley's conservation areas typically do need permission. We advise you clearly at the first visit.",
      },
      {
        q: "How much does a house extension cost in Bromley?",
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
    slug: "house-renovations-croydon",
    title: "House Renovations Croydon",
    metaTitle: "House Renovations Croydon | Full Refurbishment Builders | ARZ",
    metaDescription:
      "Whole-house renovations in Croydon — structural work, kitchens, bathrooms, plastering, flooring and decoration under one contract. Request a free quotation.",
    localParagraphs: [
      {
        heading: "Renovating Croydon's Victorian Terraces and 1930s Semis",
        text: "Croydon's housing stock shapes how a renovation has to be planned. Victorian and Edwardian terraces around Thornton Heath, South Norwood and South Croydon often hide lath-and-plaster walls, shallow joists and ageing services, while the 1930s semis of Shirley, Sanderstead and Purley tend to be structurally sounder but come with small, closed-off kitchens and dated electrics. We survey first, price the realities we find and set out the order the work has to happen in.",
      },
      {
        heading: "One Contract, One Programme",
        text: "A whole-house renovation fails on sequencing more often than on workmanship. Strip-out, structural work, first fix, plaster, second fix, tiling, flooring and decoration are planned as one programme, with the same project manager accountable from the first site visit to the final walkthrough. You get a written schedule, staged payments against completed work and one point of contact for every trade.",
      },
      {
        heading: "Building Regulations and Party Walls",
        text: "Structural alterations, new openings, notifiable electrical or drainage work and anything affecting escape routes normally need building control involvement. We coordinate inspections with the relevant local authority building control team and, where the Party Wall etc. Act 1996 applies, advise on notices and surveyor appointments before work starts rather than after.",
      },
    ],
    localAreas: ["South Croydon", "Thornton Heath", "Norbury", "Shirley", "Sanderstead", "Purley", "Addiscombe", "Selhurst", "Waddon", "Coulsdon"],
    pricing: [
      { item: "Single room refurbishment", range: "£3,500 – £9,000" },
      { item: "Full house renovation (3-bed)", range: "£55,000 – £95,000" },
      { item: "Structural alterations and steels", range: "Quoted after survey" },
      { item: "Full rewire (3-bed)", range: "£4,500 – £7,500" },
      { item: "Plastering and redecoration", range: "Quoted per room" },
    ],
    eyebrow: "Croydon & South London",
    heroHeading: "House Renovations Croydon",
    heroSubtitle:
      "Whole-house refurbishment planned properly — structure, services, finishes and decoration under one contract, with one project manager accountable throughout.",
    intro:
      "A full house renovation is a sequence of dependent trades, not a list of separate jobs. ARZ Construction plans the order of work up front, coordinates every trade on site and prices strip-out, structure, services and finishes together, so you are not left managing a plumber waiting on an electrician waiting on a plasterer.",
    image: renovationImg,
    highlights: [
      "Full strip-out and structural alterations",
      "New openings, steel beams and lintels",
      "First and second fix plumbing and electrics",
      "Kitchens, bathrooms and en-suites",
      "Plastering, flooring and joinery",
      "Decoration and a snag-free handover",
    ],
    faqs: [
      {
        q: "How long does a full house renovation take in Croydon?",
        a: "A three-bedroom house renovation typically runs 14–22 weeks on site, depending on structural work and how much of the property is being replaced. Your written quotation includes an indicative programme, and your project manager gives you a weekly update against it.",
      },
      {
        q: "Do I need to move out during the work?",
        a: "For a full renovation involving structure, services and re-plastering, most homeowners move out for at least part of the programme. For single rooms or a phased renovation, we can usually keep part of the house usable — we agree the practical arrangements at the planning stage.",
      },
      {
        q: "Can you carry out the work one room at a time?",
        a: "Yes. Phased renovations are common in occupied homes, and sequencing the phases properly avoids redoing first-fix work later. We'll set out which trades need to be grouped together so a later phase does not reopen finished work.",
      },
      {
        q: "How much does a house renovation cost in Croydon?",
        a: "A single room typically runs £3,500–£9,000 depending on scope, while a full three-bedroom renovation usually falls between £55,000 and £95,000. Structural work, a new kitchen or bathroom and re-plastering throughout are the main cost drivers. We price each element separately so you can see where the money goes.",
      },
      {
        q: "Do you handle building regulations on renovations?",
        a: "Yes. We coordinate building control inspections for structural, electrical, drainage and fire-safety work, and we work alongside your architect or structural engineer where drawings and calculations are required. Where the Party Wall etc. Act 1996 applies we advise on notices before work starts.",
      },
    ],
    relatedSlugs: ["house-renovations", "kitchen-renovations", "bathroom-renovations"],
  },
  {
    slug: "kitchen-renovations-croydon",
    title: "Kitchen Renovations Croydon",
    metaTitle: "Kitchen Renovations Croydon | Kitchen Fitters & Installers | ARZ",
    metaDescription:
      "Kitchen renovations in Croydon — strip-out, layout changes, plumbing, electrics, worktops, tiling and appliance fitting by one team. Request a free quotation.",
    localParagraphs: [
      {
        heading: "Kitchens That Suit Croydon Homes",
        text: "Most Croydon kitchens are constrained by the building rather than the budget: galley layouts in Thornton Heath terraces, a single wall of units in 1930s Shirley semis, or a narrow side return that could open into a dining space. We measure the room properly, agree where the sink, hob and appliances will go, and confirm drainage and cable routes before anything is stripped out — because moving a soil stack or a consumer unit after tiling starts is what turns a refit into a rebuild.",
      },
      {
        heading: "The Order of Work Matters",
        text: "Strip-out, then plumbing and electrical first fix, then boarding and plaster, then units and worktops, then tiling and second fix, then decoration and appliance connection. Running those stages in the wrong order is the most common reason kitchen refits overrun. One team carries out the plumbing, electrics, tiling and joinery, so the sequence is controlled rather than negotiated between separate contractors.",
      },
      {
        heading: "Templating, Levels and Finishes",
        text: "Level worktops, flush upstands and neat cuts around sockets are what separate a good kitchen fit from an average one. Worktops are templated after the units are installed and levelled, extract and ventilation requirements are addressed as part of the works, and the finished room is walked with you before handover.",
      },
    ],
    localAreas: ["South Croydon", "Purley", "Shirley", "Sanderstead", "Thornton Heath", "Addiscombe", "Norbury", "Selhurst", "Waddon"],
    pricing: [
      { item: "Kitchen refit (no layout change)", range: "£8,000 – £15,000" },
      { item: "Full kitchen renovation with layout change", range: "£12,000 – £28,000" },
      { item: "Worktop templating and fitting", range: "Quoted on survey" },
      { item: "Kitchen/diner knock-through (with steels)", range: "Quoted on survey" },
      { item: "Tiling, splashbacks and second fix", range: "Included in quotation" },
    ],
    eyebrow: "Croydon & South London",
    heroHeading: "Kitchen Renovations in Croydon",
    heroSubtitle:
      "Layout changes, plumbing, electrics, worktops, tiling and appliance fitting — planned in the right order and delivered by one coordinated team.",
    intro:
      "A kitchen renovation involves more trades than any other room in the house, which is why sequencing decides whether it finishes on time. ARZ Construction plans the layout and services before strip-out, carries out the plumbing, electrics, tiling and fitting as one job, and hands the room back ready to use.",
    image: kitchenImg,
    highlights: [
      "Strip-out and layout re-planning",
      "Drainage, soil and waste alterations",
      "First and second fix electrics",
      "Worktop templating and fitting",
      "Tiling, splashbacks and flooring",
      "Appliance fitting and commissioning",
    ],
    faqs: [
      {
        q: "How long does a kitchen renovation take in Croydon?",
        a: "A straightforward refit with no layout or drainage changes is usually 2–3 weeks. A full renovation involving layout changes, new circuits and plumbing alterations typically runs 3–5 weeks, with structural openings adding further time.",
      },
      {
        q: "Can you move the sink, hob or boiler?",
        a: "Usually yes, but it depends on drainage falls, the position of the soil stack and the capacity of the existing supply. We check those constraints at the survey and tell you before work starts whether a proposed layout is practical or needs adjusting.",
      },
      {
        q: "Do you supply the kitchen units?",
        a: "You can supply your own kitchen from any retailer and we will install it, or we can work with suppliers we have used before. Either way, we confirm the unit sizes and appliance specifications against the agreed layout before ordering.",
      },
      {
        q: "How much does a kitchen renovation cost in Croydon?",
        a: "A refit without layout changes typically costs £8,000–£15,000. A full renovation with new services, layout changes and tiling usually falls between £12,000 and £28,000. Unit and appliance costs vary widely and are itemised separately in the quotation.",
      },
      {
        q: "Will the kitchen be usable during the work?",
        a: "Expect the kitchen to be out of action for most of the programme. We agree a temporary arrangement with you at the planning stage — for example keeping a kettle, fridge and microwave in another room — and keep the working area screened and tidy.",
      },
    ],
    relatedSlugs: ["kitchen-renovations", "house-renovations", "plumbing"],
  },
  {
    slug: "bathroom-renovations-croydon",
    title: "Bathroom Renovations Croydon",
    metaTitle: "Bathroom Renovations Croydon | Bathroom Fitters | ARZ Construction",
    metaDescription:
      "Bathroom renovations in Croydon — tanking, plumbing, tiling, underfloor heating and sanitaryware fitting. Request a free, itemised quotation from ARZ Construction.",
    localParagraphs: [
      {
        heading: "Waterproofing First, Tiling Second",
        text: "Most bathroom failures start behind the tiles. Before any tiling goes on, shower areas and wet zones are boarded and tanked, falls are set correctly towards the waste and pipework is pressure-tested. It is the least visible part of the job and the part that decides whether the bathroom is still sound in ten years.",
      },
      {
        heading: "Working With Croydon's Older Bathrooms",
        text: "Period terraces around South Croydon and Thornton Heath often have small bathrooms with cast-iron or lead waste runs, uneven floors and no mechanical ventilation. We plan around what is actually there — confirming whether a floor can take a walk-in shower, whether an extract fan can be ducted externally, and how much height a new floor build-up will cost you at the door threshold.",
      },
      {
        heading: "En-Suites and Loft Bathrooms",
        text: "Adding an en-suite or a shower room in a loft brings drainage and structure into play: pump or gravity drainage, floor joist depths, headroom and fire separation. Where the bathroom forms part of an extension or loft conversion, the structural and building control work is coordinated as part of the same project rather than handed between contractors.",
      },
    ],
    localAreas: ["South Croydon", "Purley", "Shirley", "Sanderstead", "Thornton Heath", "Addiscombe", "Norbury", "Selhurst", "Waddon", "Coulsdon"],
    pricing: [
      { item: "Full bathroom renovation", range: "£6,000 – £15,000" },
      { item: "En-suite or wet room", range: "£5,000 – £10,000" },
      { item: "Tanking and wet-zone preparation", range: "Included in quotation" },
      { item: "Underfloor heating (per room)", range: "from £1,200" },
      { item: "Large-format tiling", range: "Quoted per m²" },
    ],
    eyebrow: "Croydon & South London",
    heroHeading: "Bathroom Renovations in Croydon",
    heroSubtitle:
      "Correct tanking, careful tiling and reliable plumbing — bathrooms and en-suites built to stay watertight, not just look good on handover day.",
    intro:
      "A bathroom is the most heavily used wet room in the house and the least forgiving of shortcuts. ARZ Construction prepares and tanks the wet zones properly, coordinates plumbing, electrics and tiling in the right order, and fits sanitaryware so the finished room works as well as it looks.",
    image: bathroomImg,
    highlights: [
      "Strip-out and making good",
      "Tanking and wet-room forming",
      "Underfloor heating and heated towel rails",
      "Large-format wall and floor tiling",
      "Sanitaryware, shower and screen fitting",
      "Extract ventilation and lighting",
    ],
    faqs: [
      {
        q: "How long does a bathroom renovation take?",
        a: "A standard family bathroom is usually 2–3 weeks on site. Larger bathrooms, full tiling and bespoke joinery can take 3–4 weeks. Tanking and screed drying times are built into the programme rather than compressed.",
      },
      {
        q: "How much does a bathroom renovation cost in Croydon?",
        a: "A full bathroom renovation typically costs £6,000–£15,000 depending on size, tiling and specification. En-suites and shower rooms usually fall between £5,000 and £10,000. Sanitaryware and tile choices are the biggest variables and are itemised separately.",
      },
      {
        q: "Do I need to move the toilet and waste pipe?",
        a: "Not always. Keeping sanitaryware in the existing positions is cheaper because drainage falls are already set. If the layout needs to change, we confirm whether the waste can be re-routed within the floor structure or requires a macerator or raised floor build-up.",
      },
      {
        q: "Is underfloor heating worth it in a bathroom?",
        a: "In most bathrooms, yes — it removes the need for a large radiator and gives an even warmth underfoot. It adds roughly £1,200 and upwards depending on area and system, and needs to be planned before the floor build-up is decided.",
      },
      {
        q: "Can you fit a bathroom without removing the suite first?",
        a: "No — a reliable installation requires strip-out so the substrate, tanking and pipework can be inspected and prepared. Keeping an old suite in place means working around unknown waterproofing, which is where leaks usually originate.",
      },
    ],
    relatedSlugs: ["bathroom-renovations", "plastering-tiling", "plumbing"],
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  /** General location only — a borough or area, never a full address. */
  location: string;
  description: string;
  /** Visible scope of works. No duration, size or cost claims are made here. */
  scope: string[];
  image: string;
  beforeImage?: string;
  afterImage?: string;
  gallery: string[];
  /** Standard service page this project links back to. */
  relatedService?: string;
};

export const projects: Project[] = [
  {
    id: "contemporary-rear-extension",
    title: "Contemporary Rear Extension",
    category: "Extension",
    location: "Barnet, North London",
    description:
      "Rear extension built to add living space and connect the home to its garden, with brickwork matched to the original house and full-height glazing.",
    scope: ["Groundworks and foundations", "Matched brickwork", "Structural steelwork", "Bifold doors and rooflights"],
    image: extensionImg,
    gallery: [extensionImg, interiorImg, kitchenImg],
    relatedService: "extensions",
  },
  {
    id: "full-house-renovation",
    title: "Full House Renovation",
    category: "Renovation",
    location: "Ealing, West London",
    description:
      "Whole-property refurbishment covering structural improvements, new interiors, a kitchen, bathrooms, flooring and decoration through to handover.",
    scope: ["Structural alterations", "Kitchen and bathrooms", "Plastering and flooring", "Full redecoration"],
    image: renovationImg,
    beforeImage: beforeImg,
    afterImage: afterImg,
    gallery: [renovationImg, interiorImg, bathroomImg],
    relatedService: "house-renovations",
  },
  {
    id: "luxury-kitchen",
    title: "Kitchen Installation",
    category: "Kitchen",
    location: "Richmond, South West London",
    description:
      "Kitchen with island seating, stone worktops and integrated lighting, installed alongside new electrics and plumbing alterations.",
    scope: ["Strip-out and first fix", "Worktop templating", "Integrated lighting", "Appliance fitting"],
    image: kitchenImg,
    gallery: [kitchenImg, interiorImg],
    relatedService: "kitchen-renovations",
  },
  {
    id: "bathroom-renovation",
    title: "Bathroom Renovation",
    category: "Bathroom",
    location: "Croydon, South London",
    description:
      "Tanked family bathroom with a walk-in shower, freestanding bath and large-format porcelain tiling.",
    scope: ["Strip-out and making good", "Tanking and wet zones", "Large-format tiling", "Sanitaryware fitting"],
    image: bathroomImg,
    gallery: [bathroomImg],
    relatedService: "bathroom-renovations",
  },
  {
    id: "loft-conversion",
    title: "Dormer Loft Conversion",
    category: "Loft Conversion",
    location: "Walthamstow, East London",
    description:
      "Dormer conversion creating a light-filled bedroom with an en-suite and generous eaves storage.",
    scope: ["Dormer construction", "Staircase installation", "Insulation and fire safety", "En-suite and eaves storage"],
    image: loftImg,
    gallery: [loftImg, bathroomImg],
    relatedService: "loft-conversions",
  },
  {
    id: "modern-interior",
    title: "Interior Refit",
    category: "Interior",
    location: "Islington, Central London",
    description:
      "New staircase, engineered oak flooring and full redecoration through a period townhouse.",
    scope: ["Staircase and joinery", "Engineered oak flooring", "Re-skim and preparation", "Full redecoration"],
    image: interiorImg,
    gallery: [interiorImg, renovationImg],
    relatedService: "decorating",
  },
];

// Process-based figures only. Project counts, years in business and ratings
// are deliberately not claimed — those need to be supplied and verified.
export const stats = [
  { value: "1", label: "Project Manager per Job" },
  { value: "10", label: "Services Delivered Under One Contract" },
  { value: "5", label: "Stages From Quote to Handover" },
  { value: "12mo", label: "Workmanship Guarantee" },
];

export const faqs = [
  {
    q: "Do you provide free quotations?",
    a: "Yes. We visit the property, discuss what you want to achieve and provide a written, itemised quotation at no cost and with no obligation.",
  },
  {
    q: "Which areas do you cover?",
    a: "We work across Croydon and South London, including Bromley, Sutton, Merton and Lambeth, and take on projects in the surrounding counties. If you are outside those areas, get in touch and we will tell you honestly whether we can help.",
  },
  {
    q: "How long does a typical project take?",
    a: "A bathroom is usually two to three weeks, a kitchen two to five, a single-storey extension twelve to sixteen weeks, and a full house renovation around fourteen to twenty-two weeks. Every project is different, so your written quotation includes an indicative programme for your scope of work.",
  },
  {
    q: "Do I need planning permission?",
    a: "Not always. Many single-storey rear extensions, loft conversions and internal alterations fall within permitted development. Side and two-storey extensions, flats, listed buildings and properties in conservation areas usually need a full application. We assess your property at the first visit and set out the likely route — the local planning authority makes the final decision.",
  },
  {
    q: "Do you handle building regulations?",
    a: "Yes. We coordinate building control inspections for structural, electrical, drainage and fire-safety work, and work alongside architects and structural engineers where drawings or calculations are needed. Certificates and completion notices are passed to you at handover.",
  },
  {
    q: "How are payments structured?",
    a: "Work is staged against agreed milestones set out in the written quotation. You pay for completed stages, never for work that has not been carried out, and any variation is priced and agreed in writing before it proceeds.",
  },
  {
    q: "Will I have a single point of contact?",
    a: "Yes. One project manager runs your job from the first visit to the final walkthrough, so you are not chasing separate trades or repeating yourself to different people.",
  },
  {
    q: "Is your work guaranteed?",
    a: "Workmanship is guaranteed for twelve months from practical completion, as set out in our written terms. Manufacturer warranties on materials and appliances are passed to you in your handover pack.",
  },
];

// Ordered by real service focus: Croydon borough first, then South London, then
// wider London and the surrounding counties. Confirm coverage with the business
// before treating the outer two rows as guaranteed service areas.
export const areas = [
  {
    name: "Croydon",
    places:
      "Croydon town centre · South Croydon · Thornton Heath · Norbury · Selhurst · Addiscombe · Shirley · Sanderstead · Purley · Coulsdon · Kenley · Waddon",
  },
  {
    name: "South London",
    places:
      "Bromley · Beckenham · Orpington · Sutton · Morden · Mitcham · Streatham · Norwood · Lewisham · Lambeth · Southwark · Wimbledon",
  },
  { name: "Wider London", places: "Other London boroughs by arrangement" },
  { name: "Surrounding counties", places: "Surrey · Kent · Essex and Hertfordshire borders by arrangement" },
];

export const process = [
  {
    number: "01",
    title: "Initial Consultation",
    text: "A conversation about what you want to achieve, your budget range and your timescales, so options are realistic from the start.",
  },
  {
    number: "02",
    title: "Site Visit & Assessment",
    text: "We visit the property, take measurements and identify anything that affects cost, access or the programme.",
  },
  {
    number: "03",
    title: "Detailed Quotation & Planning",
    text: "You receive an itemised written quotation and a build programme. Where drawings, structural calculations, planning or party wall notices are needed, we confirm who is responsible for each before work starts.",
  },
  {
    number: "04",
    title: "Construction & Progress Updates",
    text: "One project manager runs the site, coordinates every trade and keeps you updated as the work progresses.",
  },
  {
    number: "05",
    title: "Inspection & Completion",
    text: "We walk the finished work with you, complete a full snagging list and hand over certificates, warranties and care information.",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Areas We Cover", to: "/areas-we-cover" },
  { label: "Guides", to: "/blog" },
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
