
class Person {
    lastName;
    name;
    age;

    constructor(lastName,name,age) {
        this.lastName = lastName;
        this.name = name;
        this.age = age;
    }

    showPerson() {
        return `
        Призвище: ${this.lastName}
        Ім'я: ${this.name}
        Вік: ${this.age} роки`
    }
}

class Car{
    carBrand;
    model;
    color;
    yearOfProduction;
    VIN;
    owner;

    constructor(carBrand, model, color, yearOfProduction, VIN) {
        this.carBrand = carBrand;
        this.model = model;
        this.color = color;
        this.yearOfProduction = yearOfProduction;
        this.VIN = VIN;
    }

    // addOwner(a) {
    //     this.owner = a;
    // }

    addOwner(lastName,name,age) {
      this.owner = new Person(lastName,name,age);
    }

    showCar() {
        if (this.owner.age < 18) {
            alert("Людині не виповнилось 18 років, тому власник не буде присвоєний")

            return`
        Назва машини: ${this.carBrand}
        Модель: ${this.model}
        Колір: ${this.color}
        Рік випуску: ${this.yearOfProduction}
        VIN: ${this.VIN}
        Власник: Не присвоєно, ще не виповнилось 18 років!!!`
        }

        return`
        Назва машини: ${this.carBrand}
        Модель: ${this.model}
        Колір: ${this.color}
        Рік випуску: ${this.yearOfProduction}
        VIN: ${this.VIN}
        Власник: ${this.owner.showPerson()}`
    }
}

// let car = new Car("bmw", "ss", "red", 1989, "dsd1254f78f6g45");
// let person = new Person("Щербина","Павло",33)
// car.addOwner(person);
// console.log(car.showCar())

// let car1 = new Car("bmw", "ss", "red", 2004, "dsd1254f78f6g45");
// let person1 = new Person("Петров","Олександр",18);
// car1.addOwner(person1);
// console.log(car1.showCar())



let car = new Car("bmw", "s", "red", 2019, "dsd125sasd4f78f6g45");
car.addOwner("Петров","Віталій",30);
console.log(car.showCar())

let car1 = new Car("mers", "model", "green", 2008, "dsd125sasd4f78f6g45");
car1.addOwner("Щербина","Павло",33);
console.log(car1.showCar())

