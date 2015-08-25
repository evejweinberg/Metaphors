$( document ).ready(function() {
 
    $( ".box-btn" ).click(function( event ) {
 
        // alert( "Thanks for visiting!" );
        $( "a" ).addClass( "test" );
        $( ".box" ).addClass( "box-stroke" );
        // $( this ).hide( "slow" ); //find the origional class and slowly make it hidden
   
 
    });


$( document ).on( "mousemove", function( event ) {
  $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
});
 
  $( ".target" ).change(function() {
  alert( "Handler for .change() called." );
}); 


  $( "select" )
  .change(function () {
    var str = "Duh, ";
    $( "select option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( ".div2" ).text( str );
  })
  .change();



});



 












