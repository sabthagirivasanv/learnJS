console.log("START Global");
let a = 10;
var promise = new window.Promise(function (resolve, reject){
    console.log("Executing Promise");
    if(a === 11){
        resolve("Vetri");
    }else{
        reject("tholvi");
    }
});

promise.then((message) => console.log(message)).catch((message) => console.log(message));
console.log("END Global");