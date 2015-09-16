/*============================
=            Core            =
============================*/

$(document).ready(function() {

	// Smooth Hash Link Scroll
	$('.smooth-scroll').click(function() {
	if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {

	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
	    $('html,body').animate({
	      scrollTop: target.offset().top
	    }, 1000);
	    return false;
	  }
	}
	});

	$('#subscribe').click(function() {
		trackButtonClick('Subscribe');
		$('#mc-embedded-subscribe-form').submit();
		$('#subscribe-modal').modal('hide');
	});

	// full-height
	function heroHeight() {
		var $this = $('#hero'),
		win = $(window),
		dataHeight = $this.data('height');

		if ($this.hasClass('full-height')) {
			$this.css({
				'height': (win.height())
			});
		} else {
			$this.css({
				'height': dataHeight + 'em'
			});
		}
	};

	// Start
	heroHeight();
	$(window).resize(heroHeight);

});

/*-----  End of Core  ------*/
