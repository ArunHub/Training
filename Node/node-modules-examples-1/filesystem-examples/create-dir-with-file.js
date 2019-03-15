const fs = require('fs');

// fs.mkdir("junk", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     fs.readFile('package.json', 'utf8', (err, data) => {
//         fs.writeFile('./junk/package-copy.json', data, err => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             console.log('directory and file created successfully');
//         })
//     })
// })

function createDir() {
    return new Promise((resolve, reject) => {
        fs.mkdir("junk1", (err) => {
            if (err) {
                reject(err);
            }
            resolve("folder created");
        })
    })
}

function readFileDir() {
    return new Promise((resolve, reject) => {
        fs.readFile('package.json', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data.toString());
        })
    })
}

function writeFileinDir(content) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./junk1/package-copy1.json', content, err => {
            if (err) {
                reject(err);
            }
            resolve('junk1 packagejson written');
        })
    })
}

(async()=>{
    let create = await createDir();
    let content = await readFileDir();
    let write = await writeFileinDir(content);
    console.log(write);
    
})();
