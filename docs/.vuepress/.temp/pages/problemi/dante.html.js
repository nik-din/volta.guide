import comp from "/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/dante.html.vue"
const data = JSON.parse("{\"path\":\"/problemi/dante.html\",\"title\":\"Lasciate ogni speranza\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1736443395000,\"contributors\":[{\"name\":\"nik-din\",\"username\":\"nik-din\",\"email\":\"nik.dindo@gmail.com\",\"commits\":1,\"url\":\"https://github.com/nik-din\"}],\"changelog\":[{\"hash\":\"06cb1e5550c1e2443fabb56930eb4b4cd8668771\",\"time\":1736443395000,\"email\":\"nik.dindo@gmail.com\",\"author\":\"nik-din\",\"message\":\"aggiunti problemi\"}]},\"filePathRelative\":\"problemi/dante.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
