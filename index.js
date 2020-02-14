const csv = require('csvtojson');
require('dotenv').config();


let canvasArr = [];
let newDataArr = [];

let unmatchedArr = [];
let matchedOnKey = [];
let matchedOnTwo = [];
let allMatched = [];

const csvPath = process.env.TEST_FILE_PATH1;
const newPath = process.env.TEST_FILE_PATH2

const match_val = 'course_id';

// let fullAnalysis = async (newRecord, canvasRecord) => {
//         let keys = Object.keys(newDataArr);
//         let recordArr = [];
//         keys.forEach((key) => {
            
//         });
// };

const analyzeStep1 = async (newDatacsv, canvasDataCsv, keys) => {
    newDatacsv.forEach((newRecord) => {
        let test = canvasDataCsv.find((canvasRecord) => {
            let allCheck = [];
                keys.forEach((key) => {
                    if (newRecord[key].toLowerCase() == canvasRecord[key].toLowerCase()){
                        
                        allCheck.push({
                            attribute: key,
                            shared: true
                        })
                    }
                    
                });
                
                //TODO - Push all check shared 
                let allCheckShared = [];
                allCheck.forEach((thing) => {
                    allCheckShared.push(thing.shared);
                    console.log(thing.attribute);
                })
                
        });
    });
}

const readCsvs = async (fPathCanvas, fPathNew, matchVal) => {
    const newData = await csv().fromFile(fPathNew);
    const keys = Object.keys(newData[0]);
    const canvasData = await csv().fromFile(fPathCanvas);
    const r = await canvasData

    console.log(r);
    analyzeStep1(newData, r, keys);

}



readCsvs(csvPath, newPath, match_val)



