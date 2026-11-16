import Icon, { type IconName } from './Icon';

export type IconChecklist = {
  heading: string;
  items: { icon: IconName; label: string }[];
  note?: string;
};

// White section with a grid of orange icon cards in place of a bulleted list:
// fewer words than a paragraph list, still real HTML text for search and
// screen readers.
export default function IconChecklistBand({ heading, items, note }: IconChecklist) {
  return (
    <section className="bg-white">
      <div className="container-page py-14 lg:py-16">
        <h2 className="section-title text-center text-brand-700">{heading}</h2>
        {note && <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed text-ink/75">{note}</p>}
        <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {items.map((it) => (
            <li
              key={it.label}
              className="flex flex-col items-center rounded-2xl bg-hero-pink px-4 py-7 text-center text-white shadow-md transition-transform duration-300 hover:-translate-y-1 sm:px-6"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                <Icon name={it.icon} className="h-7 w-7 text-orange-600" />
              </span>
              <span className="mt-4 text-base font-semibold leading-snug">{it.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
