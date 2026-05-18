Let me read the remaining files I haven't seen yet to build a complete picture.  

Read [](file:///c%3A/atlanticDunesVitrineWebsite/app/products/%5Bslug%5D/page.tsx#1-1), lines 1 to 80

Read [](file:///c%3A/atlanticDunesVitrineWebsite/app/services/%5Bslug%5D/page.tsx)

Read [](file:///c%3A/atlanticDunesVitrineWebsite/components/Header.tsx#1-1), lines 1 to 60

Read [](file:///c%3A/atlanticDunesVitrineWebsite/app/page.tsx#60-60), lines 60 to 80

Now I have the full picture. Let me save the plan and present it. 

Created memory file [](file:///c%3A/Users/mouhi/AppData/Roaming/Code%20-%20Insiders/User/workspaceStorage/107aaa72aad45e9f928629d05f9721c4/GitHub.copilot-chat/memory-tool/memories/NmRhZjAwZDYtOWVhNS00YzFkLWExOGItYmNkYzViNDgyNWI4/plan.md)

## Plan: Atlantic Dunes Website — Full Catalog Implementation

**TL;DR:** Rebuild data layer from 18 → 60 items across 7 poles, add `pole` field to types, create a poles definition file, upgrade filter UI to two-tier (pole tabs → domain chips), and enrich detail pages with pole badges and cross-pole related links. No new routes needed.

---

### Phase 1 — Data layer

**Step 1** — Create `data/poles.ts`
Define the 7 poles as a typed array with `slug`, `label` (FR), `shortDescription`. Used by the tab component and detail page badges.

**Step 2** — Rewrite products.ts
- Add `pole: string` to the `Product` type
- Update 8 existing items (add `pole`, move ventilation ATEX from `env` → `elec`)
- Write and add **18 new products** with full content: `title`, `shortDescription`, `description`, 4 `specs`, `performance`, `pdfLink`

| Pole | New products |
|------|-------------|
| `energy` | Solar PV install, Solar thermal, Hybrid solar+grid, BESS storage |
| `safety` | Fire detection, Gas detection, Access control, CCTV, ESD/SIL |
| `elec` | TGBT armoire, PLC automation system, UPS |
| `digital` | IoT platform, SCADA system, Digital twin |
| `nuclear` | Radioactivity detector, Dosimetry system |
| `training` | LMS e-learning kit, Industrial process simulator |

**Step 3** — Rewrite services.ts
- Add `pole: string` to the `Service` type
- Update 10 existing items (add `pole` only, no content changes)
- Write and add **24 new services** with full content: `description`, 4 `methodology` steps, `deliverable`

| Pole | New services |
|------|-------------|
| `env` | Maintenance WWTP contract, Maintenance air unit contract |
| `energy` | Solar PV sizing study, Autoconsumption audit, O&M solar+BESS contract |
| `safety` | Gas/fire detector calibration contract, ESD/CCTV maintenance contract |
| `elec` | TGBT+UPS+ATEX preventive maintenance contract |
| `digital` | SCADA/IoT maintenance contract |
| `nuclear` | Annual detector calibration + dosimeter exchange |
| `training` | 6 domain trainings + HSE coaching (7 total) |

---

### Phase 2 — UI components *(steps 4–5 parallel)*

**Step 4** — Create `components/PoleTabs.tsx`
Horizontal scrollable tab bar. Props: `poles[], selectedPole, onPoleChange`. "Tous" as first option. Active tab uses brand color fill.

**Step 5** — No change to FilterChips.tsx
Already generic — callers will simply pass only domains present within the selected pole.

**Step 6** — Update page.tsx
Replace flat `domainLabels` with two-tier state: `selectedPole` + `selectedDomain`. Pole change resets domain. Derive available domains dynamically from filtered products.

**Step 7** — Update page.tsx
Same two-tier logic as step 6.

---

### Phase 3 — Detail pages *(steps 8–9 parallel)*

**Step 8** — Update [app/products/\[slug\]/page.tsx](app/products/[slug]/page.tsx)
- Add pole badge alongside domain badge in sidebar
- Related items filter by same `pole` (broader than same `domain`)
- Add "Formation liée" cross-link: find training service whose `domain` matches product's `pole` slug

**Step 9** — Update [app/services/\[slug\]/page.tsx](app/services/[slug]/page.tsx)
- Add pole badge in sidebar
- Related items filter by same `pole`
- Add "Formation liée" and "Maintenance liée" cross-links

---

### Phase 4 — Home page & Header *(independent)*

**Step 10** — Update page.tsx
Featured products/services: pick one item from 3 different poles instead of `slice(0,3)`. Update subtitle to reflect 7 poles.

**Step 11** — Fix Header.tsx
`"Products"` → `"Produits"`, `"References"` → `"Références"`, `"Who we are"` → `"Qui sommes-nous"`.

---

### Relevant files

- `data/poles.ts` — **new**
- products.ts — type + full rewrite
- services.ts — type + full rewrite
- `components/PoleTabs.tsx` — **new**
- page.tsx — two-tier filter
- page.tsx — two-tier filter
- [app/products/\[slug\]/page.tsx](app/products/[slug]/page.tsx) — pole badge + cross-links
- [app/services/\[slug\]/page.tsx](app/services/[slug]/page.tsx) — pole badge + cross-links
- page.tsx — featured items
- Header.tsx — language fix

---

### Verification
1. `products.length === 26`, `services.length === 34`
2. TypeScript strict mode catches any missing `pole`/`domain` fields — run `npx tsc --noEmit`
3. Each of the 7 poles returns results on `/products` and `/services`
4. `domain: "maintenance"` returns 6 services across 6 poles
5. Product detail page shows pole badge + linked training
6. All nav labels in French

---

**Scope:** Data content, types, filter UI, detail page enrichment, nav language fix. No new routes, no new pages, no design system changes.

Ready to implement? I'll work through all phases in order, writing all 42 new content items as I go.You've used 76% of your weekly rate limit. Your weekly rate limit will reset on May 18 at 1:00 AM. [Learn More](https://aka.ms/github-copilot-rate-limit-error)

    