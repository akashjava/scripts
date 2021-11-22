// var data = []
var request = require("request-promise");

var allFOSE = [
  "AKSHAY YATNALKAR",//297
  "AMARJEET SINGH",//172
  "AMIT15 KUMAR",//117
  "ANIL JANGRA", //58
  "AMAN2 SHARMA",//4
  "ANIL5 KUMAR",//0
  "BRAJESH JHA",//165
  "BAJRANG1 KUMAR",//77
  "GANESH SHARMA",//288
  "GIRDHARILAL SHARMA",//76
  "HARISH SHARMA(JODHPUR)",//199
  "HARIOM SHARMA -JIND",//129
  "HARISH2 SHARMA",//10
  "JAGDISH BISHNOI",//87
  "JAIPRAKASH SHARMA",//1
  "KULDEEP4 SHARMA",//269
  "KULDEEP5 SHARMA",//285
  "KULDEEP PANWAR",
  "KULDEEP SHARMA (CHANDERIYA)",
  "KULDEEP SHARMA",//507
  "KRISHAN KAUSHIK",
  "KRISHAN VERMA",
  "MUNISH KUMAR",
  "MOHAN SINGH",
  "MANOJ GOYAL",//546
  "MANISH DIGHORE",
  "MANBEER SINGH",
  "MOHAN SINGH",
  "MUKESH BANSAL",
  "MUNISH1 KUMAR",//557
  "NITISH KUMAR",
  "NARESH5 SHARMA",
  "NARESH11 KUMAR",
  "NARESH KUMAR",
  "NIKU SHARMA",//904
  "PARVEEN KUMAR",
  "PANKAJ VERMA",
  "PAWAN16 KUMAR",
  "PREM1 SINGH",
  "RAJESH KUMAR",//1428
  "RANJEET SINGH",
  "RAMPAL KAUSHIK",
  "RAJESH SIHAG",
  "RISHI KUMAR",
  "RAVINDRA SINGH",//87
  "RAKESH10 KUMAR",
  "RAJESH GOSWAMI",
  "RAKESH MISHRA",
  "RAJESH15 KUMAR",//436
  "RAKESH12 KUMAR",
  "SUNIL14 KUMAR",
  "SUNIL4 KUMAR",
  "SUDHEER KUMAR",//1388
  "SUNIL19 KUMAR",
  "SURENDER SINGH",
  "SINDHU PATHAK",
  "SANDEEP SHARMA",
  "SANDEEP4 SHARMA",//457
  "SANDEEP7 SHARMA",
  "SURESH4 KUMAR",
  "SONU DHAKA",//226
  "SUNIL3 KUMAR",
  "SANDEEP46 KUMAR",//91
  "SANJAY3 KUMAR",//83
  "SANJAY SHARMA",//67
  "SANDEEP11 SHARMA",//7
  "SUSHIL1 SHARMA",//0
  "SACHIN KUMAR",//0
  "SANJAY2 SHARMA",//1
  "SANWARMAL SHARMA",//1
  "SATBIR SINGH",//1
  "SURENDER3 SINGH",//1
  "VINOD DEHRU",//184
  "VINOD3 KUMAR",//91
  "VIJAYPAL SHARMA",//151
  "VIJAY MISHRA",//68
  "VIRENDRA DHAKA",//2
  "YASH GUPTA"//89
  //9607
];
var uuids = [
  "36c30e0c-a363-40cc-8cdc-65f8bd82c27d",
  "8f77d8b6-ab7e-4555-b33b-27c977489a5c",
  "0ee83261-4293-453c-a16c-8d90b73d62ef",
  "d8c0139a-14aa-4036-b7b5-6bee59bcb890",
  "37c68cf7-2909-4903-8714-f842986e08fc",
  "d0837595-066b-4010-b69d-b35696e40a0d",
  "9948d08f-2483-420b-a4be-8a82ceb69ec3",
  "94870a2b-233a-4078-ac4c-706682ec2be0",
  "3bc831e7-1b2d-4211-b539-26aa6143fcac",
  "21102655-68d7-4792-a76b-98ac16624daf",
  "86f016eb-ec41-4769-a42b-7f9714ba9b30",
  "c1ae01a4-d306-453f-a2d9-3ebbc64aeb9b",
  "3984229c-9990-4211-b525-15c77a5be36b",
  "c935c042-c1a0-4a98-b057-11e98e2d226b",
  "bf4f665c-93d5-4de4-a805-6f3c3ab11ef8",
  "3e000b8c-5ce0-4037-aaec-a5a5c1de197f",
  "ee4cc4a6-8db2-49e2-97a2-545943114909",
  "da197df6-5fa2-462d-84f3-56db2de731d2",
  "546f70e0-f281-4775-8edd-eaab300bf291",
  "a671ed18-6b80-468f-9b03-ebe7d20a11f4",
  "75a59164-5cbf-4934-b3a6-7b6602dd47d9",
  "f4b8d278-65f6-41c0-bfe5-67d53de94a91",
  "d6c356ca-bb50-4ef7-8441-f78daf5befce",
  "1519f716-439d-4abe-9c5a-7394df9cf33c",
  "898e588f-e689-4d28-8ac6-5f049c5756bd",
  "309c8380-877b-4bc1-b84f-9df9b3973290",
  "0b7d4535-91b2-49d1-9864-9dd92e5ce211",
  "312a0e8e-73e1-4900-b5aa-62abc6490a04",
  "0e295e5a-0ae7-4a3e-865c-f743d63f979f",
  "62eb9c0f-0077-47e8-8c28-715fc9c23379",
  "f9c664ba-5334-455b-ba04-aaa9f3e07070",
  "e52a2e68-ccec-4159-95c2-a76fa6963fd5",
  "7923159d-8d07-4812-b765-96087fc54265",
  "9b2f93a0-0a3f-406a-a90a-18258866479a",
  "b62f7649-600a-4ba9-b6a6-163e3470db38",
  "eea1601e-b4f0-4463-868e-b028ccd249f0",
  "ee28b423-fc24-4a6f-b194-93cc6ca86b6c",
  "d60665e5-aa31-41db-9ae7-5d4a4e909e2b",
  "2975094c-2d0e-45d5-96c2-0144b6e779cd",
  "b0533572-342c-4ccb-9f5b-21a9ef2f7e5e",
  "4ecde44f-580f-48e1-9cf8-0b11ca0f9189",
  "5c833308-b19a-445b-a776-2372f2c79cb3",
  "61648f09-bd69-4e5c-bb05-9ef352accda9",
  "ec55cc3a-8cd6-405c-842e-06bd673ca0c0",
  "80279a4b-7adf-4dea-9adc-703b5caac6c9",
  "458f6dcf-1b40-4620-b475-3d2f90a99909",
  "16f409a0-6138-4f7e-a416-4ba05f3cdbbf",
  "5655f364-7d8f-4f43-b0c2-b51908cf8877",
  "a7d1104a-7507-4ce8-9365-140a2c6c520c",
  "3d4353ff-06ca-487c-8fcf-e75747d05108",
  "e1abbe14-e26a-4e48-aaa6-448bbb748aa8",
  "045d0921-e924-4554-b5cd-8f423791173a",
  "2c2889c9-290b-461b-ba60-aa378f2f302e",
  "d53e5dd0-f236-4af2-99d2-f5be954d22f6",
  "57a9c152-6d31-4f23-9ad5-62eac90a04aa",
  "dce0b429-66e3-424d-9953-137372b73af5",
  "54159038-a03c-4d19-96ee-e2edd48763f1",
  "8cc972fa-6960-48cb-b5e2-0df4720bf4bd",
  "b4e4bbe2-ffee-49e0-b12a-dd628283350e",
  "c662d9f8-8f38-4803-8a97-f6848124b639",
  "158ea034-f321-48cf-bc79-e9409b67074d",
  "49617ebe-3d04-46ed-aec0-5fce270e71a0",
  "ee85e724-bd8c-4711-8522-8c6cdc1717d1",
  "ba9e1fc9-4bc0-4ecb-ab55-9772989d1342",
  "a132dc69-226e-4fd9-a632-9e046af8735b",
  "f4a89269-7acb-40d4-980c-3c6287a5568e",
  "2418bcfb-b639-48bd-b24b-2cdf33370b8e",
  "c1364f02-3bec-4d2d-836a-e5cc50f500e5",
  "a4162885-0db5-4753-9b32-6384f15c52f6",
  "9b48370e-42ec-4335-9158-f6589516d00b",
  "7e5151a4-ec96-44ac-8cee-eaa82b118dda",
  "3c880fb1-17c3-478a-964c-97124d1ad072",
  "7955b358-1b8d-4fc1-b31f-cf3c01f0161f",
  "15bc40e3-37cb-4f8b-847d-cf5554d89f3d",
  "e90c5db5-699b-438c-91ad-de3d31e280cd",
  "db20806b-254b-4d8e-83bc-7cf698659e63",
  "1f1927db-a88c-4e00-94ca-9d0dd3d04c0b",
  "5cbe3aa2-cfbe-4be7-8c8d-249458bfb7d9",
  "9df54b3c-844e-4fbc-8326-6c537ebffe4b",
  "fc8ef23d-3e12-44b6-a5d7-f851131dc31c",
  "596239d5-d5fb-4723-84dc-19e8aae632c2",
  "15f5a14e-c2c4-4458-b89c-b6025cbe7d64",
  "338e7cae-9e68-4fb2-afa9-46e603263a99",
  "94f2b371-dc2b-445c-9e4e-4ee63a8824ba",
  "446ff8db-2adf-4ab0-9392-616217d850f8",
  "23c07e6b-470f-4ebf-9e80-11112ba79929",
  "850ab405-c036-4206-b9f3-9e075c701e57",
  "1d18685e-d6c1-46f3-b6b8-bc96525f3a78",
  "3a731a95-fc1c-417f-94b9-73101ef2d419",
  "095aa9a9-a2b0-415b-b3cc-e6e8b5818755",
  "05d0620c-916a-4dfa-8af2-fbee59aa27c8",
  "42ecaab2-ca05-4c7f-a74e-44ce9eead182",
  "0cf3b095-4da7-403a-8407-8d4fde736957",
  "53c45c31-bb8a-4948-9c08-54634653abaf",
  "f9099f3d-9fa8-47d7-8064-23c58a518a0d",
  "be3646f2-1cfc-4565-b559-df449d1af108",
  "394355a3-9fcc-4275-8e4b-f31e967db30a",
  "708191a6-c90b-4689-975e-4c0521b93002",
  "04df27cf-c817-4bce-9c5b-0fb9df75cbba",
  "1aec7c62-4d5d-4101-a32e-54cd8907156c",
  "49287c06-6d63-4f0a-89c5-9c1f8bbb9cab",
  "e69dcbfe-e265-4de3-8d70-8a5689b5d38d",
  "4f1d496e-a6c6-4a91-a23a-8c564cf2a32f",
  "5722cc22-32c2-4691-a07c-5ba318b8cd32",
  "73451e2e-e787-4d79-8ac4-baa878b5c857",
  "48e43cfe-544c-49b8-bcd2-94af3409bbf2",
  "c0376219-8560-4230-9697-0cf53b964961",
  "c0295225-3d44-4de9-9f39-1ed9ac5a52ea",
  "41e79a39-084d-4f18-abf3-d05eb03966fa",
  "11e8772c-d62c-42f6-91b5-adddec7d4a6f",
  "37206bfb-ef07-4d66-bee8-436ecbb62647",
  "9e49c10e-bf07-4dad-af32-d6dd77cd31f5",
  "5090991e-c2ef-4d1b-8822-2971bb8fdaec",
  "6871625a-1b9d-4c0d-9813-eba807460872",
  "4336d258-36aa-4f74-b6a3-f2199179d816",
  "7413a867-0618-4551-835e-a73c4bf130a0",
  "f74254b8-c19c-4a22-960f-d643c3833cce",
  "bfca10af-7d7c-4324-abe9-c11c24a020bb",
  "df693e8c-677d-48b5-8fdf-7b9d3547fc5a",
  "9af2ab00-2627-4b2f-ba84-6a91f2953502",
  "53f20179-85a7-4117-b8ce-7010fb6e9f7a",
  "cd6f8679-a33f-4c06-b758-fe6fe612468a",
  "0dcffdf3-450f-4f23-bc0f-eebbdb9d8e18",
  "2e9227fd-6493-481e-9dfe-e31e3351b95c",
  "60935b39-67df-491e-941f-b79cf98c88da",
  "e1dc5031-dabb-4c18-8fdc-2438ba1eb810",
  "e819cd17-bee2-435b-9438-e5c39bb94e91",
  "9dbf544f-2204-4fcb-8053-a48022a55b51",
  "305580bb-6912-445b-9f3a-42999c322b65",
  "220e53d4-8754-4de7-92a3-2284abbf5af3",
  "6bc3ef6a-10b8-421f-9619-c3516fe8f740",
  "31e33a9e-6630-4ce4-856b-c37794cc28a4",
  "5687eb82-f220-4f21-bdbe-06865200a72d",
  "3cb93b2e-7503-4170-baca-17798c9d3b73",
  "0a4ce2f9-8766-4ebd-8b9b-9ea60e65d441",
  "e7eda563-12c0-4371-b6bf-60958c6cb37f",
  "a328a40d-9485-4fc9-ae7e-e4e724ed74dc",
  "7b7d885e-8c1c-45b6-918b-05026dfabc01",
  "079e850f-37bb-4025-81c4-727e9a1b750e",
  "9f75609c-baca-45fd-9f07-6abba20f8de4",
  "11561df7-d442-4d5e-9176-56051f99baf7",
  "5a57c1b5-dd3f-40df-ab5c-ee1f1e95a18c",
  "aaae751e-0fd2-48e9-a4c2-5663c2c4511e",
  "c40082d6-194d-4fc9-bb7c-51639e110a2f",
  "64733cfd-c2f5-4873-8597-629394e67cd8",
  "2f423bd7-a24f-44d3-9059-519c843e31ac",
  "4de3fd4e-3f24-4898-afea-cf789c12fb45",
  "688f7350-a50f-413c-95e2-531a8eab05af",
  "0d3f008c-a302-4b9c-ae60-b693237f7aa7",
  "62fd0bb7-1c84-4122-a54f-414e392ec714",
  "44b66f38-b44f-4ad4-ad9b-8acc2003872c",
  "3a5a5da7-311a-441e-b2af-3703c6574b19",
  "9f5f05cf-a989-4caa-8ce6-8a3f99d69414",
  "e8c8ec06-0c4c-4b16-b691-57c78322a06f",
  "91b19b12-00be-4d10-b323-58003aa2f466",
  "4696571c-3d75-4c61-abc8-809ca01f0879",
  "00c9f4a9-5a77-44c3-bdd1-1d4c9675d315",
  "72388bf6-47b4-4849-9c21-92d8d99d5790",
  "2572dfbf-3c3e-4664-8a43-68abe7b9e264",
  "e7762dc8-5b2f-4ad7-9c6c-8420ac9c38a6",
  "0dce147e-8081-4e9c-99bd-cea0c60c87e7",
  "7d598c1f-e2cb-438f-9f73-44366300e9c0",
  "538aed0b-c6e1-481b-8efb-87fd82353331",
  "b4729621-8688-401b-acfe-f66efdfa1e06",
  "353d087c-f80f-4119-acaa-fca917bd5e9f",
  "5d14c2cd-a23d-453d-a928-088423174e9a",
  "366b7c04-e77d-4cd6-a869-54bcd60e25bc",
  "e98d408b-62de-45a7-8e58-36e34d25dd2e",
  "59bf3d90-9a0e-43b7-94b9-019cbee63de5",
  "da9add36-ab51-421e-b2ae-fcf6a3fbde08",
  "4b6a0e86-b023-40d2-8111-dcb85d9df360",
  "a1787371-06e3-4419-8c00-8b6cf77b3358",
  "9fbf2968-0bc8-4bd9-89d0-a9dd6aafa7cd",
  "82ed5a27-fb9d-479d-8a0d-0991b29bf8ac",
  "4dd4a9be-583b-4d16-af11-0d0e6d058608",
  "d2dd6b8d-3c85-4cc5-96a6-a6adbd4a273e",
  "2ed85f4d-cdd8-4c98-9c17-0de4d74b09f5",
  "99426c3d-e30c-4c52-afeb-2b270f3997a7",
  "32112740-2031-4f18-9da6-b3f85c7da6e2",
  "b53bfbea-b513-41b5-9f3c-8b6f424728b0",
  "e497284b-64e6-4e81-8f52-75f99585c604",
  "f26fa4f3-291b-4a51-bd4b-e85b8cabd5ce",
  "4899ac0a-300c-453e-ad59-72d37c0191d8",
  "43d782b8-e68f-4e99-a4eb-5df32581168d",
  "8b46f5d8-276f-4d2a-8e8c-acf44d88e3a8",
  "5ef285b1-31ca-445e-a066-8d4d5487f25b",
  "b6dadf9e-42db-412c-9961-fb7523a8fdbe",
  "71ca81e1-124e-455f-875c-6d539d870173",
  "c0b9ebbb-5e7a-4540-94f7-a5ef380512ff",
  "e332a148-79c2-4039-ac6f-39d232cfcd8c",
  "6245be11-b8c2-4a63-b4bf-7ca0b495271d",
  "6c28f785-0178-4e33-b22c-928308b2e432",
  "75c1e9b6-e96b-42c6-b6f0-b055c8a71951",
  "dcbcf47f-c5b3-4353-b94b-4e32f36e9d47",
  "ba5c6d10-6ccb-46dd-9bbb-9e193e3445fb",
  "f61d384a-48bc-4399-a410-c795fd4fe667",
  "ffe80449-a143-4614-be4d-67d592e09525",
  "f57fc8ea-25ce-48a6-a2c0-92d4365064ac",
  "48f19e35-f40a-4aa2-9f86-65bccf9a61fd",
  "9b8127ff-5b2b-4299-b369-4cec9e90a58f",
  "909f1037-81bf-4821-b424-341d75dfa538",
  "db2707c5-504a-4b41-8058-2c276f1b1683",
  "07f0bca3-96c2-4a9c-a508-8ec225f8c85f",
  "30d25285-58b0-4c4f-aea3-224bb9031f2e",
  "6b86ee0c-e12f-4fc6-ab13-9c326796489c",
  "ebcd9705-2c9a-4d04-af94-d4f07836f528",
  "9a06cf12-ba3f-4b86-8732-d4c11e816eaa",
  "f9b61fa5-48e2-4ef3-a4ba-e1fd25ff84e9",
  "cc933410-4ca0-46b7-84f7-e3290905bb67",
  "9fef734c-2e39-471a-8d85-7ecb21ec3590",
  "77c2d0a3-5f11-4cf4-a2e6-9824f2b720c1",
  "0aef270d-d41a-4a95-8c57-ba8bb39bbb23",
  "60f8347f-8cb9-4965-abda-302f70cf1e3b",
  "f232a5cc-1721-4945-8dcd-1c96b6166d71",
  "04d7a4ac-46e7-47e8-86c1-8f2aff05a070",
  "aa70752e-7893-49a2-a162-94ffeb08648d",
  "5a9c580b-f2e9-4d64-89b3-198b772e336f",
  "cdb104cd-dfce-4fa5-941c-c50d3e3310fb",
  "f164ad10-d09f-4a85-8021-06fe8a5b82ed",
  "c898a16f-98ef-493e-861c-4e1eed05be9f",
  "bed6a32d-3b22-4d86-9e04-1ecdd2fd5581",
  "f0a5d191-258d-469e-b2bb-ccdc727b934f",
  "1f8e87ca-e18b-422d-92bc-8aafb9c758b4",
  "51e02852-fb3b-45da-8b24-1b7b7d399280",
  "c4df1217-9a24-46bd-833a-48ab0ff198d5",
  "e051117c-072d-4f88-b46d-89327f9dead8",
  "aacb67f2-1cae-4063-95c3-962c96fbdb2c",
  "4086e698-0ab2-47ff-a730-6aeb0ef8a578",
  "88f0a907-fb39-468f-a4ca-e3afbda1c3f1",
  "6c3a144a-9395-4ac4-8975-85fd4407ca7d",
  "ff8c5339-8ca8-4a80-803b-55a131cc6bc2",
  "496f8592-e340-433a-ba7c-8dff82a47290",
  "46f0e3c6-14f5-4818-b929-e0c592ec373a",
  "0db33f33-e2d3-46d4-b2e9-c1abe9ab159e",
  "4cf006c9-97ed-4f61-ab5d-1a582d63d0e3",
  "3ea7ca2c-23a0-441d-baf9-17f7d9aa1e9a",
  "fed3de22-bfd6-49bc-a5cf-7d6e056c3a82",
  "ae49dcd7-d1eb-4d20-a3ff-5d78e83c8e1d",
  "1015a12b-5d9c-4089-ae10-eed49d7acfdc",
  "dbf64df4-7d40-4d4e-a046-2fbc360edfb9",
  "663ac692-410b-405a-9656-3e4540d7bc0e",
  "fd9f9fd8-def3-44a1-ab2a-93917e387e50",
  "32dd87de-6887-4025-aa73-f5bdaf5010c9",
  "578c687c-68f3-406e-8c6a-fd9d286094af",
  "a4e80dca-538c-4da8-805f-897fe23d98dc",
  "a343b454-0b7a-47ce-9a78-e892160a277f",
  "0612122b-dabd-4052-8729-e8cbfc92eb2f",
  "9d997cf7-343e-4725-bcd9-71966467211d",
  "83f1462b-ea9c-4712-9266-ef58e2059eb8",
  "cd0dd165-b6f2-41d0-a19a-4ebbffe435db",
  "e5fa6be4-039a-42b3-ab4e-cfcd794d364b",
  "f7dae84d-c1c2-4994-ac02-e98673cbce0f",
  "95861954-1661-4b9c-924d-a435bc5a0e4d",
  "523e5c13-6e0b-473d-b188-0383b44878a5",
  "6ab0eeb2-ca17-4045-b7ad-f578af99649e",
  "778dc328-772d-4c0b-a4e9-ea743f9abbd0",
  "43f8c5a2-7c37-4d6f-8f28-18323d93c6d0",
  "b07f597f-f903-44f8-aece-87acdce3471d",
  "36a23ab1-ad3e-43a1-bd3e-3e9cef23a731",
  "fce887e4-4e3d-4f62-861d-3d88b2ae1381",
  "3d95c5d7-b998-4f9b-8368-ffe6f5fcd211",
  "4018c459-2583-4ccc-898c-4ea0e8bfe2aa",
  "ffa6a15a-542a-466c-8f54-ae29e6125f03",
  "d24159b4-78fd-4617-83f1-ac89b33aac41",
  "f209666b-035a-4fc8-a213-ab084274e73e",
  "93844ce5-d22c-4081-a9ec-f44e9c8b364f",
  "77b3321a-739c-44e6-9853-5fb5a598eda0",
  "5eb0e571-f798-4c24-8dc6-af4dc76647cf",
  "a112eb16-8ad6-4ed7-9c21-38ef9d8d36b2",
  "a5e05494-3b64-499a-81a5-8c147c54fcdd",
  "da1ee6ae-c945-4579-ae9e-2fe1d2930564",
  "a99c9b41-a8f2-4c7c-a62d-b908ad637472",
  "16cbacb8-3bd9-4d96-ac47-7df93bfe7ae3",
  "9f68404f-8bf9-44fc-9b29-1c00ccbd927d",
  "0f6e6fe8-242f-4ab0-a94d-1bcdd441d15e",
  "ef16697f-c3df-447b-bf93-e2471aab6cb0",
  "ffeecd47-0969-4021-b385-3451ef632565",
  "31b2f8de-daf9-4e36-b7c3-cc98a55752de",
  "cd5c9ba4-916b-4645-9f70-43b3c8bbd288",
  "f6821d1f-14b0-42a6-8341-8649a8dfc14f",
  "7c64779e-bb8a-4249-9064-f5dee7c0edda",
  "9dd78ff5-b309-44b6-8349-902a15254736",
  "2ffdf38c-bf42-4194-a394-8d9884684a43",
  "4f7877ad-8d66-4f89-b039-e85ce8174379",
  "b24e0b41-f347-444c-8ffd-550452acb5a5",
  "89a10aa2-d024-4fd7-9da6-6fda238edb94",
  "13e6b7c8-a4b1-417b-96e9-b8768b396133",
  "e2ac1522-77a1-4e42-ad27-c41e899b1b35",
  "18fd095d-8e36-4052-a1a9-9fde7e56e194",
  "cd928bb5-2eae-427c-9b1a-ca0029953e61",
  "96fcffad-f8e9-485b-a88a-d248c33404bb",
  "e667fba2-4107-4e84-b7d3-c5297e6d9df5",
  "795b21d3-6c7a-48f5-978a-c89fddb9397c",
  "2177c2c7-d305-444a-b77b-48e9185284cb",
  "a1878129-5d71-4719-b3dc-896b2ce426c3",
  "5efa6f42-cc80-4259-b80b-6c5e1924f5dc",
  "28e896aa-69f1-454e-a506-e16137d73b96",
  "580d6b35-1a27-4684-8c90-aafd82431ffb",
  "6e3e4192-830c-4cb7-8a11-588cbcf25442",
  "f4ce1eb8-8e95-432b-bb51-46dd0e01103d",
  "cc843932-c898-48ca-b255-a2246dee1cd2",
  "0238c9ff-9599-416b-a03e-1909f4d41e74",
  "09b0c8e3-9dda-49a3-84a9-4d7dda9d0036",
  "e28874e9-10eb-46c1-bf3a-7dfffad3d59a",
  "6d50ff97-28b3-464c-8682-a3e19b4f5589",
  "9a9969f6-ef76-42a3-8b39-297d59376d07",
  "a22977c4-8318-40ae-ad0a-5892ecd266a7",
  "3c285da7-efaf-4512-9cd6-8dcfb8a6c0d4",
  "094cad25-cba3-4d38-abe2-f08407917017",
  "b1d4034d-667c-4a96-8a44-a6cca3d931d1",
  "b2ea3466-9dc1-4ab1-9c58-846efabcd952",
  "22742766-d49a-4763-9be1-a05fdede7d89",
  "9bfb053a-8434-44f9-8375-fd7158084b50",
  "920f0986-a58f-4aa9-a143-52e6d3337621",
  "1c72ad62-e4ca-4c7a-a243-1c214f201254",
  "f19fc940-fba8-475a-a599-57cda01ef148",
  "d76f98a2-ce3d-4e94-9e82-2a5177a787e4",
  "5912cd49-10c1-4618-abec-16aa69ecf685",
  "857decee-a401-458a-83e6-6cbaef806b1a",
  "146e4e33-4cc4-44c5-8dc3-74d11419e238",
  "fb7b461e-7307-44b7-b05b-7358abc1c74f",
  "062c6455-10f4-410c-b024-c73ab8e0e0a1",
  "9c5cb9e3-5311-4704-b41d-8bd52b793dba",
  "74d4118f-d09c-49be-9ccf-2e0fa445171b",
  "ba9e79d1-ff29-4420-8ba6-490e81424846",
  "23e75b5d-828c-4de0-a94d-7d29ffe40ea8",
  "ec002c04-3625-45b3-903b-f5304b7e1af9",
  "37b9cdf4-107e-4466-8052-5707113a3685",
  "9ec67c99-f9c8-42ac-9ae0-c89213b67ecb",
  "b68ae68b-e6cd-4dec-a77e-4c670850729f",
  "ecde064f-70e4-4d43-b86a-7ef06c14ce27",
  "5e88620b-6d28-42f9-9eb4-b0b420058eda",
  "c693d270-4255-4e5c-9d07-ee6ad655f36b",
  "4ee30f7f-66f4-4e1f-9a39-bc2b1712e744",
  "6e08c427-894a-4b6f-a411-a0df70e01e6a",
  "516061c4-6a14-4ce2-87ba-ebed9db5f58b",
  "d6b5c7bf-7aa8-40fc-b677-a22bac0c25e6",
  "de3da344-6dad-4141-a52d-40aed57e6877",
  "b8de99c2-5986-4ba3-abd8-6928edf89d7d",
  "1d7c59c8-c1c7-4120-b058-96232b6d49fc",
  "482015a7-d490-411e-86e8-ff560420512a",
  "324c107d-1ad8-4b0e-9b09-5ca538cf6825",
  "adc1037a-50e7-4dad-9250-d2f8ab781026",
  "a78bcfe0-c997-49ac-9b54-6b23df517482",
  "faca28cf-9fbf-44cb-baa5-8a6c5e22da7c",
  "aa0245e8-1c85-403c-b6d3-59e3e633778f",
  "4ff11812-0779-4736-a35f-0f687df5df0e",
  "936c9117-0441-4293-881f-1a4c1ee7d65e",
  "6146e4a3-17cf-4532-ab24-fdff01f20fbd",
  "1f235688-743f-40e5-b92a-485614753ef9",
  "a8d1b601-50ab-4267-b523-064adeb6d472",
  "44b8dd91-bdb7-48fc-81d8-dd0f61838c65",
  "f1723e9f-130e-462e-abbe-d3bc5d70eab9",
  "192487be-f711-4d91-acd3-bb65517360d5",
  "7b892902-e8ee-4c5d-af39-099e0bf71889",
  "a079a140-5292-4868-b7de-c45833adc305",
  "c64f9faf-8bd8-4563-a182-683f9c08ed6d",
  "5960ac4c-e8c2-4703-aead-2d0817d9f223",
  "1a2bc1ac-c8ee-4f7a-8c55-da5907a734b6",
  "71b96de3-7678-4e52-af8e-43cfea009e59",
  "d045fadb-fa30-4e53-a2d8-a07b47abd831",
  "aa23fd08-5b89-4c85-805f-701fe1aa34fc",
  "1a893d88-1dc9-41e9-be3e-c6bba92a3ae9",
  "118f81fa-348e-4b3d-8446-359627989ff3",
  "d3ee1471-8294-40d7-a1ba-e2cfe36eef87",
  "90810813-e285-4d7a-bef3-6d1fdcc0c732",
  "02fcdd6a-5e7a-4e63-8c5c-c90d4fc60c70",
  "0fd28107-1721-42a0-96fd-585b40a9b088",
  "89d5c18a-ecb0-40e0-9ba7-d9151ca4b76d",
  "119c4b47-1a63-459f-955a-7f0d57270ab7",
  "6e8a67c2-046c-47b3-aa7b-6e678cbc275d",
  "7b8e2036-6bf1-4ad9-bf7e-93a9bda4b8cc",
  "20a935c0-511c-485d-bf15-09dfcef2f9b3",
  "07d490f3-0b6c-47e2-a5b4-1944dd8c18b3",
  "1298dd59-c66a-44fa-90e3-5fcc1d0a5bd9",
  "d8e69c46-80b9-4420-8a96-b53091db51df",
  "6ff2c17c-a840-44be-af95-4adfda4742b2",
  "c70e5b5a-80b0-49a0-80fb-7d245954efe6",
  "2e00e85e-e032-426e-a168-0bd36b8cdcb8",
  "32af92b0-6782-4b9e-a913-0c840dc7cf54",
  "1bb56d13-2dd3-4bc8-bb02-58a5d2a1bdce",
  "9c02de82-6eca-4bbe-9d26-5dd0df9ea391",
  "76d3afee-46f6-4cb6-8eab-b78013579bf9",
  "0b0d9217-908b-45be-877c-f2673fb5ae90",
  "ff4c5703-cf06-42ae-be9c-8259cc28690b",
  "83ed0005-ea58-4cab-a3ff-6b3c452bfb48",
  "def99368-5782-4671-88a6-76481e31be8e",
  "6dde3423-342b-4e79-825c-034c17a596c9",
  "c4ef5549-63d8-48c1-a636-fbfd2d0d8e53",
  "7ce06adb-3785-455d-95ae-3aa9eb88f6b5",
  "a29f762b-4cca-4151-9175-e0197d4d3f5a",
  "2285c13f-40e0-48f8-aa8b-c3544686b267",
  "f33354f2-a78f-4b24-ac59-f3cd0a874cab"
];

