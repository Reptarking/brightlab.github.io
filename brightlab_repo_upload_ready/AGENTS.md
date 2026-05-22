# Codex instructions — Brightlab

This repo uses the Brightlab brand system. Before editing UI, landing pages, marketing pages, decks, visual components, copy, or assets, follow these rules.

The brand manual is the source of truth. UI decisions must adapt the brand system to digital interfaces without breaking its identity.

---

## Main assets

Use these paths by default:

- Primary logo: `/public/assets/brand/logo-primary.png`
- Transparent full logo: `/public/assets/brand/logo-transparent.png`
- Dark wordmark on transparent background: `/public/assets/brand/logo-wordmark-dark.png`
- Primary isotype: `/public/assets/brand/isotype-primary.png`
- Transparent isotype: `/public/assets/brand/isotype-transparent.png`
- Favicon/social avatar base: `/public/assets/brand/isotype-favicon.png`

Secondary logo variants are available in:

- `/public/assets/brand/variants/png/`
- `/public/assets/brand/variants/jpg/`

Prefer PNG for web. JPG files are only fallbacks.

Full brand summary:

- `/docs/brand/BRIGHTLAB_BRAND_SUMMARY.md`

---

## Brand rules

- Do not stretch, rotate, recolor, distort, crop, add shadows, or add visual effects to the logo or isotype.
- Do not recreate the logo as live text.
- Preserve clear space around the logo.
- Minimum digital width for the full logo: 120px.
- Use only the approved brand colors.
- Use rounded visual language: cards around 20px radius; small UI/table elements around 8px–12px radius.
- Imagery should feel clean, professional, technological, and business-oriented.

### Approved colors

Main colors:

- Dark Purple: `#15182D`
- White: `#FFFFFF`
- Light Green: `#D7FF7B`

Secondary colors:

- Electric Purple: `#4D61F4`
- Light Purple: `#CFB6FF`
- Dark Grey: `#1D1D1B`

Do not introduce unrelated colors unless explicitly requested.

### Approved typography

Use the approved brand typography:

- Headings: Space Grotesk
- Body text: Roboto

Fonts may be loaded from Google Fonts, but do not replace them with other font families unless explicitly approved.

Do not use generic substitutes such as Inter, Poppins, Montserrat, Lato, or Open Sans unless the brand system is intentionally updated.

### Icon style

Use Google Material Design Rounded/outlined icons when icons are needed.

Preferred icon style:

- Rounded / outlined
- Weight 300
- Grade 200
- Optical size 24px

Avoid mixing icon families unless explicitly required.

---

## UI Designer behavior

When modifying UI, act as a senior product/UI designer and frontend developer, not only as a coder.

Before changing code:

- Review the current visual hierarchy, spacing, alignment, contrast, and responsiveness.
- Preserve the Brightlab brand identity.
- Do not redesign everything unless explicitly requested.
- Prefer small, high-impact improvements over unnecessary visual complexity.
- Keep the interface clean, premium, modern, and business-oriented.
- Avoid making the site look like a generic startup template.

Design priorities:

1. Clarity: users must immediately understand what Brightlab does.
2. Conversion: important CTAs must be visible, clear, and visually dominant.
3. Consistency: repeated UI patterns must use the same spacing, radius, typography, and button styles.
4. Responsiveness: desktop, tablet, and mobile must all be considered.
5. Accessibility: maintain readable contrast, usable font sizes, and keyboard-friendly interactions.
6. Performance: avoid unnecessary heavy assets, libraries, animations, or layout shifts.

---

## Visual design rules

- Use generous whitespace.
- Avoid overcrowded sections.
- Avoid too many competing gradients, shadows, borders, glows, or animations.
- Use one clear primary CTA per main section.
- Secondary CTAs should be visually quieter.
- Cards should feel consistent across services, benefits, testimonials, case studies, or feature sections.
- Animations should be subtle and should not distract from the message.
- Do not add decorative elements that do not support comprehension, hierarchy, or conversion.
- Prefer premium restraint over visual noise.

---

## Gradient background rules

Use custom gradients only when they support the Brightlab brand and improve visual hierarchy.

Preferred gradient direction:

- Dark Purple `#15182D` as the main base.
- Electric Purple `#4D61F4` as a secondary glow/accent.
- Light Green `#D7FF7B` only as a controlled accent, never as a full dominant background.
- Light Purple `#CFB6FF` can be used for soft highlights or subtle depth.

Do not use:

- Generic rainbow gradients.
- Neon-heavy backgrounds.
- Gradients that reduce text readability.
- Gradients that make the brand look playful, childish, or visually cheap.
- Multiple unrelated gradients across many sections.

Gradient usage:

- Use gradients mainly in hero sections, CTA blocks, feature highlights, and background accents.
- Keep content cards readable with solid or semi-transparent backgrounds.
- Text must always maintain strong contrast.
- Avoid placing long paragraphs directly over complex gradients.
- Prefer subtle radial glows, blurred gradient blobs, or layered backgrounds over aggressive linear gradients.

Recommended style:

- Premium.
- Clean.
- Technological.
- Business-oriented.
- Subtle depth rather than decorative noise.
- Intentional and aligned with the Brightlab brand.

Before finishing any gradient change:

