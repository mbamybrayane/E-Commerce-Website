import { createIcons, Menu, Volume2, X } from 'lucide';

createIcons({
  icons: {
    Menu,
    Volume2,
    X
  }
});

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

/* var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
}); */

// Animations
ScrollReveal().reveal(".top_nav", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
});
ScrollReveal().reveal(".nav", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 100,
});

ScrollReveal().reveal(".header", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 200,
});
ScrollReveal().reveal(".section", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 100,
});
ScrollReveal().reveal(".footer", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 100,
});

// mobile nav
const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", () => {
  Nav.classList.toggle("mobile_nav_hide");
});





/* div class="swiper-slide" >
 <div class="card">
   <a href="./product_details.html">
     <div class="card_top">
       <img src="./image/item/items-8.jpg" alt="" class="card_img" />
       <div class="card_tag">-40%</div>
       <div class="card_top_icons">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           stroke-width="1.5"
           stroke="currentColor"
           class="card_top_icon"
         >
           <path
             stroke-linecap="round"
             stroke-linejoin="round"
             d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
           />
         </svg>
         <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           stroke-width="1.5"
           stroke="currentColor"
           class="card_top_icon"
         >
           <path
             stroke-linecap="round"
             stroke-linejoin="round"
             d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
           />
           <path
             stroke-linecap="round"
             stroke-linejoin="round"
             d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
           />
         </svg>
       </div>
     </div>
   </a>
   <div class="card_body">
     <h3 class="card_title">HAVIT HV-G92 Gamepad</h3>
     <p class="card_price">$120</p>
     <div class="card_ratings">
       <div class="card_stars">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           class="w-6 h-6"
         >
           <path
             fill-rule="evenodd"
             d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
             clip-rule="evenodd"
           />
         </svg>

         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           class="w-6 h-6"
         >
           <path
             fill-rule="evenodd"
             d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
             clip-rule="evenodd"
           />
         </svg>

         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           class="w-6 h-6"
         >
           <path
             fill-rule="evenodd"
             d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
             clip-rule="evenodd"
           />
         </svg>

         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           class="w-6 h-6"
         >
           <path
             fill-rule="evenodd"
             d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
             clip-rule="evenodd"
           />
         </svg>

         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           class="w-6 h-6"
         >
           <path
             fill-rule="evenodd"
             d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
             clip-rule="evenodd"
           />
         </svg>
       </div>
       <p class="card_rating_numbers">(88)</p>
     </div>
     <div class="card_btn">
       <button
         class="add_to_cart"
         data-id="1"
         data-title="HAVIT HV-G92 Gamepad"
         data-image="./image/items/item-1.png"
         data-price="120"
       >
         Ajouter au panier
       </button>
     </div>
   </div>
 </div>
           </div >
           <div class="swiper-slide">
             <div class="card">
               <div class="card_top">
                 <img src="./image/item/items-9.jpg" alt="" class="card_img" />
                 <div class="card_tag">-40%</div>
                 <div class="card_top_icons">
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="card_top_icon"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                     />
                   </svg>
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="card_top_icon"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                     />
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                     />
                   </svg>
                 </div>
               </div>
               <div class="card_body">
                 <h3 class="card_title">AK-900 Wired Keyboard</h3>
                 <p class="card_price">$80</p>
                 <div class="card_ratings">
                   <div class="card_stars">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>
                   </div>
                   <p class="card_rating_numbers">(88)</p>
                 </div>
                 <div class="card_btn">
                   <button
                     class="add_to_cart"
                     data-id="2"
                     data-title="AK-900 Wired Keyboard"
                     data-image="./image/items/item-2.png"
                     data-price="80"
                   >
                     Ajouter au panier
                   </button>
                 </div>
               </div>
             </div>
           </div>
           <div class="swiper-slide">
             <div class="card">
               <div class="card_top">
                 <img
                   src="./image/item/items-10.jpg"
                   alt=""
                   class="card_img"
                 />
                 <div class="card_tag">-40%</div>
                 <div class="card_top_icons">
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="card_top_icon"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                     />
                   </svg>
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="card_top_icon"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                     />
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                     />
                   </svg>
                 </div>
               </div>
               <div class="card_body">
                 <h3 class="card_title">IPS LCD Gaming Monitor</h3>
                 <p class="card_price">$120</p>
                 <div class="card_ratings">
                   <div class="card_stars">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>
                   </div>
                   <p class="card_rating_numbers">(88)</p>
                 </div>
                 <div class="card_btn">
                   <button
                     class="add_to_cart"
                     data-id="2"
                     data-title="AK-900 Wired Keyboard"
                     data-image="./image/items/item-2.png"
                     data-price="80"
                   >
                     Ajouter au panier
                   </button>
                 </div>
               </div>
             </div>
           </div>
           <div class="swiper-slide">
             <div class="card">
               <div class="card_top">
                 <img
                   src="./image/istockphoto-1947380208-612x612.webp"
                   alt=""
                   class="card_img"
                 />
                 <div class="card_tag">-40%</div>
                 <div class="card_top_icons">
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="card_top_icon"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                     />
                   </svg>
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="card_top_icon"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                     />
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                     />
                   </svg>
                 </div>
               </div>
               <div class="card_body">
                 <h3 class="card_title">S-Series Comfort chair</h3>
                 <p class="card_price">$120</p>
                 <div class="card_ratings">
                   <div class="card_stars">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>
                   </div>
                   <p class="card_rating_numbers">(88)</p>
                 </div>
                 <div class="card_btn">
                   <button
                     class="add_to_cart"
                     data-id="2"
                     data-title="AK-900 Wired Keyboard"
                     data-image="./image/items/item-2.png"
                     data-price="80"
                   >
                     Ajouter au panier
                   </button>
                 </div>
               </div>
             </div>
           </div>
           <div class="swiper-slide">
             <div class="card">
               <div class="card_top">
                 <img
                   src="./image/yaron-richman-uZmr0wwfHNA-unsplash.jpg"
                   alt=""
                   class="card_img"
                 />
                 <div class="card_tag">-40%</div>
                 <div class="card_top_icons">
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="card_top_icon"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                     />
                   </svg>
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="card_top_icon"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                     />
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                     />
                   </svg>
                 </div>
               </div>
               <div class="card_body">
                 <h3 class="card_title">HAVIT HV-G92 Gamepad</h3>
                 <p class="card_price">$120</p>
                 <div class="card_ratings">
                   <div class="card_stars">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>
                   </div>
                   <p class="card_rating_numbers">(88)</p>
                 </div>
                  <div class="card_btn">
                   <button
                     class="add_to_cart"
                     data-id="2"
                     data-title="AK-900 Wired Keyboard"
                     data-image="./image/items/item-2.png"
                     data-price="80"
                   >
                     Ajouter au panier
                   </button>
                 </div>
               </div>
             </div>
           </div>
           <div class="swiper-slide">
             <div class="card">
               <div class="card_top">
                 <img
                   src="./image/peter-glaser-qWs_Wa1JrKM-unsplash.jpg"
                   alt=""
                   class="card_img"
                 />
                 <div class="card_tag">-40%</div>
                 <div class="card_top_icons">
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="card_top_icon"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                     />
                   </svg>
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="card_top_icon"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                     />
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                     />
                   </svg>
                 </div>
               </div>
               <div class="card_body">
                 <h3 class="card_title">HAVIT HV-G92 Gamepad</h3>
                 <p class="card_price">$120</p>
                 <div class="card_ratings">
                   <div class="card_stars">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>
                   </div>
                   <p class="card_rating_numbers">(88)</p>
                 </div>
                  <div class="card_btn">
                   <button
                     class="add_to_cart"
                     data-id="2"
                     data-title="AK-900 Wired Keyboard"
                     data-image="./image/items/item-2.png"
                     data-price="80"
                   >
                     Ajouter au panier
                   </button>
                 </div>
               </div>
             </div>
           </div>
           <div class="swiper-slide">
             <div class="card">
               <div class="card_top">
                 <img src="./image/items/item-1.png" alt="" class="card_img" />
                 <div class="card_tag">-40%</div>
                 <div class="card_top_icons">
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="card_top_icon"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                     />
                   </svg>
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="card_top_icon"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                     />
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                     />
                   </svg>
                 </div>
               </div>
               <div class="card_body">
                 <h3 class="card_title">HAVIT HV-G92 Gamepad</h3>
                 <p class="card_price">$120</p>
                 <div class="card_ratings">
                   <div class="card_stars">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>
                   </div>
                   <p class="card_rating_numbers">(88)</p>
                 </div>
                  <div class="card_btn">
                   <button
                     class="add_to_cart"
                     data-id="2"
                     data-title="AK-900 Wired Keyboard"
                     data-image="./image/items/item-2.png"
                     data-price="80"
                   >
                     Ajouter au panier
                   </button>
                 </div>
               </div>
             </div>
           </div>
           <div class="swiper-slide">
             <div class="card">
               <div class="card_top">
                 <img src="./image/items/item-1.png" alt="" class="card_img" />
                 <div class="card_tag">-40%</div>
                 <div class="card_top_icons">
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="card_top_icon"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                     />
                   </svg>
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     class="card_top_icon"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                     />
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                     />
                   </svg>
                 </div>
               </div>
               <div class="card_body">
                 <h3 class="card_title">HAVIT HV-G92 Gamepad</h3>
                 <p class="card_price">$120</p>
                 <div class="card_ratings">
                   <div class="card_stars">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>

                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="currentColor"
                       class="w-6 h-6"
                     >
                       <path
                         fill-rule="evenodd"
                         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                         clip-rule="evenodd"
                       />
                     </svg>
                   </div>
                   <p class="card_rating_numbers">(88)</p>
                 </div>
                  <div class="card_btn">
                   <button
                     class="add_to_cart"
                     data-id="2"
                     data-title="AK-900 Wired Keyboard"
                     data-image="./image/items/item-2.png"
                     data-price="80"
                   >
                     Ajouter au panier
                   </button>
                 </div>
               </div>
             </div>
           </div> 
*/

const AddToCart = document.querySelectorAll(".add_to_cart");

AddToCart.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-id");
    const title = button.getAttribute("data-title");
    const image = button.getAttribute("data-image");
    const price = button.getAttribute("data-price");

    const cartItem = { id, title, image, price };
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
  });
});





