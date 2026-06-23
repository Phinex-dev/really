import { g as pr, j as g, r as X } from "./index-C41onZB-.js";
import {
  c as Gr,
  u as Jr,
  P as Zr,
  C as Pn,
  b as Ke,
  T as ei,
} from "./App-CYgIjxWH.js";
import { d as ni, s as ti } from "./gemini-CeriFUnH.js";
import { b as ri, c as ii, S as Ln, a as li } from "./buttonStyles-CgOYb1KY.js";
import { C as oi } from "./chevron-left-CTqCLzU8.js";
import { L as _n } from "./layers-BRay5e2J.js";
import { C as ai } from "./chevron-down-DsGpUXIv.js";
import { S as zn } from "./star-CVoNwJVA.js";
import { T as si } from "./triangle-alert-Bl8c-dcA.js";
import { F as It } from "./feather-D63I_6EC.js";
import { P as ui } from "./pen-DzfzbAck.js";
import { T as ci } from "./tag-Ka5DFHdS.js";
import "./giftFulfillment-DLU8FseI.js";
import "./initialShopItems-Bgx56oyu.js";
import "./worldBookScopes-B0JaUaci.js";
import "./llmFetch-C_SjUca9.js";
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pi = [
    [
      "path",
      { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "7g6ntu" },
    ],
    [
      "path",
      { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "ijws7r" },
    ],
    ["path", { d: "M7 21h10", key: "1b0cd5" }],
    ["path", { d: "M12 3v18", key: "108xh3" }],
    ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2", key: "3gwbw2" }],
  ],
  hi = Gr("scale", pi);
function fi(e, n) {
  const t = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e)
    .join((t.padRight ? " " : "") + "," + (t.padLeft === !1 ? "" : " "))
    .trim();
}
const di = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  mi = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  gi = {};
function Nt(e, n) {
  return (gi.jsx ? mi : di).test(e);
}
const xi = /[ \t\n\f\r]/g;
function yi(e) {
  return typeof e == "object" ? (e.type === "text" ? vt(e.value) : !1) : vt(e);
}
function vt(e) {
  return e.replace(xi, "") === "";
}
class hn {
  constructor(n, t, r) {
    (this.normal = t), (this.property = n), r && (this.space = r);
  }
}
hn.prototype.normal = {};
hn.prototype.property = {};
hn.prototype.space = void 0;
function hr(e, n) {
  const t = {},
    r = {};
  for (const i of e) Object.assign(t, i.property), Object.assign(r, i.normal);
  return new hn(t, r, n);
}
function Wn(e) {
  return e.toLowerCase();
}
class ue {
  constructor(n, t) {
    (this.attribute = t), (this.property = n);
  }
}
ue.prototype.attribute = "";
ue.prototype.booleanish = !1;
ue.prototype.boolean = !1;
ue.prototype.commaOrSpaceSeparated = !1;
ue.prototype.commaSeparated = !1;
ue.prototype.defined = !1;
ue.prototype.mustUseProperty = !1;
ue.prototype.number = !1;
ue.prototype.overloadedBoolean = !1;
ue.prototype.property = "";
ue.prototype.spaceSeparated = !1;
ue.prototype.space = void 0;
let bi = 0;
const O = He(),
  ee = He(),
  Xn = He(),
  k = He(),
  Q = He(),
  Xe = He(),
  he = He();
function He() {
  return 2 ** ++bi;
}
const Qn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: O,
        booleanish: ee,
        commaOrSpaceSeparated: he,
        commaSeparated: Xe,
        number: k,
        overloadedBoolean: Xn,
        spaceSeparated: Q,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Dn = Object.keys(Qn);
class it extends ue {
  constructor(n, t, r, i) {
    let l = -1;
    if ((super(n, t), Tt(this, "space", i), typeof r == "number"))
      for (; ++l < Dn.length; ) {
        const o = Dn[l];
        Tt(this, Dn[l], (r & Qn[o]) === Qn[o]);
      }
  }
}
it.prototype.defined = !0;
function Tt(e, n, t) {
  t && (e[n] = t);
}
function Ge(e) {
  const n = {},
    t = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const l = new it(r, e.transform(e.attributes || {}, r), i, e.space);
    e.mustUseProperty &&
      e.mustUseProperty.includes(r) &&
      (l.mustUseProperty = !0),
      (n[r] = l),
      (t[Wn(r)] = r),
      (t[Wn(l.attribute)] = r);
  }
  return new hn(n, t, e.space);
}
const fr = Ge({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: ee,
    ariaAutoComplete: null,
    ariaBusy: ee,
    ariaChecked: ee,
    ariaColCount: k,
    ariaColIndex: k,
    ariaColSpan: k,
    ariaControls: Q,
    ariaCurrent: null,
    ariaDescribedBy: Q,
    ariaDetails: null,
    ariaDisabled: ee,
    ariaDropEffect: Q,
    ariaErrorMessage: null,
    ariaExpanded: ee,
    ariaFlowTo: Q,
    ariaGrabbed: ee,
    ariaHasPopup: null,
    ariaHidden: ee,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Q,
    ariaLevel: k,
    ariaLive: null,
    ariaModal: ee,
    ariaMultiLine: ee,
    ariaMultiSelectable: ee,
    ariaOrientation: null,
    ariaOwns: Q,
    ariaPlaceholder: null,
    ariaPosInSet: k,
    ariaPressed: ee,
    ariaReadOnly: ee,
    ariaRelevant: null,
    ariaRequired: ee,
    ariaRoleDescription: Q,
    ariaRowCount: k,
    ariaRowIndex: k,
    ariaRowSpan: k,
    ariaSelected: ee,
    ariaSetSize: k,
    ariaSort: null,
    ariaValueMax: k,
    ariaValueMin: k,
    ariaValueNow: k,
    ariaValueText: null,
    role: null,
  },
  transform(e, n) {
    return n === "role" ? n : "aria-" + n.slice(4).toLowerCase();
  },
});
function dr(e, n) {
  return n in e ? e[n] : n;
}
function mr(e, n) {
  return dr(e, n.toLowerCase());
}
const wi = Ge({
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv",
    },
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: Xe,
      acceptCharset: Q,
      accessKey: Q,
      action: null,
      allow: null,
      allowFullScreen: O,
      allowPaymentRequest: O,
      allowUserMedia: O,
      alt: null,
      as: null,
      async: O,
      autoCapitalize: null,
      autoComplete: Q,
      autoFocus: O,
      autoPlay: O,
      blocking: Q,
      capture: null,
      charSet: null,
      checked: O,
      cite: null,
      className: Q,
      cols: k,
      colSpan: null,
      content: null,
      contentEditable: ee,
      controls: O,
      controlsList: Q,
      coords: k | Xe,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: O,
      defer: O,
      dir: null,
      dirName: null,
      disabled: O,
      download: Xn,
      draggable: ee,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: O,
      formTarget: null,
      headers: Q,
      height: k,
      hidden: Xn,
      high: k,
      href: null,
      hrefLang: null,
      htmlFor: Q,
      httpEquiv: Q,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: O,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: O,
      itemId: null,
      itemProp: Q,
      itemRef: Q,
      itemScope: O,
      itemType: Q,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: O,
      low: k,
      manifest: null,
      max: null,
      maxLength: k,
      media: null,
      method: null,
      min: null,
      minLength: k,
      multiple: O,
      muted: O,
      name: null,
      nonce: null,
      noModule: O,
      noValidate: O,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: O,
      optimum: k,
      pattern: null,
      ping: Q,
      placeholder: null,
      playsInline: O,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: O,
      referrerPolicy: null,
      rel: Q,
      required: O,
      reversed: O,
      rows: k,
      rowSpan: k,
      sandbox: Q,
      scope: null,
      scoped: O,
      seamless: O,
      selected: O,
      shadowRootClonable: O,
      shadowRootDelegatesFocus: O,
      shadowRootMode: null,
      shape: null,
      size: k,
      sizes: null,
      slot: null,
      span: k,
      spellCheck: ee,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: k,
      step: null,
      style: null,
      tabIndex: k,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: O,
      useMap: null,
      value: ee,
      width: k,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: Q,
      axis: null,
      background: null,
      bgColor: null,
      border: k,
      borderColor: null,
      bottomMargin: k,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: O,
      declare: O,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: k,
      leftMargin: k,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: k,
      marginWidth: k,
      noResize: O,
      noHref: O,
      noShade: O,
      noWrap: O,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: k,
      rules: null,
      scheme: null,
      scrolling: ee,
      standby: null,
      summary: null,
      text: null,
      topMargin: k,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: k,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: O,
      disableRemotePlayback: O,
      prefix: null,
      property: null,
      results: k,
      security: null,
      unselectable: null,
    },
    space: "html",
    transform: mr,
  }),
  ki = Ge({
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      transformOrigin: "transform-origin",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin",
    },
    properties: {
      about: he,
      accentHeight: k,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: k,
      amplitude: k,
      arabicForm: null,
      ascent: k,
      attributeName: null,
      attributeType: null,
      azimuth: k,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: k,
      by: null,
      calcMode: null,
      capHeight: k,
      className: Q,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: k,
      diffuseConstant: k,
      direction: null,
      display: null,
      dur: null,
      divisor: k,
      dominantBaseline: null,
      download: O,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: k,
      enableBackground: null,
      end: null,
      event: null,
      exponent: k,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: k,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: Xe,
      g2: Xe,
      glyphName: Xe,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: k,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: k,
      horizOriginX: k,
      horizOriginY: k,
      id: null,
      ideographic: k,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: k,
      k,
      k1: k,
      k2: k,
      k3: k,
      k4: k,
      kernelMatrix: he,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: k,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: k,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: k,
      overlineThickness: k,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: k,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: Q,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: k,
      pointsAtY: k,
      pointsAtZ: k,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: he,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: he,
      rev: he,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: he,
      requiredFeatures: he,
      requiredFonts: he,
      requiredFormats: he,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: k,
      specularExponent: k,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: k,
      strikethroughThickness: k,
      string: null,
      stroke: null,
      strokeDashArray: he,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: k,
      strokeOpacity: k,
      strokeWidth: null,
      style: null,
      surfaceScale: k,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: he,
      tabIndex: k,
      tableValues: null,
      target: null,
      targetX: k,
      targetY: k,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: he,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: k,
      underlineThickness: k,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: k,
      values: null,
      vAlphabetic: k,
      vMathematical: k,
      vectorEffect: null,
      vHanging: k,
      vIdeographic: k,
      version: null,
      vertAdvY: k,
      vertOriginX: k,
      vertOriginY: k,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: k,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    space: "svg",
    transform: dr,
  }),
  gr = Ge({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
    space: "xlink",
    transform(e, n) {
      return "xlink:" + n.slice(5).toLowerCase();
    },
  }),
  xr = Ge({
    attributes: { xmlnsxlink: "xmlns:xlink" },
    properties: { xmlnsXLink: null, xmlns: null },
    space: "xmlns",
    transform: mr,
  }),
  yr = Ge({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: "xml",
    transform(e, n) {
      return "xml:" + n.slice(3).toLowerCase();
    },
  }),
  Si = {
    classId: "classID",
    dataType: "datatype",
    itemId: "itemID",
    strokeDashArray: "strokeDasharray",
    strokeDashOffset: "strokeDashoffset",
    strokeLineCap: "strokeLinecap",
    strokeLineJoin: "strokeLinejoin",
    strokeMiterLimit: "strokeMiterlimit",
    typeOf: "typeof",
    xLinkActuate: "xlinkActuate",
    xLinkArcRole: "xlinkArcrole",
    xLinkHref: "xlinkHref",
    xLinkRole: "xlinkRole",
    xLinkShow: "xlinkShow",
    xLinkTitle: "xlinkTitle",
    xLinkType: "xlinkType",
    xmlnsXLink: "xmlnsXlink",
  },
  Ci = /[A-Z]/g,
  jt = /-[a-z]/g,
  Ei = /^data[-\w.:]+$/i;
function Ii(e, n) {
  const t = Wn(n);
  let r = n,
    i = ue;
  if (t in e.normal) return e.property[e.normal[t]];
  if (t.length > 4 && t.slice(0, 4) === "data" && Ei.test(n)) {
    if (n.charAt(4) === "-") {
      const l = n.slice(5).replace(jt, vi);
      r = "data" + l.charAt(0).toUpperCase() + l.slice(1);
    } else {
      const l = n.slice(4);
      if (!jt.test(l)) {
        let o = l.replace(Ci, Ni);
        o.charAt(0) !== "-" && (o = "-" + o), (n = "data" + o);
      }
    }
    i = it;
  }
  return new i(r, n);
}
function Ni(e) {
  return "-" + e.toLowerCase();
}
function vi(e) {
  return e.charAt(1).toUpperCase();
}
const Ti = hr([fr, wi, gr, xr, yr], "html"),
  lt = hr([fr, ki, gr, xr, yr], "svg");
function ji(e) {
  return e.join(" ").trim();
}
var Ye = {},
  On,
  At;
function Ai() {
  if (At) return On;
  At = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    n = /\n/g,
    t = /^\s*/,
    r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    i = /^:\s*/,
    l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    o = /^[;\s]*/,
    a = /^\s+|\s+$/g,
    c = `
`,
    s = "/",
    u = "*",
    p = "",
    m = "comment",
    h = "declaration";
  function E(I, w) {
    if (typeof I != "string")
      throw new TypeError("First argument must be a string");
    if (!I) return [];
    w = w || {};
    var _ = 1,
      T = 1;
    function q(L) {
      var N = L.match(n);
      N && (_ += N.length);
      var H = L.lastIndexOf(c);
      T = ~H ? L.length - H : T + L.length;
    }
    function $() {
      var L = { line: _, column: T };
      return function (N) {
        return (N.position = new b(L)), B(), N;
      };
    }
    function b(L) {
      (this.start = L),
        (this.end = { line: _, column: T }),
        (this.source = w.source);
    }
    b.prototype.content = I;
    function M(L) {
      var N = new Error(w.source + ":" + _ + ":" + T + ": " + L);
      if (
        ((N.reason = L),
        (N.filename = w.source),
        (N.line = _),
        (N.column = T),
        (N.source = I),
        !w.silent)
      )
        throw N;
    }
    function W(L) {
      var N = L.exec(I);
      if (N) {
        var H = N[0];
        return q(H), (I = I.slice(H.length)), N;
      }
    }
    function B() {
      W(t);
    }
    function K(L) {
      var N;
      for (L = L || []; (N = A()); ) N !== !1 && L.push(N);
      return L;
    }
    function A() {
      var L = $();
      if (!(s != I.charAt(0) || u != I.charAt(1))) {
        for (
          var N = 2;
          p != I.charAt(N) && (u != I.charAt(N) || s != I.charAt(N + 1));

        )
          ++N;
        if (((N += 2), p === I.charAt(N - 1)))
          return M("End of comment missing");
        var H = I.slice(2, N - 2);
        return (
          (T += 2), q(H), (I = I.slice(N)), (T += 2), L({ type: m, comment: H })
        );
      }
    }
    function P() {
      var L = $(),
        N = W(r);
      if (N) {
        if ((A(), !W(i))) return M("property missing ':'");
        var H = W(l),
          J = L({
            type: h,
            property: v(N[0].replace(e, p)),
            value: H ? v(H[0].replace(e, p)) : p,
          });
        return W(o), J;
      }
    }
    function Y() {
      var L = [];
      K(L);
      for (var N; (N = P()); ) N !== !1 && (L.push(N), K(L));
      return L;
    }
    return B(), Y();
  }
  function v(I) {
    return I ? I.replace(a, p) : p;
  }
  return (On = E), On;
}
var Pt;
function Pi() {
  if (Pt) return Ye;
  Pt = 1;
  var e =
    (Ye && Ye.__importDefault) ||
    function (r) {
      return r && r.__esModule ? r : { default: r };
    };
  Object.defineProperty(Ye, "__esModule", { value: !0 }), (Ye.default = t);
  const n = e(Ai());
  function t(r, i) {
    let l = null;
    if (!r || typeof r != "string") return l;
    const o = (0, n.default)(r),
      a = typeof i == "function";
    return (
      o.forEach((c) => {
        if (c.type !== "declaration") return;
        const { property: s, value: u } = c;
        a ? i(s, u, c) : u && ((l = l || {}), (l[s] = u));
      }),
      l
    );
  }
  return Ye;
}
var rn = {},
  Lt;
function Li() {
  if (Lt) return rn;
  (Lt = 1),
    Object.defineProperty(rn, "__esModule", { value: !0 }),
    (rn.camelCase = void 0);
  var e = /^--[a-zA-Z0-9_-]+$/,
    n = /-([a-z])/g,
    t = /^[^-]+$/,
    r = /^-(webkit|moz|ms|o|khtml)-/,
    i = /^-(ms)-/,
    l = function (s) {
      return !s || t.test(s) || e.test(s);
    },
    o = function (s, u) {
      return u.toUpperCase();
    },
    a = function (s, u) {
      return "".concat(u, "-");
    },
    c = function (s, u) {
      return (
        u === void 0 && (u = {}),
        l(s)
          ? s
          : ((s = s.toLowerCase()),
            u.reactCompat ? (s = s.replace(i, a)) : (s = s.replace(r, a)),
            s.replace(n, o))
      );
    };
  return (rn.camelCase = c), rn;
}
var ln, _t;
function _i() {
  if (_t) return ln;
  _t = 1;
  var e =
      (ln && ln.__importDefault) ||
      function (i) {
        return i && i.__esModule ? i : { default: i };
      },
    n = e(Pi()),
    t = Li();
  function r(i, l) {
    var o = {};
    return (
      !i ||
        typeof i != "string" ||
        (0, n.default)(i, function (a, c) {
          a && c && (o[(0, t.camelCase)(a, l)] = c);
        }),
      o
    );
  }
  return (r.default = r), (ln = r), ln;
}
var zi = _i();
const Di = pr(zi),
  br = wr("end"),
  ot = wr("start");
