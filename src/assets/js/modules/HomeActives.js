import BaseModule from "./BaseModule";
// core version + navigation, pagination modules:
import Swiper, { Autoplay, EffectFade, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

export default class HomeActives extends BaseModule {
  register() {
    // console.log('actives');
    Swiper.use([Autoplay, EffectFade, Pagination]);
    // ptck
    this.slidefull = new Swiper(".swiper_actives", {
      loop: true,
      speed: 1000,
      slidesPerView: 1.2,
      spaceBetween: 10,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

    });
  }
}
