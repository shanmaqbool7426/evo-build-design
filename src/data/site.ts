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
import kitchenGreyGloss1Img from "@/assets/kitchen-grey-gloss-1.webp";
import kitchenGreyGloss3Img from "@/assets/kitchen-grey-gloss-3.webp";
import kitchenWhiteBlackImg from "@/assets/kitchen-white-black.webp";
import kitchenBlackIslandImg from "@/assets/kitchen-black-island.webp";
import barSlatWallImg from "@/assets/bar-slat-wall.webp";
import understairsJoineryImg from "@/assets/understairs-joinery.webp";
import extensionBlockworkImg from "@/assets/extension-blockwork.webp";

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
  kitchenGreyGloss: kitchenGreyGloss1Img,
  kitchenGreyGlossThird: kitchenGreyGloss3Img,
  kitchenWhiteBlack: kitchenWhiteBlackImg,
  kitchenBlackIsland: kitchenBlackIslandImg,
  barSlatWall: barSlatWallImg,
  understairsJoinery: understairsJoineryImg,
  extensionBlockwork: extensionBlockworkImg,
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
  // Business address supplied by the owner on 19 Nov 2026. Companies House
  // (12858978) lists the same building as "Flat 2, 23 Headcorn Road"; the
  // owner chose the shorter form for public use. Keep this NAP block
  // identical on the GBP, every directory listing, llms.txt and the schema in
  // __root.tsx.
  addressLabel: "Registered office",
  addressLines: [
    "23 Headcorn Road",
    "Thornton Heath, Croydon",
    "CR7 6JR",
    "United Kingdom",
  ],
  address: {
    streetAddress: "23 Headcorn Road",
    addressLocality: "Thornton Heath",
    addressRegion: "Greater London",
    postalCode: "CR7 6JR",
    addressCountry: "GB",
  },
  // Where the work actually happens.
  operatingStatement:
    "Projects are carried out at customers' homes across Croydon and South London. Site visits are by appointment.",
  // Profile URLs feed the `sameAs` structured-data array in __root.tsx.
  // Paste each real profile URL when available; empty entries are skipped.
  socials: {
    // Knowledge-panel link for the verified GBP (kgmid /g/11zynn28sq).
    // Powers `sameAs` in the LocalBusiness schema and the footer link.
    googleBusiness: "https://www.google.com/search?kgmid=/g/11zynn28sq",
    companiesHouse:
      "https://find-and-update.company-information.service.gov.uk/company/12858978",
    facebook: "",
    instagram: "",
    checkatrade: "",
    houzz: "",
  },
};

