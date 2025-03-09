// class MobileNavbar{
//     constructor(icon_mobile, navigation){
//         this.icon_mobile = document.querySelector(icon_mobile);
//         this.navigation = document.querySelector(navigation);
//         this.menuVisible = false;
    
//     }    addClickEvent() {
//         this.icon_mobile.addEventListener("click", () => {
//             this.toggleMenu();
//         });
//     }
//     toggleMenu() {
//         if (this.menuVisible) {
//             this.navigation.style.display = 'none'; // Esconde o menu
//         } else {
//             this.navigation.style.display = 'block'; // Exibe o menu
//         }
//         this.menuVisible = !this.menuVisible;
//     }
// }
// document.addEventListener("DOMContentLoaded", () => {
//     const navbar = new MobileNavbar("#icon_mobile", "#navigation");
//     navbar.addClickEvent();
// });

const menuMobile = document.getElementById('menuMobile');
const menuNavigation = document.getElementById('menuNavigation');

menuMobile.addEventListener('click', function() {
    menuNavigation.classList.toggle('open');
});