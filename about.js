const partnersList = [
  {
    id: 1,
    imgURL: './images/partner-1.svg',
    altText: 'partner-1',
  },
  {
    id: 2,
    imgURL: './images/partner-2.svg',
    altText: 'partner-2',
  },
  {
    id: 3,
    imgURL: './images/partner-3.svg',
    altText: 'partner-3',
  },
  {
    id: 4,
    imgURL: './images/partner-4.svg',
    altText: 'partner-4',
  },
  {
    id: 5,
    imgURL: './images/partner-5.svg',
    altText: 'partner-5',
  },
];
const showPartners = () => {
  const partnerSection = document.querySelector('.partners');
  const partner = document.createElement('div');
  partner.classList.add('partner');
  partnerSection.appendChild(partner);
  partnersList.map((each) => {
    const partnerImg = document.createElement('img');
    partnerImg.src = each.imgURL;
    partnerImg.alt = each.altText;
    partner.appendChild(partnerImg);
    return true;
  });
};
showPartners();
const hamburger = document.querySelector('.hamburger');
const navbarItems = document.querySelector('.navbarItems');
const closeBtn = document.querySelector('.closeBtn');
const desktopNavbar = document.querySelector('.desktopNavbar');
const navbar = document.querySelector('.header');
hamburger.addEventListener('click', () => {
  navbarItems.classList.remove('hide');
  navbarItems.classList.add('mobileNavbarItems');
  desktopNavbar.classList.add('mobileNavbar');
  navbar.classList.add('overlay');
  hamburger.classList.add('hide');
  hamburger.classList.remove('fa-sharp', 'fa-solid', 'fa-bars', 'hamburger');
  closeBtn.classList.remove('hide');
  closeBtn.classList.add('fa-solid', 'fa-xmark', 'closeBtn');
});
closeBtn.addEventListener('click', () => {
  navbarItems.classList.add('hide');
  navbarItems.classList.remove('mobileNavbarItems');
  desktopNavbar.classList.remove('mobileNavbar');
  navbar.classList.remove('overlay');
  hamburger.classList.remove('hide');
  hamburger.classList.add('fa-sharp', 'fa-solid', 'fa-bars', 'hamburger');
  closeBtn.classList.remove('fa-solid', 'fa-xmark', 'closeBtn');
  closeBtn.classList.add('hide');
});
navbarItems.addEventListener('click', () => {
  navbarItems.classList.add('hide');
  navbarItems.classList.remove('mobileNavbarItems');
  desktopNavbar.classList.remove('mobileNavbar');
  navbar.classList.remove('overlay');
  hamburger.classList.remove('hide');
  closeBtn.classList.add('hide');
});
// Define the media query string
const mediaQuery = window.matchMedia('(min-width: 768px)');
// Define the function to perform when the media query matches
const doSomething = () => {
  hamburger.classList.remove('fa-sharp', 'fa-solid', 'fa-bars');
  window.onresize = () => window.location.reload();
};
// Call the function once to check if the media query matches initially
if (mediaQuery.matches) {
  doSomething();
}
// Add an event listener to perform the function when the media query matches
mediaQuery.addEventListener('change', (event) => {
  if (event.matches) {
    doSomething();
  }
});