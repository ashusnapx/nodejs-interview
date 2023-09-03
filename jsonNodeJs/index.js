const myDetails = {
    "name": "Ashutosh Kumar",
    "college": "Jabalpur Engineering College",
    "intrests": "Frontend Development",
    "age" : 45
}

const jsonData = JSON.stringify( myDetails );
// const objectData = JSON.parse( jsonData );
// console.log( `This is my JSON data ${jsonData}` );
// console.log( myDetails );
// console.log( objectData );

const fs = require( 'fs' );
fs.writeFile( 'jsonData.json', jsonData, (err) => {
    console.log( "file is created successfully by you Ashutosh!" )
    console.log( err );
} );
fs.readFile( "jsonData.json", "utf-8", ( err, data ) => {
    console.log( JSON.parse(data) );
    console.log( err );
} )