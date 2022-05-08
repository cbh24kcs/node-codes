const fs = require('fs')

// 回调
fs.readFile('./a.txt', 'utf8', function (error, data) {
    if (error) {
        console.log(error);
        return;
    }
    console.log('读取的内容: ', data);
})

// function 异步读取文件(文件路径, 文件编码, 读完了文件之后要调用的函数) {
//     setTimeout(() => {
//         let 读取到的数据 = fs.readFileSync('./a.txt', 'utf8');
//         let 读取的错误 = undefined;
//         读完了文件之后要调用的函数(读取的错误, 读取到的数据)
//     });
// }

// 异步读取文件('./a.txt', 'utf8', 文件读取完了之后要做的事情);

console.log('异步读取执行完了');