const menuBtn = document.querySelector('.menu-btn');
const menuContainer = document.querySelector('.menu');
const ctaBtn = document.querySelector('.cta-container');

menuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    ctaBtn.classList.toggle('z-index');
    this.classList.toggle('menu-btn-active');
    menuContainer.classList.toggle('menu-hide');
});

AOS.init({
    duration: 1000,
    easing: 'linear',
    once: false,
});