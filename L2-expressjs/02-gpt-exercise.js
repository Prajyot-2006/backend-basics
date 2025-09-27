/*
📝 Conceptual questions for practice
1️⃣ What’s the difference between response.send() and response.json() in Express?
=> res.send() can send any type of content (string, object, buffer, etc.).
If you pass an object or array to res.send(), Express automatically calls JSON.stringify() and sets the Content-Type header to application/json.
res.json() is basically a shortcut specialized for JSON. It always converts the value to JSON and sets the correct header.  Use res.json() when you know you’re sending JSON — it’s clearer.

2️⃣ Why do GET routes work in the browser but POST routes don’t?
When you type a URL in the browser’s address bar or click a link, the browser always issues a GET request.
POST requests need a form submission or an API tool (like Postman, curl, or fetch from frontend code) to send data.
That’s why if you try to open http://localhost:8000/login directly, the browser sends a GET request to /login, but your server only handles POST /login, so nothing happens.


Add a new GET route /users that returns a JSON array of user objects.
Add a POST route /register that accepts name and email from request.body and responds with “User registered” and the data you sent.
Add a catch-all route (use app.use) to send a JSON {message: 'Route not found'} for any unmatched URL.


*/


let server = require('express');

let app = server();

app.use(server.json())  // we must use this 

app.get('/users' , (request , response) => {
    let users = [{
        name : 'prajyot',
        phone : 9929810
    }]
    response.send(users);
})

app.post('/register' , (request , response) => {
    console.log(request.body);
    response.send(
        {
            status : 1,
            message : 'User Registered',
            data : request.body
        }
    )

})

app.post('/route/product/search' , (request , response) => {
    response.send()
})

app.listen(7000)