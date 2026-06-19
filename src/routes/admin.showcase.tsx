import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { listDriveImages, type DriveImage } from "@/lib/drive.functions";
import {
  SHOWCASE_OVERRIDE_KEY,
  saveShowcaseOverride,
  clearShowcaseOverride,
  loadShowcaseOverride,
} from "@/lib/showcase-override";

export const Route = createFileRoute("/admin/showcase")({
  head: () => ({
    meta: [{ title: "إدارة سلايدر المشاريع — Google Drive" }],
  }),
  component: AdminShowcase,
});

function AdminShowcase() {
  const list = useServerFn(listDriveImages);
  const [folder, setFolder] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [files, setFiles] = useState<DriveImage[]>([]);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [active, setActive] = useState<{ count: number; folderId?: string } | null>(null);

  useEffect(() => {
    const cur = loadShowcaseOverride();
    if (cur) setActive({ count: cur.images.length, folderId: cur.folderId });
  }, []);

  async function handleFetch() {
    if (!folder.trim()) return;
    setLoading(true);
    setError(null);
    setFiles([]);
    try {
      const res = await list({ data: { folder } });
      setFiles(res.files);
      setSelected(new Set(res.files.map((f) => f.id)));
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }

  function toggle(id: string) {
    setSelected((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  }

  function applySync() {
    const chosen = files.filter((f) => selected.has(f.id));
    if (!chosen.length) return;
    const folderId = files.length ? extractFolderId(folder) : undefined;
    const images = chosen.map((f) => `/api/public/drive-image/${f.id}`);
    saveShowcaseOverride({ images, folderId, updatedAt: Date.now() });
    setActive({ count: images.length, folderId });
  }

  function resetDefault() {
    clearShowcaseOverride();
    setActive(null);
  }

  return (
    <div dir="rtl" className="min-h-screen bg-[#0F0D0B] px-4 py-12 text-white md:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-heading text-2xl font-semibold md:text-3xl">
            مزامنة سلايدر المشاريع من Google Drive
          </h1>
          <Link to="/" className="text-sm text-[#C9A962] hover:underline">
            ← العودة للرئيسية
          </Link>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
          <label className="mb-2 block text-sm text-white/70">
            رابط مجلد Google Drive أو معرّف المجلد
          </label>
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              type="text"
              value={folder}
              onChange={(e) => setFolder(e.target.value)}
              placeholder="https://drive.google.com/drive/folders/..."
              className="flex-1 rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-[#C9A962]"
              dir="ltr"
            />
            <button
              type="button"
              onClick={handleFetch}
              disabled={loading || !folder.trim()}
              className="rounded-lg bg-[#C9A962] px-6 py-3 text-sm font-semibold text-[#0F0D0B] transition hover:bg-[#b8954a] disabled:opacity-50"
            >
              {loading ? "جاري الجلب..." : "جلب الصور"}
            </button>
          </div>
          <p className="mt-2 text-xs text-white/40">
            تأكد أن المجلد مشارَك مع الحساب المتصل بـ Google Drive، أو ضمن نفس الحساب.
          </p>

          {active && (
            <div className="mt-4 flex items-center justify-between rounded-lg border border-[#C9A962]/30 bg-[#C9A962]/[0.06] px-4 py-3 text-sm">
              <span>
                المزامنة الحالية: <b>{active.count}</b> صورة
                {active.folderId ? ` — مجلد ${active.folderId.slice(0, 10)}…` : ""}
              </span>
              <button
                type="button"
                onClick={resetDefault}
                className="text-xs text-white/60 hover:text-white"
              >
                استعادة الافتراضي
              </button>
            </div>
          )}

          {error && (
            <div className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </div>
          )}
        </div>

        {files.length > 0 && (
          <div className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-white/70">
                تم العثور على <b>{files.length}</b> صورة — مختار <b>{selected.size}</b>
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setSelected(new Set(files.map((f) => f.id)))}
                  className="rounded-md border border-white/15 px-3 py-1.5 text-xs hover:bg-white/5"
                >
                  تحديد الكل
                </button>
                <button
                  type="button"
                  onClick={() => setSelected(new Set())}
                  className="rounded-md border border-white/15 px-3 py-1.5 text-xs hover:bg-white/5"
                >
                  إلغاء التحديد
                </button>
                <button
                  type="button"
                  onClick={applySync}
                  disabled={!selected.size}
                  className="rounded-md bg-[#C9A962] px-4 py-1.5 text-xs font-semibold text-[#0F0D0B] hover:bg-[#b8954a] disabled:opacity-50"
                >
                  تطبيق المزامنة على السلايدر
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
              {files.map((f) => {
                const isSel = selected.has(f.id);
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => toggle(f.id)}
                    className={`group relative aspect-[4/5] overflow-hidden rounded-xl border transition ${
                      isSel
                        ? "border-[#C9A962] ring-2 ring-[#C9A962]/40"
                        : "border-white/10 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={`/api/public/drive-image/${f.id}`}
                      alt={f.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 truncate bg-black/60 px-2 py-1 text-[10px] text-white/80">
                      {f.name}
                    </div>
                    {isSel && (
                      <span className="absolute right-2 top-2 rounded-full bg-[#C9A962] px-2 py-0.5 text-[10px] font-bold text-[#0F0D0B]">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <p className="mt-10 text-[11px] text-white/30">
          مفتاح التخزين المحلي: <code>{SHOWCASE_OVERRIDE_KEY}</code>
        </p>
      </div>
    </div>
  );
}

function extractFolderId(input: string): string {
  const s = input.trim();
  const m1 = s.match(/folders\/([a-zA-Z0-9_-]+)/);
  if (m1) return m1[1];
  const m2 = s.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (m2) return m2[1];
  return s;
}
