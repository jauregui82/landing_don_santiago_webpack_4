import { __elem, __elems } from "../helpers";

let d = document;
let btn_menu = d.getElementById("toggle-menu"),
  menu = d.getElementById("navbar"),
  navbar_menu = d.querySelector(".navbar-menu"),
  menu_text = d.querySelector(".menu");
// search = d.querySelector(".navbar-search");

const toggle = () => {
  btn_menu.classList.toggle("menu-close");
  menu.classList.toggle("show");
  navbar_menu.classList.toggle("show");
  // search.classList.toggle("show");
  // menu_text.classList.toggle("show");
  d.body.classList.toggle("o-hidden-y");
  menu.classList.add("transition");
}

const toggleMenu = () => {

  if (btn_menu) {

    // btn_menu.addEventListener("click", (e) => {
    toggle();
    // console.log("btn_menu", btn_menu);
    // console.log(e.target);

    // });
  }



  // window.addEventListener("load", function () {
  //   window.setTimeout(function () {
  //     // window.scrollTo(0);
  //     window.scrollTo(0, 0);
  //   }, 0);
  // });

}
const clickMenu = (elm) => {
  if (navbar_menu.classList.contains('show')) {
    toggle();
  }
}


const init = () => {

  // toggleMenu();
  window.toggleMenu = toggleMenu;
  window.clickMenu = clickMenu;
  // console.log('togglemenu');

}
export {
  init
}


