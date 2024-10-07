import comp from "/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/template.html.vue"
const data = JSON.parse("{\"path\":\"/problemi/template.html\",\"title\":\"Titolo\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1726260494000,\"contributors\":[{\"name\":\"nik-din\",\"email\":\"nik.dindo@gmail.com\",\"commits\":2}]},\"filePathRelative\":\"problemi/template.md\"}")
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
