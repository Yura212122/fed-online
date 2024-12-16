const path = require('path');

module.exports = {
    mode:'production',
    entry:path.resolve(__dirname, 'src/main.js'),
    output:{
        path:path.resolve(__dirname, 'build'),
        filename: 'index.js'
    }
}