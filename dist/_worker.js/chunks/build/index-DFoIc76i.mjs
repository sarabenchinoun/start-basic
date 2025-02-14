import { invariant, warning, isRedirect, isNotFound } from '@tanstack/react-router';
import { W, u } from '../nitro/nitro.mjs';

function _(e) {
  return e instanceof Headers ? new Headers(e) : Array.isArray(e) ? new Headers(e) : typeof e == "object" ? new Headers(e) : new Headers();
}
function j(...e) {
  return e.reduce((n, r) => {
    const t = _(r);
    for (const [o, s] of t.entries()) n.set(o, s);
    return n;
  }, new Headers());
}
const C = [];
let f;
function O(e) {
  const n = f;
  return f = typeof e == "function" ? e() : e, () => {
    f = n;
  };
}
O(() => {
  const e = (t, o) => `/__tsr/staticServerFnCache/${t.functionId}__${o}.json`, n = (t) => JSON.stringify(t != null ? t : "", (i, a) => a && typeof a == "object" && !Array.isArray(a) ? Object.keys(a).sort().reduce((c, u) => (c[u] = a[u], c), {}) : a).replace(/[/\\?%*:|"<>]/g, "-").replace(/\s+/g, "_"), r = typeof document < "u" ? /* @__PURE__ */ new Map() : null;
  return { getItem: async (t) => {
    if (typeof document > "u") {
      const o = n(t.data), s = e(t, o), i = "/Users/sarabenchinoun/Code/start-basic/dist", a = await import('node:fs/promises'), u$1 = (await import('node:path')).join(i, s), [l, d] = await a.readFile(u$1, "utf-8").then((h) => [u.parse(h), null]).catch((h) => [null, h]);
      if (d && d.code !== "ENOENT") throw d;
      return l;
    }
  }, setItem: async (t, o) => {
    const s = await import('node:fs/promises'), i = await import('node:path'), a = n(t.data), c = e(t, a), l = i.join("/Users/sarabenchinoun/Code/start-basic/dist", c);
    await s.mkdir(i.dirname(l), { recursive: true }), await s.writeFile(l, u.stringify(o));
  }, fetchItem: async (t) => {
    const o = n(t.data), s = e(t, o);
    let i = r == null ? void 0 : r.get(s);
    return i || (i = await fetch(s, { method: "GET" }).then((a) => a.text()).then((a) => u.parse(a)), r == null ? void 0 : r.set(s, i)), i;
  } };
});
function y(e, n) {
  const r = n || e || {};
  return typeof r.method > "u" && (r.method = "GET"), { options: r, middleware: (t) => y(void 0, Object.assign(r, { middleware: t })), validator: (t) => y(void 0, Object.assign(r, { validator: t })), type: (t) => y(void 0, Object.assign(r, { type: t })), handler: (...t) => {
    const [o, s] = t;
    Object.assign(r, { ...o, extractedFn: o, serverFn: s });
    const i = [...r.middleware || [], N(r)];
    return Object.assign(async (a) => v(i, "client", { ...o, ...r, data: a == null ? void 0 : a.data, headers: a == null ? void 0 : a.headers, context: {} }).then((c) => {
      if (c.error) throw c.error;
      return c.result;
    }), { ...o, __executeServer: async (a) => {
      const c = a instanceof FormData ? I(a) : a;
      c.type = typeof r.type == "function" ? r.type(c) : r.type;
      const u = { ...o, ...c }, l = () => v(i, "server", u).then((d) => ({ result: d.result, error: d.error, context: d.sendContext }));
      if (u.type === "static") {
        let d;
        if ((f == null ? void 0 : f.getItem) && (d = await f.getItem(u)), d || (d = await l().then((h) => ({ ctx: h, error: null })).catch((h) => ({ ctx: void 0, error: h })), (f == null ? void 0 : f.setItem) && await f.setItem(u, d)), invariant(d, "No response from both server and static cache!"), d.error) throw d.error;
        return d.ctx;
      }
      return l();
    } });
  } };
}
function I(e) {
  const n = e.get("__TSR_CONTEXT");
  if (e.delete("__TSR_CONTEXT"), typeof n != "string") return { context: {}, data: e };
  try {
    return { context: u.parse(n), data: e };
  } catch {
    return { data: e };
  }
}
function E(e) {
  const n = /* @__PURE__ */ new Set(), r = [], t = (o) => {
    o.forEach((s) => {
      s.options.middleware && t(s.options.middleware), n.has(s) || (n.add(s), r.push(s));
    });
  };
  return t(e), r;
}
const w = async (e, n, r) => e({ ...n, next: async (t = {}) => {
  var _a, _b;
  return r({ ...n, ...t, context: { ...n.context, ...t.context }, sendContext: { ...n.sendContext, ...(_a = t.sendContext) != null ? _a : {} }, headers: j(n.headers, t.headers), result: t.result !== void 0 ? t.result : n.result, error: (_b = t.error) != null ? _b : n.error });
} });
function T(e, n) {
  if (e == null) return {};
  if ("~standard" in e) {
    const r = e["~standard"].validate(n);
    if (r instanceof Promise) throw new Error("Async validation not supported");
    if (r.issues) throw new Error(JSON.stringify(r.issues, void 0, 2));
    return r.value;
  }
  if ("parse" in e) return e.parse(n);
  if (typeof e == "function") return e(n);
  throw new Error("Invalid validator type!");
}
async function v(e, n, r) {
  const t = E([...C, ...e]), o = async (s) => {
    const i = t.shift();
    if (!i) return s;
    i.options.validator && (n !== "client" || i.options.validateClient) && (s.data = await T(i.options.validator, s.data));
    const a = n === "client" ? i.options.client : i.options.server;
    return a ? w(a, s, async (c) => {
      const u = i.options.clientAfter;
      if (n === "client" && u) {
        const l = await o(c);
        return w(u, { ...c, ...l }, (d) => d);
      }
      return o(c).catch((l) => {
        if (isRedirect(l) || isNotFound(l)) return { ...c, error: l };
        throw l;
      });
    }) : o(s);
  };
  return o({ ...r, headers: r.headers || {}, sendContext: r.sendContext || {}, context: r.context || {} });
}
function N(e) {
  return { _types: void 0, options: { validator: e.validator, validateClient: e.validateClient, client: async ({ next: n, sendContext: r, ...t }) => {
    var o;
    const s = { ...t, context: r, type: typeof t.type == "function" ? t.type(t) : t.type };
    if (t.type === "static" && typeof document < "u") {
      invariant(f, "serverFnStaticCache.fetchItem is not available!");
      const a = await f.fetchItem(s);
      if (a) {
        if (a.error) throw a.error;
        return n(a.ctx);
      }
      warning(a, `No static cache item found for ${s.functionId}__${JSON.stringify(s.data)}, falling back to server function...`);
    }
    const i = await ((o = e.extractedFn) == null ? void 0 : o.call(e, s));
    return n(i);
  }, server: async ({ next: n, ...r }) => {
    var t;
    const o = await ((t = e.serverFn) == null ? void 0 : t.call(e, r));
    return n({ ...r, result: o });
  } } };
}
function M(e) {
  return e.replace(/^\/|\/$/g, "");
}
const A = (e, n, r) => {
  W(r);
  const t = `/${M(n)}/${e}`;
  return Object.assign(r, { url: t, functionId: e });
};

export { A, y };
//# sourceMappingURL=index-DFoIc76i.mjs.map
