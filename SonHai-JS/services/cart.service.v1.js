import { showCart } from "../UI-Controllers/cart.controller.v1.js"
import { cartState } from "../UI-Global-State/cart.js"
import { totalItemCart} from "../utils/totalItemCart.js"
import { saveLocalStorage } from "../utils/localStorage.js";

const getAllCartItem = () => {
    let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    cart.forEach(cartItem => {
        cartItem.totalItemCartPrice = 0
        cartState.push(cartItem)
    })
    return cart
}
const updateQuantityCartItem = (id, type) => {
    const index = cartState.findIndex(i => i.id == id)
    if (type == "+") {
        cartState[index].quantity += 1
    }
    else {
        cartState[index].quantity -= 1
    }
    saveLocalStorage("cart",cartState)
    totalItemCart()
}
const deleteCartItem = (id) => {
    const index = cartState.findIndex(i => i.id == id)
    cartState.splice(index, 1)
    totalItemCart()
    saveLocalStorage("cart",cartState)
}
const addToCart = (id) => {
    const indexCartItem = cartState.findIndex(i => i.id === id)
    if (indexCartItem !== -1) {
        cartState[indexCartItem].quantity += 1
    } else {
        cartState.push({
            id,
            quantity: 1,
            totalItemCartPrice: 0
        })
    }
    totalItemCart()
    saveLocalStorage("cart",cartState)
}
export {
    getAllCartItem,
    addToCart,
    updateQuantityCartItem,
    deleteCartItem
}