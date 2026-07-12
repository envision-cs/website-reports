# Responsive Table Component Design

The roadmap table will be extracted from `june.astro` into a reusable
`ResponsiveTable.astro` component. The component will accept a caption, column
definitions, row data, an optional minimum width, and an optional class. A
column may identify itself as the row header and may supply a width.

The component will own the semantic table markup and all table-specific CSS.
Its styles will use the report's existing typography, color, and spacing tokens.
At narrow widths, the table will remain readable inside a keyboard-accessible
horizontal overflow region instead of compressing or overlapping columns.

The June page will keep its roadmap data and define only the five column labels,
keys, widths, and row-header designation. The marked inline table and its marker
comments will be replaced with one component instance. No route, dependency, or
unrelated shared component will change.
