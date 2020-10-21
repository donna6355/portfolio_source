// splash event
$(function() {
	$('.splash').show();
	$('.splash>span').stop().animate({ opacity: 1 }, 1500);
	$('.splash>.logo').stop().animate({ opacity: 1 }, 1500, function() {
		location.href = './dodorecycle.html';
	});
});

// index.html event
$(function() {
	const $turtle = $('section>p>a');
	const $idxGnb = $('#index .gnb>li>a');

	$('section>p>a').on('click', function() {
		$('.status').stop().fadeIn();
	});

	$('.item>li>a').on('click', function() {
		$('.status').stop().fadeOut();
		$('section').addClass('on');
	});
	setInterval(function() {
		if ($turtle.hasClass('on')) {
			$turtle.stop().animate({ top: 214 }, 1000).removeClass('on');
		} else {
			$turtle.stop().animate({ top: 154 }, 1000).addClass('on');
		}
	}, 1000);
	$('.garbageL').stop().animate({ top: 470 }, 10000, function() {
		$('section > p > .garbageL')
			.clone()
			.appendTo($('section > p'))
			.css({ left: 200, top: 0 })
			.addClass('float');
	});
	$('.garbageR').stop().delay(4000).animate({ top: 470 }, 10000);
	setTimeout(function() {
		$('.garbageL,.garbageR').stop().animate({ top: 350 }, 7000);
	}, 14000);
	setTimeout(function() {
		$('.float').stop().animate({ top: 470 }, 7000);
	}, 14000);
});

// menu.html event
$(function() {
	const $gnb = $('#menu nav > .gnb > li > a');
	const $lnb = $('#menu section>.lnb');
	const $pplnb = $('section > .lnb:nth-child(2) > li>a');
	const $tiplnb = $('section > .lnb:nth-child(3) > li>a');
	const $sharelnb = $('section > .lnb:nth-child(4) > li>a');
	const $article = $('#menu section>article');
	const $logo = $('#menu header > .logo');

	$gnb.on('click', function(evt) {
		let nowIdx = $gnb.index(this);
		evt.preventDefault();
		$(this).parent('li').addClass('on').siblings().removeClass('on');
		$lnb.eq(nowIdx).addClass('on').siblings().removeClass('on');

		if (nowIdx === 0) {
			$('.plaPt').show().siblings('article').hide();
			$lnb.eq(nowIdx).children('li').removeClass('on');
		} else if (nowIdx === 1) {
			$('.gbg').show().siblings('article').hide();
			$lnb
				.eq(nowIdx)
				.children('li')
				.eq(0)
				.addClass('on')
				.siblings()
				.removeClass('on');
		} else {
			$('.shareM').show().siblings('article').hide();
			$lnb
				.eq(nowIdx)
				.children('li')
				.eq(0)
				.addClass('on')
				.siblings()
				.removeClass('on');
		}
	});

	$lnb.find('a').on('click', function(evt) {
		evt.preventDefault();
		$(this).parent('li').addClass('on').siblings().removeClass('on');
	});

	$tiplnb.eq(1).on('click', function(evt) {
		evt.preventDefault();
		$(this).parent('li').css({ background: 'none' });
	});

	$tiplnb.on('click', function(evt) {
		evt.preventDefault();
		let nowIdx = $tiplnb.index(this);
		if (nowIdx === 0) {
			$('.gbg').show().siblings('article').hide();
		} else if (nowIdx === 1) {
			$('.upcycle').show().siblings('article').hide();
		} else {
			$('.brCamp').show().siblings('article').hide();
		}
	});
	$pplnb.on('click', function(evt) {
		evt.preventDefault();
		let nowIdx = $pplnb.index(this);
		if (nowIdx === 0) {
			$('.oxQuiz').show().siblings('article').hide();
		} else if (nowIdx === 1) {
			$('.reuse').show().siblings('article').hide();
		} else {
			$('.chl').show().siblings('article').hide();
		}
	});
	$sharelnb.on('click', function(evt) {
		evt.preventDefault();
		let nowIdx = $sharelnb.index(this);
		if (nowIdx === 0) {
			$('.shareM').show().siblings('article').hide();
		} else if (nowIdx === 1) {
			$('.needM').show().siblings('article').hide();
		} else {
			$('.myM').show().siblings('article').hide();
		}
	});
	$('.oxQuiz > .btn > button').on('click', function() {
		$('.oxAnswer').stop().fadeIn().siblings('article').fadeOut();
	});
	$('.chl a').on('click', function() {
		$('.chlCont').stop().fadeIn();
	});
	$('.gbg > ul > li>a').on('click', function(evt) {
		evt.preventDefault();
		$('.gbgCont').stop().fadeIn();
	});
	$('.upcycle > ul > li>a').on('click', function(evt) {
		evt.preventDefault();
		$('.upcycleCont').stop().fadeIn();
	});
	$('.brCamp > ul > li>a').on('click', function(evt) {
		evt.preventDefault();
		$('.brCampCont').stop().fadeIn();
	});
	$('.shareM a').on('click', function() {
		$('.shareCont').stop().fadeIn();
	});
	$('article .cls').on('click', function() {
		$(this).parents('article').hide();
	});
	$logo.on('click', function(evt) {
		evt.preventDefault();
		location.href = './dodorecycle.html';
	});
});
