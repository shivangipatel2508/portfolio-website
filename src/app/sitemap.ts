import type { MetadataRoute } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

const APP_DIR = path.join(process.cwd(), 'src', 'app');
const SITE_URL = 'https://shivangipatel.me';
const PAGE_FILE = 'page.tsx';
const EXCLUDED_SEGMENTS = new Set(['api']);

function toPublicRoute(relativeDir: string): string | null {
  if (!relativeDir) {
    return '/';
  }

  const segments = relativeDir.split(path.sep).filter(Boolean);

  if (
    segments.some(
      (segment) =>
        segment.startsWith('_') ||
        segment.includes('[') ||
        EXCLUDED_SEGMENTS.has(segment),
    )
  ) {
    return null;
  }

  const cleanedSegments = segments.filter(
    (segment) => !segment.startsWith('(') && !segment.startsWith('@'),
  );

  return `/${cleanedSegments.join('/')}`;
}

async function collectRoutes(
  dir: string,
  relativeDir = '',
): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const routes: string[] = [];

  if (entries.some((entry) => entry.isFile() && entry.name === PAGE_FILE)) {
    const publicRoute = toPublicRoute(relativeDir);
    if (publicRoute) {
      routes.push(publicRoute);
    }
  }

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith('_')) {
      continue;
    }

    const childDir = path.join(dir, entry.name);
    const childRelativeDir = path.join(relativeDir, entry.name);
    routes.push(...(await collectRoutes(childDir, childRelativeDir)));
  }

  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const routes = await collectRoutes(APP_DIR);
  const uniqueRoutes = [...new Set(routes)].sort();

  return uniqueRoutes.map((route) => ({
    url: `${SITE_URL}${route === '/' ? '' : route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
