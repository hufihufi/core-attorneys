export const de = {
  lang: 'de',
  locale: 'de-CH',

  nav: {
    home: 'Startseite',
    expertise: 'Expertise',
    expertiseItems: [
      { label: 'Wettbewerbsrecht & Kartellrecht', slug: 'wettbewerbsrecht' },
      { label: 'Regulierung', slug: 'regulierung' },
      { label: 'Vertriebsrecht & Handelsrecht', slug: 'vertriebsrecht' },
      { label: 'E-Commerce & Digitalwirtschaft', slug: 'e-commerce' },
      { label: 'Compliance', slug: 'compliance' },
      { label: 'Interne Untersuchungen', slug: 'interne-untersuchungen' },
    ],
    team: 'Team',
    news: 'News & Insights',
    jobs: 'Jobs',
    contact: 'Kontakt',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schliessen',
    skipToMain: 'Zum Hauptinhalt springen',
    langSwitch: 'Switch to English',
    langSwitchShort: 'EN',
  },

  hero: {
    tagline: 'Ihre Experten für Wettbewerbsrecht, Regulierung und Vertriebsrecht',
    cta: 'Zur Expertise',
    ctaSecondary: 'Team kennenlernen',
  },

  expertise: {
    heading: 'Unsere Expertise',
    subheading: 'Spezialisierte Beratung in regulierten Märkten',
    learnMore: 'Mehr erfahren',
    allAreas: 'Alle Bereiche',
  },

  about: {
    heading: 'Über CORE Attorneys',
    body: 'CORE Attorneys ist eine unabhängige Schweizer Boutique-Kanzlei, spezialisiert auf Wettbewerbsrecht, Regulierung und Vertriebsrecht. Wir beraten Unternehmen mit einem unternehmerischen Ansatz – effizient, praxisnah und lösungsorientiert.',
    learnMore: 'Team kennenlernen',
  },

  team: {
    heading: 'Unser Team',
    subheading: 'Erfahrene Anwältinnen und Anwälte mit internationalem Profil',
    allMembers: 'Alle Teammitglieder',
    email: 'E-Mail',
    linkedin: 'LinkedIn-Profil',
    awards: 'Auszeichnungen',
    partner: 'Partner',
    associate: 'Associate',
  },

  news: {
    heading: 'News & Insights',
    subheading: 'Aktuelle Entwicklungen in Wettbewerbsrecht und Regulierung',
    allArticles: 'Alle Artikel',
    readMore: 'Weiterlesen',
    publishedOn: 'Veröffentlicht am',
    tags: 'Themen',
    noArticles: 'Keine Artikel vorhanden.',
    rss: 'RSS-Feed abonnieren',
  },

  jobs: {
    heading: 'Offene Stellen',
    subheading: 'Werden Sie Teil von CORE Attorneys',
    intro:
      'Wir suchen engagierte Juristinnen und Juristen, die in einem spezialisierten und dynamischen Umfeld arbeiten möchten. Bei CORE Attorneys erwartet Sie ein kollegiales Team, anspruchsvolle Mandate und die Möglichkeit zur persönlichen und fachlichen Weiterentwicklung.',
    noJobs: 'Aktuell keine offenen Stellen. Gerne nehmen wir Ihre Initiativbewerbung entgegen.',
    applyNow: 'Jetzt bewerben',
    applyInitiative: 'Initiativbewerbung senden',
    location: 'Standort',
    type: 'Anstellungsart',
    posted: 'Ausgeschrieben am',
    contactForApplication: 'Für Bewerbungen wenden Sie sich bitte an:',
  },

  contact: {
    heading: 'Kontakt',
    subheading: 'Wir freuen uns auf Ihre Anfrage',
    address: 'Adresse',
    phone: 'Telefon',
    email: 'E-Mail',
    mapLabel: 'Karte: CORE Attorneys, Dufourstrasse 105, Zürich',
    officeHours: 'Bürozeiten',
    officeHoursValue: 'Montag – Freitag, 08:30 – 18:00 Uhr',
    mapConsent: 'Karte laden (OpenStreetMap)',
    mapConsentNote:
      'Durch das Laden der Karte werden Daten an OpenStreetMap übertragen. Weitere Informationen in unserer Datenschutzerklärung.',
  },

  footer: {
    address: 'Dufourstrasse 105, CH-8008 Zürich',
    phone: '+41 43 555 70 00',
    email: 'info@core-attorneys.com',
    uid: 'CHE-381.202.187',
    linkedin: 'CORE Attorneys auf LinkedIn',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    terms: 'Nutzungsbedingungen',
    copyright: '© {year} CORE Attorneys. Alle Rechte vorbehalten.',
  },

  legal: {
    imprintTitle: 'Impressum',
    privacyTitle: 'Datenschutzerklärung',
    termsTitle: 'Nutzungsbedingungen',
    lastUpdated: 'Letzte Aktualisierung',
  },

  aria: {
    mainNav: 'Hauptnavigation',
    footerNav: 'Fusszeilen-Navigation',
    expertiseDropdown: 'Expertise-Untermenu',
    linkedinFeed: 'LinkedIn-Beiträge von CORE Attorneys',
    map: 'Standortkarte',
    backToTop: 'Zurück nach oben',
    externalLink: '(öffnet in neuem Tab)',
    breadcrumb: 'Brotkrümelpfad',
  },

  meta: {
    siteName: 'CORE Attorneys',
    defaultDescription:
      'CORE Attorneys – Schweizer Boutique-Kanzlei für Wettbewerbsrecht, Regulierung und Vertriebsrecht in Zürich.',
    ogImage: '/images/og-default.jpg',
  },
} as const;

export type TranslationKey = typeof de;
