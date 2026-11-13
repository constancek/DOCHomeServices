# Shared facts (already verified): reuse, don't re-research

Research agents: copy what applies into the town's facts file with its source, and say "from _shared.md". Only research what is town-specific.

## Climate (every town; NWS Wilmington, station at CVG airport)
- July normal high 86F, normal low 65-66F (1991-2020 normals). https://www.weather.gov/media/iln/climo_webpage/CVG_Jul.pdf ; https://www.weather.gov/iln/climate_normals_cvg
- On average 21 days a year reach 90F or higher (1981-2010 normals); CVG itself is cited at about 22. https://www.weather.gov/iln/90s
- No verified humidity figure. Avoid "river humidity" claims.
- Cold (for heating pages): January normal high about 40F, normal low about 23F (NOAA 1991-2020 normals, CVG). https://www.weather.gov/media/iln/climo_webpage/CVG_Jan.pdf ; https://www.ncei.noaa.gov/access/services/data/v1?dataset=normals-monthly-1991-2020&stations=USW00093814&dataTypes=MLY-TMAX-NORMAL,MLY-TMIN-NORMAL&format=json
- About 100 nights a year at or below freezing (99.8, NOAA 1991-2020 normals, CVG). https://www.ncei.noaa.gov/access/services/data/v1?dataset=normals-annualseasonal-1991-2020&stations=USW00093814&dataTypes=ANN-HTDD-NORMAL,ANN-CLDD-NORMAL,ANN-PRCP-NORMAL,ANN-TMIN-AVGNDS-LSTH032&format=json
- Normal first freeze around October 25 (1 year in 10 by October 12). https://www.weather.gov/iln/fallfrostfreeze

## Rental heat rules (for heating pages)
- City of Cincinnati only: rentals where tenants don't control their own heat must be kept at 70F or more indoors once the outdoor temperature stays below 60F for 24 hours; fines are $300 the first day and $750 each day after (Cincinnati Health Department, Municipal Code 1117-35). https://www.wcpo.com/news/local-news/landlords-in-cincinnati-can-be-fined-for-allowing-rental-spaces-to-fall-below-70-degrees
- All of Ohio: ORC 5321.04 requires landlords to keep supplied heating equipment in good and safe working order and supply reasonable heat. https://codes.ohio.gov/ohio-revised-code/section-5321.04
- Kentucky and Indiana towns: neither rule applies; don't cite them there.

## City of Cincinnati neighborhoods (all 52)
- Permits: City of Cincinnati Department of Buildings & Inspections. Installing or replacing an air conditioner needs a mechanical permit; unpermitted work costs an investigation fee equal to the permit fee. Plumbing permits also go through Buildings & Inspections. Electrical permits are reviewed and inspected by Inspections Bureau, Inc. (IBI) under contract to the city. https://www.cincinnati-oh.gov/buildings/old-apply-for-a-building-permit/permit-guide/residential-permit-guide/ ; https://cincinnati-oh.gov/buildings/building-construction-inspections/mechanical-inspections
- Fees, timings and phone numbers: unverified (the city pages disagree). Don't use.
- Electric utility: Duke Energy Ohio (all of the city). Duke rebate amounts for Ohio: unverified, don't quote.
- Sewer: Metropolitan Sewer District of Greater Cincinnati (MSD); report a sewer backup within 48 hours. Water: Greater Cincinnati Water Works.
- Historic districts: only a city *local* designation triggers Historic Conservation Board review (Certificate of Appropriateness for exterior changes). A National Register listing alone does not. Whether a condenser counts as an exterior change is unverified everywhere; never claim a placement rule.
- cincinnati-oh.gov often refuses automated connections. Don't burn time retrying it; neighborhood 2020 counts can come from Wikipedia's citation of the city PDF, marked as such.

## Unincorporated Hamilton County (townships, CDPs)
- Building permits: Hamilton County Buildings + Inspections (county site often returns 403; mark unverified if you can't open it). Plumbing: Hamilton County Public Health. Electrical: Inspection Bureau, Inc. (IBI). Who issues HVAC/mechanical permits in a given township: check, else unverified.

## Northern Kentucky
- Electric utility: Duke Energy Kentucky in most of Boone, Kenton and Campbell counties (check co-ops such as Owen Electric for outlying Boone County addresses).
- The state HVAC program lists the local office that issues HVAC permits for each city or county; check that list for the town. Plumbing inspections are done by the state.

## Housing numbers
- Don't read Census pages. Run `node content/town-facts/census.mjs --geocode "<real address>"` on 2-4 real addresses to find the tract/block group/place ids, then `node content/town-facts/census.mjs <ids...>` and paste its output block into the facts file unchanged.
