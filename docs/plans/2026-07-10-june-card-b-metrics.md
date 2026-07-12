# June CardB Metrics Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Populate the June traffic summary with the four CardB metrics shown in the reference image.

**Architecture:** Keep the existing shared `CardB` and `Quad` components unchanged. Replace the empty CardB usage in the June page with four explicit prop-driven instances.

**Tech Stack:** Astro 7, Astro components, CSS grid

---

### Task 1: Populate the traffic summary cards

**Files:**
- Modify: `src/pages/2026/june.astro`

**Step 1: Replace the empty card**

Replace the single empty `CardB` instance inside the second `Quad` with four
instances containing the Sessions, Organic Search, Referral, and Organic Social
values from the reference image.

**Step 2: Format the page**

Run: `pnpm exec prettier --write src/pages/2026/june.astro`

Expected: Prettier formats the Astro page without errors.

**Step 3: Build the site**

Run: `pnpm build`

Expected: Astro exits successfully and generates the production build.

**Step 4: Inspect the diff**

Run: `git diff -- src/pages/2026/june.astro`

Expected: The diff contains only the four requested CardB instances in the
traffic summary.
