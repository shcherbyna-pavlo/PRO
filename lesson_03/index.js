let title1 = alert("ДЗ 3. Математичні операції");
let num1 = +prompt("Enter the first number");
let num2 = +prompt("Enter the second number number");

let add = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

let addResult = `
${num1} + ${num2} = ${add}
`
let subResult = `
${num1} - ${num2} = ${sub}
`
let multResult = `
${num1} * ${num2} = ${mult}
`
let divResult = `
${num1} / ${num2} = ${div}
`

alert(addResult)
alert(subResult)
alert(multResult)
alert(divResult)

console.log(addResult);
console.log(subResult);
console.log(multResult);
console.log(divResult);


//========================================================================

let title2 = alert("ДЗ 4. Калькулятор");
const d = prompt("What should be done? \n ' + ' - addition \n ' - ' - subtraction \n ' * '- multiplication \n ' / ' - division")
let numb1 = +prompt("Enter the first number");
let numb2 = +prompt("Enter the second number number");
let add2;
let sub2;
let mult2;
let div2;
let result;


if (d==="+") {
   add2 = numb1 + numb2;
   result = `${numb1} + ${numb2} = ${add2}`
}

if (d==="-") {
   sub2 = numb1 - numb2;
   result = `${numb1} - ${numb2} = ${sub2}`
}

if (d==="*") {
   mult2 = numb1 * numb2;
   result = `${numb1} * ${numb2} = ${mult2}`
}

if (d==="/") {
   div2 = numb1 / numb2;
   result = `${numb1} / ${numb2} = ${div2}`
}

alert(result);
console.log(result);


//=========================================================================

let title3 = alert("ДЗ 5. Години в секунди");
let numberOfHours = +prompt("Write the number of hours?");
const SECONDS_PER_HOUR = 3600;
let sec = numberOfHours * SECONDS_PER_HOUR;
let secResult = `In ${numberOfHours} hours ${sec} seconds`;

alert(secResult);
console.log(secResult);


// //========================================================================


let title4 = alert("ДЗ 6. Середнє значення");
let number1 = +prompt("Enter the first number");
let number2 = +prompt("Enter the second number");
let number3 = +prompt("Enter the third  number");

let arithmeticMean = (number1 + number2 + number3) / 3;

let arithmeticMeanResult = `Arithmetic average of your numbers = ${Math.round(arithmeticMean)}`;

alert(arithmeticMeanResult);
console.log(arithmeticMeanResult);
