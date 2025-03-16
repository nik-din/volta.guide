import comp from "/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Home\"},\"headers\":[],\"git\":{\"updatedTime\":1741991895000,\"contributors\":[{\"name\":\"nik-din\",\"username\":\"nik-din\",\"email\":\"nik.dindo@gmail.com\",\"commits\":9,\"url\":\"https://github.com/nik-din\"},{\"name\":\"Giovanni\",\"username\":\"Giovanni\",\"email\":\"112493877+ciao-gio@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/Giovanni\"}]},\"filePathRelative\":\"README.md\"}")
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
