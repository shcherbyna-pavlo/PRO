// ДЗ 13. Реалізуйте функцію removeElement 

// const array = [1, 2, 3, 4, 5, 6, 7];

// function removeElement(array, item) {
//    array.splice((array.indexOf(item)),1)
// }
// removeElement(array, 6 );

// console.log(array);



// ДЗ 14. Реалізуйте функцію generateKey

// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// let randomKey = "";
// function generateKey(lengthKey, initialKeyData) {
//   for (i=0; i < lengthKey; i++){
//    randomKey += initialKeyData[Math.floor(Math.random() * initialKeyData.length)]
//   }
// return randomKey
// }

// const key = generateKey(16, characters);
// console.log(key);



// ДЗ 15. Написати кілька функцій

// -Дан масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

// const arr = [1, 3, 5, 'r', 'y', 'b', 7, 'e', 48]
// function ffff (d) {
//    const a = d.reduce((b, el) => {
//       if (!(isNaN(+el))) {
//          b.push(el)
//       }
//       return b
//    },[])

// let k = 0;
// for (let i = 0; i < a.length; i++) {
//    k += a[i]
// }
// const ghghg = a.reduce((b, el) => {
//    return b += el / a.length
// },0)

//    return k / a.length

// }

// console.log (ffff (arr))


// let k;
// for (const el1 = 0; el1 < a.length; el1++) {
//    k = 
// }



// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.



//  const test = function doMath(x, znak, y) {
//    let result
//    let xx
//    let yy
//    let znakddd = prompt("Що Вам потрібно зробити? \n ' + ' - додавання \n ' - ' - віднімання \n ' * '- множення \n ' / ' - ділення \n ' % ' - відсоток від числа \n ' ^ ' - піднесення числа до степеня")

//    znakddd === "-" ? a = `${xx} ${znak} ${y} = ${x - y}` : 0
//    znakddd === "+" ? a = `${xx} ${znak} ${y} = ${x + y}` : 0
//    switch (znakddd) {
//       case "-":
//       xx = +prompt('Перше число')
//       yy = +prompt('Друге число')
//       result = `${x} - ${y} = ${x - y}`;
//       break;
//    case "+":
//       xx = +prompt('Перше число')
//       yy = +prompt('Друге число')
//       result = `${x} + ${y} = ${x + y}`;
//       break;
//    case "*":
//       xx = +prompt('Перше число')
//       yy = +prompt('Друге число')
//       result = `${x} * ${y} = ${x * y}`;
//       break;
//    case "/":
//       xx = +prompt('Перrererrше число')
//       yy = +prompt('Дрererererуге число')
//       result = `${x} / ${y} = ${x / y}`;
//       break;
//    case "%":
//       xx = +prompt('Перше число')
//       yy = +prompt('Друге число')
//       result = `${y} від ${x} = ${(x * (y / 100))*100}%`;
//       break;
//    case "^":
//       xx = +prompt('Перше число')
//       yy = +prompt('Друге число')
//       result = `${xx} в ступені ${yy} = ${Math.pow(xx, yy)}`;
//       break;
//       default:
//          result = alert("Ви ввели невірний знак")

//    }
//  return { 
//    result : result,
//    xx : xx,
//    yy : yy,
//    znakddd : znakddd
//  }
// }

// let xx = test.xx
// let result = test.result
// let yy = test.yy
// let znakddd = test.znakddd

// console.log(test(xx,znakddd,yy).result)



// Написати функцію заповнення даними користувача двомірного масиву. 
// Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
// const a = prompt('елементи масиву')
// const b = [...a];
// // function array (x) {

// // }

// console.log(b)

// let test = function dd(x) {

//    let a;
//    let l;
//    let b = []
//    let result = [];
//    let i = 0;
//    let r = 0;

//    do {
//       a = prompt(`Введіть елемент масиву.\n Якщо хочете ввести масив єлементів введіть ' ++ '`);

//       if (a === null) {
//          break
//       } else if (!(isNaN(+a))) {
//          a = Number(a)
//       }

//       result.push(a);
//       i++;

//       if (a === '++') {
//          b = []

//          do {
//             l = prompt(`Введіть елемент Вашого вкладеного масиву.\n Якщо хочете завершити ввод єлементів в даний масив і повернутись до основного масиву введіть ' -- '`)

//             if (l === null) {
//                break
//             } else if (!(isNaN(+l))) {
//                l = Number(l)
//             }

//             b.push(l);
//             r++;

//             b = b.filter(symbol1 => symbol1 !== "--")
//          } while (l !== null)

//          result.push(b)
//       }

//       result = result.filter(symbol2 => symbol2 !== "++")

//    } while (a !== null)
//    return result
// }
// console.log (result)
// let result = test(result);
// console.log(result)



// console.log (test(result))





// -Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач

// const rest1 = func(string, symbol) {

// }

let a = prompt(" hello world");

let b;
let i = 0;
let symbol = [];

let rest = [];

do {
   b = prompt ("['l', 'd']")
   symbol.push(b);
   i++;
} while (b !== null);
symbol.pop()

let as = [...a];

   for (let i=0; i < symbol.length; i++) {
      rest += as.filter(symbol3 =>
         symbol3 !== symbol[i]);
   }
   // let xyu = as.filter((symbol3) => {
   //    for (let i=0; i < symbol.length; i++) {
         

   //       return  symbol3 !== symbol[i]
   //    } 
   // }  
   // )


      console.log(symbol)

console.log(rest)


// function isPrime(num) {
//    let a = prompt(" hello world");

//    for (let i = 2; num > i; i++) {
//      if (num % i == 0) {
//        return false;
//      }
//    }
//    return num > 1;
//  }