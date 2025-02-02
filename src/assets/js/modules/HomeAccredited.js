import BaseModule from "./BaseModule";
export default class HomeAccredited extends BaseModule {
  register() {
    this.initTabs();
  }

  initTabs() {
    const quarters = document.querySelectorAll(".quarter");
    const tabPanes = document.querySelectorAll(".tab-pane");


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
}
