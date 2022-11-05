const button = document.querySelector('.ghost');
const input = document.querySelector('.input');
const wrapper = document.querySelector('.wrapper');

button.style.opacity = '0';

const hideElement = (ev) => {
    if(ev.target.closest('input')) {
        button.style.opacity = '1';
        return;
    }

    button.style.opacity = '0';
}

wrapper.addEventListener('click', hideElement)