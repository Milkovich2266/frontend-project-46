
import yaml from 'js-yaml';

const parsingFiles = (file, typeFiles) => {
    if (typeFiles == 'json') { 
      const objFile = JSON.parse(file);
      return objFile;
    }
    if (typeFiles == 'yml' || typeFiles == 'yaml') {
      const objFile = yaml.load(file);
      return objFile;
    }
    console.log('no');
};

export default parsingFiles; 