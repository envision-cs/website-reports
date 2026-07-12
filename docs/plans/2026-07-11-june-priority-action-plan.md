# June Priority Action Plan Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add the three-tier priority action plan from the supplied screenshot to section 06 of the June report.

**Architecture:** Keep the existing `SubSection` and `ListItemC` components unchanged. Replace the placeholder with one subsection whose three prop-driven list items contain the reference IDs, titles, and descriptions.

**Tech Stack:** Astro 7, Astro components, scoped CSS

---

### Task 1: Populate the priority action plan

**Files:**

- Modify: `src/pages/2026/june.astro:371`

**Step 1: Replace the placeholder**

Replace the empty `SubSection` with a titled `SubSection` containing three
`ListItemC` instances in R—02, R—01, R—03 order. Copy each title and description
exactly from the supplied reference.

**Step 2: Format the page**

Run: `pnpm exec prettier --write src/pages/2026/june.astro`

Expected: Prettier formats the Astro page without errors.

**Step 3: Run static checks**

Run: `pnpm lint`

Expected: Oxlint exits successfully with no errors.

**Step 4: Build the site**

Run: `pnpm build`

Expected: Astro exits successfully and generates the production build.

**Step 5: Inspect and compare the rendered result**

Run the Astro background development server, open the June route at the source
viewport, and capture the action-plan section.

Expected: The rendered section preserves the reference hierarchy, order, copy,
blue IDs, horizontal rules, and light theme without changing shared components.
