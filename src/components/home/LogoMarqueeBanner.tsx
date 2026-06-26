import { useLang } from "@/contexts/lang-context";
import { GROUP_ICON, GROUP_SUBSIDIARIES } from "@/data/group-logos";

export function LogoMarqueeBanner() {
  const { t, lang } = useLang();

  return (
    <section
      id="group"
      className="relative w-full overflow-hidden bg-[#FAF9F6] py-12 md:py-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[360px] w-[min(92vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(201,169,98,0.14), rgba(201,169,98,0.04) 55%, transparent 78%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-8 flex flex-col items-center gap-3 text-center md:mb-10">
          <div className="relative h-28 w-28 md:h-36 md:w-36 lg:h-40 lg:w-40">
            <img
              src={GROUP_ICON}
              alt={t("مجموعة الشبيلي", "AlShubaily Group")}
              className="h-full w-full object-contain drop-shadow-[0_6px_32px_rgba(201,169,98,0.5)]"
              loading="eager"
            />
          </div>
          <p className="text-[10px] font-semibold tracking-[0.45em] text-[#8A6E2F] uppercase md:text-xs">
            {t("شركات المجموعة", "Group Companies")}
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#C9A962]/70 to-transparent" />
        </div>

        <ul
          className="logo-static-grid"
          aria-label={t("شركات مجموعة الشبيلي", "AlShubaily Group Companies")}
        >
          {GROUP_SUBSIDIARIES.map((company) => (
            <li key={company.id} className="logo-static-item">
              <img
                src={company.logo}
                alt={lang === "ar" ? company.nameAr : company.nameEn}
                title={lang === "ar" ? company.nameAr : company.nameEn}
                className="logo-static-img"
                loading="eager"
                decoding="sync"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
