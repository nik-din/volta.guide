import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.CFd3vad-.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
import "@vue/devtools-api";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouteLink = resolveComponent("RouteLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Ciao! 😃<br> Questo sito vuole essere una risorsa per gli informatici del Volta (e non). Prima o poi aggiungeremo informazioni, link utili, hint e soluzioni a problemi vari.</p><p>Overview del sito:</p><ul><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/introduzione.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Introduzione`);
      } else {
        return [
          createTextVNode("Introduzione")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` contiene un&#39;introduzione al mondo della programmazione competitiva</li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/materiale.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Materiale`);
      } else {
        return [
          createTextVNode("Materiale")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` contiene del materiale che pubblichiamo via via</li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/link.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Link`);
      } else {
        return [
          createTextVNode("Link")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` contiene link e risorse utili</li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/algobadge.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Algobadge`);
      } else {
        return [
          createTextVNode("Algobadge")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` contiene hint ai problemi di algobadge</li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi_gara.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Problemi per fonte`);
      } else {
        return [
          createTextVNode("Problemi per fonte")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` contiene una raccolta di problemi divisi per fonte</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/","title":"Home","lang":"en-US","frontmatter":{"title":"Home"},"headers":[],"git":{"updatedTime":1740822277000,"contributors":[{"name":"nik-din","username":"nik-din","email":"nik.dindo@gmail.com","commits":10,"url":"https://github.com/nik-din"}]},"filePathRelative":"README.md"}');
export {
  index_html as comp,
  data
};
