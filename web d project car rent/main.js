// Selecting the menu button, navigation links container, and menu icon within the button
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Event listener for toggling the navigation menu
menuBtn.addEventListener("click", (e) => {
  // Toggle the "open" class on the navLinks element to show or hide the menu
  navLinks.classList.toggle("open"); 

  // Check if the navLinks element is currently open
  const isOpen = navLinks.classList.contains("open");
  // Update the menu button icon: close icon if open, menu icon if closed
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Event listener to close the menu when a navigation link is clicked
navLinks.addEventListener("click", (e) => {
  // Remove the "open" class to hide the menu
  navLinks.classList.remove("open");
  // Reset the menu icon to the default menu icon
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal configuration for animations
const scrollRevealOption = {
  origin: "bottom",    // Elements appear from the bottom
  distance: "50px",    // Distance to travel before stopping
  duration: 1000,      // Duration of the animation in milliseconds
};

// Apply ScrollReveal to various elements with different delays for staggered effects
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 500, // Delay to create a staggered effect
});
ScrollReveal().reveal(".header__container img", {
  ...scrollRevealOption,
  delay: 1000,
});

// Animate each range card with a 500ms interval for staggered animations
ScrollReveal().reveal(".range__card", {
  duration: 1000,
  interval: 500, // Interval between each element's animation
});

// Reveal location images and content with different origins and delays
ScrollReveal().reveal(".location__image img", {
  ...scrollRevealOption,
  origin: "right", // Elements appear from the right
});
ScrollReveal().reveal(".location__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".location__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".location__content .location__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// Selecting all "select__card" elements and adding initial "show__info" class to the first card
const selectCards = document.querySelectorAll(".select__card");
selectCards[0].classList.add("show__info");

// Price array corresponding to each swiper slide
const price = ["225", "455", "275", "625", "395"];
// Element where price will be displayed
const priceEl = document.getElementById("select-price");

// Function to update the displayed price and active card information based on the current slide
function updateSwiperImage(eventName, args) {
  if (eventName === "slideChangeTransitionStart") {
    // Get the active slide index
    const index = args && args[0].realIndex;
    // Update the price display to the price for the current slide
    priceEl.innerText = price[index];
    // Remove "show__info" from all cards, then add it to the active card
    selectCards.forEach((item) => {
      item.classList.remove("show__info");
    });
    selectCards[index].classList.add("show__info");
  }
}

// Initialize the Swiper carousel with specific effects and event handling
const swiper = new Swiper(".swiper", {
  loop: true,           // Loop through slides continuously
  effect: "coverflow",  // Coverflow effect for slide transition
  grabCursor: true,     // Shows a grabbing cursor on hover
  centeredSlides: true, // Center active slide
  slidesPerView: "auto",// Automatically adjust slides per view

  // Coverflow effect settings
  coverflowEffect: {
    rotate: 0,          // No rotation
    depth: 500,         // Depth effect for 3D effect
    modifier: 1,        // Strength of the effect
    scale: 0.75,        // Scale down slides
    slideShadows: false,// No shadows
    stretch: -100,      // Stretch effect for spacing
  },

  // Event listener for Swiper events to update price and card info
  onAny(event, ...args) {
    updateSwiperImage(event, args);
  },
});

// Reveal story cards with a 500ms interval
ScrollReveal().reveal(".story__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Selecting banner wrapper and duplicating each child element for infinite scrolling effect
const banner = document.querySelector(".banner__wrapper");
const bannerContent = Array.from(banner.children); // Convert banner children to an array

bannerContent.forEach((item) => {
  // Clone each banner item
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true); // Mark as hidden for screen readers
  banner.appendChild(duplicateNode); // Append duplicate to the banner for looping effect
});

// Additional ScrollReveal animations for download section elements
ScrollReveal().reveal(".download__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".download__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".download__links", {
  ...scrollRevealOption,
  delay: 1000,
});
