import BaseModule from "./BaseModule";
import Swiper, { Navigation, Autoplay } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
export default class HomeNewsNoti extends BaseModule {
  register() {
    Swiper.use([Navigation, Autoplay]);
    this.initHeightCalculation();
    this.slidefull = new Swiper(".box-news-noti", {
      speed: 1500,
      navigation: {
        nextEl: ".swiper-button-custom-next",
        prevEl: ".swiper-button-custom-prev",
      },
      on: {
        init: function () {
          const swiper = this;
          if (swiper.isBeginning) {
            document
              .querySelector(".swiper-button-custom-prev")
              .classList.add("swiper-button-custom-disabled");
          }
          if (swiper.isEnd) {
            document
              .querySelector(".swiper-button-custom-next")
              .classList.add("swiper-button-custom-disabled");
          }
        },
      },
    });
  }
  initHeightCalculation() {
    const updateHeight = () => {
      const firstNewsItem = document.querySelector(".onGetHeight");
      const heightElement = document.querySelector(".constHeight");
      const heightNotify = document.querySelector(".onNotifyHeight");
      if (!firstNewsItem) return;
      if (window.innerWidth < 768) {
        const height =
          heightElement.offsetHeight - heightNotify.offsetHeight - 35;
        firstNewsItem.style.maxHeight = `${height}px`;
      } else {
        const height =
          heightElement.offsetHeight - heightNotify.offsetHeight - 42;
        firstNewsItem.style.maxHeight = `${height}px`;
      }
    };

    window.addEventListener("load", () => {
      updateHeight();
    });
    window.addEventListener("resize", () => {
      updateHeight();
    });
  }
}
