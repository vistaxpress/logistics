"use client";

import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import Footer from './components/Footer';

import About from "./components/About";

import Pricing from "./components/Pricing";
import Services from "./components/Services";
import What from "./components/What";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const slides: { id: number; title: string; content: string; image: string }[] = [
    { id: 1, title: "Importers Forum", content: "Premium shipping services", image: "/s1.jpeg" },
    { id: 2, title: "Fast Delivery", content: "Fast delivery guaranteed", image: "/s2.jpeg" },
    { id: 3, title: "Expert Solutions", content: "Expert logistics solutions", image: "/s3.jpeg" },
    { id: 4, title: "Global Coverage", content: "Global coverage", image: "/s4.jpeg" },
    { id: 5, title: "24/7 Support", content: "24/7 support", image: "/s5.jpeg" },
  ];

  const changeTo = (index: number) => {
    if (index === currentSlide) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsFading(false);
    }, 450);
  };

  const nextSlide = () => {
    changeTo((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    changeTo((currentSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // ensure muted and playsInline so browsers allow autoplay
    v.muted = true;
    v.playsInline = true;
    v.loop = true;
    v.preload = "auto";
    const tryPlay = () => {
      const p = v.play();
      if (p !== undefined) {
        p.catch(() => {
          v.muted = true;
          v.play().catch(() => {});
        });
      }
    };
    tryPlay();
    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };
    const onPause = () => tryPlay();
    document.addEventListener('visibilitychange', onVisibility);
    v.addEventListener('pause', onPause);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      v.removeEventListener('pause', onPause);
    };
  }, []);
  return (
    <>
      <section id="hero" className="bg-gray-50 -mt-14 lg:mt-0 -ml-4 p-4 pl-6">
        <div className="max-w-7xl mx-auto px-5 lg:px-0 pt-20 py-2 lg:py-30 lg:pt-14 ">
          <div className="lg:grid lg:grid-cols-2 lg:items-center gap-10">
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Learn what matters, ship what counts
              </h1>
              <p className="lg:mt-25 mt-6 text-gray-900 max-w-xl">
                Master new skills through our comprehensive tutorials while we
                handle your logistics needs with precision and speed.
              </p>

              <div className="lg:mt-10 mt-4 flex items-center">
                <button className="bg-gradient-to-r from-orange-700 to-orange-500 text-white font-bold px-6 py-3 rounded-full hover:cursor-pointer">
                  Book now
                </button>
                <button className="ml-3 bg-white/8 text-black border-2 border-orange-600/20 font-bold px-5 py-2  rounded-full hover:cursor-pointer">
                  Membership
                </button>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 relative flex justify-between">
              <Image
                src="/yellow.jpg"
                alt="Hero Image"
                width={980}
                height={440}
                className="w-full h-[440px] lg:w-[980px] lg:h-auto object-contain object-center rounded-xl shadow-sm border border-sky-900/30"
                priority
              />
              <video
                ref={videoRef}
                src="/video1.mp4"
                aria-label="Accent Video"
                preload="auto"
                className="absolute -right-2 -top-6 lg:-right-6 md:right-55 w-25 h-26 lg:w-36 lg:h-36 object-cover rounded-2xl shadow-sm border-1 border-orange-600"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
        <style>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0) rotate(0deg); }
            25% { transform: translateX(-5px) rotate(-1deg); }
            50% { transform: translateX(5px) rotate(1deg); }
            75% { transform: translateX(-5px) rotate(-1deg); }
          }
          .shake-button {
            animation: shake 0.5s infinite;
          }
          .shake-button:hover {
            animation: shake 0.3s infinite;
          }
          .carousel-slide {
            transition: opacity 0.5s ease-in-out;
          }
        `}</style>
        <div className="max-w-4xl mx-auto px-5 py-12">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <div className="carousel-slide">
              <div className="w-full relative">
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  width={1200}
                  height={600}
                  className={`w-full h-auto object-contain transition-opacity duration-500 ease-in-out ${
                    isFading ? "opacity-0" : "opacity-100"
                  }`}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-center p-6 bg-black/25 pointer-events-none">
                  <div>
                      <h2
                        className="text-3xl text-white lg:text-4xl font-bold mb-2"
                        style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
                      >
                        {slides[currentSlide].title}
                      </h2>
                    <p className="text-lg lg:text-xl">{slides[currentSlide].content}</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full z-10"
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full z-10"
            >
              &#10095;
            </button>

            <div className="flex justify-center gap-2 py-4 bg-black/30">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeTo(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-orange-600 w-8" : "bg-white/50 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center py-8 px-5">
          <button
            onClick={() => alert('Claim your reward!')}
            className="shake-button -mt-10 bg-gradient-to-r from-orange-700 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-4 px-8 text-center text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center gap-3 cursor-pointer"
          >
            <Image src="/shaky.png" alt="Gift" width={16} height={24} className="w-4 h-6" />
            Claim #20,000 Now.
          </button>
        </div>
      </section>
       <Services />
      <About />
      <Pricing />
      <What />
      <Footer />
   
    </>
  );

};

export default Home;
