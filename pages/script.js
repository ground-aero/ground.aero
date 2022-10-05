
/*menu & submenu -----------------------------------*/
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

// set Date -----------------------------------
// let dateText
// let date = document.querySelector('.date')
//  console.log(date)
// let dateToPage;

// function setDate() {
//   const date = new Date();

//   dateToPage = `${date.getDate()}, ${date.getFullYear()}`;
//   // console.log(`${date.getDate()}`);
// //  return dateToPage
// }
// // setInterval(setDate, 3000);
// setDate();

// function dateTxt() {
//   dateText.textContent = dateToPage
//   return dateText
// }
// dateTxt()

// // console.log(dateToPage);
// document.date.append(dateText);