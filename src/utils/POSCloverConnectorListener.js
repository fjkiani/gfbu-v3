import React from 'react';
import clover from 'remote-pay-cloud';

export default class POSCloverConnectorListener extends clover.sdk.remotepay.ICloverConnectorListener{

    constructor(options) {
        super();
        Object.assign(this, options);
        this.lastDeviceEvent = null;
        this.setPaymentStatus = this.setPaymentStatus.bind(this);
        this.CUSTOM_ACTIVITY_PACKAGE = 'com.clover.cfp.examples.';
    }

    //<editor-fold desc="Clover Device Events">

    /*
     *                     CLOVER DEVICE EVENTS
     *****************************************************************
     */

    //<editor-fold desc="Device Communication">
    // COMMUNICATION

    onDeviceActivityStart(deviceEvent) {     // called when a Clover device activity starts
        console.log("onDeviceActivityStart", deviceEvent);
        this.lastDeviceEvent = deviceEvent.getEventState();
        let message = deviceEvent.getMessage();
        if(message !== undefined && this.notCustomActivity(message) && message !== null) {
            this.setStatus(deviceEvent.getMessage());
        }
        if(!this.notCustomActivity(message)){
            this.customSuccess(true);
        }
        if(deviceEvent.inputOptions.length > 0){
            this.inputOptions(deviceEvent.inputOptions);
        }
    }

    onDeviceActivityEnd(deviceEvent) {      // called when a Clover device activity ends
        // console.log("onDeviceActivityEnd", deviceEvent);
        if(deviceEvent.getEventState() !== undefined){
            this.closeStatus();
        }
    }

    onDeviceConnected(){    // called when the Clover device is connected, but not ready to communicate
        console.log('onDeviceConnected');
    }

    onDeviceDisconnected(){     // called when the Clover device is disconnected
        console.log('onDeviceDisconnected');
    }

    onDeviceError(deviceErrorEvent){    // called when a Clover device error event is encountered
        console.log('onDeviceError', deviceErrorEvent);
        //TODO
    }

    onDeviceReady(merchantInfo){ // called when the Clover device is ready to communicate
        // console.log('onDeviceReady', merchantInfo);
        this.toggleConnection(true);
    }

    onReady(merchantInfo){
        // console.log('onReady', merchantInfo);
        this.onDeviceReady(merchantInfo);
    }

    // RECOVERY

    onRetrievePendingPaymentsResponse(response) {       // called in response to a retrievePendingPayments request
        console.log('onRetrievePendingPaymentsResponse', response);
    }

    onRetrieveDeviceStatusResponse(response){       // called in response to retrieveDeviceState request
        console.log('onRetrieveDeviceStatusResponse', response);
    }

    onResetDeviceResponse(response) {       // called in response to a resetDevice request
        console.log('onResetDeviceResponse', response);
        if(response.success){
            this.setStatus('Reset Device Successful', 'Toggle');
        }
        else{
            this.setStatus(`Reset Device Failed, Reason: ${response.reason}`);
        }
    }

    onRetrievePaymentResponse(response) {       // called in response to a retrievePaymentRequest
        console.log('onRetrievePaymentResponse', response);
        let paymentLines = [];
        paymentLines.push('Retrieve Payment: ' + (response.success ? 'Success!' : 'Failed!'));
        paymentLines.push(`Query Status: ${response.queryStatus}`);
        paymentLines.push(`Reason: ${response.reason}`);
        if(response.payment !== null  && response.payment !== undefined) {
            paymentLines.push('**************************************************');
            paymentLines.push('PAYMENT');
            paymentLines.push(`Result: ${response.payment.result}`);
            let date = new Date(response.payment.createdTime);
            paymentLines.push(`    Date: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`);
        }
        console.log(paymentLines);
        this.setStatus({title: 'Payment Details', data: paymentLines});
    };

    //</editor-fold>

    //<editor-fold desc="Transaction Responses">

    /*
     *                      TRANSACTION RESPONSES
     *****************************************************************
     */


    // PRE AUTH

    onCapturePreAuthResponse(response){     // called in response to a capture of a pre auth payment
        console.log('onCapturePreAuthResponse', response);
        this.cloverConnector.showWelcomeScreen();
    }

    onPreAuthResponse(response) {    // called in response to a pre auth request
        console.log('onPreAuthResponse', response);
    }

    // AUTH

    onAuthResponse(response){   // called in response to an auth request
        console.log('onAuthResponse', response);
    }

    // SALE

    onSaleResponse(response) {      // called in response to a sale request
        console.log('onSaleResponse', response);
    }

    // TIPS

    onTipAdjustAuthResponse(response) {      // called in response to a tip adjust of an auth payment
        console.log('onTipAdjustAuthResponse', response);
    }

    onTipAdded(tipAdded){       // called when a customer selects a tip amount on the Clover device screen
        console.log('onTipAdded', tipAdded);
        //TODO add success check
        if (tipAdded.tipAmount > 0) {
            this.tipAdded(tipAdded.tipAmount);
        }
        else{
            this.tipAdded(0);
        }
    }

    // OTHER

    onConfirmPaymentRequest(request) {      // called when the Clover device requires confirmation for a payment (ex. duplicates/offline)
        console.log('onConfirmPaymentRequest', request);
    }

    onVerifySignatureRequest(request){      // called when the Clover device requires a signature to be verified
        console.log('onVerifySignatureRequest', request);
    }

    onCloseoutResponse(response) {      // called in response to a closeout being processed
        console.log('onCloseoutResponse', response);
    }

    onVoidPaymentResponse(response){    // called in response to a void payment request
        console.log('onVoidPaymentResponse', response);
    }

    setPaymentStatus(payment, response) {       // sets the payment status based on the response
        if (response.isSale) {
            payment.setStatus('PAID');
        } else if (response.isAuth) {
            payment.setStatus('AUTH');
        } else if (response.isPreAuth) {
            payment.setStatus('PREAUTH');
        }
    }

}
