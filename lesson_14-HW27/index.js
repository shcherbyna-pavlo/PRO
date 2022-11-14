const input = document.querySelector('#url');
const button = document.querySelector('[type="button"]');

button.addEventListener('click', a);

function a() {
   if (input.value.includes('http')) {
      location.assign(input.value);
   } else {
      location.assign(`https://${input.value}`);
   }
}