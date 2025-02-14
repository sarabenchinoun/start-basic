import { jsxs, jsx } from 'react/jsx-runtime';
import { Link, Outlet } from '@tanstack/react-router';
import { U as Ue } from '../nitro/nitro.mjs';
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

const v = function() {
  const o = Ue.useLoaderData();
  return jsxs("div", { className: "p-2 flex gap-2", children: [jsx("ul", { className: "list-disc pl-4", children: [...o, { id: "i-do-not-exist", name: "Non-existent User", email: "" }].map((e) => jsx("li", { className: "whitespace-nowrap", children: jsx(Link, { to: "/users/$userId", params: { userId: String(e.id) }, className: "block py-1 text-blue-800 hover:text-blue-600", activeProps: { className: "text-black font-bold" }, children: jsx("div", { children: e.name }) }) }, e.id)) }), jsx("hr", {}), jsx(Outlet, {})] });
};

export { v as component };
//# sourceMappingURL=users-Dpf15q4m.mjs.map
