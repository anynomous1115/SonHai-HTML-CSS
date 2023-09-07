import { cartEvent, colorsEvent, sizesEvent } from "./ui-controllers/common.controller.js"
import { showProduct } from "./ui-controllers/product.controllers.js";
import { getAllCartItem } from "./services/cart.service.js";


window.addEventListener("load", (event) => {
    function main() {
        getAllCartItem()
        showProduct()
        cartEvent()
        colorsEvent()
        sizesEvent()
    }
    
    main()
});

