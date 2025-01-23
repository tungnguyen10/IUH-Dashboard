import BaseModule from "./BaseModule";
// core version + navigation, pagination modules:
import Swiper, { Autoplay, EffectFade } from "swiper";
// import Swiper and modules styles
import "swiper/css";

export default class HomeGallery extends BaseModule {
  register() {
    Swiper.use([Autoplay, EffectFade]);
    // ptck
    this.slidefull = new Swiper(".swiper_gallery", {
      loop: true,
      speed: 1000,
      effect: "fade",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      
    });
  }
}
