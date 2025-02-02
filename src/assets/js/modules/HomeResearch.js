import BaseModule from "./BaseModule";
// core version + navigation, pagination modules:
import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default class HomeResearch extends BaseModule {
  register() {
    Swiper.use([Navigation, Pagination, Autoplay, EffectCoverflow]);

    this.slidefull = new Swiper(".swiper_research", {
      effect: "coverflow",
      loop: true,
      grabCursor: true,
      slidesPerView: "auto",
      centeredSlides: true,
      coverflowEffect: {
        rotate: 25,
        stretch: 0,
        depth: 10,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-custom-next",
        prevEl: ".swiper-button-custom-prev",
      },

    });
  }
}
