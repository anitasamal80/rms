
// TABS
// http://os.alfajango.com/easytabs/

// ANIMATION
// https://jqueryui.com/easing/

$(document).ready( function() {
	$('.tab-container').easytabs({
		animate:                 true,				// true=fade, false=immediate
		collapsible:             false,				// Allow tab to collapse completely.
		collapsedByDefault:      false,
		defaultTab:             'li:first-child',
		tabActiveClass:         'active',
		transitionIn:           'slideDown',		// fadeIn, slideDown
		transitionInEasing:		'swing',			// swing, linear
		transitionOut:          'slideUp',			// fadeOut, slideUp
		transitionOutEasing:    'swing',			// swing, linear
	});
});
