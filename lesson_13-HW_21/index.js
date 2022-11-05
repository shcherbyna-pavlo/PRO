const button = document.querySelector('.ghost');
const input = document.querySelector('.input');

const hideElement = () => {
    button.style.opacity = '1'
}

input.addEventListener('focus', hideElement)