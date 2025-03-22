import comp from "/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/tulips.html.vue"
const data = JSON.parse("{\"path\":\"/problemi/tulips.html\",\"title\":\"Tulips\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1730744733000,\"contributors\":[{\"name\":\"nik-din\",\"username\":\"nik-din\",\"email\":\"nik.dindo@gmail.com\",\"commits\":2,\"url\":\"https://github.com/nik-din\"}],\"changelog\":[{\"hash\":\"6899e474f8e9449ba67a63c44ef513fcfc0c3047\",\"time\":1730744733000,\"email\":\"nik.dindo@gmail.com\",\"author\":\"nik-din\",\"message\":\"aggiunt tulips\"},{\"hash\":\"d95807a764ab3132e20336d0c160e8015e7c49e5\",\"time\":1730494107000,\"email\":\"nik.dindo@gmail.com\",\"author\":\"nik-din\",\"message\":\"started tulips\"}]},\"filePathRelative\":\"problemi/tulips.md\"}")
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
