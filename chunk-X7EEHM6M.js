import {
  ThemeService
} from "./chunk-GVED52CA.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel,
  PortfolioService
} from "./chunk-UWUI56SK.js";
import {
  CommonModule,
  DomSanitizer,
  EventEmitter,
  RouterLink,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-JQPCVUPX.js";
import {
  __async
} from "./chunk-WDMUDEB6.js";

// src/app/shared/components/navbar/navbar.component.ts
var _forTrack0 = ($index, $item) => $item.anchor;
function NavbarComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275listener("click", function NavbarComponent_For_21_Template_a_click_0_listener($event) {
      const link_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scrollTo($event, link_r2.anchor));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    \u0275\u0275property("href", link_r2.anchor, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", link_r2.label, " ");
  }
}
function NavbarComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "circle", 27)(2, "line", 28)(3, "line", 29)(4, "line", 30)(5, "line", 31)(6, "line", 32)(7, "line", 33)(8, "line", 34)(9, "line", 35);
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 36);
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 37)(1, "line", 38)(2, "line", 39);
  }
}
function NavbarComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 40)(1, "line", 41);
  }
}
function NavbarComponent_Conditional_34_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 47);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_34_For_3_Template_a_click_0_listener($event) {
      const link_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.scrollTo($event, link_r6.anchor);
      return \u0275\u0275resetView(ctx_r2.menuOpen.set(false));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r6 = ctx.$implicit;
    \u0275\u0275property("href", link_r6.anchor, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", link_r6.label, " ");
  }
}
function NavbarComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 42);
    \u0275\u0275repeaterCreate(2, NavbarComponent_Conditional_34_For_3_Template, 2, 2, "a", 43, _forTrack0);
    \u0275\u0275elementStart(4, "div", 44)(5, "button", 45);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_34_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.openContact.emit();
      return \u0275\u0275resetView(ctx_r2.menuOpen.set(false));
    });
    \u0275\u0275text(6, " \u2709 Contact Me ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 46);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_34_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.menuOpen.set(false));
    });
    \u0275\u0275text(8, " \u2699 Admin Dashboard ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.navLinks);
  }
}
var NavbarComponent = class _NavbarComponent {
  constructor() {
    this.themeService = inject(ThemeService);
    this.scrolled = signal(false);
    this.menuOpen = signal(false);
    this.openContact = new EventEmitter();
    this.navLinks = [
      { label: "About", anchor: "#about" },
      { label: "Experience", anchor: "#experience" },
      { label: "Skills", anchor: "#skills" },
      { label: "Achievements", anchor: "#achievements" },
      { label: "Education", anchor: "#education" },
      { label: "Hobbies", anchor: "#hobbies" }
    ];
  }
  onScroll() {
    this.scrolled.set(window.scrollY > 48);
  }
  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }
  scrollTo(e, anchor) {
    e.preventDefault();
    const el = document.querySelector(anchor);
    if (el)
      el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  static {
    this.\u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function NavbarComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, \u0275\u0275resolveWindow);
      }
    }, outputs: { openContact: "openContact" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 5, consts: [[2, "border-color", "rgba(24,209,193,0.1)"], [1, "max-w-6xl", "mx-auto", "px-6", "flex", "items-center", "justify-between", "h-16"], ["routerLink", "/", 1, "flex", "items-center", "gap-3", "group"], [1, "w-9", "h-9", "flex-shrink-0", 2, "filter", "drop-shadow(0 0 8px rgba(24,209,193,0.4))"], ["viewBox", "0 0 80 80", "xmlns", "http://www.w3.org/2000/svg"], ["id", "navGrad", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "100%"], ["offset", "0%", "stop-color", "#2AF599"], ["offset", "100%", "stop-color", "#09AFE9"], ["cx", "40", "cy", "40", "r", "39", "fill", "#071828", "stroke", "#18D1C1", "stroke-width", "1.5"], ["cx", "40", "cy", "40", "r", "33", "fill", "none", "stroke", "#2AF599", "stroke-width", "0.5", "stroke-dasharray", "3 4"], ["d", "M18 58 L30 22 L40 46 M22 46 H36", "stroke", "url(#navGrad)", "stroke-width", "4", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], ["d", "M40 58 L40 22 L52 42 L64 22 L64 58", "stroke", "#FEFEFE", "stroke-width", "3.5", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], ["cx", "40", "cy", "40", "r", "3", "fill", "#18D1C1"], [1, "hidden", "sm:block"], [1, "font-display", "text-sm", "font-semibold", "text-white", "leading-none"], [1, "font-mono", "text-xs", "text-teal-DEFAULT/60", "tracking-wider", "mt-0.5"], [1, "hidden", "md:flex", "items-center", "gap-1"], [1, "px-4", "py-2", "rounded-lg", "font-sans", "text-sm", "font-medium", "transition-all", "duration-200", "text-white/50", "hover:text-white", "hover:bg-white/5", 3, "href"], [1, "flex", "items-center", "gap-2"], ["title", "Toggle theme", 1, "w-9", "h-9", "rounded-full", "flex", "items-center", "justify-center", "transition-all", "duration-200", "flex-shrink-0", 2, "color", "rgba(255,255,255,0.5)", "background", "transparent", "border", "none", "cursor", "pointer", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["routerLink", "/dashboard", 1, "hidden", "sm:inline-flex", "btn-ghost", "text-xs"], [1, "hidden", "sm:inline-flex", "btn-brand", "text-xs", "px-4", "py-2", 3, "click"], [1, "md:hidden", "w-9", "h-9", "flex", "items-center", "justify-center", "rounded-lg", "transition-all", "duration-200", "flex-shrink-0", 2, "color", "rgba(255,255,255,0.5)", "background", "transparent", "border", "none", "cursor", "pointer", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "md:hidden", "glass-strong", "border-t", "border-teal-DEFAULT/10"], [1, "px-4", "py-2", "rounded-lg", "font-sans", "text-sm", "font-medium", "transition-all", "duration-200", "text-white/50", "hover:text-white", "hover:bg-white/5", 3, "click", "href"], ["cx", "12", "cy", "12", "r", "5"], ["x1", "12", "y1", "1", "x2", "12", "y2", "3"], ["x1", "12", "y1", "21", "x2", "12", "y2", "23"], ["x1", "4.22", "y1", "4.22", "x2", "5.64", "y2", "5.64"], ["x1", "18.36", "y1", "18.36", "x2", "19.78", "y2", "19.78"], ["x1", "1", "y1", "12", "x2", "3", "y2", "12"], ["x1", "21", "y1", "12", "x2", "23", "y2", "12"], ["x1", "4.22", "y1", "19.78", "x2", "5.64", "y2", "18.36"], ["x1", "18.36", "y1", "5.64", "x2", "19.78", "y2", "4.22"], ["d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["x1", "3", "y1", "12", "x2", "21", "y2", "12"], ["x1", "3", "y1", "18", "x2", "21", "y2", "18"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "px-6", "py-4", "flex", "flex-col", "gap-1"], [1, "px-4", "py-3", "rounded-lg", "text-sm", "font-medium", "text-white/60", "hover:text-white", "hover:bg-white/5", "transition-colors", 3, "href"], [1, "mt-3", "pt-3", "border-t", "border-white/5", "flex", "flex-col", "gap-2"], [1, "btn-brand", "w-full", "justify-center", "py-3", 3, "click"], ["routerLink", "/dashboard", 1, "btn-ghost", "w-full", "justify-center", "py-3", "text-sm", 3, "click"], [1, "px-4", "py-3", "rounded-lg", "text-sm", "font-medium", "text-white/60", "hover:text-white", "hover:bg-white/5", "transition-colors", 3, "click", "href"]], template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2)(3, "div", 3);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 4)(5, "defs")(6, "linearGradient", 5);
        \u0275\u0275element(7, "stop", 6)(8, "stop", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(9, "circle", 8)(10, "circle", 9)(11, "path", 10)(12, "path", 11)(13, "circle", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(14, "div", 13)(15, "div", 14);
        \u0275\u0275text(16, "Ananth Machiraju");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 15);
        \u0275\u0275text(18, "Project Manager");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 16);
        \u0275\u0275repeaterCreate(20, NavbarComponent_For_21_Template, 2, 2, "a", 17, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 18)(23, "button", 19);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_23_listener() {
          return ctx.themeService.toggle();
        });
        \u0275\u0275template(24, NavbarComponent_Conditional_24_Template, 10, 0, ":svg:svg", 20)(25, NavbarComponent_Conditional_25_Template, 2, 0, ":svg:svg", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "a", 21);
        \u0275\u0275text(27, " \u2699 Admin ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 22);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_28_listener() {
          return ctx.openContact.emit();
        });
        \u0275\u0275text(29, " \u2709 Contact Me ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "button", 23);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_30_listener() {
          return ctx.toggleMenu();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(31, "svg", 24);
        \u0275\u0275template(32, NavbarComponent_Conditional_32_Template, 3, 0)(33, NavbarComponent_Conditional_33_Template, 2, 0);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(34, NavbarComponent_Conditional_34_Template, 9, 0, "div", 25);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap("fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + (ctx.scrolled() ? "glass-strong border-b shadow-nav" : ""));
        \u0275\u0275advance(20);
        \u0275\u0275repeater(ctx.navLinks);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.themeService.theme() === "dark" ? 24 : 25);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(!ctx.menuOpen() ? 32 : 33);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.menuOpen() ? 34 : -1);
      }
    }, dependencies: [RouterLink, CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\shared\\components\\navbar\\navbar.component.ts", lineNumber: 121 });
})();

