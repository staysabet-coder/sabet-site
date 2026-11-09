import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const output = resolve(root, 'dist');
let base = root;
try { if ((await stat(output)).isDirectory()) base = output; } catch { /* use source files in Preview */ }
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp' };
const port = Number(process.env.PORT || 3000);

createServer(async (request, response) => {
  const pathname = decodeURIComponent(new URL(request.url || '/', 'http://localhost').pathname);
  const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const candidate = resolve(base, relative);
  if (candidate !== base && !candidate.startsWith(base + sep)) {
    response.writeHead(403).end('Forbidden');
    return;
  }
  try {
    const file = await readFile(candidate);
    response.writeHead(200, { 'Content-Type': mime[extname(candidate)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff' });
    response.end(file);
  } catch {
    if (!extname(pathname) || pathname.endsWith('.html')) {
      try {
        response.writeHead(200, { 'Content-Type': mime['.html'] });
        response.end(await readFile(resolve(base, 'index.html')));
      } catch {
        response.writeHead(404).end('Not found');
      }
    } else {
      response.writeHead(404).end('Not found');
    }
  }
}).listen(port, '0.0.0.0', () => console.log(`Sabet site listening on 0.0.0.0:${port}`));
