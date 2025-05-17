const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    const icono = document.getElementById('icono-menu');

    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      // Alterna entre ícono de barras y X (fa-xmark es el correcto)
      if (menu.classList.contains('hidden')) {
        icono.classList.remove('fa-xmark');
        icono.classList.add('fa-bars');
      } else {
        icono.classList.remove('fa-bars');
        icono.classList.add('fa-xmark');
      }
    });
  });