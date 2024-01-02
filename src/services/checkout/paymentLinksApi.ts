/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import Client from "../../client";
import { 
    PaymentLinkRequest,
    PaymentLinkResponse,
    UpdatePaymentLinkRequest,
    ObjectSerializer
} from "../../typings/checkout/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class PaymentLinksApi extends Service {

    private readonly API_BASEPATH: string = "https://checkout-test.adyen.com/v71";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Get a payment link
    * @param linkId {@link string } Unique identifier of the payment link.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentLinkResponse }
    */
    public async getPaymentLink(linkId: string, requestOptions?: IRequest.Options): Promise<PaymentLinkResponse> {
        const endpoint = `${this.baseUrl}/paymentLinks/{linkId}`
            .replace("{" + "linkId" + "}", encodeURIComponent(String(linkId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, PaymentLinkResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "PaymentLinkResponse");
    }

    /**
    * @summary Update the status of a payment link
    * @param linkId {@link string } Unique identifier of the payment link.
    * @param updatePaymentLinkRequest {@link UpdatePaymentLinkRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentLinkResponse }
    */
    public async updatePaymentLink(linkId: string, updatePaymentLinkRequest: UpdatePaymentLinkRequest, requestOptions?: IRequest.Options): Promise<PaymentLinkResponse> {
        const endpoint = `${this.baseUrl}/paymentLinks/{linkId}`
            .replace("{" + "linkId" + "}", encodeURIComponent(String(linkId)));
        const resource = new Resource(this, endpoint);
        const request: UpdatePaymentLinkRequest = ObjectSerializer.serialize(updatePaymentLinkRequest, "UpdatePaymentLinkRequest");
        const response = await getJsonResponse<UpdatePaymentLinkRequest, PaymentLinkResponse>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "PaymentLinkResponse");
    }

    /**
    * @summary Create a payment link
    * @param paymentLinkRequest {@link PaymentLinkRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentLinkResponse }
    */
    public async paymentLinks(paymentLinkRequest: PaymentLinkRequest, requestOptions?: IRequest.Options): Promise<PaymentLinkResponse> {
        const endpoint = `${this.baseUrl}/paymentLinks`;
        const resource = new Resource(this, endpoint);
        const request: PaymentLinkRequest = ObjectSerializer.serialize(paymentLinkRequest, "PaymentLinkRequest");
        const response = await getJsonResponse<PaymentLinkRequest, PaymentLinkResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentLinkResponse");
    }
}
