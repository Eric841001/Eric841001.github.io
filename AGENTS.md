# Blog authoring and verification

- Work only in this local non-OneDrive checkout. Preserve the original OneDrive checkout.
- Edit docs/microsoft365/e3-vs-e5.md as the licensing source; run npm run sync:licensing to update the second route.
- Keep src/data/documentReviews.json up to date for every added or substantively changed document. Select relevant primary sources, read current conditions, and describe what was actually checked. Do not update dates as a substitute for reviewing content. Record document-specific scope, reviewLevel, notChecked limits and a checkedFor finding for each source. Use the exact review-level labels accepted by verify-source-reviews.js. URL success and a related product link do not establish factual accuracy or tenant testing.
- Keep src/data/updateHighlights.js and current model/rollout guidance consistent. Historical material must be dated and distinguished from current advice.
- Long guides use ReadingSection/ReadingSummary and ReadingControls. Preserve text, heading IDs and old deep links when rearranging content.
- Run npm run sync:licensing, npm run verify:content and npm run build before publishing. Check rendering, dark/light contrast, fragment links and public deployment.
- Do not publish recovery files, customer secrets or private audit evidence.

# Korean copy
- Write Korean sentences in natural, direct language. Explain concrete tasks, conditions and responsible people.
- Keep official product names, UI labels and code identifiers accurate. Translate ordinary English nouns in Korean prose when the Korean word is clear.
- Avoid repeated promotional claims and stock contrasts such as "단순한 X가 아니라 Y". Do not claim that wording proves human authorship or that an AI detector can certify it.
- Preserve headings/anchor IDs, URLs, code examples and factual qualifications during copy edits.

- After building, run npm run verify:search. Check Korean, English and error-code searches in the browser when changing search configuration or Korean copy.
