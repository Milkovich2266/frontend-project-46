import * as path from 'path';
import { readFileSync } from 'fs';
import parsingFiles from '../src/dataParsing.js'
import _ from 'lodash';

let acc = [];

const getDeepEqual = (file1, file2) => {
  const arrayFile1 = Object.keys(file1);
  const arrayFile2 = Object.keys(file2);
  const combineArrays = _.union(arrayFile1, arrayFile2);
  const turnOverCombiArrays = _.sortBy(combineArrays);

  const diff = turnOverCombiArrays.map((key) => {
    if (!_.has(file1, key)) {
      console.log({key, value: file2[key], type: 'added'});
      return {key, value: file2[key], type: 'added'}; 
  }
    if (!_.has(file2, key)) {
      return {key, value: file1[key], type: 'deleted'};
    }
    if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      return {key, value: getDeepEqual(file1[key], file2[key]), type: 'inside'};
    }
    if (!_.isEqual(file1[key], file2[key])) {
      return {key, value1: file1[key], value2: file2[key], type: 'modified',
      };
    }  
    return { key, value: file1[key], type: 'unmodified' };
  });
  /*return convertToString(turnOverCombiArrays, arrayFile1, arrayFile2, file1, file2);*/
  return diff; // Тут мы получили дерево наших файлов
};

//convertToString и ifFileIncludesKey - это наследие от первой версии функции для получения строки. Не знаю, нужны ли они теперь? И в таком ли виде? 

const ifFileIncludesKey = (arrayFile1, arrayFile2, file1, file2, key) => {
  if (_.isEqual(file2[key], file1[key])) {
    return `    ${key}: ${file1[key]}\n`; 
  } else if (!arrayFile1.includes(key)) {
    return `  + ${key}: ${file2[key]}\n`;
  } else if (!arrayFile2.includes(key)) { 
    return `HELP  - ${key}: ${file1[key]}\n`;//эта строка никогда не отрабатывает
  } else if (_.isObject(file1[key]) && _.isObject(file2[key])) {
    return ` ${key}: {\n${getDeepEqual(file1[key], file2[key])}\n}`; 
   }
};

const convertToString = (turnOverCombiArrays, arrayFile1, arrayFile2, file1, file2) => {
  (() => { turnOverCombiArrays.map((key) => {
    if (arrayFile2.includes(key)) {
      acc += ifFileIncludesKey(arrayFile1, arrayFile2, file1, file2, key);
    } else {
      acc += `  - ${key}: ${file1[key]}\n`;
      }
  });        
})();
  return acc;
};

const getStart = () => {
  //console.log(`{AAA\n${getDeepEqual(file1, file2)}}`);
  return (`{\n${getDeepEqual(file1, file2)}}`);
}


const getDiff = (filepath1, filepath2) => {
    const typeFile1 = path.extname(filepath1).slice(1);
    const typeFile2 = path.extname(filepath2).slice(1);

    // eslint-disable-next-line no-undef
    const сurrentPath = process.cwd();
    const pathFile1 = path.resolve(сurrentPath, filepath1);
    const pathFile2 = path.resolve(сurrentPath, filepath2);
    const readFile1 = readFileSync(pathFile1, 'utf8');
    const readFile2 = readFileSync(pathFile2, 'utf8');

    const parsingFil1 = parsingFiles(readFile1, typeFile1); 
    const parsingFil2 = parsingFiles(readFile2, typeFile2);
    return getDeepEqual(parsingFil1, parsingFil2);
}; 


export default getDiff; 