function wr(e) {
  return n;
  function n(t) {
    const r = (t && t.position && t.position[e]) || {};
    if (
      typeof r.line == "number" &&
      r.line > 0 &&
      typeof r.column == "number" &&
      r.column > 0
    )
      return {
        line: r.line,
        column: r.column,
        offset:
          typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0,
      };
  }
}
function Oi(e) {
  const n = ot(e),
    t = br(e);
  if (n && t) return { start: n, end: t };
}
function sn(e) {
  return !e || typeof e != "object"
    ? ""
    : "position" in e || "type" in e
    ? zt(e.position)
    : "start" in e || "end" in e
    ? zt(e)
    : "line" in e || "column" in e
    ? Gn(e)
    : "";
}
function Gn(e) {
  return Dt(e && e.line) + ":" + Dt(e && e.column);
}
function zt(e) {
  return Gn(e && e.start) + "-" + Gn(e && e.end);
}
function Dt(e) {
  return e && typeof e == "number" ? e : 1;
}
class te extends Error {
  constructor(n, t, r) {
    super(), typeof t == "string" && ((r = t), (t = void 0));
    let i = "",
      l = {},
      o = !1;
    if (
      (t &&
        ("line" in t && "column" in t
          ? (l = { place: t })
          : "start" in t && "end" in t
          ? (l = { place: t })
          : "type" in t
          ? (l = { ancestors: [t], place: t.position })
          : (l = { ...t })),
      typeof n == "string"
        ? (i = n)
        : !l.cause && n && ((o = !0), (i = n.message), (l.cause = n)),
      !l.ruleId && !l.source && typeof r == "string")
    ) {
      const c = r.indexOf(":");
      c === -1
        ? (l.ruleId = r)
        : ((l.source = r.slice(0, c)), (l.ruleId = r.slice(c + 1)));
    }
    if (!l.place && l.ancestors && l.ancestors) {
      const c = l.ancestors[l.ancestors.length - 1];
      c && (l.place = c.position);
    }
    const a = l.place && "start" in l.place ? l.place.start : l.place;
    (this.ancestors = l.ancestors || void 0),
      (this.cause = l.cause || void 0),
      (this.column = a ? a.column : void 0),
      (this.fatal = void 0),
      (this.file = ""),
      (this.message = i),
      (this.line = a ? a.line : void 0),
      (this.name = sn(l.place) || "1:1"),
      (this.place = l.place || void 0),
      (this.reason = this.message),
      (this.ruleId = l.ruleId || void 0),
      (this.source = l.source || void 0),
      (this.stack =
        o && l.cause && typeof l.cause.stack == "string" ? l.cause.stack : ""),
      (this.actual = void 0),
      (this.expected = void 0),
      (this.note = void 0),
      (this.url = void 0);
  }
}
te.prototype.file = "";
te.prototype.name = "";
te.prototype.reason = "";
te.prototype.message = "";
te.prototype.stack = "";
te.prototype.column = void 0;
te.prototype.line = void 0;
te.prototype.ancestors = void 0;
te.prototype.cause = void 0;
te.prototype.fatal = void 0;
te.prototype.place = void 0;
te.prototype.ruleId = void 0;
te.prototype.source = void 0;
const at = {}.hasOwnProperty,
  Ri = new Map(),
  Fi = /[A-Z]/g,
  Mi = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
  Bi = new Set(["td", "th"]),
  kr = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function $i(e, n) {
  if (!n || n.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const t = n.filePath || void 0;
  let r;
  if (n.development) {
    if (typeof n.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = Xi(t, n.jsxDEV);
  } else {
    if (typeof n.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof n.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = Wi(t, n.jsx, n.jsxs);
  }
  const i = {
      Fragment: n.Fragment,
      ancestors: [],
      components: n.components || {},
      create: r,
      elementAttributeNameCase: n.elementAttributeNameCase || "react",
      evaluater: n.createEvaluater ? n.createEvaluater() : void 0,
      filePath: t,
      ignoreInvalidStyle: n.ignoreInvalidStyle || !1,
      passKeys: n.passKeys !== !1,
      passNode: n.passNode || !1,
      schema: n.space === "svg" ? lt : Ti,
      stylePropertyNameCase: n.stylePropertyNameCase || "dom",
      tableCellAlignToStyle: n.tableCellAlignToStyle !== !1,
    },
    l = Sr(i, e, void 0);
  return l && typeof l != "string"
    ? l
    : i.create(e, i.Fragment, { children: l || void 0 }, void 0);
}
function Sr(e, n, t) {
  if (n.type === "element") return Hi(e, n, t);
  if (n.type === "mdxFlowExpression" || n.type === "mdxTextExpression")
    return Ui(e, n);
  if (n.type === "mdxJsxFlowElement" || n.type === "mdxJsxTextElement")
    return qi(e, n, t);
  if (n.type === "mdxjsEsm") return Vi(e, n);
  if (n.type === "root") return Ki(e, n, t);
  if (n.type === "text") return Yi(e, n);
}
function Hi(e, n, t) {
  const r = e.schema;
  let i = r;
  n.tagName.toLowerCase() === "svg" &&
    r.space === "html" &&
    ((i = lt), (e.schema = i)),
    e.ancestors.push(n);
  const l = Er(e, n.tagName, !1),
    o = Qi(e, n);
  let a = ut(e, n);
  return (
    Mi.has(n.tagName) &&
      (a = a.filter(function (c) {
        return typeof c == "string" ? !yi(c) : !0;
      })),
    Cr(e, o, l, n),
    st(o, a),
    e.ancestors.pop(),
    (e.schema = r),
    e.create(n, l, o, t)
  );
}
function Ui(e, n) {
  if (n.data && n.data.estree && e.evaluater) {
    const r = n.data.estree.body[0];
    return r.type, e.evaluater.evaluateExpression(r.expression);
  }
  pn(e, n.position);
}
function Vi(e, n) {
  if (n.data && n.data.estree && e.evaluater)
    return e.evaluater.evaluateProgram(n.data.estree);
  pn(e, n.position);
}
function qi(e, n, t) {
  const r = e.schema;
  let i = r;
  n.name === "svg" && r.space === "html" && ((i = lt), (e.schema = i)),
    e.ancestors.push(n);
  const l = n.name === null ? e.Fragment : Er(e, n.name, !0),
    o = Gi(e, n),
    a = ut(e, n);
  return (
    Cr(e, o, l, n),
    st(o, a),
    e.ancestors.pop(),
    (e.schema = r),
    e.create(n, l, o, t)
  );
}
function Ki(e, n, t) {
  const r = {};
  return st(r, ut(e, n)), e.create(n, e.Fragment, r, t);
}
function Yi(e, n) {
  return n.value;
}
function Cr(e, n, t, r) {
  typeof t != "string" && t !== e.Fragment && e.passNode && (n.node = r);
}
function st(e, n) {
  if (n.length > 0) {
    const t = n.length > 1 ? n : n[0];
    t && (e.children = t);
  }
}
function Wi(e, n, t) {
  return r;
  function r(i, l, o, a) {
    const s = Array.isArray(o.children) ? t : n;
    return a ? s(l, o, a) : s(l, o);
  }
}
function Xi(e, n) {
  return t;
  function t(r, i, l, o) {
    const a = Array.isArray(l.children),
      c = ot(r);
    return n(
      i,
      l,
      o,
      a,
      {
        columnNumber: c ? c.column - 1 : void 0,
        fileName: e,
        lineNumber: c ? c.line : void 0,
      },
      void 0
    );
  }
}
function Qi(e, n) {
  const t = {};
  let r, i;
  for (i in n.properties)
    if (i !== "children" && at.call(n.properties, i)) {
      const l = Ji(e, i, n.properties[i]);
      if (l) {
        const [o, a] = l;
        e.tableCellAlignToStyle &&
        o === "align" &&
        typeof a == "string" &&
        Bi.has(n.tagName)
          ? (r = a)
          : (t[o] = a);
      }
    }
  if (r) {
    const l = t.style || (t.style = {});
    l[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return t;
}
function Gi(e, n) {
  const t = {};
  for (const r of n.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const l = r.data.estree.body[0];
        l.type;
        const o = l.expression;
        o.type;
        const a = o.properties[0];
        a.type, Object.assign(t, e.evaluater.evaluateExpression(a.argument));
      } else pn(e, n.position);
    else {
      const i = r.name;
      let l;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, (l = e.evaluater.evaluateExpression(a.expression));
        } else pn(e, n.position);
      else l = r.value === null ? !0 : r.value;
      t[i] = l;
    }
  return t;
}
function ut(e, n) {
  const t = [];
  let r = -1;
  const i = e.passKeys ? new Map() : Ri;
  for (; ++r < n.children.length; ) {
    const l = n.children[r];
    let o;
    if (e.passKeys) {
      const c =
        l.type === "element"
          ? l.tagName
          : l.type === "mdxJsxFlowElement" || l.type === "mdxJsxTextElement"
          ? l.name
          : void 0;
      if (c) {
        const s = i.get(c) || 0;
        (o = c + "-" + s), i.set(c, s + 1);
      }
    }
    const a = Sr(e, l, o);
    a !== void 0 && t.push(a);
  }
  return t;
}
function Ji(e, n, t) {
  const r = Ii(e.schema, n);
  if (!(t == null || (typeof t == "number" && Number.isNaN(t)))) {
    if (
      (Array.isArray(t) && (t = r.commaSeparated ? fi(t) : ji(t)),
      r.property === "style")
    ) {
      let i = typeof t == "object" ? t : Zi(e, String(t));
      return e.stylePropertyNameCase === "css" && (i = el(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space
        ? Si[r.property] || r.property
        : r.attribute,
      t,
    ];
  }
}
function Zi(e, n) {
  try {
    return Di(n, { reactCompat: !0 });
  } catch (t) {
    if (e.ignoreInvalidStyle) return {};
    const r = t,
      i = new te("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: r,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime",
      });
    throw (
      ((i.file = e.filePath || void 0),
      (i.url = kr + "#cannot-parse-style-attribute"),
      i)
    );
  }
}
function Er(e, n, t) {
  let r;
  if (!t) r = { type: "Literal", value: n };
  else if (n.includes(".")) {
    const i = n.split(".");
    let l = -1,
      o;
    for (; ++l < i.length; ) {
      const a = Nt(i[l])
        ? { type: "Identifier", name: i[l] }
        : { type: "Literal", value: i[l] };
      o = o
        ? {
            type: "MemberExpression",
            object: o,
            property: a,
            computed: !!(l && a.type === "Literal"),
            optional: !1,
          }
        : a;
    }
    r = o;
  } else
    r =
      Nt(n) && !/^[a-z]/.test(n)
        ? { type: "Identifier", name: n }
        : { type: "Literal", value: n };
  if (r.type === "Literal") {
    const i = r.value;
    return at.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater) return e.evaluater.evaluateExpression(r);
  pn(e);
}
function pn(e, n) {
  const t = new te("Cannot handle MDX estrees without `createEvaluater`", {
    ancestors: e.ancestors,
    place: n,
    ruleId: "mdx-estree",
    source: "hast-util-to-jsx-runtime",
  });
  throw (
    ((t.file = e.filePath || void 0),
    (t.url = kr + "#cannot-handle-mdx-estrees-without-createevaluater"),
    t)
  );
}
function el(e) {
  const n = {};
  let t;
  for (t in e) at.call(e, t) && (n[nl(t)] = e[t]);
  return n;
}
function nl(e) {
  let n = e.replace(Fi, tl);
  return n.slice(0, 3) === "ms-" && (n = "-" + n), n;
}
function tl(e) {
  return "-" + e.toLowerCase();
}
const Rn = {
    action: ["form"],
    cite: ["blockquote", "del", "ins", "q"],
    data: ["object"],
    formAction: ["button", "input"],
    href: ["a", "area", "base", "link"],
    icon: ["menuitem"],
    itemId: null,
    manifest: ["html"],
    ping: ["a", "area"],
    poster: ["video"],
    src: [
      "audio",
      "embed",
      "iframe",
      "img",
      "input",
      "script",
      "source",
      "track",
      "video",
    ],
  },
  rl = {};
function il(e, n) {
  const t = rl,
    r = typeof t.includeImageAlt == "boolean" ? t.includeImageAlt : !0,
    i = typeof t.includeHtml == "boolean" ? t.includeHtml : !0;
  return Ir(e, r, i);
}
function Ir(e, n, t) {
  if (ll(e)) {
    if ("value" in e) return e.type === "html" && !t ? "" : e.value;
    if (n && "alt" in e && e.alt) return e.alt;
    if ("children" in e) return Ot(e.children, n, t);
  }
  return Array.isArray(e) ? Ot(e, n, t) : "";
}
function Ot(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) r[i] = Ir(e[i], n, t);
  return r.join("");
}
function ll(e) {
  return !!(e && typeof e == "object");
}
const Rt = document.createElement("i");
function ct(e) {
  const n = "&" + e + ";";
  Rt.innerHTML = n;
  const t = Rt.textContent;
  return (t.charCodeAt(t.length - 1) === 59 && e !== "semi") || t === n
    ? !1
    : t;
}
function Ce(e, n, t, r) {
  const i = e.length;
  let l = 0,
    o;
  if (
    (n < 0 ? (n = -n > i ? 0 : i + n) : (n = n > i ? i : n),
    (t = t > 0 ? t : 0),
    r.length < 1e4)
  )
    (o = Array.from(r)), o.unshift(n, t), e.splice(...o);
  else
    for (t && e.splice(n, t); l < r.length; )
      (o = r.slice(l, l + 1e4)),
        o.unshift(n, 0),
        e.splice(...o),
        (l += 1e4),
        (n += 1e4);
}
function me(e, n) {
  return e.length > 0 ? (Ce(e, e.length, 0, n), e) : n;
}
const Ft = {}.hasOwnProperty;
function ol(e) {
  const n = {};
  let t = -1;
  for (; ++t < e.length; ) al(n, e[t]);
  return n;
}
function al(e, n) {
  let t;
  for (t in n) {
    const i = (Ft.call(e, t) ? e[t] : void 0) || (e[t] = {}),
      l = n[t];
    let o;
    if (l)
      for (o in l) {
        Ft.call(i, o) || (i[o] = []);
        const a = l[o];
        sl(i[o], Array.isArray(a) ? a : a ? [a] : []);
      }
  }
}
function sl(e, n) {
  let t = -1;
  const r = [];
  for (; ++t < n.length; ) (n[t].add === "after" ? e : r).push(n[t]);
  Ce(e, 0, 0, r);
}
function Nr(e, n) {
  const t = Number.parseInt(e, n);
  return t < 9 ||
    t === 11 ||
    (t > 13 && t < 32) ||
    (t > 126 && t < 160) ||
    (t > 55295 && t < 57344) ||
    (t > 64975 && t < 65008) ||
    (t & 65535) === 65535 ||
    (t & 65535) === 65534 ||
    t > 1114111
    ? "�"
    : String.fromCodePoint(t);
}
function Qe(e) {
  return e
    .replace(/[\t\n\r ]+/g, " ")
    .replace(/^ | $/g, "")
    .toLowerCase()
    .toUpperCase();
}
const Se = Re(/[A-Za-z]/),
  fe = Re(/[\dA-Za-z]/),
  ul = Re(/[#-'*+\--9=?A-Z^-~]/);
function Jn(e) {
  return e !== null && (e < 32 || e === 127);
}
const Zn = Re(/\d/),
  cl = Re(/[\dA-Fa-f]/),
  pl = Re(/[!-/:-@[-`{-~]/);
function D(e) {
  return e !== null && e < -2;
}
function se(e) {
  return e !== null && (e < 0 || e === 32);
}
function V(e) {
  return e === -2 || e === -1 || e === 32;
}
const hl = Re(new RegExp("\\p{P}|\\p{S}", "u")),
  fl = Re(/\s/);
function Re(e) {
  return n;
  function n(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
function Je(e) {
  const n = [];
  let t = -1,
    r = 0,
    i = 0;
  for (; ++t < e.length; ) {
    const l = e.charCodeAt(t);
    let o = "";
    if (l === 37 && fe(e.charCodeAt(t + 1)) && fe(e.charCodeAt(t + 2))) i = 2;
    else if (l < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) ||
        (o = String.fromCharCode(l));
    else if (l > 55295 && l < 57344) {
      const a = e.charCodeAt(t + 1);
      l < 56320 && a > 56319 && a < 57344
        ? ((o = String.fromCharCode(l, a)), (i = 1))
        : (o = "�");
    } else o = String.fromCharCode(l);
    o &&
      (n.push(e.slice(r, t), encodeURIComponent(o)), (r = t + i + 1), (o = "")),
      i && ((t += i), (i = 0));
  }
  return n.join("") + e.slice(r);
}
function G(e, n, t, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let l = 0;
  return o;
  function o(c) {
    return V(c) ? (e.enter(t), a(c)) : n(c);
  }
  function a(c) {
    return V(c) && l++ < i ? (e.consume(c), a) : (e.exit(t), n(c));
  }
}
const dl = { tokenize: ml };
function ml(e) {
  const n = e.attempt(this.parser.constructs.contentInitial, r, i);
  let t;
  return n;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return (
      e.enter("lineEnding"),
      e.consume(a),
      e.exit("lineEnding"),
      G(e, n, "linePrefix")
    );
  }
  function i(a) {
    return e.enter("paragraph"), l(a);
  }
  function l(a) {
    const c = e.enter("chunkText", { contentType: "text", previous: t });
    return t && (t.next = c), (t = c), o(a);
  }
  function o(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return D(a) ? (e.consume(a), e.exit("chunkText"), l) : (e.consume(a), o);
  }
}
const gl = { tokenize: xl },
  Mt = { tokenize: yl };
function xl(e) {
  const n = this,
    t = [];
  let r = 0,
    i,
    l,
    o;
  return a;
  function a(T) {
    if (r < t.length) {
      const q = t[r];
      return (n.containerState = q[1]), e.attempt(q[0].continuation, c, s)(T);
    }
    return s(T);
  }
  function c(T) {
    if ((r++, n.containerState._closeFlow)) {
      (n.containerState._closeFlow = void 0), i && _();
      const q = n.events.length;
      let $ = q,
        b;
      for (; $--; )
        if (n.events[$][0] === "exit" && n.events[$][1].type === "chunkFlow") {
          b = n.events[$][1].end;
          break;
        }
      w(r);
      let M = q;
      for (; M < n.events.length; ) (n.events[M][1].end = { ...b }), M++;
      return (
        Ce(n.events, $ + 1, 0, n.events.slice(q)), (n.events.length = M), s(T)
      );
    }
    return a(T);
  }
  function s(T) {
    if (r === t.length) {
      if (!i) return m(T);
      if (i.currentConstruct && i.currentConstruct.concrete) return E(T);
      n.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return (n.containerState = {}), e.check(Mt, u, p)(T);
  }
  function u(T) {
    return i && _(), w(r), m(T);
  }
  function p(T) {
    return (
      (n.parser.lazy[n.now().line] = r !== t.length), (o = n.now().offset), E(T)
    );
  }
  function m(T) {
    return (n.containerState = {}), e.attempt(Mt, h, E)(T);
  }
  function h(T) {
    return r++, t.push([n.currentConstruct, n.containerState]), m(T);
  }
  function E(T) {
    if (T === null) {
      i && _(), w(0), e.consume(T);
      return;
    }
    return (
      (i = i || n.parser.flow(n.now())),
      e.enter("chunkFlow", { _tokenizer: i, contentType: "flow", previous: l }),
      v(T)
    );
  }
  function v(T) {
    if (T === null) {
      I(e.exit("chunkFlow"), !0), w(0), e.consume(T);
      return;
    }
    return D(T)
      ? (e.consume(T),
        I(e.exit("chunkFlow")),
        (r = 0),
        (n.interrupt = void 0),
        a)
      : (e.consume(T), v);
  }
  function I(T, q) {
    const $ = n.sliceStream(T);
    if (
      (q && $.push(null),
      (T.previous = l),
      l && (l.next = T),
      (l = T),
      i.defineSkip(T.start),
      i.write($),
      n.parser.lazy[T.start.line])
    ) {
      let b = i.events.length;
      for (; b--; )
        if (
          i.events[b][1].start.offset < o &&
          (!i.events[b][1].end || i.events[b][1].end.offset > o)
        )
          return;
      const M = n.events.length;
      let W = M,
        B,
        K;
      for (; W--; )
        if (n.events[W][0] === "exit" && n.events[W][1].type === "chunkFlow") {
          if (B) {
            K = n.events[W][1].end;
            break;
          }
          B = !0;
        }
      for (w(r), b = M; b < n.events.length; )
        (n.events[b][1].end = { ...K }), b++;
      Ce(n.events, W + 1, 0, n.events.slice(M)), (n.events.length = b);
    }
  }
  function w(T) {
    let q = t.length;
    for (; q-- > T; ) {
      const $ = t[q];
      (n.containerState = $[1]), $[0].exit.call(n, e);
    }
    t.length = T;
  }
  function _() {
    i.write([null]),
      (l = void 0),
      (i = void 0),
      (n.containerState._closeFlow = void 0);
  }
}
function yl(e, n, t) {
  return G(
    e,
    e.attempt(this.parser.constructs.document, n, t),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function Bt(e) {
  if (e === null || se(e) || fl(e)) return 1;
  if (hl(e)) return 2;
}
function pt(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const l = e[i].resolveAll;
    l && !r.includes(l) && ((n = l(n, t)), r.push(l));
  }
  return n;
}
const et = { name: "attention", resolveAll: bl, tokenize: wl };
function bl(e, n) {
  let t = -1,
    r,
    i,
    l,
    o,
    a,
    c,
    s,
    u;
  for (; ++t < e.length; )
    if (
      e[t][0] === "enter" &&
      e[t][1].type === "attentionSequence" &&
      e[t][1]._close
    ) {
      for (r = t; r--; )
        if (
          e[r][0] === "exit" &&
          e[r][1].type === "attentionSequence" &&
          e[r][1]._open &&
          n.sliceSerialize(e[r][1]).charCodeAt(0) ===
            n.sliceSerialize(e[t][1]).charCodeAt(0)
        ) {
          if (
            (e[r][1]._close || e[t][1]._open) &&
            (e[t][1].end.offset - e[t][1].start.offset) % 3 &&
            !(
              (e[r][1].end.offset -
                e[r][1].start.offset +
                e[t][1].end.offset -
                e[t][1].start.offset) %
              3
            )
          )
            continue;
          c =
            e[r][1].end.offset - e[r][1].start.offset > 1 &&
            e[t][1].end.offset - e[t][1].start.offset > 1
              ? 2
              : 1;
          const p = { ...e[r][1].end },
            m = { ...e[t][1].start };
          $t(p, -c),
            $t(m, c),
            (o = {
              type: c > 1 ? "strongSequence" : "emphasisSequence",
              start: p,
              end: { ...e[r][1].end },
            }),
            (a = {
              type: c > 1 ? "strongSequence" : "emphasisSequence",
              start: { ...e[t][1].start },
              end: m,
            }),
            (l = {
              type: c > 1 ? "strongText" : "emphasisText",
              start: { ...e[r][1].end },
              end: { ...e[t][1].start },
            }),
            (i = {
              type: c > 1 ? "strong" : "emphasis",
              start: { ...o.start },
              end: { ...a.end },
            }),
            (e[r][1].end = { ...o.start }),
            (e[t][1].start = { ...a.end }),
            (s = []),
            e[r][1].end.offset - e[r][1].start.offset &&
              (s = me(s, [
                ["enter", e[r][1], n],
                ["exit", e[r][1], n],
              ])),
            (s = me(s, [
              ["enter", i, n],
              ["enter", o, n],
              ["exit", o, n],
              ["enter", l, n],
            ])),
            (s = me(
              s,
              pt(n.parser.constructs.insideSpan.null, e.slice(r + 1, t), n)
            )),
            (s = me(s, [
              ["exit", l, n],
              ["enter", a, n],
              ["exit", a, n],
              ["exit", i, n],
            ])),
            e[t][1].end.offset - e[t][1].start.offset
              ? ((u = 2),
                (s = me(s, [
                  ["enter", e[t][1], n],
                  ["exit", e[t][1], n],
                ])))
              : (u = 0),
            Ce(e, r - 1, t - r + 3, s),
            (t = r + s.length - u - 2);
          break;
        }
    }
  for (t = -1; ++t < e.length; )
    e[t][1].type === "attentionSequence" && (e[t][1].type = "data");
  return e;
}
function wl(e, n) {
  const t = this.parser.constructs.attentionMarkers.null,
    r = this.previous,
    i = Bt(r);
  let l;
  return o;
  function o(c) {
    return (l = c), e.enter("attentionSequence"), a(c);
  }
  function a(c) {
    if (c === l) return e.consume(c), a;
    const s = e.exit("attentionSequence"),
      u = Bt(c),
      p = !u || (u === 2 && i) || t.includes(c),
      m = !i || (i === 2 && u) || t.includes(r);
    return (
      (s._open = !!(l === 42 ? p : p && (i || !m))),
      (s._close = !!(l === 42 ? m : m && (u || !p))),
      n(c)
    );
  }
}
function $t(e, n) {
  (e.column += n), (e.offset += n), (e._bufferIndex += n);
}
const kl = { name: "autolink", tokenize: Sl };
function Sl(e, n, t) {
  let r = 0;
  return i;
  function i(h) {
    return (
      e.enter("autolink"),
      e.enter("autolinkMarker"),
      e.consume(h),
      e.exit("autolinkMarker"),
      e.enter("autolinkProtocol"),
      l
    );
  }
  function l(h) {
    return Se(h) ? (e.consume(h), o) : h === 64 ? t(h) : s(h);
  }
  function o(h) {
    return h === 43 || h === 45 || h === 46 || fe(h) ? ((r = 1), a(h)) : s(h);
  }
  function a(h) {
    return h === 58
      ? (e.consume(h), (r = 0), c)
      : (h === 43 || h === 45 || h === 46 || fe(h)) && r++ < 32
      ? (e.consume(h), a)
      : ((r = 0), s(h));
  }
  function c(h) {
    return h === 62
      ? (e.exit("autolinkProtocol"),
        e.enter("autolinkMarker"),
        e.consume(h),
        e.exit("autolinkMarker"),
        e.exit("autolink"),
        n)
      : h === null || h === 32 || h === 60 || Jn(h)
      ? t(h)
      : (e.consume(h), c);
  }
  function s(h) {
    return h === 64 ? (e.consume(h), u) : ul(h) ? (e.consume(h), s) : t(h);
  }
  function u(h) {
    return fe(h) ? p(h) : t(h);
  }
  function p(h) {
    return h === 46
      ? (e.consume(h), (r = 0), u)
      : h === 62
      ? ((e.exit("autolinkProtocol").type = "autolinkEmail"),
        e.enter("autolinkMarker"),
        e.consume(h),
        e.exit("autolinkMarker"),
        e.exit("autolink"),
        n)
      : m(h);
  }
  function m(h) {
    if ((h === 45 || fe(h)) && r++ < 63) {
      const E = h === 45 ? m : p;
      return e.consume(h), E;
    }
    return t(h);
  }
}
const En = { partial: !0, tokenize: Cl };
function Cl(e, n, t) {
  return r;
  function r(l) {
    return V(l) ? G(e, i, "linePrefix")(l) : i(l);
  }
  function i(l) {
    return l === null || D(l) ? n(l) : t(l);
  }
}
const vr = {
  continuation: { tokenize: Il },
  exit: Nl,
  name: "blockQuote",
  tokenize: El,
};
function El(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    if (o === 62) {
      const a = r.containerState;
      return (
        a.open || (e.enter("blockQuote", { _container: !0 }), (a.open = !0)),
        e.enter("blockQuotePrefix"),
        e.enter("blockQuoteMarker"),
        e.consume(o),
        e.exit("blockQuoteMarker"),
        l
      );
    }
    return t(o);
  }
  function l(o) {
    return V(o)
      ? (e.enter("blockQuotePrefixWhitespace"),
        e.consume(o),
        e.exit("blockQuotePrefixWhitespace"),
        e.exit("blockQuotePrefix"),
        n)
      : (e.exit("blockQuotePrefix"), n(o));
  }
}
function Il(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return V(o)
      ? G(
          e,
          l,
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )(o)
      : l(o);
  }
  function l(o) {
    return e.attempt(vr, n, t)(o);
  }
}
function Nl(e) {
  e.exit("blockQuote");
}
const Tr = { name: "characterEscape", tokenize: vl };
function vl(e, n, t) {
  return r;
  function r(l) {
    return (
      e.enter("characterEscape"),
      e.enter("escapeMarker"),
      e.consume(l),
      e.exit("escapeMarker"),
      i
    );
  }
  function i(l) {
    return pl(l)
      ? (e.enter("characterEscapeValue"),
        e.consume(l),
        e.exit("characterEscapeValue"),
        e.exit("characterEscape"),
        n)
      : t(l);
  }
}
const jr = { name: "characterReference", tokenize: Tl };
function Tl(e, n, t) {
  const r = this;
  let i = 0,
    l,
    o;
  return a;
  function a(p) {
    return (
      e.enter("characterReference"),
      e.enter("characterReferenceMarker"),
      e.consume(p),
      e.exit("characterReferenceMarker"),
      c
    );
  }
  function c(p) {
    return p === 35
      ? (e.enter("characterReferenceMarkerNumeric"),
        e.consume(p),
        e.exit("characterReferenceMarkerNumeric"),
        s)
      : (e.enter("characterReferenceValue"), (l = 31), (o = fe), u(p));
  }
  function s(p) {
    return p === 88 || p === 120
      ? (e.enter("characterReferenceMarkerHexadecimal"),
        e.consume(p),
        e.exit("characterReferenceMarkerHexadecimal"),
        e.enter("characterReferenceValue"),
        (l = 6),
        (o = cl),
        u)
      : (e.enter("characterReferenceValue"), (l = 7), (o = Zn), u(p));
  }
  function u(p) {
    if (p === 59 && i) {
      const m = e.exit("characterReferenceValue");
      return o === fe && !ct(r.sliceSerialize(m))
        ? t(p)
        : (e.enter("characterReferenceMarker"),
          e.consume(p),
          e.exit("characterReferenceMarker"),
          e.exit("characterReference"),
          n);
    }
    return o(p) && i++ < l ? (e.consume(p), u) : t(p);
  }
}
const Ht = { partial: !0, tokenize: Al },
  Ut = { concrete: !0, name: "codeFenced", tokenize: jl };
function jl(e, n, t) {
  const r = this,
    i = { partial: !0, tokenize: $ };
  let l = 0,
    o = 0,
    a;
  return c;
  function c(b) {
    return s(b);
  }
  function s(b) {
    const M = r.events[r.events.length - 1];
    return (
      (l =
        M && M[1].type === "linePrefix"
          ? M[2].sliceSerialize(M[1], !0).length
          : 0),
      (a = b),
      e.enter("codeFenced"),
      e.enter("codeFencedFence"),
      e.enter("codeFencedFenceSequence"),
      u(b)
    );
  }
  function u(b) {
    return b === a
      ? (o++, e.consume(b), u)
      : o < 3
      ? t(b)
      : (e.exit("codeFencedFenceSequence"),
        V(b) ? G(e, p, "whitespace")(b) : p(b));
  }
  function p(b) {
    return b === null || D(b)
      ? (e.exit("codeFencedFence"), r.interrupt ? n(b) : e.check(Ht, v, q)(b))
      : (e.enter("codeFencedFenceInfo"),
        e.enter("chunkString", { contentType: "string" }),
        m(b));
  }
  function m(b) {
    return b === null || D(b)
      ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), p(b))
      : V(b)
      ? (e.exit("chunkString"),
        e.exit("codeFencedFenceInfo"),
        G(e, h, "whitespace")(b))
      : b === 96 && b === a
      ? t(b)
      : (e.consume(b), m);
  }
  function h(b) {
    return b === null || D(b)
      ? p(b)
      : (e.enter("codeFencedFenceMeta"),
        e.enter("chunkString", { contentType: "string" }),
        E(b));
  }
  function E(b) {
    return b === null || D(b)
      ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), p(b))
      : b === 96 && b === a
      ? t(b)
      : (e.consume(b), E);
  }
  function v(b) {
    return e.attempt(i, q, I)(b);
  }
  function I(b) {
    return e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), w;
  }
  function w(b) {
    return l > 0 && V(b) ? G(e, _, "linePrefix", l + 1)(b) : _(b);
  }
  function _(b) {
    return b === null || D(b)
      ? e.check(Ht, v, q)(b)
      : (e.enter("codeFlowValue"), T(b));
  }
  function T(b) {
    return b === null || D(b)
      ? (e.exit("codeFlowValue"), _(b))
      : (e.consume(b), T);
  }
  function q(b) {
    return e.exit("codeFenced"), n(b);
  }
  function $(b, M, W) {
    let B = 0;
    return K;
    function K(N) {
      return b.enter("lineEnding"), b.consume(N), b.exit("lineEnding"), A;
    }
    function A(N) {
      return (
        b.enter("codeFencedFence"),
        V(N)
          ? G(
              b,
              P,
              "linePrefix",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            )(N)
          : P(N)
      );
    }
    function P(N) {
      return N === a ? (b.enter("codeFencedFenceSequence"), Y(N)) : W(N);
    }
    function Y(N) {
      return N === a
        ? (B++, b.consume(N), Y)
        : B >= o
        ? (b.exit("codeFencedFenceSequence"),
          V(N) ? G(b, L, "whitespace")(N) : L(N))
        : W(N);
    }
    function L(N) {
      return N === null || D(N) ? (b.exit("codeFencedFence"), M(N)) : W(N);
    }
  }
}
function Al(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return o === null
      ? t(o)
      : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? t(o) : n(o);
  }
}
const Fn = { name: "codeIndented", tokenize: Ll },
  Pl = { partial: !0, tokenize: _l };
function Ll(e, n, t) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("codeIndented"), G(e, l, "linePrefix", 5)(s);
  }
  function l(s) {
    const u = r.events[r.events.length - 1];
    return u &&
      u[1].type === "linePrefix" &&
      u[2].sliceSerialize(u[1], !0).length >= 4
      ? o(s)
      : t(s);
  }
  function o(s) {
    return s === null
      ? c(s)
      : D(s)
      ? e.attempt(Pl, o, c)(s)
      : (e.enter("codeFlowValue"), a(s));
  }
  function a(s) {
    return s === null || D(s)
      ? (e.exit("codeFlowValue"), o(s))
      : (e.consume(s), a);
  }
  function c(s) {
    return e.exit("codeIndented"), n(s);
  }
}
function _l(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line]
      ? t(o)
      : D(o)
      ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i)
      : G(e, l, "linePrefix", 5)(o);
  }
  function l(o) {
    const a = r.events[r.events.length - 1];
    return a &&
      a[1].type === "linePrefix" &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? n(o)
      : D(o)
      ? i(o)
      : t(o);
  }
}
const zl = { name: "codeText", previous: Ol, resolve: Dl, tokenize: Rl };
function Dl(e) {
  let n = e.length - 4,
    t = 3,
    r,
    i;
  if (
    (e[t][1].type === "lineEnding" || e[t][1].type === "space") &&
    (e[n][1].type === "lineEnding" || e[n][1].type === "space")
  ) {
    for (r = t; ++r < n; )
      if (e[r][1].type === "codeTextData") {
        (e[t][1].type = "codeTextPadding"),
          (e[n][1].type = "codeTextPadding"),
          (t += 2),
          (n -= 2);
        break;
      }
  }
  for (r = t - 1, n++; ++r <= n; )
    i === void 0
      ? r !== n && e[r][1].type !== "lineEnding" && (i = r)
      : (r === n || e[r][1].type === "lineEnding") &&
        ((e[i][1].type = "codeTextData"),
        r !== i + 2 &&
          ((e[i][1].end = e[r - 1][1].end),
          e.splice(i + 2, r - i - 2),
          (n -= r - i - 2),
          (r = i + 2)),
        (i = void 0));
  return e;
}
function Ol(e) {
  return (
    e !== 96 ||
    this.events[this.events.length - 1][1].type === "characterEscape"
  );
}
function Rl(e, n, t) {
  let r = 0,
    i,
    l;
  return o;
  function o(p) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(p);
  }
  function a(p) {
    return p === 96
      ? (e.consume(p), r++, a)
      : (e.exit("codeTextSequence"), c(p));
  }
  function c(p) {
    return p === null
      ? t(p)
      : p === 32
      ? (e.enter("space"), e.consume(p), e.exit("space"), c)
      : p === 96
      ? ((l = e.enter("codeTextSequence")), (i = 0), u(p))
      : D(p)
      ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), c)
      : (e.enter("codeTextData"), s(p));
  }
  function s(p) {
    return p === null || p === 32 || p === 96 || D(p)
      ? (e.exit("codeTextData"), c(p))
      : (e.consume(p), s);
  }
  function u(p) {
    return p === 96
      ? (e.consume(p), i++, u)
      : i === r
      ? (e.exit("codeTextSequence"), e.exit("codeText"), n(p))
      : ((l.type = "codeTextData"), s(p));
  }
}
class Fl {
  constructor(n) {
    (this.left = n ? [...n] : []), (this.right = []);
  }
  get(n) {
    if (n < 0 || n >= this.left.length + this.right.length)
      throw new RangeError(
        "Cannot access index `" +
          n +
          "` in a splice buffer of size `" +
          (this.left.length + this.right.length) +
          "`"
      );
    return n < this.left.length
      ? this.left[n]
      : this.right[this.right.length - n + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  slice(n, t) {
    const r = t ?? Number.POSITIVE_INFINITY;
    return r < this.left.length
      ? this.left.slice(n, r)
      : n > this.left.length
      ? this.right
          .slice(
            this.right.length - r + this.left.length,
            this.right.length - n + this.left.length
          )
          .reverse()
      : this.left
          .slice(n)
          .concat(
            this.right.slice(this.right.length - r + this.left.length).reverse()
          );
  }
  splice(n, t, r) {
    const i = t || 0;
    this.setCursor(Math.trunc(n));
    const l = this.right.splice(
      this.right.length - i,
      Number.POSITIVE_INFINITY
    );
    return r && on(this.left, r), l.reverse();
  }
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  push(n) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(n);
  }
  pushMany(n) {
    this.setCursor(Number.POSITIVE_INFINITY), on(this.left, n);
  }
  unshift(n) {
    this.setCursor(0), this.right.push(n);
  }
  unshiftMany(n) {
    this.setCursor(0), on(this.right, n.reverse());
  }
  setCursor(n) {
    if (
      !(
        n === this.left.length ||
        (n > this.left.length && this.right.length === 0) ||
        (n < 0 && this.left.length === 0)
      )
    )
      if (n < this.left.length) {
        const t = this.left.splice(n, Number.POSITIVE_INFINITY);
        on(this.right, t.reverse());
      } else {
        const t = this.right.splice(
          this.left.length + this.right.length - n,
          Number.POSITIVE_INFINITY
        );
        on(this.left, t.reverse());
      }
  }
}
function on(e, n) {
  let t = 0;
  if (n.length < 1e4) e.push(...n);
  else for (; t < n.length; ) e.push(...n.slice(t, t + 1e4)), (t += 1e4);
}
function Ar(e) {
  const n = {};
  let t = -1,
    r,
    i,
    l,
    o,
    a,
    c,
    s;
  const u = new Fl(e);
  for (; ++t < u.length; ) {
    for (; t in n; ) t = n[t];
    if (
      ((r = u.get(t)),
      t &&
        r[1].type === "chunkFlow" &&
        u.get(t - 1)[1].type === "listItemPrefix" &&
        ((c = r[1]._tokenizer.events),
        (l = 0),
        l < c.length && c[l][1].type === "lineEndingBlank" && (l += 2),
        l < c.length && c[l][1].type === "content"))
    )
      for (; ++l < c.length && c[l][1].type !== "content"; )
        c[l][1].type === "chunkText" &&
          ((c[l][1]._isInFirstContentOfListItem = !0), l++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(n, Ml(u, t)), (t = n[t]), (s = !0));
    else if (r[1]._container) {
      for (l = t, i = void 0; l--; )
        if (
          ((o = u.get(l)),
          o[1].type === "lineEnding" || o[1].type === "lineEndingBlank")
        )
          o[0] === "enter" &&
            (i && (u.get(i)[1].type = "lineEndingBlank"),
            (o[1].type = "lineEnding"),
            (i = l));
        else if (
          !(o[1].type === "linePrefix" || o[1].type === "listItemIndent")
        )
          break;
      i &&
        ((r[1].end = { ...u.get(i)[1].start }),
        (a = u.slice(i, t)),
        a.unshift(r),
        u.splice(i, t - i + 1, a));
    }
  }
  return Ce(e, 0, Number.POSITIVE_INFINITY, u.slice(0)), !s;
}
function Ml(e, n) {
  const t = e.get(n)[1],
    r = e.get(n)[2];
  let i = n - 1;
  const l = [];
  let o = t._tokenizer;
  o ||
    ((o = r.parser[t.contentType](t.start)),
    t._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
  const a = o.events,
    c = [],
    s = {};
  let u,
    p,
    m = -1,
    h = t,
    E = 0,
    v = 0;
  const I = [v];
  for (; h; ) {
    for (; e.get(++i)[1] !== h; );
    l.push(i),
      h._tokenizer ||
        ((u = r.sliceStream(h)),
        h.next || u.push(null),
        p && o.defineSkip(h.start),
        h._isInFirstContentOfListItem &&
          (o._gfmTasklistFirstContentOfListItem = !0),
        o.write(u),
        h._isInFirstContentOfListItem &&
          (o._gfmTasklistFirstContentOfListItem = void 0)),
      (p = h),
      (h = h.next);
  }
  for (h = t; ++m < a.length; )
    a[m][0] === "exit" &&
      a[m - 1][0] === "enter" &&
      a[m][1].type === a[m - 1][1].type &&
      a[m][1].start.line !== a[m][1].end.line &&
      ((v = m + 1),
      I.push(v),
      (h._tokenizer = void 0),
      (h.previous = void 0),
      (h = h.next));
  for (
    o.events = [],
      h ? ((h._tokenizer = void 0), (h.previous = void 0)) : I.pop(),
      m = I.length;
    m--;

  ) {
    const w = a.slice(I[m], I[m + 1]),
      _ = l.pop();
    c.push([_, _ + w.length - 1]), e.splice(_, 2, w);
  }
  for (c.reverse(), m = -1; ++m < c.length; )
    (s[E + c[m][0]] = E + c[m][1]), (E += c[m][1] - c[m][0] - 1);
  return s;
}
const Bl = { resolve: Hl, tokenize: Ul },
  $l = { partial: !0, tokenize: Vl };
function Hl(e) {
  return Ar(e), e;
}
function Ul(e, n) {
  let t;
  return r;
  function r(a) {
    return (
      e.enter("content"),
      (t = e.enter("chunkContent", { contentType: "content" })),
      i(a)
    );
  }
  function i(a) {
    return a === null ? l(a) : D(a) ? e.check($l, o, l)(a) : (e.consume(a), i);
  }
  function l(a) {
    return e.exit("chunkContent"), e.exit("content"), n(a);
  }
  function o(a) {
    return (
      e.consume(a),
      e.exit("chunkContent"),
      (t.next = e.enter("chunkContent", {
        contentType: "content",
        previous: t,
      })),
      (t = t.next),
      i
    );
  }
}
function Vl(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return (
      e.exit("chunkContent"),
      e.enter("lineEnding"),
      e.consume(o),
      e.exit("lineEnding"),
      G(e, l, "linePrefix")
    );
  }
  function l(o) {
    if (o === null || D(o)) return t(o);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") &&
      a &&
      a[1].type === "linePrefix" &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? n(o)
      : e.interrupt(r.parser.constructs.flow, t, n)(o);
  }
}
function Pr(e, n, t, r, i, l, o, a, c) {
  const s = c || Number.POSITIVE_INFINITY;
  let u = 0;
  return p;
  function p(w) {
    return w === 60
      ? (e.enter(r), e.enter(i), e.enter(l), e.consume(w), e.exit(l), m)
      : w === null || w === 32 || w === 41 || Jn(w)
      ? t(w)
      : (e.enter(r),
        e.enter(o),
        e.enter(a),
        e.enter("chunkString", { contentType: "string" }),
        v(w));
  }
  function m(w) {
    return w === 62
      ? (e.enter(l), e.consume(w), e.exit(l), e.exit(i), e.exit(r), n)
      : (e.enter(a), e.enter("chunkString", { contentType: "string" }), h(w));
  }
  function h(w) {
    return w === 62
      ? (e.exit("chunkString"), e.exit(a), m(w))
      : w === null || w === 60 || D(w)
      ? t(w)
      : (e.consume(w), w === 92 ? E : h);
  }
  function E(w) {
    return w === 60 || w === 62 || w === 92 ? (e.consume(w), h) : h(w);
  }
  function v(w) {
    return !u && (w === null || w === 41 || se(w))
      ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), n(w))
      : u < s && w === 40
      ? (e.consume(w), u++, v)
      : w === 41
      ? (e.consume(w), u--, v)
      : w === null || w === 32 || w === 40 || Jn(w)
      ? t(w)
      : (e.consume(w), w === 92 ? I : v);
  }
  function I(w) {
    return w === 40 || w === 41 || w === 92 ? (e.consume(w), v) : v(w);
  }
}
function Lr(e, n, t, r, i, l) {
  const o = this;
  let a = 0,
    c;
  return s;
  function s(h) {
    return e.enter(r), e.enter(i), e.consume(h), e.exit(i), e.enter(l), u;
  }
  function u(h) {
    return a > 999 ||
      h === null ||
      h === 91 ||
      (h === 93 && !c) ||
      (h === 94 && !a && "_hiddenFootnoteSupport" in o.parser.constructs)
      ? t(h)
      : h === 93
      ? (e.exit(l), e.enter(i), e.consume(h), e.exit(i), e.exit(r), n)
      : D(h)
      ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), u)
      : (e.enter("chunkString", { contentType: "string" }), p(h));
  }
  function p(h) {
    return h === null || h === 91 || h === 93 || D(h) || a++ > 999
      ? (e.exit("chunkString"), u(h))
      : (e.consume(h), c || (c = !V(h)), h === 92 ? m : p);
  }
  function m(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), a++, p) : p(h);
  }
}
function _r(e, n, t, r, i, l) {
  let o;
  return a;
  function a(m) {
    return m === 34 || m === 39 || m === 40
      ? (e.enter(r),
        e.enter(i),
        e.consume(m),
        e.exit(i),
        (o = m === 40 ? 41 : m),
        c)
      : t(m);
  }
  function c(m) {
    return m === o
      ? (e.enter(i), e.consume(m), e.exit(i), e.exit(r), n)
      : (e.enter(l), s(m));
  }
  function s(m) {
    return m === o
      ? (e.exit(l), c(o))
      : m === null
      ? t(m)
      : D(m)
      ? (e.enter("lineEnding"),
        e.consume(m),
        e.exit("lineEnding"),
        G(e, s, "linePrefix"))
      : (e.enter("chunkString", { contentType: "string" }), u(m));
  }
  function u(m) {
    return m === o || m === null || D(m)
      ? (e.exit("chunkString"), s(m))
      : (e.consume(m), m === 92 ? p : u);
  }
  function p(m) {
    return m === o || m === 92 ? (e.consume(m), u) : u(m);
  }
}
function un(e, n) {
  let t;
  return r;
  function r(i) {
    return D(i)
      ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), (t = !0), r)
      : V(i)
      ? G(e, r, t ? "linePrefix" : "lineSuffix")(i)
      : n(i);
  }
}
const ql = { name: "definition", tokenize: Yl },
  Kl = { partial: !0, tokenize: Wl };
