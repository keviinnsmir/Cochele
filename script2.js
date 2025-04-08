document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const submenus = document.querySelectorAll('.submenu');
  
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  
    submenus.forEach((submenu) => {
      submenu.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.stopPropagation();
          e.preventDefault();
          submenu.classList.toggle('active');
        }
      });
    });
  });
  