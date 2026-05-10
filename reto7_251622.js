function decodeFilename(filename) {
    const primerGuionBajo = filename.indexOf('_');
    const ultimoPunto = filename.lastIndexOf('.');
    return filename.substring(primerGuionBajo + 1, ultimoPunto);
}

console.log(decodeFilename('2023122512345678_gameAssets.png.tmp'));
//"gameAssets.png"

console.log(decodeFilename('42_user-data.json.backup'));
// "user-data.json"

console.log(decodeFilename('987654321_level-1-config.csv.old'));
// "level-1-config.csv"