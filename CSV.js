const { convertCsv } = require('./csv.parse');
const { readFileSync } = require('fs');

class CSV{
    readcsv(filep){
        try{
            const data = readFileSync(filep, 'utf8');
            return convertCsv(data);
        }
        catch(e){
            console.log(e);
        }
    }
}

exports.CSV = CSV;

