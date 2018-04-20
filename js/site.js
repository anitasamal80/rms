

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Dropdown Menu
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// USES:
// css/menu.css
// js/jquery-1.11.1.min.js
// js/site.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(document).ready(function () 
{
	if (document.getElementById("menu"))
	{
		// Hover over parent will cause child to drop-down.
		// The 500 value in slideDown(500) and slideUp(500) controls the speed of the animation.
		// 500 = 500 ms = 500 milliseconds = 0.5 seconds
		// 1000 = 1000 ms = 1000 milliseconds = 1 second
		// The slideDown(ms) and slideUp(ms) values can be different, e.g. slideDown(1000) and slideUp(500)
		$('nav ul#menu li').hover(
			function () {
				$('ul', this).stop(true,true).slideDown(500).css({'background': '#fff'});
			}, 
			function () {
				$('ul', this).stop(true,true).slideUp(500);
			}
		);
	}
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// jQuery Smooth Scroll
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(document).ready(function() {
	var $root = $('html, body');
	$('a').click(function() {
		$root.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 800);
		return false;
	});
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(document).ready(function() {
$('#menu').slicknav({});
});
