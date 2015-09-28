function navFix() {
	var navTop = $('.menu-l').offset().top;
	if ( $(window).height() > 600 ) {
		$(window).bind('scroll', function() {
			if ( $(document).scrollTop() > navTop ) {
				$('.menu-l').css({
					'position': 'fixed',
					'left': '50%',
					'margin': '0 0 0 -480px'
				});
				$('.catalog-c, .product-i, .text-i, .list-i').css({
					'margin-left': '249px'
				});
				var x = $(document).scrollTop()-($('.content-b').offset().top+$('.content-b').outerHeight()-$('.menu-l').outerHeight()+20);
				if ( x > 0 ) {
					$('.menu-l').css({
						'top': -x+'px'
					});
				}
				else {
					$('.menu-l').css({
						'top': '0'
					});
				}
			}
			else {
				$('.menu-l').css({
					'position': 'relative',
					'left': '0',
					'top': '0',
					'margin': '-10px 17px 0 0'
				});
				$('.catalog-c, .product-i, .text-i, .list-i').css({
					'margin-left': '0'
				});
			}
		});
	}
}
function filterFix() {
	var filterTop = $('.filter-r').offset().top-10;
	if ( $(window).height() > 600 ) {
		$(window).bind('scroll', function() {
			if ( $(document).scrollTop() > filterTop ) {
				$('.filter-r').css({
					'position': 'fixed',
					'right': '50%',
					'margin': '10px -500px 0 0'
				});
				var x = $(document).scrollTop()-($('.content-b').offset().top+$('.content-b').outerHeight()-$('.filter-r').outerHeight()-10);
				if ( x > 0 ) {
					$('.filter-r').css({
						'top': -x+'px'
					});
				}
				else {
					$('.filter-r').css({
						'top': '0'
					});
				}
			}
			else {
				$('.filter-r').css({
					'position': 'relative',
					'right': '0',
					'top': '0',
					'margin': '-14px -40px 0 0'
				});
			}
		});
	}
}
$(document).ready(function() {
	if ( $('.menu-l').length > 0 ) {
		navFix();
	}
	if ( $('.filter-r').length > 0 ) {
		filterFix();
	}
	if ( $('.about-i').length > 0 ) {
		$('.about-i .nav li a').bind('click', function() {
			var t = $(this).parents('.about-i').find('.tab');
			t.fadeOut(200);
			t.filter('[data-tab="'+$(this).attr('href')+'"]').stop().delay(250).fadeIn(200);
			$(this).parent().addClass('active').siblings().removeClass();
			event.preventDefault();
		}).filter(':first').click();
		$('.about-i .tab .navigator li a').bind('click', function() {
			var t = $(this).parents('.tab').find('.range');
			t.fadeOut(200);
			t.filter('[data-range="'+$(this).attr('href')+'"]').stop().delay(250).fadeIn(200);
			$(this).parent().addClass('active').siblings().removeClass();
			event.preventDefault();
		}).filter(':first').click();
		$('.about-i .tab .range > div').append('<span class="close"></span>');
		$('.about-i .tab .range .information .core').jScrollPane({
			autoReinitialise: true
		});
		$('.about-i .tab .range > button').bind('click', function(event) {
			$(this).siblings('div').stop().fadeIn(200);
			$(this).parent('.range').addClass('active');
			event.preventDefault();
		});
		$('.about-i .tab .range > div .close').bind('click', function(event) {
			$(this).parent().stop().fadeOut(200);
			$(this).parents('.range').removeClass('active');
			event.preventDefault();
		});
		$('.about-i .range .years ul li a').bind('click', function(event) {
			var t = $(this).parents('ul').parent().siblings('.information');
			t.stop().fadeOut(200);
			t.filter('[data-year="'+$(this).attr('href')+'"]').stop().delay(200).fadeIn(200);
			$(this).parent().addClass('active').siblings().removeClass();
			event.preventDefault();
		});
		$('.about-i .range .years ul li:first-child a').trigger('click');
	}
	if ( $('.menu-l ul li ul').length > 0 ) {
		$('.menu-l ul li ul').each(function() {
			$(this).parent().addClass('sub');
		});
		$('.menu-l ul li.sub > a').bind('click', function(event) {
			$(this).parent().addClass('current').siblings('.sub').removeClass('current');
			event.preventDefault();
		}).filter(':first').click();
	}
	if ( $('input[type="checkbox"]').length > 0 ) {
		$('input[type="checkbox"]').uniform();
	}
	if ( $('.modal-f').length > 0 ) {
		$('.modal-f').append('<span class="close"></span>');
	}
	$('.modal-f .close, .fade').bind('click', function() {
		$('.modal-f, .fade').stop().fadeOut(200);
		event.preventDefault();
	});
	$('.modal-f .controls .ok').bind('click', function() {
		$('.modal-f, .fade').stop().fadeOut(200);
		alert('Confirm event fire');
		event.preventDefault();
	});
	$('.modal-f .controls .clear').bind('click', function() {
		$(this).parents('.modal-f').find('input[type="checkbox"]').prop('checked', false);
		$(this).parents('.modal-f').find('.checker span').removeClass('checked');
		event.preventDefault();
	});
	$('.filter-r ul li h6 span').bind('click', function() {
		$('.modal-f').css({
			'top': $(document).scrollTop()+'px'
		}).stop().fadeIn(200);
		$('.fade').stop().fadeIn(200);
		event.preventDefault();
	});
	var gotop = false;
	$(window).bind('scroll', function() {
		if ( $(document).scrollTop() > $(window).height()/2 ) {
			if ( !gotop ) {
				$('.gotop').stop().fadeIn(500);
				gotop = true;
			}
		}
		else {
			if ( gotop ) {
				$('.gotop').stop().fadeOut(500);
				gotop = false;
			}
		}
	});
	$('.gotop').bind('click', function(event) {
		$('body, html').stop().animate({
			scrollTop: '0'
		}, 500);
		event.preventDefault();
	});
});
$(window).resize(function() {
	if ( $('.menu-l').length > 0 ) {
		navFix();
	}
	if ( $('.filter-r').length > 0 ) {
		filterFix();
	}
});