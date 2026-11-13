# South Cumminsville (Cincinnati, OH 45223/45225): verified local facts

## Fix in the existing site copy first
- `locations.ts` and every `*-parts/part2.ts` entry say "ZIP 45225". The Census geocoder puts the residential core at 45223: 1700, 1814 and 1900 Dreman Ave, 1800-2000 Elmore St, and 3100 Beekman St. 3000 Beekman St comes back as 45225. Say "45223" or "45223 and 45225". https://geocoding.geo.census.gov/geocoder/
- "Older homes" is only half right. In the closest block group, the median home dates from 1952, 45.5% of homes predate 1940, and 15.6% were built in 2010 or later (see housing). https://censusreporter.org/profiles/15000US390610077002-bg-2-tract-77-hamilton-oh/
- "Low Mill Creek valley ground" with sewer backups in heavy rain, and "the valley floor traps summer heat and humidity" (AC parts): unverified. No MSD, FEMA or NWS source found for this neighbourhood.
- `locations.ts` has no neighbour list. Wikipedia names Northside, Camp Washington, Millvale and Fay Apartments, but flags it "citation needed", so treat it as unverified. https://en.wikipedia.org/wiki/South_Cumminsville,_Cincinnati

## Where it is
- One of Cincinnati's 52 city neighbourhoods, in Hamilton County. 2020 Census: 702 residents and 366 housing units (the city's Statistical Neighborhood Approximation, cited by Wikipedia; the city PDF refused connections). https://en.wikipedia.org/wiki/South_Cumminsville,_Cincinnati ; https://www.cincinnati-oh.gov/sites/planning/assets/2020%20CENSUS/SouthCumminsville_2020.pdf
- It was the southern part of Cumminsville, which the city annexed in 1873. The sub-neighbourhood around Follett and Dreman Avenues kept the South Cumminsville name. https://en.wikipedia.org/wiki/South_Cumminsville,_Cincinnati
- Beekman Street runs through it. The Port is cleaning up former industrial sites along the Beekman Corridor, including 3140 Beekman (which it places in Millvale). https://www.cincinnatiport.org/?p=17102

## Housing stock (ACS 2020-2024 5-year, Census Tract 77, Block Group 2, Hamilton County)
The geocoder puts every Dreman Ave and Elmore St address tested, plus 3000-3100 Beekman, in BG 2 of tract 77. BG 2 has an estimated 1,299 residents, nearly double the 2020 neighbourhood count, so it is a proxy and also covers some neighbouring blocks. https://geocoding.geo.census.gov/geocoder/ ; https://censusreporter.org/profiles/15000US390610077002-bg-2-tract-77-hamilton-oh/
- Median year built: 1952. Of 404 units, 184 (45.5%) were built in 1939 or earlier, 117 (29.0%) in 1950-1959, 40 in 1960-1979, and 63 (15.6%) in 2010 or later. https://censusreporter.org/data/table/?table=B25034&geo_ids=15000US390610077002
- Units in structure: 328 single-family detached (81.2%), 7 attached, 6 in 20-49 unit buildings, and 63 in buildings of 50+ units. https://censusreporter.org/data/table/?table=B25024&geo_ids=15000US390610077002
- Tenure: 276 of 382 occupied units are owner-occupied (72.3%) and 106 are rented. https://censusreporter.org/data/table/?table=B25003&geo_ids=15000US390610077002
- Heating fuel: 268 utility gas (70.2%) and 114 electricity (29.8%). https://censusreporter.org/data/table/?table=B25040&geo_ids=15000US390610077002
- For contrast, BG 1 of the same tract has a median year of 1982, 847 of 929 households renting, and 607 heating with electricity. Don't apply those numbers to South Cumminsville. https://censusreporter.org/profiles/15000US390610077001-bg-1-tract-77-hamilton-oh/

## Permits (reused from sedamsville.md and northside.md; cincinnati-oh.gov refused connections)
- City of Cincinnati Department of Buildings & Inspections. A B&I mechanical permit covers installing or replacing an air conditioner or furnace. https://www.cincinnati-oh.gov/buildings/old-apply-for-a-building-permit/permit-guide/residential-permit-guide/
- New and replacement plumbing needs a permit and inspections, and the work must be done by an Ohio-licensed plumber. https://www.cincinnati-oh.gov/buildings/building-construction-inspections/plumbing-inspections/
- Electrical permit office, fees, timings and phone numbers: unverified. https://www.cincinnati-oh.gov/buildings/

## Utilities
- Electric and gas: Duke Energy Ohio, which serves the City of Cincinnati. https://news.duke-energy.com/releases/duke-energy-ohio-files-request-for-regulatory-review-of-its-natural-gas-rates-reflects-infrastructure-improvements-to-enhance-service-to-customers
- Sewer: MSD of Greater Cincinnati. Its Sewer Backup Program covers backups caused by the public sewer, not private lines or overland flooding. https://msdgc.org/programs/sewer-backup-program/about-the-program
- Duke rebate amounts: unverified. https://www.duke-energy.com/home/products/home-energy-improvement/hvac-replacement

## Climate (NOAA 1991-2020 normals, CVG; reused from northside.md)
- July normal high 86.0F, low 65.9F. January normal high 39.6F, low 23.1F. https://www.ncei.noaa.gov/access/services/data/v1?dataset=normals-monthly-1991-2020&stations=USW00093814&dataTypes=MLY-TMAX-NORMAL,MLY-TMIN-NORMAL&format=json
- 4,892 heating degree days and 1,160 cooling degree days a year. https://www.ncei.noaa.gov/access/services/data/v1?dataset=normals-annualseasonal-1991-2020&stations=USW00093814&dataTypes=ANN-HTDD-NORMAL,ANN-CLDD-NORMAL&format=json
- On average 21 days a year reach 90F or higher (1981-2010). https://www.weather.gov/iln/90s

## Other local factors
- No National Register district was found in South Cumminsville. The nearby Lunkenheimer Valve Company District is in South Fairmount. https://www.cincinnatiport.org/lunkenheimer-district-national-register/
- FEMA flood zone status for South Cumminsville streets: unverified. The FEMA query service failed. https://msc.fema.gov/portal/search
- The Mill Creek's exact position relative to the homes: unverified. https://en.wikipedia.org/wiki/Mill_Creek_(Ohio)
