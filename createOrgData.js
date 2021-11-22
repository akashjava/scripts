var request = require("request-promise");
var data= [
  {
  "unitOfMeasurement": "Metric Tonnes",
  "materialType": "Service",
  "taxCode": null,
  "pricePerUnit": null,
  "division": "Road Services",
  "controlCode": "996511",
  "materialGroup": "Services for Sale",
  "name": "TRANSPORT SERVICE - GTA - WEIGHT BASE",
  "measurementType": "weight",
  "partnerId": null,
  "linkedMaterialId": null
}, {
  "unitOfMeasurement": "Units",
  "materialType": "Service",
  "taxCode": null,
  "pricePerUnit": null,
  "division": "Road Services",
  "controlCode": "996511",
  "materialGroup": "Services for Sale",
  "name": "TRANSPORT SERVICE - GTA - NO OF PKG BASE",
  "measurementType": "package",
  "partnerId": null,
  "linkedMaterialId": null
}, {
  "unitOfMeasurement": "Units",
  "materialType": "Service",
  "taxCode": null,
  "pricePerUnit": null,
  "division": null,
  "controlCode": " ",
  "materialGroup": "Services for Sale",
  "name": "AUXILIARY_SERVICES",
  "measurementType": "package",
  "partnerId": null,
  "linkedMaterialId": null
}, {
  "unitOfMeasurement": "Metric Tonnes",
  "materialType": "Service",
  "taxCode": null,
  "pricePerUnit": null,
  "division": "Service",
  "controlCode": "996719",
  "materialGroup": "Services for Sale",
  "name": "CARGO_HANDLING_WT_BASE",
  "measurementType": "weight",
  "partnerId": null,
  "linkedMaterialId": null
}, {
  "unitOfMeasurement": "Units",
  "materialType": "Service",
  "taxCode": null,
  "pricePerUnit": null,
  "division": "Service",
  "controlCode": "996711",
  "materialGroup": "Services for Sale",
  "name": "CARGO_HANDLING_CONTAINER_BASE",
  "measurementType": "package",
  "partnerId": null,
  "linkedMaterialId": null
}, {
  "unitOfMeasurement": "Units",
  "materialType": "Service",
  "taxCode": null,
  "pricePerUnit": null,
  "division": "Service",
  "controlCode": "996711",
  "materialGroup": "Services for Sale",
  "name": "CONTAINER_HANDLING PCS WISE",
  "measurementType": "package",
  "partnerId": null,
  "linkedMaterialId": null
}, {
  "unitOfMeasurement": "Units",
  "materialType": "Service",
  "taxCode": null,
  "pricePerUnit": null,
  "division": "Service",
  "controlCode": "996711",
  "materialGroup": "Services for Sale",
  "name": "CONT_STUFF_DESTUFF",
  "measurementType": "package",
  "partnerId": null,
  "linkedMaterialId": null
}, {
  "unitOfMeasurement": "Units",
  "materialType": "Service",
  "taxCode": null,
  "pricePerUnit": null,
  "division": "Service",
  "controlCode": "996712",
  "materialGroup": "Services for Sale",
  "name": "CUSTOMS_CLEARING",
  "measurementType": "package",
  "partnerId": null,
  "linkedMaterialId": null
}, {
  "unitOfMeasurement": "Units",
  "materialType": "Service",
  "taxCode": null,
  "pricePerUnit": null,
  "division": "Service",
  "controlCode": " ",
  "materialGroup": "Machine & Equipment",
  "name": "RENTAL_SERVICE",
  "measurementType": "package",
  "partnerId": null,
  "linkedMaterialId": null
}, {
  "unitOfMeasurement": "Units",
  "materialType": "Service",
  "taxCode": null,
  "pricePerUnit": null,
  "division": "Service",
  "controlCode": " ",
  "materialGroup": "Services for Sale",
  "name": "ROAD_LASTMILE",
  "measurementType": "package",
  "partnerId": null,
  "linkedMaterialId": null
}, {
  "unitOfMeasurement": "Units",
  "materialType": "Service",
  "taxCode": null,
  "pricePerUnit": null,
  "division": "Service",
  "controlCode": "996511",
  "materialGroup": "Services for Sale",
  "name": "SERVICE TRANSPORT",
  "measurementType": "package",
  "partnerId": null,
  "linkedMaterialId": null
}, {
  "unitOfMeasurement": "Units",
  "materialType": "Service",
  "taxCode": null,
  "pricePerUnit": null,
  "division": "Service",
  "controlCode": " ",
  "materialGroup": "Services for Sale",
  "name": "STEVEDORING",
  "measurementType": "package",
  "partnerId": null,
  "linkedMaterialId": null
}, {
  "unitOfMeasurement": "Metric Tonnes",
  "materialType": "Service",
  "taxCode": null,
  "pricePerUnit": null,
  "division": "Road Services",
  "controlCode": "99651",
  "materialGroup": "Services for Sale",
  "name": "TPR SERVICE OTHER THAN BY WAY GTA W.BASE",
  "measurementType": "weight",
  "partnerId": null,
  "linkedMaterialId": null
}, {
  "unitOfMeasurement": "Metric Tonnes",
  "materialType": "Service",
  "taxCode": null,
  "pricePerUnit": null,
  "division": "Rail Business",
  "controlCode": "996512",
  "materialGroup": "Services for Sale",
  "name": "END TO END WEIGHT BASIS TPT SERVICE",
  "measurementType": "weight",
  "partnerId": null,
  "linkedMaterialId": null
}, {
  "unitOfMeasurement": "Units",
  "materialType": "Service",
  "taxCode": null,
  "pricePerUnit": null,
  "division": "Rail Business",
  "controlCode": "996512",
  "materialGroup": "Services for Sale",
  "name": "RAIL CONTAINER TPT SERVICE FCL TEU",
  "measurementType": "package",
  "partnerId": null,
  "linkedMaterialId": null
}, {
  "unitOfMeasurement": "Metric Tonnes",
  "materialType": "Service",
  "taxCode": null,
  "pricePerUnit": null,
  "division": "Road Services",
  "controlCode": "996719",
  "materialGroup": "Services for Sale",
  "name": "CARGO HANDLING THROUGH FLEET LOADER WTB",
  "measurementType": "weight",
  "partnerId": null,
  "linkedMaterialId": null
}, {
  "unitOfMeasurement": "Metric Tonnes",
  "materialType": "Service",
  "taxCode": null,
  "pricePerUnit": null,
  "division": "Road Services",
  "controlCode": "996719",
  "materialGroup": "Services for Sale",
  "name": "CARGO HANLDING WT.BASE FOR DDVS & FLEET",
  "measurementType": "weight",
  "partnerId": null,
  "linkedMaterialId": null
}, {
  "unitOfMeasurement": "Metric Tonnes",
  "materialType": "Service",
  "taxCode": null,
  "pricePerUnit": null,
  "division": "Rail Business",
  "controlCode": "996511",
  "materialGroup": "Services for Sale",
  "name": "CONTAINER DOOR DELVR SERVICE - GTA",
  "measurementType": "weight",
  "partnerId": null,
  "linkedMaterialId": null
}, {
  "unitOfMeasurement": "Metric Tonnes",
  "materialType": "Service",
  "taxCode": null,
  "pricePerUnit": null,
  "division": "Rail Business",
  "controlCode": "996511",
  "materialGroup": "Services for Sale",
  "name": "CONTAINER DOOR PICKUP SERVICE - GTA - WT",
  "measurementType": "weight",
  "partnerId": null,
  "linkedMaterialId": null
}, {
  "unitOfMeasurement": "Units",
  "materialType": "Service",
  "taxCode": null,
  "pricePerUnit": null,
  "division": "Rail Business",
  "controlCode": "996512",
  "materialGroup": "Services for Sale",
  "name": "END TO END TLD BASIS TPT SERVICE",
  "measurementType": "package",
  "partnerId": null,
  "linkedMaterialId": null
}]
for (let index = 0; index < data.length; index++) {
  cp(data[index])
}
  function cp(place) {
    var options = {
      method: "POST",
      uri: "https://apis.fretron.com/materials/v1/material",
      body: place,
      json: true,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTEyMjI3NDcsInVzZXJJZCI6IjAwZTEzODAyLTI3ZjEtNGM4OC04ZmIyLWRkN2VjMmM3NmZkNSIsImVtYWlsIjoiYWthc2guZHV0dGFAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI5Nzc2MjE3NzY5Iiwib3JnSWQiOiJhNjYyYjI4NS0zNDBhLTQ2YzEtOTVjMC0wMGY5MzJmNWQzNjYiLCJuYW1lIjoiQUtBU0ggRFVUVEEiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.eVOI3A-XeBaz7VciVhY4OOZKJMIMVDS6BdCFRDn66xs"
      }
    };
    request(options).then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
      
  }