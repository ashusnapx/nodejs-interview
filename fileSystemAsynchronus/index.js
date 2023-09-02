const fs = require( "fs" );

// fs.writeFile( "read.txt", "Hi, this is made using asynchronus method.", (err) => {
//     console.log( "file is created successfully by you Ashutosh!" )
//     console.log( err );
// } )

// fs.appendFile( "read.txt", " Samsung galaxy S21 FE is a beast with snapdragon 8+Gen1", (err) => {
//     console.log( "This was the append method" );
//     console.log( err );
// })

fs.readFile( "read.txt", "utf-8", (err, data) => {
    console.log( data );
    console.log( err );
} )
