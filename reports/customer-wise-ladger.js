var rp = require("request-promise");
var moment = require("moment");
var token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Nzc3Mzc3NDcsInVzZXJJZCI6IjAwZTEzODAyLTI3ZjEtNGM4OC04ZmIyLWRkN2VjMmM3NmZkNSIsImVtYWlsIjoiYWthc2guZHV0dGFAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI5Nzc2MjE3NzY5Iiwib3JnSWQiOiJhYTA3MDI3Yi0xZDEyLTRjY2MtOGRiNS04OWY2Y2EwNjI4NmUiLCJuYW1lIjoiQUtBU0ggRFVUVEEiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.ij4Tnv9HhEevpztvKS4Ef8qvoXNlRMJLDnIQFTUCPLc";
var filters = { billFeedingType: ["PerConsignment"], billDate: null };
var BASE_URL = "https://apis.fretron.com";
var csvArr = generateReport();

var headers = [
  "Sr No.",
  "Customer Name",
  "LR. No.",
  "LR Date",
  "Vehicle No.",
  "Party Invoice no.",
  "Party Invoice date",
  "Customer invocie",
  "Customer Invoice date",
  "CN amount",
  "Status of Customer invocie",
  "Received Amount",
  "Difference",
  "Remarks",
];

async function generateReport() {
  try {
    let invoices = await getCustomerInvoices(filters);
    let mapedInvoices = [];
    invoices.map((invo) => {
      let arr = invo.lineItems.map((li) => {
        let invoice = JSON.parse(JSON.stringify(invo));
        invoice.lineItems = [li];
        return invoice;
      });
      mapedInvoices = [...mapedInvoices, ...arr];
    });
    let csvArray = [];

    for (let index = 0; index < mapedInvoices.length; index++) {
      let invoice = mapedInvoices[index];
      let cn = await getConsignmentById(
        invoice.lineItems[0].revenueDocs[0].lineItems[0].consignmentId
      );
      let sh = cn.shipments.find(
        (ship) => ship.uuid === invoice.lineItems[0].revenueDocs[0].shipmentId
      );
      let receivedAmount = 0;

      let bills = await getBillsInvoices(invoice.invoiceNumber);
        if (bills.length) {
          receivedAmount = bills.reduce((acc, value) => (acc += value.amount), 0);
        }
      try {
        var obj = {};
        obj["Sr No."] = index + 1;
        obj["Customer Name"] = invoice.customer.name;
        obj["LR. No."] = cn.consignment.consignmentNo;
        obj["LR Date"] = moment(cn.consignment.consignmentDate).format(
          "DD/MM/YYYY"
        );
        if(sh){
        obj["Vehicle No."] = sh.fleetInfo.vehicle.vehicleRegistrationNumber;
        }
        else{
        obj["Vehicle No."] = null;
        }
        obj["Party Invoice no."] = getFromCf(
          cn.consignment.customFields,
          "Invoice No."
        );
        let inDate = Number(
          getFromCf(cn.consignment.customFields, "Invoice Date")
        );
        if (inDate) {
          obj["Party Invoice date"] = moment(inDate).format("DD/MM/YYYY");
        } else {
          obj["Party Invoice date"] = null;
        }

        obj["Customer invocie"] = invoice.invoiceNumber;
        obj["Customer Invoice date"] = moment(invoice.creationTime).format(
          "DD/MM/YYYY"
        );

        obj["CN amount"] = invoice.lineItems[0].revenueDocs.reduce(
          (acc, value) => acc + value.charge.amount,
          0
        );
        obj["Status of Customer invocie"] = invoice.billingStatus;
        obj["Received Amount"] = receivedAmount;
        obj["Difference"] = invoice.totalPayable;
        obj["Remarks"] = invoice.remarks;

        csvArray.push(obj);
      } catch (e) {
        console.log(e);
      }
    }
   return csvArray;
  } catch (error) {}
  return []
}
// get Invoices by uuid
async function getCustomerInvoices(filters) {
  let res = await rp(
    `${BASE_URL}/shipment-view/customer-invoice/v1/customer-invoices?size=100&filters=${encodeURIComponent(
      JSON.stringify(filters)
    )}`,
    {
      json: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res ? res : [];
}
// get Invoices by uuid
async function getBillsInvoices(InvoiceNumber) {
  let filter = { invoiceIds: [InvoiceNumber] };
  let url = `${BASE_URL}/shipment-cost/v1/customer/payment-rcv/by-filter?filter=${encodeURIComponent(JSON.stringify(filter))}`;
  let res = await rp({
    uri: url,
    method: "GET",
    json: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  return res.data?res.data:[];
}
async function getConsignmentById(uuid) {
  let url = `${BASE_URL}/shipment/v1/consignment/${uuid}/shipments`;
  const res = await rp({
    uri: url,
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
      Authorization: token,
    },
    json: true,
  });
  if (res.data) return res.data;
  return null;
}
async function getShipmentById(uuid) {
  let url = `${BASE_URL}/shipment/v1/shipment/${uuid}?skipCn=false`;

  const res = await rp({
    uri: url,
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
      Authorization: token,
    },
    json: true,
  });
  if (res.data) return res.data;
  return null;
}
function getFromCf(cfs, key) {
  if (cfs == null) {
    return null;
  } else {
    let found = cfs?.find((_) => _.fieldKey == key);
    return found ? found.value : null;
  }
}
