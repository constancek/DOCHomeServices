# Blue Ash, OH: verified facts (service-neutral)

**Errors in locations.ts (slug 'blue-ash'):**
- `adjacent` lists Montgomery and Madeira. **Madeira does not border Blue Ash.** Per Census TIGER boundaries, Blue Ash touches Montgomery, Sycamore Township, Sharonville, Evendale and Reading. https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer/22 (spatial "touches" query on GEOID 3906107300)
- "established mid-century neighborhoods alongside newer subdivisions" undersells the 1970s-80s: the 1980s is the biggest building decade and the median year built is 1981 (section 2). 1950s-60s homes are 20.6% of units.
- County (LEGACY_COUNTY): Hamilton County, correct.

## 1. Where it is
- Incorporated **city** in Hamilton County. Village from 1955, city from 1961, partly to resist Cincinnati's airport expansion plans. 7.58 sq mi of land. I-71 east, I-275 north, Cross County Hwy south. https://en.wikipedia.org/wiki/Blue_Ash,_Ohio
- Census confirms city hall (4343 Cooper Rd) is in Blue Ash city, place 3907300, Hamilton County. https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress?address=4343+Cooper+Rd,+Blue+Ash,+OH+45242&benchmark=Public_AR_Current&vintage=Current_Current&format=json
- ZIP: mainly 45242. ZIP 45242 is bigger than the city (9,561 units vs 6,142) and takes in parts of Montgomery and Sycamore Twp, so use city figures, not ZIP figures. Boundary edges touch 45236, 45215, 45249 and 45241 (extent unverified). https://censusreporter.org/profiles/86000US45242-45242/ and TIGERweb layer 2 (same query method as above)
- Population 13,455; median household income $115,313; median owner home value $403,200 (ACS 2020-2024 5-yr). https://censusreporter.org/profiles/16000US3907300-blue-ash-oh/

## 2. Housing stock (ACS 2020-2024 5-year, Blue Ash city 16000US3907300, 6,142 units)
Source for all: https://api.censusreporter.org/1.0/data/show/acs2024_5yr?table_ids=B25035,B25034,B25024,B25003,B25040&geo_ids=16000US3907300
- **Median year built: 1981** (ZIP 45242: 1976).
- By decade: **1980s 1,695 (27.6%, the largest)**; 1970s 1,147 (18.7%); 1950s 761 (12.4%); 1960s 506; 1990s 506; 2000s 324; 2010s 499; 2020+ 280; 1940s 163; 1939 or earlier 261.
- 1970-1989 = 2,842 (46.3%). Before 1970 = 1,691 (27.5%). 2000 or later = 1,103 (18.0%).
- Home types: 3,868 (63.0%) single-family detached; 425 (6.9%) attached; **1,703 (27.7%) in buildings of 5+ units** (659 in 50+ unit buildings); 8 mobile homes.
- Tenure: 3,730 owner-occupied of 5,746 occupied (**64.9%**); 2,016 rent.
- Heating fuel (occupied units): utility gas 3,109 (54.1%), **electricity 2,465 (42.9%)**, fuel oil 94 (1.6%), propane 54 (0.9%). ZIP 45242 electricity share: 35.3% (3,203 of 9,064).
- ACS does not split heat pumps from electric resistance heat; do not quote a heat-pump share.

## 3. Permits
- The **City of Blue Ash Community Development** department issues building, electrical, zoning and sign permits (one combined application). It says a permit takes about 10-15 business days and a deposit is required with all submittals; the forms are dated 2017. https://blueash.com/departments/community_development/permits.php
- A city notice says projects may also need "electric, HVAC, fire sprinkler, and fire alarm permits", that changes to heating and ventilation can require a permit under Ohio law, and that **plumbing permits are managed by Hamilton County**. https://blueash.com/news_detail_T2_R762.php
- **Unverified:** which office issues residential HVAC/mechanical permits (city or county), the notice's date, and current timing and fees. The city says "not all permits in Blue Ash are issued by the City." An old state rule certifying the Blue Ash building department is listed as rescinded, so current certification scope is unverified. https://www.law.cornell.edu/regulations/ohio/title-4101-2/chapter-4101-2-70

## 4. Electric utility
- **Duke Energy Ohio** delivers power in Hamilton County suburbs; Ohio customer choice lets residents pick a supplier. Address-level unverified. https://www.duke-energy.com/home/products/ohio-customer-choice/aggregation
- Blue Ash aggregation program: unverified. Rebates: none confirmed. Don't mention either.

## 5. Climate (Cincinnati, CVG station)
- July normal high 86.0°F (1991-2020). https://www.weather.gov/iln/climate_normals_cvg
- About 21 days a year at 90°F or above (1981-2010 normals). https://www.weather.gov/iln/90s

## 6. Local factors that change the job
- **Flood plain:** the city has a flood plain management chapter (Chapter 1317, 2023 ordinance) and says it has special flood hazard areas. Which streets or creeks: unverified; check FEMA by address. https://codelibrary.amlegal.com/codes/blueash/latest/blueash_oh/0-0-0-21755 and https://msc.fema.gov
- **Historic district: none found.** No Blue Ash entry in the Hamilton County NRHP list (the nearby historic district is in Montgomery). https://en.wikipedia.org/wiki/National_Register_of_Historic_Places_listings_in_Hamilton_County,_Ohio
