function multiply(x, y){
    console.log(x*y);
}

multiplyBy2 = multiply.bind(this, 2);

multiplyBy2(5);

function multiplyWithClosure(x){
    return function(y){
        console.log(x*y);
    }
}

multiplyBy2 = multiplyWithClosure(2);
multiplyBy2(10);

