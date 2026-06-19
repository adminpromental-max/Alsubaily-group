import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useLang } from "./lang-context-C9IyQ37z.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./projects._slug-ChvMA33h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-BosBoJay.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectPage() {
	const { slug } = Route.useParams();
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-[#FAFAF8] px-6 pt-32 pb-20 md:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-sm text-[#9A7B3A] hover:text-[#1A1612]",
					children: t("← العودة للرئيسية", "← Back to home")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 text-4xl font-semibold text-[#1A1612] md:text-5xl",
					children: slug
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-[#5C5348]",
					children: t("صفحة تفاصيل المشروع قيد التجهيز — سيتم نقل المعرض السينمائي وتفاصيل المشروع في المرحلة الثانية.", "Project detail page is being ported. The cinematic gallery and full details arrive in phase 2.")
				})
			]
		})
	});
}
//#endregion
export { ProjectPage as component };
