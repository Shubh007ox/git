const object = {
    name:'shubham',
    age:24
}
let myobc = JSON.stringify(object);
localStorage.setItem('myobj',myobc);
console.log(localStorage)

let myobc2 = JSON.parse(localStorage.getItem('myobj'));
console.log(myobc2);