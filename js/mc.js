/*============================
=          MailChimp         =
============================*/

$(document).ready(function() {

  function initValidation() {
		var win = $(window);
		win.fnames = new Array();
		win.ftypes = new Array();

		win.fnames[0]='EMAIL';
		win.ftypes[0]='email';
		win.fnames[3]='MMERGE3';
		win.ftypes[3]='radio';
	}

  // Init form validation
  initValidation();

  jQuery.noConflict(true);

});

/*---  End of MailChimp  ----*/
