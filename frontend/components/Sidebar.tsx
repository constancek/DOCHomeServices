import type { ReactNode } from 'react';
import CouponExpiry from './CouponExpiry';
import ServicesMenu from './ServicesMenu';
import { site } from '@/content/site';
import { coupons } from '@/content/coupons';

// Featured voucher for the sidebar (matches the reference's "$75 off" card).
const defaultCoupon = coupons.find((c) => c.price === '$75 OFF') ?? coupons[0];

export function MapWidget() {
  return (
    <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-brand-100">
      <div className="bg-brand-700 px-4 py-2 text-center text-xs font-bold uppercase tracking-wide text-white">
        Our Service Area
      </div>
      <iframe
        title="Service area map"
        src="https://www.google.com/maps?q=Cincinnati,+Ohio&z=10&output=embed"
        className="h-56 w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

// `title` picks a specific coupon by its title (e.g. 'Furnace Tune-Up' on heating
// posts); without it the sidebar shows the featured one.
export function CouponWidget({ title }: { title?: string } = {}) {
  const featured = (title && coupons.find((c) => c.title === title)) || defaultCoupon;
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-dashed border-pink-400 bg-white shadow-card">
      <div className="bg-cobalt py-2 text-center text-xs font-bold uppercase tracking-wide text-white">
        Hurry, Offer Ends Soon
      </div>
      <div className="p-5 text-center">
        <div className="font-display text-4xl font-black text-pink-500">{featured.price}</div>
        <div className="font-display text-sm font-extrabold uppercase text-brand-700">
          {featured.title}
        </div>
        <p className="mt-2 text-xs leading-relaxed text-ink/60">{featured.details}</p>
        <a href={site.primaryPhone.href} className="btn-lime mt-4 w-full text-xs">
          Click to Schedule
        </a>
        <p className="mt-2 text-[10px] leading-relaxed text-ink/40">
          *Cannot be combined with any other offers. Some restrictions apply.
        </p>
        <p className="text-[10px] font-semibold italic text-ink/50">
          Expires: <CouponExpiry kind={featured.expiryKind} initial={featured.expires} />
        </p>
      </div>
    </div>
  );
}

// The standard sidebar: optional page-specific widgets, then map + voucher.
// `hideMenuOnMobile` keeps the services menu in the sidebar on desktop but hides
// it on mobile, for pages that render the menu lower down (above Our Difference).
// `couponTitle` swaps the featured voucher for one matching the page's trade.
export function Sidebar({
  extras,
  hideMenuOnMobile = false,
  couponTitle,
}: {
  extras?: ReactNode;
  hideMenuOnMobile?: boolean;
  couponTitle?: string;
}) {
  return (
    <aside className="space-y-6 lg:self-start">
      {extras}
      <MapWidget />
      <CouponWidget title={couponTitle} />
      <div className={hideMenuOnMobile ? 'hidden lg:block' : undefined}>
        <ServicesMenu />
      </div>
    </aside>
  );
}

// Wraps a page's main content in a ~70/30 layout with the sidebar on the right.
export default function MainWithSidebar({
  children,
  extras,
  hideMenuOnMobile = false,
  couponTitle,
}: {
  children: ReactNode;
  extras?: ReactNode;
  hideMenuOnMobile?: boolean;
  couponTitle?: string;
}) {
  return (
    <div className="container-page grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
      <div className="min-w-0">{children}</div>
      <Sidebar extras={extras} hideMenuOnMobile={hideMenuOnMobile} couponTitle={couponTitle} />
    </div>
  );
}
