import { promises as fs } from "node:fs";
import path from "node:path";

export type ResourceSectionDefinition = {
  slug: string;
  title: string;
  tagline: string;
};

export type ResourceKind = "image" | "video" | "presentation" | "document";

export type ResourceItem = {
  id: string;
  name: string;
  extension: string;
  kind: ResourceKind;
  href: string;
};

export type ResourceSection = ResourceSectionDefinition & {
  items: ResourceItem[];
};

const ASSETS_ROOT = path.join(process.cwd(), "assets");
const RESOURCES_ROOT = path.join(ASSETS_ROOT, "resources");
const PUBLIC_RESOURCES_ROOT = path.join(process.cwd(), "public", "resources");

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".avif",
  ".bmp",
  ".svg",
]);

const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".mov", ".m4v"]);

const PRESENTATION_EXTENSIONS = new Set([".ppt", ".pptx", ".odp", ".key"]);

const DOCUMENT_EXTENSIONS = new Set([".pdf", ".doc", ".docx"]);

export const RESOURCE_SECTIONS: ResourceSectionDefinition[] = [
  {
    slug: "odissi-natyashastra",
    title: "Odissi & Natyashastra",
    tagline: "Practice. Philosophy. Presence.",
  },
  {
    slug: "handlooms-crafts",
    title: "Handlooms & Crafts",
    tagline: "Threads of memory. Acts of making.",
  },
  {
    slug: "arts-entrepreneurship",
    title: "Arts & Entrepreneurship",
    tagline: "Building culture with purpose.",
  },
  {
    slug: "expanding-thought",
    title: "Expanding Thought",
    tagline: "Where ideas continue to evolve.",
  },
];

function toPosixPath(inputPath: string) {
  return inputPath.replaceAll("\\", "/");
}

function cleanFileName(filename: string) {
  const withoutExt = filename.replace(/\.[^.]+$/, "");
  return withoutExt.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
}

function getKind(extension: string): ResourceKind | null {
  if (IMAGE_EXTENSIONS.has(extension)) return "image";
  if (VIDEO_EXTENSIONS.has(extension)) return "video";
  if (PRESENTATION_EXTENSIONS.has(extension)) return "presentation";
  if (DOCUMENT_EXTENSIONS.has(extension)) return "document";
  return null;
}

function toApiAssetUrl(relativePath: string) {
  const segments = toPosixPath(relativePath)
    .split("/")
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment));
  return `/api/assets/${segments.join("/")}`;
}

function toPublicResourceUrl(sectionSlug: string, relativePath: string) {
  const segments = [
    "resources",
    sectionSlug,
    ...toPosixPath(relativePath).split("/").filter(Boolean),
  ].map((segment) => encodeURIComponent(segment));
  return `/${segments.join("/")}`;
}

async function collectFilesRecursive(
  absoluteDir: string,
  relativeDir = ""
): Promise<string[]> {
  try {
    const entries = await fs.readdir(absoluteDir, { withFileTypes: true });
    const output: string[] = [];

    for (const entry of entries) {
      const entryName = String(entry.name);
      const nextRelative = relativeDir
        ? `${relativeDir}/${entryName}`
        : entryName;
      const nextAbsolute = path.join(absoluteDir, entryName);

      if (entry.isDirectory()) {
        const children = await collectFilesRecursive(nextAbsolute, nextRelative);
        output.push(...children);
        continue;
      }

      if (entry.isFile()) {
        output.push(nextRelative);
      }
    }

    return output;
  } catch {
    return [];
  }
}

async function getSectionItems(sectionSlug: string): Promise<ResourceItem[]> {
  const assetsSectionRoot = path.join(RESOURCES_ROOT, sectionSlug);
  const publicSectionRoot = path.join(PUBLIC_RESOURCES_ROOT, sectionSlug);
  const assetsRelativePaths = await collectFilesRecursive(assetsSectionRoot);
  const publicRelativePaths = await collectFilesRecursive(publicSectionRoot);

  const toResourceItem = (
    relativePath: string,
    source: "assets" | "public"
  ) => {
    const extension = path.extname(relativePath).toLowerCase();
    const kind = getKind(extension);
    if (!kind) return null;

    const filename = path.basename(relativePath);
    const label = cleanFileName(filename) || filename;
    const href =
      source === "assets"
        ? toApiAssetUrl(
            toPosixPath(path.join("resources", sectionSlug, relativePath))
          )
        : toPublicResourceUrl(sectionSlug, relativePath);

    return {
      id: `${source}:${sectionSlug}/${relativePath}`,
      name: label,
      extension,
      kind,
      href,
    } satisfies ResourceItem;
  };

  return [
    ...assetsRelativePaths.map((relativePath) => toResourceItem(relativePath, "assets")),
    ...publicRelativePaths.map((relativePath) => toResourceItem(relativePath, "public")),
  ]
    .filter((item): item is ResourceItem => item !== null)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export async function getResourceSectionsWithItems(): Promise<ResourceSection[]> {
  const sections = await Promise.all(
    RESOURCE_SECTIONS.map(async (section) => ({
      ...section,
      items: await getSectionItems(section.slug),
    }))
  );

  return sections;
}
