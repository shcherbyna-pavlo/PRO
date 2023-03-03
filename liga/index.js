let oneInput = document.querySelector('.one_input');
let twoInput = document.querySelector('.two_input');
let lisOneGroop = document.querySelector('.lis_one-groop');
let lisTwoGroop = document.querySelector('.lis_two-groop');
let buttOne = document.querySelector('.butt-one');
let buttTwo = document.querySelector('.butt-two');
let firstBasket = [];
let secondBasket = []


console.log(oneInput);

buttOne.addEventListener('click',oneFun);

function oneFun(ev) {
    firstBasket.push(oneInput.value)
    lisOneGroop.insertAdjacentHTML('beforeend', `<li>${oneInput.value}</li>`)
    oneInput.value = ""
}

console.log(firstBasket);

buttTwo.addEventListener('click',oneFun2);

function oneFun2(ev) {
    secondBasket.push(twoInput.value)
    lisTwoGroop.insertAdjacentHTML('beforeend', `<li>${twoInput.value}</li>`)
    twoInput.value = ""
}


