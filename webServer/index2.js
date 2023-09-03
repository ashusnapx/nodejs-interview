const http = require( "http" );

const server = http.createServer( (req, res) => {
    if ( req.url === '/' )
    {
        res.end( "Homepage" );
    }
    else if ( req.url === '/contact' )
    {
        res.end( "contact" );
    }
    else
    {
        res.writeHead( 404, { "Content-type": "text/html" } );
        res.end( "<h1>This page doesn't exists</h1>" );
    }
} )

server.listen( "8000", "127.0.0.1", () => {
    console.log( 'Listening on port 8000' );
})