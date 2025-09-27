// sending data using post method's JSON body , post method is that we have created something in front-end and we have to send that in backend 

let myServer = require('express');  // as we know require is just like import 

let app = myServer();
app.use(myServer.json())  // we should use this 
/*
When you send data to your server with POST or PUT, it comes in as raw text.
Express doesn’t turn that raw text into a JavaScript object by itself.
So req.body would be undefined.

app.use(express.json()) is like telling Express:
“Hey, whenever someone sends JSON data, please read it and automatically turn it into an object for me.”
After you add it, req.body will contain the JSON you sent.
*/


app.post('/login' , (request , response) => {  // post method's API can't run in direct browser like if we run http://localhost:8000/login direct in a browser it wont work bcoz post method's API cant run in direct browser but get method's API can run 
    console.log('This is request' ,request)
    console.log("This is request's body : ",request.body);  // body's data comes from JSON 
    response.send({
        status : 1,
        message : 'Log in info',
        data : request.body
    })
    
})

app.listen('8000')


/*
What we did here:
- Opened Thunder Client (or Postman) and selected POST method.
- Put the URL: http://localhost:8000/login
- Went to "Body" tab, selected "JSON" and typed some data like:
  {
    "username": "John",
    "password": "1234"
  }
- When we send the request, backend receives it in request.body
- We used console.log(request) to see the entire request object
  and console.log(request.body) to see only the data we sent.

This is exactly how the frontend would send data when user fills
username & password and clicks the login button.

It’s stored in request because the request object represents everything that comes from the client (frontend).
*/

// In short : body ka data json me jata hai 
