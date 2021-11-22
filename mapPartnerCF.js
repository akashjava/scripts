var rp = require("request-promise");

var token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODAxODk2NjIsInVzZXJJZCI6IjAwZTEzODAyLTI3ZjEtNGM4OC04ZmIyLWRkN2VjMmM3NmZkNSIsImVtYWlsIjoiYWthc2guZHV0dGFAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI5Nzc2MjE3NzY5Iiwib3JnSWQiOiJlZjMwMDY4My05MDFiLTQ3NzQtYmYwZS05NTVkNDllNzk2YmMiLCJuYW1lIjoiQUtBU0ggRFVUVEEiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.grbM94kr19oItE4kWL2ydaUt9xHO57tZ7OsFkzuZDSw";
// var r = test("c525079c-ba14-44a0-8717-099e5c02ca03");
async function test(pardnerId) {
  var v1 = await getPartnerbyID(pardnerId);
  var a1 = await getAuctionsForPartner(pardnerId);
  var cfs=allMapedCF(v1[0])
  if (a1) {
    cfs.push(mapCF(a1.data));
  }
  console.log(JSON.stringify(cfs));
}

async function getPartnerbyID(uuid) {
  return await rp(
    `http://apis.fretron.com/shipment-view/bpartners/partners?size=50&from=0&filters=${encodeURIComponent(
      JSON.stringify({ "uuid.keyword": [uuid] })
    )}&view=vondor-executive`,
    {
      json: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    }
  );
}
async function getAuction() {
  return await rp(
    `http://apis.fretron.com/order-manager/auctions/v1/auction/56ac32c7-98bb-4774-8a24-de11b05375f4`,
    {
      json: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    }
  );
}

async function getAuctionsForPartner(transporterId) {
  let path = `http://apis.fretron.com/order-manager/auctions/v1/on-going/auctions?limit=50&offset=0&filters=${encodeURIComponent(
    JSON.stringify({ allowedTransporters: [transporterId] })
  )}`;
  var options = {
    method: "GET",
    uri: path,
    json: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  };
  return await rp(options);
}
function mapCF(data) {
  let minRemTime = 0;
  data.map(ele => {
    if (
      ele.secondaryStatus == "OPEN" &&
      (minRemTime == 0 || ele.round.endTime < minRemTime)
    )
      minRemTime = ele.round.endTime;
  });

  let minRemainTimeCF = {
    indexedValue: ["Min Remaining time_null"],
    fieldKey: "Min Remaining time",
    multiple: false,
    description: "",
    remark: "",
    required: false,
    input: "string",
    unit: "",
    valueType: "string",
    options: [],
    fieldType: "text",
    value: String(minRemTime),
    isRemark: false
  };
  return minRemainTimeCF;
}
function allMapedCF(data) {

  let totalAuctionCF = {
    indexedValue: ["Total Auctions_null"],
    fieldKey: "Total Auctions",
    multiple: false,
    description: "",
    remark: "",
    required: false,
    input: "string",
    unit: "",
    valueType: "string",
    options: [],
    fieldType: "text",
    value: data.auctionStatus.totalAuctions,
    isRemark: false
  };
  let bidRemainingCF = {
    indexedValue: ["Bid Remaining_null"],
    fieldKey: "Bid Remaining",
    multiple: false,
    description: "",
    remark: "",
    required: false,
    input: "string",
    unit: "",
    valueType: "string",
    options: [],
    fieldType: "text",
    value: data.auctionStatus.bidRemaining,
    isRemark: false
  };
  let bidSubmitedCF = {
    indexedValue: ["Bid Submited_null"],
    fieldKey: "Bid Submited",
    multiple: false,
    description: "",
    remark: "",
    required: false,
    input: "string",
    unit: "",
    valueType: "string",
    options: [],
    fieldType: "text",
    value: data.auctionStatus.bidSubmited,
    isRemark: false
  };
  return [totalAuctionCF,bidRemainingCF,bidSubmitedCF];
}

