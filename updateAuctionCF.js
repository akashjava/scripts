var request = require("request-promise");
var token =
  "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODE0MTkwMTgsInVzZXJJZCI6IjAwZTEzODAyLTI3ZjEtNGM4OC04ZmIyLWRkN2VjMmM3NmZkNSIsImVtYWlsIjoiYWthc2guZHV0dGFAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI5Nzc2MjE3NzY5Iiwib3JnSWQiOiJlZjMwMDY4My05MDFiLTQ3NzQtYmYwZS05NTVkNDllNzk2YmMiLCJuYW1lIjoiQUtBU0ggRFVUVEEiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.1N36CLsukuaJE0wiwCPFVGTGi3DpXZYT2Vawd43a10s";
var auction = {
  orderId: "PO3001941552",
  customFields: null,
  origin: {
    hubId: null,
    boundary: null,
    address: "MANDIDEEP ,INDIA",
    accessibility: "private",
    addedBy: "ef300683-901b-4774-bf0e-955d49e796bc",
    center: {
      latitude: 23.0987029,
      longitude: 77.5050016
    },
    suggestedRadius: 100000,
    isOwned: null,
    centerCoordinates: [77.5050016, 23.0987029],
    placeId: "8b34bf52-9625-4342-a41a-b8cf0694c497",
    geoJsonBoundry: null,
    externalId: "12MNDD",
    source: "GOOGLE",
    places: [],
    viewport: {
      southwest: {
        latitude: 22.50191718,
        longitude: 76.767702452
      },
      northeast: {
        latitude: 23.69548862,
        longitude: 78.242300748
      }
    },
    district: null,
    name: "MANDIDEEP",
    state: null,
    category: "Hub",
    subDistrict: null
  },
  destination: {
    hubId: null,
    boundary: null,
    address: "KOLKATA ,INDIA",
    accessibility: "private",
    addedBy: "ef300683-901b-4774-bf0e-955d49e796bc",
    center: {
      latitude: 22.5726,
      longitude: 88.3639
    },
    suggestedRadius: 100000,
    isOwned: null,
    centerCoordinates: [88.3639, 22.5726],
    placeId: "318f154d-e672-4e2e-868d-d47d0161e938",
    geoJsonBoundry: null,
    externalId: "25KLKT",
    source: "GOOGLE",
    places: [],
    viewport: {
      southwest: {
        latitude: 21.97581428,
        longitude: 87.626600852
      },
      northeast: {
        latitude: 23.16938572,
        longitude: 89.101199148
      }
    },
    district: null,
    name: "KOLKATA",
    state: null,
    category: "Hub",
    subDistrict: null
  },
  isShowTopRankToOthers: null,
  updates: {
    resourceId: "8f5d0b20-ec66-4cbc-bcee-4968a41be472",
    updatedBy: "USER",
    sourceOfInformation: "Auction",
    description:
      "Submit Bid, Amount 58000.0 for SHREE SHYAM ROADLINES, vehicleType CONT. (6W)_7MT_32*8*10.",
    forwardReasons: ["auction.bid.submitted.event"],
    time: 1581423738730,
    forwardedFrom: "ee4cc4a6-8db2-49e2-97a2-545943114909",
    userId: "a10ca547-4226-4056-889b-1317cabceff7",
    uuid: "62fd8b97-1aa7-4cba-a721-d0da1bfa8492",
    resourceType: "Auction",
    updateType: null
  },
  uuid: "8f5d0b20-ec66-4cbc-bcee-4968a41be472",
  purchaseEnquiries: ["c3a00ba7-47a1-4b0c-8ed1-71c64853068c"],
  branch: {
    address: "PLOT NO-150, SECTOR-C, NEAR ESI HOSPITAL,INDERPURI BHOPAL(M.P)",
    updatedBy: "d1b5a45c-9005-4061-a5f4-411dec2bef88",
    regionName: "GURUGRAM REGION",
    externalId: "3310",
    branchName: "BHOPAL",
    type: ["Operation"],
    updates: {
      resourceId: "a1734cba-04f4-4ed7-9ea9-4d19c96748d1",
      updatedBy: "USER",
      sourceOfInformation: null,
      description: null,
      forwardReasons: ["office.created"],
      time: 1566210241552,
      forwardedFrom: null,
      userId: "d1b5a45c-9005-4061-a5f4-411dec2bef88",
      uuid: "3db32704-f41d-4d26-a1ff-00b0e9160a11",
      resourceType: "OrgOffice",
      updateType: null
    },
    orgId: "ef300683-901b-4774-bf0e-955d49e796bc",
    geoLocation: null,
    name: "BHOPAL",
    _id: "a1734cba-04f4-4ed7-9ea9-4d19c96748d1",
    zoneName: "BU-North",
    contacts: [
      {
        emails: [],
        address: null,
        mobileNumbers: [],
        mobileNumber: null,
        name: "BHOPAL",
        type: null
      }
    ]
  },
  orgId: "ef300683-901b-4774-bf0e-955d49e796bc",
  freightType: "perVehicle",
  alternateDestinations: [],
  allowedVehicleTypes: ["CONT. (6W)_7MT_32*8*10"],
  alternateOrigins: [],
  totalQuantity: null,
  completedRounds: null,
  price: 58000,
  isConsiderReferencePrice: true,
  allowedMaterial: ["Cosmetic Goods"],
  createDate: 1581423066033,
  externalId: null,
  customerName: "PROCTER AND GAMBLE HOME PRODUCTS",
  placedQuantity: null,
  allowedTransporters: [
    "3984229c-9990-4211-b525-15c77a5be36b",
    "c935c042-c1a0-4a98-b057-11e98e2d226b",
    "c1ae01a4-d306-453f-a2d9-3ebbc64aeb9b",
    "da197df6-5fa2-462d-84f3-56db2de731d2",
    "bf4f665c-93d5-4de4-a805-6f3c3ab11ef8",
    "3e000b8c-5ce0-4037-aaec-a5a5c1de197f",
    "546f70e0-f281-4775-8edd-eaab300bf291",
    "ee4cc4a6-8db2-49e2-97a2-545943114909",
    "8f77d8b6-ab7e-4555-b33b-27c977489a5c",
    "0ee83261-4293-453c-a16c-8d90b73d62ef",
    "d8c0139a-14aa-4036-b7b5-6bee59bcb890",
    "d0837595-066b-4010-b69d-b35696e40a0d",
    "9948d08f-2483-420b-a4be-8a82ceb69ec3",
    "94870a2b-233a-4078-ac4c-706682ec2be0",
    "37c68cf7-2909-4903-8714-f842986e08fc",
    "3bc831e7-1b2d-4211-b539-26aa6143fcac",
    "21102655-68d7-4792-a76b-98ac16624daf",
    "36c30e0c-a363-40cc-8cdc-65f8bd82c27d",
    "86f016eb-ec41-4769-a42b-7f9714ba9b30",
    "d6c356ca-bb50-4ef7-8441-f78daf5befce",
    "1519f716-439d-4abe-9c5a-7394df9cf33c",
    "898e588f-e689-4d28-8ac6-5f049c5756bd",
    "309c8380-877b-4bc1-b84f-9df9b3973290",
    "312a0e8e-73e1-4900-b5aa-62abc6490a04",
    "a671ed18-6b80-468f-9b03-ebe7d20a11f4",
    "75a59164-5cbf-4934-b3a6-7b6602dd47d9",
    "f4b8d278-65f6-41c0-bfe5-67d53de94a91",
    "0b7d4535-91b2-49d1-9864-9dd92e5ce211",
    "0e295e5a-0ae7-4a3e-865c-f743d63f979f",
    "62eb9c0f-0077-47e8-8c28-715fc9c23379",
    "f9c664ba-5334-455b-ba04-aaa9f3e07070",
    "b62f7649-600a-4ba9-b6a6-163e3470db38",
    "eea1601e-b4f0-4463-868e-b028ccd249f0",
    "9b2f93a0-0a3f-406a-a90a-18258866479a",
    "7923159d-8d07-4812-b765-96087fc54265",
    "ee28b423-fc24-4a6f-b194-93cc6ca86b6c",
    "e52a2e68-ccec-4159-95c2-a76fa6963fd5",
    "d60665e5-aa31-41db-9ae7-5d4a4e909e2b",
    "2975094c-2d0e-45d5-96c2-0144b6e779cd",
    "b0533572-342c-4ccb-9f5b-21a9ef2f7e5e",
    "4ecde44f-580f-48e1-9cf8-0b11ca0f9189",
    "ec55cc3a-8cd6-405c-842e-06bd673ca0c0",
    "458f6dcf-1b40-4620-b475-3d2f90a99909",
    "80279a4b-7adf-4dea-9adc-703b5caac6c9",
    "16f409a0-6138-4f7e-a416-4ba05f3cdbbf",
    "a7d1104a-7507-4ce8-9365-140a2c6c520c",
    "61648f09-bd69-4e5c-bb05-9ef352accda9",
    "5c833308-b19a-445b-a776-2372f2c79cb3",
    "5655f364-7d8f-4f43-b0c2-b51908cf8877"
  ],
  statusDescription: null,
  placementDate: 1581532200000,
  route: "MANDIDEEP-KOLKATA",
  round: {
    roundNumber: 1,
    startTime: 1581423057682,
    endTime: 1581468057682,
    status: "PLANNED"
  },
  isNegotiable: true,
  allocatedVehicles: 0,
  secondaryStatus: "OPEN",
  numberOfVehicles: 5,
  bids: [
    {
      businessPartnerId: "3984229c-9990-4211-b525-15c77a5be36b",
      amount: null,
      partnerName: "SHALIMAR GOODS CARRIERS",
      partnerExternalId: "0001018108",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: null,
      contacts: ["9830259357"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "c935c042-c1a0-4a98-b057-11e98e2d226b",
      amount: null,
      partnerName: "INDIA KING ROADWAYS",
      partnerExternalId: "0001021805",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: null,
      contacts: ["9467671503", "9560780530"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "c1ae01a4-d306-453f-a2d9-3ebbc64aeb9b",
      amount: null,
      partnerName: "HUMERA TRANSPORT",
      partnerExternalId: "0001027548",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMIT15 KUMAR",
      contacts: ["9022884965"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "da197df6-5fa2-462d-84f3-56db2de731d2",
      amount: null,
      partnerName: "DHARAM PAL",
      partnerExternalId: "0020152788",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: null,
      contacts: ["8053955005"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "bf4f665c-93d5-4de4-a805-6f3c3ab11ef8",
      amount: null,
      partnerName: "MANSUKH LOGISTIC",
      partnerExternalId: "0001017952",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMIT15 KUMAR",
      contacts: ["8839062448", "9301241755"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "3e000b8c-5ce0-4037-aaec-a5a5c1de197f",
      amount: null,
      partnerName: "KRIPAL ROAD WAYS",
      partnerExternalId: "0001028472",
      source: "Agent",
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: 1581423408989,
      vendorExecutive: "AMARJEET SINGH",
      contacts: ["9575976434"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: "NO_VEHICLE"
    },
    {
      businessPartnerId: "546f70e0-f281-4775-8edd-eaab300bf291",
      amount: null,
      partnerName: "MANJINDER ROAD LINES",
      partnerExternalId: "0001022269",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: null,
      contacts: ["9009790010", "9009790011"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "ee4cc4a6-8db2-49e2-97a2-545943114909",
      amount: 58000,
      partnerName: "SHREE SHYAM ROADLINES",
      partnerExternalId: "0001024275",
      source: "Auction",
      purchaseOrderId: null,
      numberOfVehicles: 3,
      rank: 2,
      time: 1581423738730,
      vendorExecutive: "AMIT15 KUMAR",
      contacts: ["9522072777", "9522073777", "9813485208"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: "PENDING"
    },
    {
      businessPartnerId: "8f77d8b6-ab7e-4555-b33b-27c977489a5c",
      amount: null,
      partnerName: "JTT ROAD LINES",
      partnerExternalId: "0001022368",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMIT15 KUMAR",
      contacts: ["7772961777", "9827447801"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "0ee83261-4293-453c-a16c-8d90b73d62ef",
      amount: null,
      partnerName: "NEW SHALIMAR ROADWAYS",
      partnerExternalId: "0020413622",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMIT15 KUMAR",
      contacts: ["8839164474", "8889099936"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "d8c0139a-14aa-4036-b7b5-6bee59bcb890",
      amount: null,
      partnerName: "SAJIDALI MOHD ARIF QURESHI",
      partnerExternalId: "0020115030",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: null,
      contacts: ["9987284965"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "d0837595-066b-4010-b69d-b35696e40a0d",
      amount: null,
      partnerName: "SINGAL TRANSPORT CORP.",
      partnerExternalId: "0001001715",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMIT15 KUMAR",
      contacts: ["7489232729", "7925736204"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "9948d08f-2483-420b-a4be-8a82ceb69ec3",
      amount: null,
      partnerName: "GANI ROAD WAYS ALL INDIA TRANSPORT",
      partnerExternalId: "0001021285",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMIT15 KUMAR",
      contacts: ["9319328786", "9759841555"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "94870a2b-233a-4078-ac4c-706682ec2be0",
      amount: null,
      partnerName: "JOY EXPRESS LOGISTICS",
      partnerExternalId: "0001025740",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMIT15 KUMAR",
      contacts: ["7024368770", "8103435246", "8319819345", "9329219082"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "37c68cf7-2909-4903-8714-f842986e08fc",
      amount: null,
      partnerName: "NEW MRL LOGISTIC",
      partnerExternalId: "0001026425",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMIT15 KUMAR",
      contacts: ["7247656267", "9009790011", "9875338379", "9914630194"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "3bc831e7-1b2d-4211-b539-26aa6143fcac",
      amount: 58000,
      partnerName: "PREETI ROADLINES",
      partnerExternalId: "0001025307",
      source: "Agent",
      purchaseOrderId: null,
      numberOfVehicles: 2,
      rank: 1,
      time: 1581423427256,
      vendorExecutive: "AMARJEET SINGH",
      contacts: ["7015965294", "9518294299"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: "PENDING"
    },
    {
      businessPartnerId: "21102655-68d7-4792-a76b-98ac16624daf",
      amount: null,
      partnerName: "PRABHAT GIRI CONTAINER SERVICE",
      partnerExternalId: "0001020383",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMIT15 KUMAR",
      contacts: ["7987725654", "9039732455"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "36c30e0c-a363-40cc-8cdc-65f8bd82c27d",
      amount: null,
      partnerName: "AYAN TRANSPORT SERVICE",
      partnerExternalId: "0001026778",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMARJEET SINGH",
      contacts: ["9892678290"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "86f016eb-ec41-4769-a42b-7f9714ba9b30",
      amount: null,
      partnerName: "SHIV PRIYA LOGISTICS INDIA",
      partnerExternalId: "0001022492",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMARJEET SINGH",
      contacts: ["9111105517", "9685168857"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "d6c356ca-bb50-4ef7-8441-f78daf5befce",
      amount: null,
      partnerName: "MOHD SARWAR",
      partnerExternalId: "0020447567",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: null,
      contacts: ["9171244151"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "1519f716-439d-4abe-9c5a-7394df9cf33c",
      amount: null,
      partnerName: "PAWAN SINGH",
      partnerExternalId: "0020442500",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: null,
      contacts: ["9812398123"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "898e588f-e689-4d28-8ac6-5f049c5756bd",
      amount: null,
      partnerName: "DATTATRAY PANDURANG CHAUDHRY",
      partnerExternalId: "0020474277",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: null,
      contacts: ["8856988669"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "309c8380-877b-4bc1-b84f-9df9b3973290",
      amount: null,
      partnerName: "NEW ROAD TRANSPORT ORGANISATION",
      partnerExternalId: "0001012310",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMIT15 KUMAR",
      contacts: ["9300813126"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "312a0e8e-73e1-4900-b5aa-62abc6490a04",
      amount: null,
      partnerName: "AZAD ROAD LINES",
      partnerExternalId: "0001025782",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMIT15 KUMAR",
      contacts: ["7489496750", "9131811713"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "a671ed18-6b80-468f-9b03-ebe7d20a11f4",
      amount: null,
      partnerName: "KHARSARI ROAD LINES",
      partnerExternalId: "0001025159",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: null,
      contacts: ["9584381111"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "75a59164-5cbf-4934-b3a6-7b6602dd47d9",
      amount: null,
      partnerName: "MAHENDRA PRATAP DUBEY",
      partnerExternalId: "0020455670",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: null,
      contacts: ["9812398123"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "f4b8d278-65f6-41c0-bfe5-67d53de94a91",
      amount: null,
      partnerName: "ARYA LOGISTICS",
      partnerExternalId: "0001026294",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMIT15 KUMAR",
      contacts: ["8000175746", "9023897598"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "0b7d4535-91b2-49d1-9864-9dd92e5ce211",
      amount: null,
      partnerName: "CHOUDHARY GOLDEN",
      partnerExternalId: "0001020739",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMARJEET SINGH",
      contacts: ["9691444975"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "0e295e5a-0ae7-4a3e-865c-f743d63f979f",
      amount: null,
      partnerName: "SHAN MOHD",
      partnerExternalId: "0020303843",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: null,
      contacts: ["9759377945", "9832358222"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "62eb9c0f-0077-47e8-8c28-715fc9c23379",
      amount: null,
      partnerName: "NAJAKAT ALI",
      partnerExternalId: "0020340224",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: null,
      contacts: ["9319393786"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "f9c664ba-5334-455b-ba04-aaa9f3e07070",
      amount: null,
      partnerName: "MANOJ TEKACHANO SHARMA",
      partnerExternalId: "0020360762",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: null,
      contacts: ["8192976799"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "b62f7649-600a-4ba9-b6a6-163e3470db38",
      amount: null,
      partnerName: "MANJINDER LOGISTIC",
      partnerExternalId: "0001022270",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: null,
      contacts: ["9009790010"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "eea1601e-b4f0-4463-868e-b028ccd249f0",
      amount: null,
      partnerName: "KHURJA MEERUT ROADWAYS",
      partnerExternalId: "0001000712",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMARJEET SINGH",
      contacts: ["9301149693", "9754772262"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "9b2f93a0-0a3f-406a-a90a-18258866479a",
      amount: null,
      partnerName: "ROHIL ROADWAYS",
      partnerExternalId: "0001017254",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMARJEET SINGH",
      contacts: ["9098804243"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "7923159d-8d07-4812-b765-96087fc54265",
      amount: null,
      partnerName: "BRIGHT ROAD LINES",
      partnerExternalId: "0001021705",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMIT15 KUMAR",
      contacts: ["7509911233", "7987178046", "9893654327"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "ee28b423-fc24-4a6f-b194-93cc6ca86b6c",
      amount: null,
      partnerName: "CHURU CONTAINER SERVICE",
      partnerExternalId: "0001020058",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMARJEET SINGH",
      contacts: ["8962932004", "9340394466"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "e52a2e68-ccec-4159-95c2-a76fa6963fd5",
      amount: null,
      partnerName: "BEST CONTAINER SERVICE",
      partnerExternalId: "0001019447",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: null,
      contacts: ["9021150660", "9642950660"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "d60665e5-aa31-41db-9ae7-5d4a4e909e2b",
      amount: null,
      partnerName: "SONU AUTO CARRIER",
      partnerExternalId: "0020287465",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: null,
      contacts: ["9825038468"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "2975094c-2d0e-45d5-96c2-0144b6e779cd",
      amount: null,
      partnerName: "ZAKIR HUSAIN",
      partnerExternalId: "0020356917",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: null,
      contacts: ["9641258221"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "b0533572-342c-4ccb-9f5b-21a9ef2f7e5e",
      amount: null,
      partnerName: "SOM PAL SINGH",
      partnerExternalId: "0020113124",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: null,
      contacts: ["9884804471"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "4ecde44f-580f-48e1-9cf8-0b11ca0f9189",
      amount: null,
      partnerName: "MARUTI FRIEGHT CARRIER",
      partnerExternalId: "0001022151",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMARJEET SINGH",
      contacts: ["9510964890"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "ec55cc3a-8cd6-405c-842e-06bd673ca0c0",
      amount: null,
      partnerName: "ROOKANE ALAM",
      partnerExternalId: "0020330025",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: null,
      contacts: ["9456453782"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "458f6dcf-1b40-4620-b475-3d2f90a99909",
      amount: null,
      partnerName: "SURESH KUMAR",
      partnerExternalId: "0020453656",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMARJEET SINGH",
      contacts: ["9962750867"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "80279a4b-7adf-4dea-9adc-703b5caac6c9",
      amount: null,
      partnerName: "THE GOODWILL TRANSPORT CO.",
      partnerExternalId: "0001021302",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMARJEET SINGH",
      contacts: ["7972683431"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "16f409a0-6138-4f7e-a416-4ba05f3cdbbf",
      amount: null,
      partnerName: "SUPER ALL INDIA TRANSPORT CO.",
      partnerExternalId: "0001018440",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMIT15 KUMAR",
      contacts: ["9084302222", "9302282222"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "a7d1104a-7507-4ce8-9365-140a2c6c520c",
      amount: null,
      partnerName: "RIZA TRANSPORT COMPANY",
      partnerExternalId: "0001026833",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMIT15 KUMAR",
      contacts: ["9758861286"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "61648f09-bd69-4e5c-bb05-9ef352accda9",
      amount: null,
      partnerName: "MB LOGISTICS",
      partnerExternalId: "0001026409",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: "AMIT15 KUMAR",
      contacts: ["9171244151"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "5c833308-b19a-445b-a776-2372f2c79cb3",
      amount: null,
      partnerName: "DARCL APP",
      partnerExternalId: "0001020124",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: null,
      rank: null,
      time: null,
      vendorExecutive: null,
      contacts: ["7015993368", "7021475645"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: null
    },
    {
      businessPartnerId: "5655f364-7d8f-4f43-b0c2-b51908cf8877",
      amount: 62000,
      partnerName: "INDIA KING ROADWAYS",
      partnerExternalId: "0001020502",
      source: null,
      purchaseOrderId: null,
      numberOfVehicles: 1,
      rank: 3,
      time: 1581423402148,
      vendorExecutive: "AMIT15 KUMAR",
      contacts: ["9681030888"],
      vehicleType: "CONT. (6W)_7MT_32*8*10",
      status: "PENDING"
    }
  ],
  isCritical: null,
  tnCs: [],
  remarks: [],
  status: "OPEN"
};
var auctions=[]

var t = test();
async function test() {
  
  // var pe = await getPEOrder();
  // var so = await getSalesOrder(pe[0].salesOrders);
  // var cfs = so[0].customFields;
  // var dlCF = cfs.find(cf => cf.fieldKey == "DarclLane");
  // var up =await updateCf(auction.uuid,dlCF)
  // console.log(up.data);
  auctions = await getAuctions();
  for (let i = 0; i < auctions.length; i++) {
    var res = await updateAuction(auctions[0])
    console.log(i)
  }
}
async function getAuctions() {
  var res =await request(
    `http://apis.fretron.com/order-manager/auctions/v1/on-going/auctions?limit=100&offset=0&filters=${encodeURIComponent(
      JSON.stringify({"secondaryStatus":["OPEN"]})
    )}`,
    {
      json: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    }
  );
  return res.data;
}
 
async function getPEOrder(orderId) {
  return await request({
    method: "GET",
    uri: `http://apis.fretron.com/shipment-view/purchases/orders?limit=50&filters=${encodeURIComponent(
      JSON.stringify({
        orderType: ["Enquiry"],
        uuid: auction.purchaseEnquiries
      })
    )}`,
    json: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
}
async function getSalesOrder(orderIds) {
  return await request({
    method: "GET",
    uri: `http://apis.fretron.com/shipment-view/sales/orders?limit=50&&filters=${encodeURIComponent(
      JSON.stringify({ orderType: ["Order"], uuid: orderIds })
    )}`,
    json: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
}
async function updateCf(orderId, cfs) {
  return await request({
    uri:
      `http://apis.fretron.com/order-manager/auctions/v1/auction/${orderId}/custom-field`,
    method: "POST",
    body: cfs,
    json: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
  //   if(res){
  //       console.log(bpId)
  //   }
}
async function updateAuction(data) {
  return await request({
    uri:
      `http://apis.fretron.com/automate/autoapi/run/a331ef3a-dbf9-442a-8a2f-ee13c1476e27`,
    method: "POST",
    body: data,
    json: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
}
