'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
};

exports.buildStyles = buildStyles;
// exports.watch = function () {
//     gulp.watch('./sass/**/*.scss', ['sass']);
// };
gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));

});

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', gulp.parallel('sass'));
});

// gulp.task('default', gulp.parallel('sass', 'watch'));