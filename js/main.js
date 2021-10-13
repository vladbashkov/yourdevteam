const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');
menuBtn.addEventListener('click', () => {
	navMenu.classList.toggle('opened');
});


let menuOpen = false;
menuBtn.addEventListener('click', () => {
	if(!menuOpen) {
		menuBtn.classList.add('open');
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		menuOpen = false;
	}
});

$('.slider-container').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    speed: 1000,
    rows: 2,
    slidesPerRow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 999,
        settings: {
            autoplay: true,
            pauseOnHover: true,
            autoplaySpeed: 2000,
            speed: 1000,
            rows: 2,
            slidesPerRow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
            autoplay: true,
            pauseOnHover: true,
            autoplaySpeed: 2000,
            speed: 1000,
            rows: 2,
            slidesPerRow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });