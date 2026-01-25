"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function JournalPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Footprint Design - Top Right */}
      <div className="absolute top-20 right-8 md:right-16 lg:right-24 w-32 md:w-40 lg:w-52 h-auto opacity-30 z-0">
        <Image
          src="/photos/footdesign.png"
          alt=""
          width={208}
          height={208}
          className="object-contain"
        />
      </div>

      <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto relative">
          <header
            className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"} transition-all duration-1000`}
          >
            <h1 className="font-display text-[48px] lg:text-[88px] font-normal tracking-[0.05em] uppercase text-white">
              JOURNAL
            </h1>
            <p
              className={`mt-6 md:mt-8 text-lg md:text-xl lg:text-2xl text-white font-cormorant font-light leading-relaxed max-w-3xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} transition-all duration-1000 delay-200`}
            >
              These writings emerge from lived experience — from hospital bed, rehearsal rooms, village trips and rare moments of stillness.
            </p>
          </header>

          {/* Life Title - Centered */}
          <div className="mt-20 md:mt-32 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6">
              Life
            </h2>
            <p className="text-lg md:text-xl text-white/70 font-cormorant font-light italic mb-12">
              A personal reflection on identity, loss, faith, and the quiet courage to begin again.
            </p>
          </div>

          {/* Life Essay Section - Left Aligned */}
          <article className="mt-12 md:mt-16 max-w-4xl relative">
            {/* Footprint Design - Left Side (Top Quarter) */}
            <div className="hidden lg:block absolute -left-28 top-1/4 -translate-y-1/2 w-40 md:w-48 h-auto opacity-25">
              <Image
                src="/photos/footdesign.png"
                alt=""
                width={192}
                height={192}
                className="object-contain"
              />
            </div>

            {/* Footprint Design - Right Side (Halfway) */}
            <div className="hidden lg:block absolute -right-28 top-1/2 -translate-y-1/2 w-40 md:w-48 h-auto opacity-25">
              <Image
                src="/photos/footdesign.png"
                alt=""
                width={192}
                height={192}
                className="object-contain"
              />
            </div>

            {/* My Master's Plan Section */}
            <h3 className="text-2xl md:text-3xl font-display text-white mb-8">
              My Master&apos;s Plan
            </h3>

            <div className="space-y-6 text-white/90 font-cormorant text-lg md:text-xl leading-relaxed">
              <p>
                Remembering those days sends a chill down my spine even today.<br />
                Not really — but indeed, a profound sense of gratitude to the Master and to that Life Force within.<br />
                And do I need to say, I overcame the fear of death to some extent.<br />
                Thus arose a strong belief that life exists after death— and seemed to be more beautiful.<br />
                A short-lived but intense experience of bliss.
              </p>

              <p>
                I was airlifted from Frankfurt to Mumbai after spending 25 days in the ICU of Frankfurt City Hospital, in the first week of June 2013. Amit managed to arrange an air ambulance, and I landed in Mumbai.<br />
                Mausa even says today that I was lucky enough to have survived. The doctors didn&apos;t have much hope, but thankfully, I got admitted. My case was so bad that the doctors did tell my family members that the chances of survival were slim.<br />
                I don&apos;t remember much of my initial days in the ICU, but I was screaming very often. The nurses must have been irritated as other patients were getting disturbed. And my bad - I could not convey to them that I feared darkness in the ICU. The hospital dimmed the lights during the night.<br />
                After a few days, they shifted me to a private room.
              </p>

              <p>
                I was surrounded by family and friends most of the time. More so, by the photographs of my parents, our Spiritual Guru, and Radha-Krishna. These three photos were always on my bed.<br />
                There was an urge to hold them close to my chest. And I did.<br />
                It was during one such instance that I experienced the unreal — for the worldly mind. And the experience was too real to call it a dream.<br />
                I was not seeing anything.<br />
                It was only a feeling.<br />
                And so soothing was the feeling that I was lost in it.<br />
                A state of bliss.<br />
                A state beyond emotions.<br />
                An intense peace pervading the space.<br />
                A state beyond words and meanings. One would only want to cling to such heavenly feelings.<br />
                Maybe, in Hinduism, this is what they call Sat Chit Ananda.<br />
                I have no idea how long this persisted.
              </p>

              <p>
                This state was abruptly broken by a lightning urge and longing, accentuated by a merciful prayer:<br />
                &quot;I have an eight-year-old child.&quot;<br />
                This prayer was immediately followed by a commanding voice:<br />
                &quot;Set her free. She has to take care of her eight-year-old child.&quot;<br />
                And I was sucked back into the body instantly.<br />
                I didn&apos;t remember this incident until a few months later.
              </p>

              <p>
                I recovered slowly and was discharged — only to realise that the real struggle was yet to begin. The body was too weak and energy levels negligible.<br />
                A few days later, I lay on the bed with a fatigued and motionless body, anticipating death at any moment. Thankfully, the brain was slow but functional.<br />
                I assumed this was probably a sign of death approaching.<br />
                I waited for about three days.<br />
                I would look at the Kanha-Radharani photo hung on the wall. It was just a stare. I had no energy to talk to them.<br />
                After three days, I told myself:<br />
                &quot;Leesa, the time has not yet come.<br />
                So you better embrace Life.&quot;<br />
                I am certain it was not me.<br />
                It was an inner voice — as if someone was guiding me from within.<br />
                Is it the same voice that I heard once on the hospital bed?<br />
                Yes.
              </p>

              <p>
                Yes.<br />
                His voice is still loud and clear today:<br />
                &quot;Set her free. She must take care of her eight-year-old child.&quot;<br />
                Whose voice is this?<br />
                Many questions would arise on and off. But I chose to smoothly go with the flow that slowly energised me.<br />
                Sometime in September, I started watching old videos.<br />
                During one such instance, I opened a Word document on my laptop and wrote my first poem — within seconds. I did not think or make any effort at all.<br />
                It was as if my hands moved by themselves, and the poem was right there — for me to read and practice.
              </p>
            </div>
          </article>

          {/* Poem Section with Rangoli Background */}
          <div className="mt-20 md:mt-32 relative max-w-4xl mx-auto">
            {/* Rangoli Design Background - Centered behind poem */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative w-full h-full scale-110 -translate-y-8">
                <Image
                  src="/photos/rangolidesign.png"
                  alt=""
                  fill
                  className="object-contain opacity-35"
                />
              </div>
            </div>
            
            <div className="relative py-12 md:py-16 px-8 md:px-12">
              <div className="text-center space-y-1 text-white font-cormorant text-base md:text-lg leading-normal max-w-xl mx-auto">
                <p>My hands quiver.</p>
                <p>But, I want to paint.</p>
                <p>My legs tremble.</p>
                <p>But, I want to dance.</p>
                <p>My tongue is weak.</p>
                <p>But, I want to talk.</p>
                <p className="pt-2">What an irony.</p>
                <p>What a pity.</p>
                <p className="pt-2">I keep hearing people&apos;s talk — Why you?</p>
                <p>You never did anything wrong.</p>
                <p>I tell them — how do you know</p>
                <p>what the Master&apos;s plan is?</p>
                <p>Only He knows.</p>
                <p>And He never told me.</p>
                <p className="pt-2">I show them all that makes them sad —</p>
                <p>my tremors and my shaky movements.</p>
                <p>But I tell them, Thank God.</p>
                <p>My nerves are dead. But, not all.</p>
                <p>Don&apos;t you see —</p>
                <p>He has given me a chance.</p>
                <p>To look at things afresh.</p>
                <p>Not to be prejudiced or arrogant,</p>
                <p>but to be loving and humble.</p>
                <p className="pt-2">Many a times I think</p>
                <p>it takes more than a lifetime</p>
                <p>to learn these.</p>
                <p>But if this is His wish —</p>
                <p>the One who loves me the most —</p>
                <p>then let it be.</p>
                <p>I will enjoy and cherish every moment of it.</p>
                <p>Thanking Him for making me a better person.</p>
                <p>One that will make Him proud</p>
                <p>that He made me.</p>
              </div>
            </div>

            {/* Footprint Design - Bottom Center */}
            <div className="flex justify-center mt-12 md:mt-16">
              <div className="w-32 md:w-40 lg:w-48 h-auto opacity-30">
                <Image
                  src="/photos/footdesign.png"
                  alt=""
                  width={192}
                  height={192}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Share Your Thoughts Button */}
            <div className="flex justify-end mt-8 md:mt-10">
              <a
                href="mailto:leesa@nirguna.in?subject=Thoughts on Your Journal"
                className="text-white/80 hover:text-white font-cormorant text-sm md:text-base uppercase tracking-wider border border-white/30 hover:border-white px-6 md:px-8 py-3 md:py-4 transition-all duration-300 rounded-sm"
              >
                SHARE YOUR THOUGHTS WITH LEESA
              </a>
            </div>
          </div>

          {/* Second Essay Section - The Day My Smile Left Me */}
          <article className="mt-32 md:mt-40 max-w-4xl relative">
            {/* Rangoli Design Background - Subtle behind text */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
              <div className="relative w-full h-full">
                <Image
                  src="/photos/rangolidesign.png"
                  alt=""
                  fill
                  className="object-contain object-left-top"
                />
              </div>
            </div>

            {/* Footprint Design - Top Right */}
            <div className="hidden lg:block absolute -right-20 top-0 w-40 md:w-48 h-auto opacity-25">
              <Image
                src="/photos/footdesign.png"
                alt=""
                width={192}
                height={192}
                className="object-contain"
              />
            </div>

            {/* Footprint Design - Middle Right */}
            <div className="hidden lg:block absolute -right-24 top-1/2 -translate-y-1/2 w-40 md:w-48 h-auto opacity-25">
              <Image
                src="/photos/footdesign.png"
                alt=""
                width={192}
                height={192}
                className="object-contain"
              />
            </div>

            {/* Article Title */}
            <h3 className="text-2xl md:text-3xl font-display text-white mb-8 relative z-10">
              The Day My Smile Left Me
            </h3>

            <div className="space-y-6 text-white/90 font-cormorant text-lg md:text-xl leading-relaxed relative z-10">
              <p>
                Radheshyam. Jayaguru.<br />
                This is how I used to greet everyone around me daily — with my smile 😛.<br />
                I used to dance. I used to teach dance. I used to talk. I used to work. I used to travel.<br />
                And then one day, I could not do any of this.
              </p>

              <p>
                April 20, 2013, was a Saturday. I was in Frankfurt, Germany, to teach and perform Indian classical dance. It was my second visit to Frankfurt. I was to be there for one month. The morning began with a message from my friend Radhika — "Wishing you the brightest and happiest of days!"<br />
                I did not know then that this was going to be the darkest day of my life.
              </p>

              <p>
                I was teaching at the studio that afternoon. As the class was about to end, I started feeling dizzy. I thought it was because I had not eaten anything since morning. I told my students I needed to rest for a bit. I sat down on the floor. The dizziness did not go away. It got worse.<br />
                My students called my host. She came and took me to the hospital. I do not remember much after that. I was admitted to the ICU. I had suffered a massive stroke.
              </p>

              <p>
                When I regained consciousness, I could not speak. I could not move my right hand or leg. I could not balance myself. I could not smile.<br />
                My smile had left me.<br />
                The day my smile left me was the day I lost my identity — or so I thought.
              </p>

              <p>
                I was in the ICU for 25 days. I do not remember much of those days. I was in and out of consciousness. I was told later that I used to scream a lot. The nurses must have been irritated. Other patients were getting disturbed.<br />
                But I could not help it. I was scared. I was scared of the darkness in the ICU. The hospital used to dim the lights at night. I could not tell them that I was scared. I could not speak.
              </p>

              <p>
                After 25 days, I was airlifted to Mumbai. I was admitted to a hospital there. I do not remember much of those days either. I was still in and out of consciousness.<br />
                But I do remember one thing — I was surrounded by love. My family. My friends. My students. Everyone was there.<br />
                And I remember the photographs — of my parents, of our spiritual Guru, and of Radha-Krishna. These three photographs were always on my bed.<br />
                I used to hold them close to my chest. I do not know why. But I did.
              </p>

              <p>
                And then one day, I had an experience that I cannot explain. I was not seeing anything. I was only feeling.<br />
                And what I was feeling was so soothing that I was lost in it. A state of bliss. A state beyond emotions. An intense peace pervading the space. A state beyond words and meanings.<br />
                I have no idea how long this persisted. Maybe a few seconds. Maybe a few minutes. Maybe an hour. I do not know.
              </p>

              <p>
                This state was abruptly broken by a lightning urge and longing — "I have an eight-year-old child."<br />
                And then I heard a commanding voice — "Set her free. She has to take care of her eight-year-old child."<br />
                And I was sucked back into my body instantly.<br />
                I did not remember this incident until a few months later.
              </p>

              <p>
                I recovered slowly. I was discharged from the hospital. But the real struggle was yet to begin.<br />
                I could not speak properly. I could not write. I could not walk without support. I could not do anything by myself.<br />
                And I still could not smile.
              </p>

              <p>
                But then something happened. I started writing. I do not know how. I do not know why. But I did.<br />
                I wrote my first poem in September 2013. I opened a Word document on my laptop and wrote — within seconds. I did not think. I did not make any effort. It was as if my hands moved by themselves.<br />
                And the poem was right there — for me to read and practice.
              </p>

              <p>
                And then I started dancing again. Slowly. Very slowly. I could not do the steps I used to do. But I could move. I could feel the music. I could express.<br />
                And one day, I smiled again.<br />
                My smile had returned.
              </p>

              <p>
                Today, when I look back, I realize that the day my smile left me was not the day I lost my identity. It was the day I found my true self.<br />
                It was the day I learned that I am not my body. I am not my abilities. I am not my achievements.<br />
                I am the soul. The eternal soul. The soul that is beyond birth and death. The soul that is pure. The soul that is blissful. The soul that is love.
              </p>

              <p>
                And I learned that my smile is not just a physical expression. It is an expression of my inner state. It is an expression of my joy. It is an expression of my gratitude. It is an expression of my love.<br />
                And no stroke can take that away from me.
              </p>
            </div>
          </article>

          {/* Footprint Design - Bottom Center */}
          <div className="flex justify-center mt-20 md:mt-24">
            <div className="w-32 md:w-40 lg:w-48 h-auto opacity-30">
              <Image
                src="/photos/footdesign.png"
                alt=""
                width={192}
                height={192}
                className="object-contain"
              />
            </div>
          </div>

          {/* Share Your Thoughts Button - Bottom Right */}
          <div className="flex justify-end mt-8 md:mt-10">
            <a
              href="mailto:leesa@nirguna.in?subject=Thoughts on Your Journal"
              className="text-white/80 hover:text-white font-cormorant text-sm md:text-base uppercase tracking-wider border border-white/30 hover:border-white px-6 md:px-8 py-3 md:py-4 transition-all duration-300 rounded-sm"
            >
              SHARE YOUR THOUGHTS WITH LEESA
            </a>
          </div>

          {/* Third Section - O Lord, Show Me the Path */}
          <div className="mt-32 md:mt-40">
            {/* Section Title */}
            <h3 className="text-2xl md:text-3xl font-display text-white mb-12 md:mb-16">
              O LORD, SHOW ME THE PATH
            </h3>

            {/* Main Content Area with Rangoli Background and Poem - All Centered */}
            <div className="relative flex justify-center">
              {/* Large Rangoli Design Background - Centered */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-full max-w-4xl h-full">
                  <Image
                    src="/photos/rangolidesign.png"
                    alt=""
                    fill
                    className="object-contain opacity-25"
                  />
                </div>
              </div>

              {/* Poem Text - Centered */}
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="space-y-3 text-white font-cormorant text-lg md:text-xl leading-relaxed">
                  <p>O Lord, show me the path that leads to You</p>
                  <p>The path that is pure and true</p>
                  <p>The path that is free from all doubts and fears</p>
                  <p>The path that wipes away all tears</p>
                  <p className="pt-3">O Lord, show me the path that is bright</p>
                  <p>The path that is filled with Your divine light</p>
                  <p>The path that removes all darkness from within</p>
                  <p>The path that helps me surrender to You and win</p>
                  <p className="pt-3">O Lord, show me the path that is straight</p>
                  <p>The path that leads me to Your divine gate</p>
                  <p>The path where I can rest my head on Your feet</p>
                  <p>The path where I can experience the bliss so sweet</p>
                  <p className="pt-3">O Lord, show me the path that is mine</p>
                  <p>The path that makes me solely Thine</p>
                  <p>The path that helps me realize my true Self</p>
                  <p>The path that takes me away from this worldly shelf</p>
                  <p className="pt-3">O Lord, show me the path today</p>
                  <p>For I am tired of losing my way</p>
                  <p>I surrender myself at Your holy feet</p>
                  <p>Please accept me and make my life complete</p>
                </div>
              </div>

              {/* Footprint Design - Bottom Center, overlapping poem */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 w-24 md:w-32 h-auto opacity-30 z-20">
                <Image
                  src="/photos/footdesign.png"
                  alt=""
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Share Your Thoughts - Below poem, centered */}
            <div className="text-center mt-12 md:mt-16">
              <a
                href="mailto:leesa@nirguna.in?subject=Thoughts on Your Journal"
                className="text-white font-cormorant text-base md:text-lg uppercase tracking-wider transition-opacity duration-300 hover:opacity-70"
              >
                SHARE YOUR THOUGHTS WITH LEESA
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
