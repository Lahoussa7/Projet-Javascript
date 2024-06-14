document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");
    const cartBtn = document.getElementById("cart-btn");

    fetch('../Json/montreH.json')
        .then(response => response.json())
        .then(data => {
            Object.values(data).forEach(category => {
                category.forEach(product => {
                    const productDiv = createProductElement(product);
                    productList.appendChild(productDiv);
                });
            });
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données JSON :', error);
        });

    // Fonction pour créer un élément produit
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

        const addToCartBtn = document.createElement("button");
        addToCartBtn.textContent = "Add to Cart";
        addToCartBtn.addEventListener("click", function() {
            addToCart(product);
        });

        productDiv.appendChild(image);
        productDiv.appendChild(name);
        productDiv.appendChild(price);
        productDiv.appendChild(addToCartBtn);

        return productDiv;
    }

    // Fonction pour ajouter un produit au panier
    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // Rediriger vers la page du panier lorsque le bouton "Cart" est cliqué
    cartBtn.addEventListener("click", function() {
        window.location.href = "cart.html";
    });
});
