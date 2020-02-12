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

let fullAnalysis = async (newRecord, canvasRecord) => {
        let keys = Object.keys(newDataArr);
        let recordArr = [];
        keys.forEach((key) => {
            
        });
};


const readCsvs = async (fPathCanvas, fPathNew, matchVal) => {
    const newData = await csv().fromFile(fPathNew);
    const canvasData = await csv().fromFile(fPathCanvas);
    const keys = Object.keys(canvasData[0]);
    
    newData.forEach((newRecord) => {
        let test = canvasData.find((canvasRecord) => {
            // console.log(canvasRecord[matchVal]);
            // console.log(newRecord[matchVal]);
            //return newRecord[matchVal] == canvasRecord[matchVal];
            let allCheck = [];
            keys.forEach((key) => {
                if (newRecord[key].toLowerCase() == canvasRecord[key].toLowerCase()){
                    
                    allCheck.push({
                        attribute: key,
                        shared: true
                    })
                }
                
            })
            //TODO - Figure out why this check isn't passing for current test data
            if (!allCheck.shared.includes(false)){
                allMatched.push(newRecord);
            }
        })
        

        if (test != undefined){
            console.log(test);
        }
    })
}



readCsvs(csvPath, newPath, match_val)



