var gulp         = require('gulp'),
    less         = require('gulp-less'),
    babel        = require('gulp-babel'),
    plumber      = require('gulp-plumber'),
    webpack      = require('gulp-webpack'),
    revAppend    = require('gulp-rev-append'),
    sourcemaps   = require('gulp-sourcemaps');

var CONFIG       = require('./config');
var WEBPACK      = require('./webpack.config');

gulp.task('webpack', function() {
    gulp.src(CONFIG.path.srcCompile.js)
        .pipe(webpack(WEBPACK))
        .pipe(gulp.dest(CONFIG.path.dist.js));
});

gulp.task('html-copy', function() {
    gulp.src(CONFIG.path.srcCompile.html)
        .pipe(gulp.dest(CONFIG.path.dist.html));
});
gulp.task('html-sign', ['html-trans'], function() {
    gulp.src(CONFIG.path.srcCompile.html)
        .pipe(revAppend())
        .pipe(gulp.dest(CONFIG.path.dist.html));
});

gulp.task('html', function() {
    gulp.src(CONFIG.path.srcCompile.html)
        .pipe(gulp.dest(CONFIG.path.dist.html));
});

gulp.task('css', function() {
    gulp.src(CONFIG.path.srcCompile.css)
        .pipe(plumber({ errHandler: e => CONFIG.plumberCatch(e) }))
        .pipe(sourcemaps.init(CONFIG.sourcemaps.init))
        .pipe(less(CONFIG.less))
        .pipe(sourcemaps.write(CONFIG.sourcemaps.path, CONFIG.sourcemaps.write))
        .pipe(gulp.dest(CONFIG.path.dist.css));
});

gulp.task('js', function() {
    gulp.src(CONFIG.path.srcCompile.js)
        .pipe(plumber({ errHandler: e => CONFIG.plumberCatch(e) }))
        .pipe(sourcemaps.init(CONFIG.sourcemaps.init))
        .pipe(babel())
        .pipe(sourcemaps.write(CONFIG.sourcemaps.path, CONFIG.sourcemaps.write))
        .pipe(gulp.dest(CONFIG.path.dist.js));
});

gulp.task('default', function() {
    gulp.watch(CONFIG.path.srcWatch.html, ['html']);
    gulp.watch(CONFIG.path.srcWatch.css, ['css']);
    gulp.watch(CONFIG.path.srcWatch.js, ['js']);
});
