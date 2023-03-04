let oneInput = document.querySelector('.one_input');
let twoInput = document.querySelector('.two_input');
let lisOneGroop = document.querySelector('.lis_one-groop');
let lisTwoGroop = document.querySelector('.lis_two-groop');
let butt = document.querySelector('.butt');
let buttTwo = document.querySelector('.butt-two');
let playOff = document.querySelector('.play-off');
let generetion = document.querySelector('.generetion');
let firstBasket = ["Ліве","Ліве","Ліве","Ліве","Ліве","Ліве","Ліве","Ліве"];
let secondBasket = ["lby","lby","lby","lby","lby","lby","lby","lby"];



// butt.addEventListener('click',oneFun);
// butt.addEventListener('click',oneFun2);

// fetch('https://sheet.best/api/sheets/c7b2a8c3-2d10-45e3-b907-965cc6673a28').then((response) => {
//     return response.json();
//   }).then((json) => {
//     [...json].forEach((element, index) => {
//         if(index === 1 || index === 10 || index === 19 || index === 28) {

//             firstBasket.push(element[1])
//             firstBasket.push(element[14])
//         } else if (index === 2 || index === 11 || index === 20 || index === 29) {

//             secondBasket.push(element[1])
//             secondBasket.push(element[14])
//         }
//     });
// });
oneFun()
oneFun2()

function oneFun() {
    firstBasket.forEach(el => {
        lisOneGroop.insertAdjacentHTML('beforeend', `<li>${el}</li>`)
    })
}

function oneFun2() {
    secondBasket.forEach(el => {
        lisTwoGroop.insertAdjacentHTML('beforeend', `<li>${el}</li>`)
    })
}
generetion.addEventListener('click', gen)

function gen (n) {
    if(n<0) return

    if(secondBasket.length && firstBasket.length) {
        let a = Math.floor(Math.random() * firstBasket.length)
        let b = Math.floor(Math.random() * secondBasket.length)
        console.log(a,b);
        playOff.insertAdjacentHTML('beforeend',`<div class = "net"><span class = "com">${firstBasket[a]}</span><span class = "com">${secondBasket[b]}</span></div>`)
        firstBasket.splice(a,1)
        secondBasket.splice(b,1)
    
        console.log(secondBasket,firstBasket);
    }
    gen (secondBasket.length-1)
}

