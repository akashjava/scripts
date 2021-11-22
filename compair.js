var oldObj={}
var sdefaulte={
    "orgId": "ORG",
    "uuid": null,
    "name": "SystemDefault",
    "type": "System",
    "applicableFor": [],
    "settings": {
      "VehicleInfo": {
        "type": "DOMAIN",
        "isApplicable": false,
        "applicableFrom": null,
        "applicableTill": "UnderLoading",
        "validator": null,
        "fields": [
          {
            "fieldKey": "VisisbleVehicleNo",
            "isMandate": true,
            "fieldId": "VisisbleVehicleNo",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "ChassisNo",
            "isMandate": false,
            "fieldId": "ChassisNo",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "RCImage",
            "isMandate": false,
            "fieldId": "RCImage",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "RCValidUpto",
            "isMandate": false,
            "fieldId": "RCValidUpto",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "VehicleType",
            "isMandate": false,
            "fieldId": "VehicleType",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "Manufacturer",
            "isMandate": false,
            "fieldId": "Manufacturer",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "ModelNo",
            "isMandate": false,
            "fieldId": "ModelNo",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "ModelYear",
            "isMandate": false,
            "fieldId": "ModelYear",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "BodyType",
            "isMandate": false,
            "fieldId": "BodyType",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "CarryingCapacity",
            "isMandate": false,
            "fieldId": "CarryingCapacity",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "VehicleLength",
            "isMandate": false,
            "fieldId": "VehicleLength",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "EngineNo",
            "isMandate": false,
            "fieldId": "EngineNo",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "InsuranceImage",
            "isMandate": false,
            "fieldId": "InsuranceImage",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "InsuranceCompany",
            "isMandate": false,
            "fieldId": "InsuranceCompany",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "PolicyNo",
            "isMandate": false,
            "fieldId": "PolicyNo",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "PolicyValidUpto",
            "isMandate": false,
            "fieldId": "PolicyValidUpto",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "FitnessImage",
            "isMandate": false,
            "fieldId": "FitnessImage",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "FitnessValidUpto",
            "isMandate": false,
            "fieldId": "FitnessValidUpto",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "PermitImage",
            "isMandate": false,
            "fieldId": "PermitImage",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "PermitNo",
            "isMandate": false,
            "fieldId": "PermitNo",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "PermitValidUpto",
            "isMandate": false,
            "fieldId": "PermitValidUpto",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "VehicleImage",
            "isMandate": false,
            "fieldId": "VehicleImage",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "IsVerified",
            "isMandate": true,
            "fieldId": "IsVerified",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": false
          }
  
        ]
      },
      "DriverInfo": {
        "type": "DOMAIN",
        "isApplicable": false,
        "applicableFrom": "WaitingForLoading",
        "applicableTill": "UnderLoading",
        "validator": null,
        "fields": [
          {
            "fieldKey": "DriverName",
            "isMandate": true,
            "fieldId": "DriverName",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "MobileNumber",
            "isMandate": false,
            "fieldId": "MobileNumber",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "Address",
            "isMandate": false,
            "fieldId": "Address",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "Pincode",
            "isMandate": false,
            "fieldId": "Pincode",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "LicenseImage",
            "isMandate": false,
            "fieldId": "LicenseImage",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "LicenseNo",
            "isMandate": false,
            "fieldId": "LicenseNo",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "ValidUpTo",
            "isMandate": false,
            "fieldId": "ValidUpTo",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "AadharCardNo",
            "isMandate": false,
            "fieldId": "AadharCardNo",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "AadharImage",
            "isMandate": false,
            "fieldId": "AadharImage",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "ProfileImage",
            "isMandate": false,
            "fieldId": "ProfileImage",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          }
        ]
      },
      "HelperInfo": {
        "type": "DOMAIN",
        "isApplicable": false,
        "applicableFrom": "WaitingForLoading",
        "applicableTill": "UnderLoading",
        "validator": null,
        "fields": [
          {
            "fieldKey": "DriverName",
            "isMandate": true,
            "fieldId": "DriverName",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "MobileNumber",
            "isMandate": false,
            "fieldId": "MobileNumber",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "Address",
            "isMandate": false,
            "fieldId": "Address",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "Pincode",
            "isMandate": false,
            "fieldId": "Pincode",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "LicenseImage",
            "isMandate": false,
            "fieldId": "LicenseImage",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "LicenseNo",
            "isMandate": false,
            "fieldId": "LicenseNo",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "ValidUpTo",
            "isMandate": false,
            "fieldId": "ValidUpTo",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "AadharCardNo",
            "isMandate": false,
            "fieldId": "AadharCardNo",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "AadharImage",
            "isMandate": false,
            "fieldId": "AadharImage",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "ProfileImage",
            "isMandate": false,
            "fieldId": "ProfileImage",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          }
        ]
      },
      "FleetOwnerInfo": {
        "type": "DOMAIN",
        "isApplicable": false,
        "applicableFrom": "UnderLoading",
        "applicableTill": "WaitingForDeparture",
        "validator": null,
        "fields": [
          {
            "fieldKey": "PANNo",
            "isMandate": true,
            "fieldId": "PANNo",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "GSTNo",
            "isMandate": false,
            "fieldId": "GSTNo",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "Proprietor",
            "isMandate": true,
            "fieldId": "Proprietor",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "FirmName",
            "isMandate": true,
            "fieldId": "FirmName",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "Contacts",
            "isMandate": false,
            "fieldId": "Contacts",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "AadharCardNo",
            "isMandate": false,
            "fieldId": "AadharCardNo",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "AdharImage",
            "isMandate": false,
            "fieldId": "AdharImage",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "Email",
            "isMandate": false,
            "fieldId": "Email",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "Address",
            "isMandate": false,
            "fieldId": "Address",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "IsVerified",
            "isMandate": true,
            "fieldId": "IsVerified",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": false
          }
        ]
      },
      "ConsignmentInfo": {
        "type": "DOMAIN",
        "isApplicable": false,
        "applicableFrom": "UnderLoading",
        "applicableTill": "WaitingForDeparture",
        "validator": null,
        "fields": [
          {
            "fieldKey": "ConsignmentNo",
            "isMandate": true,
            "fieldId": "ConsignmentNo",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "CustomerName",
            "isMandate": true,
            "fieldId": "CustomerName",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "ConsigneeName",
            "isMandate": true,
            "fieldId": "ConsigneeName",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "ConsigneeAddress",
            "isMandate": true,
            "fieldId": "ConsigneeAddress",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "ConsignorName",
            "isMandate": true,
            "fieldId": "ConsignorName",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "ConsignorAddress",
            "isMandate": true,
            "fieldId": "ConsignorAddress",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "MaterialType",
            "isMandate": false,
            "fieldId": "MaterialType",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "UOM",
            "isMandate": false,
            "fieldId": "UOM",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "NetLoad",
            "isMandate": false,
            "fieldId": "NetLoad",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "GrossLoad",
            "isMandate": false,
            "fieldId": "GrossLoad",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "StandardLoad",
            "isMandate": false,
            "fieldId": "StandardLoad",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "BankName",
            "isMandate": false,
            "fieldId": "BankName",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "InsuranceCompany",
            "isMandate": false,
            "fieldId": "InsuranceCompany",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "PolicyNo",
            "isMandate": false,
            "fieldId": "PolicyNo",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "PolicyValidUpto",
            "isMandate": false,
            "fieldId": "PolicyValidUpto",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "PSNNo",
            "isMandate": false,
            "fieldId": "PSNNo",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "CustomerPSN",
            "isMandate": false,
            "fieldId": "CustomerPSN",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          }
        ]
      },
      "TrackingInfo": {
        "type": "DOMAIN",
        "isApplicable": false,
        "applicableFrom": "WaitingForLoading",
        "applicableTill": "WaitingForDeparture",
        "validator": null,
        "fields": [
          {
            "fieldKey": "TrackingMode",
            "isMandate": true,
            "fieldId": "TrackingMode",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "FastTagNo",
            "isMandate": true,
            "fieldId": "FastTagNo",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "DeviceType",
            "isMandate": true,
            "fieldId": "DeviceType",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "IMEI",
            "isMandate": true,
            "fieldId": "IMEI",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          },
          {
            "fieldKey": "ContactNumber",
            "isMandate": true,
            "fieldId": "ContactNumber",
            "isCustomField": false,
            "isApplicable": true,
            "fieldValue": null
          }
        ]
      }
    }
  }