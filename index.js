const { readcsv } = require('./readcsv');
require('dotenv').config();


let readC1 = readcsv(process.env.TEST_FILE_PATH);
let readC2 = readcsv()

readC1.forEach((j) => {
    console.log(j);
})





