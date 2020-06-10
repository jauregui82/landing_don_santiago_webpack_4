import VanillaScrollspy from 'vanillajs-scrollspy';
import { __elemId, __elem, __elems } from '../helpers';

const scroll = () => {
  const navbar = __elem('#content-menu-1');
  const scrollspy = new VanillaScrollspy(navbar);
  scrollspy.init();
}
const scroll2 = () => {
  const navbar = __elem('#content-menu-2');
  const scrollspy = new VanillaScrollspy(navbar);
  scrollspy.init();
}

const scrollUp = () => {
  const navbar = __elem('.scroll-content');
  const scrollspy = new VanillaScrollspy(navbar);
  scrollspy.init();
}

const init = () => {
  scroll();
  scroll2();
  scrollUp();

}

export {
  init
}
