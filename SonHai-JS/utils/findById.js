import { products } from "../ui-global-state/state.js"

const getProductById = ( key) => {
   const product= products.find(data => data.id == key.id)
   return product
}
export {
    getProductById
}