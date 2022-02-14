let cart4 = document.querySelectorAll('.card-button')


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

for ( let i=0; i < cart4.length; i++){
    cart4[i].addEventListener('click' , () => {
       cartNumbers(products4[i])
       totalCost(products4[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')

    if(productNumbers) {
        document.querySelector('.bag span').textContent = productNumbers 
    }
}

function cartNumbers(product) {
    
    let productNumbers = localStorage.getItem('cartNumbers')


    productNumbers = parseInt(productNumbers);
    

    if( productNumbers) {
        localStorage.setItem('cartNumbers',productNumbers + 1)
        document.querySelector('.bag span').textContent = productNumbers + 1;
    }else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.bag span').textContent = 1;
    }

    setItems(product)
}

function setItems(product){
let cartItems = localStorage.getItem('products4InCart') 
cartItems = JSON.parse(cartItems)


if(cartItems != null) {
    

    if(cartItems[products4.id] == undefined) {
        cartItems = {
            ...cartItems,
            [product.id]:product 
        }
    }
        cartItems[product.id].inCart +=1
       
} else {
    product.inCart = 1
     cartItems = {
    [product.id]: product
    }

}


localStorage.setItem("products4InCart", JSON.stringify(cartItems))
}

function totalCost (product){
let cartCost = localStorage.getItem('totalCost')


console.log("cost is", cartCost)
console.log(typeof cartCost)

if(cartCost != null){
    cartCost = parseInt(cartCost)
   localStorage.setItem("totalCost", cartCost + product.price )
}else {
    localStorage.setItem("totalCost", product.price )
}


    
}

onLoadCartNumbers()