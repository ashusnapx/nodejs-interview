const fs = require( 'fs' );
const http = require( 'http' );
const server = http.createServer();
server.on( 'request', ( req, res ) => {
    // method - 1 (without stream)
    // fs.readFile( "input.txt", "utf-8", ( err, data ) => {
    //     if ( err ) console.log( err );
    //     res.end( data );
    // } )

    // method - 2 (with stream)
    // const readableStream = fs.createReadStream( "input.txt" );
    // readableStream.on( 'data', ( chunkData ) => {
    //     res.write( chunkData );
    // } );
    // readableStream.on( 'end', () => {
    //     res.end();
    // } );
    // readableStream.on( 'error', () => {
    //     res.end( `mistake h bro filename mein` );
    // })

    // method - 3 (with stream pipe)
    const readableStream = fs.createReadStream( "input.txt" );
    readableStream.pipe( res );
} );

server.listen("8000", "127.0.0.1")