export type Service = {
  slug: string;
  /** When set, every internal link for this service points at the richer
   *  SEO landing page instead. The old slug is 301'd in src/server.ts. */
  redirectTo?: string;
  number: string;
  title: string;
  /** Head <title> override. Without it the title falls back to
   *  "<service title> — ARZ Construction Ltd", which wastes a keyword slot. */
  metaTitle?: string;
  short: string;
  description: string;
  metaDescription: string;
  image: string;
  highlights: string[];
  /** Hub-page FAQs. Rendered as visible <details> blocks and emitted as
   *  FAQPage schema — keeps hub pages answering the questions people
   *  actually search for instead of only the geo-targeted pages. */
  faqs?: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "house-renovations",
    redirectTo: "house-renovations-croydon",
    number: "01",
    title: "House Renovations",
    metaTitle: "House Renovations South London | Full Refurbishment Builders",
    short: "Whole-house refurbishment delivered to a considered plan and a fixed schedule.",
    description:
      "From single rooms to complete property transformations, we manage structural work, first and second fix, plastering, decorating and finishing so your home is handed back ready to live in.",
    metaDescription:
      "Whole-house renovations in Croydon and South London — structural work, plastering and finishing managed to a fixed plan. Free, itemised quotations.",
    image: renovationImg,
    highlights: [
      "Structural alterations and steel beams",
      "Full first and second fix coordination",
      "Plastering, flooring and decorating",
      "Single point of contact throughout",
    ],
    faqs: [
      {
        q: "How long does a full house renovation take?",
        a: "A whole-house refurbishment usually runs 12–20 weeks on site, depending on size, structural work and how long the property is empty. The programme is set out in the written quotation and updated as the job progresses.",
      },
      {
        q: "Can we live in the house during the work?",
        a: "Sometimes, if the work is staged room by room. For a whole-house renovation with structural alterations it is usually faster and cheaper to move out. Wherever possible we sequence the work so at least one bathroom and a working kitchen stay available.",
      },
      {
        q: "Do you handle building regulations and structural calculations?",
        a: "Yes. Structural calculations, building control applications and any planning submission are arranged as part of the project, and the completion certificate is handed over at the end.",
      },
      {
        q: "How much does a house renovation cost in Croydon?",
        a: "Full refurbishments typically start around £1,200–£2,000 per m² depending on specification. Structural work, kitchens and bathrooms are the biggest variables, which is why every quotation is itemised line by line.",
      },
    ],
  },
  {
    slug: "extensions",
    redirectTo: "house-extension-croydon",
    number: "02",
    title: "Extensions",
    metaTitle: "House Extensions South London | Rear & Side-Return Builders",
    short: "Rear, side return and wrap-around extensions that add genuine living space.",
    description:
      "We build rear, side return, wrap-around and two-storey extensions, handling groundworks, brickwork, steels, roofing and glazing with careful attention to how new space meets the existing house.",
    metaDescription:
      "Rear, side-return and wrap-around extensions in Croydon and South London, from groundworks to glazing. Free, itemised quotations from ARZ Construction.",
    image: extensionImg,
    highlights: [
      "Groundworks and foundations",
      "Brickwork matched to the original",
      "Structural steel and roofing",
      "Bifold and rooflight installation",
    ],
    faqs: [
      {
        q: "Do I need planning permission for a rear extension?",
        a: "Many rear extensions fall under permitted development — up to 3m for terraced and semi-detached homes and 4m for detached, or up to 6m and 8m through the neighbour consultation scheme. Conservation areas, Article 4 directions and flats remove those rights, so we check your address before quoting.",
      },
      {
        q: "How much does an extension cost?",
        a: "A single-storey extension typically costs £2,000–£3,000 per m² finished, so a 4m × 3m rear extension usually lands between £30,000 and £45,000 depending on glazing, kitchen and drainage. Two-storey extensions cost more per m² because of the upper-floor structure.",
      },
      {
        q: "Do you handle the steelwork and building regulations?",
        a: "Yes — structural calculations, steel beams, building control inspections and the completion certificate are all part of the project, not extras bolted on later.",
      },
      {
        q: "How long does an extension take to build?",
        a: "A single-storey extension is usually 10–16 weeks from groundworks to completion. Two-storey and wrap-around builds take longer. Weather, drainage diversions and party wall awards are the usual variables.",
      },
    ],
  },
  {
    slug: "loft-conversions",
    redirectTo: "loft-conversion-croydon",
    number: "03",
    title: "Loft Conversions",
    metaTitle: "Loft Conversions South London | Dormer & Hip-to-Gable",
    short: "Unused roof space converted into bright, usable bedrooms and studies.",
    description:
      "Dormer, hip-to-gable and rooflight conversions including staircases, insulation, fire protection and en-suites, built to current building regulations.",
    metaDescription:
      "Dormer, hip-to-gable and rooflight loft conversions in Croydon and South London, built to current regulations. Free, itemised quotations.",
    image: loftImg,
    highlights: [
      "Dormer and hip-to-gable builds",
      "Staircase design and installation",
      "Insulation and fire safety compliance",
      "En-suite and storage joinery",
    ],
    faqs: [
      {
        q: "Do I need planning permission for a loft conversion?",
        a: "Most loft conversions are permitted development if the additional roof volume stays within 40m³ for terraced houses and 50m³ for semi-detached and detached, the roof does not extend beyond the front slope, and no balcony or veranda is added. Flats, conservation areas and Article 4 directions need a full application.",
      },
      {
        q: "How much does a loft conversion cost?",
        a: "Rooflight conversions typically run £25,000–£35,000, rear dormers £40,000–£55,000, and a hip-to-gable with rear dormer £45,000–£65,000. En-suites, bespoke joinery and structural work add to that figure.",
      },
      {
        q: "How long does a loft conversion take?",
        a: "8–12 weeks on site for a standard dormer, from scaffold up to decoration. Planning or a party wall award adds time before work starts. The roof is normally made watertight within the first two weeks.",
      },
      {
        q: "Do I need a party wall agreement for a loft conversion?",
        a: "For semis and terraces, usually yes, because the new floor structure bears on the party wall. We serve the notices in the first week and coordinate with the party wall surveyor.",
      },
    ],
  },
  {
    slug: "kitchen-renovations",
    redirectTo: "kitchen-renovations-croydon",
    number: "04",
    title: "Kitchen Renovations",
    metaTitle: "Kitchen Renovations South London | Design & Installation",
    short: "Kitchens installed with precise joinery, level worktops and clean services.",
    description:
      "We strip out, re-plan and install kitchens of any size, including plumbing, electrics, tiling, worktop templating and appliance fitting.",
    metaDescription:
      "Kitchen renovations in Croydon and South London — strip-out, plumbing, electrics, worktops and tiling. Free, itemised quotations.",
    image: kitchenImg,
    highlights: [
      "Layout planning and strip-out",
      "Plumbing and electrical alterations",
      "Worktop templating and fitting",
      "Tiling, splashbacks and finishing",
    ],
    faqs: [
      {
        q: "How long does a kitchen renovation take?",
        a: "A straightforward strip-out and refit is 2–3 weeks. Moving services, forming structural openings or waiting on bespoke joinery and worktop templating can take 4–6 weeks. Plumbing, electrics, plastering and tiling are sequenced so nothing is done twice.",
      },
      {
        q: "How much does a kitchen renovation cost?",
        a: "Labour and installation for a typical Croydon kitchen runs £8,000–£20,000, excluding units and appliances. Moving a soil stack, adding steel or reconfiguring the layout are the biggest cost drivers.",
      },
      {
        q: "Can you move the sink, hob and boiler?",
        a: "Usually yes, but it depends on drainage falls and the flue route. We confirm what can move and what should stay before the design is fixed, because relocating a soil stack costs far more than moving a water supply.",
      },
      {
        q: "Do you fit kitchens supplied by other companies?",
        a: "Yes — kitchens from Wren, Howdens, IKEA and others. We check the design against the actual room first: worktop runs, appliance gaps and service positions are where most supply-only problems originate.",
      },
    ],
  },
  {
    slug: "bathroom-renovations",
    redirectTo: "bathroom-renovations-croydon",
    number: "05",
    title: "Bathroom Renovations",
    metaTitle: "Bathroom Renovations South London | Full Refits & Wet Rooms",
    short: "Waterproofed, well-detailed bathrooms and en-suites built to last.",
    description:
      "Complete bathroom installations with correct tanking, underfloor heating, considered tiling detail and reliable sanitaryware fitting.",
    metaDescription:
      "Bathroom renovations in Croydon and South London with correct tanking, tiling and underfloor heating. Free, itemised quotations.",
    image: bathroomImg,
    highlights: [
      "Tanking and wet-room forming",
      "Underfloor heating",
      "Large-format tiling",
      "Sanitaryware and shower installation",
    ],
    faqs: [
      {
        q: "How long does a bathroom renovation take?",
        a: "2–3 weeks for a standard family bathroom, and 3–4 weeks for larger rooms with full tiling and bespoke joinery. Tanking and screed drying times are built into the programme rather than rushed.",
      },
      {
        q: "How much does a bathroom renovation cost?",
        a: "£6,000–£15,000 for a full bathroom and £5,000–£10,000 for an en-suite or shower room. Sanitaryware and tile choices are the biggest variables and are itemised separately in the quotation.",
      },
      {
        q: "Do you tank behind the tiles?",
        a: "Yes. Wet zones are tanked before tiling. It is the single most important part of a bathroom and the reason most leaks and failed grout lines happen. Tanking is included, not an optional extra.",
      },
      {
        q: "Can you move the toilet and waste pipe?",
        a: "Often, but it depends on the floor structure and drainage falls. If the waste cannot be re-routed within the floor, a macerator or raised floor build-up may be needed. We confirm this at survey stage.",
      },
    ],
  },
  {
    slug: "plumbing",
    number: "06",
    title: "Plumbing",
    metaTitle: "Plumber in Croydon & South London | ARZ Construction",
    short: "Pipework, heating and bathroom plumbing carried out by experienced trades.",
    description:
      "Heating systems, radiators, boiler relocations, soil and waste alterations and full first-fix plumbing as part of a wider build or as standalone work.",
    metaDescription:
      "Heating, radiators, boiler relocations and first-fix plumbing in Croydon and South London, carried out by experienced trades.",
    image: bathroomImg,
    highlights: [
      "Heating and radiator installation",
      "Soil and waste alterations",
      "Full first-fix pipework",
      "Leak investigation and repair",
    ],
    faqs: [
      {
        q: "Can you relocate a boiler?",
        a: "Yes, subject to the flue route and gas supply. Boiler relocations need a Gas Safe registered engineer and building control notification, both of which we arrange as part of the work.",
      },
      {
        q: "Do you attend emergency leaks and heating failures?",
        a: "Existing customers are prioritised, and we take on new repair work where the diary allows. For a genuine emergency, call rather than message — it is faster to assess the situation on the phone.",
      },
      {
        q: "Do you provide certificates for the work?",
        a: "Yes. Gas Safe notification for boiler and gas work, and building control notification where it is required. Certificates are handed over on completion.",
      },
      {
        q: "Can you carry out first-fix plumbing only?",
        a: "Yes. We regularly carry out first fix for other builders and for homeowners project-managing their own renovation, and can return for second fix and commissioning.",
      },
    ],
  },
  {
    slug: "electrical",
    redirectTo: "electrical-services",
    number: "07",
    title: "Electrical",
    metaTitle: "Electrician Croydon & South London | Rewires & Testing",
    short: "Rewires, consumer units and lighting design, carried out by qualified electricians.",
    description:
      "Partial and full rewires, consumer unit upgrades, lighting circuits, data points and EV-ready provisions. Electrical work is carried out by qualified electricians, with test certificates provided for notifiable work.",
    metaDescription:
      "Rewires, consumer unit upgrades and lighting circuits in Croydon and South London, by qualified electricians with test certificates provided.",
    image: interiorImg,
    highlights: [
      "Full and partial rewires",
      "Consumer unit upgrades",
      "Lighting and power circuit design",
      "Test certificates for notifiable work",
    ],
    faqs: [
      {
        q: "Do you provide electrical test certificates?",
        a: "Yes. Notifiable work is certified and notified to building control, and you receive the certificate on completion. Consumer unit upgrades, new circuits and bathroom electrics all require it.",
      },
      {
        q: "Can you rewire a house while we live in it?",
        a: "Usually yes, if the rewire is phased floor by floor and power is restored each evening. A full rewire of an empty property is faster and cheaper because trades are not working around furniture.",
      },
      {
        q: "How much does a rewire cost?",
        a: "A full rewire of a three-bedroom house typically runs £3,500–£6,000 depending on the number of points, floor construction and whether the property is occupied. Consumer unit upgrades start around £600–£900.",
      },
      {
        q: "Do you install EV chargers and outside power?",
        a: "Yes — EV charge points, garden supplies and external lighting, installed with the correct RCD and surge protection and the notification paperwork where required.",
      },
    ],
  },
  {
    slug: "roofing",
    number: "08",
    title: "Roofing & Guttering",
    metaTitle: "Roofing in Croydon & South London | Repairs & New Roofs",
    short: "Roof repairs, full re-roofs, felt flat roofs and guttering replacement.",
    description:
      "We carry out pitched and flat roof repairs, full re-roofs in slate or tile, felt and EPDM flat roofs, fascias, soffits and guttering replacement. Roofing work is carried out by experienced trades and covered by our 12-month workmanship guarantee.",
    metaDescription:
      "Pitched and flat roof repairs, re-roofs and guttering replacement in Croydon and South London, covered by a 12-month workmanship guarantee.",
    image: siteImg,
    highlights: [
      "Pitched roof repairs and full re-roofs",
      "Flat roofs — felt and EPDM rubber",
      "Fascias, soffits and bargeboards",
      "Guttering replacement and clearing",
      "Ridge tiles and lead flashing",
      "12-month workmanship guarantee",
    ],
    faqs: [
      {
        q: "How long does a new roof take?",
        a: "A full re-roof on a typical semi-detached house is 2–3 weeks including scaffold, strip, felt and battens, tiling and leadwork. Weather can extend that, but the roof is made watertight at the end of each working day.",
      },
      {
        q: "How much does a re-roof cost?",
        a: "A full re-roof typically runs £6,000–£12,000 for a semi-detached house depending on tile type, roof size and access. Repairs and small sections are quoted individually after an inspection.",
      },
      {
        q: "Do you repair or replace flat roofs?",
        a: "Both. Felt and EPDM are repaired where the deck is sound and replaced where it is not. EPDM is the more durable option and carries a longer manufacturer guarantee than felt.",
      },
      {
        q: "Is your roofing work guaranteed?",
        a: "Roofing is covered by our 12-month workmanship guarantee, in addition to any manufacturer guarantee on materials. Any defect within that period is inspected and put right.",
      },
    ],
  },
  {
    slug: "plastering-tiling",
    number: "09",
    title: "Plastering & Tiling",
    metaTitle: "Plastering & Tiling Croydon | Large-Format Tiling & Screeds",
    short: "Smooth plaster finishes, screeds and precision tiling throughout.",
    description:
      "From full room re-skims and dot-and-dab boarding to floor screeds and large-format tile installation, our finishing trades produce surfaces that are flat, true and ready to decorate. We also carry out specialist microcement and decorative plaster finishes.",
    metaDescription:
      "Plastering, floor screeds and large-format tiling in Croydon and South London, finished flat, true and ready to decorate.",
    image: interiorImg,
    highlights: [
      "Full room re-skims and new plaster",
      "Dot-and-dab boarding and dry lining",
      "Floor screeds and self-levelling compound",
      "Large-format and rectified tile installation",
      "Wet rooms and tanked shower enclosures",
      "Microcement and decorative finishes",
    ],
    faqs: [
      {
        q: "How long does plaster take to dry before painting?",
        a: "Fresh plaster needs 4–7 days before a mist coat, longer in cold or humid weather. Tiling can usually start sooner than painting, which is why the sequence matters on a tight programme.",
      },
      {
        q: "Can you skim over Artex ceilings?",
        a: "Often yes, if the Artex is sound and has been tested for asbestos where the age of the property makes that a risk. Loose or blown plaster is removed and boarded rather than skimmed over.",
      },
      {
        q: "How much does plastering cost?",
        a: "Re-skimming typically runs £18–£30 per m², and boarding plus skimming £35–£50 per m². Small rooms carry a minimum charge because of set-up and drying time.",
      },
      {
        q: "Do you install large-format tiles?",
        a: "Yes, including rectified porcelain and slab tiles with the correct adhesive, backer board and movement joints. Large-format tiles need a flat substrate, so the walls or floor are checked and levelled first.",
      },
    ],
  },
  {
    slug: "decorating",
    number: "10",
    title: "Decorating",
    metaTitle: "Decorating in Croydon & South London | Interior & Exterior",
    short: "Interior and exterior painting and decorating, done properly.",
    description:
      "Our decorators prepare surfaces correctly before they pick up a brush — filling, sanding and priming as needed. The result is a finish that looks clean on completion and holds up over time. We cover interior painting, wallpapering and exterior masonry and timber.",
    metaDescription:
      "Interior and exterior painting and decorating in Croydon and South London, with proper surface preparation for a finish that holds up over time.",
    image: renovationImg,
    highlights: [
      "Interior painting — walls, ceilings and woodwork",
      "Exterior masonry and timber painting",
      "Wallpaper hanging and feature walls",
      "Preparation, filling and priming",
      "Coving and cornice installation",
      "New build and refurbishment finishing",
    ],
    faqs: [
      {
        q: "Do you prepare surfaces or just paint?",
        a: "Preparation is the bulk of the work. Filling, sanding, priming and any necessary stain blocking happen before paint. Skipping that is why cheap decorating fails within a year.",
      },
      {
        q: "How much does decorating cost?",
        a: "Interior painting typically runs £250–£450 per room for walls and ceilings, and £500–£800 including woodwork. Exterior masonry and timber is quoted per elevation.",
      },
      {
        q: "Do you supply the paint?",
        a: "Either way. Most clients choose their own colours and finishes; we advise on the right product for each surface and can supply trade-grade paint where it makes a difference.",
      },
      {
        q: "Can you decorate after your own building work?",
        a: "Yes, and it is usually cheaper to have the same team finish the job, because snagging and making good are handled before the decorators arrive instead of between two contractors.",
      },
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
  /** Town pages are listed on /areas-we-cover and in the footer instead of
   *  the "South London Specialists" menu, so the navigation stays readable. */
  isTown?: boolean;
  /** Places this page targets, used for the Service schema areaServed.
   *  Defaults to Croydon / South London when omitted. */
  areaServed?: string[];
};

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "loft-conversion-croydon",
    title: "Loft Conversion Croydon",
    metaTitle: "Loft Conversion Croydon | Dormer & Hip-to-Gable from £25,000",
    metaDescription:
      "Dormer, hip-to-gable and L-shaped loft conversions in Croydon — costs from £25,000, permitted development advice and 8–12 week builds. Free itemised quote.",
    localParagraphs: [
      {
        heading: "Loft Conversions Across Every Croydon Postcode",
        text: "Croydon's housing stock is unusually well suited to loft conversions. The 1930s semis of Sanderstead, Shirley and Selsdon have steep pitched roofs with enough headroom for a rear dormer, while the Victorian and Edwardian terraces of Thornton Heath, Norbury and South Croydon often have a rear outrigger that makes an L-shaped conversion possible. Between them these two house types account for most of the lofts we build in CR0, CR2, CR4, CR5 and CR8 — and each needs a different structural approach, so the survey decides the design rather than the other way round.",
      },
      {
        heading: "Dormer Loft Conversions in Croydon",
        text: "A rear dormer is the most common conversion in Croydon and usually the best value per square metre. We build a box structure out of the rear roof slope with a flat or shallow-pitched roof, insulated and finished to match the existing brickwork and tiles. A typical dormer creates roughly 15–20m² of usable floor area — enough for a double bedroom with storage in the eaves — and a single rear dormer normally stays inside permitted development. Expect £40,000–£55,000 on a semi-detached house, including the staircase, insulation, electrics and plastering.",
      },
      {
        heading: "Hip-to-Gable Loft Conversions in Croydon",
        text: "If you have been searching for a gable loft conversion in Croydon, this is the build you mean. Many semis on the Sanderstead and Shirley estates have a hipped roof, where the slope runs down on three sides and leaves very little usable width at the back. Converting the hipped end into a vertical gable wall squares off that corner and gives a full-width room — and it is almost always paired with a rear dormer so the whole footprint becomes usable. Because the roof shape genuinely changes, it carries more structural work: new steel, a gable wall, and often a Party Wall award where the gable sits on the boundary. Budget £45,000–£65,000 depending on span and finish.",
      },
      {
        heading: "L-Shaped Loft Conversions in Croydon",
        text: "Victorian and Edwardian terraces across Thornton Heath, Norbury and South Croydon usually have a rear outrigger — a narrower two-storey back addition. Wrapping the conversion over both the main roof and the outrigger produces an L-shaped plan, which is by far the largest loft room you can get in these houses: typically a bedroom, a dressing area and an en-suite. It needs roughly 2.2m from finished floor to ridge, and the same permitted development volume limits apply — 40m³ on a terrace, 50m³ on a semi or detached house. On terraces the outrigger wall is normally shared with a neighbour, so expect a Party Wall award as part of the programme.",
      },
      {
        heading: "Rooflight and Velux Loft Conversions in Croydon",
        text: "Where the ridge is lower, or where the look of the house matters more than floor area, a rooflight conversion leaves the roof shape untouched and simply opens the slope with Velux windows. Nothing is added to the outside of the building, so the permitted development volume limits are rarely engaged and neighbours have nothing to object to. The trade-off is usable space: headroom falls away quickly towards the eaves, so this type suits a study, guest room or playroom better than a principal bedroom. It is also the most economical route, starting around £25,000.",
      },
      {
        heading: "Planning Permission and Permitted Development in Croydon",
        text: "Most loft conversions in Croydon are permitted development: up to 40m³ of additional roof volume on a terraced house and 50m³ on a semi-detached or detached house, no extension beyond the plane of the existing roof slope facing a highway, and materials matching the existing roof. That changes in Croydon's conservation areas — including Addington Village, Beulah Hill, Norwood Grove, South Norwood and parts of Central Croydon — where a householder application is normally required, and where an Article 4 direction can remove some rights altogether. Flats and maisonettes have no permitted development rights at all. If there is any doubt we apply for a Lawful Development Certificate before work starts, so the conversion is documented as lawful when you come to sell.",
      },
      {
        heading: "Building Regulations, Party Walls and Structural Sign-Off",
        text: "Every loft conversion needs building regulations approval, whatever the planning position. We prepare the drawings, submit full plans or a building notice to Croydon Council building control, and arrange the inspections at excavation, structure, insulation, fire separation and completion. Where a steel beam or new floor bears onto a shared wall, the Party Wall etc. Act 1996 applies: we serve the notices, agree the award and schedule the work around the notice periods. Structural calculations are produced by an engineer we work with, and you receive the completion certificate at the end — the document buyers' solicitors always ask for.",
      },
      {
        heading: "How a Croydon Loft Build Runs, Week by Week",
        text: "Weeks one and two are scaffold, weatherproofing and strip-out, with the roof opened only as far as the new structure can be closed the same week. Structure, dormer or gable and staircase follow through weeks three to six; first-fix electrics, plumbing and insulation through weeks six to eight; then plastering, second fix, tiling and decoration. A standard dormer finishes in 8–12 weeks on site. Your project manager confirms access, parking, skip position and working hours in writing before the first day, and you get a weekly progress update so you always know which trade is in the house.",
      },
    ],
    localAreas: ["South Croydon", "Purley", "Shirley", "Sanderstead", "Thornton Heath", "Selhurst", "Addiscombe", "Coulsdon", "Kenley", "Norbury", "Waddon", "Woodside", "Selsdon", "New Addington"],
    pricing: [
      { item: "Rooflight-only conversion", range: "£25,000 – £35,000" },
      { item: "Rear dormer (semi-detached)", range: "£40,000 – £55,000" },
      { item: "Hip-to-gable with rear dormer", range: "£45,000 – £65,000" },
      { item: "L-shaped conversion with outrigger", range: "£65,000 – £85,000" },
      { item: "En-suite or shower room addition", range: "+£6,000 – £12,000" },
      { item: "Structural engineer & steelwork", range: "Included" },
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
      "Dormer, hip-to-gable, L-shaped and rooflight builds",
      "Structural steelwork and engineer's calculations",
      "Purpose-made staircase and joinery",
      "Insulation, fire doors and mains-linked alarms",
      "First and second fix electrics and plumbing",
      "En-suite bathrooms and eaves storage",
      "Party Wall notices and building regs sign-off",
      "Written workmanship guarantee on completion",
    ],
    faqs: [
      {
        q: "Do I need planning permission for a loft conversion in Croydon?",
        a: "Most loft conversions fall within permitted development rights and do not need full planning permission — up to 40m³ of additional volume on a terrace and 50m³ on a semi-detached or detached house. Exceptions include conservation areas, listed buildings, flats and maisonettes, and builds that exceed the volume allowance. We assess your specific property on the initial visit and confirm the route in writing.",
      },
      {
        q: "My house is in a Croydon conservation area — can I still convert the loft?",
        a: "Usually yes, but you will normally need a householder planning application rather than relying on permitted development, and some areas have Article 4 directions that remove the rights entirely. In conservation areas roof materials, window style and the shape of any dormer are all assessed, so the drawings need to be prepared with that in mind. We handle the application and adjust the design until it is acceptable to the council.",
      },
      {
        q: "How much does a loft conversion cost in Croydon?",
        a: "Rooflight conversions typically start around £25,000–£35,000. Dormer conversions range from £40,000–£55,000, a hip-to-gable with rear dormer £45,000–£65,000, and an L-shaped conversion over an outrigger £65,000–£85,000. Measured another way, most Croydon lofts land between £1,500 and £2,200 per m² of new floor area. You get an itemised written quotation before any work starts, so you can see exactly what is included.",
      },
      {
        q: "How long does a loft conversion take in Croydon?",
        a: "A standard dormer loft conversion typically takes 8–12 weeks from start on site. Hip-to-gable and L-shaped builds often run 12–14 weeks because of the additional structural work, and the planning or Party Wall stages add time before the build starts. Your written quotation includes an indicative programme with the structural and inspections stages marked.",
      },
      {
        q: "Do I need to move out during a loft conversion?",
        a: "Almost never. The work is contained above the existing first floor, with the staircase opening as the main disruption — typically a few days of noise and dust when the ceiling is opened and the new stairs are formed. We screen the opening, protect floors and stair treads, and agree working hours in advance. Families with very young children sometimes choose to be away for the week the roof is opened.",
      },
      {
        q: "Can you build a loft conversion on a semi-detached house in Croydon?",
        a: "Yes — semis are ideal for hip-to-gable or dormer conversions. Where the new structure bears onto the shared wall, or foundations are excavated within 3–6 metres of a neighbour's, the Party Wall etc. Act 1996 applies. We serve the notices and agree the award as part of the service; only the surveyor's fee, where a surveyor is appointed, is charged separately.",
      },
      {
        q: "Do I need a structural engineer for a loft conversion?",
        a: "Building control will require structural calculations for the floor, the steel beams and any gable or dormer opening, so yes. We coordinate an engineer who visits, calculates the loads and specifies the steel, and the same calculations go to Croydon building control. The cost is included in our quotation rather than added later as an extra.",
      },
      {
        q: "Who signs off building regulations for my loft?",
        a: "Croydon Council building control, or an approved inspector, inspects the work at defined stages: structure, insulation, fire separation, staircase and completion. We submit the application, book the inspections and attend them. At the end you receive a completion certificate, which is the document a buyer's solicitor will ask for when you sell.",
      },
      {
        q: "Do you provide a guarantee on loft conversions?",
        a: "Yes — you receive a written workmanship guarantee on completion covering the build itself, alongside the manufacturer warranties for the boiler, glazing and any other products installed. Structural calculations and building control sign-off document the work independently, which matters when the property is sold or remortgaged.",
      },
      {
        q: "Will my loft conversion add value to my Croydon home?",
        a: "A well-executed loft conversion is commonly estimated by local estate agents to add 15–25% to a property's value in South London, and an extra bedroom with en-suite is consistently one of the highest-return home improvements available. The return depends on the street and on the finish — an unregulated or poorly built loft can cost you more at survey than it adds.",
      },
      {
        q: "Is my Croydon loft high enough for a conversion?",
        a: "The usual benchmark is 2.2m from the top of the ceiling joists to the underside of the ridge, measured at the point where the staircase will land. Victorian terraces with an outrigger often pass; some 1960s and 1970s houses do not. Where the ridge is low, a rooflight conversion or a shallower dormer can still work — we measure it on the free survey rather than guessing.",
      },
      {
        q: "What's the difference between a loft conversion and a loft extension?",
        a: "The terms are used interchangeably — both mean turning unused roof space into a usable room. A loft extension usually refers to builds that add roof volume, such as a rear dormer or hip-to-gable, while a rooflight conversion works within the existing roof. We build all three and recommend the type that suits your roof and budget.",
      },
      {
        q: "Do you carry out attic conversions in South Croydon and Purley?",
        a: "Yes — we complete attic conversions across South Croydon, Purley, Shirley, Sanderstead, Coulsdon and Kenley. Most homes we survey are suitable; we confirm head height and access during your free visit and put the findings in the quotation.",
      },
      {
        q: "What should I do to prepare before a loft conversion starts?",
        a: "Clear stored items out of the loft so the team has direct access and your belongings are protected, and confirm where materials can be delivered and where the skip will sit. For terraced and semi-detached homes it is worth telling neighbours the start date — we serve Party Wall notices where they are needed. Access, parking and working hours are confirmed in writing before work starts, so nothing is left to guesswork.",
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
        a: "If your extension's foundations are within 3 metres of a neighbour's building and deeper than theirs (or within 6 metres for deeper footings), or you build on the boundary line, the Party Wall etc. Act 1996 requires you to serve notice — one month ahead for excavation or a new boundary wall, two months for work on a shared wall. We handle all Party Wall notices and can recommend a qualified surveyor where an agreement is needed.",
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
    slug: "electrical-services",
    title: "Electrical Services",
    metaTitle: "Electrician Croydon | Rewires & Consumer Units | ARZ",
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
    metaTitle: "Loft Conversion Bromley | Dormer & Hip-to-Gable from £25,000",
    metaDescription:
      "Dormer, hip-to-gable and L-shaped loft conversions in Bromley — costs from £25,000, permitted development advice and 8–12 week builds. Free itemised quote.",
    localParagraphs: [
      {
        heading: "Loft Conversions Built for Bromley's Housing Stock",
        text: "Bromley is one of the strongest boroughs in London for loft conversions. The 1930s semis of Shortlands, West Wickham, Petts Wood and Bromley Common nearly all have hipped roofs with the ridge height needed for a hip-to-gable or rear dormer. The Edwardian and Victorian terraces around Beckenham and Bromley North suit rear dormers, while the larger detached homes in Chislehurst, Farnborough and Keston often take an L-shaped conversion or a mansard. At the first visit we measure the clear head height from ceiling joist to ridge — 2.2m is the usual minimum — check the roof structure and confirm which conversion type gives you the most usable space within permitted development.",
      },
      {
        heading: "Dormer Loft Conversions in Bromley",
        text: "A rear dormer is the workhorse of Bromley loft conversions. The box dormer is built out from the rear roof slope, creating full-height vertical walls where there was previously only sloped ceiling — usually enough for a bedroom with a proper window wall and a separate bathroom or en-suite. It suits the straight gable-ended terraces and semis found across Bromley Common, Hayes and Bromley North. Dormers normally sit inside permitted development limits (40m³ of additional roof volume on a terrace, 50m³ on a semi-detached or detached house), provided nothing projects beyond the existing roof slope at the front of the house and materials match the existing roof. Typical Bromley dormer prices run £40,000–£55,000, and a standard build takes 8–12 weeks on site.",
      },
      {
        heading: "Hip-to-Gable Loft Conversions in Bromley",
        text: "Most Bromley 1930s semis have a hipped roof — the side slopes inwards, which steals usable width. A hip-to-gable conversion squares that slope off into a vertical gable wall, and it is usually combined with a rear dormer to create a full-width room. That combination adds the most usable space on a Bromley semi: the room gains both width and headroom, which is what makes a bedroom plus en-suite viable. Because the new steelwork normally bears on the party wall you share with your neighbour, the Party Wall etc. Act 1996 applies and notices must be served before work starts. Hip-to-gable with a rear dormer in Bromley typically runs £45,000–£65,000.",
      },
      {
        heading: "L-Shaped Loft Conversions in Bromley",
        text: "Victorian and Edwardian homes in Beckenham, Bromley North and Sundridge Park often have a rear outrigger or a lower roof at the back. An L-shaped conversion covers the main roof and the outrigger together, so the extra leg can hold an en-suite, a dressing area or a walk-in wardrobe while the main roof stays a full bedroom. It needs roughly 2.2m floor-to-ridge, and the permitted development volume limits apply to the combined additional volume. Most L-shaped conversions in Bromley run £65,000–£85,000 depending on the size of the outrigger and the structural work involved.",
      },
      {
        heading: "Rooflight and Velux Loft Conversions in Bromley",
        text: "If your roof already has good head height, a rooflight conversion may be the most efficient route. Nothing changes externally except the windows, so it normally sits outside planning altogether, the build is quicker and the price is lower — typically £25,000–£35,000 in Bromley, with four to six weeks on site. The trade-off is space: you keep the sloped ceilings and lose the headroom a dormer or hip-to-gable would create. We tell you honestly at the survey whether a rooflight will give you a usable room or whether a dormer is the only sensible option.",
      },
      {
        heading: "Planning Permission and Permitted Development in Bromley",
        text: "Most loft conversions in Bromley fall under permitted development: up to 40m³ of additional roof space on a terraced house, 50m³ on a semi-detached or detached home, no raising of the existing ridge line, nothing projecting beyond the existing roof slope at the front, and materials matching the house. Three things commonly take a Bromley project outside those rights. Conservation areas are the big one — the borough has dozens, including Chislehurst, Bickley, Sundridge Park, Elmfield and Hayes Village, and in those areas permitted development for roof alterations is restricted, so most visible roofline changes need a full application to Bromley Council. Flats and maisonettes have no permitted development rights at all, and anything exceeding the volume limits needs an application too. We assess the route at the first visit, prepare the drawings and handle the application — house applications are usually determined within about eight weeks. Even where permitted development applies, we recommend a Lawful Development Certificate: it is formal confirmation that the conversion is lawful and a useful document when you sell.",
      },
      {
        heading: "Building Regulations, Party Walls and Sign-Off",
        text: "Planning and building regulations are separate questions, and building regulations apply to every loft conversion whether or not planning permission is needed. They cover the structural design of the floor and roof alterations, fire safety (including protected escape routes, fire doors and alarms), insulation to current Part L standards, ventilation and the geometry of the new staircase. Structural engineer calculations are coordinated by us and included in the quotation. Where steelwork bears into a shared wall — normal on Bromley's semis and terraces — the Party Wall etc. Act 1996 requires notice to your neighbour, served at least two months before work starts, and either an agreement or a surveyor appointment. We serve the notices, coordinate the surveyor and manage the full building control process through to the completion certificate, which you receive at handover with your workmanship guarantee.",
      },
      {
        heading: "How a Bromley Loft Build Runs, Week by Week",
        text: "A typical Bromley dormer or hip-to-gable build follows the same order. Before scaffold goes up we finalise drawings, structural calculations and Party Wall notices, and confirm scaffold and skip positioning with you in writing. Weeks 1–2: scaffold erected, roof opened up and structural steelwork installed. Weeks 3–5: dormer or gable shell built, roof weathered and windows fitted, so the loft is watertight and insulated from the weather. Weeks 6–7: first-fix electrics and plumbing, insulation and the staircase installed. Weeks 8–9: plastering and second fix. Weeks 10–12: bathroom tiling, decoration, building control's final inspection and handover with certificates. You stay in the house throughout: the structural work happens from the scaffold and roof, the breakthrough into the landing comes late in the programme, and floors and stairs are protected while we work. Your project manager gives you a weekly update against the written programme.",
      },
    ],
    localAreas: ["Beckenham", "Shortlands", "Orpington", "Chislehurst", "Petts Wood", "West Wickham", "Hayes", "Bromley Common", "Bickley", "Farnborough", "Sundridge Park", "Elmfield", "Keston", "Bromley North"],
    pricing: [
      { item: "Rooflight-only conversion", range: "£25,000 – £35,000" },
      { item: "Rear dormer (semi-detached)", range: "£40,000 – £55,000" },
      { item: "Hip-to-gable with rear dormer", range: "£45,000 – £65,000" },
      { item: "L-shaped conversion (with outrigger)", range: "£65,000 – £85,000" },
      { item: "En-suite or shower room addition", range: "+£6,000 – £12,000" },
      { item: "Building regs drawings, calcs & sign-off", range: "Included" },
      { item: "Party Wall notices & surveyor coordination", range: "Included" },
    ],
    eyebrow: "Bromley & South London",
    heroHeading: "Loft Conversion Bromley",
    heroSubtitle:
      "Add a bedroom, en-suite or home office above your head — without moving house. Trusted loft conversion specialists serving Bromley and the surrounding South London boroughs.",
    intro:
      "Bromley's mix of Edwardian semis, 1930s suburban homes and larger detached properties makes it one of South London's best boroughs for loft conversions — most have the roof pitch and head height to convert without major structural work. ARZ Construction has completed dormer, hip-to-gable and rooflight conversions across Bromley, Shortlands, Beckenham and Orpington, working within permitted development rights wherever possible to keep your project moving fast.",
    image: loftImg,
    highlights: [
      "Dormer, hip-to-gable, L-shaped and rooflight builds",
      "Structural steelwork and engineer's calculations",
      "Staircase design and joinery",
      "En-suite bathrooms and storage joinery",
      "Insulation and fire-safety compliance",
      "Building regulations drawings and sign-off",
      "Party Wall notices and neighbour liaison",
      "Written workmanship guarantee at handover",
    ],
    faqs: [
      {
        q: "Do I need planning permission for a loft conversion in Bromley?",
        a: "Most loft conversions in Bromley fall within permitted development rights — up to 40m³ of additional roof space on a terrace, 50m³ on a semi-detached or detached house — and do not need a full planning application. Exceptions include properties in one of Bromley's conservation areas, listed buildings, flats and maisonettes, or builds that exceed the permitted volume allowance. We assess your specific property on the initial visit.",
      },
      {
        q: "My house is in a Bromley conservation area — can I still convert the loft?",
        a: "Yes, but expect a full planning application rather than permitted development. In conservation areas such as Chislehurst, Bickley, Sundridge Park and Elmfield, permitted development rights for roof alterations are restricted, so most visible roofline changes need consent from Bromley Council. We prepare the drawings and planning statement, submit the application and manage the process — house applications are usually determined within about eight weeks.",
      },
      {
        q: "How much does a loft conversion cost in Bromley?",
        a: "Rooflight conversions typically start from around £25,000–£35,000. Rear dormer conversions range from £40,000–£55,000, a hip-to-gable with rear dormer £45,000–£65,000, and an L-shaped conversion £65,000–£85,000 depending on size and specification. We provide an itemised written quotation before any work starts, so you can see exactly what is included.",
      },
      {
        q: "How much is a loft conversion per square metre in Bromley?",
        a: "Budget roughly £2,000–£3,000 per m² of new floor area depending on the conversion type and finish. As a worked example, a £45,000 hip-to-gable dormer creating 20m² of usable space works out around £2,250 per m². The rate drops slightly on larger conversions because the fixed costs — scaffold, steelwork design, building control — spread over more space.",
      },
      {
        q: "How long does a loft conversion take in Bromley?",
        a: "A standard dormer or hip-to-gable conversion typically takes 8–12 weeks from start on site, and a rooflight conversion four to six weeks. If a full planning application is needed, add around eight weeks before scaffold can go up. Your written quotation includes a clear programme, and your project manager reports progress against it weekly.",
      },
      {
        q: "Will I have to move out during the build?",
        a: "No. The structural work — opening the roof, steelwork, dormer or gable construction — happens from the scaffold and the roof void, and the breakthrough into the landing is one of the last major steps. Floors and stairs are protected, dust screens are fitted and working hours are agreed in writing before work starts, so most Bromley families stay at home throughout.",
      },
      {
        q: "Can you build a loft conversion on a semi-detached house in Bromley?",
        a: "Yes — Bromley's 1930s semi-detached homes are ideal for hip-to-gable or dormer conversions. Because the steelwork usually bears into the shared party wall, the Party Wall etc. Act 1996 applies: we serve the notices on your neighbour at least two months before work starts and coordinate the surveyor where an award is needed.",
      },
      {
        q: "Do I need a structural engineer for a loft conversion?",
        a: "Yes for any dormer, hip-to-gable or L-shaped conversion, because the floor and roof structure are being altered. The engineer's calculations are coordinated by us and included in the quotation. Rooflight-only conversions sometimes still need checked joists depending on the existing ceiling structure, which we confirm at the survey.",
      },
      {
        q: "Do you handle building control?",
        a: "Yes. We prepare the building regulations drawings, book each inspection with Bromley Council building control, attend on your behalf and hand over the completion certificate at the end of the project. Regulations cover structure, fire safety and escape routes, insulation, ventilation and the staircase.",
      },
      {
        q: "What warranty do you provide?",
        a: "You receive a written workmanship guarantee at handover together with the building control completion certificate. Structural work is designed and calculated by a structural engineer, and all electrical work is installed and certified by a qualified electrician in line with Part P requirements.",
      },
      {
        q: "Will my loft conversion add value to my Bromley home?",
        a: "A well-executed loft conversion is commonly estimated by local estate agents to add 15–25% to a property's value in South London, and Bromley's strong family-home market means an extra bedroom or en-suite is especially sought after by buyers. You also avoid stamp duty, agent fees and legal costs on two transactions.",
      },
      {
        q: "What if my loft is too low to convert?",
        a: "2.2m of clear head height from floor to ridge is the usual minimum for a room you can stand up in. If your loft falls short, options include raising the ridge (which needs planning permission) or, on some homes, no conversion being sensible at all. We measure it at the free survey and tell you honestly whether a viable conversion exists.",
      },
    ],
    relatedSlugs: ["loft-conversions", "house-renovations", "bathroom-renovations"],
  },
  {
    slug: "house-extension-bromley",
    title: "House Extension Bromley",
    metaTitle: "House Extensions Bromley | Rear & Wrap-Around Builders | ARZ",
    metaDescription:
      "Rear, side-return, wrap-around and two-storey house extensions across Bromley and Beckenham — typical 2026 costs, planning guidance and fixed written quotes.",
    localParagraphs: [
      {
        heading: "Extensions Built for Bromley's Plots and Homes",
        text: "Bromley's larger plots make it one of South London's best boroughs for house extensions. The wide roads and generous gardens of Petts Wood, Bickley and West Wickham suit side and wrap-around builds; the Edwardian and Victorian terraces around Beckenham and Bromley North take classic side-return kitchen-diners; and the detached homes of Chislehurst, Farnborough and Keston regularly accommodate two-storey additions. Because the plots are bigger, most Bromley extensions can be planned as one continuous project — groundworks, structure, roof, glazing, services and finishes under a single contract, with one project manager accountable from survey to handover.",
      },
      {
        heading: "Rear Extensions",
        text: "A single-storey rear extension is the most common way to gain a kitchen-diner in Bromley. Under permitted development you can typically extend up to 3m on an attached house and 4m on a detached one without prior approval, or up to 6m and 8m respectively through the neighbour consultation scheme, provided the build stays under 4m high and materials match the existing house. Beyond those limits, or on a boundary with a neighbour's window, you need planning permission. A single-storey rear extension in Bromley typically costs £1,800–£2,500 per m², and a 25m² kitchen-diner usually lands between £45,000 and £65,000 fully finished, including bifold doors and a flat-roof lantern or rooflights.",
      },
      {
        heading: "Side-Return and Side Extensions",
        text: "On Beckenham and Bromley North terraces, the side return is often the cheapest way to transform a narrow galley kitchen — a slim extension down the side path, usually 1–2m wide, turning two cramped rooms into one usable kitchen-diner. Permitted development allows single-storey side extensions up to 4m high, as long as the extension is no more than half the width of the original house; anything wider, or two-storey, needs planning permission. On Bromley's wide plots, a full side extension is also a common way to add a utility room, downstairs shower room or a garage conversion link — typically £40,000–£60,000 depending on width and services.",
      },
      {
        heading: "Wrap-Around Extensions",
        text: "A wrap-around extension combines a rear extension with a side return, wrapping around the corner of the house to create one large open-plan kitchen-living space with garden views on two sides. It is the single highest-impact extension available on a Bromley semi or detached home, and on many properties it still falls within permitted development provided the combined footprint stays inside the limits. The extra steelwork, roof junctions and drainage alterations are what push the cost above a simple rear extension — most wrap-arounds in Bromley run £60,000–£90,000. We price the steels accurately at survey stage rather than discovering them mid-build.",
      },
      {
        heading: "Two-Storey Extensions",
        text: "A two-storey extension adds a bedroom, bathroom or study above the new ground-floor space — the best value route when you need both living space and an extra bedroom without moving. Two-storey extensions normally need full planning permission in Bromley, including a design that respects the street scene and matches the existing brickwork and roof. Costs typically run £70,000–£110,000 depending on the footprint, the number of new openings and the specification. Structurally they are more involved: the upper floor needs its own beams and floor structure, the roof has to tie into the existing house, and the foundation design has to carry two storeys.",
      },
      {
        heading: "Planning Permission and Permitted Development in Bromley",
        text: "Most single-storey rear and side extensions in Bromley can be built under permitted development, subject to the depth, height, width and materials limits above, and to the house not being a flat or maisonette. Two-storey extensions, extensions that exceed the limits, and anything inside one of the borough's conservation areas — Chislehurst, Bickley, Sundridge Park, Elmfield and parts of Beckenham among them — need a full planning application to Bromley Council. In conservation areas the design has to respect the character of the area, which usually means matching brickwork, window proportions and roof materials. We prepare the drawings, submit the application and manage the process; house applications are usually determined within about eight weeks. As with lofts, we recommend a Lawful Development Certificate where the build relies on permitted development, because it proves the extension is lawful when you come to sell.",
      },
      {
        heading: "Foundations, Building Regulations and Party Walls",
        text: "Building regulations apply to every extension regardless of planning, and they are where cheap quotes usually hide their gaps. They cover the foundation design and depth, the damp-proof course and membrane, structural steelwork and lintels, roof structure and insulation, drainage alterations, ventilation, and the electrical and plumbing installations. We coordinate the structural engineer and book each inspection with Bromley Council building control through to the completion certificate. Where the new foundations run within 3m of a neighbour's structure and deeper than its foundations — or within 6m where they would cut a 45° line down from the neighbour's foundations — the Party Wall etc. Act 1996 requires notice, served at least one month before excavation starts. Work on a shared party wall needs two months' notice. We serve the notices and coordinate the surveyor where an award is needed.",
      },
      {
        heading: "How the Build Runs: Groundworks to Handover",
        text: "A single-storey extension in Bromley typically runs 12–16 weeks on site; a two-storey extension 16–22 weeks. Weeks 1–2: site set-up, protection, demolition of the rear wall or existing structures and excavation for foundations. Weeks 3–4: foundations poured, oversite and drainage alterations, building control inspection. Weeks 5–8: brickwork and blockwork, structural steelwork and lintels, roof structure and covering. Weeks 9–10: bifold doors, windows and rooflights fitted, making the extension weather-tight. Weeks 11–13: first fix electrics and plumbing, insulation, plastering. Weeks 14–16: kitchen fit, second fix, tiling, decoration, snagging and handover with certificates. You get a written programme before work starts, a weekly update from your project manager, dust screens and floor protection, and staged payments against completed milestones, so you always know what stage your money is buying.",
      },
    ],
    localAreas: ["Beckenham", "Shortlands", "Orpington", "Chislehurst", "Petts Wood", "West Wickham", "Hayes", "Bickley", "Bromley Common", "Elmstead", "Sundridge Park", "Farnborough", "Keston", "Bromley North"],
    pricing: [
      { item: "Single-storey rear extension", range: "£1,800 – £2,500 per m²" },
      { item: "25m² kitchen-diner extension", range: "£45,000 – £65,000" },
      { item: "Side-return extension", range: "£40,000 – £60,000" },
      { item: "Wrap-around extension", range: "£60,000 – £90,000" },
      { item: "Double-storey extension", range: "£70,000 – £110,000" },
      { item: "Planning & building regs handling", range: "Included" },
      { item: "Structural steel design & calculations", range: "Included" },
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
      "Brickwork and roof materials matched to the original house",
      "Bifold doors and flat roof rooflights",
      "Building regulations and Building Control sign-off",
      "Party Wall notices and neighbour liaison",
      "Full project management, start to finish",
    ],
    faqs: [
      {
        q: "Do I need planning permission for a house extension in Bromley?",
        a: "Many single-storey rear extensions in Bromley fall under permitted development — up to 3m on an attached house and 4m on a detached one without prior approval, or 6m and 8m through the neighbour consultation scheme. Side extensions are limited to half the width of the original house. Two-storey extensions, anything exceeding those limits, and builds in Bromley's conservation areas typically need planning permission. We advise you clearly at the first visit.",
      },
      {
        q: "How much does a house extension cost in Bromley?",
        a: "A single-storey rear extension in South London typically costs between £1,800 and £2,500 per m², depending on specification. A 25m² kitchen extension might range from £45,000 to £65,000 fully finished, a wrap-around from £60,000 to £90,000, and a two-storey extension from £70,000 to £110,000. We provide detailed, itemised quotes.",
      },
      {
        q: "How long does a house extension take to build?",
        a: "A single-storey extension typically takes 12–16 weeks on site. Two-storey extensions are usually 16–22 weeks. If planning permission is required, add around eight weeks for the application before work can start. Your quotation includes an indicative programme from start to handover, and your project manager reports against it weekly.",
      },
      {
        q: "Can you match my existing brickwork?",
        a: "Yes. We source bricks to match your existing house, including reclaimed stock where needed, and match mortar colour and pointing style. Matching the original is important for both aesthetics and planning compliance — particularly in conservation areas, where planners will expect the extension to read as a later addition that respects the original building.",
      },
      {
        q: "What is a Party Wall Agreement and do I need one?",
        a: "If your extension's foundations are within 3m of a neighbour's structure and deeper than theirs (or within 6m for deeper footings), the Party Wall etc. Act 1996 requires notice at least one month before excavation starts; work on a shared party wall needs two months' notice. We serve the notices and can recommend a qualified surveyor where an award is needed.",
      },
      {
        q: "What is a wrap-around extension?",
        a: "A wrap-around extension combines a rear extension with a side return, wrapping around the corner of your home to create one large open-plan kitchen-diner. On many Bromley semis it can be built under permitted development. It costs more than a simple rear extension due to the additional steelwork, roof junctions and drainage alterations — typically £60,000–£90,000.",
      },
      {
        q: "Do I need an architect for my extension?",
        a: "Not necessarily. We prepare the design and building regulations drawings in-house, and coordinate a structural engineer for the steelwork and foundation design. If your project needs full planning permission and you would like a wider choice of design options, we are happy to work with an architect you appoint — we will give you a clear brief and coordinate with them.",
      },
      {
        q: "Can I stay in my house during an extension build?",
        a: "Yes — most clients do. A rear or wrap-around kitchen extension means your kitchen may be out of use for part of the programme, so many families set up a temporary kitchen in another room. Dust screens, floor protection and agreed working hours keep disruption contained, and the roof and glazing go on early so the house is weather-tight before the internal work begins.",
      },
      {
        q: "Do you handle building regulations?",
        a: "Yes. We prepare the building regulations drawings, coordinate structural calculations, book every inspection with Bromley Council building control, attend on your behalf and hand over the completion certificate. Regulations cover foundations, damp-proofing, structure, insulation, drainage, ventilation and electrical work.",
      },
      {
        q: "Can a side extension be two-storey?",
        a: "Yes, but a two-storey side extension needs planning permission — permitted development only covers single-storey side extensions up to 4m high and no more than half the width of the original house. Two-storey side extensions are also held to a stricter design standard by planners, particularly on corner plots and in conservation areas.",
      },
      {
        q: "What about drainage and manholes?",
        a: "Drainage is one of the details cheap quotes omit. If a manhole or drain run falls under the new footprint, it may need relocating or building over with a sealed cover, and any new connection has to be inspected by building control. We survey the drainage at the start, include any necessary alterations in the written quote and manage the inspection.",
      },
      {
        q: "Do you build house extensions outside Bromley?",
        a: "Yes. As well as all of Bromley, we build extensions across Croydon, Purley, Coulsdon, Beckenham, Orpington and South London, plus the Surrey-border towns. If you are within roughly 15 miles of Croydon, we cover your property.",
      },
    ],
    relatedSlugs: ["extensions", "house-renovations", "kitchen-renovations"],
  },
  {
    slug: "house-renovations-croydon",
    title: "House Renovations Croydon",
    metaTitle: "House Renovations Croydon | Full Refurbishment Builders",
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
    metaTitle: "Kitchen Renovations Croydon | Fitters & Contractors from £8k",
    metaDescription:
      "Kitchen renovations and fitting in Croydon — strip-out, layout changes, plumbing, electrics, worktops and tiling. Refits from £8,000. Free itemised quote.",
    localParagraphs: [
      {
        heading: "Kitchen Renovations Across Croydon",
        text: "Most Croydon kitchens are constrained by the building rather than the budget: galley layouts in the Victorian terraces of Thornton Heath and Norbury, a single run of units in the 1930s semis of Shirley and Sanderstead, or a narrow side return that could be opened into a dining space. We measure the room properly, agree where the sink, hob and appliances will sit, and confirm drainage and cable routes before anything is stripped out — because moving a soil stack or a consumer unit after tiling has started is what turns a refit into a rebuild.",
      },
      {
        heading: "Kitchen Fitting and Installation",
        text: "Fitting is where most of the visible quality is decided. Carcasses are levelled and scribed to uneven walls rather than packed out with offcuts, units are plumbed and squared so doors sit true months later, end panels and cornices are cut on site to fit the room, and appliances are integrated with the correct clearances and ventilation. Whether the kitchen is a bespoke joinery commission or a flat-pack range from a national retailer, the fit is what makes it look and wear well — and it is the part most homeowners cannot inspect until it is too late.",
      },
      {
        heading: "Knock-Throughs, Steels and Open-Plan Kitchens",
        text: "Opening a kitchen into a dining room or rear reception is the single biggest change you can make to a Croydon terrace or semi. It almost always requires a steel beam, and sometimes a post or padstone, sized by a structural engineer — the wall you remove is frequently load-bearing even when it looks thin. We arrange the calculations, submit the building regulations application, and confirm whether the wall is shared with a neighbour, in which case a Party Wall award applies. Where the opening meets an existing extension, we check the lintel and roof structure before cutting.",
      },
      {
        heading: "Plumbing, Drainage and Electrics",
        text: "Moving a sink across the room is easy on paper and constrained in practice: waste pipes still need a fall of roughly 1 in 40, and the soil stack is where it is. We check what the existing drainage can take before agreeing a layout, advise on boiler relocation and whether the supply can carry an additional shower or utility, and plan circuits for the oven, hob, extractor, dishwasher and any underfloor heating. Gas work is carried out by a Gas Safe registered engineer and electrical work is certified, so you receive the paperwork a future buyer will ask for.",
      },
      {
        heading: "Worktops, Tiling and Finishing",
        text: "Worktops are templated after the units are installed and levelled, not measured from a drawing, which is why the joints close cleanly and the upstands sit flush. We fit quartz, compact laminate, solid surface and timber, cut sink and hob apertures on site or from a template, and agree splashback heights and socket positions before tiling starts. Floors are levelled and protected through the fit, thresholds are finished, and the completed room is walked with you against a snag list before we hand the keys back.",
      },
      {
        heading: "Kitchens in Croydon's Older Homes",
        text: "Period properties bring their own set of problems: floors that slope by 30mm across a room, lath-and-plaster walls that will not hold a wall cabinet without extra support, chimney breasts that dictate where the hob can go, and ceilings low enough to rule out a tall larder unit. We survey for these before quoting rather than discovering them during the fit, and where asbestos is suspected in old floor tiles, board or artex, we arrange testing and licensed removal before work starts.",
      },
      {
        heading: "How Long a Croydon Kitchen Renovation Takes",
        text: "A straightforward refit with no layout, drainage or wiring changes is usually two to three weeks on site. A full renovation with new circuits, moved plumbing and tiling typically runs three to five weeks, and a knock-through with steelwork adds roughly a week for the structural and inspection stages. Units need to be ordered before strip-out begins — the most common cause of a stalled kitchen is a delivery date that arrives after the old one has gone — so we agree the order date and lead times with you at the planning stage and programme the trades around them.",
      },
      {
        heading: "Living in the House While the Kitchen Is Rebuilt",
        text: "Expect the kitchen to be out of action for most of the programme. We agree a temporary arrangement with you at the planning stage — a kettle, fridge and microwave in another room, and where the washing machine can live for a fortnight — and keep the working area screened with dust sheets and floor protection. Waste is removed as it is generated rather than stockpiled in the garden, working hours are confirmed in writing, and the team leaves the route to the bathroom and front door clear at the end of each day.",
      },
    ],
    localAreas: ["South Croydon", "Purley", "Shirley", "Sanderstead", "Thornton Heath", "Addiscombe", "Norbury", "Selhurst", "Waddon", "Woodside", "Coulsdon", "Kenley", "Selsdon", "New Addington"],
    pricing: [
      { item: "Kitchen refit (no layout change)", range: "£8,000 – £15,000" },
      { item: "Full kitchen renovation with layout change", range: "£12,000 – £28,000" },
      { item: "Kitchen/diner knock-through (with steel)", range: "£2,500 – £6,000" },
      { item: "Electrics, first and second fix", range: "£1,500 – £3,500" },
      { item: "Worktop templating and fitting", range: "Included in quotation" },
      { item: "Tiling, splashbacks and second fix", range: "Included in quotation" },
      { item: "Waste removal and floor protection", range: "Included in quotation" },
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
      "Steel beams and structural openings",
      "First and second fix electrics",
      "Worktop templating and fitting",
      "Tiling, splashbacks and flooring",
      "Appliance fitting and commissioning",
      "Gas Safe and certified electrical work",
    ],
    faqs: [
      {
        q: "How long does a kitchen renovation take in Croydon?",
        a: "A straightforward refit with no layout or drainage changes is usually 2–3 weeks. A full renovation involving layout changes, new circuits and plumbing alterations typically runs 3–5 weeks, and a knock-through with steelwork adds around a week for the structural and inspection stages. Units need to be ordered before strip-out begins, so the lead time is part of the programme rather than an afterthought.",
      },
      {
        q: "How much does a kitchen renovation cost in Croydon?",
        a: "A refit without layout changes typically costs £8,000–£15,000. A full renovation with new services, layout changes and tiling usually falls between £12,000 and £28,000. A structural knock-through adds £2,500–£6,000, and units, worktops and appliances are itemised separately so you can see the labour and the materials side by side.",
      },
      {
        q: "Can you move the sink, hob or boiler?",
        a: "Usually yes, but it depends on drainage falls, the position of the soil stack and the capacity of the existing supply. A sink can move anywhere the waste can still fall towards the stack; a boiler move also depends on flue position and gas supply. We check those constraints at the survey and tell you before work starts whether a proposed layout is practical or needs adjusting.",
      },
      {
        q: "Do you supply the kitchen units?",
        a: "You can supply your own kitchen from any retailer and we will install it, or we can work with suppliers we have used before. Either way, we confirm unit sizes, appliance specifications and service positions against the agreed layout before ordering, so nothing arrives that will not fit the room or the plumbing.",
      },
      {
        q: "Do I need permission to knock through a kitchen wall?",
        a: "Removing an internal wall rarely needs planning permission, but it almost always needs building regulations approval because the wall is usually load-bearing and the opening needs a correctly sized steel beam. If the wall is shared with a neighbour, or new foundations come within 3–6 metres of theirs, the Party Wall etc. Act 1996 also applies. We arrange the calculations, the application and the notices.",
      },
      {
        q: "Do you do bespoke kitchen installation?",
        a: "Yes. We install bespoke joinery kitchens as well as off-the-shelf ranges, and we are happy to work to a designer's drawings or to plan the layout with you directly. Bespoke installations usually need a survey before the joinery is ordered, because chimney breasts, boxing and uneven walls all affect the dimensions, and a millimetre matters once the panels are cut.",
      },
      {
        q: "Are the gas and electrical works certified?",
        a: "Yes. Gas work is carried out by a Gas Safe registered engineer and you receive the notification and test paperwork; electrical work is completed to the current wiring regulations and certified, with the relevant building regulations notification made where a new circuit is added. Those certificates are what a buyer's solicitor asks for when the house is sold.",
      },
      {
        q: "What worktops do you fit?",
        a: "Quartz, compact laminate, solid surface, granite and timber, plus laminate where the budget calls for it. Templates are taken after the units are levelled so joints and upstands close cleanly, and sink and hob apertures are cut to the appliance manufacturer's template. We will talk you through the trade-offs — quartz is harder wearing but brittle at an overhang, timber needs maintenance.",
      },
      {
        q: "Can you deal with asbestos in an old kitchen?",
        a: "If asbestos is suspected in floor tiles, board, pipe lagging or artex, it is tested before strip-out and, where confirmed, removed by a licensed contractor before we start. Older Croydon properties regularly contain it, and cutting into it unknowingly is the risk worth paying to avoid. Testing and removal are quoted separately because the cost depends entirely on what is found.",
      },
      {
        q: "Will the kitchen be usable during the work?",
        a: "Expect the kitchen to be out of action for most of the programme. We agree a temporary arrangement with you at the planning stage — a kettle, fridge and microwave in another room, and where the washing machine can live for a fortnight — and keep the working area screened and the route to the bathroom clear at the end of each day.",
      },
      {
        q: "Do you provide a guarantee on kitchen renovations?",
        a: "Yes — you receive a written workmanship guarantee covering the installation, alongside the manufacturer warranties for units, worktops and appliances. Gas and electrical certificates and any building regulations completion notice are handed over together at the end, so the whole job is documented rather than left as a verbal promise.",
      },
      {
        q: "Do you fit kitchens outside Croydon?",
        a: "Yes. As well as all of Croydon, we fit kitchens in Purley, Coulsdon, Kenley, Sanderstead, Norbury and across South London. If you are within roughly 15 miles of Croydon, we cover your property — the survey visit confirms access, parking and where materials can be delivered.",
      },
    ],
    relatedSlugs: ["kitchen-renovations", "house-renovations", "plumbing"],
  },
  {
    slug: "bathroom-renovations-croydon",
    title: "Bathroom Renovations Croydon",
    metaTitle: "Bathroom Renovations Croydon | Bathroom Fitters | ARZ",
    metaDescription:
      "Bathroom renovations in Croydon — tanking, plumbing, tiling, underfloor heating and sanitaryware fitting. Free, itemised quotations from ARZ Construction.",
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
  // ── Surrey & North Downs town pages ──────────────────────────────────
  // Same template as the Croydon/Bromley pages. These target long-tail
  // "loft conversion <town>" searches that the site already ranks for without
  // a dedicated page.
  {
    slug: "loft-conversion-esher",
    title: "Loft Conversion Esher",
    metaTitle: "Loft Conversion Esher KT10 | Dormer & Hip-to-Gable Builders",
    metaDescription:
      "Loft conversions in Esher KT10 — dormer, hip-to-gable and rooflight builds with typical costs, Elmbridge planning guidance and a free itemised quotation.",
    localParagraphs: [
      {
        heading: "Built for Esher's 1930s Semis and Edwardian Homes",
        text: "Esher's housing stock is close to ideal for loft conversions. The 1930s semis around Esher Green, Douglas Road and the roads off Lammas Lane have the roof pitch and footprint for a hip-to-gable conversion or a rear dormer — the two builds that add the most usable headroom without touching the ridge line. The larger Edwardian and Victorian homes towards Claremont and Sandown Park generally support a loft that takes a double bedroom plus en-suite comfortably.",
      },
      {
        heading: "Planning in Esher — Elmbridge Borough Council",
        text: "Most loft conversions in Esher fall within permitted development: up to 40m³ of additional roof volume for terraced houses and 50m³ for semi-detached and detached homes, with no extension beyond the plane of the front roof slope. Parts of Esher sit in conservation areas or under Article 4 directions that remove those rights, and Elmbridge applies them street by street. We check your address against the council's constraints before you commit, prepare the drawings where a full application is needed and manage building control sign-off.",
      },
      {
        heading: "What Your Esher Build Includes",
        text: "Every ARZ loft conversion covers structural steelwork, the dormer or hip-to-gable build, a purpose-made staircase, insulation to current Part L standards, fire doors and alarms, first and second fix electrics and plumbing, plastering ready for decoration, and a written workmanship guarantee on completion. Party Wall notices for adjoining semis are served in the first week so the programme is not held up.",
      },
    ],
    localAreas: ["Esher", "Claygate", "Hinchley Wood", "Thames Ditton", "Long Ditton", "Oxshott", "Cobham", "Hersham", "East Molesey", "West Molesey"],
    pricing: [
      { item: "Rooflight-only conversion", range: "£25,000 – £35,000" },
      { item: "Rear dormer (semi-detached)", range: "£40,000 – £55,000" },
      { item: "Hip-to-gable with rear dormer", range: "£45,000 – £65,000" },
      { item: "En-suite or shower room addition", range: "+£6,000 – £12,000" },
      { item: "Building regs drawings & sign-off", range: "Included" },
    ],
    eyebrow: "Esher & Elmbridge, Surrey",
    heroHeading: "Loft Conversion Esher",
    heroSubtitle:
      "Add a bedroom and en-suite above your head in KT10 — loft conversions built by a team that checks Elmbridge's planning rules before you spend a penny.",
    intro:
      "A loft conversion is usually the cheapest way to add a genuine extra bedroom to an Esher home — no move, no stamp duty, no new mortgage. ARZ Construction builds dormer, hip-to-gable and rooflight conversions across Esher and the KT10 postcodes, working within permitted development wherever the property allows and handling the planning and party wall paperwork when it doesn't.",
    image: loftImg,
    highlights: [
      "Dormer, hip-to-gable and Velux rooflight builds",
      "Staircase design and joinery",
      "En-suite bathrooms and storage joinery",
      "Insulation and fire-safety compliance",
      "Elmbridge planning and building regs handled",
      "Structural engineer coordination included",
    ],
    faqs: [
      {
        q: "How much does a loft conversion cost in Esher?",
        a: "Rooflight conversions typically start from around £25,000–£35,000. Dormer conversions range from £40,000–£55,000 and a hip-to-gable with rear dormer from £45,000–£65,000, depending on size and specification. Your Esher quote is itemised in writing after a free survey, so you can see exactly what is included.",
      },
      {
        q: "Do I need planning permission for a loft conversion in Esher?",
        a: "Most loft conversions fall within permitted development and do not need full planning permission. Exceptions include homes in conservation areas, listed buildings, Article 4 directions and builds that exceed the volume allowance. We check your specific address against Elmbridge Borough Council's constraints at the first visit.",
      },
      {
        q: "How long does a loft conversion take in Esher?",
        a: "A standard dormer loft conversion typically takes 8–12 weeks on site. Adding a hip-to-gable usually extends the programme by two to three weeks. Your written quotation includes a clear timeline for your scope of work.",
      },
      {
        q: "Do I need a party wall agreement in Esher?",
        a: "Dormer and hip-to-gable steelwork usually bears on the party wall, so the Party Wall etc. Act 1996 applies on most Esher semis. We serve the notices on your neighbours in the first week and manage the surveyor process as part of the job.",
      },
      {
        q: "Will a loft conversion add value to my Esher home?",
        a: "A well-executed loft conversion is commonly estimated by local estate agents to add 15–25% to a property's value in South London and Surrey. An extra bedroom with en-suite is one of the highest-return home improvements available, and it avoids the cost of moving.",
      },
      {
        q: "Do you work in Esher and the surrounding villages?",
        a: "Yes — we build across Esher, Claygate, Hinchley Wood, Thames Ditton, Long Ditton, Oxshott and Cobham. If your postcode is KT10 or nearby, we can survey your property at no cost.",
      },
    ],
    relatedSlugs: ["loft-conversions", "bathroom-renovations", "house-renovations"],
    isTown: true,
    areaServed: ["Esher", "Claygate", "Hinchley Wood", "Thames Ditton", "Oxshott", "Elmbridge", "Surrey"],
  },
  {
    slug: "loft-conversion-cobham",
    title: "Loft Conversion Cobham",
    metaTitle: "Loft Conversion Cobham KT11 | Mansard & Dormer Loft Builders",
    metaDescription:
      "Loft conversions in Cobham KT11 — mansard, L-shaped and dormer builds for larger detached homes, Elmbridge planning handled, free itemised quotation.",
    localParagraphs: [
      {
        heading: "Mansard and L-Shaped Conversions for Cobham's Larger Homes",
        text: "Cobham's housing stock — the 1920s and 1930s detached and semi-detached homes around the High Street, Painshill and Fairmile — has the roof volume for conversions that add a master suite rather than just a bedroom. A mansard uses the full roof space and gives near-vertical walls; an L-shaped dormer works over a main roof and rear outrigger together. Both are common on KT11 homes and both need more design input than a standard dormer.",
      },
      {
        heading: "Planning in Cobham — Elmbridge Borough Council",
        text: "Permitted development allows up to 50m³ of additional roof volume on detached and semi-detached homes (40m³ on terraces), provided the roof does not extend beyond the front slope and no balcony or veranda is added. Mansards and larger schemes usually need a full householder application. Parts of Cobham sit in a conservation area or under Article 4 directions, so we check your exact address with Elmbridge before quoting and handle drawings and submission where planning is required.",
      },
      {
        heading: "Loft and Extension as One Project",
        text: "Many Cobham homeowners combine a loft conversion with a ground-floor extension. Running both as one project means one set of scaffolding, one programme and one project manager, rather than two contractors tripping over each other. We price the whole scope in a single itemised quotation so you can see how the costs split.",
      },
    ],
    localAreas: ["Cobham", "Oxshott", "Stoke d'Abernon", "Downside", "Fairmile", "Effingham", "East Horsley", "Esher", "Walton-on-Thames", "Leatherhead"],
    pricing: [
      { item: "Rear dormer (semi-detached)", range: "£40,000 – £55,000" },
      { item: "Hip-to-gable with rear dormer", range: "£45,000 – £65,000" },
      { item: "L-shaped dormer", range: "Quoted after survey" },
      { item: "Mansard loft conversion", range: "Quoted after survey" },
      { item: "En-suite or shower room addition", range: "+£6,000 – £12,000" },
    ],
    eyebrow: "Cobham & Elmbridge, Surrey",
    heroHeading: "Loft Conversion Cobham",
    heroSubtitle:
      "Mansard, L-shaped and dormer loft conversions for Cobham's larger homes — designed around Elmbridge's planning rules, priced in one itemised quote.",
    intro:
      "Cobham homes tend to have the roof volume that makes a loft conversion genuinely generous — space for a master bedroom with dressing area and en-suite, not just a box room. ARZ Construction designs and builds loft conversions across Cobham and KT11, from straightforward rear dormers on the semis to mansard and L-shaped schemes on detached homes, with planning and party wall work managed in-house.",
    image: extensionImg,
    highlights: [
      "Mansard, L-shaped dormer and hip-to-gable builds",
      "Structural steelwork and roof alterations",
      "Master suites, dressing areas and en-suites",
      "Full householder planning applications",
      "Loft and ground-floor extension as one project",
      "Building regulations sign-off managed",
    ],
    faqs: [
      {
        q: "How much does a loft conversion cost in Cobham?",
        a: "Rear dormers typically run £40,000–£55,000 and a hip-to-gable with rear dormer £45,000–£65,000. L-shaped and mansard conversions on larger detached homes depend on the roof volume and structural work involved, so they are quoted individually after a survey. Every quote is itemised in writing before work starts.",
      },
      {
        q: "Do mansard loft conversions need planning permission in Cobham?",
        a: "Usually yes. A mansard changes the roof shape beyond the permitted development limits, so it needs a householder application to Elmbridge Borough Council. We prepare the drawings and submit the application as part of the project.",
      },
      {
        q: "Can you build a loft conversion and an extension together?",
        a: "Yes, and many Cobham clients do. Combining both means one scaffold, one site team and one programme. The whole scope is priced in a single itemised quotation so you can see the cost of each element.",
      },
      {
        q: "How long does a loft conversion take in Cobham?",
        a: "A standard dormer takes 8–12 weeks on site. Mansard and L-shaped conversions typically take longer because of the roof alterations and usually the planning stage — your written quotation sets out the programme for your specific scope.",
      },
      {
        q: "Do I need a party wall agreement in Cobham?",
        a: "For semis and terraces, yes — the steelwork generally bears on the party wall. We serve the notices in the first week and coordinate with the party wall surveyor. Detached homes usually don't need one unless excavation is close to a boundary.",
      },
      {
        q: "Do you cover the villages around Cobham?",
        a: "Yes — we work across Cobham, Oxshott, Stoke d'Abernon, Downside, Effingham, East Horsley and the surrounding KT11 and KT postcodes.",
      },
    ],
    relatedSlugs: ["loft-conversions", "extensions", "bathroom-renovations"],
    isTown: true,
    areaServed: ["Cobham", "Oxshott", "Stoke d'Abernon", "Effingham", "Elmbridge", "Surrey"],
  },
  {
    slug: "loft-conversion-claygate",
    title: "Loft Conversion Claygate",
    metaTitle: "Loft Conversion Claygate KT10 | Dormer Loft Builders ARZ",
    metaDescription:
      "Dormer and hip-to-gable loft conversions in Claygate KT10 — Elmbridge planning and the village Neighbourhood Plan checked, free itemised quotation.",
    localParagraphs: [
      {
        heading: "The Right Loft for Claygate's Village Semis",
        text: "Claygate's 1930s semis are near-perfect loft stock: a rear dormer or hip-to-gable gives a full double bedroom and en-suite without eating into the garden, and the roof geometry on most roads off the High Street, Hare Lane and Common Road suits both. We survey the loft height and roof structure first, then recommend the build that gains the most usable space for the money rather than the one that is easiest to sell.",
      },
      {
        heading: "Planning in Claygate — Elmbridge and the Neighbourhood Plan",
        text: "Most Claygate loft conversions fall within permitted development, but two local layers matter: the village's Neighbourhood Plan sets design policies that some roads must follow, and parts of Claygate sit within a conservation area or an Article 4 direction that removes permitted development rights. We check your address against both as part of the free survey, and handle a full application where one is required.",
      },
      {
        heading: "Working on Village Roads",
        text: "Claygate's lanes are narrow and parking is limited, which affects scaffold placement and deliveries more than it affects the build itself. We plan access at survey stage — scaffold position, skip location and delivery windows — so the job does not stall on a morning when a lorry cannot get through.",
      },
    ],
    localAreas: ["Claygate", "Esher", "Hinchley Wood", "Chessington", "Oxshott", "Thames Ditton", "Long Ditton", "Tolworth", "Surbiton", "Hook"],
    pricing: [
      { item: "Rooflight-only conversion", range: "£25,000 – £35,000" },
      { item: "Rear dormer (semi-detached)", range: "£40,000 – £55,000" },
      { item: "Hip-to-gable with rear dormer", range: "£45,000 – £65,000" },
      { item: "En-suite or shower room addition", range: "+£6,000 – £12,000" },
      { item: "Building regs drawings & sign-off", range: "Included" },
    ],
    eyebrow: "Claygate & Elmbridge, Surrey",
    heroHeading: "Loft Conversion Claygate",
    heroSubtitle:
      "A bedroom and en-suite above the village — loft conversions in Claygate built around the Neighbourhood Plan and Elmbridge's planning rules.",
    intro:
      "Claygate homes are typically 1930s semis with roofs that convert beautifully — and because the village is compact, a loft is often the only way to add a bedroom without extending into a small garden. ARZ Construction builds dormer and hip-to-gable conversions across Claygate, checking the Neighbourhood Plan and Elmbridge's constraints before work is quoted.",
    image: loftImg,
    highlights: [
      "Rear dormer and hip-to-gable builds",
      "Neighbourhood Plan and conservation-area checks",
      "Staircase design and joinery",
      "En-suite bathrooms and eaves storage",
      "Insulation and fire-safety compliance",
      "Scaffold and access planning for village roads",
    ],
    faqs: [
      {
        q: "How much does a loft conversion cost in Claygate?",
        a: "Rooflight conversions start from around £25,000–£35,000. A rear dormer on a typical village semi runs £40,000–£55,000 and a hip-to-gable with rear dormer £45,000–£65,000, depending on specification. You receive an itemised written quotation after a free survey.",
      },
      {
        q: "Does Claygate's Neighbourhood Plan affect loft conversions?",
        a: "It can. The Neighbourhood Plan sets local design policies that apply on some roads, and parts of the village are within a conservation area. We check your address against both before quoting, so there are no surprises once the build starts.",
      },
      {
        q: "Do I need planning permission for a loft conversion in Claygate?",
        a: "Most fall within permitted development — up to 50m³ of additional roof volume on semis and detached homes, 40m³ on terraces — provided the front roof slope is not extended. Conservation areas, Article 4 directions and listed buildings are the usual exceptions, and we confirm which applies to your address.",
      },
      {
        q: "How long does a loft conversion take in Claygate?",
        a: "A dormer or hip-to-gable typically takes 8–12 weeks on site, with hip-to-gable builds at the longer end. Your quotation includes the programme for your scope of work.",
      },
      {
        q: "Can scaffolding be erected on a narrow Claygate road?",
        a: "Yes — we assess access at survey stage and plan scaffold placement, skip position and delivery windows around the road. If a scaffold licence is needed from the council, we arrange it before the start date.",
      },
      {
        q: "Do you cover Hinchley Wood and Chessington as well?",
        a: "Yes — we work across Claygate, Esher, Hinchley Wood, Chessington, Oxshott, Thames Ditton, Long Ditton, Tolworth, Surbiton and Hook.",
      },
    ],
    relatedSlugs: ["loft-conversions", "bathroom-renovations", "plastering-tiling"],
    isTown: true,
    areaServed: ["Claygate", "Hinchley Wood", "Chessington", "Esher", "Elmbridge", "Surrey"],
  },
  {
    slug: "loft-conversion-walton-on-thames",
    title: "Loft Conversion Walton-on-Thames",
    metaTitle: "Loft Conversion Walton-on-Thames | Dormer & Hip-to-Gable",
    metaDescription:
      "Loft conversions in Walton-on-Thames KT12 — dormer, hip-to-gable and rooflight builds near the station, Elmbridge planning handled, free itemised quotation.",
    localParagraphs: [
      {
        heading: "KT12 Housing Built for a Loft",
        text: "Walton-on-Thames has two of the best loft-conversion profiles in Surrey. The Victorian and Edwardian terraces around the station and the High Street take a rear dormer cleanly, while the 1930s semis towards Hersham and Oatlands are ideal for a hip-to-gable that gains full-width headroom. Larger riverside and Oatlands detached homes often support a mansard. We survey the roof structure and head height first, then recommend what actually gains space.",
      },
      {
        heading: "Planning in Walton — Elmbridge Borough Council",
        text: "Most conversions qualify under permitted development: up to 50m³ of added roof volume on semis and detached homes, 40m³ on terraces, no extension beyond the front roof slope and obscured glazing on side windows. Oatlands and parts of the riverside sit in conservation areas, and some streets carry Article 4 directions that remove those rights. We check your address with Elmbridge before you commit and handle any application needed.",
      },
      {
        heading: "The Commuter Maths",
        text: "With Waterloo around 25 minutes away, an extra bedroom carries a clear premium in KT12 — buyers pay for space near the station. A loft conversion delivers that bedroom without the cost of moving: no stamp duty, no legal fees and no new mortgage at today's rates. We can walk you through what the finished space is likely to be worth on your road during the survey.",
      },
    ],
    localAreas: ["Walton-on-Thames", "Hersham", "Oatlands", "Molesey", "Esher", "Cobham", "Weybridge", "Thames Ditton", "Sunbury", "Shepperton"],
    pricing: [
      { item: "Rooflight-only conversion", range: "£25,000 – £35,000" },
      { item: "Rear dormer (terrace or semi)", range: "£40,000 – £55,000" },
      { item: "Hip-to-gable with rear dormer", range: "£45,000 – £65,000" },
      { item: "En-suite or shower room addition", range: "+£6,000 – £12,000" },
      { item: "Party wall notices & awards", range: "Managed by ARZ" },
    ],
    eyebrow: "Walton-on-Thames & Elmbridge, Surrey",
    heroHeading: "Loft Conversion Walton-on-Thames",
    heroSubtitle:
      "An extra bedroom near the station, without moving. Dormer and hip-to-gable loft conversions across KT12 with Elmbridge planning handled.",
    intro:
      "Walton-on-Thames terraces and 1930s semis convert well — and in a commuter town, the extra bedroom pays for itself at resale. ARZ Construction builds dormer, hip-to-gable and rooflight loft conversions across Walton, Hersham and Oatlands, serving the KT12 postcodes from first survey to final certificate.",
    image: loftImg,
    highlights: [
      "Rear dormer and hip-to-gable builds",
      "Loft conversions for Victorian terraces",
      "Mansard options for larger detached homes",
      "Staircase design and en-suite fit-out",
      "Party wall notices for terraces and semis",
      "Elmbridge planning and building regs handled",
    ],
    faqs: [
      {
        q: "How much does a loft conversion cost in Walton-on-Thames?",
        a: "Rooflight conversions start around £25,000–£35,000. A rear dormer on a terrace or semi runs £40,000–£55,000 and a hip-to-gable with rear dormer £45,000–£65,000, depending on size and specification. Mansards on larger detached homes are quoted individually after a survey.",
      },
      {
        q: "Will a loft conversion add value in Walton-on-Thames?",
        a: "A well-finished loft is commonly estimated by local estate agents to add 15–25% to a South London or Surrey property's value, and in KT12 the premium is reinforced by station access. An extra bedroom with en-suite is one of the highest-return improvements you can make.",
      },
      {
        q: "Do terraces near Walton station need a party wall agreement?",
        a: "Yes — mid-terraces and most semis require a Party Wall Award because the steelwork bears on the shared wall. We serve the notices in the first week and coordinate with the party wall surveyor so the programme holds.",
      },
      {
        q: "How long does a loft conversion take in Walton-on-Thames?",
        a: "A standard dormer takes 8–12 weeks on site. Hip-to-gable builds usually extend that by two to three weeks, and mansards depend on planning and roof alterations. Your quotation includes an indicative programme.",
      },
      {
        q: "Do I need planning permission for a loft conversion in Walton-on-Thames?",
        a: "Most fall under permitted development. Oatlands, parts of the riverside and streets with Article 4 directions are the exceptions and need a full application. We check your exact address with Elmbridge Borough Council at the first visit.",
      },
      {
        q: "Do you cover Hersham and Oatlands?",
        a: "Yes — we work across Walton-on-Thames, Hersham, Oatlands, Molesey, Thames Ditton, Esher, Cobham, Weybridge, Sunbury and Shepperton.",
      },
    ],
    relatedSlugs: ["loft-conversions", "bathroom-renovations", "house-renovations"],
    isTown: true,
    areaServed: ["Walton-on-Thames", "Hersham", "Oatlands", "Molesey", "Elmbridge", "Surrey"],
  },
  {
    slug: "loft-conversion-egham",
    title: "Loft Conversion Egham",
    metaTitle: "Loft Conversion Egham TW20 | Hip-to-Gable & Dormer Lofts",
    metaDescription:
      "Loft conversions in Egham TW20 — dormer and hip-to-gable builds on Victorian terraces and 1930s semis, Runnymede planning handled, free itemised quote.",
    localParagraphs: [
      {
        heading: "Victorian Terraces and 1930s Semis Across TW20",
        text: "Egham's stock splits neatly into two loft-conversion types. The Victorian terraces around the High Street and Station Road take a rear dormer well, with party wall awards being the main piece of process work. The 1930s semis towards Englefield Green and Thorpe are hip-to-gable territory — full-width headroom and a genuinely usable second bedroom rather than a converted attic.",
      },
      {
        heading: "Planning in Egham — Runnymede Borough Council",
        text: "Most loft conversions sit within permitted development: 50m³ of added roof volume on semis and detached homes, 40m³ on terraces, no extension beyond the front roof slope and obscured glazing on side-facing windows. Egham's High Street conservation area and any Article 4 directions change that picture, so we check your address with Runnymede before quoting and prepare a full application where needed.",
      },
      {
        heading: "Terraces and Party Walls",
        text: "Mid-terrace conversions need a Party Wall Award before work starts, which adds a few weeks at the front end if left late. We serve the notices in the first week of instruction, so the award runs alongside drawing and structural work rather than delaying the site start.",
      },
    ],
    localAreas: ["Egham", "Englefield Green", "Thorpe", "Staines-upon-Thames", "Virginia Water", "Chertsey", "Addlestone", "Wraysbury", "Datchet", "Old Windsor"],
    pricing: [
      { item: "Rooflight-only conversion", range: "£25,000 – £35,000" },
      { item: "Rear dormer (terrace or semi)", range: "£40,000 – £55,000" },
      { item: "Hip-to-gable with rear dormer", range: "£45,000 – £65,000" },
      { item: "En-suite or shower room addition", range: "+£6,000 – £12,000" },
      { item: "Party wall notices & awards", range: "Managed by ARZ" },
    ],
    eyebrow: "Egham & Runnymede, Surrey",
    heroHeading: "Loft Conversion Egham",
    heroSubtitle:
      "Dormer and hip-to-gable conversions on Egham's terraces and 1930s semis — Runnymede planning and party wall work handled end to end.",
    intro:
      "Egham converts beautifully: Victorian terraces near the High Street and 1930s semis out towards Englefield Green both take a loft well. With Royal Holloway and the M25 on the doorstep, an extra bedroom is easy to let or sell on. ARZ Construction builds dormer and hip-to-gable loft conversions across TW20, with Runnymede planning and party wall notices managed for you.",
    image: loftImg,
    highlights: [
      "Rear dormer and hip-to-gable builds",
      "Loft conversions for mid-terraces",
      "Rental-standard en-suite bedrooms",
      "Party wall notices and awards managed",
      "Runnymede planning and building regs handled",
      "Insulation and fire-safety compliance",
    ],
    faqs: [
      {
        q: "How much does a loft conversion cost in Egham?",
        a: "Rooflight conversions start around £25,000–£35,000. A rear dormer on a terrace or semi runs £40,000–£55,000 and a hip-to-gable with rear dormer £45,000–£65,000, depending on specification. You receive an itemised written quotation after a free survey.",
      },
      {
        q: "Can you convert a mid-terrace loft in Egham?",
        a: "Yes — mid-terraces are among the most common Egham jobs. The party wall process adds a couple of weeks at the start if left late, so we serve notices in the first week of instruction and keep the site date on track.",
      },
      {
        q: "Do I need planning permission in Egham?",
        a: "Most loft conversions fall within permitted development. The High Street conservation area, listed buildings and Article 4 directions are the exceptions and need a full application. We check your address with Runnymede Borough Council before quoting.",
      },
      {
        q: "How long does a loft conversion take in Egham?",
        a: "A dormer or hip-to-gable build typically takes 8–12 weeks on site, depending on specification. Your quotation includes the programme and the inspection sequence for building control.",
      },
      {
        q: "Can the loft be built to a rental standard?",
        a: "Yes — landlords near the university often ask for a lettable en-suite bedroom. We build to that specification, including the fire separation, ventilation and finishes a rented room needs, and hand over the certificates at completion.",
      },
      {
        q: "Do you cover Englefield Green and Thorpe?",
        a: "Yes — we work across Egham, Englefield Green, Thorpe, Staines-upon-Thames, Virginia Water, Chertsey, Addlestone, Wraysbury, Datchet and Old Windsor.",
      },
    ],
    relatedSlugs: ["loft-conversions", "bathroom-renovations", "electrical"],
    isTown: true,
    areaServed: ["Egham", "Englefield Green", "Thorpe", "Staines-upon-Thames", "Runnymede", "Surrey"],
  },
  {
    slug: "loft-conversion-banstead",
    title: "Loft Conversion Banstead",
    metaTitle: "Loft Conversion Banstead SM7 | Dormer Loft Specialists",
    metaDescription:
      "Loft conversions in Banstead SM7 — dormer and hip-to-gable builds on 1930s semis, 20 minutes from our Croydon base, free itemised quotation.",
    localParagraphs: [
      {
        heading: "The Same 1930s Semis We Build Across Croydon",
        text: "Banstead's 1930s semis are the same housing stock we convert every week across Croydon and Purley — which means we already know how they are built, where the steels can go and what the lofts will and won't take. Most SM7 semis support a rear dormer or a hip-to-gable that delivers a full double bedroom with en-suite, without altering the front elevation.",
      },
      {
        heading: "Planning in Banstead — Reigate & Banstead Borough Council",
        text: "Most loft conversions fall within permitted development: up to 50m³ of additional roof volume on semis and detached homes, 40m³ on terraces, no extension beyond the plane of the front roof slope. Banstead Village is a conservation area, which removes permitted development rights on some streets, and the council applies Article 4 directions elsewhere. We check your address with Reigate & Banstead before work starts.",
      },
      {
        heading: "Twenty Minutes From Our Base",
        text: "Our base is in Croydon, roughly twenty minutes from Banstead. That matters in practice: the same team is on site every morning rather than a subcontractor travelling from another county, materials can be brought in at short notice, and the project manager can be there the same day if anything needs a decision on site.",
      },
    ],
    localAreas: ["Banstead", "Nork", "Tadworth", "Walton on the Hill", "Belmont", "Cheam", "Sutton", "Epsom Downs", "Coulsdon", "Purley"],
    pricing: [
      { item: "Rooflight-only conversion", range: "£25,000 – £35,000" },
      { item: "Rear dormer (semi-detached)", range: "£40,000 – £55,000" },
      { item: "Hip-to-gable with rear dormer", range: "£45,000 – £65,000" },
      { item: "En-suite or shower room addition", range: "+£6,000 – £12,000" },
      { item: "Building regs drawings & sign-off", range: "Included" },
    ],
    eyebrow: "Banstead & Reigate & Banstead, Surrey",
    heroHeading: "Loft Conversion Banstead",
    heroSubtitle:
      "Dormer and hip-to-gable loft conversions in SM7 — by a team based twenty minutes away that already knows Banstead's 1930s semis.",
    intro:
      "Banstead's 1930s semis are ideal for a loft conversion, and we are close enough that our own team is on site every morning rather than a subcontractor travelling in. ARZ Construction builds dormer and hip-to-gable conversions across Banstead, Nork and Walton on the Hill, with Reigate & Banstead planning and party wall work handled along the way.",
    image: loftImg,
    highlights: [
      "Rear dormer and hip-to-gable builds",
      "Banstead Village conservation-area checks",
      "Staircase design and joinery",
      "En-suite bathrooms and eaves storage",
      "Insulation and fire-safety compliance",
      "Own team on site daily — 20 minutes from base",
    ],
    faqs: [
      {
        q: "How much does a loft conversion cost in Banstead?",
        a: "Rooflight conversions start around £25,000–£35,000. A rear dormer on a typical SM7 semi runs £40,000–£55,000 and a hip-to-gable with rear dormer £45,000–£65,000, depending on specification. Your quote is itemised in writing after a free survey.",
      },
      {
        q: "How far is ARZ Construction from Banstead?",
        a: "About twenty minutes from our Croydon base. Our own team travels in daily, so the job does not stall waiting on subcontracted trades from elsewhere, and the project manager can attend the same day if a decision is needed on site.",
      },
      {
        q: "Do I need planning permission in Banstead?",
        a: "Most lofts fall under permitted development. Banstead Village is a conservation area, which removes those rights on some streets, and the council applies Article 4 directions elsewhere. We check your exact address with Reigate & Banstead Borough Council before work starts.",
      },
      {
        q: "How long does a loft conversion take in Banstead?",
        a: "A standard dormer takes 8–12 weeks on site. Hip-to-gable builds usually extend that by two to three weeks. Your quotation includes the programme for your scope of work.",
      },
      {
        q: "Do I need a party wall agreement in Banstead?",
        a: "For semis and terraces, yes — the steelwork bears on the shared wall. We serve notices on your neighbours in the first week and coordinate with the party wall surveyor as part of the job.",
      },
      {
        q: "Do you cover Nork and Tadworth?",
        a: "Yes — we work across Banstead, Nork, Tadworth, Walton on the Hill, Belmont, Cheam, Sutton, Epsom Downs, Coulsdon and Purley.",
      },
    ],
    relatedSlugs: ["loft-conversions", "bathroom-renovations", "house-renovations"],
    isTown: true,
    areaServed: ["Banstead", "Nork", "Tadworth", "Walton on the Hill", "Reigate & Banstead", "Surrey"],
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
  /** Descriptive, keyword-relevant alt text for the cover photo. Falls back
   *  to "<title> in <location>" when omitted. */
  imageAlt?: string;
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
    imageAlt:
      "Contemporary rear house extension with matched brickwork, bifold doors and glazing onto the garden",
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
    imageAlt:
      "Full house renovation with a new kitchen, bathrooms, flooring and redecoration throughout",
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
    imageAlt:
      "Kitchen installation with island seating, stone worktops and integrated lighting",
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
    imageAlt:
      "Bathroom renovation with a walk-in shower, freestanding bath and large-format porcelain tiling",
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
    imageAlt:
      "Dormer loft conversion creating a light-filled bedroom with an en-suite and eaves storage",
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
    imageAlt:
      "Interior refit with a new staircase, engineered oak flooring and full redecoration",
    gallery: [interiorImg, renovationImg],
    relatedService: "decorating",
  },
  {
    id: "grey-gloss-kitchen",
    title: "Grey Gloss Kitchen Renovation",
    category: "Kitchen",
    location: "South London",
    description:
      "Full kitchen renovation with grey gloss handleless units, black granite worktops, a black subway-tiled splashback and blue LED lighting under the base units.",
    scope: [
      "Strip-out and first fix",
      "Grey gloss unit installation",
      "Granite worktops",
      "Black subway tiling and LED lighting",
    ],
    image: kitchenGreyGloss1Img,
    imageAlt:
      "Grey gloss kitchen renovation with black subway tiled splashback and blue LED under-cabinet lighting",
    gallery: [kitchenGreyGloss1Img, kitchenGreyGloss3Img, kitchenBlackIslandImg],
    relatedService: "kitchen-renovations",
  },
  {
    id: "white-handleless-kitchen",
    title: "White Handleless Kitchen Installation",
    category: "Kitchen",
    location: "South London",
    description:
      "Handleless white kitchen with black worktops, a stainless steel sink and light oak-effect flooring, fitted as part of a wider refurbishment.",
    scope: [
      "Unit layout and installation",
      "Black worktops",
      "Sink and tap fitting",
      "Flooring",
    ],
    image: kitchenWhiteBlackImg,
    imageAlt: "White handleless kitchen units with black worktops and a stainless steel sink",
    gallery: [kitchenWhiteBlackImg],
    relatedService: "kitchen-renovations",
  },
  {
    id: "understairs-storage",
    title: "Under-Stairs Storage and Panelling",
    category: "Joinery",
    location: "South London",
    description:
      "Bespoke under-stairs storage built around the staircase, with panelled doors and decorative moulding to match the period interior.",
    scope: [
      "Bespoke carcassing",
      "Panelled doors",
      "Decorative moulding",
      "Preparation for decorating",
    ],
    image: understairsJoineryImg,
    imageAlt: "Under-stairs storage cupboards with panelled doors and decorative moulding",
    gallery: [understairsJoineryImg],
    relatedService: "house-renovations",
  },
  {
    id: "extension-structure-stage",
    title: "Rear Extension — Structure Stage",
    category: "Extension",
    location: "South London",
    description:
      "Blockwork rear extension photographed at structure stage, with new roof joists in place and openings formed for windows and doors.",
    scope: [
      "Foundations and blockwork",
      "Structural openings",
      "Timber roof structure",
      "Weatherproofing",
    ],
    image: extensionBlockworkImg,
    imageAlt: "Rear house extension under construction with blockwork walls and timber roof joists",
    gallery: [extensionBlockworkImg],
    relatedService: "extensions",
  },
  {
    id: "restaurant-bar-fitout",
    title: "Restaurant and Bar Fit-Out",
    category: "Commercial",
    location: "London",
    description:
      "Commercial fit-out with an oak slat feature wall, metallic ceiling finish, pendant lighting and new heating throughout the dining area.",
    scope: [
      "Feature wall joinery",
      "Ceiling finish",
      "Pendant lighting",
      "Heating alterations",
    ],
    image: barSlatWallImg,
    imageAlt: "Restaurant fit-out with an oak slat feature wall, brass ceiling and pendant lighting",
    gallery: [barSlatWallImg],
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
  {
    name: "Surrey towns",
    places:
      "Esher · Cobham · Claygate · Walton-on-Thames · Egham · Banstead (KT10 · KT11 · KT12 · TW20 · SM7)",
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

// Services whose richer Croydon page exists are kept out of the menu — the
// "South London Specialists" column already links to those pages.
export const navServices = services
  .filter((s) => !s.redirectTo)
  .map((s) => ({
    title: s.title,
    description: s.short,
    href: `/services/${s.slug}`,
    slug: s.slug,
    isSeoPage: false as const,
  }));

// SEO landing pages appear separately in the mega-menu under "South London Specialists".
// Town pages are excluded here — they are listed on /areas-we-cover and in the footer.
export const navSeoServices = seoLandingPages
  .filter((p) => !p.isTown)
  .map((p) => ({
    title: p.title,
    description: p.heroSubtitle.slice(0, 70) + "…",
    href: `/services/${p.slug}`,
    slug: p.slug,
    isSeoPage: true as const,
  }));

// Surrey & North Downs town pages, rendered as /services/<slug>.
export const townLandingPages = seoLandingPages.filter((p) => p.isTown);
