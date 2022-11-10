//variables
const header__burguer = document.querySelector(".header__burguer");
const nav = document.querySelector(".nav");
const nav__close = document.querySelector("#nav__close");

// VARIABLES submenu

const submenuBtn = document.querySelectorAll('.submenu__btn')
const submenu__arrowleft = document.querySelectorAll('.submenu__title')
//Eventos


header__burguer.addEventListener("click", showMenu);
nav__close.addEventListener("click", hiddenMenu);


// SUBMENUS EVENTOS


  submenuBtn.forEach((e) => {
    console.log(e);
    e.addEventListener('click', ()=>{
      let menuHermano = e.nextElementSibling
      menuHermano.classList.add('activo2')
    })
  });

  submenu__arrowleft.forEach((ele) =>{
    console.log(ele);
    ele.addEventListener('click', ()=>{
      let subMenuCerrar = ele.parentElement.parentElement
      console.log(subMenuCerrar);
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
