const getDiff = (filepath1, filepath2) => {
    const сurrentPath = process.cwd();
    const pathFile1 = path.resolve(сurrentPath, filepath1);
    const pathFile2 = path.resolve(сurrentPath, '/__fixtures__', filepath2);
    console.log(pathFile1);
};//`${filepath1}, ${filepath2}`;

export default getDiff; 