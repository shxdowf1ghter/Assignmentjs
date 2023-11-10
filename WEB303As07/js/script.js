$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });

        
        var modalContent = $('<div class="modal-content"></div>').append(
            $content,
            $('<span class="close-btn">&times;</span>')
        );
        $('body').append($('<div id="modal"></div>').append(modalContent));
        $('#modal').show();
        $('.close-btn').click(function () {
            $('#modal').hide();
        });
    });
});
