var rp = require("request-promise");
var allFOSE = [
  // "AKSHAY YATNALKAR",//297
  // "AMARJEET SINGH",//172
  // "AMIT15 KUMAR",//117
  // "ANIL JANGRA", //58
  // "AMAN2 SHARMA",//4
  // "ANIL5 KUMAR",//0
  // "BRAJESH JHA",//165
  // "BAJRANG1 KUMAR",//77
  // "GANESH SHARMA",//288
  // "GIRDHARILAL SHARMA",//76
  // "HARISH SHARMA(JODHPUR)",//199
  // "HARIOM SHARMA -JIND",//129
  // "HARISH2 SHARMA",//10
  // "JAGDISH BISHNOI",//87
  // "JAIPRAKASH SHARMA",//1
  // "KULDEEP4 SHARMA",//269
  // "KULDEEP5 SHARMA",//285
  // "KULDEEP PANWAR",
  // "KULDEEP SHARMA (CHANDERIYA)",
  // "KULDEEP SHARMA",//507
  // "KRISHAN KAUSHIK",
  // "KRISHAN VERMA",
  // "MUNISH KUMAR",
  // "MOHAN SINGH",
  // "MANOJ GOYAL",//546
  // "MANISH DIGHORE",
  // "MANBEER SINGH",
  // "MOHAN SINGH",
  // "MUKESH BANSAL",
  // "MUNISH1 KUMAR",//557
  // "NITISH KUMAR",
  // "NARESH5 SHARMA",
  // "NARESH11 KUMAR",
  // "NARESH KUMAR",
  // "NIKU SHARMA",//904
  // "PARVEEN KUMAR",
  // "PANKAJ VERMA",
  // "PAWAN16 KUMAR",
  // "PREM1 SINGH",
  // "RAJESH KUMAR",//1428
  // "RANJEET SINGH",
  // "RAMPAL KAUSHIK",
  // "RAJESH SIHAG",
  // "RISHI KUMAR",
  // "RAVINDRA SINGH",//87
  // "RAKESH10 KUMAR",
  // "RAJESH GOSWAMI",
  // "RAKESH MISHRA",
  // "RAJESH15 KUMAR",//436
  // "RAKESH12 KUMAR",
  // "SUNIL14 KUMAR",
  // "SUNIL4 KUMAR",
  // "SUDHEER KUMAR",//1388
  // "SUNIL19 KUMAR",
  // "SURENDER SINGH",
  // "SINDHU PATHAK",
  // "SANDEEP SHARMA",
  // "SANDEEP4 SHARMA",//457
  // "SANDEEP7 SHARMA",
  // "SURESH4 KUMAR",
  // "SONU DHAKA",//226
  // "SUNIL3 KUMAR",
  // "SANDEEP46 KUMAR",//91
  // "SANJAY3 KUMAR",//83
  // "SANJAY SHARMA",//67
  // "SANDEEP11 SHARMA",//7
  // "SUSHIL1 SHARMA",//0
  // "SACHIN KUMAR",//0
  // "SANJAY2 SHARMA",//1
  // "SANWARMAL SHARMA",//1
  // "SATBIR SINGH",//1
  // "SURENDER3 SINGH",//1
  // "VINOD DEHRU",//184
  // "VINOD3 KUMAR",//91
  // "VIJAYPAL SHARMA",//151
  // "VIJAY MISHRA",//68
  // "VIRENDRA DHAKA",//2
  // "YASH GUPTA"//89

  //9607
];
var alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
var uuidArr=[]
var token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODAzODA3ODksInVzZXJJZCI6IjAwZTEzODAyLTI3ZjEtNGM4OC04ZmIyLWRkN2VjMmM3NmZkNSIsImVtYWlsIjoiYWthc2guZHV0dGFAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI5Nzc2MjE3NzY5Iiwib3JnSWQiOiJlZjMwMDY4My05MDFiLTQ3NzQtYmYwZS05NTVkNDllNzk2YmMiLCJuYW1lIjoiQUtBU0ggRFVUVEEiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.gUDtGeFTGKUEZH6jb_gaiM94dTAnoUHrmKMWVZZKVSA";
var t = test2();
async function test2() {
    // let v = await getVendors(allFOSE[0]);
    // if (v && v.length > 0) {
    //   let ar=v.map(item=>item.uuid)
    //   console.log(ar.length)
    // }
  for (let i = 0; i < allFOSE.length; i++) {
    let v = await getVendors(allFOSE[i]);
    if (v && v.length > 0) {
      let ar=v.map(item=>item.uuid)
      uuidArr=[...uuidArr,...ar]
    }
  }
  console.log( uuidArr.length)
  try {
    updateVendors(uuidArr)
  } catch (error) {
    console.log(error)
  }
  // console.log(JSON.stringify(uuidArr))
  // for (let i = 0; i < uuidArr.length; i++) {
  //   try {
  //     var req=await updateVendors([uuidArr[i]])
  //     console.log(i)
  //   } catch (error) {
      
  //     console.log(`error:${i}`)
  //   }
  // }
//   for (let i = 0; i < alphabets.length; i++) {
//     let v = await getSuggesions(alphabets[i]);
//     if (v && v.length > 0) {
//       arr = arr.concat(v);
//     }
//   }
}
async function getSuggesions(alph) {
  var res = await rp(
    `http://apis.fretron.com/shipment-view/bpartners/suggestcf/FoseName?search=${alph}`,
    {
      json: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    }
  );
  return res;
}
async function getVendors(fose) {
  var res = await rp(
    `http://apis.fretron.com/shipment-view/bpartners/partners?size=1000&from=0&filters=${encodeURIComponent(
      JSON.stringify({ _customeField: { FoseName: [fose] } })
    )}`,
    {
      json: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    }
  );
//   console.log(res.length);
  return res;
}

async function updateVendors(list) {
    var res =  await  rp({
        uri : "http://apis.fretron.com/automate/autoapi/run/b2a28959-20a6-4d31-9016-a9cb635ae7ad",
        method : "POST",
        body:{"allowedTransporters":list},
        json:true,
         headers: {
          "Content-Type": "application/json",
          Authorization: token
        }
    });
  }
