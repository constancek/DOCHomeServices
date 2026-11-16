# East Westwood (Cincinnati, OH 45225 / 45211): verified local facts (service-neutral)

## Fix in the existing site copy first
- `locations.ts` gives ZIP 45211 only. The neighbourhood's centre point (39.150N, 84.567W) falls in ZCTA 45225. Addresses on its Harrison Avenue edge (2320 and 2400 Harrison Ave) are in 45211. Use "45225 and 45211" or leave the ZIP out. https://en.wikipedia.org/wiki/East_Westwood,_Cincinnati (to locate the source) ; https://geocoding.geo.census.gov/geocoder/geographies/coordinates?x=-84.567&y=39.150&benchmark=Public_AR_Current&vintage=Current_Current&layers=2020%20Census%20ZIP%20Code%20Tabulation%20Areas&format=json
- `locations.ts` says it sits "on the slopes between Westwood and the Mill Creek valley". This is unverified. The city's 2020 map labels Westwood, Roll Hill, North Fairmount and English Woods around it, and North Fairmount lies between it and the Mill Creek valley. https://cincinnati-oh.gov/sites/planning/assets/2020%20CENSUS/EastWestwood_2020.pdf (as shown in search results; the city site refused connections)
- `locations.ts` calls the homes "early- and mid-1900s". The data below fits this for tract 88 (median 1958), but 37% of units there were built in 1960 or later. Its claims about "aging pipe prone to corrosion leaks" and hillside grade adding load on basement drains are unverified.
- Its FAQ says "on call every day", which is close to the brief's banned "7-day" wording.

## Where it is
- East Westwood is one of Cincinnati's 52 city neighbourhoods, in Hamilton County (county FIPS 39061). https://en.wikipedia.org/wiki/East_Westwood,_Cincinnati ; https://geocoding.geo.census.gov/geocoder/
- 2020 Census: 2,458 residents (2,445 in 2010) and 1,438 housing units. https://en.wikipedia.org/wiki/East_Westwood,_Cincinnati
- The city's statistical approximation uses Census Tract 88 plus part of Tract 100.02. In 2010, 1,667 residents were in tract 88 and 778 in 100.02. This is unverified because the city PDF could not be opened. https://www.cincinnati-oh.gov/sites/planning/assets/Census/2010/East-Westwood.pdf
- Geocoder checks: 2320 and 2400 Harrison Ave fall in Tract 88. 2626 Harrison Ave falls in 100.02. 2401 Harrison Ave, across the street, is in 100.03 (Westwood). https://geocoding.geo.census.gov/geocoder/

## Housing stock (ACS 2020-2024 5-year)
Tract 88 is the core proxy. Tract 100.02 has 3,166 units, more than twice the neighbourhood's total, so it is mostly Westwood and is not combined here. Source: https://censusreporter.org/profiles/14000US39061008800-census-tract-88-hamilton-oh/ (tables B25001, B25003, B25024, B25034, B25035, B25040)
- Housing units: 1,645. Median year built: 1958.
- By era:
  - 1939 or earlier: 387 (23.5%)
  - 1940-1959: 526 (32.0%), including 493 from the 1950s
  - 1960-1979: 393 (23.9%)
  - 1980-1999: 116 (7.1%)
  - 2000 or later: 223 (13.6%)
- Units in structure:
  - single-family detached: 641 (39.0%)
  - two-family: 210
  - 3-4 units: 141
  - buildings of 5 or more units: 653 (39.7%)
- Tenure: 1,004 of 1,322 occupied units are rented (75.9%). 318 are owner-occupied.
- Heating fuel: electricity 818 (61.9%), utility gas 504 (38.1%).
- For comparison, Tract 100.02 has a median year built of 1964, 50.6% of its homes heated with electricity, and 75.8% rented. https://censusreporter.org/profiles/14000US39061010002-census-tract-10002-hamilton-oh/
- Income (2016-2020 ACS): the median household income is $20,929. https://en.wikipedia.org/wiki/East_Westwood,_Cincinnati

## Permits
- City of Cincinnati Department of Buildings & Inspections issues building, mechanical, plumbing and electrical permits for addresses in city limits. https://www.cincinnati-oh.gov/buildings/old-apply-for-a-building-permit/permit-guide/residential-permit-guide/ ; https://cincinnati-oh.gov/buildings/building-construction-inspections/mechanical-inspections
- This is reused from sedamsville.md because cincinnati-oh.gov refused connections. Fees, timings and phone numbers are unverified.

## Utility
- Duke Energy Ohio supplies electricity and gas across the City of Cincinnati. https://www.duke-energy.com/home (reused from sedamsville.md). Rebates for Ohio are unverified.

## Climate (NWS Wilmington, CVG)
- July normals (1991-2020): high 86F, low 65-66F. https://www.weather.gov/media/iln/climo_webpage/CVG_Jul.pdf ; https://www.weather.gov/iln/climate_normals_cvg
- On average, 21 days a year reach 90F or higher (1981-2010 normals). https://www.weather.gov/iln/90s

## Other local factors
- No National Register district or individual listing inside East Westwood was found (unverified). The nearby Westwood Town Center Historic District is in Westwood. https://en.wikipedia.org/wiki/Westwood,_Cincinnati
- Terrain, hillside-overlay status and landslide history were not confirmed for East Westwood. Citywide, the city has spent nearly $114 million on landslide repairs and retaining walls (WVXU). https://www.wvxu.org/media/2022-09-01/laure-quinlivan-living-with-landslides-cincinnati-hillside-trust-tvkiese
- FEMA flood zones were not checked.
