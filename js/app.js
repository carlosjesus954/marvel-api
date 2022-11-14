//variables
const header__burguer = document.querySelector(".header__burguer");
const nav = document.querySelector(".nav");
const nav__close = document.querySelector("#nav__close");
const carrusel__li = document.querySelectorAll('.carrusel__li')
const carrusel__containerimg = document.querySelector('.carrusel__containerimg')
const carrusel__globaltext = document.querySelector('.carrusel__globaltext')

// VARIABLES submenu

const submenuBtn = document.querySelectorAll('.submenu__btn')
const submenu__arrowleft = document.querySelectorAll('.submenu__title')
//Eventos


header__burguer.addEventListener("click", showMenu);
nav__close.addEventListener("click", hiddenMenu);

// Carrusel events

carrusel__li.forEach((cadaPunto , i) => {
  carrusel__li[i].addEventListener('click', ()=>{
    let posicion = i
    // guardamos la posicion y dependiendo de la posicion que estemos tendra valor en la operacion
    let operacion = posicion * -50
    console.log(operacion);
    //cuando la posicion es 0 el transformX es 0
    carrusel__containerimg.style.transform = `translateX(${operacion}%)`
    carrusel__globaltext.style.transform = `translateX(${operacion}%)`
    //cuando posicion es 1 transformX es -50%
    
   carrusel__li.forEach((cadaPunto , i) =>{
    carrusel__li[i].classList.remove('carrusel__li--activo')
   })
   carrusel__li[i].classList.add('carrusel__li--activo')
    
  })
});

// SUBMENUS EVENTOS


  submenuBtn.forEach((e) => {
    e.addEventListener('click', ()=>{
      let menuHermano = e.nextElementSibling
      menuHermano.classList.add('activo2')
    })
  });

  submenu__arrowleft.forEach((ele) =>{
    ele.addEventListener('click', ()=>{
      let subMenuCerrar = ele.parentElement.parentElement
      subMenuCerrar.classList.remove('activo2')
    })
  })
  
//funciones



function showMenu() {
  nav.classList.toggle("activo");
}

function hiddenMenu() {
  nav.classList.toggle("activo");
}
