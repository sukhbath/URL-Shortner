var $ = require('jquery')
$(document).ready(function () {
    $('#shorten').click(function (e) { 
      const url =$("#input input").val();
      $.post("url", {url},function (data, textStatus, jqXHR) {
              $('#shortened-url').val(data);
          }
      );
        
    });
});