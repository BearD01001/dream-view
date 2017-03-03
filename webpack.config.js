var path      = require('path');
var root_path = path.resolve(__dirname);
var src_path  = path.resolve(root_path, 'src/js');
var dist_path = path.resolve(root_path, 'dist/js');

module.exports = {
    entry: path.resolve(src_path, 'tab.jsx'),
    output: {
        path: dist_path,
        filename: 'tab.js'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                include: src_path,
                loader: 'babel'
            }
        ]
    }
}