console.log("Start");
setTimeout(function (){
    console.log("initiating dom change");
    document.getElementById("mainHeader").innerHTML = "Hello JS";
}, 2000)

console.log("End");