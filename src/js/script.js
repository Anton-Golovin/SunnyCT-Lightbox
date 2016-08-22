window.onload = function(){
	var doc = document;
	linkName = doc.getElementsByClassName("minImg"),
	closeName = doc.getElementsByClassName("close"),
	overlayName = doc.getElementsByClassName("overlay"),
	$lightbox = $('.lightbox-wrapper'),
	$bigImg = $lightbox.find('img'),
	$bigImgWrapper = $('.bigImgWrapper');

	function openLigtbox(event) {
		var $imgLink = $(this).attr("href");

		$lightbox.fadeIn(500);
		$bigImgWrapper.addClass('active');
		event.preventDefault();
	};

	function closeLigtbox(event) {
		$lightbox.fadeOut(500);
		$bigImgWrapper.removeClass('active');
		event.preventDefault();
	};

	function addImgSrc(event) {
		var $imgLink = $(this).attr("href");

		$bigImg.removeClass('loading');
		$bigImg.attr({ src: $imgLink });
	};

	for (var i = 0; i < linkName.length; i++) {
		linkName[i].addEventListener('click', openLigtbox);
		linkName[i].addEventListener('click', addImgSrc);
	};

	closeName[0].addEventListener('click', closeLigtbox);
	overlayName[0].addEventListener('click', closeLigtbox);
}; 