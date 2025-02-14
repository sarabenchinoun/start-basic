import { notFound } from '@tanstack/react-router';
import Ne from 'redaxios';
import { A, y } from './index-DFoIc76i.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:async_hooks';
import 'react/jsx-runtime';
import '@tanstack/router-devtools';
import 'react';
import 'react-dom/server';
import 'node:stream/web';

const n = A("app_utils_posts_tsx--fetchPost_createServerFn_handler", "/_server", (e) => h.__executeServer(e)), a = A("app_utils_posts_tsx--fetchPosts_createServerFn_handler", "/_server", (e) => p.__executeServer(e)), h = y({ method: "GET" }).validator((e) => e).handler(n, async ({ data: e }) => (console.info(`Fetching post with id ${e}...`), await Ne.get(`https://jsonplaceholder.typicode.com/posts/${e}`).then((t) => t.data).catch((t) => {
  throw console.error(t), t.status === 404 ? notFound() : t;
}))), p = y({ method: "GET" }).handler(a, async () => (console.info("Fetching posts..."), Ne.get("https://jsonplaceholder.typicode.com/posts").then((e) => e.data.slice(0, 10))));

export { n as fetchPost_createServerFn_handler, a as fetchPosts_createServerFn_handler };
//# sourceMappingURL=posts-BB0OX-38.mjs.map
