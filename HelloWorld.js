import a from './Promises.js'

console.log("Start");

a();
function User() {
    this.name = "sabtha";
    this.age = '25';
    return this.age;
}

let b = new User();
console.log(b);
User.prototype.sex = 'male';
console.log(b);
console.log("End");
console.log(this);