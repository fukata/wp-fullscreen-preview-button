(function($){
	$(function(){
		if ($('#wp-fullscreen-save').size() == 0) {
			return;
		}

		var $preview = $(document.createElement('div'));
		$preview.attr('id', 'wp-fullscreen-preview');
		$preview.css({
			float: 'right',
			padding: '3px 2px 0 5px'
		});
		var $previewButton = $(document.createElement('input'));
		$previewButton.attr({
			type: 'button',
			value: 'Preview',
		});
		$previewButton.addClass('button');
		$previewButton.click(function(){
			$('#post-preview').click();
		});
		$preview.append($previewButton);
		$preview.insertAfter('#wp-fullscreen-save');
	});
})(jQuery);
