import { shallowRef, defineComponent, computed, h, toRef, ref, onMounted, defineAsyncComponent, reactive, inject, getCurrentInstance, camelize, capitalize, Transition, provide, watch, onUnmounted, useSSRContext, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, toRefs, withDirectives, Fragment, renderList, vShow, resolveComponent, createTextVNode, nextTick, onBeforeUnmount, renderSlot, createSSRApp, customRef } from "vue";
import { isLinkWithProtocol, resolveLocalePath, isString, dedupeHead, splitPath, normalizeRoutePath, isLinkHttp, removeLeadingSlash, isLinkExternal, removeEndingSlash, ensureEndingSlash, isPlainObject } from "@vuepress/shared";
import { useRouter, useRoute, createRouter, createMemoryHistory, START_LOCATION } from "vue-router";
import { useElementSize, useWindowSize, useWindowScroll, usePreferredDark, useStorage, useEventListener, useToggle } from "@vueuse/core";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderSlotInner, ssrRenderStyle } from "vue/server-renderer";
const redirects$1 = JSON.parse("{}");
const routes$1 = Object.fromEntries([
  ["/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-B0ZKmRzv.js"
  ), meta: { "title": "Home" } }],
  ["/algobadge.html", { loader: () => import(
    /* webpackChunkName: "algobadge.html" */
    "./assets/algobadge.html-BEuBE_4n.js"
  ), meta: { "title": "Algobadge" } }],
  ["/introduzione.html", { loader: () => import(
    /* webpackChunkName: "introduzione.html" */
    "./assets/introduzione.html-D22X2q-I.js"
  ), meta: { "title": "Introduzione" } }],
  ["/link.html", { loader: () => import(
    /* webpackChunkName: "link.html" */
    "./assets/link.html-CaC1XBrt.js"
  ), meta: { "title": "Risorse" } }],
  ["/materiale.html", { loader: () => import(
    /* webpackChunkName: "materiale.html" */
    "./assets/materiale.html-BnUxfnfG.js"
  ), meta: { "title": "Materiale" } }],
  ["/problemi_gara.html", { loader: () => import(
    /* webpackChunkName: "problemi_gara.html" */
    "./assets/problemi_gara.html-C7Is7VcN.js"
  ), meta: { "title": "Problemi per fonte" } }],
  ["/materiale/binary_search.html", { loader: () => import(
    /* webpackChunkName: "materiale_binary_search.html" */
    "./assets/binary_search.html-C6DP5JsH.js"
  ), meta: { "title": "Binary search" } }],
  ["/materiale/cpp_cheatsheet.html", { loader: () => import(
    /* webpackChunkName: "materiale_cpp_cheatsheet.html" */
    "./assets/cpp_cheatsheet.html-BGEa9c8l.js"
  ), meta: { "title": "c++ di base" } }],
  ["/materiale/fastexp.html", { loader: () => import(
    /* webpackChunkName: "materiale_fastexp.html" */
    "./assets/fastexp.html-DIniIUtn.js"
  ), meta: { "title": "Esponenziazione veloce" } }],
  ["/materiale/grafi.html", { loader: () => import(
    /* webpackChunkName: "materiale_grafi.html" */
    "./assets/grafi.html-DFUwQE_1.js"
  ), meta: { "title": "Grafi" } }],
  ["/problemi/altavelocit%C3%A0.html", { loader: () => import(
    /* webpackChunkName: "problemi_altavelocità.html" */
    "./assets/altavelocità.html-DX_XbcOy.js"
  ), meta: { "title": "Altavelocità" } }],
  ["/problemi/carry_training.html", { loader: () => import(
    /* webpackChunkName: "problemi_carry_training.html" */
    "./assets/carry_training.html-BVRIe9y0.js"
  ), meta: { "title": "Carry Bit" } }],
  ["/problemi/coin_combinations_II.html", { loader: () => import(
    /* webpackChunkName: "problemi_coin_combinations_II.html" */
    "./assets/coin_combinations_II.html-C7jMK846.js"
  ), meta: { "title": "Coin combinations II" } }],
  ["/problemi/dante.html", { loader: () => import(
    /* webpackChunkName: "problemi_dante.html" */
    "./assets/dante.html-DJEz-nXr.js"
  ), meta: { "title": "Lasciate ogni speranza" } }],
  ["/problemi/dreamteam.html", { loader: () => import(
    /* webpackChunkName: "problemi_dreamteam.html" */
    "./assets/dreamteam.html-Cz-PU1Pr.js"
  ), meta: { "title": "DreamTeam Selection" } }],
  ["/problemi/gather.html", { loader: () => import(
    /* webpackChunkName: "problemi_gather.html" */
    "./assets/gather.html-DSygeg3h.js"
  ), meta: { "title": "Do not gather!" } }],
  ["/problemi/money.html", { loader: () => import(
    /* webpackChunkName: "problemi_money.html" */
    "./assets/money.html-zSW_0Sor.js"
  ), meta: { "title": "Splitting the bill" } }],
  ["/problemi/oii_maree.html", { loader: () => import(
    /* webpackChunkName: "problemi_oii_maree.html" */
    "./assets/oii_maree.html-2NRHFoLF.js"
  ), meta: { "title": "Maree a Venezia" } }],
  ["/problemi/ois_ponti.html", { loader: () => import(
    /* webpackChunkName: "problemi_ois_ponti.html" */
    "./assets/ois_ponti.html-IYv_YtzG.js"
  ), meta: { "title": "Ponti e isole" } }],
  ["/problemi/poldo.html", { loader: () => import(
    /* webpackChunkName: "problemi_poldo.html" */
    "./assets/poldo.html-BD9iwaXU.js"
  ), meta: { "title": "Poldo" } }],
  ["/problemi/police3.html", { loader: () => import(
    /* webpackChunkName: "problemi_police3.html" */
    "./assets/police3.html-B96E8n2T.js"
  ), meta: { "title": "Police3" } }],
  ["/problemi/reading.html", { loader: () => import(
    /* webpackChunkName: "problemi_reading.html" */
    "./assets/reading.html-DL4VIJTP.js"
  ), meta: { "title": "Reading papers" } }],
  ["/problemi/renovations.html", { loader: () => import(
    /* webpackChunkName: "problemi_renovations.html" */
    "./assets/renovations.html-DpWq9HZD.js"
  ), meta: { "title": "City redevelopment" } }],
  ["/problemi/riciclo.html", { loader: () => import(
    /* webpackChunkName: "problemi_riciclo.html" */
    "./assets/riciclo.html-CIQePowH.js"
  ), meta: { "title": "Riciclo" } }],
  ["/problemi/smaltimento.html", { loader: () => import(
    /* webpackChunkName: "problemi_smaltimento.html" */
    "./assets/smaltimento.html-DlKfMgqv.js"
  ), meta: { "title": "Smaltimento" } }],
  ["/problemi/template.html", { loader: () => import(
    /* webpackChunkName: "problemi_template.html" */
    "./assets/template.html-NmV7dW7i.js"
  ), meta: { "title": "Titolo" } }],
  ["/problemi/trees_weoi.html", { loader: () => import(
    /* webpackChunkName: "problemi_trees_weoi.html" */
    "./assets/trees_weoi.html-C2Z3kkDP.js"
  ), meta: { "title": "Trees" } }],
  ["/problemi/trendytrash.html", { loader: () => import(
    /* webpackChunkName: "problemi_trendytrash.html" */
    "./assets/trendytrash.html-fwtciNKW.js"
  ), meta: { "title": "Trendytrash" } }],
  ["/404.html", { loader: () => import(
    /* webpackChunkName: "404.html" */
    "./assets/404.html-D2BX31vV.js"
  ), meta: { "title": "" } }]
]);
var clientDataSymbol = Symbol(
  ""
);
var useClientData = () => {
  const clientData = inject(clientDataSymbol);
  if (!clientData) {
    throw new Error("useClientData() is called without provider.");
  }
  return clientData;
};
var usePageComponent = () => useClientData().pageComponent;
var usePageData = () => useClientData().pageData;
var usePageFrontmatter = () => useClientData().pageFrontmatter;
var usePageHead = () => useClientData().pageHead;
var usePageLang = () => useClientData().pageLang;
var usePageLayout = () => useClientData().pageLayout;
var useRouteLocale = () => useClientData().routeLocale;
var useRoutes = () => useClientData().routes;
var useSiteData = () => useClientData().siteData;
var useSiteLocaleData = () => useClientData().siteLocaleData;
var redirects = shallowRef(redirects$1);
var routes = shallowRef(routes$1);
var resolveRoutePath = (pathname, currentPath) => {
  const normalizedRoutePath = normalizeRoutePath(pathname, currentPath);
  if (routes.value[normalizedRoutePath]) return normalizedRoutePath;
  const encodedRoutePath = encodeURI(normalizedRoutePath);
  if (routes.value[encodedRoutePath]) {
    return encodedRoutePath;
  }
  const redirectedRoutePath = redirects.value[normalizedRoutePath] || redirects.value[encodedRoutePath];
  if (redirectedRoutePath) {
    return redirectedRoutePath;
  }
  return normalizedRoutePath;
};
var resolveRoute = (path, currentPath) => {
  const { pathname, hashAndQueries } = splitPath(path);
  const routePath = resolveRoutePath(pathname, currentPath);
  const routeFullPath = routePath + hashAndQueries;
  if (!routes.value[routePath]) {
    return {
      ...routes.value["/404.html"],
      path: routeFullPath,
      notFound: true
    };
  }
  return {
    ...routes.value[routePath],
    path: routeFullPath,
    notFound: false
  };
};
var resolveRouteFullPath = (path, currentPath) => {
  const { pathname, hashAndQueries } = splitPath(path);
  return resolveRoutePath(pathname, currentPath) + hashAndQueries;
};
var guardEvent = (event) => {
  if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;
  if (event.defaultPrevented) return;
  if (event.button !== void 0 && event.button !== 0) return;
  if (event.currentTarget) {
    const target = event.currentTarget.getAttribute("target");
    if (target == null ? void 0 : target.match(/\b_blank\b/i)) return;
  }
  event.preventDefault();
  return true;
};
var RouteLink = defineComponent({
  name: "RouteLink",
  props: {
    /**
     * The route path to link to
     */
    to: {
      type: String,
      required: true
    },
    /**
     * Whether the link is active to have an active class
     *
     * Notice that the active status is not automatically determined according to the current route.
     */
    active: Boolean,
    /**
     * The class to add when the link is active
     */
    activeClass: {
      type: String,
      default: "route-link-active"
    }
  },
  slots: Object,
  setup(props, { slots }) {
    const router = useRouter();
    const route = useRoute();
    const path = computed(
      () => props.to.startsWith("#") || props.to.startsWith("?") ? props.to : `${"/"}${resolveRouteFullPath(props.to, route.path).substring(1)}`
    );
    return () => {
      var _a;
      return h(
        "a",
        {
          class: ["route-link", { [props.activeClass]: props.active }],
          href: path.value,
          onClick: (event = {}) => {
            if (guardEvent(event)) {
              router.push(props.to).catch();
            }
          }
        },
        (_a = slots.default) == null ? void 0 : _a.call(slots)
      );
    };
  }
});
var AutoLink = defineComponent({
  name: "AutoLink",
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  slots: Object,
  setup(props, { slots }) {
    const config2 = toRef(props, "config");
    const route = useRoute();
    const siteData2 = useSiteData();
    const withProtocol = computed(() => isLinkWithProtocol(config2.value.link));
    const linkTarget = computed(
      () => config2.value.target || (withProtocol.value ? "_blank" : void 0)
    );
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const isInternal = computed(
      () => !withProtocol.value && !isBlankTarget.value
    );
    const linkRel = computed(
      () => config2.value.rel || (isBlankTarget.value ? "noopener noreferrer" : null)
    );
    const linkAriaLabel = computed(
      () => config2.value.ariaLabel ?? config2.value.text
    );
    const shouldBeActiveInSubpath = computed(() => {
      if (config2.value.exact) return false;
      const localePaths = Object.keys(siteData2.value.locales);
      return localePaths.length ? (
        // Check all the locales
        localePaths.every((key) => key !== config2.value.link)
      ) : (
        // Check root
        config2.value.link !== "/"
      );
    });
    const isActive = computed(() => {
      if (!isInternal.value) return false;
      if (config2.value.activeMatch) {
        return (config2.value.activeMatch instanceof RegExp ? config2.value.activeMatch : new RegExp(config2.value.activeMatch, "u")).test(route.path);
      }
      if (shouldBeActiveInSubpath.value) {
        return route.path.startsWith(config2.value.link);
      }
      return route.path === config2.value.link;
    });
    return () => {
      const { before, after, default: defaultSlot } = slots;
      const content = (defaultSlot == null ? void 0 : defaultSlot(config2.value)) || [
        before == null ? void 0 : before(config2.value),
        config2.value.text,
        after == null ? void 0 : after(config2.value)
      ];
      return isInternal.value ? h(
        RouteLink,
        {
          "class": "auto-link",
          "to": config2.value.link,
          "active": isActive.value,
          "aria-label": linkAriaLabel.value
        },
        () => content
      ) : h(
        "a",
        {
          "class": "auto-link external-link",
          "href": config2.value.link,
          "aria-label": linkAriaLabel.value,
          "rel": linkRel.value,
          "target": linkTarget.value
        },
        content
      );
    };
  }
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
    };
  }
});
var Content = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Content",
  props: {
    path: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const pageComponent = usePageComponent();
    const ContentComponent = computed(() => {
      if (!props.path) return pageComponent.value;
      const route = resolveRoute(props.path);
      return defineAsyncComponent(() => route.loader().then(({ comp }) => comp));
    });
    return () => h(ContentComponent.value);
  }
});
var LAYOUT_NAME_DEFAULT = "Layout";
var LANG_DEFAULT = "en-US";
var resolvers = reactive({
  /**
   * Resolve layouts component map
   */
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  /**
   * Merge the head config in frontmatter and site locale
   *
   * Frontmatter should take priority over site locale
   */
  resolvePageHead: (pageHeadTitle, pageFrontmatter, siteLocaleDate) => {
    const description = isString(pageFrontmatter.description) ? pageFrontmatter.description : siteLocaleDate.description;
    const head = [
      ...Array.isArray(pageFrontmatter.head) ? pageFrontmatter.head : [],
      ...siteLocaleDate.head,
      ["title", {}, pageHeadTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  /**
   * Resolve the content of page head title
   *
   * It would be used as the content of the `<title>` tag
   */
  resolvePageHeadTitle: (pageData, siteLocaleDate) => [pageData.title, siteLocaleDate.title].filter((item) => !!item).join(" | "),
  /**
   * Resolve page language from page data
   *
   * It would be used as the `lang` attribute of `<html>` tag
   */
  resolvePageLang: (pageData, siteLocaleData) => pageData.lang || siteLocaleData.lang || LANG_DEFAULT,
  /**
   * Resolve layout component of current page
   */
  resolvePageLayout: (pageData, layouts) => {
    const layoutName = isString(pageData.frontmatter.layout) ? pageData.frontmatter.layout : LAYOUT_NAME_DEFAULT;
    if (!layouts[layoutName]) {
      throw new Error(`[vuepress] Cannot resolve layout: ${layoutName}`);
    }
    return layouts[layoutName];
  },
  /**
   * Resolve locale path according to route path and locales config
   */
  resolveRouteLocale: (locales, routePath) => resolveLocalePath(locales, decodeURI(routePath)),
  /**
   * Resolve site data for specific locale
   *
   * It would merge the locales fields to the root fields
   */
  resolveSiteLocaleData: ({ base, locales, ...siteData2 }, routeLocale) => {
    var _a;
    return {
      ...siteData2,
      ...locales[routeLocale],
      head: [
        // when merging head, the locales head should be placed before root head
        // to get higher priority
        ...((_a = locales[routeLocale]) == null ? void 0 : _a.head) ?? [],
        ...siteData2.head ?? []
      ]
    };
  }
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url)) return url;
  return `${"/"}${removeLeadingSlash(url)}`;
};
const config$6 = defineClientConfig({
  setup() {
    return;
  }
});
const clientConfig0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$6
}, Symbol.toStringTag, { value: "Module" }));
const useLocaleConfig = (localesConfig) => {
  const routeLocale = useRouteLocale();
  return computed(() => localesConfig[routeLocale.value] ?? {});
};
const useRoutePaths = () => {
  const routes2 = useRoutes();
  return computed(() => Object.keys(routes2.value));
};
const hasGlobalComponent = (name, app) => {
  var _a;
  const globalComponents = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.components;
  if (!globalComponents)
    return false;
  return name in globalComponents || camelize(name) in globalComponents || capitalize(camelize(name)) in globalComponents;
};
const resolveHeaders = (headers, levels = 2) => {
  if (levels === false) {
    return [];
  }
  const [high, low] = typeof levels === "number" ? [levels, levels] : levels === "deep" ? [2, 6] : levels;
  const allowedHeaders = headers.filter((h2) => h2.level >= high && h2.level <= low);
  const res = [];
  outer: for (let i = 0; i < allowedHeaders.length; i++) {
    const cur = allowedHeaders[i];
    if (i === 0) {
      res.push(cur);
    } else {
      for (let j = i - 1; j >= 0; j--) {
        const prev = allowedHeaders[j];
        if (prev.level < cur.level) {
          (prev.children ?? (prev.children = [])).push(cur);
          continue outer;
        }
      }
      res.push(cur);
    }
  }
  return res;
};
const serializeHeader = (h2, ignore = []) => {
  let text;
  if (ignore.length) {
    const clone = h2.cloneNode(true);
    clone.querySelectorAll(ignore.join(",")).forEach((el) => {
      el.remove();
    });
    text = clone.textContent || "";
  } else {
    text = h2.textContent || "";
  }
  return text.trim();
};
const getHeaders = ({ selector = [...new Array(6)].map((_, i) => `[vp-content] h${i + 1}`).join(","), levels = 2, ignore = [] } = {}) => {
  const headers = Array.from(document.querySelectorAll(selector)).filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      element: el,
      title: serializeHeader(el, ignore),
      link: `#${el.id}`,
      slug: el.id,
      level
    };
  });
  return resolveHeaders(headers, levels);
};
const isDef = (val) => typeof val !== "undefined";
const startsWith = (str, prefix) => isString(str) && str.startsWith(prefix);
const { keys } = Object;
const isLinkAbsolute = (test) => startsWith(test, "/");
var define_BACK_TO_TOP_LOCALES_default = { "/": { backToTop: "Back to top" } };
const BackToTop = defineComponent({
  name: "BackToTop",
  setup() {
    const pageFrontmatter = usePageFrontmatter();
    const locale = useLocaleConfig(define_BACK_TO_TOP_LOCALES_default);
    const body = shallowRef();
    const { height: bodyHeight } = useElementSize(body);
    const { height: windowHeight } = useWindowSize();
    const { y } = useWindowScroll();
    const show = computed(() => pageFrontmatter.value.backToTop !== false && y.value > 100);
    const progress = computed(() => y.value / (bodyHeight.value - windowHeight.value) * 100);
    onMounted(() => {
      body.value = document.body;
    });
    return () => h(Transition, { name: "back-to-top" }, () => show.value ? h("button", {
      "type": "button",
      "class": "vp-back-to-top-button",
      "aria-label": locale.value.backToTop,
      "onClick": () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, [
      h("span", {
        "class": "vp-scroll-progress",
        "role": "progressbar",
        "aria-labelledby": "loadinglabel",
        "aria-valuenow": progress.value
      }, h("svg", h("circle", {
        "cx": "26",
        "cy": "26",
        "r": "24",
        "fill": "none",
        "stroke": "currentColor",
        "stroke-width": "4",
        "stroke-dasharray": `${Math.PI * progress.value * 0.48} ${Math.PI * (100 - progress.value) * 0.48}`
      }))),
      h("div", { class: "back-to-top-icon" })
    ]) : null);
  }
});
const config$5 = defineClientConfig({
  rootComponents: [BackToTop]
});
const clientConfig1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$5
}, Symbol.toStringTag, { value: "Module" }));
const config$4 = defineClientConfig({
  setup: () => {
  }
});
const clientConfig2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$4
}, Symbol.toStringTag, { value: "Module" }));
const clientConfig3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const config$3 = defineClientConfig({
  enhance({ app, router }) {
    return;
  }
});
const clientConfig4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$3
}, Symbol.toStringTag, { value: "Module" }));
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const addClass = (element, name) => {
  element.classList.add(name);
};
const removeClass = (element, name) => {
  element.classList.remove(name);
};
const removeElement = (element) => {
  var _a;
  (_a = element == null ? void 0 : element.parentNode) == null ? void 0 : _a.removeChild(element);
};
const clamp = (n, min, max) => {
  if (n < min)
    return min;
  if (n > max)
    return max;
  return n;
};
const toBarPercent = (n) => (-1 + n) * 100;
const queue = /* @__PURE__ */ (() => {
  const pending = [];
  const nextStep = () => {
    const fn = pending.shift();
    if (fn) {
      fn(nextStep);
    }
  };
  return (fn) => {
    pending.push(fn);
    if (pending.length === 1)
      nextStep();
  };
})();
const camelCase = (content) => content.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, (_, letter) => letter.toUpperCase());
const addStyle = /* @__PURE__ */ (() => {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  const getVendorProp = (name) => {
    const { style } = document.body;
    if (name in style)
      return name;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let index = cssPrefixes.length;
    while (index--) {
      const vendorName = `${cssPrefixes[index]}${capName}`;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  };
  const getStyleProp = (name) => {
    const finalizedName = camelCase(name);
    return cssProps[finalizedName] ?? (cssProps[finalizedName] = getVendorProp(finalizedName));
  };
  const applyCss = (element, prop, value) => {
    element.style[getStyleProp(prop)] = value;
  };
  return (element, properties) => {
    for (const prop in properties) {
      const value = properties[prop];
      if (Object.hasOwn(properties, prop) && isDef(value))
        applyCss(element, prop, value);
    }
  };
})();
const SETTINGS = {
  minimum: 0.08,
  easing: "ease",
  speed: 200,
  trickleRate: 0.02,
  trickleSpeed: 800,
  barSelector: '[role="bar"]',
  parent: "body",
  template: '<div class="bar" role="bar"></div>'
};
const nprogress = {
  percent: null,
  isRendered: () => Boolean(document.getElementById("nprogress")),
  set: (progress) => {
    const { speed, easing } = SETTINGS;
    const inProgress = nprogress.isStarted();
    const newPercent = clamp(progress, SETTINGS.minimum, 1);
    nprogress.percent = newPercent === 1 ? null : newPercent;
    const nprogressElement = nprogress.render(!inProgress);
    const barElement = nprogressElement.querySelector(SETTINGS.barSelector);
    nprogressElement.offsetWidth;
    queue((next) => {
      addStyle(barElement, {
        transform: `translate3d(${toBarPercent(newPercent)}%,0,0)`,
        transition: `all ${speed}ms ${easing}`
      });
      if (newPercent === 1) {
        addStyle(nprogressElement, {
          transition: "none",
          opacity: "1"
        });
        nprogressElement.offsetWidth;
        setTimeout(() => {
          addStyle(nprogressElement, {
            transition: `all ${speed}ms linear`,
            opacity: "0"
          });
          setTimeout(() => {
            nprogress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => {
          next();
        }, speed);
      }
    });
    return nprogress;
  },
  isStarted: () => typeof nprogress.percent === "number",
  start: () => {
    if (!nprogress.percent)
      nprogress.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress.percent)
          return;
        nprogress.trickle();
        work();
      }, SETTINGS.trickleSpeed);
    };
    work();
    return nprogress;
  },
  done: (force) => {
    if (!force && !nprogress.percent)
      return nprogress;
    return nprogress.increase(0.3 + 0.5 * Math.random()).set(1);
  },
  increase: (amount) => {
    let { percent } = nprogress;
    if (!percent) {
      return nprogress.start();
    }
    percent = clamp(percent + (typeof amount === "number" ? amount : (1 - percent) * clamp(Math.random() * percent, 0.1, 0.95)), 0, 0.994);
    return nprogress.set(percent);
  },
  trickle: () => nprogress.increase(Math.random() * SETTINGS.trickleRate),
  render: (fromStart) => {
    if (nprogress.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const nprogressElement = document.createElement("div");
    nprogressElement.id = "nprogress";
    nprogressElement.innerHTML = SETTINGS.template;
    const barElement = nprogressElement.querySelector(SETTINGS.barSelector);
    const parentElement = document.querySelector(SETTINGS.parent);
    const percent = fromStart ? "-100" : toBarPercent(nprogress.percent ?? 0);
    addStyle(barElement, {
      transition: "all 0 linear",
      transform: `translate3d(${percent}%,0,0)`
    });
    if (parentElement) {
      if (parentElement !== document.body) {
        addClass(parentElement, "nprogress-custom-parent");
      }
      parentElement.appendChild(nprogressElement);
    }
    return nprogressElement;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(SETTINGS.parent), "nprogress-custom-parent");
    removeElement(document.getElementById("nprogress"));
  }
};
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress.done();
    });
  });
};
const config$2 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const clientConfig5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$2
}, Symbol.toStringTag, { value: "Module" }));
const clientConfig6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const themeData$1 = JSON.parse(`{"logo":"/images/volta.png","navbar":["/","/introduzione","/materiale","/link","/algobadge","/problemi_gara"],"locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebar":"heading","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","lastUpdated":true,"lastUpdatedText":"Last Updated","contributors":true,"contributorsText":"Contributors","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`);
const themeData = ref(themeData$1);
const useThemeData$1 = () => themeData;
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  const { locales, ...baseOptions } = theme;
  return {
    ...baseOptions,
    ...locales == null ? void 0 : locales[routeLocale]
  };
};
const config$1 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData$1();
    const clientData = app._context.provides[clientDataSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, clientData.routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
  }
});
const clientConfig7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$1
}, Symbol.toStringTag, { value: "Module" }));
const useThemeData = () => useThemeData$1();
const useThemeLocaleData = () => useThemeLocaleData$1();
const darkModeSymbol = Symbol("");
const applyDarkmodeToHTML = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const el = window.document.documentElement;
    el.dataset.theme = value ? "dark" : "light";
  };
  onMounted(() => {
    watch(isDarkMode, update, { immediate: true });
  });
  onUnmounted(() => {
    update();
  });
};
const useDarkMode = () => {
  const isDarkMode = inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = usePreferredDark();
  const darkStorage = useStorage("vuepress-color-scheme", themeLocale.value.colorMode);
  const isDarkMode = computed({
    get() {
      if (!themeLocale.value.colorModeSwitch) {
        return themeLocale.value.colorMode === "dark";
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  provide(darkModeSymbol, isDarkMode);
  applyDarkmodeToHTML(isDarkMode);
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => {
      promiseResolve = resolve;
    });
  },
  resolve: () => {
    promiseResolve == null ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const getAutoLink = (config2, currentPath) => {
  const { notFound, meta, path } = resolveRoute(config2, currentPath);
  return notFound ? { text: path, link: path } : {
    text: meta.title || path,
    link: path
  };
};
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveLinkItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if ("children" in item) {
    return item.children.some((child) => isActiveLinkItem(child, route));
  }
  return false;
};
const isLinkInternal = (link) => !isLinkExternal(link) && !isLinkWithProtocol(link);
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || repo.includes("github.com"))
    return "GitHub";
  if (repo.includes("bitbucket.org"))
    return "Bitbucket";
  if (repo.includes("gitlab.com"))
    return "GitLab";
  if (repo.includes("gitee.com"))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const resolvePrefix = (prefix = "", path = "") => isLinkAbsolute(path) || isLinkWithProtocol(path) ? path : `${ensureEndingSlash(prefix)}${path}`;
const headersRef = ref([]);
const setupHeaders = () => {
  const router = useRouter();
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const levels = computed(() => frontmatter.value.sidebarDepth ?? themeLocale.value.sidebarDepth ?? 2);
  router.beforeEach((to, from) => {
    if (to.path !== from.path) {
      headersRef.value = [];
    }
  });
  const updateHeaders = () => {
    if (levels.value <= 0) {
      headersRef.value = [];
      return;
    }
    headersRef.value = getHeaders({
      levels: [2, levels.value + 1],
      ignore: [".vp-badge"]
    });
  };
  watch(levels, updateHeaders);
  onMounted(updateHeaders);
};
const useHeaders = () => headersRef;
const resolveSidebarHeaderItem = (header) => ({
  text: header.title,
  link: header.link,
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  children: resolveSidebarHeaderItems(header.children)
});
const resolveSidebarHeaderItems = (headers) => headers ? headers.map((header) => resolveSidebarHeaderItem(header)) : [];
const resolveSidebarHeadingItem = (page, headers) => [
  {
    text: page.title,
    children: resolveSidebarHeaderItems(headers)
  }
];
const resolveArraySidebarItems = (sidebarConfig, headers, path, prefix = "") => {
  const handleChildItem = (item, pathPrefix) => {
    var _a;
    const childItem = isString(item) ? getAutoLink(resolvePrefix(pathPrefix, item)) : isString(item.link) ? {
      ...item,
      link: isLinkInternal(item.link) ? getAutoLink(resolvePrefix(pathPrefix, item.link)).link : item.link
    } : item;
    if ("children" in childItem) {
      return {
        ...childItem,
        children: childItem.children.map((child) => handleChildItem(child, resolvePrefix(pathPrefix, childItem.prefix)))
      };
    }
    if (childItem.link === path) {
      const currentHeaders = ((_a = headers[0]) == null ? void 0 : _a.level) === 1 ? headers[0].children : headers;
      return {
        ...childItem,
        children: resolveSidebarHeaderItems(currentHeaders)
      };
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item, prefix));
};
const resolveMultiSidebarItems = (sidebarConfig, page, headers, path) => {
  const sidebarRoutes = keys(sidebarConfig).sort((x, y) => y.length - x.length);
  for (const base of sidebarRoutes)
    if (startsWith(decodeURI(path), base)) {
      const matched = sidebarConfig[base];
      return matched ? matched === "heading" ? resolveSidebarHeadingItem(page, headers) : resolveArraySidebarItems(matched, headers, path, base) : [];
    }
  console.warn(`${decodeURI(path)} is missing sidebar config.`);
  return [];
};
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const resolveSidebarItems = (sidebarConfig, page, path, routeLocale, headers) => {
  if (sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "heading") {
    return resolveSidebarHeadingItem(page, headers);
  }
  if (Array.isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, headers, path, routeLocale);
  }
  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, page, headers, path);
  }
  return [];
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const page = usePageData();
  const route = useRoute();
  const routeLocale = useRouteLocale();
  const headers = useHeaders();
  const sidebarConfig = computed(() => frontmatter.value.home ? false : frontmatter.value.sidebar ?? themeLocale.value.sidebar ?? "heading");
  const sidebarItems = computed(() => resolveSidebarItems(sidebarConfig.value, page.value, route.path, routeLocale.value, headers.value));
  provide(sidebarItemsSymbol, sidebarItems);
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  props: {
    type: { default: "tip" },
    text: { default: "" },
    vertical: { default: void 0 }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({
    class: ["vp-badge", $props.type],
    style: {
      verticalAlign: $props.vertical
    }
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`${ssrInterpolate($props.text)}`);
  }, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const Badge = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$n], ["__file", "Badge.vue"]]);
