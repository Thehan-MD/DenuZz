// Get Elements
const detailsBtn = document.getElementById('details-btn');
const contactBtn = document.getElementById('contact-btn');
const detailsMenu = document.getElementById('details-menu');
const contactMenu = document.getElementById('contact-menu');
const personalDetailsBtn = document.getElementById('personal-details-btn');
const pcSpecsBtn = document.getElementById('pc-specs-btn');
const personalDetailsImg = document.getElementById('personal-details-img');
const pcSpecsImg = document.getElementById('pc-specs-img');

// Show Details Menu
detailsBtn.addEventListener('click', () => {
  detailsMenu.classList.remove('hidden');
  contactMenu.classList.add('hidden');
});

// Show Contact Menu
contactBtn.addEventListener('click', () => {
  contactMenu.classList.remove('hidden');
  detailsMenu.classList.add('hidden');
});

// Show Personal Details Image
personalDetailsBtn.addEventListener('click', () => {
  personalDetailsImg.classList.remove('hidden');
  pcSpecsImg.classList.add('hidden');
});

// Show PC Specs Image
pcSpecsBtn.addEventListener('click', () => {
  pcSpecsImg.classList.remove('hidden');
  personalDetailsImg.classList.add('hidden');
});

// Close Images on Click Outside
window.addEventListener('click', (event) => {
  if (event.target === personalDetailsImg || event.target === pcSpecsImg) {
    personalDetailsImg.classList.add('hidden');
    pcSpecsImg.classList.add('hidden');
  }
});
