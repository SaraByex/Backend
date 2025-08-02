//create a folder and inside the folder create a file
// write to the file and output what you have written.
//create a function that use the fs.createWriteStream,
//write 3 or 4 or mor sentence in chunks to one file
// output the whole sentence

const fs = require('fs');

fs.writeFile("./friends.txt", "This is what i want to read", (err) => {
    if(err) throw err;
    console.log("We have new data");

});
//// for stream


let phrases = "I knew it from the start\nYou would break my car\nNow I see it's true\nCan I take you to lunch?";

const stream = fs.createWriteStream("./many.txt");
stream.write(phrases);
stream.end();
stream.on('finish', () => {console.log("We have a lot of new information");});
stream.on('error', (err) => {throw err;});

