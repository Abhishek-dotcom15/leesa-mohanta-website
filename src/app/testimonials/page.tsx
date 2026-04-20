import { promises as fs } from "node:fs";
import path from "node:path";
import DomeGallery from "@/components/DomeGallery";

type GalleryImage = { src: string; alt: string };

const ASSETS_ROOT = path.join(process.cwd(), "assets");
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

const FALLBACK_IMAGES: GalleryImage[] = [
  { src: "/photos/gauravgatha.png", alt: "Gaurav Gatha production" },
  { src: "/photos/rajamoja.png", alt: "Raja Mauja performance" },
  { src: "/photos/workdance.png", alt: "Dance and choreography work" },
  { src: "/photos/homedance.png", alt: "Odissi stage moment" },
  { src: "/photos/cultural.png", alt: "Cultural entrepreneurship" },
  { src: "/photos/lessaweave.png", alt: "Handloom weaving heritage" },
  { src: "/photos/amul.jpeg", alt: "Institution and community work" },
  { src: "/photos/rural.png", alt: "Rural management journey" },
  { src: "/photos/dancingfun.png", alt: "Dance documentation and joy" },
];

export const dynamic = "force-dynamic";

function cleanAltText(filename: string) {
  const withoutExt = filename.replace(/\.[^.]+$/, "");
  return withoutExt.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
}

function toApiAssetUrl(relativePath: string) {
  const segments = relativePath.split("/").filter(Boolean).map(encodeURIComponent);
  return `/api/assets/${segments.join("/")}`;
}

async function collectImagePaths(
  absoluteDir: string,
  relativeDir = ""
): Promise<string[]> {
  const entries = await fs.readdir(absoluteDir, { withFileTypes: true });
  const output: string[] = [];

  for (const entry of entries) {
    const nextRelative = relativeDir
      ? `${relativeDir}/${entry.name}`
      : entry.name;
    const nextAbsolute = path.join(absoluteDir, entry.name);

    if (entry.isDirectory()) {
      const childFiles = await collectImagePaths(nextAbsolute, nextRelative);
      output.push(...childFiles);
      continue;
    }

    if (!entry.isFile()) continue;

    const ext = path.extname(entry.name).toLowerCase();
    if (IMAGE_EXTENSIONS.has(ext)) {
      output.push(nextRelative);
    }
  }

  return output;
}

async function getTestimonialsImages(): Promise<GalleryImage[]> {
  try {
    const files = await collectImagePaths(ASSETS_ROOT);
    const sortedFiles = files.sort((a, b) => a.localeCompare(b));

    if (sortedFiles.length === 0) {
      return FALLBACK_IMAGES;
    }

    return sortedFiles.map((relativePath) => {
      const filename = path.basename(relativePath);
      return {
        src: toApiAssetUrl(relativePath),
        alt: cleanAltText(filename) || "Gallery image",
      };
    });
  } catch {
    return FALLBACK_IMAGES;
  }
}

export default async function TestimonialsPage() {
  const images = await getTestimonialsImages();

  return (
    <main className="relative min-h-screen bg-black overflow-hidden pt-28 md:pt-32">
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02) 1px, transparent 1px, transparent 60px)",
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#ff4d33]/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-[520px] w-[520px] rounded-full bg-[#ff4d33]/8 blur-3xl" />
      </div>

      <section className="relative w-full px-3 pb-8 md:px-6 lg:px-8">
        <div className="relative z-20 px-4 text-center">
          <h1 className="font-display text-[38px] tracking-[0.05em] text-white uppercase md:text-[52px] lg:text-[66px]">
            Testimonials
          </h1>
          <p className="mx-auto mt-3 max-w-3xl font-cormorant text-lg text-white/80 md:text-2xl">
            Stories from the journey. Drag to explore and tap any image to open.
          </p>
        </div>

        <div
          className="relative z-10 mx-auto mt-6 w-full max-w-[1900px] overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
          style={{
            height: "calc(100vh - 210px)",
            minHeight: "620px",
          }}
        >
          <DomeGallery
            images={images}
            fit={0.55}
            fitBasis="auto"
            minRadius={560}
            maxRadius={1200}
            padFactor={0.2}
            overlayBlurColor="#000000"
            maxVerticalRotationDeg={6}
            dragSensitivity={18}
            dragDampening={0.8}
            segments={35}
            openedImageWidth="430px"
            openedImageHeight="560px"
            imageBorderRadius="14px"
            openedImageBorderRadius="20px"
            grayscale={false}
            autoRotate
            autoRotateSpeed={8}
          />
        </div>
      </section>
    </main>
  );
}
