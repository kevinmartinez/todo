var gulp = require('gulp');
var postcss = require('gulp-postcss');
var pxtorem = require('postcss-pxtorem');
var shortColor = require('postcss-short-color');

gulp.task('default', function() {
  // place code for your default task here
  console.log('hello from gulp');
});

gulp.task('css', function () {
  return gulp.src('html/css/*.css')
  .pipe(postcss([shortColor,pxtorem]))
  .pipe(gulp.dest('dist'));
});