// let cart1 = document.querySelectorAll('.card-button')


// let products1 = [
//      {
//         id: 6,
//         img: "./images/bag1.jpg",
//         price: 40,
//         inCart : 0
//     },
//     {
//         id: 7,
//         img: './images/dibags1.jpg',
//         price: 40,
//         inCart : 0
//     },
//     {
//         id: 8,
//         img: './images/dibags2.jpg',
//         price: 40,
//         inCart : 0
//     },
//     {
//         id: 9,
//         img: "./images/dibags3.jpg",
//         price: 50,
//         inCart : 0
//     },
//     {
//         id: 10,
//         img: './images/dibags4.jpg',
//         price: 50,
//         inCart : 0
//     },
//     {
//         id: 11,
//         img: "./images/dibags5.jpg",
//         price: 40,
//         inCart : 0
//     },
//     {
//         id: 12,
//         img: './images/dibags6.jpg',
//         price: 45,
//         inCart : 0
//     },
//     {
//         id: 13,
//         img: './images/dibags7.jpg',
//         price: 50,
//         inCart : 0
//     },
//     {
//         id: 14,
//         img: "./images/dibags8.jpg",
//         price: 50,
//         inCart : 0
//     },
//     {
//         id: 15,
//         img: './images/dibags9.jpg',
//         price: 40,
//         inCart : 0
//     },
//     {
//         id: 16,
//         img: "./images/dibags10.jpg",
//         price: 40,
//         inCart : 0
//     },
//     {
//         id: 17,
//         img: './images/dibags11.jpg',
//         price: 50,
//         inCart : 0
//     },
// ];

// for ( let i=0; i < cart1.length; i++){
//     cart1[i].addEventListener('click' , () => {
//        cartNumbers(products1[i])
//        totalCost(products1[i])
//     })
// }

// function onLoadCartNumbers() {
//     let productNumbers = localStorage.getItem('cartNumbers')

//     if(productNumbers) {
//         document.querySelector('.bag span').textContent = productNumbers 
//     }
// }

// function cartNumbers(product) {
    
//     let productNumbers = localStorage.getItem('cartNumbers')


//     productNumbers = parseInt(productNumbers);
    

//     if( productNumbers) {
//         localStorage.setItem('cartNumbers',productNumbers + 1)
//         document.querySelector('.bag span').textContent = productNumbers + 1;
//     }else {
//         localStorage.setItem('cartNumbers', 1)
//         document.querySelector('.bag span').textContent = 1;
//     }

//     setItems(product)
// }

// function setItems(product){
// let cartItems = localStorage.getItem('products1InCart') 
// cartItems = JSON.parse(cartItems)


// if(cartItems != null) {
    

//     if(cartItems[products1.id] == undefined) {
//         cartItems = {
//             ...cartItems,
//             [product.id]:product 
//         }
//     }
//         cartItems[product.id].inCart +=1
       
// } else {
//     product.inCart = 1
//      cartItems = {
//     [product.id]: product
//     }

// }


// localStorage.setItem("products1InCart", JSON.stringify(cartItems))
// }

// function totalCost (product){
// let cartCost = localStorage.getItem('totalCost')


// console.log("cost is", cartCost)
// console.log(typeof cartCost)

// if(cartCost != null){
//     cartCost = parseInt(cartCost)
//    localStorage.setItem("totalCost", cartCost + product.price )
// }else {
//     localStorage.setItem("totalCost", product.price )
// }


    
// }
// function displayCart() {
//     let cartItems = localStorage.getItem("products1InCart")
//     cartItems = JSON.parse(cartItems)
//     let productContainer = document.querySelector(".products")
//     let cartCost = localStorage.getItem('totalCost')

//     console.log(cartItems)
//     if( cartItems && productContainer){
//         productContainer.innerHTML = ''
//         Object.values(cartItems).map(item => {
//             productContainer.innerHTML += `
//             <div class="product"> 
//             <table>
// <th style="font-size: 25px;
// color:purple;
// margin-left:10px;
// margin-right:10px;
// cursor:pointer;
// display:flex;
// flex-wrap:wrap;">❌</th>
// <th><img style="width:150px; height:100px;"src="${item.img}"></th>
// <th class="product-price" style="margin-left:105px;font-size: 30px;">${item.price},00€</th>
// <th>
// <th class="product-quantity" style="margin-left:-5px;font-size:30px;">${item.inCart}</th>
// <th class="product-total" style="margin-left:130px;margin-top:-30px;font-size:20px">
// ${item.inCart * item.price},00€
// </table>
// `
// })


// productContainer.innerHTML += `
// <div class="basketTotalContainer"> 
// <h4 class="basketTotalTitle">
// Shopping Bag Total:
// </h4>
// <button class="basketTotal">
// ${cartCost},00€
// </button>
// </div>
// `



//     }
//   }

// onLoadCartNumbers()
// displayCart()