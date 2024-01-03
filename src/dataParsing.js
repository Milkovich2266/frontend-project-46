
const parsingFiles = (file1, file2) => {
    const objFile1= JSON.parse(file1);
    const objFile2= JSON.parse(file2);
    const result = [ objFile1, objFile2 ];
    console.log(result);
};

export default parsingFiles; 