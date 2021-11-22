var json = {
  uuid: null,
  name: "ship",
  type: "object",
  fields: [
    {
      uuid: null,
      name: "Address",
      type: "object",
      fields: [
        {
          uuid: null,
          name: "Address Line",
          type: "string",
          fields: [],
          itemType: null,
          options: [],
          logicalType: null
        },
        {
          uuid: null,
          name: "City",
          type: "string",
          fields: [],
          itemType: null,
          options: [],
          logicalType: null
        },
        {
          uuid: null,
          name: "State",
          type: "string",
          fields: [],
          itemType: null,
          options: [],
          logicalType: null
        },
        {
          uuid: null,
          name: "Pincode",
          type: "number",
          fields: [],
          itemType: null,
          options: [],
          logicalType: null
        }
      ],
      itemType: null,
      options: [],
      logicalType: "Address"
    },
    {
      uuid: null,
      name: "Checkbox",
      type: "string",
      fields: [],
      itemType: null,
      options: ["First", "Second"],
      logicalType: "Checkbox"
    },
    {
      uuid: null,
      name: "Counter",
      type: "number",
      fields: [],
      itemType: null,
      options: [],
      logicalType: "Counter"
    },
    {
      uuid: null,
      name: "Weight",
      type: "object",
      fields: [
        {
          uuid: null,
          name: "Net Weight",
          type: "number",
          fields: [],
          itemType: null,
          options: [],
          logicalType: null
        },
        {
          uuid: null,
          name: "Unit",
          type: "string",
          fields: [],
          itemType: null,
          options: ["MT", "KG"],
          logicalType: null
        }
      ],
      itemType: null,
      options: [],
      logicalType: "Weight"
    },
    {
      uuid: null,
      name: "Text",
      type: "string",
      fields: [],
      itemType: null,
      options: [],
      logicalType: "Text"
    },
    {
      uuid: null,
      name: "Number",
      type: "number",
      fields: [],
      itemType: null,
      options: [],
      logicalType: "Number"
    },
    {
      uuid: null,
      name: "Contact No",
      type: "number",
      fields: [],
      itemType: null,
      options: [],
      logicalType: "Contact No"
    },
    {
      uuid: null,
      name: "Email",
      type: "string",
      fields: [],
      itemType: null,
      options: [],
      logicalType: "Email"
    },
    {
      uuid: null,
      name: "Date",
      type: "number",
      fields: [],
      itemType: null,
      options: [],
      logicalType: "Date"
    },
    {
      uuid: null,
      name: "Date & Time",
      type: "number",
      fields: [],
      itemType: null,
      options: [],
      logicalType: "Date & Time"
    },
    {
      uuid: null,
      name: "Single Choice",
      type: "string",
      fields: [],
      itemType: null,
      options: ["First", "Second"],
      logicalType: "Single Choice"
    },
    {
      uuid: null,
      name: "Yes/No",
      type: "string",
      fields: [],
      itemType: null,
      options: [],
      logicalType: "Yes/No"
    },
    {
      uuid: null,
      name: "Single Selection",
      type: "string",
      fields: [],
      itemType: null,
      options: ["First", "Second"],
      logicalType: "Drop down (Single Selection)"
    },
    {
      uuid: null,
      name: "Multiple Selection",
      type: "string",
      fields: [],
      itemType: null,
      options: ["First", "Second"],
      logicalType: "Drop down (Multiple Selection)"
    },
    {
      uuid: null,
      name: "Camera",
      type: "object",
      fields: [],
      itemType: null,
      options: [],
      logicalType: "Camera"
    },
    {
      uuid: null,
      name: "fleetInfo",
      type: "object",
      fields: [
        {
          uuid: null,
          name: "vehicle",
          type: "object",
          fields: [
            {
              uuid: null,
              name: "loadInfo",
              type: "object",
              fields: [
                {
                  uuid: null,
                  name: "measurmentType",
                  type: "string",
                  fields: [],
                  itemType: null,
                  options: [],
                  logicalType: null
                },
                {
                  uuid: null,
                  name: "capacity",
                  type: "number",
                  fields: [],
                  itemType: null,
                  options: [],
                  logicalType: null
                }
              ],
              itemType: null,
              options: [],
              logicalType: null
            },
            {
              uuid: null,
              name: "vehicleRegistarationNumber",
              type: "string",
              fields: [],
              itemType: null,
              options: [],
              logicalType: null
            }
          ],
          itemType: null,
          options: [],
          logicalType: null
        },
        {
          uuid: null,
          name: "driver",
          type: "object",
          fields: [
            {
              uuid: null,
              name: "name",
              type: "string",
              fields: [],
              itemType: null,
              options: [],
              logicalType: null
            },
            {
              uuid: null,
              name: "Address",
              type: "object",
              fields: [
                {
                  uuid: null,
                  name: "Address Line",
                  type: "string",
                  fields: [],
                  itemType: null,
                  options: [],
                  logicalType: null
                },
                {
                  uuid: null,
                  name: "City",
                  type: "string",
                  fields: [],
                  itemType: null,
                  options: [],
                  logicalType: null
                },
                {
                  uuid: null,
                  name: "State",
                  type: "string",
                  fields: [],
                  itemType: null,
                  options: [],
                  logicalType: null
                },
                {
                  uuid: null,
                  name: "Pincode",
                  type: "number",
                  fields: [],
                  itemType: null,
                  options: [],
                  logicalType: null
                }
              ],
              itemType: null,
              options: [],
              logicalType: "Address"
            }
          ],
          itemType: null,
          options: [],
          logicalType: null
        }
      ],
      itemType: null,
      options: [],
      logicalType: null
    },
    {
      uuid: null,
      name: "stages",
      type: "array",
      fields: [],
      itemType: {
        uuid: null,
        name: "stage",
        type: "object",
        fields: [
          {
            uuid: null,
            name: "stageId",
            type: "string",
            fields: [],
            itemType: null,
            options: [],
            logicalType: null
          },
          {
            uuid: null,
            name: "place",
            type: "object",
            fields: [
              {
                uuid: null,
                name: "placeId",
                type: "string",
                fields: [],
                itemType: null,
                options: [],
                logicalType: null
              },
              {
                uuid: null,
                name: "name",
                type: "string",
                fields: [],
                itemType: null,
                options: [],
                logicalType: null
              },
              {
                uuid: null,
                name: "Address",
                type: "object",
                fields: [
                  {
                    uuid: null,
                    name: "Address Line",
                    type: "string",
                    fields: [],
                    itemType: null,
                    options: [],
                    logicalType: null
                  },
                  {
                    uuid: null,
                    name: "City",
                    type: "string",
                    fields: [],
                    itemType: null,
                    options: [],
                    logicalType: null
                  },
                  {
                    uuid: null,
                    name: "State",
                    type: "string",
                    fields: [],
                    itemType: null,
                    options: [],
                    logicalType: null
                  },
                  {
                    uuid: null,
                    name: "Pincode",
                    type: "number",
                    fields: [],
                    itemType: null,
                    options: [],
                    logicalType: null
                  }
                ],
                itemType: null,
                options: [],
                logicalType: "Address"
              }
            ],
            itemType: null,
            options: [],
            logicalType: null
          }
        ],
        itemType: null,
        options: [],
        logicalType: null
      },
      options: [],
      logicalType: null
    }
  ],
  itemType: null,
  options: [],
  logicalType: null
};
var obj = {
  fleetInfo: {
    vehicle: {
      regNo: "HRTEST10",
      loadInfo: {
        capacity: 30,
        measurmentType: "MT"
      }
    },
    driver: [
      {
        name: "TEST",
        addres: {
          addLine: "test address",
          city: "gurgaon",
          state: "Haryana",
          pincode: 123456
        }
      },
      {
        name: "TEST",
        addres: {
          addLine: "test address",
          city: "gurgaon",
          state: "Haryana",
          pincode: 123456
        }
      }
    ],
    trackingMode: "MANUAL"
  }
};
var obj2 = {
  activeShipment: {
    creationTime: 1578473737512,
    customFields: null,
    transportationMode: "ByRoad",
    lastSyncUpTime: 1578473737512,
    uuid: "c539005b-bf52-4613-a6c7-188c1abd0787",
    issues: null,
    branch: null,
    orgId: "a662b285-340a-46c1-95c0-00f932f5d366",
    shipmentType: "DirectLeg",
    completionTime: null,
    shipmentTrackingStatus: "Enroute For Pickup",
    lastForwardTime: 1579241132428,
    links: null,
    shipmentDate: 1578473465166,
    shipmentNumber: "FRTNK800S7704",
    originalEdd: 1579026600000,
    edd: 1579026600000,
    externalShipmentId: null,
    fleetInfo: {
      forwardingAgent: null,
      driver: null,
      fleetType: "Owned",
      fleetOwner: {
        geoFence: null,
        address: null,
        customFields: null,
        isPortalEnabled: false,
        externalId: null,
        panNumber: null,
        type: "akash123",
        updates: null,
        uuid: null,
        orgId: null,
        places: null,
        route: null,
        name: "Akash FLEET",
        location: null,
        fretronId: "a662b285-340a-46c1-95c0-00f932f5d366",
        contacts: null,
        status: null,
        group: null
      },
      trainInfo: null,
      trackingMode: "TRACKNET",
      lbsNumber: null,
      broker: null,
      device: null,
      vehicle: {
        vtsDeviceId: "3515100909710172",
        kmDriven: null,
        attachedDocs: null,
        floorType: null,
        source: "FRETRON",
        isTrackingEnabled: true,
        updates: null,
        uuid: "2bc67db7-15d8-44cc-9ac3-99339d2e17df",
        branch: null,
        orgId: "a662b285-340a-46c1-95c0-00f932f5d366",
        associatedWith: null,
        isDeleted: null,
        customerId: "e6cbf9d6-3249-450d-a36f-235e2d6d9a0a",
        vehicleModel: null,
        mileageEmpty: null,
        mileageLoaded: null,
        vehicleType: null,
        groups: null,
        externalId: null,
        updateTime: 1578293873409,
        sharedWith: ["FRETRON_GOD_FO"],
        vehicleMake: null,
        vehicleRegistrationNumber: "wetrack800",
        driverId: null,
        createTime: null,
        loadCapacity: null,
        truckLength: null,
        category: null,
        groupsExtended: []
      }
    },
    syncUpDueTime: null,
    currentLocation: null,
    equipments: null,
    tripType: "Shipment",
    consignments: null,
    customContacts: null,
    shipmentStages: [
      {
        departureTime: null,
        actualActivityStartTime: null,
        actualActivityEndTime: null,
        uuid: "f9489738-c91a-4748-88b5-2f18fbe3eb89",
        consignmentDelivered: null,
        resourceDropOff: null,
        resourcePickup: null,
        eta: 1578421800000,
        hub: {
          hubId: null,
          boundary: null,
          address: "Jabalpur, Madhya Pradesh, India",
          accessibility: "private",
          addedBy: "a662b285-340a-46c1-95c0-00f932f5d366",
          center: {
            latitude: 23.181467,
            longitude: 79.9864071
          },
          suggestedRadius: 11996.765879622912,
          isOwned: null,
          centerCoordinates: [79.9864071, 23.181467],
          placeId: "e8274bf7-d30b-44b9-af7d-eae43fb44bef",
          geoJsonBoundry: null,
          externalId: null,
          source: "GOOGLE",
          places: [],
          viewport: {
            southwest: {
              latitude: 23.1050362,
              longitude: 79.8574735
            },
            northeast: {
              latitude: 23.246354,
              longitude: 80.0800323
            }
          },
          district: null,
          name: "JABALPUR",
          state: null,
          category: "Hub",
          subDistrict: null
        },
        arrivalTime: null,
        expectedActivityStartTime: null,
        consignmentPickUps: null,
        place: null,
        status: "UPCOMING"
      },
      {
        departureTime: null,
        actualActivityStartTime: null,
        actualActivityEndTime: null,
        uuid: "5722dcc7-5a26-467b-9d1a-348d74c4fbea",
        consignmentDelivered: null,
        resourceDropOff: null,
        resourcePickup: null,
        eta: 1579026600000,
        hub: {
          hubId: null,
          boundary: null,
          address: "Sahibzada Ajit Singh Nagar, Punjab, India",
          accessibility: "private",
          addedBy: "a662b285-340a-46c1-95c0-00f932f5d366",
          center: {
            latitude: 30.7046486,
            longitude: 76.71787259999999
          },
          suggestedRadius: 6464.856565224337,
          isOwned: null,
          centerCoordinates: [76.71787259999999, 30.7046486],
          placeId: "27033272-76eb-44a3-a7aa-a2df7d20152f",
          geoJsonBoundry: null,
          externalId: null,
          source: "GOOGLE",
          places: [],
          viewport: {
            southwest: {
              latitude: 30.6452228,
              longitude: 76.6368483
            },
            northeast: {
              latitude: 30.7514252,
              longitude: 76.7579126
            }
          },
          district: null,
          name: "MOHALI",
          state: null,
          category: "Hub",
          subDistrict: null
        },
        arrivalTime: null,
        expectedActivityStartTime: null,
        consignmentPickUps: null,
        place: null,
        status: "NEXT"
      }
    ],
    remarks: null,
    shipmentStatus: "Planned"
  }
};
function traverseObject(jsonObj, path) {
  let paths = [];
  if (jsonObj !== null && typeof jsonObj == "object") {
    Object.entries(jsonObj).forEach(([key, value]) => {
      let p = `${path ? path + "." : ""}${key}`;
      if (jsonObj !== null && typeof value !== "object") {
        paths.push({key:key,path:p});
      }
      paths = [...paths, ...traverseObject(value, p)];
    });
  } else {
  }
  return paths;
}

