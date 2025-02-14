import { jsxs, jsx } from 'react/jsx-runtime';
import { Link } from '@tanstack/react-router';
import { e as et } from '../nitro/nitro.mjs';
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
import '@tanstack/router-devtools';
import 'react';
import 'redaxios';
import 'react-dom/server';
import 'node:stream/web';

const f = function() {
  const o = et.useLoaderData();
  return jsxs("div", { className: "p-2 space-y-2", children: [jsx(Link, { to: "/posts", className: "block py-1 text-blue-800 hover:text-blue-600", children: "\u2190 All Posts" }), jsx("h4", { className: "text-xl font-bold underline", children: o.title }), jsx("div", { className: "text-sm", children: o.body })] });
};

export { f as component };
//# sourceMappingURL=posts_._postId.deep-BEJbe4Go.mjs.map
