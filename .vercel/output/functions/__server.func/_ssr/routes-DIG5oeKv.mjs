import { r as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useLang } from "./lang-context-C9IyQ37z.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SHOWCASE_OVERRIDE_KEY } from "./showcase-override-ZBEf9NcX.mjs";
import { t as Root } from "../_libs/@radix-ui/react-label+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as buttonVariants, r as cn, t as Button } from "./button-Dphu7yKj.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { a as Quote, c as FileText, d as CircleCheck, f as ChevronRight, i as Search, l as Eye, m as Building2, n as Users, o as MapPin, p as ChevronLeft, r as Target, s as LoaderCircle, t as X, u as Circle } from "../_libs/lucide-react.mjs";
import { n as RadioGroupIndicator, r as RadioGroupItem$1, t as RadioGroup$1 } from "../_libs/@radix-ui/react-radio-group+[...].mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DIG5oeKv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Exact folder names as committed in git / deployed on Vercel */
var DAMMAM_PROJECT_DIR = "مدينه الدمام الأوليمبيه";
var BEACH_PROJECT_DIR = "منتجع منزل البحر ";
function projectAsset(dir, file) {
	return encodeURI(`/assets/projects/${dir}/${file}`);
}
function dammamAsset(file) {
	return projectAsset(DAMMAM_PROJECT_DIR, file);
}
function beachAsset(file) {
	return projectAsset(BEACH_PROJECT_DIR, file);
}
var PROJECT_TYPES_DIR = "انواع المشاريع";
function projectTypeAsset(file) {
	return projectAsset(PROJECT_TYPES_DIR, file);
}
/** Maps each project slug → category for filters & type cards */
var PROJECT_CATEGORY_BY_SLUG = {
	"alshubaily-ahl-albayt": "commercial",
	"rabia-makkah": "residential",
	"hail-corniche": "tourism",
	"hail-walkway": "tourism",
	"benban-residence": "residential",
	"alshubaily-residence": "residential",
	"riyadh-boulevard": "tourism",
	"golf-city": "tourism",
	"alshubaily-town": "commercial",
	"alshubaily-grand-mall": "commercial",
	"alshubaily-resort": "tourism",
	"alshubaily-port": "commercial",
	"dammam-olympic-city": "tourism",
	"al-zahraa": "residential",
	"alshubaily-high-rise": "residential",
	"alshubaily-high-rise-2": "residential",
	"sultanat-al-sharq": "commercial",
	"alshubaily-new-beach": "tourism"
};
var PROJECT_CATEGORIES = [
	{
		id: "tourism",
		nameAr: "سياحي",
		nameEn: "Tourism",
		bioAr: "نصمم وجهات تتجاوز التوقعات، حيث يلتقي الابتكار بالرفاهية لتجربة سياحية فريدة.",
		bioEn: "Destinations that exceed expectations — where innovation meets luxury for a unique experience.",
		image: projectTypeAsset("سياحي.jpg")
	},
	{
		id: "commercial",
		nameAr: "تجاري",
		nameEn: "Commercial",
		bioAr: "مساحات تجارية ذكية تعزز كفاءة الأعمال وتخلق بيئة اقتصادية مستدامة ومبهرة.",
		bioEn: "Smart commercial spaces that empower business efficiency and a sustainable economy.",
		image: projectTypeAsset("تجاري.png")
	},
	{
		id: "residential",
		nameAr: "سكني",
		nameEn: "Residential",
		bioAr: "أكثر من مجرد سكن؛ مجتمعات سكنية متكاملة تمنحك الخصوصية والرفاهية التي تستحقها.",
		bioEn: "More than housing — integrated communities offering the privacy and luxury you deserve.",
		image: projectTypeAsset("سكني.jpeg")
	}
];
var SITE_STATS = {
	projects: 18,
	investors: 850,
	requests: 2400
};
var VISION_MISSION = {
	eyebrowAr: "الرؤية والرسالة",
	eyebrowEn: "Vision & Mission",
	visionTitleAr: "الرؤية",
	visionTitleEn: "Vision",
	visionAr: "أن نكون الروّاد في تطوير الوجهات العقارية والاستثمارية التي تُجسّد رؤية المملكة 2030 وتُلهم المستقبل.",
	visionEn: "To be pioneers in developing real estate and investment destinations that embody Vision 2030 and inspire the future.",
	missionTitleAr: "الرسالة",
	missionTitleEn: "Mission",
	missionAr: "نلتزم بأعلى معايير الجودة والاستدامة لنخلق قيمة دائمة لمجتمعاتنا وشركائنا، من خلال مشاريع مبتكرة تلبي تطلعات عملائنا.",
	missionEn: "We are committed to the highest standards of quality and sustainability to create lasting value for our communities and partners through innovative projects that meet our clients' aspirations."
};
var CHAIRMAN_CONTENT = {
	eyebrowAr: "الرؤية والرسالة",
	eyebrowEn: "Vision & Message",
	quoteAr: "نبني وجهات عقارية واستثمارية تُجسّد طموح المملكة وتلتزم بأعلى معايير الجودة والاستدامة — لنصنع قيمة دائمة لمجتمعاتنا وشركائنا.",
	quoteEn: "We build real estate and investment destinations that embody the Kingdom's ambition and the highest standards of quality and sustainability — creating lasting value for our communities and partners.",
	nameAr: "خالد سعود الشبيلي",
	nameEn: "Khalid Saud AlShubaily",
	roleAr: "رئيس مجلس الإدارة",
	roleEn: "Chairman of the Board",
	signatureNameAr: "خالد الشبيلي",
	signatureNameEn: "Khalid AlShubaily"
};
var VIDEO_URL = "https://res.cloudinary.com/dfzaghfsv/video/upload/v1781615121/banner-video_ciymr0.mov";
var POSTER_URL = "/assets/hero/Hero-1.jpg";
/**
* Cinematic hero background using the Cloudinary banner video.
* Falls back to the static poster image on devices that can't autoplay.
*/
function HeroCinematic() {
	const videoRef = (0, import_react.useRef)(null);
	const [canPlay, setCanPlay] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const v = videoRef.current;
		if (!v) return;
		const onPlay = () => setCanPlay(true);
		v.addEventListener("playing", onPlay, { once: true });
		v.play().catch(() => {});
		return () => v.removeEventListener("playing", onPlay);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: POSTER_URL,
				alt: "",
				"aria-hidden": true,
				className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${canPlay ? "opacity-0" : "opacity-90"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				className: "absolute inset-0 h-full w-full object-cover",
				src: VIDEO_URL,
				poster: POSTER_URL,
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				preload: "auto"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/85" })
		]
	});
}
gsapWithCSS.registerPlugin(ScrollTrigger);
var STATS = [
	{
		key: "projects",
		labelAr: "عدد المشاريع",
		labelEn: "Projects",
		icon: Building2
	},
	{
		key: "investors",
		labelAr: "عدد المستثمرين",
		labelEn: "Investors",
		suffixAr: "+",
		suffixEn: "+",
		icon: Users
	},
	{
		key: "requests",
		labelAr: "عدد الطلبات",
		labelEn: "Requests",
		suffixAr: "+",
		suffixEn: "+",
		icon: FileText
	}
];
function CountUp({ target, suffix, active }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || !active) return;
		const obj = { val: 0 };
		const tween = gsapWithCSS.to(obj, {
			val: target,
			duration: 2,
			ease: "power2.out",
			onUpdate: () => {
				el.textContent = `${Math.round(obj.val)}${suffix ?? ""}`;
			}
		});
		return () => {
			tween.kill();
		};
	}, [
		active,
		suffix,
		target
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "tabular-nums",
		children: ["0", suffix ?? ""]
	});
}
function HeroStats() {
	const { t } = useLang();
	const ref = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const items = el.querySelectorAll("[data-stat-card]");
		gsapWithCSS.fromTo(items, {
			y: 28,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: 1,
			ease: "power3.out",
			stagger: .15,
			delay: .3,
			onStart: () => setActive(true)
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "mt-10 grid grid-cols-3 gap-3 sm:gap-6 md:mt-12 md:max-w-2xl",
		children: STATS.map((stat) => {
			const Icon = stat.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-stat-card": true,
				className: "group rounded-2xl border border-[#C9A962]/25 bg-black/30 px-3 py-4 text-center backdrop-blur-md transition-all duration-500 hover:border-[#C9A962]/55 hover:bg-black/40 md:px-5 md:py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl border border-[#C9A962]/30 bg-[#C9A962]/10 text-[#C9A962] md:mb-3 md:h-11 md:w-11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-4 w-4 md:h-5 md:w-5",
							strokeWidth: 1.5
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-semibold text-[#C9A962] sm:text-3xl md:text-4xl lg:text-5xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
							target: SITE_STATS[stat.key],
							suffix: stat.suffixAr ? t(stat.suffixAr, stat.suffixEn ?? "") : void 0,
							active
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[10px] tracking-wide text-white/70 sm:text-xs md:mt-2 md:text-sm",
						children: t(stat.labelAr, stat.labelEn)
					})
				]
			}, stat.key);
		})
	});
}
function HeroChairman() {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "hero",
		className: "relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[#14110D]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCinematic, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto w-full max-w-6xl px-6 pb-20 pt-28 md:px-8 md:pb-24 md:pt-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.4em] text-[#c9a962]",
					children: t("مجموعة الشبيلي", "AlShubaily Group")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: cn("mt-4 max-w-4xl text-4xl font-semibold leading-[1.15] text-white md:text-6xl lg:text-7xl", "drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"),
					children: t("نبني وجهات تجسّد طموح المملكة", "Building destinations that embody the Kingdom's ambition")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroStats, {})
			]
		})]
	});
}
gsapWithCSS.registerPlugin(ScrollTrigger);
function VisionMissionSection() {
	const { t, lang } = useLang();
	const sectionRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const section = sectionRef.current;
		if (!section) return;
		const cards = section.querySelectorAll(".vm-glass-card");
		const sig = section.querySelector(".vm-signature");
		const tl = gsapWithCSS.timeline({ scrollTrigger: {
			trigger: section,
			start: "top 80%",
			toggleActions: "play none none none"
		} });
		tl.fromTo(cards, {
			y: 40,
			opacity: 0,
			scale: .96
		}, {
			y: 0,
			opacity: 1,
			scale: 1,
			duration: .9,
			ease: "power3.out",
			stagger: .2
		});
		if (sig) tl.fromTo(sig, {
			y: 20,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: .7,
			ease: "power2.out"
		}, "-=0.3");
		return () => {
			tl.kill();
			ScrollTrigger.getAll().forEach((st) => {
				if (st.trigger === section) st.kill();
			});
		};
	}, []);
	const isRTL = lang === "ar";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: sectionRef,
		id: "vision-mission",
		className: "relative overflow-hidden px-6 py-20 md:px-8 md:py-28",
		style: { background: "radial-gradient(ellipse at top, #2a201a 0%, #1d1812 38%, #16120E 72%, #14110D 100%)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-[0.35]",
					style: { background: "linear-gradient(135deg, transparent 0%, rgba(201,169,98,0.08) 30%, transparent 55%, rgba(201,169,98,0.05) 80%, transparent 100%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-[#c9a962] opacity-[0.08] blur-[140px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-[#8a6a2e] opacity-[0.10] blur-[140px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-[0.04] mix-blend-overlay",
					style: { backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 3px)" }
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-[11px] font-medium uppercase tracking-[0.4em] text-[#c9a962]",
					children: t(VISION_MISSION.eyebrowAr, VISION_MISSION.eyebrowEn)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-6 md:mt-14 md:grid-cols-2 md:gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "vm-glass-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-[#c9a962]/40 hover:bg-white/[0.09] hover:shadow-[0_24px_60px_-16px_rgba(201,169,98,0.25)] md:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#c9a962]/30 bg-[#c9a962]/10 text-[#c9a962] transition-transform duration-500 group-hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
									className: "h-5 w-5",
									strokeWidth: 1.5
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: isRTL ? "text-right" : "text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold text-white",
									children: t(VISION_MISSION.visionTitleAr, VISION_MISSION.visionTitleEn)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-[15px] leading-relaxed text-white/70",
									children: t(VISION_MISSION.visionAr, VISION_MISSION.visionEn)
								})]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "vm-glass-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-[#c9a962]/40 hover:bg-white/[0.09] hover:shadow-[0_24px_60px_-16px_rgba(201,169,98,0.25)] md:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#c9a962]/30 bg-[#c9a962]/10 text-[#c9a962] transition-transform duration-500 group-hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, {
									className: "h-5 w-5",
									strokeWidth: 1.5
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: isRTL ? "text-right" : "text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold text-white",
									children: t(VISION_MISSION.missionTitleAr, VISION_MISSION.missionTitleEn)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-[15px] leading-relaxed text-white/70",
									children: t(VISION_MISSION.missionAr, VISION_MISSION.missionEn)
								})]
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "vm-signature mt-14 text-center md:mt-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto inline-flex flex-col items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
								className: "mb-3 h-6 w-6 text-[#c9a962]/70",
								strokeWidth: 1.5
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "max-w-2xl text-base font-light leading-relaxed text-white/85 md:text-lg",
								children: [
									"\"",
									t(CHAIRMAN_CONTENT.quoteAr, CHAIRMAN_CONTENT.quoteEn),
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-col items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xl font-semibold italic text-white md:text-2xl",
										style: { fontFamily: "\"Cairo\", \"Brush Script MT\", cursive" },
										children: t(CHAIRMAN_CONTENT.signatureNameAr, CHAIRMAN_CONTENT.signatureNameEn)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-2 h-[1px] w-32 bg-gradient-to-r from-transparent via-[#c9a962]/60 to-transparent" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.3em] text-[#c9a962]/80",
									children: t(CHAIRMAN_CONTENT.roleAr, CHAIRMAN_CONTENT.roleEn)
								})]
							})
						]
					})
				})
			]
		})]
	});
}
var BANNER_BASE = "/assets/Banner-logos";
/** Compact icon — used in the banner header */
var GROUP_ICON = `${BANNER_BASE}/Icon.png`;
var GROUP_SUBSIDIARIES = [
	{
		id: "development",
		logo: `${BANNER_BASE}/1.png`,
		nameAr: "الشبيلي للتطوير العقاري",
		nameEn: "AlShubaily Real Estate Development",
		chipClass: "border-[#C9A962]/35 bg-[#C9A962]/12 text-[#8A6E2F] hover:bg-[#C9A962]/22 hover:border-[#C9A962]/55"
	},
	{
		id: "contracting",
		logo: `${BANNER_BASE}/2.png`,
		nameAr: "الشبيلي للمقاولات",
		nameEn: "AlShubaily Contracting",
		chipClass: "border-[#2E6B8A]/35 bg-[#2E6B8A]/10 text-[#1E4A5F] hover:bg-[#2E6B8A]/18 hover:border-[#2E6B8A]/55"
	},
	{
		id: "investment",
		logo: `${BANNER_BASE}/3.png`,
		nameAr: "الشبيلي للاستثمار",
		nameEn: "AlShubaily Investment",
		chipClass: "border-[#6B4FA0]/35 bg-[#6B4FA0]/10 text-[#4A3570] hover:bg-[#6B4FA0]/18 hover:border-[#6B4FA0]/55"
	},
	{
		id: "hospitality",
		logo: `${BANNER_BASE}/4.png`,
		nameAr: "الشبيلي للضيافة",
		nameEn: "AlShubaily Hospitality",
		chipClass: "border-[#B85C38]/35 bg-[#B85C38]/10 text-[#8A4528] hover:bg-[#B85C38]/18 hover:border-[#B85C38]/55"
	},
	{
		id: "trading",
		logo: `${BANNER_BASE}/5.png`,
		nameAr: "الشبيلي للتجارة",
		nameEn: "AlShubaily Trading",
		chipClass: "border-[#3D7A5A]/35 bg-[#3D7A5A]/10 text-[#2A5540] hover:bg-[#3D7A5A]/18 hover:border-[#3D7A5A]/55"
	},
	{
		id: "services",
		logo: `${BANNER_BASE}/6.png`,
		nameAr: "الشبيلي للخدمات",
		nameEn: "AlShubaily Services",
		chipClass: "border-[#8B4513]/35 bg-[#8B4513]/10 text-[#6A3410] hover:bg-[#8B4513]/18 hover:border-[#8B4513]/55"
	}
];
var buildRow = (arr) => [
	...arr,
	...arr,
	...arr,
	...arr,
	...arr
];
function LogoMarqueeBanner() {
	const { t, lang } = useLang();
	const trackRef = (0, import_react.useRef)(null);
	const pause = () => {
		if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
	};
	const resume = () => {
		if (trackRef.current) trackRef.current.style.animationPlayState = "running";
	};
	const row = buildRow(GROUP_SUBSIDIARIES);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "group",
		"data-parallax-section": true,
		className: "relative overflow-hidden bg-[#F5EEE2] py-14 md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "absolute left-1/2 top-1/2 z-0 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full",
			style: {
				background: "radial-gradient(closest-side, rgba(201,169,98,0.18), rgba(201,169,98,0.05) 55%, transparent 78%)",
				filter: "blur(8px)"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mx-auto max-w-7xl px-4 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 flex flex-col items-center gap-3 text-center md:mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative h-20 w-20 md:h-24 md:w-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: GROUP_ICON,
							alt: t("مجموعة الشبيلي", "AlShubaily Group"),
							className: "h-full w-full object-contain drop-shadow-[0_4px_24px_rgba(201,169,98,0.45)]"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-semibold tracking-[0.45em] text-[#8A6E2F] uppercase md:text-xs",
						children: t("شركات المجموعة", "Group Companies")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-24 bg-gradient-to-r from-transparent via-[#C9A962]/70 to-transparent" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "logo-river",
				onMouseEnter: pause,
				onMouseLeave: resume,
				"aria-label": t("شركات مجموعة الشبيلي", "AlShubaily Group Companies"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "logo-river-row",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: trackRef,
						className: "logo-river-track logo-river-track--ltr",
						children: row.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "logo-float-item",
							title: lang === "ar" ? c.nameAr : c.nameEn,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: c.logo,
								alt: lang === "ar" ? c.nameAr : c.nameEn,
								className: "logo-float-img",
								loading: "eager"
							})
						}, `a-${c.id}-${i}`))
					})
				})
			})]
		})]
	});
}
var DEFAULT_GALLERY = [
	"/assets/hero/Hero-1.jpg",
	"/assets/hero/Hero-2.jpg",
	"/assets/hero/Hero-3.jpg"
];
var REGIONS = [
	{
		id: "all",
		nameEn: "All Projects",
		nameAr: "جميع المشاريع"
	},
	{
		id: "mecca",
		nameEn: "Mecca",
		nameAr: "مكة"
	},
	{
		id: "hail",
		nameEn: "Hail",
		nameAr: "حائل"
	},
	{
		id: "riyadh",
		nameEn: "Riyadh",
		nameAr: "الرياض"
	},
	{
		id: "eastern",
		nameEn: "Eastern Region",
		nameAr: "المنطقة الشرقية"
	}
];
var PROJECTS = [
	{
		id: 1,
		slug: "alshubaily-ahl-albayt",
		nameEn: "AlShubaily & Ahl albayt",
		nameAr: "الشبيلي و أهل البيت",
		region: "mecca",
		regionEn: "Mecca",
		regionAr: "مكة",
		typeEn: "Mixed-use",
		typeAr: "متعدد الاستخدامات",
		color: "#8B4513",
		x: 31.5,
		y: 57.5,
		descriptionEn: "A landmark mixed-use development in the holy city of Mecca, combining residential and commercial excellence.",
		descriptionAr: "مشروع متعدد الاستخدامات في مكة المكرمة يجمع بين التميز السكني والتجاري.",
		heroImage: "/assets/hero/Hero-1.jpg",
		gallery: DEFAULT_GALLERY
	},
	{
		id: 2,
		slug: "rabia-makkah",
		nameEn: "Rabia Makkah (1)",
		nameAr: "رابية مكة (1)",
		region: "mecca",
		regionEn: "Mecca",
		regionAr: "مكة",
		typeEn: "Residential",
		typeAr: "سكني",
		color: "#2E6B8A",
		x: 28.5,
		y: 63.5,
		descriptionEn: "Premium residential community offering modern living in the heart of Mecca.",
		descriptionAr: "مجتمع سكني فاخر يقدم أسلوب حياة عصري في قلب مكة المكرمة.",
		heroImage: "/assets/hero/Hero-1.jpg",
		gallery: DEFAULT_GALLERY
	},
	{
		id: 3,
		slug: "hail-corniche",
		nameEn: "Hail Corniche",
		nameAr: "كورنيش حائل",
		region: "hail",
		regionEn: "Hail",
		regionAr: "حائل",
		typeEn: "Waterfront",
		typeAr: "واجهة بحرية",
		color: "#4A7C59",
		x: 43.5,
		y: 27.5,
		descriptionEn: "A scenic waterfront promenade development along Hail's beautiful landscape.",
		descriptionAr: "مشروع كورنيش ساحلي على طول المناظر الطبيعية الخلابة في حائل.",
		heroImage: "/assets/hero/Hero-2.jpg",
		gallery: DEFAULT_GALLERY
	},
	{
		id: 4,
		slug: "hail-walkway",
		nameEn: "Hail Walkway",
		nameAr: "حائل واك واي",
		region: "hail",
		regionEn: "Hail",
		regionAr: "حائل",
		typeEn: "Walkway",
		typeAr: "ممشى",
		color: "#3D6B8A",
		x: 45.5,
		y: 31.5,
		descriptionEn: "An elegant pedestrian walkway connecting key destinations in Hail region.",
		descriptionAr: "ممشى راقٍ يربط بين أهم الوجهات في منطقة حائل.",
		heroImage: "/assets/hero/Hero-2.jpg",
		gallery: DEFAULT_GALLERY
	},
	{
		id: 5,
		slug: "benban-residence",
		nameEn: "Benban Residence",
		nameAr: "بنبان ريزيدنس",
		region: "riyadh",
		regionEn: "Riyadh",
		regionAr: "الرياض",
		typeEn: "Residential",
		typeAr: "سكني",
		color: "#C4783A",
		x: 47.5,
		y: 53.5,
		descriptionEn: "Contemporary residential towers in the vibrant Benban district of Riyadh.",
		descriptionAr: "أبراج سكنية عصرية في حي بنبان النابض بالحياة في الرياض.",
		heroImage: "/assets/hero/Hero-1.jpg",
		gallery: DEFAULT_GALLERY
	},
	{
		id: 6,
		slug: "alshubaily-residence",
		nameEn: "AlShubaily Residence",
		nameAr: "الشبيلي ريزيدنس",
		region: "riyadh",
		regionEn: "Riyadh",
		regionAr: "الرياض",
		typeEn: "Luxury",
		typeAr: "فاخر",
		color: "#6B5B7B",
		x: 49.5,
		y: 46.5,
		descriptionEn: "Signature luxury residences bearing the AlShubaily name in the capital city.",
		descriptionAr: "مساكن فاخرة تحمل اسم الشبيلي في العاصمة الرياض.",
		heroImage: "/assets/hero/Hero-1.jpg",
		gallery: DEFAULT_GALLERY
	},
	{
		id: 7,
		slug: "riyadh-boulevard",
		nameEn: "Riyadh Boulevard",
		nameAr: "رياض بوليفارد",
		region: "riyadh",
		regionEn: "Riyadh",
		regionAr: "الرياض",
		typeEn: "Mixed-use",
		typeAr: "متعدد الاستخدامات",
		color: "#D4854A",
		x: 51.5,
		y: 43.5,
		descriptionEn: "A vibrant boulevard featuring retail, dining, and entertainment experiences.",
		descriptionAr: "بوليفارد حيوي يضم التجزئة والمطاعم والترفيه.",
		heroImage: "/assets/hero/Hero-1.jpg",
		gallery: DEFAULT_GALLERY
	},
	{
		id: 8,
		slug: "golf-city",
		nameEn: "Golf City",
		nameAr: "جولف سيتي",
		region: "riyadh",
		regionEn: "Riyadh",
		regionAr: "الرياض",
		typeEn: "Golf",
		typeAr: "جولف",
		color: "#8B6914",
		x: 53.5,
		y: 48.5,
		descriptionEn: "An integrated golf community with premium villas and world-class amenities.",
		descriptionAr: "مجتمع جولف متكامل مع فلل فاخرة ومرافق عالمية المستوى.",
		heroImage: "/assets/hero/Hero-1.jpg",
		gallery: DEFAULT_GALLERY
	},
	{
		id: 9,
		slug: "alshubaily-town",
		nameEn: "AlShubaily Town",
		nameAr: "الشبيلي تاون",
		region: "eastern",
		regionEn: "Eastern Region",
		regionAr: "المنطقة الشرقية",
		typeEn: "Town",
		typeAr: "مدينة",
		color: "#5C4033",
		x: 70.5,
		y: 46.5,
		descriptionEn: "A master-planned town offering complete lifestyle in the Eastern Province.",
		descriptionAr: "مدينة مخططة بعناية تقدم أسلوب حياة متكامل في المنطقة الشرقية.",
		heroImage: "/assets/hero/Hero-2.jpg",
		gallery: DEFAULT_GALLERY
	},
	{
		id: 10,
		slug: "alshubaily-grand-mall",
		nameEn: "AlShubaily Grand Mall",
		nameAr: "الشبيلي جراند مول",
		region: "eastern",
		regionEn: "Eastern Region",
		regionAr: "المنطقة الشرقية",
		typeEn: "Retail",
		typeAr: "تجاري",
		color: "#2E5A6B",
		x: 72.5,
		y: 48.5,
		descriptionEn: "A premier shopping and entertainment destination in the Eastern Region.",
		descriptionAr: "وجهة تسوق وترفيه رائدة في المنطقة الشرقية.",
		heroImage: "/assets/hero/Hero-1.jpg",
		gallery: DEFAULT_GALLERY
	},
	{
		id: 11,
		slug: "alshubaily-resort",
		nameEn: "AlShubaily Resort",
		nameAr: "الشبيلي ريزورت",
		region: "eastern",
		regionEn: "Eastern Region",
		regionAr: "المنطقة الشرقية",
		typeEn: "Resort",
		typeAr: "منتجع",
		color: "#4A6741",
		x: 74.5,
		y: 50.5,
		descriptionEn: "A luxury resort offering exceptional hospitality on the Arabian Gulf coast.",
		descriptionAr: "منتجع فاخر يقدم ضيافة استثنائية على ساحل الخليج العربي.",
		heroImage: "/assets/hero/Hero-1.jpg",
		gallery: DEFAULT_GALLERY
	},
	{
		id: 12,
		slug: "alshubaily-port",
		nameEn: "AlShubaily Port",
		nameAr: "الشبيلي بورت",
		region: "eastern",
		regionEn: "Eastern Region",
		regionAr: "المنطقة الشرقية",
		typeEn: "Waterfront",
		typeAr: "واجهة بحرية",
		color: "#1E4D6B",
		x: 76.5,
		y: 53.5,
		descriptionEn: "A waterfront port development combining marina, retail, and residential spaces.",
		descriptionAr: "مشروع ميناء ساحلي يجمع بين المارينا والتجزئة والمساحات السكنية.",
		heroImage: "/assets/projects/Twin-Tower/Hero.jpg",
		gallery: [
			"/assets/projects/Twin-Tower/Hero.jpg",
			"/assets/hero/Hero-1.jpg",
			"/assets/hero/Hero-2.jpg",
			"/assets/hero/Hero-1.jpg"
		]
	},
	{
		id: 13,
		slug: "dammam-olympic-city",
		nameEn: "Dammam Olympic City",
		nameAr: "مدينة الدمام الأولمبية",
		region: "eastern",
		regionEn: "Eastern Region",
		regionAr: "المنطقة الشرقية",
		typeEn: "Sports",
		typeAr: "رياضي",
		color: "#7B4A2E",
		x: 78.5,
		y: 49.5,
		descriptionEn: "A world-class sports and wellness city in the heart of Dammam.",
		descriptionAr: "مدينة رياضية وصحية عالمية المستوى في قلب الدمام.",
		heroImage: dammamAsset("Hero.jpg"),
		gallery: [
			dammamAsset("Hero.jpg"),
			dammamAsset("4.jpg"),
			dammamAsset("5.jpg"),
			dammamAsset("6.jpg")
		]
	},
	{
		id: 14,
		slug: "al-zahraa",
		nameEn: "Al-Zahraa Project",
		nameAr: "مشروع الزهراء",
		region: "eastern",
		regionEn: "Eastern Region",
		regionAr: "المنطقة الشرقية",
		typeEn: "Residential",
		typeAr: "سكني",
		color: "#5A6B4A",
		x: 73.5,
		y: 44.5,
		descriptionEn: "An elegant residential project named after beauty and prosperity.",
		descriptionAr: "مشروع سكني أنيق يحمل اسم الجمال والازدهار.",
		heroImage: "/assets/hero/Hero-1.jpg",
		gallery: DEFAULT_GALLERY
	},
	{
		id: 15,
		slug: "alshubaily-high-rise",
		nameEn: "AlShubaily High Rise",
		nameAr: "الشبيلي هاي رايز",
		region: "eastern",
		regionEn: "Eastern Region",
		regionAr: "المنطقة الشرقية",
		typeEn: "High-rise",
		typeAr: "أبراج",
		color: "#4A3B6B",
		x: 80.5,
		y: 46.5,
		descriptionEn: "Iconic high-rise towers defining the skyline of the Eastern Province.",
		descriptionAr: "أبراج شاهقة تحدد أفق المنطقة الشرقية.",
		heroImage: "/assets/projects/Twin-Tower/Hero.jpg",
		gallery: [
			"/assets/projects/Twin-Tower/Hero.jpg",
			"/assets/projects/Twin-Tower/1.jpg",
			"/assets/projects/Twin-Tower/2.jpg",
			"/assets/projects/Twin-Tower/3.jpg"
		]
	},
	{
		id: 16,
		slug: "alshubaily-high-rise-2",
		nameEn: "AlShubaily High Rise (2)",
		nameAr: "الشبيلي هاي رايز (2)",
		region: "eastern",
		regionEn: "Eastern Region",
		regionAr: "المنطقة الشرقية",
		typeEn: "High-rise",
		typeAr: "أبراج",
		color: "#6B4A5A",
		x: 82.5,
		y: 44.5,
		descriptionEn: "The second phase of AlShubaily's landmark high-rise development.",
		descriptionAr: "المرحلة الثانية من مشروع الشبيلي الشاهق.",
		heroImage: "/assets/hero/Hero-3.jpg",
		gallery: DEFAULT_GALLERY
	},
	{
		id: 17,
		slug: "sultanat-al-sharq",
		nameEn: "Sultanat Al Sharq",
		nameAr: "سلطانة الشرق",
		region: "eastern",
		regionEn: "Eastern Region",
		regionAr: "المنطقة الشرقية",
		typeEn: "Mixed-use",
		typeAr: "متعدد الاستخدامات",
		color: "#8B6914",
		x: 84.5,
		y: 48.5,
		descriptionEn: "A royal-inspired destination celebrating the heritage of the Eastern Region.",
		descriptionAr: "وجهة مستوحاة من التراث تحتفي بإرث المنطقة الشرقية.",
		heroImage: "/assets/hero/Hero-1.jpg",
		gallery: DEFAULT_GALLERY
	},
	{
		id: 18,
		slug: "alshubaily-new-beach",
		nameEn: "AlShubaily New Beach",
		nameAr: "الشبيلي نيو بيتش",
		region: "eastern",
		regionEn: "Eastern Region",
		regionAr: "المنطقة الشرقية",
		typeEn: "Beachfront",
		typeAr: "ساحلي",
		color: "#2E6B8A",
		x: 83.5,
		y: 52.5,
		descriptionEn: "A stunning beachfront development with pristine shores and luxury amenities.",
		descriptionAr: "مشروع ساحلي خلاب مع شواطئ نقية ومرافق فاخرة.",
		heroImage: beachAsset("Hero.jpg"),
		gallery: [
			beachAsset("Hero.jpg"),
			beachAsset("1.jpg"),
			beachAsset("2.jpg"),
			beachAsset("3.jpg")
		]
	}
];
var REGION_IDS = [
	"mecca",
	"hail",
	"riyadh",
	"eastern"
];
function getRegionClusters() {
	return REGION_IDS.map((id) => {
		const projects = PROJECTS.filter((p) => p.region === id);
		const region = REGIONS.find((r) => r.id === id);
		return {
			id,
			x: projects.reduce((sum, p) => sum + p.x, 0) / projects.length,
			y: projects.reduce((sum, p) => sum + p.y, 0) / projects.length,
			count: projects.length,
			nameAr: region.nameAr,
			nameEn: region.nameEn
		};
	});
}
gsapWithCSS.registerPlugin(ScrollTrigger);
function useScrollReveal(options = {}) {
	const ref = (0, import_react.useRef)(null);
	const { y = 48, stagger = .12, start = "top 85%", flip = false } = options;
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const items = el.querySelectorAll("[data-reveal]");
		const ctx = gsapWithCSS.context(() => {
			if (flip) gsapWithCSS.fromTo(el, {
				y: 56,
				rotateX: 8,
				opacity: .88,
				transformPerspective: 900
			}, {
				y: 0,
				rotateX: 0,
				opacity: 1,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: el,
					start: "top 92%",
					toggleActions: "play none none reverse"
				}
			});
			if (!items.length) return;
			gsapWithCSS.set(items, {
				opacity: 0,
				y
			});
			gsapWithCSS.to(items, {
				opacity: 1,
				y: 0,
				duration: 1,
				stagger,
				ease: "power3.out",
				scrollTrigger: {
					trigger: el,
					start,
					scroller: document.documentElement,
					toggleActions: "play none none reverse"
				}
			});
		}, el);
		return () => ctx.revert();
	}, [
		y,
		stagger,
		start,
		flip
	]);
	return ref;
}
function countByCategory(id) {
	return PROJECTS.filter((p) => PROJECT_CATEGORY_BY_SLUG[p.slug] === id).length;
}
function ProjectTypesSection() {
	const { t, lang } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: useScrollReveal({
			y: 40,
			stagger: .12
		}),
		className: "relative overflow-hidden bg-[#F5EEE2] py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-[1100px] px-4 sm:px-6 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-reveal": true,
				className: "relative mb-14 md:mb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute -top-6 select-none text-[44px] font-black leading-none text-[#C9A962]/10 md:text-[80px]",
						style: { [lang === "ar" ? "right" : "left"]: "-0.25rem" },
						"aria-hidden": true,
						children: "ACTIVITIES"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-heading relative z-10 text-3xl font-black text-[#0A0A0A] md:text-5xl",
						children: t("نشاطات المجموعة", "Group Activities")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-12 bg-[#C9A962]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "ms-3 text-sm font-medium tracking-wide text-[#0A0A0A]/60 md:text-base",
							children: t("خلق مجتمعات متكاملة", "Crafting integrated communities")
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-20 md:grid md:grid-cols-3 md:gap-10 md:space-y-0",
				children: PROJECT_CATEGORIES.map((cat) => {
					const count = countByCategory(cat.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						"data-reveal": true,
						className: "monolith-card group relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "monolith-img-wrap relative z-10 overflow-hidden shadow-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: cat.image,
									alt: lang === "ar" ? cat.nameAr : cat.nameEn,
									loading: "lazy",
									className: "monolith-img"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.35),transparent_55%)]" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "monolith-caption group-hover:-translate-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-3 flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-bold text-[#FAFAF8] md:text-2xl",
											children: lang === "ar" ? cat.nameAr : cat.nameEn
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#8A6A2E]",
											children: lang === "ar" ? cat.nameEn : cat.nameAr
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-4 text-[13px] leading-relaxed text-[#FAFAF8]/70 md:text-sm",
										children: lang === "ar" ? cat.bioAr : cat.bioEn
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[11px] font-bold text-[#8A6A2E] md:text-xs",
											children: [
												count,
												" ",
												t("مشروع", "projects")
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-[#C9A962]/30" })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "monolith-frame",
								"aria-hidden": true
							})
						]
					}, cat.id);
				})
			})]
		})
	});
}
var SHOWCASE_IMAGES = [
	"/assets/masterplan-DIutrBAO.png",
	"/assets/walkthrough-2-DzbCFL8w.png",
	"/assets/walkthrough-3-BSJO23kz.png",
	"/assets/04-C2OJIw2E.jpg",
	"/assets/06-CTcJIJ47.jpg",
	"/assets/10-DW-dIlwo.jpg",
	"/assets/11-BIcIE1xl.jpg",
	"/assets/12-BdWQc9Si.jpg",
	"/assets/13-Dm5vIa8e.jpg",
	"/assets/14-BNwasatP.jpg",
	"/assets/15-Di_g4whL.jpg",
	"/assets/16-B3PlBozC.jpg",
	"/assets/17-CvFKmrFM.jpg",
	"/assets/18-CMIetCCy.jpg",
	"/assets/19-pOCso3Ja.jpg",
	"/assets/20-CfpI9G1u.jpg",
	"/assets/wa-1-CdCMb7jV.jpeg",
	"/assets/wa-2-DkPJYsDD.jpeg",
	"/assets/wa-3-D4wKe7x7.jpeg"
];
var DEFAULT_AUTOPLAY_MS = 5200;
var SWIPE_THRESHOLD = 80;
var STACK_DEPTH = 4;
function FeaturedProjects({ autoPlay = true, pauseOnHover = true, pauseOnInteraction = true }) {
	const { t } = useLang();
	const sectionRef = useScrollReveal({
		y: 40,
		stagger: .1
	});
	const [index, setIndex] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const [drag, setDrag] = (0, import_react.useState)(0);
	const [flyOut, setFlyOut] = (0, import_react.useState)(null);
	const [override, setOverride] = (0, import_react.useState)(null);
	const dragStartX = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const read = () => {
			try {
				const raw = window.localStorage.getItem(SHOWCASE_OVERRIDE_KEY);
				if (!raw) return setOverride(null);
				const parsed = JSON.parse(raw);
				setOverride(parsed?.images?.length ? parsed.images : null);
			} catch {
				setOverride(null);
			}
		};
		read();
		window.addEventListener("showcase-override-changed", read);
		window.addEventListener("storage", read);
		return () => {
			window.removeEventListener("showcase-override-changed", read);
			window.removeEventListener("storage", read);
		};
	}, []);
	const images = (0, import_react.useMemo)(() => override && override.length ? override : SHOWCASE_IMAGES, [override]);
	const total = images.length;
	const wrap = (0, import_react.useCallback)((i) => (i % total + total) % total, [total]);
	const autoPlayDelay = typeof autoPlay === "number" ? autoPlay : autoPlay ? DEFAULT_AUTOPLAY_MS : 0;
	const autoPlayEnabled = autoPlayDelay > 0;
	(0, import_react.useEffect)(() => {
		setIndex((c) => c >= total ? 0 : c);
	}, [total]);
	const go = (0, import_react.useCallback)((dir) => {
		setFlyOut(dir === 1 ? "left" : "right");
		window.setTimeout(() => {
			setIndex((c) => wrap(c + dir));
			setFlyOut(null);
			setDrag(0);
		}, 380);
	}, [wrap]);
	(0, import_react.useEffect)(() => {
		images.forEach((src) => {
			const img = new window.Image();
			img.src = src;
		});
	}, [images]);
	(0, import_react.useEffect)(() => {
		if (!autoPlayEnabled || paused || flyOut) return;
		const timer = window.setInterval(() => go(1), autoPlayDelay);
		return () => window.clearInterval(timer);
	}, [
		go,
		paused,
		flyOut,
		autoPlayEnabled,
		autoPlayDelay
	]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "ArrowLeft") go(-1);
			if (e.key === "ArrowRight") go(1);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [go]);
	const onPointerDown = (e) => {
		if (flyOut) return;
		dragStartX.current = e.clientX;
		if (pauseOnInteraction) setPaused(true);
		e.target.setPointerCapture?.(e.pointerId);
	};
	const onPointerMove = (e) => {
		if (dragStartX.current === null) return;
		setDrag(e.clientX - dragStartX.current);
	};
	const onPointerUp = () => {
		if (dragStartX.current === null) return;
		const dx = drag;
		dragStartX.current = null;
		if (Math.abs(dx) > SWIPE_THRESHOLD) go(dx < 0 ? 1 : -1);
		else setDrag(0);
		if (pauseOnInteraction) setPaused(false);
	};
	const stack = Array.from({ length: Math.min(STACK_DEPTH, total) }, (_, i) => ({
		src: images[wrap(index + i)],
		depth: i
	}));
	const activeSrc = images[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "projects",
		ref: sectionRef,
		className: "relative overflow-hidden bg-[#14110D] py-14 md:py-20 lg:py-28",
		onMouseEnter: () => pauseOnHover && setPaused(true),
		onMouseLeave: () => pauseOnHover && setPaused(false),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 overflow-hidden",
				children: [
					images.map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: "",
						"aria-hidden": true,
						className: "absolute inset-0 h-full w-full scale-125 object-cover blur-[80px] saturate-125 transition-opacity duration-[1200ms] ease-out will-change-[opacity]",
						style: { opacity: src === activeSrc ? .35 : 0 },
						draggable: false
					}, src)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[#14110D]/70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-[#080605] via-transparent to-[#080605]" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "section-gradient-showcase pointer-events-none absolute inset-0",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/30 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A962]/[0.08] blur-[120px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-reveal": true,
						className: "mx-auto mb-10 max-w-3xl text-center md:mb-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mb-3 h-px w-12 bg-[#C9A962]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-heading text-2xl font-semibold text-white md:text-3xl lg:text-4xl",
								children: t("مشاريع مجموعة الشبيلي العقارية", "AlShubaily Real Estate Group Projects")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[10px] uppercase tracking-[0.35em] text-[#C9A962]",
								children: t("اسحب البطاقة أو انقر للتقليب", "Swipe or tap to flip the cards")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-deck-stage relative mx-auto flex h-[460px] max-w-3xl items-center justify-center md:h-[540px] lg:h-[580px] lg:max-w-4xl",
						onPointerDown,
						onPointerMove,
						onPointerUp,
						onPointerCancel: onPointerUp,
						children: [
							stack.slice().reverse().map(({ src, depth }) => {
								const isTop = depth === 0;
								const offsetY = depth * 22;
								const scale = 1 - depth * .06;
								const rotateBase = depth === 0 ? 0 : depth % 2 === 0 ? -2.5 : 2.5;
								const opacity = 1 - depth * .16;
								let topTransform = "";
								if (isTop) {
									if (flyOut) {
										const dir = flyOut === "left" ? -1 : 1;
										topTransform = `translate(${dir * 140}%, -40px) rotate(${dir * 22}deg)`;
									} else if (drag !== 0) topTransform = `translate(${drag}px, 0) rotate(${drag / 18}deg)`;
								}
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: cn("deck-card absolute h-[88%] w-[82%] max-w-[420px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] md:max-w-[460px] lg:h-[90%] lg:max-w-[540px]", isTop && "deck-card--top ring-1 ring-[#C9A962]/40 shadow-[0_0_60px_rgba(201,169,98,0.18)]", isTop && !flyOut && drag === 0 && "cursor-grab", isTop && drag !== 0 && "cursor-grabbing"),
									style: {
										zIndex: STACK_DEPTH - depth,
										transform: isTop ? topTransform || `translateY(0) scale(1) rotate(0deg)` : `translateY(${offsetY}px) scale(${scale}) rotate(${rotateBase}deg)`,
										opacity,
										transition: isTop && drag !== 0 && !flyOut ? "none" : "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src,
											alt: "",
											className: "h-full w-full object-cover",
											draggable: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080605]/85 via-[#080605]/15 to-transparent" }),
										isTop && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "pointer-events-none absolute left-4 top-4 font-mono text-xs tracking-widest text-[#C9A962]",
												children: String(index + 1).padStart(2, "0")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "pointer-events-none absolute right-4 bottom-4 rotate-180 font-mono text-xs tracking-widest text-[#C9A962]",
												children: String(index + 1).padStart(2, "0")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 p-6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-[#C9A962] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#080605]",
													children: t("معرض المشاريع", "Project Gallery")
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-3 rounded-full border border-white/15 bg-black/30 px-5 py-2 backdrop-blur-md",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono text-xs tracking-widest text-white",
															children: String(index + 1).padStart(2, "0")
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-px bg-[#C9A962]/60" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono text-xs tracking-widest text-white/50",
															children: String(total).padStart(2, "0")
														})
													]
												})]
											})
										] })
									]
								}, `${src}-${depth}`);
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => go(-1),
								"aria-label": t("السابق", "Previous"),
								className: "absolute left-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-[#C9A962] backdrop-blur-md transition-all hover:border-[#C9A962] hover:bg-black/60 active:scale-95 md:left-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => go(1),
								"aria-label": t("التالي", "Next"),
								className: "absolute right-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-[#C9A962] backdrop-blur-md transition-all hover:border-[#C9A962] hover:bg-black/60 active:scale-95 md:right-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex items-center justify-center gap-2",
						children: images.map((_, dotIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								if (dotIndex === index || flyOut) return;
								setFlyOut(dotIndex > index ? "left" : "right");
								window.setTimeout(() => {
									setIndex(dotIndex);
									setFlyOut(null);
									setDrag(0);
								}, 380);
							},
							"aria-label": `Slide ${dotIndex + 1}`,
							className: cn("h-1 rounded-full transition-all duration-500", dotIndex === index ? "w-10 bg-[#C9A962]" : "w-1.5 bg-white/15 hover:bg-white/30")
						}, dotIndex))
					})
				]
			})
		]
	});
}
function FilmGrain() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "film-grain pointer-events-none absolute inset-0 z-[5] opacity-[0.045] mix-blend-multiply",
		"aria-hidden": true
	});
}
function StackedSection({ children, background = "#F5EEE2", index, total = 12, className = "" }) {
	const isHero = index === 0;
	const zIndex = total - index;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `stacked-section ${isHero ? "stacked-section--hero" : "stacked-section--layer"} ${className}`,
		style: {
			background,
			zIndex
		},
		children
	});
}
function MapBottomSheet({ open, onClose, children, maxHeight = "min(46vh, 420px)" }) {
	const sheetRef = (0, import_react.useRef)(null);
	const backdropRef = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		const sheet = sheetRef.current;
		const backdrop = backdropRef.current;
		if (!sheet || !backdrop) return;
		gsapWithCSS.set(sheet, { yPercent: 105 });
		gsapWithCSS.set(backdrop, {
			display: "none",
			opacity: 0
		});
	}, []);
	(0, import_react.useEffect)(() => {
		const sheet = sheetRef.current;
		const backdrop = backdropRef.current;
		if (!sheet || !backdrop) return;
		if (open) {
			gsapWithCSS.set(backdrop, { display: "block" });
			gsapWithCSS.fromTo(backdrop, { opacity: 0 }, {
				opacity: 1,
				duration: .25,
				ease: "power2.out"
			});
			gsapWithCSS.fromTo(sheet, { yPercent: 105 }, {
				yPercent: 0,
				duration: .55,
				ease: "power3.out"
			});
		} else {
			gsapWithCSS.to(backdrop, {
				opacity: 0,
				duration: .2,
				onComplete: () => gsapWithCSS.set(backdrop, { display: "none" })
			});
			gsapWithCSS.to(sheet, {
				yPercent: 105,
				duration: .35,
				ease: "power2.in"
			});
		}
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref: backdropRef,
		type: "button",
		"aria-label": "Close",
		onClick: onClose,
		className: "map-sheet-backdrop pointer-events-auto",
		style: { display: "none" }
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: sheetRef,
		className: "map-bottom-sheet pointer-events-auto",
		style: { maxHeight },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "map-sheet-handle",
			"aria-hidden": true
		}), children]
	})] });
}
function MapProjectListPanel({ activeProjectId, onProjectClick }) {
	const { t, lang } = useLang();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const filtered = (0, import_react.useMemo)(() => {
		if (filter === "all") return PROJECTS;
		return PROJECTS.filter((p) => p.region === filter);
	}, [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "map-panel flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "map-panel-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] tracking-[0.35em] text-[#9A7B3A] uppercase",
					children: t("جميع المشاريع", "All Projects")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "map-panel-count",
					children: filtered.length
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "map-panel-filters",
				children: REGIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFilter(r.id),
					className: cn("map-panel-chip", filter === r.id && "is-active"),
					children: lang === "ar" ? r.nameAr : r.nameEn
				}, r.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "map-panel-list",
				children: filtered.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onProjectClick?.(project.id),
					className: cn("map-panel-card group", activeProjectId === project.id && "is-active"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "map-panel-card-thumb",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: project.heroImage,
								alt: lang === "ar" ? project.nameAr : project.nameEn,
								className: "h-full w-full object-cover transition duration-300 group-hover:scale-105",
								loading: "lazy"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "map-panel-card-info",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "map-panel-card-name",
								children: lang === "ar" ? project.nameAr : project.nameEn
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "map-panel-card-meta",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block h-2 w-2 rounded-full",
										style: { background: project.color }
									}),
									lang === "ar" ? project.regionAr : project.regionEn,
									" · ",
									lang === "ar" ? project.typeAr : project.typeEn
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projects/$slug",
							params: { slug: project.slug },
							onClick: (e) => e.stopPropagation(),
							className: "map-panel-card-link",
							"aria-label": lang === "ar" ? project.nameAr : project.nameEn,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 16 16",
								fill: "none",
								className: "h-3.5 w-3.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M3 8h10M9 4l4 4-4 4",
									stroke: "currentColor",
									strokeWidth: "1.5",
									strokeLinecap: "round",
									strokeLinejoin: "round"
								})
							})
						})
					]
				}, project.id))
			})
		]
	});
}
var MAP_SRC = "/assets/map.png";
var MAP_DEFAULT = {
	w: 2e3,
	h: 1111
};
var MAX_ZOOM_RATIO = 3.6;
var ZOOM_STEP_RATIO = .1;
var MOBILE_BREAKPOINT = 1024;
var MOBILE_COVER_OVERSCAN = 1.08;
var PROJECT_ZOOM = 2.5;
var REGION_ZOOM = 2;
function clampTransform(t, vw, vh, iw, ih) {
	const scaledW = iw * t.scale;
	const scaledH = ih * t.scale;
	let x = t.x;
	let y = t.y;
	if (scaledW <= vw) x = (vw - scaledW) / 2;
	else x = Math.min(0, Math.max(vw - scaledW, x));
	if (scaledH <= vh) y = (vh - scaledH) / 2;
	else y = Math.min(0, Math.max(vh - scaledH, y));
	return {
		x,
		y,
		scale: t.scale
	};
}
function InteractiveMap() {
	const { t, lang } = useLang();
	const viewportRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const imgRef = (0, import_react.useRef)(null);
	const imgSizeRef = (0, import_react.useRef)(MAP_DEFAULT);
	const baseScaleRef = (0, import_react.useRef)(1);
	const transformRef = (0, import_react.useRef)({
		x: 0,
		y: 0,
		scale: 1
	});
	const panStartRef = (0, import_react.useRef)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [imgSize, setImgSize] = (0, import_react.useState)(MAP_DEFAULT);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [mapMode, setMapMode] = (0, import_react.useState)("overview");
	const [activeRegion, setActiveRegion] = (0, import_react.useState)(null);
	const [activeId, setActiveId] = (0, import_react.useState)(null);
	const [search, setSearch] = (0, import_react.useState)("");
	const clusters = getRegionClusters();
	const searchFiltered = (0, import_react.useMemo)(() => {
		const q = search.trim().toLowerCase();
		const list = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.region === filter);
		if (!q) return list;
		return list.filter((p) => p.nameAr.includes(search.trim()) || p.nameEn.toLowerCase().includes(q) || p.regionAr.includes(search.trim()) || p.regionEn.toLowerCase().includes(q));
	}, [filter, search]);
	const activeProject = activeId ? PROJECTS.find((p) => p.id === activeId) ?? null : null;
	const regionProjects = activeRegion ? searchFiltered.filter((p) => p.region === activeRegion) : [];
	const panelView = activeProject ? "project" : mapMode === "region" && activeRegion ? "region" : "none";
	const applyTransform = (0, import_react.useCallback)((animate = false) => {
		const canvas = canvasRef.current;
		const viewport = viewportRef.current;
		if (!canvas || !viewport) return;
		const { w, h } = imgSizeRef.current;
		const clamped = clampTransform(transformRef.current, viewport.clientWidth, viewport.clientHeight, w, h);
		transformRef.current = clamped;
		if (animate) {
			gsapWithCSS.killTweensOf(canvas);
			gsapWithCSS.to(canvas, {
				x: clamped.x,
				y: clamped.y,
				scale: clamped.scale,
				duration: .6,
				ease: "power3.inOut",
				transformOrigin: "0 0",
				overwrite: true
			});
		} else gsapWithCSS.set(canvas, {
			x: clamped.x,
			y: clamped.y,
			scale: clamped.scale,
			transformOrigin: "0 0"
		});
	}, []);
	const fitMap = (0, import_react.useCallback)((animate = false) => {
		const viewport = viewportRef.current;
		if (!viewport) return;
		const vw = viewport.clientWidth;
		const vh = viewport.clientHeight;
		const { w, h } = imgSizeRef.current;
		if (vw < 10 || vh < 10 || !w || !h) return;
		const nextBase = vw < MOBILE_BREAKPOINT ? Math.max(vw / w, vh / h) * MOBILE_COVER_OVERSCAN : Math.min(vw / w, vh / h);
		baseScaleRef.current = nextBase;
		transformRef.current = {
			x: (vw - w * nextBase) / 2,
			y: (vh - h * nextBase) / 2,
			scale: nextBase
		};
		applyTransform(animate);
		setReady(true);
	}, [applyTransform]);
	const zoomToPoint = (0, import_react.useCallback)((px, py, scaleMultiplier, animate = true, sheetOffset = 0) => {
		const viewport = viewportRef.current;
		if (!viewport) return;
		const { w, h } = imgSizeRef.current;
		const vw = viewport.clientWidth;
		const vh = viewport.clientHeight;
		const targetScale = Math.min(baseScaleRef.current * scaleMultiplier, baseScaleRef.current * MAX_ZOOM_RATIO);
		const mapX = px / 100 * w;
		const mapY = py / 100 * h;
		const focusY = vh / 2 - sheetOffset;
		transformRef.current = {
			scale: targetScale,
			x: vw / 2 - mapX * targetScale,
			y: focusY - mapY * targetScale
		};
		applyTransform(animate);
	}, [applyTransform]);
	const getSheetOffset = () => {
		if (typeof window === "undefined") return 0;
		return window.innerWidth < 1024 ? (viewportRef.current?.clientHeight ?? 0) * .2 : 0;
	};
	const handleImageLoad = () => {
		const img = imgRef.current;
		if (img?.naturalWidth) {
			const next = {
				w: img.naturalWidth,
				h: img.naturalHeight
			};
			imgSizeRef.current = next;
			setImgSize(next);
			fitMap(false);
		}
	};
	(0, import_react.useLayoutEffect)(() => {
		if (imgRef.current?.complete && imgRef.current.naturalWidth) {
			const next = {
				w: imgRef.current.naturalWidth,
				h: imgRef.current.naturalHeight
			};
			imgSizeRef.current = next;
			setImgSize(next);
		}
		fitMap(false);
	}, [fitMap]);
	(0, import_react.useEffect)(() => {
		const viewport = viewportRef.current;
		if (!viewport) return;
		const observer = new ResizeObserver(() => fitMap(false));
		observer.observe(viewport);
		return () => observer.disconnect();
	}, [fitMap]);
	const zoomFromCenter = (delta) => {
		const viewport = viewportRef.current;
		if (!viewport) return;
		const min = baseScaleRef.current;
		const max = baseScaleRef.current * MAX_ZOOM_RATIO;
		const next = Math.min(max, Math.max(min, transformRef.current.scale + delta));
		if (next === transformRef.current.scale) return;
		const cx = viewport.clientWidth / 2;
		const cy = viewport.clientHeight / 2;
		const ratio = next / transformRef.current.scale;
		transformRef.current = {
			scale: next,
			x: cx - (cx - transformRef.current.x) * ratio,
			y: cy - (cy - transformRef.current.y) * ratio
		};
		applyTransform(true);
	};
	const resetMap = (0, import_react.useCallback)(() => {
		setActiveId(null);
		setActiveRegion(null);
		setMapMode("overview");
		setFilter("all");
		setSearch("");
		fitMap(true);
	}, [fitMap]);
	const selectRegion = (0, import_react.useCallback)((regionId) => {
		const cluster = clusters.find((c) => c.id === regionId);
		if (!cluster) return;
		setActiveId(null);
		setActiveRegion(regionId);
		setMapMode("region");
		setFilter(regionId);
		zoomToPoint(cluster.x, cluster.y, REGION_ZOOM, true, getSheetOffset() * .3);
	}, [clusters, zoomToPoint]);
	const selectProject = (0, import_react.useCallback)((project) => {
		setActiveId(project.id);
		setActiveRegion(project.region);
		setMapMode("project");
		setFilter(project.region);
		zoomToPoint(project.x, project.y, PROJECT_ZOOM, true, getSheetOffset());
	}, [zoomToPoint]);
	const closeProject = (0, import_react.useCallback)(() => {
		const region = activeRegion;
		setActiveId(null);
		setMapMode("region");
		if (region) {
			const cluster = clusters.find((c) => c.id === region);
			if (cluster) zoomToPoint(cluster.x, cluster.y, REGION_ZOOM, true, getSheetOffset() * .3);
		}
	}, [
		activeRegion,
		clusters,
		zoomToPoint
	]);
	const handlePanelClose = (0, import_react.useCallback)(() => {
		if (panelView === "project") closeProject();
		else resetMap();
	}, [
		panelView,
		closeProject,
		resetMap
	]);
	const onPointerDown = (e) => {
		if (e.target.closest("button, a, input, textarea")) return;
		if (!viewportRef.current) return;
		panStartRef.current = {
			x: e.clientX,
			y: e.clientY,
			tx: transformRef.current.x,
			ty: transformRef.current.y
		};
		e.currentTarget.setPointerCapture(e.pointerId);
	};
	const onPointerMove = (e) => {
		const start = panStartRef.current;
		if (!start) return;
		const dx = e.clientX - start.x;
		const dy = e.clientY - start.y;
		if (Math.abs(dx) < 4 && Math.abs(dy) < 4) return;
		transformRef.current = {
			...transformRef.current,
			x: start.tx + dx,
			y: start.ty + dy
		};
		applyTransform(false);
	};
	const onPointerUp = () => {
		panStartRef.current = null;
	};
	const desktopPanelContent = panelView === "project" && activeProject ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCardContent, {
		project: activeProject,
		lang,
		t,
		onClose: closeProject,
		onRegionList: () => {
			setActiveId(null);
			setMapMode("region");
		}
	}) : panelView === "region" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionListContent, {
		regionProjects,
		activeRegion,
		lang,
		t,
		onSelect: selectProject,
		onReset: resetMap
	}) : null;
	const mobilePanelContent = panelView === "project" && activeProject ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCardContent, {
		project: activeProject,
		lang,
		t,
		onClose: closeProject,
		onRegionList: () => {
			setActiveId(null);
			setMapMode("region");
		},
		compact: true
	}) : panelView === "region" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionListContent, {
		regionProjects,
		activeRegion,
		lang,
		t,
		onSelect: selectProject,
		onReset: resetMap,
		compact: true
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 px-2 md:flex-row md:items-start md:px-4 lg:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("relative w-full transition-opacity duration-300", "h-[min(88vw,520px)] min-h-[340px] md:h-[min(82vh,820px)] md:min-h-[560px]", ready ? "opacity-100" : "opacity-40"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: viewportRef,
						className: "map-viewport relative h-full w-full overflow-hidden rounded-[1.25rem] border-2 border-[#6B5B3E]/70 bg-[#EDE8E0] shadow-[0_4px_0_#3A2E1A,0_28px_90px_rgba(26,22,18,0.22)] md:rounded-[1.75rem]",
						onPointerDown,
						onPointerMove,
						onPointerUp,
						onPointerCancel: onPointerUp,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "map-float-controls pointer-events-none absolute inset-x-0 top-0 z-40 px-3 pt-3 md:px-4 md:pt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pointer-events-auto mx-auto max-w-3xl space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "map-search-bar",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 shrink-0 text-[#8A8175]" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "search",
												value: search,
												onChange: (e) => setSearch(e.target.value),
												placeholder: t("ابحث بالمنطقة أو اسم المشروع", "Search by area or project name"),
												className: "min-w-0 flex-1 bg-transparent text-sm text-[#1A1612] outline-none placeholder:text-[#8A8175]"
											}),
											search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setSearch(""),
												className: "text-[#8A8175]",
												"aria-label": "Clear",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "map-filter-scroll flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
										children: REGIONS.map((region) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												if (region.id === "all") resetMap();
												else selectRegion(region.id);
											},
											className: cn("map-filter-chip shrink-0", filter === region.id && "is-active"),
											children: lang === "ar" ? region.nameAr : region.nameEn
										}, region.id))
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								ref: canvasRef,
								className: cn("absolute top-0 left-0 touch-none will-change-transform", !ready && "invisible"),
								style: {
									width: imgSize.w,
									height: imgSize.h
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									ref: imgRef,
									src: MAP_SRC,
									alt: t("خريطة مشاريع الشبيلي", "AlShubaily Projects Map"),
									width: MAP_DEFAULT.w,
									height: MAP_DEFAULT.h,
									onLoad: handleImageLoad,
									draggable: false,
									className: "block h-auto w-full max-w-none select-none"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0",
									children: searchFiltered.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										"aria-label": lang === "ar" ? project.nameAr : project.nameEn,
										onClick: (e) => {
											e.stopPropagation();
											selectProject(project);
										},
										className: cn("map-pin-premium group absolute -translate-x-1/2 -translate-y-full", activeId === project.id && "is-active", activeId && activeId !== project.id && "is-dimmed"),
										style: {
											left: `${project.x}%`,
											top: `${project.y}%`
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("map-pin-label", activeId === project.id && "is-visible"),
											children: lang === "ar" ? project.nameAr : project.nameEn
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "map-pin-dot text-[11px] font-bold",
											style: { ["--pin-color"]: project.color },
											children: project.id
										})]
									}, project.id))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute inset-0 z-[5]",
								"aria-hidden": true,
								style: {
									background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 55%, rgba(15,10,5,0.32) 80%, rgba(10,6,2,0.62) 100%)",
									borderRadius: "inherit"
								}
							}),
							desktopPanelContent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
								className: "map-desktop-panel hidden lg:block",
								children: desktopPanelContent
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "map-zoom-stack absolute end-3 bottom-3 z-30 md:end-4 md:bottom-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "map-zoom-pill",
									onClick: () => zoomFromCenter(baseScaleRef.current * ZOOM_STEP_RATIO),
									"aria-label": "Zoom in",
									children: "+"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "map-zoom-pill",
									onClick: () => zoomFromCenter(-baseScaleRef.current * ZOOM_STEP_RATIO),
									"aria-label": "Zoom out",
									children: "−"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-0 z-[60] overflow-hidden lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapBottomSheet, {
							open: panelView !== "none",
							onClose: handlePanelClose,
							maxHeight: "min(52vh, 400px)",
							children: mobilePanelContent
						})
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden shrink-0 md:block md:w-[320px] lg:w-[360px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:sticky md:top-24",
					style: {
						height: "min(82vh, 820px)",
						minHeight: "560px"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapProjectListPanel, {
						activeProjectId: activeProject?.id ?? null,
						onProjectClick: (id) => {
							const p = PROJECTS.find((x) => x.id === id);
							if (p) selectProject(p);
						}
					})
				})
			})]
		})
	});
}
function ProjectCardContent({ project, lang, t, onClose, onRegionList, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-col px-4 pb-4 pt-1",
		children: [
			compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mb-3 h-32 overflow-hidden rounded-2xl border border-[#E0D3C2]/70 bg-[#1A1612]/5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.heroImage,
					alt: lang === "ar" ? project.nameAr : project.nameEn,
					className: "h-full w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-[#E0D3C2]/80 bg-white shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: project.heroImage,
						alt: "",
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold text-[#1A1612]",
							children: lang === "ar" ? project.nameAr : project.nameEn
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-0.5 flex items-center gap-1 text-xs text-[#8A8175]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 shrink-0" }), lang === "ar" ? project.regionAr : project.regionEn]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "map-sheet-close shrink-0",
							"aria-label": "Close",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs font-medium text-[#C9A962]",
						children: lang === "ar" ? project.typeAr : project.typeEn
					})]
				})]
			}),
			!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-7 text-[#5C5348]",
				children: lang === "ar" ? project.descriptionAr : project.descriptionEn
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/projects/$slug",
					params: { slug: project.slug },
					className: cn(buttonVariants({ size: "default" }), "flex-1 rounded-full bg-[#1A1612] text-white hover:bg-[#2A241E]"),
					children: t("عرض المشروع", "View Project")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onRegionList,
					className: cn(buttonVariants({
						variant: "outline",
						size: "default"
					}), "rounded-full border-[#E0D3C2] px-4"),
					children: t("المنطقة", "Region")
				})]
			})
		]
	});
}
function RegionListContent({ regionProjects, activeRegion, lang, t, onSelect, onReset, compact = false }) {
	const region = REGIONS.find((r) => r.id === activeRegion);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-col px-4 pb-4 pt-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex items-start justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] tracking-[0.25em] text-[#9A7B3A] uppercase",
					children: t("مواقع المنطقة", "Region Sites")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-0.5 text-base font-semibold text-[#1A1612]",
					children: lang === "ar" ? region?.nameAr : region?.nameEn
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-[#8A8175]",
					children: [
						regionProjects.length,
						" ",
						t("مشروع", "projects")
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onReset,
				className: "map-sheet-close shrink-0",
				"aria-label": t("إغلاق", "Close"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: cn("map-sheet-list space-y-1.5", compact ? "max-h-[min(32vh,240px)]" : "max-h-72"),
			children: regionProjects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onSelect(project),
				className: "flex w-full items-center gap-3 rounded-xl border border-[#E0D3C2]/70 bg-[#FAFAF8] p-2.5 text-start transition hover:border-[#C9A962]/50 active:scale-[0.98]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white",
					style: { background: project.color },
					children: String(project.id).padStart(2, "0")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium text-[#1A1612]",
					children: lang === "ar" ? project.nameAr : project.nameEn
				})]
			}) }, project.slug))
		})]
	});
}
function InteractiveMapSection() {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "map",
		className: "relative w-full bg-[#F5EEE2] py-16 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mb-8 max-w-4xl px-4 text-center md:mb-12 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.35em] text-[#8A6A2E]",
					children: t("خريطة المشاريع", "Projects Map")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl font-semibold text-[#1A1612] md:text-5xl",
					children: t("مشاريع الشبيلي", "AlShubaily Projects")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#1A1612]/60 md:text-base",
					children: t("اضغطي على أي رقم على الخريطة لاستكشاف المشروع — يمكنك التكبير والسحب والبحث حسب المنطقة.", "Tap any numbered point on the map to explore a project — zoom, pan, and filter by region.")
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveMap, {})]
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var RadioGroup = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup$1, {
		className: cn("grid gap-2", className),
		...props,
		ref
	});
});
RadioGroup.displayName = RadioGroup$1.displayName;
var RadioGroupItem = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem$1, {
		ref,
		className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupIndicator, {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-3.5 w-3.5 fill-primary" })
		})
	});
});
RadioGroupItem.displayName = RadioGroupItem$1.displayName;
function ContactSection() {
	const { t, dir } = useLang();
	const isRTL = dir === "rtl";
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [type, setType] = (0, import_react.useState)("investor");
	const [project, setProject] = (0, import_react.useState)("");
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const resetForm = () => {
		setName("");
		setPhone("");
		setType("investor");
		setProject("");
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (isSubmitting) return;
		if (!name.trim() || !phone.trim() || !project) {
			toast.error(t("يرجى تعبئة جميع الحقول المطلوبة.", "Please fill in all required fields."));
			return;
		}
		if (!/^[0-9+\s-]{8,15}$/.test(phone.trim())) {
			toast.error(t("رقم الجوال غير صحيح.", "Please enter a valid phone number."));
			return;
		}
		setIsSubmitting(true);
		try {
			await new Promise((r) => setTimeout(r, 1200));
			toast.success(t("تم إرسال طلبك بنجاح، سنتواصل معك قريباً.", "Your request has been sent. We'll contact you shortly."));
			resetForm();
			setSubmitted(true);
			setTimeout(() => setSubmitted(false), 4e3);
		} catch {
			toast.error(t("حدث خطأ أثناء الإرسال، حاول مرة أخرى.", "Something went wrong. Please try again."));
		} finally {
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative bg-[#14110D] py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex flex-col items-center gap-12 md:items-stretch md:gap-16 ${isRTL ? "md:flex-row" : "md:flex-row-reverse"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex w-full max-w-md flex-1 flex-col justify-center text-center md:max-w-none md:text-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.35em] text-[#C9A962]",
							children: t("تواصل معنا", "Contact Us")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-semibold text-[#FAFAF8] md:text-5xl",
							children: t("نحن هنا لمساعدتك", "We Are Here to Help")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-sm leading-7 text-[#FAFAF8]/60 md:text-base",
							children: t("مجموعة خالد سعود الشبيلي تفتخر بتقديم مشاريع عقارية واستثمارية متميزة في أنحاء المملكة. سواء كنت مستثمراً تبحث عن فرصة واعدة أو عميلاً يطمح لمسكن فاخر، فريقنا جاهز لخدمتك.", "Khalid Saud AlShubaily Group takes pride in delivering distinguished real estate and investment projects across the Kingdom. Whether you are an investor seeking a promising opportunity or a client aspiring for a luxury home, our team is ready to serve you.")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center justify-center gap-3 md:justify-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-px w-12 bg-[#C9A962]/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium tracking-wider text-[#C9A962]",
								children: t("مجموعة الشبيلي", "AlShubaily Group")
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full max-w-md flex-1 md:max-w-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
						onSubmit: handleSubmit,
						className: "mx-auto w-full max-w-md rounded-2xl border border-[#E0D3C2]/10 bg-[#F5EEE2] p-6 shadow-xl md:max-w-none md:p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										htmlFor: "contact-name",
										className: "text-[#1A1612]",
										children: [t("الاسم", "Name"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-red-500",
											children: " *"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "contact-name",
										value: name,
										onChange: (e) => setName(e.target.value),
										placeholder: t("أدخل اسمك", "Enter your name"),
										className: "border-[#E0D3C2] bg-white text-[#1A1612] placeholder:text-[#5C5348]/80 focus-visible:ring-[#C9A962]",
										dir
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										htmlFor: "contact-phone",
										className: "text-[#1A1612]",
										children: [t("رقم الجوال", "Phone Number"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-red-500",
											children: " *"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "contact-phone",
										type: "tel",
										value: phone,
										onChange: (e) => setPhone(e.target.value),
										placeholder: t("05xxxxxxxx", "05xxxxxxxx"),
										className: "border-[#E0D3C2] bg-white text-[#1A1612] placeholder:text-[#5C5348]/80 focus-visible:ring-[#C9A962]",
										dir: "ltr"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-[#1A1612]",
										children: t("نوع الاستفسار", "Inquiry Type")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioGroup, {
										value: type,
										onValueChange: (v) => setType(v),
										className: "flex gap-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
												value: "investor",
												id: "type-investor",
												className: "border-[#C9A962] text-[#C9A962]"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "type-investor",
												className: "cursor-pointer font-normal text-[#1A1612]",
												children: t("مستثمر", "Investor")
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
												value: "client",
												id: "type-client",
												className: "border-[#C9A962] text-[#C9A962]"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "type-client",
												className: "cursor-pointer font-normal text-[#1A1612]",
												children: t("عميل", "Client")
											})]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										htmlFor: "contact-project",
										className: "text-[#1A1612]",
										children: [t("المشروع", "Project"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-red-500",
											children: " *"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "contact-project",
										dir,
										value: project,
										onChange: (e) => setProject(e.target.value),
										className: "flex h-10 w-full rounded-md border border-[#E0D3C2] bg-white px-3 py-2 text-sm text-[#1A1612] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C9A962] disabled:cursor-not-allowed disabled:opacity-50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: t("اختر المشروع", "Select a project")
										}), PROJECTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: String(p.id),
											children: isRTL ? p.nameAr : p.nameEn
										}, p.id))]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									variant: "gold",
									disabled: isSubmitting,
									className: "mt-2 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold tracking-wide disabled:opacity-70",
									children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), t("جارٍ الإرسال...", "Sending...")] }) : submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), t("تم الإرسال", "Sent")] }) : t("إرسال", "Submit")
								})
							]
						})
					})
				})]
			})
		})
	});
}
function HomePage() {
	const DARK = "#14110D";
	const CREAM = "#F5EEE2";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-[#F5EEE2] text-[#1A1612]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "relative z-[2] isolate stacked-sections",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackedSection, {
					index: 0,
					total: 7,
					background: DARK,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroChairman, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackedSection, {
					index: 1,
					total: 7,
					background: DARK,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisionMissionSection, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackedSection, {
					index: 2,
					total: 7,
					background: CREAM,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMarqueeBanner, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackedSection, {
					index: 3,
					total: 7,
					background: CREAM,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectTypesSection, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackedSection, {
					index: 4,
					total: 7,
					background: DARK,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProjects, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackedSection, {
					index: 5,
					total: 7,
					background: CREAM,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveMapSection, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackedSection, {
					index: 6,
					total: 7,
					background: DARK,
					className: "stacked-section--deep",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilmGrain, {})]
	});
}
//#endregion
export { HomePage as component };
