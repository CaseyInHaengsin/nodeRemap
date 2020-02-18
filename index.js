const csv = require('csvtojson');
const size = require('filesize');

const fs = require('fs');
require('dotenv').config();


let canvasArr = [];
let newDataArr = [];

let unmatchedArr = [];
let matchedOnKey = [];

const csvPath = process.env.TEST_FILE_PATH1;
const newPath = process.env.TEST_FILE_PATH2


const stats = fs.statSync(csvPath);

const fileSizeMB = size(stats.size, {round: 0});
console.log(fileSizeMB)

const match_val = 'user_id';

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

const analyzeStep1 = async (newDatacsv, canvasDataCsv, keys, matching_val) => {
    let allCheck = [];
    newDatacsv.forEach((newRecord) => {
        let valCheck = newRecord[matching_val];
        let matchOnk = canvasDataCsv.find((el) => {
            return valCheck == el[matching_val]
        });
        if (matchOnk != undefined){
            console.log(matchOnk)
        }else{
            unmatchedArr.push(newRecord);
        }
        
    });
    
}

const main = async (fPathCanvas, fPathNew, matchVal) => {
    const newData = await csv().fromFile(fPathNew);
    const newKeys = Object.keys(newData[0]);
    const canvasData = await csv().fromFile(fPathCanvas);
    const fCanvasData = await canvasData;
    
    const canvasKeys = Object.keys(canvasData[0]);
   

    let commonKeys = await findKeys(newKeys, canvasKeys);
    let fCommonKeys = await commonKeys;
    //console.log(fCommonKeys);
    

    
    await analyzeStep1(newData, fCanvasData, fCommonKeys, matchVal);
    // console.log(matched.length);
    // console.log(unmatchedArr);
    //console.log(unmatchedArr.length);
    // matched.forEach((match) => {
    //     console.log(match);
    // })

}



main(csvPath, newPath, match_val)



