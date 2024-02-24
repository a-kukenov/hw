const fs = require('fs')

const createHtml = () => {
    fs.appendFile("index.html", `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>`, (err) => {
        if (err) {
            console.log(err);
        }
    })
}
const createCss = () => {
    fs.mkdir('styles', () => {})
    fs.appendFile("styles/style.css", `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    `, (err) => {
        if (err) {
            console.log(err);
        }
    })
}
const createJs = () => {
    fs.appendFile("script.js", `
    const lodash = require('lodash')
    lodash.max([12, 3, -5, 57, 32])
    lodash.add([33, -23, 4, 65, 7])
    lodash.multiply([2, -7, 6, 24, 1])`, (err) => {
        if (err) {
            console.log(err);
        }
    })
}
const deleteAll = () => {
    if(fs.existsSync('./index.html')){
        fs.unlink('index.html', (err) => {})
    }
    if(fs.existsSync('./styles/style.css')){
        fs.unlink('styles/style.css', (err) => {
            
        })
        setTimeout(() => {fs.rmdir('./styles', (err) => {if(err) throw err;})}, 10)
    }
}

createHtml();
createCss();
createJs();
deleteAll();