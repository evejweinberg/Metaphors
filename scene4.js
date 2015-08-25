$( document ).ready(function() {
$( "box-btn" )
  .mouseup(function() {
    $( this ).append( ".box" );
  })
  .mousedown(function() {
    $( this ).append( "<span style='color:#00f;'>Mouse down.</span>" );
  });

});