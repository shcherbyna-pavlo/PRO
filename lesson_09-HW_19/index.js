class Person {
   name;
   age;

   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
}

let person = new Person("name", "age");
console.log(person)


class Flat {
   residents = [];

   addResidents(name, age) {
      this.residents.push(new Person(name, age))
   }
}

let flat = new Flat()
flat.addResidents("name", "age")

console.log(flat)


class House {
   flat = [];
   addFlat() {
      this.flat.push(new Flat())
   }
}

let house = new House()
house.addFlat()
console.log(house)
house