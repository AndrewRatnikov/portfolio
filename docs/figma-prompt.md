# Figma AI Design Prompt

Prompt for Figma's AI design tool (First Draft / Figma Make) to generate a starting visual design for the portfolio site, based on [prd.md](prd.md).

---

Design a single-page portfolio website for a freelance full-stack developer.

**Positioning:** Andrew Ratnikov, a full-stack developer who specializes in AI automations and custom integrations — specifically stepping in when no-code/low-code tools like Make or n8n hit a wall and a business needs custom code (Node, Python, etc.) instead. The design needs to feel credible and professional enough to send directly to a prospective freelance/contract client — not a hobbyist portfolio.

**Style:** Clean, modern, minimal, developer-credible — think technical/trustworthy rather than flashy or agency-glossy. Generous whitespace, strong typography hierarchy, restrained color palette (1 accent color + neutrals). Should read as fast and lightweight (this will be built as a static HTML/CSS/JS site with no framework, so avoid layouts that imply heavy JS/animation dependencies).

**Sections (in order):**
1. **Hero** — headline stating the value prop (full-stack dev, AI automations, custom integrations where no-code tools fall short), short supporting line, primary CTA (email/contact).
2. **Services** — 3 cards/columns: AI automations, no-code/low-code integration rescue via custom code, general full-stack development.
3. **Projects/Portfolio** — grid or list of project cards (title, short description, tags, link) designed to scale easily as more entries are added over time.
4. **About** — short bio section, professional but personal.
5. **Contact/Footer** — `mailto:` email link (no contact form), links out to GitHub and LinkedIn, plus a language toggle (EN/ES).

**Constraints to reflect in the design:**
- Must look accessible: high contrast text, clear focus states, readable font sizes, no reliance on color alone to convey meaning.
- Design for a bilingual toggle (EN/ES) — keep copy areas flexible enough for text length changes between languages.
- No blog, no testimonials/case studies, no pricing page, no contact form — keep scope exactly to the sections above.
- Should feel equally credible to two audiences: individual founders/small business owners, and agencies/dev shops looking to subcontract.

**Deliverables:** Desktop and mobile frames, with light mode as primary (dark mode optional nice-to-have).
