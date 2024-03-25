import getDiff from '../src/getDiff.js';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import { test, expect } from '@jest/globals';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const format = path.extname(path); //добавил

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

const getPathFile1 = getFixturePath(`file1.${format}`); //изменил с file1.json
const getPathFile2 = getFixturePath(`file2.${format}`); //изменил
const readExpectedFile = readFixture('expected_file.txt');

const readExpextedFileYml = readFixture('expected_file_yml.txt');


test ('genDiff', () => {
    expect(getDiff(getPathFile1, getPathFile2)).toEqual(readExpectedFile);
    expect(getDiff(getPathFile1, getPathFile2)).toEqual(readExpextedFileYml); //добавил
});

