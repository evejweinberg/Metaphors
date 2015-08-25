$( "p" )
  .mouseup(function() {
    $( this ).append( "<span style='color:#f00;'>Mouse up.</span>" );
  })
  .mousedown(function() {
    $( this ).append( "<span style='color:#00f;'>Mouse down.</span>" );
  });
$(document).ready(function(){
  $('.heart-animation').each(function(){
    var $el = $(this),
      staticSrc = $el.attr('img/heartstill.png'),
      gifSrc = $el.data('img/heart.gif');

      $('.heart-ready-btn').on('click', function(_e) {
        
        $(this).attr("img/heart.gif", gifSrc);
     
    });

      $('.heartcontainer', item).on('click', function() {
        $(this).attr("img/heartstill.png", gifSrc);
    })
    $el.hover(
      function(){
        $(this).attr("img/heart.gif", gifSrc);
      },
      function(){
        $(this).attr("mg/heartstill.png", staticSrc);
      });
  });
});