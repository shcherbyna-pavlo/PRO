class Person {
    lastName;
    name;
    age;
    bloodType;
    constructor(lastName,name,age,bloodType) {
        this.lastName = lastName;
        this.name = name;
        this.age = age;
        this.bloodType = bloodType;
    }
}

class Car extends Person {
    carBrand;
    model;
    color;
    yearOfProduction;
    VIN;
    owner;
    constructor(carBrand, model, color, yearOfProduction, VIN, lastName, name, age, bloodType) {
        super(lastName,name,age,bloodType);
        this.carBrand = carBrand;
        this.model = model;
        this.color = color;
        this.yearOfProduction = yearOfProduction;
        this.VIN = VIN;
        this.owner = [];
    }
}

// let a = new Car(b)

let b = new Person("Щербина","Павло",33,"2-га +")
let a = new Car("bmw", "ss", "red", 1989, "dsd1254f78f6g45","Щербина","Павло",33,"2-га +")
console.log(a)
console.log(b)
