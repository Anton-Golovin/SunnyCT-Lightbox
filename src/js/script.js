
window.onload = function(){
	var doc = document,
	linkName = doc.getElementsByClassName("minImg"),
	closeName = doc.getElementsByClassName("close"),
	prevName = doc.getElementsByClassName("prev"),
	nextName = doc.getElementsByClassName("next"),
	$minImg = $('.minImg'),
	$lightBoxWrapper = $('.lightBox-wrapper'),
	$bigImgWrapper = $('.bigImg-wrapper'),
	$navWrapper = $('.nav-wrapper'),
	$bigImg = $lightBoxWrapper.find('img');



	function showNav() {
		$navWrapper.show();
		if (linkIndex === 0) {
			$('.prev').hide();
			$('.next').show();
		} else if (linkIndex + 1 === $minImg.length) {
			$('.next').hide();
			$('.prev').show();
		} else {
			$('.prev').show();
			$('.next').show();
		}
	}

	function replaceImg(src) {
		showNav();
		$bigImg.removeClass('loadImg');
		$bigImg.attr({ src: src });
	}

	function openLigtbox(event) {
		var $imgLink = $(this).attr("href");
		window.linkIndex = $(this).index();

		replaceImg($imgLink);
		event.preventDefault();
		$lightBoxWrapper.fadeIn(500);
		$bigImgWrapper.addClass('active');
	};

	function closeLigtbox() {
		$lightBoxWrapper.fadeOut(500);
		$bigImgWrapper.removeClass('active');
	};

	function nextImg() {
		if ((linkIndex + 1) < $minImg.length) {
			var $findIndex = $minImg.eq(linkIndex + 1),
			$indexSrc = $findIndex.attr("href");

			linkIndex++;
			replaceImg($indexSrc);
		}
	};

	function prevImg() {
		if (linkIndex > 0) {
			var $findIndex = $minImg.eq(linkIndex - 1),
			$indexSrc = $findIndex.attr("href");

			linkIndex--;
			replaceImg($indexSrc);
		}
	};	

	// open
	for (var i = 0; i < linkName.length; i++) {
		linkName[i].addEventListener('click', openLigtbox);
	};
	
	//navigate 
	closeName[0].addEventListener('click', closeLigtbox);
	nextName[0].addEventListener('click', nextImg);
	prevName[0].addEventListener('click', prevImg);
}; 