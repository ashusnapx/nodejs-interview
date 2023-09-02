const path = require( "path" );

console.log( `Current directory : ${ path.dirname("/Users/ashu/nodejs-interview/pathModule/index.js")}`)
console.log( `Extension name : ${ path.extname("/Users/ashu/nodejs-interview/pathModule/index.js")}`)
console.log( `File name : ${ path.basename("/Users/ashu/nodejs-interview/pathModule/index.js")}`)
console.log( `Parse (this basically does everything that i did above) : ${ path.parse( "/Users/ashu/nodejs-interview/pathModule/index.js" ) }` )
console.log( path.parse( "/Users/ashu/nodejs-interview/pathModule/index.js" ) );