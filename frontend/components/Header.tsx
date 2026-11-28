'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import { site, nav } from '@/content/site';

// How long an open menu lingers after the cursor leaves it. Moving to another
// menu closes the first one instantly — the delay only covers leaving the nav.
const CLOSE_DELAY = 1000;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // One open path at a time, tracked in state rather than by CSS :hover. Two
  // panels can never be visible together, not even during a fade, because
  // opening one sets the value that closes the other in the same render.
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [openSub2, setOpenSub2] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function cancelClose() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }
  function openTop(label: string) {
    cancelClose();
    setOpenMenu(label);
    setOpenSub(null);
    setOpenSub2(null);
  }
  // Focus moving inside an open menu (pressing the mouse on a flyout link
  // focuses it) must not close the flyouts, or the link vanishes before the
  // click lands. Only a different menu resets them.
  function focusTop(label: string) {
    cancelClose();
    if (openMenu === label) return;
    setOpenMenu(label);
    setOpenSub(null);
    setOpenSub2(null);
  }
  function hoverChild(label: string | null) {
    cancelClose();
    setOpenSub(label);
    setOpenSub2(null);
  }
  function hoverSub(label: string | null) {
    cancelClose();
    setOpenSub2(label);
  }
  function scheduleClose() {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
      setOpenSub(null);
      setOpenSub2(null);
    }, CLOSE_DELAY);
  }

  useEffect(() => cancelClose, []);

  return (
    <header>
      {/* Rows 1+2 — blue phone bar + split CTA buttons, fixed to viewport (always visible) */}
      <div className="fixed inset-x-0 top-0 z-[60]">
        {/* Blue phone bar */}
        <div className="bg-brand-600 text-white">
          <div className="container-page flex h-9 items-center justify-between gap-2 sm:gap-3">
            <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-tight text-white sm:text-xs sm:tracking-wide">
              Call or Text · {site.hours}
            </span>
            <div className="flex flex-1 items-center justify-end gap-4 overflow-x-auto sm:gap-7">
              {site.phones.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  className="flex flex-shrink-0 items-center gap-2 text-sm font-bold transition hover:text-pink-300 sm:text-base"
                >
                  <Icon name="phone" className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  {p.label && (
                    <span className="hidden font-semibold uppercase tracking-wide text-brand-100 sm:inline">
                      {p.label}:
                    </span>
                  )}
                  <span className="font-bold">{p.number}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width split CTA buttons */}
        <div className="grid grid-cols-2">
          <a
            href="/request-estimate/"
            className="flex h-11 items-center justify-center gap-2 bg-pink-500 px-3 text-center text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-pink-600 sm:text-sm"
          >
            Get Instant Estimate
            <Icon name="clock" className="h-4 w-4 flex-shrink-0" />
          </a>
          <a
            href="/request-estimate/"
            className="flex h-11 items-center justify-center gap-2 bg-lime-500 px-3 text-center text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-lime-600 sm:text-sm"
          >
            <Icon name="calendar" className="h-4 w-4 flex-shrink-0" />
            Book Appointment
          </a>
        </div>
      </div>

      {/* Spacer reserving the fixed bar + CTA height (h-9 + h-11 = h-20) */}
      <div aria-hidden className="h-20" />

      {/* Row 3 — white nav (sticky, below the fixed bar + CTA block) */}
      <div className="sticky top-20 z-50 bg-white shadow-pill">
        <div className="container-page flex h-[88px] items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-0.5 xl:flex">
            {nav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => openTop(item.label)}
                  onMouseLeave={scheduleClose}
                  onFocus={() => focusTop(item.label)}
                  onBlur={scheduleClose}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 whitespace-nowrap rounded-md px-2 py-2 text-xs font-bold uppercase tracking-wide transition ${
                      openMenu === item.label ? 'text-pink-500' : 'text-ink'
                    }`}
                  >
                    {item.label}
                    {item.caret && (
                      <Icon name="caretDown" className="h-2.5 w-2.5" />
                    )}
                  </Link>

                  {/* Dropdown — long menus run in columns (Plumbing three, Electrical two) */}
                  <div
                    className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-1 transition-all duration-150 ${
                      openMenu === item.label
                        ? 'visible translate-y-0 opacity-100'
                        : 'invisible pointer-events-none translate-y-1 opacity-0'
                    } ${item.columns === 3 ? 'w-[52rem]' : item.columns === 2 ? 'w-[34rem]' : 'w-72'}`}
                  >
                    <div
                      className={`rounded-b-lg border border-brand-100 bg-white shadow-card ${
                        item.buttons ? `relative grid gap-3 p-4 ${item.columns === 3 ? 'grid-cols-3' : item.columns === 2 ? 'grid-cols-2' : ''}` : item.columns === 2 ? 'grid grid-cols-2' : ''
                      }`}
                    >
                      {/* Button menus show a "flatten" item's children in its place */}
                      {(item.buttons
                        ? item.children.flatMap((c) => (c.flatten && c.children ? c.children : [c]))
                        : item.children
                      ).map((child, ci) =>
                        child.children ? (
                          <div
                            key={child.label}
                            className={`${item.buttons ? '' : 'relative'} ${
                              item.buttons
                                ? ''
                                : item.columns === 2 && ci % 2 === 0
                                ? 'border-r border-r-brand-300'
                                : ''
                            }`}
                            onMouseEnter={() => hoverChild(child.label)}
                          >
                            <Link
                              href={child.href}
                              className={`flex h-full items-center justify-between gap-2 text-sm font-semibold transition ${
                                item.buttons ? 'rounded-lg border px-4 py-2.5' : 'border-b border-brand-100 px-5 py-2.5'
                              } ${
                                openSub === child.label
                                  ? `bg-pink-500 text-white ${item.buttons ? 'border-pink-500' : ''}`
                                  : item.buttons
                                  ? 'border-brand-200 bg-brand-50 text-brand-900'
                                  : 'text-brand-900'
                              }`}
                            >
                              {item.buttons ? (
                                <span className="flex-1 text-center leading-snug">{child.label}</span>
                              ) : (
                                child.label
                              )}
                              {item.buttons ? (
                                <span
                                  className={`grid h-6 w-6 flex-shrink-0 place-items-center rounded-full transition ${
                                    openSub === child.label ? 'bg-white text-pink-500' : 'bg-pink-500 text-white'
                                  }`}
                                >
                                  <Icon name="chevron" className="h-3 w-3 rotate-180 stroke-[3]" />
                                </span>
                              ) : (
                                <Icon name="chevron" className="h-3.5 w-3.5 flex-shrink-0 rotate-180" />
                              )}
                            </Link>
                            {/* Nested flyout — opens away from the panel edge */}
                            <div
                              className={`absolute z-50 w-72 transition-all duration-150 ${item.buttons ? '-top-px' : 'top-0'} ${
                                openSub === child.label
                                  ? 'visible opacity-100'
                                  : 'invisible pointer-events-none opacity-0'
                              } ${
                                item.buttons
                                  ? 'right-[calc(100%+1px)]'
                                  : item.columns === 2 && ci % 2 === 1
                                  ? 'left-full'
                                  : 'right-full'
                              }`}
                            >
                              <div
                                className={`border border-brand-100 bg-white shadow-card ${
                                  item.buttons
                                    ? 'relative grid gap-3 rounded-bl-lg p-4'
                                    : item.columns === 2 && ci % 2 === 1
                                    ? 'ml-px rounded-r-lg'
                                    : 'mr-px rounded-l-lg'
                                }`}
                              >
                                {child.children.map((sub) =>
                                  sub.children ? (
                                    <div
                                      key={sub.label}
                                      className={item.buttons ? '' : 'relative'}
                                      onMouseEnter={() => hoverSub(sub.label)}
                                    >
                                      <Link
                                        href={sub.href}
                                        className={`flex items-center justify-between text-sm font-semibold transition ${
                                          item.buttons
                                            ? 'rounded-lg border px-4 py-2.5'
                                            : 'border-b border-brand-100 px-5 py-2.5 last:border-b-0'
                                        } ${
                                          openSub2 === sub.label
                                            ? `bg-pink-500 text-white ${item.buttons ? 'border-pink-500' : ''}`
                                            : item.buttons
                                            ? 'border-brand-200 bg-brand-50 text-brand-900'
                                            : 'text-brand-900'
                                        }`}
                                      >
                                        {item.buttons ? (
                                          <span className="flex-1 text-center leading-snug">{sub.label}</span>
                                        ) : (
                                          sub.label
                                        )}
                                        {item.buttons ? (
                                          <span
                                            className={`grid h-6 w-6 flex-shrink-0 place-items-center rounded-full transition ${
                                              openSub2 === sub.label ? 'bg-white text-pink-500' : 'bg-pink-500 text-white'
                                            }`}
                                          >
                                            <Icon name="chevron" className="h-3 w-3 rotate-180 stroke-[3]" />
                                          </span>
                                        ) : (
                                          <Icon name="chevron" className="h-3.5 w-3.5 rotate-180" />
                                        )}
                                      </Link>
                                      <div
                                        className={`absolute z-50 w-72 transition-all duration-150 ${
                                          item.buttons ? '-top-px right-[calc(100%+1px)]' : 'right-full top-0'
                                        } ${
                                          openSub2 === sub.label
                                            ? 'visible opacity-100'
                                            : 'invisible pointer-events-none opacity-0'
                                        }`}
                                      >
                                        <div
                                          className={`border border-brand-100 bg-white shadow-card ${
                                            item.buttons ? 'grid gap-3 rounded-bl-lg p-4' : 'mr-px rounded-l-lg'
                                          }`}
                                        >
                                          {sub.children.map((leaf) => (
                                            <Link
                                              key={leaf.label}
                                              href={leaf.href}
                                              className={
                                                item.buttons
                                                  ? 'flex items-center justify-center rounded-lg border border-brand-200 bg-brand-50 px-3 py-2.5 text-center text-sm font-semibold leading-snug text-brand-900 transition hover:border-pink-500 hover:bg-pink-500 hover:text-white'
                                                  : 'flex items-center justify-between border-b border-brand-100 px-5 py-2.5 text-sm font-semibold text-brand-900 transition last:border-b-0 hover:bg-brand-50 hover:text-pink-500'
                                              }
                                            >
                                              {leaf.label}
                                              {leaf.arrow && !item.buttons && (
                                                <Icon name="chevron" className="h-3.5 w-3.5 text-brand-400" />
                                              )}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <Link
                                      key={sub.label}
                                      href={sub.href}
                                      onMouseEnter={() => hoverSub(null)}
                                      className={
                                        item.buttons
                                          ? 'flex items-center justify-center rounded-lg border border-brand-200 bg-brand-50 px-3 py-2.5 text-center text-sm font-semibold leading-snug text-brand-900 transition hover:border-pink-500 hover:bg-pink-500 hover:text-white'
                                          : 'flex items-center justify-between border-b border-brand-100 px-5 py-2.5 text-sm font-semibold text-brand-900 transition last:border-b-0 hover:bg-brand-50 hover:text-pink-500'
                                      }
                                    >
                                      {sub.label}
                                      {sub.arrow && !item.buttons && (
                                        <Icon name="chevron" className="h-3.5 w-3.5 text-brand-400" />
                                      )}
                                    </Link>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={child.label}
                            href={child.href}
                            onMouseEnter={() => hoverChild(null)}
                            className={item.buttons
                              ? 'flex items-center justify-center rounded-lg border border-brand-200 bg-brand-50 px-3 py-2.5 text-center text-sm font-semibold leading-snug text-brand-900 transition hover:border-pink-500 hover:bg-pink-500 hover:text-white'
                              : `flex items-center justify-between gap-2 border-b border-brand-100 px-5 py-2.5 text-sm font-semibold text-brand-900 transition hover:bg-brand-50 hover:text-pink-500 ${
                              item.columns === 2
                                ? ci % 2 === 0
                                  ? 'border-r border-r-brand-300'
                                  : ''
                                : 'last:rounded-b-lg last:border-b-0'
                            }`}
                          >
                            {item.buttons ? child.menuLabel ?? child.label : child.label}
                            {child.arrow && !item.buttons && (
                              <Icon name="chevron" className="h-3.5 w-3.5 flex-shrink-0 text-brand-400" />
                            )}
                          </Link>
                        )
                      )}
                      {item.cta && (
                        <Link
                          href={item.cta.href}
                          className="block rounded-b-lg bg-lime-500 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-lime-600"
                        >
                          {item.cta.label}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1 whitespace-nowrap rounded-md px-2 py-2 text-xs font-bold uppercase tracking-wide text-ink transition hover:text-pink-500"
                >
                  {item.label}
                  {item.caret && <Icon name="caretDown" className="h-2.5 w-2.5" />}
                </Link>
              )
            )}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-brand-200 text-brand-700 xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu — nested accordion so every submenu is reachable */}
        {mobileOpen && (
          <div className="max-h-[calc(100vh-theme(spacing.20))] overflow-y-auto border-t border-brand-100 bg-white xl:hidden">
            <nav className="container-page py-1">
              <ul className="divide-y divide-brand-100">
                {nav.map((item) => (
                  <MobileNavNode
                    key={item.label}
                    node={item}
                    depth={0}
                    onNavigate={() => setMobileOpen(false)}
                  />
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

type MobileNode = { label: string; href: string; children?: MobileNode[] };

// Recursive accordion row for the mobile menu. Parent rows link to their hub
// page and expose a caret that expands the children (which may nest further).
function MobileNavNode({
  node,
  depth,
  onNavigate,
}: {
  node: MobileNode;
  depth: number;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const hasChildren = Array.isArray(node.children) && node.children.length > 0;
  const pad = depth === 0 ? '' : depth === 1 ? 'pl-4' : 'pl-8';
  const labelClass =
    depth === 0
      ? 'text-sm font-bold uppercase tracking-wide'
      : 'text-sm font-semibold';

  if (!hasChildren) {
    return (
      <li>
        <Link
          href={node.href}
          onClick={onNavigate}
          className={`block py-3.5 ${pad} ${
            depth === 0 ? 'text-sm font-bold uppercase tracking-wide text-brand-800' : 'text-sm font-medium text-brand-700'
          }`}
        >
          {node.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <div className={`flex items-center transition-colors ${open ? 'bg-pink-500 text-white' : depth === 0 ? 'text-brand-800' : 'text-brand-700'}`}>
        <Link href={node.href} onClick={onNavigate} className={`flex-1 py-3.5 ${pad} ${labelClass}`}>
          {node.label}
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={`${open ? 'Collapse' : 'Expand'} ${node.label}`}
          aria-expanded={open}
          className="grid h-11 w-11 flex-shrink-0 place-items-center"
        >
          <Icon name="caretDown" className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {open && (
        <ul className="divide-y divide-brand-100 border-t border-brand-100 bg-brand-50/50">
          {node.children!.map((child) => (
            <MobileNavNode key={child.label} node={child} depth={depth + 1} onNavigate={onNavigate} />
          ))}
        </ul>
      )}
    </li>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      {/* Save the bulldog mascot as public/mascot.webp */}
      <img
        src="/mascot.webp"
        alt="Degree of Comfort mascot"
        width={56}
        height={56}
        className="h-12 w-12 flex-shrink-0 object-contain sm:h-14 sm:w-14"
      />
      <span className="leading-none">
        <span className="block whitespace-nowrap font-logo text-xl font-black tracking-tight text-brand-700 sm:text-2xl xl:text-[28px]">
          Degree of Comfort
        </span>
        <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.14em] text-brand-400 sm:text-[10px]">
          Heating · Cooling · Electrical · Plumbing
        </span>
      </span>
    </Link>
  );
}
