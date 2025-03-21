const menuItems = [
    { id: 1, name: 'Margherita Pizza', price: 250 },
    { id: 2, name: 'Veg Biryani', price: 180 },
    { id: 3, name: 'Paneer Tikka', price: 220 },
    { id: 4, name: 'Chicken Curry', price: 300 }
];

let cart = [];

function loadMenu() {
    const menuDiv = document.getElementById('menu');
    menuDiv.innerHTML = '';
    menuItems.forEach(item => {
        menuDiv.innerHTML += `
            <div class="menu-item">
                <h3>${item.name}</h3>
                <p>Price: ${item.price} INR</p>
                <button onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(itemId) {
    const item = menuItems.find(menuItem => menuItem.id === itemId);
    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceDiv = document.getElementById('total-price');

    cartItemsDiv.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        cartItemsDiv.innerHTML += <li>${item.name} - ${item.price} INR</li>;
        total += item.price;
    });
    totalPriceDiv.innerText = total;
}

function generateBill() {
    alert('Total Bill: ' + document.getElementById('total-price').innerText + ' INR');
}
