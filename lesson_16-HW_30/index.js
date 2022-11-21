const registrationForm = document.forms.registrationForm;
console.log(registrationForm);

const button = document.querySelector('button')

const table = document.querySelector('.table')

const obj = {};
function add(ev) {
   ev.preventDefault();

   for(let el of registrationForm) {
      const name = el.name;
      const type = el.type;
      const checked = el.checked;
      const value = el.value;
      
      if (name) {
         if (["radio", "checkbox"].includes(type)) {
            obj[value] = checked;
         } else {
            obj[name] = value;
         }
      }
   }

   for(let i = 1; i<10;i++){
      table.insertAdjacentHTML("beforeend", `<tr></tr>`)
      let tr = document.querySelector('tr')
      for(let j=1; j<10; j++){
        tr.insertAdjacentHTML("beforeend", `<td>${obj.name}</td>`)
      }
   }
}

button.addEventListener('click', add)
console.log(obj);

