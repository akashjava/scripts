var rp = require('request-promise');

var places = [
  "INDORE-MALWA MILL",
  "GWALIOR-OPPO. FILMISTAN",
  "LUCKNOW-ARJUNGANJ",
  "UNNAO-SHAHGANJ BAZAAR",
  "LUCKNOW-DUBAGGA",
  "JAIPUR-RAJAPARK",
  "AGRA",
  "RAJPURA-AGRA",
  "AGRA-SIKANDRA",
  "GIRIDIH",
  "HIRAPUR",
  "JAMTARA",
  "DHANBAD-BANK MORE",
  "DHANBAD-SARAIDHELLA",
  "RANCHI",
  "BIRSA CHOWK-RANCHI",
  "ADITYAPUR",
  "JAMSHEDPUR-SAKCHI AMBAGAN",
  "LAJPATNAGAR",
  "LAXMINAGAR",
  "CHOWK",
  "HUSSAINGANJ",
  "THAKURGANJ",
  "LUCKNOW-KHURRAM NAGAR",
  "LUCKNOW",
  "VIKAS NAGAR",
  "CANT ROAD",
  "BARABANKI",
  "AKBARPUR",
  "MAU",
  "MANGLAM",
  "RAJENDER NAGAR",
  "PADARI BAZAR",
  "SULTANPUR",
  "PARTAP GARH",
  "RAIBARELI",
  "DEORIA",
  "PADRAUNA",
  "BASTI",
  "FAIZABAD",
  "KHALILABAD",
  "FIROZABAD",
  "ETAWAH",
  "MAINPURI-STATION ROAD",
  "AZAMGARH",
  "BHAGESHWAR NAGAR",
  "JAUNPUR",
  "HUSAINABAD-JAUNPUR",
  "SARAI MIR",
  "GAZIPUR",
  "BALIA",
  "LALGANJ",
  "MOTIHARI",
  "BETTIAH",
  "CHAKIA",
  "DARBHANGA",
  "GOPALGANJ",
  "MADHUBANI",
  "KISHANGANJ",
  "PURNIA",
  "RAMBAGH CHOWK",
  "RAIGANJ-MG ROAD",
  "COOCH BEHAR",
  "JALPAIGURI",
  "SILIGURI",
  "DHUBRI-GTB ROAD",
  "CHHAPRA",
  "SIWAN",
  "HAJIPUR",
  "BEGUSARAI",
  "SAMASTIPUR",
  "KHAGARIA",
  "MUZAFFARNAGAR",
  "SAHARANPUR",
  "SAHARANPUR-DELHI ROAD",
  "HARIDWAR",
  "MANGLAUR",
  "FATHEPUR",
  "BANDA",
  "ALIGARH",
  "BADAUN",
  "HATHRAS",
  "MURADABAD",
  "SHAHAJAHANPUR",
  "BAREILLY",
  "PREM NAGAR-BAREILLY",
  "SITAPUR",
  "LAKHIMPUR",
  "SIDHAULI",
  "GONDA",
  "BAHRAICH",
  "KANPUR",
  "SAKET NAGAR",
  "LAL BANGLA-KANPUR",
  "MUNGER",
  "JAMALPUR",
  "LAKHISARAI",
  "SHEIKHPURA",
  "HALDWANI",
  "KASHIPUR",
  "RUDRAPUR",
  "CHANDIGARH",
  "AMBALA",
  "ZIRAKPUR-BUS STAND",
  "JALANDHAR",
  "PATHANKOT",
  "GURDASPUR",
  "SRINAGAR",
  "UDHAMPUR",
  "KATHUA",
  "VARANASI",
  "PAHARIA",
  "MUGHALSARAI",
  "AJMER",
  "NAGOUR",
  "UDAIPUR",
  "SANGANER-JAIPUR",
  "JAIPUR-JHOTWARA",
  "LAWGARDEN",
  "VADODARA",
  "MEHSANA",
  "JAMNAGAR",
  "GANDHIDHAM",
  "MORVI",
  "SHIVPURI",
  "SAGAR",
  "JABALPUR-DAMOHNAKA",
  "SITAMARHI",
  "MUZAFFARPUR",
  "SHEOHAR",
  "MUZAFFARPUR-MARIPUR CHOWK",
  "KEONJHAR",
  "BARIPADA",
  "DHENKANAL",
  "CUTTACK",
  "BERHAMPUR",
  "BHADRAK",
  "URBAN BANK ROAD",
  "BHUBANESWAR",
  "JHARSUGUDA",
  "SAMBALPUR",
  "NABARANGPUR",
  "GUMLA",
  "PATNA CITY",
  "KANKARBAGH-PATNA",
  "PATNA-KURJI",
  "ALLAHABAD",
  "KOTWALI",
  "REWA",
  "PILIBHIT",
  "AMROHA",
  "RAMPUR",
  "BISALPUR-EIDGAH CHAURAHA",
  "UDALGURI-MG ROAD",
  "MEERUT",
  "BIJNOR",
  "GARH ROAD-MEERUT",
  "JHANSI",
  "ORAI",
  "HAMIRPUR",
  "ARRAH",
  "BUXAR",
  "BHABUA",
  "SAHARSA",
  "MADHEPURA",
  "SUPAUL",
  "LUXA",
  "DURGAKUND",
  "BHOJUBEER",
  "BHOPAL",
  "UJJAIN",
  "BERASIA",
  "GWALIOR-SURYA NAGAR",
  "GWALIOR-LASHKAR",
  "INDORE-ANNAPURNA ROAD",
  "LATEHAR",
  "LOHARDAGA",
  "DALTONGANJ-REDMA CHOWK",
  "CHAAS",
  "PHUSRO",
  "RAMGARH",
  "AURANGABAD",
  "SASARAM",
  "DAUD NAGAR",
  "JEHANABAD-STATION ROAD",
  "BURDWAN",
  "PURULIA",
  "ARAMBAGH",
  "BHAGALPUR",
  "BANKA",
  "GODDA-BHAGALPUR ROAD",
  "KAHALGOAN",
  "KHARAGPUR",
  "BANDEL",
  "CONTAI",
  "TAMLUK-MANIKTALA",
  "KOLKATA-BARASAT",
  "GORAKHPUR",
  "MAHARAJGANJ",
  "GORAKHPUR-RUSTAMPUR",
  "GORAKHPUR-MEDICAL COLLEGE",
  "RAJAJIPURAM",
  "TELIBAGH",
  "GAURIGANJ",
  "SHUKLAGANJ",
  "KANGRA-BUS STAND",
  "SOLAN-ANAND COMPLEX",
  "PALAMPUR-CITY MALL",
  "JAMMU",
  "KACHI CHAWNI",
  "JAMMU-KUNJWANI",
  "JAMMU-TALAB TILLO",
  "PALKI-LUCKNOW",
  "CHINHAT-LUCKNOW",
  "AIRPORT ROAD-LUCKNOW",
  "LUCKNOW-BUDHESHWAR",
  "FARRUKHABAD",
  "KANNAUJ",
  "NAUBASTA-KANPUR",
  "DEHRADUN",
  "DALANWALA-DEHRADUN",
  "MAJRA-DEHRADUN",
  "CHURCH ROAD",
  "NAWADA",
  "JAMUI",
  "MATHURA",
  "SHAHGANJ",
  "KRISHNANAGAR-WEST BENGAL",
  "SHANTIPUR",
  "MURSHIDABAD",
  "BHANGEL",
  "BULANDSHAHR-RAJA BABU RD",
  "GHAZIABAD",
  "JHANGIRABAD-BHOPAL",
  "BHOPAL-KAROND",
  "BHOPAL-CHUNABHATTI",
  "NALBARI",
  "ITANAGAR",
  "BISWANATH CHARIALI",
  "KHARUPETIA-PANBARI ROAD",
  "ZOO ROAD-GUWAHATI",
  "KALAPAHAR-GUWAHATI",
  "JOWAI",
  "BARPETA ROAD",
  "HARDOI-LUCKNOW ROAD",
  "LUCKNOW-ASHIYANA",
  "LUCKNOW-BKT",
  "NAGAON",
  "JORHAT",
  "DIBRUGARH-JHALUKPARA",
  "KOTA",
  "KOTA-RANGBARI",
  "KOTA-KUNADI",
  "RAJIV NAGAR",
  "BORING ROAD-PATNA",
  "SAGUNA MOR-PATNA",
  "RENUKOOT",
  "GARHWA",
  "MIRZAPUR",
  "DELHI-NARELA",
  "KANPUR-KALYANPUR",
  "JAMMU-JANIPUR",
  "KOHIMA-NORTH BLOCK",
  "LUCKNOW-QAISARBAGH",
  "LUCKNOW-RAJAJIPURAM 2",
  "DUMKA",
  "DEOGHAR",
  "DHULIYAN",
  "FACTORY OUTLET_BILASPUR",
  "CORPORATE SALE_TAORU",
  "RAJOURI",
  "AKHNOOR-LOHRI MALL"
];

