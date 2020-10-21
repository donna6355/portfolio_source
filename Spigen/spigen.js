//menu event
$(function() {
	const $gnb = $('#wrap > header > nav > .gnb>li');
	const $toggle = $('#wrap > .toggle');
	const $togCls = $toggle.find('.cls');
	const $rwdFgnb = $('#wrap > .toggle > .fgnb > ul > li');

	$gnb.parent().on('mouseenter', function() {
		$(this).parents('header').stop().animate({ height: 280 });
		$(this).find('.lnb').stop().fadeIn();
	});
	$gnb.parent().on('mouseleave', function() {
		$(this).parents('header').stop().animate({ height: 100 });
		$(this).find('.lnb').stop().fadeOut();
	});

	$gnb.on('mouseenter', function() {
		$(this).children('.bar').stop().animate({ width: '100%' });
	});
	$gnb.on('mouseleave', function() {
		$(this).children('.bar').stop().animate({ width: '0%' });
	});

	$toggle.on('click', function(evt) {
		evt.preventDefault();
		$('.fgnb').stop().fadeIn();
	});
	$togCls.on('click', function(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		$('.fgnb').stop().fadeOut();
	});

	$rwdFgnb.on('click', function(evt) {
		evt.preventDefault();
		if ($(window).width() < 1200) {
			$(this).children('.flnb').stop().slideToggle();
			$(this).siblings().children('.flnb').stop().slideUp();
		}
	});
});
//section event
$(function() {
	const $slide = $('#wrap > section > .bnr > .slide');
	const $pagination = $('#wrap > section > .bnr > .page > li');
	const $irArt = $('#wrap > section > .ir > .case > article');
	const $medBlg = $('#wrap > section > .medBlog > .right > .label > li>a');

	let h2Val = $slide.children('h2').css('margin-top');
	h2Val = parseInt(h2Val.slice(0, 3));
	console.log(h2Val);

	let h3Val = $slide.children('h3').css('margin-top');
	h3Val = parseInt(h3Val.slice(0, 2));
	let pVal = $slide.children('p').css('margin-top');
	pVal = parseInt(pVal.slice(0, 2));
	let btnVal = $slide.children('button').css('margin-top');
	btnVal = parseInt(btnVal.slice(0, 2));

	let nowIdx = 0;
	let intervalId = null;

	const sldContResetFn = function() {
		$(window).width() > 1200 ? (h2Val = 367) : (h2Val = 100);
		$slide
			.filter('.on')
			.children('h2')
			.css({ marginTop: h2Val, opacity: 0 })
			.siblings('.bar')
			.css({ width: '0%', opacity: 0 })
			.siblings('h3')
			.css({ marginTop: h3Val, opacity: 0 })
			.siblings('p')
			.css({ marginTop: pVal, opacity: 0 })
			.siblings('button')
			.css({ marginTop: btnVal, opacity: 0 });
	};

	const sldContShowFn = function() {
		sldContResetFn();
		$slide.eq(nowIdx).siblings().removeClass('on');
		$slide
			.eq(nowIdx)
			.addClass('on')
			.children('h2')
			.stop()
			.delay(200)
			.animate({ marginTop: h2Val + 20, opacity: 1 }, 600)
			.siblings('.bar')
			.stop()
			.delay(600)
			.animate({ width: '80%', opacity: 1 }, 600)
			.siblings('h3')
			.stop()
			.delay(1200)
			.animate({ marginTop: h3Val - 20, opacity: 1 }, 600)
			.siblings('p')
			.stop()
			.delay(1800)
			.animate({ marginTop: pVal - 40, opacity: 1 }, 600)
			.siblings('button')
			.stop()
			.delay(2200)
			.animate({ marginTop: btnVal - 20, opacity: 1 }, 600);
	};
	const pgnResetFn = function() {
		$pagination.css({ width: 0, opacity: 0 });
	};
	const pgnFn = function() {
		pgnResetFn();
		for (let i = 0; i < $slide.length; i++) {
			if (i === nowIdx) {
				$pagination
					.eq(i)
					.addClass('on')
					.stop()
					.delay(i * 600)
					.animate({ width: 100, opacity: 1 }, 600);
			} else {
				$pagination
					.eq(i)
					.removeClass('on')
					.stop()
					.delay(i * 600)
					.animate({ width: 20, opacity: 1 }, 600);
			}
		}
	};

	const sldNextFn = function() {
		$slide.filter('.on').stop().fadeOut();

		if (nowIdx === $slide.length - 1) {
			nowIdx = 0;
		} else {
			nowIdx++;
		}
		$slide.eq(nowIdx).stop().fadeIn();
		sldContShowFn();
		pgnFn();
	};
	const sldPrevFn = function() {
		$slide.filter('.on').stop().fadeOut();

		if (nowIdx === 0) {
			nowIdx = $slide.length - 1;
		} else {
			nowIdx--;
		}
		$slide.eq(nowIdx).stop().fadeIn();
		sldContShowFn();
		pgnFn();
	};

	//event part
	$slide.eq(nowIdx).show();
	sldContShowFn();
	pgnFn();
	intervalId = setInterval(sldNextFn, 6000);

	$('.prev').on('click', function(evt) {
		evt.preventDefault();
		clearInterval(intervalId);
		sldPrevFn();
	});
	$('.next').on('click', function(evt) {
		evt.preventDefault();
		clearInterval(intervalId);
		sldNextFn();
	});

	$(window).on('scroll', function() {
		let scrollVal = $(this).scrollTop();
		if (scrollVal >= 146) {
			$('.scrol').css({ position: 'absolute' });
		} else if (scrollVal < 146) {
			$('.scrol').css({ position: 'fixed' });
		}
	});

	$medBlg.on('click', function(evt) {
		evt.preventDefault();
		$(this).parent().addClass('on').siblings().removeClass('on');
		let idx = $medBlg.index(this);
		$('#wrap > section > .medBlog > .right > article')
			.eq(idx)
			.addClass('on')
			.siblings()
			.removeClass('on');
	});

	$irArt.on('mouseenter', function() {
		$(this).children('h3').stop().fadeOut();
		$(this)
			.children('.txt')
			.stop()
			.fadeIn({ queue: false })
			.animate({ top: 0 });
	});
	$irArt.on('mouseleave', function() {
		$(this).children('h3').stop().fadeIn();
		$(this)
			.children('.txt')
			.stop()
			.fadeOut({ queue: false })
			.animate({ top: 350 });
	});

	$('#wrap > footer > button').on('click', function(evt) {
		evt.preventDefault();
		$('html,body').stop().animate({ scrollTop: 0 }, 1000);
	});

	$('#wrap > footer > .fam > li').on('click', function(evt) {
		evt.preventDefault();
		$(this).find('span').css({ transform: 'rotate(180deg)' });
		$(this).children('ol').stop().animate({ top: -305 }, 700);
	});
	$('#wrap > footer > .fam > li').on('mouseleave', function() {
		$(this).find('span').css({ transform: 'rotate(0deg)' });
		$(this).children('ol').stop().animate({ top: 0 }, 700);
	});
});
