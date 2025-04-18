/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
 
/**
 * Notification API
 * Definition of Notification API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Amount } from './amount';

export class NotificationRequestItem {
    'additionalData'?: { [key: string]: string; };
    'amount': Amount;
    /**
    * Adyen\'s 16-character unique reference associated with the transaction/the request. This value is globally unique; quote it when communicating with us about this request.
    */
    'pspReference': string;
    /**
    * The type of event the notification item refers to. When eventCode returns AUTHORISATION, it does not necessarily mean that the payment authorisation request has been successfully processed. The authorisation is successful if success = true. If success = false, check the  the reason value for further information on the authorisation failure cause. This can occur, for example, if an error occurs or if the transaction is refused.
    */
    'eventCode': NotificationRequestItem.EventCodeEnum;
    /**
    * The time when the event was generated.
    */
    'eventDate': string;
    /**
    * The merchant account identifier used in the transaction the notification item refers to.
    */
    'merchantAccountCode': string;
    /**
    * This field holds a list of the modification operations supported by the transaction the notification item refers to. The available operations in the list give information on the follow-up actions concerning the payment. You may be requested to: Capture the payment (for example, if auto-capture is not set up), Cancel the payment (if the payment has not been captured yet), or Refund the payment (if the payment has already been captured).
    */
    'operations'?: Array<NotificationRequestItem.OperationsEnum>;
    /**
    *   A reference to uniquely identify the payment.This reference is used in all communication with you about the payment status.We recommend using a unique value per payment; however, it is not a requirement. If you need to provide multiple references for a transaction, you can enter them in this field. Separate each reference value with a hyphen character (\'-\'). This field has a length restriction: you can enter max. 80 characters.
    */
    'merchantReference': string;
    /**
    * If the notification item is about a payment authorisation, this field is not populated and is blank. If the notification item is about a modification, the originalReference value corresponds to the payment request assigned to the original payment.
    */
    'originalReference'?: string;
    /**
    * The payment method used in the transaction the notification item refers to.
    */
    'paymentMethod'?: string;
    /**
    * This field holds plain text. For more information, refer to the reason field values below.
    */
    'reason'?: string;
    /**
    * Informs about the outcome of the event ( eventCode ) the notification refers to. true: the event ( eventCode ) the notification refers to was executed successfully. false: the event was not executed successfully.
    */
    'success': NotificationRequestItem.SuccessEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "AdditionalData"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "eventCode",
            "baseName": "eventCode",
            "type": "NotificationRequestItem.EventCodeEnum"
        },
        {
            "name": "eventDate",
            "baseName": "eventDate",
            "type": "string"
        },
        {
            "name": "merchantAccountCode",
            "baseName": "merchantAccountCode",
            "type": "string"
        },
        {
            "name": "operations",
            "baseName": "operations",
            "type": "Array<NotificationRequestItem.OperationsEnum>"
        },
        {
            "name": "merchantReference",
            "baseName": "merchantReference",
            "type": "string"
        },
        {
            "name": "originalReference",
            "baseName": "originalReference",
            "type": "string"
        },
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "NotificationRequestItem.SuccessEnum"
        }    ];

    static getAttributeTypeMap() {
        return NotificationRequestItem.attributeTypeMap;
    }
}

export namespace NotificationRequestItem {
    export enum EventCodeEnum {
        Autorescue = <any> 'AUTORESCUE',
        Authorisation = <any> 'AUTHORISATION',
        AuthorisationAdjustment = <any> 'AUTHORISATION_ADJUSTMENT',
        CancelAutorescue = <any> 'CANCEL_AUTORESCUE',
        Cancellation = <any> 'CANCELLATION',
        CancelOrRefund = <any> 'CANCEL_OR_REFUND',
        Capture = <any> 'CAPTURE',
        CaptureFailed = <any> 'CAPTURE_FAILED',
        Chargeback = <any> 'CHARGEBACK',
        ChargebackReversed = <any> 'CHARGEBACK_REVERSED',
        Donation = <any> 'DONATION',
        Expire = <any> 'EXPIRE',
        HandledExternally = <any> 'HANDLED_EXTERNALLY',
        IssuerComments = <any> 'ISSUER_COMMENTS',
        ManualReviewAccept = <any> 'MANUAL_REVIEW_ACCEPT',
        ManualReviewReject = <any> 'MANUAL_REVIEW_REJECT',
        NotificationOfChargeback = <any> 'NOTIFICATION_OF_CHARGEBACK',
        NotificationOfFraud = <any> 'NOTIFICATION_OF_FRAUD',
        OfferClosed = <any> 'OFFER_CLOSED',
        OrderClosed = <any> 'ORDER_CLOSED',
        OrderOpened = <any> 'ORDER_OPENED',
        PaidoutReversed = <any> 'PAIDOUT_REVERSED',
        Pending = <any> 'PENDING',
        PostponedRefund = <any> 'POSTPONED_REFUND',
        PrearbitrationLost = <any> 'PREARBITRATION_LOST',
        PrearbitrationWon = <any> 'PREARBITRATION_WON',
        ProcessRetry = <any> 'PROCESS_RETRY',
        PayoutDecline = <any> 'PAYOUT_DECLINE',
        PayoutExpire = <any> 'PAYOUT_EXPIRE',
        PayoutThirdparty = <any> 'PAYOUT_THIRDPARTY',
        RecurringContract = <any> 'RECURRING_CONTRACT',
        Refund = <any> 'REFUND',
        RefundFailed = <any> 'REFUND_FAILED',
        RefundedReversed = <any> 'REFUNDED_REVERSED',
        RefundWithData = <any> 'REFUND_WITH_DATA',
        ReportAvailable = <any> 'REPORT_AVAILABLE',
        RequestForInformation = <any> 'REQUEST_FOR_INFORMATION',
        SecondChargeback = <any> 'SECOND_CHARGEBACK',
        TechnicalCancel = <any> 'TECHNICAL_CANCEL',
        VoidPendingRefund = <any> 'VOID_PENDING_REFUND'
    }
    export enum OperationsEnum {
        Cancel = <any> 'CANCEL',
        Capture = <any> 'CAPTURE',
        Refund = <any> 'REFUND'
    }
    export enum SuccessEnum {
        True = <any> 'true',
        False = <any> 'false'
    }
}
