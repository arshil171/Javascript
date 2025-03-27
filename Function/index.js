
// normal Function 

function calculateArea(radius) {
   return  3.14 * radius * radius;
}

console.log(calculateArea(5)); 

// variable Function 

let area = function(b, h){
    return b*h;
}

console.log(area(5, 10));

// arrow Function

let area1 =(b, h)=>{
    return b*h;
}

console.log(area1(10, 20));