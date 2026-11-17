import { cp, mkdir, rm, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = resolve(root, 'dist');
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
for (const entry of ['index.html', 'styles.css', 'src', 'assets']) {
  await cp(resolve(root, entry), resolve(dist, entry), { recursive: true });
}

// رابط الموقع المطلق مطلوب لوسوم Open Graph (فيسبوك وواتساب وغيرهما يتجاهلون الروابط النسبية).
// الأولوية: SITE_URL (دومين مخصص) ثم متغيرات Vercel التلقائية.
const clean = (value) => (value ? `https://${value.replace(/^https?:\/\//, '').replace(/\/+$/, '')}` : '');
const siteUrl = process.env.SITE_URL
  ? clean(process.env.SITE_URL)
  : process.env.VERCEL_ENV === 'production'
    ? clean(process.env.VERCEL_PROJECT_PRODUCTION_URL)
    : clean(process.env.VERCEL_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL);

const indexPath = resolve(dist, 'index.html');
const html = await readFile(indexPath, 'utf8');
await writeFile(indexPath, html.replaceAll('__SITE_URL__', siteUrl));

console.log(`Static site built in dist/ (site url: ${siteUrl || 'غير محدد — اضبط SITE_URL'})`);
