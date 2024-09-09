export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/algobadge.html", { loader: () => import(/* webpackChunkName: "algobadge.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/algobadge.html.js"), meta: {"title":"Algobadge"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
