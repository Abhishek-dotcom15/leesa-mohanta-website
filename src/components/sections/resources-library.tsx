"use client";

import { useMemo, useState } from "react";
import {
  BookOpenText,
  FileText,
  Image as ImageIcon,
  PlayCircle,
  Presentation,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import type { ResourceItem, ResourceSection } from "@/lib/resources";

type ResourceFilter = "all" | ResourceItem["kind"];

type ResourcesLibraryProps = {
  sections: ResourceSection[];
  sanskritQuote: string;
  englishQuote: string;
};

const FILTERS: { value: ResourceFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "presentation", label: "Presentations" },
  { value: "image", label: "Images" },
  { value: "video", label: "Videos" },
  { value: "document", label: "Documents" },
];

const KIND_META: Record<
  ResourceItem["kind"],
  {
    label: string;
    icon: LucideIcon;
    badgeClass: string;
  }
> = {
  image: {
    label: "Image",
    icon: ImageIcon,
    badgeClass: "border-[#ff4d33]/45 text-[#ffc4b8]",
  },
  video: {
    label: "Video",
    icon: PlayCircle,
    badgeClass: "border-[#ff6a50]/45 text-[#ffd8d0]",
  },
  presentation: {
    label: "Presentation",
    icon: Presentation,
    badgeClass: "border-[#ff7a61]/45 text-[#ffe3dc]",
  },
  document: {
    label: "Document",
    icon: FileText,
    badgeClass: "border-[#ff8c76]/45 text-white",
  },
};

function extensionLabel(extension: string) {
  return extension.replace(".", "").toUpperCase();
}

function getCounts(items: ResourceItem[]) {
  return items.reduce(
    (acc, item) => {
      acc[item.kind] += 1;
      return acc;
    },
    {
      image: 0,
      video: 0,
      presentation: 0,
      document: 0,
    }
  );
}

