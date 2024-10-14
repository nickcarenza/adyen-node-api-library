/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TransactionRuleEntityKey } from './transactionRuleEntityKey';
import { TransactionRuleInterval } from './transactionRuleInterval';
import { TransactionRuleRestrictions } from './transactionRuleRestrictions';

export class TransactionRuleInfo {
    /**
    * The level at which data must be accumulated, used in rules with `type` **velocity** or **maxUsage**. The level must be the [same or lower in hierarchy](https://docs.adyen.com/issuing/transaction-rules#accumulate-data) than the `entityKey`.  If not provided, by default, the rule will accumulate data at the **paymentInstrument** level.  Possible values: **paymentInstrument**, **paymentInstrumentGroup**, **balanceAccount**, **accountHolder**, **balancePlatform**.
    */
    'aggregationLevel'?: string;
    /**
    * Your description for the transaction rule.
    */
    'description': string;
    /**
    * The date when the rule will stop being evaluated, in ISO 8601 extended offset date-time format. For example, **2020-12-18T10:15:30+01:00**.  If not provided, the rule will be evaluated until the rule status is set to **inactive**.
    */
    'endDate'?: string;
    'entityKey': TransactionRuleEntityKey;
    'interval': TransactionRuleInterval;
    /**
    * The [outcome](https://docs.adyen.com/issuing/transaction-rules#outcome) that will be applied when a transaction meets the conditions of the rule.  Possible values: * **hardBlock**: the transaction is declined. * **scoreBased**: the transaction is assigned the `score` you specified. Adyen calculates the total score and if it exceeds 100, declines the Transaction.  Default value: **hardBlock**.  > **scoreBased** is not allowed when `requestType` is **bankTransfer**.
    */
    'outcomeType'?: TransactionRuleInfo.OutcomeTypeEnum;
    /**
    * Your reference for the transaction rule.
    */
    'reference': string;
    /**
    * Indicates the type of request to which the rule applies. If not provided, by default, this is set to **authorization**.  Possible values: **authorization**, **authentication**, **tokenization**, **bankTransfer**.
    */
    'requestType'?: TransactionRuleInfo.RequestTypeEnum;
    'ruleRestrictions': TransactionRuleRestrictions;
    /**
    * A positive or negative score applied to the transaction if it meets the conditions of the rule. Required when `outcomeType` is **scoreBased**.  The value must be between **-100** and **100**.
    */
    'score'?: number;
    /**
    * The date when the rule will start to be evaluated, in ISO 8601 extended offset date-time format. For example, **2020-12-18T10:15:30+01:00**.  If not provided when creating a transaction rule, the `startDate` is set to the date when the rule status is set to **active**.   
    */
    'startDate'?: string;
    /**
    * The status of the transaction rule. If you provide a `startDate` in the request, the rule is automatically created  with an **active** status.   Possible values: **active**, **inactive**.
    */
    'status'?: TransactionRuleInfo.StatusEnum;
    /**
    * The [type of rule](https://docs.adyen.com/issuing/transaction-rules#rule-types), which defines if a rule blocks transactions based on individual characteristics or accumulates data.  Possible values:  * **blockList**: decline a transaction when the conditions are met.  * **maxUsage**: add the amount or number of transactions for the lifetime of a payment instrument, and then decline a transaction when the specified limits are met.  * **velocity**: add the amount or number of transactions based on a specified time interval, and then decline a transaction when the specified limits are met. 
    */
    'type': TransactionRuleInfo.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "aggregationLevel",
            "baseName": "aggregationLevel",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "string"
        },
        {
            "name": "entityKey",
            "baseName": "entityKey",
            "type": "TransactionRuleEntityKey"
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "TransactionRuleInterval"
        },
        {
            "name": "outcomeType",
            "baseName": "outcomeType",
            "type": "TransactionRuleInfo.OutcomeTypeEnum"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "requestType",
            "baseName": "requestType",
            "type": "TransactionRuleInfo.RequestTypeEnum"
        },
        {
            "name": "ruleRestrictions",
            "baseName": "ruleRestrictions",
            "type": "TransactionRuleRestrictions"
        },
        {
            "name": "score",
            "baseName": "score",
            "type": "number"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TransactionRuleInfo.StatusEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TransactionRuleInfo.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return TransactionRuleInfo.attributeTypeMap;
    }
}

export namespace TransactionRuleInfo {
    export enum OutcomeTypeEnum {
        EnforceSca = 'enforceSCA',
        HardBlock = 'hardBlock',
        ScoreBased = 'scoreBased',
        TimedBlock = 'timedBlock'
    }
    export enum RequestTypeEnum {
        Authentication = 'authentication',
        Authorization = 'authorization',
        BankTransfer = 'bankTransfer',
        Tokenization = 'tokenization'
    }
    export enum StatusEnum {
        Active = 'active',
        Inactive = 'inactive'
    }
    export enum TypeEnum {
        AllowList = 'allowList',
        BlockList = 'blockList',
        MaxUsage = 'maxUsage',
        Velocity = 'velocity'
    }
}
