
const parsingFiles = (file, typeFiles) => {
    if (typeFiles == JSON) { 
      const objFile = JSON.parse(file);
      return objFile;
    }
};

export default parsingFiles; 