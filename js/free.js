// let carts5 = document.querySelectorAll('.card-button')


// let products5 = [
    
//     {
//         id: 79,
//         img: "../images/free1.jpg",
//         price: 0,
//         inCart : 0
//     },
//     {
//         id: 26,
//         img: '../images/free2.jpeg',
//         price: 0,
//         inCart : 0
//     },
//     {
//         id: 27,
//         img: '../images/free3.jpg',
//         price: 0,
//         inCart : 0
//     },
//     {
//         id: 28,
//         img: "../images/free4.jpg",
//         price: 0,
//         inCart : 0
//     },
//     {
//         id: 29,
//         img: '../images/free5.png',
//         price: 0,
//         inCart : 0
//     },
//     {
//         id: 30,
//         img: '../images/free6.png',
//         price: 0,
//         inCart : 0
//     },
//     {
//         id: 31,
//         img: "../images/free7.jpg",
//         price: 0,
//         inCart : 0
//     },
//     {
//         id: 32,
//         img: '../images/free8.jpg',
//         price: 0,
//         inCart : 0
//     },
//     {
//         id: 33,
//         img: '../images/free9.png',
//         price: 0,
//         inCart : 0
//     },
//     {
//         id: 34,
//         img: "../images/free10.jpg",
//         price: 0,
//         inCart : 0
//     },
//     {
//         id: 35,
//         img: '../images/free11.jpg',
//         price: 0,
//         inCart : 0
//     },
//     {
//         id: 36,
//         img: '../images/free12.jpg',
//         price: 0,
//         inCart : 0
//     },
//     {
//         id: 37,
//         img: "../images/free13.jpg",
//         price: 0,
//         inCart : 0
//     },
//     {
//         id: 38,
//         img: '../images/free14.jpg',
//         price: 0,
//         inCart : 0
//     },
//     {
//         id: 39,
//         img: '../images/free15.jpg',
//         price: 0,
//         inCart : 0
//     },
//     {
//         id: 40,
//         img: "../images/free16.jpg",
//         price: 0,
//         inCart : 0
//     },
//     {
//         id: 41,
//         img: '../images/free17.jpg',
//         price: 0,
//         inCart : 0
//     },
//     {
//         id: 42,
//         img: '../images/free18.jpg',
//         price: 0,
//         inCart : 0
//     },
//     {
//         id: 43,
//         img: "../images/free19.jpg",
//         price: 0,
//         inCart : 0
//     },
//     {
//         id: 44,
//         img: '../images/free20.jpeg',
//         price: 0,
//         inCart : 0
//     },
//     {
//         id: 45,
//         img: '../images/free21.jpg',
//         price: 0,
//         inCart : 0
//     },
    
// ];

// for ( let i=0; i < carts5.length; i++){
//     carts5[i].addEventListener('click' , () => {
//        cartNumbers(products5[i])
//        totalCost(products5[i])
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
// let cartItems = localStorage.getItem('products5InCart') 
// cartItems = JSON.parse(cartItems)


// if(cartItems != null) {
    

//     if(cartItems[products5.id] == undefined) {
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


// localStorage.setItem("products5InCart", JSON.stringify(cartItems))
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