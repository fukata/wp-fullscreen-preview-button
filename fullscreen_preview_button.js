(function($){
    $(function(){
        if ($('#wp-fullscreen-save').size() == 0 || $('#post-preview').size() == 0) {
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
            value: $('#post-preview').text(), 
        });
        $previewButton.addClass('button');

        var previewWindow = null;
        var saveCheckLimit = 10;
        var saveCheckInterval = 250;
        $previewButton.click(function() {
            var saveCheckCount = 0;
            var clickPreview = function() { $('#post-preview').click(); }
            var openPreview = function() {
                saveCheckCount++;

                var isDone = $('#wp-fullscreen-save > img').css('display') === 'none';
                if ( isDone ) {
                    clearInterval(timer);
                    clickPreview();
                } else {
                    if ( saveCheckCount >= saveCheckLimit ) {
                        clearInterval(timer);
                    }
                }
            }

            fullscreen.save();
            var timer = setInterval(openPreview, saveCheckInterval);
            if ( previewWindow && !previewWindow.closed ) {
                previewWindow.close();
                previewWindow = null;
            }
            previewWindow = window.open('about:blank', 'wp-preview');
            previewWindow.focus();
        });
        $preview.append($previewButton);
        $preview.insertAfter('#wp-fullscreen-save');
    });
})(jQuery);
