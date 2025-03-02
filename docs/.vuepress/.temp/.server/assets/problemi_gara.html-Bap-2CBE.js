import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.CQJnseO0.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
import "@vue/devtools-api";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouteLink = resolveComponent("RouteLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><p><strong>ancora in fase di sviluppo</strong></p><h1 id="problemi-divisi-per-competizione" tabindex="-1"><a class="header-anchor" href="#problemi-divisi-per-competizione"><span>Problemi divisi per competizione</span></a></h1><h2 id="terry" tabindex="-1"><a class="header-anchor" href="#terry"><span>Terry</span></a></h2><h2 id="oii" tabindex="-1"><a class="header-anchor" href="#oii"><span>OII</span></a></h2><h3 id="_2021" tabindex="-1"><a class="header-anchor" href="#_2021"><span>2021</span></a></h3><ul><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/trendytrash.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Trendytrash`);
      } else {
        return [
          createTextVNode("Trendytrash")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` Non banale</li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/riciclo.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Riciclo`);
      } else {
        return [
          createTextVNode("Riciclo")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` Più difficile ma non troppo.</li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/smaltimento.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Smaltimento`);
      } else {
        return [
          createTextVNode("Smaltimento")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` Interessante</li></ul><h2 id="ois" tabindex="-1"><a class="header-anchor" href="#ois"><span>OIS</span></a></h2><h3 id="_2024" tabindex="-1"><a class="header-anchor" href="#_2024"><span>2024</span></a></h3><ul><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/carry_training.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Round 3, Carry bit`);
      } else {
        return [
          createTextVNode("Round 3, Carry bit")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` richiede teoria</li></ul><h3 id="_2023" tabindex="-1"><a class="header-anchor" href="#_2023"><span>2023</span></a></h3><h3 id="_2022" tabindex="-1"><a class="header-anchor" href="#_2022"><span>2022</span></a></h3><ul><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/renovations.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Round 1, Renovations`);
      } else {
        return [
          createTextVNode("Round 1, Renovations")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` conteggi</li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/reading.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Final Round, Reading`);
      } else {
        return [
          createTextVNode("Final Round, Reading")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` greedy non banale</li></ul><h3 id="_2021-1" tabindex="-1"><a class="header-anchor" href="#_2021-1"><span>2021</span></a></h3><ul><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/gather.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Round 3, Gather`);
      } else {
        return [
          createTextVNode("Round 3, Gather")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` semplice</li></ul><h3 id="_2020" tabindex="-1"><a class="header-anchor" href="#_2020"><span>2020</span></a></h3><ul><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/money.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Round 1, Money`);
      } else {
        return [
          createTextVNode("Round 1, Money")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` carino</li></ul><h2 id="nazionali" tabindex="-1"><a class="header-anchor" href="#nazionali"><span>Nazionali</span></a></h2><h2 id="internazionali" tabindex="-1"><a class="header-anchor" href="#internazionali"><span>Internazionali</span></a></h2><h3 id="weoi" tabindex="-1"><a class="header-anchor" href="#weoi"><span>WEOI</span></a></h3><ul><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/trees_weoi.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Trees, 2024`);
      } else {
        return [
          createTextVNode("Trees, 2024")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><h2 id="codeforces-o-altro" tabindex="-1"><a class="header-anchor" href="#codeforces-o-altro"><span>Codeforces o altro</span></a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/problemi_gara.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const problemi_gara_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "problemi_gara.html.vue"]]);
const data = JSON.parse('{"path":"/problemi_gara.html","title":"Problemi per fonte","lang":"en-US","frontmatter":{"title":"Problemi per fonte"},"headers":[{"level":2,"title":"Terry","slug":"terry","link":"#terry","children":[]},{"level":2,"title":"OII","slug":"oii","link":"#oii","children":[{"level":3,"title":"2021","slug":"_2021","link":"#_2021","children":[]}]},{"level":2,"title":"OIS","slug":"ois","link":"#ois","children":[{"level":3,"title":"2024","slug":"_2024","link":"#_2024","children":[]},{"level":3,"title":"2023","slug":"_2023","link":"#_2023","children":[]},{"level":3,"title":"2022","slug":"_2022","link":"#_2022","children":[]},{"level":3,"title":"2021","slug":"_2021-1","link":"#_2021-1","children":[]},{"level":3,"title":"2020","slug":"_2020","link":"#_2020","children":[]}]},{"level":2,"title":"Nazionali","slug":"nazionali","link":"#nazionali","children":[]},{"level":2,"title":"Internazionali","slug":"internazionali","link":"#internazionali","children":[{"level":3,"title":"WEOI","slug":"weoi","link":"#weoi","children":[]}]},{"level":2,"title":"Codeforces o altro","slug":"codeforces-o-altro","link":"#codeforces-o-altro","children":[]}],"git":{"updatedTime":1729371360000,"contributors":[{"name":"nik-din","username":"nik-din","email":"nik.dindo@gmail.com","commits":8,"url":"https://github.com/nik-din"}]},"filePathRelative":"problemi_gara.md"}');
export {
  problemi_gara_html as comp,
  data
};
