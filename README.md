# Anna Bartlett Portfolio

A minimal, design-forward portfolio site built with [Astro](https://astro.build).

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## How to Edit Content

All editable content lives in **one file**: `src/data/projects.ts`

### Update Your Personal Info

Open `src/data/projects.ts` and edit the `siteContent` object:

```typescript
export const siteContent = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your one-line positioning statement.",
  intro: "A brief intro about yourself.",

  email: "you@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",

  siteUrl: "https://yourdomain.com",
  description: "SEO description for your site.",
  ogImage: "/images/og-image.png",
};
```

### Add or Edit Projects

In the same file, edit the `projects` array. Each project needs:

```typescript
{
  slug: "url-friendly-name",      // Used in URL: /projects/url-friendly-name
  title: "Project Title",
  subtitle: "Brief descriptor",   // Shown on cards
  year: "2024",
  role: "Your Role",
  thumbnail: "/images/project-thumbnail.jpg",
  overview: "2-3 sentences about the project.",
  challenge: "The problem you solved.",
  approach: "How you approached it.",
  outcome: "Results and impact.",
  images: ["/images/project-1.jpg", "/images/project-2.jpg"],
  featured: true,                 // Set to true to show on homepage
}
```

### Add Images

1. Place images in the `public/images/` folder
2. Reference them as `/images/filename.jpg` in your project data
3. Recommended sizes:
   - Thumbnails: 800x600px
   - Gallery images: 1200px wide
   - OG image: 1200x630px

## Project Structure

```
anna-portfolio/
├── public/
│   ├── images/           # Your project images go here
│   └── favicon.svg
├── src/
│   ├── components/       # Reusable UI components
│   ├── data/
│   │   └── projects.ts   # ← EDIT THIS FILE for all content
│   ├── layouts/
│   │   └── Layout.astro  # Base layout with SEO
│   ├── pages/
│   │   ├── index.astro   # Homepage
│   │   └── projects/
│   │       └── [slug].astro  # Dynamic project pages
│   └── styles/
│       └── global.css    # All styles
└── astro.config.mjs
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repository
4. Vercel auto-detects Astro - just click "Deploy"

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository and deploy

### GitHub Pages

1. Install the GitHub Pages adapter:
   ```bash
   npx astro add @astrojs/netlify
   ```
2. Update `astro.config.mjs` to set your base path
3. Enable GitHub Pages in your repository settings

## Customization

### Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --color-text: #1a1a1a;
  --color-text-secondary: #666666;
  --color-background: #fafafa;
  --color-accent: #1a1a1a;
  /* ... */
}
```

### Typography

The site uses Inter (loaded from Google Fonts). To change fonts:

1. Update the Google Fonts link in `src/layouts/Layout.astro`
2. Update `--font-sans` in `src/styles/global.css`

## Commands

| Command           | Action                                       |
|-------------------|----------------------------------------------|
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview build locally                        |

## License

This project is for personal use.
