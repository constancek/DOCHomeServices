# Western Hills (Cincinnati west side, OH 45211 / 45238): verified local facts (service-neutral)

## Fix in the existing site copy first
- `locations.ts` treats Western Hills as a Cincinnati neighborhood (`county: 'Cincinnati Neighborhoods'`). It isn't one. Wikipedia calls it "not a properly defined neighborhood or location" and says Covedale, Price Hill and parts of Green Township are "sometimes referred to as Western Hills". It's a loose area name that crosses three jurisdictions: the City of Cincinnati (Westwood, West Price Hill, city Covedale), the City of Cheviot and unincorporated Green Township. https://en.wikipedia.org/wiki/Western_Hills,_Cincinnati
- ZIP is given as 45211 only. Western Hills High School, the name's best-known landmark, is at 2144 Ferguson Rd, ZIP 45238. Use "45211 and 45238". https://geocoding.geo.census.gov/geocoder/ ; https://en.wikipedia.org/wiki/Western_Hills_High_School_(Cincinnati,_Ohio)
- "Early-1900s through mid-century single-family homes" overstates both. Only 31.0% (45211) and 11.4% (45238) of units date from before 1940, and 46.6% of 45211 homes are not single-family detached.
- The galvanized-line and lateral claims are unverified. The entry has no `adjacent` list.

## Where it is
- Western Hills Plaza (6000 Glenway Ave, ZIP 45211) geocodes **inside the City of Cincinnati**, tract 102.01. Land a few hundred yards west (-84.625, 39.144) is Bridgetown CDP, Green Township. https://geocoding.geo.census.gov/geocoder/ ; https://www.commercialcafe.com/commercial-property/us/oh/cincinnati/western-hills-plaza-2/
- 6290 Glenway Ave is in Green Township (45211). 5555 Glenway Ave and 2144 Ferguson Rd are in Cincinnati (45238). https://geocoding.geo.census.gov/geocoder/
- Westwood, Cincinnati's largest neighborhood (33,774 in 2020), has Cheviot on its west border. Whether the plaza sits in the Westwood statistical neighborhood is unverified. https://en.wikipedia.org/wiki/Westwood,_Cincinnati

## Housing (ACS 2020-2024 5-year, by ZIP code tabulation area)
These ZIPs are a proxy, because there's no Western Hills geography. 45211 also contains all of Cheviot. https://api.censusreporter.org/1.0/data/show/latest?table_ids=B25035,B25034,B25024,B25003,B25040&geo_ids=86000US45211,86000US45238
- **45211** (17,271 units): median year built 1958. 5,352 (31.0%) date from 1939 or earlier, 6,905 (40.0%) from 1940-1969 and 1,396 (8.1%) from 2000 or later. 9,225 (53.4%) are single-family detached, 1,183 two-unit and 3,023 (17.5%) in buildings of 10+ units. 52.5% of 15,924 occupied units are owner-occupied. Heating: gas 9,555 (60.0%), **electricity 5,908 (37.1%)**.
- **45238** (21,528 units): median year built 1962. 2,455 (11.4%) date from 1939 or earlier, 11,528 (53.5%) from 1940-1969 (**5,496, or 25.5%, from the 1950s**) and 1,068 (5.0%) from 2000 or later. 13,359 (62.1%) are single-family detached. 59.7% of 20,452 occupied units are owner-occupied. Heating: gas 11,976 (58.6%), **electricity 7,958 (38.9%)**.

## Permits (by address, because the area crosses jurisdictions)
- **City of Cincinnati addresses** (Westwood, West Price Hill, city Covedale): Department of Buildings & Inspections. Plumbing, electrical and HVAC each need a separate permit. https://www.cincinnati-oh.gov/buildings/old-apply-for-a-building-permit/permit-guide/residential-permit-guide/ ; mechanical: https://cincinnati-oh.gov/buildings/building-construction-inspections/mechanical-inspections
- **Cheviot addresses:** building permits go through the city, which contracts National Inspection Corporation. Mechanical and electrical are unverified. https://cheviot.org/departments/building-zoning/
- **Green Township addresses:** Hamilton County building permits. In the township-zoned area, a Green Township zoning certificate comes first. https://greentwp.org/zoning-application. The HVAC/mechanical permit office there is **unverified** (county site returned 403).
- **Plumbing outside Cincinnati:** Hamilton County Public Health, which covers the county "excluding the City of Cincinnati". https://hamiltoncountyhealth.org/services/plumbing/plumbing-permits/
- Fees and timings are unverified.

## Utilities
- Duke Energy Ohio: confirmed for Cheviot (https://cheviot.org/city-natural-gas-electric-aggregation-program/) and Green Township (https://greentwp.org/gas-and-electric-aggregation). Unverified for city addresses against a service map. https://www.duke-energy.com/home

## Climate (NWS Wilmington, CVG)
- The July normal high is 86.0F (1991-2020). https://www.weather.gov/iln/climate_normals_cvg
- About 21 days a year reach 90F or higher (1981-2010). https://www.weather.gov/iln/90s

## Local factors
- Westwood Town Center Historic District (Harrison and Epworth Aves) has been on the National Register since 1974 (ref 74001515). Whether it has any local design review is unverified. https://www.cincinnati-oh.gov/planning/historic-conservation/national-register-of-historic-places/nr-districts/
- The area is upland, with no river flood plain confirmed. FEMA zones are unverified; check by address at https://msc.fema.gov
