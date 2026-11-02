import { existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { Icons } from '@ui/icons/icons';
import {
  aboutTrail,
  menuItems,
  menuList,
  navigationLinks,
} from './navigation';

/** Astro file routing: `/a/b` is served by `a/b.astro` or `a/b/index.astro`. */
function pageExists(href: string): boolean {
  const path = href.split('#')[0];
  return (
    existsSync(`src/pages${path}.astro`) ||
    existsSync(`src/pages${path}/index.astro`)
  );
}

const links = [
  ...menuList.flatMap(menu =>
    menuItems(menu).map(item => ({ ...item, menu: menu.id }))
  ),
  ...navigationLinks.map(link => ({
    title: link.label,
    href: link.href,
    menu: 'navbar',
  })),
];

/** Menus whose links point at in-page anchors or placeholders. */
const PLACEHOLDER_MENUS: string[] = [];

describe('navigation tree', () => {
  it.each(links.filter(link => !PLACEHOLDER_MENUS.includes(link.menu)))(
    '$title links to an existing page ($href)',
    link => {
      expect(pageExists(link.href)).toBe(true);
    }
  );

  it('only the documented showcase menu uses placeholder links', () => {
    const placeholders = links.filter(link => link.href === '#');
    for (const link of placeholders) {
      expect(PLACEHOLDER_MENUS, `${link.title} in ${link.menu}`).toContain(
        link.menu
      );
    }
  });

  it('uses only icons that exist', () => {
    for (const item of menuList.flatMap(menu => menuItems(menu))) {
      if ('icon' in item) expect(Icons).toHaveProperty(item.icon);
    }
  });

  it('roots about breadcrumbs at Home › About', () => {
    expect(aboutTrail({ label: 'Volunteer Program' })).toEqual([
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Volunteer Program' },
    ]);
  });
});
