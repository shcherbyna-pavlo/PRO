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



 const test = function doMath(x, znak, y) {
   let result
   let xx
   let yy
   let znakddd = prompt("Що Вам потрібно зробити? \n ' + ' - додавання \n ' - ' - віднімання \n ' * '- множення \n ' / ' - ділення \n ' % ' - відсоток від числа \n ' ^ ' - піднесення числа до степеня")
   
   znakddd === "-" ? a = `${xx} ${znak} ${y} = ${x - y}` : 0
   znakddd === "+" ? a = `${xx} ${znak} ${y} = ${x + y}` : 0
   switch (znakddd) {
      case "-":
      xx = +prompt('Перше число')
      yy = +prompt('Друге число')
      result = `${x} - ${y} = ${x - y}`;
      break;
   case "+":
      xx = +prompt('Перше число')
      yy = +prompt('Друге число')
      result = `${x} + ${y} = ${x + y}`;
      break;
   case "*":
      xx = +prompt('Перше число')
      yy = +prompt('Друге число')
      result = `${x} * ${y} = ${x * y}`;
      break;
   case "/":
      xx = +prompt('Перrererrше число')
      yy = +prompt('Дрererererуге число')
      result = `${x} / ${y} = ${x / y}`;
      break;
   case "%":
      xx = +prompt('Перше число')
      yy = +prompt('Друге число')
      result = `${y} від ${x} = ${(x * (y / 100))*100}%`;
      break;
   case "^":
      xx = +prompt('Перше число')
      yy = +prompt('Друге число')
      result = `${xx} в ступені ${yy} = ${Math.pow(xx, yy)}`;
      break;
      default:
         result = alert("Ви ввели невірний знак")
         
   }
 return { 
   result : result,
   xx : xx,
   yy : yy,
   znakddd : znakddd
 }
}

let xx = test.xx
let result = test.result
let yy = test.yy
let znakddd = test.znakddd
// doMath(xx,znakddd,yy)
console.log(test(xx,znakddd,yy).result)



// Написати функцію заповнення даними користувача двомірного масиву. 
// Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
// const a = prompt('елементи масиву')
// const b = [...a];
// // function array (x) {

// // }

// console.log(b)