function Yl(e, n, t) {
  const r = this;
  let i;
  return l;
  function l(h) {
    return e.enter("definition"), o(h);
  }
  function o(h) {
    return Lr.call(
      r,
      e,
      a,
      t,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(h);
  }
  function a(h) {
    return (
      (i = Qe(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))),
      h === 58
        ? (e.enter("definitionMarker"),
          e.consume(h),
          e.exit("definitionMarker"),
          c)
        : t(h)
    );
  }
  function c(h) {
    return se(h) ? un(e, s)(h) : s(h);
  }
  function s(h) {
    return Pr(
      e,
      u,
      t,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(h);
  }
  function u(h) {
    return e.attempt(Kl, p, p)(h);
  }
  function p(h) {
    return V(h) ? G(e, m, "whitespace")(h) : m(h);
  }
  function m(h) {
    return h === null || D(h)
      ? (e.exit("definition"), r.parser.defined.push(i), n(h))
      : t(h);
  }
}
function Wl(e, n, t) {
  return r;
  function r(a) {
    return se(a) ? un(e, i)(a) : t(a);
  }
  function i(a) {
    return _r(
      e,
      l,
      t,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(a);
  }
  function l(a) {
    return V(a) ? G(e, o, "whitespace")(a) : o(a);
  }
  function o(a) {
    return a === null || D(a) ? n(a) : t(a);
  }
}
const Xl = { name: "hardBreakEscape", tokenize: Ql };
function Ql(e, n, t) {
  return r;
  function r(l) {
    return e.enter("hardBreakEscape"), e.consume(l), i;
  }
  function i(l) {
    return D(l) ? (e.exit("hardBreakEscape"), n(l)) : t(l);
  }
}
const Gl = { name: "headingAtx", resolve: Jl, tokenize: Zl };
function Jl(e, n) {
  let t = e.length - 2,
    r = 3,
    i,
    l;
  return (
    e[r][1].type === "whitespace" && (r += 2),
    t - 2 > r && e[t][1].type === "whitespace" && (t -= 2),
    e[t][1].type === "atxHeadingSequence" &&
      (r === t - 1 || (t - 4 > r && e[t - 2][1].type === "whitespace")) &&
      (t -= r + 1 === t ? 2 : 4),
    t > r &&
      ((i = { type: "atxHeadingText", start: e[r][1].start, end: e[t][1].end }),
      (l = {
        type: "chunkText",
        start: e[r][1].start,
        end: e[t][1].end,
        contentType: "text",
      }),
      Ce(e, r, t - r + 1, [
        ["enter", i, n],
        ["enter", l, n],
        ["exit", l, n],
        ["exit", i, n],
      ])),
    e
  );
}
function Zl(e, n, t) {
  let r = 0;
  return i;
  function i(u) {
    return e.enter("atxHeading"), l(u);
  }
  function l(u) {
    return e.enter("atxHeadingSequence"), o(u);
  }
  function o(u) {
    return u === 35 && r++ < 6
      ? (e.consume(u), o)
      : u === null || se(u)
      ? (e.exit("atxHeadingSequence"), a(u))
      : t(u);
  }
  function a(u) {
    return u === 35
      ? (e.enter("atxHeadingSequence"), c(u))
      : u === null || D(u)
      ? (e.exit("atxHeading"), n(u))
      : V(u)
      ? G(e, a, "whitespace")(u)
      : (e.enter("atxHeadingText"), s(u));
  }
  function c(u) {
    return u === 35 ? (e.consume(u), c) : (e.exit("atxHeadingSequence"), a(u));
  }
  function s(u) {
    return u === null || u === 35 || se(u)
      ? (e.exit("atxHeadingText"), a(u))
      : (e.consume(u), s);
  }
}
const eo = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul",
  ],
  Vt = ["pre", "script", "style", "textarea"],
  no = { concrete: !0, name: "htmlFlow", resolveTo: io, tokenize: lo },
  to = { partial: !0, tokenize: ao },
  ro = { partial: !0, tokenize: oo };
function io(e) {
  let n = e.length;
  for (; n-- && !(e[n][0] === "enter" && e[n][1].type === "htmlFlow"); );
  return (
    n > 1 &&
      e[n - 2][1].type === "linePrefix" &&
      ((e[n][1].start = e[n - 2][1].start),
      (e[n + 1][1].start = e[n - 2][1].start),
      e.splice(n - 2, 2)),
    e
  );
}
function lo(e, n, t) {
  const r = this;
  let i, l, o, a, c;
  return s;
  function s(d) {
    return u(d);
  }
  function u(d) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(d), p;
  }
  function p(d) {
    return d === 33
      ? (e.consume(d), m)
      : d === 47
      ? (e.consume(d), (l = !0), v)
      : d === 63
      ? (e.consume(d), (i = 3), r.interrupt ? n : f)
      : Se(d)
      ? (e.consume(d), (o = String.fromCharCode(d)), I)
      : t(d);
  }
  function m(d) {
    return d === 45
      ? (e.consume(d), (i = 2), h)
      : d === 91
      ? (e.consume(d), (i = 5), (a = 0), E)
      : Se(d)
      ? (e.consume(d), (i = 4), r.interrupt ? n : f)
      : t(d);
  }
  function h(d) {
    return d === 45 ? (e.consume(d), r.interrupt ? n : f) : t(d);
  }
  function E(d) {
    const le = "CDATA[";
    return d === le.charCodeAt(a++)
      ? (e.consume(d), a === le.length ? (r.interrupt ? n : P) : E)
      : t(d);
  }
  function v(d) {
    return Se(d) ? (e.consume(d), (o = String.fromCharCode(d)), I) : t(d);
  }
  function I(d) {
    if (d === null || d === 47 || d === 62 || se(d)) {
      const le = d === 47,
        xe = o.toLowerCase();
      return !le && !l && Vt.includes(xe)
        ? ((i = 1), r.interrupt ? n(d) : P(d))
        : eo.includes(o.toLowerCase())
        ? ((i = 6), le ? (e.consume(d), w) : r.interrupt ? n(d) : P(d))
        : ((i = 7),
          r.interrupt && !r.parser.lazy[r.now().line] ? t(d) : l ? _(d) : T(d));
    }
    return d === 45 || fe(d)
      ? (e.consume(d), (o += String.fromCharCode(d)), I)
      : t(d);
  }
  function w(d) {
    return d === 62 ? (e.consume(d), r.interrupt ? n : P) : t(d);
  }
  function _(d) {
    return V(d) ? (e.consume(d), _) : K(d);
  }
  function T(d) {
    return d === 47
      ? (e.consume(d), K)
      : d === 58 || d === 95 || Se(d)
      ? (e.consume(d), q)
      : V(d)
      ? (e.consume(d), T)
      : K(d);
  }
  function q(d) {
    return d === 45 || d === 46 || d === 58 || d === 95 || fe(d)
      ? (e.consume(d), q)
      : $(d);
  }
  function $(d) {
    return d === 61 ? (e.consume(d), b) : V(d) ? (e.consume(d), $) : T(d);
  }
  function b(d) {
    return d === null || d === 60 || d === 61 || d === 62 || d === 96
      ? t(d)
      : d === 34 || d === 39
      ? (e.consume(d), (c = d), M)
      : V(d)
      ? (e.consume(d), b)
      : W(d);
  }
  function M(d) {
    return d === c
      ? (e.consume(d), (c = null), B)
      : d === null || D(d)
      ? t(d)
      : (e.consume(d), M);
  }
  function W(d) {
    return d === null ||
      d === 34 ||
      d === 39 ||
      d === 47 ||
      d === 60 ||
      d === 61 ||
      d === 62 ||
      d === 96 ||
      se(d)
      ? $(d)
      : (e.consume(d), W);
  }
  function B(d) {
    return d === 47 || d === 62 || V(d) ? T(d) : t(d);
  }
  function K(d) {
    return d === 62 ? (e.consume(d), A) : t(d);
  }
  function A(d) {
    return d === null || D(d) ? P(d) : V(d) ? (e.consume(d), A) : t(d);
  }
  function P(d) {
    return d === 45 && i === 2
      ? (e.consume(d), H)
      : d === 60 && i === 1
      ? (e.consume(d), J)
      : d === 62 && i === 4
      ? (e.consume(d), ne)
      : d === 63 && i === 3
      ? (e.consume(d), f)
      : d === 93 && i === 5
      ? (e.consume(d), ge)
      : D(d) && (i === 6 || i === 7)
      ? (e.exit("htmlFlowData"), e.check(to, ce, Y)(d))
      : d === null || D(d)
      ? (e.exit("htmlFlowData"), Y(d))
      : (e.consume(d), P);
  }
  function Y(d) {
    return e.check(ro, L, ce)(d);
  }
  function L(d) {
    return e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), N;
  }
  function N(d) {
    return d === null || D(d) ? Y(d) : (e.enter("htmlFlowData"), P(d));
  }
  function H(d) {
    return d === 45 ? (e.consume(d), f) : P(d);
  }
  function J(d) {
    return d === 47 ? (e.consume(d), (o = ""), ie) : P(d);
  }
  function ie(d) {
    if (d === 62) {
      const le = o.toLowerCase();
      return Vt.includes(le) ? (e.consume(d), ne) : P(d);
    }
    return Se(d) && o.length < 8
      ? (e.consume(d), (o += String.fromCharCode(d)), ie)
      : P(d);
  }
  function ge(d) {
    return d === 93 ? (e.consume(d), f) : P(d);
  }
  function f(d) {
    return d === 62
      ? (e.consume(d), ne)
      : d === 45 && i === 2
      ? (e.consume(d), f)
      : P(d);
  }
  function ne(d) {
    return d === null || D(d)
      ? (e.exit("htmlFlowData"), ce(d))
      : (e.consume(d), ne);
  }
  function ce(d) {
    return e.exit("htmlFlow"), n(d);
  }
}
function oo(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return D(o)
      ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l)
      : t(o);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? t(o) : n(o);
  }
}
function ao(e, n, t) {
  return r;
  function r(i) {
    return (
      e.enter("lineEnding"),
      e.consume(i),
      e.exit("lineEnding"),
      e.attempt(En, n, t)
    );
  }
}
const so = { name: "htmlText", tokenize: uo };
function uo(e, n, t) {
  const r = this;
  let i, l, o;
  return a;
  function a(f) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(f), c;
  }
  function c(f) {
    return f === 33
      ? (e.consume(f), s)
      : f === 47
      ? (e.consume(f), $)
      : f === 63
      ? (e.consume(f), T)
      : Se(f)
      ? (e.consume(f), W)
      : t(f);
  }
  function s(f) {
    return f === 45
      ? (e.consume(f), u)
      : f === 91
      ? (e.consume(f), (l = 0), E)
      : Se(f)
      ? (e.consume(f), _)
      : t(f);
  }
  function u(f) {
    return f === 45 ? (e.consume(f), h) : t(f);
  }
  function p(f) {
    return f === null
      ? t(f)
      : f === 45
      ? (e.consume(f), m)
      : D(f)
      ? ((o = p), J(f))
      : (e.consume(f), p);
  }
  function m(f) {
    return f === 45 ? (e.consume(f), h) : p(f);
  }
  function h(f) {
    return f === 62 ? H(f) : f === 45 ? m(f) : p(f);
  }
  function E(f) {
    const ne = "CDATA[";
    return f === ne.charCodeAt(l++)
      ? (e.consume(f), l === ne.length ? v : E)
      : t(f);
  }
  function v(f) {
    return f === null
      ? t(f)
      : f === 93
      ? (e.consume(f), I)
      : D(f)
      ? ((o = v), J(f))
      : (e.consume(f), v);
  }
  function I(f) {
    return f === 93 ? (e.consume(f), w) : v(f);
  }
  function w(f) {
    return f === 62 ? H(f) : f === 93 ? (e.consume(f), w) : v(f);
  }
  function _(f) {
    return f === null || f === 62
      ? H(f)
      : D(f)
      ? ((o = _), J(f))
      : (e.consume(f), _);
  }
  function T(f) {
    return f === null
      ? t(f)
      : f === 63
      ? (e.consume(f), q)
      : D(f)
      ? ((o = T), J(f))
      : (e.consume(f), T);
  }
  function q(f) {
    return f === 62 ? H(f) : T(f);
  }
  function $(f) {
    return Se(f) ? (e.consume(f), b) : t(f);
  }
  function b(f) {
    return f === 45 || fe(f) ? (e.consume(f), b) : M(f);
  }
  function M(f) {
    return D(f) ? ((o = M), J(f)) : V(f) ? (e.consume(f), M) : H(f);
  }
  function W(f) {
    return f === 45 || fe(f)
      ? (e.consume(f), W)
      : f === 47 || f === 62 || se(f)
      ? B(f)
      : t(f);
  }
  function B(f) {
    return f === 47
      ? (e.consume(f), H)
      : f === 58 || f === 95 || Se(f)
      ? (e.consume(f), K)
      : D(f)
      ? ((o = B), J(f))
      : V(f)
      ? (e.consume(f), B)
      : H(f);
  }
  function K(f) {
    return f === 45 || f === 46 || f === 58 || f === 95 || fe(f)
      ? (e.consume(f), K)
      : A(f);
  }
  function A(f) {
    return f === 61
      ? (e.consume(f), P)
      : D(f)
      ? ((o = A), J(f))
      : V(f)
      ? (e.consume(f), A)
      : B(f);
  }
  function P(f) {
    return f === null || f === 60 || f === 61 || f === 62 || f === 96
      ? t(f)
      : f === 34 || f === 39
      ? (e.consume(f), (i = f), Y)
      : D(f)
      ? ((o = P), J(f))
      : V(f)
      ? (e.consume(f), P)
      : (e.consume(f), L);
  }
  function Y(f) {
    return f === i
      ? (e.consume(f), (i = void 0), N)
      : f === null
      ? t(f)
      : D(f)
      ? ((o = Y), J(f))
      : (e.consume(f), Y);
  }
  function L(f) {
    return f === null ||
      f === 34 ||
      f === 39 ||
      f === 60 ||
      f === 61 ||
      f === 96
      ? t(f)
      : f === 47 || f === 62 || se(f)
      ? B(f)
      : (e.consume(f), L);
  }
  function N(f) {
    return f === 47 || f === 62 || se(f) ? B(f) : t(f);
  }
  function H(f) {
    return f === 62
      ? (e.consume(f), e.exit("htmlTextData"), e.exit("htmlText"), n)
      : t(f);
  }
  function J(f) {
    return (
      e.exit("htmlTextData"),
      e.enter("lineEnding"),
      e.consume(f),
      e.exit("lineEnding"),
      ie
    );
  }
  function ie(f) {
    return V(f)
      ? G(
          e,
          ge,
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )(f)
      : ge(f);
  }
  function ge(f) {
    return e.enter("htmlTextData"), o(f);
  }
}
const ht = { name: "labelEnd", resolveAll: fo, resolveTo: mo, tokenize: go },
  co = { tokenize: xo },
  po = { tokenize: yo },
  ho = { tokenize: bo };
