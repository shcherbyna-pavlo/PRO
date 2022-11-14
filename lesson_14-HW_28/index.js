const listOfLists = [1, 2, [1, 2, 3], 3, 4, [1, 2, [1, 2, 3]], 5];
const body = document.querySelector('body');

body.appendChild(generateList(listOfLists, []));

function generateList(arr, b) {
   let c = b;

   const html = document.createElement('ul');

   arr.forEach((element, index) => {
      if (!Array.isArray(element)) {
         html.insertAdjacentHTML('beforeend', `<li>${c.join('')}${element}</li>`);
      }

      if (Array.isArray(element)) {
         c.push(`${arr[index - 1]}.`);

         html.insertAdjacentHTML('beforeend', generateList(element, c).outerHTML);
      }

      if (index === arr.length - 1) {
         c.pop();
      }
   });

   return html;
};