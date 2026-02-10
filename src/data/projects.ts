// =============================================================================
// PROJECT DATA - Edit this file to add/update your portfolio projects
// =============================================================================

export type ProjectType = "case-study" | "visual";

// Base fields shared by all projects
interface ProjectBase {
  slug: string;
  title: string;
  summary: string;       // Tagline shown in hero + cards
  role: string;
  year: string;
  type: ProjectType;
  featured?: boolean;
  thumbnail: string;
  images: string[];
}

// Image with optional caption
export interface ProjectImage {
  src: string | null;  // null for placeholder
  alt: string;
  caption?: string;
  placeholderLabel?: string;  // Label shown when src is null
}

// Image block for case studies (groups of images with layout)
export interface ImageBlock {
  title?: string;
  layout: "single" | "grid";
  images: ProjectImage[];
}

// Case study metadata for hero
export interface CaseStudyMeta {
  role: string;
  timeline?: string;
  team?: string;
  client?: string;
}

// Case study: narrative-heavy with structured sections
export interface CaseStudy extends ProjectBase {
  type: "case-study";
  meta: CaseStudyMeta;

  // Branded hero
  brandColor?: string;                    // Hex color for hero background
  heroTextColor?: "light" | "dark";       // Text color variant

  // Required sections
  overview: string;
  problem: string;
  approach: string;
  outcome: string;

  // Optional sections
  context?: string;
  solution?: string;
  reflection?: string;
  credits?: string;

  // Structured images with captions (optional upgrade from images[])
  gallery?: ProjectImage[];

  // Image blocks with layout control
  imageBlocks?: ImageBlock[];

  // Key impacts/highlights (optional bullet list)
  keyImpacts?: string[];
}

// Visual project: image-forward, minimal text
export interface VisualProject extends ProjectBase {
  type: "visual";
  description?: string;
}

export type Project = CaseStudy | VisualProject;

// =============================================================================
// CASE STUDIES - UX / Product Projects (ordered by relevance)
// =============================================================================