// src/app/shared/components/hero/hero.component.ts
var _c0 = ["heroCanvas"];
var _forTrack02 = ($index, $item) => $item.label;
function HeroComponent_For_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const kpi_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kpi_r2.label);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", kpi_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(kpi_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kpi_r2.sub);
  }
}
function HeroComponent_For_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 58)(2, "span", 59);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 61);
    \u0275\u0275element(7, "div", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bar_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(bar_r3.label);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", bar_r3.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", bar_r3.value, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", bar_r3.value + "%")("background", "linear-gradient(90deg," + bar_r3.color + ", " + bar_r3.color2 + ")");
  }
}
var HeroComponent = class _HeroComponent {
  constructor() {
    this.contact = new EventEmitter();
    this.portfolioService = inject(PortfolioService);
    this.animId = 0;
    this.cleanup = null;
    this.kpis = [
      { label: "Release Failures", value: "Zero", sub: "CAB Managed \xB7 3+ yrs", color: "#2AF599" },
      { label: "Incident Reduction", value: "40%+", sub: "PostNord Automation", color: "#09AFE9" },
      { label: "Doc Efficiency", value: "~30%", sub: "GenAI Embedded", color: "#18D1C1" },
      { label: "NCQA Measures", value: "49/75", sub: "Healthcare Certified", color: "#2AF599" }
    ];
    this.progressBars = [
      { label: "Programme Delivery", value: 95, color: "#09AFE9", color2: "#18D1C1" },
      { label: "Agile / SAFe", value: 92, color: "#18D1C1", color2: "#2AF599" },
      { label: "GenAI Integration", value: 88, color: "#2AF599", color2: "#09AFE9" },
      { label: "Stakeholder Mgmt", value: 90, color: "#09AFE9", color2: "#2AF599" }
    ];
  }
  ngAfterViewInit() {
    this.initThreeJS();
    this.initScrollReveal();
  }
  onContact() {
    this.contact.emit();
  }
  scrollToAbout() {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }
  initThreeJS() {
    return __async(this, null, function* () {
      try {
        const THREE = yield import("./chunk-G7YQW5AR.js");
        const canvas = this.canvasRef.nativeElement;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1e3);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        this.renderer = renderer;
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0, 0);
        camera.position.z = 30;
        const palette = [
          new THREE.Color("#09AFE9"),
          new THREE.Color("#18D1C1"),
          new THREE.Color("#2AF599")
        ];
        const STAR_COUNT = 700;
        const sPos = new Float32Array(STAR_COUNT * 3);
        const sCol = new Float32Array(STAR_COUNT * 3);
        for (let i = 0; i < STAR_COUNT; i++) {
          const r = 32 + Math.random() * 22;
          const t2 = Math.random() * Math.PI * 2;
          const p2 = Math.acos(2 * Math.random() - 1);
          sPos[i * 3] = r * Math.sin(p2) * Math.cos(t2);
          sPos[i * 3 + 1] = r * Math.sin(p2) * Math.sin(t2);
          sPos[i * 3 + 2] = r * Math.cos(p2);
          const c = palette[Math.floor(Math.random() * 3)];
          sCol[i * 3] = c.r * 0.5;
          sCol[i * 3 + 1] = c.g * 0.5;
          sCol[i * 3 + 2] = c.b * 0.5;
        }
        const starGeo = new THREE.BufferGeometry();
        starGeo.setAttribute("position", new THREE.BufferAttribute(sPos, 3));
        starGeo.setAttribute("color", new THREE.BufferAttribute(sCol, 3));
        const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({
          size: 0.12,
          vertexColors: true,
          transparent: true,
          opacity: 0.5,
          sizeAttenuation: true
        }));
        scene.add(stars);
        const NODE_COUNT = 24;
        const nodeGeo = new THREE.SphereGeometry(0.22, 10, 10);
        const nodeData = [];
        for (let i = 0; i < NODE_COUNT; i++) {
          const color = palette[Math.floor(Math.random() * 3)];
          const mesh = new THREE.Mesh(nodeGeo, new THREE.MeshBasicMaterial({
            color,
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending
          }));
          const r = 5 + Math.random() * 13;
          const t2 = Math.random() * Math.PI * 2;
          const p2 = Math.acos(2 * Math.random() - 1);
          const bx = r * Math.sin(p2) * Math.cos(t2);
          const by = r * Math.sin(p2) * Math.sin(t2) * 0.55;
          const bz = (Math.random() - 0.5) * 6;
          mesh.position.set(bx, by, bz);
          scene.add(mesh);
          nodeData.push({ mesh, bx, by, bz, phase: Math.random() * Math.PI * 2, speed: 0.3 + Math.random() * 0.7, color });
        }
        const MAX_LINES = NODE_COUNT * NODE_COUNT;
        const lPos = new Float32Array(MAX_LINES * 2 * 3);
        const lCol = new Float32Array(MAX_LINES * 2 * 3);
        const lineGeo = new THREE.BufferGeometry();
        lineGeo.setAttribute("position", new THREE.BufferAttribute(lPos, 3));
        lineGeo.setAttribute("color", new THREE.BufferAttribute(lCol, 3));
        lineGeo.setDrawRange(0, 0);
        const networkLines = new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({
          vertexColors: true,
          transparent: true,
          opacity: 0.45,
          blending: THREE.AdditiveBlending
        }));
        scene.add(networkLines);
        let tgtX = 0, tgtY = 0, curX = 0, curY = 0;
        const onMouse = (e) => {
          tgtX = (e.clientX / window.innerWidth - 0.5) * 2;
          tgtY = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        const onResize = () => {
          const w = canvas.clientWidth, h = canvas.clientHeight;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        };
        document.addEventListener("mousemove", onMouse);
        window.addEventListener("resize", onResize);
        this.cleanup = () => {
          document.removeEventListener("mousemove", onMouse);
          window.removeEventListener("resize", onResize);
        };
        const MAX_DIST = 9;
        const animate = () => {
          this.animId = requestAnimationFrame(animate);
          const t = Date.now() * 35e-5;
          curX += (tgtX - curX) * 0.04;
          curY += (tgtY - curY) * 0.04;
          stars.rotation.y = t * 0.06;
          stars.rotation.x = t * 0.02;
          nodeData.forEach((nd) => {
            nd.mesh.position.x = nd.bx + Math.sin(t * nd.speed + nd.phase) * 2.8;
            nd.mesh.position.y = nd.by + Math.cos(t * nd.speed * 0.65 + nd.phase) * 2;
            const sc = 0.6 + 0.6 * Math.abs(Math.sin(t * nd.speed * 1.2 + nd.phase));
            nd.mesh.scale.setScalar(sc);
          });
          let li = 0;
          for (let i = 0; i < NODE_COUNT; i++) {
            for (let j = i + 1; j < NODE_COUNT; j++) {
              const a = nodeData[i].mesh.position;
              const b = nodeData[j].mesh.position;
              const dx = a.x - b.x, dy = a.y - b.y, dz = a.z - b.z;
              const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
              if (dist < MAX_DIST && li < MAX_LINES - 1) {
                const alpha = (1 - dist / MAX_DIST) * 0.8;
                const ca = nodeData[i].color, cb = nodeData[j].color;
                const base = li * 6;
                lPos[base] = a.x;
                lPos[base + 1] = a.y;
                lPos[base + 2] = a.z;
                lCol[base] = ca.r * alpha;
                lCol[base + 1] = ca.g * alpha;
                lCol[base + 2] = ca.b * alpha;
                lPos[base + 3] = b.x;
                lPos[base + 4] = b.y;
                lPos[base + 5] = b.z;
                lCol[base + 3] = cb.r * alpha;
                lCol[base + 4] = cb.g * alpha;
                lCol[base + 5] = cb.b * alpha;
                li++;
              }
            }
          }
          lineGeo.setDrawRange(0, li * 2);
          lineGeo.attributes["position"].needsUpdate = true;
          lineGeo.attributes["color"].needsUpdate = true;
          scene.rotation.y += (curX * 0.05 - scene.rotation.y) * 0.04;
          scene.rotation.x += (-curY * 0.035 - scene.rotation.x) * 0.04;
          renderer.render(scene, camera);
        };
        animate();
      } catch {
      }
    });
  }
  initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.classList.add("visible");
      });
    }, { threshold: 0.1 });
    setTimeout(() => {
      document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => observer.observe(el));
    }, 100);
  }
  ngOnDestroy() {
    cancelAnimationFrame(this.animId);
    this.renderer?.dispose();
    this.cleanup?.();
  }
  static {
    this.\u0275fac = function HeroComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeroComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroComponent, selectors: [["app-hero"]], viewQuery: function HeroComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasRef = _t.first);
      }
    }, outputs: { contact: "contact" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 84, vars: 0, consts: [["heroCanvas", ""], ["id", "hero", 1, "relative", "min-h-screen", "flex", "items-center", "overflow-hidden", "bg-ink-DEFAULT"], ["id", "hero-canvas", 1, "absolute", "inset-0", "w-full", "h-full"], [1, "absolute", "inset-0", "overflow-hidden", "pointer-events-none"], [1, "absolute", "top-1/4", "right-1/4", "w-96", "h-96", "rounded-full", "opacity-10", "animate-float-slow", 2, "background", "radial-gradient(circle, #09AFE9, transparent 70%)"], [1, "absolute", "bottom-1/4", "left-1/4", "w-80", "h-80", "rounded-full", "opacity-8", "animate-float", 2, "background", "radial-gradient(circle, #2AF599, transparent 70%)", "animation-delay", "2s"], [1, "absolute", "top-1/2", "left-1/2", "w-64", "h-64", "rounded-full", "opacity-5", "animate-float-slow", 2, "background", "radial-gradient(circle, #18D1C1, transparent 70%)", "animation-delay", "4s", "transform", "translate(-50%, -50%)"], [1, "absolute", "inset-0", "opacity-5", 2, "background-image", "linear-gradient(rgba(24,209,193,0.3) 1px, transparent 1px),\n                          linear-gradient(90deg, rgba(24,209,193,0.3) 1px, transparent 1px)", "background-size", "60px 60px"], [1, "scan-line", "absolute", "inset-0", "pointer-events-none", 2, "z-index", "1"], [1, "relative", "z-10", "max-w-6xl", "mx-auto", "px-6", "py-24", "pt-32", "w-full"], [1, "grid", "lg:grid-cols-2", "gap-16", "items-center"], [1, "space-y-8"], [1, "reveal", "flex", "items-center", "gap-3"], [1, "section-tag"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-mint-DEFAULT", "animate-glow-pulse", "inline-block"], [1, "reveal", "reveal-delay-1", "space-y-2"], [1, "font-mono", "text-xs", "text-teal-DEFAULT/60", "tracking-widest", "uppercase"], [1, "font-display", "text-5xl", "lg:text-7xl", "font-bold", "leading-none", "tracking-tight"], [1, "text-white"], [1, "text-grad"], [1, "reveal", "reveal-delay-2", "text-lg", "text-white/50", "leading-relaxed", "max-w-lg"], [1, "text-teal-DEFAULT"], [1, "reveal", "reveal-delay-3", "flex", "flex-wrap", "gap-2"], ["href", "tel:+917416261622", 1, "contact-pill-hero"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.7 10.9a19.79 19.79 0 01-3.07-8.67A2 2 0 013.61 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-.77a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 15.26z"], ["href", "mailto:ananth.machiraju@outlook.com", 1, "contact-pill-hero"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], ["href", "https://linkedin.com/in/saiananthmachiraju", "target", "_blank", 1, "contact-pill-hero"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"], [1, "reveal", "reveal-delay-4", "flex", "flex-wrap", "gap-4"], [1, "btn-brand", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "btn-outline", 3, "click"], ["d", "M12 5v14M5 12l7 7 7-7"], [1, "reveal", "reveal-right", "reveal-delay-2", "hidden", "lg:block"], [1, "relative"], [1, "glass-card", "rounded-2xl", "p-6", "border", "border-teal-DEFAULT/15", "shadow-card", "animate-float"], [1, "flex", "items-center", "justify-between", "mb-5"], [1, "font-mono", "text-xs", "text-teal-DEFAULT", "tracking-widest", "uppercase"], [1, "flex", "gap-1.5"], [1, "w-2.5", "h-2.5", "rounded-full", "bg-mint-DEFAULT", "animate-glow-pulse"], [1, "font-mono", "text-xs", "text-white/30"], [1, "grid", "grid-cols-2", "gap-3", "mb-5"], [1, "glass-light", "rounded-xl", "p-4"], [1, "space-y-3"], [1, "absolute", "-top-4", "-right-4", "glass-card", "rounded-xl", "px-4", "py-2", "text-xs", "font-mono", "text-mint-DEFAULT", "border", "border-mint-DEFAULT/20", "animate-float", 2, "animation-delay", "1s"], [1, "absolute", "-bottom-3", "-left-4", "glass-card", "rounded-xl", "px-4", "py-2", "text-xs", "font-mono", "text-cyan-DEFAULT", "border", "border-cyan-DEFAULT/20", "animate-float", 2, "animation-delay", "2.5s"], [1, "absolute", "top-1/2", "-right-8", "-translate-y-1/2", "w-20", "h-20", "glass-card", "rounded-full", "flex", "flex-col", "items-center", "justify-center", "border", "border-teal-DEFAULT/20", "animate-float-slow"], [1, "font-display", "text-2xl", "font-bold", "text-grad", "leading-none"], [1, "font-mono", "text-xs", "text-white/40", "leading-tight", "text-center"], [1, "absolute", "bottom-8", "left-1/2", "-translate-x-1/2", "flex", "flex-col", "items-center", "gap-2", "text-white/30", "animate-bounce-dot"], [1, "font-mono", "text-xs", "tracking-widest", "uppercase"], [1, "text-xs", "font-mono", "text-white/40", "mb-1"], [1, "text-xl", "font-display", "font-bold"], [1, "text-xs", "text-white/30", "mt-0.5"], [1, "flex", "justify-between", "items-center", "mb-1"], [1, "font-mono", "text-xs", "text-white/50"], [1, "font-mono", "text-xs"], [1, "h-1", "bg-white/5", "rounded-full", "overflow-hidden"], [1, "h-full", "rounded-full", "transition-all", "duration-1000"]], template: function HeroComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 1);
        \u0275\u0275element(1, "canvas", 2, 0);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "div", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "div", 7)(8, "div", 8);
        \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "div", 13);
        \u0275\u0275element(14, "span", 14);
        \u0275\u0275text(15, " Available for the right opportunity ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 15)(17, "div", 16);
        \u0275\u0275text(18, "Project Manager \xB7 IT Delivery Lead");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "h1", 17)(20, "span", 18);
        \u0275\u0275text(21, "Ananth");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "br");
        \u0275\u0275elementStart(23, "span", 19);
        \u0275\u0275text(24, "Machiraju");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "p", 20);
        \u0275\u0275text(26, " Transforming complex enterprise programmes into scalable digital success. ");
        \u0275\u0275elementStart(27, "span", 21);
        \u0275\u0275text(28, "10 years");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, " across Financial Services, Logistics & Healthcare. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 22)(31, "a", 23);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(32, "svg", 24);
        \u0275\u0275element(33, "path", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, " +91 7416261622 ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(35, "a", 26);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(36, "svg", 24);
        \u0275\u0275element(37, "path", 27)(38, "polyline", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, " ananth.machiraju@outlook.com ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(40, "a", 29);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(41, "svg", 30);
        \u0275\u0275element(42, "path", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275text(43, " LinkedIn ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(44, "div", 32)(45, "button", 33);
        \u0275\u0275listener("click", function HeroComponent_Template_button_click_45_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onContact());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(46, "svg", 34);
        \u0275\u0275element(47, "path", 27)(48, "polyline", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275text(49, " Get In Touch ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(50, "button", 35);
        \u0275\u0275listener("click", function HeroComponent_Template_button_click_50_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.scrollToAbout());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(51, "svg", 34);
        \u0275\u0275element(52, "path", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275text(53, " Explore Profile ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(54, "div", 37)(55, "div", 38)(56, "div", 39)(57, "div", 40)(58, "div", 41);
        \u0275\u0275text(59, "Live Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 42);
        \u0275\u0275element(61, "div", 43);
        \u0275\u0275elementStart(62, "div", 44);
        \u0275\u0275text(63, "Online");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(64, "div", 45);
        \u0275\u0275repeaterCreate(65, HeroComponent_For_66_Template, 7, 5, "div", 46, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 47);
        \u0275\u0275repeaterCreate(68, HeroComponent_For_69_Template, 8, 8, "div", null, _forTrack02);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 48);
        \u0275\u0275text(71, " \u{1F3AF} Zero Release Failures ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 49);
        \u0275\u0275text(73, " \u{1F916} GenAI Pioneer \xB7 TCS ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "div", 50)(75, "span", 51);
        \u0275\u0275text(76, "10");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "span", 52);
        \u0275\u0275text(78, "Yrs Exp");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(79, "div", 53)(80, "span", 54);
        \u0275\u0275text(81, "Scroll");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(82, "svg", 34);
        \u0275\u0275element(83, "path", 36);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(65);
        \u0275\u0275repeater(ctx.kpis);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.progressBars);
      }
    }, dependencies: [CommonModule], styles: [".contact-pill-hero[_ngcontent-%COMP%] {\n        display: inline-flex; align-items: center; gap: 0.4rem;\n        padding: 0.35rem 0.85rem;\n        background: rgba(255,255,255,0.04);\n        border: 1px solid rgba(24,209,193,0.15);\n        border-radius: 20px;\n        font-size: 0.75rem;\n        color: rgba(255,255,255,0.5);\n        font-family: 'DM Mono', monospace;\n        text-decoration: none;\n        transition: all 0.2s;\n      }\n      .contact-pill-hero[_ngcontent-%COMP%]:hover {\n        border-color: rgba(24,209,193,0.5);\n        color: #18D1C1;\n        background: rgba(24,209,193,0.06);\n      }"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent", filePath: "src\\app\\shared\\components\\hero\\hero.component.ts", lineNumber: 187 });
})();

// src/app/shared/components/about/about.component.ts
function AboutComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r1);
  }
}
var AboutComponent = class _AboutComponent {
  constructor() {
    this.portfolioService = inject(PortfolioService);
    this.summary = this.portfolioService.summary;
    this.highlights = [
      "IIM Bengaluru Graduate",
      "AWS Certified",
      "SAFe\xAE Practitioner",
      "PMP Candidate",
      "GenAI Pioneer",
      "UK Regulated Delivery",
      "Zero Release Failures",
      "Multi-Industry"
    ];
  }
  static {
    this.\u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 1, consts: [["id", "about", 1, "relative", "py-24", "overflow-hidden"], [1, "absolute", "inset-0", 2, "background", "linear-gradient(180deg, #071828 0%, #0B2035 50%, #071828 100%)"], [1, "relative", "z-10", "max-w-6xl", "mx-auto", "px-6"], [1, "reveal", "text-center", "mb-16"], [1, "section-tag", "mx-auto", "mb-4"], [1, "font-display", "text-4xl", "lg:text-5xl", "font-bold", "text-white", "mb-4"], [1, "section-divider", "w-24", "mx-auto"], [1, "grid", "lg:grid-cols-3", "gap-8", "items-start"], [1, "lg:col-span-2", "reveal", "reveal-delay-1"], [1, "glass-card", "rounded-2xl", "p-8", "border", "border-teal-DEFAULT/15", "relative", "overflow-hidden"], [1, "absolute", "left-0", "top-0", "bottom-0", "w-1", "rounded-l-2xl", 2, "background", "linear-gradient(180deg, #09AFE9, #2AF599)"], [1, "pl-4"], [1, "font-mono", "text-xs", "text-teal-DEFAULT/60", "tracking-widest", "uppercase", "mb-4"], [1, "text-white/70", "leading-relaxed", "text-base", "lg:text-lg", "font-light"], [1, "flex", "flex-wrap", "gap-2", "mt-6"], [1, "tech-tag"], [1, "space-y-4", "reveal", "reveal-delay-2"], [1, "glass-card", "rounded-2xl", "p-5", "border", "border-teal-DEFAULT/15", "text-center", "hover:border-teal-DEFAULT/40", "transition-colors", "group"], [1, "font-display", "text-4xl", "font-bold", "text-grad", "mb-1", "group-hover:scale-110", "transition-transform"], [1, "font-mono", "text-xs", "text-white/40", "tracking-wider", "uppercase"], [1, "glass-card", "rounded-2xl", "p-5", "border", "border-cyan-DEFAULT/15", "text-center", "hover:border-cyan-DEFAULT/40", "transition-colors", "group"], [1, "font-display", "text-4xl", "font-bold", "mb-1", "group-hover:scale-110", "transition-transform", 2, "color", "#09AFE9"], [1, "glass-card", "rounded-2xl", "p-5", "border", "border-mint-DEFAULT/15", "text-center", "hover:border-mint-DEFAULT/40", "transition-colors", "group"], [1, "font-display", "text-4xl", "font-bold", "mb-1", "group-hover:scale-110", "transition-transform", 2, "color", "#2AF599"], [1, "glass-card", "rounded-2xl", "p-5", "border", "border-teal-DEFAULT/15"], [1, "font-mono", "text-xs", "text-teal-DEFAULT/60", "uppercase", "tracking-widest", "mb-3"], [1, "flex", "items-center", "gap-2", "text-white/70", "text-sm"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#18D1C1", "stroke-width", "2"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], [1, "flex", "items-center", "gap-2", "text-white/40", "text-xs", "mt-2", "font-mono"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-mint-DEFAULT", "animate-glow-pulse"]], template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5, "About");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h2", 5);
        \u0275\u0275text(7, "Professional Summary");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "div", 9);
        \u0275\u0275element(12, "div", 10);
        \u0275\u0275elementStart(13, "div", 11)(14, "div", 12);
        \u0275\u0275text(15, "Overview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p", 13);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 14);
        \u0275\u0275repeaterCreate(19, AboutComponent_For_20_Template, 2, 1, "span", 15, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "div", 16)(22, "div", 17)(23, "div", 18);
        \u0275\u0275text(24, "10");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 19);
        \u0275\u0275text(26, "Years in Tech");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 20)(28, "div", 21);
        \u0275\u0275text(29, "3+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 19);
        \u0275\u0275text(31, "Companies");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 22)(33, "div", 23);
        \u0275\u0275text(34, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 19);
        \u0275\u0275text(36, "Industries");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 24)(38, "div", 25);
        \u0275\u0275text(39, "Currently Based");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 26);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(41, "svg", 27);
        \u0275\u0275element(42, "path", 28)(43, "circle", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275text(44, " Bengaluru, India ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(45, "div", 30);
        \u0275\u0275element(46, "span", 31);
        \u0275\u0275text(47, " Open to relocation ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275textInterpolate1(" ", ctx.summary(), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.highlights);
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src\\app\\shared\\components\\about\\about.component.ts", lineNumber: 83 });
})();

// src/app/shared/components/experience/experience.component.ts
var _forTrack03 = ($index, $item) => $item.company;
function ExperienceComponent_For_14_Conditional_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r4);
  }
}
function ExperienceComponent_For_14_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, ExperienceComponent_For_14_Conditional_17_For_2_Template, 2, 1, "span", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const exp_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(exp_r5.tags);
  }
}
function ExperienceComponent_For_14_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 25)(1, "span", 31);
    \u0275\u0275text(2, "\u21B3");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bullet_r6 = ctx.$implicit;
    const exp_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", exp_r5.color || "#18D1C1");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", bullet_r6, " ");
  }
}
function ExperienceComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div")(3, "div", 14);
    \u0275\u0275listener("mouseenter", function ExperienceComponent_For_14_Template_div_mouseenter_3_listener() {
      const \u0275$index_25_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.active.set(\u0275$index_25_r2));
    })("mouseleave", function ExperienceComponent_For_14_Template_div_mouseleave_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.active.set(-1));
    });
    \u0275\u0275element(4, "div", 15)(5, "div", 16);
    \u0275\u0275elementStart(6, "div", 17)(7, "div", 18)(8, "div")(9, "div", 19);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 20);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 21);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span", 22);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, ExperienceComponent_For_14_Conditional_17_Template, 3, 0, "div", 23);
    \u0275\u0275elementStart(18, "ul", 24);
    \u0275\u0275repeaterCreate(19, ExperienceComponent_For_14_For_20_Template, 4, 3, "li", 25, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 26)(22, "div", 27);
    \u0275\u0275element(23, "div", 28);
    \u0275\u0275elementStart(24, "div", 29);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const exp_r5 = ctx.$implicit;
    const \u0275$index_25_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap("reveal-delay-" + (\u0275$index_25_r2 + 1));
    \u0275\u0275advance();
    \u0275\u0275classProp("direction-reverse", \u0275$index_25_r2 % 2 !== 0);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275$index_25_r2 % 2 !== 0 ? "lg:col-start-2" : "");
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", "rgba(" + ctx_r2.hexToRgb(exp_r5.color || "#18D1C1") + ",0.2)");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", "linear-gradient(90deg," + (exp_r5.color || "#09AFE9") + "," + ctx_r2.getNext(exp_r5.color || "#09AFE9") + ")");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", "radial-gradient(circle at 50% 50%, rgba(" + ctx_r2.hexToRgb(exp_r5.color || "#18D1C1") + ",0.04), transparent 70%)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(exp_r5.role);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", exp_r5.color || "#18D1C1");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(exp_r5.company);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exp_r5.client);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", exp_r5.period, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((exp_r5.tags == null ? null : exp_r5.tags.length) ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(exp_r5.bullets);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275$index_25_r2 % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.active() === \u0275$index_25_r2 ? exp_r5.color || "#18D1C1" : "transparent")("border-color", exp_r5.color || "#18D1C1")("box-shadow", ctx_r2.active() === \u0275$index_25_r2 ? "0 0 16px " + (exp_r5.color || "#18D1C1") : "none");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", exp_r5.period.split("\u2013")[0].trim(), " ");
  }
}
var ExperienceComponent = class _ExperienceComponent {
  constructor() {
    this.portfolioService = inject(PortfolioService);
    this.experience = this.portfolioService.experience;
    this.active = signal(-1);
  }
  hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r},${g},${b}`;
  }
  getNext(color) {
    const map = {
      "#09AFE9": "#18D1C1",
      "#18D1C1": "#2AF599",
      "#2AF599": "#09AFE9"
    };
    return map[color] || "#2AF599";
  }
  static {
    this.\u0275fac = function ExperienceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExperienceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExperienceComponent, selectors: [["app-experience"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 0, consts: [["id", "experience", 1, "relative", "py-24", "overflow-hidden"], [1, "absolute", "inset-0", 2, "background", "#071828"], [1, "absolute", "top-0", "left-0", "right-0", "h-px", 2, "background", "linear-gradient(90deg,transparent,rgba(24,209,193,0.3),transparent)"], [1, "relative", "z-10", "max-w-6xl", "mx-auto", "px-6"], [1, "reveal", "text-center", "mb-16"], [1, "section-tag", "mx-auto", "mb-4"], [1, "font-display", "text-4xl", "lg:text-5xl", "font-bold", "text-white", "mb-4"], [1, "section-divider", "w-24", "mx-auto"], [1, "relative"], [1, "hidden", "lg:block", "timeline-line"], [1, "space-y-12"], [1, "reveal", 3, "class"], [1, "reveal"], [1, "lg:grid", "lg:grid-cols-2", "lg:gap-12", "items-center"], [1, "glass-card", "rounded-2xl", "border", "transition-all", "duration-300", "hover:shadow-card-hover", "group", "relative", "overflow-hidden", 3, "mouseenter", "mouseleave"], [1, "h-1", "w-full", "rounded-t-2xl"], [1, "absolute", "inset-0", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-500", "pointer-events-none", "rounded-2xl"], [1, "p-6", "lg:p-8"], [1, "flex", "items-start", "justify-between", "gap-4", "mb-4"], [1, "font-sans", "font-semibold", "text-lg", "text-white", "mb-1"], [1, "font-sans", "font-medium", "text-sm", "mb-1"], [1, "font-sans", "text-xs", "text-white/40", "italic"], [1, "flex-shrink-0", "font-mono", "text-xs", "px-3", "py-1.5", "rounded-lg", 2, "background", "rgba(255,255,255,0.04)", "border", "1px solid rgba(255,255,255,0.08)", "color", "rgba(255,255,255,0.4)"], [1, "flex", "flex-wrap", "gap-1.5", "mb-4"], [1, "space-y-3"], [1, "flex", "gap-3", "text-sm", "text-white/60", "leading-relaxed"], [1, "hidden", "lg:flex", "items-center", "justify-center"], [1, "relative", "z-10", "flex", "flex-col", "items-center", "gap-2"], [1, "w-4", "h-4", "rounded-full", "border-2", "transition-all", "duration-300"], [1, "font-mono", "text-xs", "text-white/30", "text-center", "leading-tight", "max-w-24"], [1, "tech-tag", "text-xs"], [1, "flex-shrink-0", "mt-1", "text-xs"]], template: function ExperienceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "div", 1)(2, "div", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, "Career");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h2", 6);
        \u0275\u0275text(8, "Professional Experience");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8);
        \u0275\u0275element(11, "div", 9);
        \u0275\u0275elementStart(12, "div", 10);
        \u0275\u0275repeaterCreate(13, ExperienceComponent_For_14_Template, 26, 28, "div", 11, _forTrack03);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.experience());
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExperienceComponent, { className: "ExperienceComponent", filePath: "src\\app\\shared\\components\\experience\\experience.component.ts", lineNumber: 113 });
})();

// src/app/shared/components/skills/skills.component.ts
var _forTrack04 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.label;
function SkillsComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r1);
  }
}
function SkillsComponent_For_20_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r2);
  }
}
function SkillsComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 17);
    \u0275\u0275element(2, "div", 18);
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275repeaterCreate(6, SkillsComponent_For_20_For_7_Template, 2, 1, "span", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", group_r3.color);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", group_r3.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r3.items);
  }
}
function SkillsComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 25);
    \u0275\u0275element(7, "div", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prof_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(prof_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", prof_r4.value, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", prof_r4.value + "%");
  }
}
var SkillsComponent = class _SkillsComponent {
  constructor() {
    this.portfolioService = inject(PortfolioService);
    this.skills = this.portfolioService.skills;
    this.proficiency = [
      { label: "Programme & Project Delivery", value: 95 },
      { label: "Agile / Scrum / SAFe", value: 92 },
      { label: "Stakeholder Management", value: 90 },
      { label: "GenAI & AI Tooling", value: 88 },
      { label: "AWS Cloud Architecture", value: 80 },
      { label: "Budget & Financial Governance", value: 85 }
    ];
  }
  techGroups() {
    const tech = this.portfolioService.tech();
    return [
      { title: "Cloud & Tools", items: tech.cloud, color: "#09AFE9" },
      { title: "AI & GenAI", items: tech.ai, color: "#18D1C1" },
      { title: "Development", items: tech.dev, color: "#2AF599" }
    ];
  }
  static {
    this.\u0275fac = function SkillsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SkillsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkillsComponent, selectors: [["app-skills"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 0, consts: [["id", "skills", 1, "relative", "py-24", "overflow-hidden"], [1, "absolute", "inset-0", 2, "background", "linear-gradient(180deg, #071828 0%, #0B2035 100%)"], [1, "relative", "z-10", "max-w-6xl", "mx-auto", "px-6"], [1, "reveal", "text-center", "mb-16"], [1, "section-tag", "mx-auto", "mb-4"], [1, "font-display", "text-4xl", "lg:text-5xl", "font-bold", "text-white", "mb-4"], [1, "section-divider", "w-24", "mx-auto"], [1, "reveal", "reveal-delay-1", "mb-12"], [1, "font-mono", "text-xs", "text-teal-DEFAULT/60", "tracking-widest", "uppercase", "mb-4"], [1, "flex", "flex-wrap", "gap-3"], [1, "skill-chip"], [1, "reveal", "reveal-delay-2"], [1, "grid", "sm:grid-cols-2", "lg:grid-cols-3", "gap-4"], [1, "glass-card", "rounded-2xl", "p-5", "border", "border-teal-DEFAULT/10", "hover:border-teal-DEFAULT/25", "transition-all", "duration-300", "group"], [1, "reveal", "reveal-delay-3", "mt-12"], [1, "glass-card", "rounded-2xl", "p-6", "border", "border-teal-DEFAULT/10"], [1, "font-mono", "text-xs", "text-teal-DEFAULT/60", "tracking-widest", "uppercase", "mb-5"], [1, "flex", "items-center", "gap-2", "mb-4"], [1, "w-2", "h-2", "rounded-full"], [1, "font-mono", "text-xs", "tracking-widest", "uppercase"], [1, "flex", "flex-wrap", "gap-2"], [1, "tech-tag", "hover:border-teal-DEFAULT/30", "transition-colors", "cursor-default"], [1, "flex", "justify-between", "items-center", "mb-1.5"], [1, "text-sm", "text-white/60", "font-sans"], [1, "font-mono", "text-xs", "text-teal-DEFAULT"], [1, "h-1.5", "rounded-full", "overflow-hidden", 2, "background", "rgba(255,255,255,0.06)"], [1, "h-full", "rounded-full", "bg-brand-grad-h", "transition-all", "duration-1000", "bar-animate"]], template: function SkillsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5, "Expertise");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h2", 5);
        \u0275\u0275text(7, "Skills & Competencies");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7)(10, "div", 8);
        \u0275\u0275text(11, "Core Competencies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275repeaterCreate(13, SkillsComponent_For_14_Template, 2, 1, "span", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 11)(16, "div", 8);
        \u0275\u0275text(17, "Technical Skills");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 12);
        \u0275\u0275repeaterCreate(19, SkillsComponent_For_20_Template, 8, 5, "div", 13, _forTrack04);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 14)(22, "div", 15)(23, "div", 16);
        \u0275\u0275text(24, "Proficiency Overview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 12);
        \u0275\u0275repeaterCreate(26, SkillsComponent_For_27_Template, 8, 4, "div", null, _forTrack1);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.skills());
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.techGroups());
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.proficiency);
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkillsComponent, { className: "SkillsComponent", filePath: "src\\app\\shared\\components\\skills\\skills.component.ts", lineNumber: 80 });
})();

// src/app/shared/components/achievements/achievements.component.ts
var _forTrack05 = ($index, $item) => $item.num;
var _forTrack12 = ($index, $item) => $item.label;
function AchievementsComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275element(2, "div", 16)(3, "div", 17);
    \u0275\u0275elementStart(4, "div", 18)(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    const \u0275$index_21_r2 = ctx.$index;
    \u0275\u0275classMap("reveal-delay-" + (\u0275$index_21_r2 + 1));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(a_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", a_r1.num, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r1.text);
  }
}
function AchievementsComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", m_r3.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r3.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.label);
  }
}
var AchievementsComponent = class _AchievementsComponent {
  constructor() {
    this.portfolioService = inject(PortfolioService);
    this.achievements = this.portfolioService.achievements;
    this.metrics = [
      { value: "10 yrs", label: "Total Experience", color: "#09AFE9" },
      { value: "3", label: "Industries Served", color: "#18D1C1" },
      { value: "5+", label: "Certifications", color: "#2AF599" },
      { value: "4 Nordic", label: "Countries \u2014 PostNord", color: "#09AFE9" }
    ];
  }
  static {
    this.\u0275fac = function AchievementsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AchievementsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AchievementsComponent, selectors: [["app-achievements"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 0, consts: [["id", "achievements", 1, "relative", "py-24", "overflow-hidden"], [1, "absolute", "inset-0", 2, "background", "#071828"], [1, "absolute", "inset-0", "opacity-30", 2, "background", "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(9,175,233,0.08), transparent)"], [1, "relative", "z-10", "max-w-6xl", "mx-auto", "px-6"], [1, "reveal", "text-center", "mb-16"], [1, "section-tag", "mx-auto", "mb-4"], [1, "font-display", "text-4xl", "lg:text-5xl", "font-bold", "text-white", "mb-4"], [1, "section-divider", "w-24", "mx-auto"], [1, "grid", "sm:grid-cols-2", "gap-6", "mb-12"], [1, "reveal", 3, "class"], [1, "reveal", "reveal-delay-5"], [1, "glass-card", "rounded-2xl", "p-6", "border", "border-teal-DEFAULT/10"], [1, "grid", "grid-cols-2", "lg:grid-cols-4", "gap-6"], [1, "text-center"], [1, "reveal"], [1, "glass-card", "rounded-2xl", "p-6", "lg:p-8", "border", "border-teal-DEFAULT/10", "hover:border-teal-DEFAULT/30", "transition-all", "duration-300", "group", "relative", "overflow-hidden", "h-full"], [1, "absolute", "bottom-0", "left-0", "right-0", "h-1", "rounded-b-2xl", 2, "background", "linear-gradient(90deg, #09AFE9, #2AF599)"], [1, "absolute", "inset-0", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-500", "rounded-2xl", "pointer-events-none", 2, "background", "radial-gradient(circle at 30% 40%, rgba(9,175,233,0.05), transparent 70%)"], [1, "flex", "items-start", "gap-4", "mb-4"], [1, "text-3xl"], [1, "achievement-num", "group-hover:scale-110", "transition-transform", "duration-300"], [1, "text-white/60", "text-sm", "leading-relaxed", "font-light"], [1, "font-display", "text-2xl", "lg:text-3xl", "font-bold", "mb-1"], [1, "font-mono", "text-xs", "text-white/35", "tracking-wider", "uppercase", "leading-tight"]], template: function AchievementsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "div", 1)(2, "div", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, "Impact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h2", 6);
        \u0275\u0275text(8, "Key Achievements");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8);
        \u0275\u0275repeaterCreate(11, AchievementsComponent_For_12_Template, 11, 5, "div", 9, _forTrack05);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "div", 12);
        \u0275\u0275repeaterCreate(16, AchievementsComponent_For_17_Template, 5, 4, "div", 13, _forTrack12);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.achievements());
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.metrics);
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AchievementsComponent, { className: "AchievementsComponent", filePath: "src\\app\\shared\\components\\achievements\\achievements.component.ts", lineNumber: 72 });
})();

// src/app/shared/components/education/education.component.ts
var _forTrack06 = ($index, $item) => $item.degree;
function EducationComponent_For_14_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const edu_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(edu_r1.note);
  }
}
function EducationComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 14)(2, "div", 15)(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, EducationComponent_For_14_Conditional_10_Template, 2, 1, "div", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const edu_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(edu_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(edu_r1.degree);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(edu_r1.institution);
    \u0275\u0275advance();
    \u0275\u0275conditional(edu_r1.note ? 10 : -1);
  }
}
function EducationComponent_For_20_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "Active");
    \u0275\u0275elementEnd();
  }
}
function EducationComponent_For_20_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "In Progress");
    \u0275\u0275elementEnd();
  }
}
function EducationComponent_For_20_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275template(2, EducationComponent_For_20_Conditional_7_Conditional_2_Template, 2, 0, "span", 26)(3, EducationComponent_For_20_Conditional_7_Conditional_3_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cert_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cert_r2.split("\xB7")[1].trim(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(cert_r2.toLowerCase().includes("active") ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(cert_r2.toLowerCase().includes("progress") ? 3 : -1);
  }
}
function EducationComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 22);
    \u0275\u0275element(3, "path", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div")(5, "div", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, EducationComponent_For_20_Conditional_7_Template, 4, 3, "div", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cert_r2 = ctx.$implicit;
    const \u0275$index_53_r3 = ctx.$index;
    const \u0275$count_53_r4 = ctx.$count;
    \u0275\u0275classProp("border-b", !(\u0275$index_53_r3 === \u0275$count_53_r4 - 1));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", cert_r2.split("\xB7")[0].trim(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(cert_r2.includes("\xB7") ? 7 : -1);
  }
}
var EducationComponent = class _EducationComponent {
  constructor() {
    this.portfolioService = inject(PortfolioService);
  }
  degrees() {
    const edu = this.portfolioService.edu();
    return [
      {
        degree: edu.deg1,
        institution: edu.inst1,
        icon: "\u{1F393}",
        note: "India's premier management institution"
      },
      {
        degree: edu.deg2,
        institution: edu.inst2,
        icon: "\u{1F4BB}",
        note: "Engineering foundation in computer science"
      }
    ];
  }
  certs() {
    return this.portfolioService.edu().certs;
  }
  static {
    this.\u0275fac = function EducationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EducationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EducationComponent, selectors: [["app-education"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 0, consts: [["id", "education", 1, "relative", "py-24", "overflow-hidden"], [1, "absolute", "inset-0", 2, "background", "linear-gradient(180deg, #071828 0%, #0B2035 100%)"], [1, "relative", "z-10", "max-w-6xl", "mx-auto", "px-6"], [1, "reveal", "text-center", "mb-16"], [1, "section-tag", "mx-auto", "mb-4"], [1, "font-display", "text-4xl", "lg:text-5xl", "font-bold", "text-white", "mb-4"], [1, "section-divider", "w-24", "mx-auto"], [1, "grid", "lg:grid-cols-2", "gap-8"], [1, "reveal", "reveal-delay-1", "space-y-4"], [1, "font-mono", "text-xs", "text-teal-DEFAULT/60", "tracking-widest", "uppercase", "mb-4"], [1, "glass-card", "rounded-2xl", "p-6", "border", "border-teal-DEFAULT/10", "hover:border-teal-DEFAULT/25", "transition-all", "group"], [1, "reveal", "reveal-delay-2"], [1, "glass-card", "rounded-2xl", "border", "border-teal-DEFAULT/10", "overflow-hidden"], [1, "flex", "items-start", "gap-4", "p-5", 2, "border-color", "rgba(24,209,193,0.08)", 3, "border-b"], [1, "flex", "items-start", "gap-4"], [1, "w-10", "h-10", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0", 2, "background", "linear-gradient(135deg, rgba(9,175,233,0.15), rgba(42,245,153,0.15))", "border", "1px solid rgba(24,209,193,0.2)"], [1, "text-lg"], [1, "font-sans", "font-semibold", "text-white", "text-sm", "mb-0.5"], [1, "font-sans", "text-sm", "font-medium", 2, "color", "#18D1C1"], [1, "font-mono", "text-xs", "text-white/35", "mt-1", "italic"], [1, "flex", "items-start", "gap-4", "p-5", 2, "border-color", "rgba(24,209,193,0.08)"], [1, "flex-shrink-0", "mt-0.5"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#2AF599", "stroke-width", "2"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"], [1, "text-sm", "text-white/70", "font-sans", "leading-snug"], [1, "font-mono", "text-xs", "text-white/30", "mt-0.5", "flex", "items-center", "gap-2"], [1, "px-2", "py-0.5", "rounded-full", "text-xs", 2, "background", "rgba(42,245,153,0.1)", "color", "#2AF599", "border", "1px solid rgba(42,245,153,0.2)"], [1, "px-2", "py-0.5", "rounded-full", "text-xs", 2, "background", "rgba(9,175,233,0.1)", "color", "#09AFE9", "border", "1px solid rgba(9,175,233,0.2)"]], template: function EducationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5, "Learning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h2", 5);
        \u0275\u0275text(7, "Education & Certifications");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "div", 9);
        \u0275\u0275text(12, "Academic Background");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(13, EducationComponent_For_14_Template, 11, 4, "div", 10, _forTrack06);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 11)(16, "div", 9);
        \u0275\u0275text(17, "Certifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 12);
        \u0275\u0275repeaterCreate(19, EducationComponent_For_20_Template, 8, 4, "div", 13, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.degrees());
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.certs());
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EducationComponent, { className: "EducationComponent", filePath: "src\\app\\shared\\components\\education\\education.component.ts", lineNumber: 87 });
})();

// src/app/shared/components/hobbies/hobbies.component.ts
function HobbiesComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275element(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pill_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", pill_r1, " ");
  }
}
function HobbiesComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275element(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pill_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", pill_r2, " ");
  }
}
var HobbiesComponent = class _HobbiesComponent {
  constructor() {
    this.portfolioService = inject(PortfolioService);
    this.hobbies = this.portfolioService.hobbies;
  }
  static {
    this.\u0275fac = function HobbiesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HobbiesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HobbiesComponent, selectors: [["app-hobbies"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 4, consts: [["id", "hobbies", 1, "relative", "py-24", "overflow-hidden"], [1, "absolute", "inset-0", 2, "background", "#071828"], [1, "relative", "z-10", "max-w-6xl", "mx-auto", "px-6"], [1, "reveal", "text-center", "mb-16"], [1, "section-tag", "mx-auto", "mb-4"], [1, "font-display", "text-4xl", "lg:text-5xl", "font-bold", "text-white", "mb-4"], [1, "section-divider", "w-24", "mx-auto"], [1, "grid", "md:grid-cols-2", "gap-8"], [1, "reveal", "reveal-delay-1"], [1, "glass-card", "rounded-2xl", "overflow-hidden", "border", "border-teal-DEFAULT/10", "hover:border-teal-DEFAULT/30", "transition-all", "duration-300", "hover:-translate-y-1", "hover:shadow-card-hover", "group"], [1, "relative", "h-40", "flex", "items-center", "justify-center", "overflow-hidden", 2, "background", "linear-gradient(135deg, #071828 0%, #0B2035 40%, #0FC0D4 100%)"], [1, "absolute", "inset-0", 2, "background-image", "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 12px)", "opacity", "0.04"], [1, "absolute", "bottom-0", "right-0", "w-48", "h-48", "rounded-full", "opacity-20", 2, "background", "radial-gradient(circle, #18D1C1, transparent 70%)"], [1, "text-6xl", "relative", "z-10", "animate-float", 2, "filter", "drop-shadow(0 4px 16px rgba(0,0,0,0.4))"], [1, "absolute", "top-3", "right-3"], [1, "font-mono", "text-xs", "px-2.5", "py-1", "rounded-full", 2, "background", "rgba(9,175,233,0.15)", "border", "1px solid rgba(9,175,233,0.3)", "color", "#09AFE9"], [1, "p-6"], [1, "font-display", "text-xl", "font-semibold", "text-white", "mb-3"], [1, "text-white/55", "text-sm", "leading-relaxed", "mb-4"], [1, "flex", "flex-wrap", "gap-2"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1", "rounded-full", "text-xs", "font-sans", 2, "background", "rgba(255,255,255,0.04)", "border", "1px solid rgba(255,255,255,0.08)", "color", "rgba(255,255,255,0.5)"], [1, "reveal", "reveal-delay-2"], [1, "relative", "h-40", "flex", "items-center", "justify-center", "overflow-hidden", 2, "background", "linear-gradient(135deg, #071828 0%, #0B2035 40%, #2AF599 100%)"], [1, "absolute", "bottom-0", "right-0", "w-48", "h-48", "rounded-full", "opacity-20", 2, "background", "radial-gradient(circle, #2AF599, transparent 70%)"], [1, "text-6xl", "relative", "z-10", "animate-float", 2, "animation-delay", "2s", "filter", "drop-shadow(0 4px 16px rgba(0,0,0,0.4))"], [1, "font-mono", "text-xs", "px-2.5", "py-1", "rounded-full", 2, "background", "rgba(42,245,153,0.15)", "border", "1px solid rgba(42,245,153,0.3)", "color", "#2AF599"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-cyan-DEFAULT", "flex-shrink-0"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-mint-DEFAULT", "flex-shrink-0"]], template: function HobbiesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5, "Beyond Work");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h2", 5);
        \u0275\u0275text(7, "Hobbies & Interests");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10);
        \u0275\u0275element(13, "div", 11)(14, "div", 12);
        \u0275\u0275elementStart(15, "span", 13);
        \u0275\u0275text(16, "\u{1F3CD}\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 14)(18, "span", 15);
        \u0275\u0275text(19, "Adventure");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 16)(21, "h3", 17);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p", 18);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 19);
        \u0275\u0275repeaterCreate(26, HobbiesComponent_For_27_Template, 3, 1, "span", 20, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "div", 21)(29, "div", 9)(30, "div", 22);
        \u0275\u0275element(31, "div", 11)(32, "div", 23);
        \u0275\u0275elementStart(33, "span", 24);
        \u0275\u0275text(34, "\u{1F4F7}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 14)(36, "span", 25);
        \u0275\u0275text(37, "Creative");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "div", 16)(39, "h3", 17);
        \u0275\u0275text(40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "p", 18);
        \u0275\u0275text(42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 19);
        \u0275\u0275repeaterCreate(44, HobbiesComponent_For_45_Template, 3, 1, "span", 20, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(22);
        \u0275\u0275textInterpolate(ctx.hobbies().h1name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.hobbies().h1desc);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.hobbies().h1pills);
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate(ctx.hobbies().h2name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.hobbies().h2desc);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.hobbies().h2pills);
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HobbiesComponent, { className: "HobbiesComponent", filePath: "src\\app\\shared\\components\\hobbies\\hobbies.component.ts", lineNumber: 89 });
})();

// src/app/shared/components/footer/footer.component.ts
var _forTrack07 = ($index, $item) => $item.href;
function FooterComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275listener("mouseenter", function FooterComponent_For_24_Template_a_mouseenter_0_listener($event) {
      const link_r2 = \u0275\u0275restoreView(_r1).$implicit;
      return \u0275\u0275resetView($event.target.style.cssText = link_r2.hoverStyle);
    })("mouseleave", function FooterComponent_For_24_Template_a_mouseleave_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.target.style.cssText = "background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.4);");
    });
    \u0275\u0275element(1, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    \u0275\u0275property("href", link_r2.href, \u0275\u0275sanitizeUrl)("title", link_r2.label);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", link_r2.icon, \u0275\u0275sanitizeHtml);
  }
}
var FooterComponent = class _FooterComponent {
  constructor() {
    this.portfolioService = inject(PortfolioService);
    this.sanitizer = inject(DomSanitizer);
  }
  trust(svg) {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
  socialLinks() {
    const s = this.portfolioService.social();
    return [
      {
        href: s.linkedin,
        label: "LinkedIn",
        hoverStyle: "background:#0A66C2;border-color:transparent;color:#fff;transform:translateY(-2px);box-shadow:0 4px 16px rgba(10,102,194,0.4);",
        icon: this.trust('<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>')
      },
      {
        href: s.twitter,
        label: "X (Twitter)",
        hoverStyle: "background:#000;border-color:transparent;color:#fff;transform:translateY(-2px);",
        icon: this.trust('<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.632L18.244 2.25z"/></svg>')
      },
      {
        href: s.instagram,
        label: "Instagram",
        hoverStyle: "background:linear-gradient(135deg,#F58529,#DD2A7B,#515BD4);border-color:transparent;color:#fff;transform:translateY(-2px);",
        icon: this.trust('<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/></svg>')
      },
      {
        href: s.github,
        label: "GitHub",
        hoverStyle: "background:#24292F;border-color:transparent;color:#fff;transform:translateY(-2px);",
        icon: this.trust('<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>')
      },
      {
        href: s.youtube,
        label: "YouTube",
        hoverStyle: "background:#FF0000;border-color:transparent;color:#fff;transform:translateY(-2px);",
        icon: this.trust('<svg width="18" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>')
      }
    ];
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 0, consts: [[1, "relative", "overflow-hidden", 2, "background", "#0B2035", "border-top", "1px solid rgba(24,209,193,0.12)"], [1, "absolute", "top-0", "left-0", "right-0", "h-px", 2, "background", "linear-gradient(90deg, #09AFE9, #18D1C1 50%, #2AF599)"], [1, "absolute", "bottom-0", "right-0", "w-80", "h-80", "rounded-full", "opacity-5", "pointer-events-none", 2, "background", "radial-gradient(circle, #09AFE9, transparent 70%)"], [1, "max-w-6xl", "mx-auto", "px-6", "py-12"], [1, "flex", "flex-col", "md:flex-row", "items-center", "justify-between", "gap-8", "mb-8"], [1, "flex", "items-center", "gap-3"], [1, "w-11", "h-11"], ["viewBox", "0 0 80 80", "xmlns", "http://www.w3.org/2000/svg"], ["id", "ftGrad", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "100%"], ["offset", "0%", "stop-color", "#2AF599"], ["offset", "100%", "stop-color", "#09AFE9"], ["cx", "40", "cy", "40", "r", "39", "fill", "#1A1A1A", "stroke", "#18D1C1", "stroke-width", "1.5"], ["cx", "40", "cy", "40", "r", "33", "fill", "none", "stroke", "#2AF599", "stroke-width", "0.5", "stroke-dasharray", "3 4"], ["d", "M18 58 L30 22 L40 46 M22 46 H36", "stroke", "url(#ftGrad)", "stroke-width", "4", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], ["d", "M40 58 L40 22 L52 42 L64 22 L64 58", "stroke", "#FEFEFE", "stroke-width", "3.5", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], ["cx", "40", "cy", "40", "r", "3", "fill", "#18D1C1"], [1, "font-display", "text-base", "font-semibold", "text-white"], [1, "font-mono", "text-xs", "text-white/35", "tracking-wide"], ["target", "_blank", "rel", "noopener", 1, "w-10", "h-10", "rounded-xl", "flex", "items-center", "justify-center", "transition-all", "duration-200", 2, "background", "rgba(255,255,255,0.04)", "border", "1px solid rgba(255,255,255,0.08)", "color", "rgba(255,255,255,0.4)", 3, "href", "title"], [1, "h-px", "mb-6", 2, "background", "rgba(255,255,255,0.06)"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "gap-4"], [1, "font-mono", "text-xs", "text-white/25"], [1, "text-white/40", "font-semibold"], [1, "flex", "gap-6"], ["href", "mailto:ananth.machiraju@outlook.com", 1, "font-mono", "text-xs", "text-white/30", "hover:text-teal-DEFAULT", "transition-colors"], ["href", "tel:+917416261622", 1, "font-mono", "text-xs", "text-white/30", "hover:text-teal-DEFAULT", "transition-colors"], ["href", "https://linkedin.com/in/saiananthmachiraju", "target", "_blank", "rel", "noopener", 1, "font-mono", "text-xs", "text-white/30", "hover:text-teal-DEFAULT", "transition-colors"], ["routerLink", "/dashboard", 1, "font-mono", "text-xs", "text-white/30", "hover:text-teal-DEFAULT", "transition-colors"], [1, "font-mono", "text-xs", "text-white/20", "flex", "items-center", "gap-1"], [2, "background", "linear-gradient(135deg,#09AFE9,#2AF599)", "-webkit-background-clip", "text", "-webkit-text-fill-color", "transparent"], ["target", "_blank", "rel", "noopener", 1, "w-10", "h-10", "rounded-xl", "flex", "items-center", "justify-center", "transition-all", "duration-200", 2, "background", "rgba(255,255,255,0.04)", "border", "1px solid rgba(255,255,255,0.08)", "color", "rgba(255,255,255,0.4)", 3, "mouseenter", "mouseleave", "href", "title"], [2, "pointer-events", "none", 3, "innerHTML"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0);
        \u0275\u0275element(1, "div", 1)(2, "div", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 7)(8, "defs")(9, "linearGradient", 8);
        \u0275\u0275element(10, "stop", 9)(11, "stop", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(12, "circle", 11)(13, "circle", 12)(14, "path", 13)(15, "path", 14)(16, "circle", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(17, "div")(18, "div", 16);
        \u0275\u0275text(19, "Ananth Machiraju");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 17);
        \u0275\u0275text(21, "Project Manager \xB7 IT Delivery Lead");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 5);
        \u0275\u0275repeaterCreate(23, FooterComponent_For_24_Template, 2, 3, "a", 18, _forTrack07);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(25, "div", 19);
        \u0275\u0275elementStart(26, "div", 20)(27, "div", 21);
        \u0275\u0275text(28, " \xA9 2025 ");
        \u0275\u0275elementStart(29, "span", 22);
        \u0275\u0275text(30, "Ananth Machiraju");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, ". All rights reserved. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 23)(33, "a", 24);
        \u0275\u0275text(34, "\u2709 Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "a", 25);
        \u0275\u0275text(36, "\u{1F4DE} Call");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "a", 26);
        \u0275\u0275text(38, "\u{1F517} LinkedIn");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "a", 27);
        \u0275\u0275text(40, "\u2699 Admin");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 28);
        \u0275\u0275text(42, " Built with ");
        \u0275\u0275elementStart(43, "span", 29);
        \u0275\u0275text(44, "\u2665");
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, " using Angular & Claude AI ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(23);
        \u0275\u0275repeater(ctx.socialLinks());
      }
    }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\shared\\components\\footer\\footer.component.ts", lineNumber: 89 });
})();

// src/app/core/services/chat.service.ts
var SYSTEM_PROMPT = `You are "Ananth's AI Assistant" \u2014 an intelligent, professional, and conversational AI embedded in Ananth Machiraju's personal portfolio. You represent Ananth accurately and help recruiters, hiring managers, and collaborators understand his profile deeply.

