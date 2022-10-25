window.addEventListener('DOMContentLoaded', () => {
  //   // * ===== Mask input
  //   $('input[type="tel"]').mask('+7 (999) 999-99-99');

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

  //   // * ===== Show Menu
  //   (function showMenu() {
  //     const menuBtn = document.querySelector('.header__toggle');
  //     const menu = document.querySelector('.mobile-menu');
  //     const menuCloseBtn = document.querySelector('.mobile-menu__close');
  //     const body = document.querySelector('body');
  //     const overlay = document.querySelector('.overlay');

  //     menuBtn.addEventListener('click', (e) => {
  //       menu.classList.toggle('active');
  //       overlay.classList.toggle('active');
  //       body.classList.toggle('no-scroll');
  //     });

  //     overlay.addEventListener('click', (e) => {
  //       menu.classList.remove('active');
  //       overlay.classList.remove('active');
  //       body.classList.remove('no-scroll');
  //     });

  //     menuCloseBtn.addEventListener('click', (e) => {
  //       menu.classList.remove('active');
  //       overlay.classList.remove('active');
  //       body.classList.remove('no-scroll');
  //     });
  //   })();

  //   // * ===== Modal
  //   (function modals() {
  //     function bindModal(openBtn, modal, close) {
  //       const openBtnEl = document.querySelectorAll(openBtn);
  //       const modalEl = document.querySelector(modal);
  //       const closeEl = document.querySelectorAll(close);
  //       const body = document.querySelector('body');
  //       if (modalEl) {
  //         openBtnEl.forEach((el) => {
  //           el.addEventListener('click', (e) => {
  //             if (e.target) {
  //               e.preventDefault();
  //             }
  //             modalEl.classList.add('active');
  //             body.classList.add('no-scroll');
  //           });
  //         });
  //         closeEl.forEach((btn) => {
  //           btn.addEventListener('click', (e) => {
  //             modalEl.classList.remove('active');
  //             body.classList.remove('no-scroll');
  //           });
  //         });
  //         modalEl.addEventListener('click', (e) => {
  //           if (e.target === modalEl) {
  //             modalEl.classList.remove('active');
  //             body.classList.remove('no-scroll');
  //           }
  //         });
  //       }
  //     }
  //     bindModal('.online-booking-btn', '.popup--online-booking', '.popup__close');
  //   })();

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
  someTabs(
    '.tabs-popular',
    '.tabs-popular__btn',
    '.tabs-popular__content',
    'active'
  );
  someTabs('.tabs-new', '.tabs-new__btn', '.tabs-new__content', 'active');
});