function ResourceTile({
  item,
  featured,
}: {
  item: ResourceItem;
  featured?: boolean;
}) {
  const meta = KIND_META[item.kind];
  const Icon = meta.icon;

  if (item.kind === "image") {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block overflow-hidden rounded-[24px] border border-white/12 bg-[#090909] transition duration-700 hover:border-[#ff4d33]/45 hover:shadow-[0_14px_36px_rgba(255,77,51,0.16)] ${
          featured ? "sm:col-span-2" : ""
        }`}
      >
        <div className={featured ? "relative aspect-[16/9]" : "relative aspect-[4/3]"}>
          <img
            src={item.href}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 font-franklin text-[10px] uppercase tracking-[0.13em] text-white/85">
            {meta.label}
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="break-words font-cormorant text-[24px] leading-[1.1] text-white">
              {item.name}
            </p>
          </div>
        </div>
      </a>
    );
  }
  const isDocumentOrPresentation = item.kind === "document" || item.kind === "presentation" || item.kind === "video";
  const secureHref = isDocumentOrPresentation 
    ? `/resources/view?file=${encodeURIComponent(item.href.replace('/resources/', ''))}` 
    : item.href;

  return (
    <a
      href={secureHref}
      target={isDocumentOrPresentation ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="group block rounded-[22px] border border-white/12 bg-[#0b0b0b] p-5 transition duration-700 hover:border-[#ff4d33]/45 hover:bg-[#111111]"
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 rounded-xl border border-white/15 bg-white/[0.03] p-2.5 text-[#ffad9b]">
          <Icon className="h-[18px] w-[18px]" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="font-franklin text-[10px] uppercase tracking-[0.14em] text-white/60">
              {meta.label}
            </p>
            <span
              className={`rounded-full border px-2 py-[3px] font-franklin text-[9px] uppercase tracking-[0.14em] ${meta.badgeClass}`}
            >
              {extensionLabel(item.extension)}
            </span>
          </div>

          <p className="mt-2 break-words font-cormorant text-[24px] leading-[1.12] text-white transition duration-700 group-hover:text-[#ffd8cf]">
            {item.name}
          </p>
        </div>
      </div>
    </a>
  );
}

export default function ResourcesLibrary({
  sections,
  sanskritQuote,
  englishQuote,
}: ResourcesLibraryProps) {
  const [activeSlug, setActiveSlug] = useState<string>(sections[0]?.slug ?? "");
  const [filter, setFilter] = useState<ResourceFilter>("all");

  const activeSection =
    useMemo(
      () => sections.find((section) => section.slug === activeSlug),
      [sections, activeSlug]
    ) ?? sections[0];

  if (!activeSection) {
    return (
      <main className="min-h-screen bg-black px-6 pb-16 pt-32 text-white md:px-12 lg:px-16">
        <p className="font-franklin text-sm uppercase tracking-[0.16em] text-white/70">
          Resource sections are not configured yet.
        </p>
      </main>
    );
  }

  const counts = getCounts(activeSection.items);
  const filteredItems =
    filter === "all"
      ? activeSection.items
      : activeSection.items.filter((item) => item.kind === filter);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[2%] top-[14%] h-[260px] w-[260px] rounded-full bg-[#ff4d33]/10 blur-3xl" />
        <div className="absolute bottom-[6%] right-[3%] h-[340px] w-[340px] rounded-full bg-[#ff4d33]/8 blur-3xl" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.025), rgba(255,255,255,0.025) 1px, transparent 1px, transparent 56px)",
        }}
      />

      <section className="relative z-10 px-6 pb-10 pt-28 md:px-12 lg:px-16 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <p className="font-franklin text-[10px] uppercase tracking-[0.2em] text-[#ff9a87]">
            Resource Library
          </p>
          <h1 className="mt-3 font-display text-[42px] leading-[0.95] md:text-[60px] lg:text-[76px]">
            Knowledge Atlas
          </h1>
          <p className="mt-4 max-w-3xl font-cormorant text-[30px] leading-[1.18] text-[#ffd5cc]">
            Practice, craft, and thought curated as evolving collections.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <blockquote className="rounded-[24px] border border-white/14 bg-white/[0.03] p-6 backdrop-blur-sm md:p-7">
              <p className="font-cormorant text-[28px] leading-[1.33] text-white">
                {sanskritQuote}
              </p>
            </blockquote>
            <blockquote className="rounded-[24px] border border-white/14 bg-white/[0.03] p-6 backdrop-blur-sm md:p-7">
              <p className="font-cormorant text-[22px] leading-[1.45] text-white/85">
                {englishQuote}
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-24 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[360px_1fr]">
          <aside className="rounded-[24px] border border-white/14 bg-[#0b0b0b]/95 p-5 md:p-6">
            <div className="mb-5 flex items-center gap-2 text-[#ffab99]">
              <Sparkles className="h-4 w-4" />
              <p className="font-franklin text-[10px] uppercase tracking-[0.15em]">
                Collections
              </p>
            </div>

            <div className="space-y-2.5">
              {sections.map((section, index) => {
                const isActive = section.slug === activeSection.slug;
                return (
                  <button
                    key={section.slug}
                    type="button"
                    onClick={() => {
                      setActiveSlug(section.slug);
                      setFilter("all");
                    }}
                    className={`w-full rounded-2xl border px-4 py-4 text-left transition duration-500 ${
                      isActive
                        ? "border-[#ff4d33]/55 bg-[#ff4d33]/10"
                        : "border-white/12 bg-black/35 hover:border-[#ff4d33]/35 hover:bg-white/[0.03]"
                    }`}
                  >
                    <p className="font-franklin text-[9px] uppercase tracking-[0.16em] text-white/50">
                      Section {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 break-words text-balance font-cormorant text-[31px] leading-[1.02] text-white">
                      {section.title}
                    </p>
                    <p className="mt-1.5 font-cormorant text-[19px] text-[#ffb9aa]">
                      {section.tagline}
                    </p>
                  </button>
                );
              })}
            </div>

          </aside>

          <section className="rounded-[24px] border border-white/14 bg-[#090909]/95 p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <BookOpenText className="h-4 w-4 text-[#ffab99]" />
                  <p className="font-franklin text-[10px] uppercase tracking-[0.15em] text-white/60">
                    Active Collection
                  </p>
                </div>
                <h2 className="mt-2 break-words text-balance font-cormorant text-[40px] leading-[0.96] text-white">
                  {activeSection.title}
                </h2>
                <p className="mt-1 font-cormorant text-[22px] text-[#ffb9aa]">
                  {activeSection.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {FILTERS.map((entry) => {
                  const count =
                    entry.value === "all" ? activeSection.items.length : counts[entry.value];
                  const isActive = entry.value === filter;

                  return (
                    <button
                      key={entry.value}
                      type="button"
                      onClick={() => setFilter(entry.value)}
                      className={`rounded-full border px-3 py-1.5 font-franklin text-[10px] uppercase tracking-[0.13em] transition ${
                        isActive
                          ? "border-[#ff4d33]/55 bg-[#ff4d33]/12 text-white"
                          : "border-white/15 bg-black/45 text-white/70 hover:border-[#ff4d33]/40 hover:text-white"
                      }`}
                    >
                      {entry.label} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {activeSection.items.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/12 bg-black/45 px-3 py-1 font-franklin text-[10px] uppercase tracking-[0.12em] text-white/70">
                  Total {activeSection.items.length}
                </span>
                <span className="rounded-full border border-white/12 bg-black/45 px-3 py-1 font-franklin text-[10px] uppercase tracking-[0.12em] text-white/70">
                  Media {counts.image + counts.video}
                </span>
                <span className="rounded-full border border-white/12 bg-black/45 px-3 py-1 font-franklin text-[10px] uppercase tracking-[0.12em] text-white/70">
                  Reference {counts.presentation + counts.document}
                </span>
              </div>
            )}

            <div className="mt-6">
              {filteredItems.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {filteredItems.map((item, index) => (
                    <ResourceTile
                      key={item.id}
                      item={item}
                      featured={index === 0 && filteredItems.length > 2}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-[22px] border border-dashed border-white/20 bg-black/40 p-8 text-center">
                  <p className="font-franklin text-[10px] uppercase tracking-[0.16em] text-white/55">
                    No files found
                  </p>
                  <p className="mt-2 font-cormorant text-[25px] text-white/85">
                    Coming Soon
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
