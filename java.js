$(document).ready(function(){
  $('.parallax').parallax();
  $('.carousel').carousel();
  $('.sidenav').sidenav();
  $('select').formSelect();
  autoplay();
});

function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 4500);
}