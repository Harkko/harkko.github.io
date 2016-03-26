/* On DOM ready */

$(function() {
  $('.toggle-about').click(function() {
    // Calling a function in case you want to expand upon this.
    toggleAbout();
  });
});


/* Custom Functions */

function toggleAbout() {
if ($('.site-wrapper').hasClass('hide-main')) {
  // Do things on Main page Close
  $('.site-wrapper').removeClass('hide-main');
} else {
  // Do things on Main page reveal
  $('.site-wrapper').addClass('hide-main');
}

//$('.site-wrapper').toggleClass('hide-main');
}

/* Hide The About-section with the ESC-key */
$(document).keyup(function(e) {
if (e.keyCode === 27) {
  if ($('.site-wrapper').hasClass('hide-main')) {
    // Assuming you used the function I made from the demo
    toggleAbout();
  }
} 
});