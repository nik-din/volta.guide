import comp from "/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/reading.html.vue"
const data = JSON.parse("{\"path\":\"/problemi/reading.html\",\"title\":\"Reading papers\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1729352861000,\"contributors\":[{\"name\":\"nik-din\",\"username\":\"nik-din\",\"email\":\"nik.dindo@gmail.com\",\"commits\":1,\"url\":\"https://github.com/nik-din\"}],\"changelog\":[{\"hash\":\"575fafa1f0778462c3f8e1ee545d7dcec24c2694\",\"time\":1729352861000,\"email\":\"nik.dindo@gmail.com\",\"author\":\"nik-din\",\"message\":\"aggiunto reading\"}]},\"filePathRelative\":\"problemi/reading.md\"}")
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
