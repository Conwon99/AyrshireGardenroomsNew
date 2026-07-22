export interface Location {
  name: string;
  slug: string;
  region: "central-belt" | "ayrshire";
  /** Short for schema/areaServed */
  regionLabel: string;
  /** Local areas/neighborhoods for content and SEO */
  neighborhoods: string[];
  /** Hero intro - conversational, local refs */
  heroIntro: string;
  /** Service intro paragraph */
  serviceIntro: string;
  /** Content section opening - local problems/story */
  contentOpening: string;
  /** Why services matter here - local knowledge */
  localKnowledge: string;
  /** Optional geo for schema (lat/lng as strings) */
  geo?: { latitude: string; longitude: string };
}

const baseCentralBelt: Omit<Location, "name" | "slug" | "neighborhoods" | "heroIntro" | "serviceIntro" | "contentOpening" | "localKnowledge"> = {
  region: "central-belt",
  regionLabel: "Scotland Central Belt",
};

const baseAyrshire: Omit<Location, "name" | "slug" | "neighborhoods" | "heroIntro" | "serviceIntro" | "contentOpening" | "localKnowledge"> = {
  region: "ayrshire",
  regionLabel: "Ayrshire",
};

function loc(
  name: string,
  slug: string,
  region: "central-belt" | "ayrshire",
  regionLabel: string,
  neighborhoods: string[],
  heroIntro: string,
  serviceIntro: string,
  contentOpening: string,
  localKnowledge: string,
  geo?: { latitude: string; longitude: string }
): Location {
  return {
    name,
    slug,
    region,
    regionLabel,
    neighborhoods,
    heroIntro,
    serviceIntro,
    contentOpening,
    localKnowledge,
    geo,
  };
}

