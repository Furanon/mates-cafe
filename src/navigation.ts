import type { ImageMetadata } from 'astro';
import type { Icons } from '@ui/icons/icons';
import splash from '@images/splash.jpeg';
import groupshot from '@images/groupshot.png';
import matchaLatte from '@images/matcha_latte.png';
import community1 from '@images/community1.jpeg';
import table1 from '@images/table.jpeg';
import table2 from '@images/table2.jpeg';

/**
 * The site's navigation tree: every mega menu, top-level link and breadcrumb
 * root, typed so a bad icon name or image is a compile error. The navbar and
 * 404 page read from here.
 */

export type IconName = keyof typeof Icons;

export interface Crumb {
  label: string;
  href?: string;
}

/** A plain link in the navbar. */
export interface NavLink {
  label: string;
  href: string;
}

export interface MenuLink {
  title: string;
  description: string;
  href: string;
  icon: IconName;
}

export interface MenuCard {
  title: string;
  description: string;
  href: string;
  image: ImageMetadata;
}

export interface MenuSection<Item> {
  title?: string;
  items: readonly Item[];
}

interface MenuBase {
  id: string;
  label: string;
  /** Intro line at the top of the dropdown. */
  description?: string;
  /** Pages under this prefix show the menu as active. */
  pathPrefix?: string;
}

export type Menu = MenuBase &
  (
    | { layout: 'list'; sections: readonly MenuSection<MenuLink>[] }
    | { layout: 'cards'; sections: readonly MenuSection<MenuCard>[] }
  );

export const menus = {
  about: {
    id: 'about',
    label: 'About',
    description: 'Learn more about MATES and our community',
    pathPrefix: '/about',
    layout: 'list',
    sections: [
      {
        title: 'Our Story',
        items: [
          {
            icon: 'heart',
            title: 'Our Mission',
            description: 'Building community through coffee and creativity',
            href: '/about',
          },
          {
            icon: 'users',
            title: 'Volunteer Program',
            description:
              'Students learn barista skills in exchange for their time',
            href: '/about#volunteer',
          },
          {
            icon: 'palette',
            title: 'Art Space',
            description:
              'Open twice a month for local artists and craftspeople',
            href: '/about#art-space',
          },
        ],
      },
    ],
  },
  menu: {
    id: 'menu',
    label: 'Menu',
    description: 'Discover our signature drinks and food',
    pathPrefix: '/menu',
    layout: 'cards',
    sections: [
      {
        items: [
          {
            href: '/menu#matcha',
            title: 'Matcha Specialties',
            description: 'Our signature matcha drinks made with premium powder',
            image: matchaLatte,
          },
          {
            href: '/menu#coffee',
            title: 'Coffee & Espresso',
            description: 'Expertly crafted by our student baristas',
            image: splash,
          },
          {
            href: '/menu#food',
            title: 'Food & Pastries',
            description: 'Fresh, locally-sourced bites to pair with your drink',
            image: table1,
          },
        ],
      },
    ],
  },
  community: {
    id: 'community',
    label: 'Community',
    description: 'Join our events and volunteer program',
    pathPrefix: '/community',
    layout: 'cards',
    sections: [
      {
        items: [
          {
            href: '/community#volunteer',
            title: 'Student Volunteers',
            description:
              'Learn barista skills while giving back to the community',
            image: groupshot,
          },
          {
            href: '/community#art-space',
            title: 'Art Space Events',
            description: 'Bi-monthly showcase for local artists and makers',
            image: community1,
          },
          {
            href: '/contact',
            title: 'Visit the Cafe',
            description: 'Find us in Tanjong Malim and say hello',
            image: table2,
          },
        ],
      },
    ],
  },
} as const satisfies Record<string, Menu>;

/** Mega menus in navbar order. */
export const menuList: readonly Menu[] = Object.values(menus);

/** Plain top-level links rendered after the mega menus. */
export const navigationLinks: readonly NavLink[] = [
  { href: '/contact', label: 'Contact' },
];

/** Every item in a menu, sections flattened. */
export function menuItems<M extends Menu>(
  menu: M
): M['sections'][number]['items'][number][] {
  return menu.sections.flatMap(section => [...section.items]);
}

export const home: Crumb = { label: 'Home', href: '/' };
export const aboutHome: Crumb = {
  label: 'About',
  href: '/about',
};

/** Breadcrumb trail for a page under the about section. */
export function aboutTrail(...rest: Crumb[]): Crumb[] {
  return [home, aboutHome, ...rest];
}
