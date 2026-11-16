import { hvacBrands } from '@/content/brands';

// "Brands We Service" block for the heating and cooling hubs. `equipment` names
// the systems for that trade, e.g. "furnaces, boilers and heat pumps".
export default function BrandsWeService({ equipment }: { equipment: string }) {
  return (
    <>
      <h2 className="mt-12 section-title text-brand-700">Brands We Service in Cincinnati</h2>
      <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
        We repair, maintain and install {equipment} from every major manufacturer, including:
      </p>
      <ul className="mt-5 flex flex-wrap gap-2.5">
        {hvacBrands.map((b) => (
          <li
            key={b}
            className="rounded-full border border-brand-100 bg-white px-4 py-2 font-display text-sm font-extrabold text-brand-700 shadow-card"
          >
            {b}
          </li>
        ))}
        <li className="rounded-full px-2 py-2 font-display text-sm font-extrabold text-ink/60">and more</li>
      </ul>
      <p className="mt-4 text-[15px] leading-relaxed text-ink/70">
        Don&rsquo;t see your brand? Call us. We work on most makes and models.
      </p>
    </>
  );
}
