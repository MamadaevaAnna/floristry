// Меню

$('.menu-show').on('click', function() {
  $('.menu-dropdown').css('display', 'block');
  $('.main-index').css('display', 'none');
  $('.main-page').css('display', 'none');
  $('.footer-index').css('display', 'none');
  $('.promo').fadeOut();
});

$('.menu-close').on('click', function() {
  $('.menu-dropdown').fadeOut();
  $('.main-index').css('display', 'block');
  $('.main-page').css('display', 'flex');
  $('.footer-index').css('display', 'block'); 
  $('.promo').css('display', 'block');
});

// Модальное окно "Перезвоните мне"

$( document ).ready(function() {
  $('.trigger').click(function() {
    $('.modal-wrapper').toggleClass('open');
    $('.main').toggleClass('blur');
    return false;
  });
});

// Скролл якоря

$('.show-works').click(function(e) {
	e.preventDefault();

	var id  = $(this).attr('href'),
  top = $(id).position().top,
  animateContainer = $('body, html');
  animateContainer.animate({'scrollTop': top}, 800, 'swing');
});

// Слайдер каталога на главной странице

var swiper = new Swiper(".tabletCatalogSwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination-tablet",
    clickable: true,
  },
});

var swiper = new Swiper(".mobileCatalogSwiper", {
  pagination: {
    el: ".swiper-pagination-mobile",
    clickable: true,
  },
});

// Слайдер на странице каталога

var swiper = new Swiper(".catalogSlider", {
  slidesPerView: 4,
  spaceBetween: 20,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});