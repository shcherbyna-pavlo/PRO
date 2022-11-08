const arrDogs = ['dog1.jpeg', 'dog2.jpeg', 'dog3.jpeg', 'dog4.jpeg', 'dog5.jpeg', 'dog6.jpeg'];
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const image = document.getElementById('image');
prev.setAttribute('disabled', "")

function slider() {
    let count = 0;
    let elArrDogs;
    
    function right () {
        count ++
    
        elArrDogs = arrDogs[count];
        image.src = `./images/${elArrDogs}`
        image.alt = `${elArrDogs.replace('.jpeg', "")}`
    
        if(count === arrDogs.length-1) {
            next.setAttribute('disabled', "")
        }
        prev.removeAttribute('disabled')
    }
    
    function left () {
        count--
    
        elArrDogs = arrDogs[count];
        image.src = `./images/${elArrDogs}`;
        image.alt = `${elArrDogs.replace('.jpeg', "")}`;
        
        if(count === 0) {
            prev.setAttribute('disabled', "")
        }
        next.removeAttribute('disabled');
    }
    
    prev.addEventListener('click', left)
    next.addEventListener('click', right)
}

slider()