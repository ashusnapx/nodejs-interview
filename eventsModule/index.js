const EventEmitter = require( 'events' );
const event = new EventEmitter();

event.on( "sayMyName", () => {
    console.log( `My name is Ashutosh Kumar` );
} )

event.emit( "sayMyName" );