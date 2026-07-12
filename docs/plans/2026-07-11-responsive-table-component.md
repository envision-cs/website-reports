# Responsive Table Component Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Extract the June roadmap table into a reusable, responsive Astro component styled with the existing report design tokens.

**Architecture:** Create a data-driven `ResponsiveTable.astro` component that renders semantic headers and cells from column definitions and row objects. Keep report-specific content in `june.astro`; keep reusable markup, overflow behavior, and visual styling in the component.

**Tech Stack:** Astro 7, TypeScript props, semantic HTML table, scoped CSS

---

### Task 1: Create the shared responsive table

**Files:**

- Create: `src/components/ResponsiveTable.astro`

**Step 1: Define the public API**

Add exported `TableColumn` and `TableRow` types. Accept `caption`, `columns`,
`rows`, optional `minWidth`, and optional `class` props.

**Step 2: Render semantic markup**

Render a visually hidden caption, a colgroup, column headers, and body rows.
Render the configured row-header column as `<th scope="row">`; render all other
values as `<td>`.

**Step 3: Add responsive project styling**

Use existing font, text, gray, and spacing tokens. Preserve fixed column widths,
horizontal rules, compact report typography, and horizontal overflow on narrow
viewports.

### Task 2: Replace the June inline table

**Files:**

- Modify: `src/pages/2026/june.astro`

**Step 1: Add the component import and column definitions**

Import `ResponsiveTable` and its column type. Define the roadmap columns next to
the existing roadmap row data.

**Step 2: Replace the marked block**

Remove `// Convert to table componet`, the inline table markup, and the trailing
marker. Render `ResponsiveTable` with the roadmap caption, columns, and rows.

### Task 3: Verify the extraction

**Files:**

- Verify: `src/components/ResponsiveTable.astro`
- Verify: `src/pages/2026/june.astro`

**Step 1: Format the changed files**

Run: `pnpm exec prettier --write src/components/ResponsiveTable.astro src/pages/2026/june.astro`

Expected: Prettier exits successfully.

**Step 2: Run static checks**

Run: `pnpm lint`

Expected: Oxlint exits successfully with no errors.

**Step 3: Build the site**

Run: `pnpm build`

Expected: Astro produces both static routes successfully.

**Step 4: Inspect the rendered roadmap**

Open `/2026/june`, confirm the table caption remains accessible, all seven rows
and five columns render, the marked comments are gone, desktop column rhythm is
preserved, and the wrapper prevents page-level horizontal overflow.
