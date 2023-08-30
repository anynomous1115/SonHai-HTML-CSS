import { openCartEvent,colorsEvent, sizesEvent } from "./ui-controllers/common.controller.js"
import {  showProduct} from "./ui-controllers/product.controllers.js";

window.addEventListener("load", (event) => {
    function main() {
        showProduct()
        openCartEvent()
        colorsEvent()
        sizesEvent()
    }
    main()
  });

