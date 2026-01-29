import Link from 'next/link';

const Services = () => {
  return (
    <>
    <div id="services" className="min-h-screen -mt-8 bg-gray-50 py-16 md:-ml-7 -ml-6 p-4 pl-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm text-gray-500">Core</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">What we deliver</h2>
          <p className="text-sm text-gray-600 mt-3">Cut costs, speed deliveries, and gain actionable logistics insights — practical tools and services that help you move goods smarter and grow your business.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 border border-gray-200 rounded-md overflow-hidden flex">
            <div className="w-1/2 bg-gray-200 flex items-center justify-center">
              <div className="w-28 h-20 bg-gray-300 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="14" rx="2" ry="2"/><path d="M8 21h8"/></svg>
              </div>
            </div>
            <div className="w-1/2 p-4 flex flex-col justify-center">
              <p className="text-xs text-gray-500">Learning</p>
              <h3 className="text-base font-semibold mt-2 ">BENEFITS OF MINI-IMPORTATION BUSINESS</h3>
              <p className="text-sm text-gray-600 mt-3">Earn more with low upfront cost, scale faster with reliable sourcing, and cut delivery friction — practical tutorials from industry pros.</p>
              <Link href="/services/see-service" className="mt-4 text-sm text-gray-700 inline-flex items-center gap-2">Explore <span className="text-xl">›</span></Link>
            </div>
          </div>

          <div className="border border-gray-200 rounded-md overflow-hidden flex flex-col">
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              <div className="w-16 h-12 bg-gray-300 rounded-md" />
            </div>
              <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <p className="text-xs text-gray-500">Logistics</p>
                <h4 className="text-base font-semibold mt-2">BENEFITS OF JOINING OUR FIRST OFFICIAL TRAINING BATCH</h4>
                <p className="text-sm text-gray-600 mt-3">Real answers when your supply chain needs them most</p>
              </div>
              <Link href="/services/book-service" className="mt-4 text-sm text-gray-700 inline-flex items-center gap-2">Connect <span className="text-xl">›</span></Link>
            </div>
          </div>
            <div className="border border-gray-200 rounded-md overflow-hidden flex flex-col">
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              <div className="w-16 h-12 bg-gray-300 rounded-md" />
            </div>
              <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <p className="text-xs text-gray-500">Logistics</p>
                <h4 className="text-base font-semibold mt-2">COURSE OVERVIEW FOR ADVANCED CLASS </h4>
                <p className="text-sm text-gray-600 mt-3">Real answers when your supply chain needs them most</p>
              </div>
              <Link href="/services/book-service" className="mt-4 text-sm text-gray-700 inline-flex items-center gap-2">Connect <span className="text-xl">›</span></Link>
            </div>
          </div>
        </div>

        <div className="mt-12" />
      </div>
    </div>
 
    </>
  )
}

export default Services;
