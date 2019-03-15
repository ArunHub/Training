const fs = require('fs');
// console.log('start')
// let data = fs.readFileSync('package.json');
// // console.log('sync read',data.toString());
// let datawrite = ""
// fs.readFile('package.json', (err, data) => {
//     if (err) {
//         console.log(err);
//         return ;    
//     }
//     datawrite = data.toString();
//     fs.writeFile('package-copy.json', datawrite, (err)=>{
//         if (err) {
//             console.log("file write operation failed");
//         }
//         console.log("file write is success");
//     })
// });
// console.log('end');

function syneReadFile() {
    return new Promise((resolve, reject)=>{
        fs.readFile('package.json', 'utf8', (err, data)=>{
            if (err) {
                reject(err)
            }
            resolve(data);
        })
    })
}

function syncWriteFile(content) {
    return new Promise((resolve, reject)=>{
        fs.writeFile('package-copy1.json', content, (err, data)=>{
            if (err) {
                reject(err)
            }
            resolve("file updated");
        })
    })
}

(async ()=>{
    let content = await syneReadFile();
    let finalMessage = await syncWriteFile(content);
    console.log(finalMessage);
})();

