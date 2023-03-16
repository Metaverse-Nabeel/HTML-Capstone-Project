const singers = [
  {
    id: 1,
    singerName: 'Yochai Benkler',
    imageURL: './images/singer1.svg',
    singerIntro: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    singerDesc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 2,
    singerName: 'Kilnam Chon',
    imageURL: './images/singer2.svg',
    singerIntro: 'Kilnam Chon Professor of Entrepreneurial Legal Studies at Harvard Law School',
    singerDesc: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    id: 3,
    singerName: 'Ryan Merkley',
    imageURL: './images/singer3.svg',
    singerIntro: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    singerDesc: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
  {
    id: 4,
    singerName: 'SohYeong Noh',
    imageURL: './images/singer4.svg',
    singerIntro: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    singerDesc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 5,
    singerName: 'Julia Leda',
    imageURL: './images/singer5.svg',
    singerIntro: 'President of Young Pirates of Europe',
    singerDesc: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    id: 6,
    singerName: 'Lila tretikov',
    imageURL: './images/singer6.svg',
    singerIntro: 'Executive Director of the Wikimedia Foundation',
    singerDesc: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
];
const body = document.getElementById('body');
const section = document.createElement('section');
section.classList.add('singerSection');
body.insertBefore(section, body.children[4]);
const titleDiv = document.createElement('div');
titleDiv.classList.add('titleDiv');
section.appendChild(titleDiv);
const title = document.createElement('h4');
title.textContent = 'Featured Singers';
title.classList.add('titleSingerSection');
titleDiv.appendChild(title);
const emptyDiv = document.createElement('div');
emptyDiv.classList.add('borderBottom');
titleDiv.appendChild(emptyDiv);
const allSingers = document.createElement('div');
allSingers.classList.add('allSingers');
section.appendChild(allSingers);
let i = 2;
const showSingers = (i) => {
  singers.splice(0, i).map((singer) => {
    const singerDiv = document.createElement('div');
    singerDiv.classList.add('singerDiv');
    allSingers.appendChild(singerDiv);
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('imgDiv');
    singerDiv.appendChild(imgDiv);
    const img = document.createElement('img');
    img.src = singer.imageURL;
    imgDiv.appendChild(img);
    const descDiv = document.createElement('div');
    descDiv.classList.add('descDiv');
    singerDiv.appendChild(descDiv);
    const singerName = document.createElement('h5');
    singerName.classList.add('singerName');
    singerName.textContent = singer.singerName;
    descDiv.appendChild(singerName);
    const singerIntro = document.createElement('p');
    singerIntro.classList.add('singerIntro');
    singerIntro.textContent = singer.singerIntro;
    descDiv.appendChild(singerIntro);
    const emptyDiv2 = document.createElement('div');
    emptyDiv2.classList.add('emptyDiv2');
    descDiv.appendChild(emptyDiv2);
    const singerDesc = document.createElement('p');
    singerDesc.classList.add('singerDesc');
    singerDesc.textContent = singer.singerDesc;
    descDiv.appendChild(singerDesc);
    return true;
  });
};
showSingers(i);
const moreBtn = document.createElement('div');
const textBtn = document.createElement('span');
textBtn.classList.add('textBtn');
textBtn.textContent = 'More';
moreBtn.appendChild(textBtn);
const spanCaret = document.createElement('span');
spanCaret.classList.add('spanCaret');
spanCaret.textContent = 'v';
moreBtn.appendChild(spanCaret);
moreBtn.classList.add('moreBtn');
section.appendChild(moreBtn);
moreBtn.addEventListener('click', () => {
  section.removeChild(moreBtn);
  i = singers.length;
  showSingers(i);
});
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
const partnersList = [
  {
    id: 1,
    imgURL: './images/partner-1.svg',
  },
  {
    id: 2,
    imgURL: './images/partner-2.svg',
  },
  {
    id: 3,
    imgURL: './images/partner-3.svg',
  },
  {
    id: 4,
    imgURL: './images/partner-4.svg',
  },
  {
    id: 5,
    imgURL: './images/partner-5.svg',
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
    partner.appendChild(partnerImg);
    return true;
  });
};
showPartners();
// Define the media query string
const mediaQuery = window.matchMedia('(min-width: 768px)');
// Define the function to perform when the media query matches
const doSomething = () => {
  hamburger.classList.remove('fa-sharp', 'fa-solid', 'fa-bars');
  hamburger.classList.add('hide');
  showSingers(singers.length);
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