var z = traverseWorkflowFields(json, "");
console.log(z);
// var z2 = traverseWorkflow(json, "");
// console.log(z2);
function traverseWorkflow(jsonObj, path) {
  let paths = [];
  if (jsonObj !== null && typeof jsonObj == "object") {
    if(jsonObj.type=='array'){
      // console.log(jsonObj)
      let p = `${path ? path + "/" : ""}${jsonObj.name}`;
      paths = [...paths, ...traverseWorkflow(jsonObj.itemType, p)];
    }
    if (jsonObj.fields.length > 0) {
      Object.entries(jsonObj.fields).forEach(([key, value]) => {
        let p = `${path ? path + "/" : ""}${jsonObj.name}`;
        paths = [...paths, ...traverseWorkflow(value, p)];
      });
    } else {
      let p = `${path ? path + "/" : ""}${jsonObj.name}`;
      // key is either an array index or object key
      if (jsonObj !== null && jsonObj.fields.length == 0 && jsonObj.type!=='array') {
        paths.push({key:jsonObj.name,path:p});
      }
    }
  } else {
    // console.log(jsonObj)
    // jsonObj is a number or string
  }
  return paths;
}
function traverseWorkflowFields(jsonObj, path) {
  let paths = [];
  if (jsonObj !== null && typeof jsonObj == "object") {
    if (jsonObj.type == "array" && !jsonObj.logicalType) {
      // console.log(jsonObj)
      let p = `${path ? path + "/" : ""}${jsonObj.name}`;
      paths = [...paths, ...traverseWorkflowFields(jsonObj.itemType, p)];
    }
    else if (jsonObj.fields.length > 0 && !jsonObj.logicalType) {
      Object.entries(jsonObj.fields).forEach(([key, value]) => {
        let p = `${path ? path + "/" : ""}${jsonObj.name}`;
        paths = [...paths, ...traverseWorkflowFields(value, p)];
      });
    }
    else if (!jsonObj.logicalType) {
      let p = `${path ? path + "/" : ""}${jsonObj.name}`;
      // key is either an array index or object key
      if (
        jsonObj !== null &&
        jsonObj.fields.length == 0 &&
        jsonObj.type !== "array"
      ) {
        paths.push({ key: jsonObj.name, path: p ,workflow:jsonObj});
      }
    }
    else {
      let p = `${path ? path + "/" : ""}${jsonObj.name}`;
      // key is either an array index or object key
        paths.push({ key: jsonObj.name, path: p ,workflow:jsonObj});
    }
  } else {
    // console.log(jsonObj)
    // jsonObj is a number or string
  }
  return paths;
}
