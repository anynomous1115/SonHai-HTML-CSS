const element = document.getElementsByClassName("add-to-cart")
const attributeInAddToCart = function () {
    const id = parseInt(this.getAttribute("data-id"))
    addCart(id)
}
for (let i = 0; i < element.length; i++) {
    element[i].addEventListener('click', attributeInAddToCart, false)
}
let listCart = [];

openCart.addEventListener('click',showItemInCart())
function showItemInCart() {
    const cartValue = JSON.parse(localStorage.getItem('listCart'));
    let newListCart = []
    cartValue.map(function (item) {
        const itemInProduct = products.find(i => i.id === item.id)
        itemInProduct.quantity = item.quantity
        newListCart.push(itemInProduct)
    })

    const cartColum = document.querySelector(".cart-colum")
    newListCart.forEach((value) => {
        if (value != null) {
            cartColum.innerHTML += `
                    <div class="cart-item">
                        <div class="cart-item-img">
                            <img src="${value.image}" alt="">
                        </div>
                        <div class="cart-item-desc">
                            <h3>${value.name}</h3>
                            <span id="cart-item-price">${value.currentPrice}</span>
                            <div class="quantity">
                                <button data-id="${value.id}" class="quantity-left"><i class="fa-solid fa-minus"></i></button>
                                <div class="count">${value.quantity}</div>
                                <button data-id="${value.id}" class="quantity-right"><i class="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                        <div class="remove" data-id="${value.id}"><i class="fa-solid fa-xmark"></i></div>
                    </div>
                    <hr>`;
        }
    })
}