//#region node_modules/.nitro/vite/services/ssr/assets/showcase-override-ZBEf9NcX.js
var SHOWCASE_OVERRIDE_KEY = "showcase:images:v1";
function loadShowcaseOverride() {
	if (typeof window === "undefined") return null;
	try {
		const raw = window.localStorage.getItem(SHOWCASE_OVERRIDE_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (!parsed?.images?.length) return null;
		return parsed;
	} catch {
		return null;
	}
}
function saveShowcaseOverride(value) {
	if (typeof window === "undefined") return;
	window.localStorage.setItem(SHOWCASE_OVERRIDE_KEY, JSON.stringify(value));
	window.dispatchEvent(new CustomEvent("showcase-override-changed"));
}
function clearShowcaseOverride() {
	if (typeof window === "undefined") return;
	window.localStorage.removeItem(SHOWCASE_OVERRIDE_KEY);
	window.dispatchEvent(new CustomEvent("showcase-override-changed"));
}
//#endregion
export { saveShowcaseOverride as i, clearShowcaseOverride as n, loadShowcaseOverride as r, SHOWCASE_OVERRIDE_KEY as t };
