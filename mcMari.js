window.addEventListener('scroll', function() {
  const parallax = document.querySelector('.parallax-wrapper');
  let offset = window.pageYOffset - 80;
  parallax.style.backgroundPositionY = offset * 0.3 + "px";
});