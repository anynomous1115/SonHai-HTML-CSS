jQuery(document).ready(function($){

	var pathname = window.location.hostname,
	getURL = pathname.toLowerCase();
	
	var path = "css/color/";
	var path2 = "images/bg/";
	
	screenWidth = $(window).width();

	$('body').append('<div id="theme-switcher">'+
						'<div id="toggle-switcher"><i class="fa fa-cog"></i></div>'+
						'<div class="heading-switcher"><h4>Switcher</h4></div>' +
						'<div class="container-switcher">' +
							'<ul class="color-theme small-block-grid-4">' +
								'<li><span id="default"></span></li>' +
								'<li><span id="blue"></span></li>' +
								'<li><span id="green"></span></li>' +
								'<li><span id="green-dark"></span></li>' +
								'<li><span id="yellow"></span></li>' +
								//'<li><span id="red"></span></li>' +
								'<li><span id="brown"></span></li>' +
								'<li><span id="purple"></span></li>' +
								'<li><span id="gray"></span></li>' +
							'</ul>' +
							'<hr>' +
							// '<h5>Frame</h5>'+
							'<ul class="pattern-theme small-block-grid-4">' +
								'<li><span id="pattern1"></span></li>' +
								'<li><span id="pattern2"></span></li>' +
								'<li><span id="pattern3"></span></li>' +
								'<li><span id="pattern4"></span></li>' +
								'<li><span id="pattern5"></span></li>' +
								'<li><span id="pattern6"></span></li>' +
								'<li><span id="pattern7"></span></li>' +
								'<li><span id="pattern8"></span></li>' +
								'<li><span id="pattern9"></span></li>' +
								'<li><span id="pattern10"></span></li>' +
								'<li><span id="pattern11"></span></li>' +
								'<li><span id="pattern12"></span></li>' +
								'<li><span id="pattern13"></span></li>' +
								'<li><span id="pattern14"></span></li>' +
								'<li><span id="pattern15"></span></li>' +
								'<li><span id="pattern16"></span></li>' +
								'<li><span id="pattern17"></span></li>' +
							'</ul>' +
						'</div>' +
						'<div class="footer-switcher"><a id="reset" class="reset">Reset</a></div>' +
					'</div>');

	if (Modernizr.touch) {
		$('#theme-switcher').find(".color-theme + hr").hide();
		//$('#theme-switcher').find("#frame").hide();
	}

	$('#theme-switcher').find('li').slice(-4).css('padding-bottom', '0');

	if((screenWidth < 767)) {
		$('#toggle-switcher').hide();
	}
	

	// ------------------------ toggle button ------------------------ 
	$('#toggle-switcher').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$('#theme-switcher').animate({'left':'-214px'});
		} else{
			$(this).addClass('active');
			$('#theme-switcher').animate({'left':'0px'});
		}
	});
	
	// ------------------------ function declaration ------------------------
	// deactive class
	function colorDeactive() {
		$('#theme-switcher ul.color-theme li span').removeClass('active');
	}

	// theme change
	function changeTheme(self) {
		colorChoice = self.attr('id');
		
		$('link#colortheme').attr('href', path + colorChoice +'.css');
		$.cookie('setColorTheme', colorChoice,{path:'/'});
	}

	// color default
	function colorDefault() {
		$('#theme-switcher ul.color-theme li:first-child span').addClass('active');
	}

	// frame change
	function frameChange(frameChoice) {

			// reset pattern
			resetPattern();


		$.cookie('setFrameTheme', frameChoice, {path:'/'});
	}

	// pattern change
	function changePattern(patternChoice) {

		$('body').css({
			'background' 		: 'url('+ path2  + patternChoice +'.png)',
			'background-repeat'	: 'repeat'
		});

		$.cookie('setPatternTheme', patternChoice,{path:'/'});
	}
	
	// deactive class
	function patternDeactive() {
		$('#theme-switcher ul.pattern-theme li span').removeClass('active');
	}

	// reset pattern
	function resetPattern() {
		$('body').css('background' , 'url('+ path2 + 'default-pattern.png)');
		
		$.cookie('setPatternTheme', 'default-pattern',{path:'/'});		
	}

	

	// ------------------------ Color Theme ------------------------
	// set to color default (default)
	colorDefault();
	
	$('#theme-switcher ul.color-theme li span').click(function(e){
		e.preventDefault();
		var self = $(this);

		// deactive color class
		colorDeactive();

		// active color choice
		self.addClass('active');

		// change color theme
		changeTheme(self);
	});

	// ------------------------ frame theme ------------------------ 
	$('#frame a').click(function(e){
		e.preventDefault();
		
		var self = $(this),
			frameChoice = self.attr("id");

		frameChange(frameChoice);

		$('#frame a').removeClass('active');
		self.addClass('active');
	});

	// ------------------------ pattern for box frame ------------------------ 
	$('#theme-switcher ul.pattern-theme li span').click(function(e){
		var self = $(this);
		patternChoice = self.attr('id');

		// deactive color class
		patternDeactive();

		// active pattern choice
		self.addClass('active');

		// change pattern theme
		changePattern(patternChoice);

	});
	
	// ------------------------ header option ------------------------
	$(".select-link").on('change', function() {
		var headerLink = $(this).val();
		
		window.location = headerLink;
	});

	// ------------------------ check if cookie exist ------------------------ 
	if($.cookie() != 'null') { 
		colorChoice = $.cookie('setColorTheme');
		frameChoice = $.cookie('setFrameTheme');
		patternChoice = $.cookie('setPatternTheme');

		// -- color theme cookie exist
		if(colorChoice != 'null') {

			// fix first cookie check
			if (colorChoice == null) {
				colorChoice = 'default';
			};

			$('link#colortheme').attr('href', path + colorChoice +'.css');

			colorDeactive();
			$('#theme-switcher ul.color-theme li').find('span#' + colorChoice).addClass('active');
		} else {
			colorDefault();
			$('link#colortheme').attr('href', path +'default.css');
		}

		// -- frame theme cookie exist
		$('#main-container').removeClass();
		

		// -- pattern theme cookie exist
		if(patternChoice != 'null') {
			if (frameChoice == 'boxed') {
				changePattern(patternChoice);
				patternDeactive();

				$('#theme-switcher ul.pattern-theme li').find('span#' + patternChoice).addClass('active');
			} else {
				patternDeactive(); 
				resetPattern();
			};

		} else {
			patternDeactive();
			resetPattern();
		}
	}


	// ------------------------ reset ------------------------
	$('#reset').click(function(e){
		e.preventDefault();

		// -- color theme reset
		colorDeactive();
		colorDefault();
		

		// reset color property
		$('link#colortheme').attr('href', path +'default.css');

		// -- pattern theme reset
		patternDeactive() 
		resetPattern();

		// -- reset cookie
		$.removeCookie('setColorTheme', { path: '/' });
		$.removeCookie('setFrameTheme', { path: '/' });
		$.removeCookie('setPatternTheme', { path: '/' });
	});

	
	
});