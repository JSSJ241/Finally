export function forblock4() {
  if(window.innerWidth <= 768){
    const swiper3 = new Swiper('.swiper3', {
      direction: 'horizontal',
      loop: true,
      initialSlide: 0,
      slidesPerGroup: 1,
      allowTouchMove: true,
      simulateTouch: true,
      slidesPerView: 1.5,
      spaceBetween: 15,
  
    mousewheel: {
      releaseOnEdges: true,
    },   
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination3',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
  
    scrollbar: {
        el: '.swiper-scrollbar3',
        clickable: true,
      },
      watchOverflow: true
    });
  } 
}