CRITICAL FACTS:
- Notice Period: 90 to 60 days (negotiable)
- Total Experience: 10 years
- Current Location: Bengaluru, Karnataka, India
- Work Mode: Open to On-site, Hybrid, and Remote \u2014 including international relocation
- Current Status: Employed at TCS, actively open to the right opportunity
- Contact: ananth.machiraju@outlook.com | +91 7416261622

PROFILE SUMMARY:
Ananth is a Project Manager at TCS working on NEST Pensions UK. 10 years of IT experience across financial services (UK pensions), Nordic logistics (PostNord via Capgemini), and healthcare analytics (Medvensys/Pareto). IIM Bangalore graduate, AWS Certified Solutions Architect, SAFe\xAE 5 Practitioner, PMP candidate. Early GenAI adopter with proven productivity gains.

KEY ACHIEVEMENTS:
- Zero critical release failures across 3+ years of CAB-managed deployments at NEST UK
- 40%+ production incident reduction at PostNord through automation
- ~30% documentation efficiency gain via GenAI embedding at TCS
- 49/75 NCQA certification measures at Pareto Healthcare

SKILLS: Programme Delivery, Agile/Scrum/SAFe, Stakeholder Management, IT Governance, CAB & Release Planning, Risk Management, Budget Governance, Digital Transformation, GenAI, Cross-Functional Leadership, JIRA, AWS, Node.js, Angular, Oracle/SQL

