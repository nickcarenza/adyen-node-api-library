/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class CollectInformation {
    /**
    * Indicates whether [bank account details](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks/bank-account-check) must be collected. Default is **true**.
    */
    'bankDetails'?: boolean;
    /**
    * Indicates whether [business details](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks/company-check) must be collected. Default is **true**.
    */
    'businessDetails'?: boolean;
    /**
    * Indicates whether [individual details](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks/identity-check) must be collected. Default is **true**.
    */
    'individualDetails'?: boolean;
    /**
    * Indicates whether [legal arrangement details](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks/legal-arrangements) must be collected. Default is **true**.
    */
    'legalArrangementDetails'?: boolean;
    /**
    * Indicates whether answers to a [PCI questionnaire](https://docs.adyen.com/marketplaces-and-platforms/classic/platforms-for-partners#onboard-partner-platform) must be collected. Applies only to partner platforms. Default is **true**.
    */
    'pciQuestionnaire'?: boolean;
    /**
    * Indicates whether [shareholder details](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks/identity-check) must be collected. Defaults to **true**.
    */
    'shareholderDetails'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bankDetails",
            "baseName": "bankDetails",
            "type": "boolean"
        },
        {
            "name": "businessDetails",
            "baseName": "businessDetails",
            "type": "boolean"
        },
        {
            "name": "individualDetails",
            "baseName": "individualDetails",
            "type": "boolean"
        },
        {
            "name": "legalArrangementDetails",
            "baseName": "legalArrangementDetails",
            "type": "boolean"
        },
        {
            "name": "pciQuestionnaire",
            "baseName": "pciQuestionnaire",
            "type": "boolean"
        },
        {
            "name": "shareholderDetails",
            "baseName": "shareholderDetails",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CollectInformation.attributeTypeMap;
    }
}