function fo(e) {
  let n = -1;
  const t = [];
  for (; ++n < e.length; ) {
    const r = e[n][1];
    if (
      (t.push(e[n]),
      r.type === "labelImage" ||
        r.type === "labelLink" ||
        r.type === "labelEnd")
    ) {
      const i = r.type === "labelImage" ? 4 : 2;
      (r.type = "data"), (n += i);
    }
  }
  return e.length !== t.length && Ce(e, 0, e.length, t), e;
}
function mo(e, n) {
  let t = e.length,
    r = 0,
    i,
    l,
    o,
    a;
  for (; t--; )
    if (((i = e[t][1]), l)) {
      if (i.type === "link" || (i.type === "labelLink" && i._inactive)) break;
      e[t][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (o) {
      if (
        e[t][0] === "enter" &&
        (i.type === "labelImage" || i.type === "labelLink") &&
        !i._balanced &&
        ((l = t), i.type !== "labelLink")
      ) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (o = t);
  const c = {
      type: e[l][1].type === "labelLink" ? "link" : "image",
      start: { ...e[l][1].start },
      end: { ...e[e.length - 1][1].end },
    },
    s = { type: "label", start: { ...e[l][1].start }, end: { ...e[o][1].end } },
    u = {
      type: "labelText",
      start: { ...e[l + r + 2][1].end },
      end: { ...e[o - 2][1].start },
    };
  return (
    (a = [
      ["enter", c, n],
      ["enter", s, n],
    ]),
    (a = me(a, e.slice(l + 1, l + r + 3))),
    (a = me(a, [["enter", u, n]])),
    (a = me(
      a,
      pt(n.parser.constructs.insideSpan.null, e.slice(l + r + 4, o - 3), n)
    )),
    (a = me(a, [["exit", u, n], e[o - 2], e[o - 1], ["exit", s, n]])),
    (a = me(a, e.slice(o + 1))),
    (a = me(a, [["exit", c, n]])),
    Ce(e, l, e.length, a),
    e
  );
}
function go(e, n, t) {
  const r = this;
  let i = r.events.length,
    l,
    o;
  for (; i--; )
    if (
      (r.events[i][1].type === "labelImage" ||
        r.events[i][1].type === "labelLink") &&
      !r.events[i][1]._balanced
    ) {
      l = r.events[i][1];
      break;
    }
  return a;
  function a(m) {
    return l
      ? l._inactive
        ? p(m)
        : ((o = r.parser.defined.includes(
            Qe(r.sliceSerialize({ start: l.end, end: r.now() }))
          )),
          e.enter("labelEnd"),
          e.enter("labelMarker"),
          e.consume(m),
          e.exit("labelMarker"),
          e.exit("labelEnd"),
          c)
      : t(m);
  }
  function c(m) {
    return m === 40
      ? e.attempt(co, u, o ? u : p)(m)
      : m === 91
      ? e.attempt(po, u, o ? s : p)(m)
      : o
      ? u(m)
      : p(m);
  }
  function s(m) {
    return e.attempt(ho, u, p)(m);
  }
  function u(m) {
    return n(m);
  }
  function p(m) {
    return (l._balanced = !0), t(m);
  }
}
function xo(e, n, t) {
  return r;
  function r(p) {
    return (
      e.enter("resource"),
      e.enter("resourceMarker"),
      e.consume(p),
      e.exit("resourceMarker"),
      i
    );
  }
  function i(p) {
    return se(p) ? un(e, l)(p) : l(p);
  }
  function l(p) {
    return p === 41
      ? u(p)
      : Pr(
          e,
          o,
          a,
          "resourceDestination",
          "resourceDestinationLiteral",
          "resourceDestinationLiteralMarker",
          "resourceDestinationRaw",
          "resourceDestinationString",
          32
        )(p);
  }
  function o(p) {
    return se(p) ? un(e, c)(p) : u(p);
  }
  function a(p) {
    return t(p);
  }
  function c(p) {
    return p === 34 || p === 39 || p === 40
      ? _r(
          e,
          s,
          t,
          "resourceTitle",
          "resourceTitleMarker",
          "resourceTitleString"
        )(p)
      : u(p);
  }
  function s(p) {
    return se(p) ? un(e, u)(p) : u(p);
  }
  function u(p) {
    return p === 41
      ? (e.enter("resourceMarker"),
        e.consume(p),
        e.exit("resourceMarker"),
        e.exit("resource"),
        n)
      : t(p);
  }
}
function yo(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return Lr.call(
      r,
      e,
      l,
      o,
      "reference",
      "referenceMarker",
      "referenceString"
    )(a);
  }
  function l(a) {
    return r.parser.defined.includes(
      Qe(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))
    )
      ? n(a)
      : t(a);
  }
  function o(a) {
    return t(a);
  }
}
function bo(e, n, t) {
  return r;
  function r(l) {
    return (
      e.enter("reference"),
      e.enter("referenceMarker"),
      e.consume(l),
      e.exit("referenceMarker"),
      i
    );
  }
  function i(l) {
    return l === 93
      ? (e.enter("referenceMarker"),
        e.consume(l),
        e.exit("referenceMarker"),
        e.exit("reference"),
        n)
      : t(l);
  }
}
const wo = { name: "labelStartImage", resolveAll: ht.resolveAll, tokenize: ko };
function ko(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return (
      e.enter("labelImage"),
      e.enter("labelImageMarker"),
      e.consume(a),
      e.exit("labelImageMarker"),
      l
    );
  }
  function l(a) {
    return a === 91
      ? (e.enter("labelMarker"),
        e.consume(a),
        e.exit("labelMarker"),
        e.exit("labelImage"),
        o)
      : t(a);
  }
  function o(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs
      ? t(a)
      : n(a);
  }
}
const So = { name: "labelStartLink", resolveAll: ht.resolveAll, tokenize: Co };
function Co(e, n, t) {
  const r = this;
  return i;
  function i(o) {
    return (
      e.enter("labelLink"),
      e.enter("labelMarker"),
      e.consume(o),
      e.exit("labelMarker"),
      e.exit("labelLink"),
      l
    );
  }
  function l(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs
      ? t(o)
      : n(o);
  }
}
const Mn = { name: "lineEnding", tokenize: Eo };
function Eo(e, n) {
  return t;
  function t(r) {
    return (
      e.enter("lineEnding"),
      e.consume(r),
      e.exit("lineEnding"),
      G(e, n, "linePrefix")
    );
  }
}
const kn = { name: "thematicBreak", tokenize: Io };
function Io(e, n, t) {
  let r = 0,
    i;
  return l;
  function l(s) {
    return e.enter("thematicBreak"), o(s);
  }
  function o(s) {
    return (i = s), a(s);
  }
  function a(s) {
    return s === i
      ? (e.enter("thematicBreakSequence"), c(s))
      : r >= 3 && (s === null || D(s))
      ? (e.exit("thematicBreak"), n(s))
      : t(s);
  }
  function c(s) {
    return s === i
      ? (e.consume(s), r++, c)
      : (e.exit("thematicBreakSequence"),
        V(s) ? G(e, a, "whitespace")(s) : a(s));
  }
}
const ae = {
    continuation: { tokenize: jo },
    exit: Po,
    name: "list",
    tokenize: To,
  },
  No = { partial: !0, tokenize: Lo },
  vo = { partial: !0, tokenize: Ao };
function To(e, n, t) {
  const r = this,
    i = r.events[r.events.length - 1];
  let l =
      i && i[1].type === "linePrefix"
        ? i[2].sliceSerialize(i[1], !0).length
        : 0,
    o = 0;
  return a;
  function a(h) {
    const E =
      r.containerState.type ||
      (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
    if (
      E === "listUnordered"
        ? !r.containerState.marker || h === r.containerState.marker
        : Zn(h)
    ) {
      if (
        (r.containerState.type ||
          ((r.containerState.type = E), e.enter(E, { _container: !0 })),
        E === "listUnordered")
      )
        return (
          e.enter("listItemPrefix"),
          h === 42 || h === 45 ? e.check(kn, t, s)(h) : s(h)
        );
      if (!r.interrupt || h === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), c(h);
    }
    return t(h);
  }
  function c(h) {
    return Zn(h) && ++o < 10
      ? (e.consume(h), c)
      : (!r.interrupt || o < 2) &&
        (r.containerState.marker
          ? h === r.containerState.marker
          : h === 41 || h === 46)
      ? (e.exit("listItemValue"), s(h))
      : t(h);
  }
  function s(h) {
    return (
      e.enter("listItemMarker"),
      e.consume(h),
      e.exit("listItemMarker"),
      (r.containerState.marker = r.containerState.marker || h),
      e.check(En, r.interrupt ? t : u, e.attempt(No, m, p))
    );
  }
  function u(h) {
    return (r.containerState.initialBlankLine = !0), l++, m(h);
  }
  function p(h) {
    return V(h)
      ? (e.enter("listItemPrefixWhitespace"),
        e.consume(h),
        e.exit("listItemPrefixWhitespace"),
        m)
      : t(h);
  }
  function m(h) {
    return (
      (r.containerState.size =
        l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
      n(h)
    );
  }
}
function jo(e, n, t) {
  const r = this;
  return (r.containerState._closeFlow = void 0), e.check(En, i, l);
  function i(a) {
    return (
      (r.containerState.furtherBlankLines =
        r.containerState.furtherBlankLines ||
        r.containerState.initialBlankLine),
      G(e, n, "listItemIndent", r.containerState.size + 1)(a)
    );
  }
  function l(a) {
    return r.containerState.furtherBlankLines || !V(a)
      ? ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        o(a))
      : ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        e.attempt(vo, n, o)(a));
  }
  function o(a) {
    return (
      (r.containerState._closeFlow = !0),
      (r.interrupt = void 0),
      G(
        e,
        e.attempt(ae, n, t),
        "linePrefix",
        r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(a)
    );
  }
}
function Ao(e, n, t) {
  const r = this;
  return G(e, i, "listItemIndent", r.containerState.size + 1);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o &&
      o[1].type === "listItemIndent" &&
      o[2].sliceSerialize(o[1], !0).length === r.containerState.size
      ? n(l)
      : t(l);
  }
}
function Po(e) {
  e.exit(this.containerState.type);
}
function Lo(e, n, t) {
  const r = this;
  return G(
    e,
    i,
    "listItemPrefixWhitespace",
    r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5
  );
  function i(l) {
    const o = r.events[r.events.length - 1];
    return !V(l) && o && o[1].type === "listItemPrefixWhitespace" ? n(l) : t(l);
  }
}
const qt = { name: "setextUnderline", resolveTo: _o, tokenize: zo };
function _o(e, n) {
  let t = e.length,
    r,
    i,
    l;
  for (; t--; )
    if (e[t][0] === "enter") {
      if (e[t][1].type === "content") {
        r = t;
        break;
      }
      e[t][1].type === "paragraph" && (i = t);
    } else
      e[t][1].type === "content" && e.splice(t, 1),
        !l && e[t][1].type === "definition" && (l = t);
  const o = {
    type: "setextHeading",
    start: { ...e[r][1].start },
    end: { ...e[e.length - 1][1].end },
  };
  return (
    (e[i][1].type = "setextHeadingText"),
    l
      ? (e.splice(i, 0, ["enter", o, n]),
        e.splice(l + 1, 0, ["exit", e[r][1], n]),
        (e[r][1].end = { ...e[l][1].end }))
      : (e[r][1] = o),
    e.push(["exit", o, n]),
    e
  );
}
function zo(e, n, t) {
  const r = this;
  let i;
  return l;
  function l(s) {
    let u = r.events.length,
      p;
    for (; u--; )
      if (
        r.events[u][1].type !== "lineEnding" &&
        r.events[u][1].type !== "linePrefix" &&
        r.events[u][1].type !== "content"
      ) {
        p = r.events[u][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || p)
      ? (e.enter("setextHeadingLine"), (i = s), o(s))
      : t(s);
  }
  function o(s) {
    return e.enter("setextHeadingLineSequence"), a(s);
  }
  function a(s) {
    return s === i
      ? (e.consume(s), a)
      : (e.exit("setextHeadingLineSequence"),
        V(s) ? G(e, c, "lineSuffix")(s) : c(s));
  }
  function c(s) {
    return s === null || D(s) ? (e.exit("setextHeadingLine"), n(s)) : t(s);
  }
}
const Do = { tokenize: Oo };
function Oo(e) {
  const n = this,
    t = e.attempt(
      En,
      r,
      e.attempt(
        this.parser.constructs.flowInitial,
        i,
        G(
          e,
          e.attempt(this.parser.constructs.flow, i, e.attempt(Bl, i)),
          "linePrefix"
        )
      )
    );
  return t;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return (
      e.enter("lineEndingBlank"),
      e.consume(l),
      e.exit("lineEndingBlank"),
      (n.currentConstruct = void 0),
      t
    );
  }
  function i(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return (
      e.enter("lineEnding"),
      e.consume(l),
      e.exit("lineEnding"),
      (n.currentConstruct = void 0),
      t
    );
  }
}
const Ro = { resolveAll: Dr() },
  Fo = zr("string"),
  Mo = zr("text");
