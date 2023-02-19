const funcY = x();

console.log("Executing func Y");
funcY();

function x(){
    let a = 1
    let funcY = function(){
        console.log(a);
    }
    a = setA();

    return funcY;
}
function setA(){
    return 100;
}