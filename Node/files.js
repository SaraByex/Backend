const fs = require("fs");

//read the file - student.txt
//syntax
//fs.readFile(pathtofile, characterencoding, callbackfunc(err))
fs.readFile("./student.txt", "utf8", (err, data)=>{
if(err){
    console.error()
}
console.log(data);
})

//write to file
// fs.writeFile(pathtofilr, data, options, callbackfn)\ if this file exists it will overite the data, else creat  // 'a' for append; use 'w' to overwrite (default) 

fs.writeFile("./student.txt", "\nHello world this is new data", { flag: 'a' }, (err) => {
    if (err) throw err;
    console.log("We have new data");
  }
);