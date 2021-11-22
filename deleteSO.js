var request = require("request-promise");

request(`http://apis.fretron.com/shipment-view/sales/orders?limit=50&filters=${encodeURIComponent(JSON.stringify({orderType:['Order']}))}`, {
  json: true,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NzMxMDMwMDEsInVzZXJJZCI6IjAwZTEzODAyLTI3ZjEtNGM4OC04ZmIyLWRkN2VjMmM3NmZkNSIsImVtYWlsIjoiYWthc2guZHV0dGFAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI5Nzc2MjE3NzY5Iiwib3JnSWQiOiI1OTk5ODkxNi0yY2U3LTQ5NmQtOTRkNC00MjBiZTk2MTVmNDUiLCJuYW1lIjoiQUtBU0ggRFVUVEEiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.ATJ1OMG2Fy5PwvXho3nSCweYUwRLdzK8ah-XOe36gBs"
  }
})
  .then(res => {
      res.forEach(element => {
          deleteso(element.uuid)
      });
  })
  .catch(err => console.log(err));
  function deleteso(uuid) {
    var options = {
        method: "DELETE",
        uri: `http://apis.fretron.com/order-manager/sales-orders/v1/order/${uuid}`,
        json: true,
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NzMxMDMwMDEsInVzZXJJZCI6IjAwZTEzODAyLTI3ZjEtNGM4OC04ZmIyLWRkN2VjMmM3NmZkNSIsImVtYWlsIjoiYWthc2guZHV0dGFAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI5Nzc2MjE3NzY5Iiwib3JnSWQiOiI1OTk5ODkxNi0yY2U3LTQ5NmQtOTRkNC00MjBiZTk2MTVmNDUiLCJuYW1lIjoiQUtBU0ggRFVUVEEiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.ATJ1OMG2Fy5PwvXho3nSCweYUwRLdzK8ah-XOe36gBs"
        }
      };
      request(options)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
      
  }