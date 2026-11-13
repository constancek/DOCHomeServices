# Camp Washington (Cincinnati, OH 45225): verified local facts (service-neutral)

## Fix in the existing site copy first
- `locations.ts` gives the county as "Cincinnati Neighborhoods". That is a site grouping, not a county. Camp Washington is in Hamilton County (Census geocoder returns Hamilton County, Tract 28). https://geocoding.geo.census.gov/geocoder/
- `locations.ts` has no `adjacent` list for Camp Washington. Neighbours, per Wikipedia (unverified against a city map): Queensgate to the south, Fairmount to the west, Clifton and University Heights to the east. https://en.wikipedia.org/wiki/Camp_Washington,_Cincinnati (to locate the source)
- "Low valley ground raises the risk of drain and sewer backups" is unverified for this neighbourhood. No Camp Washington-specific flood or backup data was found (see below).
- "Old worker housing" fits the build dates, but the house style itself is unverified.
- The FAQ question uses an em dash, which the brief bans.

## Where it is
- One of Cincinnati's 52 neighbourhoods, beside the Mill Creek. Annexed to the city in November 1869. 2020 Census: 1,234 residents, 620 housing units (city statistical approximation, cited by Wikipedia; cincinnati-oh.gov refused connections, so the PDF itself was not opened). https://en.wikipedia.org/wiki/Camp_Washington,_Cincinnati ; https://www.cincinnati-oh.gov/sites/planning/assets/Census/2020/Camp-Washington.pdf
- Census Tract 28, Hamilton County. The geocoder puts 1330 Monmouth St (American Sign Museum), 3005 and 3301 Colerain Ave and 1329 Arlington St all in Tract 28. Tract 28's ACS population (1,143) is close to the neighbourhood's 2020 count, so it is a good proxy. https://geocoding.geo.census.gov/geocoder/
- ZIP 45225 is far bigger than the neighbourhood (9,583 residents, 4,963 housing units, ACS 2024 5-year). Don't use ZIP figures as Camp Washington figures. https://censusreporter.org/profiles/86000US45225-45225/

## Housing stock (ACS 2020-2024 5-year, Tract 28)
Source: https://censusreporter.org/profiles/14000US39061002800-census-tract-28-hamilton-oh/ (tables B25001, B25003, B25024, B25034, B25035, B25040, B25077). Margins of error are large (total units 640 +/- 138), so treat the shares as approximate.
- Median year built: 1938.
- By era: 569 of 640 units (88.9%) built in 1939 or earlier; 23 in the 1940s, 11 in the 1960s, 37 in the 1970s. Zero units reported from 1980 onward.
- Units in structure: 219 single-family detached (34.2%), 121 two-family, 119 in 3-4 unit buildings, 89 in 5-9 unit buildings, 26 in 10-49 unit buildings, 66 in buildings of 50 or more. No mobile homes.
- Tenure: 435 of 548 occupied units rented (79.4%), 113 owner-occupied (20.6%).
- Heating fuel: utility gas 338 (61.7%), electricity 182 (33.2%), no fuel 28. No propane or oil reported.
- Median home value: $124,600 (+/- $51,503).

## Permits
- The City of Cincinnati Department of Buildings & Inspections issues building, mechanical, plumbing and electrical permits inside city limits. Carried over from the Sedamsville facts file; cincinnati-oh.gov refused connections during this research, so treat as unverified for this file. Fees, timings and phone numbers unverified. https://www.cincinnati-oh.gov/buildings/old-apply-for-a-building-permit/permit-guide/residential-permit-guide/ ; https://cincinnati-oh.gov/buildings/building-construction-inspections/mechanical-inspections

## Utility
- Duke Energy Ohio serves the City of Cincinnati for electric and gas (carried over from Sedamsville file). https://www.duke-energy.com/home
- Rebates unverified for Ohio; don't quote amounts.

## Climate (NWS Wilmington, CVG; reused from Sedamsville file)
- July normals (1991-2020): high 86F, low 65-66F. https://www.weather.gov/media/iln/climo_webpage/CVG_Jul.pdf
- On average 21 days a year reach 90F or higher (1981-2010 normals). https://www.weather.gov/iln/90s

## Other local factors
- National Register: Oesterlein Machine Company-Fashion Frocks, Inc. Complex (NRIS 05001186, listed 2005; 3301 Colerain Ave and 1326 Monmouth Ave, now the American Sign Museum and loft apartments). https://npgallery.nps.gov/AssetDetail/NRIS/05001186
- National Register: Crosley Building (NRIS 15000042, listed 2015; 1329-1333 Arlington St, built 1929 for the Crosley Radio Corporation). https://npgallery.nps.gov/AssetDetail/NRIS/15000042
- Both are individual listings, not a residential district. No local historic district for Camp Washington was found (unverified). National Register listing alone does not trigger city design review.
- Flooding: the Mill Creek Barrier Dam (US Army Corps of Engineers, 1948) protects the Mill Creek valley from Ohio River backwater; the valley flooded in 1913, 1937 and 1945. https://www.cincinnati-oh.gov/cityofcincinnati/news/city-prepares-for-forecasted-flooding-4425 ; https://ndia.dtic.mil/wp-content/uploads/2005/triservice/track6/greenwell.pdf . FEMA flood zones for Camp Washington lots were not checked (unverified).
- Sewer backups: MSD reimburses qualifying damage when the public sewer causes a backup; reports must be made within 48 hours. Citywide policy, not Camp Washington data. https://www.cincinnati-oh.gov/cityofcincinnati/news/city-transitions-to-cleanup-efforts-following-flooding
