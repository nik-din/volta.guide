export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/algobadge.html", { loader: () => import(/* webpackChunkName: "algobadge.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/algobadge.html.js"), meta: {"title":"Algobadge"} }],
  ["/introduzione.html", { loader: () => import(/* webpackChunkName: "introduzione.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/introduzione.html.js"), meta: {"title":"Introduzione"} }],
  ["/link.html", { loader: () => import(/* webpackChunkName: "link.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/link.html.js"), meta: {"title":"Risorse"} }],
  ["/materiale.html", { loader: () => import(/* webpackChunkName: "materiale.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/materiale.html.js"), meta: {"title":"Materiale"} }],
  ["/problemi_gara.html", { loader: () => import(/* webpackChunkName: "problemi_gara.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi_gara.html.js"), meta: {"title":"Problemi per fonte"} }],
  ["/materiale/binary_search.html", { loader: () => import(/* webpackChunkName: "materiale_binary_search.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/materiale/binary_search.html.js"), meta: {"title":"Binary search"} }],
  ["/materiale/cpp_cheatsheet.html", { loader: () => import(/* webpackChunkName: "materiale_cpp_cheatsheet.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/materiale/cpp_cheatsheet.html.js"), meta: {"title":"c++ di base"} }],
  ["/materiale/fastexp.html", { loader: () => import(/* webpackChunkName: "materiale_fastexp.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/materiale/fastexp.html.js"), meta: {"title":"Esponenziazione veloce"} }],
  ["/materiale/grafi.html", { loader: () => import(/* webpackChunkName: "materiale_grafi.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/materiale/grafi.html.js"), meta: {"title":"Grafi"} }],
  ["/problemi/altavelocit%C3%A0.html", { loader: () => import(/* webpackChunkName: "problemi_altavelocità.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/altavelocità.html.js"), meta: {"title":"Altavelocità"} }],
  ["/problemi/carry_training.html", { loader: () => import(/* webpackChunkName: "problemi_carry_training.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/carry_training.html.js"), meta: {"title":"Carry Bit"} }],
  ["/problemi/coin_combinations_II.html", { loader: () => import(/* webpackChunkName: "problemi_coin_combinations_II.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/coin_combinations_II.html.js"), meta: {"title":"Coin combinations II"} }],
  ["/problemi/dante.html", { loader: () => import(/* webpackChunkName: "problemi_dante.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/dante.html.js"), meta: {"title":"Lasciate ogni speranza"} }],
  ["/problemi/dreamteam.html", { loader: () => import(/* webpackChunkName: "problemi_dreamteam.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/dreamteam.html.js"), meta: {"title":"DreamTeam Selection"} }],
  ["/problemi/gather.html", { loader: () => import(/* webpackChunkName: "problemi_gather.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/gather.html.js"), meta: {"title":"Do not gather!"} }],
  ["/problemi/money.html", { loader: () => import(/* webpackChunkName: "problemi_money.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/money.html.js"), meta: {"title":"Splitting the bill"} }],
  ["/problemi/oii_maree.html", { loader: () => import(/* webpackChunkName: "problemi_oii_maree.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/oii_maree.html.js"), meta: {"title":"Maree a Venezia"} }],
  ["/problemi/ois_ponti.html", { loader: () => import(/* webpackChunkName: "problemi_ois_ponti.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/ois_ponti.html.js"), meta: {"title":"Ponti e isole"} }],
  ["/problemi/poldo.html", { loader: () => import(/* webpackChunkName: "problemi_poldo.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/poldo.html.js"), meta: {"title":"Poldo"} }],
  ["/problemi/police3.html", { loader: () => import(/* webpackChunkName: "problemi_police3.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/police3.html.js"), meta: {"title":"Police3"} }],
  ["/problemi/reading.html", { loader: () => import(/* webpackChunkName: "problemi_reading.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/reading.html.js"), meta: {"title":"Reading papers"} }],
  ["/problemi/renovations.html", { loader: () => import(/* webpackChunkName: "problemi_renovations.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/renovations.html.js"), meta: {"title":"City redevelopment"} }],
  ["/problemi/riciclo.html", { loader: () => import(/* webpackChunkName: "problemi_riciclo.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/riciclo.html.js"), meta: {"title":"Riciclo"} }],
  ["/problemi/smaltimento.html", { loader: () => import(/* webpackChunkName: "problemi_smaltimento.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/smaltimento.html.js"), meta: {"title":"Smaltimento"} }],
  ["/problemi/template.html", { loader: () => import(/* webpackChunkName: "problemi_template.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/template.html.js"), meta: {"title":"Titolo"} }],
  ["/problemi/trees_weoi.html", { loader: () => import(/* webpackChunkName: "problemi_trees_weoi.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/trees_weoi.html.js"), meta: {"title":"Trees"} }],
  ["/problemi/trendytrash.html", { loader: () => import(/* webpackChunkName: "problemi_trendytrash.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/trendytrash.html.js"), meta: {"title":"Trendytrash"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
