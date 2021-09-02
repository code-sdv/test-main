// Выбор языка
let langLink = document.querySelector('.lang');
let langDrop = document.querySelector('.lang_dropdown');
langLink.addEventListener("click", function() {
    langDrop.classList.toggle('lang_active');
});




// Мобильное меню
const headerTop = document.querySelector('.header_top');
const btnMobile = document.querySelector('.btn_mobile');
const headerContacts = document.querySelector('.header_nav');
const bodyLock = document.querySelector('body');
btnMobile.addEventListener('click', function() {
  headerTop.classList.toggle('_background');
  btnMobile.classList.toggle('_mobile_close');
  headerContacts.classList.toggle('_mobile');
  bodyLock.classList.toggle('bodyLock');
});


// Клик по ссылке моб меню
let navLink = document.querySelectorAll('.nav_link');
for (let i = 0; i < navLink.length; i++) {
    console.log(navLink[i]);
    navLink[i].onclick = clickLink;
}
function clickLink() {
  headerContacts.classList.remove('_mobile');
  bodyLock.classList.remove('bodyLock');
}





// Scroll TOP
const offset = 200;
const scrollUp = document.querySelector('.btn__top');
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener('scroll', () => {
  if (getTop() > offset) {
    scrollUp.classList.add('btn__top--active')
  } else {
    scrollUp.classList.remove('btn__top--active')
  }
});
scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



//PARALLAX
var scene1 = document.getElementById('scene1');
var parallaxInstance = new Parallax(scene1, {
  invertX: false,
  invertY: false
});




