"use client";
import { useState } from "react";
import Image from 'next/image';

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/ceo.jpeg', '/ceo2.jpeg'];

  const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrentIndex((i) => (i + 1) % images.length);

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center py-16 -ml-6 md:-ml-7 -mt-18 md:-mt-34 p-4">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pl-6 items-center">
            <div>
              <p className="text-sm text-gray-500 mb-4 text-center">About</p>
              <h2 className="text-xl md:text-4xl font-semibold mb-4 text-center">
                MEET THE LEAD FACILITATOR{" "}
              </h2>
              <div className="flex items-center justify-center mb-3">
                <div className="w-full max-w-md h-86 md:h-72 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0">
                    <Image
                      src={images[0]}
                      alt="CEO Vivian Chinwendu"
                      fill
                      className={`object-contain transition-opacity duration-500 ${currentIndex === 0 ? 'opacity-100' : 'opacity-0'}`}
                      priority
                    />
                    <Image
                      src={images[1]}
                      alt="CEO Vivian Chinwendu alternate"
                      fill
                      className={`object-contain transition-opacity duration-500 ${currentIndex === 1 ? 'opacity-100' : 'opacity-0'}`}
                      priority
                    />
                  </div>

                  <button onClick={prev} aria-label="Previous slide" className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button onClick={next} aria-label="Next slide" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                    <button onClick={() => setCurrentIndex(0)} aria-label="Go to first slide" className={`w-2 h-2 rounded-full ${currentIndex === 0 ? 'bg-white' : 'bg-white/50'}`} />
                    <button onClick={() => setCurrentIndex(1)} aria-label="Go to second slide" className={`w-2 h-2 rounded-full ${currentIndex === 1 ? 'bg-white' : 'bg-white/50'}`} />
                  </div>
                </div>
              </div>
              <p className="text-gray-600  mb-6 text-left">
                My name is Ezinne Vivian Chinwendu, Lead Facilitator at Vista
                Express Logistics Academy. <br />
                <strong>Vista Express Logistics Academy</strong>, a registered
                brand under CAC, was recently launched as a subsidiary of Vista
                Express Logistics to equip individuals with the skills and
                confidence to begin their journey in importation and e-commerce,
                with focus on sourcing from China, Vietnam, and other
                international markets.
              </p>
              {showMore && (
                <p className="text-gray-600  mb-6 text-left">
                  This is our first official training batch that is why we are
                  providing a startup capital funding of{" "}
                  <strong>₦20,000</strong> for the 20 participants to register
                  for the training as an incentive to help them start Importing
                  immediately after their training.
                  <br /> Over the past years,{" "}
                  <strong>Vista Express Logistics</strong> has successfully
                  assisted over 1,000 clients in sourcing quality products
                  directly from China, providing them with verified suppliers
                  and seamless delivery processes.
                  <br /> I am an importer, consultant, and entrepreneur with
                  vast experience in international trade, product sourcing, and
                  digital business growth. Over the years, I have also mentored
                  thousands of individuals, helping them turn importation and
                  e-commerce into profitable businesses.
                </p>
              )}
              <div className="flex items-center gap-4">
                <button
                  className="px-4 py-2 rounded-full border bg-white text-sm"
                  onClick={() => setShowMore((prev) => !prev)}
                  aria-expanded={showMore}
                >
                  {showMore ? "Show less" : "Learn more"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
