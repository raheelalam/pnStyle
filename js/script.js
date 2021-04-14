document.getElementById('mobile-menu').onclick = function () {
  var body = document.body;
  this.classList.toggle('active');
  body.classList.toggle('fixed');
};
document.getElementById('mobile-close').onclick = function () {
  var body = document.body;
  document.getElementById('mobile-menu').classList.toggle('active');
  body.classList.toggle('fixed');
}