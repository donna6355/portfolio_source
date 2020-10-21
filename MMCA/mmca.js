//menu js
$(function() {
	const $csCenter = $('#wrap > header > .top > .snb > .sign > ul > li');
	const $lang = $('.lang');
	const $fGnbBtn = $('#wrap > header > .btm > .toggle');
	const $fGnb = $('#fullGnb');
	const $gnbNav = $('#wrap > header > .btm > nav > .gnb > li');
	const $srchBtn = $('#wrap > header > .btm > .misc > ul > li:first > a');
	const $srch = $('#wrap > header > .btm > .search');
	const $scrolTop = $('#scrolTop');
	let scroll = 0;

	const indentFn = function() {
		$(this).stop().animate({ textIndent: '10' });
	};
	const indentRvFn = function() {
		$(this).stop().animate({ textIndent: '0' });
	};

	//event part
	$csCenter.on('mouseenter', function() {
		$(this)
			.children('.sub')
			.stop()
			.fadeIn({ queue: false })
			.animate({ bottom: -73 });
	});
	$csCenter.on('mouseleave', function() {
		$(this)
			.children('.sub')
			.stop()
			.fadeOut({ queue: false })
			.animate({ bottom: -103 });
	});
	$lang.on('mouseenter', function() {
		$(this)
			.children('ol')
			.stop()
			.fadeIn({ queue: false })
			.animate({ bottom: -63 });
	});
	$lang.on('mouseleave', function() {
		$(this)
			.children('ol')
			.stop()
			.fadeOut({ queue: false })
			.animate({ bottom: -103 });
	});
	$fGnbBtn.on('click', function() {
		//toggle btn itself
		if ($(this).hasClass('on')) {
			$(this).removeClass('on').addClass('off');
			$(this).css({ overflow: 'initial', height: 16 });
			$(this).children().css({ height: 2 });
			$(this).children().eq(0).css({ animationName: 'skewFB' });
			$(this).children().eq(1).fadeIn(400);
			$(this).children().eq(2).css({ animationName: 'skewLB' });
		} else {
			$(this).addClass('on').removeClass('off');
			$(this).css({ overflow: 'hidden', height: 25 });
			$(this).children().css({ height: 3 });
			$(this).children().eq(0).css({ animationName: 'skewF' });
			$(this).children().eq(1).fadeOut(400);
			$(this).children().eq(2).css({ animationName: 'skewL' });
		}
		//fulGnb show/hide
		if ($fGnb.hasClass('on')) {
			$fGnb.stop().slideUp().removeClass('on');
		} else {
			$fGnb.stop().slideDown().addClass('on');
		}
	});
	$('#fullGnb > ol > li > ul > li > a ').on('mouseenter', indentFn);
	$('#fullGnb > ol > li > ul > li > a ').on('mouseleave', indentRvFn);

	$gnbNav.on('mouseenter', function() {
		$(this).children('article').stop().fadeIn(200);
	});
	$gnbNav.on('mouseleave', function() {
		$(this).children('article').stop().fadeOut(200);
	});
	$('.gnb > li > article > .mid > ul > li > a').on('mouseenter', indentFn);
	$('.gnb > li > article > .mid > ul > li > a').on('mouseleave', indentRvFn);

	$gnbNav.find('article > .right > ul > li').on('mouseenter', function() {
		$(this)
			.find('.text')
			.stop()
			.fadeIn({ queue: false }, 600)
			.animate({ top: '40%' }, 600);
	});
	$gnbNav.find('article > .right > ul > li').on('mouseleave', function() {
		$(this)
			.find('.text')
			.stop()
			.fadeOut({ queue: false }, 600)
			.animate({ top: '100%' }, 600);
	});

	$srchBtn.on('click', function(evt) {
		evt.preventDefault();
		$srch.stop().fadeIn();
	});
	$srch.find('button').on('click', function() {
		$srch.stop().fadeOut();
	});

	$(window).on('scroll', function() {
		scroll = $(this).scrollTop();
		if (scroll > 41) {
			$('#wrap > header > .btm').addClass('down');
			$('#wrap > header > .bg ').hide();
			$fGnbBtn.stop().animate({ marginTop: -8 }, 200);
			$fGnbBtn.siblings('.misc').stop().animate({ marginTop: -10 }, 200);
			$scrolTop.stop().fadeIn({ queue: false }, 100);
			$scrolTop.children().stop().animate(
				{
					width: 40,
					height: 40,
					fontSize: 16
				},
				200
			);
			$('#wrap > section > .bnr').css({ marginTop: 80 });
		} else {
			$('#wrap > header > .btm').removeClass('down');
			$('#wrap > header > .bg ').show();
			$fGnbBtn.stop().animate({ marginTop: -85 }, 200);
			$fGnbBtn.siblings('.misc').stop().animate({ marginTop: -90 }, 200);
			$scrolTop.stop().fadeOut({ queue: false }, 200);
			$scrolTop.children().stop().animate(
				{
					width: 4,
					height: 4,
					fontSize: 2
				},
				200
			);
			$('#wrap > section > .bnr').css({ marginTop: 0 });
		}
	});
	$scrolTop.on('click', function(evt) {
		evt.preventDefault();
		$('html,body').stop().animate({ scrollTop: 0 }, 2000);
	});
});

