
// define jGallery and call it out
jGallery();
function jGallery() {
  $(".jGallery").each(function(one){

    var current = $(this);
    current.prepend("<div id='jFull'></div>");

    var images = $('.jGallery').find('img').map(function() {
      $(this).out();
      return this;
    }).get();

    $(".jGallery").append("<div id='jThumbs'></div>");

    $.each(images, function( index, value ) {
      $("#jThumbs").append("<div style='background-image:url("+value.src+");' class='jThumb'>");
    });

    current.find('.jThumb').each(function(){
      $(this).on('click', function(){
        var thisImg = $(this);

        // make thumb active
        current.find('.jThumb').each(function(){
          if(thisImg.attr("style") === $(this).attr("style")){
            $(this).addClass("active");

            var bg = $(this).css('background-image');
            bg = bg.replace('url(','').replace(')','');

            $("#jFull").empty().append("<img src='"+bg+"'>");

          } else {
            $(this).removeClass("active");
          }
        });
      });
    });
    $( ".jThumb:first" ).css( "margin-left", "0" );
    $( ".jThumb:last" ).css( "margin-right", "0" );
    $( ".jThumb:first" ).trigger( "click" );
  });
}