EDUCATION: GMITE at IIM Bengaluru | B.Tech CSE at JNTU Kakinada
CERTIFICATIONS: AWS SA-Associate (Active), PMP (In Progress), SAFe\xAE 5 SP (Active), PGP Product Management

Respond warmly, professionally, and concisely. Use markdown for formatting. After answering, suggest 1-2 relevant follow-up questions. Never fabricate information.`;
var ChatService = class _ChatService {
  constructor() {
    this.messages = signal([]);
    this.isTyping = signal(false);
    this.isOpen = signal(false);
    this.history = [];
  }
  toggle() {
    this.isOpen.update((v) => !v);
  }
  open() {
    this.isOpen.set(true);
  }
  close() {
    this.isOpen.set(false);
  }
  send(userText) {
    return __async(this, null, function* () {
      if (!userText.trim() || this.isTyping())
        return;
      const userMsg = { role: "user", content: userText, timestamp: /* @__PURE__ */ new Date() };
      this.messages.update((m) => [...m, userMsg]);
      this.history.push({ role: "user", content: userText });
      if (this.history.length > 32)
        this.history = this.history.slice(-32);
      this.isTyping.set(true);
      yield new Promise((r) => setTimeout(r, 400 + Math.random() * 400));
      try {
        const response = yield fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "anthropic-dangerous-request-source": "user-iframe"
          },
          body: JSON.stringify({
            model: "claude-sonnet-4-20250514",
            max_tokens: 1200,
            system: SYSTEM_PROMPT,
            messages: this.history.map((m) => ({ role: m.role, content: m.content }))
          })
        });
        const data = yield response.json();
        const reply = data?.content?.[0]?.text || this.localAnswer(userText);
        this.addBot(reply);
      } catch {
        this.addBot(this.localAnswer(userText));
      }
    });
  }
  addBot(content) {
    this.isTyping.set(false);
    const botMsg = { role: "assistant", content, timestamp: /* @__PURE__ */ new Date() };
    this.messages.update((m) => [...m, botMsg]);
    this.history.push({ role: "assistant", content });
    if (this.history.length > 32)
      this.history = this.history.slice(-32);
  }
  clear() {
    this.messages.set([]);
    this.history = [];
  }
  localAnswer(q) {
    const t = q.toLowerCase();
    if (/notice.?period|availability|when.?can|join|start|available/.test(t))
      return "Ananth's **notice period is 90 to 60 days**, negotiable depending on the opportunity. For urgent positions, a direct conversation is recommended.";
    if (/current.?role|working.?now|tcs|tata|nest/.test(t))
      return "Ananth is currently a **Project Manager at TCS**, delivering for **NEST Pensions UK**.\n\n**Highlights:**\n- Zero critical release failures across 3+ years\n- Built the Low Friction Changes (LFC) initiative from scratch\n- Led Employer 2.0 \u2014 NEST's largest ever platform overhaul\n- ~30% documentation efficiency gain via GenAI";
    if (/achiev|highlight|impact|result|success|metric|record/.test(t))
      return "**Key achievements:**\n\n- **Zero** critical release failures \u2014 3+ years at NEST Pensions UK\n- **40%+** incident reduction at PostNord through automation\n- **~30%** documentation efficiency gain via GenAI at TCS\n- **49/75** NCQA measures certified at Pareto Healthcare\n- **Employer 2.0** \u2014 NEST's largest platform overhaul, delivered on time";
    if (/certif|aws|pmp|safe|credential/.test(t))
      return "**Certifications:**\n\n- AWS Certified Solutions Architect \u2013 Associate *(Active)*\n- SAFe\xAE 5 Practitioner *(Active)*\n- PMP \u2013 PMI *(In Progress)*\n- PGP in Product Management \u2014 Accredian\n- Agile & Product Development Specialisation";
    if (/educat|iim|jntu|degree|university/.test(t))
      return "**Education:**\n\n- **GMITE \u2013 General Management (Executive)** | IIM Bengaluru\n- **B.Tech \u2013 Computer Science Engineering** | JNTU Kakinada";
    if (/contact|email|phone|linkedin|reach/.test(t))
      return "\u{1F4E7} **Email:** ananth.machiraju@outlook.com\n\u{1F4DE} **Phone:** +91 7416261622\n\u{1F517} **LinkedIn:** linkedin.com/in/saiananthmachiraju\n\nOr use the **Contact Me** button on this page!";
    if (/location|where|based|relocat|remote|hybrid/.test(t))
      return "Ananth is based in **Bengaluru, India**. He is open to:\n- **Remote** roles globally\n- **Hybrid** arrangements\n- **On-site** with relocation\n- **International** opportunities";
    if (/why.?hire|unique|stand.?out|differenti|value/.test(t))
      return "**What makes Ananth unique:**\n\n1. **Rare hybrid** \u2014 developer background + PM leadership\n2. **Zero-failure track record** \u2014 3+ years regulated delivery\n3. **GenAI pioneer** \u2014 formalised AI-assisted PM workflows\n4. **Multi-industry** \u2014 FinTech, Logistics, Healthcare\n5. **IIM Bengaluru** executive education";
    if (/genai|ai.?tool|claude|chatgpt|copilot|llm/.test(t))
      return "Ananth is a **GenAI practitioner**:\n\n- Embedded Claude, ChatGPT, and Copilot into TCS delivery workflows\n- Achieved **~30% documentation efficiency gain**\n- Developed structured prompt engineering workflows\n- Among the **first TCS teams** to formalise AI-assisted PM";
    if (/salary|ctc|compensation|pay/.test(t))
      return "Compensation is best discussed directly with Ananth at **ananth.machiraju@outlook.com** or **+91 7416261622**.";
    return "Great question! I'm trained on Ananth's full profile. Ask me about:\n\n- **Experience** & career history\n- **Notice period** & availability\n- **Skills** (technical & PM)\n- **Certifications** & education\n- **Achievements** & key wins\n- **Contact** details";
  }
  static {
    this.\u0275fac = function ChatService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChatService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatService, factory: _ChatService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/components/chatbot/chatbot.component.ts
var _c02 = ["messagesEl"];
var _c1 = ["inputEl"];
var _forTrack08 = ($index, $item) => $item.label;
function ChatbotComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function ChatbotComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function ChatbotComponent_For_43_Template_button_click_0_listener() {
      const chip_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.sendChip(chip_r3.q));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chip_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(chip_r3.label);
  }
}
function ChatbotComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 43);
    \u0275\u0275text(2, "\u{1F916}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 44)(5, "p", 45);
    \u0275\u0275text(6, "Hi there! \u{1F44B} I'm Ananth's AI Assistant \u2014 I know everything about his profile, experience, skills, and availability.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 46);
    \u0275\u0275text(8, "Feel free to ask me anything, or pick a topic above!");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 47);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r3.now());
  }
}
function ChatbotComponent_For_48_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, "\u{1F916}");
    \u0275\u0275elementEnd();
  }
}
function ChatbotComponent_For_48_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1, "YOU");
    \u0275\u0275elementEnd();
  }
}
function ChatbotComponent_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275template(1, ChatbotComponent_For_48_Conditional_1_Template, 2, 0, "div", 43)(2, ChatbotComponent_For_48_Conditional_2_Template, 2, 0, "div", 49);
    \u0275\u0275elementStart(3, "div", 50);
    \u0275\u0275element(4, "div", 51);
    \u0275\u0275elementStart(5, "div", 47);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const msg_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("user", msg_r5.role === "user")("bot", msg_r5.role === "assistant");
    \u0275\u0275advance();
    \u0275\u0275conditional(msg_r5.role === "assistant" ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", ctx_r3.formatMessage(msg_r5.content), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatTime(msg_r5.timestamp));
  }
}
function ChatbotComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 43);
    \u0275\u0275text(2, "\u{1F916}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52);
    \u0275\u0275element(4, "div", 53)(5, "div", 53)(6, "div", 53);
    \u0275\u0275elementEnd()();
  }
}
var ChatbotComponent = class _ChatbotComponent {
  constructor() {
    this.chatService = inject(ChatService);
    this.inputText = "";
    this.showClearConfirm = signal(false);
    this.prevLen = 0;
    this.chips = [
      { label: "\u{1F5D3} Notice Period", q: "What is the notice period?" },
      { label: "\u{1F4BC} Current Role", q: "What is the current role and responsibilities?" },
      { label: "\u2B50 Achievements", q: "What are the biggest career achievements with numbers?" },
      { label: "\u{1F6E0} Tech Stack", q: "What are the technical skills and tools?" },
      { label: "\u{1F91D} Why Hire?", q: "Why should we hire Ananth? What makes him unique?" },
      { label: "\u{1F4DE} Contact", q: "How can I contact Ananth directly?" }
    ];
  }
  now() {
    const d = /* @__PURE__ */ new Date();
    return d.getHours().toString().padStart(2, "0") + ":" + d.getMinutes().toString().padStart(2, "0");
  }
  formatTime(d) {
    return d.getHours().toString().padStart(2, "0") + ":" + d.getMinutes().toString().padStart(2, "0");
  }
  formatMessage(text) {
    let s = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/^[-•] (.+)$/gm, "<li>$1</li>").replace(/(<li>.*?<\/li>)+/gs, (m) => `<ul>${m}</ul>`).replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br>");
    return `<p>${s}</p>`;
  }
  sendChip(q) {
    this.inputText = q;
    this.send();
  }
  send() {
    return __async(this, null, function* () {
      const text = this.inputText.trim();
      if (!text)
        return;
      this.inputText = "";
      if (this.inputEl) {
        this.inputEl.nativeElement.style.height = "";
      }
      yield this.chatService.send(text);
    });
  }
  onEnter(e) {
    const ke = e;
    if (!ke.shiftKey) {
      e.preventDefault();
      this.send();
    }
  }
  autoResize(e) {
    const el = e.target;
    el.style.height = "";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  }
  confirmClear() {
    this.chatService.clear();
    this.showClearConfirm.set(false);
  }
  ngAfterViewChecked() {
    const len = this.chatService.messages().length;
    if (len !== this.prevLen && this.messagesEl) {
      this.prevLen = len;
      const el = this.messagesEl.nativeElement;
      setTimeout(() => {
        el.scrollTop = el.scrollHeight;
      }, 60);
    }
  }
  static {
    this.\u0275fac = function ChatbotComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChatbotComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatbotComponent, selectors: [["app-chatbot"]], viewQuery: function ChatbotComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messagesEl = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputEl = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 60, vars: 11, consts: [["messagesEl", ""], ["inputEl", ""], ["title", "Chat with Ananth's AI", 1, "chat-fab", 3, "click"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "chat-fab-icon"], ["d", "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "chat-fab-close"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "chat-badge", "show"], [1, "chat-window"], [1, "chat-clear-toast"], [1, "flex", "gap-2"], [1, "chat-clear-yes", 3, "click"], [1, "chat-clear-no", 3, "click"], [1, "chat-header"], [1, "chat-avatar"], [1, "chat-header-info"], [1, "chat-header-name"], [1, "chat-header-sub"], [1, "chat-header-actions"], ["title", "Clear chat", 1, "chat-hdr-btn", 3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14H6L5 6"], ["d", "M10 11v6M14 11v6"], ["d", "M9 6V4h6v2"], ["title", "Close", 1, "chat-hdr-btn", 3, "click"], [1, "chat-chips-wrap"], [1, "chat-chips-label"], [1, "chat-chips"], [1, "chat-chip"], [1, "chat-messages"], [1, "chat-msg", "bot"], [1, "chat-msg", 3, "user", "bot"], [1, "chat-typing", "show"], [1, "chat-input-area"], ["placeholder", "Ask about Ananth's experience, skills, availability\u2026", "rows", "1", 1, "chat-input", 3, "ngModelChange", "keydown.enter", "input", "ngModel"], [1, "chat-send-btn", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x1", "22", "y1", "2", "x2", "11", "y2", "13"], ["points", "22 2 15 22 11 13 2 9 22 2"], [1, "chat-input-hint"], [1, "chat-chip", 3, "click"], [1, "chat-msg-avatar"], [1, "chat-bubble"], [2, "margin", "0"], [2, "margin", "6px 0 0"], [1, "chat-ts"], [1, "chat-msg"], [1, "chat-msg-avatar", 2, "background", "linear-gradient(135deg,#071828,#1A3A50)", "color", "#2AF599", "font-size", "0.6rem", "font-weight", "700", "letter-spacing", "0.5px"], [1, "chat-msg-col"], [1, "chat-bubble", 3, "innerHTML"], [1, "typing-bubble"], [1, "typing-dot"]], template: function ChatbotComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "button", 2);
        \u0275\u0275listener("click", function ChatbotComponent_Template_button_click_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.chatService.toggle());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(1, "svg", 3);
        \u0275\u0275element(2, "path", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "svg", 5);
        \u0275\u0275element(4, "line", 6)(5, "line", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, ChatbotComponent_Conditional_6_Template, 2, 0, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(7, "div", 9)(8, "div", 10)(9, "span");
        \u0275\u0275text(10, "Clear this conversation?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 11)(12, "button", 12);
        \u0275\u0275listener("click", function ChatbotComponent_Template_button_click_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.confirmClear());
        });
        \u0275\u0275text(13, "Clear");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 13);
        \u0275\u0275listener("click", function ChatbotComponent_Template_button_click_14_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.showClearConfirm.set(false));
        });
        \u0275\u0275text(15, "Keep");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 14)(17, "div", 15);
        \u0275\u0275text(18, "\u{1F916}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 16)(20, "div", 17);
        \u0275\u0275text(21, "Ananth's AI Assistant");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 18);
        \u0275\u0275text(23, "Powered by ");
        \u0275\u0275elementStart(24, "span");
        \u0275\u0275text(25, "Claude");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, " \xB7 Knows everything");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 19)(28, "button", 20);
        \u0275\u0275listener("click", function ChatbotComponent_Template_button_click_28_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.showClearConfirm.set(true));
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(29, "svg", 21);
        \u0275\u0275element(30, "polyline", 22)(31, "path", 23)(32, "path", 24)(33, "path", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(34, "button", 26);
        \u0275\u0275listener("click", function ChatbotComponent_Template_button_click_34_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.chatService.close());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(35, "svg", 21);
        \u0275\u0275element(36, "line", 6)(37, "line", 7);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(38, "div", 27)(39, "div", 28);
        \u0275\u0275text(40, "Quick topics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 29);
        \u0275\u0275repeaterCreate(42, ChatbotComponent_For_43_Template, 2, 1, "button", 30, _forTrack08);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 31, 0);
        \u0275\u0275template(46, ChatbotComponent_Conditional_46_Template, 11, 1, "div", 32);
        \u0275\u0275repeaterCreate(47, ChatbotComponent_For_48_Template, 7, 7, "div", 33, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275template(49, ChatbotComponent_Conditional_49_Template, 7, 0, "div", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 35)(51, "textarea", 36, 1);
        \u0275\u0275twoWayListener("ngModelChange", function ChatbotComponent_Template_textarea_ngModelChange_51_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.inputText, $event) || (ctx.inputText = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("keydown.enter", function ChatbotComponent_Template_textarea_keydown_enter_51_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onEnter($event));
        })("input", function ChatbotComponent_Template_textarea_input_51_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.autoResize($event));
        });
        \u0275\u0275text(53, "        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "button", 37);
        \u0275\u0275listener("click", function ChatbotComponent_Template_button_click_54_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.send());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(55, "svg", 38);
        \u0275\u0275element(56, "line", 39)(57, "polygon", 40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(58, "div", 41);
        \u0275\u0275text(59, "Shift+Enter for new line \xB7 Enter to send");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("open", ctx.chatService.isOpen());
        \u0275\u0275advance(6);
        \u0275\u0275conditional(!ctx.chatService.isOpen() && ctx.chatService.messages().length === 0 ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.chatService.isOpen());
        \u0275\u0275advance();
        \u0275\u0275classProp("show", ctx.showClearConfirm());
        \u0275\u0275advance(34);
        \u0275\u0275repeater(ctx.chips);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.chatService.messages().length === 0 ? 46 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.chatService.messages());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.chatService.isTyping() ? 49 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.inputText);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !ctx.inputText.trim() || ctx.chatService.isTyping());
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatbotComponent, { className: "ChatbotComponent", filePath: "src\\app\\shared\\components\\chatbot\\chatbot.component.ts", lineNumber: 128 });
})();

// src/app/shared/components/contact-modal/contact-modal.component.ts
function ContactModalComponent_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(ctx_r1.toast().type === "success" ? "background: rgba(21,168,106,0.1); border: 1px solid rgba(21,168,106,0.2); color: #2AF599;" : "background: rgba(224,62,82,0.1); border: 1px solid rgba(224,62,82,0.2); color: #E03E52;");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.toast().msg, " ");
  }
}
function ContactModalComponent_Conditional_0_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 31);
    \u0275\u0275element(1, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Sending\u2026 ");
  }
}
function ContactModalComponent_Conditional_0_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 33);
    \u0275\u0275element(1, "line", 34)(2, "polygon", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Send Message ");
  }
}
function ContactModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ContactModalComponent_Conditional_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function ContactModalComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 6);
    \u0275\u0275element(6, "path", 7)(7, "polyline", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div")(9, "div", 9);
    \u0275\u0275text(10, "Get In Touch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 10);
    \u0275\u0275text(12, "Send a message to Ananth");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 11);
    \u0275\u0275listener("click", function ContactModalComponent_Conditional_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 12);
    \u0275\u0275element(15, "line", 13)(16, "line", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 15);
    \u0275\u0275template(18, ContactModalComponent_Conditional_0_Conditional_18_Template, 2, 3, "div", 16);
    \u0275\u0275elementStart(19, "div", 17)(20, "div", 18)(21, "label", 19);
    \u0275\u0275text(22, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function ContactModalComponent_Conditional_0_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("focus", function ContactModalComponent_Conditional_0_Template_input_focus_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.target.style.borderColor = "rgba(24,209,193,0.4)");
    })("blur", function ContactModalComponent_Conditional_0_Template_input_blur_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.target.style.borderColor = "rgba(255,255,255,0.08)");
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 18)(25, "label", 19);
    \u0275\u0275text(26, "Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function ContactModalComponent_Conditional_0_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("focus", function ContactModalComponent_Conditional_0_Template_input_focus_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.target.style.borderColor = "rgba(24,209,193,0.4)");
    })("blur", function ContactModalComponent_Conditional_0_Template_input_blur_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.target.style.borderColor = "rgba(255,255,255,0.08)");
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 18)(29, "label", 19);
    \u0275\u0275text(30, "Mobile ");
    \u0275\u0275elementStart(31, "span", 22);
    \u0275\u0275text(32, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 23)(34, "span", 24);
    \u0275\u0275text(35, "+91");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ContactModalComponent_Conditional_0_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.mobile, $event) || (ctx_r1.form.mobile = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 18)(38, "label", 19);
    \u0275\u0275text(39, "Message *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "textarea", 26);
    \u0275\u0275twoWayListener("ngModelChange", function ContactModalComponent_Conditional_0_Template_textarea_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.message, $event) || (ctx_r1.form.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("focus", function ContactModalComponent_Conditional_0_Template_textarea_focus_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.target.style.borderColor = "rgba(24,209,193,0.4)");
    })("blur", function ContactModalComponent_Conditional_0_Template_textarea_blur_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.target.style.borderColor = "rgba(255,255,255,0.08)");
    });
    \u0275\u0275text(41, "              ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 27)(43, "button", 28);
    \u0275\u0275listener("click", function ContactModalComponent_Conditional_0_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(44, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 29);
    \u0275\u0275listener("click", function ContactModalComponent_Conditional_0_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275template(46, ContactModalComponent_Conditional_0_Conditional_46_Template, 3, 0)(47, ContactModalComponent_Conditional_0_Conditional_47_Template, 4, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275conditional(ctx_r1.toast() ? 18 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.email);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.mobile);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.message);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.sending());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.sending() ? 46 : 47);
  }
}
var ContactModalComponent = class _ContactModalComponent {
  constructor() {
    this.isOpen = false;
    this.close = new EventEmitter();
    this.form = { name: "", email: "", mobile: "", message: "" };
    this.sending = signal(false);
    this.toast = signal(null);
  }
  onOverlayClick(e) {
    if (e.target === e.currentTarget)
      this.close.emit();
  }
  submit() {
    return __async(this, null, function* () {
      if (!this.form.name.trim() || !this.form.email.trim() || !this.form.message.trim()) {
        this.toast.set({ type: "error", msg: "Please fill in Name, Email, and Message." });
        return;
      }
      this.sending.set(true);
      this.toast.set(null);
      yield new Promise((r) => setTimeout(r, 800));
      const subject = encodeURIComponent(`Portfolio Enquiry from ${this.form.name}`);
      const body = encodeURIComponent(`Name: ${this.form.name}
