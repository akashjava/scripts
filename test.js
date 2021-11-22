var rp = require("request-promise");
// var _ = require("lodash");

podSummaryFinal()
    .then((_) => {
        console.log(_);
    })
    .catch((e) => {
        console.log("ERROR" + e.message);
    });
async function podSummaryFinal() {
        var event = await getPodDetails("c1d57b12-5b00-4ae7-813d-d465dafe3349");
        var PodEpoc = new Date(event.submissionDate);
        var cnDetail = await getCn(event.consignmentId)
        var shipmentNo = cnDetail.shipments[0].shipmentNumber
        var invoiceNo = cnDetail.consignment.consignmentNo
        //var invoiceDateEpoc = cnDetail.consignment.consignmentDate
        //var invoiceDate = invoiceDateEpoc.getDate() +"-" +(invoiceDateEpoc.getMonth() + 1) +"-" +invoiceDateEpoc.getFullYear();
        var customerStoreName = cnDetail.consignment.consignee.name
        var PodEpoc = new Date(event.submissionDate);
        //var storeAddress = cnDetail.consignment.consignee.address
        var transporterName = cnDetail.shipments[0].fleetInfo.fleetOwner.name
        var vehicleNumber =   cnDetail.shipments[0].vehicle.vehicleRegistrationNumber
        //var driverName  =  cnDetail.shipments[0].fleetInfo.driver.name
        //var driverContact  =  cnDetail.shipments[0].fleetInfo.driver.mobileNumber
        var okCount = 0;
        var notokCount = 0;
        var missingCount = 0;
        var excessCount = 0;
        var sendPackets = 0;
        var receivePackets = 0;
        var PodDate =
            PodEpoc.getDate() +
            "-" +
            (PodEpoc.getMonth() + 1) +
            "-" +
            PodEpoc.getFullYear();
        var data = event.deliveryItems;
        var dataArray = [];
        for (var i in data) {
            var salesOrderId = await getOrderId(data[i].orderMapping.orderId);
            var status = "";
            var remarks = "";
            var document = [];
            if (data[i].remarks != null) {
                remarks = data[i].remarks;
            } else {
                remarks = " ";
            }
            if (data[i].issues == null || data[i].issues.indexOf("Missing") != -1) {
                status = "Short Package Count";
                missingCount += 1;
            } else {
                if (data[i].issues.length == 0) {
                    status = "OK";
                    okCount += 1;
                }
                if (
                    data[i].issues.indexOf("Tempered") != -1 ||
                    data[i].issues.length > 0
                ) {
                    status = "Damage Package Count";
                    notokCount += 1;
                }
                if (data[i].remarks == "EXTRA_PUT_BACK") {
                    status = "Excess Package Count";
                    excessCount += 1;
                }
                if (data[0].remarks == "EXTRA_UNLOADED") {
                    status = "Excess Package Count";
                    excessCount += 1;
                }
            }
            if (data[i].documents != null) {
                for (var j in data[i].documents) {
                    document.push(data[i].documents[j].downloadUrl);
                }
            }
            dataArray.push({
                salesOrderNo: salesOrderId,
                status: status,
                remarks: remarks,
                documents: document,
            });
        }
        sendPackets = notokCount + okCount + missingCount
        receivePackets = notokCount + okCount
        console.log(okCount)
        console.log(notokCount)
        console.log(missingCount)
        console.log(excessCount)
        var damageArray = (dataArray.filter(function (item) {
            return item.status == "Damage Package Count";
        }));
        var missingArray = (dataArray.filter(function (item) {
            return item.status == "Short Package Count";
        }));
        var excessArray = (dataArray.filter(function (item) {
            return item.status == "Excess Package Count";
        }));
        console.log(damageArray)
        console.log(missingArray)
        console.log(excessArray)
        var damageRow = "";
        var missingRow = "";
        var excessRow = "";
        var count = 4;
        //return dataArray
        for (var k in damageArray) {
            var docDamageString = "";
            var count1 = 1;
            for (ij in damageArray[k].documents) {
                docDamageString =
                    docDamageString +
                    "<a href=" +
                    damageArray[k].documents[ij] +
                    "> Screenshot-" +
                    count1 +
                    ", ";
                count1 += 1;
            }
            console.log(docDamageString);
            damageRow =
                damageRow +
                `<tr>
                <td height="10" style="font-family: Calibri, sans-serif; margin: 0px; height: 16.2pt; border-top: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; border-left: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">` +
                count +
                `</td>
                <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">` +
                damageArray[k].salesOrderNo +
                `</td>
                <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">
                </td>
                <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">` +
                damageArray[k].remarks +
                `</td>
                <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black;white-space: nowrap;">` +
                docDamageString +
                `</td>
              </tr>`;
            count = count + 1;
        }
        var count3 = count
        var count4 = count3+1;
        for (var l in missingArray) {
            var docMissingString = "";
            var count1 = 1;
            for (ab in missingArray[l].documents) {
                docMissingString =
                    docMissingString +
                    "<a href=" +
                    missingArray[l].documents[ab] +
                    "> Screenshot-" +
                    count1 +
                    ", ";
                count1 += 1;
            }
            console.log(docMissingString);
            missingRow =
                missingRow +
                `<tr>
                <td height="10" style="font-family: Calibri, sans-serif; margin: 0px; height: 16.2pt; border-top: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; border-left: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">` +
                count4 +
                `</td>
                <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">` +
                missingArray[l].salesOrderNo +
                `</td>
                <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">
                </td>
                <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">` +
                missingArray[l].remarks +
                `</td>
                <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black;white-space: nowrap;">` +
                docMissingString +
                `</td>
              </tr>`;
              count4 = count4 + 1
        }
        var count5 = count4
        var count6 = count5+1;
        for (var m in excessArray) {
            
            var docExcessString = "";
            var count1 = 1;
            for (cd in excessArray[m].documents) {
                docExcessString =
                    docExcessString +
                    "<a href=" +
                    excessArray[m].documents[cd] +
                    "> Screenshot-" +
                    count1 +
                    ", ";
                count1 += 1;
            }
            console.log(docExcessString);
            excessRow =
                excessRow +
                `<tr>
                <td height="10" style="font-family: Calibri, sans-serif; margin: 0px; height: 16.2pt; border-top: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; border-left: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">` +
                count6 +
                `</td>
                <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">` +
                excessArray[m].salesOrderNo +
                `</td>
                <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">
                </td>
                <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">` +
                excessArray[m].remarks +
                `</td>
                <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black;white-space: nowrap;">` +
                docExcessString +
                `</td>
              </tr>`;
              count6 = count6 + 1;
        }
        var today =
            new Date().getDate() +
            "-" +
            (new Date().getMonth() + 1) +
            "-" +
            new Date().getFullYear();

        var htmlString =
            `<html>
            <style type="text/css">
            </style>
            <body>
            <h1>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<u>E-POD</u></h1>
            <br>
            <div style="margin: 16px; ">
              <div style="width:700pt;display:flex;" >
              <!-- Consigner: -->
                <div style="width: 60%;">
                  <p style="font-size: 18px;"><u><strong>Consignor:</strong></u></p>	
                  <div style="margin-left: 32px;">
                    <span>V-Mart Warehouse</span><br>
                    <span>V Mart Retail Limited</span><br>
                    <span>Khasra No. - 43/20,21,44, Tauru Road, Bilaspur</span><br>
                    <span>Gurgaon, Haryan - 122413</span>
                  </div>
                </div>
                <!-- Invoice Details: -->
                <div style="width: 45%;margin-left:64px">
                  <p style="font-size: 18px;"><u><strong>Invoice Details:</strong></u></p>
                  <div style="margin-left: 32px;width:100%">
                    <span style="width: 130px;">Shipment No.</span><span>:  `+shipmentNo+`</span><br>
                    <span style="width: 130px;">Invoice No.</span><span>:  `+invoiceNo+`</span><br>
                    <span style="width: 130px">Invoice Date</span><span>:  05-Jul-2020</span><br>
                    <span style="width: 130px;">POD Submit Date</span>	<span>:  `+PodDate+`</span><br>
                  </div>
                </div>
              </div>
              <br>
              <div style="width:700pt;display:flex;">
              <!-- Consignee -->
              <div style="width: 60%">
                <p style="font-size: 18px;"><u><strong>Consignee:</strong></u></p>
                <div style="margin-left: 32px;">
                  <span>`+customerStoreName+`</span><br>
                  <span>V Mart Retail Limited</span><br>
                  <span>E 775,Pani Tanki Road,Kamla Nagar, Opposite Canara Bank</span><br>
                  <span>AGRA, UTTAR PRADESH - 282005</span>
                </div>
              </div>
              <!-- Transporter Details: -->
              <div style="width: 45%;margin-left:64px">
                <p style="font-size: 18px;"><u><strong>Transporter Details:</strong></u></p>
                <div style="margin-left: 32px;">
                  <span style="width: 130px;">Transporter Name</span><span>:  `+transporterName+`</span><br>
                  <span style="width: 130px;">Vehicle Number	</span><span>:  `+vehicleNumber+`</span><br>
                  <span style="width: 130px;">Driver Name	</span><span>:  Ram Lal Mahto</span><br>
                  <span style="width: 130px;">Driver Contact Number</span>	<span>:  9891050420</span>
                </div>
              </div>
              </div>
            </div>
            <br>
            <br>
              <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 750pt;" width="750">
            <tbody>
              <tr>
                <td height="25" style="font-family: Calibri, sans-serif; margin: 0px; height: 37.35pt; width: 19pt; font-size: 9pt; font-weight: 700; text-align: center; vertical-align: middle; border: 0.5pt solid windowtext; background: rgb(204, 255, 51); padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black;" width="25">Sr No.</td>
                <td style="font-family: Calibri, sans-serif; margin: 0px; width: 70pt; font-size: 9pt; font-weight: 700; text-align: center; vertical-align: middle; border: 0.5pt solid windowtext; background: rgb(204, 255, 51); padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black;" width="70">Particulars</td>
                <td style="font-family: Calibri, sans-serif; margin: 0px; width: 35pt; font-size: 9pt; font-weight: 700; text-align: center; vertical-align: middle; border: 0.5pt solid windowtext; background: rgb(204, 255, 51); padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black;" width="40">Pkt Count</td>
                <td style="font-family: Calibri, sans-serif; margin: 0px; width: 60pt; font-size: 9pt; font-weight: 700; text-align: center; vertical-align: middle; border: 0.5pt solid windowtext; background: rgb(204, 255, 51); padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black;" width="267">Remarks(If Any)</td>
                <td style="font-family: Calibri, sans-serif; margin: 0px; width: 57pt; font-size: 9pt; font-weight: 700; text-align: center; vertical-align: middle; border: 0.5pt solid windowtext; background: rgb(204, 255, 51); padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black;" width="70">Documents</td>
              </tr>
              <tr>
                    <td height="10" style="font-family: Calibri, sans-serif; margin: 0px; height: 16.2pt; border-top: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; border-left: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">1
                    </td>
                    <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">Send Pacakge Count
                    </td>
                    <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">` +
                sendPackets +
                `</td>
                    <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">
                    </td>
                    <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black;white-space: nowrap;">
                    </td>
              </tr>
              <tr>
                    <td height="10" style="font-family: Calibri, sans-serif; margin: 0px; height: 16.2pt; border-top: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; border-left: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">2
              </td>
                    <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">Receive Pacakge Count
                    </td>
                    <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">` +
                receivePackets +
                `</td>
                    <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">
                    </td>
                    <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black;white-space: nowrap;">
                    </td>
              </tr>
              <tr>
                    <td height="10" style="font-family: Calibri, sans-serif; margin: 0px; height: 16.2pt; border-top: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; border-left: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">3
                </td>
                    <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">Damage Pacakge Count
                    </td>
                    <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">` +
                notokCount +
                `</td>
                    <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">
                    </td>
                    <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black;white-space: nowrap;">
                    </td>
              </tr>
              <tr>`
                + damageRow +
                `</tr>
              <tr>
                    <td height="10" style="font-family: Calibri, sans-serif; margin: 0px; height: 16.2pt; border-top: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; border-left: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">` +
                count3 +
                `</td>
                    <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">Short Pacakge Count
                    </td>
                    <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">` +
                missingCount +
                `</td>
                    <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">
                    </td>
                    <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black;white-space: nowrap;">
                    </td>
              </tr>
              <tr>`
                + missingRow +
                `</tr>
              <tr>
                    <td height="10" style="font-family: Calibri, sans-serif; margin: 0px; height: 16.2pt; border-top: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; border-left: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">` +
                count5 +
                `</td>
              <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">Excess Pacakge Count
              </td>
              <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">` +
                excessCount +
                `</td>
              <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black; white-space: nowrap;">
              </td>
              <td style="font-family: Calibri, sans-serif; margin: 0px; border-top: none; border-left: none; font-size: 9pt; text-align: center; vertical-align: middle; border-right: 0.5pt solid windowtext; border-bottom: 0.5pt solid windowtext; padding-top: 2px; padding-right: 2px; padding-left: 2px; color: black;white-space: nowrap;">
              </td>
              </tr>
              <tr>`
                + excessRow +
                `</tr>
             </tbody>
              </table>
              <br>
            </body>
          </html>`;

        var options = {
            uri: "http://apis.fretron.com/notifications/emails/email",
            method: "POST",
            body: {
                to: ["rahul.bansal@fretron.com"],
                cc: [],
                subject:
                    "POD Status For Challan Number " +
                    shipmentNo +
                    " for store " +
                    storeName +
                    " of date " +
                    PodDate,
                content: " ",
                html: htmlString,
            },
            json: true,
            timeout: 2000,
        };
        try {
            var emailRes = await rp(options);
            console.log({ status: "Success! Email Sent." });
        } catch (e) {
            console.log({ status: 400, error: e.toString() });
        }

        async function getOrderId(uuid) {
            var url =
                "https://apis.fretron.com/order-manager-v2/sales-orders/v1/order/" +
                uuid;
            var req = {
                method: "GET",
                uri: url,
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTQzNjQ3MTEsInVzZXJJZCI6ImE0MmU1MzljLTg4ZjMtNDJjZi1hMWU3LWQxM2UwYjYwODMzZCIsImVtYWlsIjoic3lzdGVtX2ludGVncmF0aW9uQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTAwMDAwMDAwMCIsIm9yZ0lkIjoiZmM1ZTczNGEtMjg3OC00NWU1LTg3MmEtMTQzMzhkNTU3OGM2IiwibmFtZSI6IlN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjp0cnVlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.jde9kYi0UdaoPHIHtk4JRfR4h4j0mNZwYEYbDRfR6fM",
                },
                json: true,
            };

            var res = await rp(req);
            var data = res.data;
            if (data.orderNumber != null) {
                return data.orderNumber;
            } else {
                return "Order not found";
            }
        }
        async function getPodDetails(uuid) {
            var url2 = "https://apis.fretron.com/pod/v1/pod/" + uuid;
            var req = {
                method: "GET",
                uri: url2,
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTQzNjQ3MTEsInVzZXJJZCI6ImE0MmU1MzljLTg4ZjMtNDJjZi1hMWU3LWQxM2UwYjYwODMzZCIsImVtYWlsIjoic3lzdGVtX2ludGVncmF0aW9uQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTAwMDAwMDAwMCIsIm9yZ0lkIjoiZmM1ZTczNGEtMjg3OC00NWU1LTg3MmEtMTQzMzhkNTU3OGM2IiwibmFtZSI6IlN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjp0cnVlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.jde9kYi0UdaoPHIHtk4JRfR4h4j0mNZwYEYbDRfR6fM",
                },
                json: true,
            };

            var res2 = await rp(req);
            if (res2.data != null) {
                return res2.data;
            } else {
                return "POD Detail not available";
            }
        }
        async function getCn(uuid) {
            var url ="https://apis.fretron.com/shipment/v1/consignment/"+uuid+"/shipments" +
                uuid;
            var req = {
                method: "GET",
                uri: url,
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTQzNjQ3MTEsInVzZXJJZCI6ImE0MmU1MzljLTg4ZjMtNDJjZi1hMWU3LWQxM2UwYjYwODMzZCIsImVtYWlsIjoic3lzdGVtX2ludGVncmF0aW9uQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTAwMDAwMDAwMCIsIm9yZ0lkIjoiZmM1ZTczNGEtMjg3OC00NWU1LTg3MmEtMTQzMzhkNTU3OGM2IiwibmFtZSI6IlN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjp0cnVlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.jde9kYi0UdaoPHIHtk4JRfR4h4j0mNZwYEYbDRfR6fM",
                },
                json: true,
            };

            var res3 = await rp(req);
            var res3 = await rp(req);
            if (res3.data != null) {
                return res3.data;
            } else {
                return "CN Detail not available";
            }
        }
    
}