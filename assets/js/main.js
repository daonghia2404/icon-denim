window.onload = () => {
  owlCarousel.init()
  productsPreviewColors.init()
  // countUpConfig.init()
  // lazyLoading.init()
  // header.init()
}

const loading = {
  init: function () {
    this.configLoading()
  },
  configLoading: function () {
    
  }
}

const lazyLoading = {
  init: function () {
    this.config()
  },
  config: function () {
    const lazyLoadInstance = new LazyLoad({});
  }
}

const owlCarousel = {
  init: function () {
    this.setupTopBarCarousel()
    this.setupHomeBannerCarousel()
    this.setupGalleryCarousel()
    this.setupNewsCarousel()
    this.setupProductsCarousel()
  },
  setupTopBarCarousel: function () {
    const $owl = $("#top-bar-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1,
          slideBy: 1
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      lazyLoad: true,
      dots: false,
      nav: false,
      margin: 0,
    });
  },
  setupHomeBannerCarousel: function () {
    const $owl = $("#home-banner-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1,
          slideBy: 1
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      smartSpeed: 800,
      lazyLoad: true,
      dots: false,
      nav: true,
      navText: ['<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18" /></svg>', '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="9 6 15 12 9 18" /></svg>'],
      margin: 0,
    });
  },
  setupGalleryCarousel: function () {
    const $owl = $("#gallery-carousel ").owlCarousel({
      responsive: {
        0: {
          items: 2,
          slideBy: 1
        },
        768: {
          items: 4,
          slideBy: 1
        },
        991: {
          items: 6,
          slideBy: 1
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      lazyLoad: true,
      dots: false,
      nav: true,
      navText: ['<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18" /></svg>', '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="9 6 15 12 9 18" /></svg>'],
      margin: 10,
    });
  },
  setupNewsCarousel: function () {
    const $owl = $("#news-carousel ").owlCarousel({
      responsive: {
        0: {
          items: 1,
          slideBy: 1
        },
        768: {
          items: 2,
          slideBy: 1
        },
        991: {
          items: 3,
          slideBy: 1
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      lazyLoad: true,
      dots: false,
      nav: true,
      navText: ['<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18" /></svg>', '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="9 6 15 12 9 18" /></svg>'],
      margin: 10,
    });
  },
  setupProductsCarousel: function () {
    const productCarousel = document.querySelectorAll('.product-carousel')

    productCarousel.forEach((item) => {
      const $owl = $(item).owlCarousel({
        responsive: {
          0: {
            items: 1,
            slideBy: 1
          },
          575: {
            items: 2,
            slideBy: 1
          },
          768: {
            items: 3,
            slideBy: 1
          },
          991: {
            items: 4,
            slideBy: 1
          },
        },
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 300,
        lazyLoad: true,
        dots: false,
        nav: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18" /></svg>', '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="9 6 15 12 9 18" /></svg>'],
        margin: 10,
      });
    })
  },
  // setupTeamCarousel: function () {
  //   const $owl = $("#top-bar-carousel").owlCarousel({
  //     responsive: {
  //       0: {
  //         items: 1,
  //         slideBy: 1
  //       },
  //     },
  //     loop: true,
  //     autoplay: true,
  //     autoplayTimeout: 4000,
  //     autoplayHoverPause: true,
  //     smartSpeed: 300,
  //     lazyLoad: true,
  //     dots: false,
  //     nav: false,
  //     navText: ['<img src="./assets/icons/icon-arrow-left-white.svg" alt="" />', '<img src="./assets/icons/icon-arrow-right-white.svg" alt="" />'],
  //     margin: 20,
  //   });
  // },
}

const productsPreviewColors = {
  init: function() {
    this.config()
  },
  config: function() {
    const products = document.querySelectorAll('.ProductBox')

    products.forEach((item) => {
      const mainImage = item.querySelector('.ProductBox-image-main')
      const listImage = item.querySelectorAll('.ProductBox-colors-item')

      listImage.forEach((image) => image.addEventListener('mousemove', () => {
        listImage.forEach((i) => i.classList.remove('active'))
        image.classList.add('active')
        const source = image.querySelector('img')
        mainImage.src = source.src
      }))

      listImage?.[0]?.classList?.add('active')
    })
  },
}

const header = {
  init: function () {
    // this.scrollHeaderEffect()
  },
  scrollHeaderEffect: function () {
    const header = document.querySelector('.header-layout')
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) header.classList.add('active')
      else header.classList.remove('active')
    })
  },
}

const countUpConfig = {
  init: function () {
    // this.configCountUpWelcomeSection()
  },
  configCountUpWelcomeSection: function () {
    const dataCountWelcomeSection = [{
        targetHTML: '#countUp-long-term',
        numberCountUp: 92,
        suffix: '%',
      },
      {
        targetHTML: '#countUp-offices-internationally',
        numberCountUp: 60
      },
      {
        targetHTML: '#countUp-years-in-viet-nam ',
        numberCountUp: 7
      },
    ]
    this.setupScrollEvent('.section-welcome .about-wrapper', dataCountWelcomeSection)
  },
  setupScrollEvent: function (targetHTML, elementsCountUp) {
    const target = document.querySelector(targetHTML)
    if (target) {
      const options = {
        threshold: 1,
        rootMargin: "0px",
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          } else {
            elementsCountUp.forEach((item) => this.setupCountUp(item.targetHTML, item.numberCountUp, item.suffix))
            observer.unobserve(entry.target);
          }
        })
      }, options);
      observer.observe(target);
    }
  },
  setupCountUp(targetId, number, suffix = '') {
    const options = {
      startVal: 0,
      duration: 5,
      suffix,
    }
    const target = document.querySelector(targetId)
    const countUpObj = new CountUp(target, number, options)
    countUpObj.start()
  }
}
