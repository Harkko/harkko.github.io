/* On DOM ready */

$(function() {
  $('.toggle-about').click(function() {
    // Calling a function in case you want to expand upon this.
    toggleAbout();
  });
});


/* Custom Functions */

function toggleAbout() {
if ($('.site-canvas').hasClass('hide-main')) {
  // Do things on Main page Close
  $('.site-canvas').removeClass('hide-main');
  $('.site-canvas-inner').removeClass('opacity-main');
  $('.main-toggle').removeClass('main-toggle-enable');
} else {
  // Do things on Main page reveal
  $('.site-canvas').addClass('hide-main');
  // reduce opacity of the main content
  $('.site-canvas-inner').addClass('opacity-main');
  // toggle between the side and main content
  $('.main-toggle').addClass('main-toggle-enable');
  }
}

// Hide on ESC-key
$(document).keyup(function(e) {
if (e.keyCode === 27) {
  if ($('.site-canvas').hasClass('hide-main')) {
    toggleAbout();
  }
} 
});