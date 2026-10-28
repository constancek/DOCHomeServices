# East End (Cincinnati, OH 45226 / 45202): verified local facts

## Fix in the existing site copy first
- `locations.ts` gives one ZIP, 45226. The western end of the neighbourhood along Riverside Drive is 45202: the Census geocoder matches 1800, 2500 and 2900 Riverside Dr to "Cincinnati, OH 45202", while 3500 and 4000 Eastern Ave are 45226. https://geocoding.geo.census.gov/geocoder/geographies/address?street=2500+Riverside+Dr&city=Cincinnati&state=OH&benchmark=Public_AR_Current&vintage=ACS2024_Current&layers=Census+Tracts&format=json
- The entry has no `adjacent` list. Neighbours are unverified because the city map was unreachable. Mount Adams's facts file puts the East End east of Mount Adams; Columbia-Tusculum sits uphill to the east/north. https://en.wikipedia.org/wiki/Mount_Adams,_Cincinnati
- The copy treats the East End as only "river cottages and condos along Eastern Avenue". Wikipedia describes a 7-mile strip that once held the city's manufacturing district and takes in Lunken Airport and Columbia Parkway. https://en.wikipedia.org/wiki/East_End,_Cincinnati
- "Sump pumps that fail" and "decades-old pipe" are inferences, not sourced facts.

## Where it is
- One of Cincinnati's 52 city neighbourhoods, Hamilton County, a strip along the Ohio River. 2020 Census: 1,476 residents, 861 housing units. https://en.wikipedia.org/wiki/East_End,_Cincinnati
- The riverside part reaching almost to Delta Avenue was annexed to the city between 1849 and 1855. https://libapps.libraries.uc.edu/liblog/wp-json/wp/v2/posts/7561
- The exact eastern boundary is unverified. A resident forum calls the core "Eastern Avenue between Delta and Beechmont" (informal source). https://urbanohio.com/topic/9693-east-end-cincinnati/

## Housing stock (ACS 2020-2024 5-year)
The geocoder puts 1800-2900 Riverside Dr and 3500-4000 Eastern Ave in Census Tract 266, and 4500-4800 Eastern Ave and 262 Wilmer Ave in Tract 47.03 (which also covers Columbia-Tusculum). Tract 266 is the core proxy. https://geocoding.geo.census.gov/geocoder/

Tract 266 (pop. 1,323): https://censusreporter.org/profiles/14000US39061026600-census-tract-266-hamilton-oh/
- Median year built 1938. Of 777 units, 423 (54.4%) predate 1940, 175 (22.5%) are from the 1990s and 151 (19.4%) from 2000 or later. Almost nothing was built 1950-1979.
- 347 single-family detached, 101 attached (rowhouse/townhouse), 135 two-family, 22 in 3-4 unit buildings, 172 in buildings of 5 or more units.
- 392 of 707 occupied units owner-occupied; 315 rented (44.6%).
- Heating fuel: 563 utility gas (79.6%), 112 electricity (15.8%), 7 propane.
- Median owner-occupied home value $522,700.
- Block Group 1 (eastern part, 3500-4000 Eastern Ave): 204 of 213 units pre-1940, 172 of 213 occupied units rented. Block Group 2 (Riverside Dr): median year built 1992, median value $555,100. https://censusreporter.org/profiles/15000US390610266001-block-group-1-census-tract-266-hamilton-oh/ ; https://censusreporter.org/profiles/15000US390610266002-block-group-2-census-tract-266-hamilton-oh/
- Tract 47.03 Block Group 1 (east of the core; boundary match unverified): 247 of 301 units pre-1940, 240 of 246 occupied units heat with gas, 6 with electricity. https://censusreporter.org/profiles/15000US390610047031-block-group-1-census-tract-4703-hamilton-oh/

## Permits
- City of Cincinnati Department of Buildings & Inspections issues building and mechanical permits for city addresses; a mechanical permit is required to install or replace an air conditioner. Reused from sedamsville.md (cincinnati-oh.gov refused connections again). https://www.cincinnati-oh.gov/buildings/old-apply-for-a-building-permit/permit-guide/residential-permit-guide/
- Plumbing and electrical permit specifics, fees, phone numbers: unverified.

## Utilities
- Electric and gas: Duke Energy Ohio (City of Cincinnati). https://www.duke-energy.com/home
- Sewer: Metropolitan Sewer District of Greater Cincinnati (from columbia-tusculum.md). https://www.wcpo.com/news/local-news/we-need-answers-columbia-tusculum-residents-frustrated-by-repeated-flooding-lack-of-solutions

## Ohio River flooding (NWS gauge CCNO1, Ohio River at Cincinnati)
Source for all bullets: https://water.noaa.gov/gauges/CCNO1 (API: https://api.water.noaa.gov/nwps/v1/gauges/CCNO1)
- Flood stages: action 40 ft, minor 52 ft, moderate 56 ft, major 65 ft.
- NWS impact statements: at 50-52 ft parts of Humbert Avenue in the East End flood; at 55.5 ft "basement flooding in East End occurs"; at 57 ft water surrounds homes between Route 52 and the river in the East End; at 60 ft some main levels of homes flood; at 69 ft NWS lists the East End among areas "with no flood protection" with the most severe inundation; at 71 ft Eastern Avenue floods.
- Record crest 80 ft (26 Jan 1937). Recent crests: 60.91 ft (7 Apr 2025), 55.46 ft (19 Feb 2025), 56.86 ft (4 Mar 2021), 64.7 ft (5 Mar 1997).
- FEMA flood zones per lot: not checked.

## Historic
- Several 1979 National Register buildings on the 3800-4000 blocks of Eastern Ave (e.g. Kestler Building, 4024 Eastern Ave, ref. 79002695) were listed under the Columbia-Tusculum Multiple Resource Area. Wikipedia places them in Columbia-Tusculum; the geocoder puts 4000 Eastern Ave in Tract 266. Which neighbourhood they belong to: unverified. No local historic district for the East End confirmed. https://en.wikipedia.org/wiki/Kestler_Building

## Climate (NWS Wilmington, CVG)
- July normal high 86F, low 65-66F (1991-2020). https://www.weather.gov/iln/climate_normals_cvg
- On average 21 days a year reach 90F (1981-2010). https://www.weather.gov/iln/90s
