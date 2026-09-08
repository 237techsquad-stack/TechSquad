# TechSquad Website — Content Fixes & Review Guide

**Owner:** Fon Ramsey (ramsey237) — Content Review Collaborator
**Scope:** Review and correct website text and information so it aligns with the team's mission, vision, and history. Correct member names/tags and team positions. Ensure all member names, tags, and positions are accurate, consistent, and correctly displayed.

> Status legend: `[ ]` = to do · `[x]` = done. Tick items as you complete them.

---

## 1. Content-Bearing Files (where the text lives)

| File | Content | Priority |
| --- | --- | --- |
| `src/routes/members.tsx` | Member roster: names, roles, fields, skills, quotes, social links (lines 33–161) | P1 |
| `src/routes/about.tsx` | Mission, values, history milestones, VISHI institutional info, EN/FR copy | P2 |
| `src/routes/index.tsx` | Home stats, hero copy, services list, "how we work" steps | P2 |
| `src/routes/projects.tsx` | Project cards: titles, tags, repo/demo links (lines 26–87) | P4 |
| `src/routes/contact.tsx` | FAQs, form labels, helper text, location copy | P3 |
| `src/components/site/Footer.tsx` | Mission blurb, contact email, WhatsApp, social links | P2 |
| `src/components/site/Header.tsx` | Navigation labels (low content risk) | P5 |
| `src/lib/seo.ts` + `src/routes/__root.tsx` | Canonical brand strings, meta descriptions, JSON-LD org data (email, Twitter) | P2 |
| `src/components/home/CountdownTimer.tsx` | LaneForge launch countdown | P2 |
| `fr:` copy blocks in every route file | French translations | P5 |

All other `src/components/ui/*` files are shadcn primitives — no site copy there.

---

## 2. P1 — Member Roster (`src/routes/members.tsx`)

Core assignment: names, tags (fields/skills), and positions (roles).

- [x] **1.1 Name casing consistency** — `KIMBI DENIS KINJUO` (line 55) and `KANGNUOH ADRIAN` (line 94) are ALL CAPS while every other member is title case. Normalize all names to one style.
  - ✅ Fixed (2026-09-08, branch `fix/p1-member-names`): normalized to title case → `Kimbi Denis Kinjuo` and `Kangnuoh Adrian`, matching the rest of the roster.
- [x] **1.2 Verify spellings against the official roster** — especially "Edjaugue" (line 35) and "Kangnuoh/KANGNUOH" (line 94).
  - ✅ Verified (2026-09-08, branch `fix/p1-member-names`): spellings confirmed correct — `Edjaugue Moussombo Champlain` and `Kangnuoh Adrian` stay as-is; only the casing changed (see 1.1). Note for the record: Adrian's LinkedIn slug reads `kangnouhadrian` while his GitHub handle reads `kangnuohadrian-max`; the team confirmed `Kangnuoh` is the official spelling.
- [ ] **1.3 Sorelle role/field mismatch** — role "Software Engineer" but field "Financial Team" (lines 86–87). Confirm which applies and align.
- [ ] **1.4 Adrian role/field mismatch** — role "Marketing and Branding" (a department, not a role) with field "Software Engineering" (lines 95–96). Make consistent with the rest of the roster's pattern.
- [ ] **1.5 "Division Lead" unnamed** — Emma, Denis, and Celine are "Division Lead" but no division is named. Consider "Software Division Lead" or the actual division name.
- [ ] **1.6 Ramsey role wording** — "Frontend Developer and UI/UX Vibe Code Cleanup Specialist" (line 124) is informal for a public profile. Suggested: "Frontend Developer & UI/UX Specialist".
- [ ] **1.7 Lucie Ange role grammar** — "Operation Team Member" (line 154) → "Operations Team Member".
- [ ] **1.8 Standardize the role taxonomy** — currently 8 different role formats (Founder and Team Leader / Division Lead / Software Developer / Software Engineer / Team Member / Growth Team Member / Operation Team Member / Marketing and Branding). Define ~5 standard roles and apply everywhere.
- [ ] **1.9 Collect 3 missing photos** — Sorelle, Adrian, and Lucie Ange have no `image`, so cards show initials only. Only 10 photos exist in `images/Professional pictures_/` for 13 members.
- [ ] **1.10 Verify photo mapping** — Ramsey's card uses `Ramson.jpg` (line 130); confirm each photo file matches the right person.
- [ ] **1.11 Clean LinkedIn URLs** — Denis (line 60) and Adrian (line 99) links carry `?utm_source=share_via&utm_content=profile&utm_medium=member_android` tracking params. Strip to the clean profile URL.

---

## 3. P2 — Cross-Page Consistency

- [ ] **2.1 Headcount contradiction** — Home page stat says "12 Core members" (`index.tsx` line 36) but the roster has **13 entries**. Fix one or the other.
- [ ] **2.2 Two different contact emails** — Footer (`Footer.tsx` lines 6, 59) uses `techsquadcameroon@gmail.com`; JSON-LD in `__root.tsx` uses `237techsquad@gmail.com`. Unify — this affects what Google displays.
- [ ] **2.3 Stale LaneForge timeline** — About page says "launching in about two months" (written months ago); home says "2 Months to LaneForge". Get the real launch date from the team or remove the time claims.
- [ ] **2.4 Fake countdown** — `CountdownTimer.tsx` (lines 3–6) resets to 47 days on every page refresh. Replace with a real target date or remove the countdown.
- [ ] **2.5 Four different mission statements** — `seo.ts` DEFAULT_DESCRIPTION, `about.tsx` intro ("student initiative"), Footer ("software infrastructure, training young talent"), `index.tsx` hero ("student-born"). Write one canonical mission sentence and reuse it in all four places.
- [ ] **2.6 Brand casing** — "TECHSQUAD" / "TechSquad" / "TechSquad Cameroon" mixed across pages, titles, and meta. Pick one canonical form (suggest: "TechSquad" in prose, "TECHSQUAD" only in the logo lockup) and apply sitewide.

