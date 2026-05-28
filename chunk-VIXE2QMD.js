import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  PortfolioService
} from "./chunk-UWUI56SK.js";
import {
  CommonModule,
  RouterLink,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JQPCVUPX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/features/dashboard/dashboard.component.ts
function DashboardComponent_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loginError(), " ");
  }
}
function DashboardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2);
    \u0275\u0275element(2, "div", 3)(3, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "div", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 9)(9, "defs")(10, "linearGradient", 10);
    \u0275\u0275element(11, "stop", 11)(12, "stop", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "circle", 13)(14, "circle", 14)(15, "path", 15)(16, "path", 16)(17, "circle", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "div")(19, "div", 18);
    \u0275\u0275text(20, "Admin Dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 19);
    \u0275\u0275text(22, "Ananth Machiraju \xB7 Portfolio CMS");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 20)(24, "span", 21);
    \u0275\u0275text(25, "\u{1F510} Restricted Access");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, DashboardComponent_Conditional_0_Conditional_26_Template, 2, 1, "div", 22);
    \u0275\u0275elementStart(27, "div", 23)(28, "div", 24)(29, "label", 25);
    \u0275\u0275text(30, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_0_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.loginForm.user, $event) || (ctx_r1.loginForm.user = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("focus", function DashboardComponent_Conditional_0_Template_input_focus_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.target.style.borderColor = "rgba(24,209,193,0.4)");
    })("blur", function DashboardComponent_Conditional_0_Template_input_blur_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.target.style.borderColor = "rgba(255,255,255,0.08)");
    })("keydown.enter", function DashboardComponent_Conditional_0_Template_input_keydown_enter_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.login());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 24)(33, "label", 25);
    \u0275\u0275text(34, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 27)(36, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_0_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.loginForm.pass, $event) || (ctx_r1.loginForm.pass = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("focus", function DashboardComponent_Conditional_0_Template_input_focus_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.target.style.borderColor = "rgba(24,209,193,0.4)");
    })("blur", function DashboardComponent_Conditional_0_Template_input_blur_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.target.style.borderColor = "rgba(255,255,255,0.08)");
    })("keydown.enter", function DashboardComponent_Conditional_0_Template_input_keydown_enter_36_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.login());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 29);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleShowPass());
    });
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "button", 30);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.login());
    });
    \u0275\u0275text(40, " Access Dashboard ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "p", 31)(42, "a", 32);
    \u0275\u0275text(43, " \u2190 Back to Portfolio ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(26);
    \u0275\u0275conditional(ctx_r1.loginError() ? 26 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.loginForm.user);
    \u0275\u0275advance(5);
    \u0275\u0275property("type", ctx_r1.showPass() ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.loginForm.pass);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showPass() ? "HIDE" : "SHOW", " ");
  }
}
function DashboardComponent_Conditional_1_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 62);
    \u0275\u0275element(2, "polyline", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.saveToast(), " ");
  }
}
function DashboardComponent_Conditional_1_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 64)(2, "div", 65)(3, "label", 66);
    \u0275\u0275text(4, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_1_Conditional_51_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.hero.name, $event) || (ctx_r1.draft.hero.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DashboardComponent_Conditional_1_Conditional_51_Template_input_input_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanged());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 65)(7, "label", 66);
    \u0275\u0275text(8, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_1_Conditional_51_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.hero.phone, $event) || (ctx_r1.draft.hero.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DashboardComponent_Conditional_1_Conditional_51_Template_input_input_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanged());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 68)(11, "label", 66);
    \u0275\u0275text(12, "Title / Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_1_Conditional_51_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.hero.title, $event) || (ctx_r1.draft.hero.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DashboardComponent_Conditional_1_Conditional_51_Template_input_input_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanged());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 65)(15, "label", 66);
    \u0275\u0275text(16, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_1_Conditional_51_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.hero.email, $event) || (ctx_r1.draft.hero.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DashboardComponent_Conditional_1_Conditional_51_Template_input_input_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanged());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 65)(19, "label", 66);
    \u0275\u0275text(20, "LinkedIn URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_1_Conditional_51_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.hero.linkedin, $event) || (ctx_r1.draft.hero.linkedin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DashboardComponent_Conditional_1_Conditional_51_Template_input_input_21_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanged());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 65)(23, "label", 66);
    \u0275\u0275text(24, "Twitter / X URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_1_Conditional_51_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.hero.twitter, $event) || (ctx_r1.draft.hero.twitter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DashboardComponent_Conditional_1_Conditional_51_Template_input_input_25_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanged());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 65)(27, "label", 66);
    \u0275\u0275text(28, "Years of Experience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_1_Conditional_51_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.hero.years, $event) || (ctx_r1.draft.hero.years = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DashboardComponent_Conditional_1_Conditional_51_Template_input_input_29_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanged());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 71)(31, "button", 72);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Conditional_51_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetSection("hero"));
    });
    \u0275\u0275text(32, "Reset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 73);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Conditional_51_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveSection("hero"));
    });
    \u0275\u0275text(34, "Save Changes");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.hero.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.hero.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.hero.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.hero.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.hero.linkedin);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.hero.twitter);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.hero.years);
  }
}
function DashboardComponent_Conditional_1_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 65)(2, "label", 66);
    \u0275\u0275text(3, "Summary Paragraph");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 74);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_1_Conditional_62_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.summary, $event) || (ctx_r1.draft.summary = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DashboardComponent_Conditional_1_Conditional_62_Template_textarea_input_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanged());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 71)(6, "button", 72);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Conditional_62_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetSection("summary"));
    });
    \u0275\u0275text(7, "Reset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 73);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Conditional_62_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveSection("summary"));
    });
    \u0275\u0275text(9, "Save Changes");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.summary);
  }
}
function DashboardComponent_Conditional_1_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 64)(2, "div", 65)(3, "label", 66);
    \u0275\u0275text(4, "LinkedIn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_1_Conditional_73_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.social.linkedin, $event) || (ctx_r1.draft.social.linkedin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DashboardComponent_Conditional_1_Conditional_73_Template_input_input_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanged());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 65)(7, "label", 66);
    \u0275\u0275text(8, "Twitter / X");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_1_Conditional_73_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.social.twitter, $event) || (ctx_r1.draft.social.twitter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DashboardComponent_Conditional_1_Conditional_73_Template_input_input_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanged());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 65)(11, "label", 66);
    \u0275\u0275text(12, "Instagram");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_1_Conditional_73_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.social.instagram, $event) || (ctx_r1.draft.social.instagram = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DashboardComponent_Conditional_1_Conditional_73_Template_input_input_13_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanged());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 65)(15, "label", 66);
    \u0275\u0275text(16, "GitHub");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_1_Conditional_73_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.social.github, $event) || (ctx_r1.draft.social.github = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DashboardComponent_Conditional_1_Conditional_73_Template_input_input_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanged());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 68)(19, "label", 66);
    \u0275\u0275text(20, "YouTube");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_1_Conditional_73_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.social.youtube, $event) || (ctx_r1.draft.social.youtube = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DashboardComponent_Conditional_1_Conditional_73_Template_input_input_21_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanged());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 71)(23, "button", 72);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Conditional_73_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetSection("social"));
    });
    \u0275\u0275text(24, "Reset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 73);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Conditional_73_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveSection("social"));
    });
    \u0275\u0275text(26, "Save Changes");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.social.linkedin);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.social.twitter);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.social.instagram);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.social.github);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.social.youtube);
  }
}
function DashboardComponent_Conditional_1_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 64)(2, "div", 65)(3, "label", 66);
    \u0275\u0275text(4, "Degree 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_1_Conditional_84_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.edu.deg1, $event) || (ctx_r1.draft.edu.deg1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DashboardComponent_Conditional_1_Conditional_84_Template_input_input_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanged());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 65)(7, "label", 66);
    \u0275\u0275text(8, "Institution 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_1_Conditional_84_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.edu.inst1, $event) || (ctx_r1.draft.edu.inst1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DashboardComponent_Conditional_1_Conditional_84_Template_input_input_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanged());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 65)(11, "label", 66);
    \u0275\u0275text(12, "Degree 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_1_Conditional_84_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.edu.deg2, $event) || (ctx_r1.draft.edu.deg2 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DashboardComponent_Conditional_1_Conditional_84_Template_input_input_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanged());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 65)(15, "label", 66);
    \u0275\u0275text(16, "Institution 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Conditional_1_Conditional_84_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.draft.edu.inst2, $event) || (ctx_r1.draft.edu.inst2 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DashboardComponent_Conditional_1_Conditional_84_Template_input_input_17_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markChanged());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 65)(19, "label", 66);
    \u0275\u0275text(20, "Certifications (one per line)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "textarea", 75);
    \u0275\u0275listener("ngModelChange", function DashboardComponent_Conditional_1_Conditional_84_Template_textarea_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateCerts($event));
    });
    \u0275\u0275text(22, "                    ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 71)(24, "button", 72);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Conditional_84_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetSection("edu"));
    });
    \u0275\u0275text(25, "Reset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 73);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Conditional_84_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveSection("edu"));
    });
    \u0275\u0275text(27, "Save Changes");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.edu.deg1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.edu.inst1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.edu.deg2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.draft.edu.inst2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.draft.edu.certs.join("\n"));
  }
}
function DashboardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "nav", 33)(2, "div", 34)(3, "div", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 36)(5, "defs")(6, "linearGradient", 37);
    \u0275\u0275element(7, "stop", 11)(8, "stop", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "circle", 38)(10, "path", 39)(11, "path", 16)(12, "circle", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "span", 40);
    \u0275\u0275text(14, "Portfolio \u2014 ");
    \u0275\u0275elementStart(15, "span", 41);
    \u0275\u0275text(16, "Admin Dashboard");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 34)(18, "a", 42);
    \u0275\u0275text(19, "\u2190 Portfolio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 43);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loggedIn.set(false));
    });
    \u0275\u0275text(21, "Sign Out");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 44)(23, "div", 45)(24, "div")(25, "h2", 46);
    \u0275\u0275text(26, "Content Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 19);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 47)(30, "div", 48)(31, "div", 49);
    \u0275\u0275text(32, "9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 50);
    \u0275\u0275text(34, "Sections");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 48)(36, "div", 51);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 50);
    \u0275\u0275text(39, "Changes");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(40, DashboardComponent_Conditional_1_Conditional_40_Template, 4, 1, "div", 52);
    \u0275\u0275elementStart(41, "div", 53)(42, "div", 54)(43, "div", 55);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Template_div_click_43_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSection("hero"));
    });
    \u0275\u0275elementStart(44, "div", 34)(45, "span");
    \u0275\u0275text(46, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 56);
    \u0275\u0275text(48, "Personal Info & Hero");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(49, "svg", 57);
    \u0275\u0275element(50, "polyline", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(51, DashboardComponent_Conditional_1_Conditional_51_Template, 35, 7, "div", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(52, "div", 53)(53, "div", 54)(54, "div", 55);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Template_div_click_54_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSection("summary"));
    });
    \u0275\u0275elementStart(55, "div", 34)(56, "span");
    \u0275\u0275text(57, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 56);
    \u0275\u0275text(59, "Professional Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(60, "svg", 57);
    \u0275\u0275element(61, "polyline", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(62, DashboardComponent_Conditional_1_Conditional_62_Template, 10, 1, "div", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(63, "div", 53)(64, "div", 54)(65, "div", 55);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Template_div_click_65_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSection("social"));
    });
    \u0275\u0275elementStart(66, "div", 34)(67, "span");
    \u0275\u0275text(68, "\u{1F517}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 56);
    \u0275\u0275text(70, "Social & Contact Links");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(71, "svg", 57);
    \u0275\u0275element(72, "polyline", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(73, DashboardComponent_Conditional_1_Conditional_73_Template, 27, 5, "div", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(74, "div", 53)(75, "div", 54)(76, "div", 55);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_1_Template_div_click_76_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSection("edu"));
    });
    \u0275\u0275elementStart(77, "div", 34)(78, "span");
    \u0275\u0275text(79, "\u{1F393}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 56);
    \u0275\u0275text(81, "Education & Certifications");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(82, "svg", 57);
    \u0275\u0275element(83, "polyline", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(84, DashboardComponent_Conditional_1_Conditional_84_Template, 28, 5, "div", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(85, "div", 60)(86, "div", 61);
    \u0275\u0275text(87, "Additional sections (Skills, Experience, Achievements, Hobbies) are managed through the data model in portfolio.model.ts");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(28);
    \u0275\u0275textInterpolate1("Logged in as admin \xB7 Last saved: ", ctx_r1.lastSaved() || "never", "");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.changes());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.saveToast() ? 40 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("rotate-180", ctx_r1.sections()["hero"]);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.sections()["hero"] ? 51 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("rotate-180", ctx_r1.sections()["summary"]);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.sections()["summary"] ? 62 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("rotate-180", ctx_r1.sections()["social"]);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.sections()["social"] ? 73 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("rotate-180", ctx_r1.sections()["edu"]);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.sections()["edu"] ? 84 : -1);
  }
}
var ADMIN_USER = "admin";
var ADMIN_PASS = "admin@2025";
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.portfolioService = inject(PortfolioService);
    this.loggedIn = signal(false);
    this.showPass = signal(false);
    this.loginError = signal("");
    this.loginForm = { user: "", pass: "" };
    this.changes = signal(0);
    this.lastSaved = signal("");
    this.saveToast = signal("");
    this.sections = signal({});
    this.draft = this.deepClone(this.portfolioService.data());
  }
  login() {
    if (this.loginForm.user === ADMIN_USER && this.loginForm.pass === ADMIN_PASS) {
      this.loggedIn.set(true);
      this.loginError.set("");
      this.draft = this.deepClone(this.portfolioService.data());
    } else {
      this.loginError.set("Invalid username or password. Please try again.");
    }
  }
  toggleShowPass() {
    this.showPass.update((v) => !v);
  }
  toggleSection(key) {
    this.sections.update((s) => __spreadProps(__spreadValues({}, s), { [key]: !s[key] }));
  }
  markChanged() {
    this.changes.update((v) => v + 1);
  }
  updateCerts(value) {
    this.draft.edu.certs = value.split("\n").filter((s) => s.trim());
    this.markChanged();
  }
  saveSection(key) {
    const partial = {};
    partial[key] = this.draft[key];
    this.portfolioService.save(partial);
    this.lastSaved.set((/* @__PURE__ */ new Date()).toLocaleTimeString());
    this.showToast(`${key} saved successfully`);
    this.changes.set(0);
  }
  resetSection(key) {
    this.portfolioService.reset(key);
    this.draft = this.deepClone(this.portfolioService.data());
    this.changes.set(0);
    this.showToast(`${key} reset to defaults`);
  }
  showToast(msg) {
    this.saveToast.set(msg);
    setTimeout(() => this.saveToast.set(""), 3e3);
  }
  deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "p-4", 2, "background", "#071828"], [1, "min-h-screen", 2, "background", "#071828"], [1, "fixed", "inset-0", "pointer-events-none", "overflow-hidden"], [1, "absolute", "top-1/4", "right-1/4", "w-96", "h-96", "rounded-full", "opacity-5", "animate-float-slow", 2, "background", "radial-gradient(circle, #09AFE9, transparent 70%)"], [1, "absolute", "bottom-1/4", "left-1/4", "w-80", "h-80", "rounded-full", "opacity-5", "animate-float", 2, "background", "radial-gradient(circle, #2AF599, transparent 70%)", "animation-delay", "2s"], [1, "relative", "z-10", "w-full", "max-w-md"], [1, "glass-card", "rounded-2xl", "border", "border-teal-DEFAULT/15", "p-8", 2, "background", "#0B2035"], [1, "flex", "items-center", "gap-4", "mb-8"], [1, "w-16", "h-16"], ["viewBox", "0 0 80 80", "xmlns", "http://www.w3.org/2000/svg"], ["id", "lgGrad", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "100%"], ["offset", "0%", "stop-color", "#2AF599"], ["offset", "100%", "stop-color", "#09AFE9"], ["cx", "40", "cy", "40", "r", "39", "fill", "#071828", "stroke", "#18D1C1", "stroke-width", "1.5"], ["cx", "40", "cy", "40", "r", "33", "fill", "none", "stroke", "#2AF599", "stroke-width", "0.5", "stroke-dasharray", "3 4"], ["d", "M18 58 L30 22 L40 46 M22 46 H36", "stroke", "url(#lgGrad)", "stroke-width", "4", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], ["d", "M40 58 L40 22 L52 42 L64 22 L64 58", "stroke", "#FEFEFE", "stroke-width", "3.5", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], ["cx", "40", "cy", "40", "r", "3", "fill", "#18D1C1"], [1, "font-display", "text-xl", "font-bold", "text-white"], [1, "font-mono", "text-xs", "text-white/35"], [1, "text-center", "mb-6"], [1, "section-tag"], [1, "p-3", "rounded-xl", "mb-4", "text-sm", "font-sans", 2, "background", "rgba(224,62,82,0.1)", "border", "1px solid rgba(224,62,82,0.2)", "color", "#E03E52"], [1, "space-y-4"], [1, "space-y-1.5"], [1, "font-mono", "text-xs", "text-white/40", "uppercase", "tracking-wider"], ["type", "text", "placeholder", "Enter username", 1, "w-full", "px-4", "py-3", "rounded-xl", "text-sm", "font-sans", "text-white", "placeholder:text-white/20", "outline-none", 2, "background", "rgba(255,255,255,0.04)", "border", "1px solid rgba(255,255,255,0.08)", 3, "ngModelChange", "focus", "blur", "keydown.enter", "ngModel"], [1, "relative"], ["placeholder", "Enter password", 1, "w-full", "px-4", "py-3", "pr-16", "rounded-xl", "text-sm", "font-sans", "text-white", "placeholder:text-white/20", "outline-none", 2, "background", "rgba(255,255,255,0.04)", "border", "1px solid rgba(255,255,255,0.08)", 3, "ngModelChange", "focus", "blur", "keydown.enter", "type", "ngModel"], ["type", "button", 1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "font-mono", "text-xs", "text-white/30", "hover:text-white/60", "transition-colors", 3, "click"], [1, "btn-brand", "w-full", "justify-center", "mt-2", 3, "click"], [1, "text-center", "mt-5"], ["routerLink", "/", 1, "font-mono", "text-xs", "text-teal-DEFAULT/60", "hover:text-teal-DEFAULT", "transition-colors"], [1, "sticky", "top-0", "z-50", "flex", "items-center", "justify-between", "px-6", "h-16", "border-b", 2, "background", "rgba(11,32,53,0.95)", "backdrop-filter", "blur(16px)", "border-color", "rgba(24,209,193,0.1)"], [1, "flex", "items-center", "gap-3"], [1, "w-8", "h-8"], ["viewBox", "0 0 80 80"], ["id", "dGrad2", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "100%"], ["cx", "40", "cy", "40", "r", "39", "fill", "#1A1A1A", "stroke", "#18D1C1", "stroke-width", "1.5"], ["d", "M18 58 L30 22 L40 46 M22 46 H36", "stroke", "url(#dGrad2)", "stroke-width", "4", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], [1, "font-display", "text-base", "text-white"], [1, "text-grad"], ["routerLink", "/", 1, "btn-outline", "text-xs", "px-4", "py-2"], [1, "btn-ghost", "text-xs", "text-red-400", "hover:text-red-300", 3, "click"], [1, "max-w-4xl", "mx-auto", "px-6", "py-10"], [1, "glass-card", "rounded-2xl", "p-6", "border", "border-teal-DEFAULT/10", "mb-8", "flex", "items-center", "justify-between", "flex-wrap", "gap-4"], [1, "font-display", "text-2xl", "font-bold", "text-white", "mb-1"], [1, "flex", "gap-6"], [1, "text-center"], [1, "font-display", "text-2xl", "font-bold", "text-grad"], [1, "font-mono", "text-xs", "text-white/35", "uppercase", "tracking-wider"], [1, "font-display", "text-2xl", "font-bold", "text-cyan-DEFAULT"], [1, "fixed", "bottom-6", "right-6", "z-50", "flex", "items-center", "gap-3", "px-5", "py-3", "rounded-xl", "text-sm", "font-sans", 2, "background", "rgba(21,168,106,0.15)", "border", "1px solid rgba(42,245,153,0.3)", "color", "#2AF599", "backdrop-filter", "blur(16px)"], [1, "mb-4"], [1, "glass-card", "rounded-2xl", "border", "border-teal-DEFAULT/10", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "cursor-pointer", 3, "click"], [1, "font-sans", "font-semibold", "text-white", "text-sm"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "rgba(255,255,255,0.4)", "stroke-width", "2", 1, "transition-transform", "duration-200"], ["points", "6 9 12 15 18 9"], [1, "px-6", "pb-6", "border-t", "border-teal-DEFAULT/08", "pt-4", "space-y-4"], [1, "glass-card", "rounded-2xl", "p-5", "border", "border-teal-DEFAULT/08", "text-center"], [1, "font-mono", "text-xs", "text-white/25", "tracking-wider"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["points", "20 6 9 17 4 12"], [1, "grid", "grid-cols-2", "gap-4"], [1, "dash-field"], [1, "dash-label"], [1, "dash-input", 3, "ngModelChange", "input", "ngModel"], [1, "dash-field", "col-span-2"], ["type", "email", 1, "dash-input", 3, "ngModelChange", "input", "ngModel"], ["type", "url", 1, "dash-input", 3, "ngModelChange", "input", "ngModel"], [1, "dash-actions"], [1, "btn-ghost", "text-xs", 3, "click"], [1, "btn-brand", "text-xs", "px-4", "py-2", 3, "click"], ["rows", "5", 1, "dash-input", 3, "ngModelChange", "input", "ngModel"], ["rows", "6", 1, "dash-input", 3, "ngModelChange", "ngModel"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DashboardComponent_Conditional_0_Template, 44, 5, "div", 0)(1, DashboardComponent_Conditional_1_Template, 88, 15, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.loggedIn() ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loggedIn() ? 1 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], styles: [".dash-field[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 0.375rem; }\n        .dash-label[_ngcontent-%COMP%] { font-family: 'DM Mono', monospace; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; color: rgba(255,255,255,0.35); }\n        .dash-input[_ngcontent-%COMP%] {\n          width: 100%; padding: 0.6rem 0.85rem;\n          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);\n          border-radius: 8px; color: #E8F4F8; font-family: 'DM Sans', sans-serif; font-size: 0.85rem;\n          outline: none; transition: border-color 0.2s; resize: vertical;\n        }\n        .dash-input[_ngcontent-%COMP%]:focus { border-color: rgba(24,209,193,0.4); }\n        .dash-actions[_ngcontent-%COMP%] { display: flex; justify-content: flex-end; gap: 0.5rem; padding-top: 0.25rem; }\n        .border-teal-DEFAULT/08[_ngcontent-%COMP%] { border-color: rgba(24,209,193,0.08); }\n        .rotate-180[_ngcontent-%COMP%] { transform: rotate(180deg); }"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\features\\dashboard\\dashboard.component.ts", lineNumber: 276 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-VIXE2QMD.js.map
