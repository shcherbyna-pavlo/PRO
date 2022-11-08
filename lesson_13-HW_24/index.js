const arrDogs = ['dog1.jpeg', 'dog2.jpeg', 'dog3.jpeg', 'dog4.jpeg', 'dog5.jpeg', 'dog6.jpeg'];
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

const image = document.getElementById('image');

let count = 0;


function right () {
    let elArrDogs = arrDogs[count];
    image.src = `./images/${elArrDogs}`
    image.alt = `${elArrDogs.replace('.jpeg', "")}`
    
    count ++
    if(count === arrDogs.length) {
        next.setAttribute('disabled', "")
    }
    console.log(count)
}

function left () {
    
    if(count === 0) {
        prev.setAttribute('disabled', "")
    }
    count--
    console.log(count)
}
console.log(count)
prev.addEventListener('click', left)
next.addEventListener('click', right)

