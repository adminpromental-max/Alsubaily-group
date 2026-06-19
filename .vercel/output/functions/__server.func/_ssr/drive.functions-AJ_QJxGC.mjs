import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/drive.functions-AJ_QJxGC.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var GATEWAY = "https://connector-gateway.lovable.dev/google_drive/drive/v3";
function authHeaders() {
	const lovable = process.env.LOVABLE_API_KEY;
	const conn = process.env.GOOGLE_DRIVE_API_KEY;
	if (!lovable || !conn) throw new Error("Google Drive connector is not configured");
	return {
		Authorization: `Bearer ${lovable}`,
		"X-Connection-Api-Key": conn
	};
}
function extractFolderId(input) {
	const s = input.trim();
	const m1 = s.match(/folders\/([a-zA-Z0-9_-]+)/);
	if (m1) return m1[1];
	const m2 = s.match(/[?&]id=([a-zA-Z0-9_-]+)/);
	if (m2) return m2[1];
	return s;
}
var listDriveImages_createServerFn_handler = createServerRpc({
	id: "3de1ca0606cb96216de798cfb731a071ab7dae11da6eae3ef22988a52898a281",
	name: "listDriveImages",
	filename: "src/lib/drive.functions.ts"
}, (opts) => listDriveImages.__executeServer(opts));
var listDriveImages = createServerFn({ method: "POST" }).inputValidator((d) => d).handler(listDriveImages_createServerFn_handler, async ({ data }) => {
	const folderId = extractFolderId(data.folder);
	const q = `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`;
	const url = new URL(`${GATEWAY}/files`);
	url.searchParams.set("q", q);
	url.searchParams.set("pageSize", "200");
	url.searchParams.set("orderBy", "name");
	url.searchParams.set("fields", "files(id,name,mimeType,thumbnailLink)");
	const res = await fetch(url.toString(), { headers: authHeaders() });
	if (!res.ok) {
		const body = await res.text();
		throw new Error(`Drive list failed (${res.status}): ${body.slice(0, 300)}`);
	}
	return {
		folderId,
		files: (await res.json()).files ?? []
	};
});
//#endregion
export { listDriveImages_createServerFn_handler };
