const os = require( "os" );
console.log( os.arch() );

const free_memory = os.freemem();
console.log( `My free memory is ${ free_memory / 1024 / 1024 / 1024 } Gigabytes` )

const total_memory = os.totalmem();
console.log( `Total memory is ${ total_memory / 1024 / 1024 / 1024 } Gigabytes` )

console.log( os.platform() );
console.log( os.release() );
console.log( os.type() );
console.log( os.cpus() );
console.log( os.hostname() );
console.log( os.tmpdir() );