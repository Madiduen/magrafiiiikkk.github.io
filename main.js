let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: "Politi vanilla pakke",
        tag: "politi",
        price: 90,
        inCart: 0,

    },
    {
        name: "Mekaniker pakke",
        tag: "Mekaniker",
        price: 90,
        inCart: 0,

    },
    {
        name: "EMS",
        tag: "EMS pakke",
        price: 90,
        inCart: 0,

    }     
]   


for (let i=0; i < carts.length; i++)  {
      carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
      })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('CartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;

    }
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productsNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productsNumbers + 1);
        document.querySelector('.cart span').textContent = productsNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
      let cartItems = localStorage.getItem('productsInCart');
      cartItems = JSON.parse(cartItems);
 console.log("My cartItems are", cartItems);

 if(cartItems != null) {
     
    if(cartItems[product.tag] == undefined) {
        cartItems = {
            ...cartItems,
            [product.tag]: product
        }
    }
       cartItems[product.tag].inCart += 1; 
 } else {
      product.inCart = 1;
      cartItems = {
         [product.tag]: product
    }
}
     
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is", cartCost);
    localStorage.setItem("totalCost", product.price);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
 let productContainer = document.querySelector(".products-container");
   
 
 console.log(cartItems);
 if( cartItems && productContainer) {
     productContainer.innerHTML = '';
     Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
        <div class"product">
        <ion-icon name="close-circle"></ion-icon>
        <img src=".img/${item.tag}.jpg">
        <span>${item.name}M/span>
        </div>
        `
     });
        
}

}

onLoadCartNumbers();
displayCart();
