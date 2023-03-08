* Product object has the following structure
`{id: 2323231, fields: {}, createdTime: XXXXXX}`
  * So, either you collapse the fields object while storing it in state. Which would help you because otherwise you've to access the products object like `product.fields`
    
* I'm not entirely sure about the `formatPrice` method in helpers.js.
    * Not sure why the number is being divided by 100. As the price always end up to 0.16 or something when divided by 100.
    
* Shipping fee was commented out which was causing the `Nan` value in cart amount. So for now I've uncommented it and replaced it to be 0.0