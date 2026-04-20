import ResourcesLibrary from "@/components/sections/resources-library";
import { getResourceSectionsWithItems } from "@/lib/resources";

export const dynamic = "force-dynamic";

const SANSKRIT_QUOTE =
  "Vidya dadati vinayam, vinayad yati patratam, patratvad dhanam apnoti, dhanat dharmam tatah sukham.";

const ENGLISH_QUOTE =
  "Knowledge gives humility, humility leads to worthiness, worthiness brings wealth, from wealth righteousness is attained, and from that comes happiness.";

export default async function ResourcesPage() {
  const sections = await getResourceSectionsWithItems();

  return (
    <ResourcesLibrary
      sections={sections}
      sanskritQuote={SANSKRIT_QUOTE}
      englishQuote={ENGLISH_QUOTE}
    />
  );
}
