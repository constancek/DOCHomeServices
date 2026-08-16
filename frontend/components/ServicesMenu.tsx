'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import { serviceMenu } from '@/content/servicePages';

export default function ServicesMenu() {
  // Which category panels are open. Starts empty; an auto-fill pass then opens
  // as many as needed so the sidebar roughly reaches the main column's height.
  const [openSet, setOpenSet] = useState<Set<number>>(() => new Set());
  const rootRef = useRef<HTMLDivElement>(null);
  // Once the visitor clicks a header we stop auto-managing, so it never fights them.
  const userToggled = useRef(false);
  // Panels this component opened by itself, newest last, so the last one can be
  // taken back if it overshot.
  const autoOpened = useRef<number[]>([]);
  // Set once a panel has been rolled back. Without it the loop would reopen the
  // panel it just closed and oscillate forever.
  const settled = useRef(false);

  const toggle = (i: number) => {
    userToggled.current = true;
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  // Auto-fill loop: after each render, if the sidebar is still shorter than the
  // main column, open one more category. Re-running on openSet change makes this
  // converge in at most `serviceMenu.length` passes. Guarded so it never runs
  // once the visitor has interacted.
  useEffect(() => {
    if (userToggled.current || settled.current) return;
    const root = rootRef.current;
    if (!root) return;
    const aside = root.closest('aside');
    const container = aside?.parentElement;
    if (!aside || !container) return;
    const deficit = container.clientHeight - (aside as HTMLElement).offsetHeight;

    // The panel we just opened pushed the sidebar past the main column. Short
    // pages overshoot on the very first panel, so this is what keeps them
    // collapsed instead of trailing white space down the page.
    if (deficit < -48 && autoOpened.current.length > 0) {
      const last = autoOpened.current.pop() as number;
      settled.current = true;
      setOpenSet((prev) => {
        const next = new Set(prev);
        next.delete(last);
        return next;
      });
      return;
    }

    if (deficit > 48 && openSet.size < serviceMenu.length) {
      const nextIdx = serviceMenu.findIndex((_, i) => !openSet.has(i));
      if (nextIdx !== -1) {
        autoOpened.current.push(nextIdx);
        setOpenSet((prev) => new Set(prev).add(nextIdx));
      }
    }
  }, [openSet]);

  // Recompute from scratch when the layout changes size (unless the visitor has
  // taken over). Clearing the set restarts the auto-fill loop above.
  useEffect(() => {
    const onResize = () => {
      if (userToggled.current) return;
      autoOpened.current = [];
      settled.current = false;
      setOpenSet(new Set());
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div ref={rootRef} className="space-y-2">
      {serviceMenu.map((cat, i) => {
        const isOpen = openSet.has(i);
        return (
          <div key={cat.category} className="overflow-hidden rounded-lg shadow-pill">
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm font-bold text-white transition ${
                isOpen ? 'bg-lime-500' : 'bg-brand-700 hover:bg-brand-800'
              }`}
            >
              {cat.category}
              <span className="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-white/25">
                <Icon
                  name="chevron"
                  className={`h-3.5 w-3.5 ${isOpen ? '-rotate-90' : 'rotate-90'}`}
                />
              </span>
            </button>
            {isOpen && (
              <div className="bg-white p-4">
                <ul className="columns-2 gap-x-3">
                  {cat.items.map((item) => (
                    <li key={item.label} className="mb-2 break-inside-avoid">
                      <Link
                        href={item.href}
                        className="flex gap-1.5 text-xs font-semibold leading-tight text-brand-600 transition hover:text-pink-500"
                      >
                        <span aria-hidden="true">-</span>
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
