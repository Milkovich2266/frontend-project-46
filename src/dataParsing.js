
const parsingFiles = (file, typeFiles) => {
    if (typeFiles == 'json') { 
      const objFile = JSON.parse(file);
      return objFile;
    }
    console.log('no');
};

export default parsingFiles; 