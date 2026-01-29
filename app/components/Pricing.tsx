'use client';
import { useState } from 'react';

const videos = [
  { id: '1', title: 'Product Unboxing: Earphones', thumbnail: '/unboxing-1.jpg', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '2', title: 'Product Unboxing: Smartwatch', thumbnail: '/unboxing-2.jpg', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
];

const Pricing = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="product" className="bg-gray-50 py-20 -ml-5 -mt-16 p-4 pl-3">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-sm font-bold text-gray-500">Product</p>
          <h2 className="mt-4 text-2xl md:text-5xl font-bold">PRODUCT UNBOXING</h2>
          <p className="mt-4 text-gray-600">Discover the latest arrivals — watch short unboxing videos and first impressions.</p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 px-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <div key={v.id} className="bg-white/4 shadow-sm rounded-lg border border-gray-300 p-4 flex flex-col">
              <div className="relative overflow-hidden rounded-md">
                <img src={v.thumbnail} alt={v.title} className="w-full h-64 object-cover rounded-md" />

                <button
                  onClick={() => setActive(v.url)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 text-white"
                  aria-label={`Play ${v.title}`}
                >
                  <div className="bg-white/90 rounded-full p-3 text-black text-xl">▶</div>
                </button>
              </div>

              <div className="mt-4">
                <h3 className="text-base font-semibold">{v.title}</h3>
                <p className="text-sm text-gray-600 mt-2">Quick unboxing and first impressions.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full overflow-hidden">
            <div className="flex justify-end p-2">
              <button onClick={() => setActive(null)} className="text-gray-700 px-3 py-1">Close</button>
            </div>
            <div className="aspect-video">
              <iframe src={active} title="Unboxing video" allowFullScreen className="w-full h-full" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