function zr(e) {
  return { resolveAll: Dr(e === "text" ? Bo : void 0), tokenize: n };
  function n(t) {
    const r = this,
      i = this.parser.constructs[e],
      l = t.attempt(i, o, a);
    return o;
    function o(u) {
      return s(u) ? l(u) : a(u);
    }
    function a(u) {
      if (u === null) {
        t.consume(u);
        return;
      }
      return t.enter("data"), t.consume(u), c;
    }
    function c(u) {
      return s(u) ? (t.exit("data"), l(u)) : (t.consume(u), c);
    }
    function s(u) {
      if (u === null) return !0;
      const p = i[u];
      let m = -1;
      if (p)
        for (; ++m < p.length; ) {
          const h = p[m];
          if (!h.previous || h.previous.call(r, r.previous)) return !0;
        }
      return !1;
    }
  }
}
function Dr(e) {
  return n;
  function n(t, r) {
    let i = -1,
      l;
    for (; ++i <= t.length; )
      l === void 0
        ? t[i] && t[i][1].type === "data" && ((l = i), i++)
        : (!t[i] || t[i][1].type !== "data") &&
          (i !== l + 2 &&
            ((t[l][1].end = t[i - 1][1].end),
            t.splice(l + 2, i - l - 2),
            (i = l + 2)),
          (l = void 0));
    return e ? e(t, r) : t;
  }
}
function Bo(e, n) {
  let t = 0;
  for (; ++t <= e.length; )
    if (
      (t === e.length || e[t][1].type === "lineEnding") &&
      e[t - 1][1].type === "data"
    ) {
      const r = e[t - 1][1],
        i = n.sliceStream(r);
      let l = i.length,
        o = -1,
        a = 0,
        c;
      for (; l--; ) {
        const s = i[l];
        if (typeof s == "string") {
          for (o = s.length; s.charCodeAt(o - 1) === 32; ) a++, o--;
          if (o) break;
          o = -1;
        } else if (s === -2) (c = !0), a++;
        else if (s !== -1) {
          l++;
          break;
        }
      }
      if ((n._contentTypeTextTrailing && t === e.length && (a = 0), a)) {
        const s = {
          type:
            t === e.length || c || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: l ? o : r.start._bufferIndex + o,
            _index: r.start._index + l,
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a,
          },
          end: { ...r.end },
        };
        (r.end = { ...s.start }),
          r.start.offset === r.end.offset
            ? Object.assign(r, s)
            : (e.splice(t, 0, ["enter", s, n], ["exit", s, n]), (t += 2));
      }
      t++;
    }
  return e;
}
const $o = {
    42: ae,
    43: ae,
    45: ae,
    48: ae,
    49: ae,
    50: ae,
    51: ae,
    52: ae,
    53: ae,
    54: ae,
    55: ae,
    56: ae,
    57: ae,
    62: vr,
  },
  Ho = { 91: ql },
  Uo = { [-2]: Fn, [-1]: Fn, 32: Fn },
  Vo = {
    35: Gl,
    42: kn,
    45: [qt, kn],
    60: no,
    61: qt,
    95: kn,
    96: Ut,
    126: Ut,
  },
  qo = { 38: jr, 92: Tr },
  Ko = {
    [-5]: Mn,
    [-4]: Mn,
    [-3]: Mn,
    33: wo,
    38: jr,
    42: et,
    60: [kl, so],
    91: So,
    92: [Xl, Tr],
    93: ht,
    95: et,
    96: zl,
  },
  Yo = { null: [et, Ro] },
  Wo = { null: [42, 95] },
  Xo = { null: [] },
  Qo = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: Wo,
        contentInitial: Ho,
        disable: Xo,
        document: $o,
        flow: Vo,
        flowInitial: Uo,
        insideSpan: Yo,
        string: qo,
        text: Ko,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function Go(e, n, t) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: (t && t.line) || 1,
    column: (t && t.column) || 1,
    offset: (t && t.offset) || 0,
  };
  const i = {},
    l = [];
  let o = [],
    a = [];
  const c = {
      attempt: M($),
      check: M(b),
      consume: _,
      enter: T,
      exit: q,
      interrupt: M(b, { interrupt: !0 }),
    },
    s = {
      code: null,
      containerState: {},
      defineSkip: v,
      events: [],
      now: E,
      parser: e,
      previous: null,
      sliceSerialize: m,
      sliceStream: h,
      write: p,
    };
  let u = n.tokenize.call(s, c);
  return n.resolveAll && l.push(n), s;
  function p(A) {
    return (
      (o = me(o, A)),
      I(),
      o[o.length - 1] !== null
        ? []
        : (W(n, 0), (s.events = pt(l, s.events, s)), s.events)
    );
  }
  function m(A, P) {
    return Zo(h(A), P);
  }
  function h(A) {
    return Jo(o, A);
  }
  function E() {
    const { _bufferIndex: A, _index: P, line: Y, column: L, offset: N } = r;
    return { _bufferIndex: A, _index: P, line: Y, column: L, offset: N };
  }
  function v(A) {
    (i[A.line] = A.column), K();
  }
  function I() {
    let A;
    for (; r._index < o.length; ) {
      const P = o[r._index];
      if (typeof P == "string")
        for (
          A = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
          r._index === A && r._bufferIndex < P.length;

        )
          w(P.charCodeAt(r._bufferIndex));
      else w(P);
    }
  }
  function w(A) {
    u = u(A);
  }
  function _(A) {
    D(A)
      ? (r.line++, (r.column = 1), (r.offset += A === -3 ? 2 : 1), K())
      : A !== -1 && (r.column++, r.offset++),
      r._bufferIndex < 0
        ? r._index++
        : (r._bufferIndex++,
          r._bufferIndex === o[r._index].length &&
            ((r._bufferIndex = -1), r._index++)),
      (s.previous = A);
  }
  function T(A, P) {
    const Y = P || {};
    return (
      (Y.type = A),
      (Y.start = E()),
      s.events.push(["enter", Y, s]),
      a.push(Y),
      Y
    );
  }
  function q(A) {
    const P = a.pop();
    return (P.end = E()), s.events.push(["exit", P, s]), P;
  }
  function $(A, P) {
    W(A, P.from);
  }
  function b(A, P) {
    P.restore();
  }
  function M(A, P) {
    return Y;
    function Y(L, N, H) {
      let J, ie, ge, f;
      return Array.isArray(L) ? ce(L) : "tokenize" in L ? ce([L]) : ne(L);
      function ne(Z) {
        return we;
        function we(ye) {
          const Ee = ye !== null && Z[ye],
            Ie = ye !== null && Z.null,
            Ne = [
              ...(Array.isArray(Ee) ? Ee : Ee ? [Ee] : []),
              ...(Array.isArray(Ie) ? Ie : Ie ? [Ie] : []),
            ];
          return ce(Ne)(ye);
        }
      }
      function ce(Z) {
        return (J = Z), (ie = 0), Z.length === 0 ? H : d(Z[ie]);
      }
      function d(Z) {
        return we;
        function we(ye) {
          return (
            (f = B()),
            (ge = Z),
            Z.partial || (s.currentConstruct = Z),
            Z.name && s.parser.constructs.disable.null.includes(Z.name)
              ? xe()
              : Z.tokenize.call(
                  P ? Object.assign(Object.create(s), P) : s,
                  c,
                  le,
                  xe
                )(ye)
          );
        }
      }
      function le(Z) {
        return A(ge, f), N;
      }
      function xe(Z) {
        return f.restore(), ++ie < J.length ? d(J[ie]) : H;
      }
    }
  }
  function W(A, P) {
    A.resolveAll && !l.includes(A) && l.push(A),
      A.resolve &&
        Ce(s.events, P, s.events.length - P, A.resolve(s.events.slice(P), s)),
      A.resolveTo && (s.events = A.resolveTo(s.events, s));
  }
  function B() {
    const A = E(),
      P = s.previous,
      Y = s.currentConstruct,
      L = s.events.length,
      N = Array.from(a);
    return { from: L, restore: H };
    function H() {
      (r = A),
        (s.previous = P),
        (s.currentConstruct = Y),
        (s.events.length = L),
        (a = N),
        K();
    }
  }
  function K() {
    r.line in i &&
      r.column < 2 &&
      ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
  }
}
function Jo(e, n) {
  const t = n.start._index,
    r = n.start._bufferIndex,
    i = n.end._index,
    l = n.end._bufferIndex;
  let o;
  if (t === i) o = [e[t].slice(r, l)];
  else {
    if (((o = e.slice(t, i)), r > -1)) {
      const a = o[0];
      typeof a == "string" ? (o[0] = a.slice(r)) : o.shift();
    }
    l > 0 && o.push(e[i].slice(0, l));
  }
  return o;
}
function Zo(e, n) {
  let t = -1;
  const r = [];
  let i;
  for (; ++t < e.length; ) {
    const l = e[t];
    let o;
    if (typeof l == "string") o = l;
    else
      switch (l) {
        case -5: {
          o = "\r";
          break;
        }
        case -4: {
          o = `
`;
          break;
        }
        case -3: {
          o = `\r
`;
          break;
        }
        case -2: {
          o = n ? " " : "	";
          break;
        }
        case -1: {
          if (!n && i) continue;
          o = " ";
          break;
        }
        default:
          o = String.fromCharCode(l);
      }
    (i = l === -2), r.push(o);
  }
  return r.join("");
}
function ea(e) {
  const r = {
    constructs: ol([Qo, ...((e || {}).extensions || [])]),
    content: i(dl),
    defined: [],
    document: i(gl),
    flow: i(Do),
    lazy: {},
    string: i(Fo),
    text: i(Mo),
  };
  return r;
  function i(l) {
    return o;
    function o(a) {
      return Go(r, l, a);
    }
  }
}
function na(e) {
  for (; !Ar(e); );
  return e;
}
const Kt = /[\0\t\n\r]/g;
function ta() {
  let e = 1,
    n = "",
    t = !0,
    r;
  return i;
  function i(l, o, a) {
    const c = [];
    let s, u, p, m, h;
    for (
      l =
        n +
        (typeof l == "string"
          ? l.toString()
          : new TextDecoder(o || void 0).decode(l)),
        p = 0,
        n = "",
        t && (l.charCodeAt(0) === 65279 && p++, (t = void 0));
      p < l.length;

    ) {
      if (
        ((Kt.lastIndex = p),
        (s = Kt.exec(l)),
        (m = s && s.index !== void 0 ? s.index : l.length),
        (h = l.charCodeAt(m)),
        !s)
      ) {
        n = l.slice(p);
        break;
      }
      if (h === 10 && p === m && r) c.push(-3), (r = void 0);
      else
        switch (
          (r && (c.push(-5), (r = void 0)),
          p < m && (c.push(l.slice(p, m)), (e += m - p)),
          h)
        ) {
          case 0: {
            c.push(65533), e++;
            break;
          }
          case 9: {
            for (u = Math.ceil(e / 4) * 4, c.push(-2); e++ < u; ) c.push(-1);
            break;
          }
          case 10: {
            c.push(-4), (e = 1);
            break;
          }
          default:
            (r = !0), (e = 1);
        }
      p = m + 1;
    }
    return a && (r && c.push(-5), n && c.push(n), c.push(null)), c;
  }
}
const ra = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function ia(e) {
  return e.replace(ra, la);
}
function la(e, n, t) {
  if (n) return n;
  if (t.charCodeAt(0) === 35) {
    const i = t.charCodeAt(1),
      l = i === 120 || i === 88;
    return Nr(t.slice(l ? 2 : 1), l ? 16 : 10);
  }
  return ct(t) || e;
}
const Or = {}.hasOwnProperty;
function oa(e, n, t) {
  return (
    n && typeof n == "object" && ((t = n), (n = void 0)),
    aa(t)(na(ea(t).document().write(ta()(e, n, !0))))
  );
}
function aa(e) {
  const n = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: l(Ae),
      autolinkProtocol: B,
      autolinkEmail: B,
      atxHeading: l(en),
      blockQuote: l(Ie),
      characterEscape: B,
      characterReference: B,
      codeFenced: l(Ne),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: l(Ne, o),
      codeText: l(vn, o),
      codeTextData: B,
      data: B,
      codeFlowValue: B,
      definition: l(Ze),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: l(dn),
      hardBreakEscape: l(Ue),
      hardBreakTrailing: l(Ue),
      htmlFlow: l(nn, o),
      htmlFlowData: B,
      htmlText: l(nn, o),
      htmlTextData: B,
      image: l(mn),
      label: o,
      link: l(Ae),
      listItem: l(Te),
      listItemValue: m,
      listOrdered: l(ve, p),
      listUnordered: l(ve),
      paragraph: l(Pe),
      reference: d,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: l(en),
      strong: l(Fe),
      thematicBreak: l(Tn),
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: $,
      autolink: c(),
      autolinkEmail: Ee,
      autolinkProtocol: ye,
      blockQuote: c(),
      characterEscapeValue: K,
      characterReferenceMarkerHexadecimal: xe,
      characterReferenceMarkerNumeric: xe,
      characterReferenceValue: Z,
      characterReference: we,
      codeFenced: c(I),
      codeFencedFence: v,
      codeFencedFenceInfo: h,
      codeFencedFenceMeta: E,
      codeFlowValue: K,
      codeIndented: c(w),
      codeText: c(N),
      codeTextData: K,
      data: K,
      definition: c(),
      definitionDestinationString: q,
      definitionLabelString: _,
      definitionTitleString: T,
      emphasis: c(),
      hardBreakEscape: c(P),
      hardBreakTrailing: c(P),
      htmlFlow: c(Y),
      htmlFlowData: K,
      htmlText: c(L),
      htmlTextData: K,
      image: c(J),
      label: ge,
      labelText: ie,
      lineEnding: A,
      link: c(H),
      listItem: c(),
      listOrdered: c(),
      listUnordered: c(),
      paragraph: c(),
      referenceString: le,
      resourceDestinationString: f,
      resourceTitleString: ne,
      resource: ce,
      setextHeading: c(W),
      setextHeadingLineSequence: M,
      setextHeadingText: b,
      strong: c(),
      thematicBreak: c(),
    },
  };
  Rr(n, (e || {}).mdastExtensions || []);
  const t = {};
  return r;
  function r(y) {
    let C = { type: "root", children: [] };
    const z = {
        stack: [C],
        tokenStack: [],
        config: n,
        enter: a,
        exit: s,
        buffer: o,
        resume: u,
        data: t,
      },
      F = [];
    let U = -1;
    for (; ++U < y.length; )
      if (y[U][1].type === "listOrdered" || y[U][1].type === "listUnordered")
        if (y[U][0] === "enter") F.push(U);
        else {
          const pe = F.pop();
          U = i(y, pe, U);
        }
    for (U = -1; ++U < y.length; ) {
      const pe = n[y[U][0]];
      Or.call(pe, y[U][1].type) &&
        pe[y[U][1].type].call(
          Object.assign({ sliceSerialize: y[U][2].sliceSerialize }, z),
          y[U][1]
        );
    }
    if (z.tokenStack.length > 0) {
      const pe = z.tokenStack[z.tokenStack.length - 1];
      (pe[1] || Yt).call(z, void 0, pe[0]);
    }
    for (
      C.position = {
        start: Oe(
          y.length > 0 ? y[0][1].start : { line: 1, column: 1, offset: 0 }
        ),
        end: Oe(
          y.length > 0
            ? y[y.length - 2][1].end
            : { line: 1, column: 1, offset: 0 }
        ),
      },
        U = -1;
      ++U < n.transforms.length;

    )
      C = n.transforms[U](C) || C;
    return C;
  }
  function i(y, C, z) {
    let F = C - 1,
      U = -1,
      pe = !1,
      je,
      be,
      Be,
      $e;
    for (; ++F <= z; ) {
      const re = y[F];
      switch (re[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          re[0] === "enter" ? U++ : U--, ($e = void 0);
          break;
        }
        case "lineEndingBlank": {
          re[0] === "enter" &&
            (je && !$e && !U && !Be && (Be = F), ($e = void 0));
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          $e = void 0;
      }
      if (
        (!U && re[0] === "enter" && re[1].type === "listItemPrefix") ||
        (U === -1 &&
          re[0] === "exit" &&
          (re[1].type === "listUnordered" || re[1].type === "listOrdered"))
      ) {
        if (je) {
          let Le = F;
          for (be = void 0; Le--; ) {
            const de = y[Le];
            if (
              de[1].type === "lineEnding" ||
              de[1].type === "lineEndingBlank"
            ) {
              if (de[0] === "exit") continue;
              be && ((y[be][1].type = "lineEndingBlank"), (pe = !0)),
                (de[1].type = "lineEnding"),
                (be = Le);
            } else if (
              !(
                de[1].type === "linePrefix" ||
                de[1].type === "blockQuotePrefix" ||
                de[1].type === "blockQuotePrefixWhitespace" ||
                de[1].type === "blockQuoteMarker" ||
                de[1].type === "listItemIndent"
              )
            )
              break;
          }
          Be && (!be || Be < be) && (je._spread = !0),
            (je.end = Object.assign({}, be ? y[be][1].start : re[1].end)),
            y.splice(be || F, 0, ["exit", je, re[2]]),
            F++,
            z++;
        }
        if (re[1].type === "listItemPrefix") {
          const Le = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, re[1].start),
            end: void 0,
          };
          (je = Le),
            y.splice(F, 0, ["enter", Le, re[2]]),
            F++,
            z++,
            (Be = void 0),
            ($e = !0);
        }
      }
    }
    return (y[C][1]._spread = pe), z;
  }
  function l(y, C) {
    return z;
    function z(F) {
      a.call(this, y(F), F), C && C.call(this, F);
    }
  }
  function o() {
    this.stack.push({ type: "fragment", children: [] });
  }
  function a(y, C, z) {
    this.stack[this.stack.length - 1].children.push(y),
      this.stack.push(y),
      this.tokenStack.push([C, z || void 0]),
      (y.position = { start: Oe(C.start), end: void 0 });
  }
  function c(y) {
    return C;
    function C(z) {
      y && y.call(this, z), s.call(this, z);
    }
  }
  function s(y, C) {
    const z = this.stack.pop(),
      F = this.tokenStack.pop();
    if (F)
      F[0].type !== y.type &&
        (C ? C.call(this, y, F[0]) : (F[1] || Yt).call(this, y, F[0]));
    else
      throw new Error(
        "Cannot close `" +
          y.type +
          "` (" +
          sn({ start: y.start, end: y.end }) +
          "): it’s not open"
      );
    z.position.end = Oe(y.end);
  }
  function u() {
    return il(this.stack.pop());
  }
  function p() {
    this.data.expectingFirstListItemValue = !0;
  }
  function m(y) {
    if (this.data.expectingFirstListItemValue) {
      const C = this.stack[this.stack.length - 2];
      (C.start = Number.parseInt(this.sliceSerialize(y), 10)),
        (this.data.expectingFirstListItemValue = void 0);
    }
  }
  function h() {
    const y = this.resume(),
      C = this.stack[this.stack.length - 1];
    C.lang = y;
  }
  function E() {
    const y = this.resume(),
      C = this.stack[this.stack.length - 1];
    C.meta = y;
  }
  function v() {
    this.data.flowCodeInside ||
      (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function I() {
    const y = this.resume(),
      C = this.stack[this.stack.length - 1];
    (C.value = y.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")),
      (this.data.flowCodeInside = void 0);
  }
  function w() {
    const y = this.resume(),
      C = this.stack[this.stack.length - 1];
    C.value = y.replace(/(\r?\n|\r)$/g, "");
  }
  function _(y) {
    const C = this.resume(),
      z = this.stack[this.stack.length - 1];
    (z.label = C), (z.identifier = Qe(this.sliceSerialize(y)).toLowerCase());
  }
  function T() {
    const y = this.resume(),
      C = this.stack[this.stack.length - 1];
    C.title = y;
  }
  function q() {
    const y = this.resume(),
      C = this.stack[this.stack.length - 1];
    C.url = y;
  }
  function $(y) {
    const C = this.stack[this.stack.length - 1];
    if (!C.depth) {
      const z = this.sliceSerialize(y).length;
      C.depth = z;
    }
  }
  function b() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function M(y) {
    const C = this.stack[this.stack.length - 1];
    C.depth = this.sliceSerialize(y).codePointAt(0) === 61 ? 1 : 2;
  }
  function W() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function B(y) {
    const z = this.stack[this.stack.length - 1].children;
    let F = z[z.length - 1];
    (!F || F.type !== "text") &&
      ((F = Me()),
      (F.position = { start: Oe(y.start), end: void 0 }),
      z.push(F)),
      this.stack.push(F);
  }
  function K(y) {
    const C = this.stack.pop();
    (C.value += this.sliceSerialize(y)), (C.position.end = Oe(y.end));
  }
  function A(y) {
    const C = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const z = C.children[C.children.length - 1];
      (z.position.end = Oe(y.end)), (this.data.atHardBreak = void 0);
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      n.canContainEols.includes(C.type) &&
      (B.call(this, y), K.call(this, y));
  }
  function P() {
    this.data.atHardBreak = !0;
  }
  function Y() {
    const y = this.resume(),
      C = this.stack[this.stack.length - 1];
    C.value = y;
  }
  function L() {
    const y = this.resume(),
      C = this.stack[this.stack.length - 1];
    C.value = y;
  }
  function N() {
    const y = this.resume(),
      C = this.stack[this.stack.length - 1];
    C.value = y;
  }
  function H() {
    const y = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const C = this.data.referenceType || "shortcut";
      (y.type += "Reference"),
        (y.referenceType = C),
        delete y.url,
        delete y.title;
    } else delete y.identifier, delete y.label;
    this.data.referenceType = void 0;
  }
  function J() {
    const y = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const C = this.data.referenceType || "shortcut";
      (y.type += "Reference"),
        (y.referenceType = C),
        delete y.url,
        delete y.title;
    } else delete y.identifier, delete y.label;
    this.data.referenceType = void 0;
  }
  function ie(y) {
    const C = this.sliceSerialize(y),
      z = this.stack[this.stack.length - 2];
    (z.label = ia(C)), (z.identifier = Qe(C).toLowerCase());
  }
  function ge() {
    const y = this.stack[this.stack.length - 1],
      C = this.resume(),
      z = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), z.type === "link")) {
      const F = y.children;
      z.children = F;
    } else z.alt = C;
  }
  function f() {
    const y = this.resume(),
      C = this.stack[this.stack.length - 1];
    C.url = y;
  }
  function ne() {
    const y = this.resume(),
      C = this.stack[this.stack.length - 1];
    C.title = y;
  }
  function ce() {
    this.data.inReference = void 0;
  }
  function d() {
    this.data.referenceType = "collapsed";
  }
  function le(y) {
    const C = this.resume(),
      z = this.stack[this.stack.length - 1];
    (z.label = C),
      (z.identifier = Qe(this.sliceSerialize(y)).toLowerCase()),
      (this.data.referenceType = "full");
  }
  function xe(y) {
    this.data.characterReferenceType = y.type;
  }
  function Z(y) {
    const C = this.sliceSerialize(y),
      z = this.data.characterReferenceType;
    let F;
    z
      ? ((F = Nr(C, z === "characterReferenceMarkerNumeric" ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (F = ct(C));
    const U = this.stack[this.stack.length - 1];
    U.value += F;
  }
  function we(y) {
    const C = this.stack.pop();
    C.position.end = Oe(y.end);
  }
  function ye(y) {
    K.call(this, y);
    const C = this.stack[this.stack.length - 1];
    C.url = this.sliceSerialize(y);
  }
  function Ee(y) {
    K.call(this, y);
    const C = this.stack[this.stack.length - 1];
    C.url = "mailto:" + this.sliceSerialize(y);
  }
  function Ie() {
    return { type: "blockquote", children: [] };
  }
  function Ne() {
    return { type: "code", lang: null, meta: null, value: "" };
  }
  function vn() {
    return { type: "inlineCode", value: "" };
  }
  function Ze() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: "",
    };
  }
  function dn() {
    return { type: "emphasis", children: [] };
  }
  function en() {
    return { type: "heading", depth: 0, children: [] };
  }
  function Ue() {
    return { type: "break" };
  }
  function nn() {
    return { type: "html", value: "" };
  }
  function mn() {
    return { type: "image", title: null, url: "", alt: null };
  }
  function Ae() {
    return { type: "link", title: null, url: "", children: [] };
  }
  function ve(y) {
    return {
      type: "list",
      ordered: y.type === "listOrdered",
      start: null,
      spread: y._spread,
      children: [],
    };
  }
  function Te(y) {
    return { type: "listItem", spread: y._spread, checked: null, children: [] };
  }
  function Pe() {
    return { type: "paragraph", children: [] };
  }
  function Fe() {
    return { type: "strong", children: [] };
  }
  function Me() {
    return { type: "text", value: "" };
  }
  function Tn() {
    return { type: "thematicBreak" };
  }
}
function Oe(e) {
  return { line: e.line, column: e.column, offset: e.offset };
}
function Rr(e, n) {
  let t = -1;
  for (; ++t < n.length; ) {
    const r = n[t];
    Array.isArray(r) ? Rr(e, r) : sa(e, r);
  }
}
function sa(e, n) {
  let t;
  for (t in n)
    if (Or.call(n, t))
      switch (t) {
        case "canContainEols": {
          const r = n[t];
          r && e[t].push(...r);
          break;
        }
        case "transforms": {
          const r = n[t];
          r && e[t].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = n[t];
          r && Object.assign(e[t], r);
          break;
        }
      }
}
function Yt(e, n) {
  throw e
    ? new Error(
        "Cannot close `" +
          e.type +
          "` (" +
          sn({ start: e.start, end: e.end }) +
          "): a different token (`" +
          n.type +
          "`, " +
          sn({ start: n.start, end: n.end }) +
          ") is open"
      )
    : new Error(
        "Cannot close document, a token (`" +
          n.type +
          "`, " +
          sn({ start: n.start, end: n.end }) +
          ") is still open"
      );
}
function ua(e) {
  const n = this;
  n.parser = t;
  function t(r) {
    return oa(r, {
      ...n.data("settings"),
      ...e,
      extensions: n.data("micromarkExtensions") || [],
      mdastExtensions: n.data("fromMarkdownExtensions") || [],
    });
  }
}
function ca(e, n) {
  const t = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(n), !0),
  };
  return e.patch(n, t), e.applyData(n, t);
}
function pa(e, n) {
  const t = { type: "element", tagName: "br", properties: {}, children: [] };
  return (
    e.patch(n, t),
    [
      e.applyData(n, t),
      {
        type: "text",
        value: `
`,
      },
    ]
  );
}
function ha(e, n) {
  const t = n.value
      ? n.value +
        `
`
      : "",
    r = {},
    i = n.lang ? n.lang.split(/\s+/) : [];
  i.length > 0 && (r.className = ["language-" + i[0]]);
  let l = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: t }],
  };
  return (
    n.meta && (l.data = { meta: n.meta }),
    e.patch(n, l),
    (l = e.applyData(n, l)),
    (l = { type: "element", tagName: "pre", properties: {}, children: [l] }),
    e.patch(n, l),
    l
  );
}
function fa(e, n) {
  const t = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(n),
  };
  return e.patch(n, t), e.applyData(n, t);
}
function da(e, n) {
  const t = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(n),
  };
  return e.patch(n, t), e.applyData(n, t);
}
function ma(e, n) {
  const t =
      typeof e.options.clobberPrefix == "string"
        ? e.options.clobberPrefix
        : "user-content-",
    r = String(n.identifier).toUpperCase(),
    i = Je(r.toLowerCase()),
    l = e.footnoteOrder.indexOf(r);
  let o,
    a = e.footnoteCounts.get(r);
  a === void 0
    ? ((a = 0), e.footnoteOrder.push(r), (o = e.footnoteOrder.length))
    : (o = l + 1),
    (a += 1),
    e.footnoteCounts.set(r, a);
  const c = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + t + "fn-" + i,
      id: t + "fnref-" + i + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"],
    },
    children: [{ type: "text", value: String(o) }],
  };
  e.patch(n, c);
  const s = { type: "element", tagName: "sup", properties: {}, children: [c] };
  return e.patch(n, s), e.applyData(n, s);
}
function ga(e, n) {
  const t = {
    type: "element",
    tagName: "h" + n.depth,
    properties: {},
    children: e.all(n),
  };
  return e.patch(n, t), e.applyData(n, t);
}
function xa(e, n) {
  if (e.options.allowDangerousHtml) {
    const t = { type: "raw", value: n.value };
    return e.patch(n, t), e.applyData(n, t);
  }
}
function Fr(e, n) {
  const t = n.referenceType;
  let r = "]";
  if (
    (t === "collapsed"
      ? (r += "[]")
      : t === "full" && (r += "[" + (n.label || n.identifier) + "]"),
    n.type === "imageReference")
  )
    return [{ type: "text", value: "![" + n.alt + r }];
  const i = e.all(n),
    l = i[0];
  l && l.type === "text"
    ? (l.value = "[" + l.value)
    : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return (
    o && o.type === "text"
      ? (o.value += r)
      : i.push({ type: "text", value: r }),
    i
  );
}
function ya(e, n) {
  const t = String(n.identifier).toUpperCase(),
    r = e.definitionById.get(t);
  if (!r) return Fr(e, n);
  const i = { src: Je(r.url || ""), alt: n.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(n, l), e.applyData(n, l);
}
function ba(e, n) {
  const t = { src: Je(n.url) };
  n.alt !== null && n.alt !== void 0 && (t.alt = n.alt),
    n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = { type: "element", tagName: "img", properties: t, children: [] };
  return e.patch(n, r), e.applyData(n, r);
}
function wa(e, n) {
  const t = { type: "text", value: n.value.replace(/\r?\n|\r/g, " ") };
  e.patch(n, t);
  const r = { type: "element", tagName: "code", properties: {}, children: [t] };
  return e.patch(n, r), e.applyData(n, r);
}
function ka(e, n) {
  const t = String(n.identifier).toUpperCase(),
    r = e.definitionById.get(t);
  if (!r) return Fr(e, n);
  const i = { href: Je(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(n),
  };
  return e.patch(n, l), e.applyData(n, l);
}
function Sa(e, n) {
  const t = { href: Je(n.url) };
  n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: t,
    children: e.all(n),
  };
  return e.patch(n, r), e.applyData(n, r);
}
function Ca(e, n, t) {
  const r = e.all(n),
    i = t ? Ea(t) : Mr(n),
    l = {},
    o = [];
  if (typeof n.checked == "boolean") {
    const u = r[0];
    let p;
    u && u.type === "element" && u.tagName === "p"
      ? (p = u)
      : ((p = { type: "element", tagName: "p", properties: {}, children: [] }),
        r.unshift(p)),
      p.children.length > 0 && p.children.unshift({ type: "text", value: " " }),
      p.children.unshift({
        type: "element",
        tagName: "input",
        properties: { type: "checkbox", checked: n.checked, disabled: !0 },
        children: [],
      }),
      (l.className = ["task-list-item"]);
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const u = r[a];
    (i || a !== 0 || u.type !== "element" || u.tagName !== "p") &&
      o.push({
        type: "text",
        value: `
`,
      }),
      u.type === "element" && u.tagName === "p" && !i
        ? o.push(...u.children)
        : o.push(u);
  }
  const c = r[r.length - 1];
  c &&
    (i || c.type !== "element" || c.tagName !== "p") &&
    o.push({
      type: "text",
      value: `
`,
    });
  const s = { type: "element", tagName: "li", properties: l, children: o };
  return e.patch(n, s), e.applyData(n, s);
}
function Ea(e) {
  let n = !1;
  if (e.type === "list") {
    n = e.spread || !1;
    const t = e.children;
    let r = -1;
    for (; !n && ++r < t.length; ) n = Mr(t[r]);
  }
  return n;
}
function Mr(e) {
  const n = e.spread;
  return n ?? e.children.length > 1;
}
function Ia(e, n) {
  const t = {},
    r = e.all(n);
  let i = -1;
  for (
    typeof n.start == "number" && n.start !== 1 && (t.start = n.start);
    ++i < r.length;

  ) {
    const o = r[i];
    if (
      o.type === "element" &&
      o.tagName === "li" &&
      o.properties &&
      Array.isArray(o.properties.className) &&
      o.properties.className.includes("task-list-item")
    ) {
      t.className = ["contains-task-list"];
      break;
    }
  }
  const l = {
    type: "element",
    tagName: n.ordered ? "ol" : "ul",
    properties: t,
    children: e.wrap(r, !0),
  };
  return e.patch(n, l), e.applyData(n, l);
}
function Na(e, n) {
  const t = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(n),
  };
  return e.patch(n, t), e.applyData(n, t);
}
function va(e, n) {
  const t = { type: "root", children: e.wrap(e.all(n)) };
  return e.patch(n, t), e.applyData(n, t);
}
function Ta(e, n) {
  const t = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(n),
  };
  return e.patch(n, t), e.applyData(n, t);
}
function ja(e, n) {
  const t = e.all(n),
    r = t.shift(),
    i = [];
  if (r) {
    const o = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0),
    };
    e.patch(n.children[0], o), i.push(o);
  }
  if (t.length > 0) {
    const o = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: e.wrap(t, !0),
      },
      a = ot(n.children[1]),
      c = br(n.children[n.children.length - 1]);
    a && c && (o.position = { start: a, end: c }), i.push(o);
  }
  const l = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0),
  };
  return e.patch(n, l), e.applyData(n, l);
}
function Aa(e, n, t) {
  const r = t ? t.children : void 0,
    l = (r ? r.indexOf(n) : 1) === 0 ? "th" : "td",
    o = t && t.type === "table" ? t.align : void 0,
    a = o ? o.length : n.children.length;
  let c = -1;
  const s = [];
  for (; ++c < a; ) {
    const p = n.children[c],
      m = {},
      h = o ? o[c] : void 0;
    h && (m.align = h);
    let E = { type: "element", tagName: l, properties: m, children: [] };
    p && ((E.children = e.all(p)), e.patch(p, E), (E = e.applyData(p, E))),
      s.push(E);
  }
  const u = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(s, !0),
  };
  return e.patch(n, u), e.applyData(n, u);
}
function Pa(e, n) {
  const t = {
    type: "element",
    tagName: "td",
    properties: {},
    children: e.all(n),
  };
  return e.patch(n, t), e.applyData(n, t);
}
const Wt = 9,
  Xt = 32;
