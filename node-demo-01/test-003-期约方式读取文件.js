// const fsp = require('fs/promises')
import * as fsp from 'fs/promises';

// fsp.readFile('./a.txt', 'utf8')
//     .then(data => {
//         console.log('读取的内容', data);
//     })

// 立即执行异步匿名函数
;(async () => {
    let data = await fsp.readFile('./a.txt', 'utf8')
    console.log(data)
})();

// 千行代码bug率


