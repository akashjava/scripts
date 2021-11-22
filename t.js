var request = require("request-promise");
var token =
  "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODMxNDUyMzMsInVzZXJJZCI6IjAwZTEzODAyLTI3ZjEtNGM4OC04ZmIyLWRkN2VjMmM3NmZkNSIsImVtYWlsIjoiYWthc2guZHV0dGFAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI5Nzc2MjE3NzY5Iiwib3JnSWQiOiJmYzVlNzM0YS0yODc4LTQ1ZTUtODcyYS0xNDMzOGQ1NTc4YzYiLCJuYW1lIjoiQUtBU0ggRFVUVEEiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.sX0YUF7aMIXERWKbfjHvLk-mJvKOZXPR-0kuyAzYY1U";
// request(`http://apis.fretron.com/shipment-view/bpartners/partners?size=1000`, {
//   json: true,
//   headers: {
//     "Content-Type": "application/json",
//     Authorization:token
//   }
// })
//   .then(res => {
//     console.log(JSON.stringify(res.filter(item=>!item.externalId).splice(130,280)));
//     // console.log(JSON.stringify(res.filter(item=>!item.externalId).length));
//   })
//   .catch(err => console.log(err));
var bpartners = [
  {
    places: [
      {
        center: {
          latitude: 25.6166471,
          longitude: 88.126125
        },
        placeId: "73cff264-e087-4346-bb4e-8db8f134c9a0",
        name: "RAIGANJ-MG ROAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"M G Rd, Raiganj, West Bengal 733134, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "274-VMART RAIGANJ-MG ROAD",
    externalId: null,
    type: "customer",
    uuid: "f305277f-3a6a-4f44-8d07-3fa42ed56877",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.8392935,
          longitude: 80.9347895
        },
        placeId: "ebc0d288-4c1d-4ca5-bc39-d52518a9ad1e",
        name: "HUSSAINGANJ",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Station Road, Lalkuan, Lucknow, Uttar Pradesh 226001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "106-VMART HUSSAINGANJ-LUCKNOW",
    externalId: null,
    type: "customer",
    uuid: "8d9e9e69-a497-4efc-b136-1b1ca7f7300f",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.449923,
          longitude: 80.3318736
        },
        placeId: "e81920bf-2235-4eba-898c-97dcf41a3ede",
        name: "KANPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Kanpur, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "028-VMART KANPUR",
    externalId: null,
    type: "customer",
    uuid: "e8b0858c-d9ca-4186-8fc2-dd93109a5872",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.987527,
          longitude: 77.6965688
        },
        placeId: "e0bebf2b-0617-4b97-8428-fd7ee4d0d9c7",
        name: "CANT ROAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Cantt Rd, Meerut Cantt, Meerut, Uttar Pradesh 250001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "112-VMART CANT ROAD",
    externalId: null,
    type: "customer",
    uuid: "1b27070d-e85e-43cd-ac2f-51cf739bdc01",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.0311101,
          longitude: 79.1271229
        },
        placeId: "9354ba70-4c58-40d5-b788-4427beab96d7",
        name: "BADAUN",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Budaun, Uttar Pradesh 243601, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "002-VMART BADAUN",
    externalId: null,
    type: "customer",
    uuid: "ce82adb2-03b0-40b3-997d-cbb059bd8d6e",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 29.9456906,
          longitude: 78.16424780000001
        },
        placeId: "cb4c2e10-4785-4d9e-9bf7-97a24e5a5638",
        name: "HARIDWAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Haridwar, Uttarakhand, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "093-VMART HARIDWAR",
    externalId: null,
    type: "customer",
    uuid: "5eeee84f-7bff-476b-8e47-49f91eb9999f",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 32.3863082,
          longitude: 75.5173465
        },
        placeId: "25b24fb6-22af-415d-8c67-3ad09db1509b",
        name: "KATHUA",
        category: "Fleet Office"
      }
    ],
    address: '{"address":"Kathua","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "158-VMART KATHUA",
    externalId: null,
    type: "customer",
    uuid: "66747769-7015-414a-8651-024ee3b6df3d",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.4106892,
          longitude: 85.04932529999999
        },
        placeId: "ede6028f-43b9-45be-ae57-2f04f5ff9c1b",
        name: "CHAKIA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Chakia, Bihar 845412, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "189-VMART CHAKIA",
    externalId: null,
    type: "customer",
    uuid: "0444736c-d34b-4caf-a43c-39425e429a2c",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 20.6504753,
          longitude: 85.5981223
        },
        placeId: "ace75ade-a1d9-437c-a46d-2781253f77f3",
        name: "DHENKANAL",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Dhenkanal, Odisha, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "134-VMART DHENKANAL",
    externalId: null,
    type: "customer",
    uuid: "2917ee7d-00b5-4174-b48e-b96050ae2aed",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.0273746,
          longitude: 72.56064909999999
        },
        placeId: "fead0232-dc9c-4ca3-a0b0-61a6958cda82",
        name: "LAWGARDEN",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Law Garden, Maharashtra Society, Ellisbridge, Ahmedabad, Gujarat 380009, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "068-VMART LAWGARDEN",
    externalId: null,
    type: "customer",
    uuid: "71c13156-9b3f-4a29-921d-34c603ed4a14",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 27.8295801,
          longitude: 79.8296743
        },
        placeId: "799bd1ae-a746-408e-aa40-301c1221226d",
        name: "SHAHAJAHANPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Shahjahanpur, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "051-VMART SHAHAJAHANPUR",
    externalId: null,
    type: "customer",
    uuid: "b051deab-2d70-4439-9687-7d8e621a4526",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.4831584,
          longitude: 84.43655
        },
        placeId: "4d01604e-f202-4b8b-ad42-6d419ae3f433",
        name: "GOPALGANJ",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Gopalganj, Bihar 841428, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "087-VMART GOPALGANJ",
    externalId: null,
    type: "customer",
    uuid: "f48c8da0-85fd-4392-8a78-e95ceb1bef13",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.2645399,
          longitude: 88.4380966
        },
        placeId: "b87a9011-52ae-48d6-b5a5-a0c945a613e6",
        name: "SHANTIPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Santipur, West Bengal 741404, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "219-VMART SHANTIPUR",
    externalId: null,
    type: "customer",
    uuid: "45a381f6-dae2-400d-aecc-fee1108602b6",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.8555542,
          longitude: 80.92746079999999
        },
        placeId: "36e18375-b353-40c7-81ed-c299de24acac",
        name: "LUCKNOW-QAISARBAGH",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Qaisar Bagh, Lucknow, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "184-VMART LUCKNOW-QAISARBAGH",
    externalId: null,
    type: "customer",
    uuid: "c9b120d0-e018-4aa9-a2ed-18b95b61ca36",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.7778797,
          longitude: 80.94301720000001
        },
        placeId: "2b59d7c0-47a6-4e02-bac7-4070ff529c77",
        name: "TELIBAGH",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Telibagh, Lucknow, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "176-VMART TELIBAGH",
    externalId: null,
    type: "customer",
    uuid: "0286f02b-01ef-4458-8666-8425e8ee6bab",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.7617317,
          longitude: 80.885655
        },
        placeId: "39dc3907-7d07-4200-88aa-edb9ba0eface",
        name: "AIRPORT ROAD-LUCKNOW",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Amausi, Lucknow, Uttar Pradesh 226009, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "211-VMART AIRPORT ROAD-LUCKNOW",
    externalId: null,
    type: "customer",
    uuid: "dd96f528-875d-4a15-b68a-05adbab759ba",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 27.4924134,
          longitude: 77.673673
        },
        placeId: "e8b24c0a-8909-44e3-b15b-7dd77b82fae6",
        name: "MATHURA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Mathura, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "004-VMART MATHURA",
    externalId: null,
    type: "customer",
    uuid: "e810ad1a-04af-42ef-ad53-bf98ebcee47a",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.5938179,
          longitude: 85.16053319999999
        },
        placeId: "5c9a92e4-81cf-46b5-84f5-1349b712180b",
        name: "KANKARBAGH-PATNA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Kankarbagh, Kumhrar, Patna, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "241-VMART KANKARBAGH-PATNA",
    externalId: null,
    type: "customer",
    uuid: "bc875588-25cb-4a04-9c37-d691b835ba96",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.2627223,
          longitude: 87.2366237
        },
        placeId: "512bf98e-a0ef-4f4d-9791-2b3b296988c8",
        name: "KAHALGOAN",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Kahalgaon, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "238-VMART KAHALGOAN",
    externalId: null,
    type: "customer",
    uuid: "acbd2a0e-18ab-4899-b1d1-0c44cb0667ce",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 30.2965552,
          longitude: 77.99659609999999
        },
        placeId: "79003b29-402d-4951-b173-0bde1329a454",
        name: "MAJRA-DEHRADUN",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Majra, Dehradun, Uttarakhand, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "206-VMART MAJRA-DEHRADUN",
    externalId: null,
    type: "customer",
    uuid: "8354b6b9-4541-4131-a9ac-0402e013d995",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.2181035,
          longitude: 78.1617874
        },
        placeId: "118a68b9-42e8-439f-930a-509872576aad",
        name: "GWALIOR-SURYA NAGAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Surya Nagar, Gwalior, Madhya Pradesh 474008, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "255-VMART GWALIOR-SURYA NAGAR",
    externalId: null,
    type: "customer",
    uuid: "ce4ea092-1dd6-49e4-b174-431e418a5de9",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.5204591,
          longitude: 92.14234929999999
        },
        placeId: "b934636e-86a7-49cb-a67a-09147cfa6cae",
        name: "KHARUPETIA-PANBARI ROAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Panbari Rd, Niz Kharupetia, Assam 784115, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "258-VMART KHARUPETIA-PANBARI ROAD",
    externalId: null,
    type: "customer",
    uuid: "151051dd-07f6-4888-942f-c959f15f49b3",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 19.2281434,
          longitude: 82.54698979999999
        },
        placeId: "8a995835-fa7a-4c04-8818-f6e640411805",
        name: "NABARANGPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Nowrangpur, Odisha 764059, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "140-VMART NABARANGPUR",
    externalId: null,
    type: "customer",
    uuid: "b423097c-808b-4c00-8ccb-8f3160298a90",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.7496217,
          longitude: 82.692621
        },
        placeId: "bb949bc1-da76-4c08-9d50-7fc04837161c",
        name: "JAUNPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Jaunpur, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "019-VMART JAUNPUR",
    externalId: null,
    type: "customer",
    uuid: "a301a9ac-f0c3-443f-80c0-e1a7f2961b6c",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.7622641,
          longitude: 86.0020693
        },
        placeId: "59d45c21-1ae1-4342-b396-09581f2b9441",
        name: "PHUSRO",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Phusro, Jharkhand, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "151-VMART PHUSRO",
    externalId: null,
    type: "customer",
    uuid: "6df6fff2-625a-4d3e-929b-12209202f4a1",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.4269869,
          longitude: 82.5331119
        },
        placeId: "bed1a78a-cf3d-4b9a-91e6-43c886a3f1ca",
        name: "AKBARPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Akbarpur, Uttar Pradesh 224122, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "021-VMART AKBARPUR",
    externalId: null,
    type: "customer",
    uuid: "b2a461c4-7248-4bbf-a468-fcc43a987ab1",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 31.6861745,
          longitude: 76.52130919999999
        },
        placeId: "e62112ca-a24a-4ed8-b05b-7417475cc790",
        name: "HAMIRPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Hamirpur, Himachal Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "191-VMART HAMIRPUR",
    externalId: null,
    type: "customer",
    uuid: "f4dd1081-e366-4119-87e2-2392f1b97bb2",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.8139844,
          longitude: 82.7629893
        },
        placeId: "ea73f6e7-0492-458e-b1e6-251c29522234",
        name: "BASTI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Basti, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "009-VMART BASTI",
    externalId: null,
    type: "customer",
    uuid: "4f64350d-6831-4bc2-bc30-e00f115b0db7",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 24.037609,
          longitude: 84.07679519999999
        },
        placeId: "07fca67c-5c2e-43f9-91a6-0f59b110fe25",
        name: "DALTONGANJ-REDMA CHOWK",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Redma Chowk, Janakpuri, Daltonganj, Jharkhand 822101","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "265-VMART DALTONGANJ-REDMA CHOWK",
    externalId: null,
    type: "customer",
    uuid: "161a8e47-b1e4-4f33-b49d-3f2107547047",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.3322026,
          longitude: 86.3616405
        },
        placeId: "8d36ef03-ed5e-4ac5-a0b0-a92407058165",
        name: "PURULIA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Purulia, West Bengal, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "147-VMART PURULIA",
    externalId: null,
    type: "customer",
    uuid: "66c1db55-59c5-4f25-a8c0-db65e3dded48",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.5024286,
          longitude: 83.7791283
        },
        placeId: "342fc66c-cc33-4dbc-ac31-d95b55a6b92a",
        name: "DEORIA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Deoria, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "010-VMART DEORIA",
    externalId: null,
    type: "customer",
    uuid: "50f68600-57fd-4473-a944-752643be9e37",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.1233718,
          longitude: 86.6045134
        },
        placeId: "12fa4980-409f-481e-8e4c-f36a03bdf2e9",
        name: "SUPAUL",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Supaul, Bihar 852131, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "215-VMART SUPAUL",
    externalId: null,
    type: "customer",
    uuid: "2df98148-e0df-4212-b029-d8649580c838",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.6278576,
          longitude: 77.4314466
        },
        placeId: "dab2851e-8d2e-4e6d-a3d6-51a16e5d4ca3",
        name: "BERASIA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Berasia, Madhya Pradesh 463106, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "063-VMART BERASIA",
    externalId: null,
    type: "customer",
    uuid: "9601025b-5fa3-445a-bf95-5629f9b6a7b2",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.457011,
          longitude: 77.026561
        },
        placeId: "0e31856a-fed2-456c-95bd-f66c8d51bbea",
        name: "CHAAS",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Shop No. 50, Jail Land Complex, Soha Chowk, Gurugram, 122001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "088-VMART CHAAS",
    externalId: null,
    type: "customer",
    uuid: "0aecac09-fb5e-482e-a2b6-701fa508aad5",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.813584,
          longitude: 83.3999654
        },
        placeId: "4e570ec1-0635-4bce-ade6-fb83761994f7",
        name: "GORAKHPUR-MEDICAL COLLEGE",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Gorakhpur, Uttar Pradesh 273013, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "269-VMART GORAKHPUR-MEDICAL COLLEGE",
    externalId: null,
    type: "customer",
    uuid: "26fac0c1-e24b-4931-add6-ab62a6d79511",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 27.1446035,
          longitude: 83.5621737
        },
        placeId: "c09ab478-9edc-4829-a597-8f9e1a474271",
        name: "MAHARAJGANJ",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Maharajganj, Uttar Pradesh 273303, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "188-VMART MAHARAJGANJ",
    externalId: null,
    type: "customer",
    uuid: "310a42d4-581f-452b-81b1-fe46552f26bc",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.1981479,
          longitude: 78.17353659999999
        },
        placeId: "cd2aa67d-3f6b-438c-8bb8-8c1ec75ff6b3",
        name: "GWALIOR-LASHKAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Lashkar, Gwalior, Madhya Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "259-VMART GWALIOR-LASHKAR",
    externalId: null,
    type: "customer",
    uuid: "5cc52a7c-71a5-47de-b5eb-a7af0f7c9f0c",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.1647708,
          longitude: 91.7801236
        },
        placeId: "395f6107-3e7f-4970-9b41-b9f8cc1f9d8b",
        name: "ZOO ROAD-GUWAHATI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Zoo Rd, Guwahati, Assam, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "210-VMART ZOO ROAD-GUWAHATI",
    externalId: null,
    type: "customer",
    uuid: "2f78ec15-320e-40ee-88ab-7ca92b356908",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 32.67152770000001,
          longitude: 74.8762972
        },
        placeId: "327790ea-12dc-48aa-bdd9-e9dfd6a13185",
        name: "JAMMU-KUNJWANI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Kunjwani, Jammu","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "252-VMART JAMMU-KUNJWANI",
    externalId: null,
    type: "customer",
    uuid: "9cc97439-76a3-412e-b629-29a3835f56db",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 27.0514156,
          longitude: 79.9136731
        },
        placeId: "c8825dd4-931e-404e-bb24-2f85ef252afa",
        name: "KANNAUJ",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Kannauj, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "183-VMART KANNAUJ",
    externalId: null,
    type: "customer",
    uuid: "e10883c4-69d2-4426-a8cb-866a0a5c0014",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.348009,
          longitude: 92.6838111
        },
        placeId: "a75635f5-8e6e-49d6-8d74-47eb284c17fe",
        name: "NAGAON",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Nagaon, Assam, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "208-VMART NAGAON",
    externalId: null,
    type: "customer",
    uuid: "fcf820f7-7d2c-4958-87fd-2b8e43bf1774",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.8983907,
          longitude: 83.97971729999999
        },
        placeId: "b32b35dd-329c-419b-b299-83db0bdac526",
        name: "PADRAUNA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Padrauna, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "131-VMART PADRAUNA",
    externalId: null,
    type: "customer",
    uuid: "ec07bbd1-3388-4588-b07b-d7ebbf4684d9",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.8082089,
          longitude: 80.9910306
        },
        placeId: "da82d797-7b8e-429b-99c4-79fdc1c848ce",
        name: "LUCKNOW-ARJUNGANJ",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Arjunganj, Lucknow, Uttar Pradesh 226002, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "298-VMART LUCKNOW-ARJUNGANJ",
    externalId: null,
    type: "customer",
    uuid: "159fa194-e02e-4905-aaa2-0f9138f8aa6a",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.6275609,
          longitude: 77.2784081
        },
        placeId: "77f25361-1800-4a91-aa25-67c15611f984",
        name: "LAXMINAGAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Laxmi Nagar, Block S1, Nanakpura, Shakarpur, New Delhi, Delhi 110092, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "077-VMART LAXMINAGAR",
    externalId: null,
    type: "customer",
    uuid: "9d85bb4e-f107-478c-a3ee-dc4dd55d0f5d",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.7806817,
          longitude: 83.4067042
        },
        placeId: "31d0989c-4ada-4b7f-abef-bb6617fdc786",
        name: "PADARI BAZAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Padri Bazar, Vishwakarmapuram, Gorakhpur, Uttar Pradesh 273014, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "111-VMART PADARI BAZAR-GORAKHPUR",
    externalId: null,
    type: "customer",
    uuid: "3a5a1c04-a3e8-4eeb-b1f2-62b99275f29e",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.8858653,
          longitude: 80.9719108
        },
        placeId: "d3a44f1e-db2f-46f7-81d5-213948bd73b8",
        name: "LUCKNOW-KHURRAM NAGAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Khurram Nagar, Lucknow, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "273-VMART LUCKNOW-KHURRAM NAGAR",
    externalId: null,
    type: "customer",
    uuid: "4d4efb30-843e-4df0-b03f-721d58c29747",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 27.5980718,
          longitude: 78.0492265
        },
        placeId: "b2b047e3-18cb-4851-a576-39a586b56b54",
        name: "HATHRAS",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Hathras, Uttar Pradesh 204101, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "003-VMART HATHRAS",
    externalId: null,
    type: "customer",
    uuid: "e03660da-6211-4c4a-9acb-f8251abc8aaf",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 32.2733352,
          longitude: 75.6522066
        },
        placeId: "ca55d3a5-00f6-4799-83fe-079ce3145588",
        name: "PATHANKOT",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Pathankot, Punjab 145001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "057-VMART PATHANKOT",
    externalId: null,
    type: "customer",
    uuid: "d5355033-c1d4-4b78-9733-b910e4747d44",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.7657567,
          longitude: 83.0833901
        },
        placeId: "2e9d9b0f-eabd-4c74-8118-dab59b6c4fc9",
        name: "KHALILABAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Khalilabad, Uttar Pradesh 272175, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "119-VMART KHALILABAD",
    externalId: null,
    type: "customer",
    uuid: "dfc5d90a-af46-42c3-ab23-79357ad02d75",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 30.6589712,
          longitude: 76.82128900000001
        },
        placeId: "429e35ed-ff73-40ff-9559-d52a6eb837c7",
        name: "ZIRAKPUR-BUS STAND",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Zirakpur, Punjab 140603, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "280-VMART ZIRAKPUR-BUS STAND",
    externalId: null,
    type: "customer",
    uuid: "a978bef2-49e3-44ed-bda2-6b117931570f",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 22.7374822,
          longitude: 75.8759072
        },
        placeId: "f96ed087-e8fc-49eb-bd86-1f3b519fdcd7",
        name: "INDORE-MALWA MILL",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Malwa Mill, Indore, Madhya Pradesh 452001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "297-VMART INDORE-MALWA MILL",
    externalId: null,
    type: "customer",
    uuid: "dddabd8b-b97f-4e62-a14d-b06568dbdf96",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.7829103,
          longitude: 79.027659
        },
        placeId: "765a4ff1-26de-430d-9711-e0b80348aefa",
        name: "ETAWAH",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Etawah, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "110-VMART ETAWAH",
    externalId: null,
    type: "customer",
    uuid: "4c134a85-9959-4670-b309-ce37b5e32b31",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 21.4668716,
          longitude: 83.9811665
        },
        placeId: "5b86dbae-e562-4edb-b9bf-e947f2bc8e33",
        name: "SAMBALPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Sambalpur, Odisha, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "129-VMART SAMBALPUR",
    externalId: null,
    type: "customer",
    uuid: "463b3e65-9b0b-4b44-a6bf-23064c9d1abd",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 20.2960587,
          longitude: 85.8245398
        },
        placeId: "c118c653-2cea-4a67-94f2-3fd22bd82b92",
        name: "BHUBANESWAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Bhubaneswar, Odisha, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "260-VMART BHUBANESWAR",
    externalId: null,
    type: "customer",
    uuid: "fdbd6ccb-1fc5-4980-a4a4-8b270e1d5ea3",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.5590045,
          longitude: 84.6689456
        },
        placeId: "ef0d7acd-942d-4288-8d75-407e5f46c56f",
        name: "ARRAH",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Arrah, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "040-VMART ARRAH",
    externalId: null,
    type: "customer",
    uuid: "fe1250fc-9296-4793-985f-02f223d2dbe2",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 30.3752011,
          longitude: 76.782122
        },
        placeId: "5ed0c2ec-170f-4388-89e1-9175cc339c68",
        name: "AMBALA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Ambala, Haryana, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "054-VMART AMBALA",
    externalId: null,
    type: "customer",
    uuid: "ba8dade3-199c-4fcd-837b-de451a00da82",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 27.2820753,
          longitude: 80.83442939999999
        },
        placeId: "3873fc7d-e70f-4c3c-b619-df0407536e65",
        name: "SIDHAULI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Sidhauli, Uttar Pradesh 261303, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "175-VMART SIDHAULI",
    externalId: null,
    type: "customer",
    uuid: "378f3292-38ef-4e23-beb1-0692d0cbbaba",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.5115173,
          longitude: 86.4805834
        },
        placeId: "f1e096a0-5372-4cd1-a59d-7859d4b6e456",
        name: "KHAGARIA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Khagaria, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "157-VMART KHAGARIA",
    externalId: null,
    type: "customer",
    uuid: "f4772d41-c674-42aa-a0db-db3453b0a14c",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 24.9538803,
          longitude: 84.01428659999999
        },
        placeId: "6761aca8-458d-4fb4-a3d8-0b8eb25f6694",
        name: "SASARAM",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Sasaram, Bihar 821115, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "082-VMART SASARAM",
    externalId: null,
    type: "customer",
    uuid: "7b546e46-08f8-44ad-8ee4-aa369bbd1f74",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.9051778,
          longitude: 78.46731799999999
        },
        placeId: "e9c7e0e7-3249-4a61-99c7-ccd47012d2ca",
        name: "AMROHA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Amroha, Uttar Pradesh 244221, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "155-VMART AMROHA",
    externalId: null,
    type: "customer",
    uuid: "18ff783c-3a6a-441e-9a8c-5e2e5c301aac",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.4019563,
          longitude: 77.84982629999999
        },
        placeId: "756c7257-3e65-4c67-b8c5-9db63e451cb6",
        name: "BULANDSHAHR-RAJA BABU RD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Raje Babu Rd, Bulandshahr, Uttar Pradesh 203001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "154-VMART BULANDSHAHR-RAJA BABU RD",
    externalId: null,
    type: "customer",
    uuid: "504d6f0d-4ae8-4209-b1c7-f9afbcf501c1",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.5940947,
          longitude: 85.1375645
        },
        placeId: "6bbae1ad-c682-4cfc-b9f2-e157a807b184",
        name: "PATNA CITY",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Patna, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "042-VMART PATNA CITY",
    externalId: null,
    type: "customer",
    uuid: "c6a07069-983f-410d-9c72-6a1bdc3770b6",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.6691565,
          longitude: 77.45375779999999
        },
        placeId: "277d6a11-40b4-4e4d-9327-8f80c7107e9a",
        name: "GHAZIABAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Ghaziabad, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "254-VMART GHAZIABAD",
    externalId: null,
    type: "customer",
    uuid: "a581acf3-5d78-4a76-9e19-bd4cf9a6e933",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.8379544,
          longitude: 80.8765463
        },
        placeId: "0b79c0f9-1211-4538-a134-056f7b35c4ea",
        name: "RAJAJIPURAM",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Rajajipuram, Lucknow, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "169-VMART RAJAJIPURAM",
    externalId: null,
    type: "customer",
    uuid: "b447b18b-5048-401c-b120-5e6ffc9c301c",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.3514174,
          longitude: 82.9729325
        },
        placeId: "12a0cd00-969d-4ab2-a9e8-2604e825e30c",
        name: "BHOJUBEER",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Bhojuveer, Varanasi, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "165-VMART BHOJUBEER",
    externalId: null,
    type: "customer",
    uuid: "ef323615-8cb9-4860-8cc0-c656ac514151",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 22.34601,
          longitude: 87.2319753
        },
        placeId: "d6cd7bfd-fce5-4ed4-b594-4a77623b967f",
        name: "KHARAGPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Kharagpur, West Bengal, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "144-VMART KHARAGPUR",
    externalId: null,
    type: "customer",
    uuid: "60de36f3-4fb8-401e-95bd-ebf79d7f18e9",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.4446185,
          longitude: 91.4410527
        },
        placeId: "eca0500a-90f9-40fb-b0a9-a10b6d1c54e3",
        name: "NALBARI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Nalbari, Assam, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "209-VMART NALBARI",
    externalId: null,
    type: "customer",
    uuid: "786f3686-bfc4-45e7-99cd-1efa8cfc4f54",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.4759235,
          longitude: 77.04061469999999
        },
        placeId: "d78aaab5-a609-4260-8d2a-02f6f250743f",
        name: "RAJIV NAGAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Rajiv Nagar, Sector 13, Gurugram, Haryana 122022, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "041-VMART RAJIV NAGAR",
    externalId: null,
    type: "customer",
    uuid: "7925cbbf-b72f-4c21-bb13-9801d5fefe8b",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 24.6706654,
          longitude: 87.94818459999999
        },
        placeId: "3ab97751-4e98-49c6-95cb-4de3adde91e7",
        name: "DHULIYAN",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Dhuliyan, West Bengal 742202, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "145-VMART DHULIYAN",
    externalId: null,
    type: "customer",
    uuid: "a3737fb5-926d-4cf9-87a2-7a7857c3de3e",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.8398653,
          longitude: 80.8536894
        },
        placeId: "6bb28bc9-ec7e-4d8b-9130-798d76024165",
        name: "LUCKNOW-BUDHESHWAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Budheshwar, Alamnagar, Rajajipuram, Lucknow, Uttar Pradesh 226017, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "281-VMART LUCKNOW-BUDHESHWAR",
    externalId: null,
    type: "customer",
    uuid: "c6a35547-c4b6-4f9f-a563-0e34eea20f6d",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.5145872,
          longitude: 85.29423129999999
        },
        placeId: "919cb067-132b-476d-b4ab-6f4b1817ff4d",
        name: "SHEOHAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Sheohar, Bihar 843329, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "173-VMART SHEOHAR",
    externalId: null,
    type: "customer",
    uuid: "9471a74d-4b95-4023-a6b8-fa446b41f0f7",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 19.8761653,
          longitude: 75.3433139
        },
        placeId: "112ab68d-eb5d-46b1-b9bb-49573f9d26c4",
        name: "AURANGABAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Aurangabad, Maharashtra, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "081-VMART AURANGABAD",
    externalId: null,
    type: "customer",
    uuid: "627065a7-b15d-4ff0-95f9-0983f8468cad",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.4484257,
          longitude: 78.5684594
        },
        placeId: "ab969a05-5fa9-4175-9e53-bb13324c40d4",
        name: "JHANSI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Jhansi, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "066-VMART JHANSI",
    externalId: null,
    type: "customer",
    uuid: "c85cf18f-4170-47bc-ae78-13c155446b18",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.9239677,
          longitude: 86.7946387
        },
        placeId: "f4d3b76e-6df2-4ea9-a2cb-16da69a9eb39",
        name: "MADHEPURA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Madhepura, Bihar 852113, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "156-VMART MADHEPURA",
    externalId: null,
    type: "customer",
    uuid: "8ccf440f-3ca3-407e-b9c2-aff678723937",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 31.3260152,
          longitude: 75.57618289999999
        },
        placeId: "94b6d4b5-5862-41f7-a2fc-404c01aceea2",
        name: "JALANDHAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Jalandhar, Punjab, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "055-VMART JALANDHAR",
    externalId: null,
    type: "customer",
    uuid: "20343175-7c00-49b9-8fff-683003a9d7ef",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.2841907,
          longitude: 79.79833330000001
        },
        placeId: "c9db3311-f0f8-4230-8f3b-0cdf908c72b4",
        name: "BISALPUR-EIDGAH CHAURAHA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Eidgah Chauraha, Bareilly - Bisalpur Rd, Bisalpur, Uttar Pradesh 262201, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "243-VMART BISALPUR-EIDGAH CHAURAHA",
    externalId: null,
    type: "customer",
    uuid: "97f8ba55-d216-4cdb-9b15-a49385a5c5c7",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.5455274,
          longitude: 80.4864448
        },
        placeId: "2c7dd9c5-860d-4a2c-93a0-56ce4fe17f52",
        name: "UNNAO-SHAHGANJ BAZAAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Sadar Bazar, Unnao, Uttar Pradesh 209801, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "300-VMART UNNAO-SHAHGANJ BAZAAR",
    externalId: null,
    type: "customer",
    uuid: "e86a07a3-c339-4f2a-9d6a-dc5ad06d98ed",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 24.485179,
          longitude: 86.694785
        },
        placeId: "2fb6d5d7-7b07-4bf2-a710-3d18f14d3b3b",
        name: "DEOGHAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Deoghar, Jharkhand, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "091-VMART DEOGHAR",
    externalId: null,
    type: "customer",
    uuid: "df428033-463b-4593-b78b-d3943da2402e",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.1764665,
          longitude: 75.7885163
        },
        placeId: "630e961e-848f-4d8a-9538-95453b267c9f",
        name: "UJJAIN",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Ujjain, Madhya Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "062-VMART UJJAIN",
    externalId: null,
    type: "customer",
    uuid: "9badbc3e-ac6c-4556-9d71-a0fd800c9818",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.6224743,
          longitude: 85.0402694
        },
        placeId: "e337c941-ae88-43cd-afa1-27e13d57918a",
        name: "SAGUNA MOR-PATNA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Saguna More, Balaji Nagar, New Tarachak, Danapur Nizamat, Patna, Bihar 801503, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "214-VMART SAGUNA MOR-PATNA",
    externalId: null,
    type: "customer",
    uuid: "067e7059-f855-40bc-909e-fee16544b087",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 29.2182644,
          longitude: 79.5129767
        },
        placeId: "fc657767-25a8-48bc-94ac-68e497e33956",
        name: "HALDWANI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Haldwani, Uttarakhand 263139, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "094-VMART HALDWANI",
    externalId: null,
    type: "customer",
    uuid: "66927f1e-1778-4057-b15e-871fbfc045c7",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 22.4707019,
          longitude: 70.05773
        },
        placeId: "7aeafa07-fb39-4e32-829c-0f861938dd10",
        name: "JAMNAGAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Jamnagar, Gujarat, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "072-VMART JAMNAGAR",
    externalId: null,
    type: "customer",
    uuid: "51f08ecf-983c-40f5-862f-f76ad7a9deea",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.1542045,
          longitude: 85.8918454
        },
        placeId: "ac2425b1-211b-463d-917a-89aeaa7aae11",
        name: "DARBHANGA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Darbhanga, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "083-VMART DARBHANGA",
    externalId: null,
    type: "customer",
    uuid: "afa3c00b-3741-4fb8-99f2-06910f67cfcf",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 29.8403606,
          longitude: 79.769426
        },
        placeId: "e1fd9e2d-4459-46f0-8dc7-3cf1d9d4a563",
        name: "BHAGESHWAR NAGAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Bageshwar, Uttarakhand 263642, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "018-VMART BHAGESHWAR NAGAR",
    externalId: null,
    type: "customer",
    uuid: "d32806fc-65fe-4de2-8bd4-ae44761b2752",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.0052917,
          longitude: 82.9447782
        },
        placeId: "be3e9eba-fa82-4bed-861c-a9e9b48346b8",
        name: "SARAI MIR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Sarai Meer, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "194-VMART SARAI MIR",
    externalId: null,
    type: "customer",
    uuid: "a12329fb-1a59-4013-9c2d-979d4cb2188f",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 22.690188,
          longitude: 75.8375496
        },
        placeId: "002fb58a-e2df-4520-b642-90938a998b2d",
        name: "INDORE-ANNAPURNA ROAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Annapurna Rd, Indore, Madhya Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "288-VMART INDORE-ANNAPURNA ROAD",
    externalId: null,
    type: "customer",
    uuid: "ac0dd49d-7cda-4152-972c-eae88930fc22",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 20.462521,
          longitude: 85.8829895
        },
        placeId: "1e008aed-9eb8-4e3f-8af0-45ba4ba51ca2",
        name: "CUTTACK",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Cuttack, Odisha, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "139-VMART CUTTACK",
    externalId: null,
    type: "customer",
    uuid: "fd141ae6-5a98-404f-8c31-fc78349e68ea",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.4181638,
          longitude: 86.1271542
        },
        placeId: "90413b14-bd8b-4b28-9b7d-ad71f735807b",
        name: "BEGUSARAI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Begusarai, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "037-VMART BEGUSARAI",
    externalId: null,
    type: "customer",
    uuid: "0c25db67-82a6-45e8-b0e9-9f92945ccb87",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.9844618,
          longitude: 77.7064137
        },
        placeId: "95926ba1-137f-41d5-9d32-206501350878",
        name: "MEERUT",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Meerut, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "046-VMART MEERUT",
    externalId: null,
    type: "customer",
    uuid: "85b3a91b-a64a-4298-b2cb-9252fef8de13",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.798299,
          longitude: 79.02202869999999
        },
        placeId: "23a67562-12f3-4618-a88b-de338274eaa7",
        name: "RAMPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Rampur, Uttar Pradesh 244901, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "162-VMART RAMPUR",
    externalId: null,
    type: "customer",
    uuid: "601c07f8-801a-4d44-bb12-6ee48f7f79e2",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 24.19135,
          longitude: 86.2996368
        },
        placeId: "c595acc0-887a-48d8-9ed3-d7710b1bc60c",
        name: "GIRIDIH",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Giridih, Jharkhand, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "089-VMART GIRIDIH",
    externalId: null,
    type: "customer",
    uuid: "4ecc3ac0-5d85-46e6-96fc-0af049464665",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.8025577,
          longitude: 84.520147
        },
        placeId: "0d753188-d1a8-4d33-8619-863e76950184",
        name: "BETTIAH",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Bettiah, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "086-VMART BETTIAH",
    externalId: null,
    type: "customer",
    uuid: "1ebf113e-bd5b-4400-9069-80fcad5ac043",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 29.29851739999999,
          longitude: 77.28825030000002
        },
        placeId: "1feff961-ab2b-4c90-ab37-4430607ac39d",
        name: "SAHARANPUR-DELHI ROAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Saharanpur - Delhi Rd, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "236-VMART SAHARANPUR-DELHI ROAD",
    externalId: null,
    type: "customer",
    uuid: "3df8fd35-49fc-455b-bfc2-ed09eccc2c9e",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 31.6303502,
          longitude: 74.8811442
        },
        placeId: "b018ab6e-46f7-4095-8aaf-f6583c6dfe45",
        name: "RAMBAGH CHOWK",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Kot Atma Singh, Hussainpura, Amritsar, Punjab 143001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "216-VMART RAMBAGH CHOWK",
    externalId: null,
    type: "customer",
    uuid: "6e14848d-650b-457f-bd4d-e00ce5cf6953",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.7729751,
          longitude: 82.1457934
        },
        placeId: "fdd9c8a9-6512-4928-bdf4-82927818daf2",
        name: "FAIZABAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Faizabad, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "020-VMART FAIZABAD",
    externalId: null,
    type: "customer",
    uuid: "a6c505d8-d2ac-4387-8266-c735084c3262",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.9431287,
          longitude: 83.55623659999999
        },
        placeId: "8050e20c-0367-477b-a929-fe6771645881",
        name: "MAU",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Mau, Uttar Pradesh 275101, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "022-VMART MAU",
    externalId: null,
    type: "customer",
    uuid: "d53a9f89-67fa-45c7-849f-ec740db687c6",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.6924428,
          longitude: 85.2083236
        },
        placeId: "41f027c3-ff53-4474-a6fc-a3c3188a5572",
        name: "HAJIPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Hajipur, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "125-VMART HAJIPUR",
    externalId: null,
    type: "customer",
    uuid: "1c0df900-ca99-43b2-9ed8-9d632f6f28b6",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.953502,
          longitude: 77.9767202
        },
        placeId: "7ad76846-94c6-45c8-959c-97971970de2c",
        name: "RAJPURA-AGRA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Rajpura, Uttar Pradesh 283124, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "245-VMART RAJPURA-AGRA",
    externalId: null,
    type: "customer",
    uuid: "9751a399-16e1-4c20-9623-7bcd7de7c14a",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.3452397,
          longitude: 89.4482079
        },
        placeId: "a91b215b-f0a9-45dc-a6a8-f097e0aab2f3",
        name: "COOCH BEHAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Cooch Behar, West Bengal, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "122-VMART COOCH BEHAR",
    externalId: null,
    type: "customer",
    uuid: "a2134ddf-3f8a-4938-8a07-96edbbefe4ad",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.3085465,
          longitude: 82.9990381
        },
        placeId: "4568c9a0-3b85-4185-91b6-8cfeb3774cf1",
        name: "LUXA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Luxa, Varanasi, Uttar Pradesh 221001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "032-VMART LUXA",
    externalId: null,
    type: "customer",
    uuid: "25138d20-65cd-46b2-9f07-180204dc7dc3",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.63147,
          longitude: 77.14698
        },
        placeId: "205d1af2-10df-466b-873c-875dde4255c4",
        name: "PAHARIA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"RA 76 /4 Main market, Inder Puri, Delhi, 110012, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "036-VMART PAHARIA",
    externalId: null,
    type: "customer",
    uuid: "6b1c98be-1a3c-4683-b4b8-6110505deb5c",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.5877901,
          longitude: 83.5783078
        },
        placeId: "9b422fa5-e9de-4d8d-9cb9-c2e8fbcd5a59",
        name: "GAZIPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Ghazipur, Uttar Pradesh 233001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "033-VMART GAZIPUR",
    externalId: null,
    type: "customer",
    uuid: "fd8d3af3-f9e2-4bbf-b921-ebf8297da624",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.4017716,
          longitude: 80.314458
        },
        placeId: "917ff7ab-4fcd-44a2-8a12-0f3db94b3095",
        name: "NAUBASTA-KANPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Naubasta, Kanpur, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "227-VMART NAUBASTA-KANPUR",
    externalId: null,
    type: "customer",
    uuid: "068762ca-dc41-4fd8-abb6-bae46cd0d26a",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.5886976,
          longitude: 85.5012971
        },
        placeId: "189fe704-ed69-48c3-b70c-f015d6dfb759",
        name: "SITAMARHI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Sitamarhi, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "123-VMART SITAMARHI-BIHAR",
    externalId: null,
    type: "customer",
    uuid: "1daad1ca-f524-4033-94b9-2584d2043353",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 33.778175,
          longitude: 76.57617139999999
        },
        placeId: "03dbd32f-80c7-41ff-862d-447ccf1d668c",
        name: "JAMMU",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Jammu and Kashmir","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "197-VMART JAMMU",
    externalId: null,
    type: "customer",
    uuid: "67f03802-7756-428f-9216-5e06359f9b31",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 27.5705152,
          longitude: 81.59766719999999
        },
        placeId: "6b761cb1-4609-4fac-8e7b-e4ad92e8903c",
        name: "BAHRAICH",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Bahraich, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "012-VMART BAHRAICH",
    externalId: null,
    type: "customer",
    uuid: "0cc08e72-658d-4d08-a83a-cd25286658ea",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 32.7226129,
          longitude: 74.837554
        },
        placeId: "1dec083a-423e-4291-a3f0-9358a2eb5e7a",
        name: "JAMMU-TALAB TILLO",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Talab Tillo, Jammu 180002","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "285-VMART JAMMU-TALAB TILLO",
    externalId: null,
    type: "customer",
    uuid: "789b797f-16df-48ca-8c3a-2519e1a19943",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.6438482,
          longitude: 84.9040337
        },
        placeId: "c3381f41-dfbc-4204-b0f8-1806483d3e55",
        name: "MOTIHARI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Motihari, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "085-VMART MOTIHARI",
    externalId: null,
    type: "customer",
    uuid: "95c13a42-0398-4a54-a3fa-a01366de6f33",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 29.4438165,
          longitude: 75.67026469999999
        },
        placeId: "cd95cf6b-717a-4d67-94dd-05bdf10043df",
        name: "GORAKHPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Gorakhpur, Haryana 125047, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "006-VMART GORAKHPUR",
    externalId: null,
    type: "customer",
    uuid: "ffa27152-da30-49c7-99cc-20dd1852f024",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 27.574631,
          longitude: 80.66342089999999
        },
        placeId: "4411653c-daf0-47cc-8bb6-83b76c43db56",
        name: "SITAPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Sitapur, Uttar Pradesh 261001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "048-VMART SITAPUR",
    externalId: null,
    type: "customer",
    uuid: "3b03c410-1229-4cfb-ba49-a98fc757f9b5",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 24.8874179,
          longitude: 86.919838
        },
        placeId: "85e8b2bf-bb0f-472b-b345-9dd54740cd4b",
        name: "BANKA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Banka, Bihar 813102, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "174-VMART BANKA",
    externalId: null,
    type: "customer",
    uuid: "572f1030-124d-4b16-98a0-68ff13bb2a63",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.3747561,
          longitude: 86.47352509999999
        },
        placeId: "e2c7644f-49ba-4d3f-bb0f-b13cc0a0002c",
        name: "MUNGER",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Munger, Bihar 811201, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "118-VMART MUNGER",
    externalId: null,
    type: "customer",
    uuid: "6671a395-9127-4b6e-8eca-5aedd820fb34",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.8307174,
          longitude: 84.1857115
        },
        placeId: "a0a8bde2-d9ba-4ff9-8259-94735f03aee0",
        name: "BALIA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Ballia, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "034-VMART BALIA",
    externalId: null,
    type: "customer",
    uuid: "f55c0fe6-4478-4067-89fb-556f713a1ad4",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 21.778109,
          longitude: 87.7517427
        },
        placeId: "43bfd7a8-3f6f-4944-95d8-2da63a5e09b6",
        name: "CONTAI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Contai, West Bengal 721401, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "231-VMART CONTAI",
    externalId: null,
    type: "customer",
    uuid: "88bbd45c-4e9c-4773-9f56-f1b7a71b705d",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.5214579,
          longitude: 88.7195567
        },
        placeId: "fbe1c064-dffd-4a50-b51a-67c25989329f",
        name: "JALPAIGURI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Jalpaiguri, West Bengal, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "138-VMART JALPAIGURI",
    externalId: null,
    type: "customer",
    uuid: "5d761c2f-01d2-4c18-b6df-66c2892af7b6",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 22.934201,
          longitude: 88.3714181
        },
        placeId: "48504e3e-4010-4436-868e-4b290187d808",
        name: "BANDEL",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Bandel, West Bengal, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "213-VMART BANDEL",
    externalId: null,
    type: "customer",
    uuid: "1a0898a9-fe7d-49a2-a969-bdd751d51071",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.1530152,
          longitude: 91.74013210000001
        },
        placeId: "601ee846-8d7d-40a0-8309-23ae4b95d413",
        name: "KALAPAHAR-GUWAHATI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Kala Pahar, Guwahati, Assam, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "212-VMART KALAPAHAR-GUWAHATI",
    externalId: null,
    type: "customer",
    uuid: "e358bd07-713c-46ad-8056-40a6d9cd2482",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 19.3149618,
          longitude: 84.7940911
        },
        placeId: "7ab98e55-2ca8-4af0-9710-270f294a2a9b",
        name: "BERHAMPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Brahmapur, Odisha, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "113-VMART BERHAMPUR-ORISSA",
    externalId: null,
    type: "customer",
    uuid: "eb4112b6-3d30-4134-abbf-d86fde4362a9",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 24.8866859,
          longitude: 85.54345719999999
        },
        placeId: "89059fd8-4212-490c-96af-9afb62cf4109",
        name: "NAWADA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Nawada, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "115-VMART NAWADA",
    externalId: null,
    type: "customer",
    uuid: "57985c13-9a61-4119-b521-9e77ddd585e0",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 21.8554375,
          longitude: 84.0061661
        },
        placeId: "ad6cf92e-3457-4569-90c9-f9858ca2fc08",
        name: "JHARSUGUDA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Jharsuguda, Odisha, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "128-VMART JHARSUGUDA",
    externalId: null,
    type: "customer",
    uuid: "69e448a2-2280-46bc-a60a-a40c20cf0ab0",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.6164376,
          longitude: 85.1138354
        },
        placeId: "f0431383-c725-4660-9894-036a2b0fa9fa",
        name: "BORING ROAD-PATNA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Boring Rd, Patna, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "096-VMART BORING ROAD-PATNA",
    externalId: null,
    type: "customer",
    uuid: "d9f9100a-0c76-4bc1-8f1d-ddf2697c3780",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.2950654,
          longitude: 77.4037183
        },
        placeId: "b755d396-be8e-4927-91d7-f771e51c1bd0",
        name: "BHOPAL-KAROND",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Karond, Bhopal, Madhya Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "250-VMART BHOPAL-KAROND",
    externalId: null,
    type: "customer",
    uuid: "85b6ca77-c3f5-4efa-9aa6-9a57851c480d",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.4358011,
          longitude: 81.846311
        },
        placeId: "4a280d3e-a44d-4de6-9449-80aaeaf91b02",
        name: "ALLAHABAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Prayagraj, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "024-VMART ALLAHABAD",
    externalId: null,
    type: "customer",
    uuid: "633895df-f3ed-4fd5-85ba-579e280a8979",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.7509207,
          longitude: 94.2036696
        },
        placeId: "ef6beafb-417d-4422-8747-b8d27d4c0e43",
        name: "JORHAT",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Jorhat, Assam, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "220-VMART JORHAT",
    externalId: null,
    type: "customer",
    uuid: "451db719-b829-4596-b40d-8f8c5b0dbd0e",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.0441295,
          longitude: 84.53794549999999
        },
        placeId: "736fcdf4-60fd-4dd2-83c7-e5f6a5b877a3",
        name: "GUMLA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Gumla, Jharkhand 835207, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "172-VMART GUMLA",
    externalId: null,
    type: "customer",
    uuid: "54409fd6-9ced-4a0b-9a23-523b86c7c0f9",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.8386481,
          longitude: 78.7733286
        },
        placeId: "18e945d9-4d0c-408f-8081-3bea9b7d9c46",
        name: "MURADABAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Moradabad, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "050-VMART MURADABAD",
    externalId: null,
    type: "customer",
    uuid: "c7063e55-656b-4f40-8e55-6ee13e796dcd",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.2073489,
          longitude: 81.682344
        },
        placeId: "0ef40c9a-936b-4541-86fe-f59b2bbb8c79",
        name: "GAURIGANJ",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Gauriganj, Uttar Pradesh 227409, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "187-VMART GAURIGANJ",
    externalId: null,
    type: "customer",
    uuid: "c231a674-ccbf-45e6-8b37-c3f1612e4faa",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 32.7404788,
          longitude: 74.8678915
        },
        placeId: "f37debf4-231d-41c9-9148-882fbcaf72d7",
        name: "KACHI CHAWNI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Kacchi Chawni, Jammu 180001","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "198-VMART KACHI CHAWNI",
    externalId: null,
    type: "customer",
    uuid: "0d9d5a75-355a-4646-a22d-a8f8dcfb5c3b",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.838805,
          longitude: 78.7378068
        },
        placeId: "455bca2c-c729-41a9-bd34-f943b4b0d24a",
        name: "SAGAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Sagar, Madhya Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "163-VMART SAGAR",
    externalId: null,
    type: "customer",
    uuid: "6edee80f-e837-4df2-958b-1c57f3fe58ae",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.1250146,
          longitude: 75.84514800000001
        },
        placeId: "136989c8-b446-4a13-948a-af111522fa56",
        name: "KOTA-RANGBARI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Rangbari, Kota, Rajasthan, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "279-KOTA-RANGBARI",
    externalId: null,
    type: "customer",
    uuid: "744014f8-5026-46ee-916d-a180162fa528",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 22.7866185,
          longitude: 86.16596899999999
        },
        placeId: "16523f4d-cf17-4cb8-9475-adc948323272",
        name: "ADITYAPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Adityapur, Jamshedpur, Jharkhand, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "171-VMART ADITYAPUR",
    externalId: null,
    type: "customer",
    uuid: "0f323437-f2bf-427a-8500-dd42796fca76",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 24.1759039,
          longitude: 88.2801785
        },
        placeId: "175f3e14-3511-42b1-be8c-2e855b379215",
        name: "MURSHIDABAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Murshidabad, West Bengal 742149, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "221-VMART MURSHIDABAD",
    externalId: null,
    type: "customer",
    uuid: "73937152-29e3-4404-8d8b-7cbc5829c7e6",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.0869726,
          longitude: 87.938943
        },
        placeId: "1c18a9b0-2d82-4f28-83f7-12bc8c6c4a0e",
        name: "KISHANGANJ",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Kishanganj, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "104-VMART KISHANGANJ",
    externalId: null,
    type: "customer",
    uuid: "c754a705-d767-43c4-904f-e4dabe410940",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.9875082,
          longitude: 79.4141214
        },
        placeId: "528ae3b1-c488-4d8c-8a7c-814322dc13f9",
        name: "RUDRAPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Rudrapur, Uttarakhand, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "105-VMART RUDRAPUR",
    externalId: null,
    type: "customer",
    uuid: "1c23f479-4783-4a2b-8ea0-90406a82858b",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 29.7885484,
          longitude: 77.87971379999999
        },
        placeId: "4ed6452e-9dff-42dc-a75f-58b607dbe579",
        name: "MANGLAUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Manglaur, Uttarakhand, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "186-VMART MANGLAUR",
    externalId: null,
    type: "customer",
    uuid: "8ccf46dd-a148-4ad8-8c22-997a217894c7",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 32.9159847,
          longitude: 75.1416173
        },
        placeId: "fb985bbf-60a7-4af5-8c32-25bead68c09d",
        name: "UDHAMPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Udhampur 182101","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "133-VMART UDHAMPUR",
    externalId: null,
    type: "customer",
    uuid: "c072ee3e-d96a-4e5b-a8f6-cda41b57ba5c",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 22.7247556,
          longitude: 88.4789351
        },
        placeId: "d127e5dc-f690-484d-89ad-2b07aad4cf4e",
        name: "KOLKATA-BARASAT",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Barasat, Kolkata, West Bengal, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "293-VMART KOLKATA-BARASAT",
    externalId: null,
    type: "customer",
    uuid: "fe0c9191-71cd-4ec5-947a-44d3f494d2ca",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.5879607,
          longitude: 72.36932519999999
        },
        placeId: "5f70bb5c-9a68-48a3-aaa7-7a5316f95dce",
        name: "MEHSANA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Mehsana, Gujarat, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "070-VMART MEHSANA",
    externalId: null,
    type: "customer",
    uuid: "7629b325-f354-450b-a1e2-a63fc6783c38",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.2901887,
          longitude: 82.9965192
        },
        placeId: "dd91361e-41f4-4492-9f22-5bf7e074422e",
        name: "DURGAKUND",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Durgakund, Jawahar Nagar Colony, Bhelupur, Varanasi, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "141-VMART DURGAKUND-VARANASI",
    externalId: null,
    type: "customer",
    uuid: "ef6a3672-926b-474a-90c8-6db4a08c5c1e",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 27.0843682,
          longitude: 93.6053163
        },
        placeId: "cea931c9-741a-4aba-94aa-55638e03c9f5",
        name: "ITANAGAR",
        category: "Fleet Office"
      }
    ],
    address: '{"address":"Itanagar","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "222-VMART ITANAGAR",
    externalId: null,
    type: "customer",
    uuid: "7abadc33-43ea-4d8b-9a8b-559e15dde1d2",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.2324214,
          longitude: 87.8614793
        },
        placeId: "3f62211c-958c-4180-adfd-639e482f2379",
        name: "BURDWAN",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Bardhaman, West Bengal, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "117-VMART BURDWAN",
    externalId: null,
    type: "customer",
    uuid: "75fb19b9-7317-4d3c-bff7-d3a6d26b2d95",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 27.2205556,
          longitude: 77.95050859999999
        },
        placeId: "fab159d4-1497-4f08-8783-24a4a315f6af",
        name: "AGRA-SIKANDRA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Tomb of Akbar The Great Area, Sikandra, Agra, Uttar Pradesh 282007, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "270-VMART AGRA-SIKANDRA",
    externalId: null,
    type: "customer",
    uuid: "5807c867-8be4-4751-a3ba-7755488a00d3",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.9505496,
          longitude: 86.81701319999999
        },
        placeId: "1a3dc9f8-0e00-41e3-a3c0-b5e840aa5657",
        name: "JAMTARA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Jamtara, Jharkhand, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "149-VMART JAMTARA",
    externalId: null,
    type: "customer",
    uuid: "8d546c01-a2a3-45e1-85e3-0d9d8de13f95",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 30.4750254,
          longitude: 77.7652346
        },
        placeId: "7ee6d851-0d92-4186-be20-910a783a3289",
        name: "VIKAS NAGAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Vikasnagar, Uttarakhand, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "014-VMART VIKAS NAGAR",
    externalId: null,
    type: "customer",
    uuid: "a83b975e-0629-42ef-8f8a-e8e8df4ce560",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.6372353,
          longitude: 77.18236379999999
        },
        placeId: "367cba72-d575-4edf-bdea-b74596159897",
        name: "RAJENDER NAGAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Rajinder Nagar, New Delhi, Delhi, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "008-VMART RAJENDER NAGAR",
    externalId: null,
    type: "customer",
    uuid: "8c58588b-f32d-4d6f-a203-adde9680c3f9",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 22.8056606,
          longitude: 86.1993299
        },
        placeId: "e44ce232-fcce-41a7-9eab-d69446da865d",
        name: "JAMSHEDPUR-SAKCHI AMBAGAN",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Ambagan, Sakchi, Jamshedpur, Jharkhand 831001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "195-VMART JAMSHEDPUR-SAKCHI AMBAGAN",
    externalId: null,
    type: "customer",
    uuid: "25d63b3c-db02-4f23-bfff-ab0d72943e43",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.8118984,
          longitude: 86.4638707
        },
        placeId: "05d541ef-a6c9-4674-aac2-ab3cb03cb956",
        name: "DHANBAD-SARAIDHELLA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Saraidhella, Jharkhand, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "287-VMART DHANBAD-SARAIDHELLA",
    externalId: null,
    type: "customer",
    uuid: "b29acb88-4fd0-4c62-8f42-72b975681d98",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.1571454,
          longitude: 86.0951592
        },
        placeId: "44531f3e-948e-4282-aaf8-33c4e3e472db",
        name: "LAKHISARAI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Lakhisarai, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "199-VMART LAKHISARAI",
    externalId: null,
    type: "customer",
    uuid: "027fc946-aae7-471e-a9ed-f470fb62f735",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 22.6511954,
          longitude: 88.379166
        },
        placeId: "c5d8f544-74e8-43a0-914e-1b42700d6740",
        name: "SAKET NAGAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Dunlop, Saket Nagar, Bonhooghly Government Colony, Baranagar, West Bengal 700108, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "029-VMART SAKET NAGAR",
    externalId: null,
    type: "customer",
    uuid: "e0c1f4d4-c060-48ba-b251-6dc7eac88707",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.9545943,
          longitude: 75.7455944
        },
        placeId: "b1e3a3e6-8391-41e0-8874-4666f38b4482",
        name: "JAIPUR-JHOTWARA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Jhotwara, Jaipur, Rajasthan, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "275-VMART JAIPUR-JHOTWARA",
    externalId: null,
    type: "customer",
    uuid: "3fee6f07-0fb2-434f-9972-ba2427673247",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.2098172,
          longitude: 84.3633802
        },
        placeId: "6b016924-49c2-4a6a-955a-249c5ddae11e",
        name: "SIWAN",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Siwan, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "044-VMART SIWAN",
    externalId: null,
    type: "customer",
    uuid: "f3098903-c050-4511-bde2-da5aff853ba8",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.7811397,
          longitude: 84.7543413
        },
        placeId: "2db9104c-e441-4cff-b633-1a7375f954e3",
        name: "CHHAPRA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Chapra, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "043-VMART CHHAPRA",
    externalId: null,
    type: "customer",
    uuid: "5aa9dc5f-08d0-4645-8729-cdbea573cad9",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 24.5362477,
          longitude: 81.30369460000001
        },
        placeId: "1a34a3e5-b818-436a-8b9a-474f6947d6dc",
        name: "REWA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Rewa, Madhya Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "160-VMART REWA",
    externalId: null,
    type: "customer",
    uuid: "846900bf-27ae-4d94-9004-0fac46ae2b31",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 19.3131628,
          longitude: 84.78737410000001
        },
        placeId: "986c4a6f-f9e6-4c12-a8e2-22a333c0529e",
        name: "URBAN BANK ROAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Urban Bank Rd, Gandhi Nagar, Brahmapur, Odisha 760001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "135-VMART URBAN BANK ROAD",
    externalId: null,
    type: "customer",
    uuid: "5b3b2470-ce77-4cfc-b733-6eee2356fd1d",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.4498954,
          longitude: 74.6399163
        },
        placeId: "fc65fe53-7dc9-4cba-aad3-9852306825e6",
        name: "AJMER",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Ajmer, Rajasthan, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "059-VMART AJMER",
    externalId: null,
    type: "customer",
    uuid: "79de3bd7-0719-4673-91fa-e17b6b2a652f",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.3618236,
          longitude: 79.3930388
        },
        placeId: "d746dd0b-083d-48dd-be6e-c33dcdf94c31",
        name: "PREM NAGAR-BAREILLY",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Prem Nagar, Bareilly, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "193-VMART PREM NAGAR-BAREILLY",
    externalId: null,
    type: "customer",
    uuid: "af6f3b82-4166-4b7c-9af5-9753619f3486",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.5649034,
          longitude: 77.2403317
        },
        placeId: "ccf90a07-b284-4b9a-9871-ad088013b682",
        name: "LAJPATNAGAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Lajpat Nagar, New Delhi, Delhi, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "076-VMART LAJPATNAGAR",
    externalId: null,
    type: "customer",
    uuid: "910ba2a4-3446-4c2b-b7aa-106da726d25f",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.0564856,
          longitude: 82.68148289999999
        },
        placeId: "c250a7f0-b7aa-4a8c-a9cc-37451cd4f248",
        name: "SHAHGANJ",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Shahganj, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "137-VMART SHAHGANJ",
    externalId: null,
    type: "customer",
    uuid: "a3dd4bcf-6014-4859-8f8a-c9eaa7acbc76",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.1195629,
          longitude: 85.3910581
        },
        placeId: "8ab65d35-89d1-4656-8c22-58691da90871",
        name: "MUZAFFARPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Muzaffarpur, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "126-VMART MUZAFFARPUR-BIHAR",
    externalId: null,
    type: "customer",
    uuid: "e6749550-2ff7-482e-917d-397526c64b7c",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.9209503,
          longitude: 80.7996035
        },
        placeId: "5e4806ca-28d8-4125-858e-8373922fd32d",
        name: "FATHEPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Fatehpur, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "023-VMART FATHEPUR",
    externalId: null,
    type: "customer",
    uuid: "1b9c9ac1-3eda-4ccf-851e-3825e9348ad5",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.510822,
          longitude: 80.24686609999999
        },
        placeId: "535042ac-51c5-4c24-8f52-6fba36ca0e58",
        name: "KANPUR-KALYANPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"jvs tower, Kalyanpur, Kanpur, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "292-VMART KANPUR-KALYANPUR",
    externalId: null,
    type: "customer",
    uuid: "fead3102-e296-4291-815b-62af6b76f7fb",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.3180386,
          longitude: 86.49340649999999
        },
        placeId: "285b8ff2-c7bf-4839-b20f-dab917aeb00f",
        name: "JAMALPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Jamalpur, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "146-VMART JAMALPUR",
    externalId: null,
    type: "customer",
    uuid: "f64fa0fa-692f-49ec-b07f-d8055933c482",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 22.2992615,
          longitude: 87.9114819
        },
        placeId: "0527ffdd-4222-4d12-9c1e-0a74e7fa51e0",
        name: "TAMLUK-MANIKTALA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Tamluk Srirampur Rd, Tamluk, West Bengal 721636, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "242-VMART TAMLUK-MANIKTALA",
    externalId: null,
    type: "customer",
    uuid: "e6e46a7d-390a-443a-9ad4-beb240de17b7",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 24.8316116,
          longitude: 87.2096242
        },
        placeId: "268662a5-db92-445a-85f9-aa37dadf0b31",
        name: "GODDA-BHAGALPUR ROAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Godda - Panjwara Rd, Basmati Nagar, Godda, Jharkhand 814133, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "237-VMART GODDA-BHAGALPUR ROAD",
    externalId: null,
    type: "customer",
    uuid: "24f291f9-d18b-45d5-86ae-c08464ec64d2",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.6586456,
          longitude: 77.231158
        },
        placeId: "024ffe33-8fae-4bfb-9b87-5f6ecd5669b7",
        name: "KOTWALI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"HC Sen Marg, Kaccha Bagh Area, Chandni Chowk, New Delhi, Delhi 110006, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "103-VMART KOTWALI-ALLAHABAD",
    externalId: null,
    type: "customer",
    uuid: "4573ea34-ab72-4927-8b1a-f1ff474a841b",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 29.2104232,
          longitude: 78.9618845
        },
        placeId: "bd154728-3b1c-457e-8780-7d3483df73eb",
        name: "KASHIPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Kashipur, Uttarakhand 244713, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "095-VMART KASHIPUR",
    externalId: null,
    type: "customer",
    uuid: "530d7c85-ed70-4bea-b776-2a77e6a69814",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 32.11043,
          longitude: 76.27820299999999
        },
        placeId: "8a1c8cde-20a8-4787-82a4-94501708530c",
        name: "KANGRA-BUS STAND",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Adarsh Colony, Kangra, Himachal Pradesh 176001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "244-VMART KANGRA-BUS STAND",
    externalId: null,
    type: "customer",
    uuid: "37c39f88-90b1-4300-8c01-0e08adae259c",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 27.8973944,
          longitude: 78.0880129
        },
        placeId: "d70581ce-0a8c-42f3-b23f-bb0be51bcda7",
        name: "ALIGARH",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Aligarh, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "001-VMART ALIGARH",
    externalId: null,
    type: "customer",
    uuid: "4f2d8274-b168-4623-8e09-9814bf4e05ad",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.4747275,
          longitude: 80.38161939999999
        },
        placeId: "c77242d1-fafc-4636-92e4-16b318812c26",
        name: "SHUKLAGANJ",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Shuklaganj, Kanpur, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "190-VMART SHUKLAGANJ",
    externalId: null,
    type: "customer",
    uuid: "e3e50a60-d81a-464b-b05c-ca49c689dab2",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.5419128,
          longitude: 77.388143
        },
        placeId: "4d1baa54-b1e7-4cda-9f62-d59e153eeabd",
        name: "BHANGEL",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Bhangel, Salarpur Khadar, Sector 102, Noida, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "152-VMART BHANGEL",
    externalId: null,
    type: "customer",
    uuid: "c278d4e1-7a7f-4cdb-afa3-949898ebf718",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 24.585445,
          longitude: 73.712479
        },
        placeId: "b48b5b34-9c84-4649-86b3-dcd435493684",
        name: "UDAIPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Udaipur, Rajasthan, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "064-VMART UDAIPUR",
    externalId: null,
    type: "customer",
    uuid: "c0e24164-9cb2-4138-8201-c900df6ee9ae",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 29.3731673,
          longitude: 78.1350904
        },
        placeId: "0d2ad642-8870-4663-b251-4b8a3393a41c",
        name: "BIJNOR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Bijnor, Uttar Pradesh 246701, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "230-VMART BIJNOR",
    externalId: null,
    type: "customer",
    uuid: "c279496a-9734-4d55-843f-5f6c0c984ddc",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.242453,
          longitude: 86.9842256
        },
        placeId: "1960ba66-5219-4aa2-a052-514d3b0ebed2",
        name: "BHAGALPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Bhagalpur, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "038-VMART BHAGALPUR",
    externalId: null,
    type: "customer",
    uuid: "a471eaa5-7920-4577-b0dc-dbbada1a08bf",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 29.9680035,
          longitude: 77.55520659999999
        },
        placeId: "02b6be58-959e-47eb-8337-5b29d92cc553",
        name: "SAHARANPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Saharanpur, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "047-VMART SAHARANPUR",
    externalId: null,
    type: "customer",
    uuid: "47bcf40f-76cb-4701-b615-973efc6af5da",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.0332255,
          longitude: 84.3988806
        },
        placeId: "803ab0fa-85fa-440b-b8f0-dfa1ca458158",
        name: "DAUD NAGAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Daudnagar, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "121-VMART DAUD NAGAR",
    externalId: null,
    type: "customer",
    uuid: "ca499911-0487-4f6d-a54c-a43c2bd4186c",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.8005591,
          longitude: 86.4434011
        },
        placeId: "af8e70ff-e808-4d96-8f32-1f37a223bf1b",
        name: "HIRAPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Hirapur, Pandey Muhalla, Dhanbad, Jharkhand 826001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "100-VMART HIRAPUR-DHANBAD",
    externalId: null,
    type: "customer",
    uuid: "ddd9bc13-fbda-4f4e-8682-ca3c5ad9bcdb",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.7271012,
          longitude: 88.39528609999999
        },
        placeId: "ef24e888-3133-444e-b063-213d79c8d777",
        name: "SILIGURI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Siliguri, West Bengal, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "143-VMART SILIGURI",
    externalId: null,
    type: "customer",
    uuid: "bddf5116-8c03-4160-a84a-aa303e33ad2f",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.201536,
          longitude: 77.4149223
        },
        placeId: "50bdbd0a-345e-42aa-8cd8-a1ec43176d58",
        name: "BHOPAL-CHUNABHATTI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Chuna Bhatti, Bhopal, Madhya Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "283-VMART BHOPAL-CHUNABHATTI",
    externalId: null,
    type: "customer",
    uuid: "a1add1bc-f3e9-4013-aea0-8305943622b8",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.8191641,
          longitude: 75.7659513
        },
        placeId: "51008c62-2454-4d74-ba95-6123d1f81a38",
        name: "SANGANER-JAIPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Sanganer, Jaipur, Rajasthan, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "232-VMART SANGANER-JAIPUR",
    externalId: null,
    type: "customer",
    uuid: "75fded3c-1a8c-4761-bf26-c23f0f2ededf",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.450902,
          longitude: 92.20891089999999
        },
        placeId: "cb3db83a-3111-42cd-93c5-4548de442b98",
        name: "JOWAI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Jowai, Meghalaya 793150, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "224-VMART JOWAI",
    externalId: null,
    type: "customer",
    uuid: "841bd952-0483-4019-8886-323603070e08",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.2585371,
          longitude: 82.06598579999999
        },
        placeId: "54998d60-6085-40e1-843a-461133bd5ef5",
        name: "SULTANPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Sultanpur, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "025-VMART SULTANPUR",
    externalId: null,
    type: "customer",
    uuid: "a5a7fa7b-268c-4ec2-9060-4f26e06051a0",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 24.1548982,
          longitude: 83.7995617
        },
        placeId: "2c372532-cfa0-46a1-b639-5315a375021a",
        name: "GARHWA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Garhwa, Jharkhand 822114, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "192-VMART GARHWA",
    externalId: null,
    type: "customer",
    uuid: "707fff9f-03da-4a77-a19e-a079f2d63035",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.4013101,
          longitude: 88.50211519999999
        },
        placeId: "36b5f107-c77a-48f4-b487-b338fd45f84a",
        name: "KRISHNANAGAR-WEST BENGAL",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Krishnanagar, West Bengal, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "218-VMART KRISHNANAGAR-WEST BENGAL",
    externalId: null,
    type: "customer",
    uuid: "56a4bd5c-9b9f-49a5-ad90-5d97adb74991",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.3482938,
          longitude: 86.0711661
        },
        placeId: "f65e502c-1b69-436f-ac18-565196864f0b",
        name: "MADHUBANI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Madhubani, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "097-VMART MADHUBANI",
    externalId: null,
    type: "customer",
    uuid: "b01628fe-0ade-4a3b-b334-41fe18202440",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.9841027,
          longitude: 80.92197639999999
        },
        placeId: "c17eb012-5a94-4a81-9f9c-8a6620753b46",
        name: "LUCKNOW-BKT",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Bakshi Ka Talab, Bargadi Magath, Uttar Pradesh 226201, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "272-VMART LUCKNOW-BKT",
    externalId: null,
    type: "customer",
    uuid: "f45d51b5-90f6-4139-97d7-ed1d17757ba9",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.0223307,
          longitude: 89.98048179999999
        },
        placeId: "ddcfb6df-e572-4357-9e9a-0bab1cd4967e",
        name: "DHUBRI-GTB ROAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"GTB Rd, Bidyapara, Dhubri, Assam, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "251-VMART DHUBRI-GTB ROAD",
    externalId: null,
    type: "customer",
    uuid: "9090c540-c8ff-4007-8e57-435c22bfb90d",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.2507549,
          longitude: 77.41568889999999
        },
        placeId: "91909633-511d-4c80-adcc-976c31423887",
        name: "JHANGIRABAD-BHOPAL",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Jahangirabad, Bhopal, Madhya Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "234-VMART JHANGIRABAD-BHOPAL",
    externalId: null,
    type: "customer",
    uuid: "8b62bce7-9413-4030-b788-6caadc4b176e",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.0739138,
          longitude: 83.18594949999999
        },
        placeId: "413fe394-d28d-4aaa-8a00-007b70cc4016",
        name: "AZAMGARH",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Azamgarh, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "017-VMART AZAMGARH",
    externalId: null,
    type: "customer",
    uuid: "089e6ac4-eb96-4246-a650-e6a445f90f40",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.7322576,
          longitude: 82.6938287
        },
        placeId: "63eeafed-489f-4e23-8f5f-85706ee1a768",
        name: "HUSAINABAD-JAUNPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Husainabad, Jaunpur, Uttar Pradesh 222002, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "168-VMART HUSAINABAD-JAUNPUR",
    externalId: null,
    type: "customer",
    uuid: "65685983-e994-45a7-9b81-3976aa941ca4",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.8743393,
          longitude: 80.85478289999999
        },
        placeId: "1293d261-0486-47d7-821a-1e4ff647538d",
        name: "LUCKNOW-DUBAGGA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Dubagga, Lucknow, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "229-VMART LUCKNOW-DUBAGGA",
    externalId: null,
    type: "customer",
    uuid: "0b1fa69f-a0f8-4807-8d90-e0fb1e1097e2",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 32.7553248,
          longitude: 74.8496706
        },
        placeId: "94aafc0a-efcf-4052-bd0a-d880bb3a0b28",
        name: "JAMMU-JANIPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Janipur, Jammu","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "291-VMART JAMMU-JANIPUR",
    externalId: null,
    type: "customer",
    uuid: "cd0893e0-27f9-4417-8bfd-554e31943aaa",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.8947446,
          longitude: 75.8301169
        },
        placeId: "5b0f6a86-a82e-4663-8c45-32d3091645cb",
        name: "JAIPUR-RAJAPARK",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Raja Park, Jaipur, Rajasthan 302007, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "299-VMART JAIPUR-RAJAPARK",
    externalId: null,
    type: "customer",
    uuid: "71dbd813-a7a4-4899-ac7a-72620ac53d4b",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.904855,
          longitude: 80.938788
        },
        placeId: "f2fa4e84-dd36-4206-9581-359f2969ad89",
        name: "PALKI-LUCKNOW",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Sitapur Rd, near Highway Hospital, Tadikhana, Mohibullapur, Palki, Lucknow, Uttar Pradesh 226021, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "202-VMART PALKI-LUCKNOW",
    externalId: null,
    type: "customer",
    uuid: "b5584db1-23f2-402a-882f-05717e581d13",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.2144806,
          longitude: 81.25281389999999
        },
        placeId: "2139163a-bff3-4dc3-bd2c-d19671ecf655",
        name: "RAIBARELI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Raebareli, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "027-VMART RAIBARELI",
    externalId: null,
    type: "customer",
    uuid: "48cf84d0-b12a-43d3-9c3b-c0bf28356887",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.4762689,
          longitude: 80.3395498
        },
        placeId: "dffa60ca-ad8e-47d6-9e34-5a7a00e65cae",
        name: "BANDA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Banda, Uttar Pradesh 210001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "067-VMART BANDA",
    externalId: null,
    type: "customer",
    uuid: "7bc8521a-22fe-45cb-8b32-ba499c865de8",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.589571,
          longitude: 76.605949
        },
        placeId: "a1e644b5-1081-4d3c-a314-8691962884e8",
        name: "PARTAP GARH",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Near Railway Station, Gwalison Rd, Jhajjar, Haryana 124103, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "026-VMART PARTAP GARH",
    externalId: null,
    type: "customer",
    uuid: "4133a424-60d9-446a-aa53-812f1d5bf9a6",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.1928552,
          longitude: 79.92574139999999
        },
        placeId: "a934c023-abb5-42a3-94be-1eb179a89b4f",
        name: "JABALPUR-DAMOHNAKA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Damoh Naka, Ambedkar Colony, Jabalpur, Madhya Pradesh 482002, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "290-VMART JABALPUR-DAMOHNAKA",
    externalId: null,
    type: "customer",
    uuid: "14b982be-0099-486c-bd6a-3fbe231f2a2d",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.3235953,
          longitude: 85.30769459999999
        },
        placeId: "ce3bcfc1-7a13-4bd3-9376-9d15d57eb0f0",
        name: "BIRSA CHOWK-RANCHI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Birsa Chowk, Ranchi, Jharkhand 834002, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "148-VMART BIRSA CHOWK-RANCHI",
    externalId: null,
    type: "customer",
    uuid: "853db7f0-293a-4923-a6a1-5344296ac5ea",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.8560271,
          longitude: 85.7868233
        },
        placeId: "0a14e683-7333-4d8a-9341-e30cd3b7f403",
        name: "SAMASTIPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Samastipur, Bihar 848101, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "039-VMART SAMASTIPUR",
    externalId: null,
    type: "customer",
    uuid: "c0cc1fe8-8b31-4dca-ab6c-f242d5210270",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 22.8251874,
          longitude: 70.84908089999999
        },
        placeId: "facb4b2c-4964-40e6-9482-c3273efdd7b8",
        name: "MORVI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Morbi, Gujarat, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "074-VMART MORVI",
    externalId: null,
    type: "customer",
    uuid: "297750ff-598c-4605-be0a-46b806563930",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 32.0413917,
          longitude: 75.403086
        },
        placeId: "8a563efc-bc88-46ca-8e1d-b9dce33fe4e5",
        name: "GURDASPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Gurdaspur, Punjab 143521, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "058-VMART GURDASPUR",
    externalId: null,
    type: "customer",
    uuid: "1d732292-e3b9-422f-81e4-f451b9a5f501",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 27.1983368,
          longitude: 73.7493272
        },
        placeId: "6d0a16a6-8fe2-47fe-823f-0a8ffda321d9",
        name: "NAGOUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Nagaur, Rajasthan 341001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "060-VMART NAGOUR",
    externalId: null,
    type: "customer",
    uuid: "6215cc23-b932-47fc-9246-9b856ada27e8",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.7880937,
          longitude: 86.418098
        },
        placeId: "74c03d5d-d058-4b46-9227-d6e5736a1bf3",
        name: "DHANBAD-BANK MORE",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Bank More, Dhanbad, Jharkhand 826001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "256-VMART DHANBAD-BANK MORE",
    externalId: null,
    type: "customer",
    uuid: "b6263e31-28af-4d97-af2c-62de61f43535",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 21.0573616,
          longitude: 86.4962996
        },
        placeId: "4baf0d9e-00f4-4f4b-b266-68c9046f0070",
        name: "BHADRAK",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Bhadrak, Odisha, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "116-VMART BHADRAK",
    externalId: null,
    type: "customer",
    uuid: "012411a2-f69a-40ef-a2c0-638cc9d65e03",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.075297,
          longitude: 70.133673
        },
        placeId: "be08512a-7c85-4d3a-8f43-7b4ec589bd4e",
        name: "GANDHIDHAM",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Gandhidham, Gujarat, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "073-VMART GANDHIDHAM",
    externalId: null,
    type: "customer",
    uuid: "edf1b5af-a155-4f00-a411-61b296ac4077",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.4357869,
          longitude: 77.665066
        },
        placeId: "67117b0b-9807-4463-8e10-05b1f7fc8851",
        name: "SHIVPURI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Shivpuri, Madhya Pradesh 473551, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "005-VMART SHIVPURI",
    externalId: null,
    type: "customer",
    uuid: "5485f100-910d-4d86-92b5-7b56bfd09f8e",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 21.9322338,
          longitude: 86.7516942
        },
        placeId: "36746e97-eb19-44d8-827d-99022d7620b9",
        name: "BARIPADA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Baripada, Odisha, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "124-VMART BARIPADA",
    externalId: null,
    type: "customer",
    uuid: "35020a39-daf5-435f-8673-c00aad82b074",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 27.9462395,
          longitude: 80.7787163
        },
        placeId: "a15a23b3-8240-4c9c-ae69-d293daa1f0f1",
        name: "LAKHIMPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Lakhimpur, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "049-VMART LAKHIMPUR",
    externalId: null,
    type: "customer",
    uuid: "deb1c472-d96c-422e-872a-d278f0579054",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.1232639,
          longitude: 85.3629546
        },
        placeId: "140fcd7a-9ec2-42f7-8384-c46fab8b1046",
        name: "MUZAFFARPUR-MARIPUR CHOWK",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Maripur, Muzaffarpur, Bihar 842001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "253-MUZAFFARPUR-MARIPUR CHOWK",
    externalId: null,
    type: "customer",
    uuid: "b0aa19c7-04d5-42a1-82db-55061a011c6c",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.7954679,
          longitude: 80.91926869999999
        },
        placeId: "2f70e8cc-be4c-489c-bf0d-adbb7635482d",
        name: "LUCKNOW-ASHIYANA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Ashiyana, Lucknow, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "271-VMART LUCKNOW-ASHIYANA",
    externalId: null,
    type: "customer",
    uuid: "c1499cd3-3d0a-432e-8077-3cce925da981",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.6505331,
          longitude: 77.23033699999999
        },
        placeId: "5861fadd-8a76-4db3-8540-d6a533c2891d",
        name: "CHOWK",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Chandni Chowk, New Delhi, Delhi, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "015-VMART CHOWK",
    externalId: null,
    type: "customer",
    uuid: "ac289419-0262-4aa7-b6de-b991eb9a4272",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.987523,
          longitude: 79.4488695
        },
        placeId: "c62b792f-060c-4fca-87e4-e75ecde079af",
        name: "ORAI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Orai, Uttar Pradesh 285001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "132-VMART ORAI",
    externalId: null,
    type: "customer",
    uuid: "40721c00-8562-4cc5-9906-baf0917f9e57",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 30.3164945,
          longitude: 78.03219179999999
        },
        placeId: "92bb9508-f493-4f8d-9f0e-f9e9eae517c1",
        name: "DEHRADUN",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Dehradun, Uttarakhand, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "092-VMART DEHRADUN",
    externalId: null,
    type: "customer",
    uuid: "fe7fb0e1-b9f7-4493-a69f-7baf2d8c3e5b",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.6207939,
          longitude: 79.8128649
        },
        placeId: "a27397d4-6784-4e49-aeff-27d5f0194278",
        name: "PILIBHIT",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Pilibhit, Uttar Pradesh 262001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "120-VMART PILIBHIT",
    externalId: null,
    type: "customer",
    uuid: "dc88a138-89b3-4ef2-a28d-55d1def8be9c",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.3670355,
          longitude: 79.4304381
        },
        placeId: "ff1ce328-716b-4ea5-a1db-2c8f026920ad",
        name: "BAREILLY",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Bareilly, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "052-VMART BAREILLY",
    externalId: null,
    type: "customer",
    uuid: "58ba71eb-260e-4a0c-b439-0c4d9075d513",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 24.9195147,
          longitude: 86.224718
        },
        placeId: "08b73473-b7e6-4717-b8c1-eb0a9ef4e797",
        name: "JAMUI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Jamui, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "127-VMART JAMUI",
    externalId: null,
    type: "customer",
    uuid: "c144704a-46ae-41b2-b78a-6b90a1c0bab4",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 21.628933,
          longitude: 85.5816847
        },
        placeId: "4b7720da-f2ea-4243-8b3b-22fd6fca7ffd",
        name: "KEONJHAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Keonjhar, Odisha, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "114-VMART KEONJHAR",
    externalId: null,
    type: "customer",
    uuid: "9e55d179-3c57-44e2-a4a6-a2b8920828b0",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 27.1339913,
          longitude: 81.96189679999999
        },
        placeId: "f1960daa-a203-48ff-9a62-074b8c0c427c",
        name: "GONDA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Gonda, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "011-VMART GONDA",
    externalId: null,
    type: "customer",
    uuid: "5dc19795-aab7-4e81-bb55-13ffbc5389ab",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 27.2172661,
          longitude: 79.033425
        },
        placeId: "ca5fe6c1-df38-433e-a801-16b59e9383c4",
        name: "MAINPURI-STATION ROAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Station Rd, Malik Mill Colony, Auden Padariya, Uttar Pradesh 205001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "257-VMART MAINPURI-STATION ROAD",
    externalId: null,
    type: "customer",
    uuid: "c2b80feb-3530-4070-a21d-a91ebfc5cba7",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 27.1591961,
          longitude: 78.3957331
        },
        placeId: "e784bdaa-2cc8-444a-abfb-9b28511e74fe",
        name: "FIROZABAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Firozabad, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "099-VMART FIROZABAD",
    externalId: null,
    type: "customer",
    uuid: "2e052d7d-68f5-4b59-a508-8fdee0c91f6b",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 30.9094363,
          longitude: 77.1006027
        },
        placeId: "ac702fd9-4f2a-48ec-a8dc-fd24cddb1088",
        name: "SOLAN-ANAND COMPLEX",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Mall Road, Lawi Khurd, Solan, Himachal Pradesh 173212, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "247-VMART SOLAN-ANAND COMPLEX",
    externalId: null,
    type: "customer",
    uuid: "4c2881e6-b926-4cea-8c21-532e1d641a93",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.4268059,
          longitude: 80.3867417
        },
        placeId: "091be3f5-18bb-4d2b-8421-5e0da31cdc9d",
        name: "LAL BANGLA-KANPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Lal Bangla, J K Puri, Kanpur, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "239-VMART LAL BANGLA-KANPUR",
    externalId: null,
    type: "customer",
    uuid: "49c05239-a947-423e-b555-ff5aef497218",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 27.4816976,
          longitude: 94.90534129999999
        },
        placeId: "deb6d08b-fdbb-4741-b6f3-db654f0fb2db",
        name: "DIBRUGARH-JHALUKPARA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"M.H.H.S.Road, Jhalukpara, Dibrugarh, Assam 786001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "278-VMART DIBRUGARH-JHALUKPARA",
    externalId: null,
    type: "customer",
    uuid: "d6757319-ea47-430f-a972-7e258b35567b",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 27.1766701,
          longitude: 78.00807449999999
        },
        placeId: "eec991a7-234e-45d6-9e93-9d646fee1e00",
        name: "AGRA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Agra, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "098-VMART AGRA",
    externalId: null,
    type: "customer",
    uuid: "214ac138-6730-4000-90d8-d5d95150070b",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.1416937,
          longitude: 85.86289149999999
        },
        placeId: "fcc51e0e-a10f-4eef-b54e-b0bca8dd6de3",
        name: "SHEIKHPURA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Sheikhpura, Bihar 811105, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "200-VMART SHEIKHPURA",
    externalId: null,
    type: "customer",
    uuid: "6cd7adde-3792-4e1d-96f5-ee15774c8b62",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 33.3716143,
          longitude: 74.315191
        },
        placeId: "229ebe8f-72af-4a2e-a7d0-37db20fce7c4",
        name: "RAJOURI",
        category: "Fleet Office"
      }
    ],
    address: '{"address":"Rajouri","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "228-VMART RAJOURI",
    externalId: null,
    type: "customer",
    uuid: "e210acba-21ab-4d0d-86b5-bf379ad09a23",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 29.4726817,
          longitude: 77.7085091
        },
        placeId: "cb2e1e3b-0385-4ba0-859c-515c029a8a95",
        name: "MUZAFFARNAGAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Muzaffarnagar, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "045-VMART MUZAFFARNAGAR",
    externalId: null,
    type: "customer",
    uuid: "982451b4-7919-47f3-a949-06801ee5f6ba",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.995506,
          longitude: 81.2518833
        },
        placeId: "8b001d2a-914a-4a64-a7a5-0080a6b50806",
        name: "BARABANKI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Barabanki, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "016-VMART BARABANKI",
    externalId: null,
    type: "customer",
    uuid: "c11e8199-f7bb-47de-92df-00fd60372aac",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.4819849,
          longitude: 77.032855
        },
        placeId: "f15514d2-1727-4ee7-ba5c-24364da5d907",
        name: "CHURCH ROAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"MTC Gurgaon Church Rd, Sheetla Colony, Ashok Vihar Phase II, Gurugram, Haryana 122022, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "080-VMART CHURCH ROAD",
    externalId: null,
    type: "customer",
    uuid: "7c635075-44a3-4e80-b6b6-4053dc4bc245",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.8548818,
          longitude: 77.08921509999999
        },
        placeId: "eb36824b-b135-4097-a0f8-d71d2c626bbf",
        name: "DELHI-NARELA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Narela, New Delhi, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "286-VMART DELHI-NARELA",
    externalId: null,
    type: "customer",
    uuid: "4505e101-6af6-4d49-a2a3-bc438e23db36",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.6464706,
          longitude: 85.51187949999999
        },
        placeId: "89623965-6ced-4410-b1e6-0c64a064469e",
        name: "RAMGARH",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Ramgarh, Jharkhand, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "170-VMART RAMGARH",
    externalId: null,
    type: "customer",
    uuid: "40590d63-e450-4451-96f5-2868d06e75a1",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.8851676,
          longitude: 77.8933467
        },
        placeId: "0c1390ae-ff26-4e8c-9d5b-38d6efbbc755",
        name: "GARH ROAD-MEERUT",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Garh Rd, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "240-VMART GARH ROAD-MEERUT",
    externalId: null,
    type: "customer",
    uuid: "b53cd0e8-ef3f-402e-88b1-14c680d242db",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.5647103,
          longitude: 83.9777482
        },
        placeId: "6ca2c8f3-e906-4deb-9a02-39a3ad4f8ac0",
        name: "BUXAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Buxar, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "153-VMART BUXAR",
    externalId: null,
    type: "customer",
    uuid: "ac78376b-7035-482b-baed-9ebf524cda24",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.5016673,
          longitude: 90.9701192
        },
        placeId: "b8072f72-6ac5-4816-a20e-9766a84cf633",
        name: "BARPETA ROAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Barpeta Road, Assam 781315, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "233-VMART BARPETA ROAD",
    externalId: null,
    type: "customer",
    uuid: "ef29a192-ba7f-45ba-bfa7-5be82700c1b8",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.2599333,
          longitude: 77.412615
        },
        placeId: "2a8f6a38-da63-4398-86bf-fe3397bb8c86",
        name: "BHOPAL",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Bhopal, Madhya Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "061-VMART BHOPAL",
    externalId: null,
    type: "customer",
    uuid: "a3ea06ca-5224-4a95-989a-b804bfcf353f",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 24.2854664,
          longitude: 87.2419299
        },
        placeId: "7576d5d5-3988-4429-8792-ab2bbf3bca5f",
        name: "DUMKA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Dumka, Jharkhand, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "090-VMART DUMKA",
    externalId: null,
    type: "customer",
    uuid: "bc6f835f-8197-4ac2-b482-db3981f3fafc",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 22.8727502,
          longitude: 87.79108910000001
        },
        placeId: "0b02b82f-53ea-477d-872e-82f8663214ab",
        name: "ARAMBAGH",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Arambagh community development block, West Bengal, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "217-VMART ARAMBAGH",
    externalId: null,
    type: "customer",
    uuid: "edd9ac23-8818-4cbd-bebf-a3664ff859b7",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.4272073,
          longitude: 88.12537390000001
        },
        placeId: "d88629df-40b0-4c04-b507-041f14016e8c",
        name: "THAKURGANJ",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Thakurganj, Bihar 855115, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "164-VMART THAKURGANJ",
    externalId: null,
    type: "customer",
    uuid: "18df438e-f3e5-4bb8-bb8c-09b633cc8cf3",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.2053227,
          longitude: 75.8359645
        },
        placeId: "ffb7e4a9-2a10-4044-915f-52d0c1f1d314",
        name: "KOTA-KUNADI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Kunadi, Electricity Board Area, Kota, Rajasthan, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "284-VMART KOTA-KUNADI",
    externalId: null,
    type: "customer",
    uuid: "89a56d34-115e-47e2-ae96-f3ccba180ad3",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.6035258,
          longitude: 77.0740746
        },
        placeId: "967b0d63-68b6-4dc8-9ee3-022daed5df5f",
        name: "MIRZAPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Mirzapur, Mahavir Enclave, New Delhi, Delhi, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "223-VMART MIRZAPUR",
    externalId: null,
    type: "customer",
    uuid: "ca3376a7-94aa-44a9-8b2d-5753def35f27",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.2243913,
          longitude: 84.9900966
        },
        placeId: "6c562a91-05d2-4508-bb62-f9dc60c15956",
        name: "JEHANABAD-STATION ROAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Anugrah Narayan Road Railway Station, Chichmhi, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "235-VMART JEHANABAD-STATION ROAD",
    externalId: null,
    type: "customer",
    uuid: "bf735883-c77f-44e1-9db6-88fea7aee435",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.2138156,
          longitude: 75.8647527
        },
        placeId: "2ae57b5b-729e-4b31-a653-2e9e701581f1",
        name: "KOTA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Kota, Rajasthan, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "065-VMART KOTA",
    externalId: null,
    type: "customer",
    uuid: "839377ce-981a-44dc-8c20-f15727cdf5e8",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.8834961,
          longitude: 86.6006249
        },
        placeId: "b2fa181c-283d-4d41-9408-2924f684f1c2",
        name: "SAHARSA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Saharsa, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "084-VMART SAHARSA",
    externalId: null,
    type: "customer",
    uuid: "89ad9af9-41ef-4931-b0ec-4b3635e9a6ff",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.3176452,
          longitude: 82.9739144
        },
        placeId: "1634e32e-a4d2-4e58-bfc9-7d2dfddd4ee0",
        name: "VARANASI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Varanasi, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "031-VMART VARANASI",
    externalId: null,
    type: "customer",
    uuid: "505dcaec-51f9-4a90-8777-d3b647c3432d",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 24.2182429,
          longitude: 83.03460729999999
        },
        placeId: "7fdb56dd-ab29-40ce-8589-2b47506da890",
        name: "RENUKOOT",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Renukoot Colony, Hindalco Colony, Renukoot, Uttar Pradesh 231217, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "035-VMART RENUKOOT",
    externalId: null,
    type: "customer",
    uuid: "1685778f-2a3f-4efc-90e5-2be6340474f3",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.8743898,
          longitude: 81.0349854
        },
        placeId: "97ac649b-5fbe-403e-9a0c-9db024daa999",
        name: "CHINHAT-LUCKNOW",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Chinhat, Lucknow, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "205-VMART CHINHAT-LUCKNOW",
    externalId: null,
    type: "customer",
    uuid: "b1651e1c-3f13-4894-bdfe-f0dac36b3ea4",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 28.4612568,
          longitude: 77.0298193
        },
        placeId: "11d08cfc-2e33-46a3-94e3-c1e25eb4aab6",
        name: "MANGLAM",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Sadar Bazar, Roshan Pura, Gurugram, Haryana 122001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "007-VMART MANGLAM",
    externalId: null,
    type: "customer",
    uuid: "031ec9ab-7f57-46cf-80fe-c423b82239ef",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.0426227,
          longitude: 83.6055732
        },
        placeId: "4913dab2-bae3-4832-82ff-1c47e235ece9",
        name: "BHABUA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Bhabua, Bihar 821101, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "167-VMART BHABUA",
    externalId: null,
    type: "customer",
    uuid: "f575567a-9d8c-4b3c-a603-1b7af4fe9e3b",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 32.1134138,
          longitude: 76.5347596
        },
        placeId: "2b7f4380-fe21-4642-9506-82be2ede261a",
        name: "PALAMPUR-CITY MALL",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"126, Palampur - Dharamshala Rd Shastri Nagar, Palampur - Dharamshala Rd, Shastri Nagar, Berachah, Palampur, Himachal Pradesh 176061, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "248-VMART PALAMPUR-CITY MALL",
    externalId: null,
    type: "customer",
    uuid: "ce7bceff-a3d3-42ec-9698-ddb7a37897ff",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.7463215,
          longitude: 84.5091102
        },
        placeId: "8619e4bc-3072-4ba6-86c5-061f559c0836",
        name: "LATEHAR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Latehar, Jharkhand, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "150-VMART LATEHAR",
    externalId: null,
    type: "customer",
    uuid: "862bb86d-45de-4470-a7d2-bf14b8d326c5",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.7266632,
          longitude: 93.1478514
        },
        placeId: "5e1bbd2b-847a-43d9-8cc7-eaefb0939e0d",
        name: "BISWANATH CHARIALI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Biswanath Charali, Assam, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "226-VMART BISWANATH CHARIALI",
    externalId: null,
    type: "customer",
    uuid: "501e3e4e-1ff4-4c2e-915e-b3e53b09d4b8",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.4409325,
          longitude: 84.6845216
        },
        placeId: "2075f946-7bfc-438f-a061-91863356de1a",
        name: "LOHARDAGA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Lohardaga, Jharkhand 835302, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "207-VMART LOHARDAGA",
    externalId: null,
    type: "customer",
    uuid: "4204598f-a067-44f1-9f0c-13d6be83a38c",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.7771391,
          longitude: 87.4752551
        },
        placeId: "6013dac2-4499-43b3-9836-65bd4b7cc1ce",
        name: "PURNIA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Purnia, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "109-VMART PURNIA",
    externalId: null,
    type: "customer",
    uuid: "dd1402ab-87e2-4caf-82c9-1eda55950a80",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 23.3440997,
          longitude: 85.309562
        },
        placeId: "3be07c1c-67d4-4f48-8481-7623e2f5eab1",
        name: "RANCHI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Ranchi, Jharkhand, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "102-VMART RANCHI",
    externalId: null,
    type: "customer",
    uuid: "e3fc0719-5631-4ac7-833d-e40cc1204b36",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 30.7333148,
          longitude: 76.7794179
        },
        placeId: "e0a354ae-1b65-4dfd-8e48-1b8f50e7b9bc",
        name: "CHANDIGARH",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Chandigarh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "053-VMART CHANDIGARH",
    externalId: null,
    type: "customer",
    uuid: "e1046fd7-6c0c-4a1f-848a-97101637a001",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.6331345,
          longitude: 85.1129236
        },
        placeId: "dfac3309-4c7a-42dc-b54e-595b96715ba7",
        name: "PATNA-KURJI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Kurji, Patna, Bihar, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "276-VMART PATNA-KURJI",
    externalId: null,
    type: "customer",
    uuid: "1d55f1d4-fc8c-4bd0-9f5c-cee4c8f7e6f9",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 27.3825853,
          longitude: 79.5840195
        },
        placeId: "0a01892f-9704-4601-a1f9-604c02c587da",
        name: "FARRUKHABAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Farrukhabad, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "030-VMART FARRUKHABAD",
    externalId: null,
    type: "customer",
    uuid: "91d611f5-5900-41d7-8bed-df16d6543b5a",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.0114339,
          longitude: 82.95015579999999
        },
        placeId: "c2493a04-1848-40c1-a0e0-20974244cec7",
        name: "LALGANJ",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Lalganj (Sc), Uttar Pradesh","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "159-VMART LALGANJ",
    externalId: null,
    type: "customer",
    uuid: "dd824e6c-aa16-4bcf-961e-8708012647e5",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 22.3071588,
          longitude: 73.1812187
        },
        placeId: "4de93888-c9a3-4a1e-ae01-fc44f3358e6b",
        name: "VADODARA",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Vadodara, Gujarat, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "069-VMART VADODARA",
    externalId: null,
    type: "customer",
    uuid: "22ef5030-b753-45f1-bec1-3a119081bb86",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.8408106,
          longitude: 80.8800639
        },
        placeId: "0b912ddc-3c79-4d2e-a4ef-fe3abba0297c",
        name: "LUCKNOW-RAJAJIPURAM 2",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"2, Block C, Rajajipuram, Lucknow, Uttar Pradesh 226017, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "302-VMART LUCKNOW-RAJAJIPURAM 2",
    externalId: null,
    type: "customer",
    uuid: "277db72e-4483-4b34-a23a-618e4b10f7fa",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 34.0836708,
          longitude: 74.7972825
        },
        placeId: "ba01b508-bb2c-4128-8780-7f078ebde17e",
        name: "SRINAGAR",
        category: "Fleet Office"
      }
    ],
    address: '{"address":"Srinagar","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "078-VMART SRINAGAR",
    externalId: null,
    type: "customer",
    uuid: "1706ec84-71cc-46e8-ad4f-140fa263ae0d",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.8466937,
          longitude: 80.94616599999999
        },
        placeId: "39c5c1af-8df1-4e43-ad8b-235803a0102f",
        name: "LUCKNOW",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Lucknow, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "013-VMART LUCKNOW",
    externalId: null,
    type: "customer",
    uuid: "09a70062-160f-470c-8b45-d52b0233aa82",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.2837754,
          longitude: 83.1155672
        },
        placeId: "9b4d32df-19ba-4580-a3d6-f2fedf88ac4f",
        name: "MUGHALSARAI",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Mughalsarai, Uttar Pradesh 232101, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "196-VMART MUGHALSARAI",
    externalId: null,
    type: "customer",
    uuid: "b6e1863f-cd3f-490a-85d2-c471ff016c41",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 26.7299578,
          longitude: 83.3689967
        },
        placeId: "7f022b52-3bbc-46e1-8b29-20f3fb4fac58",
        name: "GORAKHPUR-RUSTAMPUR",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Mahuesugharpur, Shakti Nagar Colony, Gorakhpur, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "201-VMART GORAKHPUR-RUSTAMPUR",
    externalId: null,
    type: "customer",
    uuid: "4c26eba4-1c74-4e61-ab76-a38306e4e6d5",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 27.2406499,
          longitude: 80.24704009999999
        },
        placeId: "ba0878ce-47b1-4d66-80aa-922ee0adcfc6",
        name: "HARDOI-LUCKNOW ROAD",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Lucknow - Hardoi - Shahjahanpur Rd, Uttar Pradesh, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "179-VMART HARDOI-LUCKNOW ROAD",
    externalId: null,
    type: "customer",
    uuid: "4cebd598-c9cd-4dd2-b62d-ac935143ffa4",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 25.6774845,
          longitude: 94.1096769
        },
        placeId: "27c9a36d-2d38-4c7e-b876-7ec1189e4198",
        name: "KOHIMA-NORTH BLOCK",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Kezie, Kohima, Nagaland, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "277-VMART KOHIMA-NORTH BLOCK",
    externalId: null,
    type: "customer",
    uuid: "4509a602-b43c-432b-a978-53ed00e5e6b0",
    contacts: [],
    status: "ACTIVE"
  },
  {
    places: [
      {
        center: {
          latitude: 30.3117308,
          longitude: 78.05773339999999
        },
        placeId: "88f3cd36-7ba9-4598-aded-b6bcdb562a2d",
        name: "DALANWALA-DEHRADUN",
        category: "Fleet Office"
      }
    ],
    address:
      '{"address":"Dalanwala, Dehradun, Uttarakhand 248001, India","city":null,"state":null,"pincode":null}',
    isPortalEnabled: false,
    name: "203-VMART DALANWALA-DEHRADUN",
    externalId: null,
    type: "customer",
    uuid: "4761edc4-76ea-46b6-8918-08f12744add9",
    contacts: [],
    status: "ACTIVE"
  }
];
var allPlace = [
  {
    name: "ZOO ROAD-GUWAHATI",
    placeId: "395f6107-3e7f-4970-9b41-b9f8cc1f9d8b"
  },
  {
    name: "ZIRAKPUR-BUS STAND",
    placeId: "429e35ed-ff73-40ff-9559-d52a6eb837c7"
  },
  { name: "VMART null", placeId: "97d4e8b9-825b-4cf9-8f6a-3e84779fb0a1" },
  { name: "VMART null", placeId: "3c8e48f5-55f3-417d-909c-8a3407fc3366" },
  {
    name: "VMART ZOO ROAD-GUWAHATI",
    placeId: "a0b7c36d-69c3-46c0-91ee-cba5de793aca"
  },
  {
    name: "VMART ZIRAKHPUR-BUS STAND",
    placeId: "0e5872eb-92fc-464d-8a34-ff701db293d2"
  },
  { name: "VMART YD001", placeId: "179bf5c1-9e5e-4f24-8a8a-841e10e97f91" },
  {
    name: "VMART Warehouse - Bilaspur",
    placeId: "081c0123-c639-4200-8880-bd94bdcc3af6"
  },
  { name: "VMART WSD", placeId: "42481ce1-460b-408e-a11a-6f7d96a17abf" },
  {
    name: "VMART VRLZ - UTTAR PRADESH",
    placeId: "6ed80523-b417-4e30-9f89-9226b07ed1c6"
  },
  {
    name: "VMART VRLZ - NORTH",
    placeId: "7913b403-f7ec-496f-b608-0bea58f06d4f"
  },
  {
    name: "VMART VRLZ - EAST",
    placeId: "133bb207-5d45-484b-aa81-f52ef61942ba"
  },
  {
    name: "VMART VRLZ - BIHAR",
    placeId: "991a7687-0055-435f-a929-05a401291c14"
  },
  {
    name: "VMART VIKAS NAGAR",
    placeId: "ee9ce1f4-170d-4265-8ce3-711157a9618f"
  },
  {
    name: "VMART VARANASI-SUNDARPUR",
    placeId: "a72ee761-cec0-4839-a59e-36986158bb74"
  },
  { name: "VMART VADODARA", placeId: "f677dfb7-7c5b-4e03-a5e5-66f777942359" },
  {
    name: "VMART UNNAO-SHAHGANJ BAZAAR",
    placeId: "33c6d35f-5e43-44dd-a624-df5b51ff051e"
  },
  { name: "VMART UJJAIN", placeId: "672ae3ca-74f8-4ca3-8583-ca9d3f502177" },
  { name: "VMART UDHAMPUR", placeId: "43505041-5e38-4b2f-8746-97a0dc8f57b3" },
  {
    name: "VMART UDALGURI-MG ROAD",
    placeId: "c9ff322e-c672-4b41-949e-5fdcafd19c5f"
  },
  {
    name: "VMART UDAIPUR-SURAJPOLE",
    placeId: "9d742c8f-dac1-4251-a6fc-5428da9a5c65"
  },
  { name: "VMART UDAIPUR", placeId: "d4f157ad-e204-4c9b-8af5-881d4421f801" },
  { name: "VMART THAKURGANJ", placeId: "3049324f-dc90-440d-a3c3-090ebca84183" },
  { name: "VMART TELIBAGH", placeId: "311886bf-7c66-4d80-8444-df1c5e435e80" },
  {
    name: "VMART TAMLUK-MANIKTALA",
    placeId: "b5b2b89f-957a-4c74-a009-2ce70f498631"
  },
  { name: "VMART SUPAUL", placeId: "e1d2a1ba-e76b-41f8-a506-214dfd1f1487" },
  { name: "VMART SULTANPUR", placeId: "20342cfa-6161-4937-8126-f12a354e2144" },
  { name: "VMART SRINAGAR", placeId: "7e38cde4-1963-460f-b85c-5faee51cb626" },
  {
    name: "VMART SOLAN-ANAND COMPLEX",
    placeId: "5ef17cce-1cf0-4f81-a796-1f06f3684540"
  },
  { name: "VMART SIWAN", placeId: "831185f5-368f-4921-9c3c-10e6c9a05cfe" },
  { name: "VMART SITAPUR", placeId: "278c9727-2fa1-4903-b949-105a8aee21eb" },
  { name: "VMART SITAMARHI", placeId: "6f9f2979-db7b-4984-80d3-0ec8d7419436" },
  { name: "VMART SILIGURI", placeId: "5924449f-506c-47bc-990b-9b61d8d728a4" },
  { name: "VMART SHUKLAGANJ", placeId: "c4618e0c-10fe-4869-b033-863f650b5714" },
  {
    name: "VMART SHREE SHYAM ENTERPRISES",
    placeId: "a4e7ad38-1638-4fd7-93a2-d8f7b7d18290"
  },
  { name: "VMART SHIVPURI", placeId: "d85978eb-61fe-4be7-b0a1-20a9cfcae624" },
  { name: "VMART SHEOHAR", placeId: "3f1dab58-c192-4b85-8a03-c3d760ef0b74" },
  { name: "VMART SHEIKHPURA", placeId: "87e45f8b-b990-4d38-b4c2-393ddf7a04a3" },
  { name: "VMART SHANTIPUR", placeId: "00eab56b-3b3f-4aec-883d-1f6fe41563e2" },
  { name: "VMART SHAHGANJ", placeId: "4c87ed84-320b-47b1-84b3-82d6d7550574" },
  { name: "VMART SHAHDARA", placeId: "32530daf-2462-40a2-afb4-03b8d37558d7" },
  {
    name: "VMART SHAHAJAHANPUR",
    placeId: "e69f266e-91fd-4957-b049-cbdb1b2e957f"
  },
  { name: "VMART SBH", placeId: "b2f51943-e28e-44c1-9e26-9219e1b0eb45" },
  { name: "VMART SATNA", placeId: "b66281ba-9c81-458b-974f-4257d9dd553a" },
  { name: "VMART SASARAM", placeId: "4eff6037-de90-45fd-9acd-e141842d59d5" },
  { name: "VMART SANJAULI", placeId: "23be10c4-486e-4a63-acc3-d6f932c38120" },
  {
    name: "VMART SANGANER-JAIPUR",
    placeId: "77bd2b67-ce1b-4776-b4bb-9d006936b06c"
  },
  {
    name: "VMART SANDILA-MOHALL ASHAF TOLA",
    placeId: "de3f93e4-a8f3-439e-b914-4c6c52c6c75b"
  },
  { name: "VMART SAMBALPUR", placeId: "a74470d1-4b9f-4c29-9616-5dfad101efd5" },
  { name: "VMART SAMASTIPUR", placeId: "7d523573-ff41-46c1-ad26-48bbf86e2ec4" },
  {
    name: "VMART SAKET NAGAR",
    placeId: "74be03ea-df1f-4566-a601-e1b6ad3a0fb1"
  },
  { name: "VMART SAKCHI-2", placeId: "c31c7303-e5f0-4e28-8281-9fa87f5982b0" },
  { name: "VMART SAKCHI-2", placeId: "01e22830-5faf-46ee-8a08-1c96bf069986" },
  { name: "VMART SAKCHI", placeId: "5c0057f4-1882-46be-8ae3-a7f3e2385140" },
  { name: "VMART SAHARSA", placeId: "7c45b998-bf2e-4156-be6e-9d7ceff46a73" },
  {
    name: "VMART SAHARANPUR-DELHI ROAD",
    placeId: "99cbdeb0-e039-4622-b7a3-1940f8e6e719"
  },
  { name: "VMART SAHARANPUR", placeId: "26ed4995-4ab0-49a0-ae1c-8c0c7cc8cf03" },
  {
    name: "VMART SAGUNA MOR-PATNA",
    placeId: "085f08f2-84a9-42d3-adee-76858054e628"
  },
  { name: "VMART SAGAR", placeId: "77da6cdd-ad61-4f5a-a4c0-7d4cc526d0a0" },
  {
    name: "VMART RUSTAMPUR-GORAKHPUR",
    placeId: "acbac5a1-71ac-4541-b760-744bc27b802c"
  },
  { name: "VMART RUHATTA", placeId: "18ff137d-f1cc-42b0-af94-b170f6f87d21" },
  { name: "VMART RUDRAPUR", placeId: "a4c7cf17-38b9-493d-8567-27f48070504e" },
  { name: "VMART REWA", placeId: "bdfa3f5c-1d3c-41e5-a325-bc23c3f5e27c" },
  { name: "VMART RENUKOOT", placeId: "92ca256d-d30a-4d99-82e8-f102592908e8" },
  { name: "VMART RAXAUL", placeId: "2f901956-4dfa-4190-a19a-35754eb160a6" },
  {
    name: "VMART RANCHI-RATU ROAD",
    placeId: "b6e89951-dec9-4f56-9356-ef31923ef522"
  },
  { name: "VMART RANCHI", placeId: "b429389d-1e10-4655-95b3-254f408cd17b" },
  { name: "VMART RAMPUR", placeId: "24d11976-76e8-4129-8018-494bbc9e54ae" },
  { name: "VMART RAMGARH", placeId: "fc466154-3e91-4a89-a1e4-d0516ddbd401" },
  {
    name: "VMART RAMBAGH CHOWK",
    placeId: "552fb8c0-be72-40d1-a4a9-6888aa39e805"
  },
  {
    name: "VMART RAJPURA-AGRA",
    placeId: "f008feaf-69a6-414c-b9e3-775bc3a1f29e"
  },
  { name: "VMART RAJOURI", placeId: "5d752a30-0109-47b1-973b-c3b1c956b289" },
  {
    name: "VMART RAJIV NAGAR",
    placeId: "ab0b21ad-6882-4261-9239-f6e0f692c094"
  },
  {
    name: "VMART RAJENDER NAGAR",
    placeId: "3b7a2b52-1c60-43f7-9450-cde695988658"
  },
  {
    name: "VMART RAJAJIPURAM",
    placeId: "34e9f51d-e420-449c-9edc-1ff3bf7b05a7"
  },
  {
    name: "VMART RAIGANJ-MG ROAD",
    placeId: "db6ec78c-0305-4130-ad6f-865c81d1290e"
  },
  { name: "VMART RAIBARELI", placeId: "a3d02471-ba2a-4212-bbc0-228f07ecfa79" },
  { name: "VMART QAISERBAGH", placeId: "761ff354-de0c-486b-83bd-119b4ae8da13" },
  { name: "VMART PURULIA", placeId: "f71e47a5-4da8-4f6c-a364-c82bc6f0154f" },
  { name: "VMART PURNIA", placeId: "e68c2fbc-56e5-4ef2-acec-389c88b4c386" },
  {
    name: "VMART PREM NAGAR-BAREILLY",
    placeId: "d858822d-030a-48af-9e81-3e870b94dd60"
  },
  {
    name: "VMART PILIBHIT-EIDGAH CHAURAH",
    placeId: "cf95aecc-2326-4d7b-8750-c8757372f30c"
  },
  { name: "VMART PILIBHIT", placeId: "29434b1d-4851-4e58-8339-39131f3e113b" },
  { name: "VMART PHUSRO", placeId: "ce7eab4a-2ac6-4cfc-a8fd-200b1a911931" },
  {
    name: "VMART PATNA-KURJI",
    placeId: "eaa43bb2-5aee-4c55-82a0-aa9df4c3315f"
  },
  {
    name: "VMART PATNA-KANTIFACTORY",
    placeId: "1f20e1ac-cdf5-420e-bb21-dd41e654bcb9"
  },
  { name: "VMART PATNA CITY", placeId: "33555c1d-4535-4542-8ac9-25ebb37c42f6" },
  { name: "VMART PATHANKOT", placeId: "12dcdd6f-1f72-4224-bb42-cd88d58432ac" },
  {
    name: "VMART PARTAP GARH",
    placeId: "5cd438ab-92e7-4117-81dd-014bf1a1efb4"
  },
  {
    name: "VMART PALKI-LUCKNOW",
    placeId: "d0abe9e7-31be-4e62-9467-a01deb44edba"
  },
  {
    name: "VMART PALAMPUR-CITY MALL",
    placeId: "2625f40d-989b-4324-bee4-91ecae3a25a1"
  },
  { name: "VMART PAKUR", placeId: "b2c6dcb9-8253-4025-a2aa-236cea7a9ac6" },
  { name: "VMART PAHARIA", placeId: "dba78642-d266-4994-8192-66bdf5bf8997" },
  { name: "VMART PADRAUNA", placeId: "cf6bbdd1-a088-4b53-9c89-8eed18d674eb" },
  {
    name: "VMART PADARI BAZAR",
    placeId: "fac79265-1ff1-423b-b68d-fc441416eab1"
  },
  { name: "VMART ORAI", placeId: "942156ed-df41-40ba-9c29-66992a474238" },
  {
    name: "VMART OMNI-BILASPUR",
    placeId: "36e24bfa-2bf6-4cd9-aa0e-6ec32cfbb1de"
  },
  { name: "VMART Nijam", placeId: "9b0efb10-a275-4169-9bce-d703cd79f2e7" },
  {
    name: "VMART NORTH LAKHIMPUR-NT ROAD",
    placeId: "5ff40e02-6491-453f-9cb1-d5b0e68ee13a"
  },
  { name: "VMART NDBH", placeId: "628fb728-fa29-498b-8a6a-16dc6814d844" },
  { name: "VMART NAWADA", placeId: "813b17f3-d62b-4426-91a0-87f498450f6f" },
  {
    name: "VMART NAUBASTA-KANPUR",
    placeId: "5f3dc792-403e-428b-97e9-29c7d270a584"
  },
  { name: "VMART NALBARI", placeId: "68bcd59f-42b5-435d-96fd-124f4a405e38" },
  { name: "VMART NAGOUR", placeId: "ddaab64d-de86-498a-8c78-ef3515b1ea85" },
  { name: "VMART NAGAON", placeId: "6c0e299e-e7a4-4072-a1d8-6323d4fa338c" },
  {
    name: "VMART NABARANGPUR",
    placeId: "5c1aa793-3721-4db6-aeec-c72dd7fde3e6"
  },
  { name: "VMART N S C", placeId: "7b0edadf-9984-43b6-9112-99eecb14e405" },
  {
    name: "VMART MUZAFFARPUR-MARIPUR CHOWK",
    placeId: "6810dc4b-784d-411f-a482-590aca904dbf"
  },
  {
    name: "VMART MUZAFFARPUR-AGHORIA BAZAR",
    placeId: "d0b4e3f6-42b8-4a33-ae38-63a484bf2f1c"
  },
  {
    name: "VMART MUZAFFARPUR",
    placeId: "3da5ff9a-cf9c-48d1-88c9-976c7e1fa4b9"
  },
  {
    name: "VMART MUZAFFARNAGAR",
    placeId: "cc7240fd-8722-4cc7-84c5-da5d6e5f1747"
  },
  {
    name: "VMART MURSHIDABAD",
    placeId: "41c2dc69-9796-424e-a372-7f25cbc945e5"
  },
  { name: "VMART MURADABAD", placeId: "c339a7df-3d32-458c-b2af-dba3e08816da" },
  {
    name: "VMART MUNSHIPULIYA",
    placeId: "9e403b69-ff6b-4917-a4ab-9f9b7d19cbc5"
  },
  { name: "VMART MUNGER", placeId: "31cc22aa-8695-4294-be67-316610400e55" },
  {
    name: "VMART MUGHALSARAI",
    placeId: "82fb8b9b-0115-4924-8806-b5e54c9f593f"
  },
  { name: "VMART MP NAGAR", placeId: "1fd82301-daf1-4768-8d34-bbf0d7e94d92" },
  { name: "VMART MOTIHARI", placeId: "5f83e810-70c2-42e2-adec-1f1e232263da" },
  { name: "VMART MORVI", placeId: "5d5e8ad1-a3d3-4c8d-88d6-bbe6522116a1" },
  { name: "VMART MOGA", placeId: "56d0e91a-2a90-4b31-ba37-b233c36aad89" },
  { name: "VMART MIRZAPUR", placeId: "4fdbd5c0-84a4-445b-896a-8b98e40c1dc7" },
  { name: "VMART MEHSANA", placeId: "50cb1dd3-071a-4fce-b075-19894cd2ae7f" },
  { name: "VMART MEERUT", placeId: "c9662673-72b5-4741-b3a3-b10d34f87dea" },
  { name: "VMART MAU", placeId: "cf3ee0fe-a4b2-49c4-82b0-efd23a4a77ac" },
  { name: "VMART MATHURA", placeId: "37398273-aa09-417c-98cc-0a4dce796dc7" },
  { name: "VMART MANGLAUR", placeId: "9feb60b3-4642-422e-8ba3-10d7abb4a9ac" },
  { name: "VMART MANGLAM", placeId: "51a02e04-dc99-4f41-a70c-2f0116eec8e4" },
  {
    name: "VMART MANGALDOI-LNB ROAD",
    placeId: "a68e3c41-2905-4e17-b49c-0be9f3804fff"
  },
  {
    name: "VMART MAJRA-DEHRADUN",
    placeId: "61cd7168-794a-4d9f-9bd3-9dd5a87be48f"
  },
  { name: "VMART MAINPURI", placeId: "4bfef01f-44ad-473c-b9d4-631ab90a9bce" },
  {
    name: "VMART MAHARAJAGANJ",
    placeId: "c4fe31b5-fbb4-4cfd-9e32-9814008f6cda"
  },
  {
    name: "VMART MAHARAJAGANJ",
    placeId: "77cce59e-b6ab-4713-8268-41a409fb8280"
  },
  {
    name: "VMART MAHARAJAGANJ",
    placeId: "362b17fa-f483-474c-abd3-694144800856"
  },
  { name: "VMART MADHUBANI", placeId: "a25de1f1-94d1-41ed-9aab-07cf8543d2df" },
  { name: "VMART MADHEPURA", placeId: "1ee79caf-1afd-4d6b-90cd-23ed3e8e20ab" },
  { name: "VMART M I E", placeId: "a48b6c30-f586-4b1c-b34c-0a2d481c4f78" },
  { name: "VMART LUXA", placeId: "9e4057d8-a0a7-48d1-a509-ec2f6c9209bf" },
  {
    name: "VMART LUCKNOW-RAJAJIPURAM 2",
    placeId: "174943ce-f696-4b9a-9ae5-80f7a23ca66e"
  },
  {
    name: "VMART LUCKNOW-QAISARBAGH",
    placeId: "fe48437b-ee46-4e76-8cea-59e24637e911"
  },
  {
    name: "VMART LUCKNOW-QAISARBAGH",
    placeId: "e76571b8-b33b-41df-b02f-4680757b5f0b"
  },
  {
    name: "VMART LUCKNOW-QAISARBAGH",
    placeId: "3ebd232f-04f0-418b-beba-835b78a73d80"
  },
  {
    name: "VMART LUCKNOW-QAISARBAGH",
    placeId: "205ef956-d085-4f87-8512-4dad6fb81e92"
  },
  {
    name: "VMART LUCKNOW-BUDHESHWAR",
    placeId: "ce598b98-bf11-4bac-9bdf-3f15b5302545"
  },
  {
    name: "VMART LUCKNOW-BKT",
    placeId: "f90844b9-ef56-40f2-979f-63f857791ae4"
  },
  {
    name: "VMART LUCKNOW-ASHIYANA",
    placeId: "ac0d71b6-6aed-4dad-bd6f-b8ae4b34ab64"
  },
  { name: "VMART LUCKNOW", placeId: "d2de5fd9-b785-4b36-8d9f-a2450f3f38ee" },
  { name: "VMART LOHARDAGA", placeId: "c2bb2503-72d4-4fb4-96a2-1ddbf098d2fd" },
  { name: "VMART LAXMINAGAR", placeId: "b51ab7f2-22e7-43b1-9048-175d8b21db7c" },
  { name: "VMART LAWGARDEN", placeId: "add198cd-7114-48c7-a1bc-e9cf5dc09842" },
  { name: "VMART LATEHAR", placeId: "21bc39e5-5e20-4158-8b37-68cea1b478f5" },
  { name: "VMART LALGANJ", placeId: "025d08e6-a094-47f7-9668-2ecd4290d18f" },
  {
    name: "VMART LAL BANGLA-KANPUR",
    placeId: "6276ab7a-4f86-4fa1-a0af-3f1d5b76c56a"
  },
  { name: "VMART LAKHISARAI", placeId: "8dc037a2-6ec3-416f-8d6f-9f22c970478a" },
  { name: "VMART LAKHIMPUR", placeId: "7cf983c0-1922-4194-a3c9-3fa582493438" },
  {
    name: "VMART LAJPATNAGAR",
    placeId: "db546f91-06ee-428e-9425-88aafa2a8c21"
  },
  {
    name: "VMART KRISHNANAGAR-WEST BENGAL",
    placeId: "8d37979f-4277-4f7b-9d4e-5f439a4f2e69"
  },
  {
    name: "VMART KRISHNA NAGAR-LUCKNOW",
    placeId: "cca990bc-c84e-4e62-a0dc-890004080b15"
  },
  { name: "VMART KOTWALI", placeId: "86c47bc8-f092-426a-8cf2-7fc865b14dce" },
  {
    name: "VMART KOTA-RANGBARI",
    placeId: "522be085-1bd2-44fb-85a5-7c17e5b4de01"
  },
  {
    name: "VMART KOTA-KUNADI",
    placeId: "7e6c103c-b37a-4cd3-a214-f20bd37d30c4"
  },
  { name: "VMART KOTA", placeId: "9507af81-b357-4dd1-aadb-7db589ea1f92" },
  {
    name: "VMART KOLKATA-BARASAT",
    placeId: "04a0829a-00da-4086-b006-52723890bbd6"
  },
  {
    name: "VMART KOHIMA-NORTH BLOCK",
    placeId: "f29bdf4d-9663-44dd-aac0-ca1e07a7ab1a"
  },
  { name: "VMART KISHANGANJ", placeId: "55568087-523e-44a0-bc60-f740b66e7c75" },
  { name: "VMART KHARUPETIA", placeId: "c418bc55-d07f-476a-82d5-4423398d6d3e" },
  { name: "VMART KHARAGPUR", placeId: "27b74e54-d2f9-4839-b9a3-d6bdcd16d952" },
  { name: "VMART KHALILABAD", placeId: "72ca74f0-9d99-4dbf-8ac2-ff5acff0fe4c" },
  { name: "VMART KEONJHAR", placeId: "695c5143-fae2-42cf-8280-a4fa0bb338f9" },
  { name: "VMART KCL", placeId: "7b6fa1fe-d558-45b1-9075-242a0f434be6" },
  {
    name: "VMART KATIHAR-NEW MARKET",
    placeId: "e22968a3-3cd7-4677-946a-173dfa156631"
  },
  { name: "VMART KATHUA", placeId: "4a9ce59f-aea4-425e-a361-6797bf625b1e" },
  { name: "VMART KASHIPUR", placeId: "c754de9c-1dae-4a94-b89b-2b9bb7bedcf9" },
  {
    name: "VMART KANPUR-P ROAD",
    placeId: "c92b6f79-7ae3-4915-8d1c-4b646f589ac4"
  },
  {
    name: "VMART KANPUR-KALYANPUR",
    placeId: "b5f6aa5f-b4e6-49c1-85a2-5c6aa56168b6"
  },
  { name: "VMART KANPUR", placeId: "6a5ba34d-6db7-4f38-8fcc-5e649496b573" },
  { name: "VMART KANNAUJ", placeId: "2d42f22b-83b3-4f4b-bb52-21b28f0e67db" },
  {
    name: "VMART KANKARBAGH-PATNA",
    placeId: "8c8122da-e945-4ac9-b9d8-0fd4ed9b6327"
  },
  {
    name: "VMART KANGRA-BUS STAND",
    placeId: "98fee261-b0f9-439e-9775-863d9e450bbf"
  },
  {
    name: "VMART KANGRA-BUS STAND",
    placeId: "8ed1544b-22fb-43f6-afef-fe22606c7fdb"
  },
  {
    name: "VMART KALAPAHAR-GUWAHATI",
    placeId: "b28b2461-c808-4379-9e65-5f6cac4e1b12"
  },
  { name: "VMART KAHALGOAN", placeId: "5bcda9ce-cf2b-416a-b601-ad617591c949" },
  {
    name: "VMART KACHI CHAWNI",
    placeId: "7ced33a3-a400-405a-be66-08780c67b583"
  },
  { name: "VMART JOWAI", placeId: "2bb470c5-b6b3-4b2e-af59-1968f2ac6940" },
  { name: "VMART JORHAT", placeId: "266b01ba-3c17-4143-a680-4ef97d9a2d51" },
  { name: "VMART JHARSUGUDA", placeId: "81ca6c6a-35cd-4350-9595-04f3a7b51bcb" },
  { name: "VMART JHANSI", placeId: "0c91f078-87d4-4616-aa62-1265d81ca613" },
  {
    name: "VMART JHANGIRABAD-BHOPAL",
    placeId: "6715645d-4b85-4f4d-b13e-d7dc9e111e7f"
  },
  { name: "VMART JAUNPUR", placeId: "6e1687e1-8721-45cd-b885-bab7583475b3" },
  { name: "VMART JAMUI", placeId: "15167e9e-c1dc-4d9a-b619-f0eaf8816ed1" },
  { name: "VMART JAMTARA", placeId: "c7c66d4b-9dc6-4dc1-a4f8-37918f9b05ac" },
  { name: "VMART JAMNAGAR", placeId: "3de6897f-1b61-4955-a57a-f85ede1b5946" },
  {
    name: "VMART JAMMU-TALAB TILLO",
    placeId: "ce5ec616-c9a6-44aa-8ff2-61eafb14d0ae"
  },
  { name: "VMART JAMMU-NEW", placeId: "2646e35f-dde4-4961-b452-dc9f052b7dd5" },
  {
    name: "VMART JAMMU-KUNJWANI",
    placeId: "4abc9c06-46fa-4c15-93a0-ccd91c6da3d7"
  },
  {
    name: "VMART JAMMU-JANIPUR",
    placeId: "1459c26b-2959-40d9-af4f-0125d881b5a6"
  },
  { name: "VMART JAMMU", placeId: "25e2e37a-83fd-485e-ab89-6c36c9c15c8f" },
  { name: "VMART JAMALPUR", placeId: "f9ee3571-4741-47f4-97a1-22c43a6e96fe" },
  { name: "VMART JALPAIGURI", placeId: "531c339c-e5ee-437a-a372-bd29aab41669" },
  { name: "VMART JALANDHAR", placeId: "41c6c46a-584c-4e5d-915e-e5661b7afcf2" },
  {
    name: "VMART JAIPUR-RAJAPARK",
    placeId: "16f5b707-a6ba-4eb5-a118-5de4955a6441"
  },
  {
    name: "VMART JAIPUR-PRATAP NAGAR",
    placeId: "b261c877-5306-4c7c-bc11-d919ecbf822f"
  },
  {
    name: "VMART JAIPUR-BARKAT NAGAR",
    placeId: "d5bd26bc-8c80-4181-b33b-58d22a5bb9a1"
  },
  { name: "VMART JAHANABAD", placeId: "a1287cc6-3a2e-48b3-a420-829a24f5dc3e" },
  {
    name: "VMART JABALPUR-DAMOHNAKA",
    placeId: "6cd862d0-18be-4ec5-b9af-737f72790ec7"
  },
  { name: "VMART ITANAGAR", placeId: "77d43b07-888c-4873-848c-58e2d7f1e8cf" },
  {
    name: "VMART INDORE-SAPNA SANGEETA",
    placeId: "b1cbcea7-dd6b-4cee-8982-e656f97b8a2b"
  },
  {
    name: "VMART INDORE-MALWA MILL",
    placeId: "5f0b97f6-68e9-4fc1-a6fc-9d703e41ccc5"
  },
  {
    name: "VMART INDORE-ANNAPURNA ROAD",
    placeId: "45381760-4040-484f-a60e-264b49b6a232"
  },
  {
    name: "VMART Head office.",
    placeId: "87e94548-d4e8-44b2-ae34-6fd8760bae57"
  },
  {
    name: "VMART Head office",
    placeId: "62d473cb-349e-4336-a605-be8d4f24635a"
  },
  {
    name: "VMART HYDERPORA-SRINAGAR",
    placeId: "7c499fcc-aba9-4bfb-9cc0-01939a395bac"
  },
  {
    name: "VMART HUSSAINGANJ",
    placeId: "4534c1ae-f556-480c-a1cd-bfa279cc139d"
  },
  {
    name: "VMART HUSAINABAD-JAUNPUR",
    placeId: "908cf425-90a7-49dd-9789-dd1a1d35f08c"
  },
  {
    name: "VMART HUMERA ENTERPRISES",
    placeId: "8c3b3050-dcf5-4834-8083-4e4695a132ce"
  },
  { name: "VMART HT", placeId: "437751b8-ae4a-41ac-aec7-1f7beda7f0d6" },
  { name: "VMART HO..", placeId: "55b3ec5e-c1af-4d85-aa76-ba0172ae67da" },
  { name: "VMART HO.", placeId: "15294eec-bcd1-4afe-9c4b-0b90b061c117" },
  { name: "VMART HO SALE", placeId: "2682ab91-6c94-44b7-ae1a-1eb3981416c6" },
  { name: "VMART HIRAPUR", placeId: "70d827b9-ca35-43f3-a73d-946f0a2039d3" },
  { name: "VMART HI", placeId: "9e39f999-9cf6-4c40-ac62-30de338690b8" },
  { name: "VMART HAZARIBAGH", placeId: "c6e69fee-4551-43c6-b3cd-2bd9d279bb9e" },
  { name: "VMART HATHRAS", placeId: "c9ac513b-b76e-4a81-b768-4128886d60e7" },
  { name: "VMART HARIDWAR", placeId: "c1f272a1-3f20-458f-a9df-05e7793c3aed" },
  { name: "VMART HARDOI", placeId: "33c6de5e-3e04-4c04-8145-41f08fcc01bb" },
  { name: "VMART HAMIRPUR", placeId: "b52c47c4-fb1c-4198-881d-a400aaa15f65" },
  { name: "VMART HALDWANI", placeId: "fc0dd5b7-d25e-455a-b3a1-7aec0407b2a4" },
  { name: "VMART HAJIPUR", placeId: "69cc500e-5167-472d-9a6a-fdbdabf03122" },
  {
    name: "VMART GWALIOR-OPPO. FILMISTAN",
    placeId: "912f1d11-1042-4267-bc2d-9456002c7782"
  },
  { name: "VMART GWALIOR-2", placeId: "95e73504-9e67-4d9f-bca0-5c7b7e3613af" },
  { name: "VMART GWALIOR-1", placeId: "5ff4991d-1f66-4a1b-93b4-a6961b7646a1" },
  { name: "VMART GURDASPUR", placeId: "e1192766-7036-4d4c-bb2a-3a3bd870f939" },
  {
    name: "VMART GORAKHPUR-MEDICAL COLLEGE",
    placeId: "7f2f9841-a251-4c43-8f97-db3f55e9522d"
  },
  { name: "VMART GORAKHPUR", placeId: "157248a4-9519-4e4a-88e7-8a73c7dd8735" },
  { name: "VMART GOPALGANJ", placeId: "3872916b-803e-4ed6-8be8-6b36c712d1a0" },
  { name: "VMART GONDA", placeId: "a8426611-fe70-4ad6-abab-e707bda8835a" },
  { name: "VMART GIRIDIH", placeId: "3ea95cd1-13a9-47cf-8f86-57fcd62e71e1" },
  { name: "VMART GHUMLA", placeId: "39674e39-0ef3-4683-b192-362b291a3003" },
  { name: "VMART GHUMLA", placeId: "22f9bb3a-0daa-4a87-8fc2-96d3c389a7b2" },
  { name: "VMART GHAZIABAD", placeId: "a8f67913-39ed-4eb2-80d3-9ac84447ecee" },
  { name: "VMART GAZIPUR", placeId: "77125e51-306f-46b8-a8c3-1242d0e1b2e0" },
  { name: "VMART GAYA", placeId: "6165a87f-3b3a-49a5-a8e3-74ef8ab106b6" },
  { name: "VMART GAURIGANJ", placeId: "6149edbc-bee4-4035-a15c-a763f97a2100" },
  { name: "VMART GARHWA", placeId: "44219671-8f28-490f-928e-390e45613267" },
  {
    name: "VMART GARH ROAD-MEERUT",
    placeId: "3d09d69b-0260-4fe4-a45c-8556597bcb44"
  },
  { name: "VMART GANDHIDHAM", placeId: "78324762-fed4-41d9-ad04-1981910ee304" },
  { name: "VMART FO-PATAUDI", placeId: "f0746546-d62a-4ebb-bab5-452d5674f126" },
  { name: "VMART FO-MANESAR", placeId: "88d37e15-fe33-4526-82b4-ecd6e9ebb68b" },
  {
    name: "VMART FO-KAPASHERA",
    placeId: "efde5025-d869-45ad-b0be-e7cfcfce3f29"
  },
  {
    name: "VMART FO-KAPASHERA",
    placeId: "be35898c-d08b-44f1-9fc3-91459740ab3e"
  },
  {
    name: "VMART FO-KAPASHERA",
    placeId: "a036a039-43fb-4f21-9b76-7a7a450f25b7"
  },
  {
    name: "VMART FO-KAPASHERA",
    placeId: "5623941d-a906-4802-9f42-47e2f9aee5a6"
  },
  {
    name: "VMART FO-KAPASHERA",
    placeId: "164f7fb5-08f9-40ce-879c-0776e121c909"
  },
  { name: "VMART FIROZABAD", placeId: "edc66fe9-c9f2-4b64-9948-cdbec442440a" },
  { name: "VMART FATHEPUR", placeId: "fa4b634c-60ed-4bd6-b576-2935471dd648" },
  {
    name: "VMART FARRUKHABAD",
    placeId: "f6095fff-0094-4ebc-a2a5-f22df39df23e"
  },
  { name: "VMART FAIZABAD-2", placeId: "8126b85c-5cc3-46ec-9edd-c23103d4c5dd" },
  { name: "VMART FAIZABAD", placeId: "82e65982-bc27-4963-8269-2d90c8b7f761" },
  {
    name: "VMART FACTORY OUTLET",
    placeId: "2a06b8fb-bfd6-4bc6-b43c-f7344c11c5f8"
  },
  { name: "VMART Earth", placeId: "d3b39598-13e3-412e-a92a-b14010aca7bb" },
  { name: "VMART ETAWAH-2", placeId: "aaa44836-84e7-4710-9daa-ab08ac10f6e8" },
  { name: "VMART ETAWAH", placeId: "4f6d1449-9b56-4e27-bb2d-00008be2a9c7" },
  {
    name: "VMART Dhama Enterprise",
    placeId: "079cac31-237f-403d-9b89-7921c9e4f42a"
  },
  { name: "VMART DURGAKUND", placeId: "9724edd2-0d5a-43d2-8879-0e0f8bb83cb9" },
  { name: "VMART DUMKA", placeId: "8a301ad5-a1f6-4d74-9862-cd92e9d214ac" },
  {
    name: "VMART DUBAGGA-LUCKNOW",
    placeId: "bde4a47f-aa0e-4031-b4f4-2c5f2a91a999"
  },
  {
    name: "VMART DIBRUGARH-JHALUKPARA",
    placeId: "1c104108-27b0-4db2-b340-64ffd061b2e9"
  },
  { name: "VMART DHULIAN", placeId: "ae0eb120-2adc-4f26-9566-9c4659920d68" },
  {
    name: "VMART DHUBRI-GTB ROAD",
    placeId: "0ab01e43-45bd-40d6-81f8-e80adab01968"
  },
  { name: "VMART DHENKANAL", placeId: "00fab1ef-bc44-4e4e-9dc1-748b0651e550" },
  {
    name: "VMART DHANBAD-SARAIDHELLA",
    placeId: "355aca1c-389b-43a3-99be-263b56689b89"
  },
  { name: "VMART DHANBAD", placeId: "044ad739-bedd-48fe-9860-affd9621ca5e" },
  { name: "VMART DEORIA", placeId: "c7261898-3ae6-4ce8-bd28-d6c56b12b67b" },
  { name: "VMART DEOGHAR", placeId: "0f018e3c-abc2-4f19-a265-568757d976ca" },
  {
    name: "VMART DELHI-NARELA",
    placeId: "94489106-3066-47c1-a697-6c108d65e01d"
  },
  { name: "VMART DEHRADUN", placeId: "99400c29-0629-4ed0-878f-fd5cf362049d" },
  {
    name: "VMART DDU-RAJASTHAN",
    placeId: "1c7a78f4-1701-4a21-ae0b-b8cea255c265"
  },
  { name: "VMART DDU-ODISHA", placeId: "770646b9-179b-4aae-8302-807b70d20b19" },
  {
    name: "VMART DDU-MATHURA",
    placeId: "04832f22-c303-457a-9f71-cc02fc740fb2"
  },
  {
    name: "VMART DDU-INDRA NAGAR",
    placeId: "6ac9dc97-6203-48e5-b011-83e9508af771"
  },
  {
    name: "VMART DDU-DAYAL RESIDENCY",
    placeId: "d7c351d0-c645-401e-91cf-5e08abc1819d"
  },
  {
    name: "VMART DDU-CUTTACK",
    placeId: "f78c9fed-584e-4174-a4d9-279bcfe61c9a"
  },
  { name: "VMART DAUD NAGAR", placeId: "e5734707-9d33-4ba8-8acc-37bf0a305e68" },
  { name: "VMART DARBHANGA", placeId: "557ca87e-a8bd-4564-8420-ab7ba922efd3" },
  { name: "VMART DALTONGANJ", placeId: "d42255c7-3f4c-485b-922e-481bd28f7eec" },
  {
    name: "VMART DALANWALA-DEHRADUN",
    placeId: "aaeb1e47-4e70-48a0-873e-2d63ddef4705"
  },
  { name: "VMART CUTTACK", placeId: "23efa911-fbed-4d0f-bd85-b85e1bb5d8bf" },
  {
    name: "VMART COOCH BEHAR",
    placeId: "3c7b571b-d860-4678-ad5e-0fefadf98393"
  },
  { name: "VMART CONTAL", placeId: "08823b5c-6a2a-40bc-a527-e13214e72376" },
  {
    name: "VMART CHURCH ROAD",
    placeId: "0a87e866-c15b-4d86-b6a6-0803daad64d5"
  },
  { name: "VMART CHOWK", placeId: "ee282c3d-36d1-401b-9af7-df05a19dcd63" },
  {
    name: "VMART CHOTTA SHIMLA",
    placeId: "f0204618-6e74-45e9-8bf2-853dc5a5cddb"
  },
  {
    name: "VMART CHINHAT-LUCKNOW",
    placeId: "58585a34-0064-4f6f-a451-8049311af1ee"
  },
  { name: "VMART CHHAPRA", placeId: "afb8833a-512c-41ad-bcc0-03ae67ecf305" },
  { name: "VMART CHANDIGARH", placeId: "6c7abfbc-2bc0-4fae-ba55-f1cbe232005f" },
  {
    name: "VMART CHANDAUSI-BAHJOI ROAD",
    placeId: "68cb85aa-0cd8-4912-93b8-a329f373e14d"
  },
  { name: "VMART CHAKIA", placeId: "cdc9c5b7-c540-4ff6-be42-6b4a21a3931a" },
  { name: "VMART CHAAS", placeId: "57a37e02-fdd7-42d4-9313-089b6c2c49ee" },
  { name: "VMART CANT ROAD", placeId: "6c121a80-c750-4334-8235-99b3a5ea3a71" },
  { name: "VMART Bilaspur", placeId: "9c928b18-de5c-42ab-8b5c-dcac0e3a15bf" },
  { name: "VMART BUXAR", placeId: "d54d7fb9-a5bf-47de-85d3-657224d68bc7" },
  { name: "VMART BURDWAN", placeId: "f5c07220-d9a7-41e9-a660-8d261ace20ba" },
  {
    name: "VMART BULANDSHAHR-RAJA BABU RD",
    placeId: "cce1f9cf-6507-4cbc-9c37-d8764da7bca4"
  },
  {
    name: "VMART BULANDSHAHR-RAJA BABU RD",
    placeId: "cbde84e2-f48a-45dd-b06a-06cc8b83d53a"
  },
  {
    name: "VMART BULANDSHAHR-RAJA BABU RD",
    placeId: "08ccccaf-e6af-4259-8e99-8498140fc883"
  },
  {
    name: "VMART BORING ROAD-PATNA",
    placeId: "cdb3126b-620a-469a-ad43-4f9d94a9ab62"
  },
  {
    name: "VMART BISWANATH CHARIALI",
    placeId: "09bae662-3f31-43dd-ad60-e4fea72e0cc6"
  },
  {
    name: "VMART BIRSA CHOWK-RANCHI",
    placeId: "7f5136f9-5834-41e5-9732-5345e09ebb84"
  },
  { name: "VMART BIJNOR", placeId: "db48e0c4-b595-4372-a1a6-91a9df693fe6" },
  {
    name: "VMART BHUBANESWAR",
    placeId: "f4a6f9f2-ff23-4ae7-8d36-d34e25a7ac8d"
  },
  {
    name: "VMART BHOPAL-KAROND",
    placeId: "f47b4195-6724-4c38-8e36-c8830cf1cb10"
  },
  { name: "VMART BHOPAL", placeId: "60aebc01-8bc9-4844-b9b3-74ea66d81499" },
  { name: "VMART BHOJUBEER", placeId: "62cd82a2-c28c-47a0-9745-3d0ce880c29a" },
  { name: "VMART BHAVNAGAR", placeId: "2ab74ffb-2ed8-4f51-af42-06b9b699f17f" },
  { name: "VMART BHANGEL", placeId: "cebae380-7100-4309-843c-3803d480c2a4" },
  {
    name: "VMART BHAGESHWAR NAGAR",
    placeId: "061a5bbf-601f-43c1-9bc5-601437c0b9bd"
  },
  { name: "VMART BHAGALPUR", placeId: "a6bfd249-a177-4332-b662-29053726d1d1" },
  { name: "VMART BHADRAK", placeId: "73cf0e87-54de-4b42-9d0e-21f10274a365" },
  { name: "VMART BHABUA", placeId: "0a821323-3125-4ea2-b90c-9fc339ce6b17" },
  { name: "VMART BETTIAH", placeId: "d3a3c61f-ee4a-490e-ae6b-18fee59609a4" },
  {
    name: "VMART BERHAMPUR-2",
    placeId: "1277fd56-eda7-4691-8c4a-3b6922df48df"
  },
  { name: "VMART BERHAMPUR", placeId: "8b50d59a-0914-4fdb-a5cf-783ca1c42fa4" },
  { name: "VMART BEGUSARAI", placeId: "5a377803-5557-4c93-b7d7-56d2e216d0ad" },
  { name: "VMART BASTI", placeId: "6e7b69df-66d6-45c6-aa86-18287d66a17b" },
  {
    name: "VMART BARRA-KANPUR",
    placeId: "c139c7f2-7260-400c-a282-0513e0820c71"
  },
  {
    name: "VMART BARPETA TOWN-HOWLY ROAD",
    placeId: "7f895b35-f2f0-4da3-a873-a1fbb1969974"
  },
  {
    name: "VMART BARPETA ROAD",
    placeId: "ee15702d-150d-4d54-a4bc-210856bd955b"
  },
  { name: "VMART BARIPADA", placeId: "f6d3a841-52b1-4191-bdfb-bac5bd6b3ab1" },
  { name: "VMART BAREILLY", placeId: "76bc587b-4b15-40ef-b1b4-26a4da86f783" },
  { name: "VMART BARABANKI", placeId: "06f032eb-ab9a-4406-8333-d867c98111c6" },
  { name: "VMART BANKA", placeId: "c6a1c982-9945-4c83-a5ff-9304fd8d4882" },
  { name: "VMART BANDEL", placeId: "9ceaf30f-f441-4e9a-bc42-c8730ffa50d2" },
  { name: "VMART BANDA", placeId: "83ed6931-e9ad-46ee-8198-fac0bd42a46f" },
  { name: "VMART BALIA", placeId: "d2754377-892b-4062-85a6-5ff4586cbfa3" },
  { name: "VMART BALANGIR", placeId: "0026a11e-3910-4cf2-8c02-b18772bfa1b3" },
  { name: "VMART BAHRAICH", placeId: "4452dc39-ad8d-46ec-8380-f52a6736e996" },
  { name: "VMART BAGAHA", placeId: "98664dff-89be-4573-a5c9-be8fe6d451b3" },
  { name: "VMART BADAUN", placeId: "ccca2f01-ed23-47b0-9961-be247f5dcdaa" },
  { name: "VMART AZAMGARH", placeId: "0890663c-3d96-4600-9637-4b71ddc3c905" },
  { name: "VMART AS", placeId: "739a0fe3-99fd-48a4-a64b-f805d334d921" },
  { name: "VMART ARRAH", placeId: "68441958-8b45-4efd-969f-c4a480a2a99e" },
  { name: "VMART ARAMBAGH", placeId: "9823e501-2db9-476e-a08d-ef84d7f5503b" },
  { name: "VMART AQS", placeId: "cce7891c-d70c-4ad7-95ee-49bb008a51ec" },
  { name: "VMART AMROHA", placeId: "0ee39112-fee4-4c81-9afa-28246059b118" },
  { name: "VMART AMBALA", placeId: "708aa91f-6c8f-4e73-bcba-3b027701aef8" },
  { name: "VMART ALLAHABAD", placeId: "d59bafed-5789-4324-a979-96a608ca5335" },
  {
    name: "VMART ALIGARH-ETAH CHUNGI",
    placeId: "0cbc43ec-3f20-41ce-9c49-2903010856ff"
  },
  { name: "VMART ALIGARH", placeId: "bbac1669-963d-4157-813d-f5d79c4b63ae" },
  { name: "VMART ALAMBAGH", placeId: "7786a630-8b95-4cc3-b9fa-255bdf627a19" },
  {
    name: "VMART AKHNOOR-LOHRI MALL",
    placeId: "4855740b-1349-4b22-a993-ad2318d45b36"
  },
  { name: "VMART AKBARPUR", placeId: "a19fa882-9c31-4cef-8e61-ba06caf90e0b" },
  { name: "VMART AJMER", placeId: "d3c93159-50c6-4ad6-bbcc-8651f0620ee4" },
  {
    name: "VMART AGRA-VIP ROAD",
    placeId: "5164ab5e-2b63-4798-b978-81fa6e78eab6"
  },
  {
    name: "VMART AGRA-SIKANDRA",
    placeId: "e23ef27c-8306-410c-9d75-941bd55bc2f1"
  },
  { name: "VMART AGRA", placeId: "3d5f94f4-c263-40cb-8433-0e4f9274f867" },
  { name: "VMART ADITYAPUR", placeId: "ab827f3b-7e6b-441a-b83e-53f51a85705c" },
  { name: "VMART 142-VMART", placeId: "bdcf341c-8b60-4945-829c-a5647036e5a9" },
  { name: "VIKAS NAGAR", placeId: "7ee6d851-0d92-4186-be20-910a783a3289" },
  { name: "VARANASI", placeId: "1634e32e-a4d2-4e58-bfc9-7d2dfddd4ee0" },
  { name: "VADODARA", placeId: "4de93888-c9a3-4a1e-ae01-fc44f3358e6b" },
  { name: "URBAN BANK ROAD", placeId: "986c4a6f-f9e6-4c12-a8e2-22a333c0529e" },
  {
    name: "UNNAO-SHAHGANJ BAZAAR",
    placeId: "2c7dd9c5-860d-4a2c-93a0-56ce4fe17f52"
  },
  { name: "UJJAIN", placeId: "630e961e-848f-4d8a-9538-95453b267c9f" },
  { name: "UDHAMPUR", placeId: "fb985bbf-60a7-4af5-8c32-25bead68c09d" },
  { name: "UDAIPUR", placeId: "b48b5b34-9c84-4649-86b3-dcd435493684" },
  { name: "THAKURGANJ", placeId: "d88629df-40b0-4c04-b507-041f14016e8c" },
  { name: "TELIBAGH", placeId: "2b59d7c0-47a6-4e02-bac7-4070ff529c77" },
  { name: "TAMLUK-MANIKTALA", placeId: "0527ffdd-4222-4d12-9c1e-0a74e7fa51e0" },
  { name: "SUPAUL", placeId: "12fa4980-409f-481e-8e4c-f36a03bdf2e9" },
  { name: "SULTANPUR", placeId: "54998d60-6085-40e1-843a-461133bd5ef5" },
  { name: "SRINAGAR", placeId: "ba01b508-bb2c-4128-8780-7f078ebde17e" },
  {
    name: "SOLAN-ANAND COMPLEX",
    placeId: "ac702fd9-4f2a-48ec-a8dc-fd24cddb1088"
  },
  { name: "SIWAN", placeId: "6b016924-49c2-4a6a-955a-249c5ddae11e" },
  { name: "SITAPUR", placeId: "4411653c-daf0-47cc-8bb6-83b76c43db56" },
  { name: "SITAMARHI", placeId: "189fe704-ed69-48c3-b70c-f015d6dfb759" },
  { name: "SILIGURI", placeId: "ef24e888-3133-444e-b063-213d79c8d777" },
  { name: "SIDHAULI", placeId: "3873fc7d-e70f-4c3c-b619-df0407536e65" },
  { name: "SHUKLAGANJ", placeId: "c77242d1-fafc-4636-92e4-16b318812c26" },
  { name: "SHIVPURI", placeId: "67117b0b-9807-4463-8e10-05b1f7fc8851" },
  { name: "SHEOHAR", placeId: "919cb067-132b-476d-b4ab-6f4b1817ff4d" },
  { name: "SHEIKHPURA", placeId: "fcc51e0e-a10f-4eef-b54e-b0bca8dd6de3" },
  { name: "SHANTIPUR", placeId: "b87a9011-52ae-48d6-b5a5-a0c945a613e6" },
  { name: "SHAHGANJ", placeId: "c250a7f0-b7aa-4a8c-a9cc-37451cd4f248" },
  { name: "SHAHAJAHANPUR", placeId: "799bd1ae-a746-408e-aa40-301c1221226d" },
  { name: "SASARAM", placeId: "6761aca8-458d-4fb4-a3d8-0b8eb25f6694" },
  { name: "SARAI MIR", placeId: "be3e9eba-fa82-4bed-861c-a9e9b48346b8" },
  { name: "SANGANER-JAIPUR", placeId: "51008c62-2454-4d74-ba95-6123d1f81a38" },
  { name: "SAMBALPUR", placeId: "5b86dbae-e562-4edb-b9bf-e947f2bc8e33" },
  { name: "SAMASTIPUR", placeId: "0a14e683-7333-4d8a-9341-e30cd3b7f403" },
  { name: "SAKET NAGAR", placeId: "c5d8f544-74e8-43a0-914e-1b42700d6740" },
  { name: "SAHARSA", placeId: "b2fa181c-283d-4d41-9408-2924f684f1c2" },
  {
    name: "SAHARANPUR-DELHI ROAD",
    placeId: "1feff961-ab2b-4c90-ab37-4430607ac39d"
  },
  { name: "SAHARANPUR", placeId: "02b6be58-959e-47eb-8337-5b29d92cc553" },
  { name: "SAGUNA MOR-PATNA", placeId: "e337c941-ae88-43cd-afa1-27e13d57918a" },
  { name: "SAGAR", placeId: "455bca2c-c729-41a9-bd34-f943b4b0d24a" },
  { name: "RUDRAPUR", placeId: "528ae3b1-c488-4d8c-8a7c-814322dc13f9" },
  { name: "REWA", placeId: "1a34a3e5-b818-436a-8b9a-474f6947d6dc" },
  { name: "RENUKOOT", placeId: "7fdb56dd-ab29-40ce-8589-2b47506da890" },
  { name: "RANCHI", placeId: "3be07c1c-67d4-4f48-8481-7623e2f5eab1" },
  { name: "RAMPUR", placeId: "23a67562-12f3-4618-a88b-de338274eaa7" },
  { name: "RAMGARH", placeId: "89623965-6ced-4410-b1e6-0c64a064469e" },
  { name: "RAMBAGH CHOWK", placeId: "b018ab6e-46f7-4095-8aaf-f6583c6dfe45" },
  { name: "RAJPURA-AGRA", placeId: "7ad76846-94c6-45c8-959c-97971970de2c" },
  { name: "RAJOURI", placeId: "229ebe8f-72af-4a2e-a7d0-37db20fce7c4" },
  { name: "RAJIV NAGAR", placeId: "d78aaab5-a609-4260-8d2a-02f6f250743f" },
  { name: "RAJENDER NAGAR", placeId: "367cba72-d575-4edf-bdea-b74596159897" },
  { name: "RAJAJIPURAM", placeId: "0b79c0f9-1211-4538-a134-056f7b35c4ea" },
  { name: "RAIGANJ-MG ROAD", placeId: "73cff264-e087-4346-bb4e-8db8f134c9a0" },
  { name: "RAIBARELI", placeId: "2139163a-bff3-4dc3-bd2c-d19671ecf655" },
  { name: "PURULIA", placeId: "8d36ef03-ed5e-4ac5-a0b0-a92407058165" },
  { name: "PURNIA", placeId: "6013dac2-4499-43b3-9836-65bd4b7cc1ce" },
  {
    name: "PREM NAGAR-BAREILLY",
    placeId: "d746dd0b-083d-48dd-be6e-c33dcdf94c31"
  },
  { name: "PILIBHIT", placeId: "a27397d4-6784-4e49-aeff-27d5f0194278" },
  { name: "PHUSRO", placeId: "59d45c21-1ae1-4342-b396-09581f2b9441" },
  { name: "PATNA-KURJI", placeId: "dfac3309-4c7a-42dc-b54e-595b96715ba7" },
  { name: "PATNA CITY", placeId: "6bbae1ad-c682-4cfc-b9f2-e157a807b184" },
  { name: "PATHANKOT", placeId: "ca55d3a5-00f6-4799-83fe-079ce3145588" },
  { name: "PARTAP GARH", placeId: "a1e644b5-1081-4d3c-a314-8691962884e8" },
  { name: "PALKI-LUCKNOW", placeId: "f2fa4e84-dd36-4206-9581-359f2969ad89" },
  {
    name: "PALAMPUR-CITY MALL",
    placeId: "2b7f4380-fe21-4642-9506-82be2ede261a"
  },
  { name: "PAHARIA", placeId: "205d1af2-10df-466b-873c-875dde4255c4" },
  { name: "PADRAUNA", placeId: "b32b35dd-329c-419b-b299-83db0bdac526" },
  { name: "PADARI BAZAR", placeId: "31d0989c-4ada-4b7f-abef-bb6617fdc786" },
  { name: "ORAI", placeId: "c62b792f-060c-4fca-87e4-e75ecde079af" },
  { name: "NAWADA", placeId: "89059fd8-4212-490c-96af-9afb62cf4109" },
  { name: "NAUBASTA-KANPUR", placeId: "917ff7ab-4fcd-44a2-8a12-0f3db94b3095" },
  { name: "NALBARI", placeId: "eca0500a-90f9-40fb-b0a9-a10b6d1c54e3" },
  { name: "NAGOUR", placeId: "6d0a16a6-8fe2-47fe-823f-0a8ffda321d9" },
  { name: "NAGAON", placeId: "a75635f5-8e6e-49d6-8d74-47eb284c17fe" },
  { name: "NABARANGPUR", placeId: "8a995835-fa7a-4c04-8818-f6e640411805" },
  {
    name: "MUZAFFARPUR-MARIPUR CHOWK",
    placeId: "140fcd7a-9ec2-42f7-8384-c46fab8b1046"
  },
  { name: "MUZAFFARPUR", placeId: "8ab65d35-89d1-4656-8c22-58691da90871" },
  { name: "MUZAFFARNAGAR", placeId: "cb2e1e3b-0385-4ba0-859c-515c029a8a95" },
  { name: "MURSHIDABAD", placeId: "175f3e14-3511-42b1-be8c-2e855b379215" },
  { name: "MURADABAD", placeId: "18e945d9-4d0c-408f-8081-3bea9b7d9c46" },
  { name: "MUNGER", placeId: "e2c7644f-49ba-4d3f-bb0f-b13cc0a0002c" },
  { name: "MUGHALSARAI", placeId: "9b4d32df-19ba-4580-a3d6-f2fedf88ac4f" },
  { name: "MOTIHARI", placeId: "c3381f41-dfbc-4204-b0f8-1806483d3e55" },
  { name: "MORVI", placeId: "facb4b2c-4964-40e6-9482-c3273efdd7b8" },
  { name: "MIRZAPUR", placeId: "967b0d63-68b6-4dc8-9ee3-022daed5df5f" },
  { name: "MEHSANA", placeId: "5f70bb5c-9a68-48a3-aaa7-7a5316f95dce" },
  { name: "MEERUT", placeId: "95926ba1-137f-41d5-9d32-206501350878" },
  { name: "MAU", placeId: "8050e20c-0367-477b-a929-fe6771645881" },
  { name: "MATHURA", placeId: "e8b24c0a-8909-44e3-b15b-7dd77b82fae6" },
  { name: "MANGLAUR", placeId: "4ed6452e-9dff-42dc-a75f-58b607dbe579" },
  { name: "MANGLAM", placeId: "11d08cfc-2e33-46a3-94e3-c1e25eb4aab6" },
  { name: "MAJRA-DEHRADUN", placeId: "79003b29-402d-4951-b173-0bde1329a454" },
  {
    name: "MAINPURI-STATION ROAD",
    placeId: "ca5fe6c1-df38-433e-a801-16b59e9383c4"
  },
  { name: "MAHARAJGANJ", placeId: "c09ab478-9edc-4829-a597-8f9e1a474271" },
  { name: "MADHUBANI", placeId: "f65e502c-1b69-436f-ac18-565196864f0b" },
  { name: "MADHEPURA", placeId: "f4d3b76e-6df2-4ea9-a2cb-16da69a9eb39" },
  { name: "LUXA", placeId: "4568c9a0-3b85-4185-91b6-8cfeb3774cf1" },
  {
    name: "LUCKNOW-RAJAJIPURAM 2",
    placeId: "0b912ddc-3c79-4d2e-a4ef-fe3abba0297c"
  },
  {
    name: "LUCKNOW-QAISARBAGH",
    placeId: "36e18375-b353-40c7-81ed-c299de24acac"
  },
  {
    name: "LUCKNOW-KHURRAM NAGAR",
    placeId: "d3a44f1e-db2f-46f7-81d5-213948bd73b8"
  },
  { name: "LUCKNOW-DUBAGGA", placeId: "1293d261-0486-47d7-821a-1e4ff647538d" },
  {
    name: "LUCKNOW-BUDHESHWAR",
    placeId: "6bb28bc9-ec7e-4d8b-9130-798d76024165"
  },
  { name: "LUCKNOW-BKT", placeId: "c17eb012-5a94-4a81-9f9c-8a6620753b46" },
  { name: "LUCKNOW-ASHIYANA", placeId: "2f70e8cc-be4c-489c-bf0d-adbb7635482d" },
  {
    name: "LUCKNOW-ARJUNGANJ",
    placeId: "da82d797-7b8e-429b-99c4-79fdc1c848ce"
  },
  { name: "LUCKNOW", placeId: "39c5c1af-8df1-4e43-ad8b-235803a0102f" },
  { name: "LOHARDAGA", placeId: "2075f946-7bfc-438f-a061-91863356de1a" },
  { name: "LAXMINAGAR", placeId: "77f25361-1800-4a91-aa25-67c15611f984" },
  { name: "LAWGARDEN", placeId: "fead0232-dc9c-4ca3-a0b0-61a6958cda82" },
  { name: "LATEHAR", placeId: "8619e4bc-3072-4ba6-86c5-061f559c0836" },
  { name: "LALGANJ", placeId: "c2493a04-1848-40c1-a0e0-20974244cec7" },
  {
    name: "LAL BANGLA-KANPUR",
    placeId: "091be3f5-18bb-4d2b-8421-5e0da31cdc9d"
  },
  { name: "LAKHISARAI", placeId: "44531f3e-948e-4282-aaf8-33c4e3e472db" },
  { name: "LAKHIMPUR", placeId: "a15a23b3-8240-4c9c-ae69-d293daa1f0f1" },
  { name: "LAJPATNAGAR", placeId: "ccf90a07-b284-4b9a-9871-ad088013b682" },
  {
    name: "KRISHNANAGAR-WEST BENGAL",
    placeId: "36b5f107-c77a-48f4-b487-b338fd45f84a"
  },
  { name: "KOTWALI", placeId: "024ffe33-8fae-4bfb-9b87-5f6ecd5669b7" },
  { name: "KOTA-RANGBARI", placeId: "136989c8-b446-4a13-948a-af111522fa56" },
  { name: "KOTA-KUNADI", placeId: "ffb7e4a9-2a10-4044-915f-52d0c1f1d314" },
  { name: "KOTA", placeId: "2ae57b5b-729e-4b31-a653-2e9e701581f1" },
  { name: "KOLKATA-BARASAT", placeId: "d127e5dc-f690-484d-89ad-2b07aad4cf4e" },
  {
    name: "KOHIMA-NORTH BLOCK",
    placeId: "27c9a36d-2d38-4c7e-b876-7ec1189e4198"
  },
  { name: "KISHANGANJ", placeId: "1c18a9b0-2d82-4f28-83f7-12bc8c6c4a0e" },
  {
    name: "KHARUPETIA-PANBARI ROAD",
    placeId: "b934636e-86a7-49cb-a67a-09147cfa6cae"
  },
  { name: "KHARAGPUR", placeId: "d6cd7bfd-fce5-4ed4-b594-4a77623b967f" },
  { name: "KHALILABAD", placeId: "2e9d9b0f-eabd-4c74-8118-dab59b6c4fc9" },
  { name: "KHAGARIA", placeId: "f1e096a0-5372-4cd1-a59d-7859d4b6e456" },
  { name: "KEONJHAR", placeId: "4b7720da-f2ea-4243-8b3b-22fd6fca7ffd" },
  { name: "KATHUA", placeId: "25b24fb6-22af-415d-8c67-3ad09db1509b" },
  { name: "KASHIPUR", placeId: "bd154728-3b1c-457e-8780-7d3483df73eb" },
  { name: "KANPUR-KALYANPUR", placeId: "535042ac-51c5-4c24-8f52-6fba36ca0e58" },
  { name: "KANPUR", placeId: "e81920bf-2235-4eba-898c-97dcf41a3ede" },
  { name: "KANNAUJ", placeId: "c8825dd4-931e-404e-bb24-2f85ef252afa" },
  { name: "KANKARBAGH-PATNA", placeId: "5c9a92e4-81cf-46b5-84f5-1349b712180b" },
  { name: "KANGRA-BUS STAND", placeId: "8a1c8cde-20a8-4787-82a4-94501708530c" },
  {
    name: "KALAPAHAR-GUWAHATI",
    placeId: "601ee846-8d7d-40a0-8309-23ae4b95d413"
  },
  { name: "KAHALGOAN", placeId: "512bf98e-a0ef-4f4d-9791-2b3b296988c8" },
  { name: "KACHI CHAWNI", placeId: "f37debf4-231d-41c9-9148-882fbcaf72d7" },
  { name: "JOWAI", placeId: "cb3db83a-3111-42cd-93c5-4548de442b98" },
  { name: "JORHAT", placeId: "ef6beafb-417d-4422-8747-b8d27d4c0e43" },
  { name: "JHARSUGUDA", placeId: "ad6cf92e-3457-4569-90c9-f9858ca2fc08" },
  { name: "JHANSI", placeId: "ab969a05-5fa9-4175-9e53-bb13324c40d4" },
  {
    name: "JHANGIRABAD-BHOPAL",
    placeId: "91909633-511d-4c80-adcc-976c31423887"
  },
  {
    name: "JEHANABAD-STATION ROAD",
    placeId: "6c562a91-05d2-4508-bb62-f9dc60c15956"
  },
  { name: "JAUNPUR", placeId: "bb949bc1-da76-4c08-9d50-7fc04837161c" },
  { name: "JAMUI", placeId: "08b73473-b7e6-4717-b8c1-eb0a9ef4e797" },
  { name: "JAMTARA", placeId: "1a3dc9f8-0e00-41e3-a3c0-b5e840aa5657" },
  {
    name: "JAMSHEDPUR-SAKCHI AMBAGAN",
    placeId: "e44ce232-fcce-41a7-9eab-d69446da865d"
  },
  { name: "JAMNAGAR", placeId: "7aeafa07-fb39-4e32-829c-0f861938dd10" },
  {
    name: "JAMMU-TALAB TILLO",
    placeId: "1dec083a-423e-4291-a3f0-9358a2eb5e7a"
  },
  { name: "JAMMU-KUNJWANI", placeId: "327790ea-12dc-48aa-bdd9-e9dfd6a13185" },
  { name: "JAMMU-JANIPUR", placeId: "94aafc0a-efcf-4052-bd0a-d880bb3a0b28" },
  { name: "JAMMU", placeId: "03dbd32f-80c7-41ff-862d-447ccf1d668c" },
  { name: "JAMALPUR", placeId: "285b8ff2-c7bf-4839-b20f-dab917aeb00f" },
  { name: "JALPAIGURI", placeId: "fbe1c064-dffd-4a50-b51a-67c25989329f" },
  { name: "JALANDHAR", placeId: "94b6d4b5-5862-41f7-a2fc-404c01aceea2" },
  { name: "JAIPUR-RAJAPARK", placeId: "5b0f6a86-a82e-4663-8c45-32d3091645cb" },
  { name: "JAIPUR-JHOTWARA", placeId: "b1e3a3e6-8391-41e0-8874-4666f38b4482" },
  {
    name: "JABALPUR-DAMOHNAKA",
    placeId: "a934c023-abb5-42a3-94be-1eb179a89b4f"
  },
  { name: "ITANAGAR", placeId: "cea931c9-741a-4aba-94aa-55638e03c9f5" },
  {
    name: "INDORE-MALWA MILL",
    placeId: "f96ed087-e8fc-49eb-bd86-1f3b519fdcd7"
  },
  {
    name: "INDORE-ANNAPURNA ROAD",
    placeId: "002fb58a-e2df-4520-b642-90938a998b2d"
  },
  { name: "HUSSAINGANJ", placeId: "ebc0d288-4c1d-4ca5-bc39-d52518a9ad1e" },
  {
    name: "HUSAINABAD-JAUNPUR",
    placeId: "63eeafed-489f-4e23-8f5f-85706ee1a768"
  },
  { name: "HIRAPUR", placeId: "af8e70ff-e808-4d96-8f32-1f37a223bf1b" },
  { name: "HATHRAS", placeId: "b2b047e3-18cb-4851-a576-39a586b56b54" },
  { name: "HARIDWAR", placeId: "cb4c2e10-4785-4d9e-9bf7-97a24e5a5638" },
  {
    name: "HARDOI-LUCKNOW ROAD",
    placeId: "ba0878ce-47b1-4d66-80aa-922ee0adcfc6"
  },
  { name: "HAMIRPUR", placeId: "e62112ca-a24a-4ed8-b05b-7417475cc790" },
  { name: "HALDWANI", placeId: "fc657767-25a8-48bc-94ac-68e497e33956" },
  { name: "HAJIPUR", placeId: "41f027c3-ff53-4474-a6fc-a3c3188a5572" },
  {
    name: "GWALIOR-SURYA NAGAR",
    placeId: "118a68b9-42e8-439f-930a-509872576aad"
  },
  { name: "GWALIOR-LASHKAR", placeId: "cd2aa67d-3f6b-438c-8bb8-8c1ec75ff6b3" },
  { name: "GURDASPUR", placeId: "8a563efc-bc88-46ca-8e1d-b9dce33fe4e5" },
  { name: "GUMLA", placeId: "736fcdf4-60fd-4dd2-83c7-e5f6a5b877a3" },
  {
    name: "GORAKHPUR-RUSTAMPUR",
    placeId: "7f022b52-3bbc-46e1-8b29-20f3fb4fac58"
  },
  {
    name: "GORAKHPUR-MEDICAL COLLEGE",
    placeId: "4e570ec1-0635-4bce-ade6-fb83761994f7"
  },
  { name: "GORAKHPUR", placeId: "cd95cf6b-717a-4d67-94dd-05bdf10043df" },
  { name: "GOPALGANJ", placeId: "4d01604e-f202-4b8b-ad42-6d419ae3f433" },
  { name: "GONDA", placeId: "f1960daa-a203-48ff-9a62-074b8c0c427c" },
  {
    name: "GODDA-BHAGALPUR ROAD",
    placeId: "268662a5-db92-445a-85f9-aa37dadf0b31"
  },
  { name: "GIRIDIH", placeId: "c595acc0-887a-48d8-9ed3-d7710b1bc60c" },
  { name: "GHAZIABAD", placeId: "277d6a11-40b4-4e4d-9327-8f80c7107e9a" },
  { name: "GAZIPUR", placeId: "9b422fa5-e9de-4d8d-9cb9-c2e8fbcd5a59" },
  { name: "GAURIGANJ", placeId: "0ef40c9a-936b-4541-86fe-f59b2bbb8c79" },
  { name: "GARHWA", placeId: "2c372532-cfa0-46a1-b639-5315a375021a" },
  { name: "GARH ROAD-MEERUT", placeId: "0c1390ae-ff26-4e8c-9d5b-38d6efbbc755" },
  { name: "GANDHIDHAM", placeId: "be08512a-7c85-4d3a-8f43-7b4ec589bd4e" },
  { name: "FIROZABAD", placeId: "e784bdaa-2cc8-444a-abfb-9b28511e74fe" },
  { name: "FATHEPUR", placeId: "5e4806ca-28d8-4125-858e-8373922fd32d" },
  { name: "FARRUKHABAD", placeId: "0a01892f-9704-4601-a1f9-604c02c587da" },
  { name: "FAIZABAD", placeId: "fdd9c8a9-6512-4928-bdf4-82927818daf2" },
  { name: "ETAWAH", placeId: "765a4ff1-26de-430d-9711-e0b80348aefa" },
  { name: "DURGAKUND", placeId: "dd91361e-41f4-4492-9f22-5bf7e074422e" },
  { name: "DUMKA", placeId: "7576d5d5-3988-4429-8792-ab2bbf3bca5f" },
  {
    name: "DIBRUGARH-JHALUKPARA",
    placeId: "deb6d08b-fdbb-4741-b6f3-db654f0fb2db"
  },
  { name: "DHULIYAN", placeId: "3ab97751-4e98-49c6-95cb-4de3adde91e7" },
  { name: "DHUBRI-GTB ROAD", placeId: "ddcfb6df-e572-4357-9e9a-0bab1cd4967e" },
  { name: "DHENKANAL", placeId: "ace75ade-a1d9-437c-a46d-2781253f77f3" },
  {
    name: "DHANBAD-SARAIDHELLA",
    placeId: "05d541ef-a6c9-4674-aac2-ab3cb03cb956"
  },
  {
    name: "DHANBAD-BANK MORE",
    placeId: "74c03d5d-d058-4b46-9227-d6e5736a1bf3"
  },
  { name: "DEORIA", placeId: "342fc66c-cc33-4dbc-ac31-d95b55a6b92a" },
  { name: "DEOGHAR", placeId: "2fb6d5d7-7b07-4bf2-a710-3d18f14d3b3b" },
  { name: "DELHI-NARELA", placeId: "eb36824b-b135-4097-a0f8-d71d2c626bbf" },
  { name: "DEHRADUN", placeId: "92bb9508-f493-4f8d-9f0e-f9e9eae517c1" },
  { name: "DAUD NAGAR", placeId: "803ab0fa-85fa-440b-b8f0-dfa1ca458158" },
  { name: "DARBHANGA", placeId: "ac2425b1-211b-463d-917a-89aeaa7aae11" },
  {
    name: "DALTONGANJ-REDMA CHOWK",
    placeId: "07fca67c-5c2e-43f9-91a6-0f59b110fe25"
  },
  {
    name: "DALANWALA-DEHRADUN",
    placeId: "88f3cd36-7ba9-4598-aded-b6bcdb562a2d"
  },
  { name: "CUTTACK", placeId: "1e008aed-9eb8-4e3f-8af0-45ba4ba51ca2" },
  { name: "COOCH BEHAR", placeId: "a91b215b-f0a9-45dc-a6a8-f097e0aab2f3" },
  { name: "CONTAI", placeId: "43bfd7a8-3f6f-4944-95d8-2da63a5e09b6" },
  { name: "CHURCH ROAD", placeId: "f15514d2-1727-4ee7-ba5c-24364da5d907" },
  { name: "CHOWK", placeId: "5861fadd-8a76-4db3-8540-d6a533c2891d" },
  { name: "CHINHAT-LUCKNOW", placeId: "97ac649b-5fbe-403e-9a0c-9db024daa999" },
  { name: "CHHAPRA", placeId: "2db9104c-e441-4cff-b633-1a7375f954e3" },
  { name: "CHANDIGARH", placeId: "e0a354ae-1b65-4dfd-8e48-1b8f50e7b9bc" },
  { name: "CHAKIA", placeId: "ede6028f-43b9-45be-ae57-2f04f5ff9c1b" },
  { name: "CHAAS", placeId: "0e31856a-fed2-456c-95bd-f66c8d51bbea" },
  { name: "CANT ROAD", placeId: "e0bebf2b-0617-4b97-8428-fd7ee4d0d9c7" },
  { name: "BUXAR", placeId: "6ca2c8f3-e906-4deb-9a02-39a3ad4f8ac0" },
  { name: "BURDWAN", placeId: "3f62211c-958c-4180-adfd-639e482f2379" },
  {
    name: "BULANDSHAHR-RAJA BABU RD",
    placeId: "756c7257-3e65-4c67-b8c5-9db63e451cb6"
  },
  {
    name: "BORING ROAD-PATNA",
    placeId: "f0431383-c725-4660-9894-036a2b0fa9fa"
  },
  {
    name: "BISWANATH CHARIALI",
    placeId: "5e1bbd2b-847a-43d9-8cc7-eaefb0939e0d"
  },
  {
    name: "BISALPUR-EIDGAH CHAURAHA",
    placeId: "c9db3311-f0f8-4230-8f3b-0cdf908c72b4"
  },
  {
    name: "BIRSA CHOWK-RANCHI",
    placeId: "ce3bcfc1-7a13-4bd3-9376-9d15d57eb0f0"
  },
  { name: "BIJNOR", placeId: "0d2ad642-8870-4663-b251-4b8a3393a41c" },
  { name: "BHUBANESWAR", placeId: "c118c653-2cea-4a67-94f2-3fd22bd82b92" },
  { name: "BHOPAL-KAROND", placeId: "b755d396-be8e-4927-91d7-f771e51c1bd0" },
  {
    name: "BHOPAL-CHUNABHATTI",
    placeId: "50bdbd0a-345e-42aa-8cd8-a1ec43176d58"
  },
  { name: "BHOPAL", placeId: "2a8f6a38-da63-4398-86bf-fe3397bb8c86" },
  { name: "BHOJUBEER", placeId: "12a0cd00-969d-4ab2-a9e8-2604e825e30c" },
  { name: "BHANGEL", placeId: "4d1baa54-b1e7-4cda-9f62-d59e153eeabd" },
  { name: "BHAGESHWAR NAGAR", placeId: "e1fd9e2d-4459-46f0-8dc7-3cf1d9d4a563" },
  { name: "BHAGALPUR", placeId: "1960ba66-5219-4aa2-a052-514d3b0ebed2" },
  { name: "BHADRAK", placeId: "4baf0d9e-00f4-4f4b-b266-68c9046f0070" },
  { name: "BHABUA", placeId: "4913dab2-bae3-4832-82ff-1c47e235ece9" },
  { name: "BETTIAH", placeId: "0d753188-d1a8-4d33-8619-863e76950184" },
  { name: "BERHAMPUR", placeId: "7ab98e55-2ca8-4af0-9710-270f294a2a9b" },
  { name: "BERASIA", placeId: "dab2851e-8d2e-4e6d-a3d6-51a16e5d4ca3" },
  { name: "BEGUSARAI", placeId: "90413b14-bd8b-4b28-9b7d-ad71f735807b" },
  { name: "BASTI", placeId: "ea73f6e7-0492-458e-b1e6-251c29522234" },
  { name: "BARPETA ROAD", placeId: "b8072f72-6ac5-4816-a20e-9766a84cf633" },
  { name: "BARIPADA", placeId: "36746e97-eb19-44d8-827d-99022d7620b9" },
  { name: "BAREILLY", placeId: "ff1ce328-716b-4ea5-a1db-2c8f026920ad" },
  { name: "BARABANKI", placeId: "8b001d2a-914a-4a64-a7a5-0080a6b50806" },
  { name: "BANKA", placeId: "85e8b2bf-bb0f-472b-b345-9dd54740cd4b" },
  { name: "BANDEL", placeId: "48504e3e-4010-4436-868e-4b290187d808" },
  { name: "BANDA", placeId: "dffa60ca-ad8e-47d6-9e34-5a7a00e65cae" },
  { name: "BALIA", placeId: "a0a8bde2-d9ba-4ff9-8259-94735f03aee0" },
  { name: "BAHRAICH", placeId: "6b761cb1-4609-4fac-8e7b-e4ad92e8903c" },
  { name: "BADAUN", placeId: "9354ba70-4c58-40d5-b788-4427beab96d7" },
  { name: "AZAMGARH", placeId: "413fe394-d28d-4aaa-8a00-007b70cc4016" },
  { name: "AURANGABAD", placeId: "112ab68d-eb5d-46b1-b9bb-49573f9d26c4" },
  { name: "ARRAH", placeId: "ef0d7acd-942d-4288-8d75-407e5f46c56f" },
  { name: "ARAMBAGH", placeId: "0b02b82f-53ea-477d-872e-82f8663214ab" },
  { name: "AMROHA", placeId: "e9c7e0e7-3249-4a61-99c7-ccd47012d2ca" },
  { name: "AMBALA", placeId: "5ed0c2ec-170f-4388-89e1-9175cc339c68" },
  { name: "ALLAHABAD", placeId: "4a280d3e-a44d-4de6-9449-80aaeaf91b02" },
  { name: "ALIGARH", placeId: "d70581ce-0a8c-42f3-b23f-bb0be51bcda7" },
  { name: "AKBARPUR", placeId: "bed1a78a-cf3d-4b9a-91e6-43c886a3f1ca" },
  { name: "AJMER", placeId: "fc65fe53-7dc9-4cba-aad3-9852306825e6" },
  {
    name: "AIRPORT ROAD-LUCKNOW",
    placeId: "39dc3907-7d07-4200-88aa-edb9ba0eface"
  },
  { name: "AGRA-SIKANDRA", placeId: "fab159d4-1497-4f08-8783-24a4a315f6af" },
  { name: "AGRA", placeId: "eec991a7-234e-45d6-9e93-9d646fee1e00" },
  { name: "ADITYAPUR", placeId: "16523f4d-cf17-4cb8-9475-adc948323272" }
];
  var t=test()

