// ДЗ 13. Реалізуйте функцію removeElement 

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
   array.splice((array.indexOf(item)),1)
}
removeElement(array, 6);

console.log(array);



// ДЗ 14. Реалізуйте функцію generateKey

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let randomKey = "";
function generateKey(lengthKey, initialKeyData) {
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
let numberArray;
let sum = 0;
let ghghg;
function numberSum () {
   numberArray = arr.reduce((b, el) => {
      if (!(isNaN(+el))) {
         b.push(el)
      }
      return b
   },[])

for (let i = 0; i < numberArray.length; i++) {
   sum += numberArray[i]
}
   return sum / numberArray.length
}

console.log (numberSum ())




// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.


let mathSigns = prompt("Що Вам потрібно зробити? \n ' + ' - додавання \n ' - ' - віднімання \n ' * '- множення \n ' / ' - ділення \n ' % ' - Скільки відсотків від числа 1 складає число 2 \n ' ^ ' - піднесення числа до степеня")
let twoNumber = +prompt('Введіть перше число') 
let oneNumber = +prompt('Введіть друге число');
let result


const calculator =function doMath(x, znak, y) {
   
   // mathSigns = prompt("Що Вам потрібно зробити? \n ' + ' - додавання \n ' - ' - віднімання \n ' * '- множення \n ' / ' - ділення \n ' % ' - Скільки відсотків від числа 1 складає число 2 \n ' ^ ' - піднесення числа до степеня")
   
   // let result;
   // let oneNumber ;
   // let twoNumber ;
   switch (znak) {
  
      case "+":
      case "-":
      case "*":
      case "/":
         oneNumber = +prompt('Введіть перше число')
         twoNumber = prompt('Введіть друге число');
         result = `${x} ${znak} ${y} = ` + eval(`${x} ${znak} ${y}`);
         console.log(x)
         console.log(y)
         console.log(result)
         break;

      case "%":
         oneNumber = +prompt('Введіть перше число')
         twoNumber = +prompt('Введіть друге число')
         result = `${x} від ${znak} = ${(y / x) * 100}%`;
         break;
      case "^":
         oneNumber = +prompt('Введіть перше число - основа степеня')
         twoNumber = +prompt('Введіть друге число - показник степеня')
         result = `${x} в степені ${y} = ${Math.pow(x, y)}`;
         break;

         default:
            result = alert("Ви ввели невірний знак")
            // mathSigns = prompt("Що Вам потрібно зробити? \n ' + ' - додавання \n ' - ' - віднімання \n ' * '- множення \n ' / ' - ділення \n ' % ' - Скільки відсотків від числа 1 складає число 2 \n ' ^ ' - піднесення числа до степеня")
         }
         
         return {
            result: result,
            oneNumber: oneNumber,
            twoNumber: twoNumber
         }
         // console.log(result)
         // console.log(x)
      }
      
      // let twoNumber  = calculator.twoNumber
      // let oneNumber  = calculator.oneNumber
      // let result     =   calculator.result
      
      
      calculator(oneNumber, mathSigns, twoNumber)
      console.log(result)
      // console.log(x)



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

function delSymbol() {
   let inputString = prompt("Введіть рядок");
   let inputSymbol;
   let i = 0;
   let symbol = [];

   do {
      inputSymbol = prompt(`Введіть символ для видалення з рядка № ${i + 1}`)
      symbol.push(inputSymbol);
      i++;
   } while (inputSymbol !== null);

   symbol.pop()

   let stringArray = [...inputString];

   stringArray = stringArray.filter(item => !symbol.includes(item))

   console.log(stringArray.join(''))
}
delSymbol()