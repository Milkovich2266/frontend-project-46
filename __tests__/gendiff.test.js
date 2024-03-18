import getDiff from '../src/getDiff.js';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import { test, expect } from '@jest/globals';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

const readfile1 = readFixture('file1.json');
const readFile2 = readFixture('file2.json');
const readExpectedFile = readFixture('expected_file.txt');


test ('genDiff', () => {
    expect(getDiff(readfile1, readFile2)).toEqual(readExpectedFile);
});

