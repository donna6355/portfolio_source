$(function() {
	const $article = $('#wrap>section>article');
	const $gnb = $('#wrap > header > nav > .gnb > li>a');
	const $doGnb = $('#wrap > section > .whatdo > .thumbNav > li > a');
	const $doCont = $('#wrap > section > .whatdo > .contCon > .contents');
	const $doneGnb = $('#wrap > section > .whatdone > .thumbNav > li > a');
	const $doneCont = $('#wrap > section > .whatdone > .ulFrame > .ulCont ');
	let scroll = 0;
	let intId = null;

	let artFn = function(idx) {
		$article.eq(idx).stop().fadeIn().siblings().stop().fadeOut();
		$gnb.eq(idx).parent().addClass('on').siblings().removeClass('on');
	};

	// blueberry animation
	const blueB = function(num) {
		let imgNum = num;
		let imgLast = imgNum + 4;
		intId = setInterval(function() {
			if (imgNum <= imgLast) {
				imgNum++;
			} else {
				imgNum = imgLast - 4;
			}
			$('.blueB').css({
				backgroundImage: 'url(./img/profile_main_bb' + imgNum + '.png)'
			});
		}, 300);
	};

	// basic setting
	$('html,body').stop().animate({ scrollTop: 0 });
	blueB(1);

	// gnb menu event
	$gnb.on('click', function(evt) {
		evt.preventDefault();
		let idx = $gnb.index(this);
		$gnb.eq(idx).parent().addClass('on').siblings().removeClass('on');
		if (idx === 0) {
			$('html,body').scrollTop(0);
		} else if (idx === 1) {
			$('html,body').scrollTop(800);
		} else if (idx === 2) {
			$('html,body').scrollTop(1600);
		} else {
			$('html,body').scrollTop(7200);
		}
	});

	// scroll event
	$(window).on('scroll', function() {
		scroll = $('html,body').scrollTop();
		if (scroll < 800) {
			artFn(0);
			clearInterval(intId);
			blueB(1);
		} else if (scroll < 1600) {
			artFn(1);
			clearInterval(intId);
			blueB(5);
		} else if (scroll < 2400) {
			artFn(2);
			clearInterval(intId);
			blueB(10);
			$doCont.stop().animate({ marginLeft: -1280 * 0 });
			$doGnb.eq(0).parent().addClass('on').siblings().removeClass('on');
		} else if (scroll < 3200) {
			artFn(2);
			clearInterval(intId);
			blueB(10);
			$doCont.stop().animate({ marginLeft: -1280 * 1 });
			$doGnb.eq(1).parent().addClass('on').siblings().removeClass('on');
		} else if (scroll < 4000) {
			artFn(2);
			clearInterval(intId);
			blueB(10);
			$doCont.stop().animate({ marginLeft: -1280 * 2 });
			$doGnb.eq(2).parent().addClass('on').siblings().removeClass('on');
		} else if (scroll < 4800) {
			artFn(2);
			clearInterval(intId);
			blueB(10);
			$doCont.stop().animate({ marginLeft: -1280 * 3 });
			$doGnb.eq(3).parent().addClass('on').siblings().removeClass('on');
		} else if (scroll < 5600) {
			artFn(2);
			clearInterval(intId);
			blueB(10);
			$doCont.stop().animate({ marginLeft: -1280 * 4 });
			$doGnb.eq(4).parent().addClass('on').siblings().removeClass('on');
		} else if (scroll < 6400) {
			artFn(2);
			clearInterval(intId);
			blueB(10);
			$doCont.stop().animate({ marginLeft: -1280 * 5 });
			$doGnb.eq(5).parent().addClass('on').siblings().removeClass('on');
		} else if (scroll < 7200) {
			artFn(2);
			clearInterval(intId);
			blueB(10);
			$doCont.stop().animate({ marginLeft: -1280 * 6 });
			$doGnb.eq(6).parent().addClass('on').siblings().removeClass('on');
		} else if (scroll < 8000) {
			artFn(3);
			clearInterval(intId);
			blueB(15);
			$doneCont.stop().animate({ marginLeft: -600 * 0 });
			$doneGnb.eq(0).parent().addClass('on').siblings().removeClass('on');
		} else if (scroll < 8800) {
			artFn(3);
			clearInterval(intId);
			blueB(15);
			$doneCont.stop().animate({ marginLeft: -600 * 1 });
			$doneGnb.eq(1).parent().addClass('on').siblings().removeClass('on');
		} else {
			artFn(3);
			clearInterval(intId);
			blueB(15);
			$doneCont.stop().animate({ marginLeft: -600 * 2 });
			$doneGnb.eq(2).parent().addClass('on').siblings().removeClass('on');
		}
	});

	// whatdo gnb event
	$doGnb.on('click', function(evt) {
		evt.preventDefault();
		let idx = $doGnb.index(this);
		if (idx === 0) {
			$('html,body').scrollTop(1600);
		} else if (idx === 1) {
			$('html,body').scrollTop(2400);
		} else if (idx === 2) {
			$('html,body').scrollTop(3200);
		} else if (idx === 3) {
			$('html,body').scrollTop(4000);
		} else if (idx === 4) {
			$('html,body').scrollTop(4800);
		} else if (idx === 5) {
			$('html,body').scrollTop(5600);
		} else {
			$('html,body').scrollTop(6400);
		}
	});
	// whatdone gnb event
	$doneGnb.on('click', function(evt) {
		evt.preventDefault();
		let idx = $doneGnb.index(this);
		if (idx === 0) {
			$('html,body').scrollTop(7200);
		} else if (idx === 1) {
			$('html,body').scrollTop(8000);
		} else {
			$('html,body').scrollTop(8800);
		}
	});
	// whatdone travel list click event
	$('ul.travel > li').on('click', function(evt) {
		evt.preventDefault();
		$(this).find('img').stop().fadeIn(600, function() {
			setTimeout(function() {
				$('ul.travel > li>img').stop().fadeOut();
			}, 1000);
		});
	});
	// whatdone planner list click event
	$('ul.planner > li.click').on('click', function(evt) {
		evt.preventDefault();
		$(this).find('img').stop().fadeIn(600);
		$('.close').parent().stop().fadeIn(600);
	});
	$('.close').on('click', function(evt) {
		evt.preventDefault();
		$('ul.planner>li>img').stop().fadeOut(400);
		$('.close').parent().stop().fadeOut(400);
	});
});