Email: ${this.form.email}
Mobile: ${this.form.mobile || "Not provided"}

Message:
${this.form.message}`);
      const mailtoUrl = `mailto:ananth.machiraju@outlook.com?subject=${subject}&body=${body}`;
      this.sending.set(false);
      this.toast.set({ type: "success", msg: "\u2713 Opening your email client\u2026 Message ready to send!" });
      window.location.href = mailtoUrl;
      setTimeout(() => {
        this.form = { name: "", email: "", mobile: "", message: "" };
        this.toast.set(null);
        this.close.emit();
      }, 2e3);
    });
  }
  static {
    this.\u0275fac = function ContactModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactModalComponent, selectors: [["app-contact-modal"]], inputs: { isOpen: "isOpen" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "z-[1000]", "flex", "items-center", "justify-center", "p-4", 2, "background", "rgba(7,24,40,0.8)", "backdrop-filter", "blur(8px)"], [1, "fixed", "inset-0", "z-[1000]", "flex", "items-center", "justify-center", "p-4", 2, "background", "rgba(7,24,40,0.8)", "backdrop-filter", "blur(8px)", 3, "click"], [1, "relative", "w-full", "max-w-xl", "max-h-[92vh]", "overflow-y-auto", "rounded-2xl", "flex", "flex-col", 2, "background", "#0B2035", "border", "1px solid rgba(24,209,193,0.15)", "box-shadow", "0 20px 60px rgba(7,24,40,0.5), 0 0 0 1px rgba(24,209,193,0.08)", 3, "click"], [1, "flex", "items-center", "justify-between", "p-6", "border-b", "flex-shrink-0", 2, "border-color", "rgba(24,209,193,0.08)", "background", "linear-gradient(135deg, rgba(9,175,233,0.05), rgba(42,245,153,0.05))"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded-xl", "flex", "items-center", "justify-center", 2, "background", "linear-gradient(135deg,#09AFE9,#2AF599)"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#071828", "stroke-width", "2.5"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], [1, "font-display", "text-lg", "font-semibold", "text-white"], [1, "font-mono", "text-xs", "text-white/35"], [1, "w-8", "h-8", "rounded-full", "flex", "items-center", "justify-center", "text-white/40", "hover:text-white", "hover:bg-white/5", "transition-all", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "p-6", "space-y-4", "flex-1"], [1, "p-4", "rounded-xl", "text-sm", "font-sans", 3, "style"], [1, "grid", "grid-cols-2", "gap-4"], [1, "space-y-1.5"], [1, "font-mono", "text-xs", "text-white/40", "uppercase", "tracking-wider"], ["type", "text", "placeholder", "Your full name", 1, "w-full", "px-4", "py-2.5", "rounded-xl", "text-sm", "font-sans", "text-white", "placeholder:text-white/20", "outline-none", "transition-all", 2, "background", "rgba(255,255,255,0.04)", "border", "1px solid rgba(255,255,255,0.08)", 3, "ngModelChange", "focus", "blur", "ngModel"], ["type", "email", "placeholder", "your@email.com", 1, "w-full", "px-4", "py-2.5", "rounded-xl", "text-sm", "font-sans", "text-white", "placeholder:text-white/20", "outline-none", "transition-all", 2, "background", "rgba(255,255,255,0.04)", "border", "1px solid rgba(255,255,255,0.08)", 3, "ngModelChange", "focus", "blur", "ngModel"], [1, "text-white/20", "normal-case", "tracking-normal"], [1, "flex", "rounded-xl", "overflow-hidden", 2, "border", "1px solid rgba(255,255,255,0.08)"], [1, "px-3", "flex", "items-center", "font-mono", "text-xs", "text-white/30", "flex-shrink-0", 2, "background", "rgba(255,255,255,0.03)", "border-right", "1px solid rgba(255,255,255,0.08)"], ["type", "tel", "placeholder", "10-digit number", "maxlength", "10", 1, "flex-1", "px-3", "py-2.5", "text-sm", "font-sans", "text-white", "placeholder:text-white/20", "outline-none", 2, "background", "transparent", 3, "ngModelChange", "ngModel"], ["placeholder", "Your message...", "rows", "4", 1, "w-full", "px-4", "py-2.5", "rounded-xl", "text-sm", "font-sans", "text-white", "placeholder:text-white/20", "outline-none", "resize-none", "transition-all", 2, "background", "rgba(255,255,255,0.04)", "border", "1px solid rgba(255,255,255,0.08)", 3, "ngModelChange", "focus", "blur", "ngModel"], [1, "flex", "justify-end", "gap-3", "p-6", "border-t", "flex-shrink-0", 2, "border-color", "rgba(24,209,193,0.08)", "background", "rgba(255,255,255,0.02)"], [1, "btn-ghost", 3, "click"], [1, "btn-brand", 3, "click", "disabled"], [1, "p-4", "rounded-xl", "text-sm", "font-sans"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", 1, "animate-spin"], ["d", "M21 12a9 9 0 1 1-6.219-8.56"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x1", "22", "y1", "2", "x2", "11", "y2", "13"], ["points", "22 2 15 22 11 13 2 9 22 2"]], template: function ContactModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ContactModalComponent_Conditional_0_Template, 48, 7, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.isOpen ? 0 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactModalComponent, { className: "ContactModalComponent", filePath: "src\\app\\shared\\components\\contact-modal\\contact-modal.component.ts", lineNumber: 112 });
})();

// src/app/features/home/home.component.ts
var HomeComponent = class _HomeComponent {
  constructor() {
    this.contactOpen = signal(false);
  }
  ngOnInit() {
    this.initScrollReveal();
  }
  initScrollReveal() {
    const observer = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    }), { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });
    setTimeout(() => {
      document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
        observer.observe(el);
      });
    }, 200);
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 1, consts: [[3, "openContact"], [3, "contact"], [3, "close", "isOpen"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-navbar", 0);
        \u0275\u0275listener("openContact", function HomeComponent_Template_app_navbar_openContact_0_listener() {
          return ctx.contactOpen.set(true);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "main")(2, "app-hero", 1);
        \u0275\u0275listener("contact", function HomeComponent_Template_app_hero_contact_2_listener() {
          return ctx.contactOpen.set(true);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "app-about")(4, "app-experience")(5, "app-skills")(6, "app-achievements")(7, "app-education")(8, "app-hobbies");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "app-footer")(10, "app-chatbot");
        \u0275\u0275elementStart(11, "app-contact-modal", 2);
        \u0275\u0275listener("close", function HomeComponent_Template_app_contact_modal_close_11_listener() {
          return ctx.contactOpen.set(false);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("isOpen", ctx.contactOpen());
      }
    }, dependencies: [
      CommonModule,
      NavbarComponent,
      HeroComponent,
      AboutComponent,
      ExperienceComponent,
      SkillsComponent,
      AchievementsComponent,
      EducationComponent,
      HobbiesComponent,
      FooterComponent,
      ChatbotComponent,
      ContactModalComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\features\\home\\home.component.ts", lineNumber: 50 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-X7EEHM6M.js.map
