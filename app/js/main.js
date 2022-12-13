window.addEventListener('DOMContentLoaded', () => {
  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');

  //   // * ===== Nice Select
  //   // $('select').niceSelect();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.types-products__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.types-products__actions .swiper-pagination',
        clickable: true,
      },
      slidesPerView: 'auto',
      spaceBetween: 8,
      navigation: {
        nextEl: '.types-products__actions .swiper-button-next',
        prevEl: '.types-products__actions .swiper-button-prev',
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.advantages__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      breakpoints: {
        319: {
          spaceBetween: 30,
        },
        991: {
          spaceBetween: 50,
        },
      },
    });
  })();

  // * ==== showSearch
  (function showSearch() {
    const btn = document.querySelector('.btn-search');
    const formSearch = document.querySelector('.form-search');
    const btnClose = document.querySelector('.form-search__close');

    btn.addEventListener('click', (e) => {
      formSearch.classList.toggle('active');
    });
    btnClose.addEventListener('click', (e) => {
      formSearch.classList.remove('active');
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.slider-grid');
    sliderEl.forEach((el) => {
      if (el) {
        new Swiper(el, {
          slidesPerView: 'auto',
          spaceBetween: 33,
          grid: {
            rows: 2,
            fill: 'row',
          },
          navigation: {
            nextEl: '.products__slider .swiper-button-next',
            prevEl: '.products__slider .swiper-button-prev',
          },

          breakpoints: {
            319: {
              spaceBetween: 20,
            },
            991: {
              spaceBetween: 33,
            },
          },
        });
      }
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.slider-row');
    sliderEl.forEach((el) => {
      if (el) {
        new Swiper(el, {
          slidesPerView: 'auto',
          spaceBetween: 60,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            319: {
              spaceBetween: 30,
            },
            991: {
              spaceBetween: 60,
            },
          },
        });
      }
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.slider-bought-today');
    sliderEl.forEach((el) => {
      if (el) {
        new Swiper(el, {
          slidesPerView: 'auto',
          spaceBetween: 30,
          navigation: {
            nextEl: '.slider-bought-today .swiper-button-next',
            prevEl: '.slider-bought-today .swiper-button-prev',
          },
          breakpoints: {
            319: {
              spaceBetween: 20,
            },
            991: {
              spaceBetween: 33,
            },
          },
        });
      }
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.reviews__slider');
    sliderEl.forEach((el) => {
      if (el) {
        new Swiper(el, {
          slidesPerView: 'auto',
          spaceBetween: 8,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.reviews__slider .swiper-button-next',
            prevEl: '.reviews__slider .swiper-button-prev',
          },
        });
      }
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.hero__slider');
    sliderEl.forEach((el) => {
      if (el) {
        new Swiper(el, {
          slidesPerView: 'auto',
          effect: 'fade',
          autoplay: {
            delay: 3000,
          },
          navigation: {
            nextEl: '.hero__slider .swiper-button-next',
            prevEl: '.hero__slider .swiper-button-prev',
          },
        });
      }
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.team__slider');
    sliderEl.forEach((el) => {
      if (el) {
        new Swiper(el, {
          slidesPerView: 'auto',
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.team .swiper-button-next',
            prevEl: '.team .swiper-button-prev',
          },
        });
      }
    });
  })();

   // * ==== Single Product
   (function verticalSlider() {
    let mySwiperNav = new Swiper('#slider-nav', {
      slidesPerView: 'auto',
      spaceBetween: 12,
      direction: 'horizontal',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: document.querySelector(
          '.slider-thumbs__nav-control .swiper-button-next'
        ),
        prevEl: document.querySelector(
          '.slider-thumbs__nav-control .swiper-button-prev'
        ),
      },
    });

    let mySwiper = new Swiper('#slider-main', {
      spaceBetween: 10,
      thumbs: {
        swiper: mySwiperNav,
      },
      navigation: {
        nextEl: document.querySelector('#slider-main .swiper-button-next'),
        prevEl: document.querySelector('#slider-main .swiper-button-prev'),
      },
    });
  })();

  // * ===== Fixed Header
  (function fixedHeader() {
    function scrollHeader() {
      const nav = document.querySelector('header');
      if (this.scrollY >= 90) {
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
      }
    }

    window.addEventListener('scroll', scrollHeader);

    // ! Change
    function changeBg() {
      const header = document.querySelector('header');
      if (window.pageYOffset >= 90) {
        header.classList.add('scroll-header');
      }
    }

    changeBg();
  })();

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      if (el) {
        el.addEventListener('click', (e) => {
          const target = e.target.closest(accordion);
          const content = target.querySelector(accordionContent);
          target.classList.toggle('active');
          if (target.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
          } else {
            content.style.maxHeight = null;
          }
        });
      }
    });
  };
  toggleAccordion('.accordion-control', '.accordion-content', '.accordion');

  (function handlesSlider() {
    const parent = document.querySelector('.range-slider--price');

    if (parent) {
      const handlesSlider = parent.querySelector('#slider-price');
      const minStep = parent.querySelector('.range-slider__min');
      const maxStep = parent.querySelector('.range-slider__max');
      const inputs = [minStep, maxStep];

      noUiSlider.create(handlesSlider, {
        start: [1400, 1374688],
        connect: true,
        padding: [10, 10],
        range: {
          min: [0],
          max: [2000000],
        },
        format: wNumb({
          decimals: 0,
          thousand: ' ',
          suffix: ' ',
        }),
      });

      handlesSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = values[handle];
      });

      minStep.addEventListener('change', function () {
        handlesSlider.noUiSlider.set([this.value, null]);
      });

      maxStep.addEventListener('change', function () {
        handlesSlider.noUiSlider.set([null, this.value]);
      });
    }
  })();

  (function handlesSliderProfit() {
    const parent = document.querySelector('.range-slider--length');

    if (parent) {
      const handlesSlider = parent.querySelector('#slider-length');
      const minStep = parent.querySelector('.range-slider__min');
      const maxStep = parent.querySelector('.range-slider__max');
      const inputs = [minStep, maxStep];

      noUiSlider.create(handlesSlider, {
        start: [4, 26],
        connect: true,
        range: {
          min: [0],
          max: [30],
        },
        format: wNumb({
          decimals: 0,
          thousand: ' ',
          suffix: ' ',
        }),
      });

      handlesSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = values[handle];
      });

      minStep.addEventListener('change', function () {
        handlesSlider.noUiSlider.set([this.value, null]);
      });

      maxStep.addEventListener('change', function () {
        handlesSlider.noUiSlider.set([null, this.value]);
      });
    }
  })();

  (function handlesSlider() {
    const parent = document.querySelector('.range-slider--width');

    if (parent) {
      const handlesSlider = parent.querySelector('#slider-width');
      const minStep = parent.querySelector('.range-slider__min');
      const maxStep = parent.querySelector('.range-slider__max');
      const inputs = [minStep, maxStep];

      noUiSlider.create(handlesSlider, {
        start: [4, 10],
        connect: true,
        range: {
          min: [0],
          max: [20],
        },
        format: wNumb({
          decimals: 0,
          thousand: ' ',
          suffix: ' ',
        }),
      });

      handlesSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = values[handle];
      });

      minStep.addEventListener('change', function () {
        handlesSlider.noUiSlider.set([this.value, null]);
      });

      maxStep.addEventListener('change', function () {
        handlesSlider.noUiSlider.set([null, this.value]);
      });
    }
  })();

  (function handlesSlider() {
    const parent = document.querySelector('.range-slider--height');

    if (parent) {
      const handlesSlider = parent.querySelector('#slider-height');
      const minStep = parent.querySelector('.range-slider__min');
      const maxStep = parent.querySelector('.range-slider__max');
      const inputs = [minStep, maxStep];

      noUiSlider.create(handlesSlider, {
        start: [4, 12],
        connect: true,
        range: {
          min: [0],
          max: [20],
        },
        format: wNumb({
          decimals: 0,
          thousand: ' ',
          suffix: ' ',
        }),
      });

      handlesSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = values[handle];
      });

      minStep.addEventListener('change', function () {
        handlesSlider.noUiSlider.set([this.value, null]);
      });

      maxStep.addEventListener('change', function () {
        handlesSlider.noUiSlider.set([null, this.value]);
      });
    }
  })();

  // * ===== Show Filters
  (function showFilters() {
    const menuBtn = document.querySelector('.categories__filter');
    const menu = document.querySelector('.grid-relative__left');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    if (menuBtn) {
      menuBtn.addEventListener('click', (e) => {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
      });

      overlay.addEventListener('click', (e) => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
      });
    }
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });

    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.btn-callback', '.popup--callback', '.popup__close');
  })();

  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    header.forEach((el) => {
      if (el) {
        hideTabContent();
        showTabContent();
        function hideTabContent() {
          content.forEach((item) => {
            item.classList.remove('active');
          });
          tab.forEach((item) => {
            item.classList.remove(activeClass);
          });
        }
        function showTabContent(i = 0) {
          content[i].classList.add('active');
          tab[i].classList.add(activeClass);
        }
        header.forEach((item) => {
          if (item) {
            item.addEventListener('click', (e) => {
              const target = e.target;
              if (target.classList.contains(tabSelector.replace(/\./, ''))) {
                tab.forEach((item, i) => {
                  if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                  }
                });
              }
            });
          }
        });
      }
    });
  }

  someTabs('.tabs-new', '.tabs-new__btn', '.tabs-new__content', 'active');
  someTabs(
    '.product-tab',
    '.product-tab__btn',
    '.product-tab__content',
    'active'
  );
  someTabs(
    '.tabs-popular',
    '.tabs-popular__btn',
    '.tabs-popular__content',
    'active'
  );
});
