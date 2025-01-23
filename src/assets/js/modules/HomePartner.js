import BaseModule from "./BaseModule";
// core version + navigation, pagination modules:
import Swiper, { Autoplay, EffectFade, Navigation } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";

export default class HomePartner extends BaseModule {
  register() {
    Swiper.use([Autoplay, EffectFade, Navigation]);
    // ptck
    this.slidefull = new Swiper(".swiper_partner", {
      loop: true,
      speed: 1000,
      slidesPerView: 2,
      spaceBetween: 15, 
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20, 
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20, 
        },
      },navigation: {  
        nextEl: ".swiper-button-partner-next",
        prevEl: ".swiper-button-partner-prev",
      },
      
    });
  }
}
