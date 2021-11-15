const request = require('request');
const fs = require('fs');

    let url = process.argv[2]; //the third command line argument at index 2 is saved to the variable url and the next commaline argument will be the file path
    let filePath = process.argv[3];

    request(url, (error, res, body) => {
        fs.writeFile(`${filePath}`, body, function(error) {
            if (error) {
                console.log('There is an error: ', error);
            } else {
                //will print the byte size by the content legth of the header inside the reponse and the filepath
                console.log(`Downloaded and saved ${res.headers["content-length"]} bytes to ${filePath}`);
            }
        });
    });