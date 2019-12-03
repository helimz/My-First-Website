input = $( ":button" ).addClass( "marked" );
$( "div" ).text( "For this type jQuery found " + input.length + "." );
// Prevent the form from submitting
$( "form" ).submit(function( event ) {
  event.preventDefault();
});
