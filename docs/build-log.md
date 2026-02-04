# Build Status — Portfolio MVP

Build completed successfully. 13 static routes generated.

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage (featured case studies only) |
| `/about/` | About page |
| `/projects/` | Projects archive (two sections) |
| `/projects/spotify-project/` | Case Study |
| `/projects/financial-blueprint/` | Case Study |
| `/projects/generate-mobile/` | Case Study |
| `/projects/generate-web/` | Case Study |
| `/projects/spring-2025-class-app/` | Case Study |
| `/projects/creative-coding/` | Visual / Exploration |
| `/projects/net-art-authenticity/` | Visual / Exploration |
| `/projects/net-art-influencer-ethics/` | Visual / Exploration |
| `/projects/graphic-design/` | Visual / Exploration |
| `/projects/eagles-booklet/` | Visual / Exploration |

## Adding New Projects

All project content lives in `src/data/projects.ts`.

### Case Studies (UX / Product)

Add to the `caseStudies` array:

```typescript
{
  slug: "project-slug",
  title: "Project Title",
  summary: "One-line summary",
  role: "Your Role",
  year: "2024",
  type: "case-study",
  featured: true,  // true = shows on homepage
  thumbnail: "/images/thumbnail.jpg",
  images: ["/images/image1.jpg"],
  overview: "Project overview.",
  problem: "The problem solved.",
  approach: "How you approached it.",
  outcome: "Results and impact.",
}
```

### Visual Projects (Explorations)

Add to the `visualProjects` array:

```typescript
{
  slug: "project-slug",
  title: "Project Title",
  summary: "One-line summary",
  role: "Your Role",
  year: "2024",
  type: "visual",
  featured: false,
  thumbnail: "/images/thumbnail.jpg",
  images: ["/images/image1.jpg", "/images/image2.jpg"],
  description: "Optional 1-2 line description.",
}
```

### Featured Flag

- `featured: true` on case studies displays them on the homepage
- Visual projects do not appear on the homepage regardless of this flag
- The `/projects/` page shows all projects in both categories

## Navigation

Navigation is fixed and does not grow with content:

```
Home / Projects / About / Contact
```

Adding new projects requires no navigation changes.

## Manual QA Checklist

- [ ] Home: featured case studies render, "View all projects" link works
- [ ] Projects: two sections display, all project links work
- [ ] Case study page: sections render (Overview, Problem, Approach, Outcome)
- [ ] Visual page: image gallery renders, minimal text
- [ ] Mobile: sections stack cleanly, cards remain readable
