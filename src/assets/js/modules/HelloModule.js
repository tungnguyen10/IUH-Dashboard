import BaseModule from "./BaseModule";
export default class HelloModule extends BaseModule {
  register() {
    window.tailwind.config = {
      content: ["./src/**/*.{html,js,twig}", "./src/_templates/**/*.twig"],
      theme: {
        extend: {
          screens: {
            menuMb: "1101px",
          },
          fontFamily: {
            montserrat: ['"Montserrat"', "serif"],
          },
          boxShadow: {
            accredited: "3px 3px 12px 0px rgba(0, 0, 207, 0.20)",
            news: "3px 3px 12px 0px rgba(0, 0, 207, 0.20)",
          },
          dropShadow: {
            "btn-slide": "2px 2px 10px rgba(0, 0, 0, 0.05)",
            "gallery-item": "4px 4px 20px 0px rgba(0, 0, 0, 0.15)",
            partner: "4px 4px 15px 0px rgba(0, 0, 0, 0.05)",
          },
          animation: {
            rotation360: "rotation360 10s linear infinite",
          },
          keyframes: {
            rotation360: {
              "0%": { transform: "rotate(0deg)" },
              "50%": { transform: "rotate(180deg)" },
              "100%": { transform: "rotate(360deg)" },
            },
          },
          backgroundImage: {
            vn: "url('public/images/vietnam.png')",
            eng: "url('public/images/eng.webp')",
          },
          backgroundPosition: {
            vn: "center",
            eng: "center",
          },
          backgroundSize: {
            vn: "cover",
            eng: "cover",
          },
          fontSize: {
            title: "38px",
            titleMb: "28px",
          },
          colors: {
            lightText: "#9aa5b1",
            navyBlue: {
              50: "#edf9ff",
              100: "#d6f0ff",
              200: "#b5e7ff",
              300: "#83daff",
              400: "#48c3ff",
              500: "#1f1fff",
              600: "#0046ba",
              700: "#0000cf",
              800: "#0000a8",
              900: "#000080",
            },
            yellow: "#FFB800",
            black: "#393939",
            black1: "#333333",
            black2: "#666666",
            stroke: "#E3E3E3",
            stroke1: "#F9F9F9",
            red: "#d32f2f",
            y200: "#fff59d",
            y100: "#fff9c4",
            titleColor: "#032d6c",
          },
          spacing: {
            1.25: "5px",
            2.5: "10px",
          },
          borderRadius: {
            1.25: "5px",
          },
        },
      },
      plugins: [],
    };
    this.onModal();
    const loadingScreen = document.querySelector("#loading-screen");
    // Handle loading screen
    if (loadingScreen) {
      // Prevent scrolling while loading
      document.body.style.overflow = "hidden";

      // Hide loading screen after 3 seconds
      setTimeout(() => {
        // Add fade out animation
        loadingScreen.classList.add("opacity-0");

        // Remove element and restore scrolling after fade animation
        setTimeout(() => {
          loadingScreen.remove();
          document.body.style.overflow = "auto";
        }, 500); // Wait for fade animation to complete
      }, 3000); // 3 seconds delay
    }
  }

  onModal() {
    const openModalButtons = document.querySelectorAll("[data-open-modal]");
    const closeModalButtons = document.querySelectorAll(".modal-close");
    const modals = document.querySelectorAll(".modal");

    openModalButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-open-modal");
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.add("modalActive");
          document.body.style.overflow = "hidden";
        }
      });
    });

    closeModalButtons.forEach((button) => {
      button.addEventListener("click", () => {
        button.closest(".modal").classList.remove("modalActive");
        document.body.style.overflow = "auto";
        const iframe = button.closest(".modal").querySelector("iframe");
        if (iframe) {
          const iframeSrc = iframe.src;
          iframe.src = "";
          iframe.src = iframeSrc;
        }
      });
    });

    modals.forEach((modal) => {
      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.classList.remove("modalActive");
          document.body.style.overflow = "auto";
          const iframe = modal.querySelector("iframe");
          if (iframe) {
            const iframeSrc = iframe.src;
            iframe.src = "";
            iframe.src = iframeSrc;
          }
        }
      });
    });
  }
}