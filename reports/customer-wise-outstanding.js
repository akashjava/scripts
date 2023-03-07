var rp = require("request-promise");
var moment = require("moment");
var token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Nzc3Mzc3NDcsInVzZXJJZCI6IjAwZTEzODAyLTI3ZjEtNGM4OC04ZmIyLWRkN2VjMmM3NmZkNSIsImVtYWlsIjoiYWthc2guZHV0dGFAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI5Nzc2MjE3NzY5Iiwib3JnSWQiOiJhYTA3MDI3Yi0xZDEyLTRjY2MtOGRiNS04OWY2Y2EwNjI4NmUiLCJuYW1lIjoiQUtBU0ggRFVUVEEiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.ij4Tnv9HhEevpztvKS4Ef8qvoXNlRMJLDnIQFTUCPLc";
var filters = { billFeedingType: ["PerConsignment"], billDate: null };
var BASE_URL = "https://apis.fretron.com";
var t = generateReport();

var headers = [
  "Sr No.",
  "Customer Name",
  "Bill To Party Name",
  "Billing Branch Name",
  "Invoice No",
  "Invoice date",
  "Submission Date",
  "Due Date",
  "Invoice Amount",
  "GST Amount",
  "NetOSAmount",
  "PaymentDays(As per contract)",
  "Actual Payment Days",
  "Contract No",
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
      let paymentDate=null;
      let bills = await getBillsInvoices(invoice.invoiceNumber);
      if (bills.length) {
        receivedAmount = bills.reduce((acc, value) => (acc += value.amount), 0);
        paymentDate = bills[bills.length - 1].paymentDate
      }
      let gstAmount = invoice.gstInfo.reduce(
        (acc, value) => (acc += value.amount),
        0
      );
      let billSubmitionDate = Number(
        getFromCf(invoice.customFields, "Bill Submission Date")
      );
     
      let order = null;
      let contract = null;
      if (cn.consignment.orderMappings) {
        order = await getOrderById(cn.consignment.orderMappings[0].orderId);
        if (order && order.contractUuid)
          contract = await getContractById(order?.contractUuid);
       
      }
      try {
        var obj = {};
         obj["Sr No."] = index + 1;
        obj["Customer Name"] = invoice.customer.name;
        obj["Bill To Party Name"] = cn.consignment.billToParty
          ? cn.consignment.billToParty.name
          : null;
       
        if (sh) {
           obj["Billing Branch Name"] = sh.branch ? sh.branch.name : null;
        } else {
          obj["Billing Branch Name"] = null
        }
        obj["Invocie No"] = invoice.invoiceNumber;
        obj["Invoice Date"] = moment(invoice.creationTime).format("DD/MM/YYYY");
         if (billSubmitionDate) {
        obj["Submission Date"] = moment(billSubmitionDate).format("DD/MM/YYYY");
      } else {
        obj["Submission Date"] = null;
      }
       
       
        obj["Due Date"] = invoice.overDueAt?moment(invoice.overDueAt).format("DD/MM/YYYY"):null;
        obj["Invoice Amount"] = invoice.amount;
        obj["GST Amount"] = gstAmount;
        obj["NetOSAmount"] = invoice.totalPayable;
        obj["Actual Payment Days"] = paymentDate? (Math.trunc(((paymentDate - invoice.creationTime) / 86400000))):null;
        if (contract) {
          if (contract.paymentRules) {
            obj["PaymentDays(As per contract)"] =
              contract.paymentRules.whenNoClaimApplicable.duration;
          } else {
            obj["PaymentDays(As per contract)"] = null;
          }
          obj["Contract No"] = contract.contractNumber;

        } else {
          obj["PaymentDays(As per contract)"] = null;
          obj["Contract No"] = null;
        }

        csvArray.push(obj);
      } catch (e) {
        console.log(e);
      }
    }
    console.log(JSON.stringify(csvArray));
  } catch (error) {
    console.log(error);
  }
}
// get Invoices by uuid
async function getCustomerInvoices(filters) {
  let res = await rp(
    `${BASE_URL}/shipment-view/customer-invoice/v1/customer-invoices?size=50&filters=${encodeURIComponent(
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
  let url = `${BASE_URL}/shipment-cost/v1/customer/payment-rcv/by-filter?filter=${encodeURIComponent(
    JSON.stringify(filter)
  )}`;
  let res = await rp({
    uri: url,
    method: "GET",
    json: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  return res.data ? res.data : [];
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
async function getOrderById(uuid) {
  let url = `${BASE_URL}/order-manager-v2/sales-orders/v1/order/${uuid}`;

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
async function getContractById(uuid) {
  let url = `${BASE_URL}/order-manager-v2/contracts/v1/contract/${uuid}`;

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
