const categories = [
  {
    id: 1,
    category: "Toys",
  },
  {
    id: 2,
    category: "Sports",
  },
  {
    id: 3,
    category: "Toys",
  },
  {
    id: 4,
    category: "Grocery",
  },
  {
    id: 5,
    category: "Garden",
  },
];

const products = [
  {
    id: 1,
    category_id: 2,
    name: "Eggplant - Asian",
    description:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    price: 100,
    currency: "UAH",
  },
  {
    id: 2,
    category_id: 5,
    name: "Jagermeister",
    description:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    price: 108,
    currency: "UAH",
  },
  {
    id: 3,
    category_id: 2,
    name: "Wine - Lou Black Shiraz",
    description:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    price: 140,
    currency: "UAH",
  },
  {
    id: 4,
    category_id: 3,
    name: "Beef - Ox Tongue",
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    price: 100,
    currency: "UAH",
  },
  {
    id: 5,
    category_id: 3,
    name: "Beef - Bones, Marrow",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    price: 103,
    currency: "UAH",
  },
  {
    id: 6,
    category_id: 2,
    name: "Appetizer - Shrimp Puff",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    price: 205,
    currency: "UAH",
  },
  {
    id: 7,
    category_id: 4,
    name: "Appetizer - Shrimp Puff",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    price: 102,
    currency: "UAH",
  },
  {
    id: 8,
    category_id: 1,
    name: "Ecolab - Ster Bac",
    description: "Integer ac leo. Pellentesque ultrices mattis odio.",
    price: 304,
    currency: "UAH",
  },
  {
    id: 9,
    category_id: 4,
    name: "Vegetable - Base",
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    price: 140,
    currency: "UAH",
  },
  {
    id: 10,
    category_id: 3,
    name: "Flour - Corn, Fine",
    description:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    price: 100,
    currency: "UAH",
  },
  {
    id: 11,
    category_id: 1,
    name: "Beer - Guiness",
    description:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: 300,
    currency: "UAH",
  },
  {
    id: 12,
    category_id: 4,
    name: "Napkin White",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    price: 104,
    currency: "UAH",
  },
  {
    id: 13,
    category_id: 2,
    name: "Oil - Truffle, White",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    price: 102,
    currency: "UAH",
  },
  {
    id: 14,
    category_id: 5,
    name: "Wine - Puligny Montrachet A.",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    price: 153,
    currency: "UAH",
  },
  {
    id: 15,
    category_id: 5,
    name: "Tomatoes Tear Drop",
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    price: 124,
    currency: "UAH",
  },
];

const categoriesList = document.getElementById("categories");
const productsList = document.getElementById("products");
const product = document.getElementsByClassName("product");
const description = document.getElementById("description");
const buyButton = document.getElementById("buy-button");
const message = document.getElementById("message");

const info = document.querySelector(".info");

const categoriesSelection = function (ev) {
  let productArray = Array.from(product);
  let categoryId = ev.target.dataset["categoryId"];

  if (ev.target.tagName === "LI") {
    productArray.forEach((el) => {
      el.remove();
    });

    products.forEach((el) => {
      if (`${el.category_id}` === categoryId) {
        productsList.insertAdjacentHTML(
          "beforeend",
          `<li class="product" data-product-id="${el.id}">${el.name}</li>`
        );
      }
    });
  }

  info.style.visibility = "hidden";
  buyButton.style.visibility = "hidden";
};

const productsSelection = function (ev) {
  let productId = ev.target.dataset["productId"];

  products.forEach((el) => {
    if (`${el.id}` === productId) description.innerText = el.description;
  });

  customer.style.opacity = "0";
  message.innerText = "";
  info.style.visibility = "visible";
  buyButton.style.visibility = "visible";
};

const buy = function () {
  message.innerText = "The product has been added to the basket";

  products.forEach((el) => {
    if (description.innerText === el.description) {
      orderAmount(el.price);
    }
  });
  customer.style.opacity = "1";
};

categoriesList.addEventListener("click", categoriesSelection);
productsList.addEventListener("click", productsSelection);
buyButton.addEventListener("click", buy);

const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const amount = document.querySelector(".amount");
const сonfirmation = document.querySelector(".сonfirmation");
const customer = document.querySelector(".customer");
const price = document.querySelector(".price");
const messageErorr = document.querySelector(".messageErorr");
const valide = document.querySelectorAll(".valide");
const json = document.querySelector(".json");

const customerData = document.forms.customerData;

amount.innerText = 1;

function plu() {
  amount.innerText++;
  buy();
}

function min() {
  if (amount.innerText > 1) amount.innerText--;
  buy();
}

function orderAmount(prices) {
  price.innerText = `Сума Вашего замовлення ${prices * amount.innerText} UAH`;
}

function add(ev) {
  ev.preventDefault();

  const orderInfo = {};

  messageErorr.innerText = "";

  valide.forEach((el) => {
    el.style.border = "1px solid black";
    if (el.value.trim() === "") {
      el.style.border = "1px solid red";
    }
  });

  for (let el of customerData) {
    const name = el.name;
    const type = el.type;
    const checked = el.checked;
    const value = el.value;

    if (name) {
      if (["radio", "checkbox"].includes(type)) {
        orderInfo[value] = checked;
      } else {
        orderInfo[name] = value;
      }
    }
  }
  orderInfo.price = price.innerText.replace("Сума Вашего замовлення ", "");
  orderInfo.Date = new Date();

  if (customerData.name.value.trim() === "" || customerData.city.value === "" || customerData.post.value === "") {
    messageErorr.innerText = "Заповніть коректно форму";
  } else {
    json.innerHTML = `<pre>${JSON.stringify(orderInfo)}<pre>`;
    setTimeout(()=>location.reload(), 2000);
  }
}

minus.addEventListener("click", min);
plus.addEventListener("click", plu);
сonfirmation.addEventListener("click", add);
