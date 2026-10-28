# Evanston (Cincinnati, OH 45207): verified local facts (service-neutral)

## Fix in the existing site copy first
- `locations.ts` puts Evanston "next to Xavier University". Wikipedia places Xavier in Evanston, and 3800 Victory Pkwy geocodes to Tract 65.01, which is partly inside Evanston's statistical area. https://en.wikipedia.org/wiki/Evanston,_Cincinnati (to locate the source) ; https://geocoding.geo.census.gov/geocoder/
- `locations.ts` sets `county: 'Cincinnati Neighborhoods'`. The county is Hamilton County.
- "Early-1900s homes" is roughly right (median 1938, 71% pre-1940; see below), so "pre-1940" is safer. The student-housing claim is unverified.
- The entry has no neighbour list. Wikipedia names East Walnut Hills, Hyde Park, North Avondale, Walnut Hills and Norwood, but this is unverified against a city map. https://en.wikipedia.org/wiki/Evanston,_Cincinnati

## Where it is
- Evanston is a City of Cincinnati neighbourhood in Hamilton County. It was first the village of Idlewood, took the name Evanston in 1893 and was annexed by Cincinnati on 19 Nov 1903. https://en.wikipedia.org/wiki/Evanston,_Cincinnati (to locate the source)
- ZIP 45207: Census geocoder lookups at six Evanston addresses all returned it. https://geocoding.geo.census.gov/geocoder/
- The city's 2020 statistical approximation uses Tracts 38, 39 and 40, block group 1 of Tract 41 and block group 2 of Tract 65.01, with 8,838 residents in total. This was read from a search index only, because cincinnati-oh.gov refused the connection, so treat the population figure as unverified. https://cincinnati-oh.gov/sites/planning/assets/2020%20CENSUS/Evanston_2020.1.pdf
- I-71, built in the 1970s, cuts off the Montgomery Road strip north of Brewster from the rest of Evanston. https://ohiohistory.org/wp-content/uploads/2024/06/SG100007811-Evanston-Historic-District-Hamilton-County.pdf

## Housing stock (ACS 2020-2024 5-year, Tracts 38 + 39 + 40, Hamilton County)
Tracts 41 and 65.01 are left out because only one block group of each counts. The tracts were confirmed by geocoding Hewitt and Woodburn (39), Clarion and Brewster (38), and Dana and Evanston Ave (40). Sources: https://censusreporter.org/profiles/14000US39061003800-census-tract-38-hamilton-oh/ ; https://censusreporter.org/profiles/14000US39061003900-census-tract-39-hamilton-oh/ ; https://censusreporter.org/profiles/14000US39061004000-census-tract-40-hamilton-oh/ (tables B25001, B25003, B25024, B25034, B25035, B25040)
- Housing units: 3,198 (1,149 in Tract 38, 1,110 in Tract 39, 939 in Tract 40).
- Median year built: 1938 in all three tracts.
- By era:
  - 1939 or earlier: 2,269 units (70.9%)
  - 1940-1959: 422 (13.2%)
  - 1960-1979: 303 (9.5%)
  - 1980-1999: 75 (2.3%)
  - 2000 or later: 129 (4.0%)
- Units in structure:
  - single-family detached: 1,895 (59.3%)
  - single-family attached: 85
  - two-family: 409 (12.8%)
  - 3-4 units: 200
  - buildings of 5 or more units: 609 (19.0%)
  - mobile homes: 0
- Tenure: 1,534 of 2,655 occupied units are owner-occupied (57.8%). The split varies a lot by tract: Tract 38 is 66.0% rented (608 of 921), while Tract 40 is 81.6% owner-occupied (704 of 863).
- Heating fuel:
  - utility gas: 1,958 (73.7%)
  - electricity: 602 (22.7%)
  - propane: 4
  - solar: 35, all in Tract 38

## Permits
- The City of Cincinnati Department of Buildings & Inspections issues building, mechanical, plumbing and electrical permits for addresses inside city limits. https://www.cincinnati-oh.gov/buildings/old-apply-for-a-building-permit/permit-guide/residential-permit-guide/ ; https://cincinnati-oh.gov/buildings/building-construction-inspections/mechanical-inspections
- Unverified: carried over from sedamsville.md because cincinnati-oh.gov refused connections. Fees, timings and phone numbers are unverified too.

## Utility
- Electric and gas: Duke Energy Ohio serves the City of Cincinnati (carried over from sedamsville.md). https://www.duke-energy.com/home
- Rebates are unverified for Ohio, so don't quote amounts.

## Climate (NWS Wilmington, CVG; carried over from sedamsville.md)
- July normals (1991-2020): high 86F, low 65-66F. https://www.weather.gov/media/iln/climo_webpage/CVG_Jul.pdf ; https://www.weather.gov/iln/climate_normals_cvg
- On average, 21 days a year reach 90F or higher (1981-2010 normals). https://www.weather.gov/iln/90s

## Other local factors
- Evanston Historic District (National Register 100007811, listed 23 June 2022): Montgomery Road between Brewster and Rutland Avenues, with 19 buildings from 1885-1960, mostly shops with apartments above. Local designation is unverified. The nomination describes the surrounding area as apartments and single-family homes on "small, narrow grass lots". https://ohiohistory.org/wp-content/uploads/2024/06/SG100007811-Evanston-Historic-District-Hamilton-County.pdf
- Flood: FEMA flood zones were not checked (unverified).
