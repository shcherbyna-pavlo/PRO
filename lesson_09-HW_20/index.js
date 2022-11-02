// Створити сутність людини:

// ім'я

// вік

// Метод виведення даних


// Створити сутність автомобіля:

// Характеристики автомобіля окремими властивостями

// Методи:

// Виведення на екран даних про цей автомобіль

// Привласнення цього автомобіля власнику (записати в автомобіль об'єкт власника)


// Всі дані про людину та про автомобіль отримувати від користувача. 
// Реалізувати необхідні перевірки на коректність введення (порожні поля, вік > 18 для людини та ін. за необхідності)


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

    addOwner(person) {
        if (person.age < 18) {
           return alert("Людині не виповнилось 18 років, тому власник не буде присвоєний")
        }

        return this.owner = person;
    }

    showCar() {

        return`
        Назва машини: ${this.carBrand}
        Модель: ${this.model}
        Колір: ${this.color}
        Рік випуску: ${this.yearOfProduction}
        VIN: ${this.VIN}
        Власник: ${this.owner ? this.owner.showPerson() : ""}`
    }
}

let car = new Car("bmw", "ss", "red", 1989, "dsd1254f78f6g45");
let person = new Person("Щербина","Павло",33);
car.addOwner(person);
console.log(car.showCar())

let car1 = new Car("bmw", "ss", "red", 2004, "dsd1254f78f6g45");
let person1 = new Person("Петров","Олександр",15);
car1.addOwner(person1);
console.log(car1.showCar())