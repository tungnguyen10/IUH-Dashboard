import BaseModule from "./BaseModule";
import Swiper, { Pagination, Autoplay } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";
export default class HomeEvent extends BaseModule {
  register() {
    Swiper.use([Pagination, Autoplay]);
    this.slidefull = new Swiper(".iuh-event-slide", {
      speed: 1500,
      slidesPerView: 1.15,
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        767: {
          slidesPerView: 2.1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
          centeredSlides: false,
        }
      },
    });
  }

}
