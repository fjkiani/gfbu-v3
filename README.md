#### .env vars

- REACT_APP_AUTH_DOMAIN=
- REACT_APP_CLIENT_ID=
- REACT_APP_STRIPE_PUBLIC_KEY=
- REACT_APP_STRIPE_SECRET_KEY=

#### Extra Setup

```
npm install dotenv@8.2.0 stripe@8.130.0 @stripe/react-stripe-js@1.1.2 @stripe/stripe-js@1.11.0 netlify@6.0.12
```

### Clover Setup

* Install the Secure Network Pay Display App on your Clover POS. You can find more information regarding that here https://docs.clover.com/docs/pay-display-apps#section-secure-network-pay-display
* Once you've the App installed, open it and it should show a Network Pay Display Layout. 
* Make note of the websocket url mentioned on the page there it should be something like this "wss://192.168.1.20/remove_pay"
* Click the "Start" button at the bottom of the page.

### React App to Clover Connection

* Make sure you've the Network Pay Display App running and you also have the websocket connection noted down from previous step.
* Add these two properties in the .env file
    * `
      REACT_APP_CLOVER_URI=ws://192.168.1.20:12345/remote_pay
      REACT_APP_CLOVER_SERVER=https://apisandbox.dev.clover.com
      `
      
* Replace the `REACT_APP_CLOVER_URI` with the uri from noted from previous step.
* Also, if you're running this in production mode replace the `https://apisandbox.dev.clover.com` with production url.
* Now when you run the app it would connect right away to your Clover POS.
* In the `CloverCheckout.js`, there's a method `sendSaleRequest` that initiates the sale on your Clover POS.
* You can modify that method to add more options there. Such as tip etc.
* Also, the Layout of the Checkout Page is quite basic right now and just displays a message but that can be changed.