var customers = [
  "297-VMART INDORE-MALWA MILL",
  "296-VMART GWALIOR-OPPO. FILMISTAN",
  "298-VMART LUCKNOW-ARJUNGANJ",
  "300-VMART UNNAO-SHAHGANJ BAZAAR",
  "229-VMART LUCKNOW-DUBAGGA",
  "299-VMART JAIPUR-RAJAPARK",
  "098-VMART AGRA",
  "245-VMART RAJPURA-AGRA",
  "270-VMART AGRA-SIKANDRA",
  "089-VMART GIRIDIH",
  "100-VMART HIRAPUR-DHANBAD",
  "149-VMART JAMTARA",
  "256-VMART DHANBAD-BANK MORE",
  "287-VMART DHANBAD-SARAIDHELLA",
  "102-VMART RANCHI",
  "148-VMART BIRSA CHOWK-RANCHI",
  "171-VMART ADITYAPUR",
  "195-VMART JAMSHEDPUR-SAKCHI AMBAGAN",
  "076-VMART LAJPATNAGAR",
  "077-VMART LAXMINAGAR",
  "015-VMART CHOWK",
  "106-VMART HUSSAINGANJ-LUCKNOW",
  "164-VMART THAKURGANJ",
  "273-VMART LUCKNOW-KHURRAM NAGAR",
  "013-VMART LUCKNOW",
  "014-VMART VIKAS NAGAR",
  "112-VMART CANT ROAD",
  "016-VMART BARABANKI",
  "021-VMART AKBARPUR",
  "022-VMART MAU",
  "007-VMART MANGLAM",
  "008-VMART RAJENDER NAGAR",
  "111-VMART PADARI BAZAR-GORAKHPUR",
  "025-VMART SULTANPUR",
  "026-VMART PARTAP GARH",
  "027-VMART RAIBARELI",
  "010-VMART DEORIA",
  "131-VMART PADRAUNA",
  "009-VMART BASTI",
  "020-VMART FAIZABAD",
  "119-VMART KHALILABAD",
  "099-VMART FIROZABAD",
  "110-VMART ETAWAH",
  "257-VMART MAINPURI-STATION ROAD",
  "017-VMART AZAMGARH",
  "018-VMART BHAGESHWAR NAGAR",
  "019-VMART JAUNPUR",
  "168-VMART HUSAINABAD-JAUNPUR",
  "194-VMART SARAI MIR",
  "033-VMART GAZIPUR",
  "034-VMART BALIA",
  "159-VMART LALGANJ",
  "085-VMART MOTIHARI",
  "086-VMART BETTIAH",
  "189-VMART CHAKIA",
  "083-VMART DARBHANGA",
  "087-VMART GOPALGANJ",
  "097-VMART MADHUBANI",
  "104-VMART KISHANGANJ",
  "109-VMART PURNIA",
  "216-VMART RAMBAGH CHOWK",
  "274-VMART RAIGANJ-MG ROAD",
  "122-VMART COOCH BEHAR",
  "138-VMART JALPAIGURI",
  "143-VMART SILIGURI",
  "251-VMART DHUBRI-GTB ROAD",
  "043-VMART CHHAPRA",
  "044-VMART SIWAN",
  "125-VMART HAJIPUR",
  "037-VMART BEGUSARAI",
  "039-VMART SAMASTIPUR",
  "157-VMART KHAGARIA",
  "045-VMART MUZAFFARNAGAR",
  "047-VMART SAHARANPUR",
  "236-VMART SAHARANPUR-DELHI ROAD",
  "093-VMART HARIDWAR",
  "186-VMART MANGLAUR",
  "023-VMART FATHEPUR",
  "067-VMART BANDA",
  "001-VMART ALIGARH",
  "002-VMART BADAUN",
  "003-VMART HATHRAS",
  "050-VMART MURADABAD",
  "051-VMART SHAHAJAHANPUR",
  "052-VMART BAREILLY",
  "193-VMART PREM NAGAR-BAREILLY",
  "048-VMART SITAPUR",
  "049-VMART LAKHIMPUR",
  "175-VMART SIDHAULI",
  "011-VMART GONDA",
  "012-VMART BAHRAICH",
  "028-VMART KANPUR",
  "029-VMART SAKET NAGAR",
  "239-VMART LAL BANGLA-KANPUR",
  "118-VMART MUNGER",
  "146-VMART JAMALPUR",
  "199-VMART LAKHISARAI",
  "200-VMART SHEIKHPURA",
  "094-VMART HALDWANI",
  "095-VMART KASHIPUR",
  "105-VMART RUDRAPUR",
  "053-VMART CHANDIGARH",
  "054-VMART AMBALA",
  "280-VMART ZIRAKPUR-BUS STAND",
  "055-VMART JALANDHAR",
  "057-VMART PATHANKOT",
  "058-VMART GURDASPUR",
  "078-VMART SRINAGAR",
  "133-VMART UDHAMPUR",
  "158-VMART KATHUA",
  "031-VMART VARANASI",
  "036-VMART PAHARIA",
  "196-VMART MUGHALSARAI",
  "059-VMART AJMER",
  "060-VMART NAGOUR",
  "064-VMART UDAIPUR",
  "232-VMART SANGANER-JAIPUR",
  "275-VMART JAIPUR-JHOTWARA",
  "068-VMART LAWGARDEN",
  "069-VMART VADODARA",
  "070-VMART MEHSANA",
  "072-VMART JAMNAGAR",
  "073-VMART GANDHIDHAM",
  "074-VMART MORVI",
  "005-VMART SHIVPURI",
  "163-VMART SAGAR",
  "290-VMART JABALPUR-DAMOHNAKA",
  "123-VMART SITAMARHI-BIHAR",
  "126-VMART MUZAFFARPUR-BIHAR",
  "173-VMART SHEOHAR",
  "253-MUZAFFARPUR-MARIPUR CHOWK",
  "114-VMART KEONJHAR",
  "124-VMART BARIPADA",
  "134-VMART DHENKANAL",
  "139-VMART CUTTACK",
  "113-VMART BERHAMPUR-ORISSA",
  "116-VMART BHADRAK",
  "135-VMART URBAN BANK ROAD",
  "260-VMART BHUBANESWAR",
  "128-VMART JHARSUGUDA",
  "129-VMART SAMBALPUR",
  "140-VMART NABARANGPUR",
  "172-VMART GUMLA",
  "042-VMART PATNA CITY",
  "241-VMART KANKARBAGH-PATNA",
  "276-VMART PATNA-KURJI",
  "024-VMART ALLAHABAD",
  "103-VMART KOTWALI-ALLAHABAD",
  "160-VMART REWA",
  "120-VMART PILIBHIT",
  "155-VMART AMROHA",
  "162-VMART RAMPUR",
  "243-VMART BISALPUR-EIDGAH CHAURAHA",
  "267-VMART UDALGURI-MG ROAD",
  "046-VMART MEERUT",
  "230-VMART BIJNOR",
  "240-VMART GARH ROAD-MEERUT",
  "066-VMART JHANSI",
  "132-VMART ORAI",
  "191-VMART HAMIRPUR",
  "040-VMART ARRAH",
  "153-VMART BUXAR",
  "167-VMART BHABUA",
  "084-VMART SAHARSA",
  "156-VMART MADHEPURA",
  "215-VMART SUPAUL",
  "032-VMART LUXA",
  "141-VMART DURGAKUND-VARANASI",
  "165-VMART BHOJUBEER",
  "061-VMART BHOPAL",
  "062-VMART UJJAIN",
  "063-VMART BERASIA",
  "255-VMART GWALIOR-SURYA NAGAR",
  "259-VMART GWALIOR-LASHKAR",
  "288-VMART INDORE-ANNAPURNA ROAD",
  "150-VMART LATEHAR",
  "207-VMART LOHARDAGA",
  "265-VMART DALTONGANJ-REDMA CHOWK",
  "088-VMART CHAAS",
  "151-VMART PHUSRO",
  "170-VMART RAMGARH",
  "081-VMART AURANGABAD",
  "082-VMART SASARAM",
  "121-VMART DAUD NAGAR",
  "235-VMART JEHANABAD-STATION ROAD",
  "117-VMART BURDWAN",
  "147-VMART PURULIA",
  "217-VMART ARAMBAGH",
  "038-VMART BHAGALPUR",
  "174-VMART BANKA",
  "237-VMART GODDA-BHAGALPUR ROAD",
  "238-VMART KAHALGOAN",
  "144-VMART KHARAGPUR",
  "213-VMART BANDEL",
  "231-VMART CONTAI",
  "242-VMART TAMLUK-MANIKTALA",
  "293-VMART KOLKATA-BARASAT",
  "006-VMART GORAKHPUR",
  "188-VMART MAHARAJGANJ",
  "201-VMART GORAKHPUR-RUSTAMPUR",
  "269-VMART GORAKHPUR-MEDICAL COLLEGE",
  "169-VMART RAJAJIPURAM",
  "176-VMART TELIBAGH",
  "187-VMART GAURIGANJ",
  "190-VMART SHUKLAGANJ",
  "244-VMART KANGRA-BUS STAND",
  "247-VMART SOLAN-ANAND COMPLEX",
  "248-VMART PALAMPUR-CITY MALL",
  "197-VMART JAMMU",
  "198-VMART KACHI CHAWNI",
  "252-VMART JAMMU-KUNJWANI",
  "285-VMART JAMMU-TALAB TILLO",
  "202-VMART PALKI-LUCKNOW",
  "205-VMART CHINHAT-LUCKNOW",
  "211-VMART AIRPORT ROAD-LUCKNOW",
  "281-VMART LUCKNOW-BUDHESHWAR",
  "030-VMART FARRUKHABAD",
  "183-VMART KANNAUJ",
  "227-VMART NAUBASTA-KANPUR",
  "092-VMART DEHRADUN",
  "203-VMART DALANWALA-DEHRADUN",
  "206-VMART MAJRA-DEHRADUN",
  "080-VMART CHURCH ROAD",
  "115-VMART NAWADA",
  "127-VMART JAMUI",
  "004-VMART MATHURA",
  "137-VMART SHAHGANJ",
  "218-VMART KRISHNANAGAR-WEST BENGAL",
  "219-VMART SHANTIPUR",
  "221-VMART MURSHIDABAD",
  "152-VMART BHANGEL",
  "154-VMART BULANDSHAHR-RAJA BABU RD",
  "254-VMART GHAZIABAD",
  "234-VMART JHANGIRABAD-BHOPAL",
  "250-VMART BHOPAL-KAROND",
  "283-VMART BHOPAL-CHUNABHATTI",
  "209-VMART NALBARI",
  "222-VMART ITANAGAR",
  "226-VMART BISWANATH CHARIALI",
  "258-VMART KHARUPETIA-PANBARI ROAD",
  "210-VMART ZOO ROAD-GUWAHATI",
  "212-VMART KALAPAHAR-GUWAHATI",
  "224-VMART JOWAI",
  "233-VMART BARPETA ROAD",
  "179-VMART HARDOI-LUCKNOW ROAD",
  "271-VMART LUCKNOW-ASHIYANA",
  "272-VMART LUCKNOW-BKT",
  "208-VMART NAGAON",
  "220-VMART JORHAT",
  "278-VMART DIBRUGARH-JHALUKPARA",
  "065-VMART KOTA",
  "279-KOTA-RANGBARI",
  "284-VMART KOTA-KUNADI",
  "041-VMART RAJIV NAGAR",
  "096-VMART BORING ROAD-PATNA",
  "214-VMART SAGUNA MOR-PATNA",
  "035-VMART RENUKOOT",
  "192-VMART GARHWA",
  "223-VMART MIRZAPUR",
  "286-VMART DELHI-NARELA",
  "292-VMART KANPUR-KALYANPUR",
  "291-VMART JAMMU-JANIPUR",
  "277-VMART KOHIMA-NORTH BLOCK",
  "184-VMART LUCKNOW-QAISARBAGH",
  "302-VMART LUCKNOW-RAJAJIPURAM 2",
  "090-VMART DUMKA",
  "091-VMART DEOGHAR",
  "145-VMART DHULIYAN",
  "1001-FACTORY OUTLET_BILASPUR",
  "166-CORPORATE SALE_TAORU",
  "228-VMART RAJOURI",
  "249-VMART AKHNOOR-LOHRI MALL"
];
rp(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${places[0]}&key=AIzaSyAAr72wA5Am-wFBUwYlwL9JFBhCNl9QXx8`,{json:true}).then(res => {
    console.log(res['results'][0])
    // console.log(JSON.parse(res))
    
}).catch(err => console.log(err));

// places.forEach((item,index)=>{
//     console.log(`http:maps.googleapis.com/maps/api/place/textsearch/json?query=${item}&key=YOUR_API_KEY`)
//     // fetch(`http:maps.googleapis.com/maps/api/place/textsearch/json?query=${item}&key=YOUR_API_KEY`)
// })

