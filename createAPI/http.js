const http = require( 'http' );
const fs = require( 'fs' );
const server = http.createServer( ( req, res ) => {

    const data = fs.readFileSync( "./userApi.json", "utf-8" );
    const objectData = JSON.parse( data );


    if ( req.url === "/" ) {
        res.end( "Home Page" )
    }
    else if ( req.url === "/contact" ) {
        res.end( "Contact Page" )
    }
    else if ( req.url === "/userApi" ) {
        res.writeHead(200, {"content-type":"application/json"})
        res.end( objectData[ 2 ].name );
    }
    else {
        res.writeHead( 404, { "Content-type": "text / html" } );
        res.end( "<h1>75 Days of Hard Challenge</h1>" )
    }
} )
server.listen( "8000", "127.0.0.1", () => {
    console.log( 'Listening on port 8000' );
} )