const CodeGroup = defineComponent({
  name: "CodeGroup",
  slots: Object,
  setup(_, { slots }) {
    const tabRefs = ref([]);
    const isDark = useDarkMode();
    const groupRef = ref();
    onMounted(() => {
      if (!groupRef.value)
        return;
      const codeBlock = groupRef.value.querySelector('div[class*="language-"]');
      if (codeBlock && codeBlock.dataset.highlighter === "shiki") {
        const lightColor = codeBlock.style.getPropertyValue("--shiki-light");
        const darkColor = codeBlock.style.getPropertyValue("--shiki-dark");
        const lightBg = codeBlock.style.getPropertyValue("--shiki-light-bg");
        const darkBg = codeBlock.style.getPropertyValue("--shiki-dark-bg");
        watch(isDark, (val) => {
          groupRef.value.style.setProperty("--vp-c-code-tab-bg", val ? darkBg : lightBg);
          groupRef.value.style.setProperty("--vp-c-code-tab-title", val ? darkColor : lightColor);
        }, { immediate: true });
      }
    });
    const activeIndex = ref(-1);
    const codeGroupStorage = useStorage("vuepress-code-group", {});
    const codeGroupKey = computed(() => tabRefs.value.map((tab) => tab.innerText).join(","));
    onMounted(() => {
      watch(() => codeGroupStorage.value[codeGroupKey.value], (val = -1) => {
        if (activeIndex.value !== val) {
          activeIndex.value = val;
        }
      }, { immediate: true });
      watch(activeIndex, (val) => {
        if (codeGroupStorage.value[codeGroupKey.value] !== val) {
          codeGroupStorage.value[codeGroupKey.value] = val;
        }
      });
    });
    const activateNext = (i = activeIndex.value) => {
      if (i < tabRefs.value.length - 1) {
        activeIndex.value = i + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i = activeIndex.value) => {
      if (i > 0) {
        activeIndex.value = i - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i);
      }
    };
    return () => {
      var _a;
      const items = (((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? []).filter((vNode) => vNode.type.name === "CodeGroupItem").map((vNode) => {
        if (vNode.props === null) {
          vNode.props = {};
        }
        return vNode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i) => {
          vnode.props.active = i === activeIndex.value;
        });
      }
      return h("div", { class: "code-group", ref: groupRef }, [
        h("div", { class: "code-group-nav", role: "tablist" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return h("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i] = element;
              }
            },
            class: {
              "code-group-nav-tab": true,
              "active": isActive
            },
            role: "tab",
            ariaSelected: isActive,
            onClick: () => {
              activeIndex.value = i;
            },
            onKeydown: (e) => {
              keyboardHandler(e, i);
            }
          }, vnode.props.title);
        })),
        items
      ]);
    };
  }
});
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  ...{
    name: "CodeGroupItem"
  },
  __name: "CodeGroupItem",
  props: {
    title: {},
    active: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["code-group-item", { active: $props.active }],
    role: "tabpanel"
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const CodeGroupItem = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$m], ["__file", "CodeGroupItem.vue"]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  setup(__props, { expose: __expose }) {
    __expose();
    const frontmatter = usePageFrontmatter();
    const features = computed(() => frontmatter.value.features ?? []);
    const __returned__ = { frontmatter, features };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.features.length) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-features" }, _attrs))}><!--[-->`);
    ssrRenderList($setup.features, (feature) => {
      _push(`<div class="vp-feature"><h2>${ssrInterpolate(feature.title)}</h2><p>${ssrInterpolate(feature.details)}</p></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/VPHomeFeatures.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const VPHomeFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$l], ["__file", "VPHomeFeatures.vue"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFooter",
  setup(__props, { expose: __expose }) {
    __expose();
    const frontmatter = usePageFrontmatter();
    const footer = computed(() => frontmatter.value.footer);
    const footerHtml = computed(() => frontmatter.value.footerHtml);
    const __returned__ = { frontmatter, footer, footerHtml };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.footer) {
    _push(`<!--[-->`);
    if ($setup.footerHtml) {
      _push(`<div class="vp-footer" vp-footer>${$setup.footer ?? ""}</div>`);
    } else {
      _push(`<div class="vp-footer" vp-footer>${ssrInterpolate($setup.footer)}</div>`);
    }
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/VPHomeFooter.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const VPHomeFooter = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$k], ["__file", "VPHomeFooter.vue"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "VPHomeHero",
  setup(__props, { expose: __expose }) {
    __expose();
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isDarkMode = useDarkMode();
    const heroText = computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const tagline = computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const heroImage = computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroAlt = computed(
      () => frontmatter.value.heroAlt || heroText.value || "hero"
    );
    const heroHeight = computed(() => frontmatter.value.heroHeight ?? 280);
    const actions = computed(() => {
      if (!Array.isArray(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    const HomeHeroImage = () => {
      if (!heroImage.value) return null;
      const img = h("img", {
        class: "vp-hero-image",
        src: withBase(heroImage.value),
        alt: heroAlt.value,
        height: heroHeight.value
      });
      if (frontmatter.value.heroImageDark === void 0) {
        return img;
      }
      return h(ClientOnly, () => img);
    };
    const __returned__ = { frontmatter, siteLocale, isDarkMode, heroText, tagline, heroImage, heroAlt, heroHeight, actions, HomeHeroImage, get AutoLink() {
      return AutoLink;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "vp-hero" }, _attrs))}>`);
  _push(ssrRenderComponent($setup["HomeHeroImage"], null, null, _parent));
  if ($setup.heroText) {
    _push(`<h1 id="main-title">${ssrInterpolate($setup.heroText)}</h1>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.tagline) {
    _push(`<p class="vp-hero-description">${ssrInterpolate($setup.tagline)}</p>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.actions.length) {
    _push(`<p class="vp-hero-actions"><!--[-->`);
    ssrRenderList($setup.actions, (action) => {
      _push(ssrRenderComponent($setup["AutoLink"], {
        key: action.text,
        class: ["vp-hero-action-button", [action.type]],
        config: action
      }, null, _parent));
    });
    _push(`<!--]--></p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</header>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/VPHomeHero.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const VPHomeHero = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j], ["__file", "VPHomeHero.vue"]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { VPHomeFeatures, VPHomeFooter, VPHomeHero, get Content() {
      return Content;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "vp-home" }, _attrs))}>`);
  _push(ssrRenderComponent($setup["VPHomeHero"], null, null, _parent));
  _push(ssrRenderComponent($setup["VPHomeFeatures"], null, null, _parent));
  _push(`<div class="theme-default-content" vp-content>`);
  _push(ssrRenderComponent($setup["Content"], null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent($setup["VPHomeFooter"], null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/VPHome.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i], ["__file", "VPHome.vue"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "VPNavbarBrand",
  setup(__props, { expose: __expose }) {
    __expose();
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = computed(
      () => themeLocale.value.home || routeLocale.value
    );
    const navbarBrandTitle = computed(() => siteLocale.value.title);
    const navbarBrandLogo = computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const navbarBrandLogoAlt = computed(
      () => themeLocale.value.logoAlt ?? navbarBrandTitle.value
    );
    const navBarLogoAltMatchesTitle = computed(
      () => navbarBrandTitle.value.toLocaleUpperCase().trim() === navbarBrandLogoAlt.value.toLocaleUpperCase().trim()
    );
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value) return null;
      const img = h("img", {
        class: "vp-site-logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandLogoAlt.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return h(ClientOnly, () => img);
    };
    const __returned__ = { routeLocale, siteLocale, themeLocale, isDarkMode, navbarBrandLink, navbarBrandTitle, navbarBrandLogo, navbarBrandLogoAlt, navBarLogoAltMatchesTitle, NavbarBrandLogo, get RouteLink() {
      return RouteLink;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["RouteLink"], mergeProps({ to: $setup.navbarBrandLink }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent($setup["NavbarBrandLogo"], null, null, _parent2, _scopeId));
        if ($setup.navbarBrandTitle) {
          _push2(`<span class="${ssrRenderClass([{ "vp-hide-mobile": $setup.navbarBrandLogo }, "vp-site-name"])}"${ssrRenderAttr("aria-hidden", $setup.navBarLogoAltMatchesTitle)}${_scopeId}>${ssrInterpolate($setup.navbarBrandTitle)}</span>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode($setup["NavbarBrandLogo"]),
          $setup.navbarBrandTitle ? (openBlock(), createBlock("span", {
            key: 0,
            class: ["vp-site-name", { "vp-hide-mobile": $setup.navbarBrandLogo }],
            "aria-hidden": $setup.navBarLogoAltMatchesTitle
          }, toDisplayString($setup.navbarBrandTitle), 11, ["aria-hidden"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/VPNavbarBrand.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const VPNavbarBrand = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h], ["__file", "VPNavbarBrand.vue"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "VPDropdownTransition",
  setup(__props, { expose: __expose }) {
    __expose();
    const setHeight = (item) => {
      item.style.height = `${item.scrollHeight}px`;
    };
    const unsetHeight = (item) => {
      item.style.height = "";
    };
    const __returned__ = { setHeight, unsetHeight };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/VPDropdownTransition.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const VPDropdownTransition = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g], ["__file", "VPDropdownTransition.vue"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "VPNavbarDropdown",
  props: {
    item: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { item } = toRefs(props);
    const route = useRoute();
    const open = ref(false);
    const dropdownAriaLabel = computed(
      () => item.value.ariaLabel || item.value.text
    );
    const isLastItemOfArray = (arrayItem, array) => array[array.length - 1] === arrayItem;
    const handleDropdown = (e) => {
      const isTriggerByTab = e.detail === 0;
      open.value = isTriggerByTab ? !open.value : false;
    };
    watch(
      () => route.path,
      () => {
        open.value = false;
      }
    );
    const __returned__ = { props, item, route, open, dropdownAriaLabel, isLastItemOfArray, handleDropdown, VPDropdownTransition, get AutoLink() {
      return AutoLink;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["vp-navbar-dropdown-wrapper", { open: $setup.open }]
  }, _attrs))}><button class="vp-navbar-dropdown-title" type="button"${ssrRenderAttr("aria-label", $setup.dropdownAriaLabel)}><span class="title">${ssrInterpolate($setup.item.text)}</span><span class="arrow down"></span></button><button class="vp-navbar-dropdown-title-mobile" type="button"${ssrRenderAttr("aria-label", $setup.dropdownAriaLabel)}><span class="title">${ssrInterpolate($setup.item.text)}</span><span class="${ssrRenderClass([$setup.open ? "down" : "right", "arrow"])}"></span></button>`);
  _push(ssrRenderComponent($setup["VPDropdownTransition"], null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul style="${ssrRenderStyle($setup.open ? null : { display: "none" })}" class="vp-navbar-dropdown"${_scopeId}><!--[-->`);
        ssrRenderList($setup.item.children, (child) => {
          _push2(`<li class="vp-navbar-dropdown-item"${_scopeId}>`);
          if ("children" in child) {
            _push2(`<!--[--><h4 class="vp-navbar-dropdown-subtitle"${_scopeId}>`);
            if (child.link) {
              _push2(ssrRenderComponent($setup["AutoLink"], {
                config: child,
                onFocusout: ($event) => $setup.isLastItemOfArray(child, $setup.item.children) && child.children.length === 0 && ($setup.open = false)
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<span${_scopeId}>${ssrInterpolate(child.text)}</span>`);
            }
            _push2(`</h4><ul class="vp-navbar-dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
            ssrRenderList(child.children, (grandchild) => {
              _push2(`<li class="vp-navbar-dropdown-subitem"${_scopeId}>`);
              _push2(ssrRenderComponent($setup["AutoLink"], {
                config: grandchild,
                onFocusout: ($event) => $setup.isLastItemOfArray(grandchild, child.children) && $setup.isLastItemOfArray(child, $setup.item.children) && ($setup.open = false)
              }, null, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul><!--]-->`);
          } else {
            _push2(ssrRenderComponent($setup["AutoLink"], {
              config: child,
              onFocusout: ($event) => $setup.isLastItemOfArray(child, $setup.item.children) && ($setup.open = false)
            }, null, _parent2, _scopeId));
          }
          _push2(`</li>`);
        });
        _push2(`<!--]--></ul>`);
      } else {
        return [
          withDirectives(createVNode("ul", { class: "vp-navbar-dropdown" }, [
            (openBlock(true), createBlock(Fragment, null, renderList($setup.item.children, (child) => {
              return openBlock(), createBlock("li", {
                key: child.text,
                class: "vp-navbar-dropdown-item"
              }, [
                "children" in child ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode("h4", { class: "vp-navbar-dropdown-subtitle" }, [
                    child.link ? (openBlock(), createBlock($setup["AutoLink"], {
                      key: 0,
                      config: child,
                      onFocusout: ($event) => $setup.isLastItemOfArray(child, $setup.item.children) && child.children.length === 0 && ($setup.open = false)
                    }, null, 8, ["config", "onFocusout"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(child.text), 1))
                  ]),
                  createVNode("ul", { class: "vp-navbar-dropdown-subitem-wrapper" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(child.children, (grandchild) => {
                      return openBlock(), createBlock("li", {
                        key: grandchild.link,
                        class: "vp-navbar-dropdown-subitem"
                      }, [
                        createVNode($setup["AutoLink"], {
                          config: grandchild,
                          onFocusout: ($event) => $setup.isLastItemOfArray(grandchild, child.children) && $setup.isLastItemOfArray(child, $setup.item.children) && ($setup.open = false)
                        }, null, 8, ["config", "onFocusout"])
                      ]);
                    }), 128))
                  ])
                ], 64)) : (openBlock(), createBlock($setup["AutoLink"], {
                  key: 1,
                  config: child,
                  onFocusout: ($event) => $setup.isLastItemOfArray(child, $setup.item.children) && ($setup.open = false)
                }, null, 8, ["config", "onFocusout"]))
              ]);
            }), 128))
          ], 512), [
            [vShow, $setup.open]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/VPNavbarDropdown.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const VPNavbarDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f], ["__file", "VPNavbarDropdown.vue"]]);
const resolveNavbarItem = (item, prefix = "") => {
  if (isString(item)) {
    return getAutoLink(resolvePrefix(prefix, item));
  }
  if ("children" in item) {
    return {
      ...item,
      children: item.children.map((child) => resolveNavbarItem(child, resolvePrefix(prefix, item.prefix)))
    };
  }
  return {
    ...item,
    link: isLinkInternal(item.link) ? getAutoLink(resolvePrefix(prefix, item.link)).link : item.link
  };
};
const useNavbarConfig = () => {
  const themeLocale = useThemeLocaleData();
  return computed(() => (
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    (themeLocale.value.navbar || []).map((item) => resolveNavbarItem(item))
  ));
};
const useNavbarRepo = () => {
  const themeLocale = useThemeLocaleData();
  const repo = computed(() => themeLocale.value.repo);
  const repoType = computed(() => repo.value ? resolveRepoType(repo.value) : null);
  const repoLink = computed(() => {
    if (repo.value && !isLinkHttp(repo.value)) {
      return `https://github.com/${repo.value}`;
    }
    return repo.value;
  });
  const repoLabel = computed(() => {
    if (!repoLink.value)
      return null;
    if (themeLocale.value.repoLabel)
      return themeLocale.value.repoLabel;
    if (repoType.value === null)
      return "Source";
    return repoType.value;
  });
  return computed(() => {
    if (!repoLink.value || !repoLabel.value) {
      return [];
    }
    return [
      {
        text: repoLabel.value,
        link: repoLink.value
      }
    ];
  });
};
const useNavbarSelectLanguage = () => {
  const route = useRoute();
  const routePaths = useRoutePaths();
  const routeLocale = useRouteLocale();
  const site = useSiteData();
  const siteLocale = useSiteLocaleData();
  const theme = useThemeData();
  const themeLocale = useThemeLocaleData();
  return computed(() => {
    const localePaths = Object.keys(site.value.locales);
    if (localePaths.length < 2) {
      return [];
    }
    const currentPath = route.path;
    const currentFullPath = route.fullPath;
    const languageDropdown = {
      text: `${themeLocale.value.selectLanguageText}`,
      ariaLabel: `${themeLocale.value.selectLanguageAriaLabel ?? themeLocale.value.selectLanguageText}`,
      children: localePaths.map((targetLocalePath) => {
        var _a, _b;
        const targetSiteLocale = ((_a = site.value.locales) == null ? void 0 : _a[targetLocalePath]) ?? {};
        const targetThemeLocale = ((_b = theme.value.locales) == null ? void 0 : _b[targetLocalePath]) ?? {};
        const targetLang = `${targetSiteLocale.lang}`;
        const text = targetThemeLocale.selectLanguageName ?? targetLang;
        if (targetLang === siteLocale.value.lang) {
          return {
            text,
            activeMatch: ".",
            link: route.fullPath
          };
        }
        const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
        return {
          text,
          // try to keep current hash and params across languages
          link: routePaths.value.some((item) => item === targetLocalePage) ? currentFullPath.replace(currentPath, targetLocalePage) : targetThemeLocale.home ?? targetLocalePath
        };
      })
    };
    return [languageDropdown];
  });
};
const mobile = "719px";
const cssVariables = {
  mobile
};
var DeviceType;
(function(DeviceType2) {
  DeviceType2["Mobile"] = "mobile";
})(DeviceType || (DeviceType = {}));
const DeviceTypeMap = {
  [DeviceType.Mobile]: Number.parseInt(cssVariables.mobile.replace("px", ""), 10)
};
const useUpdateDeviceStatus = (deviceType, callback) => {
  const width = DeviceTypeMap[deviceType];
  if (!Number.isInteger(width)) {
    return;
  }
  useEventListener("orientationchange", () => {
    callback(width);
  }, false);
  useEventListener("resize", () => {
    callback(width);
  }, false);
  onMounted(() => {
    callback(width);
  });
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "VPNavbarItems",
  setup(__props, { expose: __expose }) {
    __expose();
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const isMobile = ref(false);
    const navbarLabel = computed(() => {
      const themeLocale = useThemeLocaleData();
      return themeLocale.value.navbarLabel ?? "site navigation";
    });
    const navbarLinks = computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    useUpdateDeviceStatus(
      DeviceType.Mobile,
      (mobileDesktopBreakpoint) => {
        isMobile.value = window.innerWidth < mobileDesktopBreakpoint;
      }
    );
    const __returned__ = { navbarConfig, navbarSelectLanguage, navbarRepo, isMobile, navbarLabel, navbarLinks, VPNavbarDropdown, get AutoLink() {
      return AutoLink;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.navbarLinks.length) {
    _push(`<nav${ssrRenderAttrs(mergeProps({
      class: "vp-navbar-items",
      "aria-label": $setup.navbarLabel
    }, _attrs))}><!--[-->`);
    ssrRenderList($setup.navbarLinks, (item) => {
      _push(`<div class="vp-navbar-item">`);
      if ("children" in item) {
        _push(ssrRenderComponent($setup["VPNavbarDropdown"], {
          class: { mobile: $setup.isMobile },
          item
        }, null, _parent));
      } else {
        _push(ssrRenderComponent($setup["AutoLink"], { config: item }, null, _parent));
      }
      _push(`</div>`);
    });
    _push(`<!--]--></nav>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/VPNavbarItems.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const VPNavbarItems = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e], ["__file", "VPNavbarItems.vue"]]);
const _sfc_main$d = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "dark-icon",
    viewBox: "0 0 32 32"
  }, _attrs))}><path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/VPDarkIcon.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const VPDarkIcon = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d], ["__file", "VPDarkIcon.vue"]]);
const _sfc_main$c = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "light-icon",
    viewBox: "0 0 32 32"
  }, _attrs))}><path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/VPLightIcon.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const VPLightIcon = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c], ["__file", "VPLightIcon.vue"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "VPToggleColorModeButton",
  setup(__props, { expose: __expose }) {
    __expose();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const toggleColorMode = () => {
      isDarkMode.value = !isDarkMode.value;
    };
    const __returned__ = { themeLocale, isDarkMode, toggleColorMode, VPDarkIcon, VPLightIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: "button",
    class: "vp-toggle-color-mode-button",
    title: $setup.themeLocale.toggleColorMode
  }, _attrs))}>`);
  _push(ssrRenderComponent($setup["VPLightIcon"], {
    style: !$setup.isDarkMode ? null : { display: "none" }
  }, null, _parent));
  _push(ssrRenderComponent($setup["VPDarkIcon"], {
    style: $setup.isDarkMode ? null : { display: "none" }
  }, null, _parent));
  _push(`</button>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/VPToggleColorModeButton.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const VPToggleColorModeButton = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b], ["__file", "VPToggleColorModeButton.vue"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "VPToggleSidebarButton",
  emits: ["toggle"],
  setup(__props, { expose: __expose }) {
    __expose();
    const themeLocale = useThemeLocaleData();
    const __returned__ = { themeLocale };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "vp-toggle-sidebar-button",
    title: $setup.themeLocale.toggleSidebar,
    "aria-expanded": "false",
    role: "button",
    tabindex: "0"
  }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/VPToggleSidebarButton.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const VPToggleSidebarButton = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a], ["__file", "VPToggleSidebarButton.vue"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "VPNavbar",
  emits: ["toggleSidebar"],
  setup(__props, { expose: __expose }) {
    __expose();
    const themeLocale = useThemeLocaleData();
    const navbar = ref(null);
    const navbarBrand = ref(null);
    const linksWrapperMaxWidth = ref(0);
    const linksWrapperStyle = computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: `${linksWrapperMaxWidth.value}px`
      };
    });
    const getCssValue = (el, property) => {
      var _a;
      const val = (_a = el == null ? void 0 : el.ownerDocument.defaultView) == null ? void 0 : _a.getComputedStyle(el, null)[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    };
    useUpdateDeviceStatus(
      DeviceType.Mobile,
      (mobileDesktopBreakpoint) => {
        var _a;
        const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
        if (window.innerWidth < mobileDesktopBreakpoint) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = navbarBrand.value) == null ? void 0 : _a.offsetWidth) ?? 0);
        }
      }
    );
    const __returned__ = { themeLocale, navbar, navbarBrand, linksWrapperMaxWidth, linksWrapperStyle, getCssValue, VPNavbarBrand, VPNavbarItems, VPToggleColorModeButton, VPToggleSidebarButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VPSearch = resolveComponent("VPSearch");
  _push(`<header${ssrRenderAttrs(mergeProps({
    ref: "navbar",
    class: "vp-navbar",
    "vp-navbar": ""
  }, _attrs))}>`);
  _push(ssrRenderComponent($setup["VPToggleSidebarButton"], {
    onToggle: ($event) => _ctx.$emit("toggleSidebar")
  }, null, _parent));
  _push(`<span>`);
  _push(ssrRenderComponent($setup["VPNavbarBrand"], null, null, _parent));
  _push(`</span><div class="vp-navbar-items-wrapper" style="${ssrRenderStyle($setup.linksWrapperStyle)}">`);
  ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
  _push(ssrRenderComponent($setup["VPNavbarItems"], { class: "vp-hide-mobile" }, null, _parent));
  ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
  if ($setup.themeLocale.colorModeSwitch) {
    _push(ssrRenderComponent($setup["VPToggleColorModeButton"], null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_VPSearch, null, null, _parent));
  _push(`</div></header>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/VPNavbar.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const VPNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__file", "VPNavbar.vue"]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "edit-icon",
    viewBox: "0 0 1024 1024"
  }, _attrs))}><g fill="currentColor"><path d="M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"></path><path d="M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"></path></g></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/VPEditIcon.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const VPEditIcon = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__file", "VPEditIcon.vue"]]);
const useContributors = () => {
  const themeLocale = useThemeLocaleData();
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a;
    const showContributors = frontmatter.value.contributors ?? themeLocale.value.contributors ?? true;
    if (!showContributors)
      return null;
    return ((_a = page.value.git) == null ? void 0 : _a.contributors) ?? null;
  });
};
const useEditLink = () => {
  const themeLocale = useThemeLocaleData();
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const showEditLink = frontmatter.value.editLink ?? themeLocale.value.editLink ?? true;
    if (!showEditLink) {
      return null;
    }
    const { repo, docsRepo = repo, docsBranch = "main", docsDir = "", editLinkText } = themeLocale.value;
    if (!docsRepo)
      return null;
    const editLink = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      filePathRelative: page.value.filePathRelative,
      editLinkPattern: frontmatter.value.editLinkPattern ?? themeLocale.value.editLinkPattern
    });
    if (!editLink)
      return null;
    return {
      text: editLinkText ?? "Edit this page",
      link: editLink
    };
  });
};
const useLastUpdated = () => {
  const themeLocale = useThemeLocaleData();
  const page = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a;
    const showLastUpdated = frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true;
    if (!showLastUpdated)
      return null;
    if (!((_a = page.value.git) == null ? void 0 : _a.updatedTime))
      return null;
    const updatedDate = new Date(page.value.git.updatedTime);
    return updatedDate.toLocaleString();
  });
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "VPPageMeta",
  setup(__props, { expose: __expose }) {
    __expose();
    const themeLocale = useThemeLocaleData();
    const editLink = useEditLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    const __returned__ = { themeLocale, editLink, lastUpdated, contributors, VPEditIcon, get AutoLink() {
      return AutoLink;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "vp-page-meta" }, _attrs))}>`);
  if ($setup.editLink) {
    _push(`<div class="vp-meta-item edit-link">`);
    _push(ssrRenderComponent($setup["AutoLink"], {
      class: "label",
      config: $setup.editLink
    }, {
      before: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent($setup["VPEditIcon"], null, null, _parent2, _scopeId));
        } else {
          return [
            createVNode($setup["VPEditIcon"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="vp-meta-item git-info">`);
  if ($setup.lastUpdated) {
    _push(`<div class="vp-meta-item last-updated"><span class="meta-item-label">${ssrInterpolate($setup.themeLocale.lastUpdatedText)}: </span>`);
    _push(ssrRenderComponent(_component_ClientOnly, null, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="meta-item-info"${_scopeId}>${ssrInterpolate($setup.lastUpdated)}</span>`);
        } else {
          return [
            createVNode("span", { class: "meta-item-info" }, toDisplayString($setup.lastUpdated), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.contributors && $setup.contributors.length) {
    _push(`<div class="vp-meta-item contributors"><span class="meta-item-label">${ssrInterpolate($setup.themeLocale.contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
    ssrRenderList($setup.contributors, (contributor, index) => {
      _push(`<!--[--><span class="contributor"${ssrRenderAttr("title", `email: ${contributor.email}`)}>${ssrInterpolate(contributor.name)}</span>`);
      if (index !== $setup.contributors.length - 1) {
        _push(`<!--[-->, <!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]--></span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></footer>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/VPPageMeta.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const VPPageMeta = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__file", "VPPageMeta.vue"]]);
const useNavigate = () => {
  const router = useRouter();
  const route = useRoute();
  return (url) => {
    if (url)
      if (isLinkAbsolute(url)) {
        if (route.path !== url)
          router.push(url);
      } else if (isLinkWithProtocol(url)) {
        window.open(url);
      } else {
        router.push(encodeURI(url));
      }
  };
};
const resolveFromFrontmatterConfig = (config2, currentPath) => {
  if (config2 === false) {
    return false;
  }
  if (isString(config2)) {
    return getAutoLink(config2, currentPath);
  }
  if (isPlainObject(config2)) {
    return {
      ...config2,
      link: getAutoLink(config2.link, currentPath).link
    };
  }
  return null;
};
const resolveFromSidebarItems = (sidebarItems, currentPath, offset) => {
  const linkIndex = sidebarItems.findIndex((item) => item.link === currentPath);
  if (linkIndex !== -1) {
    const targetItem = sidebarItems[linkIndex + offset];
    if (!targetItem)
      return null;
    if (targetItem.link)
      return targetItem;
    if ("prefix" in targetItem && !resolveRoute(targetItem.prefix).notFound)
      return {
        ...targetItem,
        link: targetItem.prefix
      };
    return null;
  }
  for (const item of sidebarItems) {
    if ("children" in item) {
      const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
      if (childResult) {
        return childResult;
      }
    }
  }
  const prefixIndex = sidebarItems.findIndex((item) => "prefix" in item && item.prefix === currentPath);
  if (prefixIndex !== -1) {
    const targetItem = sidebarItems[prefixIndex + offset];
    if (!targetItem)
      return null;
    if (targetItem.link)
      return targetItem;
    if ("prefix" in targetItem && !resolveRoute(targetItem.prefix).notFound)
      return {
        ...targetItem,
        link: targetItem.prefix
      };
    return null;
  }
  return null;
};
const useRelatedLinks = () => {
  const frontmatter = usePageFrontmatter();
  const themeLocale = useThemeLocaleData();
  const sidebarItems = useSidebarItems();
  const route = useRoute();
  const prevLink = computed(() => {
    const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev, route.path);
    return prevConfig === false ? null : prevConfig ?? (themeLocale.value.prev === false ? null : resolveFromSidebarItems(sidebarItems.value, route.path, -1));
  });
  const nextLink = computed(() => {
    const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next, route.path);
    return nextConfig === false ? null : nextConfig ?? (themeLocale.value.next === false ? null : resolveFromSidebarItems(sidebarItems.value, route.path, 1));
  });
  return {
    prevLink,
    nextLink
  };
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "VPPageNav",
  setup(__props, { expose: __expose }) {
    __expose();
    const themeLocale = useThemeLocaleData();
    const navigate = useNavigate();
    const { prevLink, nextLink } = useRelatedLinks();
    const navbarLabel = computed(
      () => themeLocale.value.pageNavbarLabel ?? "page navigation"
    );
    useEventListener("keydown", (event) => {
      if (event.altKey) {
        if (event.key === "ArrowRight") {
          if (nextLink.value) {
            navigate(nextLink.value.link);
            event.preventDefault();
          }
        } else if (event.key === "ArrowLeft") {
          if (prevLink.value) {
            navigate(prevLink.value.link);
            event.preventDefault();
          }
        }
      }
    });
    const __returned__ = { themeLocale, navigate, prevLink, nextLink, navbarLabel, get AutoLink() {
      return AutoLink;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.prevLink || $setup.nextLink) {
    _push(`<nav${ssrRenderAttrs(mergeProps({
      class: "vp-page-nav",
      "aria-label": $setup.navbarLabel
    }, _attrs))}>`);
    if ($setup.prevLink) {
      _push(ssrRenderComponent($setup["AutoLink"], {
        class: "prev",
        config: $setup.prevLink
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hint"${_scopeId}><span class="arrow left"${_scopeId}></span> ${ssrInterpolate($setup.themeLocale.prev ?? "Prev")}</div><div class="link"${_scopeId}><span${_scopeId}>${ssrInterpolate($setup.prevLink.text)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "hint" }, [
                createVNode("span", { class: "arrow left" }),
                createTextVNode(" " + toDisplayString($setup.themeLocale.prev ?? "Prev"), 1)
              ]),
              createVNode("div", { class: "link" }, [
                createVNode("span", null, toDisplayString($setup.prevLink.text), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    if ($setup.nextLink) {
      _push(ssrRenderComponent($setup["AutoLink"], {
        class: "next",
        config: $setup.nextLink
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hint"${_scopeId}>${ssrInterpolate($setup.themeLocale.next ?? "Next")} <span class="arrow right"${_scopeId}></span></div><div class="link"${_scopeId}><span${_scopeId}>${ssrInterpolate($setup.nextLink.text)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "hint" }, [
                createTextVNode(toDisplayString($setup.themeLocale.next ?? "Next") + " ", 1),
                createVNode("span", { class: "arrow right" })
              ]),
              createVNode("div", { class: "link" }, [
                createVNode("span", null, toDisplayString($setup.nextLink.text), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</nav>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/VPPageNav.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const VPPageNav = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__file", "VPPageNav.vue"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "VPPage",
  setup(__props, { expose: __expose }) {
    __expose();
    setupHeaders();
    const __returned__ = { VPPageMeta, VPPageNav, get Content() {
      return Content;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "vp-page" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
  _push(`<div class="theme-default-content" vp-content>`);
  ssrRenderSlot(_ctx.$slots, "content-top", {}, null, _push, _parent);
  _push(ssrRenderComponent($setup["Content"], null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "content-bottom", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent($setup["VPPageMeta"], null, null, _parent));
  _push(ssrRenderComponent($setup["VPPageNav"], null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
  _push(`</main>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/VPPage.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__file", "VPPage.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  props: {
    item: {},
    depth: { default: 0 }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { item, depth } = toRefs(props);
    const route = useRoute();
    const router = useRouter();
    const collapsible = computed(
      () => "collapsible" in item.value && item.value.collapsible
    );
    const isActive = computed(() => isActiveLinkItem(item.value, route));
    const itemClass = computed(() => ({
      "vp-sidebar-item": true,
      "vp-sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": collapsible.value
    }));
    const isOpenDefault = computed(
      () => collapsible.value ? isActive.value : true
    );
    const [isOpen, toggleIsOpen] = useToggle(isOpenDefault.value);
    const onClick = (e) => {
      if (collapsible.value) {
        e.preventDefault();
        toggleIsOpen();
      }
    };
    const unregisterRouterHook = router.afterEach(() => {
      void nextTick(() => {
        isOpen.value = isOpenDefault.value;
      });
    });
    onBeforeUnmount(() => {
      unregisterRouterHook();
    });
    const __returned__ = { props, item, depth, route, router, collapsible, isActive, itemClass, isOpenDefault, isOpen, toggleIsOpen, onClick, unregisterRouterHook, VPDropdownTransition, get AutoLink() {
      return AutoLink;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VPSidebarItem = resolveComponent("VPSidebarItem", true);
  _push(`<li${ssrRenderAttrs(_attrs)}>`);
  if ($setup.item.link) {
    _push(ssrRenderComponent($setup["AutoLink"], {
      class: $setup.itemClass,
      config: $setup.item
    }, null, _parent));
  } else {
    _push(`<p tabindex="0" class="${ssrRenderClass($setup.itemClass)}">${ssrInterpolate($setup.item.text)} `);
    if ($setup.collapsible) {
      _push(`<span class="${ssrRenderClass([$setup.isOpen ? "down" : "right", "arrow"])}"></span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</p>`);
  }
  if ("children" in $setup.item && $setup.item.children.length) {
    _push(ssrRenderComponent($setup["VPDropdownTransition"], null, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<ul style="${ssrRenderStyle($setup.isOpen ? null : { display: "none" })}" class="vp-sidebar-children"${_scopeId}><!--[-->`);
          ssrRenderList($setup.item.children, (child) => {
            _push2(ssrRenderComponent(_component_VPSidebarItem, {
              key: `${$setup.depth}${child.text}${child.link}`,
              item: child,
              depth: $setup.depth + 1
            }, null, _parent2, _scopeId));
          });
          _push2(`<!--]--></ul>`);
        } else {
          return [
            withDirectives(createVNode("ul", { class: "vp-sidebar-children" }, [
              (openBlock(true), createBlock(Fragment, null, renderList($setup.item.children, (child) => {
                return openBlock(), createBlock(_component_VPSidebarItem, {
                  key: `${$setup.depth}${child.text}${child.link}`,
                  item: child,
                  depth: $setup.depth + 1
                }, null, 8, ["item", "depth"]);
              }), 128))
            ], 512), [
              [vShow, $setup.isOpen]
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</li>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/VPSidebarItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__file", "VPSidebarItem.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItems",
  setup(__props, { expose: __expose }) {
    __expose();
    const route = useRoute();
    const sidebarItems = useSidebarItems();
    onMounted(() => {
      watch(
        () => route.hash,
        (hash) => {
          const sidebar = document.querySelector(".vp-sidebar");
          if (!sidebar) return;
          const activeSidebarItem = document.querySelector(
            `.vp-sidebar a.vp-sidebar-item[href="${route.path}${hash}"]`
          );
          if (!activeSidebarItem) return;
          const { top: sidebarTop, height: sidebarHeight } = sidebar.getBoundingClientRect();
          const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
          if (activeSidebarItemTop < sidebarTop) {
            activeSidebarItem.scrollIntoView(true);
          } else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight) {
            activeSidebarItem.scrollIntoView(false);
          }
        }
      );
    });
    const __returned__ = { route, sidebarItems, VPSidebarItem };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.sidebarItems.length) {
    _push(`<ul${ssrRenderAttrs(mergeProps({ class: "vp-sidebar-items" }, _attrs))}><!--[-->`);
    ssrRenderList($setup.sidebarItems, (item) => {
      _push(ssrRenderComponent($setup["VPSidebarItem"], {
        key: `${item.text}${item.link}`,
        item
      }, null, _parent));
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/VPSidebarItems.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const VPSidebarItems = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__file", "VPSidebarItems.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { VPNavbarItems, VPSidebarItems };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<aside${ssrRenderAttrs(mergeProps({
    class: "vp-sidebar",
    "vp-sidebar": ""
  }, _attrs))}>`);
  _push(ssrRenderComponent($setup["VPNavbarItems"], null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
  _push(ssrRenderComponent($setup["VPSidebarItems"], null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
  _push(`</aside>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/VPSidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__file", "VPSidebar.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props, { expose: __expose }) {
    __expose();
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = computed(
      () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
    );
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e) => {
      touchStart.x = e.changedTouches[0].clientX;
      touchStart.y = e.changedTouches[0].clientY;
    };
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStart.x;
      const dy = e.changedTouches[0].clientY - touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && touchStart.x <= 80) {
          toggleSidebar(true);
        } else {
          toggleSidebar(false);
        }
      }
    };
    const enableExternalLinkIcon = computed(
      () => frontmatter.value.externalLinkIcon ?? themeLocale.value.externalLinkIcon ?? true
    );
    const containerClass = computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value,
        "external-link-icon": enableExternalLinkIcon.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    onMounted(() => {
      const router = useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    onUnmounted(() => {
      unregisterRouterHook();
    });
    const scrollPromise2 = useScrollPromise();
    const onBeforeEnter = scrollPromise2.resolve;
    const onBeforeLeave = scrollPromise2.pending;
    const __returned__ = { page, frontmatter, themeLocale, shouldShowNavbar, sidebarItems, isSidebarOpen, toggleSidebar, touchStart, onTouchStart, onTouchEnd, enableExternalLinkIcon, containerClass, get unregisterRouterHook() {
      return unregisterRouterHook;
    }, set unregisterRouterHook(v) {
      unregisterRouterHook = v;
    }, scrollPromise: scrollPromise2, onBeforeEnter, onBeforeLeave, VPHome, VPNavbar, VPPage, VPSidebar };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["vp-theme-container", $setup.containerClass],
    "vp-container": ""
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "navbar", {}, () => {
    if ($setup.shouldShowNavbar) {
      _push(ssrRenderComponent($setup["VPNavbar"], { onToggleSidebar: $setup.toggleSidebar }, {
        before: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "navbar-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "navbar-before")
            ];
          }
        }),
        after: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "navbar-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "navbar-after")
            ];
          }
        }),
        _: 3
      }, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`<div class="vp-sidebar-mask"></div>`);
  ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
    _push(ssrRenderComponent($setup["VPSidebar"], null, {
      top: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "sidebar-top")
          ];
        }
      }),
      bottom: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "sidebar-bottom")
          ];
        }
      }),
      _: 3
    }, _parent));
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "page", {}, () => {
    if ($setup.frontmatter.home) {
      _push(ssrRenderComponent($setup["VPHome"], null, null, _parent));
    } else {
      _push(ssrRenderComponent($setup["VPPage"], {
        key: $setup.page.path
      }, {
        top: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "page-top")
            ];
          }
        }),
        "content-top": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "page-content-top", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "page-content-top")
            ];
          }
        }),
        "content-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "page-content-bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "page-content-bottom")
            ];
          }
        }),
        bottom: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "page-bottom")
            ];
          }
        }),
        _: 3
      }, _parent));
    }
  }, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__file", "Layout.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  setup(__props, { expose: __expose }) {
    __expose();
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = themeLocale.value.notFound ?? ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = themeLocale.value.home ?? routeLocale.value;
    const homeText = themeLocale.value.backToHome ?? "Back to home";
    const __returned__ = { routeLocale, themeLocale, messages, getMsg, homeLink, homeText, get RouteLink() {
      return RouteLink;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "vp-theme-container",
    "vp-container": ""
  }, _attrs))} data-v-463c2c5d><main class="page" data-v-463c2c5d><div class="theme-default-content" vp-content data-v-463c2c5d><h1 data-v-463c2c5d>404</h1><blockquote data-v-463c2c5d>${ssrInterpolate($setup.getMsg())}</blockquote>`);
  _push(ssrRenderComponent($setup["RouteLink"], { to: $setup.homeLink }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($setup.homeText)}`);
      } else {
        return [
          createTextVNode(toDisplayString($setup.homeText), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/NotFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-463c2c5d"], ["__file", "NotFound.vue"]]);
const config = defineClientConfig({
  enhance({ app, router }) {
    if (!hasGlobalComponent("Badge"))
      app.component("Badge", Badge);
    if (!hasGlobalComponent("CodeGroup"))
      app.component("CodeGroup", CodeGroup);
    if (!hasGlobalComponent("CodeGroupItem"))
      app.component("CodeGroupItem", CodeGroupItem);
    app.component("VPSearch", () => {
      const SearchComponent = app.component("Docsearch") ?? app.component("SearchBox");
      if (SearchComponent) {
        return h(SearchComponent);
      }
      return null;
    });
    const scrollBehavior = router.options.scrollBehavior;
    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();
      return scrollBehavior(...args);
    };
  },
  setup() {
    setupDarkMode();
    setupSidebarItems();
  },
  layouts: {
    Layout,
    NotFound
  }
});
const clientConfig8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config
}, Symbol.toStringTag, { value: "Module" }));
const clientConfig9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  clientConfig3,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  clientConfig7,
  clientConfig8,
  clientConfig9
].map((m) => m.default).filter(Boolean);
const siteData$1 = JSON.parse('{"base":"/","lang":"en-US","title":"Volta.guide","description":"","head":[],"locales":{}}');
var siteData = shallowRef(siteData$1);
var historyCreator = createMemoryHistory;
var createVueRouter = () => {
  const router = createRouter({
    // it might be an issue of vue-router that have to remove the ending slash
    history: historyCreator(removeEndingSlash("/")),
    routes: [
      {
        name: "vuepress-route",
        path: "/:catchAll(.*)",
        components: {}
      }
    ],
    scrollBehavior: (to, _from, savedPosition) => {
      if (savedPosition) return savedPosition;
      if (to.hash) return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    if (to.path !== from.path || from === START_LOCATION) {
      const route = resolveRoute(to.fullPath);
      if (route.path !== to.fullPath) {
        return route.path;
      }
      const pageChunk = await route.loader();
      to.meta = {
        // attach route meta
        ...route.meta,
        // attach page chunk route meta
        _pageChunk: pageChunk
      };
    } else if (to.path === from.path) {
      to.meta = from.meta;
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
  app.component("RouteLink", RouteLink);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const routePath = computed(() => router.currentRoute.value.path);
  const pageChunk = customRef((track, trigger) => ({
    get() {
      track();
      return router.currentRoute.value.meta._pageChunk;
    },
    set(value) {
      router.currentRoute.value.meta._pageChunk = value;
      trigger();
    }
  }));
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routeLocale = computed(
    () => resolvers.resolveRouteLocale(siteData.value.locales, routePath.value)
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageComponent = computed(() => pageChunk.value.comp);
  const pageData = computed(() => pageChunk.value.data);
  const pageFrontmatter = computed(() => pageData.value.frontmatter);
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(
    () => resolvers.resolvePageLang(pageData.value, siteLocaleData.value)
  );
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  const clientData = {
    layouts,
    pageData,
    pageComponent,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    redirects,
    routeLocale,
    routePath,
    routes,
    siteData,
    siteLocaleData
  };
  app.provide(clientDataSymbol, clientData);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return clientData;
};
var setupUpdateHead = () => {
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a;
  const app = appCreator({
    name: "Vuepress",
    setup() {
      var _a2;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a2 = clientConfig.setup) == null ? void 0 : _a2.call(clientConfig);
      }
      const rootComponents = clientConfigs.flatMap(
        ({ rootComponents: rootComponents2 = [] }) => rootComponents2.map((component) => h(component))
      );
      const pageLayout = usePageLayout();
      return () => [h(pageLayout.value), rootComponents];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router, clientConfigs);
  for (const clientConfig of clientConfigs) {
    await ((_a = clientConfig.enhance) == null ? void 0 : _a.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
export {
  _export_sfc as _,
  createVueApp
};
