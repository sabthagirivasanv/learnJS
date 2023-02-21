console.log("Start");
setTimeout(function (){console.log("Timed out")}, 5000);

fetch("https://www.netflix.com", {mode: "no-cors"}).then(() => {console.log("Netflix loaded")});
console.log("End");