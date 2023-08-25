
function reloadCart() {
    let newListCart = []
    listCart.map(function (item) {
        const itemInProduct = products.find(i => i.id === item.id)
        itemInProduct.quantity = item.quantity
        newListCart.push(itemInProduct)
    })
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
    console.log(quantityRight);
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
    const item = listCart.find(i => i.id === id)
    item.quantity += 1
    reloadCart()
}
const reduce = function () {
    const id = parseInt(this.getAttribute("data-id"))
    const item = listCart.find(i => i.id === id)
    if (item.quantity === 0) {
        listCart.splice(item, 1)
    } else {
        item.quantity -= 1
    }
    reloadCart()

}
const remove = function () {
    const id = parseInt(this.getAttribute("data-id"));
    const item = listCart.find(i => i.id === id);
    listCart.splice(item, 1);
    reloadCart();

}
