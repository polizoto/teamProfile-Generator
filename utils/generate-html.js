const fs = require('fs');
const dir = './dist/';

const writeFile = fileContent => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'HTML file created!'
        });
      });
    });
  };

  const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
       fs.copyFile('./src/style.css', './dist/style.css', err => {
    if (err) {
    reject(err);
      return;
    }
    console.log('Style sheet copied successfully!');
  });
        resolve({
          ok: true,
          message: 'File copied!'
        });
      });
    }

    module.exports = {
        writeFile: writeFile,
        copyFile: copyFile
      };