function La(e) {
  const n = String(e),
    t = /\r?\n|\r/g;
  let r = t.exec(n),
    i = 0;
  const l = [];
  for (; r; )
    l.push(Qt(n.slice(i, r.index), i > 0, !0), r[0]),
      (i = r.index + r[0].length),
      (r = t.exec(n));
  return l.push(Qt(n.slice(i), i > 0, !1)), l.join("");
}
function Qt(e, n, t) {
  let r = 0,
    i = e.length;
  if (n) {
    let l = e.codePointAt(r);
    for (; l === Wt || l === Xt; ) r++, (l = e.codePointAt(r));
  }
  if (t) {
    let l = e.codePointAt(i - 1);
    for (; l === Wt || l === Xt; ) i--, (l = e.codePointAt(i - 1));
  }
  return i > r ? e.slice(r, i) : "";
}
function _a(e, n) {
  const t = { type: "text", value: La(String(n.value)) };
  return e.patch(n, t), e.applyData(n, t);
}
function za(e, n) {
  const t = { type: "element", tagName: "hr", properties: {}, children: [] };
  return e.patch(n, t), e.applyData(n, t);
}
const Da = {
  blockquote: ca,
  break: pa,
  code: ha,
  delete: fa,
  emphasis: da,
  footnoteReference: ma,
  heading: ga,
  html: xa,
  imageReference: ya,
  image: ba,
  inlineCode: wa,
  linkReference: ka,
  link: Sa,
  listItem: Ca,
  list: Ia,
  paragraph: Na,
  root: va,
  strong: Ta,
  table: ja,
  tableCell: Pa,
  tableRow: Aa,
  text: _a,
  thematicBreak: za,
  toml: yn,
  yaml: yn,
  definition: yn,
  footnoteDefinition: yn,
};
function yn() {}
const Br = -1,
  In = 0,
  cn = 1,
  Sn = 2,
  ft = 3,
  dt = 4,
  mt = 5,
  gt = 6,
  $r = 7,
  Hr = 8,
  Gt = typeof self == "object" ? self : globalThis,
  Oa = (e, n) => {
    const t = (i, l) => (e.set(l, i), i),
      r = (i) => {
        if (e.has(i)) return e.get(i);
        const [l, o] = n[i];
        switch (l) {
          case In:
          case Br:
            return t(o, i);
          case cn: {
            const a = t([], i);
            for (const c of o) a.push(r(c));
            return a;
          }
          case Sn: {
            const a = t({}, i);
            for (const [c, s] of o) a[r(c)] = r(s);
            return a;
          }
          case ft:
            return t(new Date(o), i);
          case dt: {
            const { source: a, flags: c } = o;
            return t(new RegExp(a, c), i);
          }
          case mt: {
            const a = t(new Map(), i);
            for (const [c, s] of o) a.set(r(c), r(s));
            return a;
          }
          case gt: {
            const a = t(new Set(), i);
            for (const c of o) a.add(r(c));
            return a;
          }
          case $r: {
            const { name: a, message: c } = o;
            return t(new Gt[a](c), i);
          }
          case Hr:
            return t(BigInt(o), i);
          case "BigInt":
            return t(Object(BigInt(o)), i);
          case "ArrayBuffer":
            return t(new Uint8Array(o).buffer, o);
          case "DataView": {
            const { buffer: a } = new Uint8Array(o);
            return t(new DataView(a), o);
          }
        }
        return t(new Gt[l](o), i);
      };
    return r;
  },
  Jt = (e) => Oa(new Map(), e)(0),
  We = "",
  { toString: Ra } = {},
  { keys: Fa } = Object,
  an = (e) => {
    const n = typeof e;
    if (n !== "object" || !e) return [In, n];
    const t = Ra.call(e).slice(8, -1);
    switch (t) {
      case "Array":
        return [cn, We];
      case "Object":
        return [Sn, We];
      case "Date":
        return [ft, We];
      case "RegExp":
        return [dt, We];
      case "Map":
        return [mt, We];
      case "Set":
        return [gt, We];
      case "DataView":
        return [cn, t];
    }
    return t.includes("Array")
      ? [cn, t]
      : t.includes("Error")
      ? [$r, t]
      : [Sn, t];
  },
  bn = ([e, n]) => e === In && (n === "function" || n === "symbol"),
  Ma = (e, n, t, r) => {
    const i = (o, a) => {
        const c = r.push(o) - 1;
        return t.set(a, c), c;
      },
      l = (o) => {
        if (t.has(o)) return t.get(o);
        let [a, c] = an(o);
        switch (a) {
          case In: {
            let u = o;
            switch (c) {
              case "bigint":
                (a = Hr), (u = o.toString());
                break;
              case "function":
              case "symbol":
                if (e) throw new TypeError("unable to serialize " + c);
                u = null;
                break;
              case "undefined":
                return i([Br], o);
            }
            return i([a, u], o);
          }
          case cn: {
            if (c) {
              let m = o;
              return (
                c === "DataView"
                  ? (m = new Uint8Array(o.buffer))
                  : c === "ArrayBuffer" && (m = new Uint8Array(o)),
                i([c, [...m]], o)
              );
            }
            const u = [],
              p = i([a, u], o);
            for (const m of o) u.push(l(m));
            return p;
          }
          case Sn: {
            if (c)
              switch (c) {
                case "BigInt":
                  return i([c, o.toString()], o);
                case "Boolean":
                case "Number":
                case "String":
                  return i([c, o.valueOf()], o);
              }
            if (n && "toJSON" in o) return l(o.toJSON());
            const u = [],
              p = i([a, u], o);
            for (const m of Fa(o))
              (e || !bn(an(o[m]))) && u.push([l(m), l(o[m])]);
            return p;
          }
          case ft:
            return i([a, o.toISOString()], o);
          case dt: {
            const { source: u, flags: p } = o;
            return i([a, { source: u, flags: p }], o);
          }
          case mt: {
            const u = [],
              p = i([a, u], o);
            for (const [m, h] of o)
              (e || !(bn(an(m)) || bn(an(h)))) && u.push([l(m), l(h)]);
            return p;
          }
          case gt: {
            const u = [],
              p = i([a, u], o);
            for (const m of o) (e || !bn(an(m))) && u.push(l(m));
            return p;
          }
        }
        const { message: s } = o;
        return i([a, { name: c, message: s }], o);
      };
    return l;
  },
  Zt = (e, { json: n, lossy: t } = {}) => {
    const r = [];
    return Ma(!(n || t), !!n, new Map(), r)(e), r;
  },
  Cn =
    typeof structuredClone == "function"
      ? (e, n) =>
          n && ("json" in n || "lossy" in n) ? Jt(Zt(e, n)) : structuredClone(e)
      : (e, n) => Jt(Zt(e, n));
