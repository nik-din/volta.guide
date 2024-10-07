export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/algobadge.html", { loader: () => import(/* webpackChunkName: "algobadge.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/algobadge.html.js"), meta: {"title":"Algobadge"} }],
  ["/introduzione.html", { loader: () => import(/* webpackChunkName: "introduzione.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/introduzione.html.js"), meta: {"title":"Introduzione"} }],
  ["/problemi_categorie.html", { loader: () => import(/* webpackChunkName: "problemi_categorie.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi_categorie.html.js"), meta: {"title":"Problemi per categoria"} }],
  ["/problemi_gara.html", { loader: () => import(/* webpackChunkName: "problemi_gara.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi_gara.html.js"), meta: {"title":"Problemi per fonte"} }],
  ["/risorse.html", { loader: () => import(/* webpackChunkName: "risorse.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/risorse.html.js"), meta: {"title":"Risorse"} }],
  ["/problemi/carry_training.html", { loader: () => import(/* webpackChunkName: "problemi_carry_training.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/carry_training.html.js"), meta: {"title":"Carry Bit"} }],
  ["/problemi/riciclo.html", { loader: () => import(/* webpackChunkName: "problemi_riciclo.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/riciclo.html.js"), meta: {"title":"Riciclo"} }],
  ["/problemi/smaltimento.html", { loader: () => import(/* webpackChunkName: "problemi_smaltimento.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/smaltimento.html.js"), meta: {"title":"Smaltimento"} }],
  ["/problemi/template.html", { loader: () => import(/* webpackChunkName: "problemi_template.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/template.html.js"), meta: {"title":"Titolo"} }],
  ["/problemi/trees_weoi.html", { loader: () => import(/* webpackChunkName: "problemi_trees_weoi.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/trees_weoi.html.js"), meta: {"title":"Trees"} }],
  ["/problemi/trendytrash.html", { loader: () => import(/* webpackChunkName: "problemi_trendytrash.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/trendytrash.html.js"), meta: {"title":"Trendytrash"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/materiale/cpp_cheatsheet.html", { loader: () => import(/* webpackChunkName: "materiale_cpp_cheatsheet.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/materiale/cpp_cheatsheet.html.js"), meta: {"title":"c++ di base"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
