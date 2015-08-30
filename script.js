(function() {

	// Variables
	var 			documentElement = $(document),
			projectVisibleContent = $('.project-visible-content'),
			projectExtraToggleBtn = projectVisibleContent.find('.project-extra-toggle'),
												nav = $('nav'),
					 navigateElements = $('nav li a, .continue-btn'),
									 htmlBody = $('html, body'),
							lastScrollTop = 0;


	// Navigation Toggle
	documentElement.on('scroll', function() {
		
		var currentScrollTop = $(this).scrollTop();
		(currentScrollTop > lastScrollTop) ? nav.addClass('hidden') : nav.removeClass('hidden');
		lastScrollTop = currentScrollTop;
	
	});


	// Navigation Scroll On Page
	navigateElements.on('click', function(e) {
		
		var targetElements = $( $(this).data('scroll-target') ),
				targetOffsetTop = targetElements.offset().top;

				htmlBody.animate({
					scrollTop: targetOffsetTop
				}, 400);

		e.preventDefault();
	
	});


	// Project Extra Toggle
	projectExtraToggleBtn.on('click', function(e) {

		var self = $(this),
				closestExtraProject = self.closest('.project').find('.project-extra');

				closestExtraProject.slideToggle(400, function() 
				{
					(closestExtraProject.is(':visible')) ? self.text('Close') : self.text('Open');
				});

		e.preventDefault();

	});


})();