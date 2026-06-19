import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useLang } from "./lang-context-C9IyQ37z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-B-b7TfIj.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-[#FAFAF8] px-6 pt-32 pb-20 md:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.3em] text-[#9A7B3A]",
					children: t("من نحن", "About Us")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-4xl font-semibold text-[#1A1612] md:text-5xl",
					children: t("مجموعة الشبيلي", "AlShubaily Group")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg leading-loose text-[#5C5348]",
					children: t("نبني وجهات عقارية واستثمارية تُجسّد طموح المملكة العربية السعودية وتلتزم بأعلى معايير الجودة والاستدامة، لنصنع قيمة دائمة لمجتمعاتنا وشركائنا.", "We build real estate and investment destinations that embody the Kingdom's ambition and the highest standards of quality and sustainability — creating lasting value for our communities and partners.")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 rounded-2xl border border-[#E0D3C2] bg-white p-6 text-sm text-[#5C5348]",
					children: t("هذه الصفحة قيد التطوير — سيتم نقل المحتوى الكامل والتجربة التفاعلية في المرحلة الثانية من البورت.", "This page is being ported. The full content and interactive experience will arrive in phase 2.")
				})
			]
		})
	});
}
//#endregion
export { AboutPage as component };
