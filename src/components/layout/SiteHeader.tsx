import { Link } from "@tanstack/react-router";
import { useLang } from "@/contexts/lang-context";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", ar: "الرئيسية", en: "Home" },
  { to: "/about", ar: "عن المجموعة", en: "About Group" },
  { to: "/projects", ar: "المشاريع", en: "Projects" },
  { to: "/services", ar: "خدماتنا", en: "Our Services" },
  { to: "/media", ar: "المركز الإعلامي", en: "Media Center" },
  { to: "/#contact", ar: "الاتصال بنا", en: "Contact Us", hash: true },
] as const;

export function SiteHeader() {
  const { t, toggleLang, lang } = useLang();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#E0D3C2]/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/Alshubaily-logo.png"
            alt="AlShubaily"
            width={44}
            height={48}
            className="h-11 w-auto"
          />
          <div className="hidden sm:block">
            <p className="text-[11px] tracking-[0.2em] text-[#9A7B3A] uppercase">
              AlShubaily
            </p>
            <p className="text-sm font-medium text-[#1A1612]">
              {t("مجموعة الشبيلي", "AlShubaily Group")}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
          {NAV.map((item) =>
            item.hash ? (
              <a
                key={item.to}
                href={item.to}
                className="text-sm text-[#5C5348] transition hover:text-[#1A1612]"
              >
                {t(item.ar, item.en)}
              </a>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-[#5C5348] transition hover:text-[#1A1612]"
              >
                {t(item.ar, item.en)}
              </Link>
            ),
          )}
        </nav>

        <Button
          variant="outline"
          size="sm"
          onClick={toggleLang}
          className="rounded-full border-[#E0D3C2] bg-white text-[#1A1612] hover:bg-[#F3F0EA]"
        >
          {lang === "ar" ? "EN" : "AR"}
        </Button>
      </div>
    </header>
  );
}
