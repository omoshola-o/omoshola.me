# SEO & Search Identity Checklist — omoshola.me

Goal: when someone searches "Omoshola Owolabi," omoshola.me is the canonical
source the internet uses to describe him. This file tracks the work.

> Note: `docs/` is not part of the published site (Astro only serves `src/pages`
> and `public/`), so this stays private and version-controlled.

---

## Status — done in code (live on omoshola.me)

- [x] `Person` JSON-LD schema, enriched: `alumniOf`, `worksFor` (IBM + Agentra
      Labs), `memberOf` (IEEE), `award` (IEEE Senior Member), `nationality`,
      expanded `knowsAbout`, stable `@id` (`https://omoshola.me/#person`).
- [x] `ProfilePage` schema on `/about` and `/credentials`.
- [x] `sameAs` + `rel=me` identity graph: ORCID, Google Scholar, ResearchGate,
      GitHub, X, LinkedIn, Agentra Labs.
- [x] Canonical URLs, sitemap (`/sitemap-index.xml`), robots.txt, OG/Twitter cards.
- [x] `/credentials` page (full CV) wired into nav.
- [x] CV PDF (contained home address) removed from site + git history.

---

## To do — manual (only Omoshola can do these), in priority order

### 1. Google Search Console  ← do first, nothing surfaces until indexed
- [ ] Add `omoshola.me` as a **Domain** property at
      https://search.google.com/search-console
- [ ] Verify via DNS TXT record (at domain registrar)
- [ ] Submit sitemap: `https://omoshola.me/sitemap-index.xml`
- [ ] URL Inspection → Request indexing for `/`, `/about`, `/credentials`

### 2. Back-link each profile → omoshola.me (makes `sameAs` bidirectional)
Set "website" / "homepage" = `https://omoshola.me` in each:
- [ ] ORCID (https://orcid.org/0009-0006-4089-0732)
- [ ] Google Scholar (user `o89bIh4AAAAJ`)
- [ ] ResearchGate (`Omoshola-Owolabi-2`)
- [ ] GitHub (`omoshola-o`)
- [ ] X (`HowolarbyM`)
- [ ] Cross-link agentralabs.tech ↔ omoshola.me both directions

### 3. Wikidata item  ← biggest lever for a Knowledge Panel
See field values below. Create at https://www.wikidata.org → "Create a new Item".

### 4. After indexing
- [ ] Validate schema at https://search.google.com/test/rich-results
- [ ] When a Knowledge Panel appears, use "Claim this knowledge panel"

---

## Reusable bio (paste identically everywhere — consistency is a signal)

**One-liner (~150 chars):**
> Data scientist & AI/ML researcher building explainable, governable AI for regulated finance and supply chains. IEEE Senior Member. omoshola.me

**Short (~50 words):**
> Omoshola Owolabi is a data scientist and AI/ML researcher working on explainable AI and governance for regulated industries. An IEEE Senior Member, he contributes to IEEE AI standards, has engaged U.S. federal AI policy, and publishes peer-reviewed research on algorithmic fairness, credit risk, and supply-chain resilience. Founder of Agentra Labs.

**Tagline:**
> AI/ML Researcher · Explainable AI for Regulated Industries · IEEE Senior Member

---

## Wikidata field values

**Labels / description / aliases**

| Field | Value |
|---|---|
| Label (English) | `Omoshola Owolabi` |
| Description (English) | `Nigerian data scientist and AI researcher` |
| Aliases | `Omoshola Simon Owolabi` · `Omoshola O. Owolabi` |

**Statements** (Property → Value; Q-codes where the value is another item)

| Property (P-code) | Value |
|---|---|
| instance of (P31) | human (Q5) |
| sex or gender (P21) | male (Q6581097) — optional |
| country of citizenship (P27) | Nigeria (Q1033) |
| occupation (P106) | data scientist (Q13416952); researcher (Q1650915) |
| field of work (P101) | artificial intelligence (Q11660); machine learning (Q2539); explainable artificial intelligence (Q86920215) |
| employer (P108) | IBM (Q37156) |
| member of (P463) | IEEE (Q131276) |
| educated at (P69) | Joseph Ayo Babalola University; Carolina University (search each; skip if no item) |
| languages spoken/written (P1412) | English (Q1860) |
| ORCID iD (P496) | `0009-0006-4089-0732` |
| Google Scholar author ID (P1960) | `o89bIh4AAAAJ` |
| ResearchGate profile ID (P2038) | `Omoshola-Owolabi-2` |
| official website (P856) | `https://omoshola.me` |
| GitHub username (P2037) | `omoshola-o` |
| X username (P2002) | `HowolarbyM` |

**Reference for statements:** reference URL (P854) = `https://omoshola.me/credentials`.
The ORCID / Scholar IDs serve as their own authoritative references.

**Notability:** an author with an ORCID, a Google Scholar profile, and
DOI-indexed peer-reviewed publications is a structurally describable entity with
serious references — that clears Wikidata's bar.

---

## IEEE disclosure note (for the Credentials page)
IEEE standards participation is public/transparent (names + affiliations appear
in public meeting minutes). Safe to display. Rules: never reproduce draft-standard
text, never imply IEEE endorsement, keep affiliation accurate. The Credentials
page describes roles/contributions only — compliant.
Sources: standards-support.ieee.org (Obligations for Participation),
standards.ieee.org/faqs/affiliation.
