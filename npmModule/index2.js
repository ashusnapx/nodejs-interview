var figlet = require( "figlet" );

figlet( "Far From Over - Kr$na!!", function ( err, data ) {
    if ( err ) {
        console.log( "Something went wrong..." );
        console.dir( err );
        return;
    }
    console.log( data );
} );