import { r as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useLang, t as LangProvider } from "./lang-context-C9IyQ37z.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$6 } from "./projects._slug-ChvMA33h.mjs";
import { t as Button } from "./button-Dphu7yKj.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CQnOS3N_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CyM_1kt1.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var NAV = [
	{
		href: "/#map",
		ar: "المشاريع",
		en: "Projects"
	},
	{
		href: "/#chairman",
		ar: "الرؤية",
		en: "Vision"
	},
	{
		href: "/about",
		ar: "من نحن",
		en: "About"
	},
	{
		href: "/#contact",
		ar: "تواصل",
		en: "Contact"
	}
];
function SiteHeader() {
	const { t, toggleLang, lang } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed inset-x-0 top-0 z-40 border-b border-[#E0D3C2]/60 bg-white/80 backdrop-blur-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/assets/Alshubaily-logo.png",
						alt: "AlShubaily",
						width: 44,
						height: 48,
						className: "h-11 w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden sm:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.2em] text-[#9A7B3A] uppercase",
							children: "AlShubaily"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-[#1A1612]",
							children: t("مجموعة الشبيلي", "AlShubaily Group")
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: NAV.map((item) => item.href === "/about" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "text-sm text-[#5C5348] transition hover:text-[#1A1612]",
						children: t(item.ar, item.en)
					}, item.href) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "text-sm text-[#5C5348] transition hover:text-[#1A1612]",
						children: t(item.ar, item.en)
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					onClick: toggleLang,
					className: "rounded-full border-[#E0D3C2] bg-white text-[#1A1612] hover:bg-[#F3F0EA]",
					children: lang === "ar" ? "EN" : "AR"
				})
			]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		id: "contact",
		className: "border-t border-[#E0D3C2]/70 bg-[#F3F0EA] px-6 py-14 md:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/assets/Alshubaily-logo.png",
					alt: "AlShubaily",
					width: 40,
					height: 44,
					className: "h-10 w-auto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-[#1A1612]",
					children: "Khalid Saud AlShubaily"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-[#5C5348]",
					children: "Real Estate Investment"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-center text-xs text-[#8A8175]",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" AlShubaily Group. All rights reserved."
				]
			})]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-[#FAFAF8] px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-[#1A1612]",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-[#1A1612]",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-[#5C5348]",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-[#c9a962] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#b8954a]",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-[#FAFAF8] px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-[#1A1612]",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-[#5C5348]",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-[#c9a962] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#b8954a]",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-[#E0D3C2] bg-white px-4 py-2 text-sm font-medium text-[#1A1612] transition-colors hover:bg-[#F3F0EA]",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "AlShubaily | مجموعة خالد سعود الشبيلي" },
			{
				name: "description",
				content: "AlShubaily Group — 18 real estate projects across Saudi Arabia."
			},
			{
				name: "author",
				content: "AlShubaily Group"
			},
			{
				property: "og:title",
				content: "AlShubaily Group"
			},
			{
				property: "og:description",
				content: "AlShubaily Group — 18 real estate projects across Saudi Arabia."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/assets/Alshubaily-logo.png"
			},
			{
				rel: "preload",
				as: "image",
				href: "/assets/hero/Hero-1.jpg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ar",
		dir: "rtl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-full bg-[#FAFAF8] font-sans text-foreground antialiased",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LangProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		] })
	});
}
var $$splitComponentImporter$3 = () => import("./dammam-preview-BRcAwTaA.mjs");
var Route$4 = createFileRoute("/dammam-preview")({
	head: () => ({ meta: [{ title: "مدينة الدمام الأولمبية — مجموعة الشبيلي" }, {
		name: "description",
		content: "معاينة مشروع مدينة الدمام الأولمبية ضمن محفظة مجموعة الشبيلي."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./about-B-b7TfIj.mjs");
var Route$3 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "من نحن — مجموعة الشبيلي | AlShubaily" },
		{
			name: "description",
			content: "تعرّف على مجموعة الشبيلي ورؤيتها في تطوير المشاريع العقارية والاستثمارية في المملكة العربية السعودية."
		},
		{
			property: "og:title",
			content: "About — AlShubaily Group"
		},
		{
			property: "og:description",
			content: "Learn about AlShubaily Group and its vision for real estate and investment development across Saudi Arabia."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-DIG5oeKv.mjs");
var Route$2 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "AlShubaily | مجموعة خالد سعود الشبيلي" },
		{
			name: "description",
			content: "مجموعة الشبيلي — 18 مشروعاً عقارياً واستثمارياً في أنحاء المملكة العربية السعودية."
		},
		{
			property: "og:title",
			content: "AlShubaily Group — Real Estate Investment"
		},
		{
			property: "og:description",
			content: "AlShubaily Group — 18 real estate projects across Saudi Arabia."
		},
		{
			property: "og:image",
			content: "/assets/hero/Hero-1.jpg"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./admin.showcase-DZ1hmPUI.mjs");
var Route$1 = createFileRoute("/admin/showcase")({
	head: () => ({ meta: [{ title: "إدارة سلايدر المشاريع — Google Drive" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var GATEWAY = "https://connector-gateway.lovable.dev/google_drive/drive/v3";
var Route = createFileRoute("/api/public/drive-image/$fileId")({ server: { handlers: { GET: async ({ params }) => {
	const lovable = process.env.LOVABLE_API_KEY;
	const conn = process.env.GOOGLE_DRIVE_API_KEY;
	if (!lovable || !conn) return new Response("Drive not configured", { status: 500 });
	const fileId = params.fileId.replace(/[^a-zA-Z0-9_-]/g, "");
	if (!fileId) return new Response("Bad id", { status: 400 });
	const res = await fetch(`${GATEWAY}/files/${fileId}?alt=media`, { headers: {
		Authorization: `Bearer ${lovable}`,
		"X-Connection-Api-Key": conn
	} });
	if (!res.ok) return new Response(`Upstream ${res.status}`, { status: res.status });
	const contentType = res.headers.get("content-type") ?? "image/jpeg";
	return new Response(res.body, {
		status: 200,
		headers: {
			"Content-Type": contentType,
			"Cache-Control": "public, max-age=86400, s-maxage=86400"
		}
	});
} } } });
var DammamPreviewRoute = Route$4.update({
	id: "/dammam-preview",
	path: "/dammam-preview",
	getParentRoute: () => Route$5
});
var AboutRoute = Route$3.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$5
});
var IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var ProjectsSlugRoute = Route$6.update({
	id: "/projects/$slug",
	path: "/projects/$slug",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	DammamPreviewRoute,
	AdminShowcaseRoute: Route$1.update({
		id: "/admin/showcase",
		path: "/admin/showcase",
		getParentRoute: () => Route$5
	}),
	ProjectsSlugRoute,
	ApiPublicDriveImageFileIdRoute: Route.update({
		id: "/api/public/drive-image/$fileId",
		path: "/api/public/drive-image/$fileId",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
