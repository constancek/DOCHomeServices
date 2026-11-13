# Queensgate (Cincinnati, OH 45203): verified local facts

## Fix in the existing site copy first
- `locations.ts` sets `county: 'Cincinnati Neighborhoods'`. That is a site grouping, not a county. Queensgate is in Hamilton County. https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress?address=1301+Western+Ave%2C+Cincinnati%2C+OH+45203&benchmark=Public_AR_Current&vintage=Current_Current&layers=Census+Tracts&format=json
- "Older industrial buildings on low ground prone to flooding" near Mill Creek is unverified. No NWS, FEMA or USACE source naming Queensgate was found (the NWS Ohio River gauge impact list does not mention it). https://water.noaa.gov/gauges/CCNO1
- The entry gives no residential figures. Any page should say plainly that very few people live here (see below).

## Where it is
- One of Cincinnati's 52 neighbourhoods, in the valley beside downtown, "dominated by industrial and commercial warehouses". https://en.wikipedia.org/wiki/Queensgate,_Cincinnati
- It was the Lower West End (Kenyon-Barr), population 25,737 in 1958. The city razed it in the late 1950s and early 1960s for I-75 and an industrial district; city council apologised in 2023. https://en.wikipedia.org/wiki/Queensgate,_Cincinnati
- Core addresses (1301 Western Ave, 700 W Pete Rose Way, 1000 W 8th St) geocode to ZIP 45203, Census Tract 263, Block Group 1. https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress?address=700+W+Pete+Rose+Way%2C+Cincinnati%2C+OH+45203&benchmark=Public_AR_Current&vintage=Current_Current&layers=Census+Tracts&format=json
- 2010 population: 142. https://en.wikipedia.org/wiki/Queensgate,_Cincinnati (city 2020 profile could not be loaded; cincinnati-oh.gov refused the connection)

## Housing: there is very little
Tract 263 is one block group that also covers Lower Price Hill (601 Evans St and 2000 State Ave geocode to it too), so tract ACS figures describe Lower Price Hill's houses, not Queensgate. https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress?address=601+Evans+St%2C+Cincinnati%2C+OH+45204&benchmark=Public_AR_Current&vintage=Current_Current&layers=Census+Tracts&format=json
- 2020 Census blocks in tract 263 east of Mill Creek (my split by block centroid; the exact boundary is unverified): about 150 residents and 24 housing units across five blocks. One block has 86 residents in 2 units, which suggests group quarters (not identified). West of the creek: 922 residents, 410 units. https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Census2020/MapServer/10/query?where=STATE%3D%2739%27+AND+COUNTY%3D%27061%27+AND+TRACT%3D%27026300%27+AND+HU100%3E0&outFields=BLOCK,POP100,HU100,CENTLON,CENTLAT&returnGeometry=false&f=json
- ACS 2020-2024 5-year, whole tract 263 (mostly Lower Price Hill): 1,245 residents, 498 units, median year built 1938, 323 units (64.9%) built 1939 or earlier, 39 from 2000-2009, none after 2010. https://censusreporter.org/profiles/14000US39061026300-census-tract-263-hamilton-oh/
- Same tract: 56 detached, 89 attached, 95 two-family, 164 in 3-4 unit buildings, 94 in 5-49. 334 of 404 occupied units rented (82.7%). Heating fuel: 192 electricity (47.5%), 186 utility gas (46.0%), 26 fuel oil. https://censusreporter.org/profiles/14000US39061026300-census-tract-263-hamilton-oh/
- Queensgate's own home types, ages and heating fuel: unverified. Treat it as a commercial district.

## Permits
- City of Cincinnati Department of Buildings & Inspections issues permits for City addresses; a mechanical permit covers installing or replacing an air conditioner. Reused from sedamsville.md (city site refused connection today). https://www.cincinnati-oh.gov/buildings/old-apply-for-a-building-permit/permit-guide/residential-permit-guide/ ; https://cincinnati-oh.gov/buildings/building-construction-inspections/mechanical-inspections
- Commercial permit rules, plumbing and electrical offices, fees: unverified.

## Utilities
- Electric: Duke Energy Ohio serves the City of Cincinnati (reused from sedamsville.md). https://www.duke-energy.com/home
- Water: Greater Cincinnati Water Works; sewer: MSD of Greater Cincinnati. Unverified for Queensgate addresses. https://www.cincinnati-oh.gov/water/ ; https://msdgc.org/

## Climate (NWS Wilmington, CVG; reused from sedamsville.md)
- July normal high 86F, low 65-66F (1991-2020). https://www.weather.gov/media/iln/climo_webpage/CVG_Jul.pdf
- About 21 days a year reach 90F or higher (1981-2010). https://www.weather.gov/iln/90s

## Other local factors
- Cincinnati Union Terminal, 1301 Western Ave, is a National Historic Landmark (designated 5 May 1977). Work there is a museum matter, not a homeowner job. https://www.nps.gov/subjects/nationalhistoriclandmarks/list-of-nhls-by-state.htm
- A reconnected street grid tied to the Brent Spence companion bridge was approved in May 2024. Treat as planned, not built. https://en.wikipedia.org/wiki/Queensgate,_Cincinnati
- Ohio River at Cincinnati: flood stage 52 ft, record 80 ft (Jan 1937). Mill Creek flood protection for Queensgate: unverified. https://water.noaa.gov/gauges/CCNO1
