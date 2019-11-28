const path = require('path');

module.exports = () => ({
    entry: path.join(__dirname, '../src/App/clientApp/index.js'),
    output: {
        filename: '[chunkhash].js',
    },
});
