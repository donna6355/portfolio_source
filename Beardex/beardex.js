$(function() {
	const $char = $('#wrap > section > .mapChar > li');
	const $charImg = $char.children('a');
	const $clue = $('.left > ul > li');
	const $charater = $('.right > ul > li');
	let itvId = [];

	//Characters wandering on map
	const mapCharFn = function(idx, speed) {
		$char.eq(idx).fadeIn();
		itvId[idx] = setInterval(function() {
			let x = Math.floor(Math.random() * 888);
			let y = Math.floor(Math.random() * 540);
			$char.eq(idx).css({ left: x, top: y });
		}, speed);
	};
	const mapCharImgFn = function(idx, speed, imgIdx) {
		itvId[idx + 10] = setInterval(function() {
			let ran = Math.floor(Math.random() * imgIdx);
			let imgSrc = $charImg.eq(idx).css('backgroundImage');
			imgSrc = imgSrc.slice(imgSrc.lastIndexOf('_') + 1, imgSrc.lastIndexOf('.') - 1);
			$charImg.eq(idx).css({
				backgroundImage: 'url(./img/beardex_map_' + imgSrc + ran + '.png)'
			});
		}, speed);
	};
	const mapFullFn = (idx, speed, imgIdx) => {
		mapCharFn(idx, speed);
		mapCharImgFn(idx, speed, imgIdx);
	};
	const clrInt = function() {
		for (let i = 0; i < itvId.length; i++) {
			clearInterval(itvId[i]);
		}
	};

	//article scenario showing
	const artFn = function(DOM) {
		$('#bg').stop().fadeIn();
		DOM.fadeIn(1000);
		DOM.children('img').stop().animate({ opacity: 1 }, 1000, function() {
			DOM.children('.txt').stop().animate({ opacity: 1 });
		});
	};
	const artFirFn = function(DOM) {
		$('#bg').stop().fadeIn();
		DOM.fadeIn(1000);
		DOM.children('img:nth-child(2)').stop().animate({ opacity: 1 }, 1000, function() {
			DOM.children('.txt:nth-child(3)').stop().animate({ opacity: 1 });
		});
	};
	const artSecFn = function(DOM) {
		DOM.children('img:nth-child(5)').stop().animate({ opacity: 1 }, 1000, function() {
			DOM.children('.txt:nth-child(4)').stop().animate({ opacity: 1 });
		});
	};

	const txtPrgFn = function(DOM, idx) {
		let txt = DOM.eq(idx).text().trim();
		let txtArr = [];
		let txtShow = '';
		let num = 0;
		let timeOut = 0;

		for (let i = 0; i < txt.length; i++) {
			txtArr[i] = txt.slice(0 + i, 1 + i);
		}
		timeOut = txtArr.length * 50;
		DOM.eq(idx).text(txtShow).show();
		let intervalId = setInterval(function() {
			if (num < txtArr.length) {
				txtShow += txtArr[num];
				DOM.eq(idx).text(txtShow);
				num++;
			} else {
				return;
			}
		}, 50);
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
	const artResetFn = function(DOM) {
		$('#bg').hide();
		$(DOM).hide().find('img,.txt,.btn').css({ opacity: 0 }).find('p').hide();
	};

	//default setting - Chloe intro.
	artFn($('#scn1'));
	txtFn($('#scn1 > .txt > p'), 2000, 6000, 8000);
	$('#scn1').children('.btn').stop().delay(9000).animate({ opacity: 1 });

	$('#scn1').find('.next').on('click', function() {
		$('#bg').hide();
		$(this).parents('article').hide();
		mapFullFn(0, 3000, 3);
		$clue.eq(0).addClass('on');
		$charater.eq(0).addClass('on');
	});

	//map icon click => article scene event

	$char.eq(0).children().on('click', function(evt) {
		evt.preventDefault();
		clrInt();
		artFirFn($('#scn2'));
		txtFn($('#scn2 > .txt:nth-child(3) > p'), 2000, 3000, 6000);
		setTimeout(function() {
			artSecFn($('#scn2'));
		}, 7500);
		setTimeout(function() {
			txtFn($('#scn2 > .txt:nth-child(4) > p'), 2000, 3000, 7000);
		}, 7000);
		$('#scn2').children('.btn').stop().delay(16000).animate({ opacity: 1 });
	});
	$('#scn2').find('.next').on('click', function() {
		artResetFn($('#scn2'));
		mapFullFn(0, 3000, 3);
		mapFullFn(1, 2500, 3);
		$clue.eq(1).addClass('on');
		$charater.eq(1).addClass('on');
	});

	$char.eq(1).children().on('click', function(evt) {
		evt.preventDefault();
		clrInt();
		artFirFn($('#scn3'));
		txtFn($('#scn3 > .txt:nth-child(3) > p'), 2000, 3000, 6000);
		setTimeout(function() {
			artSecFn($('#scn3'));
		}, 7500);
		setTimeout(function() {
			txtFn($('#scn3 > .txt:nth-child(4) > p'), 2000, 4500, 7000);
		}, 7000);
		$('#scn3').children('.btn').stop().delay(15000).animate({ opacity: 1 });
	});
	$('#scn3').find('.next').on('click', function() {
		artResetFn($('#scn3'));
		mapFullFn(0, 3000, 3);
		mapFullFn(1, 2500, 3);
		mapCharFn(2, 2000);
		$clue.eq(2).addClass('on');
		$charater.eq(2).addClass('on');
	});

	$char.eq(2).children().on('click', function(evt) {
		evt.preventDefault();
		clrInt();
		artFirFn($('#scn4'));
		txtFn($('#scn4 > .txt:nth-child(3) > p'), 2000, 3000, 5000);
		setTimeout(function() {
			artSecFn($('#scn4'));
		}, 6000);
		setTimeout(function() {
			txtFn($('#scn4 > .txt:nth-child(4) > p'), 2000, 4000, 5000);
		}, 5000);
		$('#scn4').children('.btn').stop().delay(12000).animate({ opacity: 1 });
	});
	$('#scn4').find('.next').on('click', function() {
		artResetFn($('#scn4'));
		$('.mapChar > li:nth-child(3)').hide();
		mapFullFn(0, 3000, 3);
		mapFullFn(1, 2500, 3);
		mapFullFn(3, 1500, 8);
		mapFullFn(4, 1580, 2);
		mapFullFn(5, 1660, 4);
		mapFullFn(6, 1720, 2);
		$charater.eq(3).addClass('on');
		$charater.eq(4).addClass('on');
	});
	$char.eq(3).children().on('click', function(evt) {
		evt.preventDefault();
		clrInt();
		$charater.eq(6).addClass('on');
		artFirFn($('#scn5'));
		txtFn($('#scn5 > .txt:nth-child(3) > p'), 2000, 3000, 5300);
		setTimeout(function() {
			artSecFn($('#scn5'));
		}, 6000);
		setTimeout(function() {
			txtFn($('#scn5 > .txt:nth-child(4) > p'), 2000, 3000, 5000);
		}, 6300);
		setTimeout(function() {
			$('#scn5').fadeOut().find('img,.txt,.btn').css({ opacity: 0 }).find('p').hide();
			$('#finale').fadeIn(1000);
			$('#finale').children('img').stop().animate({ opacity: 1 }, 1000, function() {
				$('#finale').children('.txt').stop().animate({ opacity: 1 });
			});
		}, 15000);
		setTimeout(function() {
			$('#finale').fadeOut().find('img,.txt,.btn').css({ opacity: 0 }).find('p').hide();
			$('#end').fadeIn(1000);
			$('#end').children('img').stop().animate({ opacity: 1 }, 1000, function() {
				$('#end').children('.txt').stop().animate({ opacity: 1 });
			});
		}, 21000);
		$('#end').children('.btn').stop().delay(23000).animate({ opacity: 1 });
	});
	$('#end').find('.next').on('click', function() {
		artResetFn($('#end'));
		mapFullFn(0, 3000, 3);
		mapFullFn(1, 2500, 3);
		mapFullFn(3, 1500, 8);
		mapFullFn(4, 1580, 2);
		mapFullFn(5, 1660, 4);
		mapFullFn(6, 1720, 2);
	});
	$char.eq(4).children().on('click', function(evt) {
		evt.preventDefault();
		clrInt();

		$('#bg').stop().fadeIn();
		$('#gotu').fadeIn().children('img,.txt').show().animate({ opacity: 1 });
		$('#gotu .btn').stop().delay(1000).animate({ opacity: 1 });
	});
	$('#gotu').find('.next').on('click', function() {
		artResetFn($('#gotu'));
		mapFullFn(0, 3000, 3);
		mapFullFn(1, 2500, 3);
		mapFullFn(3, 1500, 8);
		mapFullFn(4, 1580, 2);
		mapFullFn(5, 1660, 4);
		mapFullFn(6, 1720, 2);
	});
	$char.eq(5).children().on('click', function(evt) {
		evt.preventDefault();
		clrInt();
		artFn($('#Charlie'));
		setTimeout(function() {
			txtPrgFn($('#Charlie>.txt>p'), 0);
		}, 1800);
		$('#Charlie').children('.btn').stop().delay(9000).animate({ opacity: 1 });
	});
	$('#Charlie').find('.next').on('click', function() {
		artResetFn($('#Charlie'));
		mapFullFn(0, 3000, 3);
		mapFullFn(1, 2500, 3);
		mapFullFn(3, 1500, 8);
		mapFullFn(4, 1580, 2);
		mapFullFn(5, 1660, 4);
		mapFullFn(6, 1720, 2);
		$charater.eq(5).addClass('on');
		$charater.eq(7).removeClass('on');
	});
	$char.eq(6).children().on('click', function(evt) {
		evt.preventDefault();
		clrInt();
		$('#bg').stop().fadeIn();
		$('#watchout').fadeIn().children('img,.txt').show().animate({ opacity: 1 });
		$('#watchout .btn').stop().delay(1000).animate({ opacity: 1 });
	});
	$('#watchout').find('.next').on('click', function() {
		artResetFn($('#watchout'));
		mapFullFn(0, 3000, 3);
		mapFullFn(1, 2500, 3);
		mapFullFn(3, 1500, 8);
		mapFullFn(4, 1580, 2);
		mapFullFn(5, 1660, 4);
		mapFullFn(6, 1720, 2);
	});

	//refresh button
	$('.reset').on('click', function() {
		location.reload();
	});
});
