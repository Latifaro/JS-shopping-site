const shop = document.getElementById('shop');

let basket = JSON.parse(localStorage.getItem("data")) || [];

// Produktdatat finns i variabeln shopData (se data.js)

const generateShop = () => {

// Generera alla produkter med dynamisk HTML och Array.protype.map() samt join()

    const markup = shopData.map((product) => {

        const { id, title, price, description, image, } = product
        return `<div id=product-id-${id}class="item">
    <img width="220" src=${image} alt=""> 
    <div class="details">
        <h3> ${title}</h3>
        <p>${description}</p >
<div class="price-quantity">
    <h2>${price}-</h2>
    <div class="buttons">
        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
        <div id=${id} class="quantity">
        </div>
        <div id=${id} class="quantity">0</div>
        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
    </div>
</div>
    </div >
</div > `

    }).join('');

    shop.innerHTML = markup;
}
generateShop();

const increment = (id) => {
    // Om användaren klickar på + på produkten 
    console.log(id)

    // Initialize the shopping cart data in local storage
    let basket = JSON.parse(localStorage.getItem("data")) || 0;
    basket++;
    localStorage.setItem("data", JSON.stringify(basket));
    document.querySelector('.cartAmount').textContent = basket;
}

const decrement = (id) => {
    // Om användaren klickar på - på produkten 
    console.log(id)
    let basket = JSON.parse(localStorage.getItem("data")) || 0;
    if (basket > 0) {
        basket--;
        localStorage.setItem("data", JSON.stringify(basket));
        document.querySelector('.cartAmount').textContent = basket;
    }
}

function loadCart() {
    let basket = JSON.parse(localStorage.getItem("data")) || 0;
    document.querySelector('.cartAmount').textContent = basket;
    document.getElementById(id).querySelector('.quantity').innerHTML = basket;
}

loadCart();












// function loadCart(){
// let basket = localStorage.getItem(`data`);
// if (basket){
//     document.querySelector('.cartAmount').textContent = basket;
// }

// }

// const increment = (id) => {
//     // Om användaren klickar på + på produkten 
//     console.log(id)

//     // Initialize the shopping cart data in local storage

//     localStorage.setItem("data", JSON.stringify(id));
//    basket = parseInt(basket);
//     if (basket){
//         localStorage.setItem('data',  basket +1);
//         document.querySelector('.cartAmount').textContent =  basket +1;
//     } else{
//         localStorage.setItem('data',  1);
//         document.querySelector('.cartAmount').textContent = 1;
//     }

// }

// const decrement = (id) => {
//     // Om användaren klickar på - på produkten 
// console.log(id)
// localStorage.removeItem("data", JSON.stringify(id));
//     localStorage.setItem('data', basket -1);
// }

// loadCart();

