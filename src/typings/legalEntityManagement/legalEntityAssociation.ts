/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class LegalEntityAssociation {
    /**
    * The unique identifier of another legal entity with which the `legalEntityId` is associated. When the `legalEntityId` is associated to legal entities other than the current one, the response returns all the associations.
    */
    'associatorId'?: string;
    /**
    * The legal entity type of associated legal entity.   For example, **organization**, **soleProprietorship** or **individual**. 
    */
    'entityType'?: string;
    /**
    * The individual\'s job title if the `type` is **uboThroughControl** or **signatory**.
    */
    'jobTitle'?: string;
    /**
    * The unique identifier of the associated [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id).
    */
    'legalEntityId': string;
    /**
    * The name of the associated [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id).  - For **individual**, `name.firstName` and `name.lastName`. - For **organization**, `legalName`. - For **soleProprietorship**, `name`.
    */
    'name'?: string;
    /**
    * Defines the relationship of the legal entity to the current legal entity.   For example, **uboThroughOwnership**, **uboThroughControl**, or **signatory**. 
    */
    'type': LegalEntityAssociation.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "associatorId",
            "baseName": "associatorId",
            "type": "string"
        },
        {
            "name": "entityType",
            "baseName": "entityType",
            "type": "string"
        },
        {
            "name": "jobTitle",
            "baseName": "jobTitle",
            "type": "string"
        },
        {
            "name": "legalEntityId",
            "baseName": "legalEntityId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LegalEntityAssociation.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return LegalEntityAssociation.attributeTypeMap;
    }
}

export namespace LegalEntityAssociation {
    export enum TypeEnum {
        Signatory = <any> 'signatory',
        UboThroughControl = <any> 'uboThroughControl',
        UboThroughOwnership = <any> 'uboThroughOwnership'
    }
}