---

## 4. P3 — Visitor-Facing Copy That Reads Like Dev Notes

- [ ] **3.1 `members.tsx` group-photo overlay (lines 231–239)** — the "Full-frame team photo" label and "This showcase puts the team front and center with a larger hero image, so the members page feels like a true team brand moment instead of a simple list." are dev/AI commentary. Rewrite as real site copy (e.g., "TECHSQUAD Cameroon — one team, one mission").
- [ ] **3.2 `members.tsx` intro (line 168)** — "Each card is matched to the member's name and verified social links where they were provided." → rewrite visitor-focused, e.g., "Meet the builders behind TechSquad Cameroon."
- [ ] **3.3 `contact.tsx` Formspree exposure (lines 39, 54)** — "The form is connected to Formspree" and helper "Submissions go through Formspree endpoint mdarqjge" expose internal plumbing. Rewrite helper to something like "We usually reply within 48 hours." (apply the same fix in the `fr:` block).
- [ ] **3.4 `contact.tsx` FAQ (line 31)** — "Where is TECHSQUAD based?" never actually answers. Add "Douala, Cameroon" (confirm with the team).
- [ ] **3.5 Home stat "100 Africa-focused" (`index.tsx` line 38)** — reads oddly (100 what?). Make it "100% committed to Africa" or replace with a meaningful number.

---

## 5. P4 — Projects Page Tags & Links (`src/routes/projects.tsx`)

- [ ] **4.1 Wrong repo links** — All 5 projects' `repoUrl` point to Darlington's personal profile (`github.com/King-Darlington`), not actual project repos (lines 36, 48, 60, 72, 84). Misleading attribution — point to real repo URLs or the team/org account.
- [ ] **4.2 Dead demo links** — Pharmacy, Hotel, Portfolio, and LaneForge "Live Demo" buttons link to `/contact`. Either provide real demo URLs or relabel the button (e.g., "Request demo").
- [ ] **4.3 Wrong stack tags** — Pharmacy dashboard tagged "Productivity, Healthcare, Dashboard" (categories, not tech); e-commerce tagged "HTML, CSS, UI/UX". These tags are part of the mandate — correct them to the real tech (e.g., HTML/CSS/JS, React, PHP...).
- [ ] **4.4 Demo URL check** — `demoUrl: "/demos/e-commerce-main/index.html"` (line 37): confirm this path exists under `public/demos/`; only `public/demos/previews/` SVGs were found.

---

## 6. P5 — Lower Priority

- [ ] **5.1 French copy missing accents everywhere** — "L'equipe", "Competences", "Construisons quelque chose", "developpement", etc. in every `fr:` block (members, about, index, contact, services, projects). For a bilingual Cameroon-focused site, do a full French proofreading pass (é, è, à, ç, ...).
- [ ] **5.2 Unverified Twitter handle** — `seo.ts` declares `@TechSquadCam` and JSON-LD references `twitter.com/TechSquadCam`, but the footer has no Twitter link. Verify the account exists or remove it.
- [ ] **5.3 Footer WhatsApp format** — "WhatsApp: 670344034" (`Footer.tsx` line 60) → format internationally: "+237 670 344 034".
- [ ] **5.4 VISHI facts verification** — About page claims: founded 2020 in Douala, MINESUP authorization "No. 21-04405/I/MINESUP/SG/DDES/SD.ESUP/SDA/NA", location "Bonaberi, behind the Nestle factory in Minkwele" (lines 83–87). Verify spelling ("Minkwele"?) and the authorization number against official records.
- [ ] **5.5 `og:image` is an SVG** — `/demos/previews/laneforge-preview.svg` won't render on Facebook/X/LinkedIn previews. Request a PNG/JPG (≥1200×630) from the design side. (Heads-up for King-Darlington's SEO work.)

---

## 7. Questions to Confirm With the Team

Before editing, confirm these — don't guess:

1. ~~Official name spellings and preferred casing for every member (items 1.1–1.2).~~ ✅ Resolved 2026-09-08: spellings confirmed correct, casing normalized to title case.
2. Sorelle's real position: software engineer or finance? (item 1.3)
3. The actual divisions behind the three "Division Lead" roles. (item 1.5)
4. Real LaneForge launch date (or whether to remove the countdown/time claims). (items 2.3–2.4)
5. The single official contact email: `techsquadcameroon@gmail.com` or `237techsquad@gmail.com`? (item 2.2)
6. Real headcount to display: 12 or 13? (item 2.1)
7. Real repo URLs for the 5 projects. (item 4.1)
8. Missing photos for Sorelle, Adrian, and Lucie Ange. (item 1.9)

---

## 8. Verification Checklist (after edits)

- [ ] `npm run build` passes with no TypeScript errors.
- [ ] Every member card renders: correct name, role, field, skills, working social links, correct photo (no initials fallback except where a photo is genuinely unavailable).
- [ ] Same mission sentence appears on Home, About, Footer, and the meta description.
- [ ] Same email, WhatsApp number, and brand casing across Footer, contact page, and JSON-LD.
- [ ] Home stats match the roster and the About milestones.
- [ ] EN → FR toggle reviewed on all six pages after the French pass.
- [ ] All project cards: correct tags, working repo/demo links.
- [ ] `npx prettier --check src` passes (project uses Prettier; config in `.prettierrc`).

---

*Created during Fon Ramsey's content review session — commit history refs: SEO by King-Darlington (`4f48a8f`), site base by ramsey237 / GitHub Copilot.*

