const fs = require('fs').promises;

fs.readFile('file_1.txt', 'utf8')

.then(data1 => fs.readFile('file_2.txt', 'utf8').then(data2 => ({ data1, data2 })))

.then(({ data1, data2 }) => fs.readFile('file_3.txt', 'utf8').then(data3 => ({ data1, data2, data3 })))

.then(({ data1, data2, data3 }) => {console.log(data1, data2, data3);})
.catch(err => console.error('Error reading files:', err));