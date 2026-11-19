export const profile = {
  name: 'Kadek Swarniati, SST., M.E.K.K.',
  shortName: 'Kadek Swarniati',
  headline: 'Data-Intensive Software Engineer',
  secondHeadline: '',
  location: 'Jakarta, Indonesia',

  introduction:
    "Hi, I'm Swarni, a statistician and software developer based in Jakarta. I build modern web applications and data-intensive digital solutions, combining statistical expertise with software engineering.",

  about:
    'My professional background is in official statistics and quantitative research. Independently, I develop full-stack applications, AI-oriented tools, and data-driven digital products using modern engineering technologies.',

  github: 'https://github.com/kadek-swarniati',
  linkedin: '',
  instagram: '',
};

export const statistics = [
  {
    value: '4',
    label: 'Featured Projects',
  },
  {
    value: '9+',
    label: 'Years in Statistics',
  },
  {
    value: '4.00',
    label: "Master's GPA",
  },
  {
    value: '5+',
    label: 'Technical Disciplines',
  },
];

export const careers = [
  {
    title: 'Statistician',
    company: 'BPS-Statistics Indonesia — Headquarters',
    period: '2026 – Present',
    description: [
      'Working in official statistics, data validation, and statistical production.',
      'Contributing to analytical workflows and statistical quality assurance.',
    ],
  },
  {
    title: 'Statistician',
    company: 'BPS DKI Jakarta',
    period: 'Previous Position',
    description: [
      'Contributed to regional socioeconomic statistical activities.',
      'Worked on data analysis, validation, and reporting.',
    ],
  },
  {
    title: 'Statistician',
    company: 'BPS Jakarta Selatan',
    period: 'Earlier Position',
    description: [
      'Supported statistical data collection, processing, and quality assurance.',
    ],
  },
];

export const skills = [
  {
    name: 'HTML',
    percentage: 90,
  },
  {
    name: 'CSS',
    percentage: 85,
  },
  {
    name: 'JavaScript',
    percentage: 85,
  },
  {
    name: 'React',
    percentage: 85,
  },
  {
    name: 'Next.js',
    percentage: 80,
  },
  {
    name: 'TypeScript',
    percentage: 75,
  },
];

export const faqs = [
  {
    question: 'How do you ensure websites load quickly and efficiently?',
    answer:
      'I focus on efficient rendering, image optimization, reusable components, and performance measurement.',
  },
  {
    question: "What's your approach to front-end development?",
    answer:
      'I prioritize maintainable code, responsive interfaces, accessibility, and consistent implementation of design systems.',
  },
  {
    question: 'What kind of projects do you specialize in?',
    answer:
      'My projects include social applications, statistical release workflows, interactive data platforms, and developer productivity tools.',
  },
  {
    question: 'How do you handle project deadlines?',
    answer:
      'I break projects into milestones, prioritize essential functionality, and validate features before release.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'React, Next.js, TypeScript, Tailwind CSS, Python, FastAPI, and statistical programming tools.',
  },
];

export const advantages = [
  'React Development',
  'Responsive Website',
  'TypeScript',
  'Clean, Maintainable Code',
  'Data-Driven Applications',
  'Statistical Domain Knowledge',
  'UI Implementation',
];

export const projects = [
  {
    id: 'sociality',
    title: 'Sociality',
    type: 'Full-Stack Social Media Application',

    description:
      'Sociality is a full-stack-integrated social media application built with Next.js 16, React 19, TypeScript, Tailwind CSS, Redux Toolkit, and TanStack Query, featuring REST API integration, secure authentication flows, optimistic UI updates, and responsive design. Enhanced with Creator Insights, it combines modern frontend engineering, automated testing, and data-driven analytics to deliver a scalable, interactive user experience.',

    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'TanStack Query',
      'REST API',
      'Automated Testing',
    ],

    // Screenshot landing page Sociality.
    // File: public/projects/sociality.png
    image: '/projects/sociality.png',

    demo: 'https://sociality-social-media-app.vercel.app/',

    github:
      'https://github.com/kadek-swarniati/sociality-social-media-app/tree/feat/sociality-mvp',
  },

  {
    id: 'statrelease',
    title: 'StatRelease',
    type: 'Statistical Intelligence Platform',

    description:
      'StatRelease is an advanced, full-stack statistical intelligence platform engineered with Next.js, React, TypeScript, Python, and FastAPI, integrating automated data validation, Excel–PDF reconciliation, bilingual narrative generation, and traceable quality assurance workflows. Built with a modular, API-driven architecture, it transforms complex statistical release processes into an intelligent, scalable, and streamlined digital experience.',

    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Python',
      'FastAPI',
      'Data Validation',
      'Excel–PDF Reconciliation',
      'Quality Assurance',
    ],

    image: '/projects/statrelease.png',

    demo: 'https://statrelease.vercel.app/',

    github: 'https://github.com/kadek-swarniati/statrelease',
  },

  {
    id: 'statistical-digital-twin',
    title: 'Statistical Digital Twin',
    type: 'Data-Intensive Analytics Platform',

    description:
      'An advanced, data-intensive Statistical Digital Twin built with Next.js, React, TypeScript, Tailwind CSS, and R, integrating econometric modelling, statistical inference, scenario simulation, interactive data visualisation, and Web Workers for high-performance analytics across multiple economic sectors.',

    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'R',
      'Econometrics',
      'Statistical Inference',
      'Scenario Simulation',
      'Web Workers',
    ],

    image: '/projects/statistical-digital-twin.png',

    demo: 'https://statistical-digital-twin.vercel.app/',

    github: 'https://github.com/kadek-swarniati/statistical-digital-twin',
  },

  {
    id: 'codecue',
    title: 'CodeCue',
    type: 'Live-Coding Intelligence Platform',

    description:
      'CodeCue is an advanced, interactive live-coding intelligence platform built with Next.js 16, React 19, TypeScript, Monaco Editor, and Tailwind CSS. Featuring real-time code analysis, context-aware narration, interactive code-flow visualisation, and AI-inspired interview simulations, it combines modern frontend architecture with intelligent developer tooling to transform coding practice into a dynamic technical communication experience.',

    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Monaco Editor',
      'Tailwind CSS',
      'Real-Time Code Analysis',
      'Code-Flow Visualisation',
      'Interview Simulation',
    ],

    image: '/projects/codecue.png',

    demo: 'https://codecue-kappa.vercel.app/',

    github: 'https://github.com/kadek-swarniati/codecue',
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [];
