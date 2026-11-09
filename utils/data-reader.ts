import path from 'path';
import {readCSVFile} from '../utils/csvReader'
import {readExcelFile} from '../utils/excelReader'
import fs from 'fs';

export function readDataFile(filePath: string, sheetName?: string) {

    const ext = path.extname(filePath).toLowerCase();

    switch(ext){
        case '.csv':
            console.log("...I am reading CSV file...")
            return readCSVFile(filePath);
        case '.xlsx': 
            console.log("...I am reading Excel file...")
            return readExcelFile(filePath, sheetName || 'Sheet1');
        case '.json':
            console.log("...I am reading Json file...")
            return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        default:
            throw new Error(`Unsupported file type: ${ext}`);
        }
}

