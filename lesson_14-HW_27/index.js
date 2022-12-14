const input = document.querySelector('#url');
const button = document.querySelector('[type="button"]');

button.addEventListener('click', transition);

function transition() {
   if (input.value.includes('https://') || input.value.includes('http://')) {
      location.assign(input.value);
   } else {
      location.assign(`https://${input.value}`);
   }
};