export const caseStudies: CaseStudy[] = [
  // TODO: Replace placeholder content with your actual projects
  {
    slug: "spotify-project",
    title: "Spotify Project",
    summary: "Enhancing music discovery through personalized experiences",
    role: "Product Designer",
    year: "2024",
    type: "case-study",
    featured: true,
    thumbnail: "/images/placeholder.svg",
    images: ["/images/placeholder.svg"],
    meta: {
      role: "Product Designer",
      timeline: "8 weeks",
      team: "Solo project",
    },
    brandColor: "#1DB954",
    heroTextColor: "light",
    overview: "A design exploration focused on improving how users discover new music through Spotify's recommendation systems.",
    context: "Spotify's algorithm-driven playlists are powerful, but users often feel stuck in recommendation loops that reinforce existing preferences rather than expanding musical horizons.",
    problem: "Users often fall into listening loops, missing opportunities to discover new artists and genres that match their evolving tastes.",
    approach: "Conducted user research to understand discovery patterns, then designed new touchpoints that surface relevant music at natural moments in the listening experience.",
    solution: "Proposed a set of features that introduce contextual discovery moments—gentle nudges that appear when users show signals of openness to new music.",
    outcome: "Proposed features that balance familiarity with discovery, helping users expand their musical horizons while maintaining engagement.",
    reflection: "This project reinforced the importance of respecting user intent. Discovery features work best when they feel like helpful suggestions, not interruptions.",
    gallery: [
      { src: "/images/placeholder.svg", alt: "Research findings", caption: "Key insights from user interviews" },
      { src: "/images/placeholder.svg", alt: "Design explorations", caption: "Early wireframes exploring discovery touchpoints" },
    ],
  },
  {
    slug: "financial-blueprint",
    title: "Financial Blueprint",
    summary: "Making personal finance accessible and actionable",
    role: "UX Designer",
    year: "2024",
    type: "case-study",
    featured: true,
    thumbnail: "/images/placeholder.svg",
    images: ["/images/placeholder.svg"],
    meta: {
      role: "UX Designer",
      timeline: "12 weeks",
      team: "2 designers, 3 engineers",
    },
    brandColor: "#1e3a5f",
    heroTextColor: "light",
    overview: "A financial planning tool designed to help young professionals build healthy money habits through clear, actionable guidance.",
    context: "Many financial apps assume users already understand budgeting, investing, and savings. This creates a barrier for people who want to improve their finances but don't know where to start.",
    problem: "Many people feel overwhelmed by financial planning tools that assume prior knowledge or present information in intimidating ways.",
    approach: "Designed a step-by-step experience that breaks down complex financial concepts into manageable actions, using plain language and progressive disclosure.",
    solution: "A guided onboarding flow that assesses financial literacy and tailors the experience accordingly, paired with a simplified dashboard that prioritizes next actions over data.",
    outcome: "Created a prototype that tested well with users who previously avoided financial planning, demonstrating increased confidence in money management.",
    reflection: "The biggest lesson was that simplicity isn't about removing features—it's about sequencing information so users never feel lost. Meeting people where they are, rather than where we assume they should be, made all the difference.",
    gallery: [
      { src: "/images/placeholder.svg", alt: "User journey map", caption: "Mapping the emotional journey of financial planning" },
    ],
  },
  {
    slug: "vetted",
    title: "Vetted",
    summary: "A two-sided platform for trusted, specialized veterinary care",
    role: "UX/UI Designer",
    year: "2025",
    type: "case-study",
    featured: true,
    thumbnail: "/images/placeholder.svg",
    images: ["/images/placeholder.svg"],
    meta: {
      role: "UX/UI Designer",
      timeline: "Spring 2025",
      team: "12-person cross-functional team",
      client: "Generate",
    },
    brandColor: "#A13307",
    heroTextColor: "light",
    overview: "Vetted is a veterinary care platform that helps pet owners find trustworthy, specialized care and follow through during recovery. I supported end-to-end product design across web and mobile, with a focus on trust signals, scalable UI patterns, and clear multi-user workflows.",
    context: `<a href="https://generatenu.com/" target="_blank" rel="noopener noreferrer" class="link">Generate (Northeastern University)</a>, a student-run product studio, partnered with veterinary clinics to explore a modern platform that could compete with legacy systems. The project spanned two phases: a web experience for clinic staff, followed by a mobile experience for pet owners.`,
    problem: "Pet owners often struggle to verify whether a provider is qualified for post-op care, medication administration, or special-needs boarding. Existing pet platforms don't meaningfully support recovery workflows, and 'trust' is usually implied rather than proven.",
    approach: "We combined stakeholder interviews, competitive analysis, and rapid flow mapping to define a two-sided marketplace. We focused the UX on credential verification, role-specific dashboards, and clear coordination—so pet owners could book confidently and providers could manage care without cognitive overload.",
    solution: "We designed Vetted as a trust-first marketplace with verified provider profiles, geospatial search, and role-specific workflows. The experience centers on credential transparency, clear booking states, and a communication layer that stays attached to real care episodes—not generic messaging.",
    outcome: "The final prototype established a credible foundation for a specialized-care marketplace: verified profiles, cleaner multi-user coordination, and a scalable component system. The work was presented at Generate's semester-end showcase and validated strong demand for specialized-care discovery—while revealing where onboarding needed to be shorter.",
    reflection: "Designing a two-sided care marketplace taught me how quickly complexity compounds when multiple roles, pets, and care states intersect. The biggest shift for me was leaning into systems—shared components, clear hierarchy, and consistent patterns—so we could move fast without losing trust or clarity. I also learned how much stronger the design becomes when it's negotiated alongside engineering constraints early, rather than 'handed off' at the end.",
    imageBlocks: [
      {
        title: "Marketplace overview",
        layout: "grid",
        images: [
          { src: null, alt: "Homepage and search entry", caption: "Homepage entry + search results showing filters and trust signals.", placeholderLabel: "Add screenshot: Homepage + Search" },
          { src: null, alt: "Provider profile with credentials", caption: "Provider profile with verified credentials and service offerings.", placeholderLabel: "Add screenshot: Provider Profile" },
        ],
      },
      {
        title: "Role-specific dashboards",
        layout: "grid",
        images: [
          { src: null, alt: "Provider dashboard", caption: "Provider dashboard (bookings, patient details, actions, messages).", placeholderLabel: "Add screenshot: Provider Dashboard" },
          { src: null, alt: "Pet owner dashboard", caption: "Pet owner view (appointments, care timeline, tracking, communication).", placeholderLabel: "Add screenshot: Owner Dashboard" },
        ],
      },
      {
        title: "Booking + communication flow",
        layout: "single",
        images: [
          { src: null, alt: "Booking flow and careboard messages", caption: "Booking steps + Careboard messaging in-context with the active booking.", placeholderLabel: "Add screenshot: Booking + Careboard" },
        ],
      },
    ],
    keyImpacts: [
      "Established trust through credential verification and professional authentication patterns.",
      "Designed role-specific dashboards that reduced coordination friction across owners and providers.",
      "Created a scalable component library that supported both web and mobile surfaces.",
      "Validated demand for specialized-care discovery while identifying onboarding simplification opportunities.",
    ],
  },
  {
    slug: "spring-2025-class-app",
    title: "Spring 2025 Class App",
    summary: "Rethinking the classroom experience (In Progress)",
    role: "UX Designer",
    year: "2025",
    type: "case-study",
    featured: false,
    thumbnail: "/images/placeholder.svg",
    images: ["/images/placeholder.svg"],
    meta: {
      role: "UX Designer",
      timeline: "Ongoing",
      team: "Academic project",
    },
    overview: "An ongoing project exploring how technology can enhance in-person learning without replacing human connection.",
    problem: "Current classroom apps often distract from learning or create unnecessary friction in student-teacher interactions.",
    approach: "Researching pain points in current classroom technology and prototyping lightweight interventions that support rather than supplant traditional teaching.",
    outcome: "Project in progress — focusing on solutions that fade into the background when not needed.",
    reflection: "Early research revealed that the best classroom tech is invisible. This project is shifting my perspective from 'what can technology add?' to 'what friction can technology remove?'",
  },
];

