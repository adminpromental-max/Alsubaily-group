import { r as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lang-context-C9IyQ37z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LangContext = (0, import_react.createContext)(null);
function LangProvider({ children }) {
	const [lang, setLang] = (0, import_react.useState)("ar");
	const toggleLang = (0, import_react.useCallback)(() => {
		setLang((prev) => prev === "ar" ? "en" : "ar");
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof document !== "undefined") {
			document.documentElement.lang = lang;
			document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
		}
	}, [lang]);
	const value = (0, import_react.useMemo)(() => ({
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		toggleLang,
		t: (ar, en) => lang === "ar" ? ar : en
	}), [lang, toggleLang]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangContext.Provider, {
		value,
		children
	});
}
function useLang() {
	const ctx = (0, import_react.useContext)(LangContext);
	if (!ctx) throw new Error("useLang must be used within LangProvider");
	return ctx;
}
//#endregion
export { useLang as n, LangProvider as t };
