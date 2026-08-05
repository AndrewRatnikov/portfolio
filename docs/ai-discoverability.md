# AI Discoverability Research

**Status:** Resolved — answers the "AI-discoverability approach" open question in [prd.md](prd.md).
**Date:** 2026-08-05

## Summary

The two tactics the PRD floated (schema.org structured data + `llms.txt`) are both worth doing, but they are not equally load-bearing. Structured data and not blocking AI crawlers matter a lot; `llms.txt` is cheap but currently low-impact. There is also a foundational layer the PRD didn't mention: AI answer engines mostly ride on top of *existing* search indexes, so classic technical SEO isn't optional — it's the substrate everything else sits on.

All recommendations below are achievable on a static HTML/CSS/JS site with zero new dependencies or build tooling.

## 1. Don't accidentally block AI crawlers

Every major AI answer engine runs its own crawler with a distinct user-agent, and `robots.txt` is still the control surface:

| Bot | Company | Purpose | Recommendation |
|---|---|---|---|
| `OAI-SearchBot` | OpenAI | Powers ChatGPT Search citations | **Allow** |
| `ChatGPT-User` | OpenAI | Live fetch when a user asks ChatGPT to browse | Allow (mostly ignores robots.txt anyway) |
| `GPTBot` | OpenAI | Training data for future models | Optional — allow for long-term model presence, block if only current citations matter |
| `PerplexityBot` | Perplexity | Crawls to answer + cite in Perplexity | **Allow** |
| `Perplexity-User` | Perplexity | Live fetch on user request | Ignores robots.txt regardless |
| `ClaudeBot` / `Claude-User` | Anthropic | Crawl / live-fetch for Claude | **Allow** |
| `Google-Extended` | Google | Governs use in Gemini/AI Overviews (separate from regular Googlebot) | **Allow** — blocking this can suppress AI Overview citations even though normal Google Search indexing is unaffected |

Cloudflare Pages ships a permissive default (no `robots.txt` unless one is added), which is already fine. The main risk is copy-pasting a restrictive template "to block unknown bots" that nets out blocking AI crawlers too. For a single-page portfolio site there is nothing to gain from blocking any of the above.

Side note for later, not actionable now: Cloudflare has published evidence that Perplexity sometimes uses undeclared crawlers that rotate user-agents/IPs to evade `robots.txt`. Not worth designing around for a portfolio site.

## 2. Structured data (schema.org) — highest leverage

The single highest-leverage item for a static site with no backend. Recommended JSON-LD on the homepage:

- **`Person`** — Andrew as an entity: `name`, `jobTitle`, `url`, `sameAs: [github, linkedin]`, `knowsAbout: ["AI automation", "Node.js", "Python", "system integrations"]`
- **`ProfessionalService`** or **`Service`** — the offering itself (full-stack dev / AI automation / no-code integration rescue), so a query like "who can fix ADA & CCPA compliance" or "who can build a custom Make/n8n integration" has a machine-readable entity to match against
- **`WebSite`** with `inLanguage` variants for the EN/ES toggle

`sameAs` links to GitHub and LinkedIn matter more than they sound — they're how AI systems (and Google's Knowledge Graph) tie the entity "Andrew Ratnikov" together across sources instead of treating the portfolio site as an isolated, unverified claim.

`FAQPage` schema is the single highest-value schema type in the broader GEO literature for verbatim citations. This stays inside the PRD's non-goals (no blog/content marketing) if scoped as a short "how I work" FAQ rather than content marketing — it's a discoverability primitive, not a content section. Answers should be answer-first and fact-dense, since that's literally what AI engines lift into citations.

## 3. `llms.txt` — implement, but as a footnote

As of 2026, no major AI provider has confirmed systematic crawling of `llms.txt`. `GPTBot`, `ClaudeBot`, `PerplexityBot`, and `OAI-SearchBot` overwhelmingly crawl HTML directly and largely ignore it. It is not an official web standard, not a confirmed Google ranking factor, and does not replace `robots.txt`, `sitemap.xml`, or schema markup.

Given that, it's a ~20-minute add with no downside: a markdown file at `/llms.txt` per the [official spec](https://llmstxt.org/) — H1 title, blockquote summary, links to key sections. Treat it as a nice-to-have, not the primary discoverability lever.

## 4. Foundation: classic indexing still gates AI visibility

- **ChatGPT Search is Bing-backed.** Being indexed in **Bing Webmaster Tools** (not just Google Search Console) is a prerequisite for ChatGPT to surface the site at all.
- **Google AI Overviews pull from the regular Google index** — there is no separate "AI index" to target. Standard Google Search Console submission + `sitemap.xml` + basic crawlability is the prerequisite, and it's the largest-volume AI surface today.
- Content that gets cited is **answer-first**: direct claims, definitions, and stats stated plainly near the top of a section, with clear headings. The hero/services sections should answer "what does this person do" and "what problem does this solve" in the first sentence rather than lead with a stylistic hook.

## Recommendation

1. **Do:** JSON-LD (`Person` + `ProfessionalService`/`Service` + `sameAs`) on the homepage — highest leverage, directly addresses the "who can fix X" discovery use case.
2. **Do:** Ship a permissive `robots.txt` that doesn't block AI crawlers (or ship none — Cloudflare Pages' default is already fine).
3. **Do:** Submit the sitemap to both Google Search Console and Bing Webmaster Tools once the domain/subdomain is live — this is the actual gate for AI Overviews and ChatGPT Search, not a nice-to-have.
4. **Do, low effort:** Add `/llms.txt` per the official spec — cheap, harmless, mildly future-proofed, but not load-bearing.
5. **Consider:** A short, answer-first FAQ block (not a blog) using `FAQPage` schema — the highest-value schema type for citations while staying inside the PRD's non-goals.

## Sources

- [llmstxt.org — The llms.txt Specification](https://llmstxt.org/)
- [OpenAI — Crawler bots documentation](https://developers.openai.com/api/docs/bots)
- [Perplexity — Crawlers documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)
- [Robots.txt for AI Crawlers: GPTBot, PerplexityBot & GEO Audit — Pixis](https://pixis.ai/blog/robots-txt-for-ai-crawlers-gptbot-perplexitybot-geo-audit/)
- [AI Crawlers Explained: GPTBot, ClaudeBot, and PerplexityBot — Contently](https://contently.com/2026/05/06/ai-crawlers-explained-gptbot-claudebot-perplexitybot/)
- [Structured data: SEO and GEO optimization for AI in 2026 — Digidop](https://www.digidop.com/blog/structured-data-secret-weapon-seo)
- [Schema Markup Playbook for GEO — Passionfruit](https://www.getpassionfruit.com/blog/schema-markup-playbook-for-geo)
- [Should Websites Implement llms.txt in 2026? — LinkBuildingHQ](https://www.linkbuildinghq.com/blog/should-websites-implement-llms-txt-in-2026/)
- [How small businesses are getting found in ChatGPT, Perplexity, and Google AI Overviews — BUILTbyBackspace](https://www.builtbybackspace.com/blog/how-to-rank-in-ai-search-small-business)
