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
  icon?: string;         // Optional project icon (SVG path)
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

  // Solution features (for feature grid display)
  features?: {
    icon: "map" | "playlist" | "translate" | "friends" | "search" | "clock" | "chat" | "book" | "shield" | "badge" | "dashboard" | "circle" | "rings" | "brain" | "eye";
    label: string;
    description: string;
  }[];
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
    title: "Global Mode",
    summary: "Connecting Spotify users across geographic and cultural boundaries through music discovery",
    role: "UX Designer",
    year: "2024",
    type: "case-study",
    featured: true,
    thumbnail: "/images/placeholder.svg",
    images: ["/images/placeholder.svg"],
    icon: "/icons/spotify.svg",
    meta: {
      role: "UX Designer",
      timeline: "8 weeks",
      team: "Solo class project",
    },
    brandColor: "#1DB954",
    heroTextColor: "light",
    overview: `<span class="lead">Global Mode is a Spotify concept that helps users discover music across geographic and cultural boundaries.</span> I designed an interactive map-based discovery system with <span class="hl">regional playlists</span> and <span class="hl">lyrics translation</span>—turning music into a bridge for cross-cultural connection.`,
    context: `<span class="lead">Solo project for a Northeastern design class.</span> Given an open-ended brief to improve Spotify's social experience, I scoped the problem through primary research and discovered that users don't want another social platform—they want Spotify to <span class="hl">excel at discovery</span> while respecting how music fits into their lives.`,
    problem: `<span class="lead">Despite Spotify's global reach, users struggle to meaningfully explore music beyond their region.</span> The algorithm reinforces existing preferences, and there's no way to discover what's actually trending in Tokyo, São Paulo, or Lagos. Language barriers compound the issue—users skip songs they can't understand, missing cultural context entirely.`,
    approach: `<span class="lead">I ran competitive analysis across social platforms, then conducted interviews with three Spotify users.</span> Participants represented diverse listening behaviors: a solitary background listener, a social curator who shares music with roommates, and an international student exploring cross-cultural connections. Persona synthesis revealed a unifying thread: users wanted <span class="hl">quiet, grounding connection through music</span>—not social features layered on top.`,
    solution: `<span class="lead">Global Mode introduces four interconnected features that transform regional discovery from algorithmic guesswork into intentional exploration.</span>`,
    outcome: `<span class="lead">Validated through moderated usability testing with five participants.</span> Users responded enthusiastically to the concept, but testing revealed <span class="hl">navigation clarity</span> as the primary barrier—first-time users needed clearer indicators for translation availability. The translation feature created unexpected emotional connections: participants engaged with songs they'd previously skipped once they could understand the lyrics.`,
    reflection: `<span class="lead">This project taught me to take ownership of ambiguous briefs.</span> My professor structured the research methods, but there was no correct answer for ideation—I had to trust my instincts and commit to a direction. Privacy considerations emerged during testing (location data, friend activity visibility) that I'd want to address with <span class="hl">granular consent controls</span> and minimal data collection if continuing the work. The structured research process gave me confidence I'll carry into future projects.`,
    features: [
      { icon: "map", label: "Interactive world map", description: "Explore music by tapping any region on the globe" },
      { icon: "playlist", label: "Regional playlists", description: "Curated playlists of what's trending in specific locations" },
      { icon: "translate", label: "Lyrics translation", description: "Toggle to translate lyrics to your preferred language" },
      { icon: "friends", label: "Friend activity", description: "See where friends are listening and what's popular there" },
    ],
    keyImpacts: [
      "Validated demand for regional music discovery beyond algorithmic recommendations",
      "Identified lyrics translation as an emotional unlock for cross-cultural appreciation",
      "Revealed navigation clarity as the primary usability barrier through testing",
      "Established a privacy-first framework for location-based feature design",
    ],
    imageBlocks: [
      {
        title: "Map-based discovery",
        layout: "single",
        images: [
          { src: null, alt: "Global Mode interactive map", caption: "Interactive world map entry point for regional exploration.", placeholderLabel: "Global Mode: interactive world map entry" },
        ],
      },
      {
        title: "Regional playlists",
        layout: "single",
        images: [
          { src: null, alt: "Region-based playlists", caption: "Curated playlists showing what's trending in specific regions with cultural context.", placeholderLabel: "Region-based playlists + cultural context" },
        ],
      },
      {
        title: "Lyrics translation",
        layout: "single",
        images: [
          { src: null, alt: "Lyrics translation feature", caption: "Toggle to translate lyrics to the user's preferred language.", placeholderLabel: "Lyrics translation toggle + translated state" },
        ],
      },
      {
        title: "Friend activity",
        layout: "single",
        images: [
          { src: null, alt: "Friend activity with location", caption: "Enhanced friend activity showing geographic context and regional trends.", placeholderLabel: "Friend activity with geographic context" },
        ],
      },
      {
        title: "Usability testing",
        layout: "single",
        images: [
          { src: null, alt: "Usability test iterations", caption: "Navigation and translation discoverability improvements based on testing feedback.", placeholderLabel: "Usability test iteration: navigation + translation discoverability" },
        ],
      },
    ],
  },
  {
    slug: "financial-blueprint",
    title: "Financial Blueprint",
    summary: "Accessible financial education for young adults navigating independence",
    role: "UX Designer, User Researcher",
    year: "2024",
    type: "case-study",
    featured: true,
    thumbnail: "/images/placeholder.svg",
    images: ["/images/placeholder.svg"],
    meta: {
      role: "UX Designer",
      timeline: "8 weeks",
      team: "Solo class project",
    },
    brandColor: "#1e3a5f",
    heroTextColor: "light",
    overview: `<span class="lead">Financial Blueprint transforms challenging financial jargon into lessons accessible to young adults navigating financial independence for the first time.</span> Unlike generic financial apps that rely on sequential quizzes, Financial Blueprint is a comprehensive financial dictionary and personalized learning platform—allowing users to tackle specific challenges through <span class="hl">targeted micro-lessons</span> and <span class="hl">AI-powered assistance</span>.`,
    context: `<span class="lead">This project began when my professor shared a story of feeling overwhelmed by banking jargon and making costly mistakes due to inaccessible financial education.</span> It became a core class challenge: find a solution to making financial literacy accessible and easy to understand for young adults entering financial independence.`,
    problem: `<span class="lead">Despite young adults' desire to be financially responsible, they struggle to access relevant financial education when they need it.</span> Traditional banking apps overwhelm users with intimidating jargon, while education platforms like Zogo offer generic, Duolingo-style experiences disconnected from <span class="hl">real-life financial moments</span>. Students face information overload, can't find <span class="hl">quick answers</span> to specific questions, and use apps that aren't personalized to their current life stage.`,
    approach: `<span class="lead">I conducted competitive analysis of financial apps, then interviewed three college students to understand their relationship with money and current learning methods.</span> Affinity mapping revealed four key findings: students want quick answers, not full courses; complicated jargon turns them off; real life doesn't happen in sequential order; and they enjoy tracking progress. This shaped a design centered on <span class="hl">on-demand</span> access over structured curriculum.`,
    solution: `<span class="lead">Financial Blueprint delivers <span class="hl">jargon-free</span> financial education through four interconnected features.</span>`,
    outcome: `<span class="lead">User testing validated that this approach helps users feel more confident tackling immediate financial challenges.</span> Testing showed that plain-language explanations and targeted micro-lessons made complex concepts more approachable. Users responded positively to the 5-minute lesson format, indicating it fits their schedules while providing actionable knowledge they can immediately apply.`,
    reflection: `<span class="lead">This project fundamentally changed my understanding of educational design.</span> I initially assumed comprehensive, structured learning would be most effective—but research revealed that real learning happens when education meets immediate need. The most valuable insight: good UX in education isn't about making learning more engaging; it's about making knowledge <span class="hl">accessible exactly when and how users need it</span>. Moving from RetireMap to Financial Blueprint taught me to prioritize <span class="hl">user research over personal assumptions</span> and design for real behaviors rather than idealized scenarios.`,
    features: [
      { icon: "search", label: "Smart Search & Instant Access", description: "Surfaces relevant lessons based on previous queries—no menu navigation required" },
      { icon: "clock", label: "Micro-Learning Modules", description: "5-minute focused lessons with clear, jargon-free explanations" },
      { icon: "chat", label: "AI-Powered Chatbot", description: "Personalized guidance for unique scenarios beyond preset lessons" },
      { icon: "book", label: "Financial Dictionary & Progress", description: "Searchable reference with visual tracking of mastered concepts" },
    ],
    keyImpacts: [
      "Eliminated overwhelm by creating on-demand learning that adapts to immediate needs",
      "Validated dictionary-style access over sequential curriculum through iterative testing",
      "Refined accessibility after testing revealed contrast and readability issues",
      "Shortened lessons from 7-10 minutes to 3-5 minutes based on user preference",
    ],
    imageBlocks: [
      {
        title: "Search-first experience",
        layout: "single",
        images: [
          { src: null, alt: "Smart search interface", caption: "Intelligent search that surfaces relevant lessons based on user context.", placeholderLabel: "Smart search + instant access UI" },
        ],
      },
      {
        title: "Micro-learning modules",
        layout: "single",
        images: [
          { src: null, alt: "Micro-lesson interface", caption: "5-minute focused lessons with clear, jargon-free explanations.", placeholderLabel: "Micro-lesson: W-4 form walkthrough" },
        ],
      },
      {
        title: "Dictionary & progress tracking",
        layout: "single",
        images: [
          { src: null, alt: "Financial dictionary", caption: "Visual progress system that tracks mastered concepts.", placeholderLabel: "Financial dictionary + progress view" },
        ],
      },
      {
        title: "Design iteration",
        layout: "single",
        images: [
          { src: null, alt: "Design iteration comparison", caption: "From sequential RetireMap to dictionary-style Financial Blueprint.", placeholderLabel: "Iteration: RetireMap → Financial Blueprint" },
        ],
      },
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
    icon: "/icons/vetted.svg",
    meta: {
      role: "UX/UI Designer",
      timeline: "Spring 2025",
      team: "12-person cross-functional team",
      client: "Generate",
    },
    brandColor: "#A13307",
    heroTextColor: "light",
    overview: `<span class="lead">Pet owners struggle to find trustworthy, specialized veterinary care providers and often lack adequate support during <span class="hl">post-medical recovery</span>.</span> To address this gap, we created Vetted: a comprehensive platform connecting pet owners with certified veterinary care providers for trusted, specialized care through a seamless and secure platform—enhancing <span class="hl">post-medical support</span> and general pet care services.`,
    context: `<span class="lead">This was a greenfield design project through <a href="https://generatenu.com/" target="_blank" rel="noopener noreferrer" class="link">Generate</a>, Northeastern's student-led product development studio.</span> I joined as a designer when the team had only secured a domain name and basic logo. The concept stemmed from a clear gap in the pet care ecosystem: the difficulty of locating trusted, specialized providers and ensuring <span class="hl">continuity of care</span>.`,
    problem: `<span class="lead">Pet owners face significant challenges when seeking qualified care providers for pets with special needs.</span> After veterinary visits or procedures, owners struggle to find certified providers who can properly administer medications, provide specialized boarding, and offer ongoing care support. Traditional pet care services lack transparency about provider qualifications—leaving owners uncertain whether their pets will receive appropriate care when they need it most. Simultaneously, veterinary care providers lack dedicated platforms to market their specialized services.`,
    approach: `<span class="lead">We conducted stakeholder interviews, competitive analysis, and information architecture mapping to define the two-sided marketplace.</span> Research revealed four system-level gaps: existing platforms lack <span class="hl">post-care support</span>; <strong>trust</strong> and <span class="hl">credential verification</span> are major pain points; <span class="hl">multi-user coordination</span> adds complexity that platforms treat as simple two-way interaction; and geographic access to specialized care is uneven. We then created user flows and low-fidelity wireframes to validate journeys for different user types before high-fidelity design.`,
    solution: `<span class="lead">Vetted addresses specialized veterinary care through four interconnected system features.</span>`,
    outcome: `<span class="lead">We validated the platform through iterative testing across three feedback loops.</span> Community design critiques flagged unclear navigation and cluttered provider dashboards—we simplified layouts and refined labels. Engineering team feedback revealed UI inconsistencies and unclear booking flow logic—we standardized components and streamlined steps. Public showcase testing validated strong demand for specialized-care access, but onboarding felt too long—we reduced required fields and deferred non-essential information to later in the journey.`,
    reflection: `<span class="lead">Designing a two-sided care marketplace taught me how quickly complexity compounds when multiple roles, pets, and care states intersect.</span> The biggest shift was leaning into <span class="hl">systems thinking</span>—shared components, clear hierarchy, and consistent patterns—so we could move fast without losing <strong>trust</strong> or clarity. Working on a design team reshaped how I approach projects: shared ownership, component libraries, and clear communication taught me the value of systematic design. I also learned how much stronger design becomes when it's <span class="hl">negotiated alongside engineering constraints early</span>, rather than handed off at the end.`,
    features: [
      { icon: "shield", label: "Secure & Trustworthy Platform", description: "API-driven credential verification ensuring pet owners connect only with certified professionals" },
      { icon: "badge", label: "Professional Marketplace", description: "Verified provider profiles with specialized credentials, creating client acquisition beyond referral networks" },
      { icon: "dashboard", label: "Seamless Care Coordination", description: "Role-specific dashboards for owners, providers, and teams with geospatial search and integrated messaging" },
      { icon: "chat", label: "Multi-User Communication", description: "Role-appropriate booking and messaging tools that prevent miscommunication between parties" },
    ],
    keyImpacts: [
      "Established trust through credential verification and professional authentication patterns",
      "Filled a critical ecosystem gap connecting pet owners with specialized veterinary care",
      "Designed role-specific dashboards reducing coordination friction across owners and providers",
      "Created a scalable component library supporting both web and mobile surfaces",
    ],
    imageBlocks: [
      {
        title: "Marketplace overview",
        layout: "grid",
        images: [
          { src: null, alt: "Homepage and search entry", caption: "Homepage entry + search results showing filters and trust signals.", placeholderLabel: "Homepage + geospatial search with trust signals" },
          { src: null, alt: "Provider profile with credentials", caption: "Provider profile with verified credentials and service offerings.", placeholderLabel: "Provider profile with credential verification" },
        ],
      },
      {
        title: "Role-specific dashboards",
        layout: "grid",
        images: [
          { src: null, alt: "Provider dashboard", caption: "Provider dashboard (bookings, patient details, actions, messages).", placeholderLabel: "Provider dashboard: bookings + patient management" },
          { src: null, alt: "Pet owner dashboard", caption: "Pet owner view (appointments, care timeline, tracking, communication).", placeholderLabel: "Owner dashboard: appointments + care tracking" },
        ],
      },
      {
        title: "Booking + communication flow",
        layout: "single",
        images: [
          { src: null, alt: "Booking flow and careboard messages", caption: "Booking steps + Careboard messaging in-context with the active booking.", placeholderLabel: "Booking flow + Careboard messaging system" },
        ],
      },
      {
        title: "Design iteration",
        layout: "single",
        images: [
          { src: null, alt: "Design iteration comparison", caption: "Evolution from initial concepts to refined information architecture.", placeholderLabel: "Iteration: dual-user perspective + IA refinement" },
        ],
      },
    ],
  },
  {
    slug: "anocity",
    title: "Anocity",
    summary: "Transforming anxiety from stigma to understanding through curious awareness",
    role: "UX Researcher, UX Designer",
    year: "2025",
    type: "case-study",
    featured: true,
    thumbnail: "/images/placeholder.svg",
    images: ["/images/placeholder.svg"],
    meta: {
      role: "UX Researcher & Designer",
      timeline: "16 weeks",
      team: "Solo academic project",
    },
    brandColor: "#7C6A9C",
    heroTextColor: "light",
    overview: `<span class="lead">Anocity is a mobile app that reframes anxiety from something to fix into something to explore.</span> It replaces clinical treatment approaches with a <span class="hl">curiosity-driven</span> framework that helps users observe their patterns <strong>without judgment</strong> or pressure to improve. This research-focused academic project, grounded in neuroscience and stigma literature, resulted in both a functional prototype and an academic research paper. <span class="muted">The app avoids clinical diagnosis—language choices were intentional, informed by stigma research.</span>`,
    context: `<span class="lead">This project emerged from Dr. Donald Robinaugh's Design and Mental Health course at Northeastern.</span> The course explored how design intersects with mental health challenges that affect nearly everyone—and how design can either worsen or improve these experiences. The driving question: how do we make evidence-based research approachable for people who need it?`,
    problem: `<span class="lead">High-functioning individuals with anxiety often recognize that their hidden patterns are misinterpreted as personality traits.</span> Research revealed a "weak-not-sick" attitude that creates treatment barriers—young adults internalize anxiety as temporary rather than legitimate, pushing it into the shadows. When people realize they need help, appropriate resources aren't clear or accessible. The challenge: create a tool for anyone experiencing daily anxiety who wants to understand themselves better, <strong>not limited to those needing clinical help</strong>.`,
    approach: `<span class="lead">I grounded the design in three research foundations: neuroscience, stigma literature, and behavioral science.</span> Judson Brewer's research on <span class="hl">curious awareness</span> shows that non-judgmental observation can interrupt automatic anxiety patterns. Stigma research reveals how clinical interfaces reinforce barriers for high-functioning users. Neurobiological research maps anxiety across four interconnected domains: Thoughts, Physical Sensations, Behaviors, and Emotions. These insights reframed the challenge from symptom tracking to <span class="hl">stigma reduction</span>.`,
    solution: `<span class="lead">Anocity offers four experiential mechanisms that translate neuroscience into everyday tools.</span>`,
    outcome: `<span class="lead">Academic design critique validated the approach while revealing areas for refinement.</span> Peers and instructors found that clinical language like "symptom selection" contradicted the research goal of reducing barriers—we reframed to "What do you want to explore today?" Color psychology testing revealed bright colors felt "too energetic" and red evoked error associations; we shifted to pastels tested as "calming" and "gentle." The final prototype positions anxiety awareness as <span class="hl">self-discovery learned through experience</span>, not explanation.`,
    reflection: `<span class="lead">This project taught me what it means to design for mental health—not just creating calming interfaces, but translating clinical psychology into accessible tools that respect the people using them.</span> Research exists that could help millions, but it stays locked in academic journals and clinical settings. Brewer's work on curiosity and anxiety habit loops offers a simple framework, but it was inaccessible to the people who could benefit most. My role as a designer was bridging that gap. The most important realization: <span class="hl">curious awareness can't be learned through tutorials</span>. It has to be practiced and discovered. Sometimes understanding comes from doing, not reading.`,
    features: [
      { icon: "circle", label: "Curiosity-Based Exploration", description: "Explore anxiety through self-discovery, recognizing patterns without judgment or stigma" },
      { icon: "rings", label: "Protective Reflection Tracking", description: "Visual ring system where each reflection adds a colored layer—see patterns, not scores" },
      { icon: "eye", label: "Personal Validation", description: "Validates your experience without diagnosis—a safe space to explore, not a clinical assessment" },
      { icon: "brain", label: "Brain Science Made Simple", description: "Complex neuroscience translated into simple, accessible language based on Brewer's research" },
    ],
    keyImpacts: [
      "Created a non-medical approach that breaks stigma through curiosity-based exploration",
      "Designed a visual ring system transforming anxious habits into observable patterns",
      "Built a validation experience providing self-awareness without judgment or pressure",
      "Established research context linking neuroscience to design decisions",
    ],
    imageBlocks: [
      {
        title: "Domain exploration",
        layout: "single",
        images: [
          { src: null, alt: "Domain selection interface", caption: "Users choose what to explore: Thoughts, Physical Sensations, Behaviors, or Emotions.", placeholderLabel: "Domain selection: What do you want to explore today?" },
        ],
      },
      {
        title: "Ring visualization",
        layout: "single",
        images: [
          { src: null, alt: "Dartboard ring visualization", caption: "Each reflection adds a colored ring—purple, green, yellow, and blue represent different domains.", placeholderLabel: "Ring system: protective layers, not progress scores" },
        ],
      },
      {
        title: "Guided reflection",
        layout: "single",
        images: [
          { src: null, alt: "Reflection prompts", caption: "Gentle prompts like 'What if anxiety is just a habit of mind?' encourage thoughtful, optional reflection.", placeholderLabel: "Reflection: optional, gentle, non-pressured" },
        ],
      },
      {
        title: "Design iteration",
        layout: "single",
        images: [
          { src: null, alt: "Language evolution", caption: "From clinical 'symptom selection' to exploratory 'What do you want to explore today?'", placeholderLabel: "Iteration: clinical → exploratory language" },
        ],
      },
    ],
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
