// import Swiper from 'swiper';

const swiperFull = (elem, autoplay = 5000) => {
  let swiper = new Swiper(elem, {
    direction: 'horizontal',
    loop: true,
    autoplay: autoplay,
    slidesPerView: 1,
    loopedSlides: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
}

const swiperItems = (elem, preview = 4, ratio = 1, autoplay = true) => {
  let swiper = new Swiper(elem, {
    direction: 'horizontal',
    loop: true,
    touchRatio: ratio,
    slidesPerView: preview,
    autoplay: autoplay,
    breakpoints: {
      1280: {
        slidesPerView: preview,
      },
      960: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

  // setTimeout(function(){
  //     swiper.update(true);
  //     // swiper.slideTo(0, 0)
  // }, 100);
}

export {
  swiperFull,
  swiperItems
}
