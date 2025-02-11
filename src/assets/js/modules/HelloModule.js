import BaseModule from "./BaseModule";
export default class HelloModule extends BaseModule {
  register() {
    window.tailwind.config = {
      content: ["./src/**/*.{html,js,twig}", "./src/_templates/**/*.twig"],
      theme: {
        extend: {
          transitionProperty: {
            'transform': 'transform',
          },
          scale: {
            '110': '1.1',
            '150': '1.5',
          },
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
            titleDK: "1.8rem",
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
            yellow: "#fff434",
            yellowLogo: "#e9b20f",
            black: "#393939",
            black1: "#333333",
            black2: "#666666",
            stroke: "#E3E3E3",
            stroke1: "#F9F9F9",
            red: "#d32f2f",
            persianRed: {
              '50': '#fdf3f3',
              '100': '#fde3e3',
              '200': '#fbcdcd',
              '300': '#f8a9a9',
              '400': '#f17878',
              '500': '#e74c4c',
              '600': '#d32f2f',
              '700': '#b12424',
              '800': '#932121',
              '900': '#7a2222',
              '950': '#420d0d',
            },
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
    this.onPulseIcon();
    this.initScrollToTop();
    this.initDepartmentToggle();
    const loadingScreen = document.querySelector("#loading-screen");
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
      }, loadingScreen.dataset.time); // 3 seconds delay
    }
    this.initTabsGlobal();
    this.initMobileMenu();
  }
  onPulseIcon() {
    const socialToggle = document.getElementById('socialToggle');
    const socialList = document.getElementById('socialList');
    const socialIcons = document.querySelectorAll('.social-icon');
    let isOpen = false;

    if (socialToggle && socialList) {
      socialToggle.addEventListener('click', () => {
        isOpen = !isOpen;

        if (isOpen) {
          // Show the list
          socialList.classList.remove('invisible', 'opacity-0');
          socialList.classList.add('visible', 'opacity-100');

          // Animate each icon with delay
          socialIcons.forEach((icon, index) => {
            setTimeout(() => {
              icon.classList.add('translate-y-0', 'opacity-100');
              icon.classList.remove('-translate-y-4', 'opacity-0');
            }, index * 100);
          });
        } else {
          // Hide the list
          socialList.classList.remove('visible', 'opacity-100');
          socialList.classList.add('invisible', 'opacity-0');

          // Reset icons
          socialIcons.forEach(icon => {
            icon.classList.remove('translate-y-0', 'opacity-100');
            icon.classList.add('-translate-y-4', 'opacity-0');
          });
        }
      });

      // Initialize icons state
      socialIcons.forEach(icon => {
        icon.classList.add('-translate-y-4', 'opacity-0');
      });
    }
  }
  onModal() {
    const openModalButtons = document.querySelectorAll("[data-open-modal]");
    const closeModalButtons = document.querySelectorAll(".modal-close");
    const modals = document.querySelectorAll(".modal");

    // Handle ESC key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        modals.forEach(modal => {
          if (modal.classList.contains('modalActive')) {
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
      }
    });

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
  initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');

    if (!scrollToTopBtn) return;

    const toggleScrollButton = () => {
      const scrolled = window.scrollY;
      if (scrolled > 200) {
        scrollToTopBtn.classList.remove('opacity-0', 'invisible');
        scrollToTopBtn.classList.add('opacity-100', 'visible');
      } else {
        scrollToTopBtn.classList.add('opacity-0', 'invisible');
        scrollToTopBtn.classList.remove('opacity-100', 'visible');
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Show/hide button based on scroll position
    window.addEventListener('scroll', toggleScrollButton);

    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', scrollToTop);
  }

  initDepartmentToggle() {
    const headerCards = document.querySelectorAll('.group\\/department');
    let activeContent = null;
    let activeCard = null;

    headerCards.forEach(card => {
      const contentCard = card.parentElement.querySelector(':scope > div:last-child');

      // Initially hide all content cards
      if (contentCard) {
        contentCard.style.display = 'none';
        contentCard.style.opacity = '0';
        contentCard.style.transform = 'translateY(-10px)';
      }

      card.addEventListener('click', (e) => {
        e.preventDefault();

        // If there's an active content and it's not the current one, close it
        if (activeContent && activeContent !== contentCard) {
          // Close previous content
          this.closeContent(activeContent);
          // Remove active styles from previous card
          if (activeCard) {
            this.removeActiveStyles(activeCard);
          }
        }

        // Toggle current content
        if (contentCard) {
          if (contentCard === activeContent) {
            // Close current if it's already open
            this.closeContent(contentCard);
            this.removeActiveStyles(card);
            activeContent = null;
            activeCard = null;
          } else {
            // Open new content
            this.openContent(contentCard);
            this.addActiveStyles(card);
            activeContent = contentCard;
            activeCard = card;
          }
        }
      });
    });

    // Close active content when clicking outside
    document.addEventListener('click', (e) => {
      if (activeContent && !e.target.closest('.group\\/department') && !e.target.closest('.w-full.mt-4')) {
        this.closeContent(activeContent);
        if (activeCard) {
          this.removeActiveStyles(activeCard);
        }
        activeContent = null;
        activeCard = null;
      }
    });
  }

  openContent(element) {
    element.style.display = 'block';
    // Trigger reflow
    element.offsetHeight;
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }

  closeContent(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      element.style.display = 'none';
    }, 300); // Match transition duration
  }

  addActiveStyles(card) {
    const arrow = card.querySelector('svg.rotate-90');
    if (arrow) {
      arrow.style.transform = 'rotate(270deg)';
    }
    card.classList.add('border-navyBlue-600');
  }

  removeActiveStyles(card) {
    const arrow = card.querySelector('svg.rotate-90');
    if (arrow) {
      arrow.style.transform = 'rotate(90deg)';
    }
    card.classList.remove('border-navyBlue-600');
  }
  initTabsGlobal() {
    const quarters = document.querySelectorAll(".iuhBtnTab");
    const tabPanes = document.querySelectorAll(".iuhContentTab");
    quarters[0]?.classList.add("active");
    tabPanes[0]?.classList.add("active");

    quarters.forEach((quarter) => {
      quarter.addEventListener("click", () => {
        // Remove active class from all quarters and panes
        quarters.forEach((q) => q.classList.remove("active"));
        tabPanes.forEach((pane) => pane.classList.remove("active"));

        // Add active class to clicked quarter
        quarter.classList.add("active");

        // Show corresponding tab content
        const tabId = quarter.dataset.tab;
        const tabPane = document.getElementById(tabId);
        tabPane?.classList.add("active");
      });
    });
  }

  initMobileMenu() {
    const menuItems = document.querySelectorAll('.group\\/sub-menu');

    menuItems.forEach(item => {
      const link = item.querySelector('a');
      const submenu = item.querySelector('ul');
      const arrow = item.querySelector('svg');

      // Only apply click handler on mobile
      const handleClick = (e) => {
        if (window.innerWidth < 1101) { // menuMb breakpoint
          e.preventDefault();

          // Close other open menus
          menuItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.querySelector('ul')?.classList.remove('mobile-menu-active');
              otherItem.querySelector('svg')?.classList.remove('rotate-180');
            }
          });

          // Toggle current menu
          submenu.classList.toggle('mobile-menu-active');
          arrow.classList.toggle('rotate-180');
        }
      };

      link.addEventListener('click', handleClick);
    });
  }
}
