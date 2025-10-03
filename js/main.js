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

  function cargarNavbar() {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      // Inicializamos el menú mobile
      const menuBtn = document.getElementById('menu-btn');
      const menu = document.getElementById('mobile-menu');
      const icono = document.getElementById('icono-menu');

      if (menuBtn && menu && icono) {
        menuBtn.addEventListener('click', () => {
          menu.classList.toggle('hidden');
          if (menu.classList.contains('hidden')) {
            icono.classList.remove('fa-xmark');
            icono.classList.add('fa-bars');
          } else {
            icono.classList.remove('fa-bars');
            icono.classList.add('fa-xmark');
          }
        });
      }
    });
}

// Llamamos al cargar la página
cargarNavbar();
