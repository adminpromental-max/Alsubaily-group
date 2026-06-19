import { createServerFn } from "@tanstack/react-start";

const GATEWAY = "https://connector-gateway.lovable.dev/google_drive/drive/v3";

function authHeaders() {
  const lovable = process.env.LOVABLE_API_KEY;
  const conn = process.env.GOOGLE_DRIVE_API_KEY;
  if (!lovable || !conn) {
    throw new Error("Google Drive connector is not configured");
  }
  return {
    Authorization: `Bearer ${lovable}`,
    "X-Connection-Api-Key": conn,
  };
}

export type DriveImage = {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink?: string;
};

function extractFolderId(input: string): string {
  const s = input.trim();
  const m1 = s.match(/folders\/([a-zA-Z0-9_-]+)/);
  if (m1) return m1[1];
  const m2 = s.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (m2) return m2[1];
  return s;
}

export const listDriveImages = createServerFn({ method: "POST" })
  .inputValidator((d: { folder: string }) => d)
  .handler(async ({ data }) => {
    const folderId = extractFolderId(data.folder);
    const q = `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`;
    const url = new URL(`${GATEWAY}/files`);
    url.searchParams.set("q", q);
    url.searchParams.set("pageSize", "200");
    url.searchParams.set("orderBy", "name");
    url.searchParams.set(
      "fields",
      "files(id,name,mimeType,thumbnailLink)",
    );

    const res = await fetch(url.toString(), { headers: authHeaders() });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Drive list failed (${res.status}): ${body.slice(0, 300)}`);
    }
    const json = (await res.json()) as { files?: DriveImage[] };
    return { folderId, files: json.files ?? [] };
  });
