import {
  signal,
  ɵɵdefineInjectable
} from "./chunk-JQPCVUPX.js";

// src/app/core/services/theme.service.ts
var ThemeService = class _ThemeService {
  constructor() {
    this.KEY = "am_portfolio_theme";
    this.theme = signal("dark");
  }
  init() {
    let saved = null;
    try {
      saved = localStorage.getItem(this.KEY);
    } catch {
    }
    if (!saved && window.matchMedia?.("(prefers-color-scheme: light)").matches) {
      saved = "light";
    }
    this.apply(saved || "dark");
    window.matchMedia?.("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      try {
        if (!localStorage.getItem(this.KEY))
          this.apply(e.matches ? "dark" : "light");
      } catch {
      }
    });
  }
  toggle() {
    this.apply(this.theme() === "dark" ? "light" : "dark");
  }
  apply(t) {
    this.theme.set(t);
    document.documentElement.classList.toggle("dark", t === "dark");
    document.documentElement.classList.toggle("light-theme", t === "light");
    try {
      localStorage.setItem(this.KEY, t);
    } catch {
    }
  }
  static {
    this.\u0275fac = function ThemeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
  }
};

export {
  ThemeService
};
//# sourceMappingURL=chunk-GVED52CA.js.map
