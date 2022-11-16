//variables
const headerBurguer = document.querySelector(".header__burguer");
const nav = document.querySelector(".nav");
const navClose = document.querySelector("#nav__close");
const carruselLi = document.querySelectorAll(".carrusel__li");
const carruselContainerimg = document.querySelector(".carrusel__containerimg");
const carruselGlobaltext = document.querySelector(".carrusel__globaltext");

// VARIABLES submenu

const submenuBtn = document.querySelectorAll(".submenu__btn");
const submenu__arrowleft = document.querySelectorAll(".submenu__title");
//Eventos

headerBurguer.addEventListener("click", showMenu);
navClose.addEventListener("click", hiddenMenu);

// Carrusel events

carruselLi.forEach((cadaPunto, i) => {
  carruselLi[i].addEventListener("click", () => {
    let posicion = i;
    // guardamos la posicion y dependiendo de la posicion que estemos tendra valor en la operacion
    let operacion = posicion * -20;
    //cuando la posicion es 0 el transformX es 0
    carruselContainerimg.style.transform = `translateX(${operacion}%)`;
    carruselGlobaltext.style.transform = `translateX(${operacion}%)`;
    //cuando posicion es 1 transformX es -50%

    carruselLi.forEach((cadaPunto, i) => {
      carruselLi[i].classList.remove("carrusel__li--activo");
    });
    carruselLi[i].classList.add("carrusel__li--activo");
  });
});

// SUBMENUS EVENTOS

submenuBtn.forEach((e) => {
  e.addEventListener("click", () => {
    let menuHermano = e.nextElementSibling;
    menuHermano.classList.add("activo2");
  });
});

submenu__arrowleft.forEach((ele) => {
  ele.addEventListener("click", () => {
    let subMenuCerrar = ele.parentElement.parentElement;
    subMenuCerrar.classList.remove("activo2");
  });
});

//funciones
// setTimeout(function () {
//   carruselLi.forEach((cadaPunto, i) => {
//     let posicion = i;
//     let operacion = posicion * -20;
//     carruselContainerimg.style.transform = `translateX(${operacion}%)`;
//     carruselGlobaltext.style.transform = `translateX(${operacion}%)`;

//     carruselLi.forEach((cadaPunto, i) => {
//       carruselLi[i].classList.remove("carrusel__li--activo");
//     });
//     carruselLi[i].classList.add("carrusel__li--activo");
//   });
  // if (posicion === 1) {
  //   let operacion = posicion * -0;
  //   carruselContainerimg.style.transform = `translateX(${operacion}%)`;
  //   carruselGlobaltext.style.transform = `translateX(${operacion}%)`;
  // }else{
  //   let operacion = posicion * -50;
  //   carruselContainerimg.style.transform = `translateX(${operacion}%)`;
  //   carruselGlobaltext.style.transform = `translateX(${operacion}%)`;
  // }
// }, 4000);

function showMenu() {
  nav.classList.toggle("activo");
}

function hiddenMenu() {
  nav.classList.toggle("activo");
}
