"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WorkPageSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [visibleAwards, setVisibleAwards] = useState<number[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Hero section observer
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const heroSection = document.getElementById('work-hero');
    if (heroSection) {
      heroObserver.observe(heroSection);
      observers.push(heroObserver);
    }

    // Work items observer
    const workObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    // Awards observer
    const awardsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          awards.forEach((_, index) => {
            setTimeout(() => {
              setVisibleAwards(prev => [...prev, index]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    const awardsSection = document.getElementById('awards-section');
    if (awardsSection) {
      awardsObserver.observe(awardsSection);
      observers.push(awardsObserver);
    }

    // Observe work items after a delay to ensure DOM is ready
    setTimeout(() => {
      const workItemElements = document.querySelectorAll('[data-work-item]');
      workItemElements.forEach((el) => {
        workObserver.observe(el);
      });
    }, 100);

    return () => {
      observers.forEach(obs => obs.disconnect());
      workObserver.disconnect();
    };
  }, []);

  const workItems = [
    {
      id: 1,
      title: 'Dance & Choreography',
      subtitle: 'Odissi as Sadhana and Story',
      description1:
        'Trained in Odissi from an early age, Leesa is a senior, auditioned Odissi artist with extensive national and international performance experience. Her relationship with dance goes beyond performance — it is a lifelong practice of discipline, devotion, and inquiry. She has performed at major cultural festivals and institutions in India and abroad, including the Konark Festival, NCPA Mumbai, Natyanjali (Chidambaram), Haridas Samaratha, International Odissi Festivals, ISKCON platforms, SPICMACAY programmes, and venues across Malaysia and the United States.',
      description2:
        'As a choreographer and director, her work includes classical ballets, thematic productions, and research-based choreographies exploring abhinaya, rasa, and narrative. Her productions balance classical rigour with emotional accessibility, allowing tradition to remain grounded while speaking to contemporary audiences.',
      quote: '"For me, Odissi is not performance. It is sadhana."',
      image: '/photos/workdance.png',
    },
    {
      id: 2,
      title: 'Acting & Cinema',
      subtitle: 'Early Expression and Narrative Sensibility',
      description1:
        'Leesa began her artistic journey as a child actor in acclaimed Odia cinema, receiving the Best Child Artist Award for Basanta Raas. She went on to act in several award-winning films and stage productions, developing an early sensitivity to storytelling, expression, and character.',
      description2:
        'This foundation in cinema continues to inform her work across disciplines — particularly her attention to emotional nuance, timing, and inner life, which subtly shape her dance, choreography, and narrative sensibility.',
      quote: '"The camera taught me what the stage later deepened — how emotion breathes."',
      image: '/photos/Acting & Cinema (1).png',
    },
    {
      id: 3,
      title: 'Teaching, Training & Research',
      subtitle: 'Learning as Practice',
      description1:
        'With over two decades of experience in academics and training, Leesa has worked as a faculty member, trainer, and programme designer across management institutes, cultural institutions, and grassroots organisations.',
      description2:
        'Her teaching and training engagements include management education (HR, organisational behaviour, and performance systems), executive and leadership training, dance pedagogy workshops, and interdisciplinary learning programmes that link the arts with experiential education.',
      description3:
        'She is the author of Dancing is Fun! — an alternative approach to teaching Indian classical dance through embodied learning and play. Her academic grounding includes a Post Graduate Diploma in Rural Management (IRMA, Anand) and doctoral research in organisational culture.',
      quote: '"Learning begins when the body participates."',
      image: '/photos/Teaching2 (1).png',
    },
    {
      id: 4,
      title: 'Cultural Entrepreneurship',
      subtitle: 'Nirguna',
      description1:
        'Founded in 2014, Nirguna is a cultural enterprise working closely with weavers and artisans across India. The initiative focuses on the revival of endangered handloom traditions, ethical production systems, and design development rooted in traditional knowledge.',
      description2:
        'Under Leesa\'s leadership, Nirguna has revived forgotten and declining weaves — including Dhalapatbara — while creating sustainable, respectful market pathways for artisan communities. The work foregrounds dignity, continuity, and cultural integrity over trend-driven production.',
      description3:
        'In recognition of her contribution to the handloom sector, Leesa was awarded the SheShakti Award (2023).',
      quote: '"Revival begins with respect — for the loom, the hand, and the human."',
      image: '/photos/cultural.png',
    },
    {
      id: 5,
      title: 'Institution Building & Culture',
      subtitle: 'Nirguna Trust & Centre for Excellence',
      description1:
        'As Founder Trustee of Nirguna Trust, Leesa works at the intersection of culture, livelihoods, and education. The Trust focuses on research, documentation, capacity-building, and long-term support for artists, artisans, and cultural practitioners beyond purely commercial frameworks.',
      description2:
        'Through the Nirguna Centre for Excellence, this work extends into structured learning, interdisciplinary practice, and cultural research — creating spaces where tradition, inquiry, and contemporary relevance coexist.',
      description3:
        'Her approach to institution-building is deeply informed by her early professional experience in HR and organisation development, including her role at GCMMF (Amul), where she worked on training systems, organisational design, and people-centric leadership.',
      quote: '"Culture survives when it is held collectively."',
      image: '/photos/5 Nirguna Trust and Institution Building (1).png',
    },
    {
      id: 6,
      title: 'Organising & Cultural',
      subtitle: 'Conceptualizing & Catalyzing Cultural Spaces',
      description1:
        'Leesa has conceptualised and organised large-scale cultural events, including national and international Odissi festivals, curated performance series, and multi-day cultural programmes. These initiatives bring together dancers, musicians, scholars, artists, and younger practitioners in spaces of dialogue and shared learning.',
      description2:
        'Her leadership emphasises continuity, collaboration, and care, rather than spectacle — ensuring that cultural ecosystems remain alive, ethical, and inclusive.',
      quote: '"Culture lives through people — and must be nurtured with care."',
      image: '/6Cultural (1).png',
    },
  ];

  const awards = [
    'SheShakti Award — Network18 / CNBC-TV18',
    'Junior Fellowship — Department of Culture, Government of India',
    'Senior Merit Scholarship — Department of Culture, Government of India',
    'Rasaamruta Sambardini — Temple of Fine Arts International (Malaysia)',
    'Best Child Artist Award — Government of Odisha',
  ];

  return (
    <main id="work-section" className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] right-[5%] w-[200px] h-[200px] bg-[#ff4d33]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[150px] h-[150px] bg-[#ff4d33]/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Subtle background grain effect */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255, 77, 51, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 77, 51, 0.02) 0%, transparent 50%)
          `,
          animation: 'subtleShift 20s ease-in-out infinite'
        }}
      />

      {/* Hero Section */}
      <section id="work-hero" className="px-6 md:px-12 lg:px-16 pt-16 md:pt-20 pb-8 md:pb-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'} transition-all duration-1000`}>
            <h1 className="font-display text-[48px] md:text-[64px] lg:text-[88px] font-normal tracking-[0.05em] uppercase relative inline-block mb-6 group">
              <span className="bg-gradient-to-br from-white via-white to-[#ff4d33] bg-clip-text text-transparent inline-block animate-text-reveal">
                Work
              </span>
              <span className="absolute bottom-[-15px] left-0 w-0 h-[2px] bg-[#ff4d33] animate-expand-line"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff4d33]/0 via-[#ff4d33]/20 to-[#ff4d33]/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            </h1>
            <p className={`text-xl md:text-2xl font-light text-white/70 max-w-3xl ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} transition-all duration-1000 delay-300`}>
              A Practice Rooted in Culture, Community, and Care
            </p>
          </div>

          <div className={`space-y-6 mb-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000 delay-200`}>
            <p className={`text-base md:text-lg text-white/70 leading-relaxed max-w-4xl font-light ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700 delay-400`}>
              Leesa Mohanty's work spans classical dance, cinema, choreography, education, rural management, and cultural entrepreneurship. Across these domains, one thread remains constant: a commitment to living traditions, people-centred institutions, and creative practices that serve society.
            </p>

            <p className={`text-base md:text-lg text-white/70 leading-relaxed max-w-4xl font-light ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700 delay-600`}>
              Her work is not episodic. It is cumulative — shaped by years of artistic discipline, academic inquiry, grassroots engagement, and institution-building.
            </p>

            <p className={`text-base md:text-lg font-display italic text-[#ff4d33] mb-4 relative inline-block ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-700 delay-800`}>
              <span className="absolute -left-4 top-0 text-[#ff4d33]/30 text-4xl">"</span>
              <span className="relative z-10">My work is cumulative — shaped by practice, people, and purpose.</span>
              <span className="absolute -right-4 bottom-0 text-[#ff4d33]/30 text-4xl">"</span>
            </p>
          </div>

          <div className={`border-b border-white/10 pb-4 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'} transition-all duration-1000 delay-1000 origin-left`}></div>
        </div>
      </section>

      {/* Work Items */}
      <section className="px-6 md:px-12 lg:px-16 pt-4 pb-16 md:pb-24 relative z-10">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
          {workItems.map((item, index) => (
            <div 
              key={item.id}
              data-work-item
              data-index={index}
              className={`group ${visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}
            >
              {/* Index */}
              <div className={`mb-8 ${visibleItems.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} transition-all duration-500 delay-200`}>
                <span className="inline-block text-sm font-display text-[#ff4d33]/70 tracking-wide relative group-hover:text-[#ff4d33] transition-colors duration-300">
                  <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#ff4d33] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  0{index + 1}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className={`mb-12 ${visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-300`}>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-3 text-white group-hover:text-[#ff4d33] transition-colors duration-500 relative inline-block">
                  <span className="relative z-10">{item.title}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ff4d33] group-hover:w-full transition-all duration-700"></span>
                </h2>
                <p className="text-lg md:text-xl text-white/70 font-light group-hover:text-white/90 transition-colors duration-300">
                  {item.subtitle}
                </p>
              </div>

              {/* Content Grid */}
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12 ${visibleItems.includes(index) ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 delay-400`}>
                {/* Text Content */}
                <div className="flex flex-col justify-start space-y-6">
                  <p className={`text-base md:text-lg leading-relaxed text-white/70 font-light ${visibleItems.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-700 delay-500`}>
                    {item.description1}
                  </p>
                  <p className={`text-base md:text-lg leading-relaxed text-white/70 font-light ${visibleItems.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-700 delay-600`}>
                    {item.description2}
                  </p>
                  {item.description3 && (
                    <p className={`text-base md:text-lg leading-relaxed text-white/70 font-light ${visibleItems.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-700 delay-700`}>
                      {item.description3}
                    </p>
                  )}
                  <div className={`relative ${visibleItems.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-700 delay-800`}>
                    <p className="font-display italic text-[#ff4d33] mb-8 text-lg relative pl-6 border-l-2 border-[#ff4d33]/30 group-hover:border-[#ff4d33] transition-colors duration-300">
                      <span className="absolute left-0 top-0 text-[#ff4d33]/20 text-3xl -translate-x-2">"</span>
                      <span className="relative z-10">{item.quote}</span>
                      <span className="absolute right-0 bottom-0 text-[#ff4d33]/20 text-3xl translate-x-2">"</span>
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative overflow-hidden rounded-lg aspect-square md:aspect-auto md:h-96 bg-[#1a1a1a]/30 group/image hover-scale ${visibleItems.includes(index) ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-2'} transition-all duration-700 delay-500`}>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.title} showcase`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/image:scale-110 grayscale group-hover/image:grayscale-0"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                  {/* Glowing border on hover */}
                  <div className="absolute inset-0 border-2 border-[#ff4d33]/0 group-hover/image:border-[#ff4d33]/50 transition-all duration-500 rounded-lg shadow-[0_0_30px_rgba(255,77,51,0.3)] group-hover/image:shadow-[0_0_50px_rgba(255,77,51,0.5)]"></div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover/image:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </div>

              {/* Divider */}
              {index !== workItems.length - 1 && (
                <div className={`border-b border-white/10 pt-12 relative ${visibleItems.includes(index) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'} transition-all duration-700 delay-1000 origin-center`}>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section id="awards-section" className="px-6 md:px-12 lg:px-16 py-20 md:py-32 bg-black/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000 delay-300`}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white relative inline-block group">
              <span className="relative z-10">Awards & Recognition</span>
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ff4d33] group-hover:w-full transition-all duration-700"></span>
            </h2>
            <p className="text-base md:text-lg text-white/70 font-light">
              Selected
            </p>
          </div>

          {/* Awards List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {awards.map((award, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-6 bg-[#0a0a0a] rounded-lg border border-white/10 hover:border-[#ff4d33]/50 transition-all duration-300 group hover-lift relative overflow-hidden ${
                  visibleAwards.includes(index) 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-10 scale-95'
                }`}
              >
                <span className="text-[#ff4d33] font-display text-xl font-bold flex-shrink-0 mt-1 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                  ★
                </span>
                <p className="text-base md:text-lg text-white group-hover:text-[#ff4d33] transition-colors leading-relaxed relative z-10">
                  {award}
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d33]/0 via-[#ff4d33]/5 to-[#ff4d33]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
            ))}
          </div>

          {/* Closing Quote */}
          <div className={`text-center pt-12 border-t border-white/10 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-1000 delay-500`}>
            <p className="text-xl md:text-2xl font-display italic text-[#ff4d33] relative inline-block">
              <span className="absolute -left-6 top-0 text-[#ff4d33]/30 text-4xl">"</span>
              <span className="relative z-10">Culture lives through people — and must be nurtured with care.</span>
              <span className="absolute -right-6 bottom-0 text-[#ff4d33]/30 text-4xl">"</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 md:px-12 lg:px-16 py-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-white/60 text-sm">
          <p>&copy; 2024 Work Practice. Rooted in Culture, Community, and Care.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes expand-line {
          to {
            width: 180px;
          }
        }

        @keyframes subtleShift {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        @keyframes text-reveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 77, 51, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 77, 51, 0.6);
          }
        }

        .animate-expand-line {
          animation: expand-line 1.5s ease forwards 0.5s;
        }

        .animate-text-reveal {
          animation: text-reveal 1s ease forwards;
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .hover-scale {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-scale:hover {
          transform: scale(1.02);
        }
      `}</style>
    </main>
  );
};

export default WorkPageSection;
