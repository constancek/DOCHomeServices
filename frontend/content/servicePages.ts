// Sub-service pages reached from the header dropdowns.
// Each renders through app/services/[slug]/page.tsx with a templated layout.

export type Category = 'Cooling' | 'Heating' | 'Plumbing' | 'Electrical';

export type ServicePage = {
  slug: string;
  title: string;
  category: Category;
  parentSlug: string; // the main category page
  blurb: string; // one-line summary used in intro + meta
  // Hero image from the service's own page, reused as the category-hub tile so
  // there is one image per service instead of a separate tile file to maintain.
  // Falls back to /services/<slug>.jpg where not set.
  heroImage?: string;
};

export const servicePages: ServicePage[] = [
  // ── Plumbing ──
  { slug: 'drains', title: 'Drain Services', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Drain services for every part of your home — clearing slow and clogged drains, camera inspection, and lasting repairs.', heroImage: '/services/drains-hero.jpg' },
  { slug: 'drain-cleaning', title: 'Drain Cleaning', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Fast, thorough drain cleaning with camera inspection to find the real cause.', heroImage: '/services/drain-cleaning-hero.jpg' },
  { slug: 'emergency-plumbing', title: 'Emergency Plumbing', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Burst pipes and major leaks handled fast, before water damage spreads.', heroImage: '/services/emergency-hero.jpg' },
  { slug: 'faucet-repair-replacement', title: 'Faucet Repair & Replacement', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Stop the drip and upgrade tired fixtures with a clean, lasting install.', heroImage: '/services/faucet-hero.jpg' },
  { slug: 'leak-detection', title: 'Leak Detection', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Pinpoint hidden leaks without tearing up your home.', heroImage: '/services/leak-hero.jpg' },
  { slug: 'leak-repair', title: 'Leak Repair', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Lasting repairs for supply lines, drains, and fixtures.', heroImage: '/services/leakrepair-hero.jpg' },
  { slug: 'plumbing-installation', title: 'Plumbing Installation', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'New fixtures, lines, and appliances installed to code.', heroImage: '/services/plumbing-install-hero.jpg' },
  { slug: 'plumbing-repair', title: 'Plumbing Repair', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'From a running toilet to a failing valve, fixed right the first time.', heroImage: '/services/plumbing-repair-hero.jpg' },
  { slug: 'sewer-repair-replacement', title: 'Sewer Repair & Replacement', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Camera-diagnosed sewer line repair and replacement.', heroImage: '/services/sewer-hero.jpg' },
  { slug: 'sump-pumps', title: 'Sump Pumps', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Sump pump installation and repair to keep your basement dry.', heroImage: '/services/sump-hero.jpg' },
  { slug: 'tankless-water-heater', title: 'Tankless Water Heater', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Endless hot water and lower bills with a tankless system.', heroImage: '/services/tankless-hero.jpg' },
  { slug: 'water-heater-installation', title: 'Water Heater Installation', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Tank and tankless water heater installation, old unit hauled away.', heroImage: '/services/wh-hero.jpg' },
  { slug: 'water-heater-maintenance', title: 'Water Heater Maintenance', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Annual flushes and checks to extend the life of your water heater.', heroImage: '/services/wh-hero.jpg' },
  { slug: 'water-heater-repair', title: 'Water Heater Repair', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'No hot water? Same-day water heater diagnosis and repair.', heroImage: '/services/wh-hero.jpg' },
  { slug: 'water-quality', title: 'Water Quality', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Testing, softeners, and filtration for cleaner home water.', heroImage: '/services/wq-hero.jpg' },

  // ── Heating ──
  { slug: 'furnace-installation-replacement', title: 'Furnace Installation & Replacement', category: 'Heating', parentSlug: 'heating', blurb: 'Right-sized furnace installs that lower bills and even out comfort.', heroImage: '/services/furnace-install-hero.jpg' },
  { slug: 'furnace-maintenance', title: 'Furnace Maintenance', category: 'Heating', parentSlug: 'heating', blurb: 'Annual tune-ups with a carbon monoxide safety check included.', heroImage: '/services/furnace-maint-hero.jpg' },
  { slug: 'furnace-repair', title: 'Furnace Repair', category: 'Heating', parentSlug: 'heating', blurb: '24/7 emergency no-heat repair for every make and model.', heroImage: '/services/furnace-repair-hero.jpg' },
  { slug: 'heat-pumps', title: 'Heat Pumps', category: 'Heating', parentSlug: 'heating', blurb: 'Efficient year-round heating and cooling from one system.', heroImage: '/services/heat-pump-hero.jpg' },
  { slug: 'indoor-air-quality', title: 'Indoor Air Quality', category: 'Heating', parentSlug: 'heating', blurb: 'Filtration, humidity control, and purification for healthier air.', heroImage: '/services/iaq-hero.jpg' },
  { slug: 'furnace-filters', title: 'Furnace Filters', category: 'Heating', parentSlug: 'heating', blurb: 'The right filters delivered and installed, so your system breathes easy.' },

  // ── Air Conditioning ──
  { slug: 'ac-repair', title: 'AC Repair', category: 'Cooling', parentSlug: 'air-conditioning', blurb: 'Same-day cooling repair on every major brand.', heroImage: '/services/ac-repair-hero.jpg' },
  { slug: 'ac-installation-replacement', title: 'AC Installation & Replacement', category: 'Cooling', parentSlug: 'air-conditioning', blurb: 'Properly sized AC systems with financing and upfront pricing.', heroImage: '/services/ac-install-hero.jpg' },
  { slug: 'ac-maintenance', title: 'AC Maintenance', category: 'Cooling', parentSlug: 'air-conditioning', blurb: 'A 21-point tune-up that catches problems before summer.', heroImage: '/services/ac-maint-hero.jpg' },
  { slug: 'mini-splits', title: 'Mini-Splits', category: 'Cooling', parentSlug: 'air-conditioning', blurb: 'Ductless comfort for additions, garages, and tricky rooms.', heroImage: '/services/minisplit-hero.jpg' },
  { slug: 'air-filters', title: 'Air Filters', category: 'Cooling', parentSlug: 'air-conditioning', blurb: 'Quality AC filters that protect your system and your air.' },

  // ── Electrical ──
  { slug: 'lighting', title: 'Lighting', category: 'Electrical', parentSlug: 'electrical', blurb: 'Indoor and outdoor lighting design, install, and repair.', heroImage: '/services/lighting-hero.jpg' },
  { slug: 'outdoor-lighting', title: 'Outdoor Lighting', category: 'Electrical', parentSlug: 'electrical', blurb: 'Landscape, patio, and security lighting that lasts.', heroImage: '/services/outdoor-lighting-hero.jpg' },
  { slug: 'indoor-lighting', title: 'Indoor Lighting', category: 'Electrical', parentSlug: 'electrical', blurb: 'Recessed, accent, and fixture lighting for every room.', heroImage: '/services/indoor-hero.jpg' },
  { slug: 'recessed-lighting', title: 'Recessed Lighting Installation', category: 'Electrical', parentSlug: 'electrical', blurb: 'Clean, modern recessed lighting installed to code.', heroImage: '/services/recessed-hero.jpg' },
  { slug: 'lighting-fixture-installation', title: 'Lighting Fixture Installation', category: 'Electrical', parentSlug: 'electrical', blurb: 'Chandeliers, vanities, and fixtures hung safely.', heroImage: '/services/fixture-hero.jpg' },
  { slug: 'holiday-lighting', title: 'Holiday Lighting', category: 'Electrical', parentSlug: 'electrical', blurb: 'Festive lighting installed, maintained, and taken down for you.', heroImage: '/services/holiday-lighting-hero.jpg' },
  { slug: 'hot-tub-wiring', title: 'Hot Tub Wiring', category: 'Electrical', parentSlug: 'electrical', blurb: 'Safe, code-compliant circuits for hot tubs and spas.', heroImage: '/services/hottub-hero.jpg' },
  { slug: 'landscape-lighting', title: 'Landscape Lighting', category: 'Electrical', parentSlug: 'electrical', blurb: 'Highlight your yard with durable low-voltage lighting.', heroImage: '/services/landscape-hero.jpg' },
  { slug: 'patio-lighting', title: 'Patio Lighting', category: 'Electrical', parentSlug: 'electrical', blurb: 'Set the mood and extend your evenings outdoors.', heroImage: '/services/patio-hero.jpg' },
  { slug: 'led-lighting', title: 'LED Lighting', category: 'Electrical', parentSlug: 'electrical', blurb: 'Energy-saving LED upgrades throughout your home.', heroImage: '/services/led-hero.jpg' },
  { slug: 'basement-lighting', title: 'Basement Lighting', category: 'Electrical', parentSlug: 'electrical', blurb: 'Brighten and finish your basement the right way.', heroImage: '/services/basement-hero.jpg' },
  { slug: 'garage-lighting', title: 'Garage Lighting', category: 'Electrical', parentSlug: 'electrical', blurb: 'Bright, even lighting for work and storage.', heroImage: '/services/garage-hero.jpg' },
  { slug: 'exhaust-fan-installation-repair', title: 'Exhaust Fan Installation & Repair', category: 'Electrical', parentSlug: 'electrical', blurb: 'Bath and kitchen exhaust fans that move air and cut moisture.', heroImage: '/services/exhaust-hero.jpg' },
  { slug: 'surge-protector-installation', title: 'Whole-Home Surge Protector Installation', category: 'Electrical', parentSlug: 'electrical', blurb: 'Protect every device from spikes with whole-home surge protection.', heroImage: '/services/surge-hero.jpg' },
  { slug: 'ceiling-fan-installation', title: 'Ceiling Fan Installation', category: 'Electrical', parentSlug: 'electrical', blurb: 'Balanced, quiet ceiling fan installs and replacements.', heroImage: '/services/ceilingfan-hero.jpg' },
  { slug: 'electrical-inspections', title: 'Electrical Inspections', category: 'Electrical', parentSlug: 'electrical', blurb: 'Code-compliant safety inspections for peace of mind.', heroImage: '/services/inspect-hero.jpg' },
  { slug: 'home-rewiring', title: 'Home Rewiring', category: 'Electrical', parentSlug: 'electrical', blurb: 'Update aging wiring for a safer, modern home.', heroImage: '/services/rewiring-hero.jpg' },
  { slug: 'ev-chargers', title: 'EV Chargers', category: 'Electrical', parentSlug: 'electrical', blurb: 'Level 2 EV charger installation sized to your panel.', heroImage: '/services/ev-hero.jpg' },

  // Additional services surfaced in the sidebar services menu
  { slug: 'whole-house-repiping', title: 'Whole-House Repiping', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Replace old, failing pipes throughout your home with durable modern plumbing.', heroImage: '/services/repiping-hero.jpg' },
  { slug: 'gas-line-repair-replacement', title: 'Gas Line Repair & Replacement', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Safe gas line installation, repair, and leak detection by licensed pros.', heroImage: '/services/gasline-hero.jpg' },
  { slug: 'pipe-repair-replacement', title: 'Pipe Repair & Replacement', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Fix leaks and corrosion with lasting pipe repair and replacement.', heroImage: '/services/pipe-hero.jpg' },
  { slug: 'garbage-disposals', title: 'Garbage Disposals', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Garbage disposal repair and installation for a smoother kitchen.', heroImage: '/services/disposal-hero.jpg' },
  { slug: 'water-damage-restoration', title: 'Water Damage Restoration', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Water extraction, drying, and repair after a leak or flood, starting the same day you call.', heroImage: '/services/water-damage-restoration-hero.jpg' },
  { slug: 'after-flood-plumbing', title: 'After Flood Plumbing', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Inspection and repair of the plumbing a flood left behind, before you turn the water back on.', heroImage: '/services/after-flood-hero.jpg' },
  { slug: 'sewer-backup-repair', title: 'Sewer Backup Repair', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Clearing and repairing the sewer line when waste backs up into the house.', heroImage: '/services/sewer-backup-hero.jpg' },
  { slug: 'basement-flood-plumbing', title: 'Basement Flood Plumbing', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Finding and fixing the plumbing that let your basement flood, so it does not happen again.', heroImage: '/services/basement-flood-hero.jpg' },
  { slug: 'emergency-water-extraction', title: 'Emergency Water Extraction', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Pumps and extractors on site the same day to pull standing water out fast.', heroImage: '/services/water-extraction-hero.jpg' },
  { slug: 'structural-drying', title: 'Structural Drying', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Drying framing, subfloor, and drywall to measured moisture readings, not guesswork.', heroImage: '/services/structural-drying-hero.jpg' },
  { slug: 'mold-prevention-remediation', title: 'Mold Prevention & Remediation', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Stopping mold before it establishes, and removing it properly when it already has.', heroImage: '/services/mold-hero.jpg' },
  { slug: 'mini-split-repair', title: 'Mini-Split Repair', category: 'Cooling', parentSlug: 'air-conditioning', blurb: 'Fast repair for ductless mini-split systems.', heroImage: '/services/minisplit-repair-hero.jpg' },
  { slug: 'mini-split-installation', title: 'Mini-Split Installation', category: 'Cooling', parentSlug: 'air-conditioning', blurb: 'Ductless mini-split installation for additions, garages, and tricky rooms.', heroImage: '/services/minisplit-install-hero.jpg' },
  { slug: 'electrical-panel-replacement', title: 'Electrical Panel Replacement', category: 'Electrical', parentSlug: 'electrical', blurb: 'Upgrade an aging or overloaded electrical panel to safely power your home.', heroImage: '/services/panel-hero.jpg' },
  { slug: 'switches-outlets', title: 'Switches & Outlets', category: 'Electrical', parentSlug: 'electrical', blurb: 'Outlet and switch installation, repair, and upgrades, including GFCI and USB.', heroImage: '/services/outlets-hero.jpg' },
  { slug: 'electrical-mast-repair', title: 'Electrical Mast Repair', category: 'Electrical', parentSlug: 'electrical', blurb: 'Repair a damaged electrical service mast to safely restore power.', heroImage: '/services/mast-hero.jpg' },

  // Restoration after a utility shutoff. Duke Energy owns the meter and the
  // line to it, so they cannot repair the fault on the customer side — our
  // licensed crews do that, then service goes back on.
  { slug: 'gas-service-disconnection', title: 'Gas Service Disconnection (Duke Energy)', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Gas shut off by Duke? We find the fault, repair it, pass the pressure test, and get your service restored.', heroImage: '/services/gasline-hero.jpg' },
  { slug: 'electricity-disconnection', title: 'Electricity Disconnection (Duke Energy)', category: 'Electrical', parentSlug: 'electrical', blurb: 'Duke will not reconnect until the equipment you own is repaired and inspected. That is the work we do.', heroImage: '/services/panel-hero.jpg' },
  { slug: 'storm-electricity-outage', title: 'Storm Electricity Outage', category: 'Electrical', parentSlug: 'electrical', blurb: 'Street back on but your house still dark? We repair the storm-damaged equipment Duke will not touch.', heroImage: '/services/mast-hero.jpg' },
];

export const getServicePage = (slug: string) => servicePages.find((s) => s.slug === slug);

// Grouped services list for the sidebar accordion. Items without a dedicated
// page link to their category page.
export const serviceMenu: { category: string; href: string; items: { label: string; href: string }[] }[] = [
  {
    category: 'Plumbing Services',
    href: '/services/plumbing',
    items: [
      { label: 'Drains', href: '/services/drains' },
      { label: 'Drain Cleaning', href: '/services/drain-cleaning' },
      { label: 'Emergency Plumbing', href: '/services/emergency-plumbing' },
      { label: 'Water Damage Restoration', href: '/services/water-damage-restoration' },
      { label: 'Emergency Water Extraction', href: '/services/emergency-water-extraction' },
      { label: 'Structural Drying', href: '/services/structural-drying' },
      { label: 'Mold Prevention & Remediation', href: '/services/mold-prevention-remediation' },
      { label: 'After Flood Plumbing', href: '/services/after-flood-plumbing' },
      { label: 'Sewer Backup Repair', href: '/services/sewer-backup-repair' },
      { label: 'Sump Pump Repair & Installation', href: '/services/sump-pumps' },
      { label: 'Basement Flood Plumbing', href: '/services/basement-flood-plumbing' },
      { label: 'Faucet Repair & Replacement', href: '/services/faucet-repair-replacement' },
      { label: 'Leak Detection', href: '/services/leak-detection' },
      { label: 'Leak Repair', href: '/services/leak-repair' },
      { label: 'Plumbing Installation', href: '/services/plumbing-installation' },
      { label: 'Plumbing Repair', href: '/services/plumbing-repair' },
      { label: 'Sewer Repair & Replacement', href: '/services/sewer-repair-replacement' },
      { label: 'Whole-House Repiping', href: '/services/whole-house-repiping' },
      { label: 'Gas Line Repair & Replacement', href: '/services/gas-line-repair-replacement' },
      { label: 'Gas Service Disconnection (Duke Energy)', href: '/services/gas-service-disconnection' },
      { label: 'Pipe Repair & Replacement', href: '/services/pipe-repair-replacement' },
      { label: 'Garbage Disposals', href: '/services/garbage-disposals' },
      { label: 'Sump Pumps', href: '/services/sump-pumps' },
      { label: 'Tankless Water Heater', href: '/services/tankless-water-heater' },
      { label: 'Water Heater Installation', href: '/services/water-heater-installation' },
      { label: 'Water Heater Maintenance', href: '/services/water-heater-maintenance' },
      { label: 'Water Heater Repair', href: '/services/water-heater-repair' },
      { label: 'Water Quality', href: '/services/water-quality' },
    ],
  },
  {
    category: 'Heating Services',
    href: '/services/heating',
    items: [
      { label: 'Furnace Installation & Replacement', href: '/services/furnace-installation-replacement' },
      { label: 'Furnace Maintenance', href: '/services/furnace-maintenance' },
      { label: 'Furnace Repair', href: '/services/furnace-repair' },
      { label: 'Heat Pumps', href: '/services/heat-pumps' },
      { label: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
      { label: 'Shop Furnace Filters', href: '/services/furnace-filters' },
    ],
  },
  {
    category: 'Air Conditioning Services',
    href: '/services/air-conditioning',
    items: [
      { label: 'AC Repair', href: '/services/ac-repair' },
      { label: 'AC Installation & Replacement', href: '/services/ac-installation-replacement' },
      { label: 'AC Maintenance', href: '/services/ac-maintenance' },
      { label: 'Mini-Splits', href: '/services/mini-splits' },
      { label: 'Mini-Split Installation', href: '/services/mini-split-installation' },
      { label: 'Mini-Split Repair', href: '/services/mini-split-repair' },
      { label: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
      { label: 'Shop Air Filters', href: '/services/air-filters' },
    ],
  },
  {
    category: 'Electrical Services',
    href: '/services/electrical',
    items: [
      { label: 'Lighting', href: '/services/lighting' },
      { label: 'Outdoor Lighting', href: '/services/outdoor-lighting' },
      { label: 'Holiday Lighting', href: '/services/holiday-lighting' },
      { label: 'Hot Tub Wiring', href: '/services/hot-tub-wiring' },
      { label: 'Landscape Lighting', href: '/services/landscape-lighting' },
      { label: 'Patio Lighting', href: '/services/patio-lighting' },
      { label: 'Indoor Lighting', href: '/services/indoor-lighting' },
      { label: 'LED Lighting', href: '/services/led-lighting' },
      { label: 'Basement Lighting', href: '/services/basement-lighting' },
      { label: 'Garage Lighting', href: '/services/garage-lighting' },
      { label: 'Recessed Lighting Installation', href: '/services/recessed-lighting' },
      { label: 'Lighting Fixture Installation', href: '/services/lighting-fixture-installation' },
      { label: 'Exhaust Fan Installation & Repair', href: '/services/exhaust-fan-installation-repair' },
      { label: 'Whole-Home Surge Protector Installation', href: '/services/surge-protector-installation' },
      { label: 'Ceiling Fan Installation', href: '/services/ceiling-fan-installation' },
      { label: 'Electrical Inspections', href: '/services/electrical-inspections' },
      { label: 'Home Rewiring', href: '/services/home-rewiring' },
      { label: 'EV Chargers', href: '/services/ev-chargers' },
      { label: 'Electrical Panel Replacement', href: '/services/electrical-panel-replacement' },
      { label: 'Switches & Outlets', href: '/services/switches-outlets' },
      { label: 'Electrical Mast Repair', href: '/services/electrical-mast-repair' },
      { label: 'Electricity Disconnection (Duke Energy)', href: '/services/electricity-disconnection' },
      { label: 'Storm Electricity Outage', href: '/services/storm-electricity-outage' },
    ],
  },
];
