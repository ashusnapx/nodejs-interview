const fs = require( "fs" ); /* All file system operations have synchronous, callback, and promise-based forms, and are accessible using both CommonJS syntax and ES6 Modules (ESM). */
const { callbackify } = require( "util" );

// creating a file synchronously
fs.writeFileSync( "read.txt", "Creating this folder using fileSync's method ie. writeFileSync. This writeFileSync is not a good approach, as this is synchronus, which means, other's have to wait, until this gets finished." )

// creating a file asynchronously
// fs.writeFile( "read2.txt", "Creating this folder using fileSync's method ie. writeFile. This writeFile is not good approach, as this is asynchronus, which means, other's don't have to wait, until this gets finished." , callback)

fs.appendFileSync( "read.txt", " this is added using append file sync method." )

const a = fs.readFileSync( "read.txt" )
console.log( a.toString() )

fs.renameSync( "read.txt", "read_updated.txt" )
