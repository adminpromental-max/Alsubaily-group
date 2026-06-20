import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { dammamAsset } from "@/data/asset-paths";
import { DAMMAM_HIGHLIGHTS, DAMMAM_HERO_POSTER, DAMMAM_BANNER } from "@/data/dammam-content";
import { useLang } from "@/contexts/lang-context";
import { OlympicCircleGallery } from "./OlympicCircleGallery";

gsap.registerPlugin(ScrollTrigger);

const IMG = (f: string) => dammamAsset(f);
const VIDEO_URL =
  "https://res.cloudinary.com/dfzaghfsv/video/upload/q_auto,f_mp4/v1781634357/Dammam_Olympic_n4rvqh.mov";

function ScooterKidIcon() {
  return (
    <svg viewBox="0 0 180 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="h-full w-full">
      <circle cx="118" cy="16" r="13" fill="#9A7B3A" opacity="0.26" />
      <path d="M105 16 Q105 3 118 3 Q131 3 131 16" fill="#C9A962" opacity="0.2" />
      <line x1="118" y1="29" x2="113" y2="56" stroke="#9A7B3A" strokeWidth="5" strokeLinecap="round" opacity="0.26" />
      <line x1="116" y1="40" x2="140" y2="47" stroke="#9A7B3A" strokeWidth="3.5" strokeLinecap="round" opacity="0.26" />
      <line x1="113" y1="56" x2="104" y2="74" stroke="#9A7B3A" strokeWidth="4.5" strokeLinecap="round" opacity="0.26" />
      <line x1="113" y1="56" x2="120" y2="72" stroke="#9A7B3A" strokeWidth="4.5" strokeLinecap="round" opacity="0.26" />
      <rect x="50" y="74" width="90" height="7" rx="3.5" fill="#9A7B3A" opacity="0.20" />
      <line x1="140" y1="74" x2="140" y2="48" stroke="#9A7B3A" strokeWidth="3.5" strokeLinecap="round" opacity="0.26" />
      <line x1="130" y1="48" x2="152" y2="48" stroke="#9A7B3A" strokeWidth="3.5" strokeLinecap="round" opacity="0.26" />
      <circle cx="58" cy="86" r="13" fill="none" stroke="#9A7B3A" strokeWidth="3" opacity="0.26" />
      <circle cx="58" cy="86" r="4" fill="#9A7B3A" opacity="0.16" />
      <circle cx="132" cy="86" r="13" fill="none" stroke="#9A7B3A" strokeWidth="3" opacity="0.26" />
      <circle cx="132" cy="86" r="4" fill="#9A7B3A" opacity="0.16" />
      <line x1="8" y1="74" x2="36" y2="74" stroke="#C9A962" strokeWidth="2" strokeDasharray="4 5" strokeLinecap="round" opacity="0.28" />
      <line x1="4" y1="62" x2="26" y2="62" stroke="#C9A962" strokeWidth="1.5" strokeDasharray="3 4" strokeLinecap="round" opacity="0.20" />
      <line x1="12" y1="85" x2="32" y2="85" stroke="#C9A962" strokeWidth="1.5" strokeDasharray="3 4" strokeLinecap="round" opacity="0.18" />
    </svg>
  );
}

function FootballPlayerIcon() {
  return (
    <svg viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="h-full w-full">
      <circle cx="44" cy="16" r="13" fill="#9A7B3A" opacity="0.26" />
      <line x1="44" y1="29" x2="44" y2="64" stroke="#9A7B3A" strokeWidth="6" strokeLinecap="round" opacity="0.26" />
      <line x1="44" y1="42" x2="20" y2="28" stroke="#9A7B3A" strokeWidth="4" strokeLinecap="round" opacity="0.26" />
      <line x1="44" y1="42" x2="70" y2="30" stroke="#9A7B3A" strokeWidth="4" strokeLinecap="round" opacity="0.26" />
      <line x1="44" y1="64" x2="34" y2="88" stroke="#9A7B3A" strokeWidth="4.5" strokeLinecap="round" opacity="0.26" />
      <line x1="34" y1="88" x2="26" y2="98" stroke="#9A7B3A" strokeWidth="4" strokeLinecap="round" opacity="0.26" />
      <line x1="44" y1="64" x2="68" y2="80" stroke="#9A7B3A" strokeWidth="4.5" strokeLinecap="round" opacity="0.26" />
      <line x1="68" y1="80" x2="92" y2="68" stroke="#9A7B3A" strokeWidth="4" strokeLinecap="round" opacity="0.26" />
      <circle cx="108" cy="72" r="15" fill="none" stroke="#9A7B3A" strokeWidth="2.5" opacity="0.28" />
      <circle cx="108" cy="72" r="6" fill="#9A7B3A" opacity="0.12" />
      <path d="M108 57 Q114 64 108 72 Q102 80 108 87" stroke="#9A7B3A" strokeWidth="1.5" opacity="0.20" />
      <path d="M93 72 Q100 67 108 72 Q116 77 123 72" stroke="#9A7B3A" strokeWidth="1.5" opacity="0.20" />
      <path d="M78 60 Q88 50 95 62" stroke="#C9A962" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" opacity="0.32" />
    </svg>
  );
}

