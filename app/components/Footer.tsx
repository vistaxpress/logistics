"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const columns = {
  Explore: ['Home', 'About', 'Product', 'Testimonials', ],
  Services: ['Consulting', 'Mentorship', 'Brand Partnerships',],
  Legal: ['Privacy Policy', 'Terms of Service',],
  Connect: ['Instagram', 'Facebook', ],
  Support: ['Contact us','FAQ',],

}

const Footer = () => {
  const router = useRouter();

  const scrollToId = (id: string, offset = 80) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const handleHomeClick = (e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === 'undefined') return;

    if (window.location.pathname === '/') {
      e?.preventDefault();
      scrollToId('hero', 80);
      return;
    }

    e?.preventDefault();
    router.push('/#hero');
    setTimeout(() => scrollToId('hero', 80), 120);
  };

  const handleScrollTo = (id?: string) => (e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === 'undefined') return;
    if (!id) return;
    if (window.location.pathname === '/') {
      e?.preventDefault();
      scrollToId(id, 80);
      return;
    }
    // Otherwise let the Link perform normal navigation to its href
  };

  return (
    <footer className="bg-gray-50 text-gray-800 -ml-3 -mt-15 p-4">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold">Stay in the loop</h3>
            <p className="mt-2 text-sm text-gray-600">Get exclusive updates and behind-the-scenes access</p>
          </div>

          <div className="md:w-1/2 flex justify-end">
            <form className="w-full max-w-md flex items-center gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent border-b border-gray-300 focus:outline-none py-2 px-2 text-sm"
              />
              <button className="bg-white/20 border border-gray-300 rounded-full px-4 py-2 text-sm shadow-sm hover:cursor-pointer">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
            {Object.entries(columns).map(([title, items]) => (
              <div key={title}>
                <h4 className="font-bold text-sm mb-3">{title}</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {title === 'Explore'
                    ? items.map((it) => {
                        const map: Record<string, { href: string; id?: string }> = {
                          Home: { href: '/', id: 'hero' },
                          About: { href: '/about', id: 'services' },
                          Product: { href: '/product', id: 'product' },
                          Testimonials: { href: '/testimonials', id: 'testimonials' },
                        };
                        const info = map[it] || { href: '#' };

                        if (it === 'Home') {
                          return (
                            <li key={it}>
                              <Link href={info.href} onClick={(e) => handleHomeClick(e)} className="hover:underline">
                                {it}
                              </Link>
                            </li>
                          );
                        }

                        return (
                          <li key={it}>
                            <Link href={info.href} onClick={(e) => handleScrollTo(info.id)(e)} className="hover:underline">
                              {it}
                            </Link>
                          </li>
                        );
                      })
                    : items.map((it) => (
                        <li key={it} className="hover:underline cursor-pointer">{it}</li>
                      ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6 flex  mx-auto items-center justify-between">
            <div className="text-sm text-gray-600  mx-auto">© 2026 Vista Express Logistics</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
