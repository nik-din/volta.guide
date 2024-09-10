import comp from "/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/algobadge.html.vue"
const data = JSON.parse("{\"path\":\"/algobadge.html\",\"title\":\"Algobadge\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Intro\",\"slug\":\"intro\",\"link\":\"#intro\",\"children\":[{\"level\":3,\"title\":\"Massimo\",\"slug\":\"massimo\",\"link\":\"#massimo\",\"children\":[]}]}],\"git\":{\"updatedTime\":1725914851000,\"contributors\":[{\"name\":\"nik-din\",\"email\":\"nik.dindo@gmail.com\",\"commits\":2}]},\"filePathRelative\":\"algobadge.md\"}")
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
