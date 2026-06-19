import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useLang } from "./lang-context-C9IyQ37z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dammam-preview-BRcAwTaA.js
var import_jsx_runtime = require_jsx_runtime();
function DammamPreviewPage() {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-[#0a0a0a] px-6 pt-32 pb-20 text-white md:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.4em] text-[#c9a962]",
					children: t("معاينة", "Preview")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-5xl font-semibold md:text-6xl",
					children: t("مدينة الدمام الأولمبية", "Dammam Olympic City")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-white/70",
					children: t("تجربة المعاينة الكاملة (Split-screen + Olympic Circle Gallery) سيتم نقلها في المرحلة الرابعة مع باقي المكونات السينمائية وخريطة Leaflet.", "The full split-screen and Olympic Circle Gallery experience will be ported in phase 4 alongside the cinematic components and Leaflet map.")
				})
			]
		})
	});
}
//#endregion
export { DammamPreviewPage as component };
