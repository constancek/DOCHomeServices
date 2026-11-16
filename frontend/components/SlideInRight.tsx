'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

// Pixels the page must be scrolled before anything slides in.
const SCROLL_START = 40;

// Slides its children in from the right the first time they scroll into view.
// `delay` (ms) staggers a row of items.
export default function SlideInRight({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }

    // Wait for both: the visitor has started scrolling, and the element sits
    // well inside the viewport (not just touching the bottom edge).
    let inView = false;
    let scrolled = window.scrollY > SCROLL_START;

    const reveal = () => {
      if (inView && scrolled) {
        setShown(true);
        cleanup();
      }
    };
    const onScroll = () => {
      if (window.scrollY > SCROLL_START) {
        scrolled = true;
        reveal();
      }
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        reveal();
      },
      { threshold: 0.6, rootMargin: '0px 0px -15% 0px' }
    );
    const cleanup = () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };

    io.observe(el);
    window.addEventListener('scroll', onScroll, { passive: true });
    return cleanup;
  }, []);

  // The observer watches the outer box, which never moves. Watching the
  // shifted inner box would let an item near the right edge sit partly
  // off-screen and never count as visible.
  return (
    <div ref={ref} className={className}>
      <div
        style={{ transitionDelay: shown ? `${delay}ms` : '0ms' }}
        className={`transition-all duration-700 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
          shown ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
