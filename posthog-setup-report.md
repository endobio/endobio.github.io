<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the EndoBio marketing site. The site is a React + Vite SPA using React Router 6, deployed on GitHub Pages. Because there is no server-side code, the integration uses `posthog-js` (the browser SDK) rather than `posthog-node`. PostHog is initialized once at app startup in `src/main.tsx` via a shared helper in `src/lib/posthog.ts`. Eight events are tracked across five files, covering the full visitor journey from landing page to audience-specific conversion.

| Event | Description | File |
|---|---|---|
| `hero_cta_clicked` | User clicks For Farmers or For Investors on the home page hero section. Properties: `cta_type` (farmers/investors), `location` (hero) | `src/components/Hero/index.tsx` |
| `vision_cta_clicked` | User clicks For Farmers or For Investors in the bottom Vision/CTA section. Properties: `cta_type` (farmers/investors), `location` (vision) | `src/components/Vision/index.tsx` |
| `farmers_page_viewed` | User navigates to the For Farmers page — top of the farmer conversion funnel | `src/pages/ForFarmers.tsx` |
| `farmer_early_access_clicked` | User clicks the Request early access email CTA — primary farmer conversion event. Properties: `location` | `src/pages/ForFarmers.tsx` |
| `investors_page_viewed` | User navigates to the For Investors page — top of the investor conversion funnel | `src/pages/ForInvestors.tsx` |
| `investor_contact_clicked` | User clicks the Schedule a conversation email CTA — primary investor conversion event. Properties: `location` | `src/pages/ForInvestors.tsx` |
| `header_contact_clicked` | User clicks Contact us in the header navigation. Properties: `location`, `label` | `src/components/Header/index.tsx` |
| `header_get_started_clicked` | User clicks the Get started primary action in the header. Properties: `location`, `label` | `src/components/Header/index.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/456348/dashboard/1675760)
- [Investor Conversion Funnel](https://us.posthog.com/project/456348/insights/zNGZr4Z2) — % of investors page visitors who click to schedule a conversation
- [Farmer Conversion Funnel](https://us.posthog.com/project/456348/insights/UkePVPgx) — % of farmers page visitors who click to request early access
- [Audience Page Views](https://us.posthog.com/project/456348/insights/RcUkFdci) — Daily trend comparing farmer vs investor page engagement
- [Hero & Vision CTA Clicks](https://us.posthog.com/project/456348/insights/NYC65Nku) — CTA engagement across the home page
- [Total Contact Conversions](https://us.posthog.com/project/456348/insights/fkNs3Xu0) — Combined farmer + investor contact conversions (bold number)

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
