// ДЗ 13. Реалізуйте функцію removeElement 

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
   array.splice((array.indexOf(item)),1)
}
removeElement(array, 6);

console.log(array);



// ДЗ 14. Реалізуйте функцію generateKey

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(lengthKey, initialKeyData) {
   let randomKey = "";
  for (i=0; i < lengthKey; i++){
   randomKey += initialKeyData[Math.floor(Math.random() * initialKeyData.length)]
  }
return randomKey
}

const key = generateKey(16, characters);
console.log(key);



// ДЗ 15. Написати кілька функцій

// -Дан масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const arr = [1, 3, 5, 'r', 'y', 'b', 7, 'e', 48, 50]

function numberSum () {
   let sum = 0;

   let numberArray = arr.reduce((b, el) => {
      if (!(Number.isNaN(+el))) {
         b.push(el)
      }
      return b
   }, [])

   for (let i = 0; i < numberArray.length; i++) {
      sum += numberArray[i]
   }
   return sum / numberArray.length
}

console.log(numberSum())




// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.


let mathSigns = prompt("Що Вам потрібно зробити? \n ' + ' - додавання \n ' - ' - віднімання \n ' * '- множення \n ' / ' - ділення \n ' % ' - Скільки відсотків від числа 1 складає число 2 \n ' ^ ' - піднесення першого числа до степеня(число 2)")
let twoNumber = +prompt('Введіть перше число');
let oneNumber = +prompt('Введіть друге число');

const calculator = function doMath(x, znak, y) {

   switch (znak) {

      case "+":
      case "-":
      case "/":
      case "*":
         alert(`${x} ${znak} ${y} = ` + eval(`${x} ${znak} ${y}`));
         return `${x} ${znak} ${y} = ` + eval(`${x} ${znak} ${y}`);

      case "%":
         alert(`${y} від ${x} = ${(y / x) * 100}%`);
         return `${y} від ${x} = ${(y / x) * 100}%`;

      case "^":
         alert(`${x} в степені ${y} = ${Math.pow(x, y)}`);
         return `${x} в степені ${y} = ${Math.pow(x, y)}`;
   }
}

console.log(calculator(oneNumber, mathSigns, twoNumber))




// Написати функцію заповнення даними користувача двомірного масиву. 
// Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.


function dataArray() {

   let elArrayOne;
   let elArrayTwo;
   let twoArray = []
   let result1 = [];
   let i = 0;
   let r = 0;

   do {
      elArrayOne = prompt(`Введіть елемент масиву.\n Якщо хочете створити вкладений масив єлементів введіть ' ++ '`);

      if (elArrayOne === null) {
         break
      } else if (!(isNaN(+elArrayOne))) {
         elArrayOne = Number(elArrayOne)
      }

      result1.push(elArrayOne);
      i++;

      if (elArrayOne === '++') {
         twoArray = []

         do {
            elArrayTwo = prompt(`Введіть елемент Вашого вкладеного масиву.\n Якщо хочете завершити ввод єлементів в даний масив і повернутись до основного масиву натисніть 'Відміна'`)

            if (elArrayTwo === null) {
               break
            } else if (!(isNaN(+elArrayTwo))) {
               elArrayTwo = Number(elArrayTwo)
            }

            twoArray.push(elArrayTwo);
            
            r++;
            
         } while (elArrayTwo !== null)

         result1.push(twoArray)
      }

      result1 = result1.filter(symbol2 => symbol2 !== "++")

   } while (elArrayOne !== null)

   console.log (result1)
}

dataArray()



// -Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач

let inputString = prompt("Введіть рядок");
let inputSymbol;
let symbol = [];
let i1 = 0;
do {
   inputSymbol = prompt(`Введіть символ для видалення з рядка`);
   symbol.push(inputSymbol);
   i1++;
} while (inputSymbol !== null);

function delSymbol(string, elString) {
   let stringArray = [...string];
   return stringArray.filter(item => !elString.includes(item)).join('');
}

console.log(delSymbol(inputString, symbol))