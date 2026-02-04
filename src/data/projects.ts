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
  src: string;
  alt: string;
  caption?: string;
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
    slug: "generate-mobile",
    title: "Generate Mobile",
    summary: "Bringing creative tools to mobile platforms",
    role: "Product Designer",
    year: "2023",
    type: "case-study",
    featured: true,
    thumbnail: "/images/placeholder.svg",
    images: ["/images/placeholder.svg"],
    meta: {
      role: "Product Designer",
      timeline: "16 weeks",
      team: "1 designer, 4 engineers",
      client: "Generate Inc.",
    },
    overview: "Adapting a desktop creative application for mobile use, balancing powerful features with touch-friendly interactions.",
    problem: "Desktop creative tools often lose functionality or become cumbersome when ported to mobile without rethinking the interaction model.",
    approach: "Identified core workflows that translate well to mobile, then redesigned interactions around touch gestures and smaller screen constraints.",
    outcome: "Delivered a mobile experience that complements rather than replicates the desktop version, enabling on-the-go creativity.",
    reflection: "Porting desktop tools to mobile forced me to question every interaction. The constraint of touch and smaller screens led to cleaner solutions that we eventually brought back to the desktop experience.",
  },
  {
    slug: "generate-web",
    title: "Generate Web",
    summary: "Browser-based creative tools for collaborative workflows",
    role: "Product Designer",
    year: "2023",
    type: "case-study",
    featured: false,
    thumbnail: "/images/placeholder.svg",
    images: ["/images/placeholder.svg"],
    meta: {
      role: "Product Designer",
      timeline: "20 weeks",
      team: "2 designers, 6 engineers",
      client: "Generate Inc.",
    },
    overview: "A web-based version of Generate focused on real-time collaboration and accessibility across devices.",
    problem: "Creative teams working remotely needed shared tools that didn't require software installation or specific operating systems.",
    approach: "Designed collaborative features from the ground up, prioritizing real-time sync and intuitive sharing mechanisms.",
    outcome: "Launched a web platform that enables distributed teams to create together seamlessly.",
    reflection: "Real-time collaboration introduced edge cases I hadn't anticipated—cursor conflicts, presence indicators, permission states. Designing for multiplayer taught me to think in systems, not just screens.",
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
