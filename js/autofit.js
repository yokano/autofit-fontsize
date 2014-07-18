$(function() {
	var image = new Image(),
		baseWidth = 0,
		baseHeight = 0,
		baseFontSize = 30,
		target = $('#target');
	
	image.src = 'img/sample.png';
	image.onload = function() {
		baseWidth = this.width;
		baseHeight = this.height;
		bindEvent();
	}
	
	function bindEvent() {
		$(window).on('resize', function() {
			var scale = 0;
			
			scale = target.width() / baseWidth;
			target.height(baseHeight * scale).css('font-size', baseFontSize * scale + 'px');
		});
		$(window).trigger('resize');
	}
});