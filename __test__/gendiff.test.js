import getDiff from '../src/getDiff.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


test ('genDiff', () => {
    expect(getDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(`{
      - follow: false
      host: hexlet.io
      - proxy: 123.234.53.22
      - timeout: 50
      + timeout: 20
      + verbose: true
    }`);
});

