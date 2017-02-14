/**
 * gulp 配置文件
 */
var gutil       = require('gulp-util'),
    autoprefix  = require('less-plugin-autoprefix');

module.exports = {
    path: {
        src: {
            json: ['src/*.json'],
            html: ['src/html/*.html'],
            css: ['src/css/*.less', '!src/css/_config.less'],
            js: ['src/js/*.js']
        },
        dist: {
            json: 'dist',
            html: 'dist/html',
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
        path: '../_srcmap'
    },

    less: {
        plugins: [
            new autoprefix({        // 使用 less 插件补齐浏览器前缀
                browsers: ['last 2 versions']
            })
        ]
    },

    plumberCatch: function(e) {
        gutil.beep();
        gutil.log(e);
    }
}
