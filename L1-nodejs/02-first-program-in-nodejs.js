// we learned about how import works in nodejs

const addToCart = require("./04-default-module-exports");  // we used require for importing addToCart
// inside require(type file path here)
console.log('Hello World');
let a = [10 , 20 , 30 , 40 , 50 , 60]
a.forEach((value , index) => {
    console.log(value , index);
});


console.log(addToCart());

// In short : we use require keyword for importing another fn,variable etc