import { productsState } from "../ui-global-state/state.js"

const getProductById = ( key) => {
   const product= productsState.find(data => data.id == key.id)
   return product
}
export {
    getProductById
}