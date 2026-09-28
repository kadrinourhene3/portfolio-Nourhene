export type ProjectCategory = "web" | "mobile" | "ai" | "data";
export type ProjectType = "desktop" | "mobile";

export interface ProjectScreenshot {
  src: string;
  alt: string;
  width: number;
  height: number;
  label?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  categoryLabel: string;
  type: ProjectType;
  cover?: ProjectScreenshot;
  screenshots?: ProjectScreenshot[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  features?: string[];
}

export const projectFilters: Array<{
  label: string;
  value: "all" | ProjectCategory;
}> = [
  { label: "All Projects", value: "all" },
  { label: "Web Apps", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "AI & ML", value: "ai" },
  { label: "Data Science", value: "data" },
];

const neuroSpaceScreenshots: ProjectScreenshot[] = [
  {
    src: "/images/projects/neurospace/hero3.png",
    alt: "NeuroSpace Quantum ML platform landing page",
    width: 1704,
    height: 890,
    label: "Landing Page",
  },
  {
    src: "/images/projects/neurospace/pipeline.png",
    alt: "NeuroSpace quantum machine learning research pipeline",
    width: 1697,
    height: 891,
    label: "Research Pipeline",
  },
  {
    src: "/images/projects/neurospace/authentication.png",
    alt: "NeuroSpace authentication and sign in screen",
    width: 1778,
    height: 889,
    label: "Sign In",
  },
  {
    src: "/images/projects/neurospace/dataset-upload.png",
    alt: "NeuroSpace dataset upload interface",
    width: 1914,
    height: 858,
    label: "Dataset Upload",
  },
  {
    src: "/images/projects/neurospace/model-configuration.png",
    alt: "NeuroSpace quantum model configuration interface",
    width: 1884,
    height: 853,
    label: "Model Configuration",
  },
];

const jobTrackScreenshots: ProjectScreenshot[] = [
  { src: "/images/projects/jobtrack/home.png.jpg", alt: "JobTrack dashboard", width: 590, height: 1280, label: "Dashboard" },
  { src: "/images/projects/jobtrack/applications.png.jpg", alt: "JobTrack applications pipeline", width: 590, height: 1280, label: "Applications" },
  { src: "/images/projects/jobtrack/add-application.png.jpg", alt: "JobTrack add application form", width: 590, height: 1280, label: "Add Application" },
  { src: "/images/projects/jobtrack/ai-career.png.jpg", alt: "JobTrack AI career assistant", width: 590, height: 1280, label: "AI Career Assistant" },
  { src: "/images/projects/jobtrack/resume-analyzer.png.jpg", alt: "JobTrack resume analyzer", width: 590, height: 1280, label: "Resume Analyzer" },
  { src: "/images/projects/jobtrack/job-match.png.jpg", alt: "JobTrack job match tool", width: 590, height: 1280, label: "Job Match" },
  { src: "/images/projects/jobtrack/cover-letter.png.jpg", alt: "JobTrack cover letter assistant", width: 590, height: 1280, label: "Cover Letter" },
  { src: "/images/projects/jobtrack/interview-coach.png.jpg", alt: "JobTrack interview coach", width: 590, height: 1280, label: "Interview Coach" },
  { src: "/images/projects/jobtrack/analytics.png.jpg", alt: "JobTrack analytics overview", width: 590, height: 1280, label: "Analytics" },
  { src: "/images/projects/jobtrack/analytics-details.png.jpg", alt: "JobTrack analytics details", width: 590, height: 1280, label: "Analytics Details" },
  { src: "/images/projects/jobtrack/profile.png.jpg", alt: "JobTrack career profile", width: 590, height: 1280, label: "Profile" },
  { src: "/images/projects/jobtrack/profile-settings.png.jpg", alt: "JobTrack profile settings", width: 590, height: 1280, label: "Profile Settings" },
];

const santeFemScreenshots: ProjectScreenshot[] = [
  { src: "/images/projects/sante_femme/welcome.png", alt: "SantéFem welcome screen", width: 655, height: 1280, label: "Welcome" },
  { src: "/images/projects/sante_femme/create-account.png", alt: "SantéFem create account screen", width: 647, height: 1280, label: "Create Account" },
  { src: "/images/projects/sante_femme/onboarding.png", alt: "SantéFem onboarding introduction", width: 647, height: 1280, label: "Onboarding" },
  { src: "/images/projects/sante_femme/onboarding-name.png", alt: "SantéFem name personalization", width: 689, height: 1280, label: "Name Personalization" },
  { src: "/images/projects/sante_femme/home-dashboard.png", alt: "SantéFem home dashboard", width: 640, height: 1280, label: "Home Dashboard" },
  { src: "/images/projects/sante_femme/cycle-calendar.png", alt: "SantéFem cycle calendar", width: 644, height: 1280, label: "Cycle Calendar" },
  { src: "/images/projects/sante_femme/symptom-tracking.png", alt: "SantéFem symptom tracking", width: 636, height: 1280, label: "Symptom Tracking" },
  { src: "/images/projects/sante_femme/cycle-history.png", alt: "SantéFem cycle history", width: 648, height: 1280, label: "Cycle History" },
  { src: "/images/projects/sante_femme/hydration.png", alt: "SantéFem hydration tracking", width: 642, height: 1280, label: "Hydration" },
  { src: "/images/projects/sante_femme/physical-activity.png", alt: "SantéFem physical activity tracking", width: 631, height: 1280, label: "Physical Activity" },
  { src: "/images/projects/sante_femme/mood-sleep.png", alt: "SantéFem mood and sleep tracking", width: 643, height: 1280, label: "Mood & Sleep" },
  { src: "/images/projects/sante_femme/health-article.png", alt: "SantéFem health article", width: 646, height: 1280, label: "Health Article" },
];

const darDzScreenshots: ProjectScreenshot[] = [
  { src: "/images/projects/dar_dz/hero1.png", alt: "Dar DZ real estate homepage hero", width: 1888, height: 908, label: "Homepage" },
  { src: "/images/projects/dar_dz/featured-properties.png", alt: "Dar DZ featured properties section", width: 886, height: 888, label: "Featured Properties" },
  { src: "/images/projects/dar_dz/recent-properties.png", alt: "Dar DZ recent properties section", width: 975, height: 870, label: "Recent Properties" },
  { src: "/images/projects/dar_dz/categories-cities.png", alt: "Dar DZ property categories and cities", width: 1059, height: 836, label: "Categories & Cities" },
  { src: "/images/projects/dar_dz/properties-catalog.png", alt: "Dar DZ properties catalog", width: 1019, height: 916, label: "Property Catalog" },
  { src: "/images/projects/dar_dz/agencies.png", alt: "Dar DZ real estate agencies", width: 1028, height: 893, label: "Agencies" },
  { src: "/images/projects/dar_dz/about.png", alt: "Dar DZ about section", width: 1050, height: 913, label: "About" },
  { src: "/images/projects/dar_dz/contact.png", alt: "Dar DZ contact section", width: 1057, height: 923, label: "Contact" },
  { src: "/images/projects/dar_dz/cta-footer.png", alt: "Dar DZ call to action and footer", width: 921, height: 550, label: "Call to Action" },
];

const darSaveursScreenshots: ProjectScreenshot[] = [
  { src: "/images/projects/dar_saveurs/hero.png", alt: "Dar Saveurs restaurant homepage hero", width: 1896, height: 909, label: "Homepage" },
  { src: "/images/projects/dar_saveurs/story.png", alt: "Dar Saveurs restaurant story", width: 1881, height: 912, label: "Our Story" },
  { src: "/images/projects/dar_saveurs/chefs-special.png", alt: "Dar Saveurs chef specials", width: 1907, height: 879, label: "Chef's Specials" },
  { src: "/images/projects/dar_saveurs/menu.png", alt: "Dar Saveurs menu overview", width: 1894, height: 900, label: "Menu" },
  { src: "/images/projects/dar_saveurs/menu-categories.png", alt: "Dar Saveurs menu categories", width: 1882, height: 888, label: "Menu Categories" },
  { src: "/images/projects/dar_saveurs/menu-details.png", alt: "Dar Saveurs menu details", width: 1364, height: 913, label: "Menu Details" },
  { src: "/images/projects/dar_saveurs/experience.png", alt: "Dar Saveurs dining experience", width: 1857, height: 759, label: "Experience" },
  { src: "/images/projects/dar_saveurs/gallery.png", alt: "Dar Saveurs food gallery", width: 1713, height: 881, label: "Gallery" },
  { src: "/images/projects/dar_saveurs/reservation.png", alt: "Dar Saveurs reservation section", width: 1802, height: 879, label: "Reservation" },
  { src: "/images/projects/dar_saveurs/testimonial-footer.png", alt: "Dar Saveurs testimonials and footer", width: 1858, height: 926, label: "Testimonials" },
];

const bookingRecommendationScreenshot: ProjectScreenshot = {
  src: "/images/projects/booking_recommendation/hero2.png",
  alt: "Booking recommendation system desktop interface",
  width: 1022,
  height: 558,
  label: "Recommendation Interface",
};

export const projects: Project[] = [
  {
    id: "dar-saveurs",
    title: "Dar Saveurs",
    description:
      "A refined restaurant web experience presenting signature dishes, menus, the dining story, and online reservations.",
    category: "web",
    categoryLabel: "Restaurant Web Experience",
    type: "desktop",
    cover: darSaveursScreenshots[0],
    screenshots: darSaveursScreenshots,
    technologies: [],
    liveUrl: "https://restaurant-website-cxqz.vercel.app/",
    featured: true,
  },
  {
    id: "dar-dz",
    title: "Dar DZ",
    description:
      "A modern Algeria-focused real estate website with responsive listings, property filters, and sale or rent browsing.",
    category: "web",
    categoryLabel: "Real Estate Web Application",
    type: "desktop",
    cover: darDzScreenshots[0],
    screenshots: darDzScreenshots,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://dar-dz-sage.vercel.app/",
    featured: true,
  },
  {
    id: "neurospace",
    title: "NeuroSpace",
    description: "Neural network visualization and experimentation platform for deep learning research.",
    category: "ai",
    categoryLabel: "Deep Learning",
    type: "desktop",
    cover: neuroSpaceScreenshots[0],
    screenshots: neuroSpaceScreenshots,
    technologies: ["Python", "TensorFlow", "React", "D3.js"],
    featured: true,
  },
  {
    id: "jobtrack",
    title: "JobTrack",
    description:
      "An intelligent job-search companion for tracking applications, managing interviews, monitoring career progress, and preparing for opportunities with AI-powered tools.",
    category: "mobile",
    categoryLabel: "Mobile",
    type: "mobile",
    cover: jobTrackScreenshots[0],
    screenshots: jobTrackScreenshots,
    technologies: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "OpenAI"],
    githubUrl: "https://github.com/kadrinourhene3/JobTrack",
    featured: true,
    features: [
      "Job application tracking and recruitment pipeline",
      "Dashboard, interviews, tasks, and goals",
      "Career profile and progress analytics",
      "AI Resume Analyzer and Job Match",
      "Cover Letter Assistant and Interview Coach",
    ],
  },
  {
    id: "santefem",
    title: "SantéFem",
    description:
      "A women's health mobile app designed to provide useful digital support through a simple, accessible experience.",
    category: "mobile",
    categoryLabel: "Mobile Health Application",
    type: "mobile",
    cover: santeFemScreenshots[4],
    screenshots: santeFemScreenshots,
    technologies: ["Mobile Development", "UI/UX", "HealthTech", "Database"],
    githubUrl: "https://github.com/kadrinourhene3/SanteFem_apk_mobile",
    featured: true,
  },
  {
    id: "rakebni",
    title: "Rakebni",
    description:
      "A transportation-oriented academic platform for helping users access and manage transport-related services.",
    category: "mobile",
    categoryLabel: "Full-Stack / Mobile / Transportation",
    type: "mobile",
    technologies: ["React", "TypeScript", "UI/UX", "Database"],
    githubUrl: "https://github.com/kadrinourhene3/Rakebni-memoire",
    featured: true,
  },
  {
    id: "booking-recommendation-system",
    title: "Booking Recommendation System",
    description:
      "A recommendation system based on the LSAHR dataset for exploring intelligent booking suggestions.",
    category: "data",
    categoryLabel: "Recommendation System / Data Science",
    type: "desktop",
    cover: bookingRecommendationScreenshot,
    screenshots: [bookingRecommendationScreenshot],
    technologies: ["Python", "Machine Learning", "Recommendations", "Data Analysis"],
    githubUrl: "https://github.com/kadrinourhene3/LSAHR_Dataset",
  },
  {
    id: "mnist-ionosphere-analysis",
    title: "MNIST & Ionosphere Analysis",
    description: "Comprehensive data analysis project comparing various ML models on benchmark datasets.",
    category: "data",
    categoryLabel: "Data Science",
    type: "desktop",
    technologies: ["Python", "CNN", "Random Forest", "Jupyter"],
  },
  {
    id: "algerian-economy-study",
    title: "Algerian Economy Study",
    description:
      "Statistical analysis and visualization of economic indicators with predictive modeling.",
    category: "data",
    categoryLabel: "Data Analysis",
    type: "desktop",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
  },
];
