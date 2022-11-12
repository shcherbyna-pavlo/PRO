const arr = [1,2, [1, 2, 3], 3, [5, 6, [8]]];

const r = document.createElement('ul')


   arr.forEach((el) => {
      // Array.isArray(el) ? r.insertAdjacentHTML('beforeend', `<ul><li>${el}</li></ul>`) : r.insertAdjacentHTML('beforeend', `<li>${el}</li>`)
      if(Array.isArray(el)) {
         
         el.forEach ((el1) => {
            r.insertAdjacentHTML('beforeend', `<li>${el1}</li>`)
         })

      } else {
         r.insertAdjacentHTML('beforeend', `<li>${el}</li>`)
      }
   })
// function e (arr) {
//    e (arr)
// }

console.log(r)