import * as XLSX from 'xlsx';
import path from 'path';

export type loginData = {
    username: string;
    password: string;
    expected: string;
    run: string;
};

export function readExcelFile(filePath: string, sheetName: string): loginData[] {
    const fullPath = path.resolve(filePath);
    console.log('full fullPath: ' + fullPath);

    const workbook = XLSX.readFile(fullPath);
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);
    //return data;
    return data as loginData[];
}