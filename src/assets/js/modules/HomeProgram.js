import BaseModule from "./BaseModule";

export default class HomeProgram extends BaseModule {
  register() {
    this.onProgramHeight();
  }

  onProgramHeight() {
    const programSet = document.querySelector(".setProgramHeight");
    const programGet = document.querySelectorAll(".getProgramHeight");

    const updateHeight = () => {
      if (!programSet || !programGet.length) return;

      // Use requestAnimationFrame to prevent ResizeObserver loop
      requestAnimationFrame(() => {
        // Reset height first to get true heights
        programSet.style.minHeight = "auto";

        // Get max height from all getProgramHeight elements
        let maxHeight = 0;
        programGet.forEach((item) => {
          const itemHeight = item.offsetHeight;
          maxHeight = Math.max(maxHeight, itemHeight);
        });

        // Set the max height to setProgramHeight element
        if (maxHeight > 0) {
          programSet.style.minHeight = `${maxHeight}px`;
        }
      });
    };
    // Create ResizeObserver
    
    // eslint-disable-next-line no-unused-vars
    const resizeObserver = new ResizeObserver((entries ) => {
      // Use requestAnimationFrame to batch updates
      requestAnimationFrame(updateHeight);
    });

    // Observe each element
    programGet.forEach((element) => {
      resizeObserver.observe(element);
    });

    // Initial update
    updateHeight();

    // Cleanup function
    return () => {
      resizeObserver.disconnect();
    };
  }
}
