# July Roadmap Section Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add the July roadmap section from the supplied screenshot to the end of the June 2026 report.

**Architecture:** Compose the section introduction from the existing `Duplex` and `SectionHeader` components. Render the roadmap data in a semantic HTML table and keep all visual and responsive styles scoped to `src/pages/2026/june.astro`.

**Tech Stack:** Astro 7, Astro components, semantic HTML table, scoped CSS

---

### Task 1: Add the roadmap section

**Files:**

- Modify: `src/pages/2026/june.astro`

**Step 1: Add the section markup**

Append a dark section after section 06. Use `Duplex` and `SectionHeader` for
the eyebrow, heading, and explanatory paragraph. Add a five-column table with
the seven initiatives and exact copy from the reference image.

**Step 2: Add scoped table styles**

Match the reference’s compact typography, muted column headings, horizontal
rules, column widths, and dark palette. Wrap the table in an overflow container
and preserve a readable minimum width on small screens.

**Step 3: Format the page**

Run: `pnpm exec prettier --write src/pages/2026/june.astro`

Expected: Prettier formats the Astro page without errors.

**Step 4: Run static checks**

Run: `pnpm lint`

Expected: Oxlint exits successfully with no errors.

**Step 5: Build the site**

Run: `pnpm build`

Expected: Astro exits successfully and generates the production build.

**Step 6: Compare the rendered result**

Open `/2026/june` at the reference viewport and compare the roadmap section
against the supplied screenshot.

Expected: The section matches the reference hierarchy, spacing, column order,
copy, rules, and dark color treatment with no browser console errors.
