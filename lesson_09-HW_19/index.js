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

   addResidents(person) {
      this.residents.push(person)
   }

   logAllPerson() {
      console.log("\nApartment:\n");
      this.residents.forEach((person) => console.log(`${person.name} - ${person.age} years`));
    }
}

class House {
   flat = [];
   maxNumberOfApartments;
   constructor(maxNumberOfApartments) {
      this.maxNumberOfApartments = maxNumberOfApartments;
   }

   addFlat(flat) {
      if(this.flat.length < this.maxNumberOfApartments) {
         this.flat.push(flat)
      }
   }

   logAllResidents() {
      console.log("\nhouse:\n");
      this.flat.forEach((flat) => flat.residents.forEach(person => console.log(`${person.name} - ${person.age} years`)));
    }
   logAllflat() {
      console.log("\nhouse:\n");
      this.flat.forEach((flat) => console.log(flat.residents));
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

flat.addResidents(residents);
flat.addResidents(residents1);
flat.addResidents(residents2);
flat1.addResidents(residents3);
flat1.addResidents(residents4);
flat2.addResidents(residents4);

flat.logAllPerson()
flat1.logAllPerson()
flat2.logAllPerson()
// console.log(flat)

house.addFlat(flat)
house.addFlat(flat1)
house.addFlat(flat2)
house.logAllflat()
house.logAllResidents()
// house.addFlat(flat)
// console.log(house)
