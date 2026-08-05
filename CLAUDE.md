# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

This repository currently contains only a product spec (`docs/prd.md`) — no source code has been written yet, and it is not (yet) a git repository. There are no build, lint, or test commands to document because nothing has been implemented. Read `docs/prd.md` in full before starting implementation work; the summary below captures the decisions that should drive architecture choices once code is added, but the PRD is the source of truth.

## What this project is

A personal portfolio / self-presentation site for Andrew Ratnikov, positioning him as a full-stack developer specializing in AI automations and custom integrations for cases where no-code/low-code tools (Make, n8n) fall short. The site's job is to be credible enough to send to prospective freelance/contract clients and to be discoverable both by traditional SEO and by AI/LLM answer engines.

## Binding technical constraints (from the PRD)

- **Stack: static site only — raw HTML, CSS, and JS. No framework.** This is an explicit requirement to keep the site dependency-light and easy to maintain — don't introduce React/Vue/a static-site generator/bundler unless the PRD is updated.
- **Hosting: Cloudflare Pages**, starting on a free `*.pages.dev` subdomain (no custom domain owned yet).
- **Analytics: Cloudflare Web Analytics** must be enabled.
- **Core Web Vitals target is 5/5** (LCP, INP, CLS all "good") — this is a guardrail metric, not aspirational; avoid choices (heavy JS, unoptimized images, render-blocking assets) that would jeopardize it.
- **Accessibility (WCAG-level)** is a hard requirement: semantic HTML, keyboard navigation, sufficient contrast, alt text, etc.
- **Bilingual: English and Spanish**, via a language toggle. No other languages in scope.
- **Contact is a `mailto:` link only** — no contact form, no third-party form service (Formspree/Web3Forms etc. explicitly deferred pending real-world signal).
- **AI-discoverability is an open problem**, not yet solved. Likely candidates per the PRD: schema.org structured data (`ProfessionalService`/`Person`) and an `llms.txt` file — treat these as options to propose, not settled decisions.

## Explicit non-goals

Do not add these unless the PRD is updated first:
- Blog / content marketing section
- Written case studies or client testimonials
- Support for languages beyond English/Spanish
- A pricing/rate card page
- Any contact mechanism beyond the `mailto:` link

## Content structure expected by the PRD

The single-page site is expected to include: a hero/positioning section, a services section, a projects/portfolio section (expected to grow incrementally as new pet projects ship — design for easy addition of entries), an about section, and outbound links to GitHub and LinkedIn.
