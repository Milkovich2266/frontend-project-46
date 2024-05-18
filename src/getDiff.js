import * as path from 'path';
import { readFileSync } from 'fs';
import parsingFiles from '../src/dataParsing.js'
import _ from 'lodash';

const getTree = (file1, file2) => {
  const arrayFile1 = Object.keys(file1);
  const arrayFile2 = Object.keys(file2);
  const combineArrays = _.union(arrayFile1, arrayFile2);
  const turnOverCombiArrays = _.sortBy(combineArrays);

  const diff = turnOverCombiArrays.map((key) => { //создание дерева с необходимым типом
    if (!_.has(file1, key)) {
      console.log({key, value: file2[key], type: 'added'});
      return {key, value: file2[key], type: 'added'}; 
  }
    if (!_.has(file2, key)) {
      return {key, value: file1[key], type: 'deleted'};
    }
    if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      return {key, value: getTree(file1[key], file2[key]), type: 'inside'}; // тут в value undefined
    }
    if (!_.isEqual(file1[key], file2[key])) {
      return {key, value1: file1[key], value2: file2[key], type: 'modified',
      };
    }  
    return { key, value: file1[key], type: 'unmodified' };
  });
  return diff; 
};

const checkByType = (tree) => { //проверка типа
  return tree.map((node) => {
    if (node['type'] == 'added') {
      return `+ ${node.key}: ${node.value}\n`;
    }
    if (node['type'] == 'deleted') {
      return `- ${node.key}: ${node.value}\n`;
    }
    if (node['type'] == 'inside') {
      return `${node.key}: {\n${checkByType(node.value)}\n}`; //тут, соответственно тоже в value undefined
    }
    if (node['type'] == 'modified') {
      return `- ${node.key}: ${node.value1}\n + ${node.key}: ${node.value2}\n`;
    }
    if (node['type'] == 'unmodified') {
      return `${node.key}: ${node.value1}\n`;
    }
  })
};

const convertToString = (data, depth) => {
  if (!_.isPlainObject(data)){
    return `${String(data)}\n`; 
  }

  const indent = (depth, spaceCount = 4) => ' '.repeat(depth * spaceCount - 2);

  const result = Object.entries(data)
  .map(([key, value]) => convertToString(value, depth));
  return `{\n${result.join('')}${indent(depth - 1)}  }\n`;
};

const getStart = () => {
  //console.log(`{AAA\n${getDeepEqual(file1, file2)}}`);
  return (`{\n${getTree(file1, file2)}}`);
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
    return getTree(parsingFil1, parsingFil2);
}; 


export default getDiff; 