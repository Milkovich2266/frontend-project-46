import * as path from 'path';
import { readFileSync } from 'fs';
import parsingFiles from '../src/dataParsing.js'

const getDiff = (filepath1, filepath2) => {
    const typeFile1 = path.extname(filepath1).slice(1);
    const typeFile2 = path.extname(filepath2).slice(1);

    const сurrentPath = process.cwd();
    const pathFile1 = path.resolve(сurrentPath, filepath1);
    const pathFile2 = path.resolve(сurrentPath, filepath2);
    const readFile1 = readFileSync(pathFile1, 'utf8');
    const readFile2 = readFileSync(pathFile2, 'utf8');

    parsingFiles(readFile1, typeFile1); 
    parsingFiles(readFile2, typeFile2);

}; 



export default getDiff; 