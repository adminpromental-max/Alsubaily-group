## السياق
الريبو [`adminpromental-max/alshubaily`](https://github.com/adminpromental-max/alshubaily) موقع شركة عقارية/معمارية (الشبيلي) مبني بـ **Next.js 16 + App Router + React 19**، فيه:

- 57 ملف source + 28MB أصول (صور المشاريع، شعارات، فيديو هيرو).
- صفحات: `/` (هوم سينمائي)، `/about`، `/projects/[slug]`، `/dammam-preview`.
- مكتبات ثقيلة: **three.js / @react-three/fiber/drei**, **GSAP**, **Leaflet** (خريطة تفاعلية)، **Lenis** (smooth scroll)، **Embla carousel**.
- بيانات ثابتة في `src/data/*` ومحتوى ثنائي اللغة عبر `LangContext` (عربي/إنجليزي).

Lovable يشتغل على **TanStack Start + Vite + React 19 + Tailwind v4** — مش Next.js. كل المكتبات اللي فوق تشتغل في Vite عادي ما عدا أن routing/SSR/`Image`/`<Link>` لازم يتبدلوا بمكافئات TanStack.

## المخرجات
موقع الشبيلي شغّال داخل مشروع Lovable الحالي بنفس المحتوى والتصميم، مع الحفاظ على الأصول والبيانات.

## خطة على ٤ مراحل

### المرحلة 1 — الأساس والمحتوى الثابت (هنبدأ بيها دلوقتي)
- نسخ كل `public/assets/**` (28MB صور) للمشروع.
- نسخ `src/data/*` كما هو (ملفات TypeScript خالصة، تشتغل مباشرة).
- نسخ `src/contexts/lang-context.tsx` (يشتغل في Vite بدون تعديل).
- نسخ `src/components/ui/button.tsx` + إعداد `cn` helper.
- نقل tokens التصميم من `globals.css` لـ `src/styles.css` (Tailwind v4 syntax).
- إنشاء routes فاضية:
  - `src/routes/index.tsx` (Home)
  - `src/routes/about.tsx`
  - `src/routes/projects.$slug.tsx`
  - `src/routes/dammam-preview.tsx`
- نقل `SiteHeader` + `SiteFooter` لـ `__root.tsx`.

### المرحلة 2 — الصفحات الثابتة + المكوّنات العادية
بورت المكوّنات اللي مفيهاش 3D/Map:
- `HomePage`, `AboutSection`, `CTASection`, `StatsBanner`, `TaglineSection`, `GroupSection`, `LogoMarqueeBanner`, `FeaturedProjects`, `ProjectTypesSection`, `ProjectsIntroSection`, `FilmGrain`.
- صفحة `/about` كاملة (`AboutPageClient`).
- صفحة `/projects/[slug]` (`ProjectPageClient`) — استبدال `next/image` بـ `<img>` و`next/link` بـ TanStack `<Link>`.
- تثبيت Embla + GSAP + Lenis.

### المرحلة 3 — التجارب السينمائية والهيرو
- `HeroCinematic`, `HeroChairmanSequence`, `HeroLetterReveal`, `HeroDroneScene`, `HeroVideoBackground`, `CinematicStackSlider`, `IntroGateway`, `LandingExperience`, `ImmersiveTour`, `CustomCursor`, `AmbientLight`.
- تثبيت `three`, `@react-three/fiber`, `@react-three/drei` — كلها تشتغل في Vite، بس لازم نخلي مكوّنات الـ Canvas تتحمّل client-only (dynamic import داخل `useEffect` أو ملف `*.client.tsx`).

### المرحلة 4 — الخريطة التفاعلية ومشروع الدمام
- `InteractiveMap`, `NightMap`, `NightMapSection`, `MapBottomSheet`, `MapProjectCard3D`, `MapProjectListPanel`.
- Leaflet + ملفات الـ geo. Leaflet يحتاج `window`، فلازم يُحمّل client-only.
- `DammamOlympicPage`, `DammamSplitScreen`, `OlympicCircleGallery`.

## تفاصيل تقنية
- `next/image` → `<img>` عادي (Vite بيعالج الأصول من `/public` كـ static).
- `next/link` → `import { Link } from "@tanstack/react-router"`.
- `next/dynamic` → استخدام `React.lazy` + `<Suspense>` أو ملفات `.client.tsx`.
- `useRouter` من Next → `useNavigate` من TanStack.
- ملفات تستخدم `window`/`document` في module scope (مثل Leaflet) → تتفصل في ملف `*.client.tsx` وتُستورد عبر lazy.
- Tailwind v4: tokens (`--color-*`, fonts) تترحّل لـ `@theme` داخل `src/styles.css`.
- اللغة العربية + RTL: نضيف `dir="rtl"` على `<html>` لما اللغة عربي (يتحكم فيها `LangContext`).

## القيود
- بورت كامل لـ57 ملف هياخد عدة جولات متتالية. هنبدأ بـ**المرحلة 1** دلوقتي ونكمل تدريجياً بعد تأكيدك على كل مرحلة.
- مكتبات client-only (three, leaflet, gsap, lenis) لازم تتعزل عن SSR عشان البناء ميفشلش.
- Lovable لا يدعم Next.js مباشرة، فالنتيجة هتكون "بورت" مش "نسخ ولصق".

موافق نبدأ بـ**المرحلة 1**؟