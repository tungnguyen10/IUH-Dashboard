import BaseModule from "./BaseModule";
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default class ChildRelatedNews extends BaseModule {
  register() {
    Swiper.use([Navigation, Pagination, Autoplay]);

    this.slidefull = new Swiper(".child-related-news", {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
