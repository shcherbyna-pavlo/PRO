import {todos} from './todos.js'
import {MyCustomElement} from './todos.js'

const products = document.querySelector('.products');
export const productCard = document.getElementsByClassName('product');

todos.forEach((el) => {
   let {id, name, price, isActive} = el
   let p = new MyCustomElement('div').addClass('product').setAttribute(`data-product-id`,'');
   let {tagName, className, attributeName} = p
   products.insertAdjacentHTML('beforeend',`<${tagName} class = "${className}" ${attributeName} = "${id}" ></${tagName}>`)
   g(id, name, price, isActive)
});

export function g (id, name, price, isActive) {
   let active;

   if(isActive) {
      active = ''
   } else {active = 'disabled'}
   [...productCard].forEach((el) => {
      
      if (+el.dataset['productId'] === id) {

         let p1 = new MyCustomElement('div').addClass('product__title');
         el.insertAdjacentHTML('beforeend',`<${p1.tagName} class = "${p1.className}">${name}</${p1.tagName}>`)
      
         let p2 = new MyCustomElement('div').addClass('product__image');
         el.insertAdjacentHTML('beforeend',`<${p2.tagName} class = "${p2.className}"></${p2.tagName}>`)
      
         let p3 = new MyCustomElement('div').addClass('product__price');
         el.insertAdjacentHTML('beforeend',`<${p3.tagName} class = "${p3.className}"= "${id}">${price}</${p3.tagName}>`)
      
         let p4 = new MyCustomElement('button').addClass('product__btn').setAttribute('',`${active}`);
         el.insertAdjacentHTML('beforeend',`<${p4.tagName} class = "${p4.className}" ${p4.attributeActive}>Add to cart</${p4.tagName}>`)
      }
      
      el.addEventListener('click', ((ev) => {
         console.log(ev.target.dataset['productId']);
         console.log(id);
        if (+ev.target.dataset['productId'] === id) {

         history.pushState({id, name, price, isActive}, '', './product.html');
         window.location = './product.html'
        }
      }))
   })
}



// function fff (ev) {
//    console.log(ev.target.dataset['productId']);

//    history.pushState(ev.target.dataset['productId'], '', './product.html');
//    window.location = './product.html'
// }