function RunnerIcon() {
  return (
    <svg viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="h-full w-full">
      <circle cx="60" cy="14" r="11" fill="#9A7B3A" opacity="0.26" />
      <line x1="60" y1="25" x2="72" y2="52" stroke="#9A7B3A" strokeWidth="5.5" strokeLinecap="round" opacity="0.26" />
      <line x1="64" y1="36" x2="42" y2="28" stroke="#9A7B3A" strokeWidth="3.5" strokeLinecap="round" opacity="0.26" />
      <line x1="64" y1="36" x2="86" y2="46" stroke="#9A7B3A" strokeWidth="3.5" strokeLinecap="round" opacity="0.26" />
      <line x1="72" y1="52" x2="52" y2="76" stroke="#9A7B3A" strokeWidth="4.5" strokeLinecap="round" opacity="0.26" />
      <line x1="52" y1="76" x2="44" y2="92" stroke="#9A7B3A" strokeWidth="4" strokeLinecap="round" opacity="0.26" />
      <line x1="72" y1="52" x2="88" y2="68" stroke="#9A7B3A" strokeWidth="4.5" strokeLinecap="round" opacity="0.26" />
      <line x1="88" y1="68" x2="102" y2="78" stroke="#9A7B3A" strokeWidth="4" strokeLinecap="round" opacity="0.26" />
      <line x1="24" y1="93" x2="44" y2="93" stroke="#C9A962" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" opacity="0.28" />
      <line x1="88" y1="80" x2="108" y2="84" stroke="#C9A962" strokeWidth="1.5" strokeDasharray="3 4" strokeLinecap="round" opacity="0.22" />
    </svg>
  );
}

const CONNECTOR_ICONS = [
  <ScooterKidIcon key="scooter" />,
  <FootballPlayerIcon key="football" />,
  <RunnerIcon key="runner" />,
  <ScooterKidIcon key="scooter2" />,
  <FootballPlayerIcon key="football2" />,
  <RunnerIcon key="runner2" />,
];

function PathConnector({ iconIndex }: { iconIndex: number }) {
  return (
    <div className="olympic-path-connector">
      <svg
        viewBox="0 0 120 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="olympic-path-svg"
        aria-hidden
      >
        <path
          d="M60 0 C90 28, 30 56, 60 84 C90 112, 30 140, 60 168 C90 196, 30 224, 60 252 C80 268, 60 280, 60 280"
          stroke="#C9A962"
          strokeWidth="1.8"
          strokeDasharray="6 8"
          strokeLinecap="round"
          opacity="0.38"
        />
        <path
          d="M48 10 C72 36, 24 64, 52 92 C76 116, 22 148, 50 178 C74 204, 28 232, 56 260"
          stroke="#C9A962"
          strokeWidth="1"
          strokeDasharray="3 10"
          strokeLinecap="round"
          opacity="0.16"
        />
        {[0, 42, 84, 126, 168, 210, 252, 280].map((cy, i) => (
          <circle
            key={i}
            cx="60"
            cy={cy}
            r={i % 3 === 0 ? 4 : 2.5}
            fill="#C9A962"
            opacity={i % 3 === 0 ? 0.42 : 0.28}
          />
        ))}
        <path d="M60 140 l5 5 l-5 5 l-5 -5 Z" fill="#C9A962" opacity="0.3" />
      </svg>
      <div className="olympic-path-icon">
        {CONNECTOR_ICONS[iconIndex % CONNECTOR_ICONS.length]}
      </div>
    </div>
  );
}

const SECTIONS = DAMMAM_HIGHLIGHTS;

