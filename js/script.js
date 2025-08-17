$(document).ready(function () {
  
  // ===================== Otwieranie/Zamykanie menu mobilnego =====================
  $('.menu-toggle').on('click', function () {
    $('.nav-links').toggleClass('active');
  });

  // ===================== Efekt powiększenia obrazka przy najechaniu =====================
  $('.features-image img').hover(
    function () {
      $(this).css('transform', 'scale(1.1)');
    },
    function () {
      $(this).css('transform', 'scale(1)');
    }
  );

  // ===================== Walidacja formularza kontaktowego =====================
  $('#contact-form').on('submit', function (e) {
    e.preventDefault();

    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const message = $('#message').val().trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      return alert('Wszystkie pola są wymagane!');
    }

    if (!emailPattern.test(email)) {
      return alert('Wprowadź poprawny adres e-mail!');
    }

    alert('Dziękujemy za wiadomość!');
    this.reset();
  });
});

// ===================== Slider obrazów =====================
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.slider-track');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const slides = document.querySelectorAll('.slider-track img');

  let currentIndex = 0;

  const updateSlider = () => {
    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  };

  const showNextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  };

  const showPrevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  };

  if (track && prevBtn && nextBtn && slides.length > 0) {
    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide);
    window.addEventListener('load', updateSlider);
  }
});
