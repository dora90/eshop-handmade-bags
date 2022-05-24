let carts = document.querySelectorAll(".card-button");

let products = [
  {
    id: 1,
    img: "../images/small1.jpg",
    price: 30,
    inCart: 0,
  },
  {
    id: 2,
    img: "../images/small2.jpg",
    price: 30,
    inCart: 0,
  },
  {
    id: 3,
    img: "../images/small3.jpg",
    price: 30,
    inCart: 0,
  },
  {
    id: 4,
    img: "../images/small4.jpg",
    price: 30,
    inCart: 0,
  },
  {
    id: 5,
    img: "../images/small5.jpg",
    price: 30,
    inCart:0,
  },
  {
    id: 6,
    img: "../images/bag1.jpg",
    price: 40,
    inCart: 0,
  },
  {
    id: 7,
    img: "../images/dibags1.jpg",
    price: 40,
    inCart: 0,
  },
  {
    id: 8,
    img: "../images/dibags2.jpg",
    price: 40,
    inCart: 0,
  },
  {
    id: 9,
    img: "../images/dibags3.jpg",
    price: 50,
    inCart: 0,
  },
  {
    id: 10,
    img: "../images/dibags4.jpg",
    price: 50,
    inCart: 0,
  },
  {
    id: 11,
    img: "../images/dibags5.jpg",
    price: 40,
    inCart: 0,
  },
  {
    id: 12,
    img: "../images/dibags6.jpg",
    price: 45,
    inCart: 0,
  },
  {
    id: 13,
    img: "../images/dibags7.jpg",
    price: 50,
    inCart: 0,
  },
  {
    id: 14,
    img: "../images/dibags8.jpg",
    price: 50,
    inCart: 0,
  },
  {
    id: 15,
    img: "../images/dibags9.jpg",
    price: 40,
    inCart: 0,
  },
  {
    id: 16,
    img: "../images/dibags10.jpg",
    price: 40,
    inCart: 0,
  },
  {
    id: 17,
    img: "../images/dibags11.jpg",
    price: 50,
    inCart: 0,
  },
  {
    id: 18,
    img: "../images/se1bag.jpg",
    price: 50,
    inCart: 0,
  },
  {
    id: 19,
    img: "../images/se2.jpg",
    price: 30,
    inCart: 0,
  },
  {
    id: 20,
    img: "../images/se3.jpg",
    price: 40,
    inCart: 0,
  },
  {
    id: 21,
    img: "../images/se4.jpg",
    price: 50,
    inCart: 0,
  },
  {
    id: 22,
    img: "../images/se5.jpg",
    price: 50,
    inCart: 0,
  },
  {
    id: 23,
    img: "../images/wallet1.jpg",
    price: 12,
    inCart: 0,
  },
  {
    id: 24,
    img: "../images/wallet3.jpg",
    price: 10,
    inCart: 0,
  },
  {
    id: 25,
    img: "../images/wallet4.jpg",
    price: 10,
    inCart: 0,
  },
];



for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
    newTotalCost(products[i])
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
    if (cartItems[products.id] == undefined) {
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

//find total cost
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

//add item
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
${item.inCart * item.price},00€ </th>
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
        <input type="text" id="fullname" placeholder="Full Name" required class="name">
      </div>
      <div class="input-box">
        <input type="text" placeholder="Address" id="address" required class="name">
      </div>
      </div>
      <div class="input-group">
      <div class="input-box">
        <input type="number" placeholder="Phone number" id ="phone" required class="name">
      </div>
      </div>
      <div class="input-group">
      <div class="input-box">
      <h4>Payment Details</h4>
            <div class="input-group">
            <div class="input-box">
            <input type="text" class="name" placeholder="card number" id="card-number" required >
            </div>
            </div>
            
      <div class="input-group">
      <div class="input-box">   
      <button onclick="AlertNotify()" class="checkout-button" type="submit">Pay Now ${cartCost},00€</button>
      
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
  // document.getElementsByClassName("checkout-button").onclick = alert("Thank you for your order!")

}



// function sendMail1(params) {
//   var tempParams = {
//     from_name : document.getElementById("#fullname").value,
//     address: document.getElementById("#address").value,
//     phone: document.getElementById("#phone").value,
//     card_number: document.getElementById("#card-number").value
//   }

//   emailjs.send('service_6vrngoj', 'template_udtmx1k', tempParams).then(function(res){
//     console.log("success", res.status)
//   })
// }

//delete item
function deleteItemFromCart(pid) {
  let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
  let newcart = Object.values(productsInCart).filter((item) => item.id != pid);
  localStorage.setItem("productsInCart", JSON.stringify(newcart));
  localStorage.setItem("totalCost" , JSON.stringify(JSON.parse(localStorage.getItem("totalCost"))-item[i].price))
  
//   localStorage.setItem("cartNumbers" , JSON.stringify(JSON.parse(localStorage.getItem("cartNumbers"))-1))
//   document.querySelector(".bag span").textContent = JSON.parse(localStorage.getItem("cartNumbers"))
//   let cartItems = localStorage.getItem("productsInCart");
//   cartItems = JSON.parse(cartItems);
//   let productContainer = document.querySelector(".products");
//   var newData= {}
//   var array=Object.values(cartItems)
//   for (var i = 0 ; i < array.length; i++){
//    if(array[i].id !== pid.id){
//      newData[i] = array[i]
//    }
//    if(array[i].id === pid.id){
//     localStorage.setItem("totalCost" , JSON.stringify(JSON.parse(localStorage.getItem("totalCost")-array[i].price)))
//   }

//   }
  
//  productContainer.innerHTML = ""
//  localStorage.setItem("productsInCart" ,JSON.stringify(newData))

 let newCartCost = localStorage.getItem("newTotalCost");
  
    if (newCartCost != null) {
      newCartCost = parseInt(newCartCost);
      localStorage.setItem("newTotalCost" , JSON.stringify(JSON.parse(localStorage.getItem("totalCost"))-products[i].price))
    } else {
      localStorage.setItem("newTotalCost", products[i] * newProductNumbers );
    }



  let newProductNumbers = localStorage.getItem("cartNumbers");

  

  newProductNumbers = parseInt(newProductNumbers);

  if (newProductNumbers) {
    localStorage.setItem("cartNumbers", newProductNumbers - 1);
    document.querySelector(".bag span").textContent = newProductNumbers - 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".bag span").textContent = 1;
  }
  
  displayCart();
setItems()
totalCost()
  
}



onLoadCartNumbers();
displayCart();


function Toggle1(){
    const popup1 = document.getElementById('popup1')
    popup1.classList.toggle('action')
}

function AlertNotify(){
  alert("Thank you for your order!")
}