//section js
$(function() {
	const $pg = $('#wrap > section > .bnr > .pg > li>a');
	const $slide = $('#wrap > section > .bnr > .slide > li');
	const $bestNew = $(
		'#wrap > section > .best > ul > li,#wrap > section > .newPb > ul > li'
	);
	const $midBnrNew = $('#wrap > section > .new');
	let nowIdx = 0;
	let intervalId = null;
	let midBnrLoc = $midBnrNew.offset().top;

	const slideFn = function() {
		$pg.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		$slide.filter('.on').stop().fadeOut(1000).removeClass('on');
		$slide.eq(nowIdx).stop().fadeIn(1000).addClass('on');
	};

	const nextFn = function() {
		if (nowIdx === $slide.length - 1) {
			nowIdx = 0;
		} else {
			nowIdx++;
		}
		slideFn();
	};

	const prevFn = function() {
		if (nowIdx === 0) {
			nowIdx = $slide.length - 1;
		} else {
			nowIdx--;
		}
		slideFn();
	};
	const intervalFn = function() {
		intervalId = setInterval(function() {
			nextFn();
		}, 4000);
	};

	//event part
	$slide.eq(0).show().addClass('on');
	$pg.eq(0).parent().addClass('on');

	intervalFn();

	$pg.on('click', function(evt) {
		nowIdx = $pg.index(this);
		clearInterval(intervalId);
		evt.preventDefault();
		slideFn();
	});
	$('a.prev ').on('click', function(evt) {
		clearInterval(intervalId);
		evt.preventDefault();
		prevFn();
		intervalFn();
	});
	$('a.next ').on('click', function(evt) {
		clearInterval(intervalId);
		evt.preventDefault();
		nextFn();
		intervalFn();
	});
	$bestNew.on('mouseenter', function() {
		$(this).children('button').stop().animate({ opacity: 1 });
		$(this).find('.bg').stop().animate({ opacity: 1 });
	});
	$bestNew.on('mouseleave', function() {
		$(this).children('button').stop().animate({ opacity: 0 });
		$(this).find('.bg').stop().animate({ opacity: 0 });
	});

	$(window).on('scroll', function() {
		if ($(this).scrollTop() > midBnrLoc - 800) {
			$midBnrNew
				.children('.rightTxt')
				.stop()
				.fadeIn({ queue: false })
				.animate({ marginTop: 0 });
		} else {
			$midBnrNew
				.children('.rightTxt')
				.stop()
				.fadeOut({ queue: false })
				.animate({ marginTop: 80 });
		}
	});
});
