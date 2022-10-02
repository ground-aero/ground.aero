
/*menu*/
const menuBody = document.querySelector('.menu')
const submenu = document.querySelector('.submenu');

// function submenuToggle() {
//   submenu.classList.toggle('submenu_active');
// }

document.addEventListener('click', function(event) {
    if (event.target.closest('.menu__item_lib')) {
        submenu.classList.toggle('submenu_active');
    }
    if (!event.target.closest('.menu')) {
      submenu.classList.remove('submenu_active');
    }
})