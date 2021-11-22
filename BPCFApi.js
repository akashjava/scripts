var token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODAzODA3ODksInVzZXJJZCI6IjAwZTEzODAyLTI3ZjEtNGM4OC04ZmIyLWRkN2VjMmM3NmZkNSIsImVtYWlsIjoiYWthc2guZHV0dGFAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI5Nzc2MjE3NzY5Iiwib3JnSWQiOiJlZjMwMDY4My05MDFiLTQ3NzQtYmYwZS05NTVkNDllNzk2YmMiLCJuYW1lIjoiQUtBU0ggRFVUVEEiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.gUDtGeFTGKUEZH6jb_gaiM94dTAnoUHrmKMWVZZKVSA";
    
    var auction=$event.body
    var allowedTransporters=auction.allowedTransporters
    console.log(allowedTransporters.length)
    for( var i =0 ; i < allowedTransporters.length ; i++){
        await updatePartner(allowedTransporters[i])
    }
    
    async function updatePartner(pardnerId) {
      var v1 = await getPartnerbyID(pardnerId);
      var a1 = await getAuctionsForPartner(pardnerId);
    //   console.log(a1)
      var cfs=await allMapedCF(v1[0])
      if (a1) {
        cfs.push(mapCF(a1.data));
      }
    //   console.log(cfs);
        try{
          await updateCf(pardnerId,cfs)
        }catch(err){
            console.log(pardnerId);
        }
    }
    
    // get BPartner by uuid
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
    
    // get Auctions where pratner  as  vendor
    async function getAuctionsForPartner(transporterId) {
      return await rp({
        method: "GET",
        uri: `http://apis.fretron.com/order-manager/auctions/v1/on-going/auctions?limit=50&offset=0&filters=${encodeURIComponent(JSON.stringify({ allowedTransporters: [transporterId] }))}`,
        json: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        }
      });
    }
    
    // map Mininum remaining auction time
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
        value: minRemTime,
        isRemark: false
      };
      return minRemainTimeCF;
    }
    
    // map Total Auction,BidRemaining,Bid Submited CFS
    async function allMapedCF(data) {
    
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
      let totalPlacementPendingCF = {
        indexedValue: ["Total Placement Pending_null"],
        fieldKey: "Total Placement Pending",
        multiple: false,
        description: "",
        remark: "",
        required: false,
        input: "string",
        unit: "",
        valueType: "string",
        options: [],
        fieldType: "text",
        value: data.orderStatus.totalPlacementPending,
        isRemark: false
      };
      return [totalAuctionCF,bidRemainingCF,bidSubmitedCF,totalPlacementPendingCF];
    }
    
    // update CFS by uuid
    async function updateCf(bpId , cfs){
      var res =  await  rp({
          uri : "http://apis.fretron.com/business-partners/v2/partner/"+ bpId +"/add/customFields",
          method : "POST",
          body:cfs,
          json:true,
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          }
      });
    //   if(res){
    //       console.log(bpId)
    //   }
    }