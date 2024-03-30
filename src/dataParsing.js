
import yaml from 'js-yaml';

const parsingFiles = (file, typeFiles) => {
    if (typeFiles == 'json') { 
      const objFile = JSON.parse(file);
      return objFile;
    }
    if (typeFiles == 'yml' || typeFiles == 'yaml') {
      const objFileYml = yaml.load(file);
      return objFileYml;
    }
    console.log('no');
};

export default parsingFiles; 