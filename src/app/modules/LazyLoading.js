/* eslint-disable no-unused-vars */
class LazyLoading {
  constructor () {
    this.targets = document.querySelectorAll('.lazy-img');
    this.events();
  }

  events () {
    const lazyLoad = target => {
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
    
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-lazy');
    
            img.setAttribute('src', src);
            img.classList.add('lazy-img__fade-in');
    
            observer.disconnect();
          }
        });
      });
    
      io.observe(target)
    };
    this.targets.forEach(lazyLoad);
  }
}

export default LazyLoading;