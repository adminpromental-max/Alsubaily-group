import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { dammamAsset } from "@/data/asset-paths";
import { useLang } from "@/contexts/lang-context";

type RegionImageSliderProps = {
  files: string[];
  altAr: string;
  altEn: string;
};

export function RegionImageSlider({ files, altAr, altEn }: RegionImageSliderProps) {
  const { t, lang } = useLang();
  const [active, setActive] = useState(0);
  const alt = t(altAr, altEn);

  const next = useCallback(
    () => setActive((prev) => (prev + 1) % files.length),
    [files.length],
  );
  const prev = useCallback(
    () => setActive((prev) => (prev - 1 + files.length) % files.length),
    [files.length],
  );

  useEffect(() => {
    if (files.length <= 1) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [files.length, next]);

  if (files.length === 0) return null;

  const PrevIcon = lang === "ar" ? ChevronRight : ChevronLeft;
  const NextIcon = lang === "ar" ? ChevronLeft : ChevronRight;

  return (
    <>
      {files.map((file, index) => (
        <img
          key={file}
          src={dammamAsset(file)}
          alt={alt}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-in-out ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
          loading={index === 0 ? "eager" : "lazy"}
        />
      ))}

      {files.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="olympic-region-slider-btn olympic-region-slider-btn--prev"
            aria-label={t("السابق", "Previous")}
          >
            <PrevIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            className="olympic-region-slider-btn olympic-region-slider-btn--next"
            aria-label={t("التالي", "Next")}
          >
            <NextIcon className="h-4 w-4" />
          </button>
          <div className="olympic-region-slider-dots">
            {files.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                className={`olympic-region-slider-dot ${
                  index === active ? "olympic-region-slider-dot--active" : ""
                }`}
                aria-label={t(`صورة ${index + 1}`, `Image ${index + 1}`)}
                aria-current={index === active ? "true" : undefined}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
