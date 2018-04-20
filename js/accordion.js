
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// jQuery UI Accordion
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// http://jqueryui.com/accordion
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// USES:
// css/jquery-ui.min.css
// css/accordion.css
// js/jquery-1.11.1.min.js
// js/jquery-ui.min.js
// js/accordion.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(document).ready(function(){
	if (document.getElementById('accordion'))
	{
		$("#accordion").accordion({
			active:			 false,		// false = all accordions closed on page load, 3 = accordion 3 (4) open on page load
			collapsible:	 true,      // true = allow all to be collapsed, false = one must always be open
			event:			"click",    // "mouseover", "click"
			heightStyle:	"content",	// auto = All panels will be set to the height of the tallest panel
										// fill = Expand to the available height based on the accordion's parent height
										// content = Each panel will be only as tall as its content
			animate:		 400		// Length of the animation, 5000 = 5 seconds, 400 = 0.4 seconds
		});
	}
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
