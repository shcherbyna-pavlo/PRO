const ghost = document.querySelector('.ghost');
const input = document.querySelector('.input');

ghost.style.opacity = '0';

const showElement = () => {
    ghost.style.opacity = '1';
}

const hideElement = () => {
    ghost.style.opacity = '0';
}

input.addEventListener('focus', showElement)
input.addEventListener('blur', hideElement)