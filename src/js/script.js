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

		$lightbox.show();
		setTimeout(function(){$bigImgWrapper.addClass('active');}, 0);
		event.preventDefault();
	};

	function closeLigtbox(event) {

		$bigImgWrapper.removeClass('active');
		$lightbox.hide();
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