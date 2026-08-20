# Shehzaan Khan — Portfolio & Workshop Booking Site

A cinematic Next.js (App Router) portfolio and workshop-booking site for Bollywood
choreographer Shehzaan Khan, "The National Patiala Boy."

> **Content is placeholder.** Bio copy, tour dates, media thumbnails, and the
> hero video are stand-ins — replace them with real assets before launch.

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (scroll reveals, staggered animations)
- Lucide React (icons)
- Radix UI primitives + shadcn-style `Button` component

## Sections / Components

- `src/components/Hero.tsx` — full-bleed autoplay video hero, name overlay, "Book a Workshop" CTA, social proof
- `src/components/Booking.tsx` — tour date cards with scarcity badges ("Selling Fast", "Only 5 Spots Left")
- `src/components/MediaGrid.tsx` — filterable masonry "Choreography Vault" grid
- `src/components/Bio.tsx` — staggered text-reveal credibility/milestones section
- `src/components/Footer.tsx` — social links + copyright

## Replacing placeholder content

Everything editable lives in:

```
src/data/content.ts
```

- `profile` — name, title, hero video URL, follower count, Instagram link
- `tourDates` — city, date, choreography song, spots remaining, badge text
- `mediaItems` — Choreography Vault thumbnails, categories, view counts
- `milestones` — credibility/bio milestones

Replace `profile.heroVideo` with a real hosted video file, and swap
`/public/images/placeholder.svg` references in `mediaItems` for real thumbnails.

## Development

```bash
npm install
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm start        # run the production build
```


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
