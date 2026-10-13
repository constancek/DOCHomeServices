// Real customer success stories, provided by the client. The body is reproduced
// verbatim from the supplied story files (encoding cleaned only). cardImage,
// serviceTag, cardQuote/heroQuote, and related links are page scaffolding.

export type StoryBlock =
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: string[] };

export type SuccessStory = {
  slug: string;
  name: string;
  avatar: string;
  serviceTag: string;
  cardImage: string;
  cardQuote: string;
  heroQuote: string;
  blocks: StoryBlock[];
  related: { label: string; href: string }[];
};

export const successStories: SuccessStory[] = [
  {
    slug: 'emily-same-day-ac-repair',
    name: 'Emily Parker',
    avatar: '/people/emily.webp',
    serviceTag: 'AC Repair',
    cardImage: '/services/ac-repair-hero.webp',
    cardQuote: 'The speed and efficiency of the service exceeded my expectations.',
    heroQuote:
      'The speed and efficiency of the service exceeded my expectations. The technicians worked quickly while making sure every detail was handled properly.',
    blocks: [
      { type: 'heading', text: 'Introduction' },
      {
        type: 'paragraph',
        text: 'Emily chose Degree of Comfort after her air conditioning system suddenly stopped working during a hot stretch of weather. She needed a dependable HVAC company that could respond quickly and restore comfort to her home without unnecessary delays. Her experience demonstrates Degree of Comfort’s commitment to fast, reliable, and professional service.',
      },
      { type: 'heading', text: 'Recognizing the Need' },
      { type: 'subheading', text: 'The Challenge' },
      {
        type: 'paragraph',
        text: 'When Emily’s air conditioner unexpectedly failed, her home quickly became uncomfortable. With rising temperatures, she needed immediate assistance to diagnose and resolve the problem.',
      },
      { type: 'subheading', text: 'Goals and Expectations' },
      {
        type: 'paragraph',
        text: 'Her priority was to restore cooling as soon as possible while ensuring the repair was completed correctly. She wanted an honest assessment, dependable workmanship, and a long-lasting solution.',
      },
      { type: 'heading', text: 'Why Degree of Comfort?' },
      { type: 'subheading', text: 'Finding the Right HVAC Company' },
      {
        type: 'paragraph',
        text: 'After hearing positive feedback about Degree of Comfort and its reputation for dependable service, Emily felt confident choosing the company for her HVAC needs. Their professionalism and quick response made them the obvious choice.',
      },
      { type: 'subheading', text: 'What Stood Out' },
      {
        type: 'paragraph',
        text: 'Degree of Comfort’s fast response time, experienced technicians, and customer-first approach immediately impressed her. Their focus on quality service and clear communication set them apart from other companies.',
      },
      { type: 'subheading', text: 'Communication Throughout the Process' },
      {
        type: 'quote',
        text: 'The team kept me informed from beginning to end. After inspecting my system, they clearly explained the issue, provided a detailed estimate, and answered all of my questions honestly.',
      },
      { type: 'heading', text: 'The Service Experience' },
      { type: 'subheading', text: 'Inspection and Solution' },
      {
        type: 'paragraph',
        text: 'The technicians promptly evaluated the air conditioning system, identified the root cause of the issue, and recommended the best repair option. Their organized process allowed the work to begin without unnecessary delays.',
      },
      { type: 'subheading', text: 'Overcoming the Challenge' },
      {
        type: 'quote',
        text: 'Everyone was friendly, professional, and willing to answer every question I had. Their quick response and attention to detail made the entire experience much less stressful.',
      },
      { type: 'subheading', text: 'Professional Recommendations' },
      {
        type: 'paragraph',
        text: 'The team carefully explained the advantages of repairing the existing system versus replacing it, allowing Emily to make a confident and informed decision based on her needs and budget.',
      },
      { type: 'heading', text: 'The Results' },
      { type: 'subheading', text: 'Immediate Impact' },
      {
        type: 'paragraph',
        text: 'Thanks to Degree of Comfort’s prompt service, Emily’s air conditioning system was restored quickly, bringing immediate comfort back to her home.',
      },
      { type: 'subheading', text: 'Long-Term Value' },
      {
        type: 'paragraph',
        text: 'With the repair completed professionally, she now enjoys reliable cooling and peace of mind knowing the job was done right the first time.',
      },
      { type: 'subheading', text: 'Most Valuable Part of the Experience' },
      {
        type: 'quote',
        text: 'The speed and efficiency of the service were exceptional. The technicians worked quickly while still being thorough, making sure everything was completed correctly.',
      },
      { type: 'subheading', text: 'Would She Recommend Degree of Comfort?' },
      {
        type: 'quote',
        text: 'Absolutely. Degree of Comfort responded quickly, communicated clearly, and delivered outstanding service from start to finish. I would gladly recommend them to anyone looking for reliable HVAC professionals.',
      },
      { type: 'heading', text: 'Final Thoughts' },
      {
        type: 'quote',
        text: 'Degree of Comfort made a stressful situation easy to manage with their prompt response, professionalism, and quality workmanship. I’m extremely happy with the results and wouldn’t hesitate to call them again.',
      },
    ],
    related: [
      { label: 'AC Repair', href: '/services/ac-repair' },
      { label: 'AC Maintenance', href: '/services/ac-maintenance' },
      { label: 'Emergency service', href: '/services/emergency-plumbing' },
    ],
  },
  {
    slug: 'noah-fuel-oil-to-electric-furnace',
    name: 'Noah Smith',
    avatar: '/people/noah.webp',
    serviceTag: 'Furnace Replacement & Indoor Air Quality',
    cardImage: '/services/furnace-installation-replacement.webp',
    cardQuote: 'The entire process improved our home comfort and air quality significantly.',
    heroQuote:
      'Replaced fuel oil burning furnace with an electric furnace. The entire process improved our home comfort and air quality significantly.',
    blocks: [
      { type: 'heading', text: 'Introduction' },
      {
        type: 'paragraph',
        text: 'After dealing with an old and inefficient heating system for many years, I decided it was time for a full furnace replacement. I contacted Degree of Comfort for help upgrading my outdated fuel oil furnace to a modern electric furnace and HVAC system.',
      },
      {
        type: 'paragraph',
        text: 'My main goal was better indoor air quality, improved efficiency, and a more reliable home heating and cooling solution.',
      },
      { type: 'heading', text: 'The Problem' },
      {
        type: 'paragraph',
        text: 'My old fuel oil-burning furnace had been running for nearly 28 years. Over time, it started affecting the air quality in my home and became less reliable. I was also concerned about dust, discomfort, and rising inefficiency.',
      },
      { type: 'paragraph', text: 'I knew I needed a full HVAC system upgrade, not just a repair.' },
      { type: 'heading', text: 'Choosing Degree of Comfort' },
      {
        type: 'paragraph',
        text: 'I found Degree of Comfort HVAC services through recommendations and local reputation. They were well known for furnace installation in residential homes and full system replacements, including ductwork, AC, and heat pump installation.',
      },
      {
        type: 'paragraph',
        text: 'What stood out most was their reputation for handling complete HVAC replacement projects in a single installation process.',
      },
      { type: 'heading', text: 'The Installation Experience' },
      {
        type: 'paragraph',
        text: 'From the beginning, everything was clearly explained. The team outlined the full scope of work, including removal of the old fuel oil furnace, ductwork, AC, and heat pump system, and installation of a new electric furnace with upgraded HVAC components.',
      },
      {
        type: 'paragraph',
        text: 'Communication throughout the project was handled through phone and email, which made everything easy to follow.',
      },
      {
        type: 'paragraph',
        text: 'The crew worked efficiently and professionally. They removed the old system, installed the new equipment, and ensured the ductwork was properly sealed and secured.',
      },
      {
        type: 'paragraph',
        text: 'Even after installation, when a small adjustment was needed with a vent connection, the team returned quickly and corrected it. They also performed a full inspection of the ductwork and HVAC sealing system to ensure everything was properly optimized.',
      },
      { type: 'heading', text: 'Additional Upgrades & Improvements' },
      {
        type: 'paragraph',
        text: 'During the project, I also upgraded my system with a humidifier and air filtration system, which significantly improved indoor air quality. This helped reduce dust, static shocks, and overall dryness in the home.',
      },
      {
        type: 'paragraph',
        text: 'The team also made sure the new outdoor AC unit had proper spacing and ventilation, which required minor adjustments on my property.',
      },
      { type: 'heading', text: 'The Results' },
      { type: 'paragraph', text: 'The difference after installation was immediate.' },
      { type: 'paragraph', text: 'My home now has:' },
      {
        type: 'list',
        items: [
          'Better air quality and cleaner indoor environment',
          'More consistent and efficient heating and cooling',
          'Less dust buildup',
          'Improved sleep and overall comfort',
          'Reduced maintenance concerns',
        ],
      },
      {
        type: 'paragraph',
        text: 'The new electric furnace system has made a noticeable improvement in everyday comfort.',
      },
      { type: 'heading', text: 'Final Thoughts' },
      {
        type: 'paragraph',
        text: 'Working with Degree of Comfort was a smooth and professional experience from start to finish. The team was knowledgeable, efficient, and handled a full HVAC system replacement with care and attention to detail.',
      },
      {
        type: 'paragraph',
        text: 'I would highly recommend them to anyone considering a furnace replacement, HVAC upgrade, or fuel oil furnace conversion to electric heating systems.',
      },
    ],
    related: [
      { label: 'Furnace Installation & Replacement', href: '/services/furnace-installation-replacement' },
      { label: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
      { label: 'Heat Pumps', href: '/services/heat-pumps' },
    ],
  },
  {
    slug: 'trevor-allen-tankless-water-heater',
    name: 'Trevor Allen',
    avatar: '/people/trevor.webp',
    serviceTag: 'Tankless Water Heater',
    cardImage: '/services/tankless-hero.webp',
    cardQuote: 'Replaced our water heater with a tankless water heater.',
    heroQuote: 'Replaced our water heater with a tankless water heater.',
    blocks: [
      { type: 'heading', text: 'Introduction' },
      {
        type: 'paragraph',
        text: 'My old water heater had been in use for over 20 years, and it had started becoming unreliable. I reached out to Degree of Comfort Plumbing Services to look into replacing it with a more efficient solution. That’s when I learned about switching to a tankless water heater system.',
      },
      { type: 'heading', text: 'The Problem' },
      {
        type: 'paragraph',
        text: 'The biggest issue was inconsistency. Some days we had hot water, other times it ran out quickly or took too long to heat up. The system was also clearly becoming less efficient and likely costing more to run.',
      },
      {
        type: 'paragraph',
        text: 'At that point, I knew I needed a proper water heater replacement, not another repair.',
      },
      { type: 'heading', text: 'Why I chose Degree of Comfort' },
      {
        type: 'paragraph',
        text: 'I first came across Degree of Comfort Plumbing at a local home and garden show. After speaking with their team and learning more about their tankless water heater installation services, I felt confident they knew what they were doing.',
      },
      {
        type: 'paragraph',
        text: 'What stood out was how straightforward they were about the process and what needed to be done.',
      },
      { type: 'heading', text: 'The Installation Experience' },
      {
        type: 'paragraph',
        text: 'From the beginning, everything was clearly explained. They walked me through the process of removing the old unit and installing the new tankless water heater system, including how it would improve efficiency and hot water availability.',
      },
      {
        type: 'paragraph',
        text: 'The team handled the full job — removal of the old water heater, installation of the new system, and cleanup afterward. They worked efficiently and made sure everything was set up properly before leaving.',
      },
      {
        type: 'paragraph',
        text: 'Communication was also solid throughout the process, mainly through email and phone, which made everything easy to follow.',
      },
      {
        type: 'paragraph',
        text: 'There were no major issues during installation, and everything went smoothly from start to finish.',
      },
      { type: 'heading', text: 'The Results' },
      {
        type: 'paragraph',
        text: 'The difference after switching to a tankless water heater was noticeable right away.',
      },
      {
        type: 'list',
        items: [
          'We now have consistent hot water whenever we need it',
          'No more running out of hot water mid-use',
          'The system heats water more efficiently',
          'Overall performance feels much more reliable',
        ],
      },
      {
        type: 'paragraph',
        text: 'It’s also reassuring knowing the system should require less maintenance in the long run and help with energy efficiency.',
      },
      { type: 'heading', text: 'Final Thoughts' },
      {
        type: 'paragraph',
        text: 'Working with Degree of Comfort Plumbing was a smooth experience from start to finish. The installation was quick, the communication was clear, and everything was handled professionally.',
      },
      {
        type: 'paragraph',
        text: 'I’d definitely recommend them to anyone thinking about a water heater replacement or upgrading to a tankless water heater system.',
      },
    ],
    related: [
      { label: 'Tankless Water Heaters', href: '/services/tankless-water-heater' },
      { label: 'Water Heater Installation', href: '/services/water-heater-installation' },
      { label: 'Water Heater Repair', href: '/services/water-heater-repair' },
    ],
  },
  {
    slug: 'brian-washington-furnace-replacement',
    name: 'Brian Washington',
    avatar: '/people/brian.webp',
    serviceTag: 'Furnace Replacement',
    cardImage: '/services/furnace-install-hero.webp',
    cardQuote: 'Their commitment to quality and professional approach really stood out.',
    heroQuote: 'Yes, without hesitation. Their commitment to quality and professional approach really stood out.',
    blocks: [
      { type: 'heading', text: 'Introduction' },
      {
        type: 'paragraph',
        text: 'My furnace had been giving me trouble for a while and eventually reached the point where I knew it needed to be replaced. I contacted Degree of Comfort HVAC services to handle the furnace replacement, and the experience ended up being much smoother than I expected.',
      },
      { type: 'heading', text: 'The Problem' },
      {
        type: 'paragraph',
        text: 'The system was simply getting old and wasn’t heating the house the way it used to. During colder weather, it became clear that it couldn’t reliably keep the home comfortable anymore. At that point, I knew a full heating system replacement was the only real solution.',
      },
      { type: 'heading', text: 'Why I chose Degree of Comfort' },
      {
        type: 'paragraph',
        text: 'I chose Degree of Comfort because I had heard good things about their work and professionalism. Their reputation for handling furnace installation and HVAC replacement services gave me confidence that the job would be done properly.',
      },
      {
        type: 'paragraph',
        text: 'What also helped was knowing they had experience with full heating system installs, not just small repairs.',
      },
      { type: 'heading', text: 'The Installation Experience' },
      {
        type: 'paragraph',
        text: 'From the beginning, everything was explained in simple terms so I understood what was going to happen. The team walked me through the furnace replacement process, helped me choose the right system for my home, and made sure I was comfortable with the plan before starting.',
      },
      {
        type: 'paragraph',
        text: 'The installation itself was smooth and efficient. They removed the old furnace and installed the new high-efficiency heating system without any issues. I was kept informed throughout the process, which made everything feel easy and stress-free.',
      },
      { type: 'heading', text: 'The Results' },
      { type: 'paragraph', text: 'Once the new furnace was installed, I noticed the difference almost immediately.' },
      {
        type: 'list',
        items: [
          'The house heats up faster',
          'The temperature feels more consistent',
          'The system runs much more efficiently',
          'Overall comfort has improved a lot',
        ],
      },
      {
        type: 'paragraph',
        text: 'It’s also reassuring knowing I won’t have to worry about constant issues or breakdowns like before.',
      },
      { type: 'heading', text: 'Final Thoughts' },
      {
        type: 'paragraph',
        text: 'Overall, I’m very happy I went with Degree of Comfort. The whole furnace replacement process was handled professionally, and everything was done without complications.',
      },
      {
        type: 'paragraph',
        text: 'I would definitely recommend them to anyone looking for a furnace replacement, heating system upgrade, or HVAC installation service.',
      },
    ],
    related: [
      { label: 'Furnace Installation & Replacement', href: '/services/furnace-installation-replacement' },
      { label: 'Furnace Repair', href: '/services/furnace-repair' },
      { label: 'Furnace Maintenance', href: '/services/furnace-maintenance' },
    ],
  },
  {
    slug: 'chris-brown-full-hvac-replacement',
    name: 'Chris Brown',
    avatar: '/people/chris.webp',
    serviceTag: 'Full HVAC System Replacement',
    cardImage: '/services/heating-hero.webp',
    cardQuote: 'They stayed on top of everything and kept the project moving smoothly.',
    heroQuote:
      'The team was excellent at overcoming any challenges that came up. They stayed on top of everything and kept the project moving smoothly.',
    blocks: [
      { type: 'heading', text: 'Introduction' },
      {
        type: 'paragraph',
        text: 'I needed a full HVAC system replacement when my old unit started failing and couldn’t keep my home comfortable anymore. I reached out to Degree of Comfort HVAC services to handle the job, especially because it was an urgent situation that needed to be fixed properly and quickly.',
      },
      { type: 'heading', text: 'The Problem' },
      {
        type: 'paragraph',
        text: 'My old HVAC system had become unreliable and just wasn’t doing its job anymore. The house was uncomfortable, with uneven heating and cooling, and it was clear the system was no longer efficient.',
      },
      {
        type: 'paragraph',
        text: 'At that point, a full HVAC replacement was the only real solution to restore comfort in my home.',
      },
      { type: 'heading', text: 'Why I chose Degree of Comfort' },
      {
        type: 'paragraph',
        text: 'I chose Degree of Comfort because of their reputation for handling complete HVAC system installations and replacements in a professional and timely manner. I needed a company that could manage the entire job without delays or confusion.',
      },
      {
        type: 'paragraph',
        text: 'Their experience with similar HVAC projects gave me confidence that they could handle it properly.',
      },
      { type: 'heading', text: 'The Installation Experience' },
      {
        type: 'paragraph',
        text: 'From the start, the team kept me informed about everything they were doing. They explained the process clearly and made sure I understood how the new heating and cooling system would be installed.',
      },
      {
        type: 'paragraph',
        text: 'During the project, there were a few challenges, but the team handled them quickly and kept everything on track. I always felt like the job was under control, even when adjustments were needed.',
      },
      {
        type: 'paragraph',
        text: 'The installation itself was completed efficiently with minimal disruption, and the team made sure everything was working properly before finishing.',
      },
      { type: 'heading', text: 'The Results' },
      { type: 'paragraph', text: 'The difference after the new HVAC system was installed was immediate.' },
      {
        type: 'list',
        items: [
          'Much more consistent heating and cooling',
          'Better overall indoor comfort',
          'The system runs more efficiently',
          'The home feels balanced in temperature again',
        ],
      },
      {
        type: 'paragraph',
        text: 'It’s also reassuring knowing the system was installed properly and should perform reliably for years.',
      },
      { type: 'heading', text: 'Final Thoughts' },
      {
        type: 'paragraph',
        text: 'Overall, I’m very satisfied with the work done by Degree of Comfort. Even during a more challenging HVAC replacement project, they stayed professional, communicated well, and got the job done right.',
      },
      {
        type: 'paragraph',
        text: 'I would definitely recommend them for anyone needing a full HVAC system replacement or emergency heating and cooling service.',
      },
    ],
    related: [
      { label: 'AC Installation & Replacement', href: '/services/ac-installation-replacement' },
      { label: 'Furnace Installation & Replacement', href: '/services/furnace-installation-replacement' },
      { label: 'Heat Pumps', href: '/services/heat-pumps' },
    ],
  },
  {
    slug: 'ben-kennedy-furnace-and-ac-replacement',
    name: 'Ben Keneddy',
    avatar: '/people/ben.webp',
    serviceTag: 'Furnace & AC Replacement',
    cardImage: '/services/ac-install-hero.webp',
    cardQuote:
      'The team handled everything smoothly. There were no major issues during the replacement, and they kept me informed throughout the process.',
    heroQuote:
      'The team handled everything smoothly. There were no major issues during the replacement, and they kept me informed throughout the process.',
    blocks: [
      { type: 'heading', text: 'Introduction' },
      {
        type: 'paragraph',
        text: 'I’ve worked with Degree of Comfort HVAC services before, so when it came time to replace both my furnace and air conditioning system, I didn’t hesitate to call them again. This was a full HVAC system replacement, and I needed everything handled properly from start to finish.',
      },
      { type: 'heading', text: 'The Problem' },
      {
        type: 'paragraph',
        text: 'Both my furnace and AC unit had reached the point where they weren’t performing the way they should. The house wasn’t staying comfortable, and I could tell the systems were becoming inefficient and unreliable.',
      },
      {
        type: 'paragraph',
        text: 'At that point, a complete heating and cooling system replacement made the most sense.',
      },
      { type: 'heading', text: 'Why I chose Degree of Comfort' },
      {
        type: 'paragraph',
        text: 'I chose Degree of Comfort again because of past experience. I already knew their work was consistent, and I trusted them to handle a larger HVAC replacement project without issues.',
      },
      {
        type: 'paragraph',
        text: 'That existing relationship and their reputation for reliable service made the decision easy.',
      },
      { type: 'heading', text: 'The Installation Experience' },
      {
        type: 'paragraph',
        text: 'From the beginning, everything was explained clearly. The team laid out the full plan for replacing both the furnace and AC system, so I knew exactly what to expect.',
      },
      {
        type: 'paragraph',
        text: 'During the project, they kept me updated at every stage. The whole process was smooth, and there were no major issues or delays.',
      },
      {
        type: 'paragraph',
        text: 'They also made sure the new system was properly installed and tested before finishing the job.',
      },
      { type: 'heading', text: 'The Results' },
      { type: 'paragraph', text: 'Once everything was installed, the difference in comfort was immediate.' },
      {
        type: 'list',
        items: [
          'The home heats and cools much more evenly',
          'Temperature control feels consistent',
          'The system runs more efficiently',
          'Overall comfort is noticeably better',
        ],
      },
      {
        type: 'paragraph',
        text: 'It also gives me peace of mind knowing both systems were replaced properly and should last for years.',
      },
      { type: 'heading', text: 'Final Thoughts' },
      {
        type: 'paragraph',
        text: 'Overall, this was another positive experience with Degree of Comfort. They handled a full furnace and AC replacement without complications and kept everything well organized.',
      },
      {
        type: 'paragraph',
        text: 'I’d definitely recommend them to anyone needing a complete HVAC system replacement or home heating and cooling upgrade.',
      },
    ],
    related: [
      { label: 'AC Installation & Replacement', href: '/services/ac-installation-replacement' },
      { label: 'Furnace Installation & Replacement', href: '/services/furnace-installation-replacement' },
      { label: 'AC Maintenance', href: '/services/ac-maintenance' },
    ],
  },
];

export function getStory(slug: string): SuccessStory | undefined {
  return successStories.find((s) => s.slug === slug);
}
