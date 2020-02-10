const { convertCsv } = require('./csv.parse');
const { readFileSync } = require('fs');

function readcsv(filep){
    try{
        const data = readFileSync(filep, 'utf8');
        return convertCsv(data);
    }
    catch(e){
        console.log(e);
    }
};

module.exports = {
    readcsv: readcsv
}

