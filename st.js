const businesspartnerPermissions = {
  type: "PermissionGroup",
  selectionType: "self",
  key: "businesspartner.admin",
  displayValue: "Admin",
  description: "Admin access to all Business Partner & Partner Group.",
  children: [
    {
      type: "PermissionGroup",
      selectionType: "self",
      key: "businesspartner.partner",
      displayValue: "All Business Partner",
      description: "Admin access to all Business Partner.",
      children: [
        {
          type: "Permission",
          key: "businesspartner.partner.create",
          displayValue: "Create Business Partner",
          description: "Access to create Business Partner.",
        },
        {
          type: "PermissionGroup",
          selectionType: "self",
          key: "businesspartner.partner.update",
          displayValue: "Update Business Partner",
          description: "Access to update Business Partner.",
          children: [
            {
              type: "Permission",
              key: "businesspartner.partner.update.eneblePortal",
              displayValue: "Enable Portal",
              description: "Access to enable portal.",
            },
            {
              type: "Permission",
              key: "businesspartner.partner.update.disablePortal",
              displayValue: "Disable Portal",
              description: "Access to disable portal.",
            },
            {
              type: "Permission",
              key: "businesspartner.partner.update.accessPortal",
              displayValue: "Access Portal",
              description: "Access to access portal.",
            },
            {
              type: "Permission",
              key: "businesspartner.partner.update.activeStatus",
              displayValue: "Active Status",
              description: "Access to active status.",
            },
            {
              type: "Permission",
              key: "businesspartner.partner.update.blockStatus",
              displayValue: "Block Status",
              description: "Access to block status.",
            },
            {
              type: "Permission",
              key: "businesspartner.partner.update.blacklistStatus",
              displayValue: "Blacklist Status",
              description: "Access to blacklist status.",
            },
            {
              type: "Permission",
              key: "businesspartner.partner.update.unverifiedVerificationStatus",
              displayValue: "Unverified Verification Status",
              description: "Access to unverified verification status.",
            },
            {
              type: "Permission",
              key: "businesspartner.partner.update.verificationPendingStatus",
              displayValue: "Verification Pending Status",
              description: "Access to verification pending status.",
            },
            {
              type: "Permission",
              key: "businesspartner.partner.update.requestVerification",
              displayValue: "Request Verification",
              description: "Access to request verification.",
            },
            {
              type: "Permission",
              key: "businesspartner.partner.update.verifiedVerificationStatus",
              displayValue: "Verified Verification Status",
              description: "Access to verified verification status.",
            },
            {
              type: "PermissionGroup",
              selectionType: "self",
              key: "businesspartner.partner.update.kycDetails",
              displayValue: "Update Kyc Details",
              description: "Access to update kyc Details in Business Partner.",
              children: [
                {
                  type: "Permission",
                  key: "businesspartner.partner.update.kycDetails.panCard",
                  displayValue: "Update Pan Card",
                  description: "Access to update pan card in kyc Details.",
                },
                {
                  type: "Permission",
                  key: "businesspartner.partner.create.kycDetails.paymentMode",
                  displayValue: "Create Payment Mode",
                  description: "Access to create payment mode in kyc Details.",
                },
                {
                  type: "Permission",
                  key: "businesspartner.partner.update.kycDetails.paymentMode",
                  displayValue: "Update Payment Mode",
                  description: "Access to update payment mode in kyc Details.",
                },
                {
                  type: "Permission",
                  key: "businesspartner.partner.delete.kycDetails.paymentMode",
                  displayValue: "Delete Payment Mode",
                  description: "Access to delete payment mode in kyc Details.",
                },
                {
                  type: "Permission",
                  key: "businesspartner.partner.update.kycDetails.aadhar",
                  displayValue: "Update Aadhar Details",
                  description: "Access to update aadhar details in kyc Details.",
                },
                {
                  type: "Permission",
                  key: "businesspartner.partner.update.kycDetails.gst",
                  displayValue: "Update Gst Details",
                  description: "Access to update gst details in kyc Details.",
                },
              ],
            },
            {
              type: "PermissionGroup",
              selectionType: "self",
              key: "businesspartner.partner.update.vehicleLane",
              displayValue: "Update Vehicle Lane",
              description: "Access to update Vehicle Lane in Business Partner.",
              children: [
                {
                  type: "Permission",
                  key: "businesspartner.partner.create.lane",
                  displayValue: "Create Lane",
                  description: "Access to Create Lane in Vehicle Lane.",
                },
                {
                  type: "Permission",
                  key: "businesspartner.partner.update.lane",
                  displayValue: "Update Lane",
                  description: "Access to update Lane in Vehicle Lane.",
                },
              ]
            },
            {
              type: "PermissionGroup",
              selectionType: "self",
              key: "businesspartner.partner.update.portalConfig",
              displayValue: "Update Portal Config",
              description: "Access to update Portal Config in Business Partner.",
              children: [
                {
                  type: "Permission",
                  key: "businesspartner.partner.update.portalConfig.shipment",
                  displayValue: "Update Shipment",
                  description: "Access to Update Shipment in Portal Config.",
                }
              ]
            },
            {
              type: "PermissionGroup",
              selectionType: "self",
              key: "businesspartner.partner.update.portalSecurity",
              displayValue: "Update Portal Security",
              description: "Access to update Portal Security in Business Partner.",
              children: [
                {
                  type: "Permission",
                  key: "businesspartner.partner.create.portalSecurity.user",
                  displayValue: "Create User",
                  description: "Access to create User in Portal Security.",
                },
                {
                  type: "Permission",
                  key: "businesspartner.partner.update.portalSecurity.role",
                  displayValue: "Update User",
                  description: "Access to update Role in Portal Security.",
                }
              ]
            },
            {
              type: "PermissionGroup",
              selectionType: "self",
              key: "businesspartner.partner.update.partnerContact",
              displayValue: "Update Partner Contact",
              description: "Access to update Partner Contact in Business Partner.",
              children: [
                {
                  type: "Permission",
                  key: "businesspartner.partner.create.partnerContact.contact",
                  displayValue: "Create Contact",
                  description: "Access to create Contact in Partner Contact.",
                },
                {
                  type: "Permission",
                  key: "businesspartner.partner.update.partnerContact.contact",
                  displayValue: "Update Contact",
                  description: "Access to update Contact in Partner Contact.",
                },
                {
                  type: "Permission",
                  key: "businesspartner.partner.delete.partnerContact.contact",
                  displayValue: "Delete Contact",
                  description: "Access to delete Contact in Partner Contact.",
                }
              ]
            },
            {
              type: "Permission",
              key: "businesspartner.partner.update.customFields",
              displayValue: "Update Custom Fields",
              description: "Access to update Custom Fields in Business Partner.",
            }
          ],
        },
        {
          type: "Permission",
          key: "businesspartner.partner.delete",
          displayValue: "Delete Business Partner",
          description: "Access to delete Business Partner.",
        },
      ],
    },
    {
      type: "PermissionGroup",
      selectionType: "self",
      key: "businesspartner.group",
      displayValue: "All Partner Group",
      description: "Admin access to all Partner Group.",
      children: [
        {
          type: "Permission",
          key: "businesspartner.group.create",
          displayValue: "Create Partner Group",
          description: "Access to create  partner group.",
        },
        {
          type: "Permission",
          key: "businesspartner.group.update",
          displayValue: "Update group Group",
          description: "Access to update partner group.",
        },
        {
          type: "Permission",
          key: "businesspartner.group.delete",
          displayValue: "Delete Partner Group",
          description: "Access to delete partner group.",
        },
      ],
    },
  ],
};