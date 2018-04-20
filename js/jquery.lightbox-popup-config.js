


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// jQuery Lightbox Image Gallery
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// URLs
// http://dimsemenov.com/plugins/magnific-popup
// http://dimsemenov.com/plugins/magnific-popup/documentation.html
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// USES:
// js/jquery-1.11.1.min.js
/*
<link rel="stylesheet" type="text/css" media="all" href="css/lightbox-popup.css" />
<link rel="stylesheet" type="text/css" media="all" href="css/lightbox-popup-config.css" />
<script type="text/javascript" src="js/jquery.lightbox-popup.js"></script>
<script type="text/javascript" src="js/jquery.lightbox-popup-config.js"></script>
*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(document).ready(function() {

		$('.popup-gallery').magnificPopup({
			delegate:	'a',
			type:		'image',
			tLoading:	'Loading image #%curr%...',
			// mainClass: 'mfp-img-mobile',

			// Delay in milliseconds before popup is removed
			removalDelay: 500,

			// Class that is added to popup wrapper and background
			// make it unique to apply your CSS animations just to this exact popup
			mainClass: 'mfp-fade',

			gallery: {
				enabled:			true,
				navigateByImgClick: true,
				preload:			[0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					// return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
					return item.el.attr('title');
				}
			},
			/*
			callbacks: {
				buildControls: function() {
					// re-appends controls inside the main container
					this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
				}
			}
			*/
		});

				$('.popup-gallery').each(function() {
					$(this).magnificPopup({
						delegate: 'a', // the selector for gallery item
						type: 'image',
						gallery: {
						enabled:true
						}
					});
				});

});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

