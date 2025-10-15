export interface NavLink {
  label: string;
  href: string;
}

export interface NavSection {
  title: string;
  links: NavLink[];
}

export const NAV_EN = {
  solutions: {
    title: 'Solutions',
    links: [
      { label: 'patientRecords', href: '/consult' },
      { label: 'beforeAfter', href: '/capture' },
      { label: 'onlineBooking', href: '/agenda' },
      { label: 'aiTranscription', href: '/ai-copilot' },
      { label: 'aiSkinAnalysis', href: '/ai-skin-analysis' },
    ]
  },
  moreSolutions: {
    title: 'More Solutions',
    links: [
      { label: 'revolution', href: '/revolution' },
      { label: 'simulation3d', href: '/3d' },
    ]
  },
  personas: {
    title: 'For You',
    links: [
      { label: 'clinicManager', href: '/clinic-manager' },
      { label: 'aestheticPractitioner', href: '/practitioner' },
      { label: 'assistant', href: '/assistant' },
      { label: 'multiSite', href: '/multi-site' },
      { label: 'marketing', href: '/marketing' },
    ]
  },
  pricing: {
    label: 'pricing',
    href: '/pricing'
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'blog', href: '/blog' },
      { label: 'contact', href: '/contact_form' },
      { label: 'aboutUs', href: '/about' },
    ]
  },
  cta: {
    label: 'requestDemo',
    href: '/contact_form'
  },
  login: {
    label: 'login',
    href: 'https://app.nextmotion.net'
  }
};

export const NAV_FR = {
  solutions: {
    title: 'Solutions',
    links: [
      { label: 'patientRecords', href: '/fr/consult' },
      { label: 'beforeAfter', href: '/fr/capture' },
      { label: 'onlineBooking', href: '/fr/agenda' },
      { label: 'aiTranscription', href: '/fr/ai-copilot' },
      { label: 'aiSkinAnalysis', href: '/fr/analyse-peau-ia' },
    ]
  },
  moreSolutions: {
    title: 'Autres solutions',
    links: [
      { label: 'revolution', href: '/fr/revolution' },
      { label: 'simulation3d', href: '/fr/3d' },
    ]
  },
  personas: {
    title: 'Vous êtes',
    links: [
      { label: 'clinicManager', href: '/fr/clinic-manager' },
      { label: 'aestheticPractitioner', href: '/fr/practitioner' },
      { label: 'assistant', href: '/fr/assistant' },
      { label: 'multiSite', href: '/fr/multi-site' },
      { label: 'marketing', href: '/fr/marketing' },
    ]
  },
  pricing: {
    label: 'pricing',
    href: '/fr/pricing'
  },
  resources: {
    title: 'Ressources',
    links: [
      { label: 'blog', href: '/fr/blog' },
      { label: 'contact', href: '/fr/contact_form' },
      { label: 'aboutUs', href: '/fr/a-propos' },
    ]
  },
  cta: {
    label: 'requestDemo',
    href: '/fr/contact_form'
  },
  login: {
    label: 'login',
    href: 'https://app.nextmotion.net'
  }
};

export const FOOTER_EN = {
  products: {
    title: 'Products',
    links: [
      { label: 'capture', href: '/capture' },
      { label: 'consult', href: '/consult' },
      { label: 'agenda', href: '/agenda' },
      { label: 'aiSkinAnalysis', href: '/ai-skin-analysis' },
      { label: 'copilot', href: '/ai-copilot' },
      { label: 'revolution', href: '/revolution' },
      { label: 'simulation3d', href: '/3d' },
    ]
  },
  personas: {
    title: 'Personas',
    links: [
      { label: 'clinicManager', href: '/clinic-manager' },
      { label: 'practitioner', href: '/practitioner' },
      { label: 'assistant', href: '/assistant' },
      { label: 'multiSiteManager', href: '/multi-site' },
      { label: 'marketing', href: '/marketing' },
    ]
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'blog', href: '/blog' },
      { label: 'support', href: '/contact_form' },
    ]
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'terms', href: '/terms' },
      { label: 'privacy', href: '/privacy' },
      { label: 'gdpr', href: '/gdpr' },
    ]
  }
};

export const FOOTER_FR = {
  products: {
    title: 'Produits',
    links: [
      { label: 'capture', href: '/fr/capture' },
      { label: 'consult', href: '/fr/consult' },
      { label: 'agenda', href: '/fr/agenda' },
      { label: 'aiAnalysis', href: '/fr/analyse-peau-ia' },
      { label: 'copilot', href: '/fr/ai-copilot' },
      { label: 'revolution', href: '/fr/revolution' },
      { label: 'simulation3d', href: '/fr/3d' },
    ]
  },
  personas: {
    title: 'Personae',
    links: [
      { label: 'manager', href: '/fr/clinic-manager' },
      { label: 'practitioner', href: '/fr/practitioner' },
      { label: 'assistant', href: '/fr/assistant' },
      { label: 'chains', href: '/fr/multi-site' },
      { label: 'marketing', href: '/fr/marketing' },
    ]
  },
  resources: {
    title: 'Ressources',
    links: [
      { label: 'blog', href: '/fr/blog' },
      { label: 'support', href: '/fr/contact_form' },
    ]
  },
  legal: {
    title: 'Légal',
    links: [
      { label: 'terms', href: '/fr/mentions-legales' },
      { label: 'privacy', href: '/fr/politique-confidentialite' },
      { label: 'gdpr', href: '/fr/rgpd' },
    ]
  }
};
