# Carthage (Cincinnati, OH 45216): verified local facts (service-neutral)

## Fix in the existing site copy first
- `locations.ts` gives the ZIP as 45215. That is wrong. The Census geocoder returns ZIP 45216 for 7500 Vine St, 7801 Vine St, 200 W North Bend Rd, 100 W Seymour Ave and 7200 Fairpark Ave. Addresses in 45215 belong to places such as the City of Wyoming (200 Compton Rd geocodes to Wyoming city, 45215). https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress?address=7500+Vine+St,+Cincinnati,+OH&benchmark=Public_AR_Current&vintage=Current_Current&layers=all
- `locations.ts` says "early-1900s homes". The era is roughly right: the median year built is 1938 and 68.5% of units predate 1940 (see below). "Galvanized and cast-iron pipe" and "corrosion leaks and drain backups are the usual problems" are unverified. No government source was found.
- `locations.ts` puts the fairgrounds "along Vine Street". News listings give two different addresses (7801 Anthony Wayne Ave and 7700 Vine St), so the street address is unverified. https://www.fox19.com/story/26209019/need-to-know-before-you-go-hamilton-county-fair/ ; https://www.citybeat.com/news/event-hamilton-county-fair-12215077/
- The entry has no neighbour list to check.

## Where it is
- Carthage is a City of Cincinnati neighbourhood in Hamilton County, in the northern part of the Mill Creek valley. It was settled in 1791 or 1792 (White's Station), incorporated as a village in 1868, and annexed by Cincinnati in 1911. https://en.wikipedia.org/wiki/Carthage,_Cincinnati (to locate the source)
- Neighbours: Elmwood Place, a separate village, borders it on the south. https://en.wikipedia.org/wiki/Carthage,_Cincinnati ; https://hamilton.ohgenweb.org/howe/863.html . Hartwell lies to the north (8100 Vine St and 100 E Galbraith Rd geocode to Tract 60, Cincinnati). https://geocoding.geo.census.gov/geocoder/ . Roselawn is unverified as a direct neighbour. The city's Carthage map that would confirm it refused connections. https://cincinnati-oh.gov/sites/planning/assets/2020%20CENSUS/Carthage_2020.pdf
- Vine Street is the main corridor. https://en.wikipedia.org/wiki/Carthage,_Cincinnati
- 2020 Census: 2,781 residents and 1,187 housing units, as reported by Wikipedia. The city PDF could not be opened to confirm the figures. https://en.wikipedia.org/wiki/Carthage,_Cincinnati
- The Hamilton County Fair, run by the Hamilton County Agricultural Society, is held at the fairgrounds in Carthage. https://www.wcpo.com/news/local-news/hamilton-county/cincinnati/carthage/hamilton-county-fair-kicks-off-wednesday-with-free-admission

## Housing stock (ACS 2020-2024 5-year, Census Tract 61, Hamilton County)
Tract 61 is the Carthage tract: every Carthage test address geocodes to it, and Hartwell addresses fall in Tract 60. The tract is small, so the margins of error are wide (total units 1,105 ±157). Source: https://censusreporter.org/profiles/14000US39061006100-census-tract-61-hamilton-oh/ (tables B25001, B25003, B25024, B25034, B25035, B25040)
- Housing units: 1,105. Population estimate: 3,183 ±934.
- Median year built: 1938.
- By era:
  - 1939 or earlier: 757 (68.5%)
  - 1940-1959: 176 (15.9%)
  - 1960-1979: 71 (6.4%)
  - 1980-1999: 54 (4.9%)
  - 2000 or later: 47 (4.3%), with none built since 2010
- Units in structure:
  - single-family detached: 672 (60.8%)
  - single-family attached: 10
  - two-family: 119
  - 3-4 units: 122
  - 10-49 units: 182
  - mobile homes: 0
- Tenure: 554 of 979 occupied units are owner-occupied (56.6%) and 425 are rented (43.4%).
- Heating fuel: utility gas 793 (81.0%), electricity 186 (19.0%), with no propane or oil reported.

## Permits
- The City of Cincinnati Department of Buildings & Inspections issues building, mechanical, plumbing and electrical permits for addresses inside city limits. Mechanical inspections are handled by B&I. https://www.cincinnati-oh.gov/buildings/old-apply-for-a-building-permit/permit-guide/residential-permit-guide/ ; https://cincinnati-oh.gov/buildings/building-construction-inspections/mechanical-inspections
- This is carried over from the Sedamsville facts file because cincinnati-oh.gov refused connections during this research. Fees, timings and phone numbers are unverified.

## Utility
- Electric and gas: Duke Energy Ohio serves the City of Cincinnati. https://www.duke-energy.com/home (carried over from sedamsville.md)
- Rebates are unverified for Ohio, so don't quote amounts.

## Climate (NWS Wilmington, CVG)
- July normals (1991-2020): high 86F, low 65-66F. https://www.weather.gov/media/iln/climo_webpage/CVG_Jul.pdf ; https://www.weather.gov/iln/climate_normals_cvg
- On average, 21 days a year reach 90F or higher (1981-2010 normals). https://www.weather.gov/iln/90s

## Other local factors
- Flood: Carthage sits in the Mill Creek valley, but the FEMA flood map service (hazards.fema.gov) did not respond, so flood zone status for any address is unverified. Make no flood claims. https://msc.fema.gov/portal/home
- Historic districts: no National Register district or local historic district in Carthage was found (unverified). The Arlington School listing at 607 Carthage Ave is not confirmed to be in the Carthage neighbourhood. https://en.wikipedia.org/wiki/National_Register_of_Historic_Places_listings_in_Hamilton_County,_Ohio
