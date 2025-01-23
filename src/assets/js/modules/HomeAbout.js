import BaseModule from "./BaseModule";
// core version + navigation, pagination modules:
import Swiper, { Navigation, Autoplay } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
export default class HomeAbout extends BaseModule {
  register() {
    Swiper.use([Navigation, Autoplay]);
    
    this.slidefull = new Swiper(".swiper_about", {
      speed: 1000,
      slidesPerView: 1.8,
      spaceBetween: 10,
      navigation: {  
        nextEl: ".swiper-button-custom-next",
        prevEl: ".swiper-button-custom-prev",
        disabledClass: "swiper-button-custom-disabled",
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      breakpoints: {
        767: {
          slidesPerView: 2.7,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3.2,
        }
      },
      on: {
        init: function() {
          const swiper = this;
          if (swiper.isBeginning) {
            document.querySelector('.swiper-button-custom-prev').classList.add('swiper-button-custom-disabled');
          }
          if (swiper.isEnd) {
            document.querySelector('.swiper-button-custom-next').classList.add('swiper-button-custom-disabled');
          }
        }
      }
    });
  }
}