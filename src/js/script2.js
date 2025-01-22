export function forblock3() {
  if(window.innerWidth <= 768){
    const swiper2 = new Swiper('.swiper2', {
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
      el: '.swiper-pagination2',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  
    scrollbar: {
        el: '.swiper-scrollbar2',
        clickable: true,
      },
      watchOverflow: true
    });
  } 
  
  if(window.innerWidth <= 1440){
    const hideButton = document.getElementById('hidehideButton');
    const toggleButton = document.getElementById('toggletoggleButton');
    const hiddenElements = document.querySelectorAll('.hidden2');
  
  
      toggleButton.addEventListener('click', () => {
        hiddenElements.forEach(element => {
          element.classList.toggle('hidden2');
        });
      });
    }
  
  if(window.innerWidth <= 7680){
    
    const hideButton = document.getElementById('hidehideButton');
    const toggleButton = document.getElementById('toggletoggleButton');
    const hiddenElements = document.querySelectorAll('.hiddenmdmd');
  
  
      toggleButton.addEventListener('click', () => {
        hiddenElements.forEach(element => {
          element.classList.toggle('hiddenmdmd');
        });
  
  
        if (toggleButton.textContent.includes('Показать все')) {
          toggleButton.innerHTML = '<img src="./img/expand1.png">Скрыть';
        } else {
          toggleButton.innerHTML = '<img src="./img/expand.png">Показать все';
        }
      });
    }
  }  