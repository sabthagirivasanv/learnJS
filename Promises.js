console.log("START Global");
let a = 10;
function promise1(){
    return new Promise(function (resolve, reject){
        console.log("Executing Promise 1");
        if(a === 10){
            setTimeout(() => resolve("Vetri Promise 1"), 3000);
        }
    });
}

function promise2(){
    return new Promise(function (resolve, reject){
        console.log("Executing Promise 2");
        if(a === 10){
            setTimeout(() => resolve("Vetri Promise 2"), 5000);
        }
    });
}

async function syncPromise(){
    console.log("start asyc");
    await promise2().then((data) => console.log(data));
    await promise1().then((data) => console.log(data));
    console.log("end asyc");
    return Promise.resolve();
}

syncPromise().then(() => console.log("Async resolved"));

 console.log("END Global");