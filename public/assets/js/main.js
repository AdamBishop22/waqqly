// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA4Xim6nqDITOArbOS63mdK8GDB6967rs",
  authDomain: "waqqly-9b88d.firebaseapp.com",
  databaseURL: "https://waqqly-9b88d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "waqqly-9b88d",
  storageBucket: "waqqly-9b88d.appspot.com",
  messagingSenderId: "254373012174",
  appId: "1:254373012174:web:c957179694e21417d3669f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// gets walker Data from input fields
const walkerForm = document.querySelector('.walker-form');
const walkerUsername = document.querySelector('.walker-username');
const walkerName = document.querySelector('.walker-name');
const walkerEmail = document.querySelector('.walker-email');
const walkerTown = document.querySelector('.walker-town');
const submitWalker = document.querySelector('.submit-walker');

// Fuction for connecting and writing information to the database
function writeWalkerData(walkerID, name, email, town) {
  const db = getDatabase(app);

  // Formats data to Firebase database JSON format 
  const reference = ref(db, 'Walkers/' + walkerID)
  set(reference, {
    walkername: name,
    email: email,
    town: town,
  }).then(() => {
    walkerForm.reset();
  });
}
// Validate and add walker form data
  submitWalker.addEventListener('click', (e) => { 
    e.preventDefault();
    if (walkerUsername.value != "" && walkerName.value != "" && walkerEmail.value != "" && walkerTown.value != "") {
      writeWalkerData(walkerUsername.value,
        walkerName.value,
        walkerEmail.value,
        walkerTown.value
    )
  } else {
    alert("Please fill in all fields")
  }
});

// gets dog Data from form fields
const dogForm = document.querySelector('.dog-form');
const dogUsername = document.querySelector('.dog-username');
const dogName = document.querySelector('.dog-name');
const dogBreed = document.querySelector('.dog-breed');
const dogTown = document.querySelector('.dog-town');
const submitDog = document.querySelector('.submit-dog');

// Fuction for connecting and writing information to the database
function writeDogData(dogID, dogname, dogbreed, dogtown) {
  const db = getDatabase(app);
  const reference = ref(db, 'Dogs/' + dogID)

  // Formats data to Firebase database JSON format 
  set(reference, {
    DogName: dogname,
    DogBreed: dogbreed,
    DogTown: dogtown,
  }).then(() => {
    dogForm.reset();
  });
}
// Validate and add dog form data
  submitDog.addEventListener('click', (e) => { 
    e.preventDefault();
    if (dogUsername.value != "" && dogName.value != "" && dogBreed.value != "" && dogTown.value != "") {
      writeDogData(dogUsername.value,
        dogName.value,
        dogBreed.value,
        dogTown.value
    )
  } else {
    alert("Please fill in all fields")
  }
});

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  /**
   * Clients Slider
   */
  new Swiper('.recent-photos-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Gallery isotope and filter
   */
  window.addEventListener('load', () => {
    let galelryContainer = select('.gallery-container');
    if (galelryContainer) {
      let galleryIsotope = new Isotope(galelryContainer, {
        itemSelector: '.gallery-item',
      });

      let galleryFilters = select('#gallery-flters li', true);

      on('click', '#gallery-flters li', function(e) {
        e.preventDefault();
        galleryFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        galleryIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

})()