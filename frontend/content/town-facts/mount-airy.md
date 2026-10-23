# Mount Airy (Cincinnati, OH 45239 / 45223): verified local facts (service-neutral)

## Fix in the existing site copy first
- `locations.ts` says "ZIP 45239". Only partly right. The Census geocoder puts 5730 and 5555 Colerain Ave in 45239 but 5083 Colerain Ave (Mount Airy Forest) and Kirby Ave addresses in 45223. ZIP 45239 is also far bigger than the neighbourhood (29,607 residents, ACS 2024 5-year), so never use ZIP figures as Mount Airy figures. https://geocoding.geo.census.gov/geocoder/ ; https://censusreporter.org/profiles/86000US45239-45239/
- "Mid-century single-family homes" is half right. The era fits (median year built 1964), but only 38.8% of units are single-family detached and 62.3% of occupied homes are rented (see below).
- "One of the largest city parks in the country" is unverified. What is confirmed: it is the largest park in Cincinnati's system. https://en.wikipedia.org/wiki/Mount_Airy_Forest (to locate the source)
- "Hilltop terrain adds strain on drains during heavy rain" is unverified. No MSD or city source was found.
- `locations.ts` has no neighbour list for Mount Airy. Its boundaries with College Hill, Northside, Westwood and Green Township were not confirmed (unverified).

## Where it is
- One of Cincinnati's 52 neighbourhoods, in Hamilton County. It incorporated as a village in 1865 from Mill Creek and Green township land, and the city annexed it in 1911. https://en.wikipedia.org/wiki/Mount_Airy,_Cincinnati (to locate the source)
- 2020 Census: 9,210 residents, 4,388 housing units, 3,739 households (City of Cincinnati statistical neighbourhood approximation, read via Wikipedia because cincinnati-oh.gov refused connections). https://www.cincinnati-oh.gov/sites/planning/assets/2020%20CENSUS/MtAiry_2020.pdf
- Colerain Avenue is the main corridor. Census geocoder: 5555, 5600 Kirby and 5730 Colerain Ave and 2700 W North Bend Rd fall in Tract 83; 5083 Colerain Ave and 5455 Kirby Ave fall in Tract 85.01. https://geocoding.geo.census.gov/geocoder/
- Mount Airy Forest, 5083 Colerain Ave, is on the National Register (NRIS 10000191), periods of significance 1900-1974. NPS gives 1,459 acres; Wikipedia's infobox says 1,471. https://npgallery.nps.gov/AssetDetail/NRIS/10000191

## Housing stock (ACS 2020-2024 5-year, Tracts 83 + 85.01 combined, Hamilton County)
Which tracts the city's approximation uses is unverified (the PDF wouldn't load). These two tracts total 8,079 residents against the city's 9,210, and 85.01 also holds the forest, so treat this as a close proxy. https://censusreporter.org/profiles/14000US39061008300-census-tract-83-hamilton-oh/ ; https://censusreporter.org/profiles/14000US39061008501-census-tract-8501-hamilton-oh/ (tables B25003, B25024, B25034, B25035, B25040)
- Housing units: 4,127 (2,379 in Tract 83, 1,748 in Tract 85.01). Median year built 1964 in both.
- By era:
  - 1939 or earlier: 680 (16.5%)
  - 1940-1959: 932 (22.6%)
  - 1960-1979: 1,781 (43.2%)
  - 1980-1999: 606 (14.7%)
  - 2000 or later: 128 (3.1%)
- Units in structure: 1,601 single-family detached (38.8%), 242 attached, 132 two-family, 538 in 3-4 unit buildings, 1,614 in buildings of 5 or more (39.1%).
- Tenure: 2,366 of 3,797 occupied units rented (62.3%); 1,431 owner-occupied.
- Heating fuel: electricity 1,904 (50.1%), utility gas 1,706 (44.9%), propane 36, fuel oil 39. Tract 83 reports 95 wood-heated units; likely sampling noise, unverified.

## Permits
- The City of Cincinnati Department of Buildings & Inspections issues building, mechanical, plumbing and electrical permits inside city limits. Carried over from sedamsville.md because cincinnati-oh.gov refused connections; fees, timings and phone numbers unverified. https://www.cincinnati-oh.gov/buildings/old-apply-for-a-building-permit/permit-guide/residential-permit-guide/ ; https://cincinnati-oh.gov/buildings/building-construction-inspections/mechanical-inspections

## Utility
- Electric and gas: Duke Energy Ohio serves the City of Cincinnati. Rebates unverified for Ohio; don't quote amounts. https://www.duke-energy.com/home
## Climate (NWS Wilmington, CVG)
- July normals (1991-2020): high 86F, low 65-66F. https://www.weather.gov/media/iln/climo_webpage/CVG_Jul.pdf ; https://www.weather.gov/iln/climate_normals_cvg
- On average 21 days a year reach 90F or higher (1981-2010 normals). https://www.weather.gov/iln/90s

## Other local factors
- Hillside terrain: USGS says landslides in thin colluvium are widespread on steeper slopes of Cincinnati's valley walls. General, not Mount Airy-specific. https://pubs.usgs.gov/publication/b2059A
- FEMA flood zones not checked (unverified). No local historic district for homes was found (unverified).
