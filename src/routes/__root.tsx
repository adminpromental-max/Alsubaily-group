import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LangProvider } from "../contexts/lang-context";
import { SiteHeader } from "../components/layout/SiteHeader";
import { SiteFooter } from "../components/layout/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-[#1A1612]">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-[#1A1612]">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-[#5C5348]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-[#c9a962] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#b8954a]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-[#1A1612]">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-[#5C5348]">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-[#c9a962] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#b8954a]"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-[#E0D3C2] bg-white px-4 py-2 text-sm font-medium text-[#1A1612] transition-colors hover:bg-[#F3F0EA]"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AlShubaily | مجموعة خالد سعود الشبيلي" },
      {
        name: "description",
        content: "AlShubaily Group — 18 real estate projects across Saudi Arabia.",
      },
      { name: "author", content: "AlShubaily Group" },
      { property: "og:title", content: "AlShubaily Group" },
      {
        property: "og:description",
        content: "AlShubaily Group — 18 real estate projects across Saudi Arabia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/assets/Alshubaily-logo.png" },
      { rel: "preload", as: "image", href: "/assets/hero/Hero-1.jpg" },
      { rel: "preload", as: "image", href: "/assets/textures/stone-cream.png" },
      { rel: "preload", as: "image", href: "/assets/textures/stone-dark.png" },
      { rel: "preload", as: "image", href: "/assets/textures/slider-stone.png" },
      { rel: "preload", as: "image", href: "/assets/textures/background-creamy.png" },
      { rel: "preload", as: "image", href: "/assets/new-map.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-full bg-plain-cream font-sans text-foreground antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LangProvider>
        <SiteHeader />
        <Outlet />
        <SiteFooter />
      </LangProvider>
    </QueryClientProvider>
  );
}
