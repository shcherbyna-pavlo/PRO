const registrationForm = document.forms.registrationForm;

const button = document.querySelector('button')
const table = document.querySelector('.table')

const obj = {};
const languages = []

function add(ev) {
   ev.preventDefault();

   for (let el of registrationForm) {
      const name = el.name;
      const type = el.type;
      const checked = el.checked;
      const value = el.value;

      if (name) {
         if (["radio", "checkbox"].includes(type)) {
            obj[value] = checked;

            if (checked === true) {
               if (name === "Language") {

                  addLanguages(value);
               } else {
                  table.insertAdjacentHTML("beforeend",`<tr><td>${name}</td><td>${value}</td></tr>`);
               }
            }
         } else {
            obj[name] = value;
            table.insertAdjacentHTML("beforeend",`<tr><td>${name}</td><td>${value}</td></tr>`);
         }
      }
   }

   function addLanguages(language) {
      languages.push(language);
   }

   table.insertAdjacentHTML("beforeend",`<tr><td>Languages</td><td>${languages.join(", ")}</td></tr>`);

   registrationForm.style.display = "none";
}

button.addEventListener('click', add)

