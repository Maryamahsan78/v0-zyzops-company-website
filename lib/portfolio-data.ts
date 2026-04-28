// Portfolio data for all services with real projects

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
  tagline?: string;
  category?: string;
  overview?: string;
  features?: string[];
  highlight?: string;
}

export interface ServicePortfolio {
  serviceId: string;
  serviceName: string;
  description: string;
  projects: PortfolioProject[];
}

export const portfolioData: Record<string, ServicePortfolio> = {
  'web-development': {
    serviceId: 'web-development',
    serviceName: 'Web Development',
    description: 'Explore our collection of modern, responsive web applications built with cutting-edge technologies.',
    projects: [
      {
        id: 'wd-1',
        title: 'Vercel',
        description: 'The platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.',
        tech: ['Next.js', 'React', 'TypeScript', 'Edge Functions'],
        link: 'https://vercel.com'
      },
      {
        id: 'wd-2',
        title: 'Linear',
        description: 'Streamlined issue tracking and project management tool built for modern software teams.',
        tech: ['React', 'GraphQL', 'PostgreSQL', 'TypeScript'],
        link: 'https://linear.app'
      },
      {
        id: 'wd-3',
        title: 'Notion',
        description: 'All-in-one workspace for notes, docs, wikis, and project management.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Electron'],
        link: 'https://notion.so'
      },
      {
        id: 'wd-4',
        title: 'Stripe Dashboard',
        description: 'Comprehensive payment processing platform with beautiful analytics and developer tools.',
        tech: ['React', 'Ruby on Rails', 'GraphQL', 'D3.js'],
        link: 'https://stripe.com'
      }
    ]
  },
  'app-development': {
    serviceId: 'app-development',
    serviceName: 'App Development',
    description: 'Native and cross-platform mobile applications delivering exceptional user experiences.',
    projects: [
      {
        id: 'ad-1',
        title: 'Strava',
        description: 'Social fitness network for athletes to track workouts, compete, and connect.',
        tech: ['React Native', 'Swift', 'Kotlin', 'GPS Integration'],
        link: 'https://strava.com'
      },
      {
        id: 'ad-2',
        title: 'Duolingo',
        description: 'Gamified language learning app with AI-powered lessons and streak tracking.',
        tech: ['React Native', 'Python', 'Machine Learning', 'Gamification'],
        link: 'https://duolingo.com'
      },
      {
        id: 'ad-3',
        title: 'Revolut',
        description: 'Digital banking app with currency exchange, crypto trading, and budgeting tools.',
        tech: ['Flutter', 'Kotlin', 'Swift', 'Microservices'],
        link: 'https://revolut.com'
      },
      {
        id: 'ad-4',
        title: 'Airbnb',
        description: 'Travel and accommodation booking platform with immersive property listings.',
        tech: ['React Native', 'GraphQL', 'Elasticsearch', 'Maps API'],
        link: 'https://airbnb.com'
      }
    ]
  },
  'cybersecurity': {
    serviceId: 'cybersecurity',
    serviceName: 'Cybersecurity',
    description: 'Comprehensive security solutions protecting businesses from digital threats.',
    projects: [
      {
        id: 'cs-1',
        title: 'CrowdStrike',
        description: 'Cloud-native endpoint security platform providing threat intelligence and incident response.',
        tech: ['Cloud Security', 'AI/ML', 'Threat Intel', 'EDR'],
        link: 'https://crowdstrike.com'
      },
      {
        id: 'cs-2',
        title: 'Cloudflare',
        description: 'Web security and performance platform protecting millions of websites.',
        tech: ['DDoS Protection', 'WAF', 'CDN', 'Zero Trust'],
        link: 'https://cloudflare.com'
      },
      {
        id: 'cs-3',
        title: '1Password',
        description: 'Enterprise password management with secure sharing and compliance features.',
        tech: ['Zero-Knowledge', 'Encryption', 'SSO', 'Audit Logs'],
        link: 'https://1password.com'
      },
      {
        id: 'cs-4',
        title: 'Snyk',
        description: 'Developer security platform for finding and fixing vulnerabilities in code.',
        tech: ['SAST', 'Container Security', 'CI/CD', 'Open Source'],
        link: 'https://snyk.io'
      }
    ]
  },
  'graphic-design': {
    serviceId: 'graphic-design',
    serviceName: 'Graphic Design',
    description: 'Creative visual designs that capture brand essence and engage audiences.',
    projects: [
      {
        id: 'gd-1',
        title: 'Dribbble',
        description: 'Community for designers to share work, showcasing world-class graphic design.',
        tech: ['Brand Design', 'UI/UX', 'Illustration', 'Typography'],
        link: 'https://dribbble.com'
      },
      {
        id: 'gd-2',
        title: 'Behance',
        description: 'Adobe creative portfolio platform featuring top design projects globally.',
        tech: ['Portfolio Design', 'Branding', 'Motion Graphics', 'Print'],
        link: 'https://behance.net'
      },
      {
        id: 'gd-3',
        title: 'Awwwards',
        description: 'Website awards recognizing the best web design, creativity and innovation.',
        tech: ['Web Design', 'UI Design', 'Interactive', 'Animation'],
        link: 'https://awwwards.com'
      },
      {
        id: 'gd-4',
        title: 'Canva Design School',
        description: 'Educational design resources showcasing professional templates and tutorials.',
        tech: ['Templates', 'Brand Kits', 'Social Media', 'Presentations'],
        link: 'https://canva.com/designschool'
      }
    ]
  },
  'video-editing': {
    serviceId: 'video-editing',
    serviceName: 'Video Editing',
    description: 'Professional video production and editing services for all platforms.',
    projects: [
      {
        id: 've-1',
        title: 'Frame.io',
        description: 'Video collaboration platform used by top studios for review and approval workflows.',
        tech: ['Video Review', 'Collaboration', 'Cloud Rendering', 'Version Control'],
        link: 'https://frame.io'
      },
      {
        id: 've-2',
        title: 'Vimeo',
        description: 'Professional video hosting platform with advanced editing and distribution tools.',
        tech: ['Video Hosting', 'Live Streaming', 'Analytics', 'Player Customization'],
        link: 'https://vimeo.com'
      },
      {
        id: 've-3',
        title: 'Loom',
        description: 'Async video messaging platform for team communication and tutorials.',
        tech: ['Screen Recording', 'Video Editing', 'Transcription', 'Analytics'],
        link: 'https://loom.com'
      },
      {
        id: 've-4',
        title: 'Descript',
        description: 'AI-powered video editor that makes editing as easy as editing a document.',
        tech: ['AI Editing', 'Transcription', 'Screen Recording', 'Podcasts'],
        link: 'https://descript.com'
      }
    ]
  },
  'ai-chatbot': {
    serviceId: 'ai-chatbot',
    serviceName: 'AI Chatbot',
    description: 'Intelligent conversational AI solutions for customer service and automation.',
    projects: [
      {
        id: 'ai-1',
        title: 'Intercom Fin',
        description: 'AI customer service bot resolving 50% of support queries automatically.',
        tech: ['GPT-4', 'Knowledge Base', 'Multi-language', 'Human Handoff'],
        link: 'https://intercom.com/fin'
      },
      {
        id: 'ai-2',
        title: 'Drift',
        description: 'Conversational marketing platform with AI-powered sales chatbots.',
        tech: ['Conversational AI', 'Lead Qualification', 'CRM Integration', 'Video'],
        link: 'https://drift.com'
      },
      {
        id: 'ai-3',
        title: 'Ada',
        description: 'AI-powered customer service automation platform for enterprise.',
        tech: ['NLU', 'No-Code Builder', 'Analytics', 'Integrations'],
        link: 'https://ada.cx'
      },
      {
        id: 'ai-4',
        title: 'Tidio',
        description: 'Live chat and chatbot platform for e-commerce and small businesses.',
        tech: ['Live Chat', 'AI Chatbot', 'Email Marketing', 'Shopify'],
        link: 'https://tidio.com'
      }
    ]
  },
  'copywriting': {
    serviceId: 'copywriting',
    serviceName: 'Copywriting',
    description: 'Compelling content that converts readers into customers.',
    projects: [
      {
        id: 'cw-1',
        title: 'Apple',
        description: 'Iconic product copywriting that defines simplicity and emotional connection.',
        tech: ['Brand Voice', 'Product Copy', 'Minimalism', 'Storytelling'],
        link: 'https://apple.com'
      },
      {
        id: 'cw-2',
        title: 'Mailchimp',
        description: 'Friendly, conversational brand voice across all customer touchpoints.',
        tech: ['Brand Guidelines', 'Email Copy', 'UX Writing', 'Humor'],
        link: 'https://mailchimp.com'
      },
      {
        id: 'cw-3',
        title: 'Basecamp',
        description: 'Opinionated, personality-driven copy that builds trust and clarity.',
        tech: ['SaaS Copy', 'Landing Pages', 'Blog Content', 'Email'],
        link: 'https://basecamp.com'
      },
      {
        id: 'cw-4',
        title: 'Slack',
        description: 'Conversational, witty copy that makes enterprise software feel human.',
        tech: ['Microcopy', 'Onboarding', 'Product Copy', 'Brand Voice'],
        link: 'https://slack.com'
      }
    ]
  },
  'seo': {
    serviceId: 'seo',
    serviceName: 'SEO',
    description: 'Search engine optimization strategies driving organic growth.',
    projects: [
      {
        id: 'seo-1',
        title: 'Ahrefs',
        description: 'Industry-leading SEO tools with comprehensive backlink and keyword analysis.',
        tech: ['Backlink Analysis', 'Keyword Research', 'Site Audit', 'Rank Tracking'],
        link: 'https://ahrefs.com'
      },
      {
        id: 'seo-2',
        title: 'Semrush',
        description: 'All-in-one marketing toolkit for SEO, content, and competitive research.',
        tech: ['Competitor Analysis', 'Content Tools', 'PPC', 'Social Media'],
        link: 'https://semrush.com'
      },
      {
        id: 'seo-3',
        title: 'Moz',
        description: 'SEO software and resources trusted by marketers worldwide.',
        tech: ['Domain Authority', 'Link Building', 'Local SEO', 'SERP Analysis'],
        link: 'https://moz.com'
      },
      {
        id: 'seo-4',
        title: 'Surfer SEO',
        description: 'AI-powered content optimization for higher search rankings.',
        tech: ['Content Editor', 'SERP Analyzer', 'NLP', 'Outline Builder'],
        link: 'https://surferseo.com'
      }
    ]
  },
  'social-media': {
    serviceId: 'social-media',
    serviceName: 'Social Media',
    description: 'Strategic social media management building engaged communities.',
    projects: [
      {
        id: 'sm-1',
        title: 'Buffer',
        description: 'Social media management platform for scheduling and analytics.',
        tech: ['Scheduling', 'Analytics', 'Engagement', 'Team Collaboration'],
        link: 'https://buffer.com'
      },
      {
        id: 'sm-2',
        title: 'Hootsuite',
        description: 'Enterprise social media management with advanced analytics and monitoring.',
        tech: ['Multi-Platform', 'Social Listening', 'Ads Management', 'Reports'],
        link: 'https://hootsuite.com'
      },
      {
        id: 'sm-3',
        title: 'Later',
        description: 'Visual social media planner with Instagram-first scheduling features.',
        tech: ['Visual Planning', 'Link in Bio', 'Instagram', 'UGC'],
        link: 'https://later.com'
      },
      {
        id: 'sm-4',
        title: 'Sprout Social',
        description: 'Social media management and intelligence platform for enterprises.',
        tech: ['Social CRM', 'Listening', 'Publishing', 'Advocacy'],
        link: 'https://sproutsocial.com'
      }
    ]
  },
  'ads-management': {
    serviceId: 'ads-management',
    serviceName: 'Ads Management',
    description: 'Data-driven paid advertising campaigns maximizing ROI.',
    projects: [
      {
        id: 'am-1',
        title: 'Google Ads',
        description: 'The world largest advertising platform powering search and display campaigns.',
        tech: ['Search Ads', 'Display', 'YouTube', 'Performance Max'],
        link: 'https://ads.google.com'
      },
      {
        id: 'am-2',
        title: 'Meta Ads Manager',
        description: 'Advertising platform for Facebook, Instagram, and Messenger campaigns.',
        tech: ['Social Ads', 'Audience Targeting', 'Creative Testing', 'Pixel'],
        link: 'https://business.facebook.com'
      },
      {
        id: 'am-3',
        title: 'LinkedIn Campaign Manager',
        description: 'B2B advertising platform for reaching professional audiences.',
        tech: ['B2B Ads', 'Account Based', 'Lead Gen', 'Sponsored Content'],
        link: 'https://business.linkedin.com/marketing-solutions'
      },
      {
        id: 'am-4',
        title: 'TikTok Ads Manager',
        description: 'Advertising platform for reaching Gen Z and millennial audiences.',
        tech: ['Video Ads', 'Spark Ads', 'Creator Marketplace', 'Trends'],
        link: 'https://ads.tiktok.com'
      }
    ]
  },
  'saas-development': {
    serviceId: 'saas-development',
    serviceName: 'SaaS Development',
    description: 'Scalable software-as-a-service products built for growth.',
    projects: [
      {
        id: 'saas-1',
        title: 'Secure Elections',
        description: 'A secure voting system built with Java and Oracle SQL to manage voters, candidates, and elections with strict one-vote-per-election integrity.',
        tech: ['Java', 'Swing', 'Oracle SQL', 'JDBC'],
        link: '#secure-elections',
        tagline: 'One person. One vote. One source of truth.',
        category: 'Civic Tech',
        overview: 'A desktop-based voting system that digitizes the full election workflow including voter registration, candidate management, secure vote casting, and result tallying with complete auditability.',
        features: [
          'Voter registration with CNIC verification',
          'Admin authentication system',
          'Election and candidate management',
          'Secure vote casting (no duplicate votes)',
          'Audit-ready vote tracking',
          'Result tally system'
        ],
        highlight: 'Enforces UNIQUE(VoterID, ElectionID) to guarantee one vote per election and maintain data integrity.'
      },
      {
        id: 'saas-2',
        title: 'Figma',
        description: 'Collaborative design tool running entirely in the browser.',
        tech: ['WebGL', 'CRDT', 'TypeScript', 'C++ WASM'],
        link: 'https://figma.com'
      },
      {
        id: 'saas-3',
        title: 'Calendly',
        description: 'Scheduling automation platform eliminating back-and-forth emails.',
        tech: ['React', 'Ruby on Rails', 'PostgreSQL', 'Calendar APIs'],
        link: 'https://calendly.com'
      },
      {
        id: 'saas-4',
        title: 'Loom',
        description: 'Async video messaging platform for workplace communication.',
        tech: ['React', 'WebRTC', 'AWS', 'Video Processing'],
        link: 'https://loom.com'
      }
    ]
  },
  'digital-marketing': {
    serviceId: 'digital-marketing',
    serviceName: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies driving business growth.',
    projects: [
      {
        id: 'dm-1',
        title: 'HubSpot',
        description: 'All-in-one marketing, sales, and service platform for growing businesses.',
        tech: ['CRM', 'Marketing Automation', 'Content', 'Analytics'],
        link: 'https://hubspot.com'
      },
      {
        id: 'dm-2',
        title: 'Marketo',
        description: 'Enterprise marketing automation platform for B2B companies.',
        tech: ['Lead Management', 'Email Marketing', 'ABM', 'Revenue Attribution'],
        link: 'https://marketo.com'
      },
      {
        id: 'dm-3',
        title: 'Unbounce',
        description: 'Landing page builder and conversion optimization platform.',
        tech: ['Landing Pages', 'A/B Testing', 'Smart Traffic', 'Popups'],
        link: 'https://unbounce.com'
      },
      {
        id: 'dm-4',
        title: 'Hotjar',
        description: 'Behavior analytics platform understanding how users interact with sites.',
        tech: ['Heatmaps', 'Session Recording', 'Surveys', 'Funnels'],
        link: 'https://hotjar.com'
      }
    ]
  },
  'email-automation': {
    serviceId: 'email-automation',
    serviceName: 'Email Automation',
    description: 'Automated email marketing campaigns that nurture leads and drive conversions.',
    projects: [
      {
        id: 'ea-1',
        title: 'Klaviyo',
        description: 'E-commerce email and SMS marketing automation platform with powerful segmentation.',
        tech: ['Email Flows', 'SMS', 'Segmentation', 'Shopify Integration'],
        link: 'https://klaviyo.com'
      },
      {
        id: 'ea-2',
        title: 'ConvertKit',
        description: 'Creator-focused email marketing platform with visual automation builder.',
        tech: ['Visual Automations', 'Landing Pages', 'Creator Network', 'Tagging'],
        link: 'https://convertkit.com'
      },
      {
        id: 'ea-3',
        title: 'ActiveCampaign',
        description: 'Customer experience automation platform combining email, automation, and CRM.',
        tech: ['Email Automation', 'CRM', 'Machine Learning', 'Predictive Sending'],
        link: 'https://activecampaign.com'
      },
      {
        id: 'ea-4',
        title: 'Drip',
        description: 'E-commerce CRM and email marketing platform for personalized campaigns.',
        tech: ['E-commerce CRM', 'Revenue Attribution', 'Workflows', 'Personalization'],
        link: 'https://drip.com'
      }
    ]
  }
};
