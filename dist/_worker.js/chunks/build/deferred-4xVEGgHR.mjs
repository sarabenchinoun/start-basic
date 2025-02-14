import { jsxs, jsx } from 'react/jsx-runtime';
import { Await } from '@tanstack/react-router';
import { useState, Suspense } from 'react';
import { q as qe } from '../nitro/nitro.mjs';
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
import 'redaxios';
import 'react-dom/server';
import 'node:stream/web';

const N = function() {
  const [i, m] = useState(0), { deferredStuff: s, deferredPerson: a, person: n } = qe.useLoaderData();
  return jsxs("div", { className: "p-2", children: [jsxs("div", { "data-testid": "regular-person", children: [n.name, " - ", n.randomNumber] }), jsx(Suspense, { fallback: jsx("div", { children: "Loading person..." }), children: jsx(Await, { promise: a, children: (r) => jsxs("div", { "data-testid": "deferred-person", children: [r.name, " - ", r.randomNumber] }) }) }), jsx(Suspense, { fallback: jsx("div", { children: "Loading stuff..." }), children: jsx(Await, { promise: s, children: (r) => jsx("h3", { "data-testid": "deferred-stuff", children: r }) }) }), jsxs("div", { children: ["Count: ", i] }), jsx("div", { children: jsx("button", { onClick: () => m(i + 1), children: "Increment" }) })] });
};

export { N as component };
//# sourceMappingURL=deferred-4xVEGgHR.mjs.map
