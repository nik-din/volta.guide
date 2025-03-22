import comp from "/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/template.html.vue"
const data = JSON.parse("{\"path\":\"/problemi/template.html\",\"title\":\"Titolo\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1726260494000,\"contributors\":[{\"name\":\"nik-din\",\"username\":\"nik-din\",\"email\":\"nik.dindo@gmail.com\",\"commits\":2,\"url\":\"https://github.com/nik-din\"}],\"changelog\":[{\"hash\":\"af1d6151041d5e5e3e4174a61593601d2da3888d\",\"time\":1726260494000,\"email\":\"nik.dindo@gmail.com\",\"author\":\"nik-din\",\"message\":\"dettagli template\"},{\"hash\":\"7d9ba4deaecd8f8b225eac83e7acc18cfb2c1c7f\",\"time\":1726248206000,\"email\":\"nik.dindo@gmail.com\",\"author\":\"nik-din\",\"message\":\"aggiunto trendytrash\"}]},\"filePathRelative\":\"problemi/template.md\"}")
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
