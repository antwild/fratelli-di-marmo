const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.topnav');
  const navs = document.querySelectorAll('.navs');
  const icon = document.querySelector('.icon');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-white');
        icon.style.color = "black";
        navs.forEach((nav) => {
          nav.classList.add('black')
        })
      } else {
        navbar.classList.remove('navbar-white');
        icon.style.color = "white";
        navs.forEach((nav) => {
          nav.classList.remove('black')
        })
      }
    });
  }
}

var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Dropdown for about nav link
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.navs')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function hamburger() {
  var x = document.getElementById("my-hamburger");
  if (x.className === "hamburger") {
    x.className += " responsive";
  } else {
    x.className = "hamburger";
  }
}

showSlides(slideIndex);
initUpdateNavbarOnScroll();
