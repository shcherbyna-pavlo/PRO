const registrationForm = document.forms.registrationForm;
console.log(registrationForm);

const button = document.querySelector('button')

const table = document.querySelector('.table')

const obj = {};
let p =[]

function add(ev) {

   ev.preventDefault();
   if(table.childNodes){

      for(let el of registrationForm) {
         const name = el.name;
         const type = el.type;
         const checked = el.checked;
         const value = el.value;
         
         if (name) {
            if (["radio", "checkbox"].includes(type)) {
               obj[value] = checked;
   
               if(checked === true) {
                  if(name === 'Language'){
                     gg(value)
                  }else {
                     table.insertAdjacentHTML("beforeend", `<tr><td>${name}</td><td>${value}</td></tr>`)
               }
            }
          } else {
               obj[name] = value;
               table.insertAdjacentHTML("beforeend", `<tr><td>${name}</td><td>${value}</td></tr>`)
            }
         }
      }
     function gg(Languages) {
      p.push(Languages)
      }
   
      table.insertAdjacentHTML("beforeend", `<tr><td>Languages</td><td>${p.join(', ')}</td></tr>`)
   }
   registrationForm.style.display = "none"
}

button.addEventListener('click', add)