$(function() {
	// main .txtBox typing
	const txtPrgFn = function(DOM, idx) {
		let txt = DOM.eq(idx).text().trim();
		let txtArr = [];
		let txtShow = '';
		let num = 0;
		let timeOut = 0;
		for (let i = 0; i < txt.length; i++) {
			txtArr[i] = txt.slice(i, 1 + i);
		}
		timeOut = txtArr.length * 101;
		DOM.eq(idx).text(txtShow);
		let intervalId = setInterval(function() {
			if (num < txtArr.length) {
				txtShow += txtArr[num];
				DOM.eq(idx).text(txtShow).show();
				num++;
			} else {
				return;
			}
		}, 100);
		setTimeout(function() {
			clearInterval(intervalId);
		}, timeOut);
	};
	const txtFn = function(DOM, delay1, delay2, delay3) {
		setTimeout(function() {
			txtPrgFn(DOM, 0);
		}, delay1);
		setTimeout(function() {
			txtPrgFn(DOM, 1);
		}, delay2);
		setTimeout(function() {
			txtPrgFn(DOM, 2);
		}, delay3);
	};
	$('.txtBox').stop().fadeIn(2000);
	txtFn($('.txtBox>p'), 2000, 4000, 6000);
	setTimeout(function() {
		$('.scroll').stop().fadeIn();
	}, 8000);
});

// portfolio details
$(function() {
	const $details = $('#wrap > section > .whatdo > .contCon > .contents > li > .btn > a.details ');
	const $shadow = $('#wrap > section > .whatdo > .shadow ');
	const $drag = $('#wrap > section > .whatdo > .shadow > span');
	const $img = $('#wrap > section > .whatdo > .shadow > img');

	$details.on('click', function(evt) {
		evt.preventDefault();
		let img = $(this).attr('href');
		$shadow.stop().fadeIn().scrollTop(0);
		$shadow.find('img').attr({ src: img });
		$(window).on('scroll', function() {
			$shadow.stop().fadeOut();
		});
	});

	$('#wrap > section > .whatdo > .shadow >.cls').on('click', function() {
		$shadow.stop().fadeOut();
	});

	// scss mouseenter
	$('.coding>ul>li:nth-child(2)').on({
		mouseenter: function() {
			$(this).children().attr({ src: './img/profile_who_sk31.png' });
		},
		mouseleave: function() {
			$(this).children().attr({ src: './img/profile_who_sk3.png' });
		}
	});

	// dodorecycle & react double tab prevention
	$(
		'#wrap > section > .whatdo > .contCon > .contents > li:nth-child(5) .site'
	).on('click', function(evt) {
		evt.preventDefault();
	});
	$(
		'#wrap > section > .whatdo > .contCon > .contents > li:nth-child(7) .site'
	).on('click', function(evt) {
		evt.preventDefault();
	});
});
