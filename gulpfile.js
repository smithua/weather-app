var postcss = require('gulp-postcss'),
    gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    mqpacker = require('css-mqpacker'),
    csswring = require('csswring'),
    sass = require('gulp-sass'),
    uncss = require('gulp-uncss');


gulp.task('sass', function () {
    return gulp.src('./scss/main.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('uncss', function() {
    return gulp.src('./css/*.css')
        .pipe(uncss({
            html: ['index.html', 'http://localhost:5757/']
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('postcss', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 version']}),
        mqpacker,
        csswring
    ];
    return gulp.src('./css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass', 'uncss', 'postcss']);

