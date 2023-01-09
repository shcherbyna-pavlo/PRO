const productCard = document.getElementsByClassName('product');

console.log(productCard);
// import {productCard as productCard} from './index.js'

import {MyCustomElement as MyCustomElement} from './todos.js'
import {g as g1} from './index.js'
console.log(new MyCustomElement('p'));


let d = history.state
console.log(d.id, d.name, d.price, d.isActive);

g1(d.id, d.name, d.price, d.isActive)
