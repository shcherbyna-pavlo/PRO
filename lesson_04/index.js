// let numOrStr = prompt('input number or string');

// console.log(numOrStr)

// if(numOrStr === null) {
// console.log('вы отменили')
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// }

// let numOrStr = prompt('input number or string');

// console.log(numOrStr)

// switch(numOrStr) {
//     case null:
//         console.log('вы отменили');
//         break;
//     case "":
//         console.log('Empty String');
//         break;
//     case isNaN( +numOrStr ):
//         console.log(' number is Ba_NaN');
//         break;
//     default:
//         console.log('OK!');
//         break;
// }


//================================================================================================


let a = 10;
let string = "";
for (b1 = 0; b1 < 1; b1++) {
    for (let b = 10; b <= 20; b++) {
        string += `${b}, `;
    }
    console.log(string)
}
//==================


let a1 = 10;
let string1 = "";
let res;
for (c1 = 0; c1 < 1; c1++) {
    for (let c2 = 10; c2 <= 20; c2++) {
        string += `${c2**2}, `;
    }
    console.log(string)
}
//==================
