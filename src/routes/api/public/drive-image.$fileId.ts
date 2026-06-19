import { createFileRoute } from "@tanstack/react-router";

const GATEWAY = "https://connector-gateway.lovable.dev/google_drive/drive/v3";

export const Route = createFileRoute("/api/public/drive-image/$fileId")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const lovable = process.env.LOVABLE_API_KEY;
        const conn = process.env.GOOGLE_DRIVE_API_KEY;
        if (!lovable || !conn) {
          return new Response("Drive not configured", { status: 500 });
        }
        const fileId = params.fileId.replace(/[^a-zA-Z0-9_-]/g, "");
        if (!fileId) return new Response("Bad id", { status: 400 });

        const res = await fetch(`${GATEWAY}/files/${fileId}?alt=media`, {
          headers: {
            Authorization: `Bearer ${lovable}`,
            "X-Connection-Api-Key": conn,
          },
        });
        if (!res.ok) {
          return new Response(`Upstream ${res.status}`, { status: res.status });
        }
        const contentType = res.headers.get("content-type") ?? "image/jpeg";
        return new Response(res.body, {
          status: 200,
          headers: {
            "Content-Type": contentType,
            "Cache-Control": "public, max-age=86400, s-maxage=86400",
          },
        });
      },
    },
  },
});
