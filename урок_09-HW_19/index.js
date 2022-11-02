class Person {
   name;
   age;

   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
}

class Flat {
   residents = [];

   addResident(person) {
      this.residents.push(person)
   }

   logAllPersons() {
      console.log("\nApartment:\n");
      this.residents.forEach((person) => console.log(`${person.name} - ${person.age} years`));
    }
}

class House {
   flats = [];
   maxNumberOfApartments;
   constructor(maxNumberOfApartments) {
      this.maxNumberOfApartments = maxNumberOfApartments;
   }

   addFlat(flat) {
      if(this.flats.length < this.maxNumberOfApartments) {
         this.flats.push(flat)
      } else {
         console.log("перевищенна кількість квартир")
      }
   }

   logAllResidents() {
      console.log("\nAll Residents:\n");
      this.flats.forEach((flat) => flat.residents.forEach(person => console.log(`${person.name} - ${person.age} years`)));
    }

   logAllflat() {
      console.log("\nhouse:\n");
      this.flats.forEach((flat) => console.log(flat.residents));
    }
}

let house = new House(2)

let flat = new Flat()
let flat1 = new Flat()
let flat2 = new Flat()

let residents = new Person("Pavel", 33)
let residents1 = new Person("Vova", 45)
let residents2 = new Person("Max", 30)
let residents3 = new Person("Mark", 19)
let residents4 = new Person("Tony", 26)

flat.addResident(residents);
flat.addResident(residents1);
flat.addResident(residents2);
flat1.addResident(residents3);
flat1.addResident(residents4);
flat2.addResident(residents4);

flat.logAllPersons()
flat1.logAllPersons()
flat2.logAllPersons()

house.addFlat(flat)
house.addFlat(flat1)
house.addFlat(flat2)
house.logAllflat()
house.logAllResidents()

