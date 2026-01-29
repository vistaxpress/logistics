"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

type ClassProp = string | ((opts: { isActive: boolean }) => string);

function NavLink({
  href,
  children,
  className,
  exact = false,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: ClassProp;
  exact?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const pathname = usePathname() ?? "/";
  const isActive =
    href === "/"
      ? pathname === "/"
      : exact
      ? pathname === href
      : pathname.startsWith(href);
  const resolvedClass =
    typeof className === "function"
      ? className({ isActive })
      : className ?? (isActive ? "text-orange-500" : "hover:text-orange-600");

  return (
    <Link href={href} className={resolvedClass} onClick={(e) => onClick?.(e)}>
      {children}
    </Link>
  );
} 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState<string | null>(null);

  const scrollToId = (id: string, offset = 80) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }; // default offset ≈ pt-20 (5rem ≈ 80px)

  const handleHomeClick = (e?: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    if (typeof window === 'undefined') return;

    if (window.location.pathname === '/') {
      e?.preventDefault();
      scrollToId('hero', 80); // use pt-20 offset
      return;
    }

    e?.preventDefault();
    router.push('/#hero');
    setTimeout(() => scrollToId('hero', 80), 120);
  };

  const handleScrollTo = (id: string) => (e?: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    if (typeof window === 'undefined') return;

    // If we're on the homepage, intercept the click and smooth-scroll to the section.
    if (window.location.pathname === '/') {
      e?.preventDefault();
      scrollToId(id, 80); // use pt-20 offset
      return;
    }

    // If we're on any other page, allow the Link to perform normal navigation to its `href`
    // (e.g. '/about' or '/product') so routing and `isActive` detection remain correct.
  };

  // Scroll-spy: observe sections on the home page and set activeHref accordingly
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    if (pathname !== '/') {
      setActiveHref(null);
      return;
    }

    const ids = ['hero', 'services', 'product', 'testimonials'];
    const idToHref: Record<string, string> = {
      hero: '/',
      services: '/about',
      product: '/product',
      testimonials: '/testimonials',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveHref(idToHref[id] || null);
        }
      });
    }, { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.1 });

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <header className="text-black font-normal fixed z-50 w-full top-0 bg-white shadow">
      <div className="flex items-center max-w-7xl mx-auto px-4 py-6 justify-between md:px-20">
        <Link href="/" className="flex items-center">
          <Image src="/logo.jpg" alt="Logo" width={150} height={70} className="h-12 w-auto" priority quality={90} />
        </Link>

        <nav className="hidden md:flex gap-7 items-center">
          <NavLink href="/" onClick={handleHomeClick} className={({ isActive }) => (isActive || activeHref === '/' ? "text-orange-500" : "hover:text-orange-600 ")}>Home</NavLink>
          <NavLink href="/about" onClick={handleScrollTo('services')} className={({ isActive }) => (isActive || activeHref === '/about' ? "text-orange-500" : "hover:text-orange-600")}>About</NavLink>
          <NavLink href="/product" onClick={handleScrollTo('product')} className={({ isActive }) => (isActive || activeHref === '/product' ? "text-orange-500" : "hover:text-orange-600")}>Product</NavLink>
          <NavLink href="/testimonials" onClick={handleScrollTo('testimonials')} className={({ isActive }) => (isActive || activeHref === '/testimonials' ? "text-orange-500" : "hover:text-orange-600")}>Testimonials</NavLink>
          <NavLink href="/contact" className={({ isActive }) => (isActive ? "text-orange-500" : "hover:text-orange-600")}>Contact</NavLink>
        </nav>

        <button className="md:hidden mr-4" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col gap-10 px-7 pb-7 text-center pb-500">
          <NavLink href="/" onClick={handleHomeClick} className={({ isActive }) => (pathname === '/' ? (activeHref === '/' ? "text-orange-500" : "") : (isActive ? "text-orange-500" : ""))}>Home</NavLink>
          <NavLink href="/about" onClick={handleScrollTo('services')} className={({ isActive }) => (pathname === '/' ? (activeHref === '/about' ? "text-orange-500" : "") : (isActive ? "text-orange-500" : ""))}>About</NavLink>
          <NavLink href="/product" onClick={handleScrollTo('product')} className={({ isActive }) => (pathname === '/' ? (activeHref === '/product' ? "text-orange-500" : "") : (isActive ? "text-orange-500" : ""))}>Product</NavLink>
          <NavLink href="/testimonials" onClick={handleScrollTo('testimonials')} className={({ isActive }) => (pathname === '/' ? (activeHref === '/testimonials' ? "text-orange-500" : "") : (isActive ? "text-orange-500" : ""))}>Testimonials</NavLink>
          <NavLink href="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "text-orange-500" : "")}>Contact</NavLink>
        </nav>
      )}
    </header>
  );
}

function Menu() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function X() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}


