# Portfolio / Self-Presentation Site — PRD

**Author:** Andrew Ratnikov | **Date:** 2026-08-05 | **Status:** Draft

## Problem & Context

The freelance/contract market is tough right now. Andrew wants to sell himself as a full-stack developer specializing in AI automations, and needs a place to send potential clients that's more credible and more targeted than a raw GitHub profile or LinkedIn page. Today, prospects have nowhere to go but GitHub and LinkedIn — neither of which makes a clear "hire me for freelance/contract work" pitch or showcases pet projects as proof of skill.

The specific wedge: businesses often hit a wall with no-code/low-code tools (Make, n8n) — the platform doesn't support their system, and the integration breaks. Andrew positions himself as the specialist who steps in and builds the custom fix in Node, Python, or whatever the job needs.

## Goals

- Site is credible enough that Andrew is comfortable sending the link to a prospective client without hesitation.
- Site is optimized for discovery — both traditional SEO and AI/LLM answer engines — so that when someone (or an AI assistant on their behalf) searches for something like "who can fix ADA & CCPA compliance," Andrew's site can surface as a match.
- Available in English and Spanish.
- Achieves a perfect Core Web Vitals score (5/5) and meets accessibility (a11y) standards.
- Deployed on Cloudflare with Cloudflare Web Analytics enabled.

## Non-Goals

- Blog / content marketing section
- Written case studies or client testimonials
- Multi-language support beyond English and Spanish
- Pricing/rate card page
- Any contact mechanism beyond a direct email link (for now — see Open Questions)

## Target Users & Use Cases

Two overlapping audiences:
1. **Direct clients** — founders and small business owners looking to hire a freelancer directly.
2. **Agencies / dev shops** — looking to subcontract work they can't cover in-house.

**Primary use case:** A business is using (or trying to use) Make/n8n for an integration, and the no-code tool doesn't support what they need. They (or an AI assistant they've asked) search for a specialist who can bridge that gap with custom code. They land on Andrew's site, quickly understand he's a full-stack developer who solves exactly this kind of problem, see proof via his project portfolio, and email him.

## Requirements

### Functional

1. Hero/positioning section stating Andrew's value proposition: full-stack developer specializing in AI automations and custom integrations where no-code tools fall short.
2. Services section describing what he offers (AI automations, low-code/no-code integration rescue via custom code, general full-stack development).
3. Projects/portfolio section showcasing pet projects as proof of skill; list is expected to grow over time as new projects are added.
4. About section.
5. Links out to GitHub and LinkedIn profiles.
6. Contact via a direct `mailto:` email link.
7. Language toggle between English and Spanish.

### Non-Functional

1. Core Web Vitals: target 5/5 (LCP, INP, CLS all in the "good" range).
2. Accessibility: meets WCAG-level a11y standards (semantic HTML, keyboard navigation, sufficient contrast, alt text, etc.).
3. Hosting: deployed on Cloudflare (Pages), starting on a free `*.pages.dev` subdomain — no custom domain owned yet.
4. Analytics: Cloudflare Web Analytics enabled.
5. Stack: static site — raw HTML, CSS, and JS (no framework), keeping it dependency-light and easy to maintain.

## Success Metrics

- **Target:** at least 1 freelance inquiry per month.
- **Guardrail:** Core Web Vitals stays at 5/5; accessibility standards are maintained as content is added.
- Andrew will revisit this metric after one month to decide whether positioning, content, or design needs adjustment.

## Scope & Timeline

- **Timeline:** draft version live by the end of this week.
- **Dependencies:** none blocking — no domain currently owned; a free Cloudflare Pages subdomain is sufficient to start. Portfolio content will grow incrementally as new pet projects are finished.

## Risks & Open Questions

- **Contact form:** Not yet decided whether a form (via a service like Formspree/Web3Forms) will be added alongside or instead of the email link. Starting with email only; will revisit based on how that performs.
- **AI-discoverability approach:** ~~Not yet researched.~~ **Answered** — see [ai-discoverability.md](ai-discoverability.md). Recommendation: `Person` + `ProfessionalService` + `sameAs` JSON-LD (highest leverage), a permissive `robots.txt` that allows AI crawlers, Google Search Console + Bing Webmaster Tools submission (gates AI Overviews / ChatGPT Search), and a low-effort `/llms.txt`.
- **Content risk:** The portfolio section's credibility depends on having enough finished pet projects to show; list will be built out over time as new projects are completed.
- **Positioning risk:** "Full-stack developer + AI automations + no-code rescue" is Andrew's current pitch; not yet validated against real inquiries. To be reassessed after ~1 month of data against the success metric.
