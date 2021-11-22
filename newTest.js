var rp = require("request-promise");
var token = "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODE1ODc1NTEsInVzZXJJZCI6IjAwZTEzODAyLTI3ZjEtNGM4OC04ZmIyLWRkN2VjMmM3NmZkNSIsImVtYWlsIjoiYWthc2guZHV0dGFAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI5Nzc2MjE3NzY5Iiwib3JnSWQiOiJlZjMwMDY4My05MDFiLTQ3NzQtYmYwZS05NTVkNDllNzk2YmMiLCJuYW1lIjoiQUtBU0ggRFVUVEEiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.sHckOX4ry3ozPpFWIfpQd3e_MWuekQ9vb9tSzg95ocE";
var t=name(["4693bab2-f846-48cf-a260-cfb764b53fa5"])
async function name(pes) {
    var PE= await getPEOrder(pes)
    console.log(PE)
}
async function getPEOrder(purchaseEnquiries) {
    return await rp({
      method: "GET",
      uri: `http://apis.fretron.com/shipment-view/purchases/orders?limit=10&filters=${encodeURIComponent(
        JSON.stringify({
          orderType: ['Enquiry'],
          uuid: purchaseEnquiries
        })
      )}`,
      json: true,
      headers: {
        Authorization: token
      }
    });
  }