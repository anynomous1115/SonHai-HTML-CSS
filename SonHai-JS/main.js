import { openCartEvent, colorsEvent, sizesEvent, closeCartEvent } from "./ui-controllers/common.controller.js"
import { showProduct } from "./ui-controllers/product.controllers.js";
import { getAllCartItem } from "./services/cart.service.js";
import { cartState } from "./ui-global-state/state.js";


window.addEventListener("load", (event) => {
    function main() {
        getAllCartItem()
        showProduct()
        openCartEvent()
        closeCartEvent()
        colorsEvent()
        sizesEvent()
    }
    
    main()
});

