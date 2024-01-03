import * as path from 'path';
import { readFileSync } from 'fs';
import parsingFiles from '../bin/dataParsing.js'

const getDiff = (filepath1, filepath2) => {
    const сurrentPath = process.cwd();
    const pathFile1 = path.resolve(сurrentPath, filepath1);
    const pathFile2 = path.resolve(сurrentPath, filepath2);
    const readFile1 = readFileSync(pathFile1, 'utf8');
    const readFile2 = readFileSync(pathFile2, 'utf8');
    parsingFiles(readFile1, readFile2); 
}; 

export default getDiff; 