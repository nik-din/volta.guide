import comp from "/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/materiale.html.vue"
const data = JSON.parse("{\"path\":\"/materiale.html\",\"title\":\"Materiale\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"problemi per il base\",\"slug\":\"problemi-per-il-base\",\"link\":\"#problemi-per-il-base\",\"children\":[]},{\"level\":2,\"title\":\"c++ base\",\"slug\":\"c-base\",\"link\":\"#c-base\",\"children\":[]}],\"git\":{\"updatedTime\":1728403175000,\"contributors\":[{\"name\":\"nik-din\",\"email\":\"nik.dindo@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"materiale.md\"}")
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
