// Rich blog body: headings, paragraphs (with inline links / bold), and a
// key-takeaways list. Older posts still use the simpler `body` paragraphs.
export type PostSpan = string | { strong: string } | { link: string; href: string };
export type PostBlock =
  | { kind: 'h2'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'p'; spans: PostSpan[] }
  | { kind: 'takeaways'; items: PostSpan[][] };

export type Post = {
  slug: string;
  title: string;
  category: 'Cooling' | 'Heating' | 'Plumbing' | 'Electrical' | 'Home Tips';
  excerpt: string;
  date: string; // ISO — published
  dateModified?: string; // ISO — last updated
  readMinutes: number;
  author: { name: string; role: string };
  image?: string; // featured / OG image (1200x630)
  imageAlt?: string;
  // Older posts use plain paragraphs; newer posts use rich `content` blocks.
  body?: string[];
  content?: PostBlock[];
  faqs?: { q: string; a: string }[];
};

export const posts: Post[] = [
  {
    slug: 'reasons-why-you-shouldnt-diy-electrical-work',
    title: "Reasons Why You Shouldn't DIY Electrical Work",
    category: 'Electrical',
    excerpt:
      'Thinking about tackling that electrical project yourself? The real dangers of DIY electrical work in Cincinnati, and why a licensed pro is the safer call.',
    date: '2026-06-27',
    dateModified: '2026-06-27',
    readMinutes: 7,
    author: { name: 'Degree of Comfort', role: 'Licensed Electricians' },
    image: '/blog/diy-electrical-hero.jpg',
    imageAlt: 'Licensed electrician working safely inside a home electrical panel',
    content: [
      {
        kind: 'takeaways',
        items: [
          [{ strong: 'DIY electrical work carries serious risks' }, ' — electric shock, house fires, and hidden wiring problems that may not show up until much later.'],
          [{ strong: 'Licensed electricians follow safety standards and electrical code' }, ' so your system is installed and repaired correctly the first time.'],
          [{ strong: 'Mistakes with wiring, circuits, panels, or materials' }, ' can lead to expensive repairs, failed inspections, and denied insurance claims.'],
          [{ strong: 'For safety and long-term reliability,' }, ' most electrical work belongs with ', { link: 'licensed professionals', href: '/services/electrical/' }, ' — not a weekend DIY project.'],
        ],
      },
      { kind: 'p', spans: ['If you’ve got an internet connection and a garage full of tools, it’s easy to feel like you can take on any home project. Maybe you’ve built a bookshelf, swapped a faucet, or painted an accent wall — those feel doable. But there’s a big difference between hanging shelves and working with the electricity running through your walls.'] },
      { kind: 'p', spans: ['Below, we’ll walk through the real reasons why you shouldn’t DIY electrical work. By the end, you’ll understand why bringing in a pro is usually the smartest move for your home and your family.'] },

      { kind: 'h2', text: 'Not All DIY Projects Are Created Equal' },
      { kind: 'p', spans: ['Home improvement jobs aren’t all the same. Refinishing furniture or installing closet shelves is low-risk — if you mess up, you start over. Electrical work is in a category of its own. It isn’t just about owning a screwdriver or a voltage tester. It’s about understanding how electricity behaves, how circuits function, and what happens when something goes wrong. Here’s how electrical projects differ from the rest.'] },
      { kind: 'h3', text: 'Tools vs. Training' },
      { kind: 'p', spans: ['Having the right tools is a good start, but tools alone don’t make the job safe. Real electrical work calls for personal protective equipment, the right materials, and the knowledge to work safely around different systems and load levels. A wire stripper in your hand doesn’t replace the training a licensed electrician spends years building.'] },
      { kind: 'h3', text: 'Risk You Can’t Always See' },
      { kind: 'p', spans: ['Fixing a squeaky hinge is one thing. Working behind a wall where live wiring runs is something else entirely. The danger isn’t always obvious in the moment — a small mistake can sit quietly inside your wall and turn into a serious hazard down the road.'] },
      { kind: 'h3', text: 'Code Compliance Matters' },
      { kind: 'p', spans: ['Experienced electricians follow local codes to keep your home safe and up to date. Doing the work yourself without knowing those codes can lead to failed ', { link: 'electrical inspections', href: '/services/electrical-inspections/' }, ', insurance complications, and real safety risks — especially if you ever sell the home and the work gets flagged.'] },

      { kind: 'h2', text: 'What Are the Dangers of DIY Electrical Work?' },
      { kind: 'p', spans: ['Before you pick up the wire cutters, it’s worth knowing exactly what can go wrong. Electrical systems are more complex than they look, and the margin for error is small. Let’s break down the dangers that shouldn’t be ignored.'] },
      { kind: 'h3', text: 'Electric Shock or Cardiac Arrest' },
      { kind: 'p', spans: ['One of the most immediate dangers of DIY electrical work is electric shock. A single misstep on a live circuit can send current through your body, causing serious injury or even cardiac arrest. Without the right knowledge and gear, that risk climbs fast.'] },
      { kind: 'h3', text: 'House Fires From Faulty Wiring' },
      { kind: 'p', spans: ['Loose connections and overloaded circuits are among the most common causes of house fires. Even a wire that’s slightly out of place can overheat and lead to smoke or flames. If your home is older or you’re seeing repeated issues, ', { link: 'whole-home rewiring', href: '/services/home-rewiring/' }, ' done by a pro is far safer than patching it yourself.'] },
      { kind: 'h3', text: 'Hidden Failures' },
      { kind: 'p', spans: ['Some of the most serious problems are the ones you can’t see. You might finish a project, step back, and think it looks great — but electrical failures often don’t show up right away. A loose connection or an improperly grounded wire can create long-term trouble you won’t notice until something fails. A professional ', { link: 'electrical inspection', href: '/services/electrical-inspections/' }, ' is designed to catch exactly these hidden issues.'] },
      { kind: 'h3', text: 'Insurance Headaches' },
      { kind: 'p', spans: ['Many insurance companies won’t cover damage caused by unlicensed electrical work. If something goes wrong after a DIY job, you could be paying for the repairs entirely out of pocket — which usually erases whatever you “saved” by skipping the pro.'] },
      { kind: 'h3', text: 'Outdated or Mismatched Materials' },
      { kind: 'p', spans: ['Modern homes have specific electrical demands. Using old wire, mismatched parts, or the wrong ', { link: 'switch or outlet', href: '/services/switches-outlets/' }, ' can throw your whole system out of balance and lead to overheating or short circuits. An undersized or outdated panel makes it worse — which is why an ', { link: 'electrical panel replacement', href: '/services/electrical-panel-replacement/' }, ' is often the real fix, not a band-aid at the outlet.'] },

      { kind: 'h2', text: 'Why the Risks Outweigh the Rewards' },
      { kind: 'p', spans: ['Taking on a DIY electrical project can seem appealing at first. It might save a little money, it feels satisfying, and there’s some pride in doing it yourself. But when you stack up the risks, it’s clear why this kind of work is better left to an expert.'] },
      { kind: 'h3', text: 'Simple Tasks Get Complicated Fast' },
      { kind: 'p', spans: ['Even something as basic as swapping a light switch can spiral. If multiple switches control one fixture, or the wires don’t follow standard colors, one wrong connection can affect an entire circuit. The same goes for a ', { link: 'ceiling fan', href: '/services/ceiling-fan-installation/' }, ' or a ', { link: 'light fixture', href: '/services/lighting-fixture-installation/' }, ' — proper support and wiring matter more than people expect.'] },
      { kind: 'h3', text: 'No Second Chances' },
      { kind: 'p', spans: ['A bad coat of paint can be fixed with another coat. A mistake with electricity can mean a shock, a fire, or an injury. Electricity isn’t forgiving, and even confident DIYers can run into serious trouble.'] },
      { kind: 'h3', text: 'Long-Term Costs' },
      { kind: 'p', spans: ['You might think you’re saving money, but if the job goes sideways you could be facing major repair bills — plus the cost of damaged electronics or a voided warranty. Power surges alone can fry expensive equipment, which is why a ', { link: 'whole-home surge protector', href: '/services/surge-protector-installation/' }, ' installed correctly is a smarter investment than a risky DIY fix.'] },

      { kind: 'h2', text: 'Some Jobs Should Always Go to a Pro' },
      { kind: 'p', spans: ['A few projects aren’t just risky — they’re the kind where a mistake puts your whole home at stake. Installing an ', { link: 'EV charger', href: '/services/ev-chargers/' }, ', upgrading your ', { link: 'electrical panel', href: '/services/electrical-panel-replacement/' }, ', or any ', { link: 'home rewiring', href: '/services/home-rewiring/' }, ' involves high loads, permits, and code requirements that really aren’t worth guessing on. These are the jobs our licensed electricians handle every day.'] },

      { kind: 'h2', text: 'The Value of Experience and Safety' },
      { kind: 'p', spans: ['There’s a reason electricians go through years of training and certification. Electrical systems are complicated, and mistakes are costly. Here’s what professional experience actually buys you.'] },
      { kind: 'h3', text: 'Speed Without Sacrificing Safety' },
      { kind: 'p', spans: ['A seasoned electrician finishes the job faster and more accurately than a DIY attempt — fewer interruptions to your day, and no lingering worry about whether it was done right.'] },
      { kind: 'h3', text: 'Safety for the Whole Family' },
      { kind: 'p', spans: ['Good electricians don’t just get the power flowing. They protect your whole household — checking for loose wires, testing for correct voltage, and making sure breakers and connections are reliable. If something ever does go wrong, our ', { link: '24/7 emergency electrical service', href: '/services/electrical/' }, ' means you’re never left in the dark.'] },

      { kind: 'h2', text: 'Safe DIY Projects That Don’t Cross the Line' },
      { kind: 'p', spans: ['While most electrical work should be left to professionals, there are a few low-risk tasks a confident homeowner can usually handle — as long as you take basic precautions and you’re not working inside the walls.'] },
      { kind: 'h3', text: 'Replacing Light Bulbs' },
      { kind: 'p', spans: ['It seems basic, but the right bulb matters. Switching to energy-efficient ', { link: 'LED bulbs', href: '/services/led-lighting/' }, ' can lower your bills and reduce heat — just match the replacement to the fixture’s wattage rating so you don’t risk overheating.'] },
      { kind: 'h3', text: 'Using Smart Plugs' },
      { kind: 'p', spans: ['Smart plugs are an easy way to make your home a little smarter without touching any wiring. They plug into a standard outlet and let you control lamps or appliances from your phone or a voice assistant.'] },
      { kind: 'h3', text: 'Resetting a Tripped Breaker' },
      { kind: 'p', spans: ['If a breaker trips, you can usually reset it by flipping it fully off and back on. But if it keeps tripping, stop there — that’s a sign of a deeper issue that needs a professional ', { link: 'electrical inspection', href: '/services/electrical-inspections/' }, ', not a repeated reset.'] },
      { kind: 'p', spans: ['Anything beyond this — handling wires, rewiring fixtures, or modifying circuits — should go to an experienced electrician. It’s always better to stay on the cautious side than to risk injury or property damage.'] },

      { kind: 'h2', text: 'Final Thoughts on DIY Electrical Risks' },
      { kind: 'p', spans: ['So what are the real dangers of DIY electrical work? They go well beyond a blown fuse or a flickering light. The risk of injury, fire, property damage, and even legal or insurance trouble is real. There are plenty of home projects you can confidently take on — electrical work just isn’t one of them. The margin for error is simply too small.'] },
      { kind: 'p', spans: ['You might be handy, confident, and eager to do it yourself. But electricity plays by its own rules. Knowing when to grab your tools and when to call a licensed pro is what keeps your family safe, your electronics protected, and your home standing strong.'] },

      { kind: 'h2', text: 'Trust Degree of Comfort to Do It Right' },
      { kind: 'p', spans: ['If you’re dealing with an electrical issue or planning an upgrade, it’s time to call someone who does this for a living. At Degree of Comfort, we serve homeowners across Cincinnati and the surrounding Tri-State, including Northern Kentucky and Southeast Indiana. Our licensed, background-checked electricians treat your home with respect — and back every job with upfront, flat-rate pricing and a satisfaction guarantee.'] },
      { kind: 'p', spans: ['We’re a family-owned company that cares about helping other families stay safe and comfortable. Whether you need a quick repair, ', { link: 'home rewiring', href: '/services/home-rewiring/' }, ', a ', { link: 'panel upgrade', href: '/services/electrical-panel-replacement/' }, ', ', { link: 'surge protection', href: '/services/surge-protector-installation/' }, ', or a new ', { link: 'EV charger', href: '/services/ev-chargers/' }, ' installed, we’re here to help.'] },
      { kind: 'p', spans: ['Now that you know the reasons why you shouldn’t DIY electrical work, it’s time to take action. Ready to schedule? Call ', { strong: '(513) 586-5107' }, ' or ', { link: 'request a free estimate', href: '/free-estimate/' }, ' and let our team handle your electrical needs with the experience and care you can count on.'] },
    ],
  },
  {
    slug: 'why-your-ac-freezes-up',
    title: 'Why Your Air Conditioner Freezes Up (and How to Stop It)',
    category: 'Cooling',
    excerpt:
      'A block of ice on the line set looks dramatic, but the cause is almost always one of three simple things. Here is how to tell which.',
    date: '2026-05-28',
    readMinutes: 6,
    author: { name: 'Dana Whitfield', role: 'Lead HVAC Technician' },
    body: [
      'A frozen air conditioner is almost always a symptom of restricted airflow or low refrigerant, not a broken compressor. The good news is that two of the three common causes are things you can check yourself in about five minutes.',
      'The first culprit is a dirty air filter. When the filter clogs, the evaporator coil cannot pull enough warm air across it, the coil drops below freezing, and condensation turns to ice. Replacing a filter every 60 to 90 days prevents most freeze-ups outright.',
      'The second is a closed or blocked return vent. Furniture pushed against a return, or too many supply registers shut at once, starves the system of airflow the same way a dirty filter does. Open the returns and keep at least 80 percent of supply vents open.',
      'The third cause, low refrigerant from a leak, is the one to leave to a technician. Refrigerant is sealed and never gets "used up," so if the charge is low there is a leak that needs to be found and repaired. Topping it off without fixing the leak just delays the next freeze.',
      'If you find ice, turn the system to fan-only for an hour to thaw the coil before it overflows the drain pan, then change the filter. If it freezes again within a day, that points to refrigerant and it is time to call.',
    ],
    faqs: [
      {
        q: 'Can I run my AC while it is frozen?',
        a: 'No. Running the compressor against a frozen coil can pull liquid refrigerant back to the compressor and damage it. Switch to fan-only to thaw first.',
      },
      {
        q: 'How long does it take a frozen coil to thaw?',
        a: 'Usually one to three hours with the fan running. Do not chip at the ice, which can puncture the coil.',
      },
    ],
  },
  {
    slug: 'furnace-making-noise',
    title: 'What That Furnace Noise Actually Means',
    category: 'Heating',
    excerpt:
      'Banging, whistling, or a low rumble each point to a different problem. A quick guide to what is urgent and what can wait.',
    date: '2026-04-15',
    readMinutes: 5,
    author: { name: 'Marcus Reed', role: 'Heating Specialist' },
    body: [
      'A furnace is not supposed to be silent, but a new or changing noise is its way of telling you something shifted. The pitch and timing of the sound narrow down the cause faster than anything else.',
      'A loud bang right at startup is often delayed ignition: gas builds up for a second before it lights, then ignites all at once. It is worth a same-day look because the cause is usually dirty burners or a weak igniter, and the pressure can crack components over time.',
      'A high whistle usually means airflow is being forced through too small an opening, most often a clogged filter or an undersized return. Start with the filter. A metallic scraping sound, on the other hand, points to a blower wheel issue and should be shut down until a technician sees it.',
      'A low rumble that lingers after the system shuts off can signal a dirty burner or a venting problem, which is one of the few furnace noises that ties directly to safety. If you hear it alongside a headache or a stuffy feeling that clears when you leave the house, treat it as urgent and call.',
    ],
  },
  {
    slug: 'hard-water-signs',
    title: 'Five Signs You Have Hard Water (and Why It Costs You)',
    category: 'Plumbing',
    excerpt:
      'Hard water rarely announces itself. It shows up as scale, short appliance lifespans, and a water heater that works harder than it should.',
    date: '2026-03-02',
    readMinutes: 7,
    author: { name: 'Priya Sharma', role: 'Master Plumber' },
    body: [
      'Hard water is water with a high mineral content, mostly calcium and magnesium, and most homes have it to some degree. On its own it is not a health risk, but it quietly shortens the life of every appliance that water touches.',
      'The clearest sign is scale: a chalky white crust on faucets, shower glass, and inside the kettle. That same scale builds up invisibly inside your water heater, where even a quarter inch of buildup can noticeably raise the energy needed to heat a tank.',
      'Other tells are soap that will not lather, spots on dishes straight out of the dishwasher, and skin that feels filmy after a shower. Individually they are minor annoyances; together they point to water that is working against your plumbing.',
      'The fix is a water softener or a conditioning system, sized to your household water use. It is not a luxury upgrade so much as insurance for the water heater, dishwasher, and washing machine you already paid for.',
    ],
    faqs: [
      {
        q: 'Does hard water damage pipes?',
        a: 'Over years, scale narrows pipe interiors and reduces flow, especially on the hot side. It is gradual, but it is real, and it accelerates wear on every connected appliance.',
      },
    ],
  },
  {
    slug: 'is-your-panel-safe',
    title: 'Is Your Electrical Panel Safe? A Homeowner Checklist',
    category: 'Electrical',
    excerpt:
      'You do not need to open the panel to spot trouble. Six warning signs that your home electrical service needs a professional look.',
    date: '2026-02-10',
    readMinutes: 6,
    author: { name: 'Tom Castellano', role: 'Licensed Electrician' },
    body: [
      'Your electrical panel is the heart of the home, and like any heart, it gives warning signs before it fails. None of them require you to remove the cover, which you should never do yourself.',
      'Watch for breakers that trip repeatedly, a panel that feels warm to the touch, a persistent burning smell near it, lights that flicker when large appliances start, or scorch marks around outlets. Any one of these is reason to call a licensed electrician.',
      'Age matters too. Panels under 100 amps were built for a different era of home electrical demand, long before heat pumps and EV chargers. If your home still runs on 60 or 100 amps, an assessment is worth doing before you add a major load.',
      'Electrical is the one area of home repair where waiting is genuinely risky. A flickering light is cheap to investigate and expensive to ignore.',
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
