var gulp         = require('gulp'),
    less         = require('gulp-less'),
    babel        = require('gulp-babel'),
    plumber      = require('gulp-plumber'),
    sourcemaps   = require('gulp-sourcemaps');

var CONFIG       = require('./gulpconfig');

gulp.task('json', function() {
    gulp.src(CONFIG.path.src.json)
        .pipe(gulp.dest(CONFIG.path.dist.json));
});

gulp.task('html', function() {
    gulp.src(CONFIG.path.src.html)
        .pipe(gulp.dest(CONFIG.path.dist.html));
});

gulp.task('css', function() {
    gulp.src(CONFIG.path.src.css)
        .pipe(plumber({ errHandler: e => CONFIG.plumberCatch(e) }))
        .pipe(sourcemaps.init(CONFIG.sourcemaps.init))
        .pipe(less(CONFIG.less))
        .pipe(sourcemaps.write(CONFIG.sourcemaps.path, CONFIG.sourcemaps.write))
        .pipe(gulp.dest(CONFIG.path.dist.css));
});

gulp.task('js', function() {
    gulp.src(CONFIG.path.src.js)
        .pipe(plumber({ errHandler: e => CONFIG.plumberCatch(e) }))
        .pipe(sourcemaps.init(CONFIG.sourcemaps.init))
        .pipe(babel())
        .pipe(sourcemaps.write(CONFIG.sourcemaps.path, CONFIG.sourcemaps.write))
        .pipe(gulp.dest(CONFIG.path.dist.js));
});

gulp.task('default', function() {
    gulp.watch(CONFIG.path.src.json, ['json']);
    gulp.watch(CONFIG.path.src.html, ['html']);
    gulp.watch(CONFIG.path.src.css, ['css']);
    gulp.watch(CONFIG.path.src.js, ['js']);
});
