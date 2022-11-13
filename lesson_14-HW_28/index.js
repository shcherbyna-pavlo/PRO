
let c= 0
      const listOfLists = [1, 2, [1, 2, 3], 3, 4, [1, 2, [1, 2, 3]], 5];
      const body = document.querySelector('body')

      body.appendChild(generateList(listOfLists, ""))

      function generateList(arr, b) {
         let c = b
         const html = document.createElement('ul')
   
         arr.forEach((element, index) => {
            // Array.isArray(element) ? html.insertAdjacentHTML('beforeend', generateList(element).outerHTML) : html.insertAdjacentHTML('beforeend', `<li>${element}</li>`);
   
            if(!Array.isArray(element)) {

               html.insertAdjacentHTML('beforeend', `<li>${c}${element}</li>`)
               
            }
            if(Array.isArray(arr[index+1])) {
               c += (`${element}.`)
               
            }
            if (element === arr.at(-1)) {
               c.slice(0, c.lenngth - 2)

               if (c.lenngth === 0) {
                  c = ""
               }
               console.log(c)
            }


            
            // console.log(c);
            if(Array.isArray(element)) {
               html.insertAdjacentHTML('beforeend', generateList(element, b).outerHTML)
            }
         });
         return html
      }
      console.log(generateList(listOfLists, ""))






// listOfLists.forEach


// arr.forEach((el) => {
//    if(el === 2){
//       return html
//    }
//    Array.isArray(el) ? html.insertAdjacentHTML('beforeend', a(el).outerHTML) : html.insertAdjacentHTML('beforeend', `<li>${el}</li>`)
// })
   // arr.forEach((el) =>{
   //    // Array.isArray(el) ? r.insertAdjacentHTML('beforeend', `<ul><li>${el}</li></ul>`) : r.insertAdjacentHTML('beforeend', `<li>${el}</li>`)
   //    if(Array.isArray(el)) {
         
   //       el.forEach ((el1) => {
   //          r.insertAdjacentHTML('beforeend', `<li>${el1}</li>`)
   //       })

   //    } else {
   //       r.insertAdjacentHTML('beforeend', `<li>${el}</li>`)
   //    }
   // })
// function e (arr) {
//    e (arr)
// }

// console.log(r)

// const arr2 = [5, 4, 2, 78, 92, [1, 2]];
// console.warn(arr2.keys())

// fue