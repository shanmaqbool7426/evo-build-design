/**
 * Blog / guides content for ARZ Construction Ltd.
 *
 * Topics are chosen from real Google Search Console queries:
 *  - "loft conversion cost …"      → /blog/loft-conversion-cost-croydon
 *  - "dormer loft conversion …"    → /blog/dormer-vs-hip-to-gable
 *  - "party wall agreement …"      → /blog/party-wall-loft-conversion-croydon
 *
 * Paragraph text supports inline links written as [anchor](/path) which the
 * blog route renders as internal links — keep money-page links contextual.
 * Facts (prices, timescales, permitted-development volumes) must stay
 * consistent with the service landing pages in site.ts.
 */

import { images } from "./site";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  /** Visible H1 on the post page. */
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Short summary shown on the blog index card. */
  excerpt: string;
  /** ISO publish date (datePublished in BlogPosting schema). */
  date: string;
  readTime: number;
  category: string;
  image: string;
  intro: string;
  sections: BlogSection[];
  takeaways: string[];
  faqs: { q: string; a: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "loft-conversion-cost-croydon",
    title: "How Much Does a Loft Conversion Cost in Croydon? (2026 Price Guide)",
    metaTitle: "Loft Conversion Cost in Croydon: 2026 Price Guide | ARZ",
    metaDescription:
      "How much does a loft conversion cost in Croydon in 2026? Real prices for rooflight, dormer and hip-to-gable conversions, plus the factors that move the price.",
    excerpt:
      "Real 2026 prices for every type of loft conversion in Croydon — from a basic rooflight build to a full hip-to-gable with en-suite — and what actually moves the number.",
    date: "2026-10-12",
    readTime: 7,
    category: "Costs & Pricing",
    image: images.loft,
    intro:
      "It's the first question every homeowner asks, and the one most builders dodge: what will a loft conversion actually cost? In Croydon, most [loft conversions](/services/loft-conversion-croydon) land between £25,000 and £65,000 depending on the type of build and how you plan to use the new space. This guide breaks down real 2026 prices, the factors that move the number up or down, and the extra costs many quotes quietly leave out.",
    sections: [
      {
        heading: "Typical Loft Conversion Costs in Croydon (2026)",
        paragraphs: [
          "These are the ranges we're currently quoting across CR postcodes — South Croydon, Purley, Shirley, Sanderstead, Thornton Heath and the surrounding areas:",
          "A **rooflight-only conversion** — where we work within the existing roof and install Velux-style windows — typically costs **£25,000 to £35,000**. It's the most affordable route because no new roof structure is built.",
          "A **rear dormer conversion** on a semi-detached house — the most popular choice in Croydon — typically costs **£40,000 to £55,000**. The dormer box adds proper standing headroom across most of the floor, turning the loft into a genuinely usable bedroom.",
          "A **hip-to-gable with rear dormer** — the maximum-space option for 1930s semis — typically costs **£45,000 to £65,000**. The existing sloping hip roof is replaced with a flat gable wall, then combined with a rear dormer to unlock the full footprint.",
          "Adding an **en-suite or shower room** to any of the above adds roughly **£6,000 to £12,000**, depending on whether the new bathroom sits directly above existing plumbing.",
        ],
      },
      {
        heading: "What Actually Changes the Price",
        paragraphs: [
          "**Your roof structure.** Traditional cut roofs (common in Croydon's Victorian and 1930s housing) are straightforward to convert. Modern trussed rafter roofs — common in post-1970s homes — need additional steelwork, which adds cost.",
          "**Staircase position.** The stairs must land with compliant headroom (2m minimum at the centre). If the existing landing layout forces an awkward staircase design — or means losing a bedroom below — the price moves. This is the single most overlooked factor at survey stage.",
          "**Structural steelwork.** Every dormer or hip-to-gable needs RSJ steel beams, usually bearing on the party wall or new gable. Longer spans and heavier roofs mean bigger steel.",
          "**Specification.** A standard carpeted bedroom with a radiator costs less than a fully tiled en-suite with underfloor heating, bi-fold storage and roof terrace access. Fixtures and finishes are where quotes vary most between builders — always compare like for like.",
        ],
      },
      {
        heading: "The Costs Many Quotes Leave Out",
        paragraphs: [
          "Watch for these when comparing quotes — at ARZ they're included as standard, but not every builder works that way:",
          "**Building regulations drawings and sign-off.** Expect £1,500–£3,000 elsewhere if it's not in the quote. We prepare the drawings and manage the [building control](/faqs) sign-off with Croydon Council ourselves.",
          "**Party Wall notices.** If your build affects the party wall — almost all dormers do — you may need a surveyor. See our guide to [party wall agreements](/blog/party-wall-loft-conversion-croydon) for realistic costs and timelines.",
          "**Scaffolding, skip hire and waste removal.** Usually included in a quotation, but worth confirming. Our quotes are itemised, so you can see exactly what's covered.",
          "**Decoration and flooring.** Most conversions are quoted to plastered finish. Decorating the new room (and refinishing the staircase area below) is often a separate line — budget £1,000–£2,500.",
        ],
      },
      {
        heading: "Permitted Development vs Planning Permission",
        paragraphs: [
          "Most loft conversions in Croydon fall under **permitted development rights**, which means no planning application and no planning fee. The allowance is up to 40m³ of additional roof volume for terraced houses and 50m³ for semi-detached and detached homes — comfortably enough for a standard rear dormer.",
          "You'll need full planning permission (a householder application fee of £548 in England from April 2026 — check the Planning Portal for the current figure) if your home is in a conservation area, is listed, or if the design exceeds the volume allowance. We assess this at the first visit and handle any application on your behalf.",
        ],
      },
      {
        heading: "Does a Loft Conversion Pay Back?",
        paragraphs: [
          "In South London, a well-executed loft conversion is commonly estimated by local estate agents to add **15–25% to property value** — often more than it cost to build. An extra double bedroom with an en-suite is consistently one of the highest-return home improvements, especially in Croydon where family homes with four-plus bedrooms command a premium over three-bed stock.",
          "The other return is immediate: you get the space without the stamp duty, legal fees and moving costs of buying a bigger house. For most of our clients, converting beats moving on pure numbers.",
        ],
      },
      {
        heading: "How to Get an Accurate Price",
        paragraphs: [
          "Online calculators and per-m² averages only get you so far — the real number depends on your specific roof, staircase and plans. We offer a **free, no-obligation survey**: we visit, measure, discuss what you want from the space, and return a written itemised quotation.",
          "Ready to talk numbers for your home? [Request your free quote](/contact) or browse our [Croydon loft conversion service](/services/loft-conversion-croydon) for what's included.",
        ],
      },
    ],
    takeaways: [
      "Rooflight conversions: £25,000–£35,000 · Rear dormer (semi): £40,000–£55,000 · Hip-to-gable + dormer: £45,000–£65,000",
      "En-suite addition: +£6,000–£12,000 · Building regs drawings included with ARZ quotes",
      "Staircase position is the most overlooked cost factor — get it surveyed properly",
      "Most Croydon lofts need no planning permission (permitted development)",
      "Local estate agents commonly estimate a finished conversion adds 15–25% to South London property values",
    ],
    faqs: [
      {
        q: "What is the cheapest type of loft conversion in Croydon?",
        a: "A rooflight (Velux-style) conversion is the most affordable, typically £25,000–£35,000, because the existing roof structure is kept and no dormer is built. It suits homes with good existing head height — above roughly 2.4m at the ridge.",
      },
      {
        q: "How much does a dormer loft conversion cost on a semi-detached house?",
        a: "A rear dormer on a Croydon semi-detached house typically costs £40,000–£55,000 fully finished, including staircase, insulation, fire safety measures, electrics and plastering. Adding an en-suite takes it to roughly £46,000–£67,000.",
      },
      {
        q: "Is the price of a loft conversion fixed?",
        a: "Quotations are itemised and agreed in writing before work starts. The price for the agreed scope is fixed and staged against completed milestones, so you pay for work as it is completed. If you change the specification mid-build, we price the variation separately and confirm it with you in writing before it proceeds.",
      },
      {
        q: "How long does it take to recoup the cost?",
        a: "You don't need to wait — the value is realised when you sell or remortgage, with conversions typically adding 15–25% to South London property values. Many clients also gain rental income potential from a self-contained loft bedroom.",
      },
    ],
  },
  {
    slug: "dormer-vs-hip-to-gable",
    title: "Dormer vs Hip-to-Gable Loft Conversion: Which Is Right for Your Croydon Home?",
    metaTitle: "Dormer vs Hip-to-Gable Loft Conversion | Croydon Guide",
    metaDescription:
      "Rear dormer or hip-to-gable? Compare space, cost, planning rules and which suits Croydon's semis and terraces — explained by local loft specialists.",
    excerpt:
      "The two most popular loft conversions compared — space gained, cost difference, planning rules and which one fits 1930s semis, Victorians and detached homes.",
    date: "2026-10-05",
    readTime: 6,
    category: "Loft Conversions",
    image: images.interior,
    intro:
      "A rear dormer and a hip-to-gable are the two conversions we build most often across Croydon — and choosing between them comes down to your house type, your budget and how much space you need. This guide compares them honestly: what each build involves, what you gain, what it costs in 2026, and which homes each one suits. For full build details, see our [Croydon loft conversion service](/services/loft-conversion-croydon).",
    sections: [
      {
        heading: "What Is a Rear Dormer Conversion?",
        paragraphs: [
          "A rear dormer is a box-shaped extension built onto the rear roof slope, with vertical walls and a flat roof. Because the walls go vertical, you get full-height headroom across most of the floor instead of just a corridor of standing space.",
          "It's the most popular [loft conversion](/services/loft-conversion-croydon) in Croydon for a reason: maximum internal space for the money, and it suits the majority of terraced and semi-detached homes. Externally it reads as a clean box window to the rear — most neighbours barely notice it once finished.",
        ],
      },
      {
        heading: "What Is a Hip-to-Gable Conversion?",
        paragraphs: [
          "A hip-to-gable conversion replaces a sloping 'hip' side roof with a vertical gable wall built in brick, matching the existing house. On its own it doesn't add a huge amount of floor area — its real job is to square off the internal space.",
          "That's why on 1930s semi-detached houses (extremely common in Sanderstead, Shirley and Coulsdon) we usually build a **hip-to-gable with a rear dormer combined**. The hip-to-gable creates the width; the dormer creates the depth and headroom. Together they turn a cramped loft into a genuine double bedroom with an en-suite.",
        ],
      },
      {
        heading: "Quick Comparison",
        paragraphs: [
          "**Space gained:** a rear dormer adds roughly 20–30m² of usable floor. A hip-to-gable on its own adds less — maybe 10–15m² — but combined with a dormer it unlocks the maximum possible footprint.",
          "**Cost:** a rear dormer on a semi typically costs £40,000–£55,000; a hip-to-gable with rear dormer typically costs £45,000–£65,000. The hip-to-gable element adds roughly £8,000–£15,000 over a dormer-only build because of the additional brickwork, steel and roof work.",
          "**Suits:** rear dormers suit terraces and semis with a flat or minimal rear hip. Hip-to-gables suit hipped-roof homes — 1930s semis above all — where a dormer alone would leave an awkward, pinched layout.",
          "**Planning:** both usually fall under permitted development in Croydon (see below).",
        ],
      },
      {
        heading: "Which Suits Your House Type?",
        paragraphs: [
          "**1930s semi-detached (hipped roof):** hip-to-gable with rear dormer. This is the classic Croydon combination — without the hip-to-gable, the sloping side roof eats the floor plan.",
          "**Victorian or Edwardian terrace:** rear dormer. Terraces have no side hip to remove — the party walls are already shared gables — so a rear dormer alone gives the full benefit.",
          "**Detached house:** either or both, depending on the roof. Detached homes with hipped roofs can take hip-to-gables on one or both sides; many go straight to a full hip-to-gable plus rear dormer for the largest possible space.",
          "**Bungalow:** both can work, though bungalows need careful structural design because the existing walls carry less load. We survey before recommending.",
        ],
      },
      {
        heading: "Planning Rules in Croydon",
        paragraphs: [
          "Both conversions usually fall under **permitted development** — no planning application needed. The allowance is up to 40m³ of additional roof volume for terraced houses and 50m³ for semi-detached and detached homes, measured against the original roof.",
          "A hip-to-gable specifically is permitted development as long as it doesn't rise above the existing ridge line. You'll need full planning permission if the home is in a conservation area, is a listed building, or the design exceeds the volume limits. We check your property's status at the first survey and handle any application with Croydon Council.",
          "One more approval to know about: if the build touches the party wall — dormer steelwork almost always does — the [Party Wall Act](/blog/party-wall-loft-conversion-croydon) applies. We serve the notices and manage the process for you.",
        ],
      },
      {
        heading: "Which Adds More Value?",
        paragraphs: [
          "Whichever creates a usable double bedroom adds the value — buyers in South London pay a premium for a genuine fourth bedroom with an en-suite over a token box room with restricted headroom.",
          "If your loft can only sensibly take one route, don't overthink it: the market value difference between a well-built dormer and a well-built hip-to-gable+dormer comes down to the floor area delivered. Build the bigger legal space your roof allows, finish it properly, and the value follows.",
        ],
      },
    ],
    takeaways: [
      "Rear dormer: £40,000–£55,000 — best for terraces and flats-roofed semis",
      "Hip-to-gable + rear dormer: £45,000–£65,000 — the 1930s semi special",
      "Hip-to-gable alone adds width; the dormer adds the standing height",
      "Both usually permitted development in Croydon (40m³ terrace / 50m³ semi-detached)",
      "Build the maximum legal space — bedrooms with full headroom drive the value",
    ],
    faqs: [
      {
        q: "Can I combine a hip-to-gable and a dormer?",
        a: "Yes — it's the most common combination we build on Croydon's 1930s semis. The hip-to-gable squares off the side, the rear dormer adds depth and headroom, and together they're still usually within permitted development rights.",
      },
      {
        q: "How much more does a hip-to-gable cost than a dormer?",
        a: "Typically £8,000–£15,000 more, depending on the size of the hip being removed and the steelwork required. A hip-to-gable with rear dormer on a semi lands around £45,000–£65,000 versus £40,000–£55,000 for a dormer-only build.",
      },
      {
        q: "Which conversion takes longer to build?",
        a: "A rear dormer typically takes 8–12 weeks on site. Adding a hip-to-gable usually extends the programme by 2–3 weeks because of the gable brickwork and additional roof structure.",
      },
      {
        q: "Will my neighbour's loft conversion affect mine?",
        a: "Not directly — each property needs its own design based on its own roof. But if your neighbour has already built a hip-to-gable on the shared party wall line, your design must account for the wall's changed condition. We assess this at survey, and party wall notices are handled as part of our service.",
      },
    ],
  },
  {
    slug: "party-wall-loft-conversion-croydon",
    title: "Party Wall Agreements for Loft Conversions & Extensions: A Croydon Guide",
    metaTitle: "Party Wall Agreement for Lofts & Extensions | Croydon",
    metaDescription:
      "Do you need a Party Wall Agreement for a loft conversion or extension in Croydon? When notice is required, what it costs, and how ARZ handles it for you.",
    excerpt:
      "When the Party Wall Act applies to your loft or extension, what the surveyor costs, how long it takes — and how we handle the notices so you don't have to.",
    date: "2026-10-19",
    readTime: 6,
    category: "Planning & Regulations",
    image: images.extension,
    intro:
      "If you're planning a [loft conversion](/services/loft-conversion-croydon) or a [house extension](/services/house-extension-croydon) in Croydon, the Party Wall etc. Act 1996 will probably apply to your project — and it's the area homeowners understand least. Get it wrong and a neighbour can halt your build. Get it right and it's a paperwork exercise running quietly alongside construction. Here's what Croydon homeowners need to know.",
    sections: [
      {
        heading: "What Is the Party Wall etc. Act 1996?",
        paragraphs: [
          "The Act is national legislation governing work on, or near, walls shared with neighbours — the party wall between terraced and semi-detached houses, and in some cases boundary walls and nearby excavations. Its purpose isn't to stop building; it's to make sure work affecting a shared structure is done safely and that both owners are protected.",
          "Important: the Act is **not planning permission**. You can have permitted development rights (no planning application needed) and still need to follow the Party Wall process. The two are completely separate.",
        ],
      },
      {
        heading: "When Do You Need a Party Wall Agreement?",
        paragraphs: [
          "**For loft conversions**, the Act usually applies because dormer and hip-to-gable builds bear structural steel beams on the party wall, or involve cutting into it for chimneys and flank walls. If your loft build touches the shared wall structurally — most do — notice is required.",
          "**For extensions**, notice is required if you plan to excavate within **3 metres** of a neighbour's building or structure to a depth below the bottom of their foundations, or within **6 metres** where your foundations would cut a 45° line drawn down from the bottom of theirs (typical for deeper extension footings). Building a new wall on the boundary line also needs notice. A side-return on a Victorian terrace almost always triggers it.",
          "Everyday cosmetic work — plastering, fitting shelves, rewiring — doesn't need notice. The Act covers structural work, not decoration.",
        ],
      },
      {
        heading: "How the Process Works",
        paragraphs: [
          "You (the building owner) serve a **written party wall notice** on each affected neighbour at least two months before work on the party wall itself starts (one month for a new wall on the boundary line or for adjacent excavation). Your neighbour then has **14 days to consent** or appoint a surveyor.",
          "If they **consent in writing**, work proceeds as planned — the agreement is the consent itself. If they **ignore the notice or object**, surveyors are appointed: one for you, one for them (or one agreed surveyor acting for both), who settle the terms in a document called the **party wall award**.",
          "The award sets out how the work will proceed, what access is allowed, and records the condition of neighbouring properties (a schedule of condition) so pre-existing cracks aren't blamed on your build later.",
        ],
      },
      {
        heading: "What Does a Party Wall Surveyor Cost?",
        paragraphs: [
          "If your neighbour simply consents, there may be no surveyor fees at all. If surveyors are appointed, the **building owner (you) normally pays both surveyors' reasonable fees** — typically £700–£1,500 per surveyor for a straightforward loft conversion, more for complex extensions.",
          "Budget realistically: consented projects cost little to nothing; disputed projects can run to £2,000–£3,500+ in surveyor fees. A good design and an early, polite conversation with your neighbours is worth real money here — most disputes start as surprise, not opposition.",
          "One cost you should never skip: a **schedule of condition**. Paying a surveyor to photograph and log the neighbour's property before work starts is the cheapest insurance in construction.",
        ],
      },
      {
        heading: "How Long Does It Take?",
        paragraphs: [
          "Plan the Act into your programme: the minimum notice period is **two months** for work directly on the party wall, and **one month** for a new wall on the line of junction or for adjacent excavation — and your neighbour's 14-day response window sits inside that.",
          "A consenting neighbour means the timeline is just the notice period. Surveyors being appointed typically adds **4–8 weeks** depending on availability. This is why we identify party wall requirements at the very first survey — so notices go out early and the paperwork never delays your build.",
        ],
      },
      {
        heading: "How ARZ Handles Party Wall Notices for You",
        paragraphs: [
          "We don't hand you a template and wish you luck. As part of our service on [loft conversions](/services/loft-conversion-croydon) and [extensions](/services/house-extension-croydon), we prepare and serve the party wall notices correctly, advise your neighbours on what to expect, and coordinate with appointed surveyors so the award matches the build programme.",
          "We also give every client an honest assessment at the first visit: whether your specific project actually triggers the Act, and the smoothest route through it. In most cases, neighbours consent once they understand what's happening and when.",
        ],
      },
    ],
    takeaways: [
      "Party Wall Act ≠ planning permission — you often need both processes",
      "Loft conversions: steel on the party wall usually triggers notice",
      "Extensions: excavating within 3m of a neighbour's building (6m for deep footings) triggers notice",
      "Notice periods: 1–2 months before work starts — plan it early",
      "Surveyor fees (if appointed) are typically paid by the building owner",
      "ARZ serves and manages party wall notices as part of the build service",
    ],
    faqs: [
      {
        q: "Do all loft conversions need a party wall agreement?",
        a: "Most dormer and hip-to-gable conversions do, because structural steelwork bears on the shared wall. A rooflight-only conversion that doesn't touch the party wall structurally may not. We assess your specific build at the free survey and tell you honestly.",
      },
      {
        q: "What happens if my neighbour refuses consent?",
        a: "They can't permanently stop a lawful build — refusal or no response simply means surveyors are appointed to agree a party wall award. The award allows the work to proceed under agreed conditions. Genuine objections are usually about access and timing, which can be negotiated.",
      },
      {
        q: "Does my neighbour's consent count as planning permission?",
        a: "No — the two are separate. Planning permission (or permitted development) covers what you're allowed to build; the Party Wall Act covers how shared structures are protected while you build it. You may need one, both, or neither.",
      },
      {
        q: "Who pays for the party wall surveyor?",
        a: "The building owner carrying out the work normally pays the reasonable fees of both surveyors. There are no surveyor fees at all if your neighbour consents in writing to the notice.",
      },
    ],
  },
];

/**
 * Guides to surface in the sidebar of specific SEO landing pages
 * (key = landing page slug). Keeps money pages ↔ blog tightly interlinked.
 */
export const guidesByService: Record<string, { slug: string; title: string }[]> = {
  "loft-conversion-croydon": [
    { slug: "loft-conversion-cost-croydon", title: "How Much Does a Loft Conversion Cost in 2026?" },
    { slug: "dormer-vs-hip-to-gable", title: "Dormer vs Hip-to-Gable: Which Suits Your Home?" },
  ],
  "loft-conversion-bromley": [
    { slug: "loft-conversion-cost-croydon", title: "How Much Does a Loft Conversion Cost in 2026?" },
    { slug: "dormer-vs-hip-to-gable", title: "Dormer vs Hip-to-Gable: Which Suits Your Home?" },
  ],
  "house-extension-croydon": [
    { slug: "party-wall-loft-conversion-croydon", title: "Party Wall Agreements Explained" },
    { slug: "loft-conversion-cost-croydon", title: "Loft Conversion Costs: 2026 Price Guide" },
  ],
  "house-extension-bromley": [
    { slug: "party-wall-loft-conversion-croydon", title: "Party Wall Agreements Explained" },
  ],
};