export function DammamOlympicPage() {
  const { t } = useLang();
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        const bg = heroRef.current.querySelector(".olympic-hero-bg");
        if (bg) {
          gsap.to(bg, {
            yPercent: 18,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
              scroller: document.documentElement,
            },
          });
        }
      }

      sectionRefs.current.forEach((section) => {
        if (!section) return;
        const isLeft = section.dataset.side === "left";

        const imgWrap = section.querySelector(".olympic-section-img");
        if (imgWrap) {
          gsap.fromTo(
            imgWrap,
            { opacity: 0, x: isLeft ? -50 : 50 },
            {
              opacity: 1,
              x: 0,
              duration: 1.0,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 98%",
                scroller: document.documentElement,
                toggleActions: "play none none none",
              },
            },
          );
        }

        const reveals = section.querySelectorAll("[data-reveal]");
        if (reveals.length) {
          gsap.fromTo(
            reveals,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 98%",
                scroller: document.documentElement,
                toggleActions: "play none none none",
              },
            },
          );
        }
      });
    });
    return () => ctx.revert();
  }, []);

  const allGallery = SECTIONS.map((sec) => ({
    src: IMG(sec.file),
    labelAr: sec.titleAr,
    labelEn: sec.titleEn,
    descriptionAr: sec.bodyAr,
    descriptionEn: sec.bodyEn,
  }));

  return (
    <div className="olympic-page min-h-screen overflow-x-hidden bg-[#FAF8F4] text-[#1A1612]">
      <section ref={heroRef} className="olympic-hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          poster={DAMMAM_HERO_POSTER}
        >
          <source src={VIDEO_URL} type="video/mp4" />
          <source
            src="https://res.cloudinary.com/dfzaghfsv/video/upload/v1781634357/Dammam_Olympic_n4rvqh.mov"
            type="video/quicktime"
          />
        </video>

        <div className="olympic-hero-overlay" />

        <div className="olympic-hero-content">
          <a href="/#map" className="olympic-back-link">
            ← {t("العودة للمشاريع", "Back to Projects")}
          </a>

          <p className="olympic-hero-eyebrow">
            {t("الدمام · المنطقة الشرقية · رياضي", "Dammam · Eastern Region · Sports")}
          </p>

          <h1 className="olympic-hero-title">
            {t("مدينة الدمام", "Dammam")}
            <span>{t("الأولمبية", "Olympic City")}</span>
          </h1>

          <div className="olympic-hero-stats-row">
            <div className="olympic-hero-stat">
              <span className="olympic-hero-stat-val">+45,000</span>
              <span className="olympic-hero-stat-lbl">{t("مقعد", "Seats")}</span>
            </div>
            <div className="olympic-hero-stat-sep" />
            <div className="olympic-hero-stat">
              <span className="olympic-hero-stat-val">+30</span>
              <span className="olympic-hero-stat-lbl">{t("منشأة رياضية", "Sports Venues")}</span>
            </div>
            <div className="olympic-hero-stat-sep" />
            <div className="olympic-hero-stat">
              <span className="olympic-hero-stat-val">2.4M m²</span>
              <span className="olympic-hero-stat-lbl">{t("مساحة إجمالية", "Total Area")}</span>
            </div>
            <div className="olympic-hero-stat-sep" />
            <div className="olympic-hero-stat">
              <span className="olympic-hero-stat-val">2030</span>
              <span className="olympic-hero-stat-lbl">{t("الاكتمال المتوقع", "Est. Completion")}</span>
            </div>
          </div>
        </div>

        <div className="olympic-hero-scroll" aria-hidden>
          <span className="olympic-scroll-line" />
          <span className="mt-2 text-[9px] tracking-[0.35em] text-white/40 uppercase">
            {t("تمرير", "Scroll")}
          </span>
        </div>
      </section>

      {SECTIONS.map((sec, idx) => {
        const isLeft = sec.side === "left";
        const showVideo = idx === 4;
        const showPath = idx < SECTIONS.length - 1;

        return (
          <div key={idx}>
            {showVideo && (
              <div className="olympic-pitch-banner">
                <div
                  className="olympic-pitch-bg"
                  style={{ backgroundImage: `url('${DAMMAM_BANNER}')` }}
                  aria-hidden
                >
                  <div className="pitch-stripe" />
                  <div className="pitch-stripe" />
                  <div className="pitch-stripe" />
                  <div className="pitch-stripe" />
                  <div className="pitch-center-circle" />
                  <div className="pitch-center-line" />
                  <div className="pitch-penalty-box pitch-penalty-box--left" />
                  <div className="pitch-penalty-box pitch-penalty-box--right" />
                </div>

                <div className="olympic-pitch-overlay" />

                <div className="olympic-pitch-content">
                  <p className="olympic-pitch-tag">
                    {t("نبذة عن المشروع", "Project Overview")}
                  </p>
                  <div className="olympic-pitch-grid">
                    <div className="olympic-pitch-item">
                      <span className="olympic-pitch-label">{t("المشروع", "Project")}</span>
                      <span className="olympic-pitch-value">
                        {t("مدينة الدمام الأولمبية", "Dammam Olympic City")}
                      </span>
                    </div>
                    <div className="olympic-pitch-item">
                      <span className="olympic-pitch-label">{t("الموقع", "Location")}</span>
                      <span className="olympic-pitch-value">
                        {t("الدمام، المنطقة الشرقية", "Dammam, Eastern Region")}
                      </span>
                    </div>
                    <div className="olympic-pitch-item">
                      <span className="olympic-pitch-label">{t("المساحة الكلية", "Total Area")}</span>
                      <span className="olympic-pitch-value">2,400,000 m²</span>
                    </div>
                    <div className="olympic-pitch-item">
                      <span className="olympic-pitch-label">{t("النوع", "Type")}</span>
                      <span className="olympic-pitch-value">
                        {t("متعدد الاستخدامات الرياضية", "Multi-Use Sports City")}
                      </span>
                    </div>
                    <div className="olympic-pitch-item">
                      <span className="olympic-pitch-label">{t("الحالة", "Status")}</span>
                      <span className="olympic-pitch-value">
                        {t("قيد التطوير · 2030", "Under Development · 2030")}
                      </span>
                    </div>
                  </div>
                  <p className="olympic-pitch-desc">
                    {t(
                      "مدينة رياضية متكاملة تُجسّد طموحات رؤية 2030 في الاستضافة العالمية وتطوير منظومة الرياضة السعودية، تضم الملاعب والمرافق الدولية وتخدم مجتمع المنطقة الشرقية بأكمله.",
                      "An integrated sports city embodying Vision 2030's ambitions for global hosting and developing Saudi Arabia's sports ecosystem — serving the entire Eastern Region community.",
                    )}
                  </p>
                </div>
              </div>
            )}

            <section
              ref={(el) => {
                sectionRefs.current[idx] = el;
              }}
              data-side={sec.side}
              className="olympic-section"
            >
              <div
                className={`olympic-section-inner ${isLeft ? "olympic-section-inner--left" : ""}`}
              >
                <div className="olympic-section-img-wrap">
                  <div className="olympic-section-img">
                    <img
                      src={IMG(sec.file)}
                      alt={t(sec.titleAr, sec.titleEn)}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="olympic-img-corner olympic-img-corner--tl" />
                    <div className="olympic-img-corner olympic-img-corner--br" />
                  </div>
                  <div className="olympic-step-badge">0{idx + 1}</div>
                </div>

                <div className="olympic-section-content">
                  <p data-reveal className="olympic-section-eyebrow">
                    {t(sec.eyebrowAr, sec.eyebrowEn)}
                  </p>
                  <h2 data-reveal className="olympic-section-title">
                    {t(sec.titleAr, sec.titleEn)}
                  </h2>
                  <div data-reveal className="olympic-section-rule" aria-hidden />
                  <p data-reveal className="olympic-section-body">
                    {t(sec.bodyAr, sec.bodyEn)}
                  </p>
                </div>
              </div>
            </section>

            {showPath && <PathConnector iconIndex={idx} />}
          </div>
        );
      })}

      <div className="olympic-gallery">
        <div className="olympic-gallery-header">
          <p className="olympic-gallery-eyebrow">{t("معرض الصور", "Gallery")}</p>
          <h2 className="olympic-gallery-title">{t("لحظات من المشروع", "Project Moments")}</h2>
        </div>
        <OlympicCircleGallery images={allGallery} />
      </div>

      <section className="olympic-cta">
        <div className="olympic-cta-inner">
          <p className="olympic-cta-eyebrow">
            {t("ابدأ رحلتك الاستثمارية", "Start Your Investment Journey")}
          </p>
          <h2 className="olympic-cta-title">
            {t("مدينة الدمام الأولمبية تنتظرك", "Dammam Olympic City Awaits You")}
          </h2>
          <div className="olympic-cta-btns">
            <a href="/#contact" className="cta-glass-btn cta-glass-btn--gold">
              {t("تواصل معنا", "Contact Us")}
            </a>
            <a href="/#map" className="cta-glass-btn">
              {t("استكشف مشاريع أخرى", "Explore More Projects")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