// Central Belt locations with unique local content
export const centralBeltLocations: Location[] = [
  loc(
    "Glasgow",
    "glasgow",
    "central-belt",
    "Scotland Central Belt",
    ["West End", "Southside", "East End", "North Glasgow", "City Centre"],
    "From the West End to the Southside, Glasgow homeowners know Scottish weather can be tough on outdoor spaces. We help you get a garden room or deck that stands up to the rain and looks great year-round.",
    "Across Glasgow we install garden rooms and decking that suit local properties and the climate. Whether you're after a home office in the West End or a deck in the Southside, we deliver quality you can rely on.",
    "Glasgow's mix of Victorian tenements and modern homes means every project is different. We've worked across the city and know what works for local gardens and planning.",
    "Good transport links and a range of property types make Glasgow a great place for garden rooms and decking. We factor in access, drainage, and Scottish weather so your project lasts.",
    { latitude: "55.8642", longitude: "-4.2518" }
  ),
  loc(
    "Edinburgh",
    "edinburgh",
    "central-belt",
    "Scotland Central Belt",
    ["Newington", "Morningside", "Leith", "Corstorphine", "Stockbridge"],
    "Edinburgh's weather and varied property types mean outdoor spaces need to be built right. We bring garden room and decking solutions that fit your area and the local climate.",
    "From Newington to Leith, we provide garden rooms and decking designed for Edinburgh's conditions. Our installations are built to last and to suit your property.",
    "Whether you're in a New Town garden or a modern development, we tailor each project to your space and local requirements. Edinburgh's mix of old and new is something we know well.",
    "Transport links and conservation areas can affect design and access. We work with you to get the best result within local constraints and weather considerations.",
    { latitude: "55.9533", longitude: "-3.1883" }
  ),
  loc(
    "Stirling",
    "stirling",
    "central-belt",
    "Scotland Central Belt",
    ["Bridge of Allan", "Bannockburn", "St Ninians", "Raploch"],
    "Stirling and the surrounding areas deserve outdoor spaces that handle wind and rain. We install garden rooms and decking built for Central Scotland's climate.",
    "Across Stirling we offer garden rooms and decking that suit local homes and gardens. Quality materials and careful installation mean your investment lasts.",
    "Stirling's blend of historic and new build properties gives us plenty of experience with different garden types. We focus on solutions that work for your location.",
    "Good road links and a mix of property types make Stirling a key area for us. We consider access, exposure, and drainage so your project performs in all seasons.",
    { latitude: "56.1165", longitude: "-3.9369" }
  ),
  loc(
    "Falkirk",
    "falkirk",
    "central-belt",
    "Scotland Central Belt",
    ["Grangemouth", "Larbert", "Stenhousemuir", "Bo'ness"],
    "Falkirk and the surrounding towns need outdoor structures that cope with Central Belt weather. We deliver garden rooms and decking that are built to last.",
    "We serve Falkirk, Grangemouth, Larbert and nearby areas with garden room and decking installations. Local knowledge and quality materials are at the heart of what we do.",
    "From Grangemouth to Bo'ness, we've worked on a wide range of properties. We understand local gardens and what it takes to get a great result.",
    "The area's mix of industry and residential means we're used to different site conditions. We plan for drainage, access, and long-term durability.",
    { latitude: "56.0019", longitude: "-3.7843" }
  ),
  loc(
    "Paisley",
    "paisley",
    "central-belt",
    "Scotland Central Belt",
    ["Renfrew", "Johnstone", "Elderslie", "Brookfield"],
    "Paisley and the wider Renfrewshire area get their share of rain and wind. We build garden rooms and decking that stand up to the weather and look great.",
    "Across Paisley and nearby towns we install garden rooms and decking tailored to local properties. You get a professional finish and advice that fits your area.",
    "Renfrewshire's mix of tenements and family homes means we're used to different garden sizes and access. We work with you to get the best outcome.",
    "Good links to Glasgow and local transport help us serve the area efficiently. We consider your property type and exposure when designing your project.",
    { latitude: "55.8473", longitude: "-4.4321" }
  ),
  loc(
    "East Kilbride",
    "east-kilbride",
    "central-belt",
    "Scotland Central Belt",
    ["St Leonards", "Greenhills", "The Village", "Stuartfield"],
    "East Kilbride's mix of green spaces and housing makes it ideal for garden rooms and decking. We help you make the most of your outdoor space in all weathers.",
    "We provide garden room and decking services across East Kilbride. Our installations are designed for Scottish conditions and local property types.",
    "From new builds to established gardens, we've worked across East Kilbride. We tailor each project to your plot and how you want to use the space.",
    "The town's layout and transport links make scheduling straightforward. We focus on quality and durability so your garden room or deck performs for years.",
    { latitude: "55.7644", longitude: "-4.1770" }
  ),
  loc(
    "Hamilton",
    "hamilton",
    "central-belt",
    "Scotland Central Belt",
    ["Fairhill", "Blantyre", "Bothwell", "Uddingston"],
    "Hamilton and South Lanarkshire homeowners need outdoor solutions that cope with the climate. We install garden rooms and decking built for the long term.",
    "Across Hamilton and nearby areas we deliver garden rooms and decking that suit local homes. Quality materials and careful installation are standard.",
    "We've worked across Hamilton and the surrounding towns. We understand local property types and what works in Scottish gardens.",
    "Good road links help us serve the area reliably. We plan for drainage, exposure, and access so your project runs smoothly.",
    { latitude: "55.7770", longitude: "-4.0390" }
  ),
  loc(
    "Motherwell",
    "motherwell",
    "central-belt",
    "Scotland Central Belt",
    ["Belhaven", "Dalziel", "Carfin", "Ravenscraig"],
    "Motherwell and North Lanarkshire deserve outdoor spaces that last. We bring garden room and decking installations that handle the weather and add real value.",
    "We serve Motherwell and the surrounding area with garden rooms and decking. Each project is tailored to your property and how you want to use the space.",
    "From traditional homes to new developments, we've worked across the area. We focus on build quality and design that fits your garden.",
    "Local access and property types are something we know well. We consider drainage, exposure, and materials so your investment pays off.",
    { latitude: "55.7890", longitude: "-3.9920" }
  ),
  loc(
    "Coatbridge",
    "coatbridge",
    "central-belt",
    "Scotland Central Belt",
    ["Townhead", "Kirkwood", "Whifflet", "Dunbeth"],
    "Coatbridge and the Monklands area need outdoor structures that stand up to Central Scotland's weather. We deliver garden rooms and decking built to last.",
    "Across Coatbridge we install garden rooms and decking for local homeowners. You get a professional finish and materials chosen for durability.",
    "We've worked across Coatbridge and nearby towns. We understand local gardens and what it takes to get a great result in all seasons.",
    "The area's mix of property types means we're used to different site conditions. We plan for access, drainage, and long-term performance.",
    { latitude: "55.8622", longitude: "-4.0193" }
  ),
  loc(
    "Airdrie",
    "airdrie",
    "central-belt",
    "Scotland Central Belt",
    ["Chapelhall", "Caldwell", "Rawyards", "Rochsolloch"],
    "Airdrie homeowners know that outdoor spaces need to handle the elements. We install garden rooms and decking that look good and perform in the Scottish climate.",
    "We provide garden room and decking services across Airdrie and the surrounding area. Quality and local knowledge are at the heart of every project.",
    "From Chapelhall to the town centre, we've worked on a range of properties. We tailor each installation to your garden and your needs.",
    "Good links to the M8 help us serve Airdrie efficiently. We consider your property type and exposure when designing your project.",
    { latitude: "55.8661", longitude: "-3.9803" }
  ),
  loc(
    "Cumbernauld",
    "cumbernauld",
    "central-belt",
    "Scotland Central Belt",
    ["Condorrat", "Kildrum", "Abronhill", "Seafar"],
    "Cumbernauld's mix of green space and housing is ideal for garden rooms and decking. We help you create outdoor spaces that work in all weathers.",
    "Across Cumbernauld we deliver garden rooms and decking tailored to local properties. Our installations are built for Scottish conditions.",
    "We've worked across Cumbernauld's neighbourhoods. We understand local gardens and how to get the best from your outdoor space.",
    "The town's layout and access make scheduling straightforward. We focus on quality materials and installation so your project lasts.",
    { latitude: "55.9460", longitude: "-3.9905" }
  ),
  loc(
    "Livingston",
    "livingston",
    "central-belt",
    "Scotland Central Belt",
    ["Livingston Village", "Craigshill", "Dedridge", "Murieston"],
    "Livingston and West Lothian homeowners need outdoor solutions that cope with the climate. We install garden rooms and decking built for the long term.",
    "We serve Livingston and the surrounding area with garden rooms and decking. Each project is tailored to your property and local conditions.",
    "From new towns to established areas, we've worked across Livingston. We focus on build quality and design that fits your garden.",
    "Good transport links help us serve the area reliably. We plan for drainage, exposure, and materials so your investment pays off.",
    { latitude: "55.8867", longitude: "-3.5228" }
  ),
  loc(
    "Bathgate",
    "bathgate",
    "central-belt",
    "Scotland Central Belt",
    ["Boghall", "Linton", "Armadale", "Blackburn"],
    "Bathgate and West Lothian deserve outdoor spaces that last. We bring garden room and decking installations that handle the weather and add value.",
    "Across Bathgate and nearby towns we install garden rooms and decking. Quality materials and careful installation are standard for every job.",
    "We've worked across Bathgate and the surrounding area. We understand local property types and what works in Scottish gardens.",
    "Local access and weather conditions are something we plan for. We consider drainage, exposure, and durability so your project performs.",
    { latitude: "55.9020", longitude: "-3.6430" }
  ),
  loc(
    "Linlithgow",
    "linlithgow",
    "central-belt",
    "Scotland Central Belt",
    ["Bridgend", "Blackness", "Philpstoun"],
    "Linlithgow's historic character and green spaces suit garden rooms and decking. We help you create outdoor spaces that complement your property.",
    "We provide garden room and decking services across Linlithgow and the surrounding area. Our installations are designed for local conditions and property types.",
    "From period homes to modern builds, we've worked in and around Linlithgow. We tailor each project to your garden and local requirements.",
    "The area's mix of conservation and new development means we're used to different constraints. We focus on quality and design that fits.",
    { latitude: "55.9763", longitude: "-3.6033" }
  ),
  loc(
    "Kirkintilloch",
    "kirkintilloch",
    "central-belt",
    "Scotland Central Belt",
    ["Lenzie", "Bishopbriggs", "Milton of Campsie", "Twechar"],
    "Kirkintilloch and East Dunbartonshire need outdoor structures that stand up to the weather. We deliver garden rooms and decking built to last.",
    "Across Kirkintilloch we install garden rooms and decking for local homeowners. You get a professional finish and materials chosen for Scottish conditions.",
    "We've worked across Kirkintilloch and nearby areas. We understand local gardens and what it takes to get a great result.",
    "Good links to Glasgow and the M80 help us serve the area. We plan for access, drainage, and long-term durability.",
    { latitude: "55.9396", longitude: "-4.1526" }
  ),
  loc(
    "Bishopbriggs",
    "bishopbriggs",
    "central-belt",
    "Scotland Central Belt",
    ["Kenmure", "Springburn", "Cadder", "Torrance"],
    "Bishopbriggs homeowners know that outdoor spaces need to handle rain and wind. We install garden rooms and decking that look good and perform year-round.",
    "We serve Bishopbriggs and East Dunbartonshire with garden rooms and decking. Each project is tailored to your property and how you want to use the space.",
    "From Kenmure to the north of the town, we've worked across Bishopbriggs. We focus on quality and design that fits your garden.",
    "Proximity to Glasgow and local transport helps us serve the area. We consider your property type and exposure when designing your project.",
    { latitude: "55.9062", longitude: "-4.2186" }
  ),
  loc(
    "Bearsden",
    "bearsden",
    "central-belt",
    "Scotland Central Belt",
    ["Bearsden Cross", "Drymen Road", "Roman Road", "Kessington"],
    "Bearsden's gardens and property types suit garden rooms and decking. We help you create outdoor spaces that stand up to Scottish weather.",
    "Across Bearsden we deliver garden rooms and decking tailored to local properties. Our installations are built for durability and style.",
    "We've worked across Bearsden and the surrounding area. We understand local gardens and planning considerations.",
    "The area's mix of period and modern homes means we're used to different requirements. We focus on quality and long-term performance.",
    { latitude: "55.9152", longitude: "-4.3328" }
  ),
  loc(
    "Newton Mearns",
    "newton-mearns",
    "central-belt",
    "Scotland Central Belt",
    ["Greenlaw", "Mearns Cross", "Broom", "Capelrig"],
    "Newton Mearns and East Renfrewshire deserve outdoor spaces that last. We bring garden room and decking installations that add value and handle the climate.",
    "We serve Newton Mearns and the surrounding area with garden rooms and decking. Quality materials and careful installation are standard.",
    "We've worked across Newton Mearns and nearby neighbourhoods. We understand local property types and what works in Scottish gardens.",
    "Good road links and a range of property types make the area well served. We plan for drainage, exposure, and durability.",
    { latitude: "55.7714", longitude: "-4.3350" }
  ),
  loc(
    "Dunfermline",
    "dunfermline",
    "central-belt",
    "Scotland Central Belt",
    ["Town Centre", "Rosyth", "Inverkeithing", "Dalgety Bay"],
    "Dunfermline and West Fife need outdoor solutions that cope with the weather. We install garden rooms and decking built for the long term.",
    "Across Dunfermline we install garden rooms and decking for local homeowners. You get a professional finish and advice that fits your area.",
    "From Rosyth to Dalgety Bay, we've worked across the area. We tailor each project to your garden and local conditions.",
    "Good transport links and a mix of property types mean we're used to different sites. We focus on quality and durability.",
    { latitude: "56.0720", longitude: "-3.4523" }
  ),
  loc(
    "Kirkcaldy",
    "kirkcaldy",
    "central-belt",
    "Scotland Central Belt",
    ["Dysart", "Linktown", "Gallatown", "Sinnamon"],
    "Kirkcaldy and the Fife coast get their share of wind and rain. We build garden rooms and decking that stand up to the elements and look great.",
    "We provide garden room and decking services across Kirkcaldy and the surrounding area. Our installations are designed for local conditions.",
    "We've worked across Kirkcaldy and nearby towns. We understand local property types and what it takes to get a great result.",
    "Coastal exposure and local access are factors we plan for. We consider materials and drainage so your project performs in all seasons.",
    { latitude: "56.1115", longitude: "-3.1594" }
  ),
];