// var uuids=["5722cc22-32c2-4691-a07c-5ba318b8cd32"]
// data.map(or => {
//   uuids = [...uuids, ...or.allowedTransporters];
// });
// var uniqueUuids = new Set(uuids);
// console.log(uniqueUuids.size);
// console.log(JSON.stringify(Array.from(uniqueUuids)));
var token =
  "Beaer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODE0MTkwMTgsInVzZXJJZCI6IjAwZTEzODAyLTI3ZjEtNGM4OC04ZmIyLWRkN2VjMmM3NmZkNSIsImVtYWlsIjoiYWthc2guZHV0dGFAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI5Nzc2MjE3NzY5Iiwib3JnSWQiOiJlZjMwMDY4My05MDFiLTQ3NzQtYmYwZS05NTVkNDllNzk2YmMiLCJuYW1lIjoiQUtBU0ggRFVUVEEiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.1N36CLsukuaJE0wiwCPFVGTGi3DpXZYT2Vawd43a10s";
// http://apis.fretron.com/shipment-view/bpartners/partners?size=50&from=0&filters=%7B%22type.keyword%22%3A%5B%22vendor%22%5D%2C%22isPortalEnabled%22%3A%5B%5D%2C%22group.name.keyword%22%3A%5B%5D%2C%22places.name.keyword%22%3A%5B%5D%2C%22_customeField%22%3A%7B%7D%7D
var z = test2();
async function test() {
  var t = await getAuctions();
  let ids = [];
  t.data.map(or => {
    ids = [...ids, ...or.allowedTransporters];
  });
  var uniqueUuids = new Set(ids);
  console.log(ids.length);
  console.log(uniqueUuids.size);
  uuids = Array.from(uniqueUuids);
  // console.log(JSON.stringify(Array.from(uniqueUuids)));
  for (var i = 0; i < uuids.length; i++) {
    try {
      var v1 = await updatePartner(uuids[i], i);
    } catch (error) {
      console.log("err:", i);
    }
  }
}
async function getAuctions() {
  return await request(
    `http://apis.fretron.com/order-manager/auctions/v1/on-going/auctions?limit=200&offset=0&filters=%7B%7D`,
    // `http://apis.fretron.com/order-manager/auctions/v1/completed/auctions?limit=1000&offset=0&filters=%7B%7D`,
    {
      json: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    }
  );
}
// async function getVendors() {
//   return await request(
//     `http://apis.fretron.com/shipment-view/bpartners/partners?size=300&filters=%7B%22type.keyword%22%3A%5B%22vendor%22%5D%2C%22isPortalEnabled%22%3A%5B%5D%2C%22group.name.keyword%22%3A%5B%5D%2C%22places.name.keyword%22%3A%5B%5D%2C%22_customeField%22%3A%7B%7D%7D`,
//     {
//       json: true,
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: token
//       }
//     }
//   );
// }
async function test2() {
  var uuidArr=[]
  for (let i = 0; i < allFOSE.length; i++) {
    let v = await getVendors(allFOSE[i]);
    if (v && v.length > 0) {
      let ar = v.map(item => item.uuid);
      uuidArr = [...uuidArr, ...ar];
    }
  }
  console.log(uuidArr.length);
  for (var i = 0; i < uuidArr.length; i++) {
    try {
      var v1 = await updatePartner(uuidArr[i], i);
    } catch (error) {
      console.log("err:", i);
    }
  }
}

async function getVendors(fose) {
  var res = await request(
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
async function updatePartner(uuid, index) {
  var res = await request({
    uri:
      "http://apis.fretron.com/automate/autoapi/run/b2a28959-20a6-4d31-9016-a9cb635ae7ad",
    method: "POST",
    body: {
      allowedTransporters: [uuid]
    },
    json: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
  console.log(index);
  return res;
}
