# Website Structure Breakdown

## 🧱 1. Hero / Intro Section
**Component:** `src/components/sections/hero.tsx`
**Current Status:** ✅ Complete
**Purpose:** First thing visitors see - Big headline, intro/mission statement, CTA
**Contains:**
- Portrait image of Leesa Mohanty
- Brand name: "LEESA MOHANTY"
- Tagline: "Dance · Weave · Craft · Heritage"
- Mission statement: "I am a dancer shaped by rhythm, a dreamer guided by the loom, a storyteller rooted in heritage..."
- CTA Button: "DIVE IN" (scrolls to about section)

---

## 🧠 2. About / Story Section
**Component:** `src/components/sections/about.tsx`
**Current Status:** ✅ Complete
**Purpose:** Explains who she is and what the business does - Builds connection and trust
**Contains:**
- Headline: "A Life Rooted in Tradition, Reaching for the Future"
- Personal story: Journey from childhood to Odissi, art and enterprise
- Brand values/philosophy: Stories that heal, unite, and inspire
- Background video/image representing the brand

**Additional Context Sections:**
- **RuralManagement** (`src/components/sections/rural-management.tsx`)
  - Explains IRMA background, GCMMF (Amul) experience
  - Institutional leadership and community-driven change
  - Part of the "About" story

---

## 🍽️ 3. Services / Offerings / Features
**Components:**
- `src/components/sections/work-highlights.tsx` ✅
- `src/components/sections/body-of-work.tsx` ✅
- `src/components/sections/journal-nirguna.tsx` ✅

**Purpose:** Show what's provided — the core of the business

### Work Highlights (Services Grid):
1. **Dance & Choreography** - Odissi performances and choreographies
2. **Weaving Hope, Weaving Heritage** - Nirguna handloom revival
3. **Acting & Cinema** - Frames & Narrative (child cine artist)
4. **Designing for Nirguna** - Wearable Weaves
5. **Creativity, Collaboration & Craft Futures** - Projects and programs
6. **Documenting Heritage and Culture** - Essays, talks, publications

### Body of Work (Productions & Events):
**Productions:**
- Gaurav Gatha
- Bhangi Chaahaan (coming soon)
- Nava Nritya Parva

**Events:**
- International Odissi Festival (2001 & 2006)
- Dance of the looms
- Raja Mauja

### Additional Offerings:
- **Journal** - Essays, field notes, reflections (English, Odia, Hindi)
- **Nirguna Handloom** - Handloom textiles and sarees

---

## ⭐ 4. Testimonials / Social Proof
**Component:** ❌ MISSING - Needs to be created
**Purpose:** Builds credibility and trust
**Should Include:**
- Customer/client testimonials
- Star ratings or linked social posts
- Press mentions or reviews
- Partner logos or collaborations
- Awards or recognition

**Status:** Component needs to be created

---

## 📞 5. Contact / Call to Action
**Component:** `src/components/sections/collaboration-contact.tsx`
**Current Status:** ✅ Complete
**Purpose:** Final section for users to take the next step

**Contains:**
- **Collaboration Opportunities:**
  - Sustainable Crafts & Weaver Empowerment
  - Academic & Institutional Collaborations
  - Design & Creative Directorship
  - Special Lectures & Workshops

- **Contact Information:**
  - Phone: +91 90825 59359
  - Email: leesa@nirguna.in
  - Social Links: Instagram, LinkedIn, Twitter, Facebook, Mail

- **CTA Button:** "Join me" / "Let's Connect"

---

## 🧩 Optional Sections (Gallery / Portfolio)
**Component:** Images are distributed across sections
**Current Approach:** Images are embedded within each section (Hero, About, Work Highlights, Body of Work, Journal, Nirguna)
**Could Benefit From:** A dedicated Gallery/Portfolio section if desired

---

## Recommended Page Structure Order:

```tsx
<main>
  1. HeroSection (id="hero")
  2. AboutSection (id="about")
  3. RuralManagement (id="about-rural") // Part of About story
  4. WorkHighlights (id="services") // Services/Offerings
  5. BodyOfWork (id="work") // Productions & Events
  6. JournalNirgunaSection (id="journal") // Additional offerings
  7. TestimonialsSection (id="testimonials") // TO BE CREATED
  8. CollaborationContact (id="contact") // Contact & CTA
</main>
```

---

## Next Steps:
1. ✅ Map existing sections to structure
2. 🔄 Create Testimonials/Social Proof section
3. 🔄 Reorganize page.tsx with proper IDs and structure
4. 🔄 Add navigation/smooth scrolling between sections
5. ✅ Ensure all sections follow semantic HTML structure
