( function($){

	$.fn.tinyscroll = function(options) {
		var URL = null;
		
		var settings = $.extend({}, {
			'margin': 0,
			'dalay': 800,
			'current_class': 'active'
		}, options);

		var scroll = $.proxy( function(position) {
			var margin = 0;
			
			if($(position).data('margin')) {
				margin = $(position).data('margin');
			}

			$('html, body').animate({scrollTop: $(position).offset().top + (settings.margin + margin)}, settings.delay);
			
			return false;
		}, this);

		$('a', this).click( function(){
			URL = $(this).attr('href');
			scroll(URL.substring(URL.indexOf('#')));
			$(this).parent().addClass(settings.active).parent().find('> *').not($(this).parent()).removeClass(settings.active);
		});

		var location = window.location.hash;

		if(location != ""){
			scroll(window.location.hash);
			$('a[href=' + window.location.hash + ']').parent().addClass(settings.active).parent().find('> *').not($('a[href=' + window.location.hash + ']').parent()).removeClass(settings.current);
		}
	};

})(jQuery);