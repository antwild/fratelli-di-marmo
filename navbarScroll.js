const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.topnav');
  const navs = document.querySelectorAll('.navs')
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-white');
        navs.forEach((nav) => {
          nav.classList.add('black')
        })
      } else {
        navbar.classList.remove('navbar-white');
        navs.forEach((nav) => {
          nav.classList.remove('black')
        })
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
