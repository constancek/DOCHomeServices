# Roselawn (Cincinnati, OH 45237): verified local facts (service-neutral)

## Fix in the existing site copy first
- `locations.ts` calls the housing "mid-century". That's roughly right, since the median year built is 1961-1962 (see below). But 20% of units predate 1940, so "mid-century" doesn't cover all of the stock.
- `locations.ts` says ZIP 45237 as if it were Roselawn's own ZIP. The ZIP is shared. The Census geocoder places 7800 Reading Rd, 45237 in the City of Reading and 2000 Section Rd, 45237 in Amberley Village, and both are outside Cincinnati. 1700 Langdon Farm Rd, 45237 falls in Tract 63, outside Roselawn's two tracts. So a 45237 address isn't automatically Roselawn or a City of Cincinnati permit address. https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress?address=7800+Reading+Rd%2C+Cincinnati%2C+OH+45237&benchmark=Public_AR_Current&vintage=Current_Current&layers=all&format=json
- The `localFaqs` answer says "on call every day, including Saturdays and Sundays". That breaks the brief's no-"7-day" rule in spirit.
- `locations.ts` has no neighbour list for Roselawn. Its borders are unverified. A Bond Hill link is confirmed only through the joint Bond Hill + Roselawn Plan (2019) and the shared Bond Hill/Roselawn redevelopment corporation. https://en.wikipedia.org/wiki/Roselawn,_Cincinnati (to locate the source)

## Where it is
- Roselawn is one of Cincinnati's 52 city neighbourhoods, in Hamilton County, on the north side along Reading Road. It was annexed to Cincinnati in 1905. https://en.wikipedia.org/wiki/Roselawn,_Cincinnati (to locate the source)
- 2020 Census: 7,039 residents and 3,672 housing units. Wikipedia cites the city's 2020 Statistical Neighborhood Approximation. The city PDF could not be opened because cincinnati-oh.gov refused connections, so treat these as unverified against the primary source. https://en.wikipedia.org/wiki/Roselawn,_Cincinnati
- Tracts: the Census geocoder puts 7600 Reading Rd, 1500 Summit Rd, 7700 Greenland Pl and 7600 Production Dr in Tract 110. It puts 7200 and 7400 Reading Rd, 1621 Section Rd and 1800 Seymour Ave in Tract 271. All of these are inside the City of Cincinnati. https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress?address=7600+Reading+Rd%2C+Cincinnati%2C+OH+45237&benchmark=Public_AR_Current&vintage=Current_Current&layers=all&format=json
- Unverified: that the city's own approximation uses exactly Tracts 110 + 271. ACS 2024 gives those two tracts 7,375 residents, which is close to the 2020 count.
- Terrain, creeks and flood zones were not checked (unverified).

## Housing stock (ACS 2020-2024 5-year, Tracts 110 + 271 combined, Hamilton County)
Sources: https://censusreporter.org/profiles/14000US39061011000-census-tract-110-hamilton-oh/ ; https://censusreporter.org/profiles/14000US39061027100-census-tract-271-hamilton-oh/ (tables B01003, B25001, B25003, B25024, B25034, B25035, B25040)
- Housing units: 3,859 (1,299 in Tract 110, 2,560 in Tract 271).
- Median year built: 1961 in Tract 110 and 1962 in Tract 271.
- By era:
  - 1939 or earlier: 783 (20.3%)
  - 1940-1959: 933 (24.2%)
  - 1960-1979: 1,798 (46.6%)
  - 1980-1999: 281 (7.3%)
  - 2000 or later: 64 (1.7%)
- Units in structure:
  - single-family detached: 1,512 (39.2%)
  - single-family attached: 109
  - two-family: 189
  - 3-4 units: 1,185 (30.7%)
  - buildings of 5 or more units: 820 (21.2%), of which 588 are in buildings of 50 or more units
  - Tract 271 also reports 44 mobile homes. That figure is likely sampling noise, so treat it as unverified.
- Tenure: 2,313 of 3,604 occupied units are rented (64.2%) and 1,291 are owner-occupied (35.8%).
- Heating fuel:
  - utility gas: 2,105 (58.4%)
  - electricity: 1,297 (36.0%)
  - propane: 87
  - fuel oil: 16
  - other: 47
  - none: 52

## Permits
- The City of Cincinnati Department of Buildings & Inspections issues building, mechanical, plumbing and electrical permits for addresses inside city limits. https://www.cincinnati-oh.gov/buildings/old-apply-for-a-building-permit/permit-guide/residential-permit-guide/ ; https://cincinnati-oh.gov/buildings/building-construction-inspections/mechanical-inspections
- Unverified: this is carried over from the Sedamsville facts file because cincinnati-oh.gov refused connections during this research. Fees, timings and phone numbers are also unverified.
- 45237 addresses in Reading or Amberley Village fall under those municipalities, not the city (see the geocoder note above). Their permit offices were not checked.

## Utility
- Electric and gas: Duke Energy Ohio serves the City of Cincinnati. https://www.duke-energy.com/home (carried over from sedamsville.md)
- Rebates are unverified for Ohio, so don't quote amounts.

## Climate (NWS Wilmington, CVG; carried over from sedamsville.md)
- July normals (1991-2020): high 86F, low 65-66F. https://www.weather.gov/media/iln/climo_webpage/CVG_Jul.pdf ; https://www.weather.gov/iln/climate_normals_cvg
- On average, 21 days a year reach 90F or higher (1981-2010 normals). https://www.weather.gov/iln/90s

## Other local factors
- No National Register listing inside Roselawn was found (unverified). The Reading Road listings that turned up, such as The Alameda Flats and The Crescent, are in the 3500-3700 blocks, far south of Roselawn. https://en.wikipedia.org/wiki/National_Register_of_Historic_Places_listings_in_eastern_Cincinnati
- Community plan: Bond Hill + Roselawn Plan (2019). Its contents were not reviewed. https://en.wikipedia.org/wiki/Roselawn,_Cincinnati (to locate the source)
