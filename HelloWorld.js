console.log(aaa);

let aaa = 10;

function a(){
    let b = 10;
    c();
    function c(){
        let d = 20;
        console.log("inside c: "+b);
        c2();
        function c2(){
            console.log(d);
        }
    }
}
a();