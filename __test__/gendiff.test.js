import getDiff from '../src/getDiff.js';
import { fileURLToPath } from 'url';
import { dirname, path } from 'path';
import { test, expect } from '@jest/globals';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);


test ('genDiff', () => {
    expect(getDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(getFixturePath('expected_file.txt'));
});

