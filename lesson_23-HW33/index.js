const products = document.querySelector('.products');
const productCard = document.getElementsByClassName('product');

todos.forEach((el) => {
  let { id, name, price, isActive } = el;
  let card = new MyCustomElement("div").addClass("product").setAttribute(`data-product-id`, "");
  let { tagName, className, attributeName } = card;
  products.insertAdjacentHTML("beforeend",`<${tagName} class = "${className}" ${attributeName} = "${id}" ></${tagName}>`);
  createCard(id, name, price, isActive);
});

function createCard (id, name, price, isActive) {
   let active;

   if(isActive) {
      active = ''
   } else {active = 'disabled'};

   [...productCard].forEach((el) => {
      
      if (+el.dataset['productId'] === id) {

         let cardTitle = new MyCustomElement('div').addClass('product__title').setAttribute(`data-product-id`,'');
         el.insertAdjacentHTML('beforeend',`<${cardTitle.tagName} class = "${cardTitle.className}" ${cardTitle.attributeName} = "${id}">${name}</${cardTitle.tagName}>`);
      
         let cardImage = new MyCustomElement('div').addClass('product__image').setAttribute(`data-product-id`,'');
         el.insertAdjacentHTML('beforeend',`<${cardImage.tagName} class = "${cardImage.className}" ${cardImage.attributeName} = "${id}"></${cardImage.tagName}>`);
      
         let cardPrice = new MyCustomElement('div').addClass('product__price').setAttribute(`data-product-id`,'');
         el.insertAdjacentHTML('beforeend',`<${cardPrice.tagName} class = "${cardPrice.className}" ${cardPrice.attributeName} = "${id}">${price}</${cardPrice.tagName}>`);
      
         let cardBtn = new MyCustomElement('button').addClass('product__btn').setAttribute('',`${active}`);
         el.insertAdjacentHTML('beforeend',`<${cardBtn.tagName} class = "${cardBtn.className}" ${cardBtn.attributeActive}>Add to cart</${cardBtn.tagName}>`);
      };
      
      el.addEventListener("click", (ev) => {
        if (+ev.target.dataset["productId"] === id) {
          history.pushState({ id, name, price, isActive },"","./product.html");
          window.location = "./product.html";
        }
      });
   });
}
