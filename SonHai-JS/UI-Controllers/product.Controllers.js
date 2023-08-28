function showProduct(data) {
    const productItem = document.querySelector(".product-grid");
    for (let item of data) {
        var currentProduct = item.originalPrice - (item.originalPrice / 100) * item.disCount;
        item.currentPrice = currentProduct
        var sizeString = "";

        function showSize(data) {
            var sizeAfter = [];
            for (let i = 0; i < data.length; i++) {
                let div = "<div class='size-item'>" + item.size[i] + "</div>";
                sizeAfter.push(div);
            }
            for (let i = 0; i < sizeAfter.length; i++) {
                sizeString += sizeAfter[i];
            }
        }
        showSize(item.size);

        var colorString = "";
        function showColor(data) {
            var colorAfter = [];
            for (let i = 0; i < data.length; i++) {
                let div = '<div class="color"><div class="color-item" style="background-color:' + item.color[i] + '"></div></div>';
                colorAfter.push(div);
            }
            for (let i = 0; i < colorAfter.length; i++) {
                colorString += colorAfter[i]
            }

        }
        showColor(item.color)

        productItem.innerHTML += `
                    <div class="product-grid-item">
                    <div class="wrap-img">
                        <div class="img-product">
                            <img src="${item.image}" alt="">
                        </div>
                        <div class="img-hover" style="background-image:url(${item.imageHover})"></div>
                        <span class="discount">
                            -${item.disCount}%
                        </span>
                        <div class="wish-list">
                            <a href="" class="favourite">
                                <i class="fa-regular fa-heart heartAnimation"></i>
                            </a>
                            <a href="" class="favourite">
                                <i class="fa-solid fa-rotate"></i>
                            </a>
                        </div>
                        <div class="btn-product-item">
                            <a href="" class="quick-view">
                                Quick View
                            </a>
                            <button data-id="${item.id}" class="add-to-cart">
                                    Add To Cart
                            </button>
                        </div>
                        <div class="size">
                        ${sizeString}
                        </div>
                    </div>
                    <div class="img-desc">
                        <h3 class="name">
                            <a href="">${item.name}</a>
                        </h3>
                        <div class="price">
                            <span class="current">
                            $${item.currentPrice}
                            </span>
                            <span class="original-price">
                            $${item.originalPrice}.00
                            </span>
                        </div>
                        <!-- label and -->
                        <div class="color-product">
                            ${colorString}
                        </div>
                    </div>
                    </div>
              `
    }

}
showProduct(products)


