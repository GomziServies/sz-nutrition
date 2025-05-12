document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card");
    const modal = document.getElementById("productQuickView");

    productCards.forEach(card => {
        card.addEventListener("click", () => {
            const title = card.dataset.title;
            const price = card.dataset.price;
            const oldPrice = card.dataset.oldPrice;
            const image = card.dataset.image;
            const rating = card.dataset.rating;
            const description = card.dataset.description;
            const availability = card.dataset.availability;
            const sku = card.dataset.sku;
            const category = card.dataset.category;
            const reviews = card.dataset.reviews;

            modal.querySelector(".quickview-product-img img").src = image;
            modal.querySelector(".quickview-product-content .title").textContent = title;
            modal.querySelector(".quickview-product-content .price").innerHTML = `${price} <del>${oldPrice}</del>`;
            modal.querySelector(".quickview-product-content p").textContent = description;
            modal.querySelector(".products-quickview-info .stock-status").innerHTML = `<span>Availability :</span> - ${availability}`;
            modal.querySelector(".products-quickview-info li:nth-child(2)").innerHTML = `<span>SKU :</span> ${sku}`;
            modal.querySelector(".products-quickview-info li:nth-child(3)").innerHTML = `<span>Categories :</span> ${category}`;
            modal.querySelector(".product-rating p").textContent = `(${reviews} Customer review)`;

            const starContainer = modal.querySelector(".rating-star");
            starContainer.innerHTML = "";
            for (let i = 0; i < parseInt(rating); i++) {
                const star = document.createElement("i");
                star.className = "fas fa-star";
                starContainer.appendChild(star);
            }
        });
    });
});
