document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuItems = document.querySelector('.menu-items');

  if (menuToggle && menuItems) {
    menuToggle.addEventListener('click', () => {
      menuItems.classList.toggle('active');
    });

    // Close menu when a menu item is clicked
    menuItems.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
        menuItems.classList.remove('active');
      }
    });
  }

  // Expose the fixed header height so anchor targets are not hidden under it
  // (the nav wraps to several lines at medium widths)
  const header = document.querySelector('header');
  if (header) {
    const setHeaderHeight = () => {
      document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
    };
    setHeaderHeight();
    new ResizeObserver(setHeaderHeight).observe(header);

    // Re-align if the page was opened directly with a #hash
    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) target.scrollIntoView();
    }
  }
});
