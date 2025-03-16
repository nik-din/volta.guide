import comp from "/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/tulips.html.vue"
const data = JSON.parse("{\"path\":\"/problemi/tulips.html\",\"title\":\"Tulips\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1730744733000,\"contributors\":[{\"name\":\"nik-din\",\"username\":\"nik-din\",\"email\":\"nik.dindo@gmail.com\",\"commits\":2,\"url\":\"https://github.com/nik-din\"}]},\"filePathRelative\":\"problemi/tulips.md\"}")
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