// =============================================================================
// VISUAL PROJECTS - Explorations & Creative Work (ordered by relevance)
// =============================================================================

export const visualProjects: VisualProject[] = [
  {
    slug: "creative-coding",
    title: "Creative Coding",
    summary: "Generative art and interactive experiments",
    role: "Designer & Developer",
    year: "2024",
    type: "visual",
    featured: false,
    thumbnail: "/images/placeholder.svg",
    images: ["/images/placeholder.svg", "/images/placeholder.svg", "/images/placeholder.svg"],
    description: "Explorations in generative art using code as a creative medium.",
  },
  {
    slug: "net-art-authenticity",
    title: "Net Art: Authenticity vs. Commercialism",
    summary: "Exploring tensions in online creative spaces",
    role: "Artist",
    year: "2024",
    type: "visual",
    featured: false,
    thumbnail: "/images/placeholder.svg",
    images: ["/images/placeholder.svg", "/images/placeholder.svg"],
    description: "A web-based piece examining how authenticity is performed and commodified online.",
  },
  {
    slug: "net-art-influencer-ethics",
    title: "Net Art: Influencer Ethics",
    summary: "Ethical dilemmas in influencer marketing",
    role: "Artist",
    year: "2024",
    type: "visual",
    featured: false,
    thumbnail: "/images/placeholder.svg",
    images: ["/images/placeholder.svg", "/images/placeholder.svg"],
    description: "An interactive exploration of the moral complexities in sponsored content and audience trust.",
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    summary: "Selected print and digital design work",
    role: "Graphic Designer",
    year: "2023–2024",
    type: "visual",
    featured: false,
    thumbnail: "/images/placeholder.svg",
    images: ["/images/placeholder.svg", "/images/placeholder.svg", "/images/placeholder.svg"],
    description: "A collection of graphic design projects spanning branding, editorial, and digital.",
  },
  {
    slug: "eagles-booklet",
    title: "Typography: Eagles Booklet",
    summary: "Typographic exploration in print",
    role: "Designer",
    year: "2023",
    type: "visual",
    featured: false,
    thumbnail: "/images/placeholder.svg",
    images: ["/images/placeholder.svg", "/images/placeholder.svg", "/images/placeholder.svg"],
    description: "A printed booklet showcasing typographic experimentation and layout design.",
  },
];

// =============================================================================
// COMBINED PROJECTS - Used for routing and lookups
// =============================================================================

export const projects: Project[] = [...caseStudies, ...visualProjects];

// Helper functions
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((p) => p.featured);
}

export function isCaseStudy(project: Project): project is CaseStudy {
  return project.type === "case-study";
}

export function isVisualProject(project: Project): project is VisualProject {
  return project.type === "visual";
}

export function getNextCaseStudy(currentSlug: string): CaseStudy | null {
  const index = caseStudies.findIndex((p) => p.slug === currentSlug);
  return index < caseStudies.length - 1 ? caseStudies[index + 1] : null;
}

export function getPrevCaseStudy(currentSlug: string): CaseStudy | null {
  const index = caseStudies.findIndex((p) => p.slug === currentSlug);
  return index > 0 ? caseStudies[index - 1] : null;
}

// =============================================================================
// SITE CONTENT - Edit your personal information here
// =============================================================================

export const siteContent = {
  name: "Anna Bartlett",
  title: "Product Designer",
  tagline: "Designing intuitive experiences that connect people with products they love.",
  intro: "I'm a designer focused on creating clear, purposeful digital experiences. Currently exploring new opportunities.",

  // Contact
  email: "hello@annabartlett.com",
  linkedin: "https://www.linkedin.com/in/bartlettanna",

  // SEO
  siteUrl: "https://annabartlett.com",
  description: "Anna Bartlett is a product designer creating intuitive digital experiences.",
  ogImage: "/images/og-image.png",
};
