/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */


$(document).ready(function() {

	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none',
		helpers: {
			overlay: {
				locked: false
			}
		},
		padding: 0
	});

	$('.slick-slide').slick({
  		slidesToShow: 1,
  		infinite: true,
  		arrows: false,

	});

});


var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: 'images/gallery1.jpg',
        w: 600,
        h: 400
    },
    {
        src: 'images/gallery2.jpg',
        w: 1200,
        h: 900
    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();
