const base = import.meta.env.BASE_URL;

const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;

/**
 * Prefix a root-relative path with Astro's configured deployment base.
 * External, protocol-relative and fragment-only URLs are left untouched.
 */
export function withBase(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;

  return `${normalizedBase}${path}` || '/';
}

/** Build an absolute URL for metadata such as Open Graph images and schemas. */
export function absoluteUrl(path = '/'): string {
  const site = import.meta.env.SITE;

  return site ? new URL(withBase(path), site).href : withBase(path);
}

/** Remove the deployment base from a pathname before checking active links. */
export function withoutBase(pathname: string): string {
  if (normalizedBase && pathname.startsWith(normalizedBase)) {
    return pathname.slice(normalizedBase.length) || '/';
  }

  return pathname;
}
