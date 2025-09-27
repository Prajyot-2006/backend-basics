/*
🛠️ Coding Exercises
Change the port: Make the server listen on port 5000 instead of 8000.
Different response: Make it respond with “Welcome to My First API” instead of “Hello World…”
Add a route check:
If the request URL is /about, respond with “About page”.
If it’s /contact, respond with “Contact page”.
Otherwise respond with “404 Page not found”.
(Hint: request.url gives you the path.)
Return JSON: Instead of plain text, respond with JSON: { "message": "Server is running" }
*/

let http = require('http');

let server = http.createServer((request , response) => {

    if(request.url == '/') {
        response.end('Home Page')
    }
    
    if(request.url == '/About') {
        response.end('About Page')
    }

    if(request.url == '/contact') {
        response.end('Contact Page')
    }

    else {
        response.end('404 Page Not Found')
    }

})


server.listen('5000' , () => {
    console.log("server is running on port 5000")
});