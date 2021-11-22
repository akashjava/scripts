
var request = require("request-promise");
request(`http://apis.fretron.com/shipment-view/bpartners/partners?size=300`, {
  json: true,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NzMxMDMwMDEsInVzZXJJZCI6IjAwZTEzODAyLTI3ZjEtNGM4OC04ZmIyLWRkN2VjMmM3NmZkNSIsImVtYWlsIjoiYWthc2guZHV0dGFAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI5Nzc2MjE3NzY5Iiwib3JnSWQiOiI1OTk5ODkxNi0yY2U3LTQ5NmQtOTRkNC00MjBiZTk2MTVmNDUiLCJuYW1lIjoiQUtBU0ggRFVUVEEiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.ATJ1OMG2Fy5PwvXho3nSCweYUwRLdzK8ah-XOe36gBs"
  }
})
  .then(res => {
    console.log(res.length);
  })
  .catch(err => console.log(err));
