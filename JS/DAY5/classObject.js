//object:

// const carobj={
//     carCompany:"Suzuki",
//     carName:"Ritz",
//     carSpeed(){
//         console.log("speed is 60km/hr");
//     },
// }

// const car={
//     car(){
//         console.log("in car obj");
//     },

//     prize:"500000",
// };

// car.__proto__ = carobj;

//classes:

// class ToyotaCar{
//     start(){
//         console.log("start");
//     }

//     stop()
//     {
//         console.log("stop");
//     }
// }

// let fortuner= new ToyotaCar();


// constructor::

// class ToyotaCar{

//     constructor(brand,mileage){
//         console.log("in constructor");
//         this.brand=brand;
//         this.mileage=mileage;
//     }

//     start(){
//         console.log("start");
//     }

//     stop()
//     {
//         console.log("stop");
//     }
// }

// let fortuner= new ToyotaCar("fortuner",10);

//inheritance::

// class Person{
//     hello()
//     {
//         console.log("in parent");
//     }
//     eat(){
//         console.log("eat in parent");
//     }
//     sleep(){
//         console.log("sleep in parent");
//     }  
//     work(){
//         console.log("no work in parent");
//     }
// }

// class Dr extends Person{
//     work(){
//         console.log("dr in child");
//     }
// }

// let drObj= new Dr();

// Q1:: class user with 2properties: name and email. method: viewData to view website data 

// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }

//     viewData(){
//         console.log("in a viewdata");
//     }
// }

// let stud1= new User("pratik", "pratik@gmail.com");
// let stud2= new User("pratik2", "pratik22@gmail.com");

// Q2:: new class admin inhertis from User . new method: editData to admin that allow to edit website .

let data = "Im data initial"
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("DATA= ", data);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        data = "new from admin";
    }
}
    
    let stud1= new User("pratik", "pratik@gmail.com");
    let stud2= new User("pratik2", "pratik22@gmail.com");

    let admin= new Admin("admin","admin@gmai.com"); 