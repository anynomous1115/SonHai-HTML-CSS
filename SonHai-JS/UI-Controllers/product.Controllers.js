function showProduct(data) {
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

    // const btn = document.getElementsByClassName("add-to-cart")
}
showProduct(products)

const colors = document.querySelectorAll('.color');
// Lặp qua từng phần tử và gắn sự kiện click
colors.forEach(function (color) {
    color.addEventListener('click', function () {
        // Kiểm tra xem phần tử có lớp "open" hay không
        if (this.classList.contains('active')) {
            // Nếu có, xóa
            this.classList.remove('active');
        } else {
            let parent = this.parentNode;
            let child = parent.querySelectorAll('.color')
            // Nếu không, thêm
            child.forEach(function (c) {
                c.classList.remove('active');
            })
            this.classList.add('active');
        }
    });
})

const sizes = document.querySelectorAll(".size-item");
sizes.forEach(function (size) {
    size.addEventListener('click', function () {
        if (this.classList.contains('active-size')) {
            this.classList.remove('active-size')
        } else {
            let parent = this.parentNode;
            let child = parent.querySelectorAll('.size-item')
            child.forEach(function (c) {
                c.classList.remove('active-size')
            })
            this.classList.add('active-size')
        }
    })
})
