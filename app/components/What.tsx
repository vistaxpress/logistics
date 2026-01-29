'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const What = () => {
  const slides = [
    { image: '/shaky.png', title: 'Trusted by professionals', content: 'The professionalism and impact were beyond what we expected. Every detail was handled with precision.' },
    { image: '/shaky.png', title: 'Transformative partnership', content: "A transformative partnership that elevated our brand in ways we hadn't imagined possible." },
    { image: '/shaky.png', title: 'Engaging & authentic', content: 'Authentic, engaging, and worth every investment. The audience response was electric.' },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
        setIsFading(false);
      }, 300);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const prevSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
      setIsFading(false);
    }, 200);
  };

  const nextSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
      setIsFading(false);
    }, 200);
  };

  const changeTo = (index: number) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsFading(false);
    }, 200);
  };

  return (
    <section id="testimonials" className="bg-gray-50 py-14 pb-20 -ml-3 p-4 -mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-2">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Testimonials</h2>
          <p className="text-sm text-gray-500 mt-2">Proven results from those who know</p>
        </header>

        <style jsx>{`
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
                  className={`w-full h-auto object-contain transition-opacity duration-500 ease-in-out ${isFading ? "opacity-0" : "opacity-100"}`}
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
                  className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-orange-600 w-8" : "bg-white/50 hover:bg-white"}`}
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
      </div>
    </section>
  )
}

export default What;
