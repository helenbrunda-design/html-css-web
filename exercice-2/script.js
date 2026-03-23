// const product = {
//   name: "Chaise de bureau ergonomique",
//   price: 129.9,
//   description:
//     "Chaise de bureau réglable avec support lombaire, accoudoirs ajustables et assise en mousse haute densité.",
// };

// const products = [product];
const products = [
  {
    name: "Chaise de bureau ergonomique",
    price: 129.9,
    description:
      "Chaise de bureau réglable avec support lombaire, accoudoirs ajustables et assise en mousse haute densité.",
  },
  {
    name: "Bureau assis-debout électrique",
    price: 349.99,
    description:
      "Bureau réglable en hauteur avec moteur silencieux, plateau en bois robuste et mémorisation de plusieurs positions.",
  },
  {
    name: "Lampe de bureau LED",
    price: 39.9,
    description:
      "Lampe de bureau à intensité réglable avec température de couleur ajustable et bras flexible.",
  },
  {
    name: "Clavier mécanique sans fil",
    price: 89.9,
    description:
      "Clavier mécanique Bluetooth avec switches silencieux, rétroéclairage RGB et batterie longue durée.",
  },
  {
    name: "Souris ergonomique verticale",
    price: 49.9,
    description:
      "Souris verticale sans fil conçue pour réduire les tensions au poignet, avec plusieurs niveaux de sensibilité DPI.",
  },
  {
    name: "Casque audio antibruit",
    price: 119.0,
    description:
      "Casque circum-aural avec réduction active du bruit, autonomie de 30 heures et recharge rapide USB-C.",
  },
  {
    name: "Tapis de souris XXL",
    price: 24.9,
    description:
      "Tapis de souris grand format avec surface anti-dérapante, bords renforcés et revêtement résistant aux éclaboussures.",
  },
  {
    name: "Support d’écran ajustable",
    price: 59.9,
    description:
      "Bras articulé pour écran jusqu’à 32 pouces, réglable en hauteur, inclinaison et rotation à 360 degrés.",
  },
  {
    name: "Hub USB-C multipports",
    price: 34.9,
    description:
      "Hub USB-C avec ports HDMI, USB 3.0 et lecteur de cartes SD, compatible avec la plupart des ordinateurs portables.",
  },
  {
    name: "Enceinte Bluetooth de bureau",
    price: 54.9,
    description:
      "Enceinte compacte avec son stéréo, connexion Bluetooth 5.0 et micro intégré pour les appels.",
  },
  {
    name: "Tapis de sol anti-fatigue",
    price: 44.9,
    description:
      "Tapis en mousse haute densité pour poste debout, conçu pour réduire la fatigue des jambes et du dos.",
  },
];

const mainContainer = document.querySelector(".container");

const generateProductCard = (product) => {
  const { id, name, price, description } = product;

  // Container
  const articleContainer = document.createElement("article");
  articleContainer.classList.add("product-card");

  // Header
  const articleHeader = document.createElement("div");
  articleHeader.classList.add("product-card__header");

  // Titre
  const articleTitle = document.createElement("h3");
  articleTitle.classList.add("product-card__title");
  articleTitle.textContent = name;

  // Prix
  const articlePrice = document.createElement("p");
  articlePrice.classList.add("product-card__price");
  articlePrice.textContent = `${price.toFixed(2)}€`;

  // Bouton container
  const articleButtonContainer = document.createElement("div");
  articleButtonContainer.classList.add("product-card__actions");
  // Bouton
  const articleButton = document.createElement("button");
  articleButton.classList.add("product-card__toggle");
  articleButton.textContent = "Afficher la description";
  articleButton.setAttribute("type", "button");

  articleButton.addEventListener("click", (event) => {
    const descriptionContainer = document.getElementById(`description-${id}`);

    if (descriptionContainer.classList.contains("is-hidden")) {
      articleButton.textContent = "Cacher la description";
      descriptionContainer.classList.remove("is-hidden");
    } else {
      articleButton.textContent = "Afficher la description";
      descriptionContainer.classList.add("is-hidden");
    }
  });

  // Description container
  const articleDescriptionContainer = document.createElement("div");
  articleDescriptionContainer.classList.add(
    "product-card__description",
    "is-hidden",
  );
  articleDescriptionContainer.setAttribute("id", `description-${id}`);

  // Description
  const articleDescription = document.createElement("p");
  articleDescription.textContent = description;

  articleContainer.appendChild(articleHeader);

  articleHeader.appendChild(articleTitle);
  articleHeader.appendChild(articlePrice);

  articleContainer.appendChild(articleButtonContainer);

  articleButtonContainer.appendChild(articleButton);

  articleContainer.appendChild(articleDescriptionContainer);

  articleDescriptionContainer.appendChild(articleDescription);

  mainContainer.appendChild(articleContainer);
};

products.forEach((product, index) => {
  product.id = index + 1;
  generateProductCard(product);
});