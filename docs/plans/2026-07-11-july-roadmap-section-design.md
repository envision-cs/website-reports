# July Roadmap Section Design

The June report will gain a new dark section after section 06 that recreates
the supplied “07 — What’s Next?” reference. The existing `SectionHeader`,
`Duplex`, and container patterns will establish the two-column introduction,
while a native HTML table will present the seven roadmap initiatives.

The table will preserve the reference columns and copy: initiative, status,
owner, due date, and success metric. Desktop widths will use the compact,
ruled layout shown in the screenshot. Narrow screens will retain the same
column relationships inside a horizontally scrollable wrapper so labels and
values do not collapse or overlap.

All styles will be scoped to `june.astro`. No shared component APIs, assets,
dependencies, or routes will change.
