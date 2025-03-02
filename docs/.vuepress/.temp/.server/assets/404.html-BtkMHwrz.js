import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.CQJnseO0.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
import "@vue/devtools-api";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>404 Not Found</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/404.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _404_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "404.html.vue"]]);
const data = JSON.parse('{"path":"/404.html","title":"","lang":"en-US","frontmatter":{"layout":"NotFound"},"headers":[],"git":{},"filePathRelative":null}');
export {
  _404_html as comp,
  data
};
