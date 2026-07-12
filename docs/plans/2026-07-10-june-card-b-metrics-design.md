# June CardB Metrics Design

The June traffic summary will use the existing `Quad` layout and `CardB`
component. The current empty card will be replaced with four explicit component
instances so the small, fixed set of metrics remains easy to read and edit.

The cards will preserve the order and copy from the supplied reference:

1. Sessions — 1,540 — From ~1,190 unique visitors
2. Organic Search — 191 — 12% of sessions
3. Referral — 159 — 10% of sessions
4. Organic Social — 8 — Under 1% · email: 2

No component styles, layout behavior, or shared APIs will change. Verification
will format the page and run the production build.
