const csv = require('csvtojson');
const size = require('filesize');

const fs = require('fs');
require('dotenv').config();


let canvasArr = [];
let newDataArr = [];

let unmatchedArr = [];
let matched = [];

const csvPath = process.env.TEST_FILE_PATH1;
const newPath = process.env.TEST_FILE_PATH2


const stats = fs.statSync(csvPath);

const fileSizeMB = size(stats.size, {round: 0});
console.log(fileSizeMB)

const match_val = 'course_id';

// let fullAnalysis = async (newRecord, canvasRecord) => {
//         let keys = Object.keys(newDataArr);
//         let recordArr = [];
//         keys.forEach((key) => {
            
//         });
// };

const findKeys = async (newKeys, canvasKeys) => {
    let commonKeys = [];
    try{ 
        newKeys.forEach((key) => {
            if (canvasKeys.includes(key)){
                commonKeys.push(key);
            }
        })
        return commonKeys;

    }catch(e){
        return `Error ${e}`;
    }
};


const splitInTwo = (csvD) => {

};

const analyzeStep1 = async (newDatacsv, canvasDataCsv, keys) => {
    let allCheck = [];
    
    newDatacsv.forEach((newRecord) => {
        let test = canvasDataCsv.find((canvasRecord) => {
            
                keys.forEach((key) => {
                    
                    if (newRecord[key].toLowerCase() == canvasRecord[key].toLowerCase()){
                        
                        matched.push({
                            newRecord: newRecord,
                            valMatch: newRecord[key],
                            attribute: key,
                            shared: true
                        })
                    }
                    else{
                        unmatchedArr.push({
                            newRecord: newRecord,
                            valMatch: newRecord[key],
                            attribute: key,
                            shared: false
                        })
                    }
                    
                });
                
            newDatacsv.shift();
            

                
                
                
        });
        
        canvasDataCsv.shift();
    });
    
    
}

const main = async (fPathCanvas, fPathNew, matchVal) => {
    const newData = await csv().fromFile(fPathNew);
    const newKeys = Object.keys(newData[0]);
    const canvasData = await csv().fromFile(fPathCanvas);
    const fCanvasData = await canvasData;
    console.log(fCanvasData.length);
    const canvasKeys = Object.keys(canvasData[0]);
   

    let commonKeys = await findKeys(newKeys, canvasKeys);
    let fCommonKeys = await commonKeys;
    //console.log(fCommonKeys);
    

    
    await analyzeStep1(newData, fCanvasData, fCommonKeys);
    console.log(matched.length);
    console.log(unmatchedArr.length);
    // matched.forEach((match) => {
    //     console.log(match);
    // })

}



main(csvPath, newPath, match_val)



