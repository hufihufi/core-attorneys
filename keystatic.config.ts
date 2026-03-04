import { config, collection, singleton, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'YOUR_GITHUB_ORG',
      name: 'core-attorneys',
    },
  },

  ui: {
    brand: {
      name: 'CORE Attorneys CMS',
    },
  },

  collections: {
    // Blog / News & Insights – German
    blog_de: collection({
      label: 'Blog – Deutsch',
      slugField: 'title',
      path: 'src/content/blog/de/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titel' } }),
        description: fields.text({
          label: 'Kurzbeschreibung',
          description: 'Für Suchmaschinen und Vorschau (max. 160 Zeichen)',
          multiline: false,
          validation: { length: { max: 160 } },
        }),
        pubDate: fields.date({
          label: 'Veröffentlichungsdatum',
          validation: { isRequired: true },
        }),
        updatedDate: fields.date({ label: 'Aktualisierungsdatum' }),
        heroImage: fields.image({
          label: 'Titelbild',
          directory: 'src/assets/news',
          publicPath: '../../assets/news/',
        }),
        tags: fields.multiselect({
          label: 'Themen',
          options: [
            { label: 'Wettbewerbsrecht', value: 'Wettbewerbsrecht' },
            { label: 'Kartellrecht', value: 'Kartellrecht' },
            { label: 'Regulierung', value: 'Regulierung' },
            { label: 'Vertriebsrecht', value: 'Vertriebsrecht' },
            { label: 'E-Commerce', value: 'E-Commerce' },
            { label: 'Compliance', value: 'Compliance' },
            { label: 'WEKO', value: 'WEKO' },
            { label: 'EU-Kommission', value: 'EU-Kommission' },
            { label: 'Bundesgericht', value: 'Bundesgericht' },
          ],
        }),
        author: fields.text({ label: 'Autor', defaultValue: 'CORE Attorneys' }),
        draft: fields.checkbox({ label: 'Entwurf (nicht veröffentlicht)', defaultValue: false }),
        content: fields.mdx({ label: 'Inhalt' }),
      },
    }),

    // Blog / News & Insights – English
    blog_en: collection({
      label: 'Blog – English',
      slugField: 'title',
      path: 'src/content/blog/en/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Short description',
          description: 'For search engines and preview (max. 160 chars)',
          multiline: false,
          validation: { length: { max: 160 } },
        }),
        pubDate: fields.date({
          label: 'Publication date',
          validation: { isRequired: true },
        }),
        updatedDate: fields.date({ label: 'Updated date' }),
        heroImage: fields.image({
          label: 'Hero image',
          directory: 'src/assets/news',
          publicPath: '../../assets/news/',
        }),
        tags: fields.multiselect({
          label: 'Topics',
          options: [
            { label: 'Competition Law', value: 'Competition Law' },
            { label: 'Antitrust', value: 'Antitrust' },
            { label: 'Regulatory', value: 'Regulatory' },
            { label: 'Distribution Law', value: 'Distribution Law' },
            { label: 'E-Commerce', value: 'E-Commerce' },
            { label: 'Compliance', value: 'Compliance' },
            { label: 'COMCO', value: 'COMCO' },
            { label: 'EU Commission', value: 'EU Commission' },
            { label: 'Federal Supreme Court', value: 'Federal Supreme Court' },
          ],
        }),
        author: fields.text({ label: 'Author', defaultValue: 'CORE Attorneys' }),
        draft: fields.checkbox({ label: 'Draft (not published)', defaultValue: false }),
        content: fields.mdx({ label: 'Content' }),
      },
    }),

    // Team Members
    team: collection({
      label: 'Team',
      slugField: 'name',
      path: 'src/content/team/*',
      format: { data: 'yaml' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        position_de: fields.text({ label: 'Position (Deutsch)', validation: { isRequired: true } }),
        position_en: fields.text({ label: 'Position (English)', validation: { isRequired: true } }),
        bio_de: fields.text({
          label: 'Biografie (Deutsch)',
          multiline: true,
          validation: { isRequired: true },
        }),
        bio_en: fields.text({
          label: 'Biography (English)',
          multiline: true,
          validation: { isRequired: true },
        }),
        image: fields.image({
          label: 'Foto',
          directory: 'src/assets/team',
          publicPath: '../../assets/team/',
        }),
        email: fields.text({ label: 'E-Mail', validation: { isRequired: true } }),
        linkedin: fields.url({ label: 'LinkedIn-URL' }),
        phone: fields.text({ label: 'Direktnummer' }),
        awards: fields.array(
          fields.text({ label: 'Auszeichnung' }),
          { label: 'Auszeichnungen & Empfehlungen', itemLabel: (props) => props.fields.value.value }
        ),
        order: fields.integer({ label: 'Reihenfolge (niedrig = zuerst)', defaultValue: 99 }),
        active: fields.checkbox({ label: 'Aktiv / Anzeigen', defaultValue: true }),
      },
    }),

    // Jobs – German
    jobs_de: collection({
      label: 'Jobs – Deutsch',
      slugField: 'title',
      path: 'src/content/jobs/de/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Stellenbezeichnung' } }),
        description: fields.text({
          label: 'Kurzbeschreibung',
          multiline: false,
          validation: { isRequired: true },
        }),
        location: fields.text({ label: 'Standort', defaultValue: 'Zürich, Schweiz' }),
        type: fields.select({
          label: 'Anstellungsart',
          options: [
            { label: 'Vollzeit', value: 'Vollzeit' },
            { label: 'Teilzeit', value: 'Teilzeit' },
            { label: 'Befristet', value: 'Befristet' },
          ],
          defaultValue: 'Vollzeit',
        }),
        postedDate: fields.date({ label: 'Ausschreibungsdatum', validation: { isRequired: true } }),
        isActive: fields.checkbox({ label: 'Stelle aktiv / anzeigen', defaultValue: true }),
        applyEmail: fields.text({ label: 'Bewerbungs-E-Mail', defaultValue: 'info@core-attorneys.com' }),
        content: fields.mdx({ label: 'Stellenbeschreibung (Details)' }),
      },
    }),

    // Jobs – English
    jobs_en: collection({
      label: 'Jobs – English',
      slugField: 'title',
      path: 'src/content/jobs/en/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Job title' } }),
        description: fields.text({
          label: 'Short description',
          multiline: false,
          validation: { isRequired: true },
        }),
        location: fields.text({ label: 'Location', defaultValue: 'Zurich, Switzerland' }),
        type: fields.select({
          label: 'Employment type',
          options: [
            { label: 'Full-time', value: 'Full-time' },
            { label: 'Part-time', value: 'Part-time' },
            { label: 'Fixed-term', value: 'Fixed-term' },
          ],
          defaultValue: 'Full-time',
        }),
        postedDate: fields.date({ label: 'Posted date', validation: { isRequired: true } }),
        isActive: fields.checkbox({ label: 'Active / Visible', defaultValue: true }),
        applyEmail: fields.text({ label: 'Application email', defaultValue: 'info@core-attorneys.com' }),
        content: fields.mdx({ label: 'Job description (details)' }),
      },
    }),

    // Expertise Areas – German
    expertise_de: collection({
      label: 'Expertise – Deutsch',
      slugField: 'title',
      path: 'src/content/expertise/de/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titel' } }),
        summary: fields.text({
          label: 'Kurzzusammenfassung',
          description: 'Kurzer Einleitungstext für die Übersicht',
          multiline: true,
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: 'Beschreibung (für SEO)',
          multiline: false,
          validation: { length: { max: 160 } },
        }),
        icon: fields.text({ label: 'Icon-Name (optional)' }),
        order: fields.integer({ label: 'Reihenfolge', defaultValue: 99 }),
        featured: fields.checkbox({ label: 'Auf Startseite anzeigen', defaultValue: false }),
        content: fields.mdx({ label: 'Inhalt (Detailseite)' }),
      },
    }),

    // Expertise Areas – English
    expertise_en: collection({
      label: 'Expertise – English',
      slugField: 'title',
      path: 'src/content/expertise/en/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        summary: fields.text({
          label: 'Short summary',
          description: 'Brief intro text for the overview',
          multiline: true,
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: 'Description (for SEO)',
          multiline: false,
          validation: { length: { max: 160 } },
        }),
        icon: fields.text({ label: 'Icon name (optional)' }),
        order: fields.integer({ label: 'Order', defaultValue: 99 }),
        featured: fields.checkbox({ label: 'Show on homepage', defaultValue: false }),
        content: fields.mdx({ label: 'Content (detail page)' }),
      },
    }),
  },

  singletons: {
    // Site-wide settings
    site_settings: singleton({
      label: 'Website-Einstellungen',
      path: 'src/content/site-settings',
      format: { data: 'yaml' },
      schema: {
        siteName: fields.text({ label: 'Website-Name', defaultValue: 'CORE Attorneys' }),
        email: fields.text({ label: 'Kontakt-E-Mail', defaultValue: 'info@core-attorneys.com' }),
        phone: fields.text({ label: 'Telefon', defaultValue: '+41 43 555 70 00' }),
        linkedinUrl: fields.url({
          label: 'LinkedIn-URL',
          defaultValue: 'https://www.linkedin.com/company/core-attorneys',
        }),
        wallsioWidgetId: fields.text({
          label: 'Walls.io Widget-ID',
          description: 'Die ID aus dem Walls.io Embed-Code',
        }),
        cfAnalyticsToken: fields.text({
          label: 'Cloudflare Analytics Token',
          description: 'Token für Cloudflare Web Analytics',
        }),
      },
    }),

    // Homepage content
    homepage_de: singleton({
      label: 'Startseite – Deutsch',
      path: 'src/content/homepage-de',
      format: { data: 'yaml' },
      schema: {
        heroTagline: fields.text({
          label: 'Hero-Tagline',
          defaultValue: 'Ihre Experten für Wettbewerbsrecht, Regulierung und Vertriebsrecht',
        }),
        heroSubtext: fields.text({
          label: 'Hero-Untertext',
          multiline: true,
        }),
        aboutText: fields.text({
          label: 'Über-uns-Text',
          multiline: true,
        }),
      },
    }),

    homepage_en: singleton({
      label: 'Homepage – English',
      path: 'src/content/homepage-en',
      format: { data: 'yaml' },
      schema: {
        heroTagline: fields.text({
          label: 'Hero tagline',
          defaultValue: 'Your experts for competition law, regulatory matters and distribution law',
        }),
        heroSubtext: fields.text({
          label: 'Hero subtext',
          multiline: true,
        }),
        aboutText: fields.text({
          label: 'About text',
          multiline: true,
        }),
      },
    }),
  },
});
