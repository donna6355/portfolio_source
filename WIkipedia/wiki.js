$(function() {
	let intvId = null;
	const $contMnu = $('#cont .table>li>a');
	const $contAtc = $('#cont .body>article');
	const $quote = $('.quote');
	const $qList = $('.table_11>ol>li>a');

	const sldFn = function(dur) {
		const $ftBnr = $('.sister_cont');
		$ftBnr.stop().animate({ left: -160 }, dur, 'linear', function() {
			$ftBnr.css({ left: 0 });
			$ftBnr.children('li').eq(0).appendTo($ftBnr);
		});
	};

	// event part
	sldFn(5000);
	intvId = setInterval(function() {
		sldFn(5000);
	}, 5020);

	$('.gnb>li').on('mouseenter', function() {
		$(this).find('.lnb').stop().slideDown();
	});
	$('.gnb>li').on('mouseleave', function() {
		$(this).find('.lnb').stop().slideUp();
	});

	$contMnu.on('click', function(evt) {
		evt.preventDefault();
		let nowIdx = $contMnu.index(this);
		$contAtc.scrollTop(0);
		$(this).parent('li').addClass('on').siblings().removeClass('on');
		$contAtc.filter('.on').stop().slideUp(600);
		$contAtc.eq(nowIdx + 1).stop().slideDown(600).addClass('on');
	});
	$('.cls').on('click', function() {
		$(this).parents('article').stop().slideUp(600);
		$(this).parents('article').scrollTop(0);
		$contMnu.parent('li').removeClass('on');
	});

	$quote.on('click', function(evt) {
		evt.preventDefault();
		let qIdx = $quote.index(this);
		$contAtc.eq(11).stop().slideDown(600).addClass('on');
		$contAtc.eq(11).animate({ scrollTop: $qList.eq(qIdx).position().top - 150 });
		$qList.eq(qIdx).addClass('on');
		setTimeout(function() {
			$qList.eq(qIdx).removeClass('on');
		}, 3000);
	});

	$qList.on('click', function(evt) {
		evt.preventDefault();
		let qIdx = $qList.index(this);
		$contAtc.scrollTop(0);
		$contAtc.filter('.on').stop().slideUp(600).removeClass('on');
		$quote.eq(qIdx).addClass('on');
		$quote
			.eq(qIdx)
			.parents('article')
			.stop()
			.slideDown(400)
			.addClass('on')
			.animate({ scrollTop: $quote.eq(qIdx).position().top - 150 });
		$contMnu
			.eq($quote.eq(qIdx).parents('article').index() - 1)
			.parent('li')
			.addClass('on')
			.siblings()
			.removeClass('on');
		setTimeout(function() {
			$quote.eq(qIdx).removeClass('on');
		}, 6000);
	});

	// page link
	$('.lang>div>button').on('click', function() {
		location.href = './wiki_main.html';
	});
	$('.main .search>button,#first .search>button').on('click', function() {
		location.href = './wiki_content.html';
	});
});
