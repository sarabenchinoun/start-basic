import { jsxs, jsx } from 'react/jsx-runtime';
import { Y as Ye } from '../nitro/nitro.mjs';
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
import '@tanstack/react-router';
import 'node:async_hooks';
import '@tanstack/router-devtools';
import 'react';
import 'redaxios';
import 'react-dom/server';
import 'node:stream/web';

const h = function() {
  const o = Ye.useLoaderData();
  return jsxs("div", { className: "space-y-2", children: [jsx("h4", { className: "text-xl font-bold underline", children: o.name }), jsx("div", { className: "text-sm", children: o.email })] });
};

export { h as component };
//# sourceMappingURL=users._userId-Hfzu2Mht.mjs.map
