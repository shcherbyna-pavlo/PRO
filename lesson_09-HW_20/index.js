
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
    showPerson() {
        console.log(`
        Призвище: ${this.lastName}
            Ім'я: ${this.name}
            Вік: ${this.age}
            Група крові: ${this.bloodType}`
        )

        return `Призвище: ${this.lastName}
        Ім'я: ${this.name}
        Вік: ${this.age}
        Група крові: ${this.bloodType}`
    }
}

class Car{
    carBrand;
    model;
    color;
    yearOfProduction;
    VIN;
    owner = [];

    constructor(carBrand, model, color, yearOfProduction, VIN) {
        this.carBrand = carBrand;
        this.model = model;
        this.color = color;
        this.yearOfProduction = yearOfProduction;
        this.VIN = VIN;
    }
    
    showCar() {
        console.log(`
            Назва машини: ${this.carBrand}
            Модель: ${this.model}
            Колір: ${this.color}
            Рік випуску: ${this.yearOfProduction}
            VIN: ${this.VIN}`
        )
    }
    
    addOwner() {
        this.owner.showPerson()
    }

}

let person = new Person("Щербина","Павло",33,"2-га +");
let car = new Car("bmw", "ss", "red", 1989, "dsd1254f78f6g45");

person.showPerson();
car.addOwner();

car.showCar();

// console.log(car)
// console.log(person)