// Ayrshire locations (high-value for garden rooms)
export const ayrshireLocations: Location[] = [
  loc(
    "Kilmarnock",
    "kilmarnock",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Shortlees", "Onthank", "Riccarton"],
    "Kilmarnock and East Ayrshire homeowners need outdoor spaces that handle the weather. We install garden rooms and decking built for Ayrshire's climate.",
    "Across Kilmarnock we deliver garden rooms and decking tailored to local properties. Quality and local knowledge are at the heart of every project.",
    "We've worked across Kilmarnock and the surrounding area. We understand local gardens and what works for Ayrshire properties.",
    "Good road links and a mix of property types make Kilmarnock well served. We plan for drainage, exposure, and long-term durability.",
    { latitude: "55.6117", longitude: "-4.4958" }
  ),
  loc(
    "Kilwinning",
    "kilwinning",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Pennyburn", "Corsehill", "Bourtreehill"],
    "Kilwinning and North Ayrshire deserve outdoor spaces that last. We bring garden room and decking installations that add value and stand up to the climate.",
    "We serve Kilwinning and the surrounding area with garden rooms and decking. Each project is tailored to your property and local conditions.",
    "From Pennyburn to Bourtreehill, we've worked across Kilwinning. We focus on quality and design that fits your garden.",
    "Proximity to the coast and local transport helps us serve the area. We consider your property type and exposure when designing your project.",
    { latitude: "55.6564", longitude: "-4.7046" }
  ),
  loc(
    "Irvine",
    "irvine",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Bourtreehill", "Kilwinning", "Dreghorn"],
    "Irvine and North Ayrshire need outdoor structures that cope with coastal weather. We deliver garden rooms and decking built to last.",
    "Across Irvine we install garden rooms and decking for local homeowners. You get a professional finish and materials chosen for Ayrshire conditions.",
    "We've worked across Irvine and the Three Towns area. We understand local gardens and what it takes to get a great result.",
    "Coastal exposure and a mix of property types mean we plan for durability. We focus on materials and drainage so your project performs.",
    { latitude: "55.6194", longitude: "-4.6551" }
  ),
  loc(
    "Prestwick",
    "prestwick",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Prestwick Airport", "Links", "Meikle Earnock"],
    "Prestwick's coastal location means outdoor spaces need to be built right. We install garden rooms and decking that stand up to the wind and rain.",
    "We provide garden room and decking services across Prestwick and the surrounding area. Our installations are designed for Ayrshire's coastal climate.",
    "We've worked in and around Prestwick. We understand local property types and how to get the best from your outdoor space.",
    "Coastal conditions and good transport links are factors we consider. We focus on quality materials and installation so your project lasts.",
    { latitude: "55.4833", longitude: "-4.6167" }
  ),
  loc(
    "Ayr",
    "ayr",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Alloway", "Heads of Ayr", "Prestwick"],
    "Ayr and South Ayrshire homeowners know that coastal weather can be tough. We build garden rooms and decking that look good and perform year-round.",
    "Across Ayr we deliver garden rooms and decking tailored to local properties. Quality materials and careful installation are standard.",
    "From Alloway to the town centre, we've worked across Ayr. We tailor each project to your garden and local requirements.",
    "Coastal exposure and a range of property types mean we're used to different conditions. We plan for durability and long-term performance.",
    { latitude: "55.4580", longitude: "-4.6292" }
  ),
  loc(
    "Troon",
    "troon",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "South Beach", "Barassie", "Loans"],
    "Troon's seafront gardens face some of the toughest weather on the Ayrshire coast. We design garden rooms and decking that shrug off salt air and westerly gales without losing their good looks.",
    "From the marina to Barassie, we install garden rooms and decking built for Troon's exposed coastal setting. Every project uses materials chosen to cope with sea spray and shifting sand.",
    "Troon's mix of Victorian villas and modern coastal homes each bring their own challenges. We've fitted garden rooms behind sea walls and decking on sandy, well-drained plots alike.",
    "Being right on the Firth of Clyde means wind loading and moisture are always front of mind. We specify fixings and finishes that are built for a genuinely coastal climate.",
    { latitude: "55.5333", longitude: "-4.6600" }
  ),
  loc(
    "Saltcoats",
    "saltcoats",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Kirkhill", "Winton Circus", "Ardrossan"],
    "Saltcoats and the Three Towns know the North Ayrshire coast doesn't do things by halves when the weather turns. Our garden rooms and decking are built to take it.",
    "We serve Saltcoats and neighbouring Ardrossan and Stevenston with garden room and decking installations designed for this stretch of coastline.",
    "Saltcoats' harbourside streets and inland housing estates both need outdoor structures that can handle damp, salt-laden air. We adapt our approach to each site.",
    "Good rail links to Glasgow bring plenty of families to the area, and we've built up real experience with the terraced and semi-detached gardens typical here.",
    { latitude: "55.6353", longitude: "-4.7867" }
  ),
  loc(
    "Ardrossan",
    "ardrossan",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "South Beach", "Whitlees", "Winton Pier"],
    "Ardrossan's harbour and ferry town setting means exposed, windy gardens are the norm. We build garden rooms and decking rated for genuinely coastal conditions.",
    "Across Ardrossan we deliver garden rooms and decking for homes near the harbour and further inland, all built to the same high standard.",
    "From harbourfront properties to the newer estates further up the hill, we've worked right across Ardrossan and understand the different exposure each brings.",
    "As a working ferry port, Ardrossan sees more salt-laden wind than most Ayrshire towns. We choose fixings and finishes accordingly so your project lasts.",
    { latitude: "55.6392", longitude: "-4.8072" }
  ),
  loc(
    "Largs",
    "largs",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Broomfields", "Gogo", "Routenburn"],
    "Largs' seafront and marina setting is stunning, but it puts real demands on outdoor structures. We build garden rooms and decking designed for the Firth of Clyde's weather.",
    "We install garden rooms and decking across Largs, from the seafront to the hillside streets above the town, all tailored to local conditions.",
    "Largs draws visitors for its views and its ferry links to the islands, and homeowners here want outdoor spaces that make the most of that setting.",
    "Coastal exposure, hillside drainage, and a strong tourist economy all shape how we approach projects in Largs. We build for durability first.",
    { latitude: "55.7962", longitude: "-4.8686" }
  ),
  loc(
    "Dalry",
    "dalry",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Blair", "Ryefield", "Drakemyre"],
    "Dalry's inland North Ayrshire setting means gardens deal with plenty of rain but less wind exposure than the coast. We build garden rooms and decking to suit.",
    "Across Dalry we provide garden room and decking installations designed for local properties, from the town centre out to the surrounding countryside.",
    "Dalry's mix of older stone-built homes and newer developments gives us a good range of experience with different garden layouts and access routes.",
    "Being inland, drainage and ground conditions are often the main factor here rather than wind. We plan foundations and run-off carefully for every job.",
    { latitude: "55.7058", longitude: "-4.7306" }
  ),
  loc(
    "Beith",
    "beith",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Gateside", "Roughwood", "Barrmill"],
    "Beith sits on high ground in North Ayrshire, which means good views but also more exposure than you might expect inland. We build accordingly.",
    "We serve Beith and the surrounding villages with garden room and decking installations designed for the local climate and terrain.",
    "Beith's elevated position and older housing stock mean access and levels often need extra thought. We plan each project around the actual site.",
    "The town's hilltop setting brings a bit more wind than nearby lower-lying towns, so we factor that into material choices and fixings.",
    { latitude: "55.7508", longitude: "-4.6280" }
  ),
  loc(
    "Stewarton",
    "stewarton",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Lainshaw", "Chapeltoun", "Bonshaw"],
    "Stewarton, East Ayrshire's historic bonnet-making town, has plenty of gardens that deserve a proper garden room or deck. We build for the local climate.",
    "Across Stewarton we install garden rooms and decking suited to the town's mix of period and modern homes, with a focus on quality and longevity.",
    "Stewarton's older stone cottages and newer housing estates each bring different access and ground conditions, which we plan for on every job.",
    "Good road links to Kilmarnock and Glasgow make Stewarton an easy town for us to serve, and we know the local garden layouts well.",
    { latitude: "55.6772", longitude: "-4.5147" }
  ),
  loc(
    "Dreghorn",
    "dreghorn",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Springside", "Bourtreehill", "Perceton"],
    "Dreghorn sits just inland from Irvine, giving gardens here a bit more shelter but still plenty of North Ayrshire rain to deal with. We build to last.",
    "We provide garden room and decking installations across Dreghorn, tailored to the town's mostly residential streets and modern housing.",
    "Dreghorn's proximity to Irvine means we're often working here alongside jobs in the wider area, so we know the local ground conditions well.",
    "Being slightly inland from the coast, Dreghorn gardens see less wind than Irvine's but still need good drainage planning.",
    { latitude: "55.6039", longitude: "-4.6394" }
  ),
  loc(
    "Springside",
    "springside",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Dreghorn", "Torranyard", "Girdle Toll"],
    "Springside is a small North Ayrshire village where gardens are often larger than in the surrounding towns, giving real scope for a garden room or deck.",
    "We serve Springside and the neighbouring villages with garden room and decking installations built for local conditions.",
    "Springside's semi-rural setting means bigger plots and, often, more mature gardens to design around than in busier towns nearby.",
    "With a bit more space to work with than in Irvine or Dreghorn, Springside gardens often suit larger or multi-purpose garden rooms.",
    { latitude: "55.6167", longitude: "-4.5833" }
  ),
  loc(
    "Dundonald",
    "dundonald",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Loans", "Gadgirth", "Auchans"],
    "Dundonald's South Ayrshire setting, between Troon and Kilmarnock, means gardens here get a mix of coastal wind and inland shelter. We build for both.",
    "Across Dundonald we install garden rooms and decking designed for the village's mostly larger, established gardens.",
    "Dundonald's historic castle and surrounding countryside give the village real character, and homeowners here often want a garden room that matches it.",
    "Sitting between the coast and the countryside, Dundonald needs a balanced approach to exposure and drainage, which we plan for on every job.",
    { latitude: "55.5578", longitude: "-4.6386" }
  ),
  loc(
    "Symington",
    "symington",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Dundonald", "Barnweil", "Byres"],
    "Symington is a quiet South Ayrshire village with generous gardens, ideal for a custom garden room or a new deck.",
    "We provide garden room and decking services across Symington, tailored to the village's larger plots and rural setting.",
    "Symington's countryside setting means we often work with bigger gardens here than in nearby towns, giving more design freedom.",
    "Being a bit inland from Troon and Ayr, Symington sees less coastal wind, so we can focus more on maximising space and design.",
    { latitude: "55.5231", longitude: "-4.6222" }
  ),
  loc(
    "Tarbolton",
    "tarbolton",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Failford", "Annbank Road", "Coalhall"],
    "Tarbolton, with its strong Robert Burns connections, has plenty of traditional gardens that suit a well-built garden room or deck.",
    "Across Tarbolton we install garden rooms and decking designed to complement the village's mix of older and newer homes.",
    "Tarbolton's history and traditional streetscape mean we often work carefully around older boundary walls and mature gardens.",
    "This South Ayrshire village's inland setting means drainage and ground conditions are usually the main planning factor.",
    { latitude: "55.5122", longitude: "-4.4956" }
  ),
  loc(
    "Mauchline",
    "mauchline",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Failford", "Netherthird", "Gilmilnscroft"],
    "Mauchline, another East Ayrshire town with deep Burns heritage, has gardens that deserve a garden room built with real care and craftsmanship.",
    "We serve Mauchline and the surrounding countryside with garden room and decking installations suited to local homes.",
    "Mauchline's historic centre and surrounding farmland give us a wide range of garden types to work with, from cottage plots to larger rural gardens.",
    "Being inland, Mauchline gardens are more sheltered than coastal towns, so we focus on drainage and long-term timber care.",
    { latitude: "55.5119", longitude: "-4.3733" }
  ),
  loc(
    "Cumnock",
    "cumnock",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Netherthird", "Bank", "Holmhead"],
    "Cumnock, at the heart of East Ayrshire's former coalfield area, has seen real regeneration, and many homeowners here are investing in garden rooms and decking.",
    "Across Cumnock we install garden rooms and decking tailored to the town's mix of traditional streets and newer housing.",
    "Cumnock's post-mining landscape means ground conditions can vary street to street, so we always assess the site properly before starting.",
    "Good road links along the A76 make Cumnock straightforward for us to serve, and we know the local housing stock well.",
    { latitude: "55.4586", longitude: "-4.2622" }
  ),
  loc(
    "Newmilns",
    "newmilns",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Greenholm", "Loudoun", "Darvel Road"],
    "Newmilns, one of the Irvine Valley's historic weaving towns, has plenty of traditional gardens well suited to a garden room or deck.",
    "We provide garden room and decking installations across Newmilns, built to suit the town's older housing stock and river valley setting.",
    "Newmilns sits close to the River Irvine, so drainage and ground moisture are always part of our planning here.",
    "The Irvine Valley's textile heritage shaped the town's tight-knit streets, and we work carefully around older buildings and boundary walls.",
    { latitude: "55.5994", longitude: "-4.3247" }
  ),
  loc(
    "Darvel",
    "darvel",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Newmilns", "Priestland", "Hareshawmuir"],
    "Darvel, at the top of the Irvine Valley, combines small-town charm with the moorland weather of inland East Ayrshire. We build garden rooms to suit.",
    "Across Darvel we install garden rooms and decking designed for the town's traditional gardens and its slightly higher, more exposed setting.",
    "Darvel's position further up the valley means a bit more rain and wind than towns closer to the coast, which we factor into every build.",
    "Known locally for its lace-making history, Darvel has a strong community feel, and we've built up good local knowledge of its garden layouts.",
    { latitude: "55.6094", longitude: "-4.3011" }
  ),
  loc(
    "Galston",
    "galston",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Hagshill", "Barr", "Cessnock"],
    "Galston sits along the River Irvine in East Ayrshire, with gardens that benefit from a well-designed garden room or deck.",
    "We serve Galston with garden room and decking installations suited to the town's riverside setting and mix of housing types.",
    "Galston's riverside location means we always check drainage and flood considerations carefully before starting any groundwork.",
    "As one of the Irvine Valley towns, Galston has a strong sense of community, and we've worked on projects across its older and newer streets alike.",
    { latitude: "55.5989", longitude: "-4.3961" }
  ),
  loc(
    "Hurlford",
    "hurlford",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Crookedholm", "Fisher Row", "Riverside"],
    "Hurlford, just east of Kilmarnock, has a good mix of traditional and modern homes suited to garden rooms and decking.",
    "Across Hurlford we install garden rooms and decking designed for local properties, from riverside streets to newer estates.",
    "Hurlford's position along the River Irvine means we always plan drainage carefully, particularly for lower-lying gardens.",
    "Close links to Kilmarnock make Hurlford an easy town for us to serve regularly, and we know its housing stock well.",
    { latitude: "55.6086", longitude: "-4.4644" }
  ),
  loc(
    "Fenwick",
    "fenwick",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Fenwick Moor", "Laigh Fenwick", "Kingswell"],
    "Fenwick sits on the edge of open moorland, so gardens here often face more wind and rain than towns further down the valley. We build to suit.",
    "We provide garden room and decking installations across Fenwick, designed for the village's exposed, elevated setting.",
    "Fenwick's proximity to the moor means weatherproofing is always a priority, whatever the size or style of garden room.",
    "Good access from the A77 makes Fenwick straightforward to reach, and we've built up real experience with its more exposed gardens.",
    { latitude: "55.6636", longitude: "-4.4506" }
  ),
  loc(
    "Crosshouse",
    "crosshouse",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Springhill", "Knockentiber", "Gatehead"],
    "Crosshouse, just outside Kilmarnock, has a good number of family homes with gardens well suited to a garden room or new deck.",
    "Across Crosshouse we install garden rooms and decking tailored to the village's mostly residential streets.",
    "Crosshouse's position between Kilmarnock and the coast gives it a fairly sheltered climate, which suits a wide range of garden room designs.",
    "Being close to Kilmarnock, Crosshouse is an easy village for us to serve regularly, and we know its garden layouts well.",
    { latitude: "55.6067", longitude: "-4.5119" }
  ),
  loc(
    "Kilmaurs",
    "kilmaurs",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Crosshouse Road", "Bonshaw Road", "Bellfield"],
    "Kilmaurs, one of the oldest villages in East Ayrshire, has plenty of traditional gardens that suit a carefully designed garden room.",
    "We serve Kilmaurs with garden room and decking installations designed to complement the village's historic character.",
    "Kilmaurs' conservation area status means we're used to working sensitively around older properties and boundary features.",
    "Just north of Kilmarnock, Kilmaurs is easy for us to reach, and we understand the planning considerations that come with its heritage streets.",
    { latitude: "55.6394", longitude: "-4.5361" }
  ),
  loc(
    "Dalrymple",
    "dalrymple",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Alloway", "Drongan Road", "Skeldon"],
    "Dalrymple, a quiet village on the River Doon in South Ayrshire, has gardens well suited to a custom garden room or deck.",
    "Across Dalrymple we install garden rooms and decking designed for the village's rural, riverside setting.",
    "Dalrymple's position along the Doon means river views are common, and we design garden rooms to make the most of them.",
    "Being a small, close-knit village, Dalrymple has a strong sense of place, and we take care to build in keeping with it.",
    { latitude: "55.4028", longitude: "-4.6006" }
  ),
  loc(
    "Maybole",
    "maybole",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Crosshill", "Kirkoswald Road", "Culzean"],
    "Maybole, historic capital of Carrick in South Ayrshire, has traditional gardens that deserve a well-crafted garden room or deck.",
    "We provide garden room and decking installations across Maybole, suited to the town's older housing stock and surrounding countryside.",
    "Maybole's hilltop position and proximity to Culzean Castle give it real character, and homeowners here often want outdoor spaces to match.",
    "Being a bit further inland and higher up than the coast, Maybole sees a fair amount of wind, which we plan for in every build.",
    { latitude: "55.3536", longitude: "-4.6875" }
  ),
  loc(
    "Girvan",
    "girvan",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Bridge Street", "Chalmerston", "Old Dailly"],
    "Girvan, a working harbour town on South Ayrshire's coast, has gardens that face some of the toughest weather in the region. We build accordingly.",
    "Across Girvan we install garden rooms and decking designed for genuinely coastal conditions, from the harbourfront to the streets above the town.",
    "Girvan's fishing heritage and Atlantic-facing coastline mean wind and salt exposure are always a factor in how we plan a project here.",
    "As one of the more remote Ayrshire coastal towns, Girvan homeowners value contractors who understand what the local weather really throws at a build.",
    { latitude: "55.2472", longitude: "-4.8531" }
  ),
  loc(
    "West Kilbride",
    "west-kilbride",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Seamill", "Portencross", "Hunterston"],
    "West Kilbride, known locally as Scotland's 'Craft Town', combines coastal North Ayrshire weather with a real sense of design and quality. We build garden rooms to match.",
    "We serve West Kilbride and neighbouring Seamill with garden room and decking installations designed for this exposed stretch of coast.",
    "West Kilbride's arts and crafts reputation means homeowners here often want a garden room finished to a genuinely high standard.",
    "Being right on the coast near Portencross, exposure to wind and salt air is a constant factor in how we specify materials and fixings.",
    { latitude: "55.6975", longitude: "-4.8578" }
  ),
  loc(
    "Fairlie",
    "fairlie",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Kelburn", "Southannan", "Hunterston"],
    "Fairlie is a small North Ayrshire coastal village between Largs and West Kilbride, with gardens that need to handle serious sea weather.",
    "Across Fairlie we install garden rooms and decking built for the village's exposed coastal setting, close to Kelburn Estate.",
    "Fairlie's narrow coastal strip means gardens here are often compact, so we design garden rooms and decks that make the most of the space.",
    "With the Firth of Clyde right on the doorstep, wind and salt exposure shape almost every material choice we make in Fairlie.",
    { latitude: "55.7561", longitude: "-4.8536" }
  ),
  loc(
    "Dalmellington",
    "dalmellington",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Bellsbank", "Craigengillan", "Patna"],
    "Dalmellington, in the Doon Valley at the edge of the Galloway hills, has a cooler, wetter climate than towns nearer the coast. We build for it.",
    "We provide garden room and decking installations across Dalmellington, designed for its upland, former mining-town setting.",
    "Dalmellington's elevated, semi-rural position means we plan carefully for higher rainfall and cooler temperatures than elsewhere in Ayrshire.",
    "The town's mining history has shaped its housing and street layout, and we've built up good experience with its particular ground conditions.",
    { latitude: "55.3239", longitude: "-4.3986" }
  ),
  loc(
    "New Cumnock",
    "new-cumnock",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Bank Glen", "Craigbank", "Afton Bridgend"],
    "New Cumnock sits at the southern edge of East Ayrshire, where the climate is noticeably cooler and wetter than the coast. Our garden rooms are built for it.",
    "Across New Cumnock we install garden rooms and decking designed for the town's former mining-community housing and rural surroundings.",
    "New Cumnock's upland setting near the Ayrshire-Dumfriesshire border means we plan for higher rainfall and more exposed sites than lower-lying towns.",
    "The town's coalfield heritage shaped much of its housing, and we've adapted our approach to suit the varied plots this creates.",
    { latitude: "55.4008", longitude: "-4.1897" }
  ),
  loc(
    "Catrine",
    "catrine",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Ballochmyle", "Sorn Road", "Mill Square"],
    "Catrine, a historic mill village on the River Ayr, has traditional gardens well suited to a carefully built garden room or deck.",
    "We serve Catrine with garden room and decking installations designed to suit the village's riverside setting and older housing.",
    "Catrine's mill heritage and riverside location mean we always check drainage and ground conditions carefully before starting work.",
    "Set among wooded river gorges, Catrine has a distinctive character, and we build garden rooms that fit naturally into that setting.",
    { latitude: "55.4956", longitude: "-4.3389" }
  ),
  loc(
    "Ochiltree",
    "ochiltree",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Skares", "Coalhall", "Trabboch"],
    "Ochiltree, a rural East Ayrshire village with strong literary connections, has gardens that suit a well-designed garden room or deck.",
    "Across Ochiltree we install garden rooms and decking tailored to the village's rural setting and traditional housing.",
    "Ochiltree's countryside location means larger plots are common, giving good scope for bespoke garden room designs.",
    "Being inland and rural, Ochiltree sees less wind exposure than coastal towns, so ground drainage is usually our main focus.",
    { latitude: "55.4633", longitude: "-4.3728" }
  ),
  loc(
    "Coylton",
    "coylton",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Joppa", "Drongan Road", "Trabboch"],
    "Coylton, a South Ayrshire village between Ayr and Cumnock, has plenty of family gardens suited to garden rooms and decking.",
    "We provide garden room and decking installations across Coylton, designed for the village's mostly residential, semi-rural streets.",
    "Coylton's position along the old coal road means a good mix of older cottages and newer housing, each with its own site considerations.",
    "Being roughly midway between the coast and the East Ayrshire hills, Coylton has a fairly moderate climate that suits most garden room designs.",
    { latitude: "55.4453", longitude: "-4.5528" }
  ),
  loc(
    "Drongan",
    "drongan",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Rankinston", "Burnton", "Skares"],
    "Drongan, a former mining village in South Ayrshire, has seen real change over the years, and many homeowners here are now investing in garden rooms and decking.",
    "Across Drongan we install garden rooms and decking suited to the village's post-mining housing stock and surrounding farmland.",
    "Drongan's mining heritage has left a distinctive mix of housing types, and we always assess ground conditions carefully before starting.",
    "Good road links along the A70 make Drongan easy for us to serve, and we've built up solid experience with its local properties.",
    { latitude: "55.4356", longitude: "-4.5089" }
  ),
  loc(
    "Annbank",
    "annbank",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Mossblown", "Tarbolton Road", "Failford"],
    "Annbank, a small South Ayrshire village near the River Ayr, has gardens well suited to a custom garden room or deck.",
    "We serve Annbank and neighbouring Mossblown with garden room and decking installations built for the local area.",
    "Annbank's riverside surroundings and rural setting mean we plan drainage and access carefully for every project.",
    "Close to Ayr and the A70, Annbank is straightforward for us to serve, and we know its housing stock and garden layouts well.",
    { latitude: "55.4633", longitude: "-4.5347" }
  ),
  loc(
    "Monkton",
    "monkton",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Prestwick Airport", "Adamton", "Hillhouse"],
    "Monkton, right next to Prestwick Airport in South Ayrshire, has gardens that need to handle coastal weather much like its neighbours.",
    "Across Monkton we install garden rooms and decking designed for the village's mostly residential streets and coastal-adjacent setting.",
    "Monkton's proximity to the airport and the coast means we plan for a similar level of wind exposure to Prestwick itself.",
    "Being so close to Prestwick and Ayr, Monkton is an easy village for us to serve as part of the wider South Ayrshire coast.",
    { latitude: "55.5064", longitude: "-4.6008" }
  ),
  loc(
    "Ballantrae",
    "ballantrae",
    "ayrshire",
    "Ayrshire",
    ["Town Centre", "Glenapp", "Bennane", "Currarie"],
    "Ballantrae, on South Ayrshire's remote southern coast, faces some of the harshest weather in the region. We build garden rooms and decking to match.",
    "We provide garden room and decking installations across Ballantrae, designed for its exposed, Atlantic-facing coastal setting.",
    "Ballantrae's dramatic coastal scenery comes with serious wind and salt exposure, so material choice and fixings matter even more here.",
    "As one of the furthest-flung towns we serve, Ballantrae homeowners value a contractor who takes coastal exposure seriously from the start.",
    { latitude: "55.1094", longitude: "-5.0006" }
  ),
];

export const LOCATION_SERVICES = ["garden-rooms", "decking"] as const;
export type LocationServiceSlug = (typeof LOCATION_SERVICES)[number];

export const SERVICE_NAMES: Record<LocationServiceSlug, string> = {
  "garden-rooms": "Garden Rooms",
  decking: "Decking",
};

/** All locations in one array for iteration and sitemap */
export function getAllLocations(): Location[] {
  return [...centralBeltLocations, ...ayrshireLocations];
}

export function getLocationBySlug(slug: string): Location | undefined {
  return getAllLocations().find((loc) => loc.slug === slug);
}

export function getLocationsByRegion(region: "central-belt" | "ayrshire"): Location[] {
  return region === "central-belt" ? centralBeltLocations : ayrshireLocations;
}
