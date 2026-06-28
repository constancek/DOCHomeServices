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
    slug: 'how-to-extend-the-life-of-your-ac-unit',
    title: 'How to Extend the Life of Your AC Unit',
    category: 'Cooling',
    excerpt:
      'Want your air conditioner to last longer? Simple, proven steps Cincinnati homeowners can use to extend the life of an AC unit and avoid an early replacement.',
    date: '2026-06-28',
    dateModified: '2026-06-28',
    readMinutes: 7,
    author: { name: 'Degree of Comfort', role: 'Heating & Cooling Technicians' },
    image: '/blog/extend-ac-life-hero.jpg',
    imageAlt: 'Technician performing maintenance on an outdoor AC condenser unit',
    content: [
      {
        kind: 'takeaways',
        items: [
          [{ strong: 'Annual professional maintenance is the single biggest factor' }, ' in how long an AC lasts — and it keeps your manufacturer warranty valid.'],
          [{ strong: 'A clean filter and a clean outdoor unit' }, ' protect the compressor, which is the most expensive part to replace.'],
          [{ strong: 'Small problems caught early stay small;' }, ' ignoring them is what turns a routine repair into a full replacement.'],
          [{ strong: 'Most central systems last 10 to 15 years' }, ' — regular ', { link: 'AC maintenance', href: '/services/ac-maintenance/' }, ' is the easiest way to reach the high end of that range.'],
        ],
      },
      { kind: 'p', spans: ['An air conditioner is one of the bigger investments in your home, and how long it lasts has less to do with the brand on the label than with how it is cared for. Two identical units can live very different lives — one quits in eight years, the other still runs strong past fifteen — and the difference is almost always maintenance.'] },
      { kind: 'p', spans: ['The good news is that most of what extends an AC’s life is simple, and a few of the steps you can handle yourself. Here is how to get the most years out of your cooling system.'] },

      { kind: 'h2', text: 'Get a Professional Tune-Up Every Year' },
      { kind: 'p', spans: ['If you do only one thing for your AC, make it an annual tune-up. During a maintenance visit a technician checks refrigerant levels, tests the capacitor and compressor, cleans the coils, tightens electrical connections, and lubricates the moving parts that wear out fastest. These are the small adjustments that keep the system from working harder than it needs to.'] },
      { kind: 'p', spans: ['Annual service matters for your wallet in another way too: most manufacturers require documented yearly maintenance to keep the warranty valid. Skipping it can leave you paying full price for a repair that should have been covered. Our ', { link: 'AC maintenance', href: '/services/ac-maintenance/' }, ' keeps that record current and catches small issues before cooling season starts.'] },

      { kind: 'h2', text: 'Change the Air Filter on Schedule' },
      { kind: 'p', spans: ['A clogged filter is the most common reason a healthy AC starts to struggle. When air cannot move freely, the blower works overtime, the coil can ice over, and the whole system runs hot. Check the filter monthly and replace it every one to three months — more often if you have pets or run the system hard through summer.'] },
      { kind: 'p', spans: ['A fresh filter also keeps your air cleaner. If anyone in the home deals with allergies or dust sensitivity, a higher-MERV filter or an ', { link: 'indoor air quality', href: '/services/indoor-air-quality/' }, ' upgrade can help — just make sure the system is rated for it, since a filter that is too dense can restrict airflow on its own.'] },

      { kind: 'h2', text: 'Keep the Outdoor Unit Clean and Clear' },
      { kind: 'p', spans: ['The outdoor condenser releases the heat your AC pulls from the house, and it cannot do that job buried in grass clippings, leaves, and cottonwood fluff. Once a month during cooling season, shut the unit off at the disconnect and rinse the fins gently with a garden hose from the inside out. Keep about two feet of clear space on every side so air can move freely.'] },
      { kind: 'p', spans: ['Avoid stacking firewood, trash cans, or patio furniture against it, and trim back shrubs that creep in over the summer. A clean, unobstructed condenser runs cooler and lasts longer.'] },

      { kind: 'h2', text: 'Do Not Block Your Vents' },
      { kind: 'p', spans: ['Closing vents in unused rooms to save energy usually backfires. Your system is sized for the whole house, and blocking returns or supply registers raises pressure, lengthens run times, and creates hot and cold spots. Keep furniture and rugs off the vents and leave the large majority of registers open.'] },
      { kind: 'p', spans: ['If some rooms never seem to cool no matter what, the duct system may be leaking or undersized. We can check it as part of an ', { link: 'AC repair', href: '/services/ac-repair/' }, ' visit and find out where the air is going.'] },

      { kind: 'h2', text: 'Seal Ducts and Improve Insulation' },
      { kind: 'p', spans: ['Cooled air is expensive, and many homes lose a meaningful share of it through leaky ductwork in the attic or crawlspace before it ever reaches a room. Sealing those joints and insulating the ducts that run through unconditioned space means the air you paid to cool actually arrives where you want it.'] },
      { kind: 'p', spans: ['The same goes for the house itself. Good attic insulation and sealed gaps around windows and doors keep the heat out, so the AC cycles less and wears more slowly. It is one of the few upgrades that pays you back every single summer.'] },

      { kind: 'h2', text: 'Upgrade to a Smart Thermostat' },
      { kind: 'p', spans: ['A smart or programmable thermostat lets the system ease off when you are asleep or away and ramp back up before you get home, which cuts unnecessary run time without sacrificing comfort. Many models also track humidity, send filter-change reminders, and let you adjust the temperature from your phone.'] },
      { kind: 'p', spans: ['Fewer hours of hard running add up to less wear over the life of the unit, and a lighter electric bill along the way.'] },

      { kind: 'h2', text: 'Give the Condenser Some Shade' },
      { kind: 'p', spans: ['An outdoor unit baking in direct afternoon sun has to work harder to shed heat than one in the shade. A tree, an awning, or a simple screen on the sunniest side can lower the load on the compressor. Just keep any shade structure far enough away to preserve that two-foot airflow clearance.'] },

      { kind: 'h2', text: 'Fix Small Problems Before They Grow' },
      { kind: 'p', spans: ['Most major AC failures start as something minor — a weak capacitor, a small refrigerant leak, a worn contactor. Left alone, that one part drags down the others until the compressor finally gives out. Calling for ', { link: 'AC repair', href: '/services/ac-repair/' }, ' at the first odd noise, weak airflow, or jump in your bill is almost always cheaper than waiting.'] },
      { kind: 'p', spans: ['It protects your warranty, too. Running a system with a known problem can void coverage and turn a small bill into a large one.'] },

      { kind: 'h2', text: 'When It Is Time to Replace Instead of Repair' },
      { kind: 'p', spans: ['Even a well-kept AC reaches the end of the road eventually, and there is a point where pouring money into an old system stops making sense. We will always tell you honestly when that line has been crossed — here is what we look for.'] },
      { kind: 'h3', text: 'The System Is 10 to 15 Years Old' },
      { kind: 'p', spans: ['Most central air conditioners last somewhere in this range. Past it, efficiency drops and parts get harder to find, so a major repair on an aging unit is often money better spent toward a replacement.'] },
      { kind: 'h3', text: 'The Repairs Are Stacking Up' },
      { kind: 'p', spans: ['One repair is normal. Three service calls in two summers is a pattern, and it usually means more failures are coming. At that point a new, efficient system frequently costs less over time than the running total of fixes.'] },
      { kind: 'h3', text: 'Your Bills Keep Climbing' },
      { kind: 'p', spans: ['If your energy bills creep up every year while your habits stay the same, the system is losing efficiency. A modern ', { link: 'AC installation', href: '/services/ac-installation-replacement/' }, ' can cool the same house for noticeably less, and the savings help offset the cost.'] },

      { kind: 'h2', text: 'Trust Degree of Comfort to Keep It Running' },
      { kind: 'p', spans: ['Whether your AC needs a seasonal tune-up, a quick fix, or an honest opinion on repair versus replacement, Degree of Comfort is here for homeowners across Cincinnati and the surrounding Tri-State, including Northern Kentucky and Southeast Indiana. We are family-owned, licensed and insured, and we back every job with upfront, flat-rate pricing and a satisfaction guarantee.'] },
      { kind: 'p', spans: ['Ready to add years to your system? Call ', { strong: '(513) 586-5107' }, ', schedule ', { link: 'air conditioning', href: '/services/air-conditioning/' }, ' service or routine ', { link: 'AC maintenance', href: '/services/ac-maintenance/' }, ', or ', { link: 'request a free estimate', href: '/free-estimate/' }, ' and let our team keep your home cool and comfortable for the long haul.'] },
    ],
    faqs: [
      { q: 'What is the average life of an AC unit?', a: 'Most central air conditioners last about 10 to 15 years. A well-maintained system tends to run toward the high end of that range, while a neglected one can fail several years sooner.' },
      { q: 'How can I extend the life of my AC unit?', a: 'Change the air filter every one to three months, keep the outdoor unit clear of debris with a foot or two of clearance, and book an annual professional tune-up. Those three habits prevent most of the strain that wears a system out early.' },
      { q: 'Does replacing AC filters extend the life of an AC unit?', a: 'Yes. A clean filter keeps air moving freely, which protects the blower and compressor from overwork and overheating. A clogged filter is one of the most common reasons a healthy system starts to struggle.' },
      { q: 'How often should AC maintenance be scheduled?', a: 'Once a year, ideally in spring before cooling season. An annual visit catches small issues early and is usually required to keep the manufacturer warranty valid.' },
      { q: 'Can regular maintenance prevent AC breakdowns?', a: 'It prevents most of them. A routine visit spots worn parts, low refrigerant, and airflow problems before they cascade into a failure, which is why so many summer emergency calls trace back to a missed tune-up.' },
      { q: 'Does AC maintenance improve energy efficiency?', a: 'Yes. Clean coils, correct refrigerant levels, and unobstructed airflow let the system cool your home with less run time, which shows up as a lower monthly bill.' },
      { q: 'What happens if I skip AC maintenance?', a: 'The system works harder to do the same job, so bills climb, cooling gets weaker, and small problems are left to grow until the compressor finally gives out years sooner than it should.' },
      { q: 'Who should I call to maintain or extend the life of my AC unit?', a: 'A licensed HVAC professional. Our technicians handle tune-ups, repairs, and honest repair-versus-replace advice for homeowners across Cincinnati and the Tri-State — call (513) 586-5107.' },
    ],
  },
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
