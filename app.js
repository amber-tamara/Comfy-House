//variables

const cartbtn = document.querySelector(".cart-btn");
const closeCartbtn = document.querySelector(".close-cart");
const clearCartbtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".product-center");
// cart
let cart = [];

//getting the products
class Products {
  async getProducts() {
    try {
      /*async getting a result at a later time*/
      let result = await fetch("products.json");
      let data = await result.json();
      let products = data.items;
      products = products.map(item => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

//display products
class UI {
  displayProducts(products) {
    let result = "";
    products.forEach(product => {
      result += `${product.image}
      ${product.id}
      ${product.title}
      ${product.price}`;
    });
    productsDOMinnerHTML = result;
  }
}

//local storage
class Storage {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  //get all products
  products.getProducts().then(products => ui.displayProducts(products));
});
