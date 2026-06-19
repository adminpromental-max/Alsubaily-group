import { useRef } from "react";
import { useLang } from "@/contexts/lang-context";
import { GROUP_ICON, GROUP_SUBSIDIARIES } from "@/data/group-logos";

const buildRow = (arr: typeof GROUP_SUBSIDIARIES) => [
  ...arr,
  ...arr,
  ...arr,
  ...arr,
  ...arr,
];

export function LogoMarqueeBanner() {
  const { t, lang } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);

  const pause = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
  };
  const resume = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "running";
  };

  const row = buildRow(GROUP_SUBSIDIARIES);

  return (
    <section
      id="group"
      data-parallax-section
      className="relative overflow-hidden bg-[#F5EEE2] py-14 md:py-20"
    >
      {/* Soft gold radial accent */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 z-0 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(201,169,98,0.18), rgba(201,169,98,0.05) 55%, transparent 78%)",
          filter: "blur(8px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 flex flex-col items-center gap-3 text-center md:mb-14">
          <div className="relative h-20 w-20 md:h-24 md:w-24">
            <img
              src={GROUP_ICON}
              alt={t("مجموعة الشبيلي", "AlShubaily Group")}
              className="h-full w-full object-contain drop-shadow-[0_4px_24px_rgba(201,169,98,0.45)]"
            />
          </div>
          <p className="text-[10px] font-semibold tracking-[0.45em] text-[#8A6E2F] uppercase md:text-xs">
            {t("شركات المجموعة", "Group Companies")}
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#C9A962]/70 to-transparent" />
        </div>

        <div
          className="logo-river"
          onMouseEnter={pause}
          onMouseLeave={resume}
          aria-label={t("شركات مجموعة الشبيلي", "AlShubaily Group Companies")}
        >
          <div className="logo-river-row">
            <div ref={trackRef} className="logo-river-track logo-river-track--ltr">
              {row.map((c, i) => (
                <div
                  key={`a-${c.id}-${i}`}
                  className="logo-float-item"
                  title={lang === "ar" ? c.nameAr : c.nameEn}
                >
                  <img
                    src={c.logo}
                    alt={lang === "ar" ? c.nameAr : c.nameEn}
                    className="logo-float-img"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
