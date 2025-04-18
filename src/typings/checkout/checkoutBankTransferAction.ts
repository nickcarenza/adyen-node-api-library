/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';

export class CheckoutBankTransferAction {
    /**
    * The account number of the bank transfer.
    */
    'accountNumber'?: string;
    /**
    * The name of the account holder.
    */
    'beneficiary'?: string;
    /**
    * The BIC of the IBAN.
    */
    'bic'?: string;
    /**
    * The url to download payment details with.
    */
    'downloadUrl'?: string;
    /**
    * The IBAN of the bank transfer.
    */
    'iban'?: string;
    /**
    * Specifies the payment method.
    */
    'paymentMethodType'?: string;
    /**
    * The transfer reference.
    */
    'reference'?: string;
    /**
    * The routing number of the bank transfer.
    */
    'routingNumber'?: string;
    /**
    * The e-mail of the shopper, included if an e-mail was sent to the shopper.
    */
    'shopperEmail'?: string;
    /**
    * The sort code of the bank transfer.
    */
    'sortCode'?: string;
    'totalAmount'?: Amount | null;
    /**
    * The type of the action.
    */
    'type': CheckoutBankTransferAction.TypeEnum;
    /**
    * Specifies the URL to redirect to.
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountNumber",
            "baseName": "accountNumber",
            "type": "string"
        },
        {
            "name": "beneficiary",
            "baseName": "beneficiary",
            "type": "string"
        },
        {
            "name": "bic",
            "baseName": "bic",
            "type": "string"
        },
        {
            "name": "downloadUrl",
            "baseName": "downloadUrl",
            "type": "string"
        },
        {
            "name": "iban",
            "baseName": "iban",
            "type": "string"
        },
        {
            "name": "paymentMethodType",
            "baseName": "paymentMethodType",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "routingNumber",
            "baseName": "routingNumber",
            "type": "string"
        },
        {
            "name": "shopperEmail",
            "baseName": "shopperEmail",
            "type": "string"
        },
        {
            "name": "sortCode",
            "baseName": "sortCode",
            "type": "string"
        },
        {
            "name": "totalAmount",
            "baseName": "totalAmount",
            "type": "Amount | null"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CheckoutBankTransferAction.TypeEnum"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutBankTransferAction.attributeTypeMap;
    }
}

export namespace CheckoutBankTransferAction {
    export enum TypeEnum {
        BankTransfer = 'bankTransfer'
    }
}
