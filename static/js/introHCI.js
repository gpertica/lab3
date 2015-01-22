'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Maybe you are connected, maybe you are not!");

	$("#testjs").text("Please wait...");
	$(".jumbotron p").toggleClass("active");
	});

	$("a.thumbnail").click(projectClick);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
      var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
      $(description).fadeOut();
    } else { 
       $(description).fadeIn();
    }
}