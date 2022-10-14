//ДЗ 10. Масив
// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).

let quantity = +prompt('Введіть кількість єлементів в масиві');
if (isNaN(quantity)) {
   alert('невірно вказане значення довжини масиву')
   quantity = +prompt('Введіть кількість єлементів в масиві')
} else if (quantity === 0) {
   alert('Ви не вказали кількість єлементів в масиві')
   quantity = +prompt('Введіть кількість єлементів в масиві')
}

let a = []
for (let i = 0; i < quantity; i++ ) {
   a[i] = prompt(`Введіть елемент № ${i+1}`)
   if (a[i] === null) {
      a.pop()
      break
   } else if  (!(isNaN(+a[i]))) {
      a[i] = Number(a[i])
   } 
}
console.log(a)
console.log(a.sort().sort((a, b) => {return a-b}))
a.splice(1, 3);
console.log(a)

// ДЗ 11. Пошук у масиві
const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

// Знайти суму та кількість позитивних елементів.

const result1 = arr.reduce((result, elem) => {
   if (elem > 0) {
      result += elem;
   } return result
},0);
const result2 = arr.reduce((result, elem) => {
   if (elem > 0) {
      result++;
   } return result
},0)

console.log(result1, result2)

//Знайти мінімальний елемент масиву та його порядковий номер.

const result3 = arr.reduce((result, elem) => {
   if (elem < result){
      result = elem
   } return result;
})
console.log(result3, arr.indexOf(result3))



//Знайти максимальний елемент масиву та його порядковий номер.

const result4 = arr.reduce((result, elem) => {
   if (elem > result){
      result = elem
   } return result;
})
console.log(result4, arr.indexOf(result4))


//Визначити кількість негативних елементів.

const result5 = arr.reduce((result, elem) => {
   if (elem < 0) {
      result++;
   } return result
},0)

console.log(result5)


//Знайти кількість непарних позитивних елементів.

const result6 = arr.reduce((result, elem) => {
   if ((elem > 0) && !(elem % 2 === 0)) {
      result++;
   } return result
},0)

console.log(result6)


//Знайти кількість парних позитивних елементів.

const result7 = arr.reduce((result, elem) => {
   if ((elem > 0) && (elem % 2 === 0)) {
      result++;
   } return result
},0)

console.log(result7)


// Знайти суму парних позитивних елементів.

const result8 = arr.reduce((result, elem) => {
   if ((elem > 0) && (elem % 2 === 0)) {
      result += elem;
   } return result
},0)

console.log(result8)


//Знайти суму непарних позитивних елементів.

const result9 = arr.reduce((result, elem) => {
   if ((elem > 0) && !(elem % 2 === 0)) {
      result += elem;
   } return result
},0)

console.log(result9)


//Знайти добуток позитивних елементів.

const result10 = arr.reduce((result, elem) => {
   if (elem > 0) {
      result *= elem;
   } return result
},1)

console.log(result10)



// Знайти найбільший серед елементів масиву, остальні обнулити.


const result11 = arr.reduce((result, elem) => {
   if (elem > result){
      result = elem
   } else {result}
   return result;
})
for(let i=0; i<= arr.length-1; i++) {
   if (!(arr[i] === result11)) {
      arr[i] = 0
   }
}
console.log(result11, arr)


//ДЗ 12. Рахунки користувачів

// Дан масив об'єктів. Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів. І знайти суму всіх балансів користувачів


let users = [
   {
      "index": 0,
      "isActive": true,
      "balance": "$2,226.60",
      "name": "Eugenia Sawyer",
      "gender": "female",
      "phone": "+1 (840) 583-3207",
      "address": "949 John Street, Rose, Puerto Rico, 1857"
   },
   {
      "index": 1,
      "isActive": true,
      "balance": "$2,613.77",
      "name": "Pauline Gallegos",
      "gender": "female",
      "phone": "+1 (985) 593-3328",
      "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
   },
   {
      "index": 2,
      "isActive": false,
      "balance": "$3,976.41",
      "name": "Middleton Chaney",
      "gender": "male",
      "phone": "+1 (995) 591-2478",
      "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
   },
   {
      "index": 3,
      "isActive": true,
      "balance": "$1,934.58",
      "name": "Burns Poole",
      "gender": "male",
      "phone": "+1 (885) 559-3422",
      "address": "730 Seba Avenue, Osage, Alabama, 6290"
   },
   {
      "index": 4,
      "isActive": true,
      "balance": "$3,261.65",
      "name": "Mcfadden Horne",
      "gender": "male",
      "phone": "+1 (942) 565-3988",
      "address": "120 Scholes Street, Kirk, Michigan, 1018"
   },
   {
      "index": 5,
      "isActive": false,
      "balance": "$1,790.56",
      "name": "Suzette Lewis",
      "gender": "female",
      "phone": "+1 (837) 586-3283",
      "address": "314 Dunne Place, Bawcomville, Guam, 9053"
   }
]

const tell = users.reduce((userPhone, user) => {
   if (user.balance.replace('$', '').replace(',', '') > 2000){
      userPhone.push(user.phone)
   } return userPhone
},[])

const sum = users.reduce((count, userBalance) => {
   count += Number(userBalance.balance.replace('$', '').replace(',', ''));
   return count
},0)

console.log(tell)
console.log(Math.round(sum * 100)/100)