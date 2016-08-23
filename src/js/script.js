
window.onload = function(){
	var doc = document,
	linkName = doc.getElementsByClassName("minImg"),
	closeName = doc.getElementsByClassName("close"),
	prevName = doc.getElementsByClassName("prev"),
	nextName = doc.getElementsByClassName("next"),
	$minImg = $('.minImg'),
	$lightbox = $('.lightbox-wrapper'),
	$bigImg = $lightbox.find('img'),
	$bigImgWrapper = $('.bigImgWrapper');

	function replaceImg(src) {
		$bigImg.attr({ src: src });
	}

	function openLigtbox(event) {
		var $imgLink = $(this).attr("href");
		window.linkIndex = $(this).index();

		$bigImg.removeClass('loading');
		replaceImg($imgLink);
		event.preventDefault();
		$lightbox.fadeIn(500);
		$bigImgWrapper.addClass('active');
	};

	function closeLigtbox() {
		$lightbox.fadeOut(500);
		$bigImgWrapper.removeClass('active');
	};

	function nextImg() {
		if ((linkIndex + 1) < $minImg.length) {
			var $findIndex = $minImg.eq(linkIndex + 1),
			$indexSrc = $findIndex.attr("href");

			linkIndex++;
			replaceImg($indexSrc);
		} else {
			console.log('this is last img');
		}
	};

	function prevImg() {
		if (linkIndex > 0) {
			var $findIndex = $minImg.eq(linkIndex - 1),
			$indexSrc = $findIndex.attr("href");

			linkIndex--;
			replaceImg($indexSrc);
		} else {
			console.log('this is first img');
		}
	};	

	for (var i = 0; i < linkName.length; i++) {
		linkName[i].addEventListener('click', openLigtbox);
	};

	closeName[0].addEventListener('click', closeLigtbox);

	nextName[0].addEventListener('click', nextImg);
	prevName[0].addEventListener('click', prevImg);
}; 