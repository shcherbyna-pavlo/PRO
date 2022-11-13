const input = document.querySelector('#url')
const button = document.querySelector('[type="button"]')

console.log(input, button);

button.addEventListener('click', a())

console.log(location.href);
console.log(input.target.value);

function a() {
   input.target.value
}