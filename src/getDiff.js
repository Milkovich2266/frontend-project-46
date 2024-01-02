const getDiff = (filepath1, filepath2) => {
    const сurrentPath = process.cwd();
    const pathFile1 = path.resolve(сurrentPath, '/__fixtures__', filepath1);
    const pathFile2 = path.resolve(сurrentPath, '/__fixtures__', filepath2);
    console.log(pathFile1);
    /*const readFile1 = readFileSync(pathFile1);
    const readFile2 = readFileSync(pathFile2);*/
}; 

export default getDiff; 