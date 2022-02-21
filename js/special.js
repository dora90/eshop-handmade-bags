// let carts2 = document.querySelectorAll('.card-button')


// let products2 = [
//     {
//         id: 18,
//         img: "../images/se1bag.jpg",
//         price: 50,
//         inCart : 0
//     },
//     {
//         id: 19,
//         img: '../images/se2.jpg',
//         price: 30,
//         inCart : 0
//     },
//     {
//         id: 20,
//         img: "../images/se3.jpg",
//         price: 40,
//         inCart : 0
//     },
//     {
//         id: 21,
//         img: '../images/se4.jpg',
//         price: 50,
//         inCart : 0
//     },
//     {
//         id: 22,
//         img: '../images/se5.jpg',
//         price: 50,
//         inCart : 0
//     },
    
// ];

// for ( let i=0; i < carts2.length; i++){
//     carts2[i].addEventListener('click' , () => {
//        cartNumbers(products2[i])
//        totalCost(products2[i])
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
// let cartItems = localStorage.getItem('products2InCart') 
// cartItems = JSON.parse(cartItems)


// if(cartItems != null) {
    

//     if(cartItems[products2.id] == undefined) {
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


// localStorage.setItem("products2InCart", JSON.stringify(cartItems))
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

// onLoadCartNumbers()