let carts6 = document.querySelectorAll('.card-button')


let products6 = [
    
    {
        id: 46,
        img: "../images/wallpaper1.jpg",
        price: 7,
        inCart : 0
    },
    {
        id: 47,
        img: '../images/wallpaper2.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 48,
        img: '../images/wallpaper3.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 49,
        img: "../images/wallpaper4.jpg",
        price: 7,
        inCart : 0
    },
    {
        id: 50,
        img: '../images/wallpaper5.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 51,
        img: '../images/wallpaper6.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 52,
        img: "../images/wallpaper7.jpg",
        price: 7,
        inCart : 0
    },
    {
        id: 53,
        img: '../images/wallpaper8.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 54,
        img: '../images/wallpaper9.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 55,
        img: "../images/wallpaper10.jpg",
        price: 7,
        inCart : 0
    },
    {
        id: 56,
        img: '../images/wallpaper11.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 57,
        img: '../images/wallpaper12.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 58,
        img: "../images/wallpaper13.jpg",
        price: 7,
        inCart : 0
    },
    {
        id: 59,
        img: '../images/wallpaper14.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 60,
        img: '../images/wallpaper15.jpg',
        price: 7,
        inCart : 0
    },
    {
        id:61,
        img: "../images/wallpaper16.jpg",
        price: 7,
        inCart : 0
    },
    {
        id: 62,
        img: '../images/wallpaper17.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 63,
        img: '../images/wallpaper18.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 64,
        img: "../images/wallpaper19.png",
        price: 7,
        inCart : 0
    },
    {
        id: 65,
        img: '../images/wallpaper20.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 66,
        img: '../images/wallpaper21.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 67,
        img: '../images/disney1.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 68,
        img: '../images/disney2.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 69,
        img: '../images/disney3.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 70,
        img: '../images/england1.jpeg',
        price: 7,
        inCart : 0
    },
    {
        id: 71,
        img: '../images/england2.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 72,
        img: '../images/england3.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 73,
        img: '../images/paris1.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 74,
        img: '../images/paris2.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 75,
        img: '../images/paris3.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 76,
        img: '../images/rose1.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 77,
        img: '../images/rose2.jpg',
        price: 7,
        inCart : 0
    },
    {
        id: 78,
        img: "images/rose3.jpg",
        price: 7,
        inCart : 0
    },
];

for ( let i=0; i < carts6.length; i++){
    carts6[i].addEventListener('click' , () => {
       cartNumbers(products6[i])
       totalCost(products6[i])
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
let cartItems = localStorage.getItem('products6InCart') 
cartItems = JSON.parse(cartItems)


if(cartItems != null) {
    

    if(cartItems[products6.id] == undefined) {
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


localStorage.setItem("products6InCart", JSON.stringify(cartItems))
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