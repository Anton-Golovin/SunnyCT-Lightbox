;(function lightbox() {
	var doc = document,
	linkName = doc.getElementsByClassName("minImg"),
	closeName = doc.getElementsByClassName("close"),
	overlayName = doc.getElementsByClassName("overlay"),
	prevName = doc.getElementsByClassName("prev"),
	nextName = doc.getElementsByClassName("next"),
	$minImg = $('.minImg'),
	$lightBoxWrapper = $('.lightBox-wrapper'),
	$bigImgWrapper = $('.bigImg-wrapper'),
	$navWrapper = $('.nav-wrapper'),
	$bigImg = $('.bigImg'),
	$loadImg = $('.loadImg');



	function showNav() {
		if (linkIndex === 0) {
			$('.prev').hide();
			$('.next').show();
		} else if (linkIndex + 1 === $minImg.length) {
			$('.next').hide();
			$('.prev').show();
		} else {
			$('.prev').show();
			$('.next').show();
		};
		$navWrapper.show();
	};

	function changeSize() {
		var	imgWidth = $('.bigImg').prop('naturalWidth'),
		imgHeight = $('.bigImg').prop('naturalHeight'),
		maxWidth  = Math.floor($(window).width()*0.7),
		maxHeight = Math.floor($(window).height()*0.7),
		newWidth = Math.floor(imgWidth/(imgHeight/maxHeight)),
		newHeight = Math.floor(imgHeight/(imgWidth/maxWidth)),
		diffWidth = imgWidth - maxWidth,
		diffHeight = imgHeight - maxHeight;

		if (diffHeight > 0 && diffHeight > diffWidth) {
			var marginTop = Math.floor(-(maxHeight/2)-10);

			$bigImgWrapper.css({'margin-top' : marginTop})
			$bigImgWrapper.width(newWidth);
			$bigImgWrapper.height(maxHeight);
		} else if (diffWidth > 0) {
			var marginTop = Math.floor(-(newHeight/2)-10);

			$bigImgWrapper.css({'margin-top' : marginTop})
			$bigImgWrapper.width(maxWidth);
			$bigImgWrapper.height(newHeight);
		} else {
			var marginTop = Math.floor(-(imgHeight/2)-10);

			$bigImgWrapper.css({'margin-top' : marginTop})
			$bigImgWrapper.width(imgWidth);
			$bigImgWrapper.height(imgHeight);
		}
	};


	function changeImg(src){
		$.ajax({
			type: "POST",
			url: src,
			beforeSend: function(){
				showNav();
				$navWrapper.hide();
				$bigImg.fadeOut(500);
				$loadImg.show();
			},
			success: function() {
				setTimeout(function(){
					$bigImg.attr({ src: src });
				}, 500);
			},
			complete: function(){	
				setTimeout(function(){
					changeSize();
				}, 1500);
				setTimeout(function(){
					$loadImg.hide();
					$bigImg.fadeIn(500);
				}, 2500);
				setTimeout(function(){
					$navWrapper.show();
				}, 3000);
			}
		});
	};

	function openLigtbox(event) {
		var $imgLink = $(this).attr("href");
		window.linkIndex = $(this).index();

		changeImg($imgLink);
		event.preventDefault();
		$lightBoxWrapper.fadeIn(500);
		$bigImgWrapper.addClass('active');
	};

	function closeLigtbox() {
		$bigImg.fadeOut(500);
		$lightBoxWrapper.fadeOut(500);
		$bigImgWrapper.removeClass('active');
		setTimeout(function(){
			$loadImg.show();
			$bigImgWrapper.width(200);
			$bigImgWrapper.height(200);
		}, 500);
	};

	function prevImg() {
		if (linkIndex > 0) {
			var $findIndex = $minImg.eq(linkIndex - 1),
			$indexSrc = $findIndex.attr("href");

			linkIndex--;
			changeImg($indexSrc);
		}
	};

	function nextImg() {
		if ((linkIndex + 1) < $minImg.length) {
			var $findIndex = $minImg.eq(linkIndex + 1),
			$indexSrc = $findIndex.attr("href");

			linkIndex++;
			changeImg($indexSrc);
		}
	};	

	// open
	for (var i = 0; i < linkName.length; i++) {
		linkName[i].addEventListener('click', openLigtbox);
	};
	
	//navigate 
	closeName[0].addEventListener('click', closeLigtbox);
	overlayName[0].addEventListener('click', closeLigtbox);
	nextName[0].addEventListener('click', nextImg);
	prevName[0].addEventListener('click', prevImg);
})();