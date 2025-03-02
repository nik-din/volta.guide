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
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="materiale" tabindex="-1"><a class="header-anchor" href="#materiale"><span>Materiale</span></a></h1><p>Qui caricheremo via via materiale.</p><h2 id="greedy2-e-sliding-window" tabindex="-1"><a class="header-anchor" href="#greedy2-e-sliding-window"><span>Greedy2 e sliding window</span></a></h2><p>Sliding window:</p><ul><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/dreamteam.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Dante`);
      } else {
        return [
          createTextVNode("Dante")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/gather.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Gathering`);
      } else {
        return [
          createTextVNode("Gathering")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><p>Greedy:</p><ul><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/dreamteam.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Dreamteam`);
      } else {
        return [
          createTextVNode("Dreamteam")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/money.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Money`);
      } else {
        return [
          createTextVNode("Money")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/reading.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Reading`);
      } else {
        return [
          createTextVNode("Reading")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><h2 id="grafi" tabindex="-1"><a class="header-anchor" href="#grafi"><span>Grafi</span></a></h2><p>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/materiale/grafi.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Appunti lezione`);
      } else {
        return [
          createTextVNode("Appunti lezione")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><p>Problemi svolti a lezione:</p><ul><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/ois_ponti.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ois_ponti`);
      } else {
        return [
          createTextVNode("ois_ponti")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/oii_maree.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`oii_maree`);
      } else {
        return [
          createTextVNode("oii_maree")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><p>Altri problemi (in ordine di difficoltà):</p><ul><li><a href="https://training.olinfo.it/task/sunny" target="_blank" rel="noopener noreferrer">sunny</a></li><li><a href="https://training.olinfo.it/task/ois_monete" target="_blank" rel="noopener noreferrer">ois_monete</a></li><li><a href="https://training.olinfo.it/task/ois_patrol2" target="_blank" rel="noopener noreferrer">ois_police2</a></li><li><a href="https://training.olinfo.it/task/ois_rainstorm" target="_blank" rel="noopener noreferrer">ois_rainstorm</a></li></ul><h2 id="dp" tabindex="-1"><a class="header-anchor" href="#dp"><span>dp</span></a></h2><p>problemi fatti a lezione:</p><ul><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/poldo.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`poldo`);
      } else {
        return [
          createTextVNode("poldo")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/police3.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`police3`);
      } else {
        return [
          createTextVNode("police3")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/coin_combinations_II.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`coin combinations II`);
      } else {
        return [
          createTextVNode("coin combinations II")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><p>problemi:</p><ul><li><a href="https://training.olinfo.it/task/ois_brackets2" target="_blank" rel="noopener noreferrer">brackets2</a></li></ul><p>L&#39;intero <a href="https://atcoder.jp/contests/dp" target="_blank" rel="noopener noreferrer">atcoder dp contest</a>. L&#39;ordine di difficoltà è A B C D H F E I G K L M N P S O Q R J U Z Y X T V W (all&#39;incirca, la fonte è un commento su cf che penso li abbia ordinati per numero di persone che li hanno risolti in gara). Le soluzioni si possono trovare <a href="https://nwatx.me/post/atcoderdp" target="_blank" rel="noopener noreferrer">qua</a>.</p><h2 id="greedy-e-binary-search" tabindex="-1"><a class="header-anchor" href="#greedy-e-binary-search"><span>Greedy e binary search</span></a></h2><p>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/materiale/binary_search.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`codice binary search`);
      } else {
        return [
          createTextVNode("codice binary search")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/materiale/fastexp.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`codice fastexp`);
      } else {
        return [
          createTextVNode("codice fastexp")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br><strong>Introduttivi</strong></p><ul><li><a href="https://training.olinfo.it/task/ois_annoluce" target="_blank" rel="noopener noreferrer">Annoluce</a></li><li><a href="https://training.olinfo.it/task/ois_rectangle" target="_blank" rel="noopener noreferrer">Rectangle</a></li><li><a href="https://training.olinfo.it/task/ois_truffa" target="_blank" rel="noopener noreferrer">Truffa</a></li><li><a href="https://training.olinfo.it/task/ois_avg2" target="_blank" rel="noopener noreferrer">avg2</a></li><li><a href="https://training.olinfo.it/task/oii_aeroporto" target="_blank" rel="noopener noreferrer">Aeroporto</a></li><li><a href="https://training.olinfo.it/task/ois_avg" target="_blank" rel="noopener noreferrer">avg</a></li></ul><p><strong>Interessanti</strong></p><ul><li><a href="https://training.olinfo.it/task/oii_trendytrash" target="_blank" rel="noopener noreferrer">Trendytrash</a>, `);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/trendytrash.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`hint e sol`);
      } else {
        return [
          createTextVNode("hint e sol")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li><a href="https://training.olinfo.it/task/abc_altavelocita" target="_blank" rel="noopener noreferrer">Altavelocità</a>, `);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/altavelocit%C3%A0.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`hint e sol`);
      } else {
        return [
          createTextVNode("hint e sol")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><p><strong>Difficili</strong><br> Nota: questi problemi sono pensati per l&#39;avanzato</p><ul><li><a href="https://training.olinfo.it/task/ois_wine" target="_blank" rel="noopener noreferrer">Wine</a></li><li><a href="https://training.olinfo.it/task/oii_corteo" target="_blank" rel="noopener noreferrer">Corteo</a></li><li><a href="https://training.olinfo.it/task/oii_lungomare" target="_blank" rel="noopener noreferrer">Lungomare</a><br> Approfondimenti in più:</li><li><a href="https://cp-algorithms.com/num_methods/ternary_search.html" target="_blank" rel="noopener noreferrer">ternary search</a></li><li><a href="https://codeforces.com/blog/entry/45578" target="_blank" rel="noopener noreferrer">binary search parallele</a></li></ul><h2 id="base" tabindex="-1"><a class="header-anchor" href="#base"><span>Base</span></a></h2><h3 id="c-base" tabindex="-1"><a class="header-anchor" href="#c-base"><span>c++ base</span></a></h3><p>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/materiale/cpp_cheatsheet.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`sintassi base c++`);
      } else {
        return [
          createTextVNode("sintassi base c++")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><h3 id="problemi" tabindex="-1"><a class="header-anchor" href="#problemi"><span>Problemi</span></a></h3><h4 id="lezione-3" tabindex="-1"><a class="header-anchor" href="#lezione-3"><span>Lezione 3</span></a></h4><ul><li><a href="https://training.olinfo.it/task/ois_farmula1" target="_blank" rel="noopener noreferrer">Farmula 1</a></li><li><a href="https://training.olinfo.it/task/ois_f1" target="_blank" rel="noopener noreferrer">Formula 1</a></li><li><a href="https://training.olinfo.it/task/ois_goose" target="_blank" rel="noopener noreferrer">Goose game</a></li><li><a href="https://training.olinfo.it/task/ois_cars" target="_blank" rel="noopener noreferrer">Cars</a></li><li><a href="https://training.olinfo.it/task/ois_avg" target="_blank" rel="noopener noreferrer">Avg</a></li><li><a href="https://training.olinfo.it/task/ois_interrogazioni" target="_blank" rel="noopener noreferrer">Interrogazioni</a></li></ul><h4 id="lezione-2" tabindex="-1"><a class="header-anchor" href="#lezione-2"><span>Lezione 2</span></a></h4><ul><li><a href="https://training.olinfo.it/task/pari" target="_blank" rel="noopener noreferrer">Pari</a></li><li><a href="https://training.olinfo.it/task/ois_disks" target="_blank" rel="noopener noreferrer">Disks</a></li><li><a href="https://training.olinfo.it/task/ois_cake" target="_blank" rel="noopener noreferrer">Cake</a></li><li><a href="https://training.olinfo.it/task/ois_sign" target="_blank" rel="noopener noreferrer">Sign</a></li></ul><h2 id="avanzato" tabindex="-1"><a class="header-anchor" href="#avanzato"><span>Avanzato</span></a></h2><h3 id="editorial-gst" tabindex="-1"><a class="header-anchor" href="#editorial-gst"><span>Editorial gst</span></a></h3><p>Ecco l&#39;editorial:</p><ul><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/gather.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`A`);
      } else {
        return [
          createTextVNode("A")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/money.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`B`);
      } else {
        return [
          createTextVNode("B")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/reading.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`C`);
      } else {
        return [
          createTextVNode("C")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/problemi/renovations.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`D`);
      } else {
        return [
          createTextVNode("D")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><p>l&#39;E sarà per la prossima volta 😉</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/materiale.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const materiale_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "materiale.html.vue"]]);
const data = JSON.parse('{"path":"/materiale.html","title":"Materiale","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Greedy2 e sliding window","slug":"greedy2-e-sliding-window","link":"#greedy2-e-sliding-window","children":[]},{"level":2,"title":"Grafi","slug":"grafi","link":"#grafi","children":[]},{"level":2,"title":"dp","slug":"dp","link":"#dp","children":[]},{"level":2,"title":"Greedy e binary search","slug":"greedy-e-binary-search","link":"#greedy-e-binary-search","children":[]},{"level":2,"title":"Base","slug":"base","link":"#base","children":[{"level":3,"title":"c++ base","slug":"c-base","link":"#c-base","children":[]},{"level":3,"title":"Problemi","slug":"problemi","link":"#problemi","children":[]}]},{"level":2,"title":"Avanzato","slug":"avanzato","link":"#avanzato","children":[{"level":3,"title":"Editorial gst","slug":"editorial-gst","link":"#editorial-gst","children":[]}]}],"git":{"updatedTime":1736443395000,"contributors":[{"name":"nik-din","username":"nik-din","email":"nik.dindo@gmail.com","commits":16,"url":"https://github.com/nik-din"},{"name":"Giovanni","username":"Giovanni","email":"112493877+ciao-gio@users.noreply.github.com","commits":3,"url":"https://github.com/Giovanni"}]},"filePathRelative":"materiale.md"}');
export {
  materiale_html as comp,
  data
};
