
const attributeInAddToCart = function () {
    const id = parseInt(this.getAttribute("data-id"))
    addCart(id)
}
for (let i = 0; i < element.length; i++) {
    element[i].addEventListener('click', attributeInAddToCart, false)
}
let listCart = [];
function addCart(id) {
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
