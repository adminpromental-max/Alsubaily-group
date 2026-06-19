import { r as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-D7DMLTFB.mjs";
import { E as isRedirect, g as useRouter, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { i as saveShowcaseOverride, n as clearShowcaseOverride, r as loadShowcaseOverride, t as SHOWCASE_OVERRIDE_KEY } from "./showcase-override-ZBEf9NcX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.showcase-DZ1hmPUI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var listDriveImages = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(createSsrRpc("3de1ca0606cb96216de798cfb731a071ab7dae11da6eae3ef22988a52898a281"));
function AdminShowcase() {
	const list = useServerFn(listDriveImages);
	const [folder, setFolder] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [files, setFiles] = (0, import_react.useState)([]);
	const [selected, setSelected] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [active, setActive] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const cur = loadShowcaseOverride();
		if (cur) setActive({
			count: cur.images.length,
			folderId: cur.folderId
		});
	}, []);
	async function handleFetch() {
		if (!folder.trim()) return;
		setLoading(true);
		setError(null);
		setFiles([]);
		try {
			const res = await list({ data: { folder } });
			setFiles(res.files);
			setSelected(new Set(res.files.map((f) => f.id)));
		} catch (e) {
			setError(e instanceof Error ? e.message : String(e));
		} finally {
			setLoading(false);
		}
	}
	function toggle(id) {
		setSelected((s) => {
			const n = new Set(s);
			if (n.has(id)) n.delete(id);
			else n.add(id);
			return n;
		});
	}
	function applySync() {
		const chosen = files.filter((f) => selected.has(f.id));
		if (!chosen.length) return;
		const folderId = files.length ? extractFolderId(folder) : void 0;
		const images = chosen.map((f) => `/api/public/drive-image/${f.id}`);
		saveShowcaseOverride({
			images,
			folderId,
			updatedAt: Date.now()
		});
		setActive({
			count: images.length,
			folderId
		});
	}
	function resetDefault() {
		clearShowcaseOverride();
		setActive(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		dir: "rtl",
		className: "min-h-screen bg-[#0F0D0B] px-4 py-12 text-white md:px-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-heading text-2xl font-semibold md:text-3xl",
						children: "مزامنة سلايدر المشاريع من Google Drive"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-sm text-[#C9A962] hover:underline",
						children: "← العودة للرئيسية"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-2 block text-sm text-white/70",
							children: "رابط مجلد Google Drive أو معرّف المجلد"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 md:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: folder,
								onChange: (e) => setFolder(e.target.value),
								placeholder: "https://drive.google.com/drive/folders/...",
								className: "flex-1 rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-[#C9A962]",
								dir: "ltr"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: handleFetch,
								disabled: loading || !folder.trim(),
								className: "rounded-lg bg-[#C9A962] px-6 py-3 text-sm font-semibold text-[#0F0D0B] transition hover:bg-[#b8954a] disabled:opacity-50",
								children: loading ? "جاري الجلب..." : "جلب الصور"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-white/40",
							children: "تأكد أن المجلد مشارَك مع الحساب المتصل بـ Google Drive، أو ضمن نفس الحساب."
						}),
						active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center justify-between rounded-lg border border-[#C9A962]/30 bg-[#C9A962]/[0.06] px-4 py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"المزامنة الحالية: ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: active.count }),
								" صورة",
								active.folderId ? ` — مجلد ${active.folderId.slice(0, 10)}…` : ""
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: resetDefault,
								className: "text-xs text-white/60 hover:text-white",
								children: "استعادة الافتراضي"
							})]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200",
							children: error
						})
					]
				}),
				files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-white/70",
							children: [
								"تم العثور على ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: files.length }),
								" صورة — مختار ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: selected.size })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setSelected(new Set(files.map((f) => f.id))),
									className: "rounded-md border border-white/15 px-3 py-1.5 text-xs hover:bg-white/5",
									children: "تحديد الكل"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setSelected(/* @__PURE__ */ new Set()),
									className: "rounded-md border border-white/15 px-3 py-1.5 text-xs hover:bg-white/5",
									children: "إلغاء التحديد"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: applySync,
									disabled: !selected.size,
									className: "rounded-md bg-[#C9A962] px-4 py-1.5 text-xs font-semibold text-[#0F0D0B] hover:bg-[#b8954a] disabled:opacity-50",
									children: "تطبيق المزامنة على السلايدر"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5",
						children: files.map((f) => {
							const isSel = selected.has(f.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => toggle(f.id),
								className: `group relative aspect-[4/5] overflow-hidden rounded-xl border transition ${isSel ? "border-[#C9A962] ring-2 ring-[#C9A962]/40" : "border-white/10 opacity-60 hover:opacity-100"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: `/api/public/drive-image/${f.id}`,
										alt: f.name,
										loading: "lazy",
										className: "h-full w-full object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-x-0 bottom-0 truncate bg-black/60 px-2 py-1 text-[10px] text-white/80",
										children: f.name
									}),
									isSel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute right-2 top-2 rounded-full bg-[#C9A962] px-2 py-0.5 text-[10px] font-bold text-[#0F0D0B]",
										children: "✓"
									})
								]
							}, f.id);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-10 text-[11px] text-white/30",
					children: ["مفتاح التخزين المحلي: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: SHOWCASE_OVERRIDE_KEY })]
				})
			]
		})
	});
}
function extractFolderId(input) {
	const s = input.trim();
	const m1 = s.match(/folders\/([a-zA-Z0-9_-]+)/);
	if (m1) return m1[1];
	const m2 = s.match(/[?&]id=([a-zA-Z0-9_-]+)/);
	if (m2) return m2[1];
	return s;
}
//#endregion
export { AdminShowcase as component };