function Ba(e, n) {
  const t = [{ type: "text", value: "↩" }];
  return (
    n > 1 &&
      t.push({
        type: "element",
        tagName: "sup",
        properties: {},
        children: [{ type: "text", value: String(n) }],
      }),
    t
  );
}
function $a(e, n) {
  return "Back to reference " + (e + 1) + (n > 1 ? "-" + n : "");
}
function Ha(e) {
  const n =
      typeof e.options.clobberPrefix == "string"
        ? e.options.clobberPrefix
        : "user-content-",
    t = e.options.footnoteBackContent || Ba,
    r = e.options.footnoteBackLabel || $a,
    i = e.options.footnoteLabel || "Footnotes",
    l = e.options.footnoteLabelTagName || "h2",
    o = e.options.footnoteLabelProperties || { className: ["sr-only"] },
    a = [];
  let c = -1;
  for (; ++c < e.footnoteOrder.length; ) {
    const s = e.footnoteById.get(e.footnoteOrder[c]);
    if (!s) continue;
    const u = e.all(s),
      p = String(s.identifier).toUpperCase(),
      m = Je(p.toLowerCase());
    let h = 0;
    const E = [],
      v = e.footnoteCounts.get(p);
    for (; v !== void 0 && ++h <= v; ) {
      E.length > 0 && E.push({ type: "text", value: " " });
      let _ = typeof t == "string" ? t : t(c, h);
      typeof _ == "string" && (_ = { type: "text", value: _ }),
        E.push({
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + n + "fnref-" + m + (h > 1 ? "-" + h : ""),
            dataFootnoteBackref: "",
            ariaLabel: typeof r == "string" ? r : r(c, h),
            className: ["data-footnote-backref"],
          },
          children: Array.isArray(_) ? _ : [_],
        });
    }
    const I = u[u.length - 1];
    if (I && I.type === "element" && I.tagName === "p") {
      const _ = I.children[I.children.length - 1];
      _ && _.type === "text"
        ? (_.value += " ")
        : I.children.push({ type: "text", value: " " }),
        I.children.push(...E);
    } else u.push(...E);
    const w = {
      type: "element",
      tagName: "li",
      properties: { id: n + "fn-" + m },
      children: e.wrap(u, !0),
    };
    e.patch(s, w), a.push(w);
  }
  if (a.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: l,
          properties: { ...Cn(o), id: "footnote-label" },
          children: [{ type: "text", value: i }],
        },
        {
          type: "text",
          value: `
`,
        },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(a, !0),
        },
        {
          type: "text",
          value: `
`,
        },
      ],
    };
}
const Ur = function (e) {
  if (e == null) return Ka;
  if (typeof e == "function") return Nn(e);
  if (typeof e == "object") return Array.isArray(e) ? Ua(e) : Va(e);
  if (typeof e == "string") return qa(e);
  throw new Error("Expected function, string, or object as test");
};
function Ua(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; ) n[t] = Ur(e[t]);
  return Nn(r);
  function r(...i) {
    let l = -1;
    for (; ++l < n.length; ) if (n[l].apply(this, i)) return !0;
    return !1;
  }
}
function Va(e) {
  const n = e;
  return Nn(t);
  function t(r) {
    const i = r;
    let l;
    for (l in e) if (i[l] !== n[l]) return !1;
    return !0;
  }
}
function qa(e) {
  return Nn(n);
  function n(t) {
    return t && t.type === e;
  }
}
function Nn(e) {
  return n;
  function n(t, r, i) {
    return !!(
      Ya(t) && e.call(this, t, typeof r == "number" ? r : void 0, i || void 0)
    );
  }
}
function Ka() {
  return !0;
}
function Ya(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Vr = [],
  Wa = !0,
  er = !1,
  Xa = "skip";
function Qa(e, n, t, r) {
  let i;
  typeof n == "function" && typeof t != "function"
    ? ((r = t), (t = n))
    : (i = n);
  const l = Ur(i),
    o = r ? -1 : 1;
  a(e, void 0, [])();
  function a(c, s, u) {
    const p = c && typeof c == "object" ? c : {};
    if (typeof p.type == "string") {
      const h =
        typeof p.tagName == "string"
          ? p.tagName
          : typeof p.name == "string"
          ? p.name
          : void 0;
      Object.defineProperty(m, "name", {
        value: "node (" + (c.type + (h ? "<" + h + ">" : "")) + ")",
      });
    }
    return m;
    function m() {
      let h = Vr,
        E,
        v,
        I;
      if (
        (!n || l(c, s, u[u.length - 1] || void 0)) &&
        ((h = Ga(t(c, u))), h[0] === er)
      )
        return h;
      if ("children" in c && c.children) {
        const w = c;
        if (w.children && h[0] !== Xa)
          for (
            v = (r ? w.children.length : -1) + o, I = u.concat(w);
            v > -1 && v < w.children.length;

          ) {
            const _ = w.children[v];
            if (((E = a(_, v, I)()), E[0] === er)) return E;
            v = typeof E[1] == "number" ? E[1] : v + o;
          }
      }
      return h;
    }
  }
}
function Ga(e) {
  return Array.isArray(e)
    ? e
    : typeof e == "number"
    ? [Wa, e]
    : e == null
    ? Vr
    : [e];
}
function qr(e, n, t, r) {
  let i, l, o;
  typeof n == "function" && typeof t != "function"
    ? ((l = void 0), (o = n), (i = t))
    : ((l = n), (o = t), (i = r)),
    Qa(e, l, a, i);
  function a(c, s) {
    const u = s[s.length - 1],
      p = u ? u.children.indexOf(c) : void 0;
    return o(c, p, u);
  }
}
const nt = {}.hasOwnProperty,
  Ja = {};
function Za(e, n) {
  const t = n || Ja,
    r = new Map(),
    i = new Map(),
    l = new Map(),
    o = { ...Da, ...t.handlers },
    a = {
      all: s,
      applyData: ns,
      definitionById: r,
      footnoteById: i,
      footnoteCounts: l,
      footnoteOrder: [],
      handlers: o,
      one: c,
      options: t,
      patch: es,
      wrap: rs,
    };
  return (
    qr(e, function (u) {
      if (u.type === "definition" || u.type === "footnoteDefinition") {
        const p = u.type === "definition" ? r : i,
          m = String(u.identifier).toUpperCase();
        p.has(m) || p.set(m, u);
      }
    }),
    a
  );
  function c(u, p) {
    const m = u.type,
      h = a.handlers[m];
    if (nt.call(a.handlers, m) && h) return h(a, u, p);
    if (a.options.passThrough && a.options.passThrough.includes(m)) {
      if ("children" in u) {
        const { children: v, ...I } = u,
          w = Cn(I);
        return (w.children = a.all(u)), w;
      }
      return Cn(u);
    }
    return (a.options.unknownHandler || ts)(a, u, p);
  }
  function s(u) {
    const p = [];
    if ("children" in u) {
      const m = u.children;
      let h = -1;
      for (; ++h < m.length; ) {
        const E = a.one(m[h], u);
        if (E) {
          if (
            h &&
            m[h - 1].type === "break" &&
            (!Array.isArray(E) && E.type === "text" && (E.value = nr(E.value)),
            !Array.isArray(E) && E.type === "element")
          ) {
            const v = E.children[0];
            v && v.type === "text" && (v.value = nr(v.value));
          }
          Array.isArray(E) ? p.push(...E) : p.push(E);
        }
      }
    }
    return p;
  }
}
function es(e, n) {
  e.position && (n.position = Oi(e));
}
function ns(e, n) {
  let t = n;
  if (e && e.data) {
    const r = e.data.hName,
      i = e.data.hChildren,
      l = e.data.hProperties;
    if (typeof r == "string")
      if (t.type === "element") t.tagName = r;
      else {
        const o = "children" in t ? t.children : [t];
        t = { type: "element", tagName: r, properties: {}, children: o };
      }
    t.type === "element" && l && Object.assign(t.properties, Cn(l)),
      "children" in t &&
        t.children &&
        i !== null &&
        i !== void 0 &&
        (t.children = i);
  }
  return t;
}
function ts(e, n) {
  const t = n.data || {},
    r =
      "value" in n && !(nt.call(t, "hProperties") || nt.call(t, "hChildren"))
        ? { type: "text", value: n.value }
        : {
            type: "element",
            tagName: "div",
            properties: {},
            children: e.all(n),
          };
  return e.patch(n, r), e.applyData(n, r);
}
function rs(e, n) {
  const t = [];
  let r = -1;
  for (
    n &&
    t.push({
      type: "text",
      value: `
`,
    });
    ++r < e.length;

  )
    r &&
      t.push({
        type: "text",
        value: `
`,
      }),
      t.push(e[r]);
  return (
    n &&
      e.length > 0 &&
      t.push({
        type: "text",
        value: `
`,
      }),
    t
  );
}
function nr(e) {
  let n = 0,
    t = e.charCodeAt(n);
  for (; t === 9 || t === 32; ) n++, (t = e.charCodeAt(n));
  return e.slice(n);
}
function tr(e, n) {
  const t = Za(e, n),
    r = t.one(e, void 0),
    i = Ha(t),
    l = Array.isArray(r)
      ? { type: "root", children: r }
      : r || { type: "root", children: [] };
  return (
    i &&
      l.children.push(
        {
          type: "text",
          value: `
`,
        },
        i
      ),
    l
  );
}
function is(e, n) {
  return e && "run" in e
    ? async function (t, r) {
        const i = tr(t, { file: r, ...n });
        await e.run(i, r);
      }
    : function (t, r) {
        return tr(t, { file: r, ...(e || n) });
      };
}
function rr(e) {
  if (e) throw e;
}
var Bn, ir;
function ls() {
  if (ir) return Bn;
  ir = 1;
  var e = Object.prototype.hasOwnProperty,
    n = Object.prototype.toString,
    t = Object.defineProperty,
    r = Object.getOwnPropertyDescriptor,
    i = function (s) {
      return typeof Array.isArray == "function"
        ? Array.isArray(s)
        : n.call(s) === "[object Array]";
    },
    l = function (s) {
      if (!s || n.call(s) !== "[object Object]") return !1;
      var u = e.call(s, "constructor"),
        p =
          s.constructor &&
          s.constructor.prototype &&
          e.call(s.constructor.prototype, "isPrototypeOf");
      if (s.constructor && !u && !p) return !1;
      var m;
      for (m in s);
      return typeof m > "u" || e.call(s, m);
    },
    o = function (s, u) {
      t && u.name === "__proto__"
        ? t(s, u.name, {
            enumerable: !0,
            configurable: !0,
            value: u.newValue,
            writable: !0,
          })
        : (s[u.name] = u.newValue);
    },
    a = function (s, u) {
      if (u === "__proto__")
        if (e.call(s, u)) {
          if (r) return r(s, u).value;
        } else return;
      return s[u];
    };
  return (
    (Bn = function c() {
      var s,
        u,
        p,
        m,
        h,
        E,
        v = arguments[0],
        I = 1,
        w = arguments.length,
        _ = !1;
      for (
        typeof v == "boolean" && ((_ = v), (v = arguments[1] || {}), (I = 2)),
          (v == null || (typeof v != "object" && typeof v != "function")) &&
            (v = {});
        I < w;
        ++I
      )
        if (((s = arguments[I]), s != null))
          for (u in s)
            (p = a(v, u)),
              (m = a(s, u)),
              v !== m &&
                (_ && m && (l(m) || (h = i(m)))
                  ? (h
                      ? ((h = !1), (E = p && i(p) ? p : []))
                      : (E = p && l(p) ? p : {}),
                    o(v, { name: u, newValue: c(_, E, m) }))
                  : typeof m < "u" && o(v, { name: u, newValue: m }));
      return v;
    }),
    Bn
  );
}
var os = ls();
const $n = pr(os);
function tt(e) {
  if (typeof e != "object" || e === null) return !1;
  const n = Object.getPrototypeOf(e);
  return (
    (n === null ||
      n === Object.prototype ||
      Object.getPrototypeOf(n) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function as() {
  const e = [],
    n = { run: t, use: r };
  return n;
  function t(...i) {
    let l = -1;
    const o = i.pop();
    if (typeof o != "function")
      throw new TypeError("Expected function as last argument, not " + o);
    a(null, ...i);
    function a(c, ...s) {
      const u = e[++l];
      let p = -1;
      if (c) {
        o(c);
        return;
      }
      for (; ++p < i.length; )
        (s[p] === null || s[p] === void 0) && (s[p] = i[p]);
      (i = s), u ? ss(u, a)(...s) : o(null, ...s);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError("Expected `middelware` to be a function, not " + i);
    return e.push(i), n;
  }
}
function ss(e, n) {
  let t;
  return r;
  function r(...o) {
    const a = e.length > o.length;
    let c;
    a && o.push(i);
    try {
      c = e.apply(this, o);
    } catch (s) {
      const u = s;
      if (a && t) throw u;
      return i(u);
    }
    a ||
      (c && c.then && typeof c.then == "function"
        ? c.then(l, i)
        : c instanceof Error
        ? i(c)
        : l(c));
  }
  function i(o, ...a) {
    t || ((t = !0), n(o, ...a));
  }
  function l(o) {
    i(null, o);
  }
}
const ke = { basename: us, dirname: cs, extname: ps, join: hs, sep: "/" };
function us(e, n) {
  if (n !== void 0 && typeof n != "string")
    throw new TypeError('"ext" argument must be a string');
  fn(e);
  let t = 0,
    r = -1,
    i = e.length,
    l;
  if (n === void 0 || n.length === 0 || n.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (l) {
          t = i + 1;
          break;
        }
      } else r < 0 && ((l = !0), (r = i + 1));
    return r < 0 ? "" : e.slice(t, r);
  }
  if (n === e) return "";
  let o = -1,
    a = n.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (l) {
        t = i + 1;
        break;
      }
    } else
      o < 0 && ((l = !0), (o = i + 1)),
        a > -1 &&
          (e.codePointAt(i) === n.codePointAt(a--)
            ? a < 0 && (r = i)
            : ((a = -1), (r = o)));
  return t === r ? (r = o) : r < 0 && (r = e.length), e.slice(t, r);
}
function cs(e) {
  if ((fn(e), e.length === 0)) return ".";
  let n = -1,
    t = e.length,
    r;
  for (; --t; )
    if (e.codePointAt(t) === 47) {
      if (r) {
        n = t;
        break;
      }
    } else r || (r = !0);
  return n < 0
    ? e.codePointAt(0) === 47
      ? "/"
      : "."
    : n === 1 && e.codePointAt(0) === 47
    ? "//"
    : e.slice(0, n);
}
function ps(e) {
  fn(e);
  let n = e.length,
    t = -1,
    r = 0,
    i = -1,
    l = 0,
    o;
  for (; n--; ) {
    const a = e.codePointAt(n);
    if (a === 47) {
      if (o) {
        r = n + 1;
        break;
      }
      continue;
    }
    t < 0 && ((o = !0), (t = n + 1)),
      a === 46 ? (i < 0 ? (i = n) : l !== 1 && (l = 1)) : i > -1 && (l = -1);
  }
  return i < 0 || t < 0 || l === 0 || (l === 1 && i === t - 1 && i === r + 1)
    ? ""
    : e.slice(i, t);
}
function hs(...e) {
  let n = -1,
    t;
  for (; ++n < e.length; )
    fn(e[n]), e[n] && (t = t === void 0 ? e[n] : t + "/" + e[n]);
  return t === void 0 ? "." : fs(t);
}
function fs(e) {
  fn(e);
  const n = e.codePointAt(0) === 47;
  let t = ds(e, !n);
  return (
    t.length === 0 && !n && (t = "."),
    t.length > 0 && e.codePointAt(e.length - 1) === 47 && (t += "/"),
    n ? "/" + t : t
  );
}
function ds(e, n) {
  let t = "",
    r = 0,
    i = -1,
    l = 0,
    o = -1,
    a,
    c;
  for (; ++o <= e.length; ) {
    if (o < e.length) a = e.codePointAt(o);
    else {
      if (a === 47) break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === o - 1 || l === 1))
        if (i !== o - 1 && l === 2) {
          if (
            t.length < 2 ||
            r !== 2 ||
            t.codePointAt(t.length - 1) !== 46 ||
            t.codePointAt(t.length - 2) !== 46
          ) {
            if (t.length > 2) {
              if (((c = t.lastIndexOf("/")), c !== t.length - 1)) {
                c < 0
                  ? ((t = ""), (r = 0))
                  : ((t = t.slice(0, c)),
                    (r = t.length - 1 - t.lastIndexOf("/"))),
                  (i = o),
                  (l = 0);
                continue;
              }
            } else if (t.length > 0) {
              (t = ""), (r = 0), (i = o), (l = 0);
              continue;
            }
          }
          n && ((t = t.length > 0 ? t + "/.." : ".."), (r = 2));
        } else
          t.length > 0
            ? (t += "/" + e.slice(i + 1, o))
            : (t = e.slice(i + 1, o)),
            (r = o - i - 1);
      (i = o), (l = 0);
    } else a === 46 && l > -1 ? l++ : (l = -1);
  }
  return t;
}
function fn(e) {
  if (typeof e != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
}
const ms = { cwd: gs };
function gs() {
  return "/";
}
function rt(e) {
  return !!(
    e !== null &&
    typeof e == "object" &&
    "href" in e &&
    e.href &&
    "protocol" in e &&
    e.protocol &&
    e.auth === void 0
  );
}
function xs(e) {
  if (typeof e == "string") e = new URL(e);
  else if (!rt(e)) {
    const n = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        e +
        "`"
    );
    throw ((n.code = "ERR_INVALID_ARG_TYPE"), n);
  }
  if (e.protocol !== "file:") {
    const n = new TypeError("The URL must be of scheme file");
    throw ((n.code = "ERR_INVALID_URL_SCHEME"), n);
  }
  return ys(e);
}
function ys(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw ((r.code = "ERR_INVALID_FILE_URL_HOST"), r);
  }
  const n = e.pathname;
  let t = -1;
  for (; ++t < n.length; )
    if (n.codePointAt(t) === 37 && n.codePointAt(t + 1) === 50) {
      const r = n.codePointAt(t + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw ((i.code = "ERR_INVALID_FILE_URL_PATH"), i);
      }
    }
  return decodeURIComponent(n);
}
const Hn = ["history", "path", "basename", "stem", "extname", "dirname"];
class Kr {
  constructor(n) {
    let t;
    n
      ? rt(n)
        ? (t = { path: n })
        : typeof n == "string" || bs(n)
        ? (t = { value: n })
        : (t = n)
      : (t = {}),
      (this.cwd = "cwd" in t ? "" : ms.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored;
    let r = -1;
    for (; ++r < Hn.length; ) {
      const l = Hn[r];
      l in t &&
        t[l] !== void 0 &&
        t[l] !== null &&
        (this[l] = l === "history" ? [...t[l]] : t[l]);
    }
    let i;
    for (i in t) Hn.includes(i) || (this[i] = t[i]);
  }
  get basename() {
    return typeof this.path == "string" ? ke.basename(this.path) : void 0;
  }
  set basename(n) {
    Vn(n, "basename"),
      Un(n, "basename"),
      (this.path = ke.join(this.dirname || "", n));
  }
  get dirname() {
    return typeof this.path == "string" ? ke.dirname(this.path) : void 0;
  }
  set dirname(n) {
    lr(this.basename, "dirname"), (this.path = ke.join(n || "", this.basename));
  }
  get extname() {
    return typeof this.path == "string" ? ke.extname(this.path) : void 0;
  }
  set extname(n) {
    if ((Un(n, "extname"), lr(this.dirname, "extname"), n)) {
      if (n.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (n.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = ke.join(this.dirname, this.stem + (n || ""));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(n) {
    rt(n) && (n = xs(n)),
      Vn(n, "path"),
      this.path !== n && this.history.push(n);
  }
  get stem() {
    return typeof this.path == "string"
      ? ke.basename(this.path, this.extname)
      : void 0;
  }
  set stem(n) {
    Vn(n, "stem"),
      Un(n, "stem"),
      (this.path = ke.join(this.dirname || "", n + (this.extname || "")));
  }
  fail(n, t, r) {
    const i = this.message(n, t, r);
    throw ((i.fatal = !0), i);
  }
  info(n, t, r) {
    const i = this.message(n, t, r);
    return (i.fatal = void 0), i;
  }
  message(n, t, r) {
    const i = new te(n, t, r);
    return (
      this.path && ((i.name = this.path + ":" + i.name), (i.file = this.path)),
      (i.fatal = !1),
      this.messages.push(i),
      i
    );
  }
  toString(n) {
    return this.value === void 0
      ? ""
      : typeof this.value == "string"
      ? this.value
      : new TextDecoder(n || void 0).decode(this.value);
  }
}
function Un(e, n) {
  if (e && e.includes(ke.sep))
    throw new Error(
      "`" + n + "` cannot be a path: did not expect `" + ke.sep + "`"
    );
}
function Vn(e, n) {
  if (!e) throw new Error("`" + n + "` cannot be empty");
}
function lr(e, n) {
  if (!e) throw new Error("Setting `" + n + "` requires `path` to be set too");
}
function bs(e) {
  return !!(
    e &&
    typeof e == "object" &&
    "byteLength" in e &&
    "byteOffset" in e
  );
}
const ws = function (e) {
    const r = this.constructor.prototype,
      i = r[e],
      l = function () {
        return i.apply(l, arguments);
      };
    return Object.setPrototypeOf(l, r), l;
  },
  ks = {}.hasOwnProperty;
class xt extends ws {
  constructor() {
    super("copy"),
      (this.Compiler = void 0),
      (this.Parser = void 0),
      (this.attachers = []),
      (this.compiler = void 0),
      (this.freezeIndex = -1),
      (this.frozen = void 0),
      (this.namespace = {}),
      (this.parser = void 0),
      (this.transformers = as());
  }
  copy() {
    const n = new xt();
    let t = -1;
    for (; ++t < this.attachers.length; ) {
      const r = this.attachers[t];
      n.use(...r);
    }
    return n.data($n(!0, {}, this.namespace)), n;
  }
  data(n, t) {
    return typeof n == "string"
      ? arguments.length === 2
        ? (Yn("data", this.frozen), (this.namespace[n] = t), this)
        : (ks.call(this.namespace, n) && this.namespace[n]) || void 0
      : n
      ? (Yn("data", this.frozen), (this.namespace = n), this)
      : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const n = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [t, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1) continue;
      r[0] === !0 && (r[0] = void 0);
      const i = t.call(n, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return (
      (this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this
    );
  }
  parse(n) {
    this.freeze();
    const t = wn(n),
      r = this.parser || this.Parser;
    return qn("parse", r), r(String(t), t);
  }
  process(n, t) {
    const r = this;
    return (
      this.freeze(),
      qn("process", this.parser || this.Parser),
      Kn("process", this.compiler || this.Compiler),
      t ? i(void 0, t) : new Promise(i)
    );
    function i(l, o) {
      const a = wn(n),
        c = r.parse(a);
      r.run(c, a, function (u, p, m) {
        if (u || !p || !m) return s(u);
        const h = p,
          E = r.stringify(h, m);
        Es(E) ? (m.value = E) : (m.result = E), s(u, m);
      });
      function s(u, p) {
        u || !p ? o(u) : l ? l(p) : t(void 0, p);
      }
    }
  }
  processSync(n) {
    let t = !1,
      r;
    return (
      this.freeze(),
      qn("processSync", this.parser || this.Parser),
      Kn("processSync", this.compiler || this.Compiler),
      this.process(n, i),
      ar("processSync", "process", t),
      r
    );
    function i(l, o) {
      (t = !0), rr(l), (r = o);
    }
  }
  run(n, t, r) {
    or(n), this.freeze();
    const i = this.transformers;
    return (
      !r && typeof t == "function" && ((r = t), (t = void 0)),
      r ? l(void 0, r) : new Promise(l)
    );
    function l(o, a) {
      const c = wn(t);
      i.run(n, c, s);
      function s(u, p, m) {
        const h = p || n;
        u ? a(u) : o ? o(h) : r(void 0, h, m);
      }
    }
  }
  runSync(n, t) {
    let r = !1,
      i;
    return this.run(n, t, l), ar("runSync", "run", r), i;
    function l(o, a) {
      rr(o), (i = a), (r = !0);
    }
  }
  stringify(n, t) {
    this.freeze();
    const r = wn(t),
      i = this.compiler || this.Compiler;
    return Kn("stringify", i), or(n), i(n, r);
  }
  use(n, ...t) {
    const r = this.attachers,
      i = this.namespace;
    if ((Yn("use", this.frozen), n != null))
      if (typeof n == "function") c(n, t);
      else if (typeof n == "object") Array.isArray(n) ? a(n) : o(n);
      else throw new TypeError("Expected usable value, not `" + n + "`");
    return this;
    function l(s) {
      if (typeof s == "function") c(s, []);
      else if (typeof s == "object")
        if (Array.isArray(s)) {
          const [u, ...p] = s;
          c(u, p);
        } else o(s);
      else throw new TypeError("Expected usable value, not `" + s + "`");
    }
    function o(s) {
      if (!("plugins" in s) && !("settings" in s))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      a(s.plugins), s.settings && (i.settings = $n(!0, i.settings, s.settings));
    }
    function a(s) {
      let u = -1;
      if (s != null)
        if (Array.isArray(s))
          for (; ++u < s.length; ) {
            const p = s[u];
            l(p);
          }
        else throw new TypeError("Expected a list of plugins, not `" + s + "`");
    }
    function c(s, u) {
      let p = -1,
        m = -1;
      for (; ++p < r.length; )
        if (r[p][0] === s) {
          m = p;
          break;
        }
      if (m === -1) r.push([s, ...u]);
      else if (u.length > 0) {
        let [h, ...E] = u;
        const v = r[m][1];
        tt(v) && tt(h) && (h = $n(!0, v, h)), (r[m] = [s, h, ...E]);
      }
    }
  }
}
const Ss = new xt().freeze();
function qn(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Kn(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Yn(e, n) {
  if (n)
    throw new Error(
      "Cannot call `" +
        e +
        "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function or(e) {
  if (!tt(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function ar(e, n, t) {
  if (!t)
    throw new Error("`" + e + "` finished async. Use `" + n + "` instead");
}
function wn(e) {
  return Cs(e) ? e : new Kr(e);
}
function Cs(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Es(e) {
  return typeof e == "string" || Is(e);
}
function Is(e) {
  return !!(
    e &&
    typeof e == "object" &&
    "byteLength" in e &&
    "byteOffset" in e
  );
}
const Ns = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
  sr = [],
  ur = { allowDangerousHtml: !0 },
  vs = /^(https?|ircs?|mailto|xmpp)$/i,
  Ts = [
    { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
    { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
    {
      from: "allowNode",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowElement",
    },
    {
      from: "allowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowedElements",
    },
    { from: "className", id: "remove-classname" },
    {
      from: "disallowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "disallowedElements",
    },
    { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
    { from: "includeElementIndex", id: "#remove-includeelementindex" },
    {
      from: "includeNodeIndex",
      id: "change-includenodeindex-to-includeelementindex",
    },
    { from: "linkTarget", id: "remove-linktarget" },
    {
      from: "plugins",
      id: "change-plugins-to-remarkplugins",
      to: "remarkPlugins",
    },
    { from: "rawSourcePos", id: "#remove-rawsourcepos" },
    {
      from: "renderers",
      id: "change-renderers-to-components",
      to: "components",
    },
    { from: "source", id: "change-source-to-children", to: "children" },
    { from: "sourcePos", id: "#remove-sourcepos" },
    { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
    { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" },
  ];
function js(e) {
  const n = As(e),
    t = Ps(e);
  return Ls(n.runSync(n.parse(t), t), e);
}
function As(e) {
  const n = e.rehypePlugins || sr,
    t = e.remarkPlugins || sr,
    r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...ur } : ur;
  return Ss().use(ua).use(t).use(is, r).use(n);
}
function Ps(e) {
  const n = e.children || "",
    t = new Kr();
  return typeof n == "string" && (t.value = n), t;
}
function Ls(e, n) {
  const t = n.allowedElements,
    r = n.allowElement,
    i = n.components,
    l = n.disallowedElements,
    o = n.skipHtml,
    a = n.unwrapDisallowed,
    c = n.urlTransform || _s;
  for (const u of Ts)
    Object.hasOwn(n, u.from) &&
      ("" +
        u.from +
        (u.to ? "use `" + u.to + "` instead" : "remove it") +
        Ns +
        u.id,
      void 0);
  return (
    qr(e, s),
    $i(e, {
      Fragment: g.Fragment,
      components: i,
      ignoreInvalidStyle: !0,
      jsx: g.jsx,
      jsxs: g.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function s(u, p, m) {
    if (u.type === "raw" && m && typeof p == "number")
      return (
        o
          ? m.children.splice(p, 1)
          : (m.children[p] = { type: "text", value: u.value }),
        p
      );
    if (u.type === "element") {
      let h;
      for (h in Rn)
        if (Object.hasOwn(Rn, h) && Object.hasOwn(u.properties, h)) {
          const E = u.properties[h],
            v = Rn[h];
          (v === null || v.includes(u.tagName)) &&
            (u.properties[h] = c(String(E || ""), h, u));
        }
    }
    if (u.type === "element") {
      let h = t ? !t.includes(u.tagName) : l ? l.includes(u.tagName) : !1;
      if (
        (!h && r && typeof p == "number" && (h = !r(u, p, m)),
        h && m && typeof p == "number")
      )
        return (
          a && u.children
            ? m.children.splice(p, 1, ...u.children)
            : m.children.splice(p, 1),
          p
        );
    }
  }
}
function _s(e) {
  const n = e.indexOf(":"),
    t = e.indexOf("?"),
    r = e.indexOf("#"),
    i = e.indexOf("/");
  return n === -1 ||
    (i !== -1 && n > i) ||
    (t !== -1 && n > t) ||
    (r !== -1 && n > r) ||
    vs.test(e.slice(0, n))
    ? e
    : "";
}
const cr = {
    ai: {
      selected: "bg-[#e7f0f6]/95 text-[#5f7f9a] border-[#cddfeb]/90 shadow-sm",
      display: "text-[#5f7f9a] bg-[#f3f8fb]/95 border-[#dbe7ef]/90",
    },
    user: {
      selected: "bg-[#f1ebf8]/95 text-[#8a68b3] border-[#ddd0ee]/90 shadow-sm",
      display: "text-[#8a68b3] bg-[#f7f3fb]/95 border-[#e7ddf3]/90",
    },
  },
  zs = { textAlign: "justify" },
  Ds = 6e4,
  Js = () => {
    var wt, kt, St, Ct;
    const {
        knowledge: e,
        setKnowledge: n,
        characters: t,
        users: r,
        setCurrentApp: i,
        apiPresets: l,
        activePresetId: o,
        summaryApiPreset: a,
        secondaryApiFeatures: c,
        memoryCharLimit: s,
        setMemoryCharLimit: u,
        indexBuildProgress: p,
        setIndexBuildProgress: m,
        indexBuildAbortRef: h,
      } = Jr(),
      E = o ? l.find((x) => x.id === o) : void 0,
      v = (wt = a == null ? void 0 : a.endpoint) != null && wt.trim() ? a : E,
      [I, w] = X.useState(null),
      [_, T] = X.useState(!1),
      [q, $] = X.useState(!1),
      [b, M] = X.useState(!1),
      [W, B] = X.useState(!1),
      [K, A] = X.useState(null),
      [P, Y] = X.useState(""),
      [L, N] = X.useState(""),
      [H, J] = X.useState(""),
      ie = L ? `${L}T${H || "00:00"}` : "",
      [ge, f] = X.useState(null),
      [ne, ce] = X.useState(!1),
      [d, le] = X.useState(""),
      [xe, Z] = X.useState([]),
      [we, ye] = X.useState(""),
      [Ee, Ie] = X.useState(""),
      Ne = we ? `${we}T${Ee || "00:00"}` : "",
      [vn, Ze] = X.useState(null),
      [dn, en] = X.useState([]),
      [Ue, nn] = X.useState([]),
      [mn, Ae] = X.useState(null),
      ve = X.useRef(null);
    X.useEffect(
      () => () => {
        var x;
        (x = ve.current) == null || x.abort(), (ve.current = null);
      },
      []
    );
    const Te = X.useMemo(() => [...r, ...t], [r, t]),
      Pe = X.useMemo(() => {
        const x = { __global__: 0 };
        return (
          Te.forEach((S) => {
            x[S.id] = 0;
          }),
          e.forEach((S) => {
            const j = S.summary.length;
            (x.__global__ += j),
              S.perceivers.forEach((R) => {
                R in x && (x[R] += j);
              });
          }),
          x
        );
      }, [e, Te]),
      Fe = X.useMemo(
        () =>
          e.filter(
            (x) => (!I || x.perceivers.includes(I)) && (!_ || x.isEternal)
          ),
        [e, I, _]
      ),
      Me = X.useMemo(() => Fe.reduce((x, S) => x + S.summary.length, 0), [Fe]),
      Tn = Me > s,
      y = (x) => {
        const S = t.find((R) => R.id === x);
        if (S) return { type: "char", data: S };
        const j = r.find((R) => R.id === x);
        return j ? { type: "user", data: j } : null;
      },
      C = (x) => (r.some((j) => j.id === x) ? cr.user : cr.ai),
      z = (x) => {
        const S = new Date(x).getHours();
        return S >= 5 && S < 8
          ? "早"
          : S >= 8 && S < 12
          ? "上午"
          : S >= 12 && S < 13
          ? "中午"
          : S >= 13 && S < 17
          ? "下午"
          : S >= 17 && S < 19
          ? "傍晚"
          : S >= 19 && S < 23
          ? "晚上"
          : S === 23
          ? "深夜"
          : "凌晨";
      },
      F = (x) => {
        const S = x.startTime ? new Date(x.startTime) : null,
          j = S
            ? `${S.toLocaleDateString("zh-CN", {
                month: "long",
                day: "numeric",
              })}${z(x.startTime)}`
            : "旧时间",
          R = x.perceivers
            .map((_e) => {
              var tn;
              return (tn = Te.find((ze) => ze.id === _e)) == null
                ? void 0
                : tn.name;
            })
            .filter((_e) => !!(_e != null && _e.trim())),
          oe = R.slice(0, 3).join("、") || "相关角色",
          Ve = Array.from(new Set([...R, j, "旧记忆", "私人记录"])).slice(0, 6);
        return {
          recallTitle: `${j}·${oe} 的私人记录；本地兜底索引`,
          recallKeywords: Ve,
        };
      },
      U = (x) => {
        const S = F(x);
        n((j) =>
          j.map((R) => (R.id === x.id && !R.recallTitle ? { ...R, ...S } : R))
        );
      },
      pe = async (x, S) => {
        nn((j) => [...j, x]);
        try {
          const j = await ti(S, v);
          n((R) => R.map((oe) => (oe.id === x ? { ...oe, summary: j } : oe)));
        } catch (j) {
          console.error("Failed to simplify:", j);
        } finally {
          nn((j) => j.filter((R) => R !== x));
        }
      },
      je = (x) => {
        const S = { summary: P };
        ie && (S.startTime = new Date(ie).getTime()),
          n((j) => j.map((R) => (R.id === x ? { ...R, ...S } : R))),
          A(null);
      },
      be = (x) => {
        n((S) => S.filter((j) => j.id !== x)), f(null);
      },
      Be = (x) => {
        n((S) =>
          S.map((j) => (j.id === x ? { ...j, isEternal: !j.isEternal } : j))
        );
      },
      $e = (x) => {
        n((S) => S.map((j) => (j.id === x ? { ...j, perceivers: dn } : j))),
          Ze(null);
      },
      re = () => {
        if (!d.trim()) return;
        let x, S;
        Ne
          ? ((x = new Date(Ne).getTime()),
            (S = `**${new Date(x).toLocaleString("zh-CN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })} ${z(x)}**

${d.trim()}`))
          : ((x = Date.now()), (S = d.trim()));
        const j = {
          id: Math.random().toString(36).substring(7),
          summary: S,
          perceivers: xe.length > 0 ? xe : I ? [I] : [],
          startTime: x,
        };
        n((R) => [...R, j]), ce(!1), le(""), Z([]), ye(""), Ie("");
      },
      Le = async () => {
        var Ve, _e, tn;
        const x =
          (Ve = a == null ? void 0 : a.endpoint) != null && Ve.trim()
            ? a
            : void 0;
        if (
          !((_e = x == null ? void 0 : x.endpoint) != null && _e.trim()) ||
          !((tn = x == null ? void 0 : x.apiKey) != null && tn.trim())
        )
          return;
        const S = e.filter((ze) => !ze.recallTitle);
        if (S.length === 0) return;
        m({ current: 0, total: S.length }), Ae(null), (h.current = !1);
        let j = 0,
          R = 0,
          oe = !1;
        for (let ze = 0; ze < S.length && !h.current; ze++) {
          const De = S[ze];
          m({ current: ze + 1, total: S.length });
          const gn = new AbortController();
          ve.current = gn;
          let Et = !1;
          const Xr = window.setTimeout(() => {
            (Et = !0), gn.abort();
          }, Ds);
          try {
            const { recallTitle: qe, recallKeywords: xn } = await ni(
              De.summary,
              x,
              { signal: gn.signal }
            );
            qe
              ? n((Qr) =>
                  Qr.map((An) =>
                    An.id === De.id
                      ? {
                          ...An,
                          recallTitle: qe,
                          ...(xn != null && xn.length
                            ? { recallKeywords: xn }
                            : {}),
                        }
                      : An
                  )
                )
              : ((j += 1),
                U(De),
                console.warn(
                  "[handleBuildRecallIndex] 跳过记忆（索引生成失败）:",
                  { id: De.id, summary: De.summary }
                ));
          } catch (qe) {
            if (Et)
              (R += 1),
                (j += 1),
                U(De),
                console.warn("[handleBuildRecallIndex] 召回索引生成超时:", {
                  id: De.id,
                });
            else if (qe instanceof DOMException && qe.name === "AbortError") {
              oe = !0;
              break;
            } else
              (j += 1),
                U(De),
                console.warn("[handleBuildRecallIndex] 召回索引生成失败:", qe);
          } finally {
            window.clearTimeout(Xr), ve.current === gn && (ve.current = null);
          }
        }
        m(null),
          oe || h.current
            ? Ae("已中断召回索引生成。未完成的旧记忆可以稍后继续重试。")
            : j > 0
            ? Ae(
                R > 0
                  ? `${j} 条召回索引自动生成失败，其中 ${R} 条超时。已改用本地兜底索引，后续不会再卡在这些旧记忆上。`
                  : `${j} 条召回索引自动生成失败。已改用本地兜底索引，后续不会再卡在这些旧记忆上。`
              )
            : Ae("召回索引已生成完成。");
      },
      de = X.useMemo(() => e.filter((x) => !x.recallTitle).length, [e]),
      Yr = !!(
        (kt = a == null ? void 0 : a.endpoint) != null &&
        kt.trim() &&
        (St = a == null ? void 0 : a.apiKey) != null &&
        St.trim() &&
        c.recall
      ),
      Wr = I
        ? ((Ct = Te.find((x) => x.id === I)) == null ? void 0 : Ct.name) ??
          "视角"
        : "全部";
    (() => {
      var S;
      return `${
        I
          ? ((S = Te.find((j) => j.id === I)) == null ? void 0 : S.name) ?? ""
          : "世界"
      } ${Me.toLocaleString()}`;
    })();
    const yt =
        "absolute top-full mt-2 bg-white/90 backdrop-blur-xl border border-white/60 rounded-2xl shadow-xl z-20 overflow-hidden animate-in fade-in zoom-in-95 duration-150",
      bt = "fixed inset-0 z-10",
      jn = (x, S = "sky") =>
        `w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors border-b border-slate-100 last:border-0 ${
          x
            ? `bg-${S}-50 text-${S}-700 font-bold`
            : "text-slate-600 hover:bg-slate-50"
        }`;
    return g.jsxs("div", {
      className:
        "echoes-page echoes-page-echoes w-full h-full flex flex-col backdrop-blur-3xl",
      children: [
        g.jsxs("div", {
          className:
            "echoes-page-header safe-top pb-4 px-4 border-b border-white/40 flex flex-col gap-3 z-10 sticky top-0 bg-white/20 backdrop-blur-md",
          children: [
            g.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                g.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    g.jsx("button", {
                      onClick: () => i("home"),
                      className:
                        "echoes-echoes-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
                      children: g.jsx(oi, { className: "w-6 h-6" }),
                    }),
                    g.jsx("h1", {
                      className: "text-2xl font-bold text-slate-800",
                      children: "回响",
                    }),
                  ],
                }),
                g.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    g.jsxs("span", {
                      className:
                        "text-[10px] font-bold uppercase tracking-wider bg-white/80 border border-slate-200 text-slate-500 px-2.5 py-1 rounded-full shadow-sm",
                      children: [Fe.length, " Total Echoes"],
                    }),
                    g.jsx("button", {
                      onClick: () => {
                        ce((x) => !x), ne || Z(I ? [I] : []);
                      },
                      className: `${ri} transition-all ${ne ? ii : ""}`,
                      title: "撰写新回响",
                      children: g.jsx(Zr, {
                        className: `w-4 h-4 transition-transform ${
                          ne ? "rotate-45" : ""
                        }`,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            g.jsxs("div", {
              className: "flex items-stretch gap-2",
              children: [
                g.jsxs("div", {
                  className: "relative flex-1 min-w-0",
                  children: [
                    g.jsxs("button", {
                      onClick: () => {
                        $((x) => !x), M(!1), B(!1);
                      },
                      className:
                        "flex items-center gap-2 w-full h-full px-3 py-2 bg-white/50 border border-white/70 rounded-2xl text-xs font-bold text-slate-600 hover:bg-white/70 transition-all shadow-sm",
                      children: [
                        g.jsx(_n, {
                          className: "w-4 h-4 text-slate-400 flex-shrink-0",
                        }),
                        g.jsx("span", { className: "truncate", children: Wr }),
                        g.jsx(ai, {
                          className: `w-3.5 h-3.5 text-slate-400 ml-auto flex-shrink-0 transition-transform duration-200 ${
                            q ? "rotate-180" : ""
                          }`,
                        }),
                      ],
                    }),
                    q &&
                      g.jsxs(g.Fragment, {
                        children: [
                          g.jsx("div", { className: bt, onClick: () => $(!1) }),
                          g.jsx("div", {
                            className: `${yt} left-0 right-0`,
                            children: g.jsxs("div", {
                              className:
                                "max-h-[60vh] overflow-y-auto overscroll-contain",
                              children: [
                                g.jsxs("button", {
                                  onClick: () => {
                                    w(null), $(!1);
                                  },
                                  className: jn(I === null),
                                  children: [
                                    g.jsx(_n, {
                                      className: "w-5 h-5 text-slate-400",
                                    }),
                                    "全部回响",
                                    I === null &&
                                      g.jsx(Pn, {
                                        className:
                                          "w-4 h-4 text-sky-500 ml-auto",
                                      }),
                                  ],
                                }),
                                t.map((x) =>
                                  g.jsxs(
                                    "button",
                                    {
                                      onClick: () => {
                                        w(x.id), $(!1);
                                      },
                                      className: jn(I === x.id),
                                      children: [
                                        g.jsx(Ke, {
                                          char: x,
                                          className: "w-5 h-5 text-[9px]",
                                        }),
                                        x.name,
                                        I === x.id &&
                                          g.jsx(Pn, {
                                            className:
                                              "w-4 h-4 text-sky-500 ml-auto",
                                          }),
                                      ],
                                    },
                                    x.id
                                  )
                                ),
                                r.map((x) =>
                                  g.jsxs(
                                    "button",
                                    {
                                      onClick: () => {
                                        w(x.id), $(!1);
                                      },
                                      className: jn(I === x.id, "violet"),
                                      children: [
                                        g.jsx(Ke, {
                                          char: x,
                                          className: "w-5 h-5 text-[9px]",
                                        }),
                                        x.name,
                                        I === x.id &&
                                          g.jsx(Pn, {
                                            className:
                                              "w-4 h-4 text-violet-500 ml-auto",
                                          }),
                                      ],
                                    },
                                    x.id
                                  )
                                ),
                              ],
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
                g.jsxs("button", {
                  onClick: () => T((x) => !x),
                  title: _ ? "显示全部回响" : "仅显示永恒星标",
                  className: `flex-shrink-0 flex flex-col items-center justify-center gap-0.5 px-3 py-2 border rounded-2xl transition-all shadow-sm ${
                    _
                      ? "bg-amber-50 border-amber-200 text-amber-500"
                      : "bg-white/50 border-white/70 text-slate-400 hover:text-amber-500 hover:bg-amber-50/60 hover:border-amber-200"
                  }`,
                  children: [
                    g.jsx(zn, {
                      className: `w-4 h-4 transition-all ${
                        _ ? "fill-amber-400" : ""
                      }`,
                    }),
                    g.jsx("span", {
                      className: "text-[9px] font-bold leading-none",
                      children: "永恒",
                    }),
                  ],
                }),
                g.jsxs("div", {
                  className: "relative flex-shrink-0",
                  children: [
                    g.jsxs("button", {
                      onClick: () => {
                        B((x) => !x), $(!1), M(!1);
                      },
                      className: `flex flex-col items-center justify-center gap-0.5 px-3 py-2 border rounded-2xl transition-all shadow-sm ${
                        Tn
                          ? "bg-red-500 border-red-400 text-white animate-pulse"
                          : "bg-white/50 border-white/70 text-slate-400 hover:text-sky-500 hover:bg-sky-50/60 hover:border-sky-200"
                      }`,
                      children: [
                        g.jsx(hi, { className: "w-4 h-4" }),
                        g.jsx("span", {
                          className: "text-[9px] font-bold leading-none",
                          children: "重量",
                        }),
                      ],
                    }),
                    W &&
                      g.jsxs(g.Fragment, {
                        children: [
                          g.jsx("div", { className: bt, onClick: () => B(!1) }),
                          g.jsxs("div", {
                            className: `${yt} right-0 min-w-[220px]`,
                            children: [
                              g.jsxs("div", {
                                className:
                                  "px-4 pt-3 pb-2 border-b border-slate-100",
                                children: [
                                  g.jsx("p", {
                                    className:
                                      "text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1",
                                    children: "当前视图",
                                  }),
                                  g.jsxs("p", {
                                    className: `text-sm font-bold ${
                                      Me > s ? "text-red-500" : "text-slate-700"
                                    }`,
                                    children: [
                                      Me.toLocaleString(),
                                      " / ",
                                      s.toLocaleString(),
                                    ],
                                  }),
                                  Me > s &&
                                    g.jsxs("p", {
                                      className:
                                        "text-[10px] text-red-500 flex items-start gap-1 mt-1 leading-relaxed",
                                      children: [
                                        g.jsx(si, {
                                          className:
                                            "w-3 h-3 mt-0.5 flex-shrink-0",
                                        }),
                                        g.jsx("span", {
                                          children:
                                            '记忆过载，唯有"永恒"能承受岁月的消磨。各角色的回响自成边界，互不干涉；仅在交汇之时共承其重。',
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              g.jsxs("div", {
                                className:
                                  "px-4 pt-3 pb-2 border-b border-slate-100",
                                children: [
                                  g.jsxs("div", {
                                    className:
                                      "flex items-center justify-between mb-1.5",
                                    children: [
                                      g.jsx("p", {
                                        className:
                                          "text-[10px] font-bold uppercase tracking-wider text-slate-400",
                                        children: "记忆上限",
                                      }),
                                      g.jsxs("span", {
                                        className: `text-[10px] font-bold tabular-nums ${
                                          s > 6e4
                                            ? "text-amber-500"
                                            : "text-slate-500"
                                        }`,
                                        children: [
                                          (s / 1e3).toFixed(0),
                                          "k",
                                          s > 6e4 && " ⚠ 高负载",
                                        ],
                                      }),
                                    ],
                                  }),
                                  g.jsx("input", {
                                    type: "range",
                                    min: 5e3,
                                    max: 1e5,
                                    step: 5e3,
                                    value: s,
                                    onChange: (x) => u(Number(x.target.value)),
                                    className: "glass-range cursor-pointer",
                                  }),
                                  g.jsxs("div", {
                                    className:
                                      "flex justify-between text-[9px] text-slate-400 mt-0.5",
                                    children: [
                                      g.jsx("span", { children: "5k" }),
                                      g.jsx("span", { children: "100k" }),
                                    ],
                                  }),
                                  s > 6e4 &&
                                    g.jsx("p", {
                                      className:
                                        "text-[10px] text-amber-500 mt-1",
                                      children:
                                        "上限过高可能影响 AI 响应质量与速度。",
                                    }),
                                ],
                              }),
                              g.jsxs("div", {
                                className: "px-4 pt-2 pb-3",
                                children: [
                                  g.jsx("p", {
                                    className:
                                      "text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2",
                                    children: "全量对比",
                                  }),
                                  g.jsxs("div", {
                                    className:
                                      "max-h-[50vh] overflow-y-auto overscroll-contain -mx-1 px-1",
                                    children: [
                                      g.jsxs("div", {
                                        className:
                                          "flex justify-between items-center py-1",
                                        children: [
                                          g.jsxs("span", {
                                            className:
                                              "text-xs text-slate-500 flex items-center gap-1.5",
                                            children: [
                                              g.jsx(_n, {
                                                className: "w-3.5 h-3.5",
                                              }),
                                              "世界负载",
                                            ],
                                          }),
                                          g.jsx("span", {
                                            className: `text-xs font-bold ${
                                              (Pe.__global__ || 0) > s
                                                ? "text-red-500"
                                                : "text-slate-600"
                                            }`,
                                            children: (
                                              Pe.__global__ || 0
                                            ).toLocaleString(),
                                          }),
                                        ],
                                      }),
                                      t.map((x) =>
                                        g.jsxs(
                                          "div",
                                          {
                                            className:
                                              "flex justify-between items-center py-1",
                                            children: [
                                              g.jsxs("span", {
                                                className:
                                                  "text-xs text-slate-500 flex items-center gap-1.5",
                                                children: [
                                                  g.jsx(Ke, {
                                                    char: x,
                                                    className:
                                                      "w-3.5 h-3.5 text-[8px]",
                                                  }),
                                                  x.name,
                                                ],
                                              }),
                                              g.jsx("span", {
                                                className: `text-xs font-bold ${
                                                  (Pe[x.id] || 0) > s
                                                    ? "text-red-500"
                                                    : "text-slate-600"
                                                }`,
                                                children: (
                                                  Pe[x.id] || 0
                                                ).toLocaleString(),
                                              }),
                                            ],
                                          },
                                          x.id
                                        )
                                      ),
                                      r.map((x) =>
                                        g.jsxs(
                                          "div",
                                          {
                                            className:
                                              "flex justify-between items-center py-1",
                                            children: [
                                              g.jsxs("span", {
                                                className:
                                                  "text-xs text-slate-500 flex items-center gap-1.5",
                                                children: [
                                                  g.jsx(Ke, {
                                                    char: x,
                                                    className:
                                                      "w-3.5 h-3.5 text-[8px]",
                                                  }),
                                                  x.name,
                                                ],
                                              }),
                                              g.jsx("span", {
                                                className: `text-xs font-bold ${
                                                  (Pe[x.id] || 0) > s
                                                    ? "text-red-500"
                                                    : "text-slate-600"
                                                }`,
                                                children: (
                                                  Pe[x.id] || 0
                                                ).toLocaleString(),
                                              }),
                                            ],
                                          },
                                          x.id
                                        )
                                      ),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
        g.jsxs("div", {
          className: "flex-1 overflow-y-auto p-4 space-y-4",
          children: [
            Yr &&
              de > 0 &&
              !p &&
              g.jsxs("button", {
                onClick: () => {
                  Ae(null), Le();
                },
                className:
                  "w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white/40 border border-dashed border-slate-300/60 rounded-2xl text-xs text-slate-400 hover:text-[#5f7f9a] hover:bg-white/60 hover:border-[#89b6d3]/40 transition-all",
                children: [
                  g.jsx(It, { className: "w-3.5 h-3.5" }),
                  "为 ",
                  de,
                  " 条旧记忆生成召回索引",
                ],
              }),
            mn &&
              !p &&
              g.jsx("div", {
                className:
                  "w-full px-4 py-2.5 bg-white/50 border border-white/70 rounded-2xl text-xs text-slate-500 leading-relaxed",
                children: mn,
              }),
            p &&
              g.jsxs("div", {
                className:
                  "w-full px-4 py-3 bg-white/60 border border-white/80 rounded-2xl space-y-2",
                children: [
                  g.jsxs("div", {
                    className:
                      "flex items-center justify-between text-xs text-slate-500",
                    children: [
                      g.jsxs("span", {
                        children: [
                          "正在生成召回索引… ",
                          p.current,
                          "/",
                          p.total,
                        ],
                      }),
                      g.jsx("button", {
                        onClick: () => {
                          var x;
                          (h.current = !0),
                            (x = ve.current) == null || x.abort();
                        },
                        className:
                          "text-red-400 hover:text-red-500 font-medium transition-colors",
                        children: "中断",
                      }),
                    ],
                  }),
                  g.jsx("div", {
                    className:
                      "w-full h-1.5 bg-slate-100 rounded-full overflow-hidden",
                    children: g.jsx("div", {
                      className:
                        "h-full bg-[#89b6d3] rounded-full transition-all duration-300",
                      style: { width: `${(p.current / p.total) * 100}%` },
                    }),
                  }),
                ],
              }),
            ne &&
              g.jsxs("div", {
                className:
                  "bg-white border text-left border-[#d9e5ee] rounded-3xl p-5 shadow-[0_8px_18px_rgba(148,163,184,0.08)] mb-4 animate-in slide-in-from-top-4",
                children: [
                  g.jsx("textarea", {
                    value: d,
                    onChange: (x) => le(x.target.value),
                    placeholder: "记录一段全新的世界回响...",
                    className:
                      "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-[15px] text-slate-800 focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] focus:outline-none min-h-[120px] mb-4",
                  }),
                  g.jsxs("div", {
                    className: "mb-4",
                    children: [
                      g.jsx("label", {
                        className:
                          "block text-xs font-bold text-slate-500 mb-1.5",
                        children: "记忆时间（留空即为此刻）",
                      }),
                      g.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          g.jsx("input", {
                            type: "date",
                            value: we,
                            onChange: (x) => ye(x.target.value),
                            className:
                              "flex-1 min-w-0 bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all",
                          }),
                          g.jsx("input", {
                            type: "time",
                            value: Ee,
                            onChange: (x) => Ie(x.target.value),
                            disabled: !we,
                            className:
                              "w-28 bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all disabled:opacity-40",
                          }),
                        ],
                      }),
                      Ne &&
                        (() => {
                          const x = new Date(Ne).getTime(),
                            j = new Date(x).toLocaleString("zh-CN", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            });
                          return g.jsxs("p", {
                            className:
                              "mt-1.5 text-[11px] text-sky-500 font-medium",
                            children: [
                              "将生成前缀：",
                              g.jsxs("span", {
                                className: "font-bold",
                                children: ["**", j, " ", z(x), "**"],
                              }),
                            ],
                          });
                        })(),
                    ],
                  }),
                  g.jsxs("div", {
                    className: "mb-4",
                    children: [
                      g.jsx("label", {
                        className:
                          "block text-xs font-bold text-slate-500 mb-2",
                        children: "为哪些人织入这段记忆？",
                      }),
                      g.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: Te.map((x) => {
                          const S = xe.includes(x.id),
                            j = C(x.id);
                          return g.jsxs(
                            "button",
                            {
                              onClick: () =>
                                Z((R) =>
                                  S
                                    ? R.filter((oe) => oe !== x.id)
                                    : [...R, x.id]
                                ),
                              className: `text-[11px] font-bold px-3 py-1.5 rounded-full border flex items-center gap-1.5 transition-colors ${
                                S
                                  ? j.selected
                                  : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
                              }`,
                              children: [
                                g.jsx(Ke, {
                                  char: x,
                                  className: `w-4 h-4 text-[8px] ${
                                    S ? "opacity-90" : "grayscale opacity-60"
                                  }`,
                                }),
                                x.name,
                              ],
                            },
                            `tag-${x.id}`
                          );
                        }),
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    className: "flex justify-end gap-2",
                    children: [
                      g.jsx("button", {
                        onClick: () => ce(!1),
                        className:
                          "px-5 py-2.5 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors",
                        children: "取消",
                      }),
                      g.jsx("button", {
                        onClick: re,
                        disabled: !d.trim(),
                        className: `px-5 py-2.5 text-xs font-bold rounded-xl transition-colors ${Ln} ${li}`,
                        children: "生成回响",
                      }),
                    ],
                  }),
                ],
              }),
            Fe.length === 0 && !ne
              ? g.jsx("div", {
                  className: "text-center text-slate-400 text-sm mt-20 italic",
                  children: _
                    ? "还没有被标记为永恒的回响。"
                    : "这里空无一物，直到你投下第一瞥。",
                })
              : [...Fe].reverse().map((x) =>
                  g.jsx(
                    "div",
                    {
                      className: `bg-white/60 backdrop-blur-xl border rounded-3xl p-5 shadow-sm group hover:shadow-md transition-all ${
                        x.isEternal ? "border-amber-200/80" : "border-white/80"
                      }`,
                      children:
                        K === x.id
                          ? g.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                g.jsx("textarea", {
                                  value: P,
                                  onChange: (S) => Y(S.target.value),
                                  className:
                                    "w-full bg-white/50 border border-slate-200 rounded-2xl p-4 text-[15px] text-slate-800 focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] focus:outline-none min-h-[120px]",
                                }),
                                g.jsxs("div", {
                                  children: [
                                    g.jsx("label", {
                                      className:
                                        "block text-xs font-bold text-slate-500 mb-1.5",
                                      children: "记忆时间",
                                    }),
                                    g.jsxs("div", {
                                      className: "flex gap-2",
                                      children: [
                                        g.jsx("input", {
                                          type: "date",
                                          value: L,
                                          onChange: (S) => N(S.target.value),
                                          className:
                                            "flex-1 min-w-0 bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all",
                                        }),
                                        g.jsx("input", {
                                          type: "time",
                                          value: H,
                                          onChange: (S) => J(S.target.value),
                                          disabled: !L,
                                          className:
                                            "w-28 bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all disabled:opacity-40",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                g.jsxs("div", {
                                  className: "flex justify-end gap-2",
                                  children: [
                                    g.jsx("button", {
                                      onClick: () => A(null),
                                      className:
                                        "px-4 py-2 text-xs font-bold text-slate-400 hover:text-slate-600",
                                      children: "取消",
                                    }),
                                    g.jsx("button", {
                                      onClick: () => je(x.id),
                                      className: `px-4 py-2 text-xs font-bold rounded-xl ${Ln}`,
                                      children: "保存修改",
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : g.jsxs(g.Fragment, {
                              children: [
                                g.jsxs("div", {
                                  className:
                                    "flex justify-between items-start gap-4 mb-4",
                                  children: [
                                    g.jsx("div", {
                                      className:
                                        "text-[15px] text-slate-700 leading-relaxed flex-1 prose prose-slate prose-sm max-w-none",
                                      children: g.jsx(js, {
                                        components: {
                                          p: ({ ...S }) =>
                                            g.jsx("p", {
                                              className: "mb-2 last:mb-0",
                                              style: zs,
                                              ...S,
                                            }),
                                        },
                                        children: x.summary.replace(
                                          /\[ID:\s*[a-zA-Z0-9]+\]\s*/g,
                                          ""
                                        ),
                                      }),
                                    }),
                                    g.jsxs("div", {
                                      className:
                                        "flex flex-col gap-2 transition-opacity",
                                      children: [
                                        g.jsx("button", {
                                          onClick: () => Be(x.id),
                                          title: x.isEternal
                                            ? "取消永恒"
                                            : "标记为永恒",
                                          className: `p-2 rounded-xl border transition-all ${
                                            x.isEternal
                                              ? "text-amber-500 bg-amber-50 border-amber-200 shadow-sm"
                                              : "text-slate-300 hover:text-amber-400 hover:bg-amber-50/60 border-transparent hover:border-amber-100"
                                          }`,
                                          children: g.jsx(zn, {
                                            className: `w-4 h-4 ${
                                              x.isEternal
                                                ? "fill-amber-400"
                                                : ""
                                            }`,
                                          }),
                                        }),
                                        g.jsxs("div", {
                                          className:
                                            "opacity-40 group-hover:opacity-100 transition-opacity flex flex-col gap-2",
                                          children: [
                                            g.jsx("button", {
                                              onClick: () => {
                                                if (
                                                  (A(x.id),
                                                  Y(x.summary),
                                                  x.startTime)
                                                ) {
                                                  const S = new Date(
                                                      x.startTime
                                                    ),
                                                    j = (R) =>
                                                      String(R).padStart(
                                                        2,
                                                        "0"
                                                      );
                                                  N(
                                                    `${S.getFullYear()}-${j(
                                                      S.getMonth() + 1
                                                    )}-${j(S.getDate())}`
                                                  ),
                                                    J(
                                                      `${j(S.getHours())}:${j(
                                                        S.getMinutes()
                                                      )}`
                                                    );
                                                } else N(""), J("");
                                              },
                                              className:
                                                "p-2 text-slate-400 hover:text-sky-600 hover:bg-white rounded-xl shadow-sm border border-transparent hover:border-slate-100 transition-all",
                                              children: g.jsx(ui, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                            g.jsx("button", {
                                              onClick: () => {
                                                Ze(x.id), en([...x.perceivers]);
                                              },
                                              className:
                                                "p-2 text-slate-400 hover:text-indigo-600 hover:bg-white rounded-xl shadow-sm border border-transparent hover:border-slate-100 transition-all",
                                              title: "编辑记忆受众",
                                              children: g.jsx(ci, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                            g.jsx("button", {
                                              onClick: () =>
                                                pe(x.id, x.summary),
                                              disabled: Ue.includes(x.id),
                                              className: `p-2 text-slate-400 hover:text-emerald-600 hover:bg-white rounded-xl shadow-sm border border-transparent hover:border-slate-100 transition-all ${
                                                Ue.includes(x.id)
                                                  ? "animate-pulse"
                                                  : ""
                                              }`,
                                              title: "进一步精简",
                                              children: g.jsx(It, {
                                                className: `w-4 h-4 ${
                                                  Ue.includes(x.id)
                                                    ? "animate-pulse"
                                                    : ""
                                                }`,
                                              }),
                                            }),
                                            g.jsx("button", {
                                              onClick: () => f(x.id),
                                              className:
                                                "p-2 text-slate-400 hover:text-red-500 hover:bg-white rounded-xl shadow-sm border border-transparent hover:border-slate-100 transition-all",
                                              children: g.jsx(ei, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                ge === x.id &&
                                  g.jsxs("div", {
                                    className:
                                      "mb-4 p-3 bg-red-50 rounded-2xl flex items-center justify-between animate-in fade-in slide-in-from-right-4",
                                    children: [
                                      g.jsx("span", {
                                        className:
                                          "text-xs text-red-600 font-bold ml-2",
                                        children: "确认抹除这段回响？",
                                      }),
                                      g.jsxs("div", {
                                        className: "flex gap-2",
                                        children: [
                                          g.jsx("button", {
                                            onClick: () => f(null),
                                            className:
                                              "px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase",
                                            children: "取消",
                                          }),
                                          g.jsx("button", {
                                            onClick: () => be(x.id),
                                            className:
                                              "px-3 py-1.5 text-[10px] font-bold bg-red-500 text-white rounded-lg uppercase shadow-sm",
                                            children: "确认",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                vn === x.id
                                  ? g.jsxs("div", {
                                      className:
                                        "mt-4 pt-4 border-t border-white/40 animate-in fade-in",
                                      children: [
                                        g.jsx("label", {
                                          className:
                                            "block text-xs font-bold text-slate-500 mb-2",
                                          children: "更新这段记忆的拥有者：",
                                        }),
                                        g.jsx("div", {
                                          className:
                                            "flex flex-wrap gap-2 mb-3",
                                          children: Te.map((S) => {
                                            const j = dn.includes(S.id),
                                              R = C(S.id);
                                            return g.jsxs(
                                              "button",
                                              {
                                                onClick: () =>
                                                  en((oe) =>
                                                    j
                                                      ? oe.filter(
                                                          (Ve) => Ve !== S.id
                                                        )
                                                      : [...oe, S.id]
                                                  ),
                                                className: `text-[11px] font-bold px-3 py-1.5 rounded-full border flex items-center gap-1.5 transition-colors ${
                                                  j
                                                    ? R.selected
                                                    : "bg-white/50 text-slate-500 border-white hover:bg-white focus:outline-none"
                                                }`,
                                                children: [
                                                  g.jsx(Ke, {
                                                    char: S,
                                                    className: `w-4 h-4 text-[8px] ${
                                                      j
                                                        ? "opacity-90"
                                                        : "grayscale opacity-60"
                                                    }`,
                                                  }),
                                                  S.name,
                                                ],
                                              },
                                              `edit-tag-${S.id}`
                                            );
                                          }),
                                        }),
                                        g.jsxs("div", {
                                          className: "flex justify-end gap-2",
                                          children: [
                                            g.jsx("button", {
                                              onClick: () => Ze(null),
                                              className:
                                                "px-3 py-1.5 text-[10px] font-bold text-slate-400",
                                              children: "取消",
                                            }),
                                            g.jsx("button", {
                                              onClick: () => $e(x.id),
                                              className: `px-3 py-1.5 text-[10px] font-bold rounded-lg ${Ln}`,
                                              children: "保存标签",
                                            }),
                                          ],
                                        }),
                                      ],
                                    })
                                  : g.jsxs("div", {
                                      className: "flex flex-wrap gap-1.5 pt-2",
                                      children: [
                                        x.perceivers.map((S) => {
                                          const j = y(S);
                                          if (!j) return null;
                                          const R = C(S);
                                          return g.jsx(
                                            "span",
                                            {
                                              className: `text-[10px] font-bold px-2.5 py-1 rounded-full border shadow-sm flex items-center gap-1 ${R.display}`,
                                              children: j.data.name,
                                            },
                                            S
                                          );
                                        }),
                                        x.isEternal &&
                                          g.jsxs("span", {
                                            className:
                                              "text-[10px] font-bold px-2.5 py-1 rounded-full border shadow-sm flex items-center gap-1 text-amber-700 bg-amber-50 border-amber-100",
                                            children: [
                                              g.jsx(zn, {
                                                className:
                                                  "w-2.5 h-2.5 fill-amber-500",
                                              }),
                                              "永恒",
                                            ],
                                          }),
                                      ],
                                    }),
                              ],
                            }),
                    },
                    x.id
                  )
                ),
          ],
        }),
      ],
    });
  };
export { Js as Echoes, Js as default };
