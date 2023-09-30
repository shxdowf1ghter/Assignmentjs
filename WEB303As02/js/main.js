// WEB303 Assignment 2
$(document).ready(function () {
    $('#prospect').click(function (event) {
      event.preventDefault();
      loadContent('prospect.html');
    });
  
    $('#convert').click(function (event) {
      event.preventDefault();
      loadContent('convert.html');
    });
  
    $('#retain').click(function (event) {
      event.preventDefault();
      loadContent('retain.html');
    });
  
    function loadContent(fileName) {
      $('#content').fadeOut(300, function () {
        $(this).empty();
        $.ajax({
          url: fileName,
          dataType: 'html',
          success: function (data) {
            $('#content').html(data).fadeIn(); 
          },
          error: function () {
            alert('An error occurred while loading content.');
          }
        });
      });
    }
  });
  

