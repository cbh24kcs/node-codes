const fs =require('fs')
// Sync 同步
let result = fs.readFileSync('./a.txt', 'utf8');

console.log(result);


