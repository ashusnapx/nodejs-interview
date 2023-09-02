const http = require( 'http' );

const server = http.createServer( ( req, res ) => {
    if ( req.url === '/getName' ) {
        const names = generateRandomNames( 10 );
        res.writeHead( 200, { 'Content-Type': 'application/json' } );
        res.end( JSON.stringify( names ) );
    } else {
        // Handle other routes
        res.writeHead( 200, { 'Content-Type': 'text/plain' } );
        res.end( 'Hello, this is Ashutosh' );
    }
} );

server.listen( 8000, '127.0.0.1', () => {
    console.log( 'Listening on port 8000' );
} );

function generateRandomNames( count ) {
    const names = [];
    const sampleNames = [ 'Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Hannah', 'Ivy', 'Jack' ];

    for ( let i = 0; i < count; i++ ) {
        const randomIndex = Math.floor( Math.random() * sampleNames.length );
        names.push( sampleNames[ randomIndex ] );
    }

    return names;
}
