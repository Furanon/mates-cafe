/**
 * Company details shown in the footer, contact page, licensing copy and
 * schema.org metadata.
 */
export const site = {
  name: 'MATES',
  /** Who the company is – footer blurb. */
  description:
    'MATES is a community-focused cafe in Tanjong Malim, Malaysia, where students learn barista skills through a volunteering program. We also host an art space twice a month for local artists and craftspeople.',
  /** What the company does – schema.org WebSite description. */
  tagline:
    'MATES Cafe - Community, Coffee & Creativity in Tanjong Malim. Learn barista skills through our student volunteer program. Art space open twice monthly.',
  address: {
    street: 'NO 53 BAWAH, Jalan Besar, PEKAN',
    city: '35900 Tanjong Malim, Perak',
    country: 'Malaysia',
  },
  phone: '+60 12-345 6789',
  email: 'hello@mates.cafe',
  salesEmail: 'events@mates.cafe',
  website: 'mates.cafe',
  instagram: 'https://www.instagram.com/mates.officials/?hl=en',
} as const;

/** `tel:` href for a display phone number. */
export function telHref(phone: string): string {
  return `tel:+${phone.replace(/[^\d]/g, '')}`;
}
