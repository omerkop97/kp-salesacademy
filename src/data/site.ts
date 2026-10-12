// Centrale instellingen. Pas hier contactgegevens, socials en vestigingen aan.

export const site = {
  name: 'K&P Sales Academy',
  shortName: 'K&P',
  url: 'https://kp-salesacademy.nl',
  description:
    'Werken in sales in Arnhem en omgeving? Leer verkopen, verdien goed en groei door tot leider. Geen ervaring nodig: bij K&P Sales Academy word je opgeleid door de besten.',
  parent: 'Sales Club',
  email: 'info@kp-salesacademy.nl', // TODO: definitief adres
  phone: '06 19 98 84 42',
  // internationaal formaat zonder + of spaties
  whatsapp: import.meta.env.PUBLIC_WHATSAPP_NUMBER || '31619988442',
  socials: {
    instagram: '', // TODO
    tiktok: '', // TODO
  },
  // Tracking-ID's. Leeg = niet geladen. Zodra er één is ingevuld verschijnt
  // automatisch de cookiebanner; scripts laden pas na toestemming.
  tracking: {
    ga4: '', // Google Analytics 4, bijv. 'G-XXXXXXX'
    metaPixel: '', // Meta (Instagram/Facebook) Pixel-ID, bijv. '1234567890'
    tiktokPixel: '', // TikTok Pixel-ID
    snapPixel: '', // Snapchat Pixel-ID
  },
};

export const trackingEnabled = Object.values(site.tracking).some(Boolean);

export type Location = {
  slug: string;
  city: string;
  address?: string;
  postalCode?: string;
  active: boolean;
};

// Nieuwe vestiging = nieuwe regel. Later krijgt elke vestiging een eigen pagina.
export const locations: Location[] = [
  { slug: 'arnhem', city: 'Arnhem', active: true }, // TODO: adres + postcode zodra bekend
];

// Werkgebied rond de vestiging(en). Wordt subtiel getoond (footer, FAQ)
// en in de structured data (areaServed) voor lokale SEO.
export const serviceArea = [
  'Arnhem',
  'Nijmegen',
  'Apeldoorn',
  'Ede',
  'Wageningen',
  'Cuijk',
  'Doetinchem',
  'Zutphen',
];

/** "Arnhem, Nijmegen en Zutphen" */
export function listCities(cities: string[]) {
  return cities.length > 1 ? `${cities.slice(0, -1).join(', ')} en ${cities.at(-1)}` : cities[0] ?? '';
}

export function whatsappLink(message = 'Hoi! Ik heb interesse in K&P Sales Academy.') {
  if (!site.whatsapp) return '';
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
