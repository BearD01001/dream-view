/**
 * gulp 配置文件
 */
var gutil       = require('gulp-util'),
    autoPrefix  = require('less-plugin-autoprefix'),
    path        = require('path'),
    rootPath    = path.resolve(__dirname);

module.exports = {
    path: {
        srcWatch: {
            json: ['src/**/*.json'],
            html: ['src/html/**/*.html'],
            img: ['src/img/**/*.*'],
            css: ['src/css/**/*.less'],
            js: ['src/js/**/*.js', 'src/js/**/*.jsx']
        },
        srcCompile: {
            json: ['src/**/*.json'],
            html: ['src/html/*.html'],
            img: ['src/img/**/*.*'],
            css: ['src/css/*.less'],
            js: ['src/js/*.js']
        },
        dist: {
            json: 'dist',
            html: 'dist/html',
            img: 'dist/img',
            css: 'dist/css',
            js: 'dist/js'
        }
    },

    sourcemaps: {
        init: {
            debug: true
        },
        write: {
            debug: true
        },
        path: path.resolve(rootPath, '_srcmap')
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