async function test() {
//   for (let index = 0; index < bpartners.length; index++) {
//     try {
//       const element = bpartners[index];
//       var res = await deleteBP(element.uuid);
//       console.log(index, ":", res);
//     } catch (error) {
//       console.log("error:", index);
//     }
//   }
//   for (let index = 0; index < allPlace.length; index++) {
    try {
      const element = allPlace[585];
      
      var res = await getPartner(element.placeId);
      if(res && res.length==0){
          var pres =await deletePlace(element.placeId)
          console.log( res.length,pres.data.name);
      }

    } catch (error) {
      console.log("error:");
    }
//   }
}

async function deleteBP(uuid) {
  var options = {
    method: "POST",
    uri: `http://apis.fretron.com/business-partners/v2/remove/partners`,
    json: true,
    body: [uuid],
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  };
  return await request(options);
}
// request(`http://apis.fretron.com/shipment-view/places/page/places?size=1000`, {
//   json: true,
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: token
//   }
// })
//   .then(res => {
//     console.log(
//       JSON.stringify(
//         res.map(item => ({ name: item.name, placeId: item.placeId }))
//       )
//     );
//   })
//   .catch(err => console.log(err));

async function getPartner(uuid) {
    var filter={"places.placeId.keyword":[uuid]}
    var options = {
      method: "GET",
      uri: `http://apis.fretron.com/shipment-view/bpartners/partners?size=50&from=0&filters=${encodeURIComponent(JSON.stringify(filter))}`,
      json: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    };
    return await request(options);
  }
async function deletePlace(uuid) {
    var options = {
      method: "DELETE",
      uri: `http://apis.fretron.com/place-manager/v2/place/${uuid}`,
      json: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    };
    return await request(options);
  }