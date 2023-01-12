const productCard = document.getElementsByClassName('product');

let {id, name, price, isActive} = history.state

function g (id, name, price, isActive) {
   let active;

   if(isActive) {
      active = ''
   } else {active = 'disabled'};

   [...productCard].forEach((el) => {

      let cardTitle = new MyCustomElement('div').addClass('product__title');
      el.insertAdjacentHTML('beforeend', `<${cardTitle.tagName} class = "${cardTitle.className}">${name}</${cardTitle.tagName}>`);
      
      let cardImage = new MyCustomElement('div').addClass('product__image');
      el.insertAdjacentHTML('beforeend', `<${cardImage.tagName} class = "${cardImage.className}"></${cardImage.tagName}>`);

      let cardPrice = new MyCustomElement('div').addClass('product__price');
      el.insertAdjacentHTML('beforeend', `<${cardPrice.tagName} class = "${cardPrice.className}"= "${id}">${price}</${cardPrice.tagName}>`);

      let cardBtn = new MyCustomElement('button').addClass('product__btn').setAttribute('', `${active}`);
      el.insertAdjacentHTML('beforeend', `<${cardBtn.tagName} class = "${cardBtn.className}" ${cardBtn.attributeActive}>Add to cart</${cardBtn.tagName}>`);
   });
}

g(id, name, price, isActive)