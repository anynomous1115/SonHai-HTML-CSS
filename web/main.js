import { cartEvent, colorsEvent, sizesEvent } from "./ui-controllers/common.controller.js"
import { getAllCartItem } from "./services/cart.service.js";
import { showProduct } from "./ui-controllers/product.Controllers.js";
import { getAllProducts } from "./services/products.service.js";


window.addEventListener("load", () => {
    async function main() {
        await getAllProducts()
        await getAllCartItem()
        showProduct()
        cartEvent()
        colorsEvent()
        sizesEvent()
    }
    
    main()
});
