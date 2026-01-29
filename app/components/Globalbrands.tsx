const stats = [
  { value: '500+', title: 'Events hosted', subtitle: 'Public appearances across six continents' },
  { value: '98%', title: 'Client satisfaction rate', subtitle: 'Consistently exceeds expectations' },
  { value: '15M', title: 'Global audience reach', subtitle: 'Influence spanning media and entertainment' },
]

import Image from 'next/image';

const Globalbrands = () => {
  return (
    <section className="bg-gray-50 -ml-7 p-4">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-sm text-gray-500 uppercase tracking-wide">Recognition</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">Trusted by global brands</h2>
          <p className="mt-2 text-sm text-gray-600">Partnerships with Fortune 500 companies worldwide</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            {stats.map((s, i) => (
              <div key={i} className="bg-white/20 border border-gray-200 rounded-xl p-6 max-w-md shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="text-4xl md:text-5xl font-extrabold text-gray-900">{s.value}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{s.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{s.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-xl">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                <Image src="/t1.jpg" alt="app mockups" width={1200} height={420} className="w-full h-[420px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Globalbrands;
