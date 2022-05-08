import * as fsp from 'fs/promises';

let data = await fsp.readFile('./a.txt', 'utf8')
console.log(data);


