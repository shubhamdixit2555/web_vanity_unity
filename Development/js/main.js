
document.addEventListener('DOMContentLoaded', () => {
  mobileMenu.classList.add('hidden');
});

// Navbar hide/show (Keep this as it is)
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    navbar.classList.add('navbar-hidden');
  } else {
    navbar.classList.remove('navbar-hidden');
  }
  lastScrollY = window.scrollY;
});

// Mobile menu and overlay logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIconPath = document.querySelector('#mobile-menu-btn svg path');

const hamburgerPath = "M4 6h16M4 12h16m-7 6h7";
const closePath = "M6 18L18 6M6 6l12 12";

// Toggle the menu, icon, and overlay on button click
mobileMenuBtn.addEventListener('click', () => {
    const isMenuOpen = mobileMenu.classList.toggle('hidden');
    
    if (isMenuOpen) {
        menuIconPath.setAttribute('d', hamburgerPath);
    } else {
        menuIconPath.setAttribute('d', closePath);
    }
});

// Close the menu when clicking any link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIconPath.setAttribute('d', hamburgerPath);
    });
});

// Close the menu when clicking anywhere outside
document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target)) {
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuIconPath.setAttribute('d', hamburgerPath);
        }
    }
});

// Data for services in popup
const serviceDetails = {
  "Bridal Makeup": [
    "Basic Bridal Makeup",
    "Air Brush Makeup",
    "H.D. Bridal Makeup",
    "Ultra H.D. Bridal Makeup",
    "Celebrity Bridal Makeup"
  ],
  "Party Makeup": [
    "Basic Party Makeup",
    "H.D. Party Makeup",
    "Ultra H.D. Party Makeup",
    "Glam Party Makeup"
  ],
  "Haldi & Mehandi Makeup": [
    "Basic Makeup",
    "Air Brush Makeup",
    "H.D. Makeup",
    "Ultra H.D. Makeup",
    "Glam Look Makeup"
  ],
  "Pre Wedding Makeup": [
    "Basic Makeup",
    "Air Brush Makeup",
    "H.D. Makeup",
    "Ultra H.D. Makeup",
    "Glam Look Makeup"
  ],
  "Maternity Makeup": [
    "Basic Makeup",
    "H.D. Makeup",
    "Ultra H.D. Makeup",
    "Glam Makeup"
  ],
  "Brand Shoot Makeup": [
    "Modelling Makeup",
    "Creative Shoot Makeup",
    "Brand Shoot Makeup",
    "Ramp Walk Makeup",
    "Models Makeup"
  ],
  "Mehandi Artist Team": [
    "Bridal Mehandi",
    "Guest Mehandi",
    "Girls Mehandi",
    "Simple Mehandi",
    "Party/Event Mehandi"
  ]
};

// Modal elements
const modal = document.getElementById('service-modal');
const modalContent = document.getElementById('service-modal-content');
const modalTitle = document.getElementById('service-modal-title');
const modalList = document.getElementById('service-modal-list');
const modalWhatsAppLink = document.getElementById('modal-whatsapp-link');
const modalClose = document.getElementById('modal-close');

// Learn More Buttons
document.querySelectorAll('.learn-more-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const service = btn.getAttribute('data-service');

    // Fill modal content
    modalTitle.textContent = service;
    modalList.innerHTML = '';
    serviceDetails[service].forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      modalList.appendChild(li);
    });

    // WhatsApp link
    const phoneNumber = '919876543210'; // your WhatsApp number
    const message = encodeURIComponent(`Hi! I'm interested in ${service}. Can you share more details?`);
    modalWhatsAppLink.href = `https://wa.me/${7014768500}?text=${message}`;

    // Show modal with animation
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
  });
});

// Close modal
modalClose.addEventListener('click', () => {
  modal.classList.remove('show');
  setTimeout(() => modal.classList.add('hidden'), 300);
});

// Close when clicking outside modal content
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    setTimeout(() => modal.classList.add('hidden'), 300);
  }
});


// Get the current date
const today = new Date();

// Format the date to 'YYYY-MM-DD'
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
const day = String(today.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

// Set the value of the date input
document.getElementById('floating_date').value = formattedDate;

  // Get the button
  const backToTopBtn = document.getElementById('backToTopBtn');

  // Show the button when scrolled down 100px
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      backToTopBtn.classList.remove('hidden');
      backToTopBtn.classList.add('animate-bounce'); 
    } else {
      backToTopBtn.classList.add('hidden');
      backToTopBtn.classList.remove('animate-bounce');
    }
  });
  
// Scroll to top on click
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});