// let numOrStr = prompt('input number or string');

// console.log(numOrStr)

// switch(true) {
//     case (numOrStr === null):
//         console.log('вы отменили');
//         break;
//     case ( numOrStr.trim() === '' ):
//         console.log('Empty String');
//         break;
//     case (isNaN( +numOrStr )):
//         console.log(' number is Ba_NaN');
//         break;
//     default:
//         console.log('OK!');
//         break;
// }


//================================================================================================
//Вивести на сторінку в один рядок через кому числа від 10 до 20

// let result = "";

// for (let a = 10; a <= 20; a++) {
//    result += `${a},`;
// }
// console.log(result)


// //==================
//- Вивести квадрати чисел від 10 до 20

// let result1 = "";

// for (let b = 10; b <= 20; b++) {
//    result1 += (b**2) + " ";
// }
// console.log(result1)


//==================
//- Вивести таблицю множення на 7


// let result2 = ""; 
// let c1;
// for (let c = 1; c <= 10; c++) {
//    c1 = c*7;
//    if (c < 10) {
//       result2 += ` ${c} * 7 = ${c1}`
//    } else {
//       result2 += `${c} * 7 = ${c1}`;
//    }
//    result2 += '\n';
// }
// console.log(result2);


//==================
//-Знайти суму всіх цілих чисел від 1 до 15

// let result3 = 0;

// for (let d = 1; d <= 15; d++) {
//    result3 += d;
// }
// console.log(result3)


//==================
//-Знайти добуток усіх цілих чисел від 15 до 35

// let result4 = 1;

// for (let e = 15; e <= 35; e++) {
//    result4 *= e;
// }
// console.log(result4)


//==================
//-Знайти середнє арифметичне всіх цілих чисел від 1 до 500

// let result5 = 0;
// let f1 = 500;

// for (let f = 1; f <= f1; f++) {
//    result5 += f;
// }
// console.log(result5/f1)

//==================
//-Вивести суму лише парних чисел в діапазоні від 30 до 80

// let result6 = 0;

// for (let g = 30; g <= 80; g++) {
//    if (g % 2 === 0) {
//     result6 += g;
//    }
// }
// console.log(result6)


//==================
//- Вивести всі числа в діапазоні від 100 до 200 кратні 3

// let result7 = "";

// for (let h = 100; h <= 200; h++) {
//    if (h % 3 === 0) {
//       result7 += `${h} `;
//    }
// }
// console.log(result7)


//==================
//-Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
//-Визначити кількість його парних дільників
//-Знайти суму його парних дільників


// let result8 = "";
// let i1 = +prompt ('ddtlsnm');
// let result9 = [];
// let result10 = 0;
// for (let i = 1; i <= i1; i++) {
//    if (i1 % i === 0) {
//       result8 += i + " ";

//       if (i % 2 === 0) {
//           result9.push(i)
//           result10 += i;
//       }
//    }
// }
// console.log(result8)
// console.log(result9, result9.length)
// console.log(result10)

//================

//-Напечатать полную таблицу умножения от 1 до 10


// let result11 = "";
// let j2;

// for (let j = 1; j <= 10; j++) {
//    for (let j1 = 1; j1 <= 10; j1++) {
//       j2 = j1 * j;

//       if (j2<10) {
//          result11 += j2 + "   ";
//       }  else {
//          result11 += j2 + "  ";
//       }
//    }

//    result11 += '\n';
// }
// console.log(result11)

//=======================================================================

// ДЗ 7. Портрет користувача


// let yearOfBirth = prompt("Введіть рік народження");

// if (yearOfBirth === null) {
//     alert("Шкода, що Ви не захотіли ввести свій рік народження");
// }

// else if (isNaN( +yearOfBirth )) {
//     alert("Ви не вірно ввели Ваш рік народження");
//     yearOfBirth = +prompt("Введіть рік народження");
// }

// console.log(yearOfBirth)
// let age = 

// let city = prompt('ddd')
// let a
// switch (city) {
//     case 'Kyiv':
//     case 'Kyiv':
//     case 'dfgdfg':
//     case 'dfgdfg':
//     case 'Kyiv':
//     case 'fdgdfg':
//     case 'fdgf':
//         alert(`ти живеш в ${city}`);
//         break;
//     }
    
//     console.log(city)
