/*
Make a GET route:
/users/:userId/orders/:orderId
Respond with both IDs and an optional ?status=delivered query parameter.
If status is present, include it in the JSON.
Example:
/users/5/orders/99?status=delivered → 
{
  "userId": "5",
  "orderId": "99",
  "status": "delivered"
}

*/





let a = require('express');
let app = a();

app.use(a.json());

app.get('/users/:userId/orders/:orderId' , (request , response) => {
    let firstId = request.params.userId;
    let secondId = request.params.orderId;
    console.log(firstId);
    response.send({
        status : 1,
        userId : firstId,
        orderId : secondId,
        message : request.query  // if user requests data via query in url so print that data here in response and send back to frontend 
    })
} )


app.listen(3000)