- Check desktop and mobile readability.
- Check that CTA buttons remain visually dominant.
- Check that the logo is not placed over a visually noisy area.

---

## 3D imagery rules

3D imagery is allowed only when it reinforces the Brightlab identity.

Allowed 3D style:

- Abstract technological objects.
- Data/network/AI-inspired forms.
- Clean, premium, business-oriented visuals.
- Soft lighting, subtle depth, and controlled gradients.
- Colors aligned with the Brightlab palette.
- Visuals that support concepts such as intelligence, data, automation, systems, growth, or digital transformation.

Avoid:

- Cartoonish 3D characters.
- Generic startup illustrations.
- Overly playful, childish, or plastic-looking renders.
- Random stock 3D assets with inconsistent colors or lighting.
- Heavy images that slow down the page.
- Visuals that compete with the main message or CTA.
- Images that feel disconnected from consulting, analytics, technology, or business value.

3D assets should be used mainly in:

- Hero section.
- Feature highlights.
- Background accents.
- CTA blocks.

Do not use 3D imagery in every section. Preserve whitespace and readability.

---

## Component and design system rules

When creating or editing components, prioritize reusability and consistency.

Reusable elements may include:

- Buttons.
- Cards.
- Hero sections.
- Service cards.
- Feature blocks.
- CTA sections.
- Forms.
- Navigation bars.
- Footer blocks.
- Badges.
- Pills.
- Testimonial cards.
- Metric blocks.
- Case study cards.

Component rules:

- Do not create multiple visual versions of the same component without a clear reason.
- Reuse existing classes, tokens, and CSS variables whenever possible.
- Keep button styles consistent across the site.
- Keep card spacing, border radius, shadows, and borders consistent.
- Keep section padding consistent.
- Avoid one-off styles unless the section truly needs a special treatment.

If a component gallery or component preview page exists, update it when creating new reusable components.

---

## Content and copy rules

Do not invent:

- Business claims.
- Metrics.
- Clients.
- Certifications.
- Partnerships.
- Case studies.
- Testimonials.
- Awards.
- Revenue numbers.
- Guarantees.

Improve wording only when it makes the message clearer, shorter, or more persuasive.

Copy should be:

- Professional.
- Direct.
- Easy to understand.
- Business-oriented.
- Specific enough to feel credible.
- Free of empty buzzwords.

Avoid generic phrases such as:

- “We transform your business with innovation.”
- “We are passionate about technology.”
- “Next-generation solutions.”
- “Unlock your potential.”
- “Empowering digital transformation.”

Prefer concrete positioning around:

- AI.
- Analytics.
- Automation.
- Growth.
- Customer intelligence.
- Operational efficiency.
- Data-driven decisions.
- Business outcomes.

---

## Layout and responsive rules

Every UI change must consider:

- Desktop.
- Tablet.
- Mobile.

Responsive rules:

- Avoid layouts that only work on desktop.
- Ensure hero sections remain readable on mobile.
- CTAs must remain visible and tappable on mobile.
- Cards should stack cleanly on smaller screens.
- Avoid horizontal scrolling unless explicitly intended.
- Use fluid spacing and typography where appropriate.
- Keep mobile navigation simple and usable.

---

## Accessibility rules

Maintain basic accessibility standards:

- Strong color contrast for text.
- Minimum readable font sizes.
- Clear focus states for interactive elements.
- Buttons and links must be understandable without relying only on color.
- Images should have meaningful alt text when relevant.
- Decorative images should not add unnecessary noise for screen readers.
- Avoid tiny clickable elements.
- Avoid animations that are excessive or distracting.

---

## Performance rules

Do not add unnecessary heavy dependencies.

Avoid:

- Large animation libraries unless already used.
- Heavy unoptimized images.
- Multiple font families.
- Unused CSS.
- Layout shifts caused by late-loading media.
- Excessive shadows, filters, or blur effects that may hurt performance.

When adding images:

- Prefer optimized formats.
- Use appropriate dimensions.
- Avoid oversized assets.
- Keep the page fast and lightweight.

---

## Implementation rules

- Reuse existing CSS variables, utility classes, and components when available.
- Do not duplicate styles unnecessarily.
- Do not break existing asset paths.
- Do not remove existing sections unless explicitly requested.
- Do not change unrelated sections while working on a specific task.
- Do not introduce a new framework unless explicitly requested.
- Keep the code simple and maintainable.
- Preserve the current project structure unless there is a clear reason to change it.
- When editing HTML/CSS/JS, keep naming readable and consistent.
- Avoid inline styles unless necessary.
- Prefer semantic HTML.

---

## Brand compliance checklist

Before finishing any UI change, verify:

- Logo is not distorted, recolored, cropped, or recreated as text.
- Typography follows the approved system.
- Colors are from the approved palette.
- Gradients are subtle and brand-aligned.
- 3D imagery does not make the brand look generic or childish.
- CTAs are clear and visually prioritized.
- Text is readable across backgrounds.
- Desktop and mobile layouts remain clean and readable.
- Visual changes improve the site instead of only adding decoration.

---

## Before finishing

Before completing a task, provide a short summary with:

- What changed.
- Why it changed.
- Any design tradeoffs.
- Anything that still needs human review in the browser.

When possible, run the project locally and check for obvious visual or console errors.