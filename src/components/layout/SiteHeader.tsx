import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", ar: "الرئيسية", en: "Home" },
  { to: "/about", ar: "عن المجموعة", en: "About Group" },
  { to: "/projects", ar: "المشاريع", en: "Projects" },
  { to: "/services", ar: "خدماتنا", en: "Our Services" },
  { to: "/media", ar: "المركز الإعلامي", en: "Media Center" },
  { to: "/#contact", ar: "الاتصال بنا", en: "Contact Us", hash: true },
] as const;

const SCROLL_SOLID = 72;

export function SiteHeader() {
  const { t, toggleLang, lang } = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [solid, setSolid] = useState(!isHome);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setSolid(true);
      return;
    }

    const onScroll = () => setSolid(window.scrollY > SCROLL_SOLID);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const onHero = isHome && !solid;

  const navLinkClass = cn(
    "text-sm transition-colors duration-300",
    onHero
      ? "text-white/85 hover:text-white"
      : "text-[#5C5348] hover:text-[#1A1612]",
  );

  const renderNavLink = (
    item: (typeof NAV)[number],
    className?: string,
    onClick?: () => void,
  ) => {
    const cls = cn(navLinkClass, className);
    if (item.hash) {
      return (
        <a key={item.to} href={item.to} className={cls} onClick={onClick}>
          {t(item.ar, item.en)}
        </a>
      );
    }
    return (
      <Link
        key={item.to}
        to={item.to}
        className={cls}
        onClick={onClick}
      >
        {t(item.ar, item.en)}
      </Link>
    );
  };

  return (
    <header
      className={cn(
        "site-header fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-out",
        onHero
          ? "border-b border-white/10 bg-transparent shadow-none backdrop-blur-none"
          : "border-b border-[#E0D3C2]/60 bg-white/92 shadow-[0_4px_24px_-8px_rgba(26,22,18,0.12)] backdrop-blur-xl",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8 md:py-4">
        <Link to="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <img
            src="/assets/Alshubaily-logo.png"
            alt="AlShubaily"
            width={44}
            height={48}
            className={cn(
              "h-10 w-auto shrink-0 sm:h-11",
              onHero && "drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]",
            )}
          />
          <div className="min-w-0 leading-tight">
            <p
              className={cn(
                "text-[9px] tracking-[0.18em] uppercase sm:text-[11px] sm:tracking-[0.2em]",
                onHero ? "text-[#E8D5A3]" : "text-[#9A7B3A]",
              )}
            >
              AlShubaily
            </p>
            <p
              className={cn(
                "truncate text-xs font-medium sm:text-sm",
                onHero ? "text-white" : "text-[#1A1612]",
              )}
            >
              {t("مجموعة الشبيلي", "AlShubaily Group")}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
          {NAV.map((item) => renderNavLink(item))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLang}
            className={cn(
              "rounded-full transition-colors duration-300",
              onHero
                ? "border-white/35 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                : "border-[#E0D3C2] bg-white text-[#1A1612] hover:bg-[#F3F0EA]",
            )}
          >
            {lang === "ar" ? "EN" : "AR"}
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "rounded-full lg:hidden",
                  onHero
                    ? "border-white/35 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                    : "border-[#E0D3C2] bg-white text-[#1A1612] hover:bg-[#F3F0EA]",
                )}
                aria-label={t("فتح القائمة", "Open menu")}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side={lang === "ar" ? "right" : "left"}
              className="w-[min(100vw-2rem,320px)] border-[#E0D3C2]/60 bg-[#FAF8F4] p-0 [&>button.absolute]:hidden"
            >
              <SheetHeader className="border-b border-[#E0D3C2]/50 px-6 py-5 text-start">
                <div className="flex items-center justify-between gap-3">
                  <SheetTitle className="flex items-center gap-2.5 text-start">
                    <img
                      src="/assets/Alshubaily-logo.png"
                      alt=""
                      className="h-9 w-auto"
                    />
                    <span className="text-sm font-medium text-[#1A1612]">
                      {t("مجموعة الشبيلي", "AlShubaily Group")}
                    </span>
                  </SheetTitle>
                  <SheetClose asChild>
                    <button
                      type="button"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E0D3C2] text-[#5C5348] transition hover:bg-white"
                      aria-label={t("إغلاق القائمة", "Close menu")}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </SheetClose>
                </div>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4 py-4">
                {NAV.map((item) =>
                  renderNavLink(
                    item,
                    "rounded-xl px-4 py-3.5 text-base font-medium text-[#1A1612] hover:bg-white hover:text-[#9A7B3A]",
                    () => setMobileOpen(false),
                  ),
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
