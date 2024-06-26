import getDiff from '../src/getDiff.js';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import { test, expect } from '@jest/globals';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//const format = (pathFile) => path.extname(pathFile);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

const getPathFile1 = getFixturePath(`file1.json`);
const getPathFile2 = getFixturePath(`file2.json`); 

const getPathFile1Yml = getFixturePath(`file1.yml`);
const getPathFile2Yml = getFixturePath(`file2.yml`); 

const readExpectedFile = readFixture('expected_file.txt');



test ('genDiff', () => {
    expect(getDiff(getPathFile1, getPathFile2)).toEqual(readExpectedFile);
    expect(getDiff(getPathFile1Yml, getPathFile2Yml)).toEqual(readExpectedFile); 
});

