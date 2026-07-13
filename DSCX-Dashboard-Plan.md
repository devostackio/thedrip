# DSCX Newsroom — Build Plan & Design Spec

**Digital Design & Experience · Voice of Customer as the central hub**
Prepared July 2026 · Prototype v0.1

---

## 1. The idea in one line

A single, beautiful newsroom-style dashboard that shows DSCX work is *active, ongoing, and delivering value now* — and spiders out to every detail a reader could want, through a global menu and in-card "spider" links. Retro low-fi look, cream and flat white, simple shadows. Clean HTML/CSS only, so effort goes into the connective tissue, not decoration.

## 2. What the wireframes told us

**The spine — `Design → Discover → Deliver`.** Discover is the center of gravity: the Newsroom dashboard (v1.0). It flows *left* into Design (team, ways of working, digital strategy, personas repo, research) and *right* into Deliver (deep-dive topics, podcasts + training, learning, in-flight video, short articles). The dashboard is the front page of a newspaper; the spine is how you get deeper into the sections.

**The dashboard zones** (Wireframe 2 checklist, 1–8):

1. Heads-up stats
2. Key notes for leaders + ways of working
3. Personas
4. Funnel stats
5. Calendar of events
6. Small articles + training
7. Focus topic of month / video
8. Footer — links / support

**The navigation model** (Wireframe 3, four layers):

| Layer | Name | What lives here | Example pages |
|---|---|---|---|
| L1 | **Page** | The Newsroom dashboard / exec status — the hub | `index.html` |
| L2 | **Focus** | An article, insight, or featured topic in detail | `article.html` |
| L3 | **Group / Dept** | Collections + searchable repositories of reports & readouts; department pages | `repositories.html`, `personas.html`, `deliver.html` |
| L4 | **About** | The team, ways of working, governance, ethos | `about.html` |

Assets and articles roll up into collections and team-owner pages, so a reader can move from a single insight → the collection it belongs to → the team that authored it.

## 3. How the hierarchy maps to your stated structure

> Central Dashboard / Exec Status → Personas & JTBD · Funnel Metrics · Active research topics · Top 3 insights · Featured video/article · Top 5 monthly metrics

Every one of those is a **card** on the dashboard (L1) with a spider link to its detail surface (L2/L3). Level 2 also holds the searchable **repositories** (reports, readouts, data points) and the internal team-author pages. Level 3 is **About / Ways of Working** — already designed, so we only link to it, we don't rebuild it.

## 4. Asset list (what this prototype delivers)

| # | File | Layer | Purpose |
|---|---|---|---|
| 1 | `dscx.css` | — | Shared design system. One stylesheet, every page. |
| 2 | `index.html` | L1 | The Newsroom dashboard / exec status — the hub. |
| 3 | `personas.html` | L3 | Personas & JTBD dashboard (performance metrics, persona detail, journey maps). |
| 4 | `deliver.html` | L3 | Deliver: learning, podcasts + training, in-flight video, short articles. |
| 5 | `repositories.html` | L2/L3 | Searchable repository of reports, readouts, and data points. |
| 6 | `article.html` | L2 | Focus / article detail template (with author + related collection). |
| 7 | `about.html` | L4 | Team, ways of working, governance, ethos (link target / light stub — page already designed). |

All content is **placeholder scaffolding** (`###`, `[ … ]`) so the structure reads clearly and real data drops in later.

## 5. Design system (retro newsroom)

Carried straight from the VOC-April summary so the whole system feels of a piece.

- **Type:** Playfair Display (serif display / headlines), IBM Plex Mono (labels, kickers, metadata), IBM Plex Sans (body).
- **Palette:** ink `#0f0f0f`, ink-mid `#3a3a3a`, ink-light `#7a7a7a`, ink-faint `#d0d0d0`, paper/cream `#f8f6f2`, flat white `#ffffff`. Backgrounds only may carry a *minimal* gradient overlay; everything else is cream or flat white.
- **Structure:** hairline rules (1px black / 1px faint), a 3px top border on mastheads and section heads — newspaper column dividers.
- **Depth:** simple, honest shadows (`0 8px 48px rgba(0,0,0,.10-.18)`) on the page and on cards on hover. No glassmorphism, no heavy gradients.
- **Motion:** minimal — a slight lift + border darken on hover to signal "this is a door."

## 6. Navigation — the connective tissue (the actual point)

**Global menu (persistent, every page).** A masthead nav that never changes: `Newsroom · Personas & JTBD · Funnel · Deliver · Repositories · About`. Current section is marked. This is the reader's constant.

**Spider links (in every card).** Each dashboard zone ends with a small mono "→ open" link to its detail surface. This is the "spiders/splinters out to the details" behavior — the card shows the headline value, the link takes you to the depth.

**Breadcrumbs (every L2/L3 page).** `Newsroom / Deliver / [topic]` so a reader always knows where they are and can climb back one level. Every L2 article shows its **author (team-owner page)** and its **related collection**, closing the loop back up the hierarchy.

**Rule we're enforcing:** every link lands somewhere real in this prototype. No dead ends.

## 7. Build sequence

1. Shared `dscx.css` design system (masthead, nav, cards, spider links, breadcrumbs, stat rows).
2. `index.html` Newsroom dashboard — all eight zones, placeholder content, spider links.
3. L2/L3 stub pages sharing the masthead so navigation is continuous and testable.
4. Verify every `href` resolves; no broken nav; render check; hand off.

## 8. What comes next (beyond this prototype)

- Swap placeholders for live VOC data (cancellations, churn, NPS, funnel).
- Wire the repository search to the real reports/readouts store.
- Add the monthly "edition" date-stamp so the newsroom visibly refreshes each month.
- Publish the same build to the public intranet (internal desktop + published view share one codebase).
