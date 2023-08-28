
function addCart(id) {
    listCart = JSON.parse(localStorage.getItem('listCart'));
    const itemInCart = listCart.find(i => i.id === id)
    if (!itemInCart) {
        listCart.push({
            id,
            quantity: 1,
        })
    } else {
        itemInCart.quantity += 1
    }
    reloadCart()
}
function reloadCart() {
    let newListCart = []
    listCart.map(function (item) {
        const itemInProduct = products.find(i => i.id === item.id)
        itemInProduct.quantity = item.quantity
        newListCart.push(itemInProduct)
    })
    const cartColum = document.querySelector(".cart-colum")
    cartColum.innerHTML = '';
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
        totalItemCart(value)
    })
    totalCart(newListCart)
    saveLocalStorage('listCart', listCart)
    const quantityRight = document.getElementsByClassName("quantity-right");
    const quantityLeft = document.getElementsByClassName("quantity-left");
    const removeItemCart = document.getElementsByClassName("remove")
    for (let i = 0; i < quantityRight.length; i++) {
        quantityRight[i].addEventListener('click', augment, false)
    }
    for (let i = 0; i < quantityLeft.length; i++) {
        quantityLeft[i].addEventListener('click', reduce, false)
    }
    for (let i = 0; i < removeItemCart.length; i++) {
        removeItemCart[i].addEventListener('click', remove, false)
    }

}
const augment = function () {
    const id = parseInt(this.getAttribute("data-id"))
    const index = listCart.findIndex(i => i.id === id)
    listCart[index].quantity += 1
    reloadCart()
}
const reduce = function () {
    const id = parseInt(this.getAttribute("data-id"))
    const index = listCart.findIndex(i => i.id === id)
    if (listCart[index].quantity === 0) {
        listCart.splice(index, 1)
    } else {
        listCart[index].quantity -= 1
    }

    reloadCart()
}
const remove = function () {
    const id = parseInt(this.getAttribute("data-id"));
    const index = listCart.findIndex(i => i.id === id)
    listCart.splice(index, 1)
    reloadCart();
}
