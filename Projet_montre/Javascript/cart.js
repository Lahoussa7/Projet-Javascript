document.addEventListener("DOMContentLoaded", function() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartDiv = document.getElementById("cart");

    cart.forEach(product => {
        const productDiv = createProductElement(product);
        cartDiv.appendChild(productDiv);
    });

    function createProductElement(product) {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.nom;

        const name = document.createElement("p");
        name.textContent = product.nom;

        const price = document.createElement("p");
        price.textContent = "Price: " + product.price;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", function() {
            removeProduct(product);
            productDiv.remove();
        });

        productDiv.appendChild(image);
        productDiv.appendChild(name);
        productDiv.appendChild(price);
        productDiv.appendChild(removeBtn);

        return productDiv;
    }

    function removeProduct(product) {
        let updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
        updatedCart = updatedCart.filter(item => item.nom !== product.nom);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
});
