/* On DOM ready */

$(function() {
  $('.toggle-about').click(function(event) {
    event.stopPropagation();
    // Calling a function in case you want to expand upon this.
    toggleAbout();
  });

  // Eelin lisäämä juttu. Dokumentoi tähän, mitä tekee?
  $('.main-toggle').click(function() {
    if ($(document.body).hasClass('hide-main')) {
      toggleAbout();
    }
  });

  $('#about-back-btn').click(function() {
    if ($(document.body).hasClass('hide-main')) {
      toggleAbout();
    }
  });
});

/* Custom Functions */

function toggleAbout() {
if ($(document.body).hasClass('hide-main')) {
  // Do things on Main page Close
  $(document.body).removeClass('hide-main');
  $('.main-content').removeClass('opacity-main');
  $('.main-toggle').removeClass('main-toggle-enable');
} else {
  // Do things on Main page reveal
  $(document.body).addClass('hide-main');
  // reduce opacity of the main content
  $('.main-content').addClass('opacity-main');
  // toggle between the side and main content
  $('.main-toggle').addClass('main-toggle-enable');
  }
}

// Hide on ESC-key
$(document).keyup(function(e) {
if (e.keyCode === 27) {
  if ($(document.body).hasClass('hide-main')) {
    toggleAbout();
  }
} 
});