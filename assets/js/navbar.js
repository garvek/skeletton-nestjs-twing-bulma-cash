import $ from 'cash-dom';

$(document).ready(function () {
  $('.navbar-burger').on('click', function () {
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });
});
