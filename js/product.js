const products = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    image: "./image/item/items-8.jpg",
    price: 120,
    rating: 4.5,
    ratingCount: 88,
    discount: "-40%",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, labore.", 
  },
  {
    id: 2,
    title: "Autre produit",
    image: "./image/item/items-9.jpg",
    price: 80,
    rating: 4.0,
    ratingCount: 50,
    discount: "-30%",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, labore.",
  },
  {
    id: 3,
    title: "Autre produit",
    image: "./image/item/items-10.jpg",
    price: 80,
    rating: 4.0,
    ratingCount: 50,
    discount: "-30%",
  },
  {
    id: 4,
    title: "Autre produit",
      image: "./image/istockphoto-1947380208-612x612.webp",
    price: 80,
    rating: 4.0,
    ratingCount: 50,
    discount: "-30%",
  },
  {
    id: 5,
    title: "Autre produit",
      image: "./image/yaron-richman-uZmr0wwfHNA-unsplash.jpg",
    price: 80,
    rating: 4.0,
    ratingCount: 50,
    discount: "-30%",
  },
  {
    id: 6,
    title: "Autre produit",
    image: "./image/peter-glaser-qWs_Wa1JrKM-unsplash.jpg",
    price: 80,
    rating: 4.0,
    ratingCount: 50,
    discount: "-30%",
  },
  {
    id: 7,
    title: "Autre produit",
    image: "./image/items/item-1.png",
    price: 80,
    rating: 4.0,
    ratingCount: 50,
    discount: "-30%",
  },
  {
    id: 8,
    title: "Autre produit",
    image: "./image/items/item-1.png",
    price: 80,
    rating: 4.0,
    ratingCount: 50,
    discount: "-30%",
  },
  // Ajoutez d'autres produits si nécessaire
];

const productContainer = document.getElementById("product-container");

const productsHTML = products.map(product => `
    <div class="swiper-slide">
        <div class="card">
            <a href="./product_details.html?id=${product.id}">
                <div class="card_top">
                    <img src="${product.image}" alt="${product.title}" class="card_img" />
                    <div class="card_tag">${product.discount}</div>
                    <div class="card_top_icons">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="card_top_icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="card_top_icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                </div>
            </a>
            <div class="card_body">
                <h3 class="card_title">${product.title}</h3>
                <p class="card_price">$${product.price}</p>
                <div class="card_ratings">
                    <div class="card_stars">
                        ${Array.from({ length: 5 }, (_, index) => `
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                        `).join('')}
                    </div>
                    <p class="card_rating_numbers">(${product.rating})</p>
                </div>
                <div class="card_btn">
                    <button class="add_to_cart" data-id="${product.id}" data-title="${product.title}" data-image="${product.image}" data-price="${product.price}">
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    </div>
`).join('');

productContainer.innerHTML = productsHTML;
