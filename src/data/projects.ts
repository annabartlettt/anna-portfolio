// =============================================================================
// PROJECT DATA - Edit this file to add/update your portfolio projects
// =============================================================================

export type ProjectType = "case-study" | "visual";

// Base fields shared by all projects
interface ProjectBase {
  slug: string;
  title: string;
  summary: string;
  role: string;
  year: string;
  type: ProjectType;
  featured?: boolean;
  thumbnail: string;
  images: string[];
}

// Case study: narrative-heavy with structured sections
export interface CaseStudy extends ProjectBase {
  type: "case-study";
  overview: string;
  problem: string;
  approach: string;
  outcome: string;
}

// Visual project: image-forward, minimal text
export interface VisualProject extends ProjectBase {
  type: "visual";
  description?: string; // Optional 1-2 line description
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
    overview: "A design exploration focused on improving how users discover new music through Spotify's recommendation systems.",
    problem: "Users often fall into listening loops, missing opportunities to discover new artists and genres that match their evolving tastes.",
    approach: "Conducted user research to understand discovery patterns, then designed new touchpoints that surface relevant music at natural moments in the listening experience.",
    outcome: "Proposed features that balance familiarity with discovery, helping users expand their musical horizons while maintaining engagement.",
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
    overview: "A financial planning tool designed to help young professionals build healthy money habits through clear, actionable guidance.",
    problem: "Many people feel overwhelmed by financial planning tools that assume prior knowledge or present information in intimidating ways.",
    approach: "Designed a step-by-step experience that breaks down complex financial concepts into manageable actions, using plain language and progressive disclosure.",
    outcome: "Created a prototype that tested well with users who previously avoided financial planning, demonstrating increased confidence in money management.",
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
    overview: "Adapting a desktop creative application for mobile use, balancing powerful features with touch-friendly interactions.",
    problem: "Desktop creative tools often lose functionality or become cumbersome when ported to mobile without rethinking the interaction model.",
    approach: "Identified core workflows that translate well to mobile, then redesigned interactions around touch gestures and smaller screen constraints.",
    outcome: "Delivered a mobile experience that complements rather than replicates the desktop version, enabling on-the-go creativity.",
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
    overview: "A web-based version of Generate focused on real-time collaboration and accessibility across devices.",
    problem: "Creative teams working remotely needed shared tools that didn't require software installation or specific operating systems.",
    approach: "Designed collaborative features from the ground up, prioritizing real-time sync and intuitive sharing mechanisms.",
    outcome: "Launched a web platform that enables distributed teams to create together seamlessly.",
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
    overview: "An ongoing project exploring how technology can enhance in-person learning without replacing human connection.",
    problem: "Current classroom apps often distract from learning or create unnecessary friction in student-teacher interactions.",
    approach: "Researching pain points in current classroom technology and prototyping lightweight interventions that support rather than supplant traditional teaching.",
    outcome: "Project in progress — focusing on solutions that fade into the background when not needed.",
  },
];

// =============================================================================
// VISUAL PROJECTS - Explorations & Creative Work (ordered by relevance)
// =============================================================================

export const visualProjects: VisualProject[] = [
  // TODO: Replace placeholder content with your actual work
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

// =============================================================================
// SITE CONTENT - Edit your personal information here
// =============================================================================

export const siteContent = {
  name: "Anna Bartlett",
  title: "Product Designer",
  tagline: "Designing intuitive experiences that connect people with products they love.",
  intro: "I'm a designer focused on creating clear, purposeful digital experiences. Currently exploring new opportunities.",

  // Contact
  email: "hello@annabartlett.com", // TODO: Update with your email
  linkedin: "https://linkedin.com/in/annabartlett", // TODO: Update with your LinkedIn

  // SEO
  siteUrl: "https://annabartlett.com", // TODO: Update with your domain
  description: "Anna Bartlett is a product designer creating intuitive digital experiences.",
  ogImage: "/images/og-image.png", // TODO: Add your OG image to /public/images/
};
