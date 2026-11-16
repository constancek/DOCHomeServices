# Millvale (Cincinnati, OH 45225): verified local facts

## Fix in the existing site copy first
- `locations.ts` says Millvale sits on "low Mill Creek valley ground". This is only partly true. USGS elevations are about 506 ft at 3301 Beekman St and 548 ft at 3200 Moosewood Ave, against about 490 ft on the valley floor east toward the creek. Millvale is on the western slope of the valley, not the bottom. https://epqs.nationalmap.gov/v1/json?x=-84.551843654456&y=39.142711071392&units=Feet&wkid=4326 ; https://epqs.nationalmap.gov/v1/json?x=-84.551455560297&y=39.146900727335&units=Feet&wkid=4326
- "Older housing" is misleading. The tract's median year built is 1967, and Millvale's own block group has a median of 1982 (see below). Much of the housing is 1950s public-housing townhomes, many of them recently renovated. https://censusreporter.org/profiles/14000US39061007700-census-tract-77-hamilton-oh/
- Copy elsewhere (the `location-copy/*-parts` files) leans on "basements" and "flooding". Neither was verified for Millvale. FEMA's flood map service did not respond. Treat both as unverified.
- `locations.ts` has no neighbour list for Millvale. Verified neighbours: South Cumminsville borders Millvale, and Millvale, North Fairmount and South Cumminsville sit along Beekman Street west of Mill Creek. https://en.wikipedia.org/wiki/South_Cumminsville,_Cincinnati ; https://soapboxmedia.com/beekman-corridor-revitalization/

## Where it is
- Millvale is one of Cincinnati's 52 neighbourhoods, in Hamilton County. 2020 Census: 1,965 residents and 817 housing units. Wikipedia also lists 893 households, which exceeds the unit count, so the household figure is unverified. https://en.wikipedia.org/wiki/Millvale,_Cincinnati
- ZIP 45225 is confirmed by the Census geocoder for 3301 Beekman St and 3200 Moosewood Ave. https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress?address=3301+Beekman+St%2C+Cincinnati%2C+OH&benchmark=Public_AR_Current&vintage=Current_Current&format=json
- Beekman Street is the main north-south corridor, shared with North Fairmount, South Fairmount, English Woods and South Cumminsville. https://soapboxmedia.com/beekman-corridor-revitalization/
- About a third of residents live in public housing. https://en.wikipedia.org/wiki/Millvale,_Cincinnati CMHA describes its Millvale community as one- to six-bedroom townhomes built in the 1950s, "many of which recently underwent extensive interior and exterior renovations". https://cintimha.com/development/millvale/ A Michaels Development RAD partnership was announced; its date and status are unverified. https://tmo.com/michaels-selected-for-rad-conversion-millvale/

## Housing stock (ACS 2020-2024 5-year, Census Tract 77, Hamilton County)
Tract 77 (3,660 ± 839 residents) appears to include South Cumminsville too (1700 Dreman Ave, ZIP 45223, is in block group 2). Block group 1 (Beekman St and Moosewood Ave) is the best proxy for Millvale. Margins of error are very wide. https://censusreporter.org/profiles/15000US390610077001-bg-1-tract-77-hamilton-oh/
- **Block group 1:** median year built 1982 (± 22). The 1,067 units include 346 single-family attached, 119 detached, 147 in 3-4 unit buildings, 339 in 5-9 unit buildings, and 116 in buildings of 10 or more. 847 of 929 occupied units (91%) are rented. Heating fuel: 607 electricity (65%), 95 utility gas, 81 propane, 146 solar (likely a survey artefact, unverified).
- **Whole tract:** median year built 1967. Of 1,471 units, 303 date from 1939 or earlier, 300 from the 1950s and 190 from the 1960s. 953 of 1,311 occupied units (73%) are rented. 721 heat with electricity (55%) and 363 with utility gas. https://censusreporter.org/profiles/14000US39061007700-census-tract-77-hamilton-oh/

## Permits
- The City of Cincinnati Department of Buildings & Inspections issues building permits for city addresses. A mechanical permit is needed to install or replace an air conditioner. This fact is reused from sedamsville.md because cincinnati-oh.gov refused connections during this research. https://www.cincinnati-oh.gov/buildings/old-apply-for-a-building-permit/permit-guide/residential-permit-guide/ ; https://cincinnati-oh.gov/buildings/building-construction-inspections/mechanical-inspections
- Plumbing and electrical permit offices, fees and timings: unverified.

## Utilities
- Electric: Duke Energy Ohio, which serves the City of Cincinnati. https://www.duke-energy.com/home
- Water: Greater Cincinnati Water Works. Sewer: Metropolitan Sewer District of Greater Cincinnati. Both are unverified for Millvale addresses specifically. https://www.cincinnati-oh.gov/water/ ; https://msdgc.org/

## Climate (NWS Wilmington, CVG; reused from sedamsville.md)
- July normal high 86F, normal low 65-66F (1991-2020 normals). https://www.weather.gov/media/iln/climo_webpage/CVG_Jul.pdf
- On average 21 days a year reach 90F or higher (1981-2010 normals). https://www.weather.gov/iln/90s

## Other local factors
- FEMA flood zones, Mill Creek backwater risk and the local sewer-backup history are all unverified.
- No National Register or local historic district was found. Unverified, not ruled out.
