//variables
const header__burguer = document.querySelector(".header__burguer");
const nav = document.querySelector(".nav");

const nav__close = document.querySelector("#nav__close");
//Eventos
header__burguer.addEventListener("click", showMenu);
nav__close.addEventListener("click", hiddenMenu);
//funciones
function showMenu() {
  nav.classList.toggle("activo");
}
function hiddenMenu() {
  nav.classList.toggle("activo");
}
