export const en = {
  lang: 'en',
  locale: 'en',

  nav: {
    home: 'Home',
    expertise: 'Expertise',
    expertiseItems: [
      { label: 'Competition Law & Antitrust', slug: 'competition-law' },
      { label: 'Regulatory', slug: 'regulatory' },
      { label: 'Distribution Law & Commercial Matters', slug: 'distribution-law' },
      { label: 'E-Commerce & Digital Economy', slug: 'e-commerce' },
      { label: 'Compliance', slug: 'compliance' },
      { label: 'Internal Investigations', slug: 'internal-investigations' },
    ],
    team: 'Team',
    news: 'News & Insights',
    jobs: 'Jobs',
    contact: 'Contact',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    skipToMain: 'Skip to main content',
    langSwitch: 'Auf Deutsch wechseln',
    langSwitchShort: 'DE',
  },

  hero: {
    tagline: 'Your experts for competition law, regulatory matters and distribution law',
    cta: 'Our Expertise',
    ctaSecondary: 'Meet the Team',
  },

  expertise: {
    heading: 'Our Expertise',
    subheading: 'Specialised counsel in regulated markets',
    learnMore: 'Learn more',
    allAreas: 'All areas',
  },

  about: {
    heading: 'About CORE Attorneys',
    body: 'CORE Attorneys is an independent Swiss boutique law firm specialising in competition law, regulatory matters and distribution law. We advise companies with an entrepreneurial approach – efficient, practical and solution-oriented.',
    learnMore: 'Meet the team',
  },

  team: {
    heading: 'Our Team',
    subheading: 'Experienced lawyers with an international profile',
    allMembers: 'All team members',
    email: 'Email',
    linkedin: 'LinkedIn profile',
    awards: 'Awards & Recognition',
    partner: 'Partner',
    associate: 'Associate',
  },

  news: {
    heading: 'News & Insights',
    subheading: 'Current developments in competition law and regulatory matters',
    allArticles: 'All articles',
    readMore: 'Read more',
    publishedOn: 'Published on',
    tags: 'Topics',
    noArticles: 'No articles available.',
    rss: 'Subscribe to RSS feed',
  },

  jobs: {
    heading: 'Open Positions',
    subheading: 'Join CORE Attorneys',
    intro:
      'We are looking for dedicated lawyers who wish to work in a specialised and dynamic environment. At CORE Attorneys, you can expect a collegial team, demanding mandates and the opportunity for personal and professional development.',
    noJobs: 'No open positions at this time. We welcome unsolicited applications.',
    applyNow: 'Apply now',
    applyInitiative: 'Send unsolicited application',
    location: 'Location',
    type: 'Employment type',
    posted: 'Posted on',
    contactForApplication: 'For applications please contact:',
  },

  contact: {
    heading: 'Contact',
    subheading: 'We look forward to hearing from you',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    mapLabel: 'Map: CORE Attorneys, Dufourstrasse 105, Zurich',
    officeHours: 'Office hours',
    officeHoursValue: 'Monday – Friday, 8:30 am – 6:00 pm',
    mapConsent: 'Load map (OpenStreetMap)',
    mapConsentNote:
      'Loading the map transmits data to OpenStreetMap. See our privacy policy for more information.',
  },

  footer: {
    address: 'Dufourstrasse 105, CH-8008 Zurich',
    phone: '+41 43 555 70 00',
    email: 'info@core-attorneys.com',
    uid: 'CHE-381.202.187',
    linkedin: 'CORE Attorneys on LinkedIn',
    imprint: 'Imprint',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    copyright: '© {year} CORE Attorneys. All rights reserved.',
  },

  legal: {
    imprintTitle: 'Imprint',
    privacyTitle: 'Privacy Policy',
    termsTitle: 'Terms of Use',
    lastUpdated: 'Last updated',
  },

  aria: {
    mainNav: 'Main navigation',
    footerNav: 'Footer navigation',
    expertiseDropdown: 'Expertise submenu',
    linkedinFeed: 'LinkedIn posts by CORE Attorneys',
    map: 'Location map',
    backToTop: 'Back to top',
    externalLink: '(opens in new tab)',
    breadcrumb: 'Breadcrumb',
  },

  meta: {
    siteName: 'CORE Attorneys',
    defaultDescription:
      'CORE Attorneys – Swiss boutique law firm specialising in competition law, regulatory matters and distribution law in Zurich.',
    ogImage: '/images/og-default.jpg',
  },
} as const;
