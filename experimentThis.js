let a = 10;
var temp=function Counter(){
    let a = 20;
    console.log(this.a);
    this.in = function(){
        a++;
        console.log(a);
    }
    console.log(this);
}

temp();
console.log("done");
var obj = new temp();
obj.in();