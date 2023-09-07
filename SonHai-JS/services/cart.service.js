import { cartState, products } from "../ui-global-state/state.js"
import { getProductById } from "../utils/findById.js";
import { saveLocalStorage } from "../utils/localStorage.js";

const sync = () => {
    saveLocalStorage("cart", cartState)
}

const getAllCartItem = () => {
    let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    cart.forEach(cartItem => {
        cartState.push(cartItem)
    })
}

const updateQuantityCartItem = (id, num) => {
    const index = cartState.findIndex(i => i.id == id)
    cartState[index].quantity += num
    totalCartCalculator()
    sync()
}

const getValueCount = (inputCountValue, id) => {
    const index = cartState.findIndex(i => i.id == id)
    cartState[index].quantity = parseInt(inputCountValue)
    sync()
}

const deleteCartItem = (id) => {
    const index = cartState.findIndex(i => i.id == id)
    cartState.splice(index, 1)
    totalCartCalculator()
    sync()
}

const addToCart = (id) => {
    const indexCartItem = cartState.findIndex(i => i.id === id)
    if (indexCartItem !== -1) {
        cartState[indexCartItem].quantity += 1
    } else {
        cartState.push({
            id,
            quantity: 1,
        })
    }
    totalCartCalculator()
    sync()
}

const totalCartCalculator = () => {
    return cartState.reduce((previousValue, cartItem) => {
        const index = products.findIndex(product => product.id == cartItem.id)
        previousValue += cartItem.quantity * products[index].currentPrice
        return previousValue
    }, 0)
}

export {
    getAllCartItem,
    addToCart,
    updateQuantityCartItem,
    deleteCartItem,
    totalCartCalculator,
    getValueCount
}