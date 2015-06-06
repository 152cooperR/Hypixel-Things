// main.js 
var client = new ZeroClipboard( document.getElementById("click-to-copy") );

client.on( "ready", function( readyEvent ) {
    client.on( "aftercopy", function( event ) {

            client.setText("test");
    } );
} );