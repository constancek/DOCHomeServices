# Madisonville (Cincinnati, OH 45227): verified local facts (service-neutral)

## Fix in the existing site copy first
- `locations.ts` lists Mariemont as a neighbour. I could not confirm this. Census geocoder point checks along the south-east edge return a strip of unincorporated Columbia Township (inside Tract 56) between the city line and Mariemont. The city's verified neighbours on that side are the Village of Fairfax (south) and Columbia Township. Madeira and Indian Hill also touch the east and north-east edge. https://geocoding.geo.census.gov/geocoder/ (coordinate lookups, Incorporated Places layer)
- Kennedy Heights (Tract 58) borders the north and Oakley (Tracts 53.01/53.02) borders the west. Both were confirmed with the same geocoder checks. Pleasant Ridge (Tract 57.02) meets Madisonville only at a corner in the samples, so treat it as unverified. https://geocoding.geo.census.gov/geocoder/
- "Early-1900s homes" fits only part of the neighbourhood. One tract is mostly pre-1940 and the other is 42% built since 2000 (see below). "Galvanized and cast-iron pipe" in the plumbing copy is unverified because no source was found.

## Where it is
- Madisonville is a City of Cincinnati neighbourhood in Hamilton County, in the north-east of the city. Joseph Ward settled it in 1797, it was founded as Madison in 1809, and Cincinnati annexed it in 1911. https://en.wikipedia.org/wiki/Madisonville,_Cincinnati (to locate the source)
- ZIP 45227 covers most of it, but the ZIP also takes in Fairfax and Columbia Township, so ZIP figures aren't Madisonville figures (ACS 2024: 9,617 units in the ZIP). https://censusreporter.org/profiles/86000US45227-45227/
- The city's 2020 approximation uses Tracts 55 and 56 plus parts of 242, 244.01 and block group 2 of 279 (17,898 residents in total). Tracts 242 and 244.01 are mostly Madeira, Indian Hill and Columbia Township, so I used 55 + 56 as the core below. Unverified: the city PDF refused connections, so this comes from a search snippet. https://cincinnati-oh.gov/sites/planning/assets/2020%20CENSUS/Madisonville_2020.1.pdf
- Geocoder: Madison Rd, Red Bank Rd and Ward St addresses fall in Tract 55. Whetsel Ave, Bramble Ave and Roe St fall in Tract 56. https://geocoding.geo.census.gov/geocoder/

## Housing stock (ACS 2020-2024 5-year, Tracts 55 + 56, Hamilton County)
Sources: https://censusreporter.org/profiles/14000US39061005500-census-tract-55-hamilton-oh/ ; https://censusreporter.org/profiles/14000US39061005600-census-tract-56-hamilton-oh/ (tables B25001, B25003, B25024, B25034, B25035, B25040)
- Housing units: 5,355 (2,689 in Tract 55, 2,666 in Tract 56). Population: 4,732 and 4,987.
- Median year built: 1979 in Tract 55, 1938 in Tract 56.
- By era (combined):
  - 1939 or earlier: 2,458 (45.9%). That's 1,757 of 2,666 (65.9%) in Tract 56 and 701 (26.1%) in Tract 55.
  - 1940-1959: 1,051 (19.6%)
  - 1960-1979: 512 (9.6%)
  - 1980-1999: 200 (3.7%)
  - 2000 or later: 1,134 (21.2%), almost all in Tract 55 (624 from 2010-2019 and 165 from 2020 on)
- Units in structure:
  - single-family detached: 3,171 (59.2%)
  - two-family: 298
  - 3-4 units: 306
  - buildings of 5 or more units: 1,536 (28.7%), including 670 in buildings of 50 or more units in Tract 55
  - mobile homes: none
- Tenure: 2,541 of 5,047 occupied units are owner-occupied (50.3%). Tract 56 is 71.1% owner-occupied and Tract 55 is 69.2% rented.
- Heating fuel:
  - utility gas: 3,114 (61.7%)
  - electricity: 1,802 (35.7%). That's 51.1% in Tract 55 and 19.3% in Tract 56.
  - propane: 74

## Permits
- The City of Cincinnati Department of Buildings & Inspections issues building, mechanical, plumbing and electrical permits for city addresses. https://www.cincinnati-oh.gov/buildings/old-apply-for-a-building-permit/permit-guide/residential-permit-guide/ ; https://cincinnati-oh.gov/buildings/building-construction-inspections/mechanical-inspections
- Carried over from sedamsville.md because cincinnati-oh.gov refused connections. Fees, timings and phone numbers are unverified. Addresses in the Fairfax or Columbia Township parts of 45227 are not city permits.

## Utility
- Electric and gas: Duke Energy Ohio serves the City of Cincinnati. https://www.duke-energy.com/home (carried over from sedamsville.md). Rebates are unverified for Ohio.

## Climate (NWS Wilmington, CVG)
- July normals (1991-2020): high 86F, low 65-66F. https://www.weather.gov/media/iln/climo_webpage/CVG_Jul.pdf ; https://www.weather.gov/iln/climate_normals_cvg
- On average 21 days a year reach 90F or higher (1981-2010 normals). https://www.weather.gov/iln/90s

## Other local factors
- Ayres L. Bramble House, 4416 Homer Ave (Tract 56), is on the National Register (82003576, listed 1 April 1982). No Madisonville historic district was found. Local designation is unverified. https://npgallery.nps.gov/AssetDetail/NRIS/82003576
- Flooding: the Duck Creek floodgate on Madison Road failed to close in the July 2026 flash floods. The reporting centres on Oakley, and Madisonville is named among the hard-hit areas in only one summary, so Madisonville-specific basement flooding is unverified. MSD handles sewer backup claims. https://www.wcpo.com/news/local-news/hamilton-county/cincinnati/did-the-duck-creek-floodgate-fail-during-fridays-flash-floods-city-looks-into-possible-system-failure ; https://www.fox19.com/2026/07/22/duck-creek-floodgate-failure-prompts-questions-after-back-to-back-storms/
- FEMA flood zones were not checked.
