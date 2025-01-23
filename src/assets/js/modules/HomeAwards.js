import BaseModule from "./BaseModule";

export default class HomeAwards extends BaseModule {
  register() {
    this.initCountAnimation();
  }

  initCountAnimation() {
    const awardsSection = document.querySelector('.iuh-awards');
    const countElements = document.querySelectorAll('.awardsCounting-content-title');
    let animated = false;

    // Animate count function
    const animateCount = (element, target) => {
      let current = 0;
      const duration = 2000; // 2 seconds
      const start = performance.now();
      
      const updateCount = (currentTime) => {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        current = Math.floor(easeOutQuart * target);
        
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };
      
      requestAnimationFrame(updateCount);
    };

    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true; // Ensure animation only runs once
          
          // Animate each counter
          countElements.forEach(element => {
            const targetNum = parseInt(element.textContent.replace(/,/g, ''), 10);
            element.textContent = '0';
            animateCount(element, targetNum);
          });
        }
      });
    }, {
      threshold: 0.3 // Trigger when 30% of element is visible
    });

    // Start observing awards section
    if (awardsSection) {
      observer.observe(awardsSection);
    }
  }
}