import BaseModule from "./BaseModule";
export default class Header extends BaseModule {
  register() {
    // Get main elements with null checks
    this.header = document.querySelector(".header-nav");
    if (!this.header) return;

    this.hamburger = this.header.querySelector(".hamburger-menu");
    this.closeBtn = this.header.querySelector(".close-menu");
    this.mainNav = this.header.querySelector(".main-nav");

    // Only proceed if required elements exist
    if (!this.mainNav) return;

    // Create overlay
    this.overlay = document.createElement("div");
    this.overlay.className =
      "fixed inset-0 bg-black/50 opacity-0 invisible transition-all duration-300 z-40";
    this.header.appendChild(this.overlay);

    // Initialize features with null checks
    this.initMobileMenu();
    this.initSubMenus();
    this.handleResize();
    this.initMobileSubmenus();
    this.languageSwitcher();
    this.initLanguageSwitcher();
  }

  languageSwitcher() {
    const languageSwitcher = document.querySelector(".language-switcher");
    const languageText = languageSwitcher.querySelector(
      ".language-switcher__text"
    );
    const languageImg = languageSwitcher.querySelector(
      ".language-switcher_img"
    );
    const isPageLoad = languageSwitcher.dataset.openLink;
    if (!languageSwitcher || !languageText || !languageImg) return;

    const updateLanguage = () => {
      const isEnglish = languageSwitcher.dataset.openLink === "en/";
      if (isEnglish) languageSwitcher.classList.add("active");
      languageText.textContent = !isEnglish ? "ENG" : "VNI";
      languageImg.style.background = !isEnglish
        ? 'url("assets/images/eng.webp") no-repeat center center/cover'
        : 'url("assets/images/vietnam.png") no-repeat center center/cover';
    };

    updateLanguage(); // Cập nhật UI ban đầu

    languageSwitcher.addEventListener("click", (e) => {
      e.preventDefault();
      languageSwitcher.dataset.openLink =
        languageSwitcher.dataset.openLink === "en/" ? "vi/" : "en/";
      languageSwitcher.classList.toggle("active");
      updateLanguage();
      setTimeout(() => {
        window.location.assign(isPageLoad);
      }, 400);
    });
  }
  initMobileMenu() {
    if (!this.hamburger || !this.closeBtn || !this.overlay) return;

    // Open menu
    this.hamburger.addEventListener("click", () => {
      this.openMenu();
    });

    // Close menu with button
    this.closeBtn.addEventListener("click", () => {
      this.closeMenu();
    });

    // Close menu when clicking overlay
    this.overlay.addEventListener("click", () => {
      this.closeMenu();
    });

    // Close menu on ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeMenu();
      }
    });
  }

  openMenu() {
    if (!this.header || !this.mainNav) return;

    this.header.classList.add("menu-active");
    this.mainNav.classList.remove("right-[-100%]");
    this.mainNav.classList.add("right-0");
    this.overlay.classList.remove("opacity-0", "invisible");
    this.overlay.classList.add("opacity-100", "visible");
    document.body.style.overflow = "hidden";
  }

  closeMenu() {
    if (!this.header || !this.mainNav) return;

    this.header.classList.remove("menu-active");
    this.mainNav.classList.remove("right-0");
    this.mainNav.classList.add("right-[-100%]");
    this.overlay.classList.remove("opacity-100", "visible");
    this.overlay.classList.add("opacity-0", "invisible");
    document.body.style.overflow = "";
  }

  initSubMenus() {
    if (!this.mainNav) return;

    // Handle submenu toggles on mobile
    if (window.innerWidth <= 1200) {
      const subMenuBtns = this.header.querySelectorAll(".has-submenu > a");
      subMenuBtns?.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          const submenu = btn.nextElementSibling;
          if (submenu) {
            submenu.classList.toggle("show");
          }
        });
      });
    }

    // Handle submenu hover on desktop
    const subMenuBtns = this.header.querySelectorAll(".group\\/sub-menu > a");
    const subMenuBtns1 = this.header.querySelectorAll(".group\\/sub1-menu > a");

    subMenuBtns?.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        const submenu = btn.nextElementSibling;
        if (submenu) {
          this.adjustSubMenuPosition(submenu, "primary");
        }
      });
    });

    subMenuBtns1?.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        const submenu = btn.nextElementSibling;
        if (submenu) {
          this.adjustSubMenuPosition(submenu, "secondary");
        }
      });
    });
  }

  adjustSubMenuPosition(submenu, type) {
    if (window.innerWidth > 1100) {
      const rect = submenu.getBoundingClientRect();
      const isOffscreen =
        rect.right > window.innerWidth || rect.bottom > window.innerHeight;
      if (isOffscreen) {
        submenu.classList.add("is-offscreen");
        submenu.style.left = "auto";
        if (type === "primary") {
          submenu.style.right = "0";
        } else if (type === "secondary") {
          submenu.style.right = "100%";
        }
      }
    }
  }

  handleResize() {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1100) {
        this.closeMenu();
      }
    });
  }
  initMobileSubmenus() {
    const subMenuTriggers = this.mainNav.querySelectorAll(
      ".group\\/sub-menu > a, .group\\/sub1-menu > a"
    );
    subMenuTriggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        // Only handle special behavior on mobile
        if (window.innerWidth <= 1100) {
          const submenu = trigger.nextElementSibling;
          const hasSubmenu = submenu?.tagName === "UL";

          // If no submenu exists, let the link work normally
          if (!hasSubmenu) {
            return true;
          }

          // Prevent default only if there's a submenu
          e.preventDefault();

          const arrow = trigger.querySelector("svg");

          // Close other submenus at the same level
          const parent = trigger.closest("ul");
          parent.querySelectorAll("ul").forEach((menu) => {
            if (menu !== submenu) {
              menu.classList.remove("submenu-active");
              const otherArrow =
                menu.previousElementSibling?.querySelector("svg");
              otherArrow?.classList.remove("rotate-active");
            }
          });

          // Toggle current submenu
          submenu.classList.toggle("submenu-active");
          arrow?.classList.toggle("rotate-active");

          // Optional: Close child submenus when closing parent
          if (!submenu.classList.contains("submenu-active")) {
            submenu.querySelectorAll(".submenu-active").forEach((childMenu) => {
              childMenu.classList.remove("submenu-active");
              const childArrow =
                childMenu.previousElementSibling?.querySelector("svg");
              childArrow?.classList.remove("rotate-active");
            });
          }
        }
      });
    });
  }

  initLanguageSwitcher() {
    if (!this.mainNav) return;

    const langButtons = this.mainNav.querySelectorAll(".lang-btn");
    if (!langButtons.length) return;

    langButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        langButtons.forEach((button) => {
          button.setAttribute("data-active", "false");
        });
        btn.setAttribute("data-active", "true");

        const lang = btn.getAttribute("data-lang");
        console.log(lang);
      });
    });
  }
}
