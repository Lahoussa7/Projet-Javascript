document.addEventListener("DOMContentLoaded", function () {
    // Récupérer les paramètres de l'URL
    const params = new URLSearchParams(window.location.search);
    // Vérifier si le paramètre 'produit' existe
    if (params.has('produit')) {
        // Récupérer la valeur du paramètre 'produit'
        const produitJson = params.get('produit');
        // Convertir la chaîne JSON en objet JavaScript
        const produit = JSON.parse(decodeURIComponent(produitJson));

        // Création d'une boîte pour le contenu du produit
       
        const boitecont=document.querySelector(".containt");
        // Création d'une div pour l'image du produit
        const boiteAjout = document.createElement("div");
        boiteAjout.className = "boxdiv";
        const imageDiv = document.createElement("div");
        const image = document.createElement("img");
        image.src = produit.image;
        image.alt = "Image du produit";
        imageDiv.appendChild(image);
        boiteAjout.appendChild(imageDiv);

        // Création d'une div pour le prix du produit
        const tab =["Price","Marque","Qualité","Mouvement-taille"];
        const priceDiv = document.createElement("div");
        priceDiv.className="pricediv"
        let i =0;
        produit.price.forEach(element => {
            const priceParagraph = document.createElement('p');
            priceParagraph.textContent = tab[i]+":  " +element; // Supposons que le prix est le premier élément du tableau
            priceDiv.appendChild(priceParagraph);
            priceDiv.appendChild(document.createElement('br'));
           
            i++;
        });
        const addButton = document.createElement("button");
        addButton.className="button"
        addButton.textContent = "Ajouter au panier";
       
        addButton.addEventListener("click", function() {
            // Logique d'ajout au panier ici
            // Par exemple, vous pouvez envoyer une requête au serveur pour ajouter le produit au panier
            console.log("Ajout au panier :", produit);
        });
        priceDiv.appendChild(addButton);
        // Ajout de la boîte de contenu au conteneur principal
        boitecont.appendChild(boiteAjout);
        boitecont.appendChild(priceDiv);
      
    } else {
        console.log('Paramètre "produit" non trouvé dans l\'URL');
    }
});
