import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

const ASSETS_ROOT = path.resolve(process.cwd(), "assets");
const ALLOWED_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".avif",
  ".bmp",
  ".svg",
  ".pdf",
  ".ppt",
  ".pptx",
  ".odp",
  ".key",
  ".doc",
  ".docx",
  ".mp4",
  ".webm",
  ".mov",
  ".m4v",
]);

const CONTENT_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".avif": "image/avif",
  ".bmp": "image/bmp",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".ppt": "application/vnd.ms-powerpoint",
  ".pptx":
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ".odp": "application/vnd.oasis.opendocument.presentation",
  ".key": "application/vnd.apple.keynote",
  ".doc": "application/msword",
  ".docx":
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mov": "video/quicktime",
  ".m4v": "video/x-m4v",
};

function isPathInsideAssets(absPath: string) {
  const normalizedRoot = `${ASSETS_ROOT}${path.sep}`;
  return absPath === ASSETS_ROOT || absPath.startsWith(normalizedRoot);
}

function decodePathSegments(segments: string[]) {
  return segments.map((segment) => {
    try {
      return decodeURIComponent(segment);
    } catch {
      return segment;
    }
  });
}

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  context: { params: Promise<{ filePath?: string[] }> }
) {
  const params = await context.params;
  const rawSegments = Array.isArray(params.filePath) ? params.filePath : [];
  if (rawSegments.length === 0) {
    return NextResponse.json({ error: "Missing file path" }, { status: 400 });
  }

  const decodedSegments = decodePathSegments(rawSegments);
  const relativePath = path.join(...decodedSegments);
  const absolutePath = path.resolve(ASSETS_ROOT, relativePath);

  if (!isPathInsideAssets(absolutePath)) {
    return NextResponse.json({ error: "Invalid file path" }, { status: 403 });
  }

  const extension = path.extname(absolutePath).toLowerCase();
  if (!ALLOWED_EXTENSIONS.has(extension)) {
    return NextResponse.json({ error: "Unsupported file type" }, { status: 415 });
  }

  try {
    const stat = await fs.stat(absolutePath);
    if (!stat.isFile()) {
      return NextResponse.json({ error: "Asset not found" }, { status: 404 });
    }

    const fileBuffer = await fs.readFile(absolutePath);
    const contentType = CONTENT_TYPES[extension] ?? "application/octet-stream";

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return NextResponse.json({ error: "Asset not found" }, { status: 404 });
  }
}
