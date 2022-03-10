let cart4 = document.querySelectorAll('.card-buttonw')


let products4 = [
    {
        id: 23,
        img: "../images/wallet1.jpg",
        price: 12,
        inCart : 0
    },
    {
        id: 24,
        img: '../images/wallet3.jpg',
        price: 10,
        inCart : 0
    },
    {
        id: 25,
        img: '../images/wallet4.jpg',
        price: 10,
        inCart : 0
    },
    
];

for (let i = 0; i < cart4.length; i++) {
    cart4[i].addEventListener("click", () => {
      cartNumbers(products4[i]);
      totalCost(products4[i]);
      // newTotalCost(products4[i]);
    });
  }
  
  function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
  
    if (productNumbers) {
      document.querySelector(".bag span").textContent = productNumbers;
    }
  }
  
  function cartNumbers(product) {
    let productNumbers = localStorage.getItem("cartNumbers");
  
    productNumbers = parseInt(productNumbers);
  
    if (productNumbers) {
      localStorage.setItem("cartNumbers", productNumbers + 1);
      document.querySelector(".bag span").textContent = productNumbers + 1;
    } else {
      localStorage.setItem("cartNumbers", 1);
      document.querySelector(".bag span").textContent = 1;
    }
  
    setItems(product);
  }
  
  function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
  
    if (cartItems != null) {
      if (cartItems[products4.id] == undefined) {
        cartItems = {
          ...cartItems,
          [product.id]: product,
        };
      }
      cartItems[product.id].inCart += 1;
    } else {
      product.inCart = 1;
      cartItems = {
        [product.id]: product,
      };
    }
  
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  }
  
  function totalCost(product) {
    let cartCost = localStorage.getItem("totalCost");
  
    // console.log("cost is", cartCost)
    // console.log(typeof cartCost)
  
    if (cartCost != null) {
      cartCost = parseInt(cartCost);
      localStorage.setItem("totalCost", cartCost + product.price);
    } else {
      localStorage.setItem("totalCost", product.price);
    }
  }
  
  function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost");
  
    // console.log(cartItems)
    if (cartItems && productContainer) {
      productContainer.innerHTML = "";
      Object.values(cartItems).map((item) => {
        productContainer.innerHTML += `
              <div class="product"> 
              <table>
  <th><button class="icon" id="submit" onclick=deleteItemFromCart(${item.id})>❌</button></th>
  <th><img style="width:150px; height:100px;"src="${item.img}"></th>
  <th class="product-price" style="margin-left:105px;font-size: 30px;">${item.price},00€</th>
  <th>
  <th class="product-quantity" style="margin-left:-5px;font-size:30px;">${item.inCart}</th>
  <th class="product-total" style="margin-left:130px;margin-top:-30px;font-size:20px">
  ${item.inCart * item.price},00€</th>
  </table>
  `;
      });
  
      productContainer.innerHTML += `
  <div class="basketTotalContainer"> 
  <h4 class="basketTotalTitle">
  Shopping Bag Total:
  </h4>
  <h4 class="basketTotal">
  ${cartCost},00€
  </h4>
  
  </div>
  `;
      productContainer.innerHTML += `
  <button class="checkout" onclick="Toggle1()">Checkout</button>
      <div id="popup1">
      <div class="wrapper">
        <h2>Payment Form</h2>
        <form  action="/sign-up" method="post" id="form" class="form-body" >
        <h4>Personal Data</h4>
        <div class="input-group">
        <div class="input-box">
          <input type="text" placeholder="Full Name" required class="name">
        </div>
        <div class="input-box">
          <input type="text" placeholder="Address" required class="name">
        </div>
        </div>
        <div class="input-group">
        <div class="input-box">
          <input type="email" placeholder="email" required class="name">
        </div>
        </div>
  
        <div class="input-group">
        <div class="input-box">
        <h4>Payment Details</h4>
              <div class="input-group">
              <div class="input-box">
              <input type="text" class="name" placeholder="card number" required >
              </div>
              </div>
  
              
        <div class="input-group">
        <div class="input-box">   
        <button class="checkout-button" type="submit">Pay Now ${cartCost},00€</button>
        </div>
        <div>
        </form>
  </div>
  </div>         
  <a class="close1" onclick="Toggle1()">❌</a>
  
  
          <form>
      </div>
      </div>
  `;
    }
  }
  
  function deleteItemFromCart(pid) {
    let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
    let newcart = Object.values(productsInCart).filter((item) => item.id != pid);
    localStorage.setItem("productsInCart", JSON.stringify(newcart));
    let newProductNumbers = localStorage.getItem("cartNumbers");
  
    
  
    newProductNumbers = parseInt(newProductNumbers);
  
    if (newProductNumbers) {
      localStorage.setItem("cartNumbers", newProductNumbers - 1);
      document.querySelector(".bag span").textContent = newProductNumbers - 1;
    } else {
      localStorage.setItem("cartNumbers", 1);
      document.querySelector(".bag span").textContent = 1;
    }
  
    // let newCartCost = localStorage.getItem("newTotalCost");
  
    // if (newCartCost != null) {
    //   newCartCost = parseInt(newCartCost);
    //   localStorage.setItem("newTotalCost" , JSON.stringify(JSON.parse(localStorage.getItem("totalCost"))-(products[i].price* newProductNumbers)))
    // } else {
    //   localStorage.setItem("newTotalCost", products.price * newProductNumbers );
    // }
  
    
    displayCart();
  // totalCost()
    
  }
  
  
  
  onLoadCartNumbers();
  displayCart();
  
  
  function Toggle1(){
      const popup1 = document.getElementById('popup1')
      popup1.classList.toggle('action')
  }