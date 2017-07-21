/**
 * gulp 配置文件
 */
var gutil       = require('gulp-util'),
    autoPrefix  = require('less-plugin-autoprefix'),
    path        = require('path');

function pathTo(paths) {
    if (typeof paths === 'string') {
        return path.resolve(__dirname, paths)
    }
    return paths.map(_path => {
        return path.resolve(__dirname, _path)
    })
}

module.exports = {
    path: {
        srcWatch: {
            json: pathTo(['../src/**/*.json']),
            font: pathTo(['../src/font/*.*']),
            html: pathTo(['../src/html/**/*.html']),
            img: pathTo(['../src/img/**/*.*']),
            css: pathTo(['../src/css/**/*.less']),
            js: pathTo(['../src/js/**/*.js', '../src/js/**/*.jsx'])
        },
        srcCompile: {
            json: pathTo(['../src/**/*.json']),
            font: pathTo(['../src/font/*.*']),
            html: pathTo(['../src/html/*.html']),
            img: pathTo(['../src/img/**/*.*']),
            css: pathTo(['../src/css/*.less']),
            js: pathTo(['../src/js/*.js'])
        },
        dist: {
            json: pathTo('../dist'),
            font: pathTo('../dist/font'),
            html: pathTo('../dist/html'),
            img: pathTo('../dist/img'),
            css: pathTo('../dist/css'),
            js: pathTo('../dist/js')
        }
    },

    sourcemaps: {
        init: {
            debug: true
        },
        write: {
            debug: true
        },
        path: path.resolve(__dirname, '../maps')
    },

    less: {
        plugins: [
            new autoPrefix({        // 使用 less 插件补齐浏览器前缀
                browsers: ['last 2 versions']
            })
        ]
    },

    plumberCatch: function(e) {
        gutil.beep();
        gutil.log(e);
    }
}
