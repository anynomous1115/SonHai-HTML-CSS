function totalCart(newListCart) {
    let totalCart = 0
    newListCart.map(function (item) {
        totalCart += item.totalItem
    })

    const subtotalPrice = document.querySelector(".subtotal-price")
    subtotalPrice.innerText = "$" + totalCart.toLocaleString();
}
