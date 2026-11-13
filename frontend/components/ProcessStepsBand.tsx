import Icon, { type IconName } from './Icon';

export type ProcessSteps = {
  heading: string;
  items: { icon: IconName; title: string; text: string }[];
};

// White section with three numbered orange cards, start to finish, for
// "What to Expect" on service location pages. Same card style as
// IconChecklistBand.
export default function ProcessStepsBand({ heading, items }: ProcessSteps) {
  return (
    <section className="bg-white">
      <div className="container-page py-14 lg:py-16">
        <h2 className="section-title text-center text-brand-700">{heading}</h2>
        <ol className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <li
              key={it.title}
              className="relative flex flex-col items-center rounded-2xl bg-hero-pink px-6 py-8 text-center text-white shadow-md transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="absolute left-5 top-4 font-display text-2xl font-extrabold text-white/80">
                {i + 1}
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                <Icon name={it.icon} className="h-7 w-7 text-orange-600" />
              </span>
              <h3 className="mt-4 text-lg font-bold leading-snug">{it.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/90">{it.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
