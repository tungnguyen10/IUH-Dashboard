import BaseModule from "./BaseModule";
// core version + navigation, pagination modules:
import Swiper, { Pagination, Autoplay } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

export default class ChildResearch extends BaseModule {
  register() {
    // Initialize Swiper
    this.initSwiper();
  }

  initSwiper() {
    Swiper.use([Pagination, Autoplay]);
    this.slidefull = new Swiper(".swiper_research", {
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
        }
      },
    });
  }

}
