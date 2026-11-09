import fs from 'fs';
import {parse} from 'csv-parse/sync';
import path  from 'path';

export function readCSVFile(filePath: string){
    const fullPath = path.resolve(filePath);
    const fileContent = fs.readFileSync(fullPath);

    const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true
    });

    return records;
}