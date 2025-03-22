import comp from "/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/walker.html.vue"
const data = JSON.parse("{\"path\":\"/problemi/walker.html\",\"title\":\"Johnnie Walker\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1729355684000,\"contributors\":[{\"name\":\"nik-din\",\"username\":\"nik-din\",\"email\":\"nik.dindo@gmail.com\",\"commits\":1,\"url\":\"https://github.com/nik-din\"}],\"changelog\":[{\"hash\":\"f8f29d5c4557a6c2f73b66f633fb3d6dfa7a98f6\",\"time\":1729355684000,\"email\":\"nik.dindo@gmail.com\",\"author\":\"nik-din\",\"message\":\"aggiutno walker\"}]},\"filePathRelative\":\"problemi/walker.md